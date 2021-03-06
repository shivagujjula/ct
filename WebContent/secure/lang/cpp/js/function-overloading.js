var introjs;
var tl = new TimelineLite();	
var typingSpeed = 1;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;

var functionOverloadingReadyFun = function(){
	introGuide();
	$('#restartBtn').click(function() {
		location.reload();
	});
	
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
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
					position : "right",
					tooltipClass:"hide"
				},{
			 		element : "#main",
					intro : "",
					position : "right"
				},{
			 		element : "#addFun1",
					intro : "",
					position : "right",
					tooltipClass:"hide"
				},{
			 		element : "#method1",
					intro : "",
					position : "right",
					tooltipClass:"hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#addFun2",
					intro : "",
					position : "right",
					tooltipClass:"hide"
				},{
			 		element : "#method2",
					intro : "",
					position : "right",
					tooltipClass:"hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#addFun3",
					intro : "",
					position : "right",
					tooltipClass:"hide"
				},{
			 		element : "#method4",
					intro : "",
					position : "right",
					tooltipClass:"hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#addFun4",
					intro : "",
					position : "right",
					tooltipClass:"hide"
				},{
			 		element : "#method3",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#addFun5",
					intro : "",
					position : "right",
					tooltipClass:"hide"
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
		break;
		case "code":
			if (introjs._direction == "backward") {
				$(".color").removeClass("yellow");
			}
		break;
		case "main":
			$("#addFun1").addClass("hide");
		break;
		case "addFun1":
		break;
		case "method1":
			$("#outputDiv").addClass("opacity00")
			$("#addFun2").addClass("hide")
		break;
		case "outputDiv":
			if (introjs._currentStep == 5) {
				$("#body").text("");
			} else if (introjs._currentStep == 8) {
				
					$("#float").text("");
				
			} else if (introjs._currentStep == 11) {
					$("#sint").text("");
			} else if (introjs._currentStep == 14) {
					$("#sdouble").text("");
			} else if (introjs._currentStep == 16) {
			}
		break;
		case "addFun2":
		break;
		case "method2":
			$("#addFun3").addClass("hide")
		break;
		case "addFun3":
			//$("#addFun4").addClass("hide")
		break;
		case "method4":
			$("#addFun4").addClass("hide")
		break;
		case "addFun4":
		break;
		case "method3":
			$("#addFun5").addClass("hide")
		break;
		case "addFun5":
		break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		// ********************** start ************back button logic
				
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
				}
				
				// ********************** end ************back button logic
		var elementId = targetElement.id;
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		switch (elementId) {
		case "topDiv":
			$('.user-btn').removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#li1").fadeTo(500, 1, function () {
				$("#li2").fadeTo(500, 1, function () {
					$("#li3").fadeTo(500, 1, function () {
					});
				});
			});
		break;
		case "code":
			$("#code").removeClass("opacity00");
			$('.user-btn').remove();
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide")
				var text = "Let us consider sample C++ program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="codeText()">Next &#8594;</a>');
				});
			});
		break;
		case "main":
			introjs.refresh();
			$(".color").addClass("yellow");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>main()</y> is the starting execution point of <y>c++</y> program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
		break;
		case "addFun1":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide")
				$("#addFun1").removeClass("hide");
				var text = "The <y>add()</y> is called with one int value <y>10</y> so the call is made to the exact matching function <y>add(int)</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "method1":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide")
				var text = "<y>add(int)</y> called and print the number on the console.<br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='firstAddition' class='display-inline-block relative ct-code-b-yellow'>"
						+ " <div id='tooltipA1Val' class='display-inline-block relative'>a</div>"
						+ " </div>");
					var l1 = $("#firstAddition").offset();
					var l2 = $("#aPlusB1").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#firstAddition", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipA1Val", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipA1Val").text($("#intVal1").text());
							TweenMax.to("#tooltipA1Val", 0.5, {rotationX : 0, onComplete:function() {
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							}});
						}});
					}});
				});
			});
		break;
		case "outputDiv":
			$("#outputDiv").removeClass("opacity00");
			if (introjs._currentStep == 5) {
				introjs.refresh();
			//	setTimeout(function() {
					if (introjs._direction=="forward") {
						$('.introjs-nextbutton').hide();
						$('.introjs-prevbutton').hide();
						$(".introjs-helperLayer").one("transitionend", function() {
							$("#body").append("<div>The integer value is = 10</div>");
							setTimeout(function() {
							introjs.nextStep()
							}, 500);
						});
					} else {
							introjs.previousStep()
							}
				//	}, 500);
				
			} else if (introjs._currentStep == 8) {
				introjs.refresh();
			//	setTimeout(function() {
					if (introjs._direction=="forward") {
						$('.introjs-nextbutton').hide();
						$('.introjsjs-prevbutton').hide();
						$(".introjs-helperLayer").one("transitionend", function() {
							$("#body").append("<div id = 'float'>Sum of two float values = 29.1</div>");
							setTimeout(function() {
								introjs.nextStep()
								}, 500);
						});
					} else {
							introjs.previousStep()
							}
				//	}, 500);
			} else if (introjs._currentStep == 11) {
				introjs.refresh();
			//	setTimeout(function() {
					if (introjs._direction=="forward") {
						$('.introjs-nextbutton').hide();
						$('.introjs-prevbutton').hide();
						$(".introjs-helperLayer").one("transitionend", function() {
							$("#body").append("<div id = 'sint'>Sum of three integer values = 180</div>");
							setTimeout(function() {
								introjs.nextStep()
								}, 500);
						});
					} else {
							introjs.previousStep()
							}
			//		}, 500);
			} else if (introjs._currentStep == 14) {
				introjs.refresh();
		//		setTimeout(function() {
					if (introjs._direction=="forward") {
						$('.introjs-nextbutton').hide();
						$('.introjs-prevbutton').hide();
						$(".introjs-helperLayer").one("transitionend", function() {
							$("#body").append("<div id= 'sdouble' >Sum of two double values = 60.8</div>");
							setTimeout(function() {
								introjs.nextStep()
								}, 500);
						});
					} else {
							introjs.previousStep()
						}
				//	}, 500);
			} else if (introjs._currentStep == 16) {
				introjs.refresh();
			//		setTimeout(function() {
						if (introjs._direction=="forward") {
							$('.introjs-nextbutton').hide();
							$('.introjs-prevbutton').hide();
							$(".introjs-helperLayer").one("transitionend", function() {
								$("#body").empty();
								$("#body").append("<div>overloading.cpp: In function 'main()': <br>"
										+ " overloading.cpp:20:10: <red><b>error</b></red>: no matching function for call to 'add(int)' "
										+ " add(8.2)</div>");
								setTimeout(function() {
									introjs.nextStep()
									}, 500);
							});	
						} else {
									introjs.previousStep()
								}
				//		}, 500);
				
			}
		break;
		case "addFun2":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide")
				$("#addFun2").removeClass("hide")
				var text = "The <y>add()</y> is called with two float values <y>12.4</y>, <y>16.7</y> so the call is made to the exact matching function<br> <y>add(float, float)</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
		break;
		case "method2":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide")
				var text = "<y>add(float, float)</y> called and print the sum on the console..";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='thirdAddition' class='display-inline-block relative ct-code-b-yellow'>"
						+ " <div id='tooltipA3Val' class='display-inline-block relative'>a</div> + <div id='tooltipB3Val' class='display-inline-block relative'>b</div>"
						+ " <div id='tooltipC3Val' class='opacity00 display-inline-block relative'> = "
						+ 29.1 +"</div></div>");
					var l1 = $("#thirdAddition").offset();
					var l2 = $("#aPlusB2").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#thirdAddition", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipA3Val", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipA3Val").text($("#floatVal1").text());
							TweenMax.to("#tooltipA3Val", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#tooltipB3Val", 0.5, {rotationX : -90, onComplete:function() {
									$("#tooltipB3Val").text($("#floatVal2").text());
									TweenMax.to("#tooltipB3Val", 0.5, {rotationX : 0, onComplete:function() {
										$("#tooltipC3Val").removeClass("opacity00");
										$('.introjs-nextbutton,.introjs-prevbutton').show();
									}});
								}});
							}});
						}});
					}});
				});
			});
		break;
		case "addFun3":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide")
				$("#addFun3").removeClass("hide")
				var text = "The <y>add()</y> is called with three integer values <y>30</y>, <y>60</y>, <y>90</y> so the call is made to the exact matching function<br> <y>add(int, int, int)</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
		break;
		case "method4":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide")
				var text = "<y>add(int, int, int)</y> called and print the sum on the console.<br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='fourthAddition' class='display-inline-block relative ct-code-b-yellow'>"
						+ " <div id='tooltipA4Val' class='display-inline-block relative'>a</div> + <div id='tooltipB4Val' class='display-inline-block relative'>b</div>"
						+ " + <div id='tooltipC4Val' class='display-inline-block relative'>c</div>"
						+ " <div id='tooltipD4Val' class='opacity00 display-inline-block relative'> = "
						+ 180 +"</div></div>");
					var l1 = $("#fourthAddition").offset();
					var l2 = $("#aPlusB4").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#thirdAddition", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipA4Val", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipA4Val").text($("#intVal111").text());
							TweenMax.to("#tooltipA4Val", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#tooltipB4Val", 0.5, {rotationX : -90, onComplete:function() {
									$("#tooltipB4Val").text($("#intVal112").text());
									TweenMax.to("#tooltipB4Val", 0.5, {rotationX : 0, onComplete:function() {
										TweenMax.to("#tooltipC4Val", 0.5, {rotationX : -90, onComplete:function() {
											$("#tooltipC4Val").text($("#intVal113").text());
											TweenMax.to("#tooltipC4Val", 0.5, {rotationX : 0, onComplete:function() {
												$("#tooltipD4Val").removeClass("opacity00");
												$('.introjs-nextbutton,.introjs-prevbutton').show();
											}});	
										}});
									}});
								}});
							}});
						}});
					}});
				});
			});
		break;
		case "addFun4":
			$("#addFun4").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide")
				$("#addFun4").removeClass("hide")
				var text = "The <y>add()</y> is called with two double values <y>20.3</y>, <y>40.5</y> so the call is made to the exact matching function<br> <y>add(double, double)</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
		break;
		case "method3":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("introjs-tooltip").removeClass("hide")
				var text = "<y>add(double, double)</y> called and print the sum on the console.<br>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='fifthAddition' class='display-inline-block relative ct-code-b-yellow'>"
						+ " <div id='tooltipA5Val' class='display-inline-block relative'>a</div> + <div id='tooltipB5Val' class='display-inline-block relative'>b</div>"
						+ " <div id='tooltipC5Val' class='opacity00 display-inline-block relative'> = "
						+ 60.8 +"</div></div>");
					var l1 = $("#fifthAddition").offset();
					var l2 = $("#aPlusB3").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#thirdAddition", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#tooltipA5Val", 0.5, {rotationX : -90, onComplete:function() {
							$("#tooltipA5Val").text($("#doubleVal1").text());
							TweenMax.to("#tooltipA5Val", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#tooltipB5Val", 0.5, {rotationX : -90, onComplete:function() {
									$("#tooltipB5Val").text($("#doubleVal2").text());
									TweenMax.to("#tooltipB5Val", 0.5, {rotationX : 0, onComplete:function() {
										$("#tooltipC5Val").removeClass("opacity00");
										$('.introjs-nextbutton,.introjs-prevbutton').show();
									}});
								}});
							}});
						}});
					}});
				});
			});
		break;
		case "addFun5":
			$("#addFun5").removeClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide")
				$("#addFun5").removeClass("hide")
				var text = "This call gives an error, why because the matching function definition is not available.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
		break;
		case "button" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn, #closeBtn").removeClass("opacity00");
				console.log('haiiiii');
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

function codeText() {
	$(".introjs-nextbutton").hide();
	$('.user-btn').remove();
	$(".color").addClass("yellow");
	$(".introjs-tooltiptext").empty();
	var text = "Here we overload the <y>add()</y>, with <y>same name</y> and <y>different argumens</y>.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
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