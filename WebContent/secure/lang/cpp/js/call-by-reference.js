var introjs;
var typingInterval = 5;

var callByValueReady = function() {
	
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	
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
			element : "#swapDeclareLine",
			intro : ""
		}, {
			element : "#mainMethodBlock",
			intro : ""
		}, {
			element : "#mainMethodBox",
			intro : ""
		}, {
			element : "#aLine",
			intro : ""
		}, {
			element : "#aBox",
			intro : ""
		}, {
			element : "#bLine",
			intro : ""
		}, {
			element : "#bBox",
			intro : "",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}, {
			element : "#printBeforeSwapInMain",
			intro : ""
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#swapLine",
			intro : ""
		}, {
			element : "#swapMethodBlock",
			intro : ""
		}, {
			element : "#swapAnimationDiv",
			intro : "",
			position: "left",
		}, {
			element : "#tDeclareLine",
			intro : "",
			position : "top"	
		}, {
			element : "#tBox",
			intro : "",
			animateStep : "tBoxAnimate",
			position : "top"
		}, {
			element : "#tAssignLine",
			intro : "",
			position : "top"
		}, {
			element : "#tBox",
			intro : "",
			animateStep : "tBoxValueAnimate",
			position : "top"
		}, {
			element : "#xLine",
			intro : ""
		}, {
			element : "#xBox",
			intro : "",
			position : "top"
		}, {
			element : "#yLine",
			intro : "",
			position : "top"
		}, {
			element : "#yBox",
			intro : "",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}, {
			element : "#printAfterSwapInSwap",
			intro : ""
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#swapMethodCloseBrace",
			intro : ""
		}, {
			element : "#animationDiv",
			tooltipClass: "hide"
		}, {
			element : "#printAfterSwapInMain",
			intro : ""
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#restartBtn",
			intro : "Click to Restart.",
			position : "right"
		} ]});

	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "preCode":
			var typingContent = 'Let us learn <span class="ct-code-b-yellow">Call By Reference</span>.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "swapDeclareLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement declares a <span class="ct-code-b-yellow">swap()</span> method with two arguments of type '
									+ '<span class="ct-code-b-yellow">int</span>. The <span class="ct-code-b-yellow">int</span> '
									+ 'is a keyword used when a method  returns  a value.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "mainMethodBlock":
			var typingContent = 'This is the <span class="ct-code-b-yellow">main()</span> block where the program execution begins.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "mainMethodBox":
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$('.introjs-helperLayer').one('transitionend', function () {
				TweenMax.to($('#mainMethodBox'), 1, {opacity: 1});
					$('#mainId').removeClass('opacity00');
					svgAnimatingLineRightToLeft("#animationDiv", "#mainId", "#abBox", '#svgId', 'svgLine1', 'arrow', function() {
						$('.introjs-nextbutton').show();
					});
			});
			break;
		case "aLine":
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'A variable <span class="ct-code-b-yellow">a</span> of type <span class="ct-code-b-yellow">int</span> is '
									+ 'initialized with value <span class="ct-code-b-yellow">' + $('#valueOfA').text() + '</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "aBox":
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$('.introjs-helperLayer').one('transitionend', function () {
				TweenMax.to($('#mainMethodBox'), 1, {opacity: 1});
				var typingContent = 'As <span class="ct-code-b-yellow">a</span> is of type ' +
									'<span class="ct-code-b-yellow">int</span>, it occupies <span class="ct-code-b-yellow">2 bytes</span> ' +
									'of memory with some address. Let us assume the address to be ' +
									'<span class="ct-code-b-yellow">' + $('#aAddress').text() + 
									'</span>.</br> The variable <span class="ct-code-b-yellow">a</span> is initialized with value ' + 
									'<span class="ct-code-b-yellow">' + $('#valueOfA').text() + '</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationABox()'>" + 
															"Next &#8594;</a>");
				});
			});
			break;
		case "bLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'A variable <span class="ct-code-b-yellow">b</span> of type <span class="ct-code-b-yellow">int</span>  is '
									+ 'initialized with value <span class="ct-code-b-yellow">' + $('#valueOfB').text() + '</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "bBox":
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$('.introjs-helperLayer').one('transitionend', function () {
				TweenMax.to($('#mainMethodBox'), 1, {opacity: 1});
				var typingContent = 'As the variable <span class="ct-code-b-yellow">b</span> is of type ' +
									'<span class="ct-code-b-yellow">int</span>, it occupies <span class="ct-code-b-yellow">2 bytes</span> ' +
									'of memory with some address. Let us assume the address to be ' +
									'<span class="ct-code-b-yellow">' + $('#bAddress').text()  + 
									'</span>.</br>The variable <span class="ct-code-b-yellow">b</span> is initialized with  value ' + 
									'<span class="ct-code-b-yellow">' + $('#valueOfB').text() + '</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationBBox()'>" + 
															"Next &#8594;</a>");
				});
			});
			break;
		case "printBeforeSwapInMain":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">values</span> of '
									+ '<span class="ct-code-b-yellow">a</span>, <span class="ct-code-b-yellow">b</span> before we call the '
									+ '<span class="ct-code-b-yellow">swap()</span> method declared earlier.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var selector = $('.output-console-body > .visibility-hidden').eq(0);
				var typingContent = selector.removeClass('visibility-hidden').html();
				typing(selector, typingContent, 30, 'white', function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				});
				
			});
			break;
		case "swapLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This is a method call <span class="ct-code-b-yellow">swap()</span>, we pass two parameters  ' +
									'<span class="ct-code-b-yellow">a</span>, <span class="ct-code-b-yellow">b</span> to the method. '+
									'Here the values of <span class="ct-code-b-yellow">a</span> and <span class="ct-code-b-yellow">b</span> ' +
									'are passed to the method.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "swapMethodBlock":
			var typingContent = 'The <span class="ct-code-b-yellow">swap()</span> method takes two <span class="ct-code-b-yellow">int</span> ' +
								'variables <span class="ct-code-b-yellow">x</span>, <span class="ct-code-b-yellow">y</span> and they ' +
								'are assigned with the values passed when the method is called. Here the values of a and b are ' +
								'<span class="ct-code-b-yellow">' + $('#aValue').text() + '</span>, <span class="ct-code-b-yellow">' + 
								$('#bValue').text() + '</span> .';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "swapAnimationDiv":
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$('.introjs-helperLayer').one('transitionend', function () {
				TweenMax.to($('#swapAnimationDiv'), 1, {opacity: 1});
					$('#swapId').removeClass('opacity00');
					svgAnimatingLineRightToLeft("#animationDiv", "#swapId", "#xyBox", '#svgId', 'svgLine2', 'arrow', function() {
						var typingContent = 'The <span class="ct-code-b-yellow">swap()</span> method takes two parameters of type '
											+ '<span class="ct-code-b-yellow">int</span> <span class="ct-code-b-yellow">x</span>, '
											+ '<span class="ct-code-b-yellow">y</span> and these variables are assigned with values of '
											+ '<span class="ct-code-b-yellow">a</span>, <span class="ct-code-b-yellow">b</span> respectively.'
											+ 'In swap() method a, b are the dummy parameters and alias names for x and y throughout process.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationSwap()'>" + 
																	"Next &#8594;</a>");
							});
					});
				
			});
			break;
		case "tDeclareLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'A temporary variable of type <span class="ct-code-b-yellow">int</span> is declared '
									+ '<span class="ct-code-b-yellow">t</span>. It will be used to store the temporary value when '
									+ 'the values are swapped.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "tBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "tBoxAnimate":
					var typingContent = 'Here, the variable <span class="ct-code-b-yellow">t</span> is of type '
										+ '<span class="ct-code-b-yellow">int</span> and it occupies <span class="ct-code-b-yellow">'
										+ '2 bytes</span> of memory.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationTBox()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "tBoxValueAnimate":
					var typingContent = 'Here the value of <span class="ct-code-b-yellow">t</span> is assigned with the value of '
										+ '<span class="ct-code-b-yellow">x</span>  (i.e. <span class="ct-code-b-yellow">' 
										+ $('#xValue').text() + '</span>).';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationTBoxValue()'>" + 
																"Next &#8594;</a>");
					});
					break;
				}
			});
			break;
		case "tAssignLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The variable <span class="ct-code-b-yellow">t</span> is assigned with the value of '
									+ '<span class="ct-code-b-yellow">x</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "xLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The variable <span class="ct-code-b-yellow">x</span> is assigned with the value of '
									+ ' <span class="ct-code-b-yellow">y</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "xBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The value of <span class="ct-code-b-yellow">y</span> is now assigned to <span class="ct-code-b-yellow">' 
									+ 'x</span> (i.e. <span class="ct-code-b-yellow">' + $('#yValue').text() + '</span>).';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationXBoxValue()'>" + 
															"Next &#8594;</a>");
				});
			});
			break;
		case "yLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The variable <span class="ct-code-b-yellow">y</span> is assigned with the value of '
									+ ' <span class="ct-code-b-yellow">t</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "yBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The value of <span class="ct-code-b-yellow">t</span> is now copied to <span class="ct-code-b-yellow">y</span> '
									+ '(i.e. <span class="ct-code-b-yellow">' + $('#tValue').text() + '</span>).';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationYBoxValue()'>" + 
															"Next &#8594;</a>");
				});
			});
			break;
		case "printAfterSwapInSwap":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">values</span> of <span class="ct-code-b-yellow">' 
									+ 'x</span>, <span class="ct-code-b-yellow">y</span>. Now, after the method call '
									+ '<span class="ct-code-b-yellow">swap()</span>, the values have been interchanged.'
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "swapMethodCloseBrace":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'On completion of the  <span class="ct-code-b-yellow">swap()</span> method, all the local variables '
									+ '<span class="ct-code-b-yellow">x</span>, <span class="ct-code-b-yellow">y</span> and '
									+ '<span class="ct-code-b-yellow">t</span> are destroyed.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "animationDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				TweenMax.to($('#swapMethodBox, #svgLine2, #svgLine3, #svgLine4'), 1, {opacity: 0, onComplete: function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				}});
			});
			break;
		case "printAfterSwapInMain":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">values</span> of ' 
									+ '<span class="ct-code-b-yellow">a</span>, <span class="ct-code-b-yellow">b</span> after the ' +
									'<span class="ct-code-b-yellow">swap()</span> method '
									+ 'call. <br/>Notice that the method call has  not swapped the values of a and b.This is how '
									+ '<span class="ct-code-b-yellow">call by value</span> method works.The method call sends a copy of the values.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "restartBtn":
			$('.introjs-tooltip').css({'min-width' : '120px'});
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

function animationABox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#aBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#aBox').removeClass('animated zoomIn');
		$('#valueOfA').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#valueOfA').removeClass('circle-css');
			$('#aValue').text($('#valueOfA').text());
			fromEffectWithTweenMax('#valueOfA', '#aValue', function() {
				$('.introjs-nextbutton').show();
			});
		});
	});
}

function animationBBox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#bBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#bBox').removeClass('animated zoomIn');
		$('#valueOfB').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#valueOfB').removeClass('circle-css');
			$('#bValue').text($('#valueOfB').text());
			fromEffectWithTweenMax('#valueOfB', '#bValue', function() {
				$('.introjs-nextbutton').show();
			});
		});
	});
}

function animationSwap() {
	$('.introjs-duplicate-nextbutton').hide();
	animationXBox();
	animationYBox();
//	$('.introjs-nextbutton').show();
}

function animationXBox() {
	$('#xBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#xBox').removeClass('animated zoomIn');
		$('#aValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#aValue').removeClass('circle-css');
			$('#xValue').text($('#aValue').text());
			//fromEffectWithTweenMax('#aValue', '#xValue', function() {  
			//svgAnimatingLineRightToLeft("#animationDiv", "#mainId", "#abBox", '#svgId', 'svgLine1', 'arrow', function() {
			svgAnimatingLineBottomToTop("#animationDiv", '#xBox', '#aVal', '#svgId', 'svgLine3', 'arrow', function() {
					$('.introjs-nextbutton').show();
				});
			//});
		});
	});
}

function animationYBox() {
	$('#yBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#yBox').removeClass('animated zoomIn');
		$('#bValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#bValue').removeClass('circle-css');
			$('#yValue').text($('#bValue').text());
			//fromEffectWithTweenMax('#bValue', '#yValue', function() {
			svgAnimatingLineBottomToTop("#animationDiv", "#yBox", "#bVal", '#svgId', 'svgLine4', 'arrow', function() {
					$('.introjs-nextbutton').show();
				});
			//});
		});	
	});
}

function animationTBox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#tBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#tBox').removeClass('animated zoomIn');
		$('.introjs-nextbutton').show();
	});
}

function animationTBoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	TweenMax.fromTo('#xValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
									{ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 2, onComplete: function() {
		TweenMax.fromTo($('#svgLine3').eq(0), 0.5, {ease: Sine.easeInOut, stroke: 'red'}, {ease: Sine.easeInOut, stroke: 'black', repeat: 2});
		TweenMax.fromTo($('#svgLine3 #arrow'), 0.5, {ease: Sine.easeInOut, fill: 'red'},
												{ease: Sine.easeInOut, fill: 'black', repeat: 2, onComplete: function() {
			TweenMax.fromTo('#aValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
											{ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 2, onComplete: function() {
				$('#aValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
					$('#aValue').removeClass('circle-css');
					$('#tValue').text($('#aValue').text());
					fromEffectWithTweenMax('#aValue', '#tValue', function() {
						$('.introjs-nextbutton').show();
					});
				});
			}});
		}});
	}});
}

function animationXBoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#yVal').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
		TweenMax.fromTo($('#svgLine4').eq(0), 0.5, {ease: Sine.easeInOut, stroke: 'red'}, {ease: Sine.easeInOut, stroke: 'black', repeat: 2});
		TweenMax.fromTo($('#svgLine4 #arrow'), 0.5, {ease: Sine.easeInOut, fill: 'red'},
											  {ease: Sine.easeInOut, fill: 'black', repeat: 2, onComplete: function() {
			  TweenMax.fromTo('#bValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
					  						  {ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 2, onComplete: function() {
					$('#bValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
							$('#bValue').removeClass('circle-css');
							$('#bValue').text($('#bValue').text());
							bounceFromEffextWithTimelineMax('#bValue', '#aValue', function() {
								$('.introjs-nextbutton').show();
								$('#yVal').removeClass('circle-css')
							});
							
						});
			  }});
		}});
	});
}

function animationYBoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#tValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
		/*TweenMax.fromTo($('#svgLine3').eq(0), 0.5, {ease: Sine.easeInOut, stroke: 'red'}, {ease: Sine.easeInOut, stroke: 'black', repeat: 2});
		TweenMax.fromTo($('#arrowEnd3'), 0.5, {ease: Sine.easeInOut, fill: 'red'},
											  {ease: Sine.easeInOut, fill: 'black', repeat: 2, onComplete: function() {*/
			  TweenMax.fromTo('#tValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
					  						  {ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 2, onComplete: function() {
					$('#tValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
							$('#tValue').removeClass('circle-css');
							//$('#bValue').text($('#tValue').text());
							bounceFromEffextWithTimelineMax('#tValue', '#bValue', function() {
								$('.introjs-nextbutton').show();
								$('#tVal').removeClass('circle-css')
							});
							
						});
			  }});
//		}});
	});
}

//svg line function
function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute("class", "marker");
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'black';
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

function svgAnimatingLineRightToLeft(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineLeftToRight(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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

function svgAnimatingLineBottomToTop(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineTopToBottom(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}