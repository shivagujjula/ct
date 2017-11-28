var intro;
var typing_interval = 10;
var timelineLite = new TimelineLite();

var arrayIntroductionReady = function() {

	
	var typingId;
	var typingContent;
	var typingInterval;
	var cursorColor;
	var typingCallbackFunction;
	
	var count = 0;
	
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
			intro : ""
		},
		{
			element : "#animationBox",
			intro : ""
		},
		{
			element : "#animationBox",
			intro : ""
		},
		{
			element : "#animationBox",
			intro : ""
		},
		{
			element : "#animationBox",
			intro : ""
		},
		{
			element : "#animationBox",
			intro : ""
		},
		{
			element : "#animationBox",
			intro : ""
		},
		{
			element : "#restartBtn",
			intro : "Click to Restart",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}
		]});
	
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "animationBox":
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 1) {
				$('#animationBox').empty();
				typingId = '.introjs-tooltiptext';
				typingContent = 'Suppose we want to write a program that prints the total marks scored by students in a class (say, for a total of <span class="ct-code-b-yellow">30</span> students).<br/>' +
								'One way of doing it is to declare 30 <span class="ct-code-b-yellow">int</span> variables, which is cumbersome when we think of students in multiple classes or the complete school.';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$(typingId).removeClass('typingCursor');
					$('.executeAnimationBtn').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			} else if (intro._currentStep == 2) {
				typingId = '.introjs-tooltiptext';
				typingContent = 'In such cases, when we want to store multiple values of the same data type, we use an <span class="ct-code-b-yellow">array</span> data structure.<br/>' +
								'An <span class="ct-code-b-yellow">array</span> is a kind of data structure that holds a fixed number of values of a single type, each identified by an <span class="ct-code-b-yellow">array index</span>.<br/>' +
								'For example, an <span class="ct-code-b-yellow">int array</span> of size <span class="ct-code-b-yellow">10</span> is represented as shown above.<span id="typingNote"></span>';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$(typingId).removeClass('typingCursor');
					$('.executeAnimationBtn').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			} else if (intro._currentStep == 3) {
				typingId = '.introjs-tooltiptext';
				typingContent = 'Essentially an <span class="ct-code-b-yellow">array</span> can be compare to a sequence of buckets/slots.<br/>' +
								'<ul id="ul"><li>The <span class="ct-code-b-yellow">first</span> bucket is identified with number <span class="ct-code-b-yellow">0</span></li></ul>';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$(typingId).removeClass('typingCursor');
					$('.executeAnimationBtn').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			} else if (intro._currentStep == 4) {
				typingId = '.introjs-tooltiptext';
				typingContent = 'An element of an <span class="ct-code-b-yellow">array</span> is retrieved/accessed using its <span class="ct-code-b-yellow">index</span> (i.e. <span class="ct-code-b-yellow">marksArr[index]</span>).<br/>' +
				'<ul id="ul"><li>If we want to set a value <span class="ct-code-b-yellow">33</span> in the <span class="ct-code-b-yellow">first</span> slot/bucket, we can do it using: <span class="ct-code-b-yellow">marksArr[0] = 33;</span>.</li></ul>';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$(typingId).removeClass('typingCursor');
					$('#animationBox').append('<div id="marksArrSet" class="animation-text"><div>');
					$('#animationBox').append('<span id="tempSet" class="font-size16"></span>');
					count = 0;
					$('.executeAnimationBtn').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			} else if (intro._currentStep == 5) {
				$('#marksArrSet').remove();
				typingId = '.introjs-tooltiptext';
				typingContent = 'Similarly,<br/><ul id="ul"><li>The value stored in the <span class="ct-code-b-yellow">first</span> bucket can be accessed using <span class="ct-code-b-yellow">marksArr[0]</span></li></ul>';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$(typingId).removeClass('typingCursor');
					$('#animationBox').append('<div id="marksArrGet"><div>');
					count = 0;
					$('.executeAnimationBtn').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			} else if (intro._currentStep == 6) {
				$('#marksArrGet').remove();
				typingId = '.introjs-tooltiptext';
				typingContent = 'The length of an array is specified at the time of creating the array.<br/>' +
								'If we want to access the size of an array, we use the <span class="ct-code-b-yellow">length</span> field.<br/>' +
								'For example, <span class="ct-code-b-yellow">marksArr.length</span> gives the length of the <span class="ct-code-b-yellow">array</span>.';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$(typingId).removeClass('typingCursor');
					$('.executeAnimationBtn').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			} else if (intro._currentStep == 7) {
				$('#animationBox').empty().addClass('font-family-monospace');
				typingId = '.introjs-tooltiptext';
				typingContent = 'In <span class="ct-code-b-yellow">Java</span>, we can create an <span class="ct-code-b-yellow">array</span> in the following two ways:';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$(typingId).removeClass('typingCursor');
					typingId = '#animationBox';
					typingContent = '<b class="ct-blue-color">SYNTAX 1</b> : <span class="ct-keywords-color">dataType</span>[] <span class="ct-variables-color">referenceName</span> = <span class="ct-keywords-color">new dataType</span>[size];<br/>' +
									'<br/>For Example: <span class="ct-keywords-color">int</span>[] <span class="ct-variables-color">marksArr</span> = <span class="ct-keywords-color">new int</span>[10];<br/>' +
									'<span class="ct-comment-color">// this creates an empty array of size <b>10</b> and initializes all values to <b>0</b>.</span><br/><br/>' +
									'<div class="text-center">or</div><br/>' +
									'<b class="ct-blue-color">SYNTAX 2</b> : <span class="ct-keywords-color">dataType</span>[] <span class="ct-variables-color">referenceName</span> = {value1, value2, value3, .....valueN};<br/>' +
									'<br/>For Example:<br><span class="ct-keywords-color">int</span>[] <span class="ct-variables-color">marksArr</span> = { 341, 425, 563, 231, 334, 446, 872, 492, 532, 747};<br/>' +
									'<span class="ct-comment-color">// this creates an array and also initializes it with the given values 341, 425, 563, 231, 334, 446, 872, 492, 532, 747.</span>';
					typingInterval = typing_interval;
					cursorColor = '#434D56';
					typingCallbackFunction = function() {
						$(typingId).removeClass('typingCursor');
						$('.introjs-nextbutton').show();
					}
					typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			}			
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
	$('.introjs-tooltipbuttons').append("<a class='introjs-button executeAnimationBtn'>Next &#8594;</a>");
	$('.executeAnimationBtn').hide();
	
	typingId = '.introjs-tooltiptext';
	typingContent = 'When we want to store some value in <span class="ct-code-b-yellow">Java</span> we use <span class="ct-code-b-yellow">variable</span>.<br/>' +
					'For example, if we want to process an integer value, we declare an <span class="ct-code-b-yellow">int</span> variable and assign the value to it.';
	typingInterval = typing_interval;
	cursorColor = 'white';
	typingCallbackFunction = function() {
		$(typingId).removeClass('typingCursor');
		$('.executeAnimationBtn').show();
	}
	typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
	
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	
	$('#restartBtn').click(function() {
		location.reload();
	});
	
	$('.executeAnimationBtn').click(function() {
		$(this).hide();
		if (intro._currentStep == 0) {
			typingId = '#animationBox';
			typingContent = '<span><span class="ct-keywords-color">int</span> <span class="ct-variables-color">age</span> = 16;</span>';
			typingInterval = typing_interval;
			cursorColor = '#434D56';
			typingCallbackFunction = function() {
				$(typingId).removeClass('typingCursor');
				$('.introjs-nextbutton').show();
			}
			typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
		} else if (intro._currentStep == 1) {
			typingId = '#animationBox';
			typingContent = '<span><span class="ct-keywords-color">int</span> <span class="ct-variables-color">student1</span>;<br/><span class="ct-keywords-color">int</span> <span class="ct-variables-color">student2</span>;<br/><span class="ct-keywords-color">int</span> <span class="ct-variables-color">student3</span>;<br/>...<br/>...<br/>...<br/><span class="ct-keywords-color">int</span> <span class="ct-variables-color">student30</span>;<br/></span>';
			typingInterval = typing_interval;
			cursorColor = '#434D56';
			typingCallbackFunction = function() {
				$(typingId).removeClass('typingCursor');
				$('.introjs-nextbutton').show();
			}
			typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
		} else if (intro._currentStep == 2) {
			if (count++ == 0) {
				$('#animationBox').empty().append('<div id="marksArrDiv" class="text-center">' +
											'</div>');
				creatingMarksArr();
				$('#marksArrText').fadeTo(1000, 1, function() {
					$('#marksArrExecuteBoxes').removeClass('visibility-hidden');
					typingId = '#typingNote';
					typingContent = '<br style="margin-bottom: 15px;"/><b>Note</b>: <span class="ct-code-b-yellow">marksArr</span> refers to an empty'
									+ ' <span class="ct-code-b-yellow">int array</span> of size <span class="ct-code-b-yellow">10</span>.<span id="typingSpan"></span>';
					typingInterval = typing_interval;
					cursorColor = 'white';
					typingCallbackFunction = function() {
						$(typingId).removeClass('typingCursor');
						$('#animationBox').append('<div class="animation-text"id ="marksArr"></div>');
						typingId = '#marksArr';
						typingContent = 'i.e. <span class="ct-keywords-color">int</span>[] <span class="ct-variables-color">marksArr</span> = <span class="ct-keywords-color">new int</span>[10];';
						typingInterval = typing_interval;
						cursorColor = '#434D56';
						typingCallbackFunction = function() {
							$(typingId).removeClass('typingCursor');
							$('.executeAnimationBtn').show();
						}
						typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
					}
					typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
				});
			} else {
				count = 0;
				typingId = '#typingSpan';
				typingContent = '<br style="margin-bottom: 15px;"/>Since the array is of type <span class="ct-code-b-yellow">int</span> '
								+ 'by default <span class="ct-code-b-yellow">0</span> is stored at every index '
								+ 'in the <span class="ct-code-b-yellow">int array</span>.';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$(typingId).removeClass('typingCursor');
					$('.marksArrTextLetter').removeClass('visibility-hidden');
					timelineLite.from('#marksArrExecuteBoxes', 1, {opacity:0, y: -200, onComplete: function() {
						$('.introjs-nextbutton').show();
					}});
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			}
		} else if (intro._currentStep == 3) {
			marksArrIndices(count++);
		} else if (intro._currentStep == 4) {
			marksArrSetData(count++);
		} else if (intro._currentStep == 5) {
			if (count < 2) {
				marksArrGetData(count++);
			} else {
				marksArrGetData(6);
			}
		} else if (intro._currentStep == 6) {
			$('#animationBox').append('<div id="marksArrLengthLine" class="animation-text"></div>');
			typingId = '#marksArrLengthLine';
			typingContent = 'The length of the array <span class="ct-variables-color">marksArr</span> (i.e. <span class="ct-variables-color">marksArr</span>.<span class="ct-blue-color">length</span>) is <b><span id="marksArrLength">0</span></b>.';
			typingInterval = typing_interval;
			cursorColor = '#434D56';
			typingCallbackFunction = function() {
				$(typingId).removeClass('typingCursor');
				marksArrLength(0);
			}
			typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
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

function creatingMarksArr() {
	$('#marksArrDiv').append('<table>' +
								'<tbody>' +
									'<tr>' +
										'<td class="td-text td-border-none"><span id="marksArrIndicesText" class="opacity00">Indices =</span></td>' +
										'<td colspan="10" class="td-border-none">' +
											'<table>' +
												'<tbody>' +
													'<tr id="marksArrExcecuteIndices">' +
													'</tr>' +
												'</tbody>' +
											'</table>' +
										'</td>' +
									'</tr>' +
									'<tr>' +
										'<td class="td-text td-border-none"><span id="marksArrText" class="opacity00">marksArr =</span></td>' +
										'<td colspan="10" class="td-border-none">' +
											'<table>' +
												'<tbody>' +
													'<tr id="marksArrExecuteBoxes" class="visibility-hidden">' +
													'</tr>' +
												'</tbody>' +
										'	</table>' +
										'</td>' +
									'</tr>' +
								'</tbody>' +
							'</table>');
	
	for (var index = 0; index < 10; index++) {
		$('#marksArrExcecuteIndices').append('<td id="marksArrIndicesBox'+ index +'" class="td-border-none"><span class="opacity00" id="marksArrIndicesLetter'+ index +'">' + index + '</span></td>');
		$('#marksArrExecuteBoxes').append('<td id = "marksArrTextBox'+ index +'"><span id="marksArrTextLetter'+ index +'" class="marksArrTextLetter visibility-hidden">0</span></td>');
	}
}

function marksArrIndices(index) {
	var indicesCallbackFunction;
	if (index < 2) {
		indicesCallbackFunction = function() {
			$('#ul').append('<li id="typing' + index + '"></li>');
			typingId = '#typing' + index;
			if (index == 0) {
				typingContent = 'The <span class="ct-code-b-yellow">second</span> bucket is identified with number <span class="ct-code-b-yellow">1</span>';
			} else if (index == 1) {
				typingContent = 'And the remaining follow the sequence till <span class="ct-code-b-yellow">length - 1</span>.';
			}
			typingInterval = typing_interval;
			cursorColor = 'white';
			typingCallbackFunction = function() {
				$(typingId).removeClass('typingCursor');
				$('.executeAnimationBtn').show();
			}
			typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
		}
	} else if (index < 9) {
		indicesCallbackFunction = function() {
			marksArrIndices(index + 1);
		}
	} else {
		indicesCallbackFunction = function() {
			$('.introjs-tooltiptext').append('<span id="typing' + index +'"></span>');
			typingId = '#typing' + index;
			typingContent = '<br/>This number used to identify the location of each bucket is called the <span class="ct-code-b-yellow">index</span>.';
			typingInterval = typing_interval;
			cursorColor = 'white';
			typingCallbackFunction = function() {
				$(typingId).removeClass('typingCursor');
				$('.introjs-nextbutton').show();
			}
			typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
		}
	}
	$('#marksArrTextBox' + index).effect("highlight", {color: '#003399'}, 1300);
	$('#marksArrIndicesLetter' + index).fadeTo(1300, 1, function() {
		indicesCallbackFunction();
	});
}

function marksArrSetData(index) {
	var number = [33, 45, 21, 52, 77, 60, 44, 11, 99, 74];
	var textsCallbackFunction;
	if (index < 2) {
		textsCallbackFunction = function() {
			$('#ul').append('<li id="typing' + index + '"></li>');
			typingId = '#typing' + index;
			if (index == 0) {
				typingContent =	'If we want to set a value <span class="ct-code-b-yellow">45</span> in the <span class="ct-code-b-yellow">second</span> slot/bucket, we can do it using : <span class="ct-code-b-yellow">marksArr[1] = 45;</span>.';
			} else if (index == 1) {
				typingContent = 'Similarly the remaining buckets can also be filled.';
			}
			typingInterval = typing_interval;
			cursorColor = 'white';
			typingCallbackFunction = function() {
				$(typingId).removeClass('typingCursor');
				$('.executeAnimationBtn').show();
			}
			typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
		}
	} else if (index == 9) {
		textsCallbackFunction = function() {
			$('.introjs-tooltiptext').append('<span id="typing' + index +'"></span>');
			typingId = '#typing' + index;
			typingContent = '<br/><b>Note</b>: Remember that array\'s <span class="ct-code-b-yellow">index</span> starts from <span class="ct-code-b-yellow">0</span> and not <span class="ct-code-b-yellow">1</span>.';
			typingInterval = typing_interval;
			cursorColor = 'white';
			typingCallbackFunction = function() {
				$(typingId).removeClass('typingCursor');
				$('#tempSet').remove();
				$('.introjs-nextbutton').show();
			}
			typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
		}
	} else {
		textsCallbackFunction = function() {
			marksArrSetData(index + 1);
		}
	} 
	$('#marksArrSet').append('<div id="marksArrSet'+ index + '"></div>');
	typingId = '#marksArrSet' + index;
	typingContent = '<span class="ct-variables-color">marksArr</span>[<span id="marksArrSetIndex' + index + '">' + index + '</span>] = <span id="numberSet' + index + '">' + number[index] + '</span>;';
	typingInterval = typing_interval;
	cursorColor = '#434D56';
	typingCallbackFunction = function() {
		$(typingId).removeClass('typingCursor');
		if (index < 2) {
			$('#animationBox').append('<span id="tempSetIndex" class="font-size16"></span>');
			var offsetIndex = $('#marksArrIndicesLetter' + index).offset();
			$('#tempSetIndex').text($('#marksArrIndicesLetter' + index).text()).offset({top: offsetIndex.top, left: offsetIndex.left});
			var l1 = $('#marksArrSetIndex' + index).offset();
			var l2 = $('#marksArrIndicesLetter' + index).offset();
			var topLength = l1.top-l2.top;
			var leftLength = l1.left-l2.left;
			timelineLite.from('#marksArrIndicesLetter' + index, 1, {top: topLength, left: leftLength, onComplete: function() {
				$('#tempSetIndex').remove();
				animatingMarksArrSetData(index, number, textsCallbackFunction);
			}});
		} else {
			animatingMarksArrSetData(index, number, textsCallbackFunction);
		}
	}
	typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
}

function animatingMarksArrSetData(index, number, textsCallbackFunction) {
	$('#marksArrIndicesBox' + index).effect("highlight", {color: '#003399'}, 1300);
	var offset = $('#marksArrTextLetter' + index).offset();
	$('#tempSet').offset({top: offset.top, left: offset.left});
	$('#tempSet').text($('#marksArrTextLetter' + index).text());
	$('#tempSet').css('opacity', '1');
	$('#marksArrTextLetter' + index).text(number[index]);
	var l1 = $('#numberSet' + index).offset();
	var l2 = $('#marksArrTextLetter' + index).offset();
	var topLength = l1.top-l2.top;
	var leftLength = l1.left-l2.left;
	timelineLite.from('#marksArrTextLetter' + index, 3, {ease:  Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
		textsCallbackFunction();
	}}).to('#tempSet', 1, { ease: Sine.easeOut, top: "-=100", opacity: 0, onComplete: function() {
		
	}}, "-=2");
}

function marksArrGetData(index) {
	var	textsCallbackFunction = function() {
			if (index < 2) {
				$('#ul').append('<li id="typing' + index + '"></li>');
			} else {
				$('.introjs-tooltiptext').append('<span id="typing' + index +'"></span>');
			}
			typingId = '#typing' + index;
			if (index == 0) {
				typingContent = 'The value stored in the <span class="ct-code-b-yellow">second</span> bucket can be accessed using <span class="ct-code-b-yellow">marksArr[1]</span>';
			} else if (index == 1){
				typingContent = 'The value stored in the <span class="ct-code-b-yellow">sixth</span> bucket can be accessed using <span class="ct-code-b-yellow">marksArr[6]</span>';
			} else {
				typingContent = '<br/><b>Note</b>: Remember that array\'s <span class="ct-code-b-yellow">index</span> starts from <span class="ct-code-b-yellow">0</span> and not <span class="ct-code-b-yellow">1</span>.';
			}
			typingInterval = typing_interval;
			cursorColor = 'white';
			typingCallbackFunction = function() {
				$(typingId).removeClass('typingCursor');
				if (index == 0) {
					$('.executeAnimationBtn').show();
				} else if (index == 1){
					$('.executeAnimationBtn').show();
				} else {
					$('.introjs-nextbutton').show();
				}
			}
			typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
		}
	$('#marksArrGet').append('<div id="marksArrGet'+ index + '" class="animation-text"></div>');
	typingId = '#marksArrGet' + index;
	typingContent = 'The value at index <b>' + index + '</b> (i.e. <span class="ct-variables-color">marksArr</span>[<span id="marksArrGetIndex' + index + '">' + index + '</span>]) is <b id="numberGet' + index + '"></b>.';
	typingInterval = typing_interval;
	cursorColor = '#434D56';
	typingCallbackFunction = function() {
		$(typingId).removeClass('typingCursor');
		$('#animationBox').append('<span id="tempGetIndex" class="font-size16"></span>');
		var offsetIndex = $('#marksArrIndicesLetter' + index).offset();
		$('#tempGetIndex').text($('#marksArrIndicesLetter' + index).text()).offset({top: offsetIndex.top, left: offsetIndex.left});
		var l1 = $('#marksArrGetIndex' + index).offset();
		var l2 = $('#marksArrIndicesLetter' + index).offset();
		var topLength = l1.top-l2.top;
		var leftLength = l1.left-l2.left;
		timelineLite.from('#marksArrIndicesLetter' + index, 1, {top: topLength, left: leftLength, onComplete: function() {
			$('#tempGetIndex').remove();
			$('#marksArrTextBox' + index).effect("highlight", {color: '#003399'}, 500, function() {
				$('#numberGet' + index).text($('#marksArrTextLetter' + index).text());
				var l1 = $('#marksArrTextLetter' + index).offset();
				var l2 = $('#numberGet' + index).offset();
				var topLength = l1.top-l2.top;
				var leftLength = l1.left-l2.left;
				timelineLite.from('#numberGet' + index, 1, {top: topLength, left: leftLength, onComplete: function() {
					textsCallbackFunction();
				}});
			});
		}});
	}
	typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
}

function marksArrLength(index) {
	$('#marksArrLength').effect("highlight", {color: '#003399'}, 500).delay(300).text(index + 1);
	$('#marksArrTextBox' + index).effect("highlight", {color: '#003399'}, 1300, function() {
		if (index == 9) {
			$('.introjs-nextbutton').show();
		} else {
			marksArrLength(index + 1);
		}
	});
}