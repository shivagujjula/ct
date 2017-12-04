var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
var commandLineArgumentsInActionReady = function() {
	introGuide();

	$('#restart').click(function() {
		location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#startBtn",
			intro : "Click to Start",
			position : "right"
		},{
			element : "#commandLine",
			intro : "",
			position : "bottom"
		},{
			element : "#className",
			intro : "",
			position : "bottom"
		},{
			element : "#commandLineValues",
			intro : "",
			position : "#bottom",
		},{
			element : "#argsLine",
			intro : "",
			position : "bottom",
		},{
			element : "#animationBox",
			position : "top",
			tooltipClass : "hide"
		},{
			element : "#sopArgsLength",
			intro : "",
			position : "bottom"
		},{
			element : "#animationBox",
			tooltipClass : "hide"
		},{
			element : "#outputDiv",
			tooltipClass : "hide"
		},{
			element : "#sopAgrsOf0",
			intro : "",
			position : "bottom"
		},{
			element : "#animationBox",
			tooltipClass : "hide"
		},{
			element : "#outputDiv",
			tooltipClass : "hide"
		},
		{
			element : "#sopAgrsOf1",
			intro : "",
			position : "bottom"
		},{
			element : "#animationBox",
			tooltipClass : "hide"
		},{
			element : "#outputDiv",
			tooltipClass : "hide"
		},{
			element : "#sopAgrsOf2",
			intro : "",
			position : "bottom"
		},{
			element : "#animationBox",
			tooltipClass : "hide"
		},{
			element : "#outputDiv",
			tooltipClass : "hide"
		},{
			element : "#mainMethodCloseBrace",
			tooltipClass : "hide"
		},{
			element : "#restartBtn",
			intro : "Click to Restart",
			position : "right"
		}
		]});
	
	introjs.onbeforechange(function(targetElement) {

		
		var elementId = targetElement.id;
		switch (elementId) {
		case "startBtn":
			
		break;	
		case "commandLine":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "className":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "commandLineValues":
			
		break;
		case "argsLine":
			/*$("table tr").eq(1).addClass("opacity00");*/
			$("#td0, #td1, #td2, #tdValue0, #tdValue1, #tdValue2").addClass("opacity00").removeClass('td-border');
		break;
		case "animationBox":
			//$("#td0, #td1, #td2").addClass("opacity00").removeClass('td-border');
			//animateArrayWith(0);
		break;
		case "sopArgsLength":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('#outputArgsLength').addClass("opacity00");
		break;
		case "animationBox":
			
		break;
		case "outputDiv":
			
		break;
		case "sopAgrsOf0":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('#outputArgsOf0').addClass("opacity00");
		break;
		case "animationBox":
			
		break;
		case "outputDiv":
			
		break;
		case "sopAgrsOf1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('#outputArgsOf1').addClass("opacity00");
		break;
		case "animationBox":
			
		break;
		case "outputDiv":
			
		break;
		case "sopAgrsOf2":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('#outputArgsOf2').addClass("opacity00");
		break;
		case "animationBox":
			
		break;
		case "outputDiv":
			
		break;
		case "mainMethodCloseBrace":
			
		break;
		case "restartBtn":
			
		break;
		
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 1) {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		var elementId = targetElement.id;
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		switch (elementId) {
		case "startBtn":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#startBtn").click(function() {
				$(this).addClass('hidden');
				$('#restartBtn').addClass('visibility-hidden').removeClass('hidden');
				introjs.nextStep();
			});
			
		break;
		case "commandLine":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$('.introjs-tooltip').removeClass('hide');
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Java program is executed using the <span class='ct-code-b-yellow'>java</span> command followed by class name.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "className":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$('.introjs-tooltip').removeClass('hide');
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The class name should match the case as given in the source code.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "commandLineValues":
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		introjs.refresh();
		$('.introjs-tooltip').removeClass('hide');
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "<ul><li>Arguments are provided after the class name in the command line.</li>"
					+ "<li>Arguments are always interpreted as strings.</li><li>Each argument must be separated by a space.</li></ul><br>"
					+ " We have 3 arguments in this line.";
			typing($(".introjs-tooltiptext"), text, function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
		});
		break;
		case "argsLine":
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		introjs.refresh();
		$('.introjs-tooltip').removeClass('hide');
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "<ul><li>JVM automatically creates a String array with all the arguments provided.</li>"
					+ "<li>They can be accessed using the reference <span class='ct-code-b-yellow'>args</span>.</li></ul>";
			typing($(".introjs-tooltiptext"), text, function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
		});
		break;
		case "animationBox":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			if (introjs._currentStep == 5) {
				introjs.refresh();
				$('.introjs-tooltip').removeClass('hide');
				$(".introjs-helperLayer").one("transitionend", function() {
					if (introjs._direction == "forward") {
						setTimeout(function () {
							animateArrayWith(0);
						}, 1400);
					} else {
						setTimeout(function () {
							introjs.previousStep();
						}, 1400);
					}
				});
			} else if (introjs._currentStep == 7) {
				if (introjs._direction == "forward") {
					setTimeout(function () {
						animateLengthWith(0);
					}, 1400);
				} else {
					setTimeout(function () {
						introjs.previousStep();
					}, 1400);
				}
			} else if (introjs._currentStep == 10) {
				if (introjs._direction == "forward") {
					setTimeout(function () {
						animateArrayIndexWith(0);
					}, 1400);
				} else {
					setTimeout(function () {
						introjs.previousStep();
					}, 1400);
				}
			} else if (introjs._currentStep == 13) {
				$('.introjs-nextbutton').hide();
				if (introjs._direction == "forward") {
					setTimeout(function () {
						animateArrayIndexWith(1);
					}, 1400);
				} else {
					setTimeout(function () {
						introjs.previousStep();
					}, 1400);
				}
			} else if (introjs._currentStep == 16) {
				$('.introjs-nextbutton').hide();
				if (introjs._direction == "forward") {
					setTimeout(function () {
						animateArrayIndexWith(2);
					}, 1400);
				} else {
					setTimeout(function () {
						introjs.previousStep();
					}, 1400);
				}
			}
		break;
		case "sopArgsLength":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>This statement prints the length of the array referenced by <span class='ct-code-b-yellow'>args</span>.</li>"
						+ "<li><span class='ct-code-b-yellow'>args.length</span> will return the size of the array.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "outputDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			if (introjs._currentStep == 8) {
				introjs.refresh();
				$('.introjs-tooltip').removeClass('hide');
				$(".introjs-helperLayer").one("transitionend", function() {
					if (introjs._direction == "forward") {
						setTimeout(function () {
							//animateArrayIndexWith(0);
						}, 1000);
					} else {
						setTimeout(function () {
							introjs.previousStep();
						}, 1300);
					}
				});
			} else if (introjs._currentStep == 11) {
				introjs.refresh();
				$('.introjs-tooltip').removeClass('hide');
				$(".introjs-helperLayer").one("transitionend", function() {
					if (introjs._direction == "forward") {
						setTimeout(function () {
							//animateArrayIndexWith(1);
						}, 1000);
					} else {
						setTimeout(function () {
							introjs.previousStep();
						}, 1300);
					}
				});
			} else if (introjs._currentStep == 14) {
				introjs.refresh();
				$('.introjs-tooltip').removeClass('hide');
				$(".introjs-helperLayer").one("transitionend", function() {
					if (introjs._direction == "forward") {
						setTimeout(function () {
							//animateArrayIndexWith(2);
						}, 1000);
					} else {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					}
				});
			}
		break;
		case "sopAgrsOf0":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>In Java arrays elements are stored from <span class='ct-code-b-yellow'>zero</span> index. It means that the first element is "
						+ " accessed with index <span class='ct-code-b-yellow'>0</span>, second with index <span class='ct-code-b-yellow'>1</span> and so on.</li>"
							+ "<li>The above statement accesses the element present at index <span class='ct-code-b-yellow'>0</span> in the String array referenced "
							+ " by <span class='ct-code-b-yellow'>args</span>.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "sopAgrsOf1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The above statement accesses the element present at index <span class='ct-code-b-yellow'>1</span> in the String array referenced by "
						+ " <span class='ct-code-b-yellow'>args</span>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "sopAgrsOf2":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The above statement accesses the element present at index <span class='ct-code-b-yellow'>2</span> in the String array referenced by "
						+ " <span class='ct-code-b-yellow'>args</span>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "restart":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "115px"});
			$('#restartBtn').removeClass("opacity00").css({"opacity":1});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart.";
				typing($(".introjs-tooltiptext"), text, function() {
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

function animateArrayWith(index) {
	$('.introjs-prevbutton').hide();
	$("#value" + index).effect( "transfer", { to: $("#td" + index), className: "ui-effects-transfer" }, 1000, function() {
		$("#td" + index).removeClass("opacity00");
		$('#td' + index).addClass('td-border');
		if (index < 2) {
			animateArrayWith(index + 1);
		} else {
			$('.introjs-tooltip').removeClass('hide');
			$('.introjs-tooltiptext').addClass('height-width');
			$('.introjs-tooltiptext').typewriting("An array of size <span class='ct-code-b-yellow'>3</span> is created for storing the <span class='ct-code-b-yellow'>3</span> arguments.", {
				"typing_interval": 30,
				"cursor_color": 'white'
				}, function() {
					$('.introjs-tooltiptext').removeClass('typingCursor');
					$('.introjs-tooltiptext').removeClass('height-width');
					animateValueWith(0);
				});
		}
	});
}

function animateValueWith(index) {
	$('#tdValue' + index).removeClass('opacity00');
	var l1 = $('#value' + index).offset();
	var l2 = $('#tdValue' + index).offset();
	var topLength = l1.top-l2.top;
	var leftLength = l1.left-l2.left;
	TweenLite.from($('#tdValue' + index), 2, {top: topLength, left: leftLength, onComplete: function() {
		if (index < 2) {
			animateValueWith(index + 1);
		} else {
			introjs.nextStep();
			$('.introjs-nextbutton').show();
		}
	}});
}

function animateLengthWith(index) {
	$('#td' + index).effect("highlight", {color: '#003399'}, 1300);
	$('#tdLength' + index).fadeTo(1300, 1, function() {
		if (index < 2) {
			animateLengthWith(index + 1);
		} else {
			introjs.nextStep();
			setTimeout(function() {
				$('#outputArgsLength').removeClass("opacity00");
				$('#outputArgsLength').typewriting("args.length : 3", {
					"typing_interval": 100,
					"cursor_color": 'white'
					}, function() {
						$('#outputArgsLength').removeClass('typingCursor');
						setTimeout(function() {
							introjs.nextStep();
							$('.introjs-nextbutton').show();
							$('#tdLength0').addClass('visibility-hidden');
							$('#tdLength1').addClass('visibility-hidden');
							$('#tdLength2').addClass('visibility-hidden');
						}, 1300);
					});
			}, 1300);
		}
	});
}

function animateArrayIndexWith(index) {
	var l1 = $('#args' + index).offset();
	var l2 = $('#tdIndex' + index).offset();
	var topLength = l1.top-l2.top;
	var leftLength = l1.left-l2.left;
	$('#args' + index).addClass('args-circle');
	$('#args' + index).effect("highlight", {color: '#FFFFFF'}, 1000, function() {
		$('#args' + index).removeClass('args-circle');
		$('#tdIndex' + index).removeClass('opacity00');
		TweenLite.from($('#tdIndex' + index), 2, {top: topLength, left: leftLength, onComplete: function() {
			$('#td' + index).effect("highlight", {color: '#003399'}, 1300, function() {
				introjs.nextStep();
				setTimeout(function() {
					$('#outputArgsOf' + index).removeClass("opacity00");
					$('#outputArgsOf' + index).typewriting("args[" + index + "] : " + $('#tdValue' + index).text(), {
						"typing_interval": 100,
						"cursor_color": 'white'
						}, function() {
							$('#outputArgsOf' + index).removeClass('typingCursor');
							setTimeout(function() {
								introjs.nextStep();
								$('#tdIndex' + index).addClass('opacity00');
								if (introjs._currentStep == 18) {
									setTimeout(function() {
									introjs.nextStep();
									$('#restartBtn').removeClass('visibility-hidden');
								}, 2600);
								} else {
									$('.introjs-nextbutton').show();
								}
							}, 1300);
						});
				}, 1300);
			});
		}});

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
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
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