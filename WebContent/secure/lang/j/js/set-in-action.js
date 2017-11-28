var intro;
var timelineLite = new TimelineLite();
var countValueBox = 0;
var valueArr = [];
var typing_interval = 10;
var lineIndex = 0;
var recursionCount = 0;

var setInActionReady = function() {

	
	var typingId;
	var typingContent;
	var typingInterval;
	var cursorColor;
	var typingCallbackFunction;
	
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#javaCode",
			intro : ""
		},
		{
			element : "#setObject",
			intro : ""
		},
		{
			element : "#line0",
			tooltipClass : "hide"
		},
		{
			element : "#liveDisplayBox",
			tooltipClass : "hide",
			action: "addElement"
		},
		{
			element : "#sop0",
			tooltipClass : "hide"
		},
		{
			element : "#outputBox",
			tooltipClass : "hide"
		},
		{
			element : "#line1",
			tooltipClass : "hide"
		},
		{
			element : "#liveDisplayBox",
			tooltipClass : "hide",
			action: "addElement"
		},
		{
			element : "#sop1",
			tooltipClass : "hide"
		},
		{
			element : "#outputBox",
			tooltipClass : "hide"
		},
		{
			element : "#line2",
			tooltipClass : "hide"
		},
		{
			element : "#liveDisplayBox",
			tooltipClass : "hide",
			action: "addElement"
		},
		{
			element : "#sop2",
			tooltipClass : "hide"
		},
		{
			element : "#outputBox",
			tooltipClass : "hide"
		},
		{
			element : "#methodsBox",
			intro : ""
		}
		]});

	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "javaCode":
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			typingId = '.introjs-tooltiptext';
			typingContent = 'Here we will learn how <span class="ct-code-b-yellow">add()</span> and <span class="ct-code-b-yellow">remove()</span> ' +
							'methods work in a <span class="ct-code-b-yellow">Set</span>.<br/>We will first add 3 elements and later the ' +
							'<b>Live Demo</b> will allow you to add and remove multiple times.';
			typingInterval = typing_interval;
			cursorColor = 'white';
			typingCallbackFunction = function() {
				$(typingId).removeClass('typingCursor');
				$('.introjs-nextbutton').show();
			}
			typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			break;
		case "setObject":
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				typingId = '.introjs-tooltiptext';
				typingContent = 'Let us create a <span class="ct-code-b-yellow">Set</span> instance of type <span class="ct-code-b-yellow">HashSet' +
								'</span> which accepts elements of type <span class="ct-code-b-yellow">String</span>.';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$(typingId).removeClass('typingCursor');
					$('.introjs-nextbutton').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
			break;
		case "hiddenLineDiv":
		case 'line' + lineIndex:
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#line' + lineIndex).addClass('z-index10000000').removeClass('visibility-hidden');
				typingId = '#line' + lineIndex;
				typingContent = $('#line' + lineIndex).html();
				typingInterval = typing_interval;
				cursorColor = '#333';
				typingCallbackFunction = function() {
					$(typingId).removeClass('typingCursor');
					$('.introjs-tooltip').removeClass('hide');
					typingId = '.introjs-tooltiptext';
					var elementValue = '';
					if ($('#val' + lineIndex).text() == '') {
						elementValue = ' (i.e. <span class="ct-code-b-yellow value">empty String</span>)';
					}
					if (lineIndex < 3) {
						typingContent = 'Here we are adding a String element called "<span class="ct-code-b-yellow value">' +
										$('#val' + lineIndex).text() + '</span>"<span id="emptyString"></span> to the <span class="ct-code-b-yellow">Set</span> ' +
										'instance by calling <span class="ct-code-b-yellow">add()</span> method.<br/>You can also change ' +
										'the value.<br/>The value returned by <span class="ct-code-b-yellow">add()</span> method is stored in ' +
										'a variable called <span class="ct-code-b-yellow">status</span>.';
					} else {
						var action =  intro._introItems[intro._currentStep].action;
						if (action == 'addElement') {
							typingContent = 'Here we are adding a String element called "<span class="ct-code-b-yellow">' +
											$('#val' + lineIndex).text() + '</span>"' + elementValue + ' to the <span class="ct-code-b-yellow">Set</span> instance ' +
											'by calling <span class="ct-code-b-yellow">add()</span> method.<br/>The value returned by ' +
											'<span class="ct-code-b-yellow">add()</span> method is stored in a variable called ' +
											'<span class="ct-code-b-yellow">status</span>.';
						} else if (action == 'removeElement') {
							typingContent = 'Here we are removing "<span class="ct-code-b-yellow">' + $('#val' + lineIndex).text() + '</span>"' +
											elementValue + ' from the <span class="ct-code-b-yellow">Set</span> instance by calling ' +
											'<span class="ct-code-b-yellow">' +
											'remove()</span> method.<br/>The value returned by <span class="ct-code-b-yellow">remove()</span> ' +
											'method is stored in a variable called <span class="ct-code-b-yellow">status</span>.';
						}
					}
					typingInterval = typing_interval;
					cursorColor = 'white';
					typingCallbackFunction = function() {
						$(typingId).removeClass('typingCursor');
						if (elementId == 'line' + lineIndex) {
							$('#val' + lineIndex).attr({contenteditable: 'true', spellcheck: 'false', maxlength: '8'});
							$("[contenteditable=true]").keydown(function(e) {
								 if (e.which === 13) {
									e.preventDefault();
								 }
							    var max = $(this).attr("maxlength");
							    if ((e.which != 8) && (e.which != 46) && (e.which != 37) && (e.which != 39) &&($(this).text().length + 1) > max) {
							    	$('.length-error-text').empty();
							    	$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please limit the String's length to 8.</span>");
							    	e.preventDefault();
							    } else {
							    	$('.length-error-text').remove();
							    }
							});
							$("[contenteditable=true]").on("keyup", function(e) {
								intro.refresh();
								$('.value').text($('#val' + lineIndex).text());
								$('#sopVal' + lineIndex).text($('#val' + lineIndex).text());
								if ($('#sopVal' + lineIndex).text() == '') {
									$('#sopVal' + lineIndex).text('empty String');
									$('#emptyString').html(' (i.e. <span class="ct-code-b-yellow value">empty String</span>)');
								} else {
									$('#emptyString').html('');
								}
							});
							caretAtEnd(document.getElementById('val' + lineIndex));
						}
						$('.introjs-nextbutton').show();
					}
					typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
			break;
		case "liveDisplayBox":
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			if (lineIndex < 3) {
				$('#val' + lineIndex).attr('contenteditable', 'false');
			}
			$('#line' + lineIndex).removeClass('z-index10000000');
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.value-append-div').append('<span id="valueSpan' + countValueBox + '" class="value-append-box"><span id="value' +
												countValueBox + '">' + $('#val' + lineIndex).text() + '</span></span>');
				var l1 = $('#val' + lineIndex).offset();
				var l2 = $('#value' + countValueBox).offset();
				var topLength = l1.top-l2.top;
				var leftLength = l1.left-l2.left;
				$('#val' + lineIndex).addClass('z-index10000000').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
					$('#val' + lineIndex).removeClass('z-index10000000');
				});
				timelineLite.from('#value' + countValueBox, 1, {top: topLength, left: leftLength, onComplete: function() {
					var action =  intro._introItems[intro._currentStep].action;
					if (action == 'addElement') {
						addingElement();
					} else if(action == 'removeElement') {
						removingElement();
					}
				}});
			});
			break;
		case "hiddenSopDiv":
		case 'sop' + lineIndex:
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#sop' + lineIndex).addClass('z-index10000000').removeClass('visibility-hidden');
				typingId = '#sop' + lineIndex;
				typingContent = $('#sop' + lineIndex).html();
				typingInterval = typing_interval;
				cursorColor = '#333';
				typingCallbackFunction = function() {
					$(typingId).removeClass('typingCursor');
					$('.introjs-tooltip').removeClass('hide');
					typingId = '.introjs-tooltiptext';
					var action =  intro._introItems[intro._currentStep].action;
					typingContent = $('.introjs-tooltiptext').html();
					typingInterval = typing_interval;
					cursorColor = 'white';
					typingCallbackFunction = function() {
						$(typingId).removeClass('typingCursor');
						$('.introjs-nextbutton').show();
					}
					typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
			break;
		case "outputBox":
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			$('#sop' + lineIndex).removeClass('z-index10000000')
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#outputLine' + lineIndex).removeClass('visibility-hidden');
				typingId = '#outputLine' + lineIndex;
				typingContent = $('#outputLine' + lineIndex).html();
				typingInterval = 30;//this speed is slower then typing_interval
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$(typingId).removeClass('typingCursor');
					//restoring to original typing speed after typing effect in output
					typingInterval = typing_interval;
					lineIndex++;
					setTimeout(function() {
						intro.nextStep();
					}, 1000);
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
			break;
		case "methodsBox":
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			$('[contenteditable="true"]').attr('contenteditable', 'false');
			$('.introjs-helperLayer').one('transitionend', function () {
				typingId = '.introjs-tooltiptext';
				typingContent = 'Enter a String in <span class="ct-code-b-yellow">add()</span> or <span class="ct-code-b-yellow">remove()</span> ' +
								'method and click on <span class="duplicate-btn-sm-success">Go</span> button.';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$(typingId).removeClass('typingCursor');
					$('[contenteditable="false"]').attr('contenteditable', 'true');
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
			break;
		}
	});
	
	intro.start();
	$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
	$('.introjs-tooltipbuttons').append("<a class='introjs-button animation-button'>Next &#8594;</a>");
	$('.animation-button').hide();
	
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	
	$("[contenteditable=true]").keydown(function(e) {
		 if (e.which === 13) {
			e.preventDefault();
		 }
	    var max = $(this).attr("maxlength");
	    if ((e.which != 8) && (e.which != 46) && (e.which != 37) && (e.which != 39) &&($(this).text().length + 1) > max) {
	    	$('.length-error-text').empty();
	    	$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please limit the String's length to 8.</span>");
	    	e.preventDefault();
	    } else {
	    	$('.length-error-text').remove();
	    }
	});
	
	$(".input-box").on('click keyup',function() {
		var methodId = $(this).attr("methodId");
		$('.go-button').addClass('disabled').addClass('opacity40');
		$('.go-button[methodId=' + methodId + ']').removeClass('disabled').removeClass('opacity40');
		if (methodId == 0) {
			$('#removeByElementMethodValue').text('');
		} else {
			$('#addByElementMethodValue').text('');
		}
	});
	
	$('#addElementBtn').click(function() {
		if ($(this).hasClass("disabled")) {
			return;
		}
		$(this).addClass('disabled').addClass('opacity40');
		$('#randomCode').append('\n\t\t<span id="line' + lineIndex + '" class="visibility-hidden">status = namesSet.add("<span id="val' +
								lineIndex +	'" class="ct-code-pink">' + $('#addByElementMethodValue').text() + '</span>");</span>');
		var elementValue = $('#val' + lineIndex).text();
		if (elementValue == '') {
			elementValue = 'empty String';
		}
		$('#randomCode').append('\n\t\t<span id="sop' + lineIndex + '" class="visibility-hidden">System.out.println("add status for ' +
								'<span id="sopVal' + lineIndex + '" class="ct-code-pink">' + elementValue +	'</span>: " + status);' +
								'</span>');
		dynamicSteps('addElement');
		scrollToBottom('javaCode');
	});
	
	$('#removeElementBtn').click(function() {
		if ($(this).hasClass("disabled")) {
			return;
		}
		$(this).addClass('disabled').addClass('opacity40');
		$('#randomCode').append('\n\t\t<span id="line' + lineIndex + '" class="visibility-hidden">status = namesSet.remove("<span id="val' +
								lineIndex +	'" class="ct-code-pink">' + $('#removeByElementMethodValue').text() + '</span>");</span>');
		var elementValue = $('#val' + lineIndex).text();
		if (elementValue == '') {
			elementValue = 'empty String';
		}
		$('#randomCode').append('\n\t\t<span id="sop' + lineIndex + '" class="visibility-hidden">System.out.println("remove status ' +
								'for <span id="sopVal' + lineIndex + '" class="ct-code-pink">' +
								elementValue + '</span>: " + status);</span>');
		dynamicSteps('removeElement');
		scrollToBottom('javaCode');
	});
	
	$('.animation-button').click(function() {
		if ($(this).hasClass('no-duplicate')) {
			$(this).removeClass('no-duplicate').hide();
			intro._introItems[intro._currentStep + 1].intro = 'Since the <span class="ct-code-b-yellow">Set</span> instance is modified by ' +
																'this add operation, the <span class="ct-code-b-yellow">add()</span> method ' +
																'returns a <span class="ct-code-b-yellow">true</span>.';
			$('#animationJar').removeClass('blinking-border-jar-blue');
			recursionCount = 0;
			checkPositionOfValue();
		} else if ($(this).hasClass('duplicate')) {
			$(this).removeClass('duplicate').hide();
			intro._introItems[intro._currentStep + 1].intro = 'Since the <span class="ct-code-b-yellow">Set</span> instance is not modified by ' +
																'this add operation, the <span class="ct-code-b-yellow">add()</span> method ' +
																'returns a <span class="ct-code-b-yellow">false</span>.';
			timelineLite.to('#valueSpan' + countValueBox, 1, {opacity:0, left: 200, onComplete: function() {
				$('.blinking-border-background-red').removeClass('blinking-border-background-red');
				$('#valueSpan' + countValueBox).remove();
				$('#addByElementMethodValue').text('');
				var elementValue = $('#val' + lineIndex).text();
				if (elementValue == '') {
					elementValue = 'empty String';
				}
				$('#outputRandom').append('\n<span id="outputLine' + lineIndex + '" class="visibility-hidden">add status for ' +
											'<span class="ct-code-b-yellow">' + elementValue + '</span>: ' +
											'<span class="ct-code-b-red">false</span></span>');
				scrollToBottom('outputConsoleBody');
			}});
		} else if ($(this).hasClass('present')) {
			$(this).removeClass('present').hide();
			intro._introItems[intro._currentStep + 1].intro = 'Since the <span class="ct-code-b-yellow">Set</span> instance is modified by this ' +
																'remove operation, the <span class="ct-code-b-yellow">remove()</span> method ' +
																'returns a <span class="ct-code-b-yellow">true</span>.';
			timelineLite.to('.blinking-border-background-red', 1, {opacity:0, top: -300, onComplete: function() {
				$('.blinking-border-background-red').removeClass('set-value blinking-border-background-red').addClass('hide-value');
				changeElementId();
				countValueBox--;
				$('#removeByElementMethodValue').text('');
				var elementValue = $('#val' + lineIndex).text();
				if (elementValue == '') {
					elementValue = 'empty String';
				}
				$('#outputRandom').append('\n<span id="outputLine' + lineIndex + '" class="visibility-hidden">remove status for ' +
											'<span class="ct-code-b-yellow">' + elementValue + '</span>: ' +
											'<span class="ct-code-b-green">true</span></span>');
				scrollToBottom('outputConsoleBody');
			}});
		} else if ($(this).hasClass('not-present')) {
			$(this).removeClass('not-present').hide();
			intro._introItems[intro._currentStep + 1].intro = 'Since the <span class="ct-code-b-yellow">Set</span> instance is not modified by ' +
																'this remove operation, the <span class="ct-code-b-yellow">remove()</span> method ' +
																'returns a <span class="ct-code-b-yellow">false</span>.';
			$('#animationJar').removeClass('blinking-border-jar-red');
			timelineLite.to('#valueSpan' + countValueBox, 1, {opacity:0, left: 200, onComplete: function() {
				$('#valueSpan' + countValueBox).removeClass('blinking-border-background-red').remove();
				$('#removeByElementMethodValue').text('');
				var elementValue = $('#val' + lineIndex).text();
				if (elementValue == '') {
					elementValue = 'empty String';
				}
				$('#outputRandom').append('\n<span id="outputLine' + lineIndex + '" class="visibility-hidden">remove status for ' +
											'<span class="ct-code-b-yellow">' + elementValue + '</span>: ' +
											'<span class="ct-code-b-red">false</span></span>');
				scrollToBottom('outputConsoleBody');
			}});
		}
	});
}


function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		typingCallbackFunction();
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

function dynamicSteps(action) {
	var dynamicStep = {
			element : "#hiddenLineDiv",
			tooltipClass : "hide",
			action: action
	}
	intro.insertOption(intro._currentStep + 1, dynamicStep);
	var dynamicStep = {
			element : "#liveDisplayBox",
			tooltipClass : "hide",
			action: action
	}
	intro.insertOption(intro._currentStep + 2, dynamicStep);
	var dynamicStep = {
			element : "#hiddenSopDiv",
			tooltipClass : "hide"
	}
	intro.insertOption(intro._currentStep + 3, dynamicStep);
	var dynamicStep = {
			element : "#outputBox",
			tooltipClass : "hide"
	}
	intro.insertOption(intro._currentStep + 4, dynamicStep);
	var dynamicStep = {
			element : "#methodsBox",
			intro : ""
	}
	intro.insertOption(intro._currentStep + 5, dynamicStep);
}

function scrollToBottom(id) {
	var container = $('#' + id);
	scrollTo = $('#' + id).find('span').last();
	container.animate({
		scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
	}, function() {
		if (id == 'javaCode') {
			$('#hiddenLineDiv').offset({top: $("#line" + lineIndex).offset().top, left: $("#line" + lineIndex).offset().left})
								.css({width: $("#line" + lineIndex).width(), height: $("#line" + lineIndex).height()});
			$('#hiddenSopDiv').offset({top: $("#sop" + lineIndex).offset().top, left: $("#sop" + lineIndex).offset().left})
								.css({width: $("#sop" + lineIndex).width(), height: $("#sop" + lineIndex).height()});
			intro.nextStep();
		} else {
			setTimeout(function() {
				intro.nextStep();
			}, 1000);
		}
	});
}

function addingElement() {
	checkElementPresent();
}

function removingElement() {
	var elementNotPresent = true;
	$('.set-value').each(function(index) {
		if ($(this).text() == $('#removeByElementMethodValue').text()) {
			elementNotPresent = false;
			$('#valueSpan' + countValueBox).effect( "transfer", { to: $(this), className: "ui-effects-transfer" }, 1000, function() {
				$('#valueSpan' + countValueBox).remove();
				$('#valueSpan' + index).addClass('blinking-border-background-red');
				$('.introjs-tooltip').removeClass('hide');
				typingId = '.introjs-tooltiptext';
				var elementValue = '';
				if ($('#val' + lineIndex).text() == '') {
					elementValue = ' (i.e. <span class="ct-code-b-yellow value">empty String</span>)';
				}
				typingContent = 'Since "<span class="ct-code-b-yellow">' + $('#val' + lineIndex).text() + '</span>"' + elementValue + ' is ' +
								'present in the <span class="ct-code-b-yellow">Set</span> instance, it is removed from the <span class="ct-code-b-yellow">Set</span>.';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$(typingId).removeClass('typingCursor');
					$('.animation-button').addClass('present').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
			return;
		}
	});
	if (elementNotPresent) {
		$('.introjs-tooltip').removeClass('hide');
		$('#valueSpan' + countValueBox).addClass('blinking-border-background-red');
		$('#animationJar').addClass('blinking-border-jar-red');
		typingId = '.introjs-tooltiptext';
		var elementValue = '';
		if ($('#val' + lineIndex).text() == '') {
			elementValue = ' (i.e. <span class="ct-code-b-yellow value">empty String</span>)';
		}
		typingContent = 'Since "<span class="ct-code-b-yellow">' + $('#val' + lineIndex).text() + '</span>"' + elementValue + ' is not ' +
						'present in the <span class="ct-code-b-yellow">Set</span> instance, it cannot be removed.';
		typingInterval = typing_interval;
		cursorColor = 'white';
		typingCallbackFunction = function() {
			$(typingId).removeClass('typingCursor');
			$('.animation-button').addClass('not-present').show();
		}
		typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
	}
}

function changeElementId() {
	$('.set-value').each(function(index) {
		$(this).attr('id','valueSpan' + index);
	});
	$('.hide-value').each(function(index) {
		$(this).attr('id','hideValueSpan' + index);
	});
}

function checkElementPresent() {
	var noDuplicate = true;
	$('.set-value').each(function(index) {
		if ($(this).text() == $('#valueSpan' + countValueBox).text()) {
			noDuplicate = false;
			$(this).addClass('blinking-border-background-red');
			$('#valueSpan' + countValueBox).addClass('blinking-border-background-red');
			$('.introjs-tooltip').removeClass('hide');
			typingId = '.introjs-tooltiptext';
			var elementValue = '';
			if ($('#val' + lineIndex).text() == '') {
				elementValue = ' (i.e. <span class="ct-code-b-yellow value">empty String</span>)';
			}
			typingContent = 'Since "<span class="ct-code-b-yellow">' + $('#val' + lineIndex).text() + '</span>"' + elementValue + ' is already ' +
							'present in the <span class="ct-code-b-yellow">Set</span> instance, it is not added.';
			typingInterval = typing_interval;
			cursorColor = 'white';
			typingCallbackFunction = function() {
				$(typingId).removeClass('typingCursor');
				$('.animation-button').addClass('duplicate').show();
			}
			typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			return;
		}
	});
	if (noDuplicate) {
		$('#animationJar').addClass('blinking-border-jar-blue');
		$('.introjs-tooltip').removeClass('hide');
		typingId = '.introjs-tooltiptext';
		var elementValue = '';
		if ($('#val' + lineIndex).text() == '') {
			elementValue = ' (i.e. <span class="ct-code-b-yellow value">empty String</span>)';
		}
		typingContent = 'Since "<span class="ct-code-b-yellow">' + $('#val' + lineIndex).text() + '</span>"' + elementValue + ' is not already ' +
						'present in the <span class="ct-code-b-yellow">Set</span> instance, it is added now.';
		typingInterval = typing_interval;
		cursorColor = 'white';
		typingCallbackFunction = function() {
			$(typingId).removeClass('typingCursor');
			$('.animation-button').addClass('no-duplicate').show();
		}
		typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
	}
}

function checkPositionOfValue() {
	var elementOffset = $('#valueSpan' + countValueBox).offset();
	var elementHeight = $('#valueSpan' + countValueBox).outerHeight();
	var elementWidth = $('#valueSpan' + countValueBox).outerWidth();
	var animationJarOffset = $('#animationJar').offset();
	var animationJarHeight = $('#animationJar').height();
	var animationJarWidth = $('#animationJar').width();
	var topPosition = Math.floor((Math.random() * (animationJarHeight - elementHeight)) + animationJarOffset.top);
	var leftPosition = Math.floor((Math.random() * (animationJarWidth - elementWidth)) + animationJarOffset.left);
	valueArr[countValueBox] = {left: leftPosition, leftWidth: leftPosition + elementWidth,
												top: topPosition, topHeight: topPosition + elementHeight};
	var flag = true;
	for (var i = 0; i < valueArr.length-1; i++) {
		var p1, p2, p3, p4;
		p1 = [valueArr[countValueBox].left, valueArr[countValueBox].leftWidth];
		p2 = [valueArr[i].left, valueArr[i].leftWidth];
		p3 = [valueArr[countValueBox].top, valueArr[countValueBox].topHeight];
		p4 = [valueArr[i].top, valueArr[i].topHeight];
		if (comparePositions(p1, p2) && comparePositions(p3, p4) &&  recursionCount < 20) {
			recursionCount++;
			checkPositionOfValue();
			flag = false;
			break;
		}
	}
	if (flag) {
		setPositionOfValue(elementOffset, topPosition, leftPosition);
		return;
	}
}

function comparePositions( p1, p2 ) {
	var r1, r2;
	r1 = p1[0] < p2[0] ? p1 : p2;
	r2 = p1[0] < p2[0] ? p2 : p1;
	return r1[1] > r2[0] || r1[0] === r2[0];
}

function setPositionOfValue(elementOffset, topPosition, leftPosition) {
	timelineLite.to('#valueSpan' + countValueBox, 1, {top: (topPosition- elementOffset.top), left: (leftPosition - elementOffset.left),
		onComplete: function() {
		$('#valueSpan' + countValueBox).remove();
		$('#animationJar').append('<span id="valueSpan' + countValueBox + '" class="value-append-box set-value"><span id="value'
									+ countValueBox + '">' + $('#val' + lineIndex).text() + '</span></span>');
		$('#valueSpan' + countValueBox).offset({top: topPosition, left: leftPosition});
		var elementValue = $('#val' + lineIndex).text();
		if (elementValue == '') {
			elementValue = 'empty String';
		}
		$('#outputRandom').append('\n<span id="outputLine' + lineIndex + '" class="visibility-hidden">add status for ' +
									'<span class="ct-code-b-yellow">' + elementValue + '</span>: ' +
									'<span class="ct-code-b-green">true</span></span>');
		$('#addByElementMethodValue').text('');
		countValueBox++;
		scrollToBottom('outputConsoleBody');
	}});
}
