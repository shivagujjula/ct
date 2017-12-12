var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;

var friendFunctionReadyFun = function() {
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
			 		element : "#code",
					intro : "",
					position : "right"
				},{
			 		element : "#class",
					intro : "",
					position : "right"
				},{
			 		element : "#constD",
					intro : "",
					position : "right"
				},{
			 		element : "#memoryDiv",
					intro : "",
					position : "right"
				},{
			 		element : "#defaultConst",
					intro : "",
					position : "right"
				},{
			 		element : "#dPanel",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#cout",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#callMethod",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#addFiveFun",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "left"
				},{
			 		element : "#friendFun",
					intro : "",
					position : "right"
				},{
			 		element : "#addFiveFun",
					intro : "",
					position : "right"
				},{
			 		element : "#cout",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				} ,{
			 		element : "#restart",
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
		case "class":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "constD":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "memoryDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "defaultConst":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "dPanel":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "cout":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "callMethod":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "addFiveFun":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "outputDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "friendFun":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "addFiveFun":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "cout":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "outputDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "restart":
			
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
			$("#li1").fadeTo(500, 1, function () {
				$("#li2").fadeTo(500, 1, function () {
					$("#li3").fadeTo(500, 1, function () {
						$("#li4").fadeTo(500, 1, function () {
							$("#li5").fadeTo(500, 1, function () {
							});
						});
					});
				});
			});
		break;
		case "code":
			$("#code").removeClass("opacity00");
			$('.user-btn').addClass("hide");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider a sample C++ program.";
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
				var text = "This is a class <y>Distance</y> which consist of a <b><y>int</y></b> field <y>meter</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "constD":
			$("#constD").removeClass("hide");
			$("#memoryDiv, #dPanel").addClass("opacity00");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us create a object for class <y>Distance</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "memoryDiv":
			if (introjs._currentStep == 4) {
				$("#memoryDiv").removeClass("opacity00");
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#dPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						var text = "Memory is created for object <y>d</y>, which consists of an integer variable <y>meter</y>.";
						typing($(".introjs-tooltiptext"), text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});	
				});
			} else if (introjs._currentStep == 11) {
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#s2Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
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
			}
		break;
		case "defaultConst":
			$("#defaultConst").removeClass("hide");
			$("#meterPanelVal").addClass("opacity00");
			introjs.refresh();
			$(".introjs-tooltip").css({"min-width": "210px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "After creating object for <y>Distance</y> immediately the default constructor will call. And initialize the <y>meter</y> with <y>0</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "dPanel":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#meterPanelVal").removeClass("opacity00").effect( "highlight",{color: 'red'}, 500, function() {
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
		case "cout":
			if (introjs._currentStep == 7) {
				$("#cout").removeClass("hide");
				$("#meter").removeClass("z-index");
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
			} else if (introjs._currentStep == 13) {
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
			}
		break;
		case "callMethod":		
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#callMethod").effect( "highlight",{color: '#ffff33'}, 2000);
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
		case "addFiveFun":
			if (introjs._currentStep == 9) {
				$("#addFiveFun").removeClass("hide");
				$("#op1").addClass("hide");
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#meter").addClass("z-index");
					var text = "In this function we are trying to initialize the private variable <y>meter</y>. So it show an error.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			} else if (introjs._currentStep == 12) {
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#meter").addClass("z-index");
					var text = "Now you can access the private variable <y>meter</y> because the function <y>addFive</y> declared as <y>friend function</y>."
					+ " addFive() return d.meter value.<br>";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="meterVal()">Next &#8594;</a>');
					});
				});
			}
		break;
		case "outputDiv":
			if (introjs._currentStep == 10) {
				$("#meter").removeClass("z-index");
				$("#outputDiv").removeClass("opacity00");
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "We can't access the private members.";
					typing($(".introjs-tooltiptext"), text, function() {
						/*$("#body").append("<div>friend-function.cpp: In function <br><b>'int addFive(Distance)'</b>:<br>"
								+ " friend-function.cpp:5:10:<br> <red><b>error</b>:</red> <b>'int Distance::meter'</b> is private"
						        + " int meter;</div>");*/
						$("#op1").removeClass("hide");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			} else if (introjs._currentStep == 14) {
				$("#meter").removeClass("z-index");
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					//$("#body").append("<div>Distance: 5</div>");
					$("#op1").addClass("hide");
					$("#op2").removeClass("hide");
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
		case "friendFun":
			$("#friendFun").removeClass("hide");
			$("#meterPanelVal").text("0");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#meter").addClass("z-index");
				var text = "If you declare a function as <y>friend function</y> then you can access private members.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "restart":
			introjs.refresh();
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

function meterVal() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append(" <div id='flipMeter' class='display-inline-block relative ct-code-b-yellow'>"
			+ "  d.meter = <div id='totalMeter' class='display-inline-block relative'>"
			+ " <div id='tooltipMeter' class='display-inline-block relative'>meter</div>"
			+ " + <div id='tooltip5' class='display-inline-block relative'>5</div></div>;</div>");
	var l1 = $("#flipMeter").offset();
	var l2 = $("#meterInit").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenMax.from("#flipMeter", 1, {top : topLength, left : leftLength, onComplete:function() {
		flipEffect("#tooltipMeter", 0, function(){
			flipEffect("#totalMeter", 5, function(){
				$("#memoryDiv").addClass("z-index");
				fromEffectWithTweenMax("#totalMeter", "#meterPanelVal", function() {
					$("#memoryDiv").removeClass("z-index");
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});		
			});
		});
	}});
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
	TweenMax.to($(selector), 1, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
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
