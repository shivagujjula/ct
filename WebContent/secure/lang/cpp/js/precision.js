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
						position:"bottom"
					},{
						element :'#addressBox',
						intro :'',
						animateStep : "memory"
					},{
						element :'#line3',
						intro :'',
					},{
						element :'#line4',
						intro :'',
					},{
						element :'#addressBox',
						intro :'',
						position:"left",
						animateStep : "animation"
					},{
						element :'#line5',
						intro :'',
						position:"bottom"
					
					},{
						element :'#addressBox',
						intro :'',
						animateStep : "memory1",
						tooltipClass:'hide'
					},{
						element :'#line6',
						intro :'',
						tooltipClass:'hide'
					},{
						element :'#line7',
						intro :'',
						position:"bottom"
					},{
						element :'#addressBox',
						intro :'',
						position:"left",
						animateStep : "animation1"
					
					},{
						element :'#restartBtn',
						intro :'',
						position:"right"
					}]
	});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "preBody" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preBody").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Let us consider a sample code with <span class='ct-code-b-yellow'>precision()</span>. ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Here <y>width </y>field is set as <y>10</y>.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "line3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Once <y>precision</y> is set then it is applicable up to the next change of"+
						" <y>precision value</y> or to the end of the program.", 10, "",function() {
				
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "line4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " <y>cout</y> is used to display the output on monitor.", 10, "",function() {
				
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "line6" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function() {
					intro.nextStep();
				},1500);
			});
			break;
		case "line7" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function() {
					intro.nextStep();
				},1000);
			});
			break;
		case "line5" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function() {
					intro.nextStep();
				},1000);
			});
			break;
		case "addressBox" :
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "memory":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#addressBox").removeClass("opacity00");
					$("#tableId").fadeTo(800, 1, function() {
						$(".introjs-tooltip").removeClass("hide");
						typing(".introjs-tooltiptext", "In the output <y>10</y>  digits space is occupied by "+
								"<span class='ct-code-b-yellow'>width(10)</span>.", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "animation" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
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
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "Here the <y>precision</y> field specifies that the maximum number of" +
										" digits to be displayed with the <y>decimal point </y>are <y>5</y>.", 10, "",function() {
								$('.introjs-nextbutton').show();
							});
							}
						
						}});
					}
				});
			break;
			case "memory1" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#tableId1").fadeTo(1000, 1, function() {
						setTimeout(function() {
							intro.nextStep();
						},1000);
					});
				});
				break;
			case "animation1" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer ').one('transitionend', function() {
					intro.refresh();
					for (var i = 1; i <= 4; i++) {
						var l = $("#value" + i).offset();
						$("#d" + i).removeClass("opacity00").offset({
							"top" : l.top,
							"left" : l.left
						});
						TweenMax.to($("#d" + i), 1, {top : 0, left : 0, onComplete:function() {
							if (i == 5) {
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "<ul><li>Here the output <y>message</y> is lessthan the <y>precision</y>"+
										" size then the message is displayed on the output <y>right justification</y>.</li>"+
										"<li>The <y>unoccupied</y> fields will be <y>empty</y>.</li></ul>", 10, "",function() {
								$('.introjs-nextbutton').show();
								});
							}
						}});
					}
				});
			break;
		}
		break;
		
			
		case "restartBtn" :
			intro.refresh();
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
	});
}