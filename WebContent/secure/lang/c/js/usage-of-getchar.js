var asciiVal;
var binaryVal;
var typingInterval = 1;

var usageOfGetcharReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restartBtn").click(function(){
		$("#inputChar, #inputChar2").val("");
		location.reload();
	});
	$('#closeBtn').click(function() {
		window.parent.$(".ui-dialog-titlebar-close").click();
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
			element :"#line4",
			intro : "",
			position : 'right',
			//tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			position : 'right',
			animateStep : 'checking',
			tooltipClass :"hide"
		},{
			element : '#line5',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			position : 'right',
			animateStep : 'printLine',
			tooltipClass : 'hide'
		}, {
			element : '#preTableDiv2',
			intro : '',
			tooltipClass: "hide"
		}, {
			element : '#preline1',
			intro : '',
		}, {
			element :"#consoleId2",
			intro : "",
			position : 'bottom',
			animateStep : 'checking',
			tooltipClass :"hide"
		}, {
			element : '#preline2',
			intro : '',
		}, {
			element :"#consoleId2",
			intro : "",
			position : 'bottom',
			animateStep : 'printPreline1',
			tooltipClass : 'hide'
		}, {
			element : '#preline3',
			intro : '',
		}, {
			element :"#consoleId2",
			intro : "",
			position : 'bottom',
			animateStep : 'printPreline2',
			tooltipClass : 'hide'
		}, {
			element :"#button",
			intro : "<ul><li>Click on <span class='ct-code-b-yellow'>Close</span> button to close the Live Demo.</li>" +
					"<li>Click on <span class='ct-code-b-yellow'>Restart</span> button to restart the Live Demo.</li></ul>",
			position : 'right',
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
		var elementId = targetElement.id;
		if (elementId == "line5") {
			$("#line5").addClass('z-index9999999');
		}
		switch (elementId) {
		
		case 'line4':
			$("#consoleId").addClass("opacity00");
			$("#inputChar").val('');
			$('.user-btn').remove();
			break;
		
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'checking':
				$("#printLineInConsole").addClass("opacity00");
				$("#inputChar").val('');
				break;
			case 'printLine':
				$("#preTableDiv2").removeAttr("style")
				break;
			}
			break;
		case 'preline1':
			$("#consoleId2").addClass("opacity00");
			break;
		case 'preline2':
			$("#printpreLine1").addClass("opacity00");
			break;
		case 'preline3':
		
			var text = "This statement prints the character represented by <span class='ct-greenyellow-color'>ASCII</span> code using "+
			"<span class='ct-code-b-yellow'>%c</span> format."
		typing(".introjs-tooltiptext", text, function() {
			
		});
			
			break;
		case 'consoleId2':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			
			switch(animateStep) {
			
			
			case 'checking':
				$("#inputChar2").val('');
				$("#printpreLine1").addClass("opacity00");
				break;
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
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
		var elementId = targetElement.id;
		if (elementId == "line5") {
			$("#line5").addClass('z-index9999999');
		}
		switch (elementId) {
		case 'infoDiv':
             /*** The general format is: variable=getchar ( ); ***/			
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$("#list3").fadeTo(300, 1, function() {
						$("#list4").fadeTo(300, 1, function() {
						//	$("#infoDiv").addClass('z-index9999999');
							$('#nextButton').removeClass("opacity00");
							//$(".introjs-tooltip").removeClass("hide");
							$('.user-btn').click(function() {
								$('.user-btn').remove();
								setTimeout(function() {
									if (introjs._direction=="forward") {
										introjs.nextStep()
										} else {
											introjs.previousStep()
											}
									}, 500);
							});
						});
					});
				});
			});
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
			
				typing('.introjs-tooltiptext', "Let us consider an example using <span class='ct-code-b-yellow'>getchar()</span> function.", function() {
					$(".introjs-prevbutton").hide();
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line2':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext', "To declare a variable which is of character type we use <span class='ct-code-b-yellow'>char</span> "+
						"datatype.<br><span class='ct-code-b-yellow'>char</span> datatype occupies <span class='ct-code-b-yellow'>one byte</span> (8-bits) in the memory.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line3':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext', "<span class='ct-code-b-yellow'>ch</span> is a character variable used to store " +
						"only one character at a time.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line4':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "The <span class='ct-code-b-yellow'>ch</span> is initialized with the character that is returned by the "+
					"<span class='ct-code-b-yellow'>getchar()</span> function.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-tooltip").removeClass("hide");
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
		case 'line5':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#line5").removeClass("opacity00");
				setTimeout(function() {
					if (introjs._direction=="forward") {
							introjs.nextStep()
					} else {
						introjs.previousStep()
					}
				}, 500);
			});
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'checking':
				
				$("#inputChar").attr("disabled", false);
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text ="The <span class='ct-code-b-yellow'>getchar()</span> tries to read an input from the console."+
					"<br><br> Please type a character now.";
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext', text, function() {
						$("#inputChar").addClass("blinking");
						$("#inputChar").focus();
						checking("#inputChar", 1);
						
					});
				});
				break;
			case 'animation':
				break;
			case 'printLine':
				$('.introjs-helperLayer ').one('transitionend', function() {
						         setTimeout(function() {
								if (introjs._direction=="forward") {
									$("#line5").effect( "transfer", { to: $("#printLineInConsole"), className: "ui-effects-transfer" }, 1500 , function() {
										$("#printLineInConsole").removeClass("opacity00");
										var text = "The given input character is : " + $("#inputChar").val();
									typing("#printLineInConsole", text, function() {
										 setTimeout(function() {
										introjs.nextStep()
										 }, 1000);
									});	
									});
								} else {
									introjs.previousStep()
								}
							}, 500);
						
					
				});
				break;
			}
			break;
		case 'animationBox':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'memoryZooming':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#animationBox").removeClass("opacity00");
					var text = "The variable <span class='ct-code-b-yellow'>ch</span> " +
					"occupies <span class='ct-color-lime'>1 byte</span> in the memory with its address (i.e. location).<br>" +
					"Here, the address is <span class='ct-code-b-yellow'>2034</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#memoryBox").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
							$("#arrows").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
								$("#memoryBox, #arrows").removeClass("animated zoomIn");
								$("#bytes").removeClass("visibility-hidden", function() {
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				});
				break;
			case 'animationPart':
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".panel-body").text($("#inputChar").val()).addClass("opacity00");
					var text = "Here :<br>" +
								"<ul><li><span class='ct-code-b-gold'><b>ch</b></span> is a character variable.</li>" + 
								"<li><span class='ct-code-b-gold'><b>" + $('#inputChar').val() + "</b></span> is a character " +
								"and stored in <span class='ct-code-b-yellow'>ch</span>.</li>" +
								"<li><span class='ct-code-b-gold'><b>2034</b></span> is the address of the " +
								"variable <span class='ct-code-b-yellow'>ch</span>.</li></ul>";
					$(".panel-body").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
				break;
			}
			break;
		case 'preTableDiv2':
			$('.introjs-helperLayer').one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				var text = "Let us consider one more example using <span class='ct-code-b-yellow'>getchar()</span>."
				typing(".introjs-tooltiptext", text, function() {
					TweenMax.to($("#preTableDiv2"), 1, {opacity: 1, onComplete: function() {
						$(".introjs-nextbutton,.introjs-prevbutton").show();
					}});
				});
			});
			break;
		case 'preline1':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "In this particular statement you will notice the value returned by <span class='ct-code-b-yellow'>getchar()</span> "+
				"is stored as an <span class='ct-code-b-yellow'>int</span>. Which means the character ASCII code will be stored in the "+
				"<span class='ct-code-b-yellow'>ascii_code</span> variable.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
		case 'preline2':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This statement prints the <span class='ct-greenyellow-color'>ASCII</span> code using "+
					"<span class='ct-code-b-yellow'>%d</span> format."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
		case 'preline3':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This statement prints the character represented by <span class='ct-greenyellow-color'>ASCII</span> code using "+
					"<span class='ct-code-b-yellow'>%c</span> format."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
				 
			});
			break;
		case 'consoleId2':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'checking':
				$("#inputChar").attr("disabled", false);
				$("#consoleId2").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text ="Please provide a character.";
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext', text, function() {
						$("#inputChar2").addClass("blinking");
						$("#inputChar2").focus();
						checking("#inputChar2", 2);
						//$(".introjs-nextbutton,.introjs-prevbutton").show();
						
					});
				});
				break;
			case 'printPreline1':
				$('.introjs-helperLayer ').one('transitionend', function() {
						var givenInput = $("#inputChar2").val();
							setTimeout(function() {
								if (introjs._direction=="forward") {
										$("#preline2").effect( "transfer", { to: $("#printpreLine1"), className: "ui-effects-transfer" }, 1500 , function() {
											$("#printpreLine1").removeClass("opacity00");
											var text = "The ascii_code read from input is : " + asciiVal;
											asciiVal = givenInput.charCodeAt(0);
											typing("#printpreLine1", text, function() {
												setTimeout(function() {
										introjs.nextStep()
												}, 500);
									});
									});
								} else {
									introjs.previousStep()
								}
							}, 500);
						});
					
				
				break;
			case 'printPreline2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#preline3").effect( "transfer", { to: $("#printpreLine2"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#printpreLine2").removeClass("opacity00");
						var text = $("#printpreLine2").text() + $("#inputChar2").val();
						typing("#printpreLine2", text, function() {
							setTimeout(function() {
								if (introjs._direction=="forward") {
									setTimeout(function() {
										introjs.nextStep()
									}, 500);
								} else {
									introjs.previousStep()
								}
							}, 500);
						});
					});
				});
				break;
			}
			break;

		case "button":
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$(".introjs-tooltip").css("min-width","380px");
			$(".introjs-tooltipbuttons").hide()
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn, #closeBtn").removeClass("opacity00");
			});
			break;	
		}
	});
	
	introjs.start();
}

	
function convertToBinary(asciiVal) {
	binaryVal = Number(asciiVal).toString(2);
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 1;
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

function checking(selector, value) {
	$(selector).on("keydown keyup", function(){
		if($(selector).val() == "") {
			$('.user-btn').remove();
		
			$(".introjs-nextbutton,.introjs-prevbutton").hide();
		} else {
			if (value == 1) {
				$('.user-btn').remove();
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="checking1Anim()">Next &#8594;</a>');
			} else {
				$(".introjs-nextbutton,.introjs-prevbutton").show();
				
			}
			$(".introjs-prevbutton").show();
		}
	});
}

function checking1Anim() {
	$('.user-btn').remove();
	$(".introjs-prevbutton").hide();
	var givenInput = $("#inputChar").val();
	$("#inputChar").attr("disabled", "disabled");
	asciiVal = givenInput.charCodeAt(0);
	binaryVal = Number(asciiVal).toString(2);
	convertToBinary(asciiVal);
	$("#consoleId").removeClass("opacity00");
	$("#line5").focus();
	var text = '<ul><li>The given input character <span id="getvalue" class="ct-code-b-yellow">'+ ""
		+ $("#inputChar").val() + '</span> is read from the input stream and stored in the value '+
		'<span class="ct-code-b-yellow">ch</span>.</li><span id="lines"></span></ul>';
	
	typing('.introjs-tooltiptext', text, function() {
		$(".introjs-nextbutton,.introjs-prevbutton").show();
	});
}
function animation() {
	var l3 = $("#inputChar").offset();
	var l4 = $("#getvalue").offset();
	var topLen = l3.top - l4.top;
	var leftLen = l3.left - l4.left;
	$("#getvalue").removeClass("opacity00");
	TweenMax.from("#getvalue", 2, {top: topLen, left: leftLen, onComplete: function() {
		afterAnimation();
	}});
}

function afterAnimation() {
	var text = "<li>The <span class='ct-greenyellow-color'>ASCII</span> value of the given character " +
				"is <span class='ct-orange-color'><b>"+ asciiVal +"</b></span>.</li>" +
				"<li>Now the <span class='ct-greenyellow-color'>ASCII</span> value is converted into binary value i.e. " + 
					"<span class='ct-sgreen-color'><b>" + binaryVal + "</b></span>, and it is stored in the variable " +
					"<span class='ct-code-b-yellow'>ch</span>.</li>";
	typing('#lines', text, function() {
		$(".introjs-nextbutton").show();
	});
}
