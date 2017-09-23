function IotCcharacteristicsReady() {
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
			tweenmaxStaggerFromToFunction("#centerViewCircleDiv", function() {
				arrowAnimation(".bottom-left-view-arrow", "faa-passing-bottom-left animated", function() {
					tweenmaxStaggerFromToFunction("#bottomleftViewCircleDiv", function() {
						arrowAnimation(".top-right-view-arrow", "faa-passing-top-right animated", function() {
							tweenmaxStaggerFromToFunction("#topRightViewCircleDiv", function() {
								arrowAnimation(".bottom-right-view-arrow", "faa-passing-bottom-right animated", function() {
									tweenmaxStaggerFromToFunction("#bottomRightViewCircleDiv", function() {
										arrowAnimation(".top-view-arrow", "faa-passing-top animated", function() {
											tweenmaxStaggerFromToFunction("#topViewCircleDiv", function() {
												arrowAnimation(".top-left-view-arrow", "faa-passing-top-left animated", function() {
													tweenmaxStaggerFromToFunction("#topLeftViewCircleDiv", function() {
														setTimeout(function() {
															introjs.nextStep();
														}, 1500);
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

function tweenmaxStaggerFromToFunction(selector, callBackFunction) {
	TweenMax.staggerFromTo($(selector), 1, { scale: 0 }, { scale: 1, opacity: 1, ease: Power1.easeIn, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function arrowAnimation(selector, className, callBackFunction) {
//	$(".top-right-view-arrow").removeClass("opacity00").addClass("faa-passing-top-right animated").one('animationend', function() {
	$(selector).removeClass("opacity00").addClass(className).one('animationend', function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}