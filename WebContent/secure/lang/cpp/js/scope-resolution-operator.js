var asciiVal;
var binaryVal;
var typingInterval = 50;

var usageOfGetcharReady = function() {
	introGuide();
	tl = new TimelineLite();
	$("#address1").text(Math.floor((Math.random() * 1024) + 1986));
	$("#address2").text(Math.floor((Math.random() * 1024) + 1996));
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function(){
		$("#inputChar, #inputChar2").val("");
		location.reload();
	});
	
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :"#infoDiv",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element :"#preTableDiv",
			intro : "",
			position : 'right',
		}, {
			element : "#globalVar",
			intro : "",
			position : "right"
		}, {
			element : "#addressDiv",
			intro : "",
			animateStep : 'globalVal',
			tooltipClass : "hide",
			position : "left"
		}, {
			element : "#mainFunc",
			intro : "",
			tooltipClass : "hide"
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
			animateStep : 'localVal',
			tooltipClass : "hide",
			position : "left"
		}, {
			element : "#mainPf1",
			intro : "",
		}, {
			element : "#consoleId",
			intro : "",
			animateStep : 'runEditor1',
			tooltipClass : "hide",
		}, {
			element : "#mainPf2",
			intro : "",
		}, {
			element : "#consoleId",
			intro : "",
			animateStep : 'runEditor2',
			tooltipClass : "hide",
		}, {
			element : "#funcDef",
			intro : "",
			position : "right"	
		}, {
			element : "#localVar1",
			intro : "",
			position : "right"
		}, {
			element : "#addressDiv",
			intro : "",
			animateStep : 'localVal1',
			tooltipClass : "hide",
			position : "left"
		}, {
			element : "#mainPf3",
			intro : "",
		}, {
			element : "#consoleId",
			intro : "",
			animateStep : 'runEditor3',
			tooltipClass : "hide",
		}, {
			element : "#mainPf4",
			intro : "",
		}, {
			element : "#consoleId",
			intro : "",
			animateStep : 'runEditor4',
			tooltipClass : "hide",
		}, {
			element : "#endFunc",
			intro : "",
			position : "right"
		}, {
			element : "#endMain",
			intro : "",
			position : "right"
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
		var elementId = targetElement.id;
		if (elementId == "line5") {
			$("#line5").addClass('z-index9999999');
		}
		switch (elementId) {
		case 'infoDiv':
/*** The general format is: variable=get ( ); ***/			
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list").fadeTo(300, 1, function() {
				$("#list1").fadeTo(300, 1, function() {
					$("#list2").fadeTo(300, 1, function() {
						$("#list3").fadeTo(300, 1, function() {
							$("#list4").fadeTo(300, 1, function() {
								$("#list5").fadeTo(300, 1, function() {
									$("#syntax").fadeTo(300, 1, function() {
											//	$("#infoDiv").addClass('z-index9999999');
												$('#nextButton').removeClass("opacity00");
												$('.user-btn').click(function() {
													$('.user-btn').remove();
														introjs.nextStep();
											});
									});
								});
							});
									
						});
					});
				});
			});
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Let us consider an example using <span class='ct-code-b-yellow'>scope resolution operator</span>.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line2':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext', "<span class='ct-code-b-yellow'>ch</span> is a character variable used to store " +
						"only one character at a time.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case "globalVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "A variable <span class='ct-code-b-yellow'>a</span> is declared out side the " 
							+ "<span class='ct-code-b-yellow'>main()</span> method. These variables that are declared out side of any method are" 
							+ " called <span class='ct-code-b-yellow'>global variables</span>. <br>They are available throughout the program.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "startMain":
		case "mainFunc":
			$("#globalVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
			
		case "addressDiv":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "globalVal" :
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#addressDiv').removeClass("opacity00");
					$('#globalVal').removeClass("opacity00");
						$("#gVal").text(10);
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
											+ " with value <b>10</b>.";
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton").show();
								});
							}});
						}});
				});
				break;
			case "localVal" :
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#addressDiv').removeClass("opacity00");
					$('#localVal').removeClass("opacity00");
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
								$(".introjs-nextbutton").show();
							});
						}});
					}});
				});
				break;
				
				case "localVal1" :
					$(".introjs-helperLayer").one("transitionend", function() {
						$('#addressDiv').removeClass("opacity00");
						$('#localVal1').removeClass("opacity00");
						$("#lVal1").text(30);
						var l1 = $("#tweenVal3").offset();
						$("#lVal1").offset({"top": l1.top, "left": l1.left});
						$("#localVar1").addClass("blinking-white");
						tl.to("#boxHeading1, #varBox1", 1, {opacity: 1, onComplete: function() {
							$("#localVar1").removeClass("opacity00, blinking-white");
							$("#tweenVal3, #lVal1").addClass("blinking-white");
							$("#lVal1").removeClass("opacity00");
							tl.to("#lVal1", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
								$("#tweenVal3, #lVal1").removeClass("blinking-white");
								$('.introjs-tooltip').removeClass("hide");
								var text = "The variable <span class='ct-code-b-yellow'>a</span> is allocated 2 bytes in memory and assigned" 
											+ " with value <b>30</b>."; 
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton").show();
								});
							}});
						}});
					});
					break;
		}
		break;
		case "localVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "An integer variable with the same name <span class='ct-code-b-yellow'>a</span> is declared and assigned with"
							+ " value <span class='ct-code-b-yellow'>20</span>. This variable is called <span class='ct-code-b-yellow'>local</span>"
							+ " variable and can be used only inside the <span class='ct-code-b-yellow'>main()</span> method.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "mainPf1":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
		case "mainPf2":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
		case "mainPf3":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
		case "mainPf4":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
		case "userPrintf":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
			
		case "funcDef":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#globalVar").removeClass("blinking-white");
				var text = "This is another compound statement in <span class='ct-code-b-yellow'>main()</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;	
		case "localVar1":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "An integer variable with the same name <span class='ct-code-b-yellow'>a</span> is declared and assigned with"
							+ " value <span class='ct-code-b-yellow'>30</span>. This variable is called <span class='ct-code-b-yellow'>local</span>"
							+ " variable and can be used only inside the <span class='ct-code-b-yellow'>main()</span> method.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case "endFunc":
			$(".introjs-helperLayer").one("transitionend", function() { 
				$("#globalVar").removeClass("blinking-white");
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;
			
		case "endMain":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "End of the program.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "consoleId":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "runEditor1" :
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#mainPf1").effect( "transfer", { to: $("#runEditor1"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#runEditor1").removeClass("opacity00");
						//typing("#runEditor1", text, function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						//});
					});
				});
				break;
			case 'runEditor2':
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#globalVar").addClass("blinking-white");
					$("#mainPf2").effect( "transfer", { to: $("#runEditor2"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#runEditor2").removeClass("opacity00");
						//typing("#printLine2", text, function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						//});
					});
				});
				break;
			case "runEditor3" :
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#mainPf3").effect( "transfer", { to: $("#runEditor3"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#runEditor3").removeClass("opacity00");
						//typing("#runEditor1", text, function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						//});
					});
				});
				break;
			case 'runEditor4':
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#globalVar").addClass("blinking-white");
					$("#mainPf4").effect( "transfer", { to: $("#runEditor4"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#runEditor4").removeClass("opacity00");
						//typing("#printLine2", text, function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						//});
					});
				});
				break;
			}
			break;
		case "restart":
			$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-tooltipbuttons').addClass("hide");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	
	introjs.start();
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 10;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

function checking(selector) {
	$(selector).on("click keyup keydown", function(){
		if($(selector).val() == "" ) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
	});
}
