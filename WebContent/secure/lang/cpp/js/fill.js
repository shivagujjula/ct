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
						tooltipClass: 'hide'
					},{
						element :'#addressBox',
						intro :'',
						position:"left",
						animateStep : "animation",
						tooltipClass: 'hide'
					},{
						element :'#line5',
						intro :'',
						position:"bottom",
						tooltipClass: 'hide'
					
					},{
						element :'#addressBox',
						intro :'',
						animateStep : "memory1",
						tooltipClass: 'hide'
					},{
						element :'#line6',
						intro :'',
						position:"bottom"
					},{
						element :'#line7',
						intro :'',
						position:"bottom",
						tooltipClass: 'hide'
					},{
						element :'#addressBox',
						intro :'',
						position:"bottom",
						animateStep : "animation1",
						tooltipClass: 'hide'
					
					},{
						element :'#line8',
						intro :'',
						position:"bottom"
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
			case "animation" :
				$("#c1, #c2, #c3, #c4, #c5,#c6, #c7, #c8, #c9").addClass("opacity00");
				$('.star').addClass("opacity00").css("opacity", "");
			break;
			case "animation1" :
				$("#d1, #d2, #d3, #d4, #d5,#d6").addClass("opacity00");
				$('.starr').addClass("opacity00").css("opacity", "");
			break;
			case "memory1":
				$("#tableId1").addClass("opacity00").css('opacity', '');
			break;
			}
			break;
		case 'line2':
			$("#addressBox").addClass("opacity00");
			$("#tableId").addClass("opacity00").css('opacity', '');
		break;
		case 'line4':
			$("#c1, #c2, #c3, #c4, #c5,#c6, #c7, #c8, #c9").addClass("opacity00");
			$('.star').addClass("opacity00").css("opacity", "");
		break;
		case 'line5':
			$("#tableId1").addClass("opacity00").css('opacity', '');
		break;
		case 'line7':
			$("#d1, #d2, #d3, #d4, #d5,#d6").addClass("opacity00");
			$('.starr').addClass("opacity00").css("opacity", "");
		break;
		}
	});
	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "preBody" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preBody").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Let us learn <y>fill()</y> field in <y>c++</y>. ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "line2" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", "Here <y>width </y>field is set as <y>15</y>. ", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line3" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " Once <y>fill</y> is set then it is applicable up to the " +
						"next change of <y>fill</y> or to the end of the program.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line4" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", " <y>cout</y> is used to display the output in <y>monitor</y>.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line6" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " Once <y>fill</y> is set then it is applicable up to the next" +
						" change of <y>fill</y> or to the end of the program.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line7" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", " <y>cout</y> is used to display the output in monitor.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line5" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", "Here <y>width </y>field is set as <y>10</y>. ", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line8" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Close the <y>main()</y> tag. ", 10, "",function() {
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
					$("#tableId").fadeTo(800, 1, function() {
						$(".introjs-tooltip").removeClass("hide");
						typing(".introjs-tooltiptext", "In the output <y>15</y>" +
								" digits space is occupied by "+
								"<y>width(15)</y>.", 10, "",function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "animation" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					for (var i = 1; i < 10; i++) {
						var l = $("#data" + i).offset();
						$("#c" + i).removeClass("opacity00").offset({
							"top" : l.top,
							"left" : l.left
						});
						
						TweenMax.to($("#c" + i), 1, {top : 0, left : 0, onComplete:function() {
							if (i == 10) {
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "Here the output message is lessthan the <y>width size</y> then the " +
										"<y>message</y> is displayed on the output <y>right justification</y>.", 10, "",function() {
									
									intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
									if ($('.introjs-tooltipbuttons .user-btn').length == 0) {
										$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn'
												+'" id="NextButton" >Next &#8594;</a>');
										
										$(".user-btn").click(function() {
											$(".user-btn").remove();
											$('.star').addClass('blinking-orange');
											$(".star").fadeTo(1000, 1, function() {
												$(".introjs-tooltip").removeClass("hide");
												typing(".introjs-tooltiptext", "<y>Empty</y> field is filled with <y>'*'</y> as " +
														"for the specified notation.", 10, "",function() {
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
					$("#tableId1").fadeTo(800, 1, function() {
						$(".introjs-tooltip").removeClass("hide");
						typing(".introjs-tooltiptext", "In the output <y>10</y>" +
								" digits space is occupied by "+
								"<y>width(10)</y>.", 10, "",function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "animation1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					for (var i = 1; i <= 6; i++) {
						var l = $("#value" + i).offset();
						$("#d" + i).removeClass("opacity00").offset({
							"top" : l.top,
							"left" : l.left
						});
						TweenMax.to($("#d" + i), 1, {top : 0, left : 0, onComplete:function() {
							if (i == 7) {
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "The output is printed on the console.", 10, "",function() {
									
									if ($('.introjs-tooltipbuttons .user-btn').length == 0) {
										$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn'
												+'" id="NextButton" >Next &#8594;</a>');
										
										$(".user-btn").click(function() {
											$(".user-btn").remove();
											$('.starr').addClass('blinking-orange');
											$(".starr").fadeTo(1000, 1, function() {
												typing(".introjs-tooltiptext", "<y>Empty</y> field is filled with <y>'*'</y> as for the specified notation.", 10, "",function() {
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
		}
		break;
		
			
		case "restartBtn" :
			$('.introjs-nextbutton').hide();
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