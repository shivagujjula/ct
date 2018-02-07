var introjs;
var tl = new TimelineLite();	
var typingSpeed = 1;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
var exceptionHandlingReadyFun = function() {
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
		steps : [{
			 		element : "#topDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#tryCatch",
					intro : "",
				 	position : "right"
				},{
			 		element : "#tryBlock",
					intro : "",
					position : "right"
				},{
			 		element : "#throw",
					intro : "",
					position : "right"
				},{
			 		element : "#catchBlock",
					intro : "",
					position : "right"
				},{
			 		element : "#code",
					intro : "",
					position : "right"
				},{
			 		element : "#xy",
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
			 		element : "#cout2",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
				},{
			 		element : "#code",
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
			 		element : "#try",
					intro : "",
					position : "right"
				},{
			 		element : "#catch",
					intro : "",
					position : "right"
				},{
			 		element : "#cout4",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#cout5",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#restart",
					intro : "",
					position : "right"
				}
			]});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		switch (elementId) {
		case "topDiv":
			$("#tryCatch").addClass("hide")
			$('.user-btn').removeClass("hide");
			$("#li1").fadeTo(500, 1, function () {
				$("#li2").fadeTo(500, 1, function () {
					$("#li3").fadeTo(500, 1, function () {
						
					});
				});
			});
		break;
		case "tryCatch":
			$('.user-btn').addClass("hide");
			$("#tryCatch").removeClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The general format of <y>try</y>, <y>catch</y>, <y>throw</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "tryBlock":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The statements which may expected to generate an error is written in <y>try block</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "throw":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The keyword <y>throw</y> is used to throw an exception. Also used to list the exceptions that a function throws, but doesn&#8217;t handle itself.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "catchBlock":
			introjs.refresh();
			$("#code").addClass("hide");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "When the <y>try block</y> throws an exception, immediately the program control enter into the <y>catch block</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "code":
			if (introjs._currentStep == 5) {
				$('.user-btn').addClass("hide");
				$("#code").removeClass("hide");
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Let us consider a sample <y>C++</y> program without <y>try, catch</y> blocks.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			} else if (introjs._currentStep == 11) {
				$("#op1, #op2").addClass("hide");
				$("#try2catch").removeClass("hide");
				$("#cout2").addClass("hide");
				introjs.refresh();
				//$("#body").empty();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Let us consider a sample <y>C++</y> program with <y>try, catch</y> blocks.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			}
		break;
		case "xy":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here we declared two int variables <y>x</y>, <y>y</y> and initialized with <y>10</y>, <y>0</y> respectively.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "cout1":
			if (introjs._currentStep == 7) {
				introjs.refresh();
				$("#outputDiv").addClass("opacity00");
				$("#op1").addClass("hide");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
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
			} else 	if (introjs._currentStep == 12) {
				introjs.refresh();
				$("#op3").addClass("opacity00");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
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
			}
		break;
		case "cout2":
			$("#cout2").removeClass("hide");
			$("#op2, #try2catch").addClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <y>cout</y> will display the output on the console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append("<ul><li><div id='tooltipXY' class='display-inline-block relative opacity00'>"
					+ "<y><div id='tooltipX' class='display-inline-block relative'>x</div> / <div id='tooltipY' class='display-inline-block relative'>y</div></y></div></li>"
					+ "<li class='text opacity00'>This will give an exception. And the program terminated abnormally.</li>");
					var l1 = $("#tooltipXY").offset();
					var l2 = $("#x-y").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					$("#x-y").effect( "highlight",{color: 'red'}, 500, function() {
						$("#tooltipXY").removeClass("opacity00");
						TweenMax.from("#tooltipXY", 1, {top : topLength, left : leftLength, onComplete:function() {
							flipEffect("#tooltipX", 10, function() {
								flipEffect("#tooltipY", 0, function() {
									$(".text").removeClass("opacity00");
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						}});
					});
				});
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 8) {
				$("#outputDiv").removeClass("hide opacity00");
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					//$("#body").append("<div>Before execution, inside main()</div>");
					$("#op1").removeClass("hide opacity00");;
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
			} else if (introjs._currentStep == 10) {
				$("#try2catch").addClass("hide");
				$("#cout2").removeClass("hide");
				introjs.refresh();
				$("#op1, #op2").removeClass("hide")
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					//$("#body").append("<div><red>Floating point exception</red></div>");
					$("#op2").removeClass("hide opacity00");
					var text = "<ul><li>The compiler evaluates the result of <y>division by zero</y> and there by terminates the "
					+ "  execution of the program abnormally.</li>"
					+ "<li>By using <y>try</y>, <y>catch</y> blocks execute the program normally.</li></ul>"
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			} else if (introjs._currentStep == 13) {
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					//$("#body").append("<div>Before execution, inside main()</div>");
					$("#op3").removeClass("opacity00");;
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
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					//$("#body").append("<div>Division by 0 error is occured</div>");
					$("#op4").removeClass("opacity00");
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
			} else if (introjs._currentStep == 19) {
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					//$("#body").append("<div>After exception, inside main()</div>");
					$("#op5").removeClass("opacity00");
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
		case "try":
			$("#try2catch").removeClass("hide");
			$("#cout2").addClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is <y>try block</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append("<ul><li><div id='tooltipXY' class='display-inline-block relative opacity00'>"
							+ "<y><div id='tooltipX1' class='display-inline-block relative'>x</div> / <div id='tooltipY1' class='display-inline-block relative'>y</div></y></div></li>"
							+ "<li class='text opacity00'>This will throw an exception. And the corresponding <y>catch block</y> will catch the exception.</li>");
					var l1 = $("#tooltipXY").offset();
					var l2 = $("#x-y1").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					$("#x-y1").effect( "highlight",{color: 'red'}, 500, function() {
						$("#tooltipXY").removeClass("opacity00");
						TweenMax.from("#tooltipXY", 1, {top : topLength, left : leftLength, onComplete:function() {
							flipEffect("#tooltipX1", 10, function() {
								flipEffect("#tooltipY1", 0, function() {
									$(".text").removeClass("opacity00");
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						}});
					});
				});
			});
		break;
		case "catch":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here <y>catch block</y> will catch the exceptions thrown by the <y>try block</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "cout4":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
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
		case "cout5":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
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
		case "restart":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "115px"});
			$('#restart').removeClass("opacity00");
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

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}