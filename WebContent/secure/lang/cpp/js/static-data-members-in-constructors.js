var introjs;
var tl = new TimelineLite();	
var typingSpeed = 1;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
var staticDataMembersInConstructorsReadyFun = function() {
	introGuide();
	$(".line").hide();
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
					position : "right"
				},{
			 		element : "#class",
					intro : "",
					position : "right"
				},{
			 		element : "#static",
					intro : "",
					position : "right"
				},{
			 		element : "#explitCall",
					intro : "",
					position : "right"
				},{
			 		element : "#memoryDiv",
					intro : "",
					position : "right"
				},{
			 		element : "#object1",
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
			 		element : "#outputDiv",
					intro : "",
				 	tooltipClass : "hide"
				},{
			 		element : "#object2",
					intro : "",
					position : "right"
				},{
			 		element : "#memoryDiv",
					intro : "",
					position : "bottom"
				},{
			 		element : "#defaultConst",
					intro : "",
					position : "bottom"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#object3",
					intro : "",
					position : "right"
				},{
			 		element : "#memoryDiv",
					intro : "",
					position : "bottom"
				},{
			 		element : "#defaultConst",
					intro : "",
					position : "bottom"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#end",
					intro : "",
					position : "right"
				},{
			 		element : "#destructor",
					intro : "",
					position : "top"
				},{
			 		element : "#cout2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				}, {
					element : "#count2",
					intro : "",
					position : "right"
				},{
			 		element : "#destructor",
					intro : "",
					position : "top"
				},{
			 		element : "#cout2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				}, {
					element : "#count2",
					intro : "",
					position : "right"
				},{
			 		element : "#destructor",
					intro : "",
					position : "top"
				},{
			 		element : "#cout2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				}, {
					element : "#count2",
					intro : "",
					position : "right"
				},{
			 		element : "#button",
					intro : "",
					position : "right"
				}
			]});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
			case "memoryDiv":
				if (introjs._currentStep == 7) {
				if (introjs._direction == "backward") {
					$("#s1Panel").addClass("opacity00");
					$("#s1, #arrow1").hide();
						$("#countPanelVal").text("0");
						
					}
				} else if (introjs._currentStep == 11) {
					if (introjs._direction == "backward") {
						$("#s2Panel").addClass("opacity00");
						$("#s2, #arrow2").hide();
						$("#countPanelVal").text("1");
					}
				} else if (introjs._currentStep == 15) {
					if (introjs._direction == "backward") {
						$("#s3Panel").addClass("opacity00");
						$("#s3, #arrow3").hide();
						$("#countPanelVal").text("2");
					}
				}
			break;
		}
		
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		switch (elementId) {
		case "topDiv":
			$('.user-btn1').removeClass("hide");
			$("#defaultConst, #destructor, #explitCall, #object1, #object2, #object3").addClass("hide");
			$("#code").addClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#li1").fadeTo(500, 1, function () {
				$("#nextBtn").fadeTo(500, 1, function () {
				});
			});
		break;
		case "code":
			$("#code").removeClass("opacity00");
			$('.user-btn1').addClass("hide");
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
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").css({"min-width": "250px"});
				var text = "This is a class <y>Sample</y> which consists of a <y>static int</y> field <y>count</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "static":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>The type of each <y>static</y> member variable must be defined outside class definition.</li>"
					+ "<li>This is necessary because <y>static</y> data members are stored separately rather than a part of an object.</li>"
					+ "<li>They are also associated with the class itself rather than with any object, they are also known as variable.</li>"
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "explitCall":
			$("#explitCall").removeClass("hide");
			$("#countPanel, #memoryDiv").addClass("opacity00")
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>A <y>static</y> variable is always initialised with <y>0</y> by default.</li>"
					+ "<li>The user can also initialise a new value to the  <y>static</y> variable.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "object1":
			$("#object1").removeClass("hide");
			$("#s1, #arrow1").hide();
			$("#s1Panel").addClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Let us create another object for class <y>Sample</y>.</li>"
					+ "<li>Here <y>s1</y> is an object of the class <y>Sample</y>.</li>"
					+ "<li>First the memory is allocated for that object.</li>";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "memoryDiv":
			if (introjs._currentStep == 5) {
				$("#memoryDiv").removeClass("opacity00");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Seperate memory is created for <y>static</y> variable <y>count</y> outside of objects.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#countPanel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			} else if (introjs._currentStep == 7) {
				$("#memoryDiv").removeClass("opacity00");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#s1Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#s1").show();
						arrowReveal("#arrow1", function() {
							var text = "<ul><li>Memory is created for object <y>s1</y> but within that there are no data members.</li>"
								+ "<li>Here <y>count</y> is a <y>static</y>  data member so it has the memory outside of objects therefore <y>s1</y> refers <y>count</y>.</li></ul>";
							typing($(".introjs-tooltiptext"), text, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
				});
			} else if (introjs._currentStep == 11) {
				$("#memoryDiv").removeClass("opacity00");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#s2Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$("#s2").show();
					 	arrowReveal("#arrow2", function() {
							var text = "Memory is created for object <y>s2</y>, which consists of an integer variable <y>count</y>.";
							typing($(".introjs-tooltiptext"), text, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
					 	});
					});
				});
			} else if (introjs._currentStep == 15) {
				$("#memoryDiv").removeClass("opacity00");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
						$("#s3Panel").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$("#s3").show();
							arrowReveal("#arrow3", function() {
							var text = "Memory is created for object <y>s3</y>, which consists of an integer variable <y>count</y>.";
							typing($(".introjs-tooltiptext"), text, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
				});
			}
		break;
		case "defaultConst":
			if (introjs._currentStep == 8) {
				$("#countPanelVal").text("0");
				$("#defaultConst").removeClass("hide");
				$("#op1").addClass("hide");
				$("#outputDiv").addClass("hide")
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-tooltip").css({"min-width": "210px"});
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li>After creating an object for <y>Sample</y> immediately the default constructor will be called.</li>"
					+ "<li>Now the <y>static</y> variable <y>count</y> is incremented.</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="incrementCount1()">Next &#8594;</a>');
					});
				});
			} else if (introjs._currentStep == 12) {
				$("#op2").addClass("hide");
				$("#countPanelVal").text("1");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li>After creating an object for class <y>Sample</y> immediately the default constructor will be called.</li>"
					+ "<li>Now the <y>static</y> variable <y>count</y> is incremented.</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="incrementCount2()">Next &#8594;</a>');
					});
				});
			}  else if (introjs._currentStep == 16) {
				$("#op3").addClass("hide");
				$("#countPanelVal").text("2");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li>After creating an object for <y>Sample</y> immediately the default constructor will be called.</li>"
					+ "<li>Now the <y>static</y> variable <y>count</y> is incremented.</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="incrementCount3()">Next &#8594;</a>');
					});count
				});
			}
		break;
		case "cout":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <y>cout</y> display the output on the console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 9) {
				$("#outputDiv").removeClass("opacity00");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					//$("#body").append("<div>Object created : 1</div>");
					$("#op1").removeClass("hide");
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
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					/*$("#body").append("<div>Object created : 2</div>");*/
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
			} else if (introjs._currentStep == 17) {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$("#countPanelVal").text("3");
				$(".introjs-helperLayer").one("transitionend", function() {
					/*$("#body").append("<div>Object created : 3</div>");*/
					$("#op3").removeClass("hide");
					if (introjs._direction == "forward") {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					} else {
						if (introjs._direction == "forward") {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						} else {
							setTimeout(function () {
								introjs.previousStep();
							}, 1000);
						}
					}
				});
			} else if (introjs._currentStep == 21) {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				/*$("#countPanelVal").text("2");*/
				$(".introjs-helperLayer").one("transitionend", function() {
					/*$("#body").append("<div>Object deleted : 3</div>");*/
					$("#op4").removeClass("hide");
					if (introjs._direction == "forward") {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					} else {
						$("#countPanelVal").text("3");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					}
				});
			} else if (introjs._currentStep == 25) {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				/*$("#countPanelVal").text("1");*/
				$(".introjs-helperLayer").one("transitionend", function() {
					/*$("#body").append("<div>Object deleted : 2</div>");*/
					$("#op5").removeClass("hide");
					if (introjs._direction == "forward") {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					} else {
						$("#countPanelVal").text("2");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					}
				});
			} else if (introjs._currentStep == 29) {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					/*$("#body").append("<div>Object deleted : 1</div>");*/
					$("#op6").removeClass("hide");
					if (introjs._direction == "forward") {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					} else {
						setTimeout(function () {
							$("#countPanel").removeClass("opacity00").removeAttr('style');
							$("#countPanelVal").text("1");
							introjs.previousStep();
						}, 1000);
					}
				});
			}
		break;
		case "object2":
			$("#object2").removeClass("hide");
			$("#s2, #arrow2").hide();
			$("#s2Panel").addClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Let us create another object for class <y>Sample</y>.</li>"
					+ "<li>Here <y>s2</y> is an object of the class <y>Sample</y>.</li>"
					+ "<li>First the memory is allocated for that object.</li>";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "object3":
			$("#object3").removeClass("hide");
			$("#s3, #arrow3").hide();
			$("#s3Panel").addClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Let us create another object for class <y>Sample</y>.</li>"
					+ "<li>Here <y>s3</y> is an object of the class <y>Sample</y>.</li>"
					+ "<li>First the memory is allocated for that object.</li>";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "end":
			$("#memoryDiv").removeClass("z-index");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			//TweenMax.to($("#arrow3"), 1, {attr:{x2:"59%", y2:"4%"}});
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#s3, #arrow3").show();
				$("#s3Panel").show().removeClass("opacity00", function() {
				var text = "At the completion of program execution, <y>destructor</y> will be called in the reverse order of the objects created.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
				});
			});
		break;
		case "destructor":
			if (introjs._currentStep == 19) {
				$("#destructor").removeClass("hide");
				$("#countPanelVal").text("3");
				$("#s3, #arrow3").show();
				$("#s2, #arrow2").show();
				$("#s2Panel").show().removeClass("opacity00");
				$("#s3Panel").show().removeClass("opacity00");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li>The <y>destructor</y> will remove the objects in the reverse order of the objects created.</li>"
						+	"<li>So first the <y>destructor</y> will remove the <y>s3</y> object.</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#memoryDiv").addClass("z-index");
						
						setTimeout(function() {
								$("#s3, #arrow3").hide();
								$("#s3Panel").addClass("opacity00");
						}, 1000);
						//arrowRevealBack("#arrow3", function() {
							//$("#arrow3").hide();
							//$("#s3Panel").hide();
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						//});
					});
				});
			} else if (introjs._currentStep == 23) {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$("#countPanelVal").text("2");
				$("#s2, #arrow2").show();
				$("#s2Panel").show().removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li>The <y>destructor</y> will remove the objects in the reverse order of the objects created.</li>"
						+	"<li>So first the <y>destructor</y> will remove the <y>s2</y> object.</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#memoryDiv").addClass("z-index");
						setTimeout(function() {
								$("#s2, #arrow2").hide();
								$("#s2Panel").addClass("opacity00");
						}, 1000);
						//arrowRevealBack("#arrow2", function() {
							//$("#arrow2").hide();
							//$("#s2Panel").hide();
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						//});
					});
				});
			} else if (introjs._currentStep == 27) {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$("#countPanel").show();
				$("#countPanelVal").text("1");
				$("#s1, #arrow1").show();
				$("#s1Panel").show().removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li>The <y>destructor</y> will remove the objects in the reverse order of the objects created.</li>"
						+	"<li>So first the <y>destructor</y> will remove the <y>s1</y> object.</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#memoryDiv").addClass("z-index");
						setTimeout(function() {
								$("#s1, #arrow1").hide();
								$("#s1Panel").addClass("opacity00");
						}, 1000);
						
						//arrowRevealBack("#arrow1", function() {
							//$("#arrow1").hide();
							//$("#s1Panel").hide();
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						//});
					});
				});
			}
		break;
		case "cout2":
			if (introjs._currentStep == 20) {
				$("#memoryDiv").removeClass("z-index");
				/*$("#countPanelVal").text("3");*/
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$("#op4").addClass("hide");
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
			} else if (introjs._currentStep == 24) {
				$("#memoryDiv").removeClass("z-index");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$("#op5").addClass("hide");
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
			} else if (introjs._currentStep == 28) {
				$("#memoryDiv").removeClass("z-index");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$("#op6").addClass("hide");
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
		case "count2":
			if (introjs._currentStep == 22) {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$("#memoryDiv").removeClass("z-index");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The <y>count</y> value is decremented.";
					$("#s2, #arrow2").show();
					$("#s2Panel").show().removeClass("opacity00", function() {
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-tooltiptext").append("<ul><li>  <div id='tooltipDegX' class='display-inline-block relative opacity00'>"
								+ " <y>count = <b><div id='tooltipX' class='display-inline-block relative'>count - 1</div></b></y>"
								+ "</div></li></ul>");
						var l1 = $("#tooltipDegX").offset();
						var l2 = $("#count2").offset();
						var topLength = l2.top - l1.top;
						var leftLength = l2.left - l1.left;
						$("#count2").effect( "highlight",{color: 'yellow'}, 500, function() {
							$("#tooltipDegX").removeClass("opacity00");
							TweenMax.from("#tooltipDegX", 1, {top : topLength, left : leftLength, onComplete:function() {
								flipEffect("#tooltipX", 2, function() {
									$("#countPanel").addClass("z-index");
									fromEffectWithTweenMax("#tooltipX", "#countPanelVal", function() {
										$("#countPanel").removeClass("z-index");
										$('.introjs-nextbutton, .introjs-prevbutton').show();
									});
								});
							}});
						});
					});
				});
				});
			} else if (introjs._currentStep == 26) {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$("#memoryDiv").removeClass("z-index");
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#s1, #arrow1").show();
					$("#s1Panel").show().removeClass("opacity00", function() {
					var text = "The <y>count</y> value is decremented.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-tooltiptext").append("<ul><li>  <div id='tooltipDegX' class='display-inline-block relative opacity00'>"
								+ " <y>count = <b><div id='tooltipX' class='display-inline-block relative'>count - 1</div></b></y>"
								+ "</div></li></ul>");
						var l1 = $("#tooltipDegX").offset();
						var l2 = $("#count2").offset();
						var topLength = l2.top - l1.top;
						var leftLength = l2.left - l1.left;
						$("#count2").effect( "highlight",{color: 'yellow'}, 500, function() {
							$("#tooltipDegX").removeClass("opacity00");
							TweenMax.from("#tooltipDegX", 1, {top : topLength, left : leftLength, onComplete:function() {
								flipEffect("#tooltipX", 1, function() {
									$("#countPanel").addClass("z-index");
									fromEffectWithTweenMax("#tooltipX", "#countPanelVal", function() {
										$("#countPanel").removeClass("z-index");
										$('.introjs-nextbutton, .introjs-prevbutton').show();
									});
								});
							}});
						});
					});
				});
				});
			} else if (introjs._currentStep == 30) {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The <y>count</y> value is decremented.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-tooltiptext").append("<ul><li>  <div id='tooltipDegX' class='display-inline-block relative opacity00'>"
								+ " <y>count = <b><div id='tooltipX' class='display-inline-block relative'>count - 1</div></b></y>"
								+ "</div></li><li id='text' class='opacity00'>The <y>count</y> value is <y>0</y> and the destructor will delete the <y>count</y> variable from memory.</li></ul>");
						var l1 = $("#tooltipDegX").offset();
						var l2 = $("#count2").offset();
						var topLength = l2.top - l1.top;
						var leftLength = l2.left - l1.left;
						$("#count2").effect( "highlight",{color: 'yellow'}, 500, function() {
							$("#tooltipDegX").removeClass("opacity00");
							TweenMax.from("#tooltipDegX", 1, {top : topLength, left : leftLength, onComplete:function() {
								flipEffect("#tooltipX", 0, function() {
									$("#countPanel").addClass("z-index");
									fromEffectWithTweenMax("#tooltipX", "#countPanelVal", function() {
										$("#text").removeClass("opacity00");
										$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="removeCount()">Next &#8594;</a>');
									});
								});
							}});
						});
					});
				});
			}
		break;
		case "button" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
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

function incrementCount1() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append("<ul><li>  <div id='tooltipDegX' class='display-inline-block relative opacity00'>"
			+ " <y> count = <b><div id='tooltipX' class='display-inline-block relative'>count + 1</div></b></y>"
			+ "</div></li></ul>");
	var l1 = $("#tooltipDegX").offset();
	var l2 = $("#count1").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	$("#count1").effect( "highlight",{color: 'yellow'}, 500, function() {
		$("#tooltipDegX").removeClass("opacity00");
		TweenMax.from("#tooltipDegX", 1, {top : topLength, left : leftLength, onComplete:function() {
			flipEffect("#tooltipX", 1, function() {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="sendValues1()">Next &#8594;</a>');
			});
		}});
	});
}

function sendValues1() {
	$('.user-btn').remove();
	$("#countPanel").addClass("z-index");
	//flipEffect("#countPanelVal", "1", function(){
		fromEffectWithTweenMax("#tooltipX", "#countPanelVal", function() {
		$("#countPanel").removeClass("z-index");
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	//});
	});
}

function incrementCount2() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append("<ul><li>  <div id='tooltipDegX' class='display-inline-block relative opacity00'>"
			+ " <y>count = <b><div id='tooltipX' class='display-inline-block relative'>count + 1</div></b></y>"
			+ "</div></li></ul>");
	var l1 = $("#tooltipDegX").offset();
	var l2 = $("#count1").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	$("#count1").effect( "highlight",{color: 'yellow'}, 500, function() {
		$("#tooltipDegX").removeClass("opacity00");
		TweenMax.from("#tooltipDegX", 1, {top : topLength, left : leftLength, onComplete:function() {
			flipEffect("#tooltipX", 2, function() {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="sendValues2()">Next &#8594;</a>');
			});
		}});
	});
}

function sendValues2() {
	$('.user-btn').remove();
	$("#countPanel").addClass("z-index");
	//flipEffect("#countVal", "2", function(){
		fromEffectWithTweenMax("#tooltipX", "#countPanelVal", function() {
		$("#countPanel").removeClass("z-index");
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	//});
	});
}

function incrementCount3() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append("<ul><li>  <div id='tooltipDegX' class='display-inline-block relative opacity00'>"
			+ " <y>count = <b><div id='tooltipX' class='display-inline-block relative'>count + 1</div></b></y>"
			+ "</div></li></ul>");
	var l1 = $("#tooltipDegX").offset();
	var l2 = $("#count1").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	$("#count1").effect( "highlight",{color: 'yellow'}, 500, function() {
		$("#tooltipDegX").removeClass("opacity00");
		TweenMax.from("#tooltipDegX", 1, {top : topLength, left : leftLength, onComplete:function() {
			flipEffect("#tooltipX", 3, function() {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="sendValues3()">Next &#8594;</a>');
			});
		}});
	});
}

function sendValues3() {
	$('.user-btn').remove();
	$("#memoryDiv").addClass("z-index");
	fromEffectWithTweenMax("#tooltipX", "#countPanelVal", function() {
		$("#memoryDiv").removeClass("z-index");
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	});
}

function removeArrow3() {
	$('.user-btn').remove();
	$("#memoryDiv").addClass("z-index");
	arrowRevealBack("#arrow3", function() {
		$("#arrow3").hide();
		$("#s3Panel").hide();
		$("#memoryDiv").removeClass("z-index");
		$(".introjs-tooltiptext").append("<ul><li>  <div id='tooltipDegX' class='display-inline-block relative opacity00'>"
				+ " <y>count = <b><div id='tooltipX' class='display-inline-block relative'>count - 1</div></b></y>"
				+ "</div></li></ul>");
		var l1 = $("#tooltipDegX").offset();
		var l2 = $("#count1").offset();
		var topLength = l2.top - l1.top;
		var leftLength = l2.left - l1.left;
		$("#count2").effect( "highlight",{color: 'yellow'}, 500, function() {
			$("#tooltipDegX").removeClass("opacity00");
			TweenMax.from("#tooltipDegX", 1, {top : topLength, left : leftLength, onComplete:function() {
				flipEffect("#tooltipX", 2, function() {
					$("#memoryDiv").addClass("z-index");
					fromEffectWithTweenMax("#tooltipX", "#countPanelVal", function() {
						$("#memoryDiv").removeClass("z-index");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			}});
		});
	});	
}

function removeCount() {
	$('.user-btn').remove();
	$("#countPanel").hide();
	$("#memoryDiv").removeClass("z-index");
	$('.introjs-nextbutton, .introjs-prevbutton').show();
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

function arrowReveal(lineId, callBackFunction) {
	var x2 = $(lineId).attr('x2');
	var y2 = $(lineId).attr('y2');
	$(lineId).attr('x2', $(lineId).attr('x1'));
	$(lineId).attr('y2', $(lineId).attr('y1'));
	$(lineId).show();
	TweenMax.to(lineId, 1, {
		attr: {
			x2: x2,
			y2: y2
	},
		onComplete: function () {
			if (typeof callBackFunction === 'function') {
				callBackFunction();
			}
	 	}
	});
}

function arrowRevealBack(lineId, callBackFunction) {
	var x1 = $(lineId).attr('x1');
	var y1 = $(lineId).attr('y1');
	
	$(lineId).show();
	TweenMax.to(lineId, 1, {
		attr: {
			x2: x1,
			y2: y1
	},
		onComplete: function () {
			if (typeof callBackFunction === 'function') {
				callBackFunction();
			}
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
