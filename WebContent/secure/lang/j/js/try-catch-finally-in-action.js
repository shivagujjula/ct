var intro;
	var noException;
	var typing_interval = 10;
	var typing_interval_autoNextStep = 30;

var tryCatchFinallyInAction = function() {

	
	intro = introJs();
	
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#mainMethodBlock",
			intro : ""
		},
		{
			element : "#textLine",
			intro : "The reference <span class='ct-code-b-yellow'>text</span> is initialized to a value \"<b>3gg</b>\".<br/><br/>As you can notice \"<b>3gg</b>\" is not parsable to integer. Hence it will throw an exception."
		},
		{
			element : "#textEditable",
			intro : "You can also change \"<b><span id='inputText'>3gg</span></b>\" to any other parsable or unparsable text of maximum length <b>3</b>.<br>For example : \"1\",\"44\", \"2a\", \"b8\", \"zz\" and so on."
		},
		{
			element : "#valueLine",
			intro : "The variable <span class='ct-code-b-yellow'>value</span> is initialized to <b>0</b>."
		},
		{
			element : "#tryLine",
			intro : ""
		},
		{
			element : "#parseIntLine",
			intro : ""
		},
		{
			element : "#sopInsideTry",
			tooltipClass: "hide"
		},
		{
			element : "#output",
			tooltipClass: "hide"
		},
		{
			element : "#catchLine",
			tooltipClass: "hide"
		},
		{
			element : "#sopInsideCatch",
			tooltipClass: "hide"
		},
		{
			element : "#output",
			tooltipClass: "hide"
		},
		{
			element : "#printStackTraceLine",
			intro : ""
		},
		{
			element : "#output",
			tooltipClass: "hide"
		},
		{
			element : "#finallyLine",
			intro : "",
		},
		{
			element : "#sopInsideFinally1",
			tooltipClass: "hide"
		},
		{
			element : "#output",
			tooltipClass: "hide"
		},
		{
			element : "#restartBtn",
			intro : "Click to Restart",
			position : "right"
		}
		]});
	
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "textEditable":
			$('.introjs-helperLayer').one('transitionend', function () {
				$( "#textEditable").effect("highlight", {color: 'rgb(255, 0, 45)'}, 1000, function() {
					$('#textEditable').attr('contenteditable', true);
					caretAtEnd(document.getElementById('textEditable'));
				});
			});
			break;
		case "valueLine":
			$('#textEditable').attr('contenteditable', false);
			noException = ($('#textEditable').text() == parseInt($('#textEditable').text()));
			if (noException) {
				$('#outputOfSopInsideCatch').remove();
				$('#output-printStackTrace').remove();
			} else {
				$('#outputOfSopInsideTry').remove();
				$('#output-text-value').append($('#textEditable').text());
			}
			break;
		case "tryLine":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-tooltiptext').typewriting("Control enters into the <span class='ct-code-b-yellow'>try</span> block.", {
					"typing_interval": typing_interval_autoNextStep,
					"cursor_color": 'white'
				}, function() {
					$('.introjs-tooltiptext').removeClass('typingCursor');
					setTimeout(function() {
						intro.nextStep();
					}, 1000);
				});
			});
			break;
		case "parseIntLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent;
				if (noException) {
					typingContent = "The method <b>Integer.<span class='ct-code-b-yellow'>parseInt</span>(text)</b> parses the String <b>text</b> and converts the contents to <b>int</b>. Since the characters of <b>text</b> are parsable to <b>int</b>, the execution continues to the next statement in sequence.";
				} else {
					typingContent = "The method <b>Integer.<span class='ct-code-b-yellow'>parseInt</span>(text)</b> parses the String <b>text</b> and converts the contents to <b>int</b>. Since the characters of <b>text</b> are not parsable to <b>int</b>, <span class='ct-code-b-yellow'>NumberFormatException</span> is thrown. The control gets transferred to the <span class='ct-code-b-yellow'>catch</span> block.";
				}
				$('.introjs-tooltiptext').typewriting(typingContent, {
					"typing_interval": typing_interval,
					"cursor_color": 'white'
				}, function() {
					$('.introjs-tooltiptext').removeClass('typingCursor');
					$('.exceptionCheckBtn').removeClass('hidden');
				});
			});
			break;
		case "catchLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				setTimeout(function() {
					intro.nextStep();
				}, 1000);
			});
			break;
		case "printStackTraceLine":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-tooltiptext').typewriting("The <span class='ct-code-b-yellow'>printStactTrace()</span> method call on the reference <span " 
														+ "class='ct-code-b-yellow'>e</span> will print the trace of all the method calls stored in the " 
														+ "current method call stack.", {
					"typing_interval": typing_interval,
					"cursor_color": 'white'
				}, function() {
					$('.introjs-tooltiptext').removeClass('typingCursor');
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "finallyLine":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-tooltiptext').typewriting("The <span class='ct-code-b-yellow'>finally</span> block is always executed after executing the <span class='ct-code-b-yellow'>try</span> or <span class='ct-code-b-yellow'>catch</span> blocks.", {
					"typing_interval": typing_interval_autoNextStep,
					"cursor_color": 'white'
				}, function() {
					$('.introjs-tooltiptext').removeClass('typingCursor');
					setTimeout(function() {
						intro.nextStep();
					}, 1000);
				});
			});
			break;
		case "sopInsideTry":
			$('.introjs-helperLayer').one('transitionend', function () {
				setTimeout(function() {
					intro.nextStep();
				}, 1000);
			});
			break;
		case "sopInsideCatch":
			$('.introjs-helperLayer').one('transitionend', function () {
				setTimeout(function() {
					intro.nextStep();
				}, 1000);
			});
			break;
		case "sopInsideFinally1":
			$('.introjs-helperLayer').one('transitionend', function () {
				setTimeout(function() {
					intro.nextStep();
				}, 1000);
			});
			break;
		case "output":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (intro._currentStep == 7) {
					$('#outputOfSopInsideTry').typewriting("Successfully parsed text as integer", {
						"typing_interval": typing_interval,
						"cursor_color": 'white'
						}, function() {
							$('#outputOfSopInsideTry').removeClass('typingCursor');
							setTimeout(function() {
								intro.goToStep(14);
							}, 1000);
						});
				} else if (intro._currentStep == 10) {
					$('#outputOfSopInsideCatch').typewriting("Unable to parse text as integer", {
						"typing_interval": typing_interval_autoNextStep,
						"cursor_color": 'white'
						}, function() {
							$('#outputOfSopInsideCatch').removeClass('typingCursor');
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						});
				} else if (intro._currentStep == 12) {
					$('#outputOfprintStackTraceLine1').fadeTo(1000, 1, function() {
						$('#outputOfprintStackTraceLine2').fadeTo(1000, 1, function() {
							$('#outputOfprintStackTraceLine3').fadeTo(1000, 1, function() {
								$('#outputOfprintStackTraceLine4').fadeTo(1000, 1, function() {
									$('#outputOfprintStackTraceLine5').fadeTo(1000, 1, function() {
										setTimeout(function() {
											intro.nextStep();
										}, 1000);
									});
								});
							});
						});
					});
				} else if (intro._currentStep == 15) {
					$('#outputOfSopInsideFinally1').typewriting("Inside finally block", {
						"typing_interval": typing_interval_autoNextStep,
						"cursor_color": 'white'
						}, function() {
							$('#outputOfSopInsideFinally1').removeClass('typingCursor');
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						});
					}
				});
			break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
			break;
		}
	});
	
	intro.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	$(".introjs-tooltipbuttons").append("<a class='introjs-button exceptionCheckBtn hidden'>Next &#8594;</a>");
	
		$('.introjs-tooltiptext').typewriting("The above code demonstrates the working of <span class='ct-code-b-yellow'>try</span>, <span class='ct-code-b-yellow'>catch</span> and <span class='ct-code-b-yellow'>finally</span> constructs using a sample code which tries to convert a number value given as a <b>String</b> to <b>int</b> value.<br/>First we will try with a sample which will generate an exception.<br/>Next we will try with a sample which executes normally without an exception.", {
			"typing_interval": typing_interval,
			"cursor_color": 'white'
		}, function() {
			$('.introjs-tooltiptext').removeClass('typingCursor');
				$('.introjs-nextbutton').show();
		});
	
	$('.exceptionCheckBtn').click(function() {
		if (!noException) {
			intro.goToStep(9);
		} else {
			intro.nextStep();
		}
		$(this).remove();
	});
	
	$("#textEditable").keydown(function(e) {
		var max = $(this).attr("maxlength");
		$('.length-error-text').remove();
		if ((e.keyCode == 8) || ((e.keyCode >= 35) && (e.keyCode <= 40))) {
			return;
		}
		if (((e.keyCode < 35) || (e.keyCode > 40)) && ((e.keyCode < 48) || (e.keyCode > 90)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
				e.preventDefault();
			}
		if ($(this).text().length > max) {
	    	$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/><br/>Please limit the String's length to 3.</span>");
			e.preventDefault();
		}
	});
	
	$("#textEditable").on("keyup", function(e) {
		if ($(this).text() != '') {
			intro.refresh();
		}
		$('#inputText').text($(this).text());
	});
	
	$('body').keypress(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	
	$('#restartBtn').click(function() {
		location.reload();
	});
}

function caretAtEnd(element) {
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}