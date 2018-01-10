var inputVar;

var usageOfPutReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	$("#restart").click(function() {
		$("#inputChar").val("");
		location.reload();
	});
	
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :'#infoDiv',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element :'#preTableDiv',
			intro : '',
			position : 'right',
			tooltipClass : 'hide',
		}, {
			element : '#main',
			intro : '',
			position : "right"
			
		}, {
			element :'#line2',
			intro : '',
			position : "right",
		}, {
			element :'#memoryBox',
			intro : '',
			animateStep : 'firstStep',
			position : "right",
			tooltipClass : 'hide',
		}, {
			element :'#line3',
			intro : '',
			position : "right",
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'typeChar',
			tooltipClass : 'hide',
		}, {
			element :'#line4',
			intro : '',
		}, {
			element :'#consoleId',
			intro : '',
			animateStep : 'firstStep',
			tooltipClass : 'hide'
		}, {
			element :'#memoryBox',
			intro : '',
			animateStep : 'secondStep',
			tooltipClass : 'hide',
		}, {
			element :'#line5',
			intro : '',
		}, {
			element :'#consoleId',
			intro : '',
			animateStep : 'secondStep',
			tooltipClass : 'hide',	
		}, {
			element : '#end',
			intro : '',
			position : "right"
		}, {
			element :'#preDiv',
			intro : '',
			position : "right",
			tooltipClass : 'hide',
		}, {
			element : '#main1',
			intro : '',
			position : "right"
		}, {
			element :'#line6',
			intro : '',
			position : "right",
		}, {
			element :'#consoleId1',
			intro : '',
			animateStep : 'firstStepInConsoleId1',
			tooltipClass: 'hide' 
		}, {
			element :'#line7',
			intro : '',
		}, {
			element :'#consoleId1',
			intro : '',
			animateStep : 'secondStepInConsoleId2',
			tooltipClass: 'hide'
		}, {
			element : '#end1',
			intro : '',
			position : "right"
		}, {
			element : '#finalText',
			intro : '',
			tooltipClass: 'hide'
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case 'line2':
			$("#memoryBox").addClass("visibility-hidden");
			break;
		case 'line3':
			$("#typeChar").addClass("visibility-hidden");
			$("#consoleId").addClass("opacity00");
			break;
		case 'line4':
			$("#inputChar").val("");
			break;
		case 'line5':	
			$("#typingChar").text("");
			break;
		case 'memoryBox':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$("#memoryBox").addClass("visibility-hidden").removeClass("animated zoomIn");
				break;
			case 'secondStep':
				$(".panel-body").removeClass("animated zoomIn");
				break;
			}
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$("#panelBody").text("");
				$("#inputChar").val("");
				break;
			}
			break;
		case 'end':
			$("#preDiv").addClass("visibility-hidden");
			break;
		case 'line6':
			$("#constantChar").text("");
			$("#consoleId1").addClass("opacity00");
			break;
		case 'line7':	
			$("#asciiChar").text("");
			break;
		}
	});

	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
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
		switch(elementId) {
		case 'infoDiv' :
			//$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#infoDiv").addClass("z-index9999999");
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$("#list3").fadeTo(300, 1, function() {
						$("#list4").fadeTo(300, 1, function() {
							$("#list5").fadeTo(300, 1, function() {
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
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = "Let us consider an example using <span class='ct-code-b-yellow'>put()</span> function.";
				typing('.introjs-tooltiptext',text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case 'main':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>main()</span> is the starting point of execution."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		
		case 'line2':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>ch</span> is a character variable used" +
						   " to store only <span class='ct-code-b-yellow'>one</span> character at a time.";
				typing('.introjs-tooltiptext',text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line3':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>cout</span> is used to display the message " +
							"specified with in double quotes on the output screen.";
				typing('.introjs-tooltiptext',text , function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line4':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "This line retrives reads a character from the console and stores " +
						   "in character <span class='ct-code-b-yellow'>ch</span>.";
				var text = "<span class='ct-code-b-yellow'>get()</span> is instance " +
						   "of <span class='ct-code-b-yellow'>istream</span> class which reads only " +
						   "<span class='ct-code-b-yellow'>one</span> char at a time from keyboard.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
				
			});
			break;
			
		case 'line5':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "The <span class='ct-code-b-yellow'>put()</span> is used to write the " +
						   "value stored in the character <span class='ct-code-b-yellow'>ch</span> " +
						   "to the standard output(console).";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'end':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = 	"This is the end of the <span class='ct-code-b-yellow'>main()</span> function " +
							"where the program execution ends.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'memoryBox':
			$('.introjs-helperLayer').one('transitionend', function() {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'firstStep':
					$("#memoryBox").css({"border" : "1px solid green", "border-radius" : "8%"});
					$('.introjs-helperLayer ').one('transitionend', function() {
						$('.introjs-tooltip').removeClass('hide');
						var text = "The variable <span class='ct-code-b-yellow'>ch</span> " +
								    "occupies <span class='ct-color-lime'>1 byte</span> in " +
								    "the memory with its address (i.e. location).<br>" +
									"Here, the address is <span class='ct-code-b-yellow'>2034</span>.";
						typing('.introjs-tooltiptext', text, function() {
							$("#memoryBox").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
								$("#memoryBox").removeClass("animated zoomIn");
								$(".introjs-nextbutton, .introjs-prevbutton").show();
							});
						});
					});
					break;
				case 'secondStep':
					$("#inputChar").attr("disabled", "disabled");
					$('.introjs-helperLayer').one('transitionend', function() {
						if (introjs._direction == "backward") {
							setTimeout(function () {
								introjs.previousStep();
							}, 1000);
						} else {
							$(".panel-body").text(inputVar).css({"padding": "8px", "color": "green", "font-weight": "bold"}).addClass("animated zoomIn").one('animationend', function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 500);
							}); 
						}
					});
				
					break;
				}
			});
			break;
		case 'consoleId':
			$("#inputChar").attr("disabled", false);
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "typeChar" :
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#typeChar").addClass('visibility-hidden');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#typeChar").removeClass("visibility-hidden");
						TweenMax.to("#panelBox", 0.2, {opacity: 1, onComplete: function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 1000);
						}});
					}
				});
				break;
			case 'firstStep':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#consoleId").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					var text = "The <span class='ct-code-b-yellow'>get()</span> waits for the "+
							   "user to type a character.<br><br> Please type a character now.";
					typing('.introjs-tooltiptext', text, function() {
						$("#inputChar").addClass("blinking");
						$("#inputChar").focus();
						checking("#inputChar");
					});
				});
				break;
			case 'secondStep':
				$("#inputChar").attr("disabled", "disabled");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#typingChar").text(inputVar).addClass("opacity00").css({"color": "#0f0", "font-weight": "bold"});
					$('.introjs-tooltip').removeClass('hide');
					var text = "<span class='ct-code-b-yellow'>put()</span> displays the character on the console.";
					typing('.introjs-tooltiptext',text, function() {
						$("#panelBody").effect("transfer", { to: $("#typingChar")}, 2000).addClass(".ui-effects-transfer", function() {
							$("#typingChar").removeClass("opacity00");
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					})
				});
				break;
			}
			break;
		case 'preDiv':
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#preDiv").removeClass("visibility-hidden", function() {
				$('.introjs-tooltip').removeClass('hide');
				var text = "Let us consider different examples using " +
						   "<span class='ct-code-b-yellow'>put()</span> function."
					typing(".introjs-tooltiptext", text, function() {
						TweenMax.to($("#preDiv"), 1, {opacity: 1, onComplete: function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						}});
					});
				});
			});
			break;
		case 'main1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>main()</span> is the starting point of execution."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line6':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#line6").removeClass("visibility-hidden", function() {
					var text = "This particular method called prints the character " +
							   "<span class='ct-code-b-yellow'>p</span> to the console."
					typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			});
			break;
		case 'line7':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#line6").removeClass("visibility-hidden", function() {
					var text = "In this <span class='ct-code-b-yellow'>put()</span> " +
							"function since an integer value is provided instead "+
					        "of a character constant , the integer value "+
					        "is treated as <span class='ct-color-gold'>ASCII</span> " +
					        "code and its corresponding character is printed to the console.";
					typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			});
			break;
		case 'line8':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#line8").removeClass("visibility-hidden");
				var text =  "Any integer placed without quotes in <span class='ct-code-b-yellow'>put()</span> " +
							"that will be treated as <span class='ct-color-gold'>ASCII</span> value. " +
							"So the <span class='ct-code-b-yellow'>putchar()</span> converted the " +
							"<span class='ct-color-gold'>ASCII</span> value into it's own character.<br>" +
							"Here 56 is the <span class='ct-color-gold'>ASCII</span> value of 8."
				typing('.introjs-tooltiptext',text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'end1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = 	"This is the end of the <span class='ct-code-b-yellow'>main()</span> function " +
							"where the program execution ends.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'consoleId1':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStepInConsoleId1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#consoleId1").removeClass("opacity00");
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext', "Constant value displayed on the console.", function() {
							$("#constantChar").text("p").addClass("opacity00");
							zoomingEffect($("#constantChar"), function(){
								$(".introjs-nextbutton, .introjs-prevbutton").show();
							});
						});
					}
				});
				break;
			case 'secondStepInConsoleId2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext', "The converted character displyed on console.", function() {
							$("#asciiChar").text("A");
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					}
				});
				break;
			}
			break;
		case 'finalText':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#finalText").removeClass("opacity00").addClass("z-index9999999");						
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
		case "restart":
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
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

function checking() {
	$("#inputChar").on("click keyup keydown", function() {
		inputVar = $("#inputChar").val();
		if($("#inputChar").val() == "") {
			$('.errorText').html("Please type correctly.");
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		} else {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
			$('.errorText').empty();
		}
	});
}

function zoomingEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}