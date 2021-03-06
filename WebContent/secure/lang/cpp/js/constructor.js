var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;

var constructorReadyFun = function() {
	introGuide();
	$('#restartBtn').click(function() {
		location.reload();
	});
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});

	$(".validate").on("click keydown keyup", function(e) {
		$(".errMsg").remove();
		if ($(this).text() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introjs.refresh();
		
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
		
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			//$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 2 digits only</div>")
			e.preventDefault();
		}
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
		steps : [{
			 		element : "#topDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#code",
					intro : "",
					position : "right"
				},{
			 		element : "#callDefaultConst",
					intro : "",
					position : "right"
				},{
			 		element : "#memoryDiv",
					intro : "",
					position : "right"
				},{
			 		element : "#defaultConst",
					intro : "",
					position : "bottom"
				},{
			 		element : "#callMethod1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#displayMethod",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#callParameterConst",
					intro : "",
					position : "right"
				},{
			 		element : "#parameterConst",
					intro : "",
					position : "bottom"
				},{
			 		element : "#callMethod2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#displayMethod",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#callCopyConst",
					intro : "",
					position : "top"
				},{
			 		element : "#copyConst",
					intro : "",
					position : "right"
				},{
			 		element : "#callMethod3",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#displayMethod",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				} ,{
			 		element : "#button",
					intro : "",
					position : "right"
				}
			]});
	
introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "topDiv":
			
		break;	
		case "code":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#code").removeClass("opacity00");
			$('.user-btn').addClass("hide");
		break;
		case "callDefaultConst":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "memoryDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "defaultConst":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "callMethod1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "displayMethod":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			
		break;
		case "outputDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "callParameterConst":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#a2Panel, #b2Panel").addClass("opacity00");
		break;
		case "parameterConst":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "callMethod2":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "displayMethod":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			//$("#s2Panel").addClass("opacity00");
		break;
		case "outputDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "callCopyConst":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "copyConst":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "callMethod3":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "callCopyConst":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "displayMethod":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "outputDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "button":
			
		break;
		
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		switch (elementId) {
		case "topDiv":
			$('.user-btn').removeClass("hide");
			$("#code").addClass("opacity00");
			introjs.refresh();
			$("#li1").fadeTo(500, 1, function () {
				$("#li2").fadeTo(500, 1, function () {
					$("#li3").fadeTo(500, 1, function () {
					});
				});
			});
		break;
		case "code":
			$("#code").removeClass("opacity00");
			$('.user-btn').addClass("hide");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider a sample C++ program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "callDefaultConst":
			$("#callDefaultConst").removeClass("hide");
			$("#memoryDiv, #s1Panel").addClass("opacity00");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a object for class <y>Sample</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "memoryDiv":
			$("#memoryDiv").removeClass("opacity00");
			$("#a1Panel, #b1Panel").addClass("opacity00");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Memory allocates for object <y>s1</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#s1Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});	
				});
			});
		break;
		case "defaultConst":
			$("#defaultConst").removeClass("hide");
			$("#a1Panel, #b1Panel").addClass("opacity00");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "After creating an object immediately the default constructor will call.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#memoryDiv").addClass("z-index");
					$("#a1Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
					$("#b1Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#memoryDiv").removeClass("z-index");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
					});
				});
			});
		break;
		case "callMethod1":
			$("#callMethod1").removeClass("hide");
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
		case "displayMethod":
			if (introjs._currentStep == 6) {
				$("#op1").addClass("opacity00");
				$("#displayMethod").removeClass("hide");
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This function will print the result on the console.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			} else if (introjs._currentStep == 11) {
				$("#op2").addClass("opacity00");
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This function will print the result on the console.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			}  else if (introjs._currentStep == 16) {
				introjs.refresh();
				//$("#s3Panel").addClass("opacity00");
				$("#op3").addClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This function will print the result on the console.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			}
		break;
		case "outputDiv":
			if (introjs._currentStep == 7) {
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					//$("#body").append("<div id='op1'>Given values: 5 10</div>");
					$("#op1").removeClass("opacity00");
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
			} else if (introjs._currentStep == 12) {
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					//$("#body > div:last-child").append("<div id='op2'>Given values: 10 20</div>");
					$("#s3Panel").addClass("opacity00");
					$("#op2").removeClass("opacity00");
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
			} else if (introjs._currentStep == 17) {
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					//$("#body > div:last-child").append("<div id='op3'>Given values: 10 20</div>");
					$("#op3").removeClass("opacity00");
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
		case "callParameterConst":
			$("#callParameterConst").removeClass("hide");
			$("#s2Panel").addClass("opacity00");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is parameterized constructor.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#memoryDiv").addClass("z-index");
					$("#s2Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#memoryDiv").removeClass("z-index");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});	
				});
			});
		break;
		case "parameterConst":
			$("#parameterConst").removeClass("hide");
			$("#a2Panel, #b2Panel").addClass("opacity00");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "After creating an object immediately the parameter constructor will call. And variables a, b created in the memory."
				+ " And the result will print on the console.<br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='aToX' class='display-inline-block relative ct-code-b-yellow'>"
							+ "  a = <div id='tooltipXVal' class='display-inline-block relative'>x</div>;<br>"
							+ " b = <div id='tooltipYVal' class='display-inline-block relative'>y</div>;</div>");
					var l1 = $("#aToX").offset();
					var l2 = $("#xAndY").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#aToX", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipXVal", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipXVal").text($("#s1Val1").text());
							TweenMax.to("#tooltipXVal", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#tooltipYVal", 0.5, {rotationX : -90, onComplete:function() {
									$("#tooltipYVal").text($("#s1Val2").text());
									TweenMax.to("#tooltipYVal", 0.5, {rotationX : 0, onComplete:function() {
										 $("#memoryDiv").addClass("z-index");
											$("#a2Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
												$(this).removeClass("animated zoomIn");
											$("#b2Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
												$(this).removeClass("animated zoomIn");
												$("#memoryDiv").removeClass("z-index");
												$('.introjs-nextbutton, .introjs-prevbutton').show();
											});
										});
									}});
								}});
							}});
						}});
					}});
				});
			});
		break;
		case "callMethod2":
			$("#callMethod2").removeClass("hide");
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
		case "callCopyConst":
			$("#callCopyConst").removeClass("hide");
			$("#s3Panel").addClass("opacity00");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here s1 object copy into s2, the values are same as s1 object.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#memoryDiv").addClass("z-index");
					$("#s3Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#memoryDiv").removeClass("z-index");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});	
				});
			});
		break;
		case "copyConst":
			$("#copyConst").removeClass("hide");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "After copy the s2 object into s3. The copy constructor will call.<br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='s1ToAB' class='display-inline-block relative ct-code-b-yellow'>"
							+ "  a = <div id='tooltipS1AVal' class='display-inline-block relative'>s2.a</div>;<br>"
							+ " b = <div id='tooltipS1BVal' class='display-inline-block relative'>s2.b</div>;</div>");
					var l1 = $("#s1ToAB").offset();
					var l2 = $("#s1AB").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#s1ToAB", 1, {top : topLength, left : leftLength, onComplete:function() {
						$("#a2Panel").addClass("z-index");
						TweenMax.to("#tooltipS1AVal", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipS1AVal").text($("#s1Val1").text());
							$("#a2Panel").removeClass("z-index");
							TweenMax.to("#tooltipS1AVal", 0.5, {rotationX : 0, onComplete:function() {
								$("#b2Panel").addClass("z-index");
								TweenMax.to("#tooltipS1BVal", 0.5, {rotationX : -90, onComplete:function() {
									$("#tooltipS1BVal").text($("#s1Val2").text());
									$("#b2Panel").removeClass("z-index");
									TweenMax.to("#tooltipS1BVal", 0.5, {rotationX : 0, onComplete:function() {
										$('.introjs-nextbutton, .introjs-prevbutton').show();
									}});
								}});
							}});
						}});
					}});
				});
			});
		break;
		case "callMethod3":
			$("#callMethod3").removeClass("hide");
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

function textFocus(selector) {
	$("#"+selector).focus();
	editText('#'+ selector);
}

function editText(selector) {
	$(selector).on("keydown", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($(this).text().length > max-1) {
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39, 13]) !== -1) {
				return;
			}
			if (e.keyCode == 13 && e.keyCode == 9) {
				e.preventDefault();
			}
			e.preventDefault();
		}		
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