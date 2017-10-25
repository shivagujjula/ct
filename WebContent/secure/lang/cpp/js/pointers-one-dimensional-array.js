var introjs;
var typingInterval = 1;
var arr = [];

var pointersOneDimensionalArrayReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});

	introJsFunction();
	
	var maxNumberOfInputs = 5;
	var maxLengthOfInput = 3;
	$('.output-scanf-line').on("keydown", function(e) {
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
	
	$('.output-scanf-line').on("keyup", function(e) {
		$('.length-error-text').remove();
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
												"Please enter " + maxNumberOfInputs + " number and separate each with space.</span>");
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
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		} else if (arr.length == maxNumberOfInputs) {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		}
		
		$.each(arr, function(idx, val) {
			if (val > 999 || val < 0) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
														"Please limit the index " + idx + " number in between 0 and 999 .</span>");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
			}
		});
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
		}, {
			element : "#line1",
			intro : "",
		}, {
			element : "#variablesBox",
			intro : "",
			tooltipClass: 'hide',
		}, {
			element : "#pLine",
			intro : "",
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'arrayBox',
			tooltipClass: 'hide',
		}, {
			element : "#printf1",
			tooltipClass: "hide",
		}, {
			element : "#outputBox",
			tooltipClass: "hide",
			outputStep: 'printf',
		}, {
			element : "#forScanf",
			intro : "",
		}, {
			element : "#outputBox",
			intro : "",
			outputStep: 'forScanf',
			tooltipClass: "hide",
		}, {
			element : "#animationBox",
			intro : "",
			tooltipClass: "hide",
			animateStep: 'arrayBoxValues'
		}, {
			element : "#printf2",
			tooltipClass: "hide"
		}, {
			element : "#outputBox",
			tooltipClass: "hide",
			outputStep: 'printf'
		}, {
			element : "#forPrintf",
			intro : ""
		}, {
			element : "#outputBox",
			tooltipClass: "hide",
			outputStep: 'forPrintf'
		}, {
			element : "#restartBtn",
			intro : "Click to restart.",
			position : "right"
		} ]});
	
	introjs.onbeforechange(function(targetElement) {
	
		var elementId = targetElement.id;
		switch (elementId) {
		case "line1":
		case "variablesBox":
			$('#pBox').addClass('opacity00');
			break;
		case "pLine":
			$('#arrayBox').addClass('opacity00');
			TweenMax.to($('.svg-line').hide(), 1, { attr: { x2: '27.8%',y2: '50%'}});
			$('#pValue').text("");
			break;
		case "animationBox":
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "arrayBox":
					$('#arrayBox').addClass('opacity00');
					TweenMax.to($('.svg-line').hide(), 1, { attr: { x2: '27.8%',y2: '50%'}});
					$('#pValue').text("");
					break;
				case "arrayBoxValues":
					$('.arrayValue').empty();
					break;
				}
			break;
		case "outputBox":
				var outputStep = introjs._introItems[introjs._currentStep].outputStep;
				switch (outputStep) {
				case "forScanf":
					$('.arrayValue').empty();
					$('.output-scanf-line').removeAttr("contenteditable placeholder").empty();
					break 
				case "forPrintf":
					break;
				}
			break;
		case "forScanf":
			$('.output-scanf-line').removeAttr("contenteditable placeholder").empty();
			break;
		}
	
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		
		//*****************back button logic*********************//
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
		//*****************back button logic*********************//
		
		var elementId = targetElement.id;
		switch (elementId) {
		case "preCode":
				var typingContent = 'Let us learn <span class="ct-code-b-yellow">pointers</span> in <span class="ct-code-b-yellow"> one dimensional array</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			break;
		case "line1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here a <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> and ' +
									' an <span class="ct-code-b-yellow">int</span> variable <span class="ct-code-b-yellow">i</span> are declared.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "variablesBox":
			$('.introjs-helperLayer').one('transitionend', function () { 
				animationVariablesBox(function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> occupies ' +
										'<span class="ct-code-b-yellow">2 bytes</span> in memory at some address <span class="ct-code-b-yellow">' + 
										$('#pAddress').text() +'</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			});
			break;
		case "pLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = "<ul><li> A <span class='ct-code-b-yellow'>malloc()</span> function returns the pointer to the " + 
									"<span class='ct-code-b-yellow'>base address</span> of the <span class='ct-code-b-yellow'>heap memory</span> " + 
									"allocated.</li><li>A <span class='ct-code-b-yellow'>malloc()</span> function always returns a <span class=" +
									"'ct-code-b-yellow'>void</span> pointer.<br/> So a typecast is used to convert to the datatype of the pointer that is returned.</li></ul>"; 
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "animationBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "arrayBox":
					animationArrayBox(function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = 'Each location occupies <span class="ct-code-b-yellow">2 bytes</span> of memory, a total of ' +
										'<span class="ct-code-b-yellow">10 bytes</span> is allocated in the <span class="ct-code-b-yellow">' +
										'heap memory.</span> <br/><br/>The <span class="ct-code-b-yellow"> base address</span> of the memory allocated ' +
										'is returned.<br>This address is stored in the pointer variable <span class="ct-code-b-yellow">p</span>.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "arrayBoxValues":
					$('#outputScanfLine').removeAttr('contenteditable placeholder');
					var splittedText = $('#outputScanfLine').text().split(" ");
					$('#outputScanfLine').html('');
					$('#outputPrintfLine').empty();
					$.each(splittedText, function(idx, val) {
						if (val != '') {
							$('#outputScanfLine').append('<span class="scanfValue">' + val + '</span> ');
							$('#outputPrintfLine').append('<span class="printfValue visibility-hidden">' + parseInt(val) + '</span> ');
						} else {
							$('#outputScanfLine').append(' ');
						}
					});
					$('.scanfValue').addClass('output-value-circle circle-css');
					TweenMax.fromTo($('.scanfValue'), 1, {backgroundColor: '#FFFFFF'}, {backgroundColor: 'inherit', onComplete: function() {
						$('.scanfValue').removeClass('output-value-circle circle-css');
						$.each(arr, function(idx, val) {
							$('.arrayValue').eq(idx).text(parseInt(val));
						});
						for (var i = 0; i < $('.scanfValue').length; i++) {
							if (i == ($('.scanfValue').length - 1)) {
								fromEffectWithTweenMax($('.scanfValue').eq(i), $('.arrayValue').eq(i), function() {
									$('.introjs-tooltip').removeClass('hide');
									var typingContent = 'Here <span class="ct-code-b-yellow">(p + i)</span> returns the address of each element in ' +
														'the array. <br><span class="ct-code-b-yellow">p</span> has the base address of the array and ' +
														'<span class="ct-code-b-yellow">i</span> is the index.<br><br>For example : <br>' + 
														'<span class="ct-code-b-yellow">p + i</span> = p + (i * scale factor)<br> i can range ' +
														'between <span class="ct-code-b-yellow">{0, 1, 2, 3, 4}</span><br> scale factor = ' +
														'<span class="ct-code-b-yellow">2</span> for int datatype <br><br>Suppose to access the ' + 
														'second element in the array, the index is 1 <br><span class="ct-code-b-yellow">' +
														$('#pValue').text() + ' + (1 * 2) = ' + (parseInt($('#pValue').text()) + 2) + 
														'</span><br><br><b>Note : </b> ' +
														'<span class="ct-code-b-yellow">Scale factor</span> is the size of the ' +
														'datatype.';
									typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
										$('.introjs-nextbutton, .introjs-prevbutton').show();
									});
								});
							} else {
								fromEffectWithTweenMax($('.scanfValue').eq(i), $('.arrayValue').eq(i));
							}
						}
					}});
					break;
				}
			});
			break;
		case "printf1":
		case "printf2":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._direction == "forward") {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				} else {
					setTimeout(function() {
						introjs.previousStep();
					}, 100);
				}
				
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var outputStep = introjs._introItems[introjs._currentStep].outputStep;
				switch (outputStep) {
				case "printf":
					if (introjs._direction == "forward") {
						var selector = $('.output-console-body > .visibility-hidden').eq(0).addClass('tempClass');
						var typingContent = selector.removeClass('visibility-hidden').html();
						typing(selector, typingContent, 30, 'white', function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 1000);
						});
					} else {
						$('.tempClass:last').addClass("visibility-hidden").removeClass('tempClass');
						introjs.previousStep();
					}
					
					break;
				case "forScanf":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'Here enter <span class="ct-code-b-yellow">5</span> values and separate each with space.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.output-scanf-line').attr({contenteditable: 'true', placeholder: 'Enter 5 values'});
						caretAtEnd(document.getElementById('outputScanfLine'));
					});
					
					break;
				case "forPrintf":
					console.log('This is printing values');
					$('.arrayValue').addClass('z-index9999999');
					TweenMax.from($('.arrayValue'), 1, {ease: Power4.easeIn, backgroundColor: '#FFFFFF', onComplete: function() {
						$('.arrayValue').removeClass('z-index9999999');
						$('.printfValue').removeClass('visibility-hidden');
						TweenMax.from($('.printfValue'), 1, {ease: Power4.easeIn, opacity: 0, onComplete: function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 1000);
						}});
					}});
					break;
				}
			});
			break;
		case "forScanf":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here the <span class="ct-code-b-yellow">for</span> loop executes <span class="ct-code-b-yellow">5</span> times ' +
									'and the <span class="ct-code-b-yellow">scanf()</span> reads <span class="ct-code-b-yellow">5</span> values ' +
									'from the user. ';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "forPrintf":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This <span class="ct-code-b-yellow">for</span> loop executes <span class="ct-code-b-yellow">5</span> times so ' +
									'that <span class="ct-code-b-yellow">printf()</span> prints values of the array.<br/><br/> Here, ' +
									'<span class="ct-code-b-yellow">*(p + i)</span> returns the array values starting from the base address' + 
									'<span class="ct-code-b-yellow">p</span><br><br><b>Note : </b><span class="ct-code-b-yellow">i = i * 2</span>(scale factor for int)';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "restartBtn":
			$('.introjs-tooltip').css({'min-width' : '125px'});
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

function animationVariablesBox(callBackFunction) {
	$('.introjs-duplicate-nextbutton').remove();
	$('#pBox').removeClass('opacity00').addClass('animated zoomIn').one('animationend', function() {
		$('#pBox').removeClass('animated zoomIn');
		callBackFunction();
	});
}

function animationArrayBox(callBackFunction) {
	$('.introjs-duplicate-nextbutton').remove();
	$('#arrayBox').removeClass('opacity00').toggleClass('animated zoomIn').one('animationend', function() {
		$('#arrayBox').removeClass('animated zoomIn');
		$('#arrayAddress').effect("highlight", {color: 'blue'}, 1000, function() {
			$('#pValue').text($('#arrayAddress').text());
			fromEffectWithTweenMax($('#arrayAddress'), $('#pValue'), function() {
				TweenMax.to($('.svg-line').show(), 1, {attr: {x2: '44%', y2: '35%'}, onComplete: function() {
					callBackFunction();
				}});
			});
		});
	});
}