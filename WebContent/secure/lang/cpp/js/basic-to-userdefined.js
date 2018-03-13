var introjs;
var tl = new TimelineLite();	
var typingSpeed = 1;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;

var basicUserDefinedReadyFun = function() {
	introGuide();
	$("[contenteditable=true]").on("click keydown keyup", function(e) {
		$(".errMsg").remove();
		if ($(this).text() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introjs.refresh();
		
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		} else {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		}
		
		if ($(this).text().indexOf(".") == -1) {
			flag = true;
		} else {
			flag = false;
		}
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39) || (($(this).text().length >= 1) && e.keyCode == 110 && flag)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			e.preventDefault();
		}
		
	});
	$('#restartBtn').click(function() {
		location.reload();
	});
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});
}

var count = 0;
function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 		element : "#topDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#code",
					intro : "",
					position : "right"
				},{
			 		element : "#class",
					intro : "",
					position : "right"
				},{
			 		element : "#constM",
					intro : "",
					position : "right"
				},{
			 		element : "#memoryDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#defaultConst",
					intro : "",
					position : "right"
				},{
			 		element : "#lengthPanel",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#floatX",
					intro : "",
					position : "right"
				},{
			 		element : "#cout1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#cin",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "top"
				},{
			 		element : "#comments",
					intro : "",
					position : "top"
				},{
			 		element : "#paraConst",
					intro : "",
					position : "right"
				},{
			 		element : "#callMethod",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#putdataFun",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#button",
					intro : "",
					position : "right"
				}
			]});
	
introjs.onbeforechange(function(targetElement) {

		
		var elementId = targetElement.id;
		switch (elementId) {
		case "topDiv":
			$("#nextBtn").show();
		break;	
		case "code":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#code").removeClass("opacity00");
			$('.user-btn1').addClass("hide");
			$("#defaultConst").addClass("hide");
		break;
		case "class":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "constM":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#memoryDiv, #mPanel").addClass("opacity00");
		break;
		case "memoryDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "defaultConst":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#lengthPanelVal1").addClass("opacity00");
		break;
		case "lengthPanel":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "floatX":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "cout1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#outputDiv").addClass("opacity00");
		break;
		case "outputDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "cin":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#inputVal").empty();
		break;
		case "outputDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("[contenteditable=false]").attr("contenteditable", "true");
			charAtEnd("inputVal");
		break;
		case "comments":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "paraConst":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "callMethod":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "putdataFun":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('#outputArgsOf2').addClass("opacity00");
		break;
		case "outputDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "button":
			
		break;
		
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		
/*		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 0) {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}*/
		var elementId = targetElement.id;
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		switch (elementId) {
		case "topDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#code").addClass("opacity00");
			$('.user-btn1').removeClass("hide");
			$("#li1, #li2, #nextBtn").hide();
			$("#li1").fadeTo(500, 1, function () {
				$("#li2").fadeTo(500, 1, function () {
					$("#nextBtn").fadeTo(500, 1, function () {
					});
				});
			});
		break;
		case "code":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider sample a C++ program to convert <y>basic</y> to <y>user-defined</y> type.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "class":
			introjs.refresh();
			$("#constM").addClass("hide");
			$("#memoryDiv").addClass("opacity00")
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a class <y>Meter</y> which consists a <b class='monospace'><y>float</y></b> field <b class='monospace'><y>length</y></b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "constM":
			$("#constM").removeClass("hide");
			$("#defaultConst").addClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create an object for class <y>Meter</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "memoryDiv":
			$("#memoryDiv").removeClass("hide");
			$("#defaultConst").addClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-nextbutton').show();
				 $("#memoryDiv").removeClass("opacity00").addClass("z-index");
					$("#mPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#memoryDiv").removeClass("z-index");
						if (introjs._direction == "forward") {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						} else {
							setTimeout(function () {
								introjs.previousStep();
							}, 1000);
						}
					});
				});
		break;
		case "defaultConst":
			$("#defaultConst").removeClass("hide");
			$("#floatX").addClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Whenever an object is created, the <y>default constructor</y> is called immediately.</li>"
				+ "<li>Here the field <y>length</y> is initialized with <y>0</y>.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "lengthPanel":
			$("#lengthPanel").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-nextbutton').show();
					$("#lengthPanelVal1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						if (introjs._direction == "forward") {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						} else {
							setTimeout(function () {
								introjs.previousStep();
							}, 1000);
						}
					});
				});
		break;
		case "floatX":
			$("#floatX").removeClass("hide");
			$("#cout1, #cin").addClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here we are declaring a float variable <y>x</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "cout1":
			$("#cout1").removeClass("hide");
			introjs.refresh();
			$("#outputText").addClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._direction == "forward") {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				} else {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				}
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 9) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$("#cin").addClass("hide");
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputText").removeClass("opacity00");
					if (introjs._direction == "forward") {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					} else {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					}
				});
			} else if (introjs._currentStep == 11) {
				introjs.refresh();
				$("#comments").addClass("hide");
				$("#inputVal").empty();
				$("[contenteditable=false]").attr("contenteditable", "true");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Enter length value.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.refresh();
						charAtEnd("inputVal");
						/*("#inputVal").focus();*/
					});
				});
			} else if (introjs._currentStep == 16) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#body").append("<div>length in meters = <span class='green1'>" + (($("#inputVal").text()) / 100).toFixed(2) + "</span></div>");
					if (introjs._direction == "forward") {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					} else {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					}
				});
			}
		break;
		case "cin":
			$("#cin").removeClass("hide");
			/*$("#inputVal").text("");*/
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>cin</y> will read the input from the inputstream given by the user.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();	
				});
			});
		break;
		case "comments":
			$('.user-btn').remove();
			$("#lengthPanelVal1").text("0");
			$("#paraConst").addClass("hide");
			$("#comments").removeClass("hide");
			$("#mx").removeClass("hide").addClass("yellow");
			introjs.refresh();
			//$("[contenteditable=true]").attr("contenteditable", "false");
			$(".introjs-tooltip").css({"min-width": "300px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li><y>x</y> is a float variable.</li>"
					+ "<li><y>m</y> is an user-defined object of a class Meter.</li>"
					+ "<li><b><y>m = x</y></b> means assign the <y>x</y> value to user defined object <y>m</y>.</li>"
					+ "<li>The basic data type value is assigned to an object by using <y>conversion constructor</y> which is a <y>parameterized constructor</y>"
					+ "  i.e <y>Meter(<b><div id='tooltipXVal' class='display-inline-block relative'>x</div>)</y></b></li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					TweenMax.to("#tooltipXVal", 1, {rotationX : -90, onComplete:function() {
						$("#tooltipXVal").text($("#inputVal").text());
						TweenMax.to("#tooltipXVal", 1, {rotationX : 0, onComplete:function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();	
						}});	
					}});
				});
			});
		break;
		case "paraConst":
			$('.user-btn').remove();
			$("#paraConst").removeClass("hide");
			$("#mx").removeClass("yellow");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>The parameterized constructor <y>Meter(float y)</y> is called when <y>m = x</y> is made.</li>"
					+ "<li>The <y>x</y> value <y>" + $("#inputVal").text() + "</y> is copied into the formal parameter <y>y</y>.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="lengthValue()">Next &#8594;</a>');
				});
			});
		break;
		case "callMethod":
			$('.user-btn').remove();
			$("#callMethod").removeClass("hide");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._direction == "forward") {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				} else {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				}
			});
		break;
		case "putdataFun":
			$("#putdataFun").removeClass("hide");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._direction == "forward") {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				} else {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				}
			});
		break;
		case "button" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn, #closeBtn").removeClass("opacity00");
				var text = "<ul><li>Click on <span class='ct-code-b-yellow'>Close</span> button to close the Live Demo.</li>" +
						"<li>Click on <span class='ct-code-b-yellow'>Restart</span> button to restart the Live Demo.</li></ul>"
									
				typing('.introjs-tooltiptext', text, function() {
					$('#restartBtn').click(function() {
						location.reload();
						
					});

				});
			});
		break;
		}
	});
	
	introjs.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function lengthValue() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append("<ul><li><y><b>length = <div id='tooltipTotalLength' class='display-inline-block relative'>"
			+ " <div id='tooltipYLength' class='display-inline-block relative'>y</div> / 100</div></b></y></li></ul>");
	var l1 = $("#tooltipTotalLength").offset();
	var l2 = $("#lengthInit").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenMax.from("#tooltipTotalLength", 1, {top : topLength, left : leftLength, onComplete:function() {
		TweenMax.to("#tooltipYLength", 0.5, {rotationX : -90, onComplete:function() {
			$("#tooltipYLength").text($("#inputVal").text());
			TweenMax.to("#tooltipYLength", 0.5, {rotationX : 0, onComplete:function() {
				TweenMax.to("#tooltipTotalLength", 0.5, {rotationX : -90, onComplete:function() {
					$("#tooltipTotalLength").text((($("#inputVal").text()) / 100).toFixed(2));
					TweenMax.to("#tooltipTotalLength", 0.5, {rotationX : 0, onComplete:function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="transferValue()">Next &#8594;</a>');
					}});
				}});
			}});
		}});
	}});
}

function transferValue() {
	$('.user-btn').remove();
	$("#lengthPanel").addClass("z-index");
	fromEffectWithTweenMax("#tooltipTotalLength", "#lengthPanelVal1", function() {
		$("#lengthPanel").removeClass("z-index");
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	});	
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			//introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}


function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 1, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: 'yellow'}, 500, function() {
		var l1 = $(selector1).offset();
		$(selector2).text($(selector1).text()).addClass("opacity00");
		$('body').append("<span id='dummy' style='position: relative; z-index: 100000002;"
						+ " font-family: monospace; color: red' ><b>" + $(selector2).text() + "</b></span>");
		$('#dummy').offset({
		  'top': l1.top,
		  'left': l1.left
		});
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = parseInt($('#dummy').css('top')) - (l1.top - l2.top);
		var leftLength = parseInt($('#dummy').css('left')) - (l1.left - l2.left);
		TweenMax.to('#dummy', 0.8, {top: topLength, left: leftLength, onComplete: function () {
			$(selector2).removeClass('opacity00');
			$(selector1).removeClass('z-index1000000');
			$("#dummy").remove();
			$("#animationDiv").removeAttr("style").addClass("introjs-showElement");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	});
}

function getStep(element, intro, position, tooltipClass) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	
	return step;
}