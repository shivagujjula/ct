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
										"constant <span class='ct-code-b-yellow'>C</span>.";
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
					var text = "So overall cost of executing this statement is <span class='ct-code-b-yellow'>A(n)+B</span>.";
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
									"time <span class='ct-code-b-yellow'>A</span>.</li>");
							typing('#liLine2', $("#liLine2").html(), function() {
								$("#whileLoopId").addClass("blinking").one('animationend', function() {
									$("#whileLoopId").removeClass("blinking").off();
									buttonAppendFunction("#liLine2", function() {
										$("#liLine2").after("<li id='liLine3'>So, time taken for the partition function will be " +
												"<span class='ct-code-b-yellow'>A(n)+B</span></li>")
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
					TweenMax.to($("#explanationDiv"), 1, {opacity: 1, onComplete: function() {
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
															$(".svg-css").removeClass("opacity00");
															TweenMax.to($(".svg-css"), 0.5, {opacity: 1, onComplete: function() {
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
					TweenMax.to($("#spanId"), 1, {opacity: 1, onComlete: function() {
						popoverAppendFunction("#calcLine1", "left", 1);
						
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

function popoverLeftSideAppendFunction(selector, divIdNum) {
	$(selector).popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover' + divIdNum +'"></div>',
	}).popover('show');
	$(".popover").css({"top" : "0px;"});
}

function fadeToAndTransferAction(selector1, selector2, selector3, callBackFunction) {
	$(selector1).fadeTo(1000, 1, function() {
		$(selector2).effect('highlight',{color:'#da5805'}, 800, function() {
			transferEffectFunction(selector2, selector3, function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		});
	});
}

function sortingArrayFunction() {
	var text = "<ul><li>After rearrange the array all the elements lesser than the pivot element will lie towards its left and all the elements greater " +
		"than pivot will lie towards its right.</li><li>Now after partition we can make two recursive calls one for the segment of array " +
		"to the left of pivot and another for the segment of array to the right pivot.</li><li>In this recursive approach, A balanced partitioning " +
		"will be best case for us. In balanced partitioning both subarrays towards the left of pivot and towards the right of pivot will have " +
		"almost equal to n/2 where n is the number of elements original array, so the time taken for each quick sort function is T(n/2).</li></ul>";
	typing('.introjs-tooltiptext', text, function() {
		$(".introjs-nextbutton").show();
	});
}



function secondStep() {
//	$("#line5").popover('hide');
//	TweenMax.to($("#timeCtPre1"), 1, {opacity: 1, onComplete:function() {
		popoverAppendFunction("#line3", 3);
		var text = "Let <span class='ct-code-b-yellow'>T(n)</span> be the number of comparisions of <span class='color-highlight'>merge sort</span>.";
		
		/*var text = "<ul><li>If the <span class='color-highlight'>key</span> element is less than <span class='color-highlight'>middle</span> "+
		"element then search the <span class='color-highlight'>key</span> element in the <span class='ct-code-b-yellow'>first half</span>.</li> "+
		"<li>In this type of cases the time complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul>";*/
		typing("#popover3", text, function() {
		//	$("#lessThanid").effect('highlight',{color:'#da5805'}, 1500);
			buttonAppendFunction("#popover3", function() {
				thirdStep();
			});
		});
//	}});
}

function thirdStep() {
	$("#line3").popover('hide');
//	TweenMax.to($("#timeCtPre2"), 1, {opacity: 1, onComplete:function() {
		popoverAppendFunction("#line13", 13);
		var text = "<span class='ct-code-b-yellow'>T(n/2)</span> time is required for the first merge sort call."
		/*var text = "<ul><li>If the <span class='color-highlight'>key</span> element is greater than <span class='color-highlight'>middle</span> "+
		"element then search the <span class='color-highlight'>key</span> element in the <span class='ct-code-b-yellow'>second half</span>.</li> "+
		"<li>In this type of cases the time complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul>";*/
		typing("#popover13", text, function() {
		//	$("#greaterThanid").effect('highlight',{color:'#da5805'}, 1500);
			buttonAppendFunction("#popover13", function() {
				$("#line13").popover('hide');
			//	TweenMax.to($("#timeCtPre3"), 1, {opacity: 1, onComplete:function() {
				fourthStep();	
			//	}});
			});
		});
//	}});
}

function fourthStep() {
	$("#line13").popover('hide');
//	TweenMax.to($("#timeCtPre2"), 1, {opacity: 1, onComplete:function() {
		popoverAppendFunction("#line18", 18);
		var text = "<ul><li><span class='ct-code-b-yellow'>T(n/2)</span> comparision time required for the second merge sort call.</li>" +
				"<li><span class='ct-code-b-yellow'>c(n)</span> time required for merge comparisions.</li></ul>";
		/*var text = "<ul><li>If the <span class='color-highlight'>key</span> element is greater than <span class='color-highlight'>middle</span> "+
		"element then search the <span class='color-highlight'>key</span> element in the <span class='ct-code-b-yellow'>second half</span>.</li> "+
		"<li>In this type of cases the time complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul>";*/
		typing("#popover18", text, function() {
		//	$("#greaterThanid").effect('highlight',{color:'#da5805'}, 1500);
			buttonAppendFunction("#popover18", function() {
				$("#line18").popover('hide');
			//	TweenMax.to($("#timeCtPre3"), 1, {opacity: 1, onComplete:function() {
				introjs.nextStep();
			//	}});
			});
		});
//	}});
}

function calculationActionFunction() {
	TweenMax.to($("#calcLine1"), 1, {opacity:1, onComplete:function() {
		TweenMax.to($("#divCalcLine1"), 1, {opacity:1, onComplete:function() {
			popoverLeftSideAppendFunction("#divCalcLine1", 1);
			var text = "<ul><li id='popoverText'><span class='ct-code-b-yellow'>T(n/2)</span> is the time taken to find the "+
					"<span class='color-highlight'>key</span> element in any one half (i.e. If the given <span class='color-highlight'>key</span> "+
					"element is not <span class='color-highlight'>middle</span> element).</li>"+
					"<li><span class='ct-code-b-yellow'>c</span> is a constant time taken to compare the <span class='color-highlight'>key</span> "+
					"element with different elements.</li></ul>";
			typing(".popover-content", text, function() {
				buttonAppendFunction(".popover-content", function() {
					line3CalculationAnimation();
				});
			});
		}});
	}});
}

function line3CalculationAnimation() {
	$("#divCalcLine1").popover("hide");
	popoverLeftSideAppendFunction("#divCalcLine3", 3);
	$("#divCalcLine3").removeClass("opacity00");
	tweenMaxAnimation("#divCalcLine1", "#divCalcLine3", function() {	
		var text = "<ul><li id='Line3FirstLi'>Now calculate value of <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul>";
		typing("#popover3", text, function() {
			$("#line3Span").effect('highlight',{color:'#da5805'}, 1500, function() {
				buttonAppendFunction("#popover3", function() {
					$("#Line3FirstLi").after("<li id='Line3SecondLi'>Consider <span class='ct-code-b-yellow'>T(n)</span> value<br>"+
						"<span class='ct-code-b-yellow opacity00' id='Line3SecondLiSpan'>T(n) = 2 * T(n/2) + c(n)</span></li>");
					$("#divCalcLine1").effect( "highlight", {color:"#FFD700"}, 2000);
					transferEffectFunction("#divCalcLine1", "#Line3SecondLiSpan", function() {
						buttonAppendFunction("#popover3", function() {
							$("#Line3SecondLi").after("<li id='Line3ThirdLi'>Substitute <span class='ct-code-b-yellow'>n</span> with "+
							"<span class='ct-code-b-yellow'>n/2</span>.<br>"+
							"<span class='ct-code-b-yellow opacity00' id='Line3ThirdLiSpan'>T(<span id='numericalId3' class='display'>n</span>) = "+
							"<span id='value3Main' class='display'>"+
							"2 * <span id='value3ParentSpan' class='display'>T(<span id='value3SecondParent' class='display'>"+
								"<span id='value3' class='display'>n</span>/2</span>)</span> + c(n)</span></span></li>");
							tweenMaxAnimation("#Line3SecondLiSpan", "#Line3ThirdLiSpan", function() {
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
	popoverLeftSideAppendFunction("#divCalcLine4", 4);
	tweenMaxAnimation("#divCalcLine3", "#divCalcLine4", function() {	
		var text = "<ul><li id='Line4FirstLi'>Now calculate value of <span class='ct-code-b-yellow'>T(n/4)</span>.</li></ul>";
		typing("#popover4", text, function() {
			$("#line4Span").effect('highlight',{color:'#da5805'}, 1500, function() {
				buttonAppendFunction("#popover4", function() {
					$("#Line4FirstLi").after("<li id='Line4SecondLi'>Consider <span class='ct-code-b-yellow'>T(n)</span> value<br>"+
						"<span class='ct-code-b-yellow opacity00' id='Line4SecondLiSpan'>T(n) = 2 * T(n/2) + c(n)</span></li>");
					$("#divCalcLine1").effect( "highlight", {color:"#FFD700"}, 2000);
					transferEffectFunction("#divCalcLine1", "#Line4SecondLiSpan", function() {
						buttonAppendFunction("#popover4", function() {
							$("#Line4SecondLi").after("<li id='Line4ThirdLi'>Substitute <span class='ct-code-b-yellow'>n</span> with "+
							"<span class='ct-code-b-yellow'>n/4</span>.<br>"+
							"<span class='ct-code-b-yellow opacity00' id='Line4ThirdLiSpan'>T(<span id='numericalId4' class='display'>n</span>) = "+
							"<span id='value4Main' class='display'>"+
							"2 * <span id='value4ParentSpan' class='display'>T(<span id='value4SecondParent' class='display'>"+
								"<span id='value4' class='display'>n</span>/2</span>)</span> + c(n)</span></span></li>");
							tweenMaxAnimation("#Line4SecondLiSpan", "#Line4ThirdLiSpan", function() {
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
		popoverLeftSideAppendFunction("#divCalcLine5", 5);
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
							$("#Line5FirstLi").after("<li id='Line5SecondLi'><span class='ct-code-b-yellow'>c(n)+c(n)+c(n)</span> can be written as<br>"+
							"<span class='ct-code-b-yellow' id='Line4SecondLiSpan'>c(n)*c(n)*c(n)</span> i.e. <span  class='ct-code-b-yellow'>3*c(n)</span>.</li>");
							typing("#Line5SecondLi", $("#Line5SecondLi").html(), function() {
								buttonAppendFunction("#popover5", function() {
									$("#line5SpanParent").effect( "highlight", {color:"#FFD700"}, 2000);
									flipEffect("#line5SpanParent", "3 * c(n)", function() {
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
				popoverLeftSideAppendFunction("#divCalcLine9", 9);
				var text = "For <span class='ct-code-b-yellow'>k<sup>th</sup></span> order the <span class='ct-code-b-yellow'>T(n)</span> written as";
				typing("#popover9", text, function() {
					TweenMax.to($("#divCalcLine9"), 1, {opacity : 1, onComplete:function() {
						buttonAppendFunction("#popover9", function() {
							$("#divCalcLine9").popover("hide");
							popoverLeftSideAppendFunction("#divCalcLine10", 10);
							tweenMaxAnimation("#divCalcLine9", "#divCalcLine10", function() {
								var text = "We do a <span class='ct-code-b-yellow'>binary search</span> (half the elements) until we found it. "+
								"So we can divide <span class='ct-code-b-yellow'>n/2</span> times until we get <span class='ct-code-b-yellow'>1</span>."+
								"<br>i.e. <span class='ct-code-b-yellow'>n/2<sup>k</sup> = 1</span><br>From above "+
								"<span class='ct-code-b-yellow' id='calcLine1Span'>n = 2<sup>k</sup></span>.";
								/* var text = "We have <span class='ct-code-b-yellow'>n = 2<sup>k</sup></span>." */
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
							});
						});
					}});
				});
			});
		});
	});
}

function line11CalculationAnimation() {
	popoverLeftSideAppendFunction("#divCalcLine11", 11);
	var text = "<ul><li><span class='ct-code-b-yellow'>T(1)</span> value is <span class='ct-code-b-yellow'>1</span>.</li>"+
	"<li id='li2Text1'>We have <span class='ct-code-b-yellow'>2<sup>k</sup> = n</span>.</li></ul>";
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
								console.log("transferred");
								buttonAppendFunction("#popover11", function() {
									console.log("Button");
									$("#finalIdC").effect( "highlight", {color:"#FFD700"}, 2000);
									flipEffect("#finalIdC", "1", function() {
										$("#finalIdK").effect( "highlight", {color:"#FFD700"}, 2000);
										flipEffect("#finalIdK", "", function() {
											$("#finalIdK").append("log<sub>2</sub>n");
											buttonAppendFunction("#popover11", function() {
												$("#divCalcLine11").popover("hide");
												transferEffectFunction("#divCalcLine12", "#divCalcLine13", function() {
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
								});
							});
						});
					});
				});
			});
		});
	});
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

function bounceFromEffextWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).parent().append('<span id="temp" style="position: absolute;"></span>');
	$('#temp').offset({top: l2.top, left: l2.left}).text($(selector2).text());
	$(selector2).text($(selector1).text());
	timelineMax.from(selector2, 3, {ease:  Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}}).to('#temp', 1, { ease: Sine.easeOut, top: "-=100", opacity: 0, onComplete: function() {
		$('#temp').remove();
	}}, "-=2");
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId, curve) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line lines");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(),0.4, {attr: {x2: x2, y2: y2}, onComplete: function() {	//	0.5
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
