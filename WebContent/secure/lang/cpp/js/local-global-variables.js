var introjs;
var typingSpeed = 1;
var tl;

var localGlobalVariablesReady = function() {
	introGuide();
	tl = new TimelineLite();
	$("#address1").text(Math.floor((Math.random() * 1024) + 1986));
	$("#address2").text(Math.floor((Math.random() * 1024) + 1996));
}

function introGuide() {
	introjs = introJs();
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});

	introjs.setOptions({
		showStepNumbers: false,
		keyboardNavigation: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		showBullets: false,
		steps : [ {
			element : "#heading",
			intro : "",
			position : "right"
		}, {
			element : "#codeAnimation",
			intro : "",
			position : "right"
		}, {
			element : "#funcDec",
			intro : "",
			position : "right"
		}, {
			element : "#globalVar",
			intro : "",
			position : "right"
		}, {
			element : "#addressDiv",
			intro : "",
			tooltipClass : "hide",
			position : "left"
		}, {
			element : "#mainFunc",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#funcDef",
			intro : "",
			position : "right"
		}, {
			element : "#startMain",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#localVar",
			intro : "",
			position : "right"
		}, {
			element : "#addressDiv",
			intro : "",
			tooltipClass : "hide",
			position : "left"
		}, {
			element : "#mainPf1",
			intro : "",
			position : "right"
		}, {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#functionCall",
			intro : "",
			position : "right"
		}, {
			element : "#valRes",
			intro : "",
			position : "right"
		}, {
			element : "#valDec",
			intro : ""
		}, {
			element : "#valAddition",
			intro : "",
			position : "right"
		}, {
			element : "#addressDiv",
			intro : "",
			tooltipClass : "hide",
			position : "left"
		}, {
			element : "#userPrintf",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		}, {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#endFunc",
			intro : "",
			position : "right"
		}, {
			element : "#mainPf2",
			intro : "",
			position : "right"
		}, {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#endMain",
			intro : "",
			position : "right"
		}, {
			element : "#button",
			intro : "",
			position : "right"
		} ]
	});
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "heading":
			
			break;
			
		case "codeAnimation":
			
			break;
			
		case "funcDec":
			
			break;
			
		case "globalVar":
			$("#globalVal").removeAttr("style").addClass("opacity00");
			$("#addressDiv").addClass("opacity00");
			break;
			
		case "startMain":
		case "mainFunc":
			
			break;
			
		case "funcDef":
			
			break;
			
		case "addressDiv":
			
				if(introjs._currentStep == 4) {
					
					
				} else if(introjs._currentStep == 9) {
					
				} else {
				}
			break;
			
		case "functionCall":
			
			break;
			
		case "localVar":
			$("#boxHeading").removeAttr("style").addClass("opacity00");
			$("#varBox").removeAttr("style").addClass("opacity00");
		break;
		
		case "mainPf1":
			$("#consoleId").addClass("opacity00");
			break;
		case "mainPf2":
			//$("#consoleId").addClass("opacity00");
		break;
			
		
		case "userPrintf":
			if (introjs._direction == "backward") {
			$("#gVal").text(50);
			}
			break;
			
		case "valRes":
			$("#globalVar").removeClass("blinking-white");
		break;
			
		case "valDec":
			$("#globalVar").addClass("blinking-white");
			break;
			
		case "valAddition":
			if (introjs._direction == "backward") {
				$("#gVal").text(50);
			}
			break;
			
		case "endFunc":
			
			break;
			
		case "endMain":
			
			break;
			
		case "consoleId":
			
				if(introjs._currentStep == 11) {
					$("#runEditor1").empty();
				} else if(introjs._currentStep == 18) {
					
					$("#runEditor2").empty();
				} else {
					
					$("#runEditor3").empty();
				} 
			
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
					if (introjs._currentStep != 0 && introjs._currentStep != 1) {
						$('.introjs-prevbutton').show();
					}
					$('.introjs-nextbutton').show();
					return;
				}
				
				if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
					introjs._introItems[introjs._currentStep]["isCompleted"] = true;
				}
				
				// ********************** end ************back button logic
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "heading":
			var text = "Let us understand <span class='ct-code-b-yellow'>Local and Global</span> variables.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "codeAnimation":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#codeAnimation").removeClass("opacity00");
				var text = "Let us consider an example which will explain the difference between local and global variables.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "funcDec":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "We declare a function <span class='ct-code-b-yellow'>display()</span> with <span class='ct-code-b-yellow'>no" 
							+ " arguments</span> and with <span class='ct-code-b-yellow'>no</span> return value.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
			
		case "globalVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "A variable <span class='ct-code-b-yellow'>a</span> is declared out side the " 
							+ "<span class='ct-code-b-yellow'>main()</span> method. These variables that are declared out side of any method are" 
							+ " called <span class='ct-code-b-yellow'>global variables</span>. <br>They are available throughout the program.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
			
		case "startMain":
		case "mainFunc":
			setTimeout(function() {
				if (introjs._direction == "forward") {
					$("#globalVar").removeClass("blinking-white");
					$(".introjs-helperLayer").one("transitionend", function() {
						introjs.nextStep();
					});
					} else {
						introjs.previousStep()
						}
				}, 500);
			
			break;
			
		case "funcDef":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the definition of the function <span class='ct-code-b-yellow'>display()</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
			
		case "addressDiv":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#addressDiv').removeClass("opacity00");
				if(introjs._currentStep == 4) {
					$("#gVal").text(50);
					var l1 = $("#tweenVal1").offset();
					$("#gVal").offset({"top": l1.top, "left": l1.left});
					$("#globalVar").addClass("blinking-white");
					tl.to("#globalVal", 1, {opacity: 1, onComplete: function() {
						$("#globalVar").removeClass("opacity00, blinking-white");
						$("#tweenVal1, gVal").addClass("blinking-white");
						$("#gVal").removeClass("opacity00");
						tl.to("#gVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
							$("#tweenVal1, #gVal").removeClass("blinking-white");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The variable <span class='ct-code-b-yellow'>a</span> is allocated 2 bytes in memory and assigned" 
										+ " with value <b>50</b>.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton,.introjs-prevbutton").show();
							});
						}});
					}});
					
				} else if(introjs._currentStep == 9) {
					$("#lVal").text(20);
					var l1 = $("#tweenVal2").offset();
					$("#lVal").offset({"top": l1.top, "left": l1.left});
					$("#localVar").addClass("blinking-white");
					tl.to("#boxHeading, #varBox", 1, {opacity: 1, onComplete: function() {
						$("#localVar").removeClass("opacity00, blinking-white");
						$("#tweenVal2, #lVal").addClass("blinking-white");
						$("#lVal").removeClass("opacity00");
						tl.to("#lVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
							$("#tweenVal2, #lVal").removeClass("blinking-white");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The variable <span class='ct-code-b-yellow'>a</span> is allocated 2 bytes in memory and assigned" 
										+ " with value <b>20</b>."; 
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton,.introjs-prevbutton").show();
							});
						}});
					}});
				} else {
					
					$("#valRes").effect( "transfer", { to: $("#gVal"), className: "ui-effects-transfer" }, 1000 , function() {
						tl.to("#gVal", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
							$("#gVal").text(70);
							tl.to("#gVal", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
								$('.introjs-tooltip').removeClass("hide");
								var text = "Now <span class='ct-code-b-yellow'>global</span> variable <span class='ct-code-b-yellow'>a</span>"
											+ " becomes <b>70</b>.";
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton,.introjs-prevbutton").show();
								});
							}});
						}});
					});
				}
			});
			
			break;
			
		case "functionCall":
			$("#localVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "Here no local variable declaration of <y>a</y> soit takes the reference from global variable.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
			
		case "localVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "An integer variable with the same name <span class='ct-code-b-yellow'>a</span> is declared and assigned with"
							+ " value <span class='ct-code-b-yellow'>20</span>. This variable is called <span class='ct-code-b-yellow'>local</span>"
							+ " variable and can be used only inside the <span class='ct-code-b-yellow'>main()</span> method.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
		break;
		
		case "mainPf1":
		case "mainPf2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>a</y> is local variable which contained in main(), so it returns <y>20</y>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
		break;
			
		
		case "userPrintf":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					if (introjs._direction == "forward") {
					introjs.nextStep();
				} else {
						introjs.previousStep()
					}
				}, 500);
			});
				/*typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});*/
			break;
			
		case "valRes":
			$("#globalVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here, <b>20</b> is added to <span class='ct-code-b-yellow'>a</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
		break;
			
		case "valDec":
			
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The display() function will first search if any <span class='ct-code-b-yellow'>local variable</span> exists with that"
							+ " name, if it does not exist, it searches for a <span class='ct-code-b-yellow'>global variable</span> of that name."
							+ "<br> Here, a <span class='ct-code-b-yellow'>global variable</span> with the name <span class='ct-code-b-yellow'>a</span>"
							+ " exist.";
				typing(".introjs-tooltiptext", text, function() {
					$("#globalVar").addClass("blinking-white");
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
			
		case "valAddition":
			$("#globalVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "Here, 20 is added to the existing value 50."; 
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
			
		case "endFunc":
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "When the end of the function is reached, the control is transferred back to the calling method and executes the next" 
							+ " statement that occurs after this function call.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
			
		case "endMain":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "End of the program.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
			
		case "consoleId":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#consoleId').removeClass("opacity00");
				if(introjs._currentStep == 11) {
					setTimeout(function() {
						if (introjs._direction == "forward") {
							$("#runEditor1").append("value in main() before call : <b style='color: yellow'>20</b>");
							setTimeout(function() {
						introjs.nextStep();
							}, 500);
					} else {
							introjs.previousStep()
						}
					}, 500);
				} else if(introjs._currentStep == 18) {
					setTimeout(function() {
						if (introjs._direction == "forward") {
							$("#runEditor2").append("value in display() : <b style='color: yellow'>70</b>");
							setTimeout(function() {
								introjs.nextStep();
									}, 500);
					} else {
						introjs.previousStep()
						}
					}, 500);
				} else {
					setTimeout(function() {
						if (introjs._direction == "forward") {
							$("#runEditor3").append("value in main() after call : <b style='color: yellow'>20</b>");
							setTimeout(function() {
								introjs.nextStep();
									}, 500);
					} else {
							introjs.previousStep()
						}
					}, 1000);
				} 
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
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function nextStep() {
	setTimeout(function() {
		if (introjs._direction == "forward") {
		introjs.nextStep();
	} else {
			introjs.previousStep()
		}
	}, 1000);
}