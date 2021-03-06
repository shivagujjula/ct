var intro;
var typingInterval = 1;
var tl = new TimelineLite();
var sopLineCount = 1;
var count = 0;
var plusCount = 1;
var keyVal = $('#number3').text();
var keyVal1 = $('#number4').text();
var printfWithPlusReady = function() {
	intro = introJs();
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
				element :'#printfDefinition',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#VariableDeclararion',
				intro :'',
			},{
				element :'#animationDiv',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#sopLine1',
				intro :'',
				animateStep: "decimal"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'left',
				tooltipClass : "hide",
				animateStep: "decimal"
			},{
				element :'#sopLine2',
				intro :'',
				animateStep: "plusSpace"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'left',
				tooltipClass : "hide",
				animateStep: "plusSpace"
			},{
				element :'#sopLine3',
				intro :'',
				tooltipClass: 'hide',
				animateStep: "plusWithSpace"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'left',
				tooltipClass : "hide",
				animateStep: "plusWithSpace"
			},{
				element :'#sopLine4',
				intro :'',
				tooltipClass: 'hide',
				animateStep: "plusWithZero"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'left',
				tooltipClass : "hide",
				animateStep: "plusWithZero"
			},{
				element : "#button",
				intro : "<ul><li>Click on <span class='ct-code-b-yellow'>Close</span> button to close the Live Demo.</li>" +
						"<li>Click on <span class='ct-code-b-yellow'>Restart</span> button to restart the Live Demo.</li></ul>",
				position : "right"
			}]
	});
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		
			switch (elementId) {
				case "VariableDeclararion" :
					$("#numberDiv1").addClass("opacity00");
				break;
				case "sopLine" + sopLineCount :
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "decimal" :
							
								$("#outputAValue1").text("");
						break;
							
						case "plusSpace" :
							$("#pluss1").addClass("opacity00")
							$("#outputAValue2").text("");
						break;
							
						case "plusWithSpace" :
							if (intro._direction == "backward") {
								$("#appendDiv3").empty();
								}
						break;
						
						case "plusWithZero" :
							
						break;
					}
				break;
				
				case "outputDiv" :
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
					case "decimal" :
						
					break;
					
					case "plusSpace" :
						
					break;
					
					case "plusWithSpace" :
						if (intro._direction == "backward") {
						$("#appendDiv3").empty();
						}
					break;
					
					case "plusWithZero" :
						
					break;
					}
				break;
				
				
			}
		
	});
		intro.onafterchange(function(targetElement){
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			// ********************** start ************back button logic
					
					if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
						intro._introItems[intro._currentStep]["animation"] = "repeat";
					}
					
					if (intro._introItems[intro._currentStep]["isCompleted"]) {
						if (intro._currentStep != 0 && intro._currentStep != 1) {
							$('.introjs-prevbutton').show();
						}
						$('.introjs-nextbutton').show();
						return;
					}
					
					if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
						intro._introItems[intro._currentStep]["isCompleted"] = true;
					}
					
					// ********************** end ************back button logic
		var elementId = targetElement.id;
		$('.introjs-nextbutton,.introjs-prevbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
				case "VariableDeclararion" :
					$("#printfDefinition").addClass("z-index1000000");
					$("#codeDiv, #animationDiv, #outputDiv").removeClass("opacity00");
					$("#VariableDeclararion").removeClass("z-index1000000");
					//$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring and initializing an integer variable '
							+ ' <span class = "ct-code-b-yellow">a</span> to '
							+ ' <span class = "ct-code-b-yellow">64</span>.';
					
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "animationDiv" :
					if (intro._direction=="forward") {
					 transferEffect('#VariableDeclararion', '#numberDiv1', function() {
					  	setTimeout(function() {
					  		intro.nextStep()
					  		}, 500);
					  });
					 } else {
						 	setTimeout(function() {
					  intro.previousStep()
						 	}, 500);
					 }
					  	
				
				break;
				
				case "sopLine" + sopLineCount :
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "decimal" :
							//$('.introjs-tooltip').removeClass('hide');

							text = 'Here, the <span class="ct-code-b-yellow">printf()</span> function'
									+ ' uses <span class="ct-code-b-yellow">%d</span> format character '
									+ ' to print the value strored in the variable <span class="ct-code-b-yellow">a</span>.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						break;
							
						case "plusSpace" :
							//$('.introjs-tooltip').removeClass('hide');
							text = 'Here, the <span class="ct-code-b-yellow">printf</span> statement is trying to print the'
									+ ' value <span class="ct-code-b-yellow">64</span> using '
									+ ' the format character <span class="ct-code-b-yellow">%+d</span>.';	
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						break;
							
						case "plusWithSpace" :
							$('[contenteditable = "false"]').attr('contenteditable', 'true');
							$('.introjs-tooltip').removeClass('hide');
							keyVal = $('#number3').text();
							text = 'The <span class="ct-code-b-yellow">printf</span> statement is trying to '
									+ ' print the value <span class="ct-code-b-yellow">64</span>, using  '
									+ ' <span class="ct-code-b-yellow">+</span> symbol as well as '
									+ ' <span class="ct-code-b-yellow">field width</span> of '
									+ ' <span class="ct-code-b-yellow"><span class = "keyValue"> ' + keyVal + '</span></span> '
									+ ' specified in <span class = "ct-code-b-yellow">%+<span class = "keyValue">' + keyVal + '</span>d</span>.'
									+ ' <br/><br/> You can also change the value of field width'
									+ ' <span class = "ct-code-b-yellow keyValue">' + keyVal + '</span> to any other value.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$("#number" + sopLineCount).effect( "highlight",{color: 'yellow'});
								caretAtEnd(document.getElementById('number' + sopLineCount));
								changeValue('#number' + sopLineCount, 1);
								clickToFocus("#sopLine" + sopLineCount,"#number" + sopLineCount);
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						break;
						
						case "plusWithZero" :
							$('[contenteditable = "false"]').attr('contenteditable', 'true');
							keyVal1 = $('#number4').text();
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">printf</span> statement is trying to '
									+ ' print the value <span class="ct-code-b-yellow">64</span> using the '
									+ ' format specifier <span class = "ct-code-b-yellow">%+0'
									+ ' <span class = "keyValue">' + keyVal1 + ' </span>d</span>.'
									+ ' <br/><br/> You can also change the value of field width'
									+ ' <span class = "ct-code-b-yellow keyValue">' + keyVal1 + '</span> to any other value.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$("#number" + sopLineCount).effect( "highlight",{color: 'yellow'});
								caretAtEnd(document.getElementById('number' + sopLineCount));
								changeValue('#number' + sopLineCount, 1);
								clickToFocus("#sopLine" + sopLineCount,"#number" + sopLineCount);
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						break;
					}
				break;
				
				case "outputDiv" :
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
					case "decimal" :
						printDecimalValue();
					break;
					
					case "plusSpace" :
					  	setTimeout(function() {
					  		if (intro._direction=="forward") {
					  			$("#pluss1").removeClass("opacity00")
					  			$("#pluss"+plusCount).text("+");
					  			
					  			$("#outputAValue" + sopLineCount).text($("#addressValue1").text());
					  			sopLineCount++;
					  			plusCount++;
					  			setTimeout(function() {
					  		intro.nextStep()
					  			}, 1000);
					  		} else {
					  			sopLineCount--;
					  			plusCount--;
					  		intro.previousStep()
					  		}
					  		}, 500);
					break;
					
					case "plusWithSpace" :
						var length = $("#addressValue1").text().length;
						var number = parseInt($("#number" + sopLineCount).text());
						if (length < number) {
							setTimeout(function() {
							if (intro._direction=="forward") {
								$('.introjs-tooltip').removeClass('hide');
								keyVal = $('#number3').text();
								text = 'Since, the number of characters of the digits in '
										+ ' <span class = "ct-code-b-yellow">64</span> '
										+ ' is lesser than the field width <span class = "ct-code-b-yellow keyValue">' + keyVal + '</span>, '
										+ ' the remaining positions will be padded with'
										+ ' <span class = "ct-code-b-yellow">spaces</span>.<br/><br/>'
										+ ' We will also notice that the number will'
										+ ' be preceded with <span class = "ct-code-b-yellow">+</span>';
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
									for (var i = (number - 1); i >= 0; i--) {
										$("#appendDiv" + sopLineCount).append('<span id = "borderSpan" class = "bottom-border '
												+ 'visibility-hidden"><span class = "visibility-hidden" id = "outputSpan'
												+ i +'">0</span></span>');
									}
									$('.introjs-tooltipbuttons').append("<a class = 'introjs-button introjs-duplicate-nextbutton'>"
											+ "Next &#8594;</a>");
									$('.introjs-duplicate-nextbutton').click(function() {
										$('.introjs-tooltip').addClass('hide');
										$('.introjs-duplicate-nextbutton').remove();
										var length = $("#addressValue1").text().length;
										var number = parseInt($("#number" + sopLineCount).text());
										for (var i = (length - 1), j = 0; i >= 0, j < length; i--, j++) {
											if ( j ==  (length - 1)) {
												$("#outputSpan" + (j + 1)).addClass("pluse-symbol");
												$("#outputSpan" + i).text($("#addressValue1").text().charAt(j)).addClass("move-values");
											} else {
												$("#outputSpan" + i).text($("#addressValue1").text().charAt(j)).addClass("move-values");
											}
										}
										$("#persentage" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
										$("#persentage" + sopLineCount).effect( "transfer", { to: $("#appendDiv" + sopLineCount), className: "ui-effects-transfer" }, 1000 , function() {
											$("#persentage" + sopLineCount).removeClass("z-index1000000");
											$(".bottom-border").removeClass("visibility-hidden");
											$(".pluse-symbol").text("+").removeClass("visibility-hidden");
											$(".move-values").removeClass("visibility-hidden");
											sopLineCount++;
											setTimeout(function() {
											intro.nextStep()
											}, 500);
										});
									});
								});
							} else {
								sopLineCount--;
							intro.previousStep()
								}
							}, 500);
							
						} else {
							$('.introjs-tooltip').removeClass('hide');
							text = 'Since, the number of characters of the digits in <span class = "ct-code-b-yellow">64</span> '
									+ ' is more than the field width <span class = "ct-code-b-yellow">'+ number+'</span>, '
									+ ' the number <span class = "ct-code-b-yellow">64</span> will be printed with '
									+ ' preceding <span class = "ct-code-b-yellow">+</span> sign.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-tooltipbuttons').append("<a class = 'introjs-button introjs-duplicate-nextbutton'>"
									+ "Next &#8594;</a>");
								$('.introjs-duplicate-nextbutton').click(function() {
									$('.introjs-tooltip').addClass('hide');
									$('.introjs-duplicate-nextbutton').remove();
									$("#pluss2").text("+").removeClass("visibility-hidden");
									$('#outputAValue3').text($('#addressValue1').text());
									sopLineCount++;
									setTimeout(function() {
										if (intro._direction=="forward") {
										intro.nextStep()
										} else {
										intro.previousStep()
										}
										}, 500);
								});
							});
						}
					break;
					
					case "plusWithZero" :
						var length = $("#addressValue1").text().length;
						var number = parseInt($("#number" + sopLineCount).text());
						if (length < number) {
							$('.introjs-tooltip').removeClass('hide');
							text = 'Since, we are using <span class = "ct-code-b-yellow">0</span> as the padding character to '
									+ ' fill the remaining <span class = "ct-code-b-yellow">spaces</span>'
									+ ' while priting <span class = "ct-code-b-yellow">64</span> ,'
									+ ' the <span class = "ct-code-b-yellow">+</span> symbol will appear before the padding characters.'
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								for (var i = (number - 1); i >= 0; i--) {
									if (i == (number -1 )) {
										$("#appendDiv" + sopLineCount).append('<span id = "borderSpan" '
											+ 'class = "bottom-border visibility-hidden">'
											+ ' <span class = "visibility-hidden append-plus" id = "zerpOutputSpan'
											+ i +'">0</span></span>');	
									} else {
								 		$("#appendDiv" + sopLineCount).append('<span id = "borderSpan"'
								 			+ ' class = "bottom-border visibility-hidden">'
								 			+ ' <span class = "visibility-hidden append-zero" id = "zerpOutputSpan'
								 			+ i +'">0</span></span>');
									}
								}
								$('.introjs-tooltipbuttons').append("<a class = 'introjs-button introjs-duplicate-nextbutton'>"
										+ "Next &#8594;</a>");
								$('.introjs-duplicate-nextbutton').click(function() {
									$('.introjs-tooltip').addClass('hide');
									$('.introjs-duplicate-nextbutton').remove();
									var length = $("#addressValue1").text().length;
									var number = parseInt($("#number" + sopLineCount).text());
									for (var i = (length - 1), j = 0; i >= 0, j < length; i--, j++) {
										if ( j == 1 ) {
											$("#zerpOutputSpan" + i).text($("#addressValue1").text().charAt(j)).addClass("move-values1");
										} else {
											$("#zerpOutputSpan" + i).text($("#addressValue1").text().charAt(j)).addClass("move-values1");
										}
									}
									$("#persentage" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
									$("#persentage" + sopLineCount).effect( "transfer", { to: $("#appendDiv" + sopLineCount), className: "ui-effects-transfer" }, 1000 , function(){
										$("#persentage" + sopLineCount).removeClass("z-index1000000");
										$(".bottom-border").removeClass("visibility-hidden");
										$(".append-zero").removeClass("visibility-hidden");
										$(".append-plus").text("+").removeClass("visibility-hidden");
										$(".move-values1").removeClass("visibility-hidden");
										sopLineCount++;
										setTimeout(function() {
											if (intro._direction=="forward") {
											intro.nextStep()
											} else {
											intro.previousStep()
											}
											}, 500);
									});
								});
							});
						} else {
							$('.introjs-tooltip').removeClass('hide');
							text = 'Since, the number of characters of the digits in <span class = "ct-code-b-yellow">64</span> '
									+ ' is more than the field width <span class = "ct-code-b-yellow">'+ number+'</span>, '
									+ ' the number <span class = "ct-code-b-yellow">64</span> will be printed with '
									+ ' preceding <span class = "ct-code-b-yellow">+</span> sign.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-tooltipbuttons').append("<a class = 'introjs-button introjs-duplicate-nextbutton'>"
									+ "Next &#8594;</a>");
								$('.introjs-duplicate-nextbutton').click(function() {
									$('.introjs-tooltip').addClass('hide');
									$('.introjs-duplicate-nextbutton').remove();
									$("#pluss3").text("+").removeClass("visibility-hidden");
									$('#outputAValue4').text($('#addressValue1').text());
									sopLineCount++;
									setTimeout(function() {
										if (intro._direction=="forward") {
										intro.nextStep()
										} else {
										intro.previousStep()
										}
										}, 500);
								});
							});
						}
					break;
					}
				break;
				
				case "button":
					$(".introjs-tooltip").css("min-width","380px");
					$(".introjs-tooltipbuttons").hide()
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#printfDefinition").removeClass("z-index1000000");
						$("#restartBtn, #closeBtn").removeClass("visibility-hidden");
					});
					break;
			}
		});
	});
	intro.start();
	$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
	
	TweenMax.to('#text1', 1, {opacity: 1, onComplete: function() {
		TweenMax.to('#text2', 1, {opacity: 1, onComplete: function() {
			TweenMax.to('#text3', 1, {opacity: 1, onComplete: function() {
				$('.introjs-duplicate-nextbutton').removeClass('opacity00').addClass("animated zoomIn").one('animationend', function() {
					$('.introjs-duplicate-nextbutton').click(function() {
						$(".introjs-duplicate-nextbutton").remove();
						setTimeout(function() {
					  		if (intro._direction=="forward") {
					  		intro.nextStep()
					  		} else {
					  		intro.previousStep()
					  		}
					  		}, 500);
					});
				});
			}});
		}});
	}});
	$('#restartBtn').click(function() {
		location.reload();
	});

	$('#closeBtn').click(function() {
		window.parent.$(".ui-dialog-titlebar-close").click();
	});
}

function clickToFocus(id1, id2) {
	$(id1).click(function(){
		$(id2).focus();
	});
}

function printDecimalValue() {
			  			setTimeout(function() {
			  				if (intro._direction=="forward") {
			  					$(".introjs-duplicate-nextbutton").remove();
			  					highlightFunction("#persentage" + sopLineCount, "z-index1000000", function() {
			  						highlightFunction("#aValue" + sopLineCount, "z-index1000000", function() {
			  							fromEffectWithTweenMax("#aValue" + sopLineCount, "#aValueAnimation", true, function() {
			  								$("#persentage" + sopLineCount).removeClass('z-index1000000');
			  								$("#aValue" + sopLineCount).removeClass('z-index1000000');
			  								highlightFunction("#addressValue1", "circle-css z-index1000000", function() {
			  									$("#outputAValue" + sopLineCount).text($("#addressValue1").text());
			  									fromEffectWithTweenMax("#addressValue1", "#outputAValue" + sopLineCount, false, function() {
			  										$('#addressValue1').removeClass('circle-css z-index1000000');							
			  										setTimeout(function() {
			  										sopLineCount++;
			  										intro.nextStep()
			  										}, 400);
			  									});
			  								});
			  							});
			  						});
			  					});
			  				} else {
			  					setTimeout(function() {
			  					sopLineCount--;
			  				intro.previousStep()
			  					}, 400);
			  				}
			  				}, 500);
	
}

//*******Text highlight function*****
function highlightFunction(selector1, selector2, callBackFunction) {
	$(selector1).addClass(selector2).effect( "highlight",{color: 'yellow'},500, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//*****setTimeout function to intro go next step step*****
function introNextStep() {
	setTimeout(function() {
		intro.nextStep();
	},800);
}

//*****From effect animation*****
function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).css({"color" : "red", "z-index" : "99999999"}).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	if (flag) {
		$("body").append("<span id='dummy' style='position: relative; z-index: 9999999; color: white;'>" 
				+ $(selector2).text() + "</span>");
		$("#dummy").offset({
			"top" : l2.top,
			"left" : l2.left
		});
	}
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style").css("color", "white");
		$("#dummy").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

//********* Transfer effect function ********* 
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index1000000");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//cursor position at end
function caretAtEnd(element) {
	element.focus();
	if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
		var range = document.createRange();
		range.selectNodeContents(element);
		range.collapse(false);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	}
}

//typing function
function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : typingInterval,
		"cursor_color" : cursorColor
	}, function() {
		$(typingId).removeClass("typingCursor");
		typingCallbackFunction();
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		$('.introjs-tooltip').show();
		
	});
} 

//Allow only numbers,Condition to  enter text, change the array values, Display error message & Fill all the array elements
function changeValue(id1, id2) {
	$(id1).on("keydown", function(e) {
		//$(".keyValue").text($(id1).text());
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max-1) {
			if (id2 != 1) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>String length to 3.</span>");
				e.preventDefault();
			} else {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>String length to 1.</span>");
				e.preventDefault();
			}
		}
	});
	$(id1).on("keyup", function(e) {
		$(".keyValue").text($(id1).text());
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter number.</span>");
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		intro.refresh();
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton,.introjs-prevbutton").hide();
		} else {
			$(".introjs-nextbutton,.introjs-prevbutton").show();
		}
	});
}
