var asciiVal;
var binaryVal;
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
			element :"#line2",
			intro : "",
			position : 'right',
		}, {
			element :'#addressBox',
			intro :'',
			tooltipClass: "hide",
			position:"bottom"
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
			position : 'bottom',
			animateStep : 'checking',
		}, {
			element :'#panelBox',
			intro :'',
			tooltipClass: "hide",
			position:"bottom"
		}, {
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
		}, {
			element : '#preline1',
			intro : '',
		}, {
			element : '#addressBox1',
			intro : "",
			animateStep : 'memoryBox',
		}, {
			element : '#preline11',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId2",
			intro : "",
			animateStep : 'typeChar1',
		
		}, {
			element : '#preline2',
			intro : '',
		}, {
			element : '#addressBox1',
			intro : "",
			animateStep : 'animationDiv',
		}, {
			element : '#preline3',
			intro : '',
		}, {
			element :"#consoleId2",
			intro : "",
			animateStep : 'printPreline1',
			tooltipClass : 'hide'
		
		}, {
			element : '#preTableDiv3',
			intro : '',
		}, {
			element : '#step1',
			intro : '',
		}, {
			element : '#addressBox2',
			intro : "",
			animateStep : 'memoryBox1',
		}, {
			element : '#step11',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId3",
			intro : "",
			animateStep : 'typeChar2',
			tooltipClass : 'hide'
		}, {
			element : '#step2',
			intro : '',
		}, {
			element :"#consoleId3",
			intro : "",
			position : 'right',
			animateStep : 'checking',
		}, {
			element : '#addressBox2',
			intro : "",
			animateStep : 'animationDiv1',
		}, {
			element : '#step3',
			intro : '',
		}, {
			element :"#consoleId3",
			intro : "",
			position : 'bottom',
			animateStep : 'printLine1',
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
						$("#list3").fadeTo(300, 1, function() {
							$("#syntax").fadeTo(300, 1, function() {
								$("#syntax1").fadeTo(300, 1, function() {
									$("#syntax2").fadeTo(300, 1, function() {
										$("#syntax3").fadeTo(300, 1, function() {
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
			});
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Let us consider an example using <span class='ct-code-b-yellow'>get()</span> function.", function() {
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
					"<span class='ct-code-b-yellow'>get()</span> function.";
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
		case "addressBox" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#addressBox").removeClass("opacity00");
				TweenMax.to("#panelBox", 0.2, {opacity: 1, onComplete: function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				}});
			});
			break;
			
		case "panelBox" :
			$('.introjs-nextbutton').hide();
			$('.panel-body').text($('#inputChar').val()).css({"padding": "8px", "color": "green", "font-weight": "bold"});
			$('.introjs-helperLayer ').one('transitionend', function() {
				TweenMax.to("#panelBody", 0.2, {opacity: 1, onComplete: function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				}});
			});
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "typeChar" :
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					//typing(".introjs-tooltiptext", "Enter any character", function() {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					//});
				});
				break;
			
			case 'checking':
				$("#inputChar").attr("disabled", false);
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text ="The <span class='ct-code-b-yellow'>get()</span> tries to read an input from the console."+
					"<br><br> Please type a character now.";
					typing('.introjs-tooltiptext', text, function() {
						$("#inputChar").addClass("blinking");
						$("#inputChar").focus();
						checking("#inputChar");
					});
				});
				break;
			case 'printLine':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#line5").effect( "transfer", { to: $("#printLineInConsole"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#printLineInConsole").removeClass("opacity00");
						var text = $("#printLineInConsole").text() + " " + '<span class="input-char">'+ $("#inputChar").val()+ '</span>';
						typing("#printLineInConsole", text, function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					});
				});
				break;
			}
			break;
		case 'preTableDiv2':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "Let us consider one more example using <span class='ct-code-b-yellow'>get()</span>."
				typing(".introjs-tooltiptext", text, function() {
					TweenMax.to($("#preTableDiv2"), 1, {opacity: 1, onComplete: function() {
						$(".introjs-nextbutton").show();
					}});
				});
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
				/*typing(".introjs-tooltiptext", "<ul><li>Here, ch is the <span class='ct-code-b-yellow'>character array varaiable</span> which contains 20 characters.</li><li>Each element occupies <span class='ct-code-b-yellow'>1</span> byte(8 bits) in the memory.</li></ul> ", function() {
					$('.introjs-nextbutton').show();
				});*/
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
			
		case "addressBox1" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "memoryBox" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#addressBox1").removeClass("opacity00");
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
						typing(".introjs-tooltiptext", "The given string is stored in the array and delimiter <span class='ct-code-b-yellow'>\\0</span> (or) <span class='ct-code-b-yellow'>\\n</span> is placed at the end of the string by the system.", function() {
							$('.introjs-nextbutton').show();
						});
					}});
					
				});
				break;
			}
			break;
		case 'consoleId2':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "typeChar1" :
				$("#consoleId2").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", "Enter any string", function() {
						$("#inputChar2").addClass("blinking");
						$("#inputChar2").focus();
						checking("#inputChar2");
						
					});
				});
				break;
			case 'checking':
				$("#inputChar2").attr("disabled", false);
				$("#consoleId2").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text ="Enter any string.";
					typing('.introjs-tooltiptext', text, function() {
						$("#inputChar2").addClass("blinking");
						$("#inputChar2").focus();
						checking("#inputChar2");
					});
				});
				break;
			case 'printPreline1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#preline2").effect( "transfer", { to: $("#printpreLine1"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#printpreLine1").removeClass("opacity00");
							var givenInput = $("#inputChar2").val();
							var result = givenInput.slice(0, 19);
							var text = $("#printpreLine1").text() + '<span class="input-char-2">' + result + '</span>';
							typing("#printpreLine1", text, function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
						});
					});
				});
				break;
			/*case 'printPreline2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#preline3").effect( "transfer", { to: $("#printpreLine2"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#printpreLine2").removeClass("opacity00");
						var givenInput = $("#inputChar2").val();
						var result = givenInput.slice(0, 19);
						var text = $("#printpreLine2").text() + result;
						typing("#printpreLine2", text, function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					});
				});
				break;*/
			}
			break;
		case 'preTableDiv3':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "Let us consider one more example using <span class='ct-code-b-yellow'>get()</span>."
				typing(".introjs-tooltiptext", text, function() {
					TweenMax.to($("#preTableDiv3"), 1, {opacity: 1, onComplete: function() {
						$(".introjs-nextbutton").show();
					}});
				});
			});
			break;
		case 'step1':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "<ul><li>Here, <span class='ct-code-b-yellow'>ch</span> is the <span class='ct-code-b-yellow'>character array varaiable</span> "+
				"which contains 20 characters.</li><li>Each element occupies <span class='ct-code-b-yellow'>1</span> "+
				"byte(8 bits) in the memory.</li></ul>";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'step11':
			$('.introjs-helperLayer').one("transitionend", function() {
				//typing(".introjs-tooltiptext", text, function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				//});
			});
			break;
			
		case 'step2':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This statement extracts(reads) the characters upto delimter is found.<br>"+
				"If a delimiter is found the read terminates."; 
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'step3':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This statement prints the characters <span class='ct-code-b-yellow'>ch</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case "addressBox2" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "memoryBox1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#addressBox2").removeClass("opacity00");
					TweenMax.to("#tableId1", 0.2, {opacity: 1, onComplete: function() {
						typing(".introjs-tooltiptext", "20 bytes are allocated to the array of the variable <span class='ct-code-b-yellow'>ch</span>.", function() {
							$('.introjs-nextbutton').show();
						});
					}});
				});
				break;
			case "animationDiv1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#tableRowId1").removeClass("opacity00");
					introjs.refresh();
					$(".td-css").addClass("ct-code-b-green");
					var result = $("#inputChar3").val();
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
						typing(".introjs-tooltiptext", "The given string is stored in the array and delimiter <span class='ct-code-b-yellow'>\\0</span> (or) <span class='ct-code-b-yellow'>\\n</span> is placed at the end of the string by the system.", function() {
							$('.introjs-nextbutton').show();
						});
					}});
					
				});
				break;
			}
			break;
			
		case 'consoleId3':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "typeChar2" :
				$("#consoleId3").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					//typing(".introjs-tooltiptext", "Enter any character", function() {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					//});
				});
				break;
			case 'checking':
				$("#inputChar").attr("disabled", false);
				$("#consoleId3").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text ="Enter a string must ends with #.";
					typing('.introjs-tooltiptext', text, function() {
						$("#inputChar3").addClass("blinking");
						$("#inputChar3").focus();
						check("#inputChar3");
					});
				});
				break;
			case 'printLine1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#step3").effect( "transfer", { to: $("#printLine1"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#printLine1").removeClass("opacity00");
						var value = $("#inputChar3").val();
						var index = value.indexOf("#");
						var givenInput = value.substring(0, index);
						if (givenInput != "" &&  index != -1 && value.endsWith("#") == true) {
						var text = $("#printLine1").text() + " " +'<span class="input-char-2">'+ givenInput +'</span>';
							typing("#printLine1", text, function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							});
						} else if (value.length >= 20 ){
							var givenInput = value.slice(0, -1);
							var text = $("#printLine1").text() + " " +'<span class="input-char-2">'+ givenInput +'</span>';
							typing("#printLine1", text, function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							});
							
						} else {
							var givenInput = value.slice(0, -1);
							var text = $("#printLine1").text() + " " +'<span class="input-char-2">'+ givenInput +'</span>';
							typing("#printLine1", text, function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							});
							
						}
					});
				});
				break;
			case 'printLine2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#step3").effect( "transfer", { to: $("#printLine2"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#printLine2").removeClass("opacity00");
						var text = $("#printLine2").text() + $("#inputChar3").val();
						typing("#printLine2", text, function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
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