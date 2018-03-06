var readPrintStringUsingGetsPutsReady = function() {
	$("#restartBtn").click(function() {
		$("#inputChar").val('');
		$("#hiddenTotalEnterChar").val('');
		location.reload();
	});
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
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
						element :'#line1',
						intro :'',
						position:"bottom"	
					},{
						element :'#line2',
						intro :'',
						position:"bottom",
					},{
						element :'#addressBox',
						intro :'',
						animateStep : "memory",
						tooltipClass: 'hide'
					},{
						element :'#line3',
						intro :'',
					},{
						element :'#addressBox',
						intro :'',
						position:"left",
						animateStep : "animation",
						tooltipClass: 'hide'
					},{
						element :'#line4',
						intro :'',
						tooltipClass:'hide',
						tooltipClass: 'hide'
					},{
						element :'#addressBox',
						intro :'',
						animateStep : "memory1",
						tooltipClass: 'hide'
					},{
						element :'#line5',
						intro :'',
						tooltipClass:'hide',
						
					},{
						element :'#addressBox',
						intro :'',
						position:"bottom",
						animateStep : "animation1",
						tooltipClass: 'hide'
					},{
						element :'#line7',
						intro :'',
					},{
						element :'#button',
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
				$("#c1, #c2, #c3, #c4, #c5,#c6, #c7, #c8, #c9, #c10").addClass("opacity00");
			break;
			case "animation1" :
				$("#d1, #d2, #d3, #d4, #d5,#d6").addClass("opacity00");
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
		case 'line3':
			$("#c1, #c2, #c3, #c4, #c5,#c6, #c7, #c8, #c9, #c10").addClass("opacity00");
		break;
		case 'line4':
			$("#tableId1").addClass("opacity00").css('opacity', '');
		break;
		case 'line5':
			$("#d1, #d2, #d3, #d4, #d5,#d6").addClass("opacity00");
		break;
		
		}
	});
	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
			intro._introItems[intro._currentStep]["animation"] = "repeat";
		}
		
		if (intro._introItems[intro._currentStep]["isCompleted"]) {
			if (intro._currentStep != 1) {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
			intro._introItems[intro._currentStep]["isCompleted"] = true;
		}
		var elementId = targetElement.id;
		switch (elementId) {
		case "preBody" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preBody").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Let us consider a sample code with <y>width()</y>. ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "line1" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<y>main()</y> is the starting point of execution. ", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line2" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", "Here <y>width </y>field is set as <y>10</y>. ", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line3" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>cout</span> is used to " +
						"display the output on monitor.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line4" :
			$('.introjs-tooltip').removeClass('hide');
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (intro._direction == 'forward') {
					setTimeout(function() {
						intro.nextStep();
					},1000);
				} else {
					setTimeout(function() {
						intro.previousStep();
					},1000);
				}
			});
			break;
		case "line5" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (intro._direction == 'forward') {
					setTimeout(function() {
						intro.nextStep();
					},1000);
				} else {
					setTimeout(function() {
						intro.previousStep();
					},1000);
				}
			});
			break;
		case "line7" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "This is the end of the <span class='ct-code-b-yellow'>main()</span>"+
						"which will terminate the execution of the program. ", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "addressBox" :
			intro.refresh();
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
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "animation" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					intro.refresh();
					for (var i = 1; i <= 10; i++) {
						var l = $("#data" + i).offset();
						$("#c" + i).removeClass("opacity00").offset({
							"top" : l.top,
							"left" : l.left
						});
						
						TweenMax.to($("#c" + i), 1, {top : 0, left : 0, onComplete:function() {
							if (i == 11) {
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "<y>10 bytes</y> are allocated to the array" +
										" of the variable <y>width</y>.", 10, "",function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
							}
						
						}});
					}
				});
			break;
			case "memory1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
						if (intro._direction == 'forward') {
							$("#tableId1").fadeTo(800, 1, function() {
								setTimeout(function() {
									intro.nextStep();
								},1000);
							});
						} else {
							setTimeout(function() {
								intro.previousStep();
							},1000);
						}
				});
				break;
			case "animation1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					intro.refresh();
					for (var i = 1; i <= 6; i++) {
						var l = $("#value" + i).offset();
						$("#d" + i).removeClass("opacity00").offset({
							"top" : l.top,
							"left" : l.left
						});
						TweenMax.to($("#d" + i), 1, {top : 0, left : 0, onComplete:function() {
							if (i == 7) {
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "<ul><li>Here the output message is lessthan the <y>width"+
										" size</y> then the <y>message</y> is displayed on the output <y>right justification</y>.</li>"+
										"<li>The <y>unoccupied</y> fields will be <y>empty</y>.</li></ul>", 10, "",function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							}
						}});
					}
				});
			break;
		}
		break;
		
			
		case "button" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn, #closeBtn").removeClass("opacity00");
				console.log('haiiiii');
				var text = "<ul><li>Click on <span class='ct-code-b-yellow'>Close</span> button to close the Live Demo.</li>" +
						"<li>Click on <span class='ct-code-b-yellow'>Restart</span> button to restart the Live Demo.</li></ul>"
									
				typing('.introjs-tooltiptext', text,10, "", function() {
					$('#restartBtn').click(function() {
						location.reload();
						
					});

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
