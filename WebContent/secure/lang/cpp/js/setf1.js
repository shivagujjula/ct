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
						position:"bottom"
					},{
						element :'#addressBox',
						intro :'',
						animateStep : "memory"
					},{
						element :'#line8',
						intro :'',
						position:"bottom"
					},{
						element :'#addressBox',
						intro :'',
						position:"left",
						animateStep : "animation"
					
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
				typing(".introjs-tooltiptext", "Let us consider a sample code with <span class='ct-code-b-yellow'>width()</span>. ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " Display <span class='ct-code-b-yellow'>decimal point</span> and <span class='ct-code-b-yellow'>" +
						"trailing zeros</span> for all <span class='ct-code-b-yellow'>floating point numbers</span>," +
						" even if the decimal places are not needed.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "line3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Display a leading plus sign before <span class='ct-code-b-yellow'>" +
						"positive values</span>.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "line5" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " Display floating point numbers in <span class='ct-code-b-yellow'>normal notation - no trailing</span> "+
						"<span class='ct-code-b-yellow'>zeroes</span> and no <span class='ct-code-b-yellow'>" +
						"scientific notation</span>.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "line6" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " Sets the adjustfield of the <span class='ct-code-b-yellow'>stream cout</span> to " +
						"<span class='ct-code-b-yellow'>internal</span>.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "line7" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Here <span class='ct-code-b-yellow'>width </span>field is set as 10. ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "line4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "The <span class='ct-code-b-yellow'>setprecision()</span> manipulator " +
						"can also be used to set the number of <span class='ct-code-b-yellow'>" +
						"decimal places</span> to be displayed.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "line8" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " <span class='ct-code-b-yellow'>cout</span> is used to display the output on monitor.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		case "addressBox" :
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "memory":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#addressBox").removeClass("opacity00");
					$("#tableId").fadeTo(1000, 1,  function() {
						$(".introjs-tooltip").removeClass("hide");
						typing(".introjs-tooltiptext", "In the output <span class='ct-code-b-yellow'>10</span>  digits space is occupied by "+
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