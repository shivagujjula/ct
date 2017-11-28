
var intro;

var commandLineArgumentsInActionReady = function() {

	intro = introJs();
	
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#startBtn",
			intro : "Click to Start",
			position : "right"
		},
		{
			element : "#commandLine",
			intro : "Java program is executed using the <span class='ct-code-b-yellow'>java</span> command followed by class name.",
			position : "bottom"
		},
		{
			element : "#className",
			intro : "The class name should match the case as given in the source code.",
			position : "bottom"
		}, {
			element : "#commandLineValues",
			intro : "<ul><li>Arguments are provided after the class name in the command line.</li><li>Arguments are always interpreted as strings.</li><li>Each argument must be separated by a space.</li></ul><br>We have 3 arguments in this line.",
			position : "bottom"
		},
		{
			element : "#argsLine",
			intro : "<ul><li>JVM automatically creates a String array with all the arguments provided.</li><li>They can be accessed using the reference <span class='ct-code-b-yellow'>args</span>.</li></ul>",
			position : "bottom"
		},
		{
			element : "#animationBox",
			position : "top",
			tooltipClass : "hide"
		},
		{
			element : "#sopArgsLength",
			intro : "<ul><li>This statement prints the length of the array referenced by <span class='ct-code-b-yellow'>args</span>.</li><li><span class='ct-code-b-yellow'>args.length</span> will return the size of the array.</li></ul>",
			position : "bottom"
		},
		{
			element : "#animationBox",
			tooltipClass : "hide"
		},
		{
			element : ".output-console",
			tooltipClass : "hide"
		},
		{
			element : "#sopAgrsOf0",
			intro : "<ul><li>In Java arrays elements are stored from <span class='ct-code-b-yellow'>zero</span> index. It means that the first element is accessed with index <span class='ct-code-b-yellow'>0</span>, second with index <span class='ct-code-b-yellow'>1</span> and so on.</li><li>The above statement accesses the element present at index <span class='ct-code-b-yellow'>0</span> in the String array referenced by <span class='ct-code-b-yellow'>args</span>.</li></ul>",
			position : "bottom"
		},
		{
			element : "#animationBox",
			tooltipClass : "hide"
		},
		{
			element : ".output-console",
			tooltipClass : "hide"
		},
		{
			element : "#sopAgrsOf1",
			intro : "The above statement accesses the element present at index <span class='ct-code-b-yellow'>1</span> in the String array referenced by <span class='ct-code-b-yellow'>args</span>.",
			position : "bottom"
		},
		{
			element : "#animationBox",
			tooltipClass : "hide"
		},
		{
			element : ".output-console",
			tooltipClass : "hide"
		},
		{
			element : "#sopAgrsOf2",
			intro : "The above statement accesses the element present at index <span class='ct-code-b-yellow'>2</span> in the String array referenced by <span class='ct-code-b-yellow'>args</span>.",
			position : "bottom"
		},
		{
			element : "#animationBox",
			tooltipClass : "hide"
		},
		{
			element : ".output-console",
			tooltipClass : "hide"
		},
		{
			element : "#mainMethodCloseBrace",
			tooltipClass : "hide"
		},
		{
			element : "#restartBtn",
			intro : "Click to Restart",
			position : "right"
		}
		]});
	
		intro.start();
		$('.introjs-nextbutton').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();

	$('body').keypress(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	
	$("#startBtn").click(function() {
		$(this).addClass('hidden');
		$('#restartBtn').addClass('visibility-hidden').removeClass('hidden');
		$('.introjs-nextbutton').show();
		intro.nextStep();
	});
	
	$('#restartBtn').click(function() {
		window.location.href = "command-line-arguments-in-action.jsp?restart=1";
	});
	
	$('.introjs-nextbutton').click(function() {
		if (intro._currentStep == 5) {
			$('.introjs-nextbutton').hide();			
			$('.introjs-tooltip').css('display', 'none');
			setTimeout(function() {
				animateArrayWith(0);
			}, 1300);
		} else if (intro._currentStep == 7) {
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				animateLengthWith(0);
			}, 1300);
		} else if (intro._currentStep == 10) {
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				animateArrayIndexWith(0);
			}, 1300);
		} else if (intro._currentStep == 13) {
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				animateArrayIndexWith(1);
			}, 1300);
		} else if (intro._currentStep == 16) {
			$('.introjs-nextbutton').hide();
			setTimeout(function() {
				animateArrayIndexWith(2);
			}, 1300);
		}
	});
}

function animateArrayWith(index) {
	$("#value" + index).effect( "transfer", { to: $("#td" + index), className: "ui-effects-transfer" }, 1000, function() {
		$('#td' + index).addClass('td-border');
		if (index < 2) {
			animateArrayWith(index + 1);
		} else {
			$('.introjs-tooltip').removeClass('hide');
			$('.introjs-tooltiptext').addClass('height-width');
			$('.introjs-tooltiptext').typewriting("An array of size <span class='ct-code-b-yellow'>3</span> is created for storing the <span class='ct-code-b-yellow'>3</span> arguments.", {
				"typing_interval": 30,
				"cursor_color": 'white'
				}, function() {
					$('.introjs-tooltiptext').removeClass('typingCursor');
					$('.introjs-tooltiptext').removeClass('height-width');
					animateValueWith(0);
				});
		}
	});
}

function animateValueWith(index) {
	$('#tdValue' + index).removeClass('opacity00');
	var l1 = $('#value' + index).offset();
	var l2 = $('#tdValue' + index).offset();
	var topLength = l1.top-l2.top;
	var leftLength = l1.left-l2.left;
	TweenLite.from($('#tdValue' + index), 2, {top: topLength, left: leftLength, onComplete: function() {
		if (index < 2) {
			animateValueWith(index + 1);
		} else {
				intro.nextStep();
				$('.introjs-nextbutton').show();
		}
	}});
}

function animateLengthWith(index) {
	$('#td' + index).effect("highlight", {color: '#003399'}, 1300);
	$('#tdLength' + index).fadeTo(1300, 1, function() {
		if (index < 2) {
			animateLengthWith(index + 1);
		} else {
			intro.nextStep();
			setTimeout(function() {
				$('#outputArgsLength').typewriting("args.length : 3", {
					"typing_interval": 100,
					"cursor_color": 'white'
					}, function() {
						$('#outputArgsLength').removeClass('typingCursor');
						setTimeout(function() {
							intro.nextStep();
							$('.introjs-nextbutton').show();
							$('#tdLength0').addClass('visibility-hidden');
							$('#tdLength1').addClass('visibility-hidden');
							$('#tdLength2').addClass('visibility-hidden');
						}, 1300);
					});
			}, 1300);
		}
	});
}

function animateArrayIndexWith(index) {
	var l1 = $('#args' + index).offset();
	var l2 = $('#tdIndex' + index).offset();
	var topLength = l1.top-l2.top;
	var leftLength = l1.left-l2.left;
	$('#args' + index).addClass('args-circle');
	$('#args' + index).effect("highlight", {color: '#FFFFFF'}, 1000, function() {
		$('#args' + index).removeClass('args-circle');
		$('#tdIndex' + index).removeClass('opacity00');
		TweenLite.from($('#tdIndex' + index), 2, {top: topLength, left: leftLength, onComplete: function() {
			$('#td' + index).effect("highlight", {color: '#003399'}, 1300, function() {
				intro.nextStep();
				setTimeout(function() {
					$('#outputArgsOf' + index).typewriting("args[" + index + "] : " + $('#tdValue' + index).text(), {
						"typing_interval": 100,
						"cursor_color": 'white'
						}, function() {
							$('#outputArgsOf' + index).removeClass('typingCursor');
							setTimeout(function() {
								intro.nextStep();
								$('#tdIndex' + index).addClass('opacity00');
								if (intro._currentStep == 18) {
									setTimeout(function() {
									intro.nextStep();
									$('#restartBtn').removeClass('visibility-hidden');
								}, 2600);
								} else {
									$('.introjs-nextbutton').show();
								}
							}, 1300);
						});
				}, 1300);
			});
		}});

	});
}