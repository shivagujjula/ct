var typingInterval = 50;

var usageOfGetlineReady = function() {
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
			tooltipClass : 'hide'
		}, {
			element : '#preline1',
			intro : '',
		}, {
			element : '#addressBox',
			intro : "",
			animateStep : 'memoryBox',
			tooltipClass : 'hide'
		}, {
			element : '#preline11',
			intro : '',
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'typeChar',
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element : '#preline2',
			intro : '',
			position : "right"
		}, {
			element : '#addressBox',
			intro : "",
			animateStep : 'animationDiv',
			tooltipClass : 'hide'
		}, {
			element : '#preline3',
			intro : '',
			position : "right"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printPreline1',
			tooltipClass : 'hide'
		}, {
			element : '#end',
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
		case 'preline1':
			$("#addressBox").addClass("opacity00");
			break;
		case 'preline11':
			$("#typeChar").addClass("opacity00");
			$("#inputChar").val("");
			break;
		case 'preline2':
			$(".td-css").text("");
			break;
		case 'preline3':
			$("#printpreLine1").addClass('opacity00');
			break;
		case 'consoleId':
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'typeChar':
				$("#inputChar").val("");
				$(".td-css").text("");
				break;
			case 'printPreline1':
				$("#printpreLine1").addClass("opacity00");
				$(".input1").remove();
				break;
			}
			break;
		}
	});
	introjs.onafterchange(function(targetElement) {
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
		
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
		var elementId = targetElement.id;
		if (elementId == "line5") {
			$("#line5").addClass('z-index9999999');
		}
		switch (elementId) {
		case 'infoDiv':
/*** The general format is: variable=getline ( ); ***/			
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list").fadeTo(300, 1, function() {
				$("#list1").fadeTo(300, 1, function() {
					$("#list2").fadeTo(300, 1, function() {
						$("#syntax").fadeTo(300, 1, function() {
							$("#list3").fadeTo(300, 1, function() {
								$("#line1").fadeTo(300, 1, function() {
									$("#line2").fadeTo(300, 1, function() {
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
				typing('.introjs-tooltiptext', "Let us consider an example using " +
						"<span class='ct-code-b-yellow'>getline()</span> function.", function() {
					$(".introjs-nextbutton").show();
					$(".introjs-prevbutton").hide();
				});
			});
			break;
		case 'line22':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext', "<span class='ct-code-b-yellow'>ch</span>" +
						" is a character variable used to store " +
						"only one character at a time.", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line3':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext', "<span class='ct-code-b-yellow'>cout()</span>" +
						" is object of <span class='ct-code-b-yellow'>ostream</span>."+
						" The <span class='ct-code-b-yellow'>cout</span> operator with" +
						" the <span class='ct-code-b-yellow'> insertion operator (<<)</span>" +
						" print a message onto the screen.", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line4':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "The <span class='ct-code-b-yellow'>ch</span> is " +
						"initialized with the character that is return by the "+
						"<span class='ct-code-b-yellow'>getline()</span> function.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line5':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#line5").removeClass("opacity00");
				setTimeout(function () {
					introjs.nextStep();
				}, 500);
			});
			break;
		
		case 'preline1':
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here, <span class='ct-code-b-yellow'>ch</span> " +
						"is the <span class='ct-code-b-yellow'>character array varaiable</span> " +
						"which contains 20 characters.</li><li>Each character occupies " +
						"<span class='ct-code-b-yellow'>1</span> byte(8 bits) in the memory." +
						"</li></ul> ", function() {
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
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "<ul><li>This statement extracts up to <span class='ct-code-b-yellow'>19</span>" +
						   " characters and inserts <span class='ct-code-b-yellow'>null(\"\\0\")</span> at the end"+
						   " of the string stored in variable <span class='ct-code-b-yellow'>ch</span>.</li>"+
						   " <li>If a delimiter is found, the input is terminated.</li>"+
						   " <li>The delimiter is left in the stream, not stored in the array.</li>" +
						   " <li>The delimiting character either the <span class='ct-code-b-yellow'>" +
						   " newline</span> character ('\n') or <span class='ct-code-b-yellow'>delim</span> " +
						   "(if this argument is specified) like *, #, /, +, ;, , etc...</li>"
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
		case 'end':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the end of the main() function where the program execution ends.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "addressBox" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "memoryBox" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#addressBox").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#addressBox").removeClass("opacity00");
						TweenMax.to("#tableId", 0.2, {opacity: 1, onComplete: function() {
							$('.introjs-tooltip').removeClass('hide');
							typing(".introjs-tooltiptext", "20 bytes are allocated to the array" +
									" <span class='ct-code-b-yellow'>ch</span>.", function() {
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
					var result = $("#inputChar").val();
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
						typing(".introjs-tooltiptext", "The given string is stored in the array " +
								"and delimiter <span class='ct-code-b-yellow'>\\0</span> (or) " +
								"<span class='ct-code-b-yellow'>\\n</span> is placed at the " +
								"end of the string by the system.", function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					}});
					
				});
				break;
			}
			break;
			
		case 'consoleId':
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "typeChar" :
				$("#typeChar").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var text ="Enter any string.";
					typing('.introjs-tooltiptext', text, function() {
						$("#inputChar").addClass("blinking");
						$("#inputChar").focus();
						checking("#inputChar");
						
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
								var givenInput = $("#inputChar").val();
								var length = givenInput.length;
								if(length == 20) {
								var result = givenInput.slice(0, -1);
								var text = $("#printpreLine1").text() + '<span class="input-char ">' + result + '</span>';
								typing("#printpreLine1", text, function() {
									setTimeout(function () {
										introjs.nextStep();
									}, 1000);
								});
							} else {
								var result = givenInput.slice(0, length);
								var text = $("#printpreLine1").text() + '<span class="input-char input1">' + result + '</span>';
								typing("#printpreLine1", text, function() {
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
		if($(selector).val() == "" ) {
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		} else {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		}
	});
}
function check(selector) {
	$(selector).on("click keyup keydown", function(){
		if($(selector).val() != "" && $(selector).val().endsWith("#") == true) {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
			$('.errorText').empty();
		} else {
			$('.errorText').html("Please type correctly.");
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		}
	});
}
