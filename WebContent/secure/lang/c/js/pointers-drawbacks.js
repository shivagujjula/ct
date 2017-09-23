var introjs;
var typingInterval = 5;

var pointersDrawbacksReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});

	introJsFunction();
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
		}
	});
}

function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#preCode",
			intro : ""
		}, {
			element : "#line1",
			intro : ""
		}, {
			element : "#xBox",
			intro : "",
			animateStep : "xBoxAnimate"
		}, {
			element : "#line2",
			intro : ""
		}, {
			element : "#pBox",
			intro : "",
			animateStep : "pBoxAnimate"
		}, {
			element : "#line3",
			intro : ""
		}, {
			element : "#pBox",
			intro : "",
			animateStep : "pBoxValueAnimate"
		}, {
			element : "#animationDiv",
			intro : "",
			animateStep : "arrowAnimate"
		}, {
			element : "#line4",
			intro : ""
		}, {
			element : "#animationDiv",
			intro : "",
			animateStep : "*pValueAnimate"
		}, {
			element : "#print1",
			intro : ""
		}, {
			element : "#xBox",
			intro : "",
			animateStep : "xValuePrint"
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#print2",
			intro : ""
		}, {
			element : "#animationDiv",
			intro : "",
			animateStep : "*pValuePrint"
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#restartBtn",
			intro : "Click to Restart",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		} ]});

	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "preCode":
			var typingContent = 'Let us understand a drawback of <span class="ct-code-b-yellow">Pointers</span>.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "line1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement initializes an <span class="ct-code-b-yellow">int</span> variable'
								+ ' <span class="ct-code-b-yellow">x</span> with value <span class="ct-code-b-yellow">3</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "xBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "xBoxAnimate":
					var typingContent = 'Here the variable <span class="ct-code-b-yellow">x</span> is of type '
								+ '<span class="ct-code-b-yellow">int</span>, it occupies <span class="ct-code-b-yellow">2 bytes</span> '
								+ 'of memory and has some address (i.e. location in memory). Let its address be '
								+ '<span class="ct-code-b-yellow">1111</span>.</br>x is initialized to <span class="ct-code-b-yellow">3</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationXBox()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "xValuePrint":
					$('#xValue').addClass('blinking-border-background-blue');
					var typingContent = 'The value that is blinking is the value return by <span class="ct-code-b-yellow">x</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					break;
				}
			});
			break;
		case "line2":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> occupies '
								+ '<span class="ct-code-b-yellow">2 bytes</span> of memory This <span class="ct-code-b-yellow">pointer'
								+ '</span> variable is declared with <span class="ct-code-b-yellow">int</span> datatype, it should point '
								+ 'to the address that contains an <span class="ct-code-b-yellow">int</span> value.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "pBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "pBoxAnimate":
					var typingContent = 'Here the variable <span class="ct-code-b-yellow">x</span> is of type '
									+ '<span class="ct-code-b-yellow">int</span>, it occupies <span class="ct-code-b-yellow">2 bytes</span> '
									+ 'of memory and has some address (i.e. location in memory). Let its address be '
									+ '<span class="ct-code-b-yellow">1234</span>.'
									+ '</br>A <span class="ct-code-b-yellow">pointer</span>\'s initial value is always some '
									+ '<span class="ct-code-b-yellow">garbage</span> value.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationPBox()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "pBoxValueAnimate":
					var typingContent = 'Here the address of <span class="ct-code-b-yellow">x</span>(i.e., <span class="ct-code-b-yellow">1111</span>'
										+ ') is stored into <span class="ct-code-b-yellow">p</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationPBoxValue()'>" + 
																"Next &#8594;</a>");
					});
					break;
				}
			});
			break;
		case "line3":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> is '
									+ 'assigned with <span class="ct-code-b-yellow">&x</span>, so the address of '
									+ '<span class="ct-code-b-yellow">x</span> is stored into <span class="ct-code-b-yellow">p</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "animationDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "arrowAnimate":
					var typingContent = 'Here the <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> has '
										+ 'the address of <span class="ct-code-b-yellow">x</span>, so it can access the variable '
										+ '<span class="ct-code-b-yellow">x</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationPointerArrow()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "*pValueAnimate":
					var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> '
									+ 'is pointed to <span class="ct-code-b-yellow">x</span> and it has changed the <span class="ct-code-b-yellow">'
									+ 'x</span> value to <span class="ct-code-b-yellow">20</span>.<br/>The <span class="ct-code-b-yellow">'
									+ 'drawback</span> in pointers is, without the knowledge of variable <span class="ct-code-b-yellow">x</span>, '
									+ 'the value of variable <span class="ct-code-b-yellow">x</span> has been changed through the '
									+ 'pointer variable <span class="ct-code-b-yellow">*p</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationXBoxValue()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "*pValuePrint":
					$('#xValue').addClass('blinking-border-background-blue');
					var typingContent = 'The value that is blinking is the value returned by <span class="ct-code-b-yellow">*p</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					break;
				}
			});
			break;
		case "line4":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here the <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">*p</span> '
									+ 'is assigned with value <span class="ct-code-b-yellow">20</span>. <br/>In this case '
									+ '<span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> '
									+ 'is pointed to <span class="ct-code-b-yellow">x</span> and it has changed the '
									+ '<span class="ct-code-b-yellow">x</span> value to <span class="ct-code-b-yellow">20</span>.'
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "print1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">x</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "print2":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">*p</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.blinking-border-background-blue').removeClass('blinking-border-background-blue');
				var selector = $('.output-console-body > .visibility-hidden').eq(0);
				var typingContent = selector.removeClass('visibility-hidden').html();
				typing(selector, typingContent, 30, 'white', function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				});
				
			});
			break;
		case "restartBtn":
			$('.introjs-tooltip').css({'min-width' : '110px'});
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
			break;
		}
	});
	
	introjs.start();
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function bounceFromEffextWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).parent().append('<span id="temp" style="position: absolute;"></span>');
	$('#temp').offset({top: l2.top, left: l2.left}).text($(selector2).text());
	$(selector2).text($(selector1).text());
	timelineMax.from(selector2, 3, {ease:  Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}}).to('#temp', 1, { ease: Sine.easeOut, top: "-=100", opacity: 0, onComplete: function() {
		$('#temp').remove();
	}}, "-=2");
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function animationXBox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#xBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#xBox').removeClass('animated zoomIn');
		$('#valueOfX').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#valueOfX').removeClass('circle-css');
			$('#xValue').removeClass('visibility-hidden');
			fromEffectWithTweenMax('#valueOfX', '#xValue', function() {
				$('.introjs-nextbutton').show();
			});
		});
	});
}

function animationPBox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#pBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#pBox').removeClass('animated zoomIn');
		$('.introjs-nextbutton').show();
	});
}

function animationPBoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#xAddress').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
		$('#xAddress').removeClass('circle-css');
		$('#pValue').removeClass('visibility-hidden');
		fromEffectWithTweenMax('#xAddress', '#pValue', function() {
			$('.introjs-nextbutton').show();
		});
	});
}

function animationPointerArrow() {
	$('.introjs-duplicate-nextbutton').remove();
	svgAppend($('#animationDiv'), 'svg');
	svgMarkerAppend($('#svg'), 'markerEnd');
	var parentSelector = $('#animationDiv');
	var selector1 = $('#pBox .padding10');
	var selector2 = $('#xBox .border-height-css');
	var svgId =  $('#svg');
	var svgLineId = 'svgLine';
	var markerId = 'markerEnd';
	svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, function() {
		$('.introjs-nextbutton').show();
	});
}

function animationXBoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#valueOfP20').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
		$('#valueOfP20').removeClass('circle-css');
		$('#xValue').removeClass('visibility-hidden');
		bounceFromEffextWithTimelineMax('#valueOfP20', '#xValue', function() {
			$('.introjs-nextbutton').show();
		});
	});
}