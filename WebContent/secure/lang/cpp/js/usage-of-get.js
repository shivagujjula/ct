var typingInterval = 10;
var usageOfGetReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function() {
		$("#inputChar, #inputChar2").val("");
		location.reload();
	});
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
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
			tooltipClass : 'hide',
		}, {
			element : '#main',
			intro : '',
			position : "right"
		}, {
			element :"#line2",
			intro : "",
			position : 'right',
		}, {
			element :'#addressBox',
			intro : '',
			position : "right",
			animateStep : 'firstStep',
			tooltipClass : 'hide',
		},{
			element :"#line3",
			intro : "",
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'typeChar',
			tooltipClass : 'hide'
		}, {
			element :"#line4",
			intro : "",
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'checking',
			tooltipClass : 'hide',
		}, {
			element :'#addressBox',
			intro : '',
			animateStep : 'secondStep',
			position : "right",
			tooltipClass : 'hide'
		}, {
			element : '#line5',
			intro : '',
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLine',
			position : 'right',
			tooltipClass : 'hide',
		}, {
			element : '#end',
			intro : '',
			position : "right"
		}, {
			element : '#preTableDiv2',
			intro : '',
			position : "right",
			tooltipClass : 'hide',
		}, {
			element : '#main1',
			intro : '',
			position : "right"
		}, {
			element : '#preline1',
			intro : '',
			position : "right"
		}, {
			element : '#addressBox1',
			intro : "",
			animateStep : 'memoryBox',
			tooltipClass : 'hide'
		}, {
			element : '#preline11',
			intro : '',
			position : "right",
		}, {
			element :"#consoleId2",
			intro : "",
			animateStep : 'typeChar1',
			position : "right",
			tooltipClass : 'hide'

		}, {
			element : '#preline2',
			intro : '',
			position : "right"
		}, {
			element : '#addressBox1',
			intro : "",
			animateStep : 'animationDiv',
			tooltipClass : 'hide'
		}, {
			element : '#preline3',
			intro : '',
			position : "right"
		}, {
			element :"#consoleId2",
			intro : "",
			animateStep : 'printPreline1',
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element : '#end1',
			intro : '',
			position : "right"
		}, {
			element : '#preTableDiv3',
			intro : '',
			position : "right",
			tooltipClass : 'hide',
		}, {
			element : '#main2',
			intro : '',
			position : "right"
		}, {
			element : '#step1',
			intro : '',
			position : "right"
		}, {
			element : '#addressBox2',
			intro : "",
			animateStep : 'memoryBox1',
			tooltipClass : 'hide'
		}, {
			element : '#step11',
			intro : '',
			position : "right"
		}, {
			element :"#consoleId3",
			intro : "",
			animateStep : 'typeChar2',
			tooltipClass : 'hide'
		}, {
			element : '#step2',
			intro : '',
			position : "right"
		}, {
			element :"#consoleId3",
			intro : "",
			position : 'right',
			animateStep : 'checking',
			tooltipClass : 'hide'
		}, {
			element : '#addressBox2',
			intro : "",
			animateStep : 'animationDiv1',
			tooltipClass : 'hide'
		}, {
			element : '#step3',
			intro : '',
			position : "right"
		}, {
			element :"#consoleId3",
			intro : "",
			position : 'bottom',
			animateStep : 'printLine1',
			tooltipClass : 'hide'
		}, {
			element : '#end2',
			intro : '',
			position : "right"
		}, {
			element :"#button",
			intro : "",
			position : 'right',
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case 'line3':
			$("#consoleId").addClass('opacity00').removeAttr("style");
			break;
		case 'line4':
			$("#inputChar").val("");
			break;
		case 'line5':
			$("#printLineInConsole").addClass('opacity00');
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'checking':
				$("#panelBody").text("");
				$("#inputChar").val("");
				break;
			case 'printLine':
				console.log("input-char");
				$("#printLineInConsole").addClass("opacity00");
				$(".input1").remove();
				break;
			}
			break;
			
		case 'end':
			$("#preTableDiv2").css("opacity", 0);
			break;
		case 'preline1':
			$("#addressBox1").addClass("opacity00");
			break;
		case 'preline11':
			$("#typeChar1").addClass("opacity00");
			$("#inputChar2").val("");
			$("#consoleId2").addClass('opacity00').removeAttr("style");
			break;
		case 'preline2':
			$(".td-css").text("");
			$(".introjs-tooltip").css("min-width", "335px");
			break;
		case 'preline3':
			$("#printpreLine1").addClass('opacity00');
			break;
		case "addressBox1" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "animationDiv" :
				$("#tableRowId").addClass("opacity00");
				$(".introjs-tooltip").removeAttr("style");
				break;
			}
			break;
		case 'consoleId2':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'typeChar1':
				$(".introjs-tooltip").removeAttr("style");
				$("#inputChar2").val("");
				break;
			case 'printPreline1':
				console.log("input-char-2");
				$("#printpreLine1").addClass("opacity00");
				$("#result").remove();
				break;
			}
			break;
		case 'end1':
			 $("#preTableDiv3").css("opacity", 0);
			 break;
		case 'step1':
			$("#addressBox2").addClass("opacity00");
			break;
		case 'step11':
			$("#typeChar2").addClass("opacity00");
			$("#consoleId3").addClass('opacity00').removeAttr("style");
			break;
		case 'step2':
			$("#tableRowId1 >.td-css").text("");
			$("#inputChar3").val("");
			break;
		case 'step3':
			$("#printLine1").addClass('opacity00');
			break;
		case "addressBox2" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "animationDiv1" :
				$("#tableRowId1").addClass("opacity00");
				break;
			}
			break;
		case 'consoleId3':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'checking':
				$("#tableRowId1 >.td-css").text("");
				$("#inputChar3").val("");
				break;
			case 'printLine1':
				console.log("input-char-3");
				$("#printLine1").addClass("opacity00");
				//$(".input1").remove();
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
		if (elementId == "line5") {
			$("#line5").addClass('z-index9999999');
		}
		switch (elementId) {
		case 'infoDiv':
/*** The general format is: variable=get ( ); ***/			
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").addClass("z-index9999999");
			//$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list").fadeTo(300, 1, function() {
				$("#list1").fadeTo(300, 1, function() {
					$("#list2").fadeTo(300, 1, function() {
						$("#syntax").fadeTo(300, 1, function() {
							$("#syntax1").fadeTo(300, 1, function() {
								$("#syntax2").fadeTo(300, 1, function() {
									$("#syntax3").fadeTo(300, 1, function() {
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
				$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext', "Let us consider an example using" +
						" <span class='ct-code-b-yellow'>get()</span> function.", function() {
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
				typing('.introjs-tooltiptext', "<span class='ct-code-b-yellow'>ch</span> " +
						"is a character variable used to store " +
						"only <span class='ct-code-b-yellow'>one</span> character at a time.", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line3':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext', "<span class='ct-code-b-yellow'>cout</span>" +
						" is object of <span class='ct-code-b-yellow'>ostream</span>."+
						" The <span class='ct-code-b-yellow'>cout</span> object with " +
						"the <span class='ct-code-b-yellow'> insertion operator(<<)</span>" +
						" displays the given message on the screen.", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line4':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "The <span class='ct-code-b-yellow'>ch</span> is initialized" +
						" with the character that is return by the "+
					"<span class='ct-code-b-yellow'>get()</span> function.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line5':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#line5").removeClass("opacity00");
				var text = "This statement is used to print the string in the console.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'end':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the end of the <span class='ct-code-b-yellow'>main()</span> " +
							"function where the program execution ends.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "addressBox" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "firstStep":
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					$("#addressBox").addClass('opacity00');
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					$("#addressBox").removeClass("opacity00");
					TweenMax.to("#panelBox", 0.2, {opacity: 1, onComplete: function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					}});
				}
			});
			break;
			
		case "secondStep" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					//$(selector).addClass('opacity00');
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					$('.introjs-nextbutton').hide();
					$('.panel-body').text($('#inputChar').val()).css({"padding": "8px", "color": "green", "font-weight": "bold"});
					TweenMax.to("#panelBody", 0.2, {opacity: 1, onComplete: function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					}});
				}
			});
			break;
		}
		break;
		case 'consoleId':
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "typeChar" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#typeChar").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#typeChar").removeClass('opacity00');
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					}
				});
				break;
			
			case 'checking':
				$("#inputChar").attr("disabled", false);
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var text ="The <span class='ct-code-b-yellow'>get()</span> tries to read" +
							" an input from the console.<br><br> Please type a character now.";
					typing('.introjs-tooltiptext', text, function() {
						$("#inputChar").addClass("blinking");
						$("#inputChar").focus();
						checking("#inputChar");
					});
				});
				break;
			case 'printLine':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						var text = $("#printLineInConsole").text() + " " + '<span class="input-char input1">'+ $("#inputChar").val()+ '</span>';
						typing("#printLineInConsole", text, function() {
							$("#line5").effect( "transfer", { to: $("#printLineInConsole"), className: "ui-effects-transfer" }, 
									1500 , function() {
								$("#printLineInConsole").removeClass("opacity00");
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							});
						});
					}
				});
				break;
			}
			break;
		case 'preTableDiv2':
			$('.introjs-helperLayer').one("transitionend", function() {
				$('.introjs-tooltip').removeClass("hide");
				var text = "Let us consider one more example using <span class='ct-code-b-yellow'>get()</span>."
				typing(".introjs-tooltiptext", text, function() {
					TweenMax.to($("#preTableDiv2"), 1, {opacity: 1, onComplete: function() {
						$(".introjs-nextbutton").show();
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					}});
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
		case 'preline1':
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here, <span class='ct-code-b-yellow'>ch</span> " +
						"is the <span class='ct-code-b-yellow'>character array varaiable</span> " +
						"which contains <span class='ct-code-b-yellow'>20</span> characters.</li>" +
						"<li>Each character occupies <span class='ct-code-b-yellow'>1</span> " +
						"byte(8 bits) in the memory.</li></ul> ", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'preline11':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This statement is used to extract input from keyboard.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'preline2':
			$(".introjs-tooltip").css("min-width", "300px");
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = 	"<ul><li>This statement extracts up to <span class='ct-code-b-yellow'>19</span> " +
							"characters and inserts <span class='ct-code-b-yellow'>null(\"\\0\")</span> at the end "+
							"of the string stored in variable <span class='ct-code-b-yellow'>ch</span>.</li>"+
							"<li>If a <span class='ct-code-b-yellow'>delimiter</span> is found, the " +
							"<span class='ct-code-b-yellow'>input</span> is terminated.</li>"+
							"<li>The <span class='ct-code-b-yellow'>delimiter</span> is left in the stream, not stored in the array.</li>" +
							"<li>The delimiting character either the <span class='ct-code-b-yellow'>newline</span> "+
							"character ('\n') or <span class='ct-code-b-yellow'>delim</span> (if this argument is specified) "+
							"like <span class='ct-code-b-yellow'>*, #, /, +, ;, ,</span> etc...</li></ul>";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'preline3':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This statement prints the characters stored in " +
						   "<span class='ct-code-b-yellow'>ch</span>. "
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'end1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the end of the <span class='ct-code-b-yellow'>main()</span> " +
							"function where the program execution ends.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "addressBox1" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "memoryBox" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#addressBox1").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#addressBox1").removeClass("opacity00");
						TweenMax.to("#tableId", 0.2, {opacity: 1, onComplete: function() {
							$('.introjs-tooltip').removeClass("hide");
							typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>20</span> bytes are allocated to the array " +
									"<span class='ct-code-b-yellow'>ch</span>.", function() {
								$(".introjs-nextbutton, .introjs-prevbutton").show();
							});
						}});
					}
				});
				break;
			case "animationDiv" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#tableRowId").removeClass("opacity00");
					introjs.refresh();
					$(".td-css").addClass("ct-code-b-green");
					var result = $("#inputChar2").val();
					for(var i = 0; i <= result.length; i++) {
						if (result.length >= 0 && result.length < 20) {
							if (i == result.length) {
								$("table tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
							} else {
								$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
							}
						}  else {
							if (i == 19) {
								$("table tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
								break;
							} else {
								$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
							}
						} 
					}
					TweenMax.to(".td-css", 1, {opacity: 1, onComplete: function() {
						$('.introjs-tooltip').removeClass("hide");
						typing(".introjs-tooltiptext", "The given string is stored in the array and delimiter" +
								" <span class='ct-code-b-yellow'>\\0</span> (or) <span class='ct-code-b-yellow'>\\n</span>" +
								" is placed at the end of the string by the system.", function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					}});
				});
				break;
			}
			break;
		case 'consoleId2':
			$("#consoleId2").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "typeChar1" :
				$("#typeChar1").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					typing(".introjs-tooltiptext", "Enter any string", function() {
						$("#inputChar2").addClass("blinking").focus();
						checking("#inputChar2");
					});
				});
				break;
			case 'printPreline1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#printpreLine1").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#preline3").effect( "transfer", { to: $("#printpreLine1"), className: "ui-effects-transfer" }, 1500 , function() {
							$("#printpreLine1").removeClass("opacity00");
								var givenInput = $("#inputChar2").val();
								var result = givenInput.slice(0, 19);
								//$('.introjs-tooltip').removeClass("hide");
								var text = $("#printpreLine1").text() + " " + '<span class="input-char-2 input1" id = "result">' + result + '</span>';
								typing("#printpreLine1", text, function() {
									setTimeout(function () {
										introjs.nextStep();
									}, 1000);
							});
						});
					}
				});
				break;
			}
			break;
		case 'preTableDiv3':
			$('.introjs-helperLayer').one("transitionend", function() {
				$('.introjs-tooltip').removeClass("hide");
				var text = "Let us consider one more example using <span class='ct-code-b-yellow'>get()</span>."
				typing(".introjs-tooltiptext", text, function() {
					TweenMax.to($("#preTableDiv3"), 1, {opacity: 1, onComplete: function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					}});
				});
			});
			break;
		case 'main2':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>main()</span> is the starting point of execution."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'step1':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = 	"<ul><li>Here, <span class='ct-code-b-yellow'>ch</span> is the " +
							"<span class='ct-code-b-yellow'>character array varaiable</span> "+
							"which contains <span class='ct-code-b-yellow'>20</span> characters.</li>" +
							"<li>Each character occupies <span class='ct-code-b-yellow'>1</span> " +
							"byte(8 bits) in the memory.</li></ul>";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'step11':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case 'step2':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = 	"<ul><li>This statement extracts the characters upto " +
							"<span class='ct-code-b-yellow'>delimter</span> is found.</li>"+
							"<li>If a <span class='ct-code-b-yellow'>delimter</span> is found" +
							", the <span class='ct-code-b-yellow'>input</span> is terminated.</li></ul>"; 
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'step3':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This statement prints the characters <span class='ct-code-b-yellow'>ch</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'end2':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = 	"This is the end of the <span class='ct-code-b-yellow'>main()</span> function " +
							"where the program execution ends.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "addressBox2" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "memoryBox1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#addressBox2").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#addressBox2").removeClass("opacity00");
						TweenMax.to("#tableId1", 0.2, {opacity: 1, onComplete: function() {
							$('.introjs-tooltip').removeClass("hide");
							var text = 	"<span class='ct-code-b-yellow'>20</span> bytes are allocated to the array " +
										"<span class='ct-code-b-yellow'>ch</span>.";
							typing(".introjs-tooltiptext",text, function() {
								$(".introjs-nextbutton, .introjs-prevbutton").show();
							});
						}});
					}
				});
				break;
			case "animationDiv1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#tableRowId1").removeClass("opacity00");
					introjs.refresh();
					$(".td-css").addClass("ct-code-b-green");
					var result = $("#inputChar3").val().slice(0, -1);
					for(var i = 0; i <= result.length; i++) {
						if (result.length >= 0 && result.length < 20) {
							if (i == result.length) {
								$("#tableId1 tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
							} else {
								$("#tableId1 tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
							}
						}  else {
							if (i == 19) {
								$("#tableId1 tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
								break;
							} else {
								$("#tableId1 tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
							}
						} 
					}
					TweenMax.to(".td-css", 1, {opacity: 1, onComplete: function() {
						$('.introjs-tooltip').removeClass("hide");
						var text = 	"The given string is stored in the array and delimiter " +
									"<span class='ct-code-b-yellow'>\\0</span> (or) <span class='ct-code-b-yellow'>\\n</span> " +
									"is placed at the end of the string by the system.";
						typing(".introjs-tooltiptext",text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					}});
				});
				break;
			}
			break;
			
		case 'consoleId3':
			$("#consoleId3").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "typeChar2" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#typeChar2").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#typeChar2").removeClass('opacity00');
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					}
				});
				break;
			case 'checking':
				$("#inputChar2").attr("disabled", false);
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					var text ="<span class='ct-code-b-yellow'>Enter a string must be end with #.</span>";
					typing('.introjs-tooltiptext', text, function() {
						$("#inputChar3").addClass("blinking").focus();
						check("#inputChar3");
					});
				});
				break;
			case 'printLine1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#printLine1").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#step3").effect( "transfer", { to: $("#printLine1"), className: "ui-effects-transfer" }, 1500 , function() {
							$("#printLine1").removeClass("opacity00");
							var value = $("#inputChar3").val();
							var index = value.indexOf("#");
							var givenInput = value.substring(0, index);
							if (givenInput != "" &&  index != -1 && value.endsWith("#") == true) {
								var text = $("#printLine1").text() + " " +'<span class="input-char-3 input1">'+ givenInput +'</span>';
									typing("#printLine1", text, function() {
										setTimeout(function () {
											introjs.nextStep();
										}, 1000);
									});
							} else if (value.length >= 20 ){
								var givenInput = value.slice(0, -1);
								var text = $("#printLine1").text() + " " +'<span class="input-char-3 input1">'+ givenInput +'</span>';
								typing("#printLine1", text, function() {
									setTimeout(function () {
										introjs.nextStep();
									}, 1000);
								});
								
							} else {
								//var givenInput = value.slice(0, -1);
								var text = "Please enter upto 20 characters or end with # ";
								typing("#printLine1", text, function() {
									setTimeout(function () {
										introjs.nextStep();
									}, 1000);
								});
							}
						});
					}
				});
				break;
			}
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
					$('#closeBtn').click(function() {
						window.parent.$("#javaDocBrowserDiv").dialog("close");
					});

				});
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

function checking(selector) {
	$(selector).on("click keyup keydown", function(){
		if($(selector).val() == "") {
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		} else {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		}
	});
}
function check(selector) {
	$(selector).on("click keyup keydown", function(){
		if($(selector).val() != "" && $(selector).val().length > 20 || $(selector).val().endsWith("#")  ) {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
			$('.errorText').empty();
		} else {
			$('.errorText').html("Please enter upto 20 characters or end with #.");
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		}
	});
}
