var intro;
var timelineLite = new TimelineLite();
var typing_interval = 1;

var arrayListIntroductionReady = function() {

	
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
			element : "#animationBox",
			intro : ""
		},
		{
			element : "#animationBox",
			tooltipClass: "hide",
			intro : ""
		},
		{
			element : "#animationBox",
			tooltipClass: "hide",
			intro : ""
		},
		{
			element : "#animationBox",
			tooltipClass: "hide",
			intro : ""
		},
		{
			element : "#animationBox",
			tooltipClass: "hide",
			intro : ""
		},
		{
			element : "#animationBox",
			tooltipClass: "hide",
			intro : ""
		},
		{
			element : "#animationBox",
			tooltipClass: "hide",
			intro : ""
		},
		{
			element : "#button",
			intro : "<ul><li>Click on <span class='ct-code-b-yellow'>Close</span> button to close the Live Demo.</li>" +
					"<li>Click on <span class='ct-code-b-yellow'>Restart</span> button to restart the Live Demo.</li></ul>",
			position : 'right',

		}
		]});
	
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "animationBox":
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 1) {
				$('#arrText').fadeTo(1000, 1, function() {
					$('#arrExecuteBoxes').removeClass('visibility-hidden');
					timelineLite.from('#arrExecuteBoxes', 1, {opacity:0, y: -200, onComplete: function() {
						$('#arrIndicesText').fadeTo(1000, 1, function() {
							$('#arrExcecuteIndices').removeClass('visibility-hidden');
							timelineLite.from('#arrExcecuteIndices', 1, {opacity:0, y: -200, onComplete: function() {
								typingId = '#arrLength';
								typingContent = 'The length of <b>arr</b> is 10.';
								typingInterval = typing_interval;
								cursorColor = '#434D56';
								typingCallbackFunction = function() {
									$(typingId).removeClass('typingCursor');
									$('.introjs-tooltip').removeClass('hide');
									typingId = '.introjs-tooltiptext';
									typingContent = 'Now, if we want to include another number say <span class="ct-code-b-yellow">99</span>, we cannot extend the size of an existing <span class="ct-code-b-yellow">array</span>.<br/>';
									typingInterval = typing_interval;
									cursorColor = 'white';
									typing(typingId, typingContent, typingInterval, cursorColor, function() {
										$(typingId).removeClass('typingCursor');
										$('.introjs-nextbutton').show();
									});
								}
								typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
							}});
						});
					}});
				});
			} else if (intro._currentStep == 2) {
				$('#number99').fadeTo(1000, 1, function() {
					$('#arrTextBox10').fadeTo(1000, 1, function() {
						$('#arrTextLetter10').removeClass('opacity00').addClass('transfer-text-color');
						var l1 = $('#number99').offset();
						var l2 = $('#arrTextLetter10').offset();
						var topLength = l1.top-l2.top;
						var leftLength = l1.left-l2.left;
						timelineLite.from('#arrTextLetter10', 1, {top: topLength, left: leftLength, onComplete: function() {
							$('#arrTextLetter10').removeClass('transfer-text-color');
							$('#arrowLeft').fadeTo(1000, 1, function() {
								$('#cross').fadeTo(1000, 1, function() {
									$('.introjs-tooltip').removeClass('hide');
									typingId = '.introjs-tooltiptext';
									typingContent = 'In this situation we are forced to create a <span class="ct-code-b-yellow">new array</span> of a larger size which can accommodate existing values and the new value.<br/>In this case we will have to create an <span class="ct-code-b-yellow">int array</span> of size <span class="ct-code-b-yellow">11</span>.';
									typingInterval = typing_interval;
									cursorColor = 'white';
									typing(typingId, typingContent, typingInterval, cursorColor, function() {
										$(typingId).removeClass('typingCursor');
										$('.introjs-nextbutton').show();
									});
								});
							});
						}});
					});
				});
			} else if (intro._currentStep == 3) {
				$('#tempArrText').fadeTo(1000, 1, function() {
					$('#tempArrExecuteBoxes').removeClass('visibility-hidden');
					timelineLite.from('#tempArrExecuteBoxes', 1, {opacity:0, y: -200, onComplete: function() {
						$('#tempArrIndicesText').fadeTo(1000, 1, function() {
							$('#tempArrExcecuteIndices').removeClass('visibility-hidden');
							timelineLite.from('#tempArrExcecuteIndices', 1, {opacity:0, y: -200, onComplete: function() {
								$('.introjs-tooltip').removeClass('hide');
								typingId = '.introjs-tooltiptext';
								typingContent = 'First we will have to copy existing elements to <span class="ct-code-b-yellow">new array</span>.';
								typingInterval = typing_interval;
								cursorColor = 'white';
								typingCallbackFunction = function() {
									$(typingId).removeClass('typingCursor');
									$('.introjs-nextbutton').show();
								}
								typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
							}});
						});
					}});
				});
			} else if (intro._currentStep == 4) {
				$('.tempArr').removeClass('opacity00').addClass('transfer-text-color');
				var l1 = $('.arr').offset();
				var l2 = $('.tempArr').offset();
				var topLength = l1.top-l2.top;
				var leftLength = l1.left-l2.left;
				console.log("top " + topLength);
				console.log("left " + leftLength);
				timelineLite.from('.tempArr', 1, {top: topLength, left: leftLength, onComplete: function() {
					$('.tempArr').removeClass('transfer-text-color');
					$('.introjs-tooltip').removeClass('hide');
					typingId = '.introjs-tooltiptext';
					typingContent = 'Now we can include the new element <span class="ct-code-b-yellow">99</span> in the last position, which is empty.';
					typingInterval = typing_interval;
					cursorColor = 'white';
					typingCallbackFunction = function() {
						$(typingId).removeClass('typingCursor');
						$('.introjs-nextbutton').show();
					}
					typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
				}});
			} else if (intro._currentStep == 5) {
				$('#tempArrTextLetter10').removeClass('opacity00').addClass('transfer-text-color');
				var l1 = $('#number99').offset();
				var l2 = $('#tempArrTextLetter10').offset();
				var topLength = l1.top-l2.top;
				var leftLength = l1.left-l2.left;
				timelineLite.from('#tempArrTextLetter10', 1, {top: topLength, left: leftLength, onComplete: function() {
					$('#tempArrTextLetter10').removeClass('transfer-text-color');
					typingId = '#tempArrLength';
					typingContent = 'The length of <b>tempArr</b> is 11.';
					typingInterval = typing_interval;
					cursorColor = '#434D56';
					typingCallbackFunction = function() {
						$(typingId).removeClass('typingCursor');
						$('.introjs-tooltip').removeClass('hide');
						typingId = '.introjs-tooltiptext';
						typingContent = 'Finally we have to let the <span class="ct-code-b-yellow">original array</span> point to the temporary array <span class="ct-code-b-yellow">tempArr</span> we created.';
						typingInterval = typing_interval;
						cursorColor = 'white';
						typingCallbackFunction = function() {
							$(typingId).removeClass('typingCursor');
							$('.introjs-nextbutton').show();
						}
						typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
					}
					typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
				}});
			} else if (intro._currentStep == 6) {
				$('#finallyLine').append('<span id="ie" class="opacity00">i.e.</span>&nbsp;<b><span id="arr1" class="opacity00">arr</span>&nbsp;<span id="equal" class="opacity00">=</span>&nbsp;<span id="tempArr1" class="opacity00">tempArr</span><span id="semicolon" class="opacity00">;<span></b></span>');
				$('#ie').fadeTo(1000, 1, function() {
					$('#arr1').removeClass('opacity00');
					var l1 = $('#arr').offset();
					var l2 = $('#arr1').offset();
					var topLength = l1.top-l2.top;
					var leftLength = l1.left-l2.left;
					timelineLite.from('#arr1', 2, {top: topLength, left: leftLength, onComplete: function() {
						$('#equal').fadeTo(1000, 1, function() {
							$('#tempArr1').removeClass('opacity00');
							var l1 = $('#tempArr').offset();
							var l2 = $('#tempArr1').offset();
							var topLength = l1.top-l2.top;
							var leftLength = l1.left-l2.left;
							timelineLite.from('#tempArr1', 2, {top: topLength, left: leftLength, onComplete: function() {
								$('#semicolon').fadeTo(1000, 1, function() {
									$('#number99Div, #arrLength, #arrExcecuteIndices, #arrExecuteBoxes').addClass('visibility-hidden');
									$('#arrExcecuteIndices').append("<span class='box box-indices text-center' id='arrIndicesBox10'>" +
																		"<span class='box-letter indices-color' id='arrIndicesLetter10'>10</span>" +
																	"</span>");
									$('#arrowCross').remove();
									$('#arrExecuteBoxes').removeClass('visibility-hidden');
									var l1 = $('#tempArrExecuteBoxes').offset();
									var l2 = $('#arrExecuteBoxes').offset();
									var topLength = l1.top-l2.top;
									var leftLength = l1.left-l2.left;
									$('#arrTextRow, #arrIndicesRow').css('height', '34px');
									timelineLite.from('#arrExecuteBoxes', 2, {top: topLength, left: leftLength, onComplete: function() {
										$('#arrExcecuteIndices').removeClass('visibility-hidden');
										var l1 = $('#tempArrExcecuteIndices').offset();
										var l2 = $('#arrExcecuteIndices').offset();
										var topLength = l1.top-l2.top;
										var leftLength = l1.left-l2.left;
										timelineLite.from('#arrExcecuteIndices', 2, {top: topLength, left: leftLength, onComplete: function() {
											$('#arrLength').removeClass('visibility-hidden').css('height', '37px');
											typingId = '#arrLength';
											typingContent = 'The length of <b>arr</b> is 11.';
											typingInterval = typing_interval;
											cursorColor = '#434D56';
											typingCallbackFunction = function() {
												$(typingId).removeClass('typingCursor');
												$('.introjs-tooltip').removeClass('hide');
												typingId = '.introjs-tooltiptext';
												typingContent = 'This is how an <span class="ct-code-b-yellow">ArrayList</span> works internally.<br>It uses an array and whenever it is full, it creates a new array of larger size to accommodate the new elements.';
												typingInterval = typing_interval;
												cursorColor = 'white';
												typingCallbackFunction = function() {
													$(typingId).removeClass('typingCursor');
													$('.introjs-nextbutton').show();
												}
												typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
											}
											typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
										}});
									}});
								});
							}});
						});
					}});
				});
			} else if (intro._currentStep == 7) {
				$('#arrDiv').slideUp(1000, function() {
					$('#finallyLine').addClass('visibility-hidden');
					$('#tempArrText').fadeTo(1000, 0, function() {
						$('#tempArrText').text("arr =").fadeTo(1000, 1, function() {
							typingId = '#tempArrLength';
							typingContent = 'The length of <b>arr</b> is 11.';
							typingInterval = typing_interval;
							cursorColor = '#434D56';
							typingCallbackFunction = function() {
								$(typingId).removeClass('typingCursor');
								$('.introjs-tooltip').removeClass('hide');
								typingId = '.introjs-tooltiptext';
								typingContent = 'This is how an <span class="ct-code-b-yellow">ArrayList</span> works internally.<br>It uses an array and whenever it is full it creates a new array of larger size to accommodate the new elements.';
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
					});
				});
			}
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
	
	intro.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	
	typingId = '.introjs-tooltiptext';
	typingContent = 'To store multiple elements we normally use <span class="ct-code-b-yellow">arrays</span>.<br/>For example, if we want to store <span class="ct-code-b-yellow">10</span> numbers, we can use an <span class="ct-code-b-yellow">int array</span> of size <span class="ct-code-b-yellow">10</span>.';
	typingInterval = typing_interval;
	cursorColor = 'white';
	typingCallbackFunction = function() {
		$(typingId).removeClass('typingCursor');
		$('.introjs-nextbutton').show();
	};
	
	typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
	
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
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		typingCallbackFunction();
	});
}