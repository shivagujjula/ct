var typingInterval = 10;
function ArchitectureOfIotReady() {
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
			element : "#heading",
			intro : "",
			position : 'right'
		},{
			element :"#infoDiv",
			intro : "",
			tooltipClass : 'hide',
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
		case 'heading':
			var text = "Let us consider architecture of IoT."
			typing(".introjs-tooltiptext", text, typingInterval, function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'infoDiv':
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#infoDiv").removeClass("opacity00");
				tweenmaxAnimationFromTop("#mainDiv", "#deviceLayerId", function() {
					TweenMax.to($("#deviceLayerSptypinganTextDiv"), 1.5, {opacity: 1, onComplete: function() {
						zoomingEffect("#arduinoSymbol", function() {
							zoomingEffect("#raspberryPISymbol", function() {
								zoomingEffect("#carSymbol", function() {
									zoomingEffect("#mobileSymbol", function() {
										zoomingEffect("#sensorSymbol", function() {
											$("#deviceLayerId").popover({
												placement: 'left',
												html: true,
												trigger: 'focus',
												content: '<div id="popover1"></div>',
											}).popover('show');
											var text = "Device Layer.";
											typing("#popover1", text, typingInterval, function() {
												$('#popover1').append('<div class="popover-height">'+
												'<span class="introjs-button custom-btn" onclick="communicationLayerFunction()">Next &#8594;</span></div>');
											});
									//		communicationLayerFunction();
										});
									});
								});
							});
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

function communicationLayerFunction() {
	$(".introjs-button").hide();
	($("#popover1").parent()).css({"background-color":"lightgray", "color":"black"});
	svgAppend("#mainDiv", "svg");
	svgMarkerAppend("#svg", "arrow");
	svgAnimatingLineSelector1TopSideToSelector2BottomSide("#mainDiv", "#deviceLayerId", "#communicationLayerId", "#svg", "line1", "arrow");
		tweenmaxAnimationFromTop("#mainDiv", "#communicationLayerId", function() {
			TweenMax.to($("#communicationLayerSpanTextDiv"), 1.5, {opacity: 1, onComplete: function() {
				zoomingEffect("#tcpSymbol", function() {
					zoomingEffect("#httpSymbol", function() {
						zoomingEffect("#mqttSymbol", function() {
							$("#communicationLayerId").popover({
								placement: 'left',
								html: true,
								trigger: 'focus',
								content: '<div id="popover2"></div>',
							}).popover('show');
							var text = "Communication Layer.";
							typing("#popover2", text, typingInterval, function() {
								$('#popover2').append('<div class="popover-height">'+
								'<span class="introjs-button custom-btn" onclick="connectivityLayerFunction()">Next &#8594;</span></div>');
							});
						//	connectivityLayerFunction();
						});
					});
				});
			}});
	//	});
	});
}

function connectivityLayerFunction() {
//	svgMarkerAppend("#svg", "arrow2");
	$(".introjs-button").hide();
	($("#popover2").parent()).css({"background-color":"lightgray", "color":"black"});
	svgAnimatingLineSelector1TopSideToSelector2BottomSide("#mainDiv", "#communicationLayerId", "#connectivityLayerId", "#svg", "line2", "arrow");
		tweenmaxAnimationFromTop("#mainDiv", "#connectivityLayerId", function() {
			TweenMax.to($("#connectivityLayerSpanTextDiv"), 1.5, {opacity: 1, onComplete: function() {
				zoomingEffect("#wifiSymbol", function() {
					zoomingEffect("#zigbeeSymbol", function() {
						zoomingEffect("#gsmSymbol", function() {
							$("#connectivityLayerId").popover({
								placement: 'left',
								html: true,
								trigger: 'focus',
								content: '<div id="popover3"></div>',
							}).popover('show');
							var text = "Connectivity Layer.";
							typing("#popover3", text, typingInterval, function() {
								$('#popover3').append('<div class="popover-height">'+
								'<span class="introjs-button custom-btn" onclick="dataStorageLayerFunction()">Next &#8594;</span></div>');
							});
						//	dataStorageLayerFunction();
						});
					});
				});
			}});
		});
//	});
}

function dataStorageLayerFunction() {
//	svgMarkerAppend("#svg", "arrow3");
	$(".introjs-button").hide();
	($("#popover3").parent()).css({"background-color":"lightgray", "color":"black"});
	svgAnimatingLineSelector1TopSideToSelector2BottomSide("#mainDiv", "#connectivityLayerId", "#dataStorageLayerId", "#svg", "line3", "arrow");
		tweenmaxAnimationFromTop("#mainDiv", "#dataStorageLayerId", function() {
			TweenMax.to($("#dataStorageLayerSpanTextDiv"), 1.5, {opacity: 1, onComplete: function() {
				zoomingEffect("#databaseSymbol", function() {
					zoomingEffect("#cloudSymbol", function() {
						zoomingEffect("#hadoopSymbol", function() {
							$("#dataStorageLayerId").popover({
								placement: 'left',
								html: true,
								trigger: 'focus',
								content: '<div id="popover4"></div>',
							}).popover('show');
							var text = "Data Storage Layer.";
							typing("#popover4", text, typingInterval, function() {
								$('#popover4').append('<div class="popover-height">'+
								'<span class="introjs-button custom-btn" onclick="applicationLayerFunction()">Next &#8594;</span></div>');
							});
						//	applicationLayerFunction();
						});
					});
				});
			}});
		});
//	});
}

function applicationLayerFunction() {
//	svgMarkerAppend("#svg", "arrow3");
	$(".introjs-button").hide();
	($("#popover4").parent()).css({"background-color":"lightgray", "color":"black"});
	svgAnimatingLineSelector1TopSideToSelector2BottomSide("#mainDiv", "#dataStorageLayerId", "#applicationLayerId", "#svg", "line4", "arrow");
		tweenmaxAnimationFromTop("#mainDiv", "#applicationLayerId", function() {
			TweenMax.to($("#applicationLayerSpanTextDiv"), 1.5, {opacity: 1, onComplete: function() {
				zoomingEffect("#desktopSymbol", function() {
					zoomingEffect("#graphSymbol", function() {
						zoomingEffect("#userSymbol", function() {
							zoomingEffect("#meterSymbol", function() {
								$("#applicationLayerId").popover({
									placement: 'left',
									html: true,
									trigger: 'focus',
									content: '<div id="popover5"></div>',
								}).popover('show');
								var text = "Application Layer.";
								typing("#popover5", text, typingInterval, function() {
									$('#popover5').append('<div class="popover-height"><span class="introjs-button custom-btn">Next &#8594;</span></div>');
									$("#infoDiv").addClass("z-index");
									$(".custom-btn").on("click", function() {
										$(".introjs-button").hide();
										($("#popover5").parent()).css({"background-color":"lightgray", "color":"black"});
										introjs.nextStep();
									});
								});
								//	applicationLayerFunction();
							});
						});
					});
				});
			}});
		});
//	});
}

function tweenmaxAnimationFromTop(selector1, selector2, callBackFunction) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	$(selector2).removeClass("opacity00");
	TweenMax.from(selector2, 1, {top: topLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function typing(typingId, text, typingInterval, typingCallbackFunction) {
	$(typingId).typewriting(text, {
		"typing_interval": typingInterval,
		"cursor_color": 'white'
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
		}
	});
}

function zoomingEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '4');
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

//from selector1 Top side to selector2 Bottom side
function svgAnimatingLineSelector1TopSideToSelector2BottomSide(parentSelector, selector1, selector2, svgId, svgLineId, svgMarkerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = ($(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2) + 30;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = ($(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2) + 30;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
//  for each loop for zooming effect....
/* var arr=[];
$.each($("#deviceLayerId > div"),function(i, val) {
	arr.push($(val).attr('id'));
});
for(i = 1; i < $("#deviceLayerId > div").length; i++) {
} */