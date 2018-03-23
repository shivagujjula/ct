
var intArr = [];
	var i = 0;
	var animationArrayCount = 1;
	var count = 1;
	var introjs;
	var index = 0;
	var tl = new TimelineLite();
	var typingSpeed = 30;
	
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
	
	
	function typing(id, content, callBackFunction) {
		$('.introjs-nextbutton').addClass('opacity00');
		$(id).typewriting( content , {
			"typing_interval": typingSpeed,
			"cursor_color": 'white',
		}, function () {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	function animateArray(index) {
		$('#new_array_initialization').effect("transfer", { to: $("#arrayTr > td:nth-child(" + (index + 1) + ")"), className: "ui-effects-transfer" }, 1000, function () {
			$('#arrayTr > td:nth-child(' + ( index + 1 )+ ')').addClass('td-border');
			if(index < 4) {
				animateArray(index + 1);
			} else {
				$('.index').css('opacity', '1');
				$('#indexTr > td:first-child > span').removeClass("opacity00");
				tl.from('.index', 0.8, {top : -150, onComplete: function () {
					$('.introjs-nextbutton').removeClass('opacity00');
				}});
			}
		});
	}
	function repeateForLoopAction() {
		 $('#output div:last-child').fadeTo(1800, 1, function () {
			 	$(this).removeClass('opacity00');
				introjs.goToStep(8);
			if (i < intArr.length - 1) {
				$('.introjs-nextbutton').addClass('opacity00').addClass('hidden');
				$('.continueBtn').removeClass('hidden').addClass('opacity00');
				$('.FinishBtn').removeClass('hidden').addClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function () {
					animateCupValue(i + 1);
				});
			} else {
				$('.introjs-nextbutton').addClass('opacity00');
				$('.continueBtn').addClass('hidden');
				$('.FinishBtn').removeClass('hidden');
			} 
			i++;
		});
	}
	function animateCupValue(fromIndex) {
		var l1 = $('.arrow').offset();
		var l2 = $('#arrowTd' + fromIndex).offset();
		topLength = l2.top - l1.top - 8;
		leftLength = l2.left - l1.left - 6;
		$('.arrow').removeClass('opacity00');
		TweenMax.to('.arrow', 1, {top:"+=" + topLength, left: "+=" + leftLength, onComplete: function() {
			$('#td' + fromIndex).parent().effect("highlight", {color: '#003399'}, 500, function () {
				$('#td' + fromIndex).parent().append("<span id='inner-value"+ fromIndex +"'>" + $('#td' + fromIndex).text() + "</span>");
				$('#td' + fromIndex).removeClass("position-relative").addClass("position-absolute").css({"top" : "" , "left" : ""});
				var l1 = $('#td' + fromIndex).offset();
				var l2 = $('#cupValue').offset();
				var topLength = l2.top-l1.top;
				var leftLength = l2.left-l1.left;
					TweenLite.to('#td' + fromIndex, 1, {top : "+=" + topLength, left: "+=" + leftLength, onComplete : function() {
						$('#cupValue').text($('#td' + fromIndex).text()).removeClass('opacity00');
						$('#td' + fromIndex).remove();
						$('.introjs-nextbutton').removeClass("opacity00");
						$('.continueBtn').removeClass('opacity00');
						$('.FinishBtn').removeClass('opacity00');
					}});
					TweenLite.to($('#cupValue'), 0.2, {css:{opacity:"0"}, onComplete:function() {
						$('#cupValue').css("opacity", "1");
					}, delay: 0.8});
			});
		}});
	}
	
	function InitializeValues() {
		var l3 = $("#intArr_" + count + " span:first-child").offset();
		var l = $('#indexTr > td:nth-child(' + (count + 1 ) + ') > span:first-child').offset();
		$("#innerIndex" + count).offset({left:l.left, top: l.top}).text(count - 1);
		$('#indexTr > td:nth-child(' + (count + 1 )+ ') > span:first-child').offset({top : l3.top, left : l3.left});
		TweenMax.to($('#indexTr > td:nth-child(' + (count + 1 )+ ') > span:first-child'), 0.5, {css:{borderRadius:"50%", border : "2px solid blue", padding:"2px 2px"}});
		setTimeout(function() {
			TweenMax.to($('#indexTr > td:nth-child(' + (count + 1 )+ ') > span:first-child'), 1, {top : 0, left : 2, onComplete : function () {
				$('#indexTr > td:nth-child(' + (count + 1 )+ ') > span');
				$("#innerIndex" + count).remove();
				var l1 = $('#value' + count).offset();
				var l2 = $('#td' + count).offset();
				var topLength = l1.top-l2.top;
				var leftLength = l1.left-l2.left;
				intArr.push($('#value' + count).text());
				$('#td' + count).text($('#value' + count).text()).removeClass("opacity00").addClass('z-index');
				TweenLite.from('#td' + count, 1, {top: topLength, left: leftLength, onComplete: function() {
					$('#td' + count).removeClass('z-index');
					$('#arrayTr > td:nth-child(' + (count + 1 )+ ')').effect("highlight", {color: '#003399'}, 500, function () {
						$('#indexTr > td:nth-child(' + (count + 1 )+ ') > span').css("border","");
						$('.introjs-nextbutton').removeClass("opacity00").click();
						count++;
						if ($('#syntax').hasClass('introjs-showElement')) {
							$('.initializeBtn').hide();
							$('.introjs-nextbutton').removeClass("opacity00");
						}
					});
				}});
			}});
		}, 600);
	}
	
	function introJsGuide() {
		introjs = introJs();
		introjs.setOptions({
			steps : [ {
				element : '#forloop',
				intro : "The code demonstrates the working of <b class='ct-code-b-yellow'>for-each</b> loop.",
				position : 'bottom'
			}, {
				element : '#array_initialize',
				intro : "",
				position : 'bottom'
			}, {
				element : '#intArr_1',
				intro : "",
				position : 'bottom'
			}, {
				element : '#intArr_2',
				intro : "",
				position : 'bottom'
			}, {
				element : '#intArr_3',
				intro : "",	
				position : 'bottom'
			},  {
				element : '#intArr_4',
				intro : "",
				position : 'bottom'
			}, {
				element : '#syntax',
				intro : "The <b class='ct-code-b-yellow'>for-each</b> statement initializes the " 
						+ "<b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>val</b> " 
						+ "with every element in the array in the sequential order and executes its body.",
				position : 'bottom'
			}, {
				element : '#condition',
				intro : "Variable <b class='ct-code-b-yellow'>val</b> is being initialized with element " 
						+ "at index: <b class='ct-code-b-yellow'>" + (index++) + "</b>.",
				position : 'bottom'
			}, {
				element : '#body_of_loop',
				intro : "The above statement prints the value of <b class='ct-code-b-yellow'>val</b>.",
				position : 'bottom'
			}, {
				element : '#outputDiv',
				tooltipClass : 'hide'
			}, {
				element : '#mainEnd',
				intro : "",
				position : 'right',
			}, {
				element : "#button",
				intro : "<ul><li>Click on <span class='ct-code-b-yellow'>Close</span> button to close the Live Demo.</li>" +
					"<li>Click on <span class='ct-code-b-yellow'>Restart</span> button to restart the Live Demo.</li></ul>",
				position : 'right',
			}]
		});

		introjs.setOption('showStepNumbers', false);
		introjs.setOption('exitOnOverlayClick', false);
		introjs.setOption('exitOnEsc', false);
		introjs.setOption('keyboardNavigation', false);
		introjs.start();
		console.log(introjs);

		$('.introjs-nextbutton').show();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
		$(".introjs-tooltipbuttons").append("<a class='introjs-button declareBtn hidden'>Next &#8594;</a>");
		$(".introjs-tooltipbuttons").append("<a class='introjs-button initializeBtn hidden'>Next &#8594;</a>");
		$(".introjs-tooltipbuttons").append("<a class='introjs-button initializeCup hidden'>Next &#8594;</a>");
		$(".introjs-tooltipbuttons").append("<a class='introjs-button FinishBtn hidden'>Finish</a>");
		$(".introjs-tooltipbuttons").append("<a class='introjs-button continueBtn hidden'>Next &#8594;</a>");
		
		introjs.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "array_initialize":
				$('.introjs-nextbutton').addClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function () {
					
					var text = "In this statement we are declaring an <b class='ct-code-b-yellow'>array</b> of " 
								+ "<b class='ct-code-b-yellow'>size 4</b>."
								+ "<br>Array is <b class='ct-code-b-yellow'>zero-index</b> based. " 
								+ "Meaning the <b class='ct-code-b-yellow'>first</b> element" 
								+ " is stored at index <b class='ct-code-b-yellow'>0</b>, <b class='ct-code-b-yellow'>second</b> element " 
								+ " at <b class='ct-code-b-yellow'>1</b> and "
								+ "so on.<br/><br/><b>Note:</b> We will learn more about Arrays in much detail in later sections."
					
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').addClass('opacity00');
						$(".declareBtn").removeClass("hidden");
					});
				});
				break;
			case "intArr_1":
				$('.introjs-nextbutton').addClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#value1").attr("contenteditable", true);
					
					var text = "The above statement stores the value <b class='ct-code-b-yellow changeVal'>34</b> at index " 
								+ "<b class='ct-code-b-yellow'>0</b> in the array. " 
								+ "<br/><br/>Feel free to change the value <b class='changeVal ct-code-b-yellow'>34</b> to any " 
								+ "other value of your choice. " 
								+ "<br/><span class='errorText'></span>";
					
					typing(".introjs-tooltiptext", text, function() {
						charAtEnd("value1");
						$(".initializeBtn").removeClass("hidden");	
					})
					
					
					
					
				});
				break;
			
			
			case "intArr_2":
				$('.introjs-nextbutton').addClass("opacity00");
				$('.introjs-tooltip').one('transitionend', function () {
					$("#value2").attr("contenteditable", true);
					
					var text = "The above statement stores the value <b class='ct-code-b-yellow changeVal'>32</b> at index " 
								+ "<b class='ct-code-b-yellow'>1</b> in the array. " 
								+ "<br/><br/>The value <b class='changeVal ct-code-b-yellow'>32</b> can be changed to any " 
								+ "other value of your choice." 
								+ "<br/><span class='errorText'></span>";
					typing(".introjs-tooltiptext", text, function() {
						charAtEnd("value2");
						$(".initializeBtn").removeClass("hidden");
					});
				});
				break;
				
			case "intArr_3":
				$('.introjs-nextbutton').addClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#value3").attr("contenteditable", true);
					var text = "The above statement stores the value <b class='ct-code-b-yellow changeVal'>74</b> at index " 
							+ "<b class='ct-code-b-yellow'>2</b> in the array." 
							+ "<br/><br/>The value <b class='changeVal ct-code-b-yellow'>74</b> can be changed to any " 
							+ "other value of your choice." 
							+ "<br/><span class='errorText'></span>";
							
			
					typing(".introjs-tooltiptext", text, function() {
						charAtEnd("value3");
						$(".initializeBtn").removeClass("hidden");	
					});
				});
				break;
			
			case "intArr_4":
				$('.introjs-nextbutton').addClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#value4").attr("contenteditable", true);
					var text = "The above statement stores the value <b class='ct-code-b-yellow changeVal'>27</b> at index " 
								+ "<b class='ct-code-b-yellow'>3</b> in the array. " 
								+ "<br/><br/>The value <b class='changeVal ct-code-b-yellow'>27</b> can be changed to " 
								+ "any other value of your choice." 
								+ " <br/><span class='errorText'></span>";
		
					typing(".introjs-tooltiptext", text, function() {
						charAtEnd("value4");
						$(".initializeBtn").removeClass("hidden");	
					});
				});
				break;
			case "syntax":
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.initializeBtn').hide();
				});
				break;
			case "condition":
				$('.introjs-nextbutton').addClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.initializeBtn').addClass('hidden');
					$('.introjs-nextbutton').addClass('hidden');
					$('.initializeCup').removeClass('hidden');
				});
				break;
				
			case "body_of_loop":
				$('.introjs-nextbutton').addClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function () {
					$('#output').append("<div class='opacity00'>val : " + intArr[i] + " </div>");
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				});
				break;
			case "outputDiv":
				$('.introjs-helperLayer').one('transitionend', function () {
					var indexVal = (index < 3) ? index++ : index;
					introjs._introItems[7].intro = "Variable <b class='ct-code-b-yellow'>val</b> is being initialized with element " 
													+ "at index: <b class='ct-code-b-yellow'> " + indexVal + "</b>.";
					repeateForLoopAction();
				});
				break;
				
			case "mainEnd" :
				$('.introjs-nextbutton').addClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function () {
					var text = "The control comes out of <b class='ct-code-b-yellow'>for-each</b> loop and the program terminates.";
					
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").removeClass("opacity00");
					});
					
				});
				break;
			case "button":
				$(".introjs-tooltip").css("min-width","380px");
				$(".introjs-tooltipbuttons").hide()
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#restartBtn, #closeBtn").removeClass("opacity00");
				});
				break;
			}
		});
	}

var forEachLoopReady = function() {

	introJsGuide();
	$(".allowNumbers").keydown(function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($(this).text().length > max) {
			e.preventDefault();
		}
	});
	
	$("body").keydown(function(e){
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	$(".allowNumbers").parent().click(function() {
		$(".allowNumbers").focus();
	});
	
	$(".allowNumbers").keyup(function() {
		introjs.refresh();
		$('.changeVal').text($(this).text());
		
	if ($(this).text().length > 0) {
		$('.errorText').empty();
		$(".initializeBtn").removeClass("opacity00");
	} else {
		$(".initializeBtn").addClass("opacity00");
		$('.errorText').html("Please initialize a value.");
	}
		
		
	});
	
	$('.declareBtn').click(function() {
		$('.bgcolor-cream').removeClass('opacity00');
		$(this).hide();
		$('.introjs-nextbutton').show().addClass('opacity00');
		var l1 = $('#intArr').offset();
		$('#td0').offset({top : l1.top, left : l1.left});
		$('#td0').removeClass("opacity00").addClass('z-index');
		TweenLite.to('#td0', 1, {top : 0, left : 0, onComplete: function() {
			$('#td0').removeClass('z-index');
			animateArray(1);
		}, delay : 0.5 });
	});
	
	$('.initializeBtn').click(function() {
		$(this).addClass('hidden');
		$("#value" + count).attr("contenteditable", false);
		InitializeValues();
	});
	
	$('.initializeCup').click(function() {
		$(this).remove();
		$('.introjs-nextbutton').removeClass('hidden').addClass("opacity00");
		
		var l = $('#testCupPosition').offset();
		$('.cup-bg').offset({top : l.top, left : l.left})
		$('.cup-bg').fadeTo(500, 1, function() {
			animateCupValue(1);
		});
	});
	
	$('.continueBtn').click(function() {
		$(this).addClass('hidden');
		$('.FinishBtn').addClass('hidden');
		introjs.nextStep();
	});
	
	$("#restartBtn").click(function() {
		location.reload(true);
	});
	$('#closeBtn').click(function() {
		window.parent.$(".ui-dialog-titlebar-close").click();
	});
	
	$('.FinishBtn').click(function() {
		$(this).hide();
		$('.continueBtn').hide();
		for (var k = i; k < intArr.length; k++, i++) {
			$('#output').append("<div>val : " + intArr[i] + " </div>");
		}
		$('#cupValue').text(intArr[3]);
		var l1 = $('.arrow').offset();
		var l2 = $('#arrowTd4').offset();
		topLength = l2.top - l1.top - 8;
		leftLength = l2.left - l1.left - 6;
		$('.arrow').removeClass('opacity00');
		TweenMax.to('.arrow', 1, {top:"+=" + topLength, left: "+=" + leftLength});
		introjs.goToStep(11);	
	});
	
	setInterval(function() {
		if ($('#cupValue').text().length == 1) {
			$('#cupValue').css('left', '11px');
		} else if ($('#cupValue').text().length == 2) {
			$('#cupValue').css('left', '8px');				
		} else  if($('#cupValue').text().length == 3) {
			$('#cupValue').css('left', '5px');
		}
	}, 50);
}