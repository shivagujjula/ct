var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
var overridingReadyFun = function() {
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
			 		element : "#main",
					intro : "",
					position : "right"
				},{
			 		element : "#ob1",
					intro : "",
				 	position : "right"
				},{
			 		element : "#ob2",
					intro : "",
				 	position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
				 	tooltipClass : "hide"
				},{
			 		element : "#ob3",
					intro : "",
				 	position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
				 	tooltipClass : "hide"
				},{
			 		element : "#ob4",
					intro : "",
				 	position : "right"
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
			$('.user-btn').removeClass("hide");
			$("#li1").fadeTo(500, 1, function () {
				$("#nextBtn").removeClass("opacity00");
			});
		break;
		case "code":
			$('.user-btn').remove();
			$('#code').removeClass("opacity00");
			$("#topDiv").addClass("z-index");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "300px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Let us create the class <y>Base1</y> with the function <y>display()</y>.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="class2Fun()">Next &#8594;</a>');
					$("#class1").addClass("color1");
				})
			})
		break;
		case "main":
			introjs.refresh();
			$("#ob1").addClass("hide");
			$("#class3").removeClass("color3");
			$("#class3").removeClass("blinking-white");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>main()</y> is the starting execution poit of the program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "ob1":
			$("#ob1").removeClass("hide");
			$("#ob2").addClass("hide");
			$("#class3").removeClass("blinking-white");
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Let us create an object for <y>Derived</y> class.</li>"
					+ "<li>When an object is created to the <y>Derived</y> class, that object directly invokes only the <y>Derived</y> class member functions.</li></ul>"
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "ob2":
			$("#ob2").removeClass("hide");
			$("#ob3").addClass("hide");
			introjs.refresh();
			$("#class3").addClass("blinking-white");
			$("#class1").removeClass("blinking-white");
			$("#op1").addClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "So, <y>ob.display();</y> will call only the display() of <y>Derived</y> class but not the display() of <y>Base1</y> or <y>Base2</y> classes.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 5) {
				$("#outputDiv").removeClass("hide opacity00");
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#class3").removeClass("blinking-white");
					$("#op1").removeClass("hide opacity00");
					if (introjs._direction == "forward") {
						setTimeout(function () {
							introjs.nextStep();
						}, 1500);
					} else {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					}
				});
			} else if (introjs._currentStep == 7) {
				introjs.refresh();
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#class1").removeClass("blinking-white");
					$("#op2").removeClass("hide opacity00");
					if (introjs._direction == "forward") {
						setTimeout(function () {
							introjs.nextStep();
						}, 1500);
					} else {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					}
				});
			} else if (introjs._currentStep == 9) {
				introjs.refresh();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#class2").removeClass("blinking-white");
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
			}
		break;
		case "ob3":
			$("#ob3").removeClass("hide");
			$("#ob4").addClass("hide");
			introjs.refresh();
			$("#cout3, #cout1").removeClass("blinking-white");
			$("#class2").removeClass("blinking-white");
			$("#class1").addClass("blinking-white");
			$("#op2").addClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "If the user wants to access the <y>Base1</y> class member function <y>display()</y> then it may be called using the class-name with"
						+ " <y>scope resolution operator (::)</y>";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "ob4":
			$("#ob4").removeClass("hide");
			introjs.refresh();
			$("#class2").addClass("blinking-white");
			$("#op3").addClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement will invokes the <y>Base2</y> class member function <y>display()</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "restart":
			introjs.refresh();
			$("#topDiv").removeClass("z-index");
			$("#cout2").removeClass("blinking-white");
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

function class2Fun() {
	$(".user-btn").remove();
	$("#class2").removeClass("hide");
	introjs.refresh();
	$("#class1").removeClass("color1");
	var text = "Let us create the another class <y>Base2</y> with the function <y>display()</y>.";
	typing($(".introjs-tooltiptext"), text, function() {
		$("#class2").addClass("color2");
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="class3Fun()">Next &#8594;</a>');
	})
}

function class3Fun() {
	$(".user-btn").remove();
	$("#class3").removeClass("hide");
	introjs.refresh();
	$("#class2").removeClass("color2");
	$("#class3").addClass("color3");
	var text = "<ul><li>Let us create the class <y>Derived</y> which is derived from <y>Base1</y>, <y>Base2</y> and which contains one member function <y>display()</y>.</li>"
		+ "<li>Here, the <y>Base1</y>, <y>Base2</y> and <y>Derived</y> classes  contains the function with the same name, the same number of arguments"
		+ " and the same return-type.</li>"
		+ "<li> i.e., the <y>Derived</y> class function is overridden on <y>Base1</y> and <y>Base2</y> class functions.</li></ul>";
	typing($(".introjs-tooltiptext"), text, function() {
		$('.introjs-nextbutton').show();
	})
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