var insertionSortTimeComplexityFunction = function() {
	introGuide();
	appendTds();
}

var outerIdx = 1, innerIdx = 0, countForColor = 0;
var len = 5, elementAtInnerIdx;
var arr = [];
var innerFlag = true, flag = true, buttonflag = false;

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
			tooltipClass : 'hide',
		}, {
			element : '#preCode1',
			intro : '',
		}, {
			element : '#arrTable',
			intro : '',
			animateStep : 'sortingInAction'
		}, {
			element : '#divTable',
			intro : '',
			animateStep : 'firstStep',
		}, {
			element : '#finalDivText1',
			intro : '',
		}, {
			element : '#finalDivText2',
			intro : '',
		}, {
			element : '#finalDivText3',
			intro : '',
			position : 'left'
		},/* {
			element : '#divTable',
			intro : '',
			animateStep : 'secondStep',
			position : 'right',
		}, {
			element : '#arrTable',
			intro : '',
			animateStep : 'sortingExample'
		}, {
			element : '#divTable',
			intro : '',
			animateStep : 'thirdStep',
			position : 'right',
		},*/ {
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
			for (var i = 1; i <= 7; i++) {
				$("#listLine" + i).fadeTo(1000, 1, function() {
				});
			}
			$("#listLine7").after('<span class="introjs-button user-btn">Next &#8594;</span>');
			introjs.refresh();
			$(".user-btn").click(function() {
				$(".user-btn").remove();
				introjs.nextStep();
			});
			break;
		case 'preCode1':
			$(".introjs-helperLayer").one("transitionend", function() {	
				var text = "Here we will find the <span class='ct-code-b-yellow'>time complexity</span> of "+
					"<span class='ct-code-b-yellow'>insertion sort</span> algorithm.";
				typing(".introjs-tooltiptext", text, function() {
				TweenMax.to($("#preCode1"), 1, {opacity: 1, onComplete:function() {
					buttonAppendFunction(".introjs-tooltiptext", function() {
							$(".introjs-tooltip").hide();
							preCodeExplanation();
						});
					}});
				});
			});
			break;
		case 'arrTable':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'sortingInAction':
				$(".introjs-helperLayer").one("transitionend", function() {
					TweenMax.to($("#arrTable"), 1, {opacity: 1, onComplete:function() {
						$('.arr-ele').attr('maxlength',2);
					    $('.arr-ele').attr('contenteditable','true');
						$('.introjs-tooltip').removeClass('hide');
						text = 'Here, we are declaring and initializing an integer array with 5 elements : '
								+ '<span class="ct-code-b-yellow element" arrayvalue="0">'+ parseInt($("#number0").text()) +'</span>,'
								+ '<span class="ct-code-b-yellow element" arrayvalue="1">'+ parseInt($("#number1").text()) +'</span>,'
								+ '<span class="ct-code-b-yellow element" arrayvalue="2">'+ parseInt($("#number2").text()) +'</span>,'
								+ '<span class="ct-code-b-yellow element" arrayvalue="3">'+ parseInt($("#number3").text()) +'</span>,'
								+ '<span class="ct-code-b-yellow element" arrayvalue="4">'+ parseInt($("#number4").text()) +'</span>';
						typing(".introjs-tooltiptext", text, function() {
							$('#number0').focus();
							changeValue();
							buttonAppendFunction(".introjs-tooltiptext", function() {
								$('.arr-ele').attr('contenteditable','false');
								zoomingEffect("#arrElements", function() {
									zoomingEffect("#eleAtInnerText");
										zoomingEffect(".eleAtInnerIdx", function() {
										buttonAppendFunction(".introjs-tooltiptext", function() {
											insertionSort();
										//	outerLoopInitialization();
										});
									});
								})
							})
						});
					}});
				});
				break;
			/*case 'sortingExample':
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "From the above array <span class='ct-code-b-yellow'>a</span> of length is 5. So the total number of comparison will be : "+
					"<ul><li>1st Phase - 5 time</li><li>2nd Phase - 4 time</li><li>3rd Phase - 3 time</li><li>4th Phase - 2 time</li>"+
					"<li>5th Phase - 1 time</li></ul>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;*/
			}
			break;
		case 'divTable':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			$(".introjs-tooltip").css("min-width", "250px");
			switch(animateStep) {
			case 'firstStep':
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Now find the time complexity for the <span class='ct-code-b-yellow'>insertion sort</span> function.";
					typing(".introjs-tooltiptext", text, function() {
						buttonAppendFunction(".introjs-tooltiptext", function() {
							$(".introjs-tooltip").hide();
							firstStepAnimation();
						});
					});
				});
				break;
			/*case 'secondStep':
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<span id='tooltipTextId'>We can calculate <span class='ct-code-b-yellow'>time complexity</span> in "+
					"another scenario.</span>";
					typing('.introjs-tooltiptext', text, function() {
						buttonAppendFunction(".introjs-tooltiptext", function() {
							$("#tooltipTextId").append("<ul><li id='liTooltipTextId'>We can observe that in first phase inner loop run "+
							"<span class='ct-code-b-yellow'>"+
							"n</span> times then in second phase <span class='ct-code-b-yellow'>n-1</span>, and <span class='ct-code-b-yellow'>"+
							"n-2</span> and so on. That means in every iteration its value goes down.</li></ul>");
							typing('#liTooltipTextId', $('#liTooltipTextId').html(), function() {
								$(".introjs-nextbutton").show();
							});
						});
					});
				});
				break;*/
			/*case 'thirdStep':
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li id='liFinalText1'>So we've noticed that the total number of comparisons done is <br>"+
					"<span class='ct-code-b-yellow'>n+(n-1)+...+2+1</span>.</li></ul>"
					typing(".introjs-tooltiptext", text, function() {
						buttonAppendFunction(".introjs-tooltiptext", function() {
							$("#liFinalText1").after("<li id='liFinalText2'>This sum is equal to <span class='ct-code-b-yellow' id='liFinalText1Span'>"+
							"n*(n+1)/2</span>.</li>");
							typing("#liFinalText2", $("#liFinalText2").html(), function() {
								buttonAppendFunction(".introjs-tooltiptext", function() {
									$("#liFinalText2").after("<li>i.e. <span class='ct-code-b-yellow opacity00' id='liFinalText2Span'>"+
										"(<span id='nValue3'>n<sup>2</sup></span>*n)/2</span></li>");
									$("#liFinalText1Span").effect('highlight',{color:'#da5805'}, 1000);
									transferEffectFunction("#liFinalText1Span", "#liFinalText2Span", function() {
										$("#liFinalText2Span").effect('highlight',{color:'#da5805'}, 1000);
										buttonAppendFunction(".introjs-tooltiptext", function() {
											$("#finalDiv").addClass("z-index");
											$("#nValue3").effect('highlight',{color:'#da5805'}, 1000, function() {
												tweenmaxAnimation("#nValue3", "#nValue2", function() {
													$("#nValue2").effect('highlight',{color:'#da5805'}, 1000, function() {
														$(".introjs-nextbutton").show();
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
				break;*/
			}
			break;
		case 'finalDivText1':
			$(".introjs-helperLayer").one("transitionend", function() {
				TweenMax.to($("#finalDiv, #finalDivText1"), 1, {opacity: 1, onComplete:function() {
					var text = "The most significant term to represent the time complexity of an algorithm.";
					typing(".introjs-tooltiptext", text, function() {
						$("#nValue1").effect('highlight',{color:'#da5805'}, 1000, function() {
							tweenmaxAnimation("#nValue1", "#nValue2", function() {
								$("#nValue2").effect('highlight',{color:'#da5805'}, 1000, function() {
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				}});
			});
			break;
		case 'finalDivText2':
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				TweenMax.to($("#finalDivText2"), 1, {opacity: 1, onComplete:function() {
					var text = "In the best case we find the insertion point at the top element with one comparsion, " +
							"so we have <span class='ct-code-teal'>1+1+1+ (n times) = Ω(n)</span></span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				}});
			});
			break;
		case 'finalDivText3':
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				TweenMax.to($("#finalDivText3"), 1, {opacity: 1, onComplete:function() {
					var text = "<ul><li>On average case each insertion must traverse half the currently sorted list while making one " +
							"comparison per step. The list grows by one each time.</li>" +
							"<li>This is, by simple algebra, <br><span class='ct-code-teal'>1 + 2 + 3 + ... + n - n*.5 "+
							"<br>= (n(n+1) - n)/2 "+
							"<br>= n<sup>2</sup> / 2 <br>= Θ(n<sup>2</sup>)</span></li>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				}});
			});
			break;
		case "restart":
			$('.introjs-nextbutton').hide();
			$("#finalDiv").addClass("z-index");
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
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

function setTimeoutFunction() {
	setTimeout(function() {
		introjs.nextStep();
	}, 800);
}

function zoomingEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn").off();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function tweenmaxAnimation(selector1, selector2, callBackFunction) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector2).removeClass("opacity00");
	TweenMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function insertionSort() {
	outerCondition();
/**** skip the above function for testing only *****/
	/*setTimeout(function() {
		introjs.nextStep();
		$("#preCodeDiv").hide();
		$("#divTable").removeClass("hide");
		introjs.refresh();
	},500);*/
}

function outerCondition() {
	if (outerIdx < len) {
		var text = "At <span class='ct-code-b-yellow'>position-" + outerIdx +"</span> the elements are sorted as follows."+
		"<br><span id='buttonAppendSpan'></span>";
		typing('.introjs-tooltiptext', text, function() { 
		//	$("#outerArrow" + outerIdx).removeClass("opacity00");
		//	zoomingEffect('#outerArrow' + outerIdx, function() {
			TweenMax.to($("#outerArrow" + outerIdx), 1, {opacity: 1, onComplete:function() {
				$("#eleAtInnerIdxVal").text($("#sortEle" + outerIdx).text());
				if (innerFlag) {
					innerIdx = outerIdx;
				}
				innerFlag = true;
				 //innerIdx = outerIdx;
				 innerCondition();
			}});
		});
	} else {
		$('.introjs-duplicate-nextbutton, #appendButton').remove();
		for (var i = 0; i < len; i++) {
			$("#sortEle" + i).parent().css({'background': 'orange'});
		}
		text = 'All elements are sorted successfully. <span id="appendButton"></span>';
		typing('.introjs-tooltiptext', text, function() { 
			buttonAppendFunction("#appendButton", function() {
				setTimeout(function() {
					introjs.nextStep();
					$("#preCodeDiv").hide();
					$("#divTable").removeClass("hide");
					introjs.refresh();
		    	},500);
			});
		});
	}
}

function innerCondition() {
	if (innerIdx > 0) {
	//	$("#innerArrow" + innerIdx).removeClass("opacity00");
	//	zoomingEffect("#innerArrow" + innerIdx, function() {
		TweenMax.to($("#innerArrow" + innerIdx), 1, {opacity: 1, onComplete:function() {
			var val1 = parseInt($("#sortEle" + (innerIdx - 1)).text());
			var val2 = parseInt($("#eleAtInnerIdxVal").text());
			if(val1 > val2) {
					$('#sortEle' + (innerIdx - 1)).parent().effect("highlight", {color: 'pink'}, 100, function() {
						fadeInFromEffectWithTimelineMax('#sortEle' + (innerIdx - 1), '#sortEle' + innerIdx, function() {
							fadeInFromEffectWithTimelineMax('#eleAtInnerIdxVal', '#sortEle' + (innerIdx - 1), function() {
								setTimeout(function() {
									innerValDec();
						    	},300);
				            });
				        });
					});
		    } else {
		    	setTimeout(function() {
			    	innerValDec();
		    	},300);
		    }
		}});
	} else {
		$("#innerArrow" + innerIdx).addClass("opacity00");
		$("#sortEle" + countForColor).parent().css({'background': 'orange'});
		countForColor++;
		buttonAppendFunction("#buttonAppendSpan", function() {
			outerValInc();
		});
	}
}

function innerValDec() {
	--innerIdx;
	toEffectWithTweenMax('#innerArrow' + (innerIdx + 1) , '#innerArrow' + innerIdx , function() {
		$('#eleAtInnerIdxVal').parent().effect("highlight", {color: 'pink'}, 100);
		$('#sortEle' + innerIdx).parent().effect("highlight", {color: 'pink'}, 100, function() {
	    	setTimeout(function() {
				innerCondition();
	    	},300);
		});
	});
}

function outerValInc() {
	toEffectWithTweenMax('#outerArrow' + outerIdx , '#outerArrow' + (outerIdx + 1) , function() {
		++outerIdx;
    	setTimeout(function() {
			outerCondition();
    	},300);
	});
}


	
	function toEffectWithTweenMax(selector1, selector2, callBackFunction) {
		var l1 = $(selector1).offset();
		$(selector2).offset({top: l1.top, left: l1.left});
		$(selector1).addClass("opacity00").removeAttr("style")
		TweenMax.to($(selector2), 0.5, {opacity: 1, top: 0, left: 0, onComplete: function() {
			$(selector2).removeAttr("style").removeClass("opacity00");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}
	
	function fadeInFromEffectWithTimelineMax(selector1, selector2, callBackFunction) {
		var timelineMax = new TimelineMax();
		$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
			$(selector1).removeClass('z-index1000000');
			var l1 = $(selector1).offset();
			var l2 = $(selector2).offset();
			var topLength = l1.top - l2.top;
			var leftLength = l1.left - l2.left;
			$("#programDiv").append("<span id='dummy' style='position: relative;color: black;'>" 
				+ $(selector2).text() + "</span>");
			$('#dummy').offset({
				"top": l2.top, 
				"left": l2.left
			});
			$(selector2).text($(selector1).text());
			timelineMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}}).to('#dummy', 0.5, {opacity: 0, onComplete: function() {
				$("#animationDiv").removeAttr("style").addClass("introjs-showElement");			
				$('#dummy').remove();
			}}, "-=0.5");
		});
	}



function preCodeExplanation() {
	popoverAppendFunction("#preCodeLine1", 1);
	$("#preCodeLine1").effect('highlight',{color:'#da5805'}, 1000);
	var text = "<span class='ct-code-b-yellow'>Insertion sort</span> is based on the idea that one element from the input elements is "+
	"consumed in each iteration to find its correct position i.e, the position to which it belongs in a sorted array.";
	typing("#popover1", text, function() {
		buttonAppendFunction("#popover1", function() {
			$("#preCodeLine1").popover('hide');
			popoverAppendFunction("#preCodeLine3", 3);
			$("#preCodeLine3").effect('highlight',{color:'#da5805'}, 1000);
			var text = "<ul><li>This <span class='ct-code-b-yellow'>for</span> loop represents number of <span class='ct-code-b-yellow'>positions</span> "+
				"for sorting.</li>"+
				"<li>(<span class='ct-code-b-yellow'>n-1</span>) number of <span class='ct-code-b-yellow'>positions</span> are required to sort "+
				"<span class='ct-code-b-yellow'>n</span> elements in <span class='ct-code-b-yellow'>insertion sort</span>.</li>"+
				"<li>For example if number of elements are <span class='ct-code-teal'>5</span> then <span class='ct-code-teal'>4</span> "+
				"<span class='ct-code-b-yellow'>positions</span> are required to sort the elements.</li>"
			typing("#popover3", text, function() {
				buttonAppendFunction("#popover3", function() {
					$("#preCodeLine3").popover('hide');
					popoverAppendFunction("#preCodeLine4", 4);
					$("#preCodeLine4").effect('highlight',{color:'#da5805'}, 1000);
					var text = "<ul><li>This <span class='ct-code-b-yellow'>for</span> loop represents number of <span class='ct-code-b-yellow'>"+
					"comparisons</span>.</li>"+
					"<li>For each position <span class='ct-code-teal'>(n-1)!</span> "+
					"<span class='ct-code-b-yellow'>comparisons</span> are required.</li>"+
					"</ul></ul>";
					typing("#popover4", text, function() {
						buttonAppendFunction("#popover4", function() {
							$("#preCodeLine4").popover('hide');
							popoverAppendFunction("#preCodeLine5", 5);
							$("#preCodeLine5").effect('highlight',{color:'#da5805'}, 1000);
							var text = "<ul><li>Here the <span class='ct-code-b-yellow'>if</span> condition checks the first element is "+
							"greater than the second element.</li>"+
							"<li>If it is <span class='ct-color-boolean'>true</span> then <span class='ct-code-b-yellow'>swap</span> the elements "+
							"i.e. place the elements in ascending order.</li></ul>";
							typing("#popover5", text, function() {
								buttonAppendFunction("#popover5", function() {
									$("#preCodeLine5").popover('hide');
									setTimeoutFunction();
								});
							});
						});
					});
				});
			});
		});
	});
}

function firstStepAnimation() {
	svgAppend($('#divTable'), 'svg');
	svgMarkerAppend($('#svg'), 'marker');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine1', '#unitLineText1', '#svg', 'svgLine1', 'marker', function() {
		popoverAppendFunction("#unitLine1", 1);
		var text = "<span id='popover1Text1'>This for loop involves three instructions which are "+
		"<span class='ct-code-b-yellow'>initialization</span>, "+
		"<span class='ct-code-b-yellow'>condition</span> and <span class='ct-code-b-yellow'>increment</span> part.</span>";
		typing("#popover1", text, function() {
			buttonAppendFunction("#popover1", function() {
				$("#popover1Text1").after("<span><ul><li id='initLine'><span class='for-loop-li-css'>i = 1</span><br/>In the "+
						"<span class='ct-code-b-yellow'>initialization</span> only one operator"+
						" <span class='ct-code-b-yellow'>=</span> is used so it takes <span class='ct-code-b-yellow'>1</span> "+
						"<span class='ct-code-teal'>unit of time</span>.</li></ul></span>");
				typing("#initLine", $("#initLine").html(), function() {
					$("#initilizationId1").effect('highlight',{color:'#da5805'}, 1000, function() {
						transferEffectFunction("#initilizationId1", "#firstUnitValue1", function() {
							buttonAppendFunction("#popover1", function() {
								$("#plusOp1").removeClass("opacity00");
								$("#initLine").after("<li id='conditionLine'><span class='for-loop-li-css'>i < n</span><br>In the "+
										"<span class='ct-code-b-yellow'>condition</span> part also only one operator "+
										"<span class='ct-code-b-yellow'><</span> is used but the <span class='ct-code-b-yellow'>condition</span> part "+
										"executes <span class='ct-code-teal'>n - 1</span> "+
										"time as <span class='ct-color-boolean'>true</span> and 1 time as <span class='ct-color-boolean'>false</span>. "+
										"So takes <span class='ct-code-b-yellow'>(n-1)+1</span> "+
										"<span class='ct-code-teal'>units of time</span>.</li>");
								typing("#conditionLine", $("#conditionLine").html(), function() {
									$("#conditionId1").effect('highlight',{color:'#da5805'}, 1000, function() {
										transferEffectFunction("#conditionId1", "#firstUnitValue2", function() {
											buttonAppendFunction("#popover1", function() {
												$("#plusOp2").removeClass("opacity00");
												$("#conditionLine").after("<li id='incrementLine'><span class='for-loop-li-css'>i++</span><br>In the "+
														"<span class='ct-code-b-yellow'>increment</span> part only 1 operator "+
														"<span class='ct-code-b-yellow'>++</span> is used but the same operator is executed "+
														"<span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n-1</span>) number "+
														"of times. So it takes <span class='ct-code-b-yellow'>n-1</span> "+
														"<span class='ct-code-teal'>units of time</span>.</li>");
												typing("#incrementLine", $("#incrementLine").html(), function() {
													$("#incrementId1").effect('highlight',{color:'#da5805'}, 1000, function() {
														transferEffectFunction("#incrementId1", "#firstUnitValue3", function() {
															buttonAppendFunction("#popover1", function() {
																$("#unitLine1").popover("hide");
																secondStepAnimation();
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

function secondStepAnimationBackUp() {
	/* svgAppend($('#divTable'), 'svg');
	svgMarkerAppend($('#svg'), 'marker'); */
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine2', '#unitLineText2', '#svg', 'svgLine2', 'marker', function() {
		popoverAppendFunction("#unitLine2", 2);
		var text = "<ul><li id='initLine2'><span class='for-loop-li-css'>j = i</span><br/>In the "+
			"<span class='ct-code-b-yellow'>initialization</span> only one operator"+
			" <span class='ct-code-b-yellow'>=</span> is used so it takes <span class='ct-code-b-yellow'>1</span> "+
			"<span class='ct-code-teal'>unit of time</span>.</li></ul>";
		typing("#popover2", text, function() {
			$("#initilizationId2").effect('highlight',{color:'#da5805'}, 1000, function() {
				transferEffectFunction("#initilizationId2", "#secondUnitValue1", function() {
					buttonAppendFunction("#popover2", function() {
						$("#plusOp3").removeClass("opacity00");
						$("#initLine2").after("<li id='conditionLine2'><span class='for-loop-li-css'>j > 0</span><br>In the "+
								"<span class='ct-code-b-yellow'>condition</span> part also only one operator "+
								"<span class='ct-code-b-yellow'><</span> is used but the <span class='ct-code-b-yellow'>condition</span> part "+
								"executes <span class='ct-code-teal'>n - i - 1</span> "+
								"time as <span class='ct-color-boolean'>true</span> and 1 time as <span class='ct-color-boolean'>false</span>. "+
								"So takes <span class='ct-code-b-yellow'>(n-i-1)+1</span> "+
								"<span class='ct-code-teal'>units of time</span>.</li>");
						typing("#conditionLine2", $("#conditionLine2").html(), function() {
							$("#conditionId2").effect('highlight',{color:'#da5805'}, 1000, function() {
								transferEffectFunction("#conditionId2", "#secondUnitValue2", function() {
									buttonAppendFunction("#popover2", function() {
										$("#plusOp4").removeClass("opacity00");
										$("#conditionLine2").after("<li id='incrementLine2'><span class='for-loop-li-css'>j--</span><br>In the "+
												"<span class='ct-code-b-yellow'>increment</span> part only 1 operator "+
												"<span class='ct-code-b-yellow'>++</span> is used but the same operator is executed "+
												"<span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n-i-1</span>) number "+
												"of times. So it takes <span class='ct-code-b-yellow'>n-i-1</span> "+
												"<span class='ct-code-teal'>units of time</span>.</li>");
										typing("#incrementLine2", $("#incrementLine2").html(), function() {
											$("#incrementId2").effect('highlight',{color:'#da5805'}, 1000, function() {
												transferEffectFunction("#incrementId2", "#secondUnitValue3", function() {
													buttonAppendFunction("#popover2", function() {
														$("#incrementLine2").append("<li id='nMultiplyText'>But this inner for loop executes "+
															"<span class='ct-code-b-yellow'>n</span> times because of "+
															"the outer for loop. So we have to multiply with <span class='ct-code-b-yellow'>n</span>"+
															" to the inner for loop of <span class='ct-code-teal'>units of time</span>.</li>");
														typing("#nMultiplyText", $("#nMultiplyText").html(), function() {
															$("#codeLine1").effect('highlight',{color:'#da5805'}, 1000, function() {
																$("#codeLine2").effect('highlight',{color:'#da5805'}, 1000, function() {
																	transferEffectFunction("#codeLine2", "#unitLineText2", function() {
																		$("#nMultiplyId1, #nMultiplyId2").removeClass("opacity00");
																		buttonAppendFunction("#popover2", function() {
																			$("#unitLine2").popover("hide");
																			thirdStepAnimation();
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
			});
		});
	});
}

function secondStepAnimation() {
	/* svgAppend($('#divTable'), 'svg');
	svgMarkerAppend($('#svg'), 'marker'); */
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine2', '#unitLineText2', '#svg', 'svgLine2', 'marker', function() {
		popoverAppendFunction("#unitLine2", 2);
		var text = "<ul><li>This <span class='ct-code-b-yellow'>comparison</span> for loop depends on <span class='ct-code-b-yellow'>position</span> " +
				"for loop because in the initilization we have <span class='for-loop-li-css'>j = i</span>.</li>" +
				"<li>For <span class='ct-code-b-yellow'>1<sup>st</sup></span> position <span class='ct-code-teal'>1</span> comparison is done.</li>"+
				"<li>For <span class='ct-code-b-yellow'>2<sup>nd</sup></span> position <span class='ct-code-teal'>2</span> comparisons are done.</li>"+
				"<li>Like <span class='ct-code-b-yellow'>(n-1)<sup>th</sup></span> position <span class='ct-code-teal'>(n-1)</span> comparisons are done.</li>"+
				"<li id='liId1'>So we can write <span class='ct-code-teal'>1+2+3+....+(n-1)</span>.</li>"+
			"</ul>";
		typing("#popover2", text, function() {
			buttonAppendFunction("#popover2", function() {
				$("#liId1").after("<li id=liId2>We know the formula : <br>" +
					"<span class='ct-code-teal'>1+2+3+.....+(n-1)+n=(n(n-1)/2)</span></li>.");
				typing("#liId2", $("#liId2").html(), function() {
					buttonAppendFunction("#popover2", function() {
						$("#liId2").after("<li id=liId3>From the above formula we can write : <br>" +
						"<span class='ct-code-teal'>1+2+3+.....+(n-1)=<span id='liId3Span'>((n(n-1)/2)-n)</span></span></li>");
						typing("#liId3", $("#liId3").html(), function() {
							buttonAppendFunction("#popover2", function() {
								transferEffectFunction("#liId3Span", "#unitLineText2", function() {
									buttonAppendFunction("#popover2", function() {
										$("#unitLine2").popover("hide");
										thirdStepAnimation();
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

function thirdStepAnimation() {
	$("#ifSpan").effect('highlight',{color:'#da5805'}, 2000, function() {
		svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine3span2', '#unitLineText3', '#svg', 'svgLine3', 'marker', function() {
			$("#unitLineText3").fadeTo(500, 1);
			$("#unitLineText3").effect('highlight',{color:'#da5805'}, 1500, function() {
				popoverAppendFunction("#unitLineText3", 3);
				var text = "The <span class='ct-code-b-yellow'>swap</span> method executes <span class='ct-code-b-yellow'>n-i-1</span> "+
					"<span class='ct-code-teal'>units of time</span>.</li>";
				typing("#popover3", text, function() {
					buttonAppendFunction("#popover3", function() {
						$("#unitLineText3").popover("hide");
						TweenMax.to($("#codeLine6"), 1, {opacity: 1, onComplete:function() {
							TweenMax.to($("#unitLineText6"), 1, {opacity: 1, onComplete:function() {
								setTimeoutFunction();
							}});
						}});
					});
				});
			});
		});
	});
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 0.05;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
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

function popoverAppendFunction(selector, divIdNum) {
	$(selector).popover({
		placement: 'right',
		html: true,
		trigger: 'focus',
		content: '<div id="popover' + divIdNum +'"></div>',
	}).popover('show');
	$(".popover").css({"top" : "0px;"});
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

function appendTds() {
	for(var i = 0; i < 5; i++) {
		$('#arrayIndices').append('<th class="text-center"><span id="sortIndex'+ i +'">'+ i +'</span></th>')
		$('#outerArrow').append('<th><div class="text-center opacity00" id="outerArrow'+ i + '">'
				+ '<div id="outerIdxText'+ i +'"><span class="outer-loop-color">i</span></div>'
				+ '<i class="fa fa-arrow-down" id="outerarrow'+ i + '"></i></div></th>');
		$('#innerArrow').append('<th><div class="text-center opacity00" id="innerArrow'+ i + '">'
				+ '<div id="innerIdxText'+ i +'"><span class="inner-loop-color">j</span></div>'
				+ '<i class="fa fa-arrow-down" id="innerarrow'+ i + '"></i></div></th>'); 
	}
}

function changeValue() {
	$(".arr-ele").keypress(function (e) {
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
		}
	});
	$('.arr-ele').keydown(function(e) {
		$(".length-error-text").remove();
		if (e.which === 13) {
			e.preventDefault();
		}
		var max = $(this).attr("maxlength");
		if ((e.which != 8) && (e.which != 46) && (e.which != 37) && (e.which != 39) &&($(this).text().length + 1) > max) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>String length to 2.</span>");
		    e.preventDefault();
		}
	});	
	
	$(".arr-ele").keyup(function(e) {
		$(".length-error-text").remove();
		var arrayvalue = $(this).attr("arrayvalue");
		$(".arr-ele").each(function(index){
			if (index == arrayvalue) {
				if ($(this).text() == '') {
					$(this).addClass("empty");
					$(".user-btn").hide(); 
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter a number.</span>");
					$(".element[arrayvalue=" + index + "]").text('');
				} else {
					$(".length-error-text").remove();
					$(this).removeClass("empty");
					$(".element[arrayvalue=" + index + "]").text($(this).text());
				}
				if ($(".empty").length == 0) {
					  $(".user-btn").show(); 
				} 
			}
		});
	});
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
	TweenMax.to($('#' + svgLineId).show(),0.6, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}