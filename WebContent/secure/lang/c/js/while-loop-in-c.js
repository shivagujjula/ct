var introjs;
var value;
var condition;
var incrementTextTypingSpeed = 0;
var evaluateBtnCount = 0;

var whileLoopInCReady = function() {

	introJsGuide();
	
	$(".allowNumbers").keydown(function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($(this).text().length >= max) {
			e.preventDefault();
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
	
	$("#condition").click(function() {
		$("#conditionValue").focus();
	});
	
	$('.initializeBtn').click(function() {
		value = parseInt($("#initializationValue").text());
		$("#initializationValue").attr('contenteditable', false);
		$(this).addClass('hidden');
		$("#initializationValue").removeClass('position-absolute');
		$("#initializationValue").addClass('position-relative');
		initializeCup();
	});
	
	$('.evaluateBtn').click(function() {
		$(this).addClass('hidden');
		$('#conditionValue').attr('contenteditable', false);
		condition = parseInt($("#conditionValue").text());
		$('#conditionTest').html("<b><div style='display: inline-block' id='value'>value</div> <= " + condition +"</b>");
		var l1 = $('#condition').offset();
		var l2 = $('#conditionTest').offset();
		var topLength = l1.top - l2.top;
		TweenMax.from('#conditionTest', 1, {top:"+=" + topLength, onComplete: function() {
			$('#conditionTest').css({'top': '', 'left': ''});
				setTimeout(function() {
					$('#value').text(value);
				}, 500);
				$('#value').addClass('flip')
		}});
		if ( value <= condition) {
			$('#value').one('animationend', function() {
				$('#value').removeClass("flip");
				$('.introjs-nextbutton').addClass('opacity00');
				if (evaluateBtnCount > 0) {
					typing('#conditionTyping', 'evaluates to <b class="ct-code-b-yellow">true</b>.', function() {
						$('.introjs-nextbutton').addClass("hidden opacity00");
						$('.continueBtn').removeClass("hidden opacity00");
						$('.FinishBtn').removeClass("hidden opacity00");	
					});
				} else {
					typing('#conditionTyping', 'evaluates to <b class="ct-code-b-yellow">true</b>.', function() {
						$('.introjs-nextbutton').addClass("hidden opacity00");
						$('.continueBtn').removeClass("hidden opacity00");
					});
				}
				evaluateBtnCount++;
			});
		} else {
			$('#value').one('animationend', function() {
				$('#value').removeClass("flip");
				
				var text = "evaluates to <b class='color-red'>false</b>.<br>Since the condition evaluates to " 
							+ "<b class='color-red'>false</b> the control comes out of the " 
							+ "<b class='ct-code-b-yellow'>while-loop</b> body and the program terminates.";
				
				typing('#conditionTyping', text, function() {
					$('.FinishBtn').removeClass("opacity00 hidden");
					$('.introjs-nextbutton').addClass("hidden opacity00");
				});
				$('.FinishBtn').text("Done");
			});
		}
	});
	
	$(".incrementBtn").click(function() {
		$(this).addClass("hidden");
		
		var text = "Post-increment operator increments the value of variable <b class='ct-code-b-yellow'>value</b>" 
			+ " by <b class='ct-code-b-yellow'>1</b>. <br>Now <b class=''><span id='innerTravelledNum'>value</span>" 
			+ "<span id='travelledNum' class='''>value</span> = <span id='updatedValue'></span></b>";
		
		typing('#incrementText', text);
	});
	
	$('.FinishBtn').click(function() {
		$('.output-console-body').animate({scrollTop: 1500}, 500);
		$('.introjs-tooltipbuttons').hide();
		for (var i = value; i <= condition; i++, value++) {
			$("#output").append("<div>value : " + value + "</div>");
			$("#cupValue").text(i + 1);
		}
		introjs.goToStep(8);
	});
	
	$("#initializationValue").keyup(function() {
    	introjs.refresh();
    	$('.changeVal').text($(this).text());
        if ($(this).text().length > 0) {
        	$('.errorText').empty();
        	$(".initializeBtn").removeClass("opacity00");
        } else {
        	$(".initializeBtn").addClass("opacity00");
        	$('.errorText').html("Please initialize <b class='ct-code-b-yellow'>value</b> with a value.");
			charAtEnd("initializationValue");
        }
    });
	
	$("#conditionValue").keyup(function() {
    	introjs.refresh();
    	$('.changeVal').text($(this).text());
        if ($(this).text().length > 0) {
        	$('.errorText').empty();
        	$(".evaluateBtn").removeClass("opacity00");
        } else {
        	$(".evaluateBtn").addClass("opacity00");
        	$('.errorText').html("Please enter a value.");
			charAtEnd("conditionValue");
        }
    });
	
	$('.continueBtn').click(function() {
		$(this).addClass('hidden');
		$('.FinishBtn').addClass('hidden');
		introjs.goToStep(4);
	});
	
	$('#restart').click(function() {
		location.reload();
	});
	setInterval(function() {
		if ($('#cupValue').text().length == 2) {
			$('#cupValue').css('left', '8px');				
		} else if ($('#cupValue').text().length == 3) {
			$('#cupValue').css('left', '5px');
		}
	}, 100);
	
	$('.introjs-nextbutton').click(function() {
		if (introjs._currentStep == 6) {
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-nextbutton').addClass("opacity00");
				$('.evaluateBtn').click();
			});
		}
	});
}

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

function travellEffect() {
	$(".introjs-nextbutton").addClass("opacity00");
	var l1 = $('#travelledNum').offset();
	var l2 = $('#cup_num').offset();
	var topLength = l2.top-l1.top;
	var leftLength = l2.left-l1.left;
	
	TweenMax.to('#travelledNum', 1, {top:"+=" + topLength, left: "+=" + leftLength, onComplete: function() {
		$('#travelledNum').css({'top': '', 'left': ''});
		
		setTimeout(function() {
			$('#cupValue').text(value);
		}, 500);
		
		$('#cupValue').addClass('flip').one('animationend', function() {
			$('#cupValue').removeClass('flip');
			$('#updatedValue').text($('#cupValue').text());
			var l1 = $('#updatedValue').offset();
			var l2 = $('#cupValue').offset();
			var topLength = l2.top-l1.top;
			var leftLength = l2.left-l1.left;
			$('#updatedValue').offset({'top':l2.top, 'left':l2.left});
			$('#updatedValue').animate({'top': 0, 'left' : 0}, 1000, function() {
				$(".introjs-nextbutton").removeClass("opacity00");
			});
		});
	}});
}

function typing(id, content, callBackFunction) {
	var typingSpeed = 20;
	if (id.substring(1) === 'incrementText') {
		if (incrementTextTypingSpeed == 0) {
			typingSpeed = 20;
			incrementTextTypingSpeed = 10;
		} else {
			typingSpeed = 20;
		}
	}
	
	$(".introjs-nextbutton").addClass("opacity00 hidden");
	$(id).typewriting( content , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(id).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00 hidden");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function initializeCup() {
	$('.cup-bg').fadeTo(1500, 1, function() {
		value = parseInt($('#initializationValue').text());
		var l1 = $('#initializationValue').offset();
		var l2 = $('#cupValue').offset();
		var topLength = l2.top-l1.top;
		var leftLength = l2.left-l1.left;
		$('#initialization').append("<span id='inner_initializationValue'></span>");
		$("#inner_initializationValue").text(value);
		$("#inner_initializationValue").offset({ top: l1.top, left: l1.left});
		TweenMax.to($('#initializationValue'), 1, {top:"+=" + topLength, left: "+=" + leftLength, onComplete : function () {
			$('#initializationValue').css({'top': '', 'left': ''});
			$('#cupValue').text(value);
			$("#inner_initializationValue").remove();
			$('.introjs-nextbutton').removeClass("opacity00");
			$('.introjs-nextbutton').click().addClass('opacity00');
			$('.evaluateBtn').removeClass('hidden');
			$('#initializationValue').removeClass('position-relative');
			$('#initializationValue').addClass('position-absolute');
		}});
	});
}

function introJsGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [ {
			element : '#whileLoop',
			intro : "Above code demonstrates the working of a <b class='ct-code-b-yellow'>while-loop</b>.",
			position : 'bottom'
		},{
			element : '#initialization',
			intro : "The <b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>value</b> is declared and initialized to " 
					+ "<b class='ct-code-b-yellow changeVal'>1</b>. <br/><br/>You can also change the value " 
					+ "<b class='ct-code-b-yellow changeVal'>1</b> to any other number.<br><span class='errorText'></span>",
			position : 'bottom',
			tooltipClass : 'introjs-tooltip-custom-width',
		},{
			element : '#condition',
			intro : "<span>This is the <b class='ct-code-b-yellow'>condition</b> part.<br> If the condition evaluates to " 
					+ "<b class='ct-code-b-yellow'>true</b>,<br>the control enters into the <b class='ct-code-b-yellow'>while-loop</b> " 
					+ "body.</span><br><br><span><b class='ct-code-b-yellow'>While loop</b> is an entry controlled loop where the condition executes first.</span><br/><span class='errorText'></span><br><span id='conditionTest'></span><br> " 
					+ "<span id='conditionTyping'></span>",
			position : 'bottom',
			tooltipClass : 'introjs-tooltip-custom-width'
		}, {
			element : '#statement',
			intro : 'Above statement prints the value of the variable <b class="ct-code-b-yellow">value</b>.',
			position : 'bottom'
		}, {
			element : '#outputDiv',
			tooltipClass : 'hide'
		}, {
			element : '#update',
			intro : "<span class='incrementText'></span>",
			position : 'right'
		}, {
			element : '#condition',
			intro : "<span id='conditionTest'></span> " 
					+ "<br><span id='conditionTyping'></span>",
			position : 'bottom'
		}, {
			element: "#mainEnd",
			intro : "",
			position: "right"
		}, {
			element: "#restart",
			intro : "Click to restart.",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position: "right"
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
	$(".introjs-tooltipbuttons").append("<a class='introjs-button incrementBtn hidden'>Next &#8594;</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button FinishBtn hidden'>Finish</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button continueBtn hidden'>Next &#8594;</a>");
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "initialization":
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#initializationValue").attr("contenteditable", true);
				$('.introjs-nextbutton').addClass("opacity00");
				$('.initializeBtn').removeClass("hidden");
				charAtEnd("initializationValue");
			});
			break;
			
		case "condition":
			$('.introjs-nextbutton').show().addClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function () {
				if(introjs._currentStep == 2) {
					$("#conditionValue").attr("contenteditable", true);
				}
				charAtEnd("conditionValue");
				$('.evaluateBtn').removeClass("hidden");
			});
			break;
			
		case "statement":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#output').append("<div class='opacity00'>value : " + value + "</div>");
			});
			break;
		case "outputDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#output > div:last-child').fadeTo(500, 1, function () {
					$('.output-console-body').animate({scrollTop: 1500}, 500);
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				});
			});
			break;
		case "update":
			$('.introjs-nextbutton').show().addClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "Post-increment operator increments the value of variable <b class='ct-code-b-yellow'>value</b>" 
							+ " by <b class='ct-code-b-yellow'>1</b>. <br>Now <b class=''><span id='innerTravelledNum'>value</span>" 
							+ "<span id='travelledNum' class='''>value</span> = <span id='updatedValue'></span></b>";
				
				typing('.incrementText', text , function() {
					travellEffect();
				});
				
				value++;
			});
			break;
		case "mainEnd" :
			$('.introjs-tooltipbuttons').hide();
			$('.FinishBtn').remove();
			$('.continueBtn').remove();
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "Control comes out of the <b class='ct-code-b-yellow'>while-loop</b> and the program terminates.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-tooltipbuttons').show();
					$('.introjs-nextbutton').removeClass("opacity00");
				});
			});
			break;
		case "restart":
			$('.introjs-tooltipbuttons').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
				$('.cup-bg').css({'opacity': '0'});
			});
			break;
		}
	});
	
}