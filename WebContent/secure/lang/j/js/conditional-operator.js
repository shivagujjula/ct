var introjs;
var typing_interval = 10;

var typingId;
var typingContent;
var typingInterval;
var cursorColor;
var typingCallbackFunction;

var conditionalOperatorReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$("#restartBtn").click(function() {
		location.reload(true);
	});
	$('#closeBtn').click(function() {
		window.parent.$(".ui-dialog-titlebar-close").click();
	});
	
	introJsFunction();
	
	$("[contenteditable=true]").on("keydown", function(e) {
		$('.length-error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($(this).text().length > max) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please limit the digits length to 3.</span>");
			e.preventDefault();
		}
	});
	
	$("[contenteditable=true]").on("keyup", function(e) {
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter some number.</span>");
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introjs.refresh();
		
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
	});
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

function caretAtEnd(element) {
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

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
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
			element : "#maxLine",
			intro : ""
		},
		{
			element : "#animationBox",
			intro : "",
			tooltipClass : "hide"
		},
		{
			element : "#num1Line",
			intro : ""
		},
		{
			element : "#num2Line",
			intro : ""
		},
		{
			element : "#maxLine",
			intro : ""
		},
		{
			element : "#animationBox",
			intro : "",
			tooltipClass : "hide"
		},
		{
			element : "#sopLine",
			intro : "",
			tooltipClass : "hide"
		},
		{
			element : "#outputBox",
			intro : "",
			tooltipClass : "hide"
		},
		{
			element : "#button",
			intro : "<ul><li>Click on <span class='ct-code-b-yellow'>Close</span> button to close the Live Demo.</li>" +
					"<li>Click on <span class='ct-code-b-yellow'>Restart</span> button to restart the Live Demo.</li></ul>",
			position : 'right',
		}
		]});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "maxLine":
			if (introjs._currentStep == 0) {
				$(".introjs-duplicate-nextbutton").remove();
				$(".animation-div1").css({"opacity":0});
				for (var i = 0; i < 3; i++) {
					$('.svg-line').eq(i).hide();
					$('.svg-rect').eq(i).css("opacity" ,"0");
					TweenMax.to($('.svg-text').eq(i), 1, {fill: 'transparent'});
					TweenMax.to($('.svg-line').eq(i), 1, {attr: {y2: '53%'}})
				}
			} else if (introjs._currentStep == 4) {
				$(".introjs-duplicate-nextbutton").remove()
			}
	break;
	case "animationBox":
		if (introjs._currentStep == 1) {
			$(".introjs-duplicate-nextbutton").remove()
			$(".animation-div1").css({"opacity":1});
			$("#box1, #box2, #box3, .statement-css").addClass("opacity00");
			$('#svgId').remove();
			$('.statement-css').removeAttr('style');
			$('.box-css').css({'border-color' : 'transparent'});
			for (var i = 0; i < 3; i++) {
				$('.svg-line').eq(i).hide();
				$('.svg-rect').eq(i).css("opacity" ,"0");
				TweenMax.to($('.svg-text').eq(i), 1, {fill: 'transparent'});
				TweenMax.to($('.svg-line').eq(i), 1, {attr: {y2: '53%'}})
			}
		} else if (introjs._currentStep == 5) {
			$(".introjs-duplicate-nextbutton").remove()
		}
	break;
		}
	});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
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
		case "maxLine":
			switch (introjs._currentStep) {
				case 0:
					typingId = '.introjs-tooltiptext';
					typingContent = 'This is the <span class="ct-code-b-yellow">Conditional Operator</span>.' +
									'</br><span class="ct-code-b-yellow">Conditional Operator</span> in <span class="ct-code-b-yellow">Java</span> ' +
									'is also called as <span class="ct-code-b-yellow">Ternary Operator</span>.' +
									'</br><b>Syntax:</b> <span class="ct-code-b-yellow">condition ? true_part : false_part</span>';
					typingInterval = typing_interval;
					cursorColor = 'white';
					typingCallbackFunction = function() {
						$('.introjs-nextbutton').show();
					}
					typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
					break;
				case 4:
					$('[contenteditable="true"]').attr('contenteditable', 'false');
					$('.introjs-helperLayer').one('transitionend', function () {
						typingId = '.introjs-tooltiptext';
						typingContent = 'This is the <span class="ct-code-b-yellow">Conditional Operator</span>.' +
										'</br><span class="ct-code-b-yellow">Conditional Operator</span> in <span class="ct-code-b-yellow">Java</span> ' +
										'is also called as <span class="ct-code-b-yellow">Ternary Operator</span>.' +
										'</br><b>Syntax:</b> <span class="ct-code-b-yellow">condition ? true_part : false_part</span>';
						typingInterval = typing_interval;
						cursorColor = 'white';
						typingCallbackFunction = function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						}
						typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
					});
					break;
			}
			break;
		case "animationBox":
			switch (introjs._currentStep) {
			case 1:
				$('.introjs-helperLayer').one('transitionend', function () {
					TweenMax.to('.animation-div1', 1, {opacity: 1, onComplete: function() {
						svgBoxAnimation(0, function() {
							$('.introjs-tooltip').removeClass('hide');
							typingId = '.introjs-tooltiptext';
							typingContent = 'Here, the <span class="ct-code-b-yellow">condition</span> is checked and returns ' +
											'<span class="ct-code-b-yellow">num1</span> if the condition is ' +
											'<span class="ct-code-b-yellow">true</span> else returns ' +
											'<span class="ct-code-b-yellow">num2</span> to the variable <span class="ct-code-b-yellow">max</span>.';
							typingInterval = typing_interval;
							cursorColor = 'white';
							typingCallbackFunction = function() {
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationStep2()'>" + 
																	"Next &#8594;</a>");
							}
							typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
						});
					}});
				});
				break;
			case 5:
				$('.introjs-helperLayer').one('transitionend', function () {
					TweenMax.to('.animation-div2', 1, {opacity: 1, onComplete: function() {
						flipEffectWithTweenMax('#num1', $('#num1value').text(), function() {
							flipEffectWithTweenMax('#num2', $('#num2value').text(), function() {
								flipEffectWithTweenMax('#n1', $('#num1value').text(), function() {
									flipEffectWithTweenMax('#n2', $('#num2value').text(), function() {
										$('.introjs-tooltip').removeClass('hide');
										typingId = '.introjs-tooltiptext';
										var num1 = parseInt($('#num1value').text());
										var num2 = parseInt($('#num2value').text());
										typingContent = 'Here, the <span class="ct-code-b-yellow">condition (' + num1 + ' > ' + num2 + 
														')</span> returns <span class="ct-code-b-yellow">' + (num1 > num2).toString() + 
														'</span> so the value <span class="ct-code-b-yellow">' + 
														((num1 > num2) ? num1 : num2).toString() + '</span> is assigned to the variable ' +
														'<span class="ct-code-b-yellow">max</span>.';
										typingInterval = typing_interval;
										cursorColor = 'white';
										typingCallbackFunction = function() {
											$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
																				"onclick='animatingDiv2()'>Next &#8594;</a>");
										}
										typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
									});
								});
							});
						});
					}});
				});
				break;
			}
			break;
		case "num1Line":
			$('.introjs-helperLayer').one('transitionend', function () {
				typingId = '.introjs-tooltiptext';
				typingContent = 'Here, we can change the value of <span class="ct-code-b-yellow">num1</span>.';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					caretAtEnd(document.getElementById('num1value'));
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
			break;
		case "num2Line":
			$('.introjs-helperLayer').one('transitionend', function () {
				typingId = '.introjs-tooltiptext';
				typingContent = 'Here, we can change the value of <span class="ct-code-b-yellow">num2</span>.';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					caretAtEnd(document.getElementById('num2value'));
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
			break;
		case "sopLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				if (introjs._direction == "forward") {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				} else {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				}
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				typingId = '.output-console-body span';
				typingContent = 'The max number is ' + $('.max-value-div').children().text();
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					if (introjs._direction == "forward") {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					} else {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					}
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
			break;
		case "button":
			$(".introjs-tooltip").css("min-width","380px");
			$(".introjs-tooltipbuttons").hide()
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn, #closeBtn").removeClass('visibility-hidden');
			});
		break;
		}
	});
	introjs.start();
}

function svgBoxAnimation(index, callBackFunction) {
	TweenMax.to($('.svg-rect').eq(index), 1, {opacity: 1, onComplete: function() {
		$('.svg-line').eq(index).show();
		TweenMax.to($('.svg-line').eq(index), 1, {attr: {y2: '34%'}, onComplete: function() {
			TweenMax.to($('.svg-text').eq(index), 1, {fill: '#333', onComplete: function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	}});
}

function animationStep2() {
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').addClass('hide');
	svgBoxAnimation(1, function() {
		$('.introjs-tooltip').removeClass('hide');
		typingId = '.introjs-tooltiptext';
		typingContent = 'This is the value to be return if the <span class="ct-code-b-yellow">condition</span> is ' +
						'<span class="ct-code-b-yellow">true</span>.';
		typingInterval = typing_interval;
		cursorColor = 'white';
		typingCallbackFunction = function() {
			$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationStep3()'>" + 
												"Next &#8594;</a>");
		}
		typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
	});
}

function animationStep3() {
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').addClass('hide');
	svgBoxAnimation(2, function() {
		$('.introjs-tooltip').removeClass('hide');
		typingId = '.introjs-tooltiptext';
		typingContent = 'This is the value to be return if the <span class="ct-code-b-yellow">condition</span> is ' +
						'<span class="ct-code-b-yellow">false</span>.';
		typingInterval = typing_interval;
		cursorColor = 'white';
		typingCallbackFunction = function() {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		}
		typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
	});
}

function animatingDiv2() {
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').addClass('hide');
	var num1 = parseInt($('#num1value').text());
	var num2 = parseInt($('#num2value').text());
	(num1 > num2) ? animatingMax('n1') : animatingMax('n2');
}

function animatingMax(id) {
	TweenMax.to($('.max-value-div').children().not('#' + id), 1, {opacity: 0, onComplete: function() {
		var beforeRemoveLeft = $('#' + id).offset().left;
		$('.max-value-div').children().not('#' + id).remove();
		TweenMax.from($('#' + id), 1, {left: beforeRemoveLeft - $('#' + id).offset().left, onComplete: function() {
			$('.introjs-tooltip').removeClass('hide');
			typingId = '.introjs-tooltiptext';
			typingContent = 'Hence the value <span class="ct-code-b-yellow">' + $('.max-value-div').children().text() + '</span> is assigned to ' +
							'the variable <span class="ct-code-b-yellow">max</span>.';
			typingInterval = typing_interval;
			cursorColor = 'white';
			typingCallbackFunction = function() {
				$('.introjs-nextbutton').show();
			}
			typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
		}});
	}});
}