/**
 * 
 */
var typingInterval = 10;
var stringFunctionsReady = function() {
	introGuide();
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		/* if (e.keyCode == 13) {
			e.preventDefault();
		} */
	});
	$("#restartBtn").click(function() {
		location.reload();
	});
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});

	
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :'#preCode',
			intro : '',
		}, {
			element :'#line1',
			intro : '',
		}, {
			element :'#arrayDiv',
			intro : '',
			animateStep : 'arrayZoomingEffect',
		},{ 
			element : '#line2',
			intro : '',
		},{ 
			element : '#line3',
			intro : '',
			tooltipClass : 'hide',
		},{ 
			element : '#consoleId',
			intro : '',
			animateStep : 'printText1',
			tooltipClass : 'hide',
		},{ 
			element : '#line4',
			intro : '',
		},{ 
			element : '#consoleId',
			intro : '',
			animateStep : 'inputText',
			position : 'left'
		}, {
			element : '#arrayDiv',
			intro : '',
			animateStep : 'tweenmax',
		},{ 
			element : '#line5',
			intro : '',
		},{ 
			element : '#functionDiv',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'countingLength'
		}, {
			element : '#line6',
			intro : '',
			tooltipClass : 'hide',
		},{ 
			element : '#consoleId',
			intro : '',
			animateStep : 'printText2',
			tooltipClass : 'hide',
		}, {
			element : '#line7',
			intro : '',
		}, {
			element : '#arrayDiv',
			intro : '',
			animateStep : 'copyText',
		}, {
			element : '#line8',
			intro : '',
			tooltipClass : 'hide',
		},{ 
			element : '#consoleId',
			intro : '',
			animateStep : 'printText3',
			tooltipClass : 'hide',
		}, {
			element : '#line9',
			intro : '',
			tooltipClass : 'hide',
		},{ 
			element : '#consoleId',
			intro : '',
			animateStep : 'printText4',
			tooltipClass : 'hide',
		}, {
			element : '#line10',
			intro : '',
		}, { 
			element : '#consoleId',
			intro : '',
			animateStep : 'inputTextTwo',
			position : 'left'
		}, {
			element : '#arrayDiv',
			intro : '',
			animateStep : 'cMemoryAllocation',
		}, {
			element : '#line11',
			intro : '',
		}, { 
			element : '#functionDiv',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'concateString'
		}, {
			element : '#arrayDiv',
			intro : '',
			animateStep : 'concatenation',
			tooltipClass : 'hide',
		}, {
			element : '#line12',
			intro : '',
			tooltipClass : 'hide',
		},{ 
			element : '#consoleId',
			intro : '',
			animateStep : 'printText5',
			tooltipClass : 'hide',
		}, {
			element : '#line13',
			intro : '',
		}, { 
			element : '#functionDiv',
			intro : '',
			animateStep : 'comparisonStep'
		}, {
			element : '#line14',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#line15',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#line16',
			intro : '',
			tooltipClass : 'hide',
		}, { 
			element : '#consoleId',
			intro : '',
			animateStep : 'printText6',
			tooltipClass : 'hide',
		}, {
			element :'#button',
			intro : "",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		//console.log("step : " + introjs._currentStep);
		switch(elementId) {
		case 'preCode':
			var typingContent = "Let us consider a sample code on <span class='ct-code-b-yellow'>string functions</span>.";
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				TweenMax.to($("#preCode"), 1, {opacity: 1, onComplete: function() {
					$(".introjs-nextbutton").show();
				}});
			});
			break;
		case 'line1':
			$('.introjs-helperLayer').one('transitionend', function() {
				//$("#arrayDiv").removeClass("opacity00");
				var typingContent = "Here <span class='ct-code-b-yellow'>3</span> character array variables <span class='ct-code-b-yellow'>a</span>, "+
				"<span class='ct-code-b-yellow'>b</span> and <span class='ct-code-b-yellow'>c</span> are declared with size "+
				"<span class='ct-code-b-yellow'>20</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "Here <span class='ct-code-b-yellow'>length</span> is declared as "+
				"<span class='ct-code-b-yellow'>int data type</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line6':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#aArrayDiv").removeClass('z-index9999999');
				setTimeoutFunction();
			});
			break;
		case 'line3':
		case 'line8':
		case 'line9':
		case 'line12':
			$('.introjs-helperLayer').one('transitionend', function() {
				setTimeoutFunction();
			});
			break;
		case 'line4':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "<span class='ct-code-b-yellow'>cin</span> is used to read a string from the keyboard.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case 'line5':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "<span class='ct-code-b-yellow'>strlen()</span> is used to find the length of the given string. This function "+
				"returns only the integer data or numeric data.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case 'line7':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "<span class='ct-code-b-yellow'>strcpy()</span> is used to copy one string to another string.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case 'line10':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "<span class='ct-code-b-yellow'>cin</span> is used to read a string from the keyboard.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case 'line11':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "<span class='ct-code-b-yellow'>strcat()</span> is used to concatenate two strings into one string.<br><br>" +
				"Here string <span class='ct-code-b-yellow'>c</span> is concatenate with string <span class='ct-code-b-yellow'>a</span>, "+
				"and the result is also stored in string <span class='ct-code-b-yellow'>a</span>.";
				
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case 'line13':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "<span class='ct-code-b-yellow'>strcmp()</span> is used for comparison of two strings and it always returns "+
									"only the numeric data.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'arrayDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			$("#arrayDiv").removeClass("opacity00");
			switch(animateStep) {
			case 'arrayZoomingEffect':
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".small-box, .index-box").remove();
					var typingContent = "The memory created for each <y>array</y> variable.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						
						for (var i = 0; i < 20; i++) {
							$('#indices').append('<td class="index-box" id="indexA' + i + '">'+ i +'</td>');
							$('#arrayBox1').append('<td class="small-box index-char" id="chartdA' + i + '"><span id="chartdAspan'+ i +'"></span></td>');
							$('#arrayBox2').append('<td class="small-box index-char" id="chartdB' + i + '"><span id="chartdBspan'+ i +'"></span></td>');
							$('#arrayBox3').append('<td class="small-box index-char" id="chartdC' + i + '"><span id="chartdCspan'+ i +'"></span></td>');
						}
						TweenMax.to($("#aArrayDiv"), 1, {opacity: 1, onComplete: function() {
							TweenMax.to($("#bArrayDiv"), 1, {opacity: 1, onComplete: function() {
								TweenMax.to($("#cArrayDiv"), 1, {opacity: 1, onComplete: function() {
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								}});
							}});
						}});
					});
				});
				break;
			case 'tweenmax':
				$("[id^='chartdAspan']").text("");
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "The given string <y>characters</y> are allocated into memory.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
						var string = $("#inputText").text();
						for (var i = 0; i < string.length; i++) {
							$("#chartdAspan" + i).append(string.charAt(i)).addClass("a-char-class opacity00");
						}
						$("#inputText").addClass("circle-css").effect( "highlight", {color:"white"}, 1000, function() {
							$(".a-char-class").removeClass("opacity00");
							$('#inputText').removeClass('circle-css');
							fromEffectWithTweenMax($("#inputText"), $(".a-char-class"), function() {
								$("#chartdAspan" + string.length).append("\\0");
								zoomingEffect($("#chartdAspan" + string.length), function() {
									$("#chartdAspan" + string.length).off();
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				});
				break;
			case 'copyText':
				$("[id^='chartdBspan']").text("");
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "So the string of <span class='ct-code-b-yellow'>a</span> is copied into "+
					"<span class='ct-code-b-yellow'>b</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							var chars = $("#arrayBox1").text();
							for (var i = 0; i < chars.length-2; i++) {
								$("#chartdBspan" + i).append(chars.charAt(i)).addClass("b-char-class");
							}
							fromEffectWithTweenMax($(".a-char-class"), $(".b-char-class"), function() {
								var arrayBox2Length = $("#arrayBox2").text().length;
								$("#chartdBspan" + arrayBox2Length).append("\\0");
								zoomingEffect($("#chartdBspan" + arrayBox2Length), function() {
									$("#chartdBspan" + arrayBox2Length).off();
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							});
						});
					});
				});
				break;
			case 'cMemoryAllocation':
				$("[id^='chartdCspan']").text("");
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "The given string <y>characters</y> are allocated into memory.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
						var string = $("#inputTextTwo").text();
						for (var i = 0; i < string.length; i++) {
							$("#chartdCspan" + i).append(string.charAt(i)).addClass("c-char-class opacity00");
						}
						$("#inputTextTwo").addClass("circle-css").effect( "highlight", {color:"white"}, 1000, function() {
							$(".c-char-class").removeClass("opacity00");
							$('#inputTextTwo').removeClass('circle-css');
							fromEffectWithTweenMax($("#inputTextTwo"), $(".c-char-class"), function() {
								var arrayBox3Length = $("#arrayBox3").text().length;
								$("#chartdCspan" + arrayBox3Length).append("\\0");
								zoomingEffect($("#chartdCspan" + arrayBox3Length), function() {
									$("#chartdCspan" + arrayBox3Length).off();
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});	
							});
						});
					});
				});
				break;
			case 'concatenation':
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".introjs-tooltip").hide();
					var string = $("#arrayBox1").text();
					var cBoxString = $("#arrayBox3").text();
					var typingContent = "The resultant concatenated string is stored in <span class='ct-code-b-yellow'>a</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
						$(".introjs-tooltip").hide();
						for (var i = string.length-2, j = 0; i < (string.length-2) + (cBoxString.length-2), j < cBoxString.length; i++, j++) {
							$("#chartdAspan" + i).addClass("a-char-class");
						}
						$("#adding").addClass("circle-css").effect( "highlight", {color:"white"}, 1000, function() {
							$("#adding").removeClass("circle-css");
							$("a-char-class").addClass("opacity00");
							var str = $("#adding").text();
							for (var i = 0; i < str.length; i++) {
							  $("#chartdAspan" + i).text(str.charAt(i));
							}
							fromEffectWithTweenMax($("#adding"), $(".a-char-class"), function() {
								if(str.length < 20) {
									$("#chartdAspan" + str.length).append("\\0");
									zoomingEffect($("#chartdAspan" + str.length), function() {
										$("#chartdAspan" + str.length).off();
										setTimeoutFunction();
									});
								} else {
									setTimeoutFunction();
								}
							});
						});
					});
				});
				break;
			}
			break;
		case 'conditionPart':
			$('.introjs-helperLayer').one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'functionDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			$("#functionDiv").removeClass("opacity00");
			switch(animateStep) {
			case 'countingLength':
				//$("[id^='chartdAspan']").text("");
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".function-class").removeClass("opacity00");
					var typingContent = $(".function-class").html();
					typing('.function-class', typingContent, 30, 'white', function() {
						$("#aArrayDiv").addClass('z-index9999999');
						animationEffect(0);
					});
				});
				break;
			case 'concateString':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#concateId").removeClass("opacity00");
					var aBoxString = $("#arrayBox1").text();
					var aBoxSubString = aBoxString.substring(0, aBoxString.length-2);
					var cBoxString = $("#arrayBox3").text();
					var cBoxSubString = cBoxString.substring(0, cBoxString.length-2);
					var typingContent = $("#concateId").html();
					typing('#concateId', typingContent, 30, 'white', function() {
						$("#adding").append(aBoxSubString + " + " + cBoxSubString);
						flipEffect($("#adding"), aBoxSubString + cBoxSubString, function() {
							setTimeoutFunction();
						});
					});
				});
				break;
			case 'comparisonStep':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#comparison").append("<span id='bBoxCompareId'></span><span id='compareSymbol' class='opacity00'></span>"+
											"<span id='cBoxCompareId'></span>")
					var typingContent = "The comparison of two strings is dependant on the <span class='ct-code-b-yellow'>alphabets</span> "+
						"and not on the size of the strings.<br>"+
						"<ul><li>If the function <span class='ct-code-b-yellow'>strcmp()</span> returns <span class='ct-code-b-yellow'>0</span>, "+
						"both strings are <span class='ct-code-b-yellow'>equal</span>."+
						"<li>If the function <span class='ct-code-b-yellow'>strcmp()</span> returns <span class='ct-code-b-yellow'>-1</span>, "+
						"string2 is <span class='ct-code-b-yellow'>higher than</span> string1.</li>"+
						"<li>If the function <span class='ct-code-b-yellow'>strcmp()</span> returns <span class='ct-code-b-yellow'>1</span>, "+
						"string1 is <span class='ct-code-b-yellow'>higher than</span> string2.</li></ul>";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						var bBoxString = $("#arrayBox2").text();
						var bBoxSubString = bBoxString.substring(0, bBoxString.length-2);
						var cBoxString = $("#arrayBox3").text();
						var cBoxSubString = cBoxString.substring(0, cBoxString.length-2);
						var n = bBoxSubString.localeCompare(cBoxSubString);
						$("#bBoxCompareId").append(bBoxSubString + " ").addClass("opacity00");
						$("#cBoxCompareId").append(" " + cBoxSubString).addClass("opacity00");
						if(n == 0) {
							$("#compareSymbol").append("=");
							$("#printText6").append("The given two strings are equal");
						} else if(n == 1) {
							$("#compareSymbol").append(">");
							$("#printText6").append("The string <span class='ct-code-b-yellow'>" + bBoxSubString + "</span> is higher than the string "+
									"<span class='ct-code-b-yellow'>" + cBoxSubString + "</span>");
						} else {
							$("#compareSymbol").append("<");
							$("#printText6").append("The string <span class='ct-code-b-yellow'>" + cBoxSubString + "</span> is higher than the string "+
									"<span class='ct-code-b-yellow'>" + bBoxSubString + "</span>");
						}
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							$("#compareId").removeClass("opacity00");
							var typingContent = $("#compareId").html();
							typing('#compareId', typingContent, 30, 'white', function() {
								TweenMax.to($("#bBoxCompareId"), 1, {opacity: 1, onComplete: function() {
									TweenMax.to($("#cBoxCompareId"), 1, {opacity: 1, onComplete: function() {
										TweenMax.to($("#compareSymbol"), 1, {opacity: 1, onComplete: function() {
											flipEffect($("#comparison"), n, function() {
												$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
												$(".user-btn").click(function() {
													$(".user-btn").remove();
													if(n == 0) {
														introjs.goToStep(30);
													}
													else if(n == 1) {
														introjs.goToStep(31);
													}
													else {
														introjs.goToStep(32);
													}
												});
											});
										}});
									}});
								}});
							});
						});
					});
				});
				break;
			}
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			$("#consoleId").removeClass("opacity00");
			switch(animateStep) {
			case 'printText1':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#printText1").removeClass("visibility-hidden");
					var typingContent = $("#printText1").html();
					typing('#printText1', typingContent, 30, 'white', function() {
						setTimeoutFunction();
					});
				});
				break;
			case 'inputText':
				$('.introjs-helperLayer').one('transitionend', function() {
					keyCodeCondition();
					var typingContent = "Enter a string here.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.input-text').attr({contenteditable: 'true', placeholder: 'Enter string'});
						$("#inputText").addClass("blink");
						charAtEnd(document.getElementById('inputText'));
						//$(".introjs-nextbutton").show();
					});
				});
				break;
			case 'printText2':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#printText2").removeClass("visibility-hidden");
					var typingContent = "The length of the string <span class='ct-code-b-yellow'>" + $("#inputText").text() + "</span> is "+
					"<span class='ct-code-b-yellow'>" + $("#countLength").text() + "</span>";
					typing('#printText2', typingContent, 30, 'white', function() {
						setTimeoutFunction();
					});
				});
				break;
			case 'printText3':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#printText3").removeClass("visibility-hidden");
					var text = $("#arrayBox2").text();
					var typingContent = "The copied string = <span class='ct-code-b-yellow'>" + text.substring(0, text.length-2) + "</span>";
					typing('#printText3', typingContent, 30, 'white', function() {
						setTimeoutFunction();
					});
				});
				break;
			case 'printText4':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#printText4").removeClass("visibility-hidden");
					var typingContent = $("#printText4").html();
					typing('#printText4', typingContent, 30, 'white', function() {
						setTimeoutFunction();
					});
				});
				break;
			case 'inputTextTwo':
				$("#inputTextTwo").text("");
				$('.introjs-helperLayer').one('transitionend', function() {
					keyCodeCondition();
					var typingContent = "Enter a string.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.input-text-two').attr({contenteditable: 'true', placeholder: 'Enter string'});
						$("#inputTextTwo").addClass("blink");
						charAtEnd(document.getElementById('inputTextTwo'));
					});
				});
				break;
			case 'printText5':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "The concatenated string = <span class='ct-code-b-yellow'>" + $("#adding").text() + "</span>";
					$("#printText5").removeClass("visibility-hidden");
					typing('#printText5', typingContent, 30, 'white', function() {
						setTimeoutFunction();
					});
				});
				break;
			case 'printText6':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = $("#printText6").html();
					$("#printText6").removeClass("visibility-hidden");
					typing('#printText6', typingContent, 30, 'white', function() {
						setTimeoutFunction();
					});
				});
				break;
			}
			break;
		case 'line14':
			$('.introjs-helperLayer').one('transitionend', function() {
				setTimeout(function() {
					introjs.goToStep(33);
				},500);
			});
			break;
		case 'line15':
			$('.introjs-helperLayer').one('transitionend', function() {
				setTimeout(function() {
					introjs.goToStep(33);
				},500);
			});
			break;
		case 'line16':
			$('.introjs-helperLayer').one('transitionend', function() {
				setTimeout(function() {
					introjs.goToStep(33);
				},500);
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

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
		}
	});
}

function setTimeoutFunction() {
	setTimeout(function() {
		introjs.nextStep();
	},500);
}

function charAtEnd(element) {
	element.focus();
	if (typeof window.getSelection != "undefined"&& typeof document.createRange != "undefined") {
		var range = document.createRange();
		range.selectNodeContents(element);
		range.collapse(false);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	}    	   
}

function animationEffect(i) {
	var string = $("#inputText").text();
	$("#chartdA" + i).effect( "transfer", { to: $("#indexA" + i), className: "ui-effects-transfer" }, 500 , function() {
		$("#countLength").text(i);
		if (i == string.length) {
			$("#indexA" + string.length).addClass("blinking");
			$("#indexA" + string.length).effect( "highlight", {color:"#0fea85"}, 500, function() {
				TweenMax.to($("#countLength"), 0.1, {opacity: 1, onComplete: function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 1500);
				}});
			});
		} else {
			$("#indexA" + i).effect( "transfer", { to: $("#chartdA" + (i + 1)), className: "ui-effects-transfer" }, 1000 , function() {
				if ( i < string.length) {
					animationEffect(++i);
				}
			});
      	}
	});
}

function zoomingEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").effect("highlight", {color:"#00FF00"}, 1000).addClass("animated zoomIn").one('animationend', function() {
	//	$(id).effect("highlight", {color:"#00FF00"}, 500, function() {
			$(id).removeClass("animated zoomIn");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
	//	});
	});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 2, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 2, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {css: {top : 1, rotationX : 0,}, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function comparisionTweenmax() {
	$("#compareId").removeClass("opacity00");
	var typingContent = $("#compareId").html();
	typing('#compareId', typingContent, 30, 'white', function() {
		TweenMax.to($("#bBoxCompareId"), 1, {opacity: 1, onComplete: function() {
			TweenMax.to($("#cBoxCompareId"), 1, {opacity: 1, onComplete: function() {
				TweenMax.to($("#compareSymbol"), 1, {opacity: 1, onComplete: function() {
					flipEffect($("#comparison"), n, function() {
						if(n == 0) {
							introjs.goToStep(30);
						}
						else if(n == 1) {
							introjs.goToStep(31);
						}
						else {
							introjs.goToStep(32);
						}
					});
				}});
			}});
		}});
	});
}

function keyCodeCondition() {
	$('#inputText, #inputTextTwo').on("keydown", function(e) { // conditions to enter text
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 35, 36, 37, 39]) !== -1) {
			return;
		}
		
		/* if ((e.which >= 96 && e.which <= 105) || (e.which >= 48 && e.which <= 57) || $.inArray(e.keyCode, [46, 8, 9, 27, 35, 36, 37, 39]) !== -1) {
			return;
		} */
		/* if ((e.shiftKey) || (e.keyCode > 90 || e.keyCode < 65)) {
			e.preventDefault();
		} */
		var max = $(this).attr("maxlength");
		if(e.which == 13 || e.which == 222) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			 if(e.which == 8 || e.which == 46){
	   			return true;	
			}
  			e.preventDefault();
	 	}
	});
	$('#inputText, #inputTextTwo').on("keyup", function(e) {
		$('.length-error-text').remove();
		if ($(this).text() == "") {
			$(".introjs-nextbutton").hide();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
												"<b>Please enter a string.</b></span>");
		} else {
			$(".introjs-nextbutton").show();
		}
	});
}
