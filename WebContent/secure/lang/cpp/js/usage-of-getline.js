var typingInterval = 50;

var usageOfGetcharReady = function() {
	introGuide();
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
			element : '#preline1',
			intro : '',
		}, {
			element : '#addressBox',
			intro : "",
			animateStep : 'memoryBox',
		}, {
			element : '#preline11',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'typeChar',
			position : 'right',
		
		}, {
			element : '#preline2',
			intro : '',
		}, {
			element : '#addressBox',
			intro : "",
			animateStep : 'animationDiv',
		}, {
			element : '#preline3',
			intro : '',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printPreline1',
			tooltipClass : 'hide'
		
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
							$("#syntax").fadeTo(300, 1, function() {
								$("#line1").fadeTo(300, 1, function() {
									$("#line2").fadeTo(300, 1, function() {
										/*$("#syntax3").fadeTo(300, 1, function() {*/
											//	$("#infoDiv").addClass('z-index9999999');
												$('#nextButton').removeClass("opacity00");
												$('.user-btn').click(function() {
													$('.user-btn').remove();
														introjs.nextStep();
											});
										});
									//});
								});
							});
					});
				});
			});
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Let us consider an example using <span class='ct-code-b-yellow'>getline()</span> function.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line22':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext', "<span class='ct-code-b-yellow'>ch</span> is a character variable used to store " +
						"only one character at a time.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line3':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext', "<span class='ct-code-b-yellow'>cout()</span> is object of <span class='ct-code-b-yellow'>ostream</span>."+
						" The <span class='ct-code-b-yellow'>cout</span> operator with the <span class='ct-code-b-yellow'> insertion operator (<<)</span> print a message onto the screen.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line4':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "The <span class='ct-code-b-yellow'>ch</span> is initialized with the character that is return by the "+
					"<span class='ct-code-b-yellow'>getline()</span> function.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();
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
				typing(".introjs-tooltiptext", "<ul><li>Here, <span class='ct-code-b-yellow'>ch</span> is the <span class='ct-code-b-yellow'>character array varaiable</span> which contains 20 characters.</li><li>Each element occupies <span class='ct-code-b-yellow'>1</span> byte(8 bits) in the memory.</li></ul> ", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'preline11':
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'preline2':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This statement extracts up to 19 characters and inserts "+
				"<span class='ct-code-b-yellow'>null(\"\\0\")</span> at the end"+
				" of the string stored in variable <span class='ct-code-b-yellow'>ch</span>."+
				"  If a delimiter is found,the read terminates."+
				" The delimiter is left in the stream, not stored in the array. The delimiting "+
				" character either the <span class='ct-code-b-yellow'>newline</span> "+
				" character ('\n') or <span class='ct-code-b-yellow'>delim</span> (if this argument is specified)"+
				" like *, #, /, +, ;, , etc..."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'preline3':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This statement prints the characters stored in <span class='ct-code-b-yellow'>ch</span>. "
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case "addressBox" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "memoryBox" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#addressBox").removeClass("opacity00");
					TweenMax.to("#tableId", 0.2, {opacity: 1, onComplete: function() {
						typing(".introjs-tooltiptext", "20 bytes are allocated to the array of the variable <span class='ct-code-b-yellow'>ch</span>.", function() {
							$('.introjs-nextbutton').show();
						});
					}});
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
						typing(".introjs-tooltiptext", "The given string is stored in the array and delimiter <span class='ct-code-b-yellow'>\\0</span> (or) <span class='ct-code-b-yellow'>\\n</span> is placed at the end of the string by the system.", function() {
							$('.introjs-nextbutton').show();
						});
					}});
					
				});
				break;
			}
			break;
			
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "typeChar" :
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", "Enter any string", function() {
						$("#inputChar").addClass("blinking");
						$("#inputChar").focus();
						checking("#inputChar");
						
					});
				});
				break;
			case 'checking':
				$("#inputChar").attr("disabled", false);
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
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
					$("#preline2").effect( "transfer", { to: $("#printpreLine1"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#printpreLine1").removeClass("opacity00");
							var givenInput = $("#inputChar").val();
							var length = givenInput.length;
							if(length == 20) {
							var result = givenInput.slice(0, -1);
							var text = $("#printpreLine1").text() + '<span class="input-char-2">' + result + '</span>';
							typing("#printpreLine1", text, function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							});
						} else {
							var result = givenInput.slice(0, length);
							var text = $("#printpreLine1").text() + '<span class="input-char-2">' + result + '</span>';
							typing("#printpreLine1", text, function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							});
							
						}
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
function check(selector) {
	$(selector).on("click keyup keydown", function(){
		if($(selector).val() != "" && $(selector).val().endsWith("#") == true) {
			$(".introjs-nextbutton").show();
			$('.errorText').empty();
		} else {
			$('.errorText').html("Please type correctly.");
			$(".introjs-nextbutton").hide();
		}
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