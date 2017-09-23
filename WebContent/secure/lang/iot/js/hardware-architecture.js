var typingInterval = 10;
function HardwareArchitectureReady() {
	introGuide();
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
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
			element : "#mainDiv",
			intro : "",
			tooltipClass : 'hide'
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
		case 'mainDiv':
			$("#mainDiv").addClass("z-index");
			tweenmaxStaggerFromToFunction("#cpuCircleDiv", function() {
				tweenmaxStaggerFromToFunction("#inputCircleDiv", function() {
					TweenMax.to($('.svg-line6').css("opacity", "1"), 1, {attr: {x2: '40.2%', y2: '45%'}, onComplete: function() {
					tweenmaxStaggerFromToFunction("#ramCircleDiv", function() {
						$('.svg-line1, .svg-marker-bottom1').css("opacity", "1");
						TweenMax.to($('.svg-line1'), 1, {attr: {y2: '21.0%'}});
						TweenMax.to($('.svg-marker-bottom1'), 1, {attr: {y2: '39.2%'}, onComplete: function() {
							TweenMax.to($('.svg-line2').css("opacity", "1"), 1, {attr: {x2: '75%', y2: '35%'}, onComplete: function() {
								tweenmaxStaggerFromToFunction("#outputCircleDiv", function() {
									tweenmaxStaggerFromToFunction("#ciCircleDiv", function() {
										$('.svg-line3, .svg-marker-bottom2').css("opacity", "1");
										TweenMax.to($('.svg-line3'), 1, {attr: {x2: '75.5%', y2: '64.8%'}});
										TweenMax.to($('.svg-marker-bottom2'), 1, {attr: {x2: '59.8%', y2: '55.5%'}, onComplete: function() {
											tweenmaxStaggerFromToFunction("#firmwareCircleDiv", function() {
												$('.svg-line4, .svg-marker-bottom3').css("opacity", "1");
												TweenMax.to($('.svg-line4'), 1, {attr: {y2: '78.8%'}});
												TweenMax.to($('.svg-marker-bottom3'), 1, {attr: {y2: '60.8%'}, onComplete: function() {
													tweenmaxStaggerFromToFunction("#romCircleDiv", function() {
														$('.svg-line5, .svg-marker-bottom4').css("opacity", "1");
														TweenMax.to($('.svg-line5'), 1, {attr: {x2: '24%', y2: '64%'}});
														TweenMax.to($('.svg-marker-bottom4'), 1, {attr: {x2: '40%', y2: '54.6%'}, onComplete: function() {
															setTimeout(function() {
																introjs.nextStep();
															}, 1500);	
														}});
													});
												}});
											});
										}});
									});
								});
							}});
						}});
					});
				}});
			});
			});
			break;
		case 'restart':
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$(".introjs-tooltiptext").text("Click to restart.");
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}

function zoomingEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
	
function tweenmaxStaggerFromToFunction(selector, callBackFunction) {
	TweenMax.staggerFromTo($(selector), 1, { scale: 0 }, { scale: 1, opacity: 1, ease: Power1.easeIn, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
