var introjs;
var typingInterval = 5;
var count = 0;
var iValue = 0;
var spaceCheckflag = true; 
var flag1 = true;

var lengthOfAStringReady = function() {
	introGuide();
	$('#restart').click(function() {
		location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
				showStepNumbers : false,
				exitOnOverlayClick : false,
				showBullets : false,
				exitOnEsc : false,
				keyboardNavigation : false,
				steps : [ {
							element: '#program',
							intro: '',
							position: 'right'
						}, {
							element: '#charDec',
							intro: '',
							position: 'right'
						}, {
							element: '#memory',
							memoryStep: 'tableDefine',
							intro: '',
							tooltipClass: 'hide',
							position: 'left'
						}, {
							element: '#intDec',
							intro: '',
						}, {
							element: '#enterString',
							intro: '',
							tooltipClass: 'hide'	
						}, {
							element: '#output',
							intro: '',
							tooltipClass: 'hide',
							outputStep: 'firstPrint'
						}, {
							element: '#scanf',
							intro: '',
							tooltipClass: 'hide'
						}, {
							element: '#output',
							intro: '',
							outputStep: 'EnterString'
						}, {
							element: '#memory',
							memoryStep: 'spaceFind',
							intro: '',
							tooltipClass: 'hide'
						}, {
							element: '#stringIs',
							intro: '',
							tooltipClass: 'hide'
						}, {
							element: '#output',
							intro: '',
							tooltipClass: 'hide',
							outputStep: 'secondPrint'
						}, {
							element: '#whileCond',
							intro: ''
						}, {
							element: '#stringLength',
							intro: '',
							tooltipClass: 'hide'
						}, {
							element: '#output',
							intro: '',
							tooltipClass: 'hide',
							outputStep: 'lastPrint'
						}, {
							element: '#restart',
							intro: '',
							position: 'right'
						}]
				})
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "program":
			var text = "In this program we will learn how to arrive at the <span class='ct-code-b-yellow'>length</span> of the"
						+ " <span class='ct-code-b-yellow'>string</span> without using the string library functions.";  
			typing('.introjs-tooltiptext', text, function() {
				$('.introjs-nextbutton').show();
			});
			break;
			
		case "charDec":
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This statement declares a <span class='ct-code-b-yellow'>character array</span> of size"
							+ " <span class='ct-code-b-yellow'>20</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "memory":

			$('.introjs-helperLayer ').one('transitionend', function() {
				var memoryStep = introjs._introItems[introjs._currentStep].memoryStep;
				switch(memoryStep) {
				case "tableDefine":
					$("#cup").addClass("opacity00");
					$("#memory").removeClass("opacity00");
					$("#userString td:nth-child(n+2)").remove()
					$("#tableId").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						$("#tableId").removeClass("animated zoomIn");
						$("#userString").removeClass("hide");
						for (var i = 0; i < 20; i++) {
							$("#userString").append("<td class='td-border'></td>");
						}
						/* $("#userString").append("<td><div class='opacity00'></div></td>"); */
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
				});
				break;
					
				case "spaceFind":
					spaceFind();
					$('.introjs-tooltip').removeClass("hide");
					if (spaceCheckflag) {
						var text = "The <span class='ct-code-b-yellow'>cin</span> reads all the characters that are specified"
									+ " in the console in the same sequence.";
					} else {
						var text = "Since you have provided a space only the first sequence of characters before the space is considered is"
									+ " read by the <span class='ct-code-b-yellow'>cin</span>.";
					}
					var text = text + "<br><br>Also note the <span class='ct-code-b-yellow'>delimiter('\\0')</span> character that is automatically"
								+ " appended as the last character that indicates the end of the string in the array.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();					});
					break;
				}
			});
			break;
			
		case "intDec":
			$("#cup").addClass("opacity00");
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "A variable <y>i</y> of type int is declared and initialized to <y>0</y>.";
				typing('.introjs-tooltiptext', text, function() {
					$("#cup").addClass("z-index");
					$(".cup-value").removeClass("opacity00");
					$("#intDec").effect("transfer", {to: $("#cup"), className: "ui-effect-transfer"}, 500, function() {
						$("#cup").removeClass("opacity00");
						changeValue("#iSpan", ".zero", iValue, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			});
			break;
			
		case "enterString":
			$('.introjs-helperLayer ').one('transitionend', function() {
				timeOut();
				/*var text = "Let us print a statement to the console asking the user to provide a string.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});*/
			});
			break;
			
		case "output":
			$('.introjs-tooltip').css({'min-width' : '200px'});
			$('.introjs-helperLayer ').one('transitionend', function() {
				var outputStep = introjs._introItems[introjs._currentStep].outputStep;
				switch(outputStep) {

				case "firstPrint":
					$("#output").removeClass("opacity00");
					$(".firstLine").append('<span id="printString">Enter a string : </span>');
					timeOut();
					break;
					
				case "EnterString":
					var text = "Enter a string.";
					$("#usrText").val("");
					typing('.introjs-tooltiptext', text, function() {
						$(".firstLine").append('<span id="textEnter"><input type="text" class="input" maxlength="19" id ="usrText"></span>');
						$("#usrText").effect("highlight", {color: 'yellow'}, 500);
						$("#usrText").focus();
						events();
					});
					break;
						
				case "secondPrint":
					$(".secondLine").append('<span id="givenString">The entered string is&nbsp;:&nbsp;</span>');
					$.each($("#usrText").val().split(""), function(index, value) {
						if (value.trim() == "") {
							return false;
						}
						$("#givenString").append('<span>' + value + '</span>');
					});
					timeOut();
					break;
					
				case "lastPrint":
					$(".thirdLine").append('<span id="lengthString">The length of the string </span>');
					$.each($("#usrText").val().split(""), function(index, value) {
						if (value.trim() == "") {
							return false;
						}
						$("#lengthString").append('<span class="ct-code-b-yellow">' + value + '</span>');
					});
					$("#lengthString").append('<span id="length"> is : <span class="ct-code-b-yellow">' + count +'</span></span>');
					timeOut();
					break;
				}
			});
			break;
			
		case "scanf":
			$('.introjs-tooltip').css({'min-width' : '300px'});
			$('.introjs-helperLayer ').one('transitionend', function() {
				timeOut();
				/*var text = "The <span class='ct-code-b-yellow'>cin</span> reads multiple characters specified"
							+ " on the console until it encounters a white space.<br><br>"
							+ " The content that is stored into the <span class='ct-code-b-yellow'>ch</span> character array"
							+ " will always have a <span class='ct-code-b-yellow'>'\\0'</span>"
							+ " character at the end specifying the end of the string.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});*/
			});
			break;
			
		case "stringIs":
			$('.introjs-helperLayer ').one('transitionend', function() {
				timeOut();
				/*var text = "The <span class='ct-code-b-yellow'>cout</span> prints all the characters stored in the character array"
							+ " <span class='ct-code-b-yellow'>ch</span> until it encounters the <span class='ct-code-b-yellow'>\\0</span> character.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});*/
			});
			break;
			
		case "whileCond":
			$('.introjs-tooltip').css({'min-width' : '300px'});
			$('.introjs-helperLayer ').one('transitionend', function() {
				//if (count < ($("#usrText").val().length)) {
				if (flag1) {
					var startingText = "Inorder to calculate the string length (the number of characters stored in the character array)"
										+ " we need to count all the characters in the character array untill we encounter the "
										+ "<span class='ct-code-b-yellow'>\\0</span> character"
										+ " which is used to mark the end of the character sequence.<br><br>";
					var text1 = "The condition in the <y>while</y> loop evaluates if the character at the given position <y>i</y> is <y>\\0</y> or not.<br><br>"
					if (($("#usrText").val().charAt(count)) == " " || ($("#usrText").val().charAt(count) == "")) {
						
						var text2 =	"ch[" + count + "] = \\0 and "
									+ "<span class='ct-code-b-yellow'>\\0 != \\0</span><br> condition evaluates to <span class='ct-red'>false</span>"
									+ " and control comes out of the for loop.";
					} else {
						var newStep = getStep('#increment', '', '', '');
						introjs.insertOption(introjs._currentStep + 1, newStep);
						/*var text2 = "ch[" + count + "] = " + $('#usrText').val().charAt(count) + " and "
									+ "<span class='ct-code-b-yellow'>" +  $('#usrText').val().charAt(count) + " != \\0 </span><br>condition"
									+ " evaluates to <span class='ct-code-b-yellow'>true</span> hence control enters in to the loop.";*/
						/*abValues();*/
					}
					if (count == 0) {
						var text = startingText + text1;
					} else {
						//var text = text1 + text2;//whileCond
					}
					typing('.introjs-tooltiptext', text, function() {
						$(".introjs-tooltipbuttons").append("<span class='usr-btn' onclick='abValues();'>Next &rarr;</span>");
						//abValues();
						//$('.introjs-nextbutton').show();
					});
				} else {
					//if (($("#usrText").val().charAt(count)) == " " || ($("#usrText").val().charAt(count) == "")) {
					if ($(".td-border").eq(count + 1).text() == "\\0") {
						
						/*var text2 =	"ch[" + count + "] = \\0 and "
									+ "<span class='ct-code-b-yellow'>\\0 != \\0</span><br> condition evaluates to <span class='ct-red'>false</span>"
									+ " and control comes out of the for loop.";
						timeOut();*/
						
						abValues();
					} else {
						var newStep = getStep('#increment', '', 'hide', '');
						introjs.insertOption(introjs._currentStep + 1, newStep);
						abValues();
					}
				} 
				
			});
			break;
			
		case "increment":
			$('.introjs-tooltip').css({'min-width' : '225px'});
			iValue++;
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (flag1) {
					var text = "Since the character " 
								+ "<y>'" + $('#usrText').val().charAt(count) + "' != \\0 </y> then the <span class='ct-code-b-yellow'>i</span> value will be"
								+ " incremented to <span class='ct-code-b-yellow animate'>" + iValue + "</span>."; 
					typing('.introjs-tooltiptext', text, function () {
						 changeValue("#iSpan", ".animate", iValue, function() {
							var newStep = getStep('#whileCond', '', '', 'right');
							introjs.insertOption(introjs._currentStep + 1, newStep);
							count++;
							flag1 = false;
							$('.introjs-nextbutton').show();
						});
					})
				} else {
					$("#increment").append(" <span class='ct-code-b-yellow animate opacity00'>" + iValue + "</span>");
					var newStep = getStep('#whileCond', '', '', 'right');
					introjs.insertOption(introjs._currentStep + 1, newStep);
					count++;
					changeValue("#iSpan", ".animate", iValue, function() {
						//setTimeout(function() {
							timeOut();
						//}, 600);
					})
				}
			});
			break;
			
		case "stringLength":
			$('.introjs-helperLayer ').one('transitionend', function() {
				/*var text = "The <span class='ct-code-b-yellow'>cout</span> prints the characters stored in the character array"
							+ " <span class='ct-code-b-yellow'>ch</span> prints the count of the characters stored in "
							+"<span class='ct-code-b-yellow'>i</span>";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});*/
				timeOut();
			});
			break;
			
		case "restart":
			$('.introjs-tooltip').css({'min-width' : '200px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				var text = "Click to restart.";
				typing(".introjs-tooltiptext", text);
			});
			break;
		}
	});
	
	introjs.start();
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function getStep(element, intro, tooltipClass, position) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	return step;
}


function spaceFind() {
	$.each($("#usrText").val().split(""), function(index, value) {
		if (value.trim() != "") {
	    	$("#userString td").eq(index + 1).addClass("filled").text(value);
	    } else {
	    	$("#userString td").eq(index + 1).text("\\0");
			return false;
	    }
	});
	
	if ($(".filled").length < 20) {
		$("#userString td").eq($(".filled").length + 1).text("\\0");
	}
}

function events() {
	$("#usrText").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		$('.error-text').remove();
		
		//space bar = 32
		if (e.keyCode == 32) {
			spaceCheckflag = false;
		}
		
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [46, 8, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		
		if (e.keyCode == 13 || e.keyCode === 9) {
			e.preventDefault();
		}
		
		if ($(this).val().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-red error-text'><br/>String length 19.</span>");
			e.preventDefault();
		}
	}); 
	
	$("#usrText").on("keyup", function(e) {
		$('.error-text').remove();
		if ($("#usrText").val().length < 1) {
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		}
	});
}



function abValues() {
	$('.usr-btn').remove();
	$(".introjs-tooltiptext").append("<ul style='list-style-type: none;'><li><div id='aToX' class='display-inline-block relative ct-code-b-yellow'>"
			+ "  <div><div id='tooltipYVal' class='display-inline-block relative'>ch[<div id='tooltipXVal' class='display-inline-block relative'>i</div>]</div>  != '<span>&#92;</span>0';</div>"
			+ " </div></li></ul><div id='ext'></div>");
	var l1 = $("#aToX").offset();
	var l2 = $("#condtn").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenMax.from("#aToX", 1, {top : topLength, left : leftLength, onComplete:function() {
		flipEffectWithTweenMax("#tooltipXVal", count , function() {
			flipEffectWithTweenMax("#tooltipYVal","'" +$(".td-border").eq(count + 1).text() + "'" , function() {
				if(flag1) {
					var text = "Condition evaluates to <span class='ct-code-b-yellow'>true</span> hence control enters in to the loop.";
					typing("#ext", text, function() {
						console.log("In the abValues....");
						$(".introjs-nextbutton").show();
					})
				} else {
					timeOut();
				}
			});
		});
	}});
}


function flipEffectWithTweenMax(selector, val, callBackFunction) {
	console.log("function Entered");
	$(selector).effect( "highlight",{color: 'green'}, 500, function() {
		TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	});
}

function timeOut() {
	
	setTimeout(function() {
		introjs.nextStep();
	}, 800);
	
}

function changeValue(id1, id2, val, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).text()).offset({
	  "top" : l1.top,
	  "left" : l1.left
	});
	//$(id1).addClass("z-index999999");
	TweenMax.to(id1, 1, {top : 0, left : 0, onComplete: function() {
		if(!flag1) {
			$(".animate").remove();
		}
		$(id1).text("" + val + "");
		//$(id1).removeClass("z-index999999");
	  if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}