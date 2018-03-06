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
						element :'#line2',
						intro :'',
						position:"bottom"
					},{
						element :'#line3',
						intro :'',
					},{
						element :'#line4',
						intro :'',
					},{
						element :'#line5',
						intro :'',
					},{
						element :'#line6',
						intro :'',
						position:"bottom"
					},{
						element :'#line7',
						intro :'',
						position:"bottom",
					},{
						element :'#addressBox',
						intro :'',
						animateStep : "memory",
						tooltipClass: 'hide'
					},{
						element :'#line8',
						intro :'',
						position:"bottom",
					},{
						element :'#addressBox',
						intro :'',
						position:"left",
						animateStep : "animation",
						tooltipClass: 'hide'
					
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
			case 'animation':
				$("#c1, #c2, #c3, #c4, #c5, #c6, #c7, #positive").addClass("opacity00");
			break;
			}
			break;
		case "line7" :
			$("#addressBox").addClass("opacity00");
			$("#tableId").addClass("opacity00").css('opacity', '');
		break;
		case 'line8':
			$("#c1, #c2, #c3, #c4, #c5, #c6, #c7, #positive").addClass("opacity00");
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
				typing(".introjs-tooltiptext", "Let us consider a sample code with <span class='ct-code-b-yellow'>width()</span>. ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "line2" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " Display <span class='ct-code-b-yellow'>decimal point</span> and <span class='ct-code-b-yellow'>" +
						"trailing zeros</span> for all <span class='ct-code-b-yellow'>floating point numbers</span>," +
						" even if the decimal places are not needed.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line3" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Display a leading plus sign before <span class='ct-code-b-yellow'>" +
						"positive values</span>.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line5" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " Display floating point numbers in <span class='ct-code-b-yellow'>normal notation - no trailing</span> "+
						"<span class='ct-code-b-yellow'>zeroes</span> and no <span class='ct-code-b-yellow'>" +
						"scientific notation</span>.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line6" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " Sets the adjustfield of the <span class='ct-code-b-yellow'>stream cout</span> to " +
						"<span class='ct-code-b-yellow'>internal</span>.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line7" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass("hide");
				typing(".introjs-tooltiptext", "Here <span class='ct-code-b-yellow'>width </span>field is set as 10. ", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line4" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "The <span class='ct-code-b-yellow'>setprecision()</span> manipulator " +
						"can also be used to set the number of <span class='ct-code-b-yellow'>" +
						"decimal places</span> to be displayed.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line8" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass("hide");
				typing(".introjs-tooltiptext", " <span class='ct-code-b-yellow'>cout</span> is used to display the output on monitor.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		case "addressBox" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "memory":
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#addressBox").removeClass("opacity00");
					$("#tableId").fadeTo(1000, 1,  function() {
						$(".introjs-tooltip").removeClass("hide");
						typing(".introjs-tooltiptext", "In the output <span class='ct-code-b-yellow'>10</span>  digits space is occupied by "+
								"<span class='ct-code-b-yellow'>width(10)</span>.", 10, "",function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "animation" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					intro.refresh();
					var i;
						for ( i = 1; i <= 7; i++) {
							var l = $("#data" + i).offset();
							$("#c" + i).removeClass("opacity00").offset({
								"top" : l.top,
								"left" : l.left
							});
							TweenMax.to($("#c" + i), 1, {top : 0, left : 0, onComplete:function() {
								console.log("iiii");
								console.log(i);
								if (i == 8) {
									$(".introjs-tooltip").removeClass("hide");
									typing(".introjs-tooltiptext", "<ul><li><span class='ct-code-b-yellow'>Sign</span> bit is placed at the first position.</li>"+
											"<li>Scientific notation means the given float value is represented in <span class='ct-code-b-yellow'>exponential</span> form.</li>"+
											"<li>Width adjustment is always from the <span class='ct-code-b-yellow'>rightside</span>.</li>"+
											"<li>Remaining fields are <span class='ct-code-b-yellow'>empty</span>. </ul>", 10, "",function() {
										$("#tableId td span:empty").text("");
										$("#positive").removeClass("opacity00");
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
