var typingInterval = 5;
var arr = [];
var usageOfFreeFunctionReady = function() {
	introGuide();
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	var maxNumberOfInputs = 2;
	var maxLengthOfInput = 2;
	$('.console-input-line').on("keydown", function(e) {
		if (arr.length == maxNumberOfInputs) {
			if (e.keyCode == 32) {
				e.preventDefault();
			}
		}
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 32, 35, 36, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
	
	$('.console-input-line').on("keyup", function(e) {
		$('.length-error-text').remove();
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
												"Please enter " + maxNumberOfInputs + " numbers and separate each with a space.</span>");
		}
		var givenText = $(this).text();
		var splittedText = givenText.split(" ");
		arr = [];
		
		$.each(splittedText, function(idx, val) {
			if (val != '') {
				arr.push(val);
			}
		});
		
		if (arr.length < maxNumberOfInputs) {
			$(".introjs-nextbutton").hide();
		} else if (arr.length == maxNumberOfInputs) {
			$(".introjs-nextbutton").show();
		}
		
		$.each(arr, function(idx, val) {
			if (val.length > maxLengthOfInput) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
														"Please limit the number length to " + maxLengthOfInput + ".</span>");
				$(".introjs-nextbutton").hide();
			}
		});
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
			element :'#infoDiv',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#preCode',
			intro : '',
		}, {
			element : '#firstExLine1',
			intro : '',
		}, {
			element : '#pBox',
			intro : '',
		}, {
			element : '#firstExLine2',
			intro : '',
		}, {
			element : '#firstMemoryAllocation',
			intro : '',
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'tweenmaxSvg'
		}, {
			element : '#firstExLine3',
			intro : '',
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'tweenmax'
		}, {
			element : '#firstExLine4',
			intro : '',
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'freeAction',
		}, {
			element : '#preCodeTwo',
			intro : '',
		}, {
			element : '#secondExLine1',
			intro : '',
		}, {
			element : '#rBox',
			intro : '',
		}, {
			element : '#secondExLine2',
			intro : '',
		}, {
			element : '#arrayDiv',
			intro : '',
		}, {
			element : '#secondEx1',
			intro : '',
			animateStep: 'tweenmaxAnimation',
		}, {
			element : '#secondExLine3',
			intro : '',
		}, {
			element : '#secondEx1',
			intro : '',
			animateStep: 'freeAction',
		}, {
			element :'#restart',
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv':
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$("#list3").fadeTo(300, 1, function() {
						$("#list4").fadeTo(300, 1, function() {
							$('#nextButton').fadeTo(500, 1, function() {
								$('.user-btn').click(function() {
									$('.user-btn').remove();
										introjs.nextStep();
								});
							});
						});
					});
				});
			});	
			break;
		case 'preCode':
			introjs.refresh();
			$("#infoDiv").addClass("z-index9999999");
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleOne").removeClass("opacity00");
				var typingContent = "Let us consider an example.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					TweenMax.to($("#preCode"), 1, {opacity: 1, onComplete: function() {
						$(".introjs-nextbutton").show();
					}});
				});
			});
			break;
		case 'firstExLine1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "A pointer variable <span class='ct-code-b-yellow'>p</span> is declared of datatype " +
									"<span class='ct-code-b-yellow'>int</span>. " +
									"An int pointer variable, should always point to an <span class='ct-code-b-yellow'>int</span> value."; 
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();	
				});
			});
			break;
		case 'pBox':
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$("#totalfirstExDiv").removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The pointer variable <span class='ct-code-b-yellow'>p</span> is of type <span class='ct-code-b-yellow'>int</span> " +
									"and it occupies <span class='ct-color-lime'>2 bytes</span> of memory with some address. " +
									"Let us assume this address to be <span class='ct-code-b-yellow'>1258</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						boxAnimation("#pBox", function() {
							$(".introjs-nextbutton").show();
						});
					});
				});;
			});
			break;
		case 'firstExLine2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent =	"<ul><li> A <span class='ct-code-b-yellow'>new</span> operator returns the pointer to the " + 
							"<span class='ct-code-b-yellow'>base address</span> of the <span class='ct-code-b-yellow'>heap memory</span> allocated." + 
							"</li><li>A <span class='ct-code-b-yellow'>new</span> operator always returns a <span class='ct-code-b-yellow'>" +
							"void</span> pointer. So a typecast should be done to the datatype of the pointer.</li></ul>";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'firstMemoryAllocation':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The size of memory allocated is <span class='ct-color-lime'>4 bytes</span> in " + 
							"<span class='ct-code-b-yellow'>heap memory</span>, " +
							"as the sizeof operator has return <span class='ct-color-lime'>4 bytes</span> for the <span class='ct-code-b-yellow'>" +
							"int</span> datatype. " +
							"Let us assume the address as <span class='ct-code-b-yellow'>1054</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					boxAnimation("#firstMemoryAllocation", function() {
						$(".introjs-nextbutton").show();
					});
				});
			});
			break;
		case 'firstExLine3':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "Here the <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>*p</span> is " +
							"assigned a value of <span class='ct-code-b-yellow'>20</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'firstExLine4':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The <span class='ct-code-b-yellow'>delete</span> operator is used to free the allocated memory by the " +
				"<span class='ct-code-b-yellow'>new</span> operator. This operator returns a " +
				"<span class='ct-code-b-yellow'>NULL</span> value that is stored int the pointer variable <span class='ct-code-b-yellow'>p</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'firstExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'tweenmaxSvg':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "So the address is stored into the variable <span class='ct-code-b-yellow'>p</span> i.e. " +
								"<span class='ct-code-b-yellow'>1054</span> is stored.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
						tweenmaxAnimation("#newAddress", "#cValue");
					});
				});
				break;
			case 'tweenmax':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "The <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>p</span> is " +
								"pointed to the address <span class='ct-code-b-yellow'>1054</span>.<br>" +
								"<span class='ct-code-b-yellow'>*p</span> represents value at that address. " +
								"So the value <span class='ct-code-b-yellow'>20</span> is stored at " +
								"<span class='ct-code-b-yellow'>1054</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
						tweenmaxValueAnimation("#pValue", "#Value");
					});
				});
				break;
			case 'freeAction':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "Here the heap memory is freed and it returns a <span class='ct-code-b-yellow'>NULL</span> value.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							bounceFromEffectWithTimelineMax("#cValue", function() {
								$("#firstMemoryAllocation").effect( "highlight", {color:"red"}, 1000, function() {
									TweenMax.to($("#svg1, #firstMemoryAllocation"), 1, {opacity: 0, onComplete: function() {
										$(".introjs-nextbutton").show();
									}});
								});
							});
						});
					});
				});
				break;
			}
			break;
		case 'preCodeTwo':
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#secondDivExample").removeClass("opacity00");
				var typingContent = "Let us learn the usage of function <span class='ct-code-b-yellow'>delete</span> in " +
				"this sample code.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
					TweenMax.to($("#preCodeTwo"), 1, {opacity: 1, onComplete: function() {
						$(".introjs-nextbutton").show();
					}});
				});
			});
			break;
		case 'secondExLine1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent =  "A pointer variable <span class='ct-code-b-yellow'>p</span> is declared of datatype " +
							"<span class='ct-code-b-yellow'>int</span>. " +
							"An int pointer variable, should always point to an <span class='ct-code-b-yellow'>int</span> value." 
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'rBox':
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$("#secondExMemory").removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The variable pointer <span class='ct-code-b-yellow'>p</span> is of type <span class='ct-code-b-yellow'>int</span> " +
							"and it occupies <span class='ct-color-lime'>2 bytes</span> of memory with some address. " +
							"Let us assume this address to be <span class='ct-code-b-yellow'>2024</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
					boxAnimation("#rBox", function() {
						$(".introjs-nextbutton").show();
					});
				});
			});
			break;
		case 'secondExLine2':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#dataTypeInt5").addClass("blinking");
				var typingContent = "<ul><li> A <span class='ct-code-b-yellow'>new</span> operator returns the pointer to the " + 
							"<span class='ct-code-b-yellow'>base address</span> of the <span class='ct-code-b-yellow'>heap memory</span> allocated." + 
							"</li><li>A <span class='ct-code-b-yellow'>new</span> operator always returns a <span class='ct-code-b-yellow'>" +
							"void</span> pointer. So a typecast should be done to the datatype of the pointer.</li></ul>"; 
				typing('.introjs-tooltiptext',typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'arrayDiv':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent =  "Each location occupies <span class='ct-color-lime'>2 bytes</span> of memory, " + 
								"a total of <span class='ct-color-lime'>10 bytes</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						boxAnimation("#arrayDiv", function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
		case 'secondExLine3':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The <span class='ct-code-b-yellow'>delete</span> operator is used to free the allocated memory by the " +
				"<span class='ct-code-b-yellow'>new</span> operator. This operator returns a " +
				"<span class='ct-code-b-yellow'>NULL</span> value that is stored int the pointer variable <span class='ct-code-b-yellow'>p</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;

		case 'secondEx1':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'tweenmaxAnimation':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "Here, the base address is stored in pointer variable <span class='ct-code-b-yellow'>p</span>. <br>" +
					"i.e. <span class='ct-code-b-yellow'>1924</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							tweenmaxAnimation1("#firstAddressId", "#dValue");
						});
					});
				});
				break;
			case 'freeAction':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "Here the heap memory is freed and it returns a <span class='ct-code-b-yellow'>NULL</span> value.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							bounceFromEffectWithTimelineMax("#dValue", function() {
								$("#secondMemoryAllocation").effect( "highlight", {color:"red"}, 1000, function() {
									TweenMax.to($("#svg2, #secondMemoryAllocation"), 1, {opacity: 0, onComplete: function() {
										$(".introjs-nextbutton").show();
									}});
								});
							});
						});
					});
				});
				break;
			}
			break;
		case 'restart':
			$(".introjs-tooltip").css({"min-width" : "110px"});
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
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

function boxAnimation(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
function tweenmaxValueAnimation(selector1, selector2) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector1).addClass("css-circle").effect( "highlight", {color:"white"}, 1000, function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("css-circle");
		TweenMax.from(selector2, 1.5, {top: topLength, left: leftLength, onComplete: function() {
			$(".introjs-nextbutton").show();
		}});
	});
}

function tweenmaxAnimation1(selector1, selector2) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector1).effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$(selector2).removeClass("opacity00");
		TweenMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
			$(".user-btn").click(function() {
				$(".user-btn").remove();
				var typingContent ="As the base address of the allocated <span class='ct-code-b-yellow'>heap memory</span> " +
									"is stored in <span class='ct-code-b-yellow'>p</span>, it can be accessed using pointer " +
									"<span class='ct-code-b-yellow'>p</span> <br>i.e., value stored from " +
									"<span class='ct-code-b-yellow'>1924</span> location.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					svgAppend($('#secondEx1'), 'svg2');
					svgMarkerAppend($('#svg2'), 'marker2');
					svgAnimatingLine($('#secondEx1'), $('#memoryBox3'), $('#memoryBox4'), $('#svg2'), 'svgLine2', 'marker2', function() {	
						$(".introjs-nextbutton").show();
					});	
				});
			});
		}});
	});
}
function tweenmaxAnimation(selector1, selector2) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector1).effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$(selector2).removeClass("opacity00");
		TweenMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
			$(".user-btn").click(function() {
				$(".user-btn").remove();
				var typingContent = "Here the <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>p</span> has the " +
							"address of the <span class='ct-code-b-yellow'>dynamic memory</span> allocated, so it can access the " +
							"value at <span class='ct-code-b-yellow'>1054</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					svgAppend($('#firstExDiv'), 'svg1');
					svgMarkerAppend($('#svg1'), 'marker1');
					svgAnimatingLine($('#firstExDiv'), $('#memoryBox1'), $('#memoryBox2'), $('#svg1'), 'svgLine1', 'marker1', function() {	
						$(".introjs-nextbutton").show();
					});	
				});
			});
		}});
	});
}

function charAtEnd(element) {
	element.focus();
	if (typeof window.getSelection != "undefined"&& typeof document.createRange != "undefined") {
		var range = document.createRange();
		range.selectNodeContents(element);
		range.collapse(false);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	}    	   
}

function bounceFromEffectWithTimelineMax(selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var l2 = $(selector2).offset();
	$(selector2).parent().append('<span id="temp" style="position: absolute;"></span>');
	$('#temp').offset({top: l2.top, left: l2.left}).text($(selector2).text());
	$(selector2).text("NULL");
	timelineMax.staggerFrom(selector2, 1, {ease:  Bounce.easeOut, opacity:1, top:-45, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}}).to('#temp', 1, { ease: Sine.easeOut, top: "-=100", opacity: 0, onComplete: function() {
		$('#temp').remove();
	}}, "-=2");
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

function svgAnimatingLine(parentSelector, selector1, selector2, svgId, svgLineId, svgMarkerId, callBackFunction) {
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