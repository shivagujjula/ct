var i;
var readPrintStringUsingGetsPutsReady = function() {
	$("#restartBtn").click(function() {
		$("#inputChar").val('');
		$("#hiddenTotalEnterChar").val('');
		location.reload();
	});
	
	console.log();
	intro = introJs();
	$('#nextButton').click(function() {
		$(this).remove();
		intro.nextStep();
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
			steps : [{
						element : '#informationDiv',
						intro : '',
						tooltipClass : 'hide',
						position : "right"
					},{
						element :'#preBody',
						intro :'',
						position:"bottom"
					},{
						element :'#line2',
						intro :'',
						position:"bottom",
						tooltipClass: 'hide'
					},{
						element :'#addressBox',
						intro :'',
						animateStep : "memory",
						tooltipClass: 'hide'
					},{
						element :'#line3',
						intro :'',
					},{
						element :'#line4',
						intro :'',
					},{
						element :'#line5',
						intro :'',
						tooltipClass: 'hide'
					},{
						element :'#addressBox',
						intro :'',
						position:"bottom",
						animateStep : "animation",
						tooltipClass: 'hide'
					},{
						element :'#line6',
						intro :'',
						position:"bottom"
					
					},{
						element :'#line7',
						intro :'',
						position:"bottom"
					},{
						element :'#line8',
						intro :'',
						position:"bottom"
					},{
						element :'#line9',
						intro :'',
						tooltipClass:'hide'
					},{
						element :'#addressBox',
						intro :'',
						animateStep : "memory1",
						tooltipClass: 'hide'
					
					},{
						element :'#line10',
						intro :'',
						tooltipClass:'hide'
					},{
						element :'#addressBox',
						intro :'',
						animateStep : "animation1",
						tooltipClass: 'hide'
					
					},{
						element :'#line11',
						intro :'',
						position:"bottom",
						tooltipClass: 'hide'
					},{
						element :'#addressBox',
						intro :'',
						animateStep : "memory2",
						tooltipClass:'hide'
					},{
						element :'#line12',
						intro :'',
						tooltipClass:'hide',
						tooltipClass: 'hide'
					},{
						element :'#addressBox',
						intro :'',
						animateStep : "animation2",
						tooltipClass:'hide'
					},{
						element :'#line13',
						intro :'',
						position:"bottom",
					},{
						element :'#line14',
						intro :'',
						position:"bottom",
						tooltipClass: 'hide'
					},{
						element :'#addressBox',
						intro :'',
						position:"bottom",
						animateStep : "animation3",
						tooltipClass: 'hide'
					},{
						element :'#restartBtn',
						intro :'',
						position:"right"
					}]
				});
	intro.onbeforechange(function(targetElement){
		var elementId = targetElement.id;
		switch(elementId) {
		case "addressBox" :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "memory":
				$("#addressBox").addClass("opacity00");
				$("#tableId").addClass("opacity00").css('opacity', '');
			break;
			case 'animation':
				$("#c1, #c2, #c3, #c4, #c5, #c6").addClass("opacity00");
				$('.star').addClass("opacity00").css("opacity", "");
			break;
			case 'animation1':
				$("#d1, #d2, #d3, #d4, #d5, #d6, #d7, #d8, #d9, #negative").addClass("opacity00");
				$('.starr').addClass("opacity00").css("opacity", "");
			break;
			case "memory1" :
				$("#tableId1").addClass("opacity00").css("opacity", "");
			break;
		}
		break;
		case "line2" :
			$("#addressBox").addClass("opacity00");
			$("#tableId").addClass("opacity00").css('opacity', '');
		break;
		case "line5" :
			$("#c1, #c2, #c3, #c4, #c5, #c6").addClass("opacity00");
			$('.star').addClass("opacity00").css("opacity", "");
		break;
		case "line9" :
			$("#tableId1").addClass("opacity00").css("opacity", "");
		break;
		case 'line10':
			$("#d1, #d2, #d3, #d4, #d5, #d6, #d7, #d8, #d9, #negative").addClass("opacity00");
			$('.starr').addClass("opacity00").css("opacity", "");
		break;
		case "line13" :
			$('#e1, #e2').addClass('opacity');
		break;
		}
	});
	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "preBody" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#preBody').removeClass("opacity00");
				typing(".introjs-tooltiptext", "Let us consider a sample code with <span class='ct-code-b-yellow'>" +
						"setf().</span> ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "line2" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", "Here <y>width </y>field is set" +
						" as <y>10</y>. ", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line3" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " Once <y>fill</y> is set then it is applicable up to the next change" +
						" of <y>fill</y> or to the end of the program.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line4" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " Sets the adjustfield of the <span class='ct-code-b-yellow'>" +
						"stream cout</span> to <span class='ct-code-b-yellow'>left</span>.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line6" :
			$('.star').removeClass('blinking-orange');
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " Once <y>precision</y> is set then it is applicable up to " +
						"the next change of <span class='ct-code-b-yellow'>precision value</span> or to " +
						"the end of the program.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line7" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " Sets the adjustfield of the  <span class='ct-code-b-yellow'>" +
						"stream cout</span> to <span class='ct-code-b-yellow'>internal</span>.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			case "line8" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", " Generate a set the floatfield of the <span class='ct-code-b-yellow'>" +
							"stream cout</span> to <span class='ct-code-b-yellow'>scientific</span>  .", 10, "",function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "line9" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},1000);
					
				});
				break;
			case "line11" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					typing(".introjs-tooltiptext", "Here <span class='ct-code-b-yellow'>width </span>field " +
							"is set as <y>2</y>. ", 10, "",function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
		case "line5" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>cout</span> is used to " +
						"display the output on monitor.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line12" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function() {
					intro.nextStep();
				},1000);
			});
			break;
		case "line13" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " Sets the basefield of the  <span class='ct-code-b-yellow'>" +
						"stream cout</span> to  octal.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line10" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function() {
					intro.nextStep();
				},1000);		
			});
			break;
		case "line14" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", "<li>Here <span class='ct-code-b-yellow'>cout </span>is used" +
						" to display the output of the screen and how to change the " +
						"value decimal to octal.</li> ", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line15" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<li>Close the main() tag</li> ", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "addressBox" :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "memory":
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#addressBox").removeClass("opacity00");
					$("#tableId").fadeTo(1000, 1 ,function() {
						$(".introjs-tooltip").removeClass("hide");
						typing(".introjs-tooltiptext", "In the output <span class='ct-code-b-yellow'>10</span>" +
							" digits space is occupied by "+
							"<span class='ct-code-b-yellow'>width(10)</span>.", 10, "",function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "animation" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					intro.refresh();
					for (var i = 1; i <= 6; i++) {
						var l = $("#data" + i).offset();
						$("#c" + i).removeClass("opacity00").offset({
							"top" : l.top,
							"left" : l.left
						});
						TweenMax.to($("#c" + i), 1, {top : 0, left : 0, onComplete:function() {
							if (i == 7) {
								$('.introjs-tooltip').removeClass("hide");
								typing(".introjs-tooltiptext", "The output is printed on the console", 10, "",function() {
									if ($('.introjs-tooltipbuttons .user-btn').length == 0) {
										$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn'
												+'" id="NextButton" >Next &#8594;</a>');
										$(".user-btn").click(function() {
											$(".user-btn").remove();
											$('.star').addClass('blinking-orange');
											$(".star").fadeTo(1000, 1, function() {
												typing(".introjs-tooltiptext", "<y>Empty field</y> is filled with <span class='ct-code-b-yellow'>'*'</span> as for the specified notation.", 10, "",function() {
													$('.star').removeClass('blinking-orange');
													$('.introjs-nextbutton, .introjs-prevbutton').show();
													
												});
											});
										});
									}
								});
							}
						}});
					}
				});
			break;
			case "memory1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#tableId1").fadeTo(1000, 1, function() {
						$(".introjs-tooltip").removeClass("hide");
						typing(".introjs-tooltiptext", "In the output <span class='ct-code-b-yellow'>15</span>  digits space is occupied by "+
								"<span class='ct-code-b-yellow'>width(15)</span>.", 10, "",function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "animation1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					intro.refresh();
					for (var i = 1; i < 10; i++) {
						var l = $("#value" + i).offset();
						$("#d" + i).removeClass("opacity00").offset({
							"top" : l.top,
							"left" : l.left
						});
						$("#negative").removeClass("opacity00");
						TweenMax.to($("#d" + i), 1, {top : 0, left : 0, onComplete:function() {
							if (i == 10) {
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "<ul><li><span class='ct-code-b-yellow'>Sign</span> bit is placed at the first position.</li>"+
										"<li>Scientific notation means the given float value is represented in <span class='ct-code-b-yellow'>exponential</span> form.</li>"+
										"<li>Width adjustment is always from the <span class='ct-code-b-yellow'>rightside</span>.</li>"+
										"</ul>", 10, "",function() {
									if ($('.introjs-tooltipbuttons .user-btn').length == 0) {
										$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn'
												+'" id="NextButton" >Next &#8594;</a>');
										
										$(".user-btn").click(function() {
											$(".user-btn").remove();
											$('.starr').addClass('blinking-orange');
											$(".starr").fadeTo(1000, 1, function() {
												typing(".introjs-tooltiptext","<y>Empty</y> field is filled with <y>'*'</y> as for the specified notation.", 10, "",function() {
													$('.starr').removeClass('blinking-orange');
													$('.introjs-nextbutton, .introjs-prevbutton').show();
												});
											});
										});
									}
								});
							}
						}});
					}
				});
			break;
			case "memory2" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#tableId2").fadeTo(1000, 1, function() {
						setTimeout(function() {
							intro.nextStep();
						},1000);
					});
				});
				break;
			case "animation2" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					intro.refresh();
					for (var i = 1; i < 3; i++) {
						var l = $("#val" + i).offset();
						$("#e" + i).removeClass("opacity00").offset({
							"top" : l.top,
							"left" : l.left
						});
						TweenMax.to($("#e" + i), 1, {top : 0, left : 0, onComplete:function() {
						}});
					}
					setTimeout(function() {
						intro.nextStep();
					},2000);
				});
			break;
		case "animation3" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
				$("#addressBox").removeClass("opacity00");
				$(".z-index").removeClass("opacity00");
				$("#tenth").removeClass('opacity00');
				fromEffectWithTweenMax("#numbr", "#tenth", function() {
					zoomInEffect("#close", function() {
						zoomInEffect("#eight", function() {
							zoomInEffect("#open", function() {
								zoomInEffect("#quotient", function() {
									zoomInEffect("#eight1", function() {
										$('#two').css({'border-top' : '1px solid grey'});
										zoomInEffect("#two",  function() {
											$(".z-index").removeClass("opacity00");
											var l = $("#quotient").offset();
											$("#valueOne").offset({"top": l.top,"left": l.left});
											$(".introjs-tooltip").removeClass("hide");
											typing(".introjs-tooltiptext", "Collect the <y>quotient</y>.", 10, "",function() {
												intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
												TweenMax.to("#valueOne", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
													$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn'
														+'" id="NextButton" >Next &#8594;</a>');
														$(".user-btn").click(function() {
														$(".user-btn").remove();
														$(".z-index1").removeClass("opacity00");
														var l = $("#two").offset();
														$("#valueTwo").offset({"top": l.top,"left": l.left, onComplete: function() {
														}});
														$(".introjs-tooltip").removeClass("hide");
														typing(".introjs-tooltiptext", "<y>Remainder 2</y> is not divisible by <y>eight</y> so collect the remainder value.", 10, "",function() {
																$('.introjs-tooltipbuttons').append('<a class="introjs-button extra-btn'
																		+'" id="extraButton" >Next &#8594;</a>');
																$("#extraButton").click(function() {
																	$("#extraButton").remove();
																	TweenMax.to("#valueTwo", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
																		$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn'
																				+'" id="NextButton" >Next &#8594;</a>');
																		$(".user-btn").click(function() {
																			$(".user-btn").remove();
																			fromEffectWithTweenMax("#valueOne", "#e1", function() {
																				$("#e2").addClass("opacity00").text($("#valueTwo").text());
																				$("#e2").removeClass("opacity00");
																				fromEffectWithTweenMax("#valueTwo", "#e2", function() {
																					$(".introjs-tooltip").removeClass("hide");
																					typing(".introjs-tooltiptext", "This is the output for"
																							+" <span class='ct-code-b-yellow'>decimal value</span>"
																							+" change to <span class='ct-code-b-yellow'>octal value</span> .", 10, "",function() {
																						$('.introjs-nextbutton, .introjs-prevbutton').show();
																					});
																				});
																			});
																		});
																	}});
																})
															});
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
		break;
	}
		break;
		case "restartBtn" :
			$("#octa").removeClass("z-index1");
			$("#calculationBox").removeClass("z-index");
			$("#calculation").empty();
			$("#calculationBox").empty();
			$('.introjs-nextbutton').hide();
			intro.refresh();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 10, "",function() {

				});
			});
			break;
		}
	});
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	$('#informationDiv').removeClass('opacity00');
	TweenMax.to("#infotext", 1, {
		opacity : 1,
		onComplete : function() {
			$("#NextButton").removeClass("opacity00");
			$("#NextButton").click(function() {
				$("#NextButton").remove();
				intro.nextStep();
			});
		}
	});
}
function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
	});
}
function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
		TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}
	});
}
function zoomInEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(this).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	})
}