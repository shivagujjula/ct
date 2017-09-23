var introjs;
var typingInterval = 10;
function arrayOfPointersReady() {
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
			element : "#array1",
			intro : ""
		}, {
			element : "#table1",
			intro : ""
		}, {
			element : "#array2",
			intro : ""
		}, {
			element : "#table2",
			intro : ""
		}, {
			element : "#table2Box",
			intro : ""
		}, {
			element : "#preCode",
			intro : ""
		}, {
			element : "#intLine",
			intro : ""
		}, {
			element : "#animationBox",
			tooltipClass: "hide",
			animateStep: 'variables'
		}, {
			element : "#a0Line",
			intro : "",
			elementNumber: '0'
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'a0Line'
		}, {
			element : "#a1Line",
			intro : "",
			elementNumber: '1'
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'a1Line'
		}, {
			element : "#printf1",
			tooltipClass: "hide"
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'printf1',
			elementNumber: '0'
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf2",
			tooltipClass: "hide"
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'printf2',
			elementNumber: '1'
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf3",
			tooltipClass: "hide"
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'printf3',
			elementNumber: '0'
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf4",
			tooltipClass: "hide"
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'printf4',
			elementNumber: '1'
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf5",
			tooltipClass: "hide"
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'printf5',
			elementNumber: '0'
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf6",
			tooltipClass: "hide"
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'printf6',
			elementNumber: '1'
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#restartBtn",
			intro : "Click to Restart",
			position : "right"
		} ]});

	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var elementNumber = parseInt(introjs._introItems[introjs._currentStep].elementNumber);
		switch (elementId) {
		case "array1":
			var typingContent = 'Lets declare an int array <span class="ct-code-b-yellow">a</span> of size <span class="ct-code-b-yellow">3</span>.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "table1":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#table1').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
					$('#table1').removeClass('animated zoomIn');
					var typingContent = 'Here  <span class="ct-code-b-yellow">a</span> is assigned with values ' +
										'<span class="ct-code-b-yellow">{10, 20, 30}</span> ' +
										'at <span class="ct-code-b-yellow">0, 1, 2</span> indices.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationTable1Values()'>" + 
																"Next &#8594;</a>");
					});
				});
			});
			break;
		case "array2":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Now declare an int <span class="ct-code-b-yellow">pointer</span> array <span class="ct-code-b-yellow">a</span> ' +
									'of size <span class="ct-code-b-yellow">3</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "table2":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#table2').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
					$('#table2').removeClass('animated zoomIn');
					var typingContent = 'Here  <span class="ct-code-b-yellow">a</span> is assigned with addresses ' +
										'<span class="ct-code-b-yellow">{1086, 2086, 3086}</span> ' +
										'at <span class="ct-code-b-yellow">0, 1, 2</span> indices.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
		case "table2Box":
			var content = 'Here  <span class="ct-code-b-yellow">a</span> is assigned with ' +
							'<span class="ct-code-b-yellow">{1086, 2086, 3086}</span> ' +
							'at <span class="ct-code-b-yellow">0, 1, 2</span> indices.';
			introjs._introItems[introjs._currentStep].intro = content;
			$('.introjs-helperLayer').one('transitionend', function () {
				var parentSelector = $('#table2Box');
				svgAppend(parentSelector, 'svg1');
				var svgId = $('#svg1');
				var svgMarkerId = 'markerEnd1';
				svgMarkerAppend(svgId, svgMarkerId)
				animatingTable2Boxes(1, parentSelector, svgId, 'svgLine11', svgMarkerId);
				animatingTable2Boxes(2, parentSelector, svgId, 'svgLine12', svgMarkerId);
				animatingTable2Boxes(3, parentSelector, svgId, 'svgLine13', svgMarkerId, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "preCode":
			$('#box1, #box2').toggleClass('display-none');
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Now let us learn <span class="ct-code-b-yellow">Array of Pointers</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "intLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'We declare <span class="ct-code-b-yellow">pointer</span> array <span class="ct-code-b-yellow">a</span> of size ' +
									'<span class="ct-code-b-yellow">2</span>. Two int variables <span class="ct-code-b-yellow">f1</span> and ' +
									'<span class="ct-code-b-yellow">f2</span> are initialized with <span class="ct-code-b-yellow">10</span> and ' +
									'<span class="ct-code-b-yellow">20</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "animationBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "variables":
					$('#animationBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
						$('#animationBox').removeClass('animated zoomIn');
						animatingVariable(1);
						animatingVariable(2, function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 1300);
						});
					});
					break;
				case "a0Line":
					var parentSelector = $('#animationBox');
					svgAppend(parentSelector, 'svg2');
					var svgId = $('#svg2');
					var svgMarkerId = 'markerEnd2';
					svgMarkerAppend(svgId, svgMarkerId);
					var typingContent = 'The address of <span class="ct-code-b-yellow">f1</span> is assigned to ' +
										'<span class="ct-code-b-yellow">a[0]</span>. An <span class="ct-code-b-yellow">&</span> returns the ' +
										'address (i.e., <span class="ct-code-b-yellow">' + $('#f1Address').text() + '</span>).';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'" +
																"onclick=\"animationALine(1)\">Next &#8594;</a>");
					});
					break;
				case "a1Line":
					var typingContent = 'The address of <span class="ct-code-b-yellow">f2</span> is assigned to ' + 
										'<span class="ct-code-b-yellow">a[1]</span>. An <span class="ct-code-b-yellow">&</span> returns the' +
										' address (i.e., <span class="ct-code-b-yellow">' + $('#f2Address').text() + '</span>).';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'" +
																"onclick=\"animationALine(2)\">Next &#8594;</a>");
					});
					break;
				case "printf1":
				case "printf2":
					var typingContent = 'In <span class="ct-code-b-yellow">(a + ' + elementNumber + ')</span>, ' +
										'<span class="ct-code-b-yellow">a</span> ' +
										'is the base address of the array and <span class="ct-code-b-yellow">' + 
										elementNumber + '</span> represents subscript (or) index. This index is mutiplied with the '+
										'<span class="ct-code-b-yellow">scale factor</span> implicitly by the system.</br><br>' +
										'<span class="ct-lime-color">(a + ' + elementNumber + ') => (' + $('#a0Address').text() + 
										' + (' + elementNumber + ' * 2)) => ' + $('#a' + elementNumber + 'Address').text() + '</span>';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'" +
																"onclick='animationArrayAddress(" + elementNumber + ")'>Next &#8594;</a>");
					});
					break;
				case "printf3":
				case "printf4":
					var typingContent = '<span class="ct-code-b-yellow">(a + ' + elementNumber + ')</span> returns the address of ' +
										'<span class="ct-code-b-yellow">a[' + elementNumber + ']</span> and <br>' +
										'<span class="ct-code-b-yellow">*(a + ' + elementNumber + ')</span> ' +
										'returns the value at <span class="ct-code-b-yellow">a[' + elementNumber + ']</span>.</br><br>' +
										'<span class="ct-lime-color">*(a + ' + elementNumber + ') => *(' + $('#a0Address').text() + 
										' + (' + elementNumber + ' * 2)) => *(' + $('#a' + elementNumber + 'Address').text() + ') => ' +
										$('#a' + elementNumber + 'Value').text() + '</span>';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'" +
																"onclick='animationArrayValue(" + elementNumber + ")'>Next &#8594;</a>");
					});
					break;
				case "printf5":
				case "printf6":
					var typingContent = '<span class="ct-code-b-yellow">*(a + ' + elementNumber + ')</span> returns the value at ' +
										'<span class="ct-code-b-yellow">a[' + elementNumber + ']</span>. <br>' +
										'<span class="ct-code-b-yellow">*(*(a + ' + elementNumber + '))</span> ' +
										'returns the value at <br><span class="ct-code-b-yellow">*(a + ' + elementNumber + ')</span>.</br><br>' +
										'<span class="ct-lime-color">*(*(a + ' + elementNumber + ')) => *(*(' + $('#a0Address').text() + 
										' + (' + elementNumber + ' * 2))) => *(*(' + $('#a' + elementNumber + 'Address').text() + ')) => *(' +
										$('#a' + elementNumber + 'Value').text() + ') => ' + $('#f' + (elementNumber + 1) + 'Value').text() + '</span>';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'" +
																"onclick='animationFValue(" + elementNumber + ")'>Next &#8594;</a>");
					});
					break;
				}
			});
			break;
		case "a0Line":
		case "a1Line":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here <span class="ct-code-b-yellow">a[' + elementNumber + ']</span> is assigned with address of ' +
									'<span class="ct-code-b-yellow">f' + (elementNumber + 1) + '</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "printf1":
		case "printf2":
		case "printf3":
		case "printf4":
		case "printf5":
		case "printf6":
			$('.introjs-helperLayer').one('transitionend', function () {
				setTimeout(function() {
					introjs.nextStep();
				}, 1000);
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

function svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + svgMarkerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId, svgLineId, svgMarkerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function animationTable1Values() {
	$('.introjs-duplicate-nextbutton').remove();
	TweenMax.from($('#table1 .opacity00').removeClass('opacity00'), 1, {left: 150, opacity: 0, onComplete: function() {
		$('.introjs-nextbutton').show();
	}});
}

function animatingTable2Boxes(index, parentSelector, svgId, svgLineId, svgMarkerId, callBackFunction) {
	$('#table2' + index).toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#table2' + index).removeClass('animated zoomIn');
		TweenMax.from($('#address' + index), 1, {backgroundColor: 'blue', onComplete: function() {
			$('#value' + index).text($('#address' + index).text());
			fromEffectWithTweenMax($('#address' + index), $('#value' + index), function() {
				var selector1 = $('#table2 .td-value-css').eq(index - 1);
				var selector2 = $('#table2' + index + ' .td-value-css');
				svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId,
																		svgLineId, svgMarkerId, callBackFunction);
			});
		}});
	});
}

function animatingVariable(index, callBackFunction) {
	var elementVal = $('#f' + index + 'Val');
	var elementValue = $('#f' + index + 'Value');
	TweenMax.fromTo(elementVal.addClass('circle-css'), 1, {backgroundColor: '#FFFFFF'}, 
																		{backgroundColor: 'inherit', onComplete: function() {
		elementVal.removeClass('circle-css');
		elementValue.text(elementVal.text());
		fromEffectWithTweenMax(elementVal, elementValue, function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}});
}

function animationALine(index) {
	$('.introjs-duplicate-nextbutton').remove();
	var elementAddress = $('#f' + index + 'Address');
	var elementValue = $('#a' + (index - 1) + 'Value');
	TweenMax.from(elementAddress, 1, {backgroundColor: 'blue', onComplete: function() {
		elementValue.text(elementAddress.text());
		fromEffectWithTweenMax(elementAddress, elementValue, function() {
			var parentSelector = $('#animationBox');
			var svgId = $('#svg2');
			var svgLineId = 'svgLine2' + index;
			var svgMarkerId = 'markerEnd2';
			var selector1 = $('#aTable .td-value-css').eq(index - 1);
			var selector2 = $('#f' + index + 'Table .td-value-css');
			svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId, svgLineId, svgMarkerId, function() {
				$('.introjs-nextbutton').show();
			});
		});
	}});
}

function animationArrayAddress(index) {
	$('.introjs-duplicate-nextbutton').remove();
	var element = $('#a' + index + 'Address');
	TweenMax.from(element, 1, {backgroundColor: 'blue', repeat: 1, onComplete: function() {
		$('.output-console-body > .visibility-hidden').eq(0).append('<span class="ct-blue-color">' + element.text() + '</span>');
		setTimeout(function() {
			introjs.nextStep();
		}, 1000);
	}});
}

function animationArrayValue(index) {
	$('.introjs-duplicate-nextbutton').remove();
	var elementAddress = $('#a' + index + 'Address');
	var elementValue = $('#a' + index + 'Value');
	TweenMax.from(elementAddress, 1, {backgroundColor: 'blue', repeat: 1, onComplete: function() {
		TweenMax.from(elementValue, 1, {backgroundColor: 'blue', repeat: 1, onComplete: function() {
			$('.output-console-body > .visibility-hidden').eq(0).append('<span class="ct-blue-color">' + elementValue.text() + '</span>');
			setTimeout(function() {
				introjs.nextStep();
			}, 1000);
		}});
	}});
}

function animationFValue(index) {
	$('.introjs-duplicate-nextbutton').remove();
	var elementArrayAddress = $('#a' + index + 'Address');
	var elementArrayValue = $('#a' + index + 'Value');
	var elementFValue =  $('#f' + (index + 1) + 'Value');
	TweenMax.from(elementArrayAddress, 1, {backgroundColor: 'blue', repeat: 1, onComplete: function() {
		TweenMax.from(elementArrayValue, 1, {backgroundColor: 'blue', repeat: 1, onComplete: function() {
			TweenMax.from(elementFValue, 1, {backgroundColor: 'blue', repeat: 1, onComplete: function() {
				$('.output-console-body > .visibility-hidden').eq(0).append('<span class="ct-blue-color">' + elementFValue.text() + '</span>');
				setTimeout(function() {
					introjs.nextStep();
				}, 1000);
			}});
		}});
	}});
}