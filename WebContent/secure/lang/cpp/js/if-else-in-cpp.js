var flag;
var ifElseInCReady = function() {
	introJsGuide();
	$('.evaluateBtn').click(function() {
		$(this).addClass('hidden');
		if (marks > distinction_marks) {
			flag = true;
			introjs.goToStep(7);
		} else {
			flag = false;
			introjs.goToStep(9);
		}
	});
	
	$('.initializeBtn').click(function() {
		marks = $('#initializationValue').val();
		$(this).addClass('hidden');
		introjs.nextStep();
		$('.introjs-nextbutton').addClass("opacity00");
		$("#initializationValue").removeAttr("contenteditable");
	});
	
	$('#restartBtn').click(function() {
		location.reload();
	});
	
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});
	$(".allowNumbers").keydown(function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46,8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			
			e.preventDefault();
		}
		
		if ($(this).text().length >= max) {
			e.preventDefault();
		}
	});
	
	document.getElementById("initializationValue").addEventListener("input", function() {
		introjs.refresh();
		$('.changeVal').text($(this).val());
		if ($('#initializationValue').val().length > 0) {
			$(".initializeBtn").removeClass("opacity00");
			$('.introjs-prevbutton').show();
			$('.errorText').empty();
		} else {
			$('.errorText').html("Please enter a value for marks.");
			$('#initializationValue').focus();
			$(".initializeBtn").addClass("opacity00");
			$('.introjs-prevbutton').hide();
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

var marks;
var distinction_marks = 75;
var typingSpeed = 1;
function charAtEnd(elementId) {
	$('#' + elementId).select();
	var element = document.getElementById(elementId);
	var SearchInput = element;
    SearchInput.focus();
}
	
function flipEffect() {
	$(".animateBtn").addClass("hidden");
	$('#conditionTest').html("<b><span id='marks' style='display: inline-block;'>marks</span> &gt; "+
				"<span id='disMarks' style='display: inline-block;'>distinction_marks</span></b>");
	var l1 = $('#condition').offset();
	var l2 = $('#conditionTest').offset();
	var topLength = l1.top - l2.top;
	TweenMax.from('#conditionTest', 2, {top:"+=" + topLength, onComplete: function() {
		$('#conditionTest').css({'top': '', 'left': ''});
		flipEffectWithTweenMax($('#marks'), marks, function() {
			flipEffectWithTweenMax($('#disMarks'), distinction_marks, function(){
				if (marks > distinction_marks) {
					typing('#conditionTyping', 'evaluates to <b class=ct-code-b-yellow>true</b>.', function() {
						$(".evaluateBtn").removeClass("hidden");
						$(".introjs-prevbutton").show();
					});
				} else {
					typing('#conditionTyping', 'evaluates to <b class=color-red>false</b>.', function() {
						$(".evaluateBtn").removeClass("hidden");
						$(".introjs-prevbutton").show();
					});
				}
			});
		});
	}});
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
function backStep() {
	$(".backBtn").removeClass("hidden");
	introjs.goToStep(introjs._currentStep - 2);
}
	
function introJsGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [ {
			element : '#ifElseBlock',
			intro : "Above code demonstrates the working of <b class='ct-code-b-yellow' style = 'white-space: nowrap;'>if-else</b> block.",
			position : 'bottom',
			tooltipClass : 'introjs-tooltip-custom-width'			
		}, {
			element : '#ifBlock',
			intro : "This is called the <b class='ct-code-b-yellow' style = 'white-space: nowrap;'>if-block</b>.",
			position : 'bottom',
			tooltipClass : 'introjs-tooltip-custom-width'
		}, {
			element : '#elseBlock',
			intro : "This is called the <b class='ct-code-b-yellow' style = 'white-space: nowrap;'>else-block</b>",
			position : 'bottom',
			highlightClass : "else-css",
			tooltipClass : 'introjs-tooltip-custom-width'
		}, {
			element : '#citizenAge',
			intro : "An <b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>distinction_marks</b> is declared and initialized to " 
					+ "<b class='ct-code-b-yellow'>75</b>.",
			position : 'bottom',
			tooltipClass : 'introjs-tooltip-custom-width',
		}, {
			element : '#initialization',
			intro : "An <b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>marks</b> is declared and initialized to " 
					+ "<b class='ct-code-b-yellow changeVal'>"+$("#initializationValue").val()+
					"</b>.<br/> You can also change the value " 
					+ "<b class='ct-code-b-yellow'>60</b> to any other number.</span><br><span class='errorText'>",
			position : 'bottom',
			tooltipClass : 'introjs-tooltip-custom-width'
		}, {
			element : "#condition",
			intro : "<span class='opacity00 conditionTxt'>This is the <b class='ct-code-b-yellow'>condition</b> part. <br/>If the condition evaluates to " 
					+ "<b class='ct-code-b-yellow'>true</b>, control enters into the " 
					+ "<b class='ct-code-b-yellow'>if-block</b>, otherwise the control enters into the " 
					+ "<b class='ct-code-b-yellow'>else-block</b>." 
					+ "</span><br><div id='conditionTest'></div><br><span id='conditionTyping'></span>",
			position: "bottom",
			tooltipClass : "hide"
		}, {
			element : "#ifStmt",
			intro : "Since the condition evaluates to <b class='ct-code-b-yellow'>true</b>, control enters " 
					+ "into the <b class='ct-code-b-yellow'>if-block</b>.",
			position: "bottom"
		}, {
			element : "#outputDiv",
			tooltipClass : 'hide'
		}, {
			element : "#elseStmt",
			intro : "Since the condition evaluates to <b class='color-red'>false</b>, control enters " 
					+ "into the <b class='ct-code-b-yellow'>else-block</b>.",
			position: "bottom"
		}, {
			element : "#outputDiv",
			tooltipClass : 'hide'
		}, {
			element : '#mainEnd',
			intro : "End of the main block.",
			position: "bottom"
		}, {
			element : "#button",
			intro : "",
			position: "right",
		}]
	});
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-bullets,.introjs-skipbutton,.introjs-prevbutton').hide();
	$(".introjs-tooltipbuttons").append("<a class='introjs-button initializeBtn hidden'>Next &#8594;</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button evaluateBtn hidden'>Next &#8594;</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button animateBtn hidden' onclick='flipEffect()'>Next &#8594;</a>");
	$(".introjs-tooltipbuttons").prepend("<a class='introjs-button backBtn hidden' onclick='backStep()'>&#8592; Back</a>");
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "ifElseBlock":
			$('.introjs-prevbutton').hide();
			break;
		case "ifBlock":
		case "elseBlock":
			$('.introjs-prevbutton').show();
			$(".animateBtn,.evaluateBtn").addClass("hidden");
			introjs.refresh();
			break;
		case "citizenAge":
			$('.initializeBtn').addClass("hidden");
			$("#initializationValue").val("60");
			$('.introjs-nextbutton').show();
			break;
		case "initialization":
			$(".initializeBtn,.evaluateBtn").addClass("hidden");
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				charAtEnd("initializationValue");
				$('.introjs-nextbutton').addClass("opacity00");
				$('.initializeBtn').removeClass("hidden");
			});
			break;
			
		case "condition":
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$(".backBtn").addClass("hidden");
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = $(".conditionTxt").removeClass("opacity00").html();
				$(".introjs-tooltip").removeClass("hide")
				typing(".conditionTxt", text, function() {
					$(".animateBtn").removeClass("hidden");
				});
			});
			break;
			
		case "ifStmt":
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-nextbutton,.introjs-prevbutton').show();
				$('#output').empty().append("<div class='opacity00'>User got distinction.</div>");
			});
			break;
			
		case "elseStmt":
			$(".introjs-nextbutton").show();
			$('.introjs-prevbutton').hide();
			$(".backBtn").removeClass("hidden");
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#output').empty().append("<div class='opacity00'>User did not get distinction.</div>");
			});
			break;
			
		case "outputDiv":
			$(".backBtn").addClass("hidden");
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._direction == "backward") {
					$('#output > div').remove();
					if (flag) {
						setTimeout(function() {
							introjs.goToStep(7);
						}, 1000);
					} else {
						setTimeout(function() {
							introjs.goToStep(9);
						}, 1000);
					}	
				} else {
					$('#output > div').fadeTo(200, 1, function () {
						setTimeout(function() {
							introjs.goToStep(11);
						}, 1000);
					});
				}
			});
			break;
			
		case "mainEnd":
			$(".introjs-nextbutton").removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-prevbutton,.introjs-nextbutton").show();
			});
			break;
		
		case "button" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn, #closeBtn").removeClass("opacity00");
				var text = "<ul><li>Click on <span class='ct-code-b-yellow'>Close</span> button to close the Live Demo.</li>" +
						"<li>Click on <span class='ct-code-b-yellow'>Restart</span> button to restart the Live Demo.</li></ul>"
									
				typing('.introjs-tooltiptext', text, function() {
					$('#restartBtn').click(function() {
						location.reload();
						
					});
				});
			})
		}
	});
}

function typing(id, text, callBackFunction) {
	$(id).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(id).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
