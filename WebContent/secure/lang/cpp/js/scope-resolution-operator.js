
var usageOfScopeResolutionOperatorReady = function() {
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
			tooltipClass : 'hide'
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
			tooltipClass : "hide",
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
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "globalVar":
			$("#globalVal").css("opacity", 0);
			break;
		case "addressDiv":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "globalVal" :
				$('#mainDiv, #boxHeading').addClass("opacity00"); 
				break;
			case "localVal" :
				$('#localVal').addClass("opacity00");
				break;
			case "localVal1" :
				$('#localVal1').addClass("opacity00");
				break;
			}
			break;
		case "mainFunc":
			$('#mainDiv, #boxHeading').addClass("opacity00"); 
			break;
		case "localVar":
			$("#varBox").css("opacity", 0);
			break;
		case "localVar1":
			$('#localVal1').addClass("opacity00");
			break;
		case "funcDef":
			$('#boxHeading1, #varBox1').addClass("opacity00");
			break;
		case "mainPf1":
			$("#consoleId").addClass("opacity00");
			break;
		case "consoleId":
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "runEditor2" :
				$('#boxHeading1, #varBox1').addClass("opacity00");
				break;
			}
			break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
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
		var elementId = targetElement.id;
		switch (elementId) {
		case 'infoDiv':
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list").fadeTo(300, 1, function() {
				$("#list1").fadeTo(300, 1, function() {
					$("#list2").fadeTo(300, 1, function() {
						$("#list3").fadeTo(300, 1, function() {
							$("#list4").fadeTo(300, 1, function() {
								$("#list5").fadeTo(300, 1, function() {
									$("#syntax").fadeTo(300, 1, function() {
										$("#infoDiv").addClass('z-index9999999');
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
				$('.introjs-tooltip').removeClass('hide');
				var text = "Let us consider an example using <span class='ct-code-b-yellow'>Scope " +
						   "resolution operator</span>.";
				typing('.introjs-tooltiptext',text, function() {
					$(".introjs-nextbutton").show();
					$(".introjs-prevbutton").hide();
				});
			});
			break;
		case 'line2':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>ch</span> is a character " +
							"variable used to store only one character at a time.";
				typing('.introjs-tooltiptext',text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "globalVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 	"<ul><li>The variable <span class='ct-code-b-yellow'>a</span> is declared " +
								"out side the <span class='ct-code-b-yellow'>main()</span> method.</li>" +
							"<li>The variables which are declared out side of " +
								"<span class='ct-code-b-yellow'>main()</span> method method are " 
							+"called <span class='ct-code-b-yellow'>global variables</span>.</li>"
							+"<li>They are available throughout the program.</li>";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "mainFunc":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#mainDiv, #boxHeading').removeClass("opacity00"); 
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"The <span class='ct-code-b-yellow'>main()</span> where program " +
							"execution starts."
				typing('.introjs-tooltiptext',text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "addressDiv":
			$('#addressDiv').removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "globalVal" :
				$(".introjs-helperLayer").one("transitionend", function() {
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
								var text = "The variable <span class='ct-code-b-yellow'>a</span> is allocated " +
											"<span class='ct-code-b-yellow'>2 bytes</span> in memory and assigned " +
											"with value <span class='ct-code-b-yellow'>10</span>.";
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							}});
						}});
				});
				break;
			case "localVal" :
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#localVal').removeClass("opacity00");
					$("#lVal").text(20);
					var l1 = $("#tweenVal2").offset();
					$("#lVal").offset({"top": l1.top, "left": l1.left});
					$("#localVar").addClass("blinking-white");
					tl.to("#varBox", 1, {opacity: 1, onComplete: function() {
						$("#localVar").removeClass("opacity00, blinking-white");
						$("#tweenVal2, #lVal").addClass("blinking-white");
						$("#lVal").removeClass("opacity00");
						tl.to("#lVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
							$("#tweenVal2, #lVal").removeClass("blinking-white");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The variable <span class='ct-code-b-yellow'>a</span> is allocated " +
										"<span class='ct-code-b-yellow'>2 bytes</span> in memory and assigned " +
										"with value <span class='ct-code-b-yellow'>20</span>."; 
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton, .introjs-prevbutton").show();
							});
						}});
					}});
				});
				break;
				
				case "localVal1" :
					$(".introjs-helperLayer").one("transitionend", function() {
						$('#localVal1').removeClass("opacity00");
						$("#lVal1").text(30);
						var l1 = $("#tweenVal3").offset();
						$("#lVal1").offset({"top": l1.top, "left": l1.left});
						$("#localVar1").addClass("blinking-white");
						tl.to("localVal1", 1, {opacity: 1, onComplete: function() {
							$("#localVal1").removeClass("opacity00");
							$("#localVar1").removeClass("blinking-white");
							$("#tweenVal3, #lVal1").addClass("blinking-white");
							$("#lVal1").removeClass("opacity00");
							tl.to("#lVal1", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
								$("#tweenVal3, #lVal1").removeClass("blinking-white");
								$('.introjs-tooltip').removeClass("hide");
								var text = "The variable <span class='ct-code-b-yellow'>a</span> is allocated " +
											"<span class='ct-code-b-yellow'>2 bytes</span> in memory and assigned " +
											"with value <span class='ct-code-b-yellow'>30</span>."; 
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							}});
						}});
					});
					break;
		}
		break;
		case "localVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>An integer variable with the same name <span class='ct-code-b-yellow'>a</span> is " +
								"declared and assigned with value <span class='ct-code-b-yellow'>20</span>.</li>" +
							"<li>This variable is called <span class='ct-code-b-yellow'>local</span> variable " +
								"and can be used only inside the <span class='ct-code-b-yellow'>main()</span> method.</li>";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "mainPf1":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "mainPf2":
			$("#varBox").removeClass("z-index9999999");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "mainPf3":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "mainPf4":
			$("#varBox1").removeClass("z-index9999999");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "userPrintf":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "funcDef":
			$("#globalVal").removeClass("z-index9999999");
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#boxHeading1, #varBox1').removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = "This is another compound statement in <span class='ct-code-b-yellow'>main()</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;	
		case "localVar1":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 	"<ul><li>An integer variable with the same name <span class='ct-code-b-yellow'>a</span> " +
						    	"is declared and assigned with value <span class='ct-code-b-yellow'>30</span>.</li>" +
						    "<li>This variable is called <span class='ct-code-b-yellow'>local</span> variable and " +
						    	"can be used only inside the <span class='ct-code-b-yellow'>main()</span> method.</li>";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "endFunc":
			$("#globalVal").removeClass("z-index9999999");
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "End of the inner-block of <span class='ct-code-b-yellow'>main()</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "endMain":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "End of the program.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "consoleId":
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "runEditor1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#runEditor1, #locAVal").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#locaVarVal").addClass("z-index9999999").effect( "transfer", { to: $("#runEditor1"), className: "ui-effects-transfer" }, 1500 , function() {
							$("#runEditor1").removeClass("opacity00");
							$("#locaVarVal").removeClass("z-index9999999");
							$("#varBox").addClass("z-index9999999");
							transferEffect("#locA", "#locAVal", function() {
								$("#varBox").removeClass("z-index9999999");
								setTimeout(function () {
									introjs.nextStep();
								}, 500);
							});
						});
					}
				});
				break;
			case 'runEditor2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#runEditor2, #globAVal").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#globVarVal").addClass("z-index9999999").effect( "transfer", { to: $("#runEditor2"), className: "ui-effects-transfer" }, 1500 , function() {
							$("#runEditor2").removeClass("opacity00");
							$("#globVarVal").removeClass("z-index9999999");
							$("#globalVal").addClass("z-index9999999");
							transferEffect("#globA", "#globAVal", function() {
								$("#globalVal").removeClass("z-index9999999");
								setTimeout(function () {
									introjs.nextStep();
								}, 500);
							});
						});
					}
				});
				break;
			case "runEditor3" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#runEditor3, #locA1Val").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#locaVarVal1").addClass("z-index9999999").effect( "transfer", { to: $("#runEditor3"), className: "ui-effects-transfer" }, 1500 , function() {
							$("#runEditor3").removeClass("opacity00");
							$("#locaVarVal1").removeClass("z-index9999999");
							$("#varBox1").addClass("z-index9999999");
							transferEffect("#locA1", "#locA1Val", function() {
								$("#varBox1").removeClass("z-index9999999");
								setTimeout(function () {
									introjs.nextStep();
								}, 500);
							});
						});
					}
				});
				break;
			case 'runEditor4':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#runEditor4, #globA1Val").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#globVarVal1").addClass("z-index9999999").effect( "transfer", { to: $("#runEditor4"), className: "ui-effects-transfer" }, 1500 , function() {
							$("#runEditor4").removeClass("opacity00");
							$("#globVarVal1").removeClass("z-index9999999");
							$("#globalVal").addClass("z-index9999999");
							transferEffect("#globA1", "#globA1Val", function() {
								$("#globalVal").removeClass("z-index9999999");
								setTimeout(function () {
									introjs.nextStep();
								}, 500);
							});
						});
					}
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
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	})
}
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass('circle-css').effect( "highlight",{color: '#ffff33'}, 1000);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1200 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("circle-css")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
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