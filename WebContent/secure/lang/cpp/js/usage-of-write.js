var usageOfWriteReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function() {
		$("#inputChar, #inputChar2").val("");
		location.reload();
	});
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :"#infoDiv",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element :"#preTableDiv",
			intro : "",
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element : '#preline1',
			intro : '',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'name',
			tooltipClass : 'hide'
		
		}, {
			element : '#preline2',
			intro : '',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'place',
			tooltipClass : 'hide'
		}, {
			element : '#preline3',
			intro : '',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'movie',
			tooltipClass : 'hide'
		}, {
			element : '#preline4',
			intro : '',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'code',
			tooltipClass : 'hide'
		},{
			element : '#end',
			intro : '',
			position : "right"
		}, {
			element :"#button",
			intro : "",
			position : 'right',
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case 'preline1':
			$("#consoleId").addClass('opacity00');
			$("#codeTantra").addClass("opacity00");
			break;
		case 'preline2':
			$("#india").addClass("opacity00");
			break;
		case 'preline3':
			$("#baahubali").addClass("opacity00");
			break;
		case 'preline4':
			$("#code").addClass('opacity00');
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'name':
				$("#codeTantra").addClass("opacity00");
				break;
			case 'place':
				$("#india").addClass("opacity00");
				break;
				break;
			case 'movie':	
				$("#baahubali").addClass("opacity00");
				break;
			case 'code':
				$("#code").addClass('opacity00');
				break;
			}
			break;
		}
	});
	introjs.onafterchange(function(targetElement) {
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			if (introjs._currentStep != 0 && introjs._currentStep != 1) {
				$('.introjs-prevbutton').show();
			} 
			$('.introjs-nextbutton').show();
			return;
		}
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case 'infoDiv':
/*** The general format is: variable = write( ); ***/			
			$("#infoDiv").removeClass("opacity00");
			/*$("#infoDiv").css({height: $("#infoDiv").outerHeight()});*/
			$("#list").fadeTo(300, 1, function() {
				$("#list1").fadeTo(300, 1, function() {
					$("#list2").fadeTo(300, 1, function() {
						$("#syntax").fadeTo(300, 1, function() {
							$("#list3").fadeTo(300, 1, function() {
								$("#list4").fadeTo(300, 1, function() {
									$("#example").fadeTo(300, 1, function() {
										$("#desc").fadeTo(300, 1, function() {
											$("#example1").fadeTo(300, 1, function() {
												$('#nextButton').removeClass("opacity00");
												$('.user-btn').click(function() {
													$('.user-btn').remove();
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
			});
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext', "Let us consider an sample program using"+
						" <span class='ct-code-b-yellow'>write()</span> function.", function() {
					$(".introjs-nextbutton").show();
					$(".introjs-prevbutton").hide();
				});
			});
			break;
		
		case 'preline1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "The <span class='ct-code-b-yellow'>write()</span>"+
						" prints first <span class='ct-code-b-yellow'>10</span> characters on to the dispay. ", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'preline2':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'>write()</span>"+
						   " prints first <span class='ct-code-b-yellow'>5</span> characters on to the dispay. ";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'preline3':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'>write()</span>"+
						   " prints first <span class='ct-code-b-yellow'>46</span> characters on to the dispay. ";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'preline4':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'>write()</span>"+
						   " prints first <span class='ct-code-b-yellow'>4</span> characters on to the dispay even"+"" +
						   " though mentioned size is <span class='ct-code-b-yellow'>10</span>. ";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'end':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the end of the main() function where the program execution ends.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "name" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#codeTantra").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#consoleId").removeClass("opacity00");
						//$('.introjs-tooltip').removeClass('hide');
						//TweenMax.to("#codeTantra", 0.2, {opacity: 1, onComplete: function() { 
							$("#codeTantra").removeClass("opacity00");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						//}});
					}
				});
				break;
			case 'place':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#india").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						//TweenMax.to("#india", 0.2, {opacity: 1, onComplete: function() { 
							$("#india").removeClass("opacity00");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						//}});
					}
				});
				break;
			case 'movie':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#baahubali").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						//TweenMax.to("#baahubali", 0.2, {opacity: 1, onComplete: function() { 
							$("#baahubali").removeClass("opacity00");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						//}});
					}
				});
				break;
			case 'code':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#code").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						//TweenMax.to("#code", 0.2, {opacity: 1, onComplete: function() { 
							$("#code").removeClass("opacity00");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						//}});
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
									
				typing('.introjs-tooltiptext', text, function() {
					$('#restartBtn').click(function() {
						location.reload();
						
					});
					

				});
			});
		break;
		}
	});
	
	introjs.start();
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 10;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	})
}
