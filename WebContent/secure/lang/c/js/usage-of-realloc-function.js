var usageOfreallocFunctionReady = function() {
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
			animateStep : 'tweenmaxAnimation',
		}, {
			element : '#firstExLine3',
			intro : '',
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'reallocMemory'
		}, {
			element : '#preCodeTwo',
			intro : '',
		}, {
			element : '#secondExLine1',
			intro : '',
		}, {
			element : '#pBoxSecond',
			intro : '',
		}, {
			element : '#secondExLine2',
			intro : '',
		}, {
			element : '#arraySecondDiv',
			intro : '',
		}, {
			element : '#secondExDiv',
			intro : '',
			animateStep : 'tweenmaxAnimation'
		}, {
			element : '#secondExLine3',
			intro : '',
		}, {
			element : '#secondExDiv',
			intro : '',
			animateStep : 'memoryDecrease',
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
			$("#infoDiv").addClass('z-index9999999');
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'preCode':
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleOne").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Let us consider an example on <span class='ct-code-b-yellow'>increasing</span> the size of memory using " +
							"<span class='ct-code-b-yellow'>realloc()</span>.", function() {
					TweenMax.to($("#preCode"), 1, {opacity: 1, onComplete: function() {
						$("#preCode").removeClass("opacity00");
						$(".introjs-nextbutton").show();
					}});
				});
			});
			break;
		case 'firstExLine1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "A pointer variable <span class='ct-code-b-yellow'>p</span> is declared of datatype " +
							"<span class='ct-code-b-yellow'>int</span>. " +
							"An int pointer variable, should always point to an <span class='ct-code-b-yellow'>int</span> value."; 
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();	
				});
			});
			break;
		case 'pBox':
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$("#totalfirstExDiv").removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "The variable pointer <span class='ct-code-b-yellow'>p</span> is of type <span class='ct-code-b-yellow'>int</span> " +
							"and it occupies <span class='ct-color-lime'>2 bytes</span> of memory with some address. " +
							"Let us assume this address to be <span class='ct-code-b-yellow'>1258</span>.";
				typing('.introjs-tooltiptext', text, function() {
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
				var text = "<ul><li> A <span class='ct-code-b-yellow'>malloc()</span> function returns the pointer to the " + 
							"<span class='ct-code-b-yellow'>base address</span> of the <span class='ct-code-b-yellow'>heap memory</span> allocated." + 
							"</li><li>A <span class='ct-code-b-yellow'>malloc()</span> function always returns a <span class='ct-code-b-yellow'>" +
							"void</span> pointer. So a typecast should be done to the datatype of the pointer.</li></ul>";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'firstExLine3':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here <span class='ct-color-lime'>6 bytes</span> have been allocated by the <span class='ct-code-b-yellow'>" +
							"malloc()</span> function. This is <span class='ct-code-b-yellow'>increased</span> to " +
							"<span class='ct-color-lime'>12 bytes</span> by the <span class='ct-code-b-yellow'>realloc()</span> function.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'firstMemoryAllocation':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Each location occupies <span class='ct-color-lime'>2 bytes</span> of memory, " + 
							"a total of <span class='ct-color-lime'>6 bytes</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						TweenMax.to($("#firstMemoryAllocation"), 1, {opacity: 1, onComplete: function() {
							$(".introjs-nextbutton").show();
						}});
					});
				});
			});
			break;
		case 'firstExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'tweenmaxAnimation':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "So the base address is stored in pointer variable <span class='ct-code-b-yellow'>p</span>.<br>" +
							"i.e. <span class='ct-code-b-yellow'>1924</span>.", function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							tweenmaxAnimation("#firstAddressId", "#pValue", function() {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
								$(".user-btn").click(function() {
									$(".user-btn").remove();
									var text = "As the base address of the allocated <span class='ct-code-b-yellow'>heap memory</span> is stored in " +
									"<span class='ct-code-b-yellow'>p</span>, it can be accessed using pointer <span class='ct-code-b-yellow'>p</span>." +
									"<br>i.e., value stored from <span class='ct-code-b-yellow'>1924</span> location." ;
									typing('.introjs-tooltiptext', text, function() {
										svgAppend($('#firstExDiv'), 'svg1');
										svgMarkerAppend($('#svg1'), 'marker1');
										svgAnimatingLineSelector1RightSideToSelector2LeftSide($('#firstExDiv'), $('#memoryBox1'), $('#trBox1'), $('#svg1'), 'svgLine1', 'marker1', function() {	
											$(".introjs-nextbutton").show();
										});	
									});
								});
							});
						});
					});
				});
				break;
			case 'reallocMemory':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "Here, the memory has been <span class='ct-code-b-yellow'>increased</span> from " + 
							"<span class='ct-code-b-yellow'>3</span> to <span class='ct-code-b-yellow'>6</span> locations.", function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							$("#smallBox4, #smallBox5, #smallBox6").removeClass("border-invisible");
							$("#smallBox4, #smallBox5, #smallBox6").addClass("animated-border").one('animationend', function() {
								$("#smallBox4, #smallBox5, #smallBox6").off();
								$("#smallBox4, #smallBox5, #smallBox6").css("border-color", "gray");
								addressRecursion(4);
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
				$("#exampleTwo").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Let us consider an example on <span class='ct-code-b-yellow'>decreasing</span> the size of memory using " +
						"<span class='ct-code-b-yellow'>realloc()</span>.", function() {
					TweenMax.to($("#preCodeTwo"), 1, {opacity: 1, onComplete: function(){
						$("#preCodeTwo").removeClass("opacity00");
						$(".introjs-nextbutton").show();
					}});
				});
			});
			break;
		case 'secondExLine1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "A pointer variable <span class='ct-code-b-yellow'>p</span> is declared of datatype " +
							"<span class='ct-code-b-yellow'>int</span>. " +
							"An int pointer variable, should always point to an <span class='ct-code-b-yellow'>int</span> value."; 
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();	
				});
			});
			break;
		case 'pBoxSecond':
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$("#totalSecondExDiv").removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "The variable pointer <span class='ct-code-b-yellow'>p</span> is of type <span class='ct-code-b-yellow'>int</span> " +
							"and it occupies <span class='ct-color-lime'>2 bytes</span> of memory with some address. " +
							"Let us assume this address to be <span class='ct-code-b-yellow'>1112</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						boxAnimation("#pBoxSecond", function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
		case 'secondExLine2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "<ul><li> A <span class='ct-code-b-yellow'>malloc()</span> function returns the pointer to the " + 
							"<span class='ct-code-b-yellow'>base address</span> of the <span class='ct-code-b-yellow'>heap memory</span> allocated." + 
							"</li><li>A <span class='ct-code-b-yellow'>malloc()</span> function always returns a <span class='ct-code-b-yellow'>" +
							"void</span> pointer. So a typecast should be done to the datatype of the pointer.</li></ul>"; 
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'arraySecondDiv':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Each location occupies <span class='ct-color-lime'>2 bytes</span> of memory, " + 
							"a total of <span class='ct-color-lime'>12 bytes</span>."; 
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						boxAnimation("#arraySecondDiv", function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
		case 'secondExLine3':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "Here <span class='ct-color-lime'>14 bytes</span> have been allocated by the <span class='ct-code-b-yellow'>" +
							"malloc()</span> function. This is <span class='ct-code-b-yellow'>decreased</span> to " +
							"<span class='ct-code-b-yellow'>10 bytes</span> by the <span class='ct-code-b-yellow'>realloc()</span> function."; 
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'secondExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'tweenmaxAnimation':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "So the base address is stored in pointer variable <span class='ct-code-b-yellow'>p</span>.<br>" +
							"i.e., <span class='ct-code-b-yellow'>2012</span>.", function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							tweenmaxAnimation("#secondAddressId", "#pValueSecond", function() {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
								$(".user-btn").click(function() {
									$(".user-btn").remove();
									var text = "As the base address of the allocated <span class='ct-code-b-yellow'>heap memory</span> is stored in " +
									"<span class='ct-code-b-yellow'>p</span>, it can be accessed using pointer <span class='ct-code-b-yellow'>p</span>." +
									"<br>i.e., value stored from <span class='ct-code-b-yellow'>2012</span> location." ;
									typing('.introjs-tooltiptext', text, function() {
										svgAppend($('#secondExDiv'), 'svg2');
										svgMarkerAppend($('#svg2'), 'marker2');
										svgAnimatingLineSelector1RightSideToSelector2LeftSide($('#secondExDiv'), $('#memoryBox2'), $('#trBox2'), $('#svg2'), 'svgLine2', 'marker2', function() {	
											$(".introjs-nextbutton").show();
										});	
									});
								});
							});
						});
					});
				});
				break;
			case 'memoryDecrease':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "Here, the memory has been <span class='ct-code-b-yellow'>decreased</span> by " + 
								"<span class='ct-code-b-yellow'>2</span> locations.", function() { 
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							$("#secondExBox6, #secondExBox7").addClass("border-invisible");
							tweenmaxAddressOpacity(6);
						});
					});
				});
				break;
			}
			break;
		case 'restart':
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
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

function boxAnimation(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function tweenmaxAnimation(selector1, selector2, callBackFunction) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector1).effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$(selector2).removeClass("opacity00");
		TweenMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	});
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

function addressRecursion(i) {
	$("#addressBox" + i).removeClass("opacity00", function() {
		if (i < 6) {
			addressRecursion(++i);
		}
		else {
			elementRecursion(4);
		}
	});
}

function elementRecursion(i) {
	$("#element" + i).removeClass("opacity00", function() {
		if (i < 6) {
			elementRecursion(++i);
		}
		else {
			$(".introjs-nextbutton").show();
		}
	});
}

function tweenmaxElementOpacity(i) {
	$("#SecondExElement" + i).addClass("opacity00", function() {
	//TweenMax.to($("#SecondExElement" + i), 1, {opacity: 0}, function() {
		if (i < 7) {
			tweenmaxElementOpacity(++i);
		} else {
			$(".introjs-nextbutton").show();
		}
	});
}

function tweenmaxAddressOpacity(i) {
	$("#secondExAddressBox" + i).addClass("opacity00", function() {
	//TweenMax.to($("#secondExAddressBox" + i), 1, {opacity: 0}, function() {
		if (i < 7) {
			tweenmaxAddressOpacity(++i);
		} else {
			tweenmaxElementOpacity(6);
		}
	});
}
