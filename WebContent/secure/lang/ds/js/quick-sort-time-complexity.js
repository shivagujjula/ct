 var quickSortTimeComplexity = function() {
	introGuide();
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if(e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function() {
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
			element : '#indexDiv',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#preCode1',
			intro : '',
			position : 'top',
			animateStep : 'firstStep'
		}, {
			element : '#partitionId',
			intro : '',
			position : 'right'
		}, {
			element : '#preCode1',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'secondStep'
		}, {
			element : '#quicksortFunId',
			intro : '',
			position : 'right'
		}, {
			element : '#explanationDiv',
			intro : '',
			position : 'left',
			animateStep : 'firstStep'
		}, {
			element : '#preCode1',
			intro : '',
			position : 'right',
			animateStep : 'thirdStep'
		}, {
			element : '#explanationDiv',
			intro : '',
			position : 'left',
			tooltipClass : 'hide',
			animateStep : 'secondStep'
		}, {
			element : '#preCode1',
			intro : '',
			position : 'right',
			animateStep : 'fourthStep'
		}, {
			element : '#explanationDiv',
			intro : '',
			position : 'left',
			animateStep : 'thirdStep'
		}, {
			element : '#preCode1',
			intro : '',
			position : 'right',
			animateStep : 'fifthStep'
		}, {
			element : '#explanationDiv',
			intro : '',
			position : 'left',
			tooltipClass : 'hide',
			animateStep : 'fourthStep'
		}, {
			element : "#restart",
			intro : '',
			position : 'right'
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'indexDiv':
			$("#listLine1").fadeTo(100, 1, function() {
				$("#listLine2").fadeTo(100, 1, function() {
					$("#listLine3").fadeTo(100, 1, function() {
						$("#listLine4").fadeTo(100, 1, function() {
							$("#listLine5").fadeTo(100, 1, function() {
								$("#listLine6").fadeTo(100, 1, function() {
									$("#listLine7").fadeTo(100, 1, function() {
										$("#listLine8").fadeTo(100, 1, function() {
											$("#listLine8").after('<span class="introjs-button user-btn">Next &#8594;</span>');
											introjs.refresh();
											$(".user-btn").click(function() {
												$(".user-btn").remove();
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
		case 'preCode1':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$('.introjs-helperLayer').one('transitionend', function() {
					TweenMax.to($("#preCode1"), 1, {opacity: 1, onComplete: function() {
						var text = 'This is an recursive code for <span class="ct-code-b-yellow">quick sort</span>.';
						typing('.introjs-tooltiptext', text, function() {
							buttonAppendFunction(".introjs-tooltipbuttons", function() {
								$(".introjs-tooltip").hide();
								popoverAppendFunction("#codeLine3", "right", 3);
								var text = "<span class='ct-code-b-yellow'>If</span> is a simple statement the cost of executing this statement will be " +
										"constant <span class='ct-code-b-yellow'>A</span>.";
								typing("#popover3", text, function() {
									buttonAppendFunction("#popover3", function() {
										$("#codeLine3").popover('hide');
										TweenMax.to($("#codeLine3timeC"), 1, {opacity: 1, onComplete: function() {
											popoverAppendFunction("#codeLine4", "right", 4);
											var text = "Now we will come to <span class='ct-code-b-yellow'>partition</span> function. " +
													"first we need to figure out what will be the running time of " +
													"<span class='ct-code-b-yellow'>partition</span> function.";
											typing("#popover4", text, function() {
												buttonAppendFunction("#popover4", function() {
													$("#codeLine4").popover('hide');
													setTimeoutFunction();
												});
											});
										}});
									});
								});
							});
						});
					}});
				});
				break;
			case 'secondStep':
				$('.introjs-helperLayer').one('transitionend', function() {
					popoverAppendFunction("#codeLine4", "right", 4);
					var text = "So overall cost of executing this statement is <span class='ct-code-b-yellow'>C(n)+B</span>.";
						typing("#popover4", text, function() {
							buttonAppendFunction("#popover4", function() {
								$("#codeLine4").popover('hide');
								TweenMax.to($("#codeLine4timeC"), 1, {opacity: 1, onComplete: function() {
									setTimeoutFunction();
								}});
							});
						});
				});
				break;
			case 'thirdStep':
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "So both quicksort functions will have time complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.";
					typing('.introjs-tooltiptext', text, function() {
						TweenMax.to($("#codeLine5timeC"), 1, {opacity: 1, onComplete: function() {
							$("#codeLine5timeC").effect('highlight',{color:'#da5805'}, 1000);
							TweenMax.to($("#codeLine6timeC"), 1, {opacity: 1, onComplete: function() {
								$("#codeLine6timeC").effect('highlight', {color:'#da5805'}, 1000);
								$(".introjs-nextbutton").show();
							}});
						}});
					});
				});
				break;
			case 'fourthStep':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#codeLine5timeC, #codeLine6timeC").text("");
					var text = "Now find the time complexity in <span class='ct-code-b-yellow'>Worst case</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;
			case 'fifthStep':
				var text = "So one <span class='ct-code-b-yellow'>quicksort</span> function costs <span class='ct-code-b-yellow'>T(n-1)</span>. " +
						"If we are seeing that <span class='ct-code-b-yellow'>T(n)</span> is the cost for array and other recursive call " +
						"will simply return control will not go inside the if conditions so there will be some constant cost for the second " +
						"recursive call i.e <span class='ct-code-b-yellow'>C</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$("#codeLine5timeC").append("//	T(n-1)");
					$("#codeLine6timeC").append("//	C");
					$(".introjs-nextbutton").show();
				});
				break;
			}
			
			break;
		case 'partitionId':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "<ul><li id='liLine1'>Here we have some simple statements that will take constant time. Let us assume the constant time is " +
						"<span class='ct-code-b-yellow'>B</span>.</li></ul>";
				typing('.introjs-tooltiptext', text, function() {
					$("#codeLine11, #codeLine12, #codeLine13, #codeLine27, #codeLine28, #codeLine29").addClass("blinking").one('animationend', function() {
						$("#codeLine11, #codeLine12, #codeLine13, #codeLine27, #codeLine28, #codeLine29").removeClass("blinking").off();
						buttonAppendFunction("#liLine1", function() {
							$("#liLine1").after("<li id='liLine2'>Apart from these statements we have one while loop. The statements inside loop " +
									"some are simple statements " +
									"and together  take some constant time, let's say these statements inside while loop will take some constant " +
									"time <span class='ct-code-b-yellow'>C</span>.</li>");
							typing('#liLine2', $("#liLine2").html(), function() {
								$("#whileLoopId").addClass("blinking").one('animationend', function() {
									$("#whileLoopId").removeClass("blinking").off();
									buttonAppendFunction("#liLine2", function() {
										$("#liLine2").after("<li id='liLine3'>So, time taken for the partition function will be " +
												"<span class='ct-code-b-yellow'>C(n)+B</span></li>")
										typing('#liLine3', $("#liLine3").html(), function() {
											$(".introjs-nextbutton").show();
										});
									});
								});
							});
						});
					});
				});
			});
			break;
		case 'quicksortFunId':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Now we have two recursive calls, let's see what will be the cost of these two recursive calls.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		
		case 'explanationDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$(".introjs-helperLayer").one('transitionend', function() {
					TweenMax.to($("#explanationDiv1"), 1, {opacity: 1, onComplete: function() {
						var text = "<ul><li id='liTextLine1'>In partition function, we choose a element as Pivot. In our partition function we always " +
								"choosing the last element in the segment array, pass to quick sort or element at end index as pivot.</li></ul>";
						typing('.introjs-tooltiptext', text, function() {
							buttonAppendFunction("#liTextLine1", function() {
								$("#liTextLine1").after("<li id='liTextLine2'>Let us take array of integers and whole array is passed to the " +
										"quick sort function.</li>");
								typing('#liTextLine2', $("#liTextLine2").html(), function() {
									zoomInEffect("#table1", function() {
										buttonAppendFunction("#liTextLine2", function() {
											$("#liTextLine2").after("<span id='liSpan'><li>So here low is <span class='ct-code-b-yellow'>0</span> and " +
												"high is <span class='ct-code-b-yellow'>7</span>.</li><li><span class='ct-code-b-yellow'>4</span> " +
												"will be picked as pivot and we will rearrange the array.</li></span>");
											typing('#liSpan', $("#liSpan").html(), function() {
												$("#tdIndex").effect('highlight',{color:'#da5805'}, 1500, function() {
													buttonAppendFunction("#liSpan", function() {
														transferEffectFunction("#table1", "#table2", function() {
															$("#svgTag1").removeClass("opacity00");
															TweenMax.to($("#svgTag1"), 0.5, {opacity: 1, onComplete: function() {
																sortingArrayFunction();
															}});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					}});
				});
				break;
			case 'secondStep':
				$(".introjs-helperLayer").one('transitionend', function() {
					TweenMax.to($("#spanId"), 0.5, {opacity: 1, onComplete: function() {
						$("#calcLine1").removeClass("opacity00");
						popoverAppendFunction("#calcLine1", "left", 1);
						var text = "Here in this recurrence relation <span class='ct-code-b-yellow'>A</span> and <span class='ct-code-b-yellow'>B</span>" +
								" will be negligible compared to <span class='ct-code-b-yellow'>C(n)</span> and for very high values of " +
								"<span class='ct-code-b-yellow'>n</span> and when we analyze time complexity, we always look at running time for very " +
								"high values of <span class='ct-code-b-yellow'>n</span> so they can " +
								"easily ignore <span class='ct-code-b-yellow'>A</span> and <span class='ct-code-b-yellow'>B</span>.";
						typing("#popover1", text, function() {
							buttonAppendFunction("#popover1", function() {
								$("#calcLine1").popover('hide');
								tweenMaxAnimation("#calcLine1", "#divCalcLine1", function() {
									TweenMax.to($("#greaterIf"), 0.5, {opacity: 1, onComplete: function() {
										$("#greaterIf").effect('highlight',{color:'#da5805'}, 1000);
										TweenMax.to($("#equalIf, #divCalcLine2"), 0.5, {opacity: 1, onComplete: function() {
											$("#equalIf").effect('highlight',{color:'#da5805'}, 1000);
											var text = "for <span class='ct-code-b-yellow'>n=1</span>, we will not go inside " +
												"<span class='ct-code-b-yellow'>if</span> condition only cost will be execution of " +
												"<span class='ct-code-b-yellow'>if</span> statement. So <span class='ct-code-b-yellow'>n=1</span>" +
												" let the cost is <span class='ct-code-b-yellow'>C1</span>.";
											popoverAppendFunction("#divCalcLine2", "right", 2);
											typing("#popover2", text, function() {
												buttonAppendFunction("#popover2", function() {
													$("#divCalcLine2").popover('hide');
													line3CalculationAnimation();
												});
											});
										}});
									}});
								});
							});
						});
						
					}});
				});
				break;
			case 'thirdStep':
				$("#explanationDiv1").hide();
				$("#explanationDiv2").show();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li id='litext1'>Worst case for will be when we have totally unbalanced partitioning array.</li></ul>";
					typing(".introjs-tooltiptext", text, function() {
						buttonAppendFunction("#litext1", function() {
							$("#litext1").append("<li id='litext2'>Let us consider an array which is already sorted.</li>");
							typing("#litext2", $("#litext2").html(), function() {
								zoomInEffect("#table3", function() {
									buttonAppendFunction("#litext2", function() {
										var text = "If we will pick the last element as Pivot. After partition, we will have only one " +
											"segment. There will be no right segment. One of the recursive calls for left subarray will cost us " +
											"T(n-1).";
										typing(".introjs-tooltiptext", text, function() {
											transferEffectFunction("#table3", "#table4", function() {
												TweenMax.to($("#svgTag2"), 0.5, {opacity: 1, onComplete: function() {
													$(".introjs-nextbutton").show();
												}});
											});
										});
									});
								});
							});
						});
					});
				});
				break;
			case 'fourthStep':
				$(".introjs-helperLayer").one("transitionend", function() {
					TweenMax.to($("#spanId2"), 0.5, {opacity: 1, onComplete: function() {
						$("#calcLine2").removeClass("opacity00");
						popoverAppendFunction("#calcLine2", "left", 2);
						var text = "Here ignoring other constants they will be negligible compared to <span class='ct-code-b-yellow'>c*n</span> " +
							"for higher values of <span class='ct-code-b-yellow'>n</span>.";
						typing("#popover2", text, function() {
							buttonAppendFunction("#popover2", function() {
								$("#calcLine2").popover("hide");
								popoverAppendFunction("#worstCalcLine1", "left", 1);
								var text = "And we also have base-case <span class='ct-code-b-yellow'>T(1)</span> which will be equal to " +
									"<span class='ct-code-b-yellow'>C1</span>";
								typing("#popover1", text, function() {
									TweenMax.to($("#worstCalcLine1"), 0.5, {opacity: 1, onComplete: function() {
										buttonAppendFunction("#popover1", function() {
											$("#worstCalcLine1").popover("hide");
											tweenMaxAnimation("#calcLine2", "#worstCalcLine2", function() {
												popoverAppendFunction("#worstCalcLine2", "left", 2);
												var text = "Now we can reducing <span class='ct-code-b-yellow'>T(n-1)</span> can be written in " +
													"terms of <span class='ct-code-b-yellow'>T(n-2)</span>.";
												typing("#popover2", text, function() {
													tweenMaxAnimation("#worstCalcLine2", "#worstCalcLine3", function() {
														worstCaseCalculation();
													});
												});
											});
										});
									}});
								});
							});
						});
					}});
				});
				break;
			}
			break;
		case "restart":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Click to restart.", function() {
					});
				});
			break;
		}
	});
	introjs.start();
}

function worstCaseCalculation() {
	buttonAppendFunction("#popover2", function() {
		$("#worstCalcLine2").popover("hide");
		popoverAppendFunction("#worstCalcLine3", "left", 3);
		var text = "And we can go on reducing, <span class='ct-code-b-yellow'>T(n-2)</span> can be written as " +
			" <span class='ct-code-b-yellow'>T(n-3)</span>.";
		typing("#popover3", text, function() {
			tweenMaxAnimation("#worstCalcLine3", "#worstCalcLine4", function() {
				buttonAppendFunction("#popover3", function() {
					$("#worstCalcLine3").popover("hide");
					$("#worstCalcLine5").fadeTo(500, 1, function() {
						$("#worstCalcLine5").effect( "highlight", {color:"#FFD700"}, 1000);
						popoverAppendFunction("#worstCalcLine6", "left", 6);
						var text = "In terms of some <span class='ct-code-b-yellow'>k</span> if we will go reducing " +
								"<span class='ct-code-b-yellow'>k</span> steps and written as follows.";
						typing("#popover6", text, function() {
							$("#worstCalcLine6").fadeTo(500, 1, function() {
								$("#worstCalcLine6").effect( "highlight", {color:"#FFD700"}, 1000);
								buttonAppendFunction("#popover6", function() {
									$("#worstCalcLine6").popover("hide");
									popoverAppendFunction("#worstCalcLine7", "left", 7);
									var text = "Now write <span class='ct-code-b-yellow'>T(n)</span> in terms of " +
										"<span class='ct-code-b-yellow'>T(1)</span>, then in that case " +
										"<span class='ct-code-b-yellow'>n-k=1</span> i.e <span class='ct-code-b-yellow'>k=n</span>.";
									typing("#popover7", text, function() {
										$("#worstCalcLine6").fadeTo(500, 1, function() {
											$("#worstCalcLine6").effect( "highlight", {color:"#FFD700"}, 1000);
											buttonAppendFunction("#popover7", function() {
												$("#worstCalcLine7").popover("hide");
												worstCaseCalculationFinal();
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
		
	});
}

function worstCaseCalculationFinal() {
	popoverAppendFunction("#worstCalcLine8", "left", 8);
	var text = "Now, we have <span class='ct-code-b-yellow'>T(1)</span> is constant <span class='ct-code-b-yellow'>C1</span> and remaining " +
			"part will reduced to <span class='ct-code-b-yellow'>(n+1)/2</span>.";
	typing("#popover8", text, function() {
		$("#worstCalcLine8").fadeTo(500, 1, function() {
			$("#worstCalcLine8").effect( "highlight", {color:"#FFD700"}, 1000);
			buttonAppendFunction("#popover8", function() {
				$("#worstCalcLine8").popover("hide");
				popoverAppendFunction("#worstCalcLine9", "left", 9);
				var text = "By simplification we are getting quadratic expression of the form " +
						"<span class='ct-code-b-yellow'>A(n<sup>2</sup>) + B(n) + c</span>.";
				typing("#popover9", text, function() {
					$("#worstCalcLine9").fadeTo(500, 1, function() {
						$("#worstCalcLine9").effect( "highlight", {color:"#FFD700"}, 1000);
						buttonAppendFunction("#popover9", function() {
							$("#worstCalcLine9").popover("hide");
							TweenMax.to($("#worstCalcLine10"), 1, {opacity : 1, onComplete: function() {
								$("#squareN").effect( "highlight", {color:"#FFD700"}, 2000);
								transferEffectFunction("#squareN", "#resultTimeCt2", function() {
									setTimeoutFunction();
								});
							}});
						});
					});
				});
			});
		});
	});
}

function previousStepFunction() {
	introjs.previousStep();
}

function setTimeoutFunction() {
	setTimeout(function() {
		introjs.nextStep();
	}, 1500);
}

function buttonAppendFunction(selector, callBackFunction) {
	$(selector).append('<div class="introjs-tooltipbuttons popover-btn-css"><span class="introjs-button user-btn">Next &#8594;</span></div>');
	$(".user-btn").click(function() {
		$(".user-btn").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function popoverAppendFunction(selector, placement, divIdNum) {
	$(selector).popover({
		placement: placement,
		html: true,
		trigger: 'focus',
		content: '<div id="popover' + divIdNum +'"></div>',
	}).popover('show');
	$(".popover").css({"top" : "0px;"});
}

function sortingArrayFunction() {
	var text = "<ul><li>After rearrange the array all the elements lesser than the pivot element will lie towards its left and all the elements greater " +
		"than pivot will lie towards its right.</li><li>Now after partition we can make two recursive calls one for the segment of array " +
		"to the left of pivot and another for the segment of array to the right pivot.</li><li>In this recursive approach, A balanced partitioning " +
		"will be best case for us. In balanced partitioning both subarrays towards the left of pivot and towards the right of pivot will have " +
		"almost equal to <span class='ct-code-b-yellow'>n/2</span> where <span class='ct-code-b-yellow'>n</span> is the number of elements original " +
		"array, so the time taken for each quick sort function is <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul>";
	typing('.introjs-tooltiptext', text, function() {
		$(".introjs-nextbutton").show();
	});
}


function line3CalculationAnimation() {
	tweenMaxAnimation("#divCalcLine1", "#divCalcLine3", function() {
		popoverAppendFunction("#divCalcLine3", "left", 3);
		var text = "<ul><li id='Line3FirstLi'>Now calculate value of <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul>";
		typing("#popover3", text, function() {
			$("#line3Span").effect('highlight',{color:'#da5805'}, 1500, function() {
				buttonAppendFunction("#popover3", function() {
					$("#Line3FirstLi").after("<li id='Line3SecondLi'>Consider <span class='ct-code-b-yellow'>T(n)</span> value<br>"+
						"<span class='ct-code-b-yellow opacity00' id='Line3SecondLiSpan'>T(n) = 2 * T(n/2) + C(n)</span></li>");
					$("#divCalcLine1").effect( "highlight", {color:"#FFD700"}, 2000);
					transferEffectFunction("#divCalcLine1", "#Line3SecondLiSpan", function() {
						buttonAppendFunction("#popover3", function() {
							$("#Line3SecondLi").after("<li id='Line3ThirdLi'>Substitute <span class='ct-code-b-yellow'>n</span> with "+
							"<span class='ct-code-b-yellow'>n/2</span>.<br>"+
							"<span class='ct-code-b-yellow opacity00' id='Line3ThirdLiSpan'>T(<span id='numericalId3' class='display'>n</span>) = "+
							"<span id='value3Main' class='display'>"+
							"2 * <span id='value3ParentSpan' class='display'>T(<span id='value3SecondParent' class='display'>"+
								"<span id='value3' class='display'>n</span>/2</span>)</span> + C(n)</span></span></li>");
							tweenMaxAnimation("#Line3SecondLiSpan", "#Line3ThirdLiSpan", function() {
								line3CalculationAnimationStep();
							}); 
						});
					});
				});
			});
		});
	});
}

function line3CalculationAnimationStep() {
	$("#numericalId3").effect( "highlight", {color:"#FFD700"}, 2000);
	flipEffect("#numericalId3", "n/2", function() {
		$("#value2").effect( "highlight", {color:"#FFD700"}, 2000);
		flipEffect("#value3", "(n/2)", function() {
			buttonAppendFunction("#popover3", function() {
				$("#value3SecondParent").effect( "highlight", {color:"#FFD700"}, 2000);
				flipEffect("#value3SecondParent", "n/4", function() {
					buttonAppendFunction("#popover3", function() {
						transferEffectFunction("#Line3ThirdLiSpan", "#line3Span", function() {
							$("#line3Span").effect( "highlight", {color:"#FFD700"}, 2000);
							flipEffect("#line3Span", $("#value3Main").text(), function() {
								buttonAppendFunction("#popover3", function() {
									line4CalculationAnimation();
								});
							});
						});
					});
				}); 
			});
		});
	});
}

function line4CalculationAnimation() {
	$("#divCalcLine3").popover("hide");
	popoverAppendFunction("#divCalcLine4", "left",4);
	tweenMaxAnimation("#divCalcLine3", "#divCalcLine4", function() {
		var text = "<ul><li id='Line4FirstLi'>Now calculate value of <span class='ct-code-b-yellow'>T(n/4)</span>.</li></ul>";
		typing("#popover4", text, function() {
			$("#line4Span").effect('highlight',{color:'#da5805'}, 1500, function() {
				buttonAppendFunction("#popover4", function() {
					$("#Line4FirstLi").after("<li id='Line4SecondLi'>Consider <span class='ct-code-b-yellow'>T(n)</span> value<br>"+
						"<span class='ct-code-b-yellow opacity00' id='Line4SecondLiSpan'>T(n) = 2 * T(n/2) + C(n)</span></li>");
					$("#divCalcLine1").effect( "highlight", {color:"#FFD700"}, 2000);
					transferEffectFunction("#divCalcLine1", "#Line4SecondLiSpan", function() {
						buttonAppendFunction("#popover4", function() {
							$("#Line4SecondLi").after("<li id='Line4ThirdLi'>Substitute <span class='ct-code-b-yellow'>n</span> with "+
							"<span class='ct-code-b-yellow'>n/4</span>.<br>"+
							"<span class='ct-code-b-yellow opacity00' id='Line4ThirdLiSpan'>T(<span id='numericalId4' class='display'>n</span>) = "+
							"<span id='value4Main' class='display'>"+
							"2 * <span id='value4ParentSpan' class='display'>T(<span id='value4SecondParent' class='display'>"+
								"<span id='value4' class='display'>n</span>/2</span>)</span> + C(n)</span></span></li>");
							tweenMaxAnimation("#Line4SecondLiSpan", "#Line4ThirdLiSpan", function() {
								line4CalculationAnimationStep();
							}); 
						});
					});
				});
			});
		});
	});
}

function line4CalculationAnimationStep() {
	$("#numericalId4").effect( "highlight", {color:"#FFD700"}, 2000);
	flipEffect("#numericalId4", "n/4", function() {
		$("#value2").effect( "highlight", {color:"#FFD700"}, 2000);
		flipEffect("#value4", "(n/4)", function() {
			buttonAppendFunction("#popover4", function() {
				$("#value4SecondParent").effect( "highlight", {color:"#FFD700"}, 2000);
				flipEffect("#value4SecondParent", "n/8", function() {
					buttonAppendFunction("#popover4", function() {
						transferEffectFunction("#Line4ThirdLiSpan", "#line4Span", function() {
							$("#line4Span").effect( "highlight", {color:"#FFD700"}, 2000);
							flipEffect("#line4Span", $("#value4Main").text(), function() {
								buttonAppendFunction("#popover4", function() {
									line5CalculationAnimation();
								});
							});
						});
					});
				}); 
			});
		});
	});
}

function line5CalculationAnimation() {
	$("#divCalcLine4").popover("hide");
	tweenMaxAnimation("#divCalcLine4", "#divCalcLine5", function() {
		popoverAppendFunction("#divCalcLine5", "left", 5);
		var text = "<ul><li id='Line5FirstLi'>Here <span class='ct-code-b-yellow'>8</span> can be written as "+
		"<span class='ct-code-b-yellow' id='twoPowerId'>2<sup>3</sup></span>.</li></ul>";
		typing("#popover5", text, function() {
			buttonAppendFunction("#popover5", function() {
				$("#line5Span1").effect( "highlight", {color:"#FFD700"}, 2000);
				flipEffect("#line5Span1", "", function() {
					$("#line5Span1").append("2<sup>3</sup>");
					$("#line5Span").effect( "highlight", {color:"#FFD700"}, 2000);
					flipEffect("#line5Span", "", function() {
						$("#line5Span").append("2<sup>3</sup>");				
						buttonAppendFunction("#popover5", function() {
							$("#Line5FirstLi").after("<li id='Line5SecondLi'><span class='ct-code-b-yellow'>C(n)+C(n)+C(n)</span> can be written as<br>"+
							"<span class='ct-code-b-yellow' id='Line4SecondLiSpan'>C(n)*C(n)*C(n)</span> i.e. " +
							"<span  class='ct-code-b-yellow'>3*C(n)</span>.</li>");
							typing("#Line5SecondLi", $("#Line5SecondLi").html(), function() {
								buttonAppendFunction("#popover5", function() {
									$("#line5SpanParent").effect( "highlight", {color:"#FFD700"}, 2000);
									flipEffect("#line5SpanParent", "3 * C(n)", function() {
										buttonAppendFunction("#popover5", function() {
											$("#divCalcLine5").popover("hide");
											line6CalculationAnimation();
										});
									});
								});
							});
						});
					});
				});	
			});
		});
	});
}

function line6CalculationAnimation() {
	$("#divCalcLine6").fadeTo(500, 1, function() {
		$("#divCalcLine6").effect( "highlight", {color:"#FFD700"}, 1000);
		$("#divCalcLine7").fadeTo(500, 1, function() {
			$("#divCalcLine7").effect( "highlight", {color:"#FFD700"}, 1000);
			$("#divCalcLine8").fadeTo(500, 1, function() {
				$("#divCalcLine8").effect( "highlight", {color:"#FFD700"}, 1000);
				popoverAppendFunction("#divCalcLine9", "left",9);
				var text = "In terms of some generic <span class='ct-code-b-yellow'>k</span> we can reduce the " +
						"<span class='ct-code-b-yellow'>T(n)</span> expression.";
				typing("#popover9", text, function() {
					TweenMax.to($("#divCalcLine9"), 1, {opacity : 1, onComplete:function() {
						buttonAppendFunction("#popover9", function() {
							$("#divCalcLine9").popover("hide");
							popoverAppendFunction("#divCalcLine10", "left", 10);
							tweenMaxAnimation("#divCalcLine9", "#divCalcLine10", function() {
								line6CalculationAnimationStep();
							});
						});
					}});
				});
			});
		});
	});
}

function line6CalculationAnimationStep() {
	/*var text = "We do a <span class='ct-code-b-yellow'>binary search</span> (half the elements) until we found it. So"*/ 
	var text = "We can divide <span class='ct-code-b-yellow'>n/2</span> times until we get <span class='ct-code-b-yellow'>1</span>."+
	"<br>i.e. <span class='ct-code-b-yellow'>n/2<sup>k</sup> = 1</span><br>From above "+
	"<span class='ct-code-b-yellow' id='calcLine1Span'>n = 2<sup>k</sup></span>.";
	typing("#popover10", text, function() {
		buttonAppendFunction("#popover10", function() {
			$("#calcLine1Span").effect( "highlight", {color:"#FFD700"}, 1000);
			transferEffectFunction("#calcLine1Span", "#kPowerId1", function() {
				flipEffect("#kPowerId1", "n", function() {
					transferEffectFunction("#calcLine1Span", "#kPowerId", function() {
						flipEffect("#kPowerId", "n", function() {
							buttonAppendFunction("#popover10", function() {
								$("#divCalcLine10").popover("hide");
								tweenMaxAnimation("#divCalcLine10", "#divCalcLine11", function() {
									flipEffect("#nDivisionId", "1", function() {
										line11CalculationAnimation();
									});
								});
							});
						});
					});
				});
			});
		});
	});
}

function line11CalculationAnimation() {
	popoverAppendFunction("#divCalcLine11", "left", 11);
	var text = "<ul><li id='li2Text1'>We have <span class='ct-code-b-yellow'>T(1)</span> = <span class='ct-code-b-yellow'>C1</span> and " +
			"<span class='ct-code-b-yellow'>2<sup>k</sup> = n</span>.</li></ul>";
	typing("#popover11", text, function() {
		buttonAppendFunction("#popover11", function() {
			$("#li2Text1").after("<span id='li2Text2'>now do the <span class='ct-code-b-yellow'>log<sub>2</sub></span> on both sides.</span>");
			buttonAppendFunction("#popover11", function() {
				$("#li2Text2").after("<br><span id='li2Text3' class='ct-code-b-yellow'>log<sub>2</sub>(2<sup>k</sup>) = log<sub>2</sub>n</span>");
				buttonAppendFunction("#popover11", function() {
					$("#li2Text3").after("<br><span id='li2Text4' class='ct-code-b-yellow'>k * log<sub>2</sub>(2) = log<sub>2</sub>n</span>");
					buttonAppendFunction("#popover11", function() {
						$("#li2Text4").after("<br><span id='li2Text5' class='ct-code-b-yellow'>k * 1 = log<sub>2</sub>n</span>");
						buttonAppendFunction("#popover11", function() {
							$("#li2Text5").after("<br><span id='li2Text6' class='ct-code-b-yellow'>k = log<sub>2</sub>n</span>");
							transferEffectFunction("#divCalcLine11", "#divCalcLine12", function() {
								buttonAppendFunction("#popover11", function() {
									$("#finalIdC").effect( "highlight", {color:"#FFD700"}, 2000);
									flipEffect("#finalIdC", "C1", function() {
										$("#finalIdK").effect( "highlight", {color:"#FFD700"}, 2000);
										flipEffect("#finalIdK", "", function() {
											$("#finalIdK").append("log<sub>2</sub>n");
											line11CalculationAnimationStep();
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
}

function line11CalculationAnimationStep() {
	buttonAppendFunction("#popover11", function() {
		$("#divCalcLine11").popover("hide");
		transferEffectFunction("#divCalcLine12", "#divCalcLine13", function() {
			popoverAppendFunction("#divCalcLine13", "left", 13);
			var text = "Here <span class='ct-code-b-yellow'>n*C1</span> is lower order term. For very high " +
				"values of <span class='ct-code-b-yellow'>n</span> it will be negligible " +
				"compared to <span class='ct-code-b-yellow'>C*n*log<sub>2</sub>n</span>. For high values and " +
				"rate of growth of time taken will be very close to " +
				"<span class='ct-code-b-yellow'>C*n*log<sub>2</sub>n</span>, for some constant " +
				"<span class='ct-code-b-yellow'>C</span> so we can say that time complexity will be a " +
				"<span class='ct-code-b-yellow'>n*log<sub>2</sub>n</span>.";
			typing("#popover13", text, function() {
				buttonAppendFunction("#popover13", function() {
					$("#divCalcLine13").popover("hide");
					TweenMax.to($("#divCalcLine14"), 1, {opacity : 1, onComplete: function() {
						$("#finalIdK2").effect( "highlight", {color:"#FFD700"}, 2000);
						transferEffectFunction("#finalIdK2", "#resultTimeCt", function() {
							setTimeoutFunction();
						});
					}});
				});
			});
		});
	});
}

function worstCaseExplanation() {
	$("#explanationDiv").hide();
	$("#explanationDiv2").show();
	
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 0.01;
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

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn");
		$(selector1).removeAttr('style');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function transferEffectFunction(selector1, selector2, callBackFunction) {
	$(selector1).effect("transfer", { to: $(selector2)}, 1000).addClass(".ui-effects-transfer", function() {
		$(selector2).removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function tweenMaxAnimation(selector1, selector2, callBackFunction) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector2).removeClass("opacity00");
	TweenMax.from(selector2, 0.8, {top: topLength, left: leftLength, onComplete: function() {	//	1
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.6, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.6, {css: {top : 0, rotationX : 0}, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}