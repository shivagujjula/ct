var introjs;
var typingInterval = 5;

var callByValueReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
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
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
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
			intro : "",
			position : "right"
		}, {
			element : "#swapDeclareLine",
			intro : ""
		}, {
			element : "#mainMethodBlock",
			intro : ""
		}, {
			element : "#aLine",
			intro : ""
		}, {
			element : "#aBox",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element : "#bLine",
			intro : ""
		}, {
			element : "#bBox",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element : "#printBeforeSwapInMain",
			intro : ""
		}, {
			element : "#outputBox",
			intro : "",
			animateStep : "printBfr",
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
			tooltipClass : 'hide'
		}, {
			element : "#tDeclareLine",
			intro : ""
		}, {
			element : "#tBox",
			intro : "",
			animateStep : "tBoxAnimate",
			tooltipClass : 'hide'
		}, {
			element : "#tAssignLine",
			intro : ""
		}, {
			element : "#tBox",
			intro : "",
			animateStep : "tBoxValueAnimate",
			tooltipClass : 'hide'
		}, {
			element : "#xLine",
			intro : ""
		}, {
			element : "#xBox",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element : "#yLine",
			intro : ""
		}, {
			element : "#yBox",
			intro : "",
			tooltipClass : 'hide',
			position : "left"
		}, {
			element : "#printAfterSwapInSwap",
			intro : ""
		}, {
			element : "#outputBox",
			intro : "",
			animateStep : "swapAftr",
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
			intro : "",
			animateStep : "printAftr",
			tooltipClass: "hide"
		}, {
			element : '#end',
			intro : '',
			position : "right"
		}, {
			element : "#button",
			intro : "",
			position : "right"
		} ]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "aLine":
			TweenMax.to($('#mainMethodBox'), 1, {opacity: 0});
			$('#aBox').addClass("visibility-hidden");
			$('#aValue').text("");
			break;
		/*case "aBox":
			$('#aBox').addClass("visibility-hidden");
			$('#aValue').text(5);
			break;*/
		case "bLine":
			$('#bBox').addClass("visibility-hidden");
			$('#bValue').text("");
			$("#outputBox").addClass("opacity00");
			break;
	/*	case "bBox":
			$('#bBox').addClass("visibility-hidden");
			$('#bValue').text(10);
			break;*/
		case "printBeforeSwapInMain":
			$('#bfrSwap').addClass('visibility-hidden');
			$("#aBfr, #aConsVal,#bBfr, #bConsVal").addClass("opacity00");
			$("#outputBox").addClass("opacity00");
		case "printAfterSwapInSwap":
			$('#aftrSwap').addClass('visibility-hidden');
			$("#xAftr, #xConsVal,#yAftr, #yConsVal").addClass("opacity00");
			break;
		case "swapMethodBlock":
			$('#xBox, #yBox').addClass( "visibility-hidden");
			$('#xValue, #yValue').text("");
			break;
		case "tDeclareLine":
			$('#tBox').addClass("visibility-hidden");
			break;
		case "tAssignLine":
			$('#tValue').text("");
			break;
		case "xLine":
			$('#xValue').text(5);
			break;
		case "xBox":
			$('#xValue').text(5);
			break;
		case "yLine":
			$('#yValue').text(10);
			break;
		case "yBox":
			$('#yValue').text(10);
			break;
		case "tBox":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch (animateStep) {
			case "tBoxAnimate":
				$('#tBox').addClass('visibility-hidden')
				break;
			case "tBoxValueAnimate":
				$('#tValue').text("");
				break;
			}
			break;
		case "swapMethodCloseBrace":
			$("#swapMethodBox").css("opacity", 1);
			break;
		}
	});

	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			if (introjs._currentStep != 0) {
				$('.introjs-prevbutton').show();
			} 
			$('.introjs-nextbutton').show();
			return;
		}
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		var elementId = targetElement.id;
		switch (elementId) {
		case "preCode":
			var typingContent = 'Let us learn <span class="ct-code-b-yellow">Call By Value</span>.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
				$(".introjs-prevbutton").hide();
			});
			break;
		case "swapDeclareLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement declares a <span class="ct-code-b-yellow">swap()</span> method with two arguments of type '
									+ '<span class="ct-code-b-yellow">int</span>. The <span class="ct-code-b-yellow">int</span> '
									+ 'is a keyword used when a method returns a value.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "mainMethodBlock":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This is the <span class="ct-code-b-yellow">main()</span> block '+ 
									'where the program execution begins.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
			});
			break;
		case "aLine":
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'A variable <span class="ct-code-b-yellow">a</span> of type <span class="ct-code-b-yellow">int</span> is '
									+ 'initialized with value <span class="ct-code-b-yellow">' + $('#valueOfA').text() + '</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "aBox":
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					$('.introjs-tooltip').removeClass('hide');
					TweenMax.to($('#mainMethodBox'), 1, {opacity: 1});
					var typingContent = 'As <span class="ct-code-b-yellow">a</span> is of type ' +
										'<span class="ct-code-b-yellow">int</span>, it occupies '+
										'<span class="ct-code-b-yellow">2 bytes</span> of memory '+
										'with some address. Let us assume the address to be ' +
										'<span class="ct-code-b-yellow">' + $('#aAddress').text() + 
										'</span>.</br> The variable <span class="ct-code-b-yellow">a</span> '+
										'is initialized with value <span class="ct-code-b-yellow">'+
										$('#valueOfA').text() + '</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationABox()'>" + 
																"Next &#8594;</a>");
					});
				}
			});
			break;
		case "bLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'A variable <span class="ct-code-b-yellow">b</span> of type <span class="ct-code-b-yellow">int</span>  is '
									+ 'initialized with value <span class="ct-code-b-yellow">' + $('#valueOfB').text() + '</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "bBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'As the variable <span class="ct-code-b-yellow">b</span> is of type ' +
										'<span class="ct-code-b-yellow">int</span>, it occupies <span class="ct-code-b-yellow">2 bytes</span> ' +
										'of memory with some address. Let us assume the address to be ' +
										'<span class="ct-code-b-yellow">' + $('#bAddress').text()  + '</span>.' +
										'</br>The variable <span class="ct-code-b-yellow">b</span> is initialized with  value ' + 
										'<span class="ct-code-b-yellow">' + $('#valueOfB').text() + '</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationBBox()'>" + 
																"Next &#8594;</a>");
					});
				}
			});
			break;
		case "printBeforeSwapInMain":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">values</span> of '
									+ '<span class="ct-code-b-yellow">a</span>, <span class="ct-code-b-yellow">b</span> before we call the '
									+ '<span class="ct-code-b-yellow">swap()</span> method declared earlier.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$("#outputBox").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "outputBox":
			$("#outputBox").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "printBfr" :
				$('.introjs-helperLayer').one('transitionend', function () {
					if (introjs._direction == "backward") {
						$('#bfrSwap').addClass('visibility-hidden');
						$("#aBfr, #aConsVal,#bBfr, #bConsVal").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						transferEffect1("#printBfr", "#bfrSwap", function(){
							var typingContent = $('#bfrSwap').removeClass('visibility-hidden').html();
							typing("#bfrSwap", typingContent, 30, 'white', function() {
								$("#aBox").addClass("z-index9999999");
								transferEffect1("#aSec", "#aBfr", function(){
									transferEffect("#aVal", "#aConsVal", function(){
										$("#aBox").removeClass("z-index9999999");
										$("#bBox").addClass("z-index9999999");
										transferEffect1("#bSec", "#bBfr", function(){
											transferEffect("#bVal", "#bConsVal", function(){
												$("#bBox").removeClass("z-index9999999");
												setTimeout(function() {
													introjs.nextStep();
												},500);
											});
										});
									});
								});
							});
						});
					}
				});
				break;
			case "swapAftr" :
				$('.introjs-helperLayer').one('transitionend', function () {
					if (introjs._direction == "backward") {
						$('#aftrSwap').addClass('visibility-hidden');
						$("#xAftr, #xConsVal,#yAftr, #yConsVal").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						transferEffect1("#swapAftr", "#aftrSwap", function(){
							var typingContent = $("#aftrSwap").removeClass('visibility-hidden').html();
							typing("#aftrSwap", typingContent, 30, 'white', function() {
								$("#xBox").addClass("z-index9999999");
								transferEffect1("#valX", "#xAftr", function(){
									transferEffect("#valXVal", "#xConsVal", function(){
										$("#xBox").removeClass("z-index9999999");
										$("#yBox").addClass("z-index9999999");
										transferEffect1("#valY", "#yAftr", function(){
											transferEffect("#valYVal", "#yConsVal", function(){
												$("#yBox").removeClass("z-index9999999");
												setTimeout(function() {
													introjs.nextStep();
												},500);
											});
										});
									});
								});
							});
						});
					}
				});
				break;
			case "printAftr" :
				$('.introjs-helperLayer').one('transitionend', function () {
					if (introjs._direction == "backward") {
						$('#aftrMain').addClass('visibility-hidden');
						$("#aAftr, #aConsVal1,#bAftr, #bConsVal1").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						transferEffect1("#printAftr", "#aftrMain", function(){
							var typingContent = $("#aftrMain").removeClass('visibility-hidden').html();
							typing("#aftrMain", typingContent, 30, 'white', function() {
								$("#aBox").addClass("z-index9999999");
								transferEffect1("#aSec1", "#aAftr", function(){
									transferEffect("#aVal1", "#aConsVal1", function(){
										$("#aBox").removeClass("z-index9999999");
										$("#bBox").addClass("z-index9999999");
										transferEffect1("#bSec1", "#bAftr", function(){
											transferEffect("#bVal1", "#bConsVal1", function(){
												$("#bBox").removeClass("z-index9999999");
												setTimeout(function() {
													introjs.nextStep();
												},500);
											});
										});
									});
								});
							});
						});
					}
				});
				break;
			}
			break;
		case "swapLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This is a method call <span class="ct-code-b-yellow">swap()</span>, '+
									'we pass two parameters <span class="ct-code-b-yellow">a</span>, '+
									'<span class="ct-code-b-yellow">b</span> to the method. '+
									'Here the values of <span class="ct-code-b-yellow">a</span> '+
									'and <span class="ct-code-b-yellow">b</span> are passed to the method.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "swapMethodBlock":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The <span class="ct-code-b-yellow">swap()</span> method takes two <span class="ct-code-b-yellow">int</span> ' +
									'variables <span class="ct-code-b-yellow">x</span>, <span class="ct-code-b-yellow">y</span> and they ' +
									'are assigned with the values passed when the method is called. Here the values of a and b are ' +
									'<span class="ct-code-b-yellow">' + $('#aValue').text() + '</span>, <span class="ct-code-b-yellow">' + 
									$('#bValue').text() + '</span> .';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "swapAnimationDiv":
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._direction == "backward") {
					TweenMax.to($('#swapMethodBox'), 1, {opacity: 0});
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					$('.introjs-tooltip').removeClass('hide');
					TweenMax.to($('#swapMethodBox'), 1, {opacity: 1});
					var typingContent = 'The <span class="ct-code-b-yellow">swap()</span> method takes two parameters of type '
										+ '<span class="ct-code-b-yellow">int</span> <span class="ct-code-b-yellow">x</span>, '
										+ '<span class="ct-code-b-yellow">y</span> and these variables are assigned with values of '
										+ '<span class="ct-code-b-yellow">a</span>, <span class="ct-code-b-yellow">b</span> respectively. '
										+ 'As they are of datatype <span class="ct-code-b-yellow">int</span>, each of them occupy ' + 
										'<span class="ct-code-b-yellow">2 bytes</span> of memory with some address.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationSwap()'>" + 
																"Next &#8594;</a>");
					});
				}
			});
			break;
		case "tDeclareLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'A temporary variable of type <span class="ct-code-b-yellow">int</span> is declared '
									+ '<span class="ct-code-b-yellow">t</span>. It will be used to store the temporary value when '
									+ 'the values are swapped.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "tBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "tBoxAnimate":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'Here, the variable <span class="ct-code-b-yellow">t</span> is of type '
										+ '<span class="ct-code-b-yellow">int</span> and it occupies <span class="ct-code-b-yellow">'
										+ '2 bytes</span> of memory.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationTBox()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "tBoxValueAnimate":
					$('.introjs-tooltip').removeClass('hide');
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
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "xLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The variable <span class="ct-code-b-yellow">x</span> is assigned with the value of '
									+ ' <span class="ct-code-b-yellow">y</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "xBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-tooltip').removeClass('hide');
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
				$('.introjs-tooltip').removeClass('hide');
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
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "swapMethodCloseBrace":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'On completion of the  <span class="ct-code-b-yellow">swap()</span> method, all the local variables '
									+ '<span class="ct-code-b-yellow">x</span>, <span class="ct-code-b-yellow">y</span> and '
									+ '<span class="ct-code-b-yellow">t</span> are destroyed.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "animationDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					TweenMax.to($('#swapMethodBox'), 1, {opacity: 0, onComplete: function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					}});
				}
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
		case 'end':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var typingContent = "This is the end of the <span class='ct-code-b-yellow'>main</span> function where the program execution ends.";
				typing(".introjs-tooltiptext",typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "button" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn, #closeBtn").removeClass("opacity00");
				console.log('haiiiii');
				var text = "<ul><li>Click on <span class='ct-code-b-yellow'>Close</span> button to close the Live Demo.</li>" +
						"<li>Click on <span class='ct-code-b-yellow'>Restart</span> button to restart the Live Demo.</li></ul>"
									
				typing('.introjs-tooltiptext', text, function() {
					$('#restartBtn').click(function() {
						location.reload();
						
					});

				});
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
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass('circle-css').effect( "highlight",{color: '#ffff33'}, 1000);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1200 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("circle-css")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
} 
function transferEffect1(selector1, selector2, callBackFunction) {
	$(selector1).addClass('z-index9999999').effect( "highlight",{color: '#ffff33'}, 1000);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1200 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index9999999")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
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
				$(".introjs-nextbutton, .introjs-prevbutton").show();
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
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			});
		});
	});
}

function animationSwap() {
	$('.introjs-duplicate-nextbutton').remove();
	animationXBox();
	animationYBox();
}

function animationXBox() {
	$('#xBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#xBox').removeClass('animated zoomIn');
		$('#aValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#aValue').removeClass('circle-css');
			$('#xValue').text($('#aValue').text());
			fromEffectWithTweenMax('#aValue', '#xValue');
		});
	});
}

function animationYBox() {
	$('#yBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#yBox').removeClass('animated zoomIn');
		$('#bValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#bValue').removeClass('circle-css');
			$('#yValue').text($('#bValue').text());
			fromEffectWithTweenMax('#bValue', '#yValue', function() {
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			});
		});
	});
}

function animationTBox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#tBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#tBox').removeClass('animated zoomIn');
		$(".introjs-nextbutton, .introjs-prevbutton").show();
	});
}

function animationTBoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#xValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
		$('#xValue').removeClass('circle-css');
		$('#tValue').text($('#xValue').text());
		fromEffectWithTweenMax('#xValue', '#tValue', function() {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		});
	});
}

function animationXBoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#yValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
		$('#yValue').removeClass('circle-css');
		bounceFromEffextWithTimelineMax('#yValue', '#xValue', function() {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		});
	});
}

function animationYBoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#tValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
		$('#tValue').removeClass('circle-css');
		bounceFromEffextWithTimelineMax('#tValue', '#yValue', function() {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		});
	});
}