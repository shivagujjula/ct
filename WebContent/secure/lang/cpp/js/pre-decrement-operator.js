var introcode;
var typingInterval = 1;
var tl = new TimelineLite();
var sopLineCount = 1;

var preDecrementOperatorReady = function() {
	introcode = introJs();
	introcode.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
						element :'#program',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#yVariableDeclararionLine',
						intro :'',
						tooltipClass : "hide",
						animateStep: "working"
					},{
						element :'#animationDiv1',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#xVariableDeclararionLine',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#xCup',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#yVariableDeclararionLine',
						intro :'',
						tooltipClass : "hide",
						animateStep: "example"
					},{
						element :'#expressionStatement',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#sopLine1',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#outputDiv',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#sopLine2',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#outputDiv',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#singleStatement',
						intro :'',
						tooltipClass : "hide"
					},{
						element: '#animationDiv5',
						intro: '',
						tooltipClass: 'hide'
					},{
						element :'#sopLine3',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#outputDiv',
						intro :'',
						tooltipClass : "hide"
					},{
						element : "#button",
						intro : "",
						position : "right"
					}]
	});
	
	introcode.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case "animationDiv1"  :
			$('.animation-div1').addClass("opacity00").css("opacity", "");
			$('.animation-div2').addClass("opacity00").css("opacity", "");
			$('.animation-div3').addClass("opacity00").css("opacity", "");
		break;
		case "yVariableDeclararionLine"  :
			if(introcode._currentStep == 1) {
				$('.animation-div1').addClass("opacity00").css("opacity", "");
				$('.animation-div2').addClass("opacity00").css("opacity", "");
				$('.animation-div3').addClass("opacity00").css("opacity", "");
			} else if(introcode._currentStep == 5) {
				$('#xCupValue').text($('#xvalue').text());
				$('#yCup').addClass('visibility-hidden');
				$('.animation-div5').addClass('opacity00').css('opacity', "");
				$('#yCupValue').text("");
			} else if(introcode._currentStep == 6) {
				$('#xCupValue').text($('#xvalue').text());
			}
		break;
		case "xVariableDeclararionLine":
			$("#xCup").addClass("visibility-hidden");
			$("#xvalue").attr("contenteditable", "true");
			$('.introjs-tooltip').removeClass('hide');
		break;
		case "expressionStatement":
			$('#yCup').addClass('visibility-hidden');
			$('.animation-div5').addClass('opacity00').css('opacity', "");
			$('#yCupValue').text("");
		break;
		case "outputDiv":
			if (introcode._currentStep == 10) {
				$('#yValue').remove();
			} 
			
		break;
		case "singleStatement"  :
			if (introcode._currentStep == 11) {
				$("#xCupValue").text("13");
				$(".animation-div6").addClass("opacity00").css("opacity", "");
			} 
		break;
		}
	});
	introcode.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		if (introcode._introItems[introcode._currentStep]["tooltipClass"] == "hide") {
			introcode._introItems[introcode._currentStep]["animation"] = "repeat";
		}
		
		if (introcode._introItems[introcode._currentStep]["isCompleted"]) {
			if (introcode._currentStep != 1) {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introcode._introItems[introcode._currentStep]["animation"] != "repeat") {
			introcode._introItems[introcode._currentStep]["isCompleted"] = true;
		}
	var elementId = targetElement.id;
		switch (elementId) {
			case "program" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				 text = '<span class="ct-code-b-yellow">--</span> indicates decrement.<br>'+
				 		'When it is applied before a variable, for example: <span class="ct-code-b-yellow">--x</span>,'+
				 		' it is called <span class="ct-code-b-yellow">pre-decrement</span>.<br/><br/>'+
				 		'Let us learn how a <span class="ct-code-b-yellow">pre-decrement</span> operator '+
				 		'works.'
				 		$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
					$('.introjs-nextbutton').show();
				});
			break;
			case "yVariableDeclararionLine"  :
				$(".introjs-duplicate-nextbutton").remove();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
					case "working" :
						$('.introjs-tooltip').removeClass('hide');
						text = 'Here, <span class="ct-code-b-yellow">y</span> is assigned'+
								' a value with <span class="ct-code-b-yellow">--x</span>.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					break;
					case "example" :
						$('.introjs-tooltip').removeClass('hide');
						text = 'Here, we are using a '+
								'<span class="ct-code-b-yellow">pre-decrement</span> operator.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					break;
					}
				});
			break;
			case "animationDiv1"  :
				introcode.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.animation-div1').fadeTo(500, 1, function() {
						svgBoxAnimation(0, function() {
							$('.introjs-tooltip').removeClass('hide');
							text = 'In the above expression, we are using <span class="ct-code-b-yellow">pre-decrement</span>'+
									' (<span class="ct-code-b-yellow">--x</span>) operator  '+
									' on a variable <span class="ct-code-b-yellow">x</span>.<br/></br/>'+
									'First, the value of <span class="ct-code-b-yellow">x</span> will be decremented'+
									' by <span class="ct-code-b-yellow">one</span>. And then ' +
									'the value of <span class="ct-code-b-yellow">x</span> will be assigned to the'+
									' variable <span class="ct-code-b-yellow">y</span>.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								xValueincrementByOne();
							});
						});
					});
				});
			break;
			case "xVariableDeclararionLine":
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Let us work with a live example.<br/>'+
							'Please provide a value for <span class="ct-code-b-yellow">x</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$("#xvalue").effect( "highlight",{color: 'yellow'});
						caretAtEnd(document.getElementById('xvalue'));
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "xCup":
				if(introcode._direction == 'forward') {
				$("#xvalue").attr("contenteditable", "false");
				$("#xVariableDeclararionLine").addClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#xVariable").effect( "highlight",{color: '#ffff33'}, 500);
					$("#xVariable").effect( "transfer", { to: $("#xCup"), className: "ui-effects-transfer" }, 1000 , function(){
						$("#xCup").removeClass("visibility-hidden");
						$("#xCupValue").text($("#xvalue").text());
						$("#xCupValue").addClass("z-index100000000").removeClass("visibility-hidden");
						fromEffectWithTweenMax('#xvalue', '#xCupValue', function() {							
						   $("#xCupValue").removeClass("z-index100000000");
						   $("#xVariableDeclararionLine").removeClass("z-index1000000");
						   setTimeout(function(){
							   introcode.nextStep();
						   },800);
						});
					});							
				});
				} else {
					$("#xCup").addClass("visibility-hidden");
					$("#xCupValue").text("");
					 setTimeout(function(){
						   introcode.previousStep();
					   },800);
				}
			break;
			case "expressionStatement":
				$("#yVariableDeclararionLine").addClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#yVariable").effect( "highlight",{color: '#ffff33'}, 500);
					$("#yVariable").effect( "transfer", { to: $("#yCup"), className: "ui-effects-transfer" }, 1000 , function(){
						$("#yCup").removeClass("visibility-hidden");
							setTimeout(function() {
								$("#yVariableDeclararionLine").effect( "highlight",{color: '#ffff33'}, 500);
								$("#yVariableDeclararionLine").effect( "transfer", { to: $("#yvalueassignment"), className: "ui-effects-transfer" }, 1000 , function(){
									$('.animation-div5').fadeTo(500, 1, function() {
										$("#yVariableDeclararionLine").removeClass("z-index1000000");
										predecrementOperatorAnimation();
									});
								});
						  },1000);
					});							
				});
			break;
			case "sopLine1":
				$('.introjs-helperLayer').one('transitionend', function() {
					if(introcode._direction == 'forward') {
						setTimeout(function(){
							introcode.nextStep();
						},1000);
					} else {
						setTimeout(function(){
							introcode.previousStep();
						},1000);
					}
				});
				break;
			case "sopLine3":
				$('.introjs-helperLayer').one('transitionend', function() {
					if(introcode._direction == 'forward') {
						setTimeout(function(){
							introcode.nextStep();
						},1000);
					} else {
						setTimeout(function(){
							introcode.previousStep();
						},1000);
					}
				});
				break;
			case "sopLine2":
				$('.introjs-helperLayer').one('transitionend', function() {
					if(introcode._direction == 'forward') {
						setTimeout(function(){
							introcode.nextStep();
						},1000);
					} else {
						setTimeout(function(){
							introcode.previousStep();
						},1000);
					}
				});
				break;
			case "outputDiv":
				$("#xCup").removeClass("z-index1000000");
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introcode._currentStep == 8) {
						if(introcode._direction  == 'forward') {
						$(".output").append('<span id="xValue"> x value : '+ $("#xCupValue").text() + '</span><br>');
						setTimeout(function(){
							introcode.nextStep();
						},1000);
					} else {
						$('#xValue').remove();
						$('.output').empty();
						setTimeout(function(){
							introcode.previousStep();
						},1000);
					}
					} else if (introcode._currentStep == 10) {
						if(introcode._direction  == 'forward') {
						$(".output").append('<span id="yValue"> y value : '+ $("#yCupValue").text() + '</span>');
							setTimeout(function(){
								introcode.nextStep();
							},1000);
					} else {
						$('#yValue').remove();
						setTimeout(function(){
							introcode.previousStep();
						},1000);
					}
				} else {
					if(introcode._direction == 'forward') {
					$(".output").append('<br><span id="xValue1"> x value : '+ $("#xCupValue").text() + '</span>');
					setTimeout(function(){
						introcode.nextStep();
					},1000);
					} else {
						$('#xValue1').remove();
						setTimeout(function(){
							introcode.previousStep();
						},1000);
					}
				}
				});
				break;
			case "singleStatement"  :
				$(".introjs-duplicate-nextbutton").remove();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = '<span class="ct-code-b-yellow">pre-decrement</span> operator '+
							'can also be applied on a variable which can exist as a single statement'+
							' as shown here.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "animationDiv5"  :
				$(".introjs-duplicate-nextbutton").remove();
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#singleStatement").effect( "highlight",{color: 'yellow'});
					$("#singleStatement").effect( "transfer", { to: $("#singleStatementDiv"), className: "ui-effects-transfer" }, 1000 , function(){
						TweenMax.to('.animation-div6', 1, {opacity: 1, onComplete: function() {
							$('.introjs-tooltip').removeClass('hide');
							text = '<span class="ct-code-b-yellow">x</span> value '+
									'which is currently <span class="ct-code-b-yellow">'+ $("#xCupValue").text() +'</span>'+
									' will be <span class="ct-code-b-yellow">decremented</span> by'+
									' <span class="ct-code-b-yellow">1</span>.'+
									'<br/><span id="appendSpan"></span>';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$("#xCup").addClass("z-index1000000");
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
								$(".introjs-duplicate-nextbutton").click(function() {
									$('.introjs-tooltip').removeClass('hide');
									$(".introjs-duplicate-nextbutton").remove();
									TweenMax.to($("#xCupValue"), 1, {rotationX : -90, onComplete:function() {
										$("#xCupValue").text(parseInt($("#xCupValue").text()) - 1);
										if ($("#xCupValue").text().length == 3) {
											 $("#xCupValue").css({"left": 52});
										}
										TweenMax.to($("#xCupValue"), 1, {rotationX : 0, onComplete:function() {
											text = 'Finally, the value of <span class="ct-code-b-yellow">x</span>'+
													' becomes <span class="ct-code-b-yellow">'+ 
													$("#xCupValue").text() +'</span>.';
											typing('#appendSpan', text, typingInterval, 'white', function() {
												$('.introjs-nextbutton, .introjs-prevbutton').show();
											});
										}});
									}});
								});
							});
						}});
					});
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
						$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});

					});
				});
			break;
		}
	});
	introcode.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide(); 
	changeValue();
	
	$('#restartBtn').click(function() {
		location.reload();
		
	});
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});
}

function predecrementOperatorAnimation() {
	$('.introjs-tooltip').removeClass('hide');
	text = 'First, the value <span class="ct-code-b-yellow">'+ $("#xvalue").text() +'</span>'+
			' contained in <span class="ct-code-b-yellow">x</span> is '+
			'<span class="ct-code-b-yellow">decremented</span>'+
			' by <span class="ct-code-b-yellow">1</span>.';
	typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
		$(".introjs-duplicate-nextbutton").click(function() {
			$('.introjs-tooltip').removeClass('hide');
			$(".introjs-duplicate-nextbutton").remove();
			TweenMax.to($("#xCupValue"), 1, {rotationX : -90, onComplete:function() {
				$("#xCupValue").text(parseInt($("#xCupValue").text()) - 1);
				if ($("#xCupValue").text().length == 3) {
					$("#xCupValue").css({"left": 52});
					left = 52;
				}
				TweenMax.to($("#xCupValue"), 1, {rotationX : 0, onComplete:function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Later the value <span class="ct-code-b-yellow">'+ $("#xCupValue").text() +'</span>'+
							' which is in the variable <span class="ct-code-b-yellow">x</span> is '+
							'assigned to the variable '+
							'<span class="ct-code-b-yellow">y</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
						$(".introjs-duplicate-nextbutton").click(function() {
							$('.introjs-tooltip').removeClass('hide');
							$(".introjs-duplicate-nextbutton").remove();
							$("#yCupValue").text($("#xCupValue").text());
							$(".y-cup").addClass("blinking");
							$("#yCupValue").addClass("z-index100000000").removeClass("visibility-hidden");
							fromEffectWithTweenMax('#xCupValue', '#yCupValue', function() {
								$(".y-cup").removeClass("blinking");
								$("#yCupValue").removeClass("z-index100000000");
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
				}});
			}});
		});
	});
}

function xValueAssignedToVariabley() {
	$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>" + 
	"Next &#8594;</a>");
	$(".introjs-duplicate-nextbutton").click(function() {
		$(".introjs-duplicate-nextbutton").remove();
		$('.animation-div3').fadeTo(500, 1, function() {
			$('.introjs-tooltip').removeClass('hide');
			text = 'Later the <span class="ct-code-b-yellow">x</span> value will be assigned to the '+
					'variable <span class="ct-code-b-yellow">y</span>.';
			typing('#appendSpan1', text, typingInterval, 'white', function(){
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
		});
	});
}

function xValueincrementByOne() {
	$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
	$(".introjs-duplicate-nextbutton").click(function() {
		$(".introjs-duplicate-nextbutton").remove();
		$('.introjs-tooltip').removeClass('hide');
		text = 'Let us see how the <span class="ct-code-b-yellow">y = --x</span> operation occurs in detail: '+
				'<br/><br/><span id="appendSpan"></span>';
		typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
			$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
			$(".introjs-duplicate-nextbutton").click(function() {
				$(".introjs-duplicate-nextbutton").remove();
				$('.animation-div2').fadeTo(500, 1, function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'First, the value of <span class="ct-code-b-yellow">x</span> will be '+
							'<span class="ct-code-b-yellow">decremented</span> by '+
							'<span class="ct-code-b-yellow">1</span>.<br/><br/><span id="appendSpan1"></span>';
					typing('#appendSpan', text, typingInterval, 'white', function(){
						xValueAssignedToVariabley();
					});
				});
			});
		});
	});
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

function svgBoxAnimation(index, callBackFunction) {
	$("#predecrement").addClass("svg-border");
	$('.svg-line').eq(index).show();
	TweenMax.to($('.svg-line').eq(index), 0.5, {attr: {y2: '20%'}, onComplete: function() {
		TweenMax.to($('.svg-text').eq(index), 0.5, {fill: '#333', onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
				introcode._introItems[introcode._currentStep].introcode = $(".introjs-tooltiptext").html();
			}
		}});
	}});
}

//cursor position at end
function caretAtEnd(element) {
	element.focus();
	if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
		var range = document.createRange();
		range.selectNodeContents(element);
		range.collapse(false);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	}
}

//typing function
function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : typingInterval,
		"cursor_color" : cursorColor
	}, function() {
		$(typingId).removeClass("typingCursor");
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
} 

//Allow only numbers,Condition to  enter text, change the array values, Display error message & Fill all the array elements
function changeValue() {
	$("[contenteditable=true]").on("keydown", function(e) {
		$('.length-error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($(this).text().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>String length to 2.</span>");
			e.preventDefault();
		}
	});
	
	$("[contenteditable=true]").on("keyup", function(e) {
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter number.</span>");
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introcode.refresh();
		
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
	});
} 
