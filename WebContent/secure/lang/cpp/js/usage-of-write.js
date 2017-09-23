var typingInterval = 50;

var usageOfGetcharReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function(){
		$("#inputChar, #inputChar2").val("");
		location.reload();
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
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
		var elementId = targetElement.id;
		if (elementId == "line5") {
			$("#line5").addClass('z-index9999999');
		}
		switch (elementId) {
		case 'infoDiv':
/*** The general format is: variable=get ( ); ***/			
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list").fadeTo(300, 1, function() {
				$("#list1").fadeTo(300, 1, function() {
					$("#list2").fadeTo(300, 1, function() {
						$("#syntax").fadeTo(300, 1, function() {
							$("#list3").fadeTo(300, 1, function() {
								$("#list4").fadeTo(300, 1, function() {
									$("#example").fadeTo(300, 1, function() {
										$("#desc").fadeTo(300, 1, function() {
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
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Let us consider an example using"+
						" <span class='ct-code-b-yellow'>write()</span> function.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		
		case 'preline1':
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "The <span class='ct-code-b-yellow'>write()</span>"+
						" prints first <span class='ct-code-b-yellow'>10</span> characters on to the dispay. ", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'preline2':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'>write()</span>"+
						   " prints first <span class='ct-code-b-yellow'>5</span> characters on to the dispay. ";
				typing(".introjs-tooltiptext", text, function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'preline3':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'>write()</span>"+
						   " prints first <span class='ct-code-b-yellow'>46</span> characters on to the dispay. ";
				typing(".introjs-tooltiptext", text, function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "name" :
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					TweenMax.to("#codeTantra", 0.2, {opacity: 1, onComplete: function() { 
						$("#codeTantra").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
						
					}});
				});
				break;
			case 'place':
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					TweenMax.to("#india", 0.2, {opacity: 1, onComplete: function() { 
						$("#india").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}});
				});
				break;
			case 'movie':
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					TweenMax.to("#baahubali", 0.2, {opacity: 1, onComplete: function() { 
						$("#baahubali").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}});
				});
				break;
			}
			break;
		
			
		case "restart":
			$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-tooltipbuttons').addClass("hide");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
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
		}
	})
}