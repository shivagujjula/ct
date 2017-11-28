

var age;
var SENIOR_CITIZEN_AGE = 60;
var typingSpeed = 20;
	function charAtEnd(elementId) {
		$('#' + elementId).select();
		var element = document.getElementById(elementId);
		element.focus();
		var range = document.createRange();
		range.selectNodeContents(element);
		range.collapse(false);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	}
	
	function flipEffect() {
		$(".animateBtn").remove();
		$('#conditionTest').html("<b><span><span class='age'><span class='flip-front'>age</span><span class='flip-back'>" + age + "</span></span></span>" +
				" <span id='citizenSpan'> <span>></span> <span class='SENIOR_CITIZEN_AGE'><span class='flip-front'>SENIOR_CITIZEN_AGE</span><span class='flip-back'>" + SENIOR_CITIZEN_AGE + "</span></span></span></b>");
		var l1 = $('#condition').offset();
		var l2 = $('#conditionTest').offset();
		var topLength = l1.top - l2.top;
		TweenMax.from('#conditionTest', 2, {top:"+=" + topLength, onComplete: function() {
			$('#conditionTest').css({'top': '', 'left': ''});
			$('.age').addClass("flipped").one("transitionend", function() {
				$('.SENIOR_CITIZEN_AGE').addClass("flipped").one("transitionend", function() {
					if (age > SENIOR_CITIZEN_AGE) {
						typing('#conditionTyping', 'evaluates to <b class=ct-code-b-yellow>true</b>.', function() {
							$(".evaluateBtn").removeClass("hidden");
						});
					} else {
						typing('#conditionTyping', 'evaluates to <b class=color-red>false</b>.', function() {
							$(".evaluateBtn").removeClass("hidden");
						});
					}
				});
				if ($('#initializationValue').text().length == 1) {
					$('#citizenSpan').css("left" , "18px");
				} else if ($('#initializationValue').text().length == 2) {
					$('#citizenSpan').css("left" , "25px");
				}
			})
			
		}});
	}

function introJsGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [ {
			element : '#ifElseBlock',
			intro : "The above code demonstrates the working of <b class='ct-code-b-yellow'>if-else</b> block.",
			position : 'bottom',
			tooltipClass : 'introjs-tooltip-custom-width'
		}, {
			element : '#citizenAge',
			intro : "The variable <b class='ct-code-b-yellow'>SENIOR_CITIZEN_AGE</b> is initialized to " 
					+ "<b class='ct-code-b-yellow'>60</b>.",
			position : 'bottom',
			tooltipClass : 'introjs-tooltip-custom-width'
		}, {
			element : '#initialization',
			intro : "The variable <b class='ct-code-b-yellow'>age</b> is declared and initialized to " 
					+ "<b class='ct-code-b-yellow changeVal'>56</b>.<br/> You can also change the value " 
					+ "<b class='ct-code-b-yellow changeVal'>56</b> to any other number.</span><br><span class='errorText'>",
			position : 'bottom',
			tooltipClass : 'introjs-tooltip-custom-width'
		}, {
			element : "#condition",
			intro : "<span class='opacity00 conditionTxt'>This is the <b class='ct-code-b-yellow'>condition</b> part. If the condition evaluates to " 
					+ "<b class='ct-code-b-yellow'>true</b>, the control enters into the " 
					+ "<b class='ct-code-b-yellow'>if</b> block, otherwise the control enters into the " 
					+ "<b class='ct-code-b-yellow'>else</b> block." 
					+ "</span><br><span id='conditionTest'></span><br><span id='conditionTyping'></span>",
			position: "bottom"
		}, {
			element : "#ifStmt",
			intro : "Since the condition evaluates to <b class='ct-code-b-yellow'>true</b>, the control enters " 
					+ "into the <b class='ct-code-b-yellow'>if</b> block.",
			position: "bottom"
		}, {
			element : "#outputDiv",
			tooltipClass : 'hide'
		}, {
			element : "#elseStmt",
			intro : "Since the condition evaluates to <b class='color-red'>false</b>, the control enters " 
					+ "into the <b class='ct-code-b-yellow'>else</b> block.",
			position: "bottom"
		}, {
			element : "#outputDiv",
			tooltipClass : 'hide'
		}, {
			element : '#mainEnd',
			intro : "",
			position : 'right'
		}, {
			element : "#restart",
			intro : "Click to restart.",
			position: "right",
		}]
	});
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	$(".introjs-tooltipbuttons").append("<a class='introjs-button initializeBtn hidden'>Next &#8594;</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button evaluateBtn hidden'>Next &#8594;</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button animateBtn hidden' onclick='flipEffect()'>Next &#8594;</a>");
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "initialization":
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#initializationValue").attr('contenteditable', true);
				charAtEnd("initializationValue");
				$('.introjs-nextbutton').addClass("opacity00");
				$('.initializeBtn').removeClass("hidden");
			});
			break;
		
		case "condition":
			$('.introjs-helperLayer').one('transitionend', function () {
				
				var text = $(".conditionTxt").removeClass("opacity00").html();
				typing(".conditionTxt", text, function() {
					$(".animateBtn").removeClass("hidden");
				});
			});
			break;
			
		case "ifStmt":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#output').append("<div class='opacity00'>Person is a senior citizen</div>");
			});
			break;
			
		case "elseStmt":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#output').append("<div class='opacity00'>Person is not a senior citizen</div>");
			});
			break;
			
		case "outputDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#output > div').fadeTo(200, 1, function () {
					setTimeout(function() {
						introjs.goToStep(9);
					}, 1000);
				});
			});
			break;
			
		case "mainEnd":
			
			$(".introjs-nextbutton").addClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "The control exits the main method.";
				
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").removeClass("opacity00");		
				});
				
			});
			break;
		
		case "restart":
			$('.introjs-tooltipbuttons').addClass("hide");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
}

var ifElseReady = function() {

	introJsGuide();
	$('.evaluateBtn').click(function() {
		$(this).addClass('hidden');
		if (age > SENIOR_CITIZEN_AGE) {
			introjs.goToStep(5);
		} else {
			introjs.goToStep(7);
		}
	});
	
	$('.initializeBtn').click(function() {
		age = $('#initializationValue').text();
		$(this).addClass('hidden');
		introjs.nextStep();
		$('.introjs-nextbutton').addClass("opacity00");
		$("#initializationValue").removeAttr("contenteditable");
	});
	
	$('#restart').click(function() {
		location.reload();
	});
	
	$(".allowNumbers").keydown(function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			
			e.preventDefault();
		}
		
		if ($(this).text().length > max) {
			e.preventDefault();
		}
	});
	
	document.getElementById("initializationValue").addEventListener("input", function() {
		introjs.refresh();
		$('.changeVal').text($(this).text());
		if ($('#initializationValue').text().length > 0) {
			$(".initializeBtn").removeClass("opacity00");
			$('.errorText').empty();
		} else {
			$('.errorText').html("Please enter a value for age.");
			charAtEnd("initializationValue");
			$(".initializeBtn").addClass("opacity00");
		}
		
		
	});
	
	$("body").keydown(function(e){
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	$("#initialization").click(function() {
		$("#initializationValue").focus();
	});
}

function typing(id, text, callBackFunction) {
	$(id).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}