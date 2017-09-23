function MicrocontrollerArchitectureReady() {
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
			popoverTextFunction();
			zoomingEffectOfImages(function() {
				$("#microProcessorImg").popover('show');
				$('.svg-line4').css("opacity", "1");
				TweenMax.to($('.svg-line4'), 1, {attr: {y2: '46.4%'}, onComplete: function() {
					$("#RamImageId").popover('show');
					$('.svg-line5').css("opacity", "1");
					TweenMax.to($('.svg-line5'), 1, {attr: {x2: '53.4%', y2: '47.4%'}, onComplete: function() {
						$("#ADConverterImg").popover('show');
						$('.svg-line3').css("opacity", "1");
						TweenMax.to($('.svg-line3'), 1, {attr: {x2: '40.8%', y2: '47.3%'}, onComplete: function() {
							$("#programMemoryImg").popover('show');
							$('.svg-line6').css("opacity", "1");
							TweenMax.to($('.svg-line6'), 1, {attr: {x2: '59.4%', y2: '47.4%'}, onComplete: function() {
								$("#oscillatorImage").popover('show');
								$('.svg-line2').css("opacity", "1");
								TweenMax.to($('.svg-line2'), 1, {attr: {x2: '33%', y2: '46.4%'}, onComplete: function() {
									$("#serialCommunicationImg").popover('show');
									$('.svg-line1').css("opacity", "1");
									TweenMax.to($('.svg-line1'), 1, {attr: {x2: '29%'}, onComplete: function() {
										$("#EEPromImage").popover('show');
										$('.svg-line7').css("opacity", "1");
										TweenMax.to($('.svg-line7'), 1, {attr: {x2: '69.4%'}, onComplete: function() {
											zoomingEffect("#microProcessorBottomImg", function() {
												TweenMax.to($(".title-text-bottom"), 1.5, {opacity: 1, onComplete: function() {
													setTimeout(function() {
														introjs.nextStep();
													}, 1500);
												}});
											});
										}});
									}});
								}});
							}});
						}});
					}});
				}});
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

function popoverTextFunction() {
	$("#microProcessorImg").popover({
		placement: 'top',
		html: true,
		trigger: 'focus',
		content: 'Micro processor',
	}).popover('hide');
	$("#RamImageId").popover({
		placement: 'right',
		html: true,
		trigger: 'focus',
		content: 'RAM',
	}).popover('hide');
	$("#programMemoryImg").popover({
		placement: 'right',
		html: true,
		trigger: 'focus',
		content: 'Program Memory',
	}).popover('hide');
	$("#oscillatorImage").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: 'Oscillator 0-40MHz',
	}).popover('hide');
	$("#ADConverterImg").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: 'A/D Converter',
	}).popover('hide');
	$("#serialCommunicationImg").popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: 'serial Communication',
	}).popover('hide');
	$("#EEPromImage").popover({
		placement: 'right',
		html: true,
		trigger: 'focus',
		content: 'EEPROM',
	}).popover('hide');
}

function zoomingEffectOfImages(callBackFunction) {
	zoomingEffect("#microProcessorImg", function() {
		zoomingEffect("#RamImageId", function() {
			zoomingEffect("#ADConverterImg", function() {
				zoomingEffect("#oscillatorImage", function() {
					zoomingEffect("#programMemoryImg", function() {
						zoomingEffect("#serialCommunicationImg", function() {
							zoomingEffect("#EEPromImage", function() {
								zoomingEffect("#microcontrollerImg", function() {
									$('.zoom').magnify();
									if (typeof callBackFunction === "function") {
										callBackFunction();
									}
								});
							});
						});
					});
				});
			});
		});
	});
}