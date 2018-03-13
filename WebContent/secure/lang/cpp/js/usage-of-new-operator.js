var usageOfNewOperatorReady = function() {
	introGuide();
}
function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	$("#restartBtn").click(function() {
		location.reload();
	});
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :'#infoDiv',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#preCode',
			intro : '',
			position : 'right',
		}, {
			element : '#firstExLine1',
			intro : '',
		}, {
			element : '#pBox',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#firstExLine2',
			intro : '',
		}, {
			element : '#newBox',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'tweenmaxSvg',
			tooltipClass : 'hide',
		}, {
			element : '#firstExLine3',
			intro : '',
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'tweenmax',
			tooltipClass : 'hide',
		}, {
			element : '#firstExLine4',
			intro : '',
		}, {
			element : '#consoleId',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#preCodeTwo',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element : '#secondExLine1',
			intro : '',
		}, {
			element : '#kBox',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#secondExLine2',
			intro : '',
		}, {
			element : '#newBox1',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#secondExDiv',
			intro : '',
			animateStep : 'tweenmaxSvg',
			tooltipClass : 'hide',
		/*}, {
			element : '#kValue',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#secondExDiv',
			intro : '',
			animateStep : 'tweenmax',
			tooltipClass : 'hide', */
		}, {
			element : '#secondExLine4',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#consoleId1',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#preCodeThree',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element : '#thirdExLine1',
			intro : '',
		}, {
			element : '#rBox',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#thirdExLine2',
			intro : '',
		}, {
			element : '#arrayDiv',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#thirdExDiv',
			intro : '',
			animateStep: 'tweenmaxArrowAnimate',
			tooltipClass : 'hide',
		}, {
			element :'#button',
			intro : "",
			position : 'right',
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case 'firstExLine1':
			$("#pBox").addClass("opacity00");
			break;
		case 'pBox':
			$("#pBox").addClass("opacity00");
			break;
		case 'firstExLine2':
			$("#newBox").addClass("opacity00");
			break;
		case 'firstExLine3':
			$("#Value").addClass("opacity00");
			break;
		case 'firstExLine4':
			$("#printText").addClass("visibility-hidden");
			$("#firstExDiv").removeClass("z-index9999999");
			break;
		case 'newBox':	
			$("#newBox").addClass("opacity00");
			$("#cValue").addClass("opacity00");
			$("#svg1").remove();
			break;
		case 'firstExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'tweenmaxSvg':
				$("#cValue").addClass("opacity00");
				$("#svg1").remove();
				break;
			case 'tweenmax':
				$("#Value").addClass("opacity00");
				break;
			}
			break;
		case 'consoleId':
			$("#exampleTwo").addClass("opacity00");
			break;
		case 'secondExLine1':
			$("#kBox").addClass("opacity00");
			break;
		case 'kBox':
			$("#kBox").addClass("opacity00");
			break;
		case 'secondExLine2':
			$("#newBox1, #Value1").addClass("opacity00");
			break;
		case 'newBox1':
			$("#newBox1").addClass("opacity00");
			$("#dValue").addClass("opacity00");
			$("#svg2").remove();
			break;
		case 'kValue':
			$("#Value1").addClass("opacity00");
			break;
		case 'secondExLine4':
			$("#secondExDiv").removeClass("z-index9999999");
			$("#printText1").addClass("visibility-hidden");
			break;
		case 'secondExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
				case 'tweenmaxSvg':
					$("#dValue").addClass("opacity00");
					$("#svg2").remove();
					break;
				case 'tweenmax':
					$("#Value1").addClass("opacity00");
					break;
			}
			break;
		 case 'consoleId1':
			$("#exampleThree").addClass("opacity00");
			break;
		case 'thirdExLine1':
			$("#rBox").addClass("opacity00");
			break;
		case 'rBox':
			$("#eValue").addClass("opacity00");
			$("#svg3").remove();
		case 'thirdExLine2':
			$("#arrayDiv").addClass("opacity00");
			$("#svg3").remove();
			break;
		case 'arrayDiv':
			$("#arrayDiv").addClass("opacity00");
			$("#svg3").remove();
			break;
			break;
		case 'thirdExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
				case 'tweenmaxArrowAnimate':
					$("#eValue").addClass("opacity00");
					$("#svg3").remove();
					break;
			}
			break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			if (introjs._currentStep != 0 && introjs._currentStep != 1) {
				$('.introjs-prevbutton').show();
			} 
			$('.introjs-nextbutton').show();
			return;
		}
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv':
			//$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list1").fadeTo(300, 1, function() {
				$('#nextButton1').removeClass("opacity00");
				$('.user-btn').click(function() {
					$('#nextButton1').remove();
					$("#list2").fadeTo(300, 1, function() {
						$('#nextButton').removeClass("opacity00");
						$('.user-btn').click(function() {
							$('#nextButton').remove();
							$("#infoDiv").addClass('z-index9999999');
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					});
					
				});
			});	
			break;
		case 'preCode':
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleOne").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Let us consider an example.", function() {
					TweenMax.to($("#preCode"), 1, {opacity: 1, onComplete: function(){
						$("#preCode").removeClass("opacity00");
						$(".introjs-nextbutton").show();
						$(".introjs-prevbutton").hide();
					}});
				});
			});
			break;
		case 'firstExLine1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = 	"The pointer variable <span class='ct-code-b-yellow'>p</span> " +
							"is declared of data-type <span class='ct-code-b-yellow'>int</span>. " +
							"The <span class='ct-code-b-yellow'>int</span> pointer variable, should " +
							"always point to an <span class='ct-code-b-yellow'>int</span> value.";
				typing('.introjs-tooltiptext',text , function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'pBox':
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$("#totalfirstExDiv").removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				var text = "The pointer variable <span class='ct-code-b-yellow'>p</span> is " +
						   "of type <span class='ct-code-b-yellow'>int</span> and it occupies " +
						   "<span class='ct-color-lime'>2 bytes</span> of memory with some address. " +
						   "Let us assume this address to be <span class='ct-code-b-yellow'>2024</span>.";
				typing('.introjs-tooltiptext', text, function() {
					boxAnimation("#pBox", function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			});
			break;
		case 'firstExLine2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = 	"<ul><li>The <span class='ct-code-b-yellow'>new</span> operator " +
							"allocates the dynamic memory of the two bytes" +
							"(<span class='ct-code-b-yellow'>int</span>).</li>" +
							"<li> The <span class='ct-code-b-yellow'>new</span> operator returns " +
							"the pointer to the <span class='ct-code-b-yellow'>base address</span> " +
							"of the <span class='ct-code-b-yellow'>heap memory</span> allocated.</li>" +
							"<li>The <span class='ct-code-b-yellow'>new</span> operator always returns " +
							"a <span class='ct-code-b-yellow'> void</span> pointer. So a typecast should " +
							"be done to the data-type of the pointer.</li></ul>";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'newBox':
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					$('.introjs-tooltip').removeClass('hide');
					var text = "The size of memory allocated is <span class='ct-color-lime'>2 bytes</span>" +
							   " in <span class='ct-code-b-yellow'>heap memory</span>, as the new operator" +
							   " has return <span class='ct-color-lime'>2 bytes</span> for the" +
							   " <span class='ct-code-b-yellow'>int</span> data-type. Let us assume" +
							   " the address as <span class='ct-code-b-yellow'>1054</span>.";
					typing('.introjs-tooltiptext', text, function() {
						boxAnimation("#newBox", function() {
							$(".introjs-nextbutton").show();
						});
					});
				}
			});
			break;
		case 'firstExLine3':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here the <span class='ct-code-b-yellow'>pointer</span> variable " +
						   "<span class='ct-code-b-yellow'>*p</span> assigned with a value of " +
						   "<span class='ct-code-b-yellow'>20</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'firstExLine4':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = 'This statement prints the <span class="ct-code-b-yellow">value</span> '+
						   'of <span class="ct-code-b-yellow">*p</span>.';
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'firstExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'tweenmaxSvg':
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._direction == "backward") {
						//$("#newBox").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$('.introjs-tooltip').removeClass('hide');
						var text =  "So the address is stored into the variable " +
									"<span class='ct-code-b-yellow'>p</span> i.e. " +
									"<span class='ct-code-b-yellow'>1054</span> is stored.";
						typing('.introjs-tooltiptext', text, function() {
							tweenmaxAnimation("#newAddress", "#cValue");
						});
					}
				});
				break;
			case 'tweenmax':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = 	"The <span class='ct-code-b-yellow'>pointer</span> variable " +
							   	"<span class='ct-code-b-yellow'>p</span> is pointed to the " +
							   	"address <span class='ct-code-b-yellow'>1054</span>.<br>" +
								"<span class='ct-code-b-yellow'>*p</span> represents value " +
								"at that address. So the value <span class='ct-code-b-yellow'>20</span> " +
								"is stored at <span class='ct-code-b-yellow'>1054</span>.";
					typing('.introjs-tooltiptext', text, function() {
						tweenmaxValueAnimation("#pValue", "#Value");
					});
				});
				break;
			}
			break;
		case 'consoleId':
			$("#firstExDiv").addClass("z-index9999999");
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					$("#printText").removeClass("visibility-hidden");
					var text = $("#printText").html();
					typing($("#printText"), text, function() {
						$("#firstExDiv").removeClass("z-index9999999");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					});
				}
			});
			break;
		case 'preCodeTwo':
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleTwo").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext', "Let us consider another example.", function() {
					TweenMax.to($("#preCodeTwo"), 1, {opacity: 1, onComplete: function(){
						$("#preCodeTwo").removeClass("opacity00");
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					}});
				});
			});
			break;
		case 'secondExLine1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "The pointer variable <span class='ct-code-b-yellow'>p</span> is " +
							"declared of data-type <span class='ct-code-b-yellow'>int</span>. " +
							"The <span class='ct-code-b-yellow'>int</span> pointer variable, " +
							"should always point to an <span class='ct-code-b-yellow'>int</span> value." 
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'secondExLine2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "<ul><li>The <span class='ct-code-b-yellow'>new</span> operator allocates " +
						    "the dynamic memory of the two bytes(<span class='ct-code-b-yellow'>int</span>) " +
						    "and the value <span class='ct-code-b-yellow'>20</span> is assigned to that memory.</li> " +
							"<li>The <span class='ct-code-b-yellow'>new</span> operator returns the pointer to the " + 
							"<span class='ct-code-b-yellow'>base address</span> of the <span class='ct-code-b-yellow'>" +
							"heap memory</span> allocated. </li>" +
							"<li>The <span class='ct-code-b-yellow'>new</span> operator always returns a " +
							"<span class='ct-code-b-yellow'> void</span> pointer. So a typecast should be " +
							"done to the data-type of the pointer.</li></ul>"; 
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'newBox1':
			$("#newSpan1").removeClass("blinking");
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					$('.introjs-tooltip').removeClass('hide');
					var text = 	"The size of memory allocated is <span class='ct-color-lime'>2 bytes</span> " +
							   	"in <span class='ct-code-b-yellow'>heap memory</span>, " +
								"as the new operator has return <span class='ct-color-lime'>2 bytes</span> " +
								"for the <span class='ct-code-b-yellow'> int</span> data-type. " +
								"Let us assume the address as <span class='ct-code-b-yellow'>3456</span>.";
					typing('.introjs-tooltiptext', text, function() {
						boxAnimation("#newBox1", function() {
							$(".introjs-nextbutton").show();
						});
					});
				}
			});
			break;
		case 'kBox':
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$("#totalSecondExDiv").removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"The pointer variable <span class='ct-code-b-yellow'>p</span> " +
							"is of type <span class='ct-code-b-yellow'>int</span> " +
							"and it occupies <span class='ct-color-lime'>2 bytes</span> " +
							"of memory with some address. Let us assume this address to " +
							"be <span class='ct-code-b-yellow'>1234</span>.";
				typing('.introjs-tooltiptext', text, function() {
					boxAnimation("#kBox", function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			});
			break;
		case 'kValue':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#kValue").addClass("blinking");
				var text = "We can also initialize the memory using new operator.";
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext', text, function() {
					$("#kValue").removeClass("blinking");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'secondExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
				case 'tweenmaxSvg':
					$('.introjs-helperLayer').one('transitionend', function() {
						if (introjs._direction == "backward") {
							setTimeout(function () {
								introjs.previousStep();
							}, 1000);
						} else {
							$('.introjs-tooltip').removeClass('hide');
							var text = "So the address is stored into the variable " +
									   "<span class='ct-code-b-yellow'>p</span> i.e. " +
									   "<span class='ct-code-b-yellow'>3456</span> is stored.";
							typing('.introjs-tooltiptext', text, function() {
								tweenmaxAnimation1("#newAddress1", "#dValue");
							});
						}
					});
					break;
			}
			break;
		case 'secondExLine4':
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				var text = 'This statement prints the <span class="ct-code-b-yellow">value</span> '+
						   'of <span class="ct-code-b-yellow">*p</span>.';
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		
		case 'consoleId1':
			$("#consoleId1").removeClass("opacity00");
			$("#secondExDiv").addClass("z-index9999999");
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					$("#printText1").removeClass("visibility-hidden");
					var text = $("#printText1").html();
					typing($("#printText1"), text, function() {
						$("#secondExDiv").removeClass("z-index9999999");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					});
				}
			});
			break;
		case 'preCodeThree':
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleThree").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"Let us consider an example.", function() {
					TweenMax.to($("#preCodeThree"), 1, {opacity: 1, onComplete: function(){
						$("#preCodeThree").removeClass("opacity00");
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					}});
				});
			});
			break;
		case 'thirdExLine1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "The pointer variable <span class='ct-code-b-yellow'>p</span> " +
							"is declared of data-type <span class='ct-code-b-yellow'>int</span>. " +
							"The <span class='ct-code-b-yellow'>int</span> pointer variable, " +
							"should always point to an <span class='ct-code-b-yellow'>int</span> value." 
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'rBox':
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$("#totalThirdExDiv").removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"The pointer variable <span class='ct-code-b-yellow'>p</span> " +
							"is of type <span class='ct-code-b-yellow'>int</span> " +
							"and it occupies <span class='ct-color-lime'>2 bytes</span> " +
							"of memory with some address. Let us assume this address to be " +
							"<span class='ct-code-b-yellow'>1357</span>.";
				typing('.introjs-tooltiptext', text, function() {
					boxAnimation("#rBox", function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			});
			break;
		case 'thirdExLine2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = 	"<ul><li>The <span class='ct-code-b-yellow'>new</span> operator " +
							"allocates the dynamic memory of the <span class='ct-code-b-yellow'>10</span> " +
							"bytes of <span class='ct-code-b-yellow'>5</span> regions" +
							"(<span class='ct-code-b-yellow'>int</span>).</li> " +
							"<li>The <span class='ct-code-b-yellow'>new</span> " +
							"operator returns the pointer to the  " +
							"<span class='ct-code-b-yellow'>base address</span> of " +
							"the <span class='ct-code-b-yellow'>heap memory</span> allocated.</li>" +
							"<li>A <span class='ct-code-b-yellow'>new</span> operator always " +
							"returns a <span class='ct-code-b-yellow'> void</span> pointer. " +
							"So a typecast should be done to the data-type of the pointer.</li></ul>"; 
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'arrayDiv':
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					$('.introjs-tooltip').removeClass('hide');
					var text = 	"Here each int value will occupy <span class='ct-color-lime'>2 bytes</span> " +
								"of memory, so total memory allocated is <span class='ct-code-b-yellow'>10 bytes</span> " +
								"divided as <span class='ct-code-b-yellow'>5</span> addresses.";
					typing('.introjs-tooltiptext', text, function() {
						boxAnimation("#arrayDiv", function() {
							$(".introjs-nextbutton").show();
						});
					});
				}
			});
			break;
		case 'thirdExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
				case 'tweenmaxArrowAnimate':
					$('.introjs-helperLayer').one('transitionend', function() {
						if (introjs._direction == "backward") {
							setTimeout(function () {
								introjs.previousStep();
							}, 1000);
						} else {
							$('.introjs-tooltip').removeClass('hide');
							var text = 	"The base address of <span class='ct-code-b-yellow'>heap memory</span>" +
										" is stored in <span class='ct-code-b-yellow'>p</span><br> " +
										"i.e <span class='ct-code-b-yellow'>1924</span> is stored in " +
										"<span class='ct-code-b-yellow'>p</span>.";
							typing('.introjs-tooltiptext', text, function() {
								tweenmaxArrayAnimation();
							});
						}
					});
					break;
			}
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
			});
		break;
		}
	});
	introjs.start();
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 10;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	})
}

function tweenmaxAnimation(selector1, selector2) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector1).effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$(selector2).removeClass("opacity00");
		TweenMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
			$(".user-btn").click(function() {
				$(".user-btn").remove();
				$('.introjs-tooltip').removeClass('hide');
				var text = "Here the <span class='ct-code-b-yellow'>pointer</span> variable " +
							"<span class='ct-code-b-yellow'>p</span> has the address of the " +
							"<span class='ct-code-b-yellow'>dynamic memory</span> allocated, " +
							"so it can access the value at <span class='ct-code-b-yellow'>1054</span>.";
				typing('.introjs-tooltiptext', text, function() {
					svgAppend($('#firstExDiv'), 'svg1');
					svgMarkerAppend($('#svg1'), 'marker1');
					svgAnimatingLine($('#firstExDiv'), $('#memoryBox1'), $('#memoryBox2'), $('#svg1'), 'svgLine1', 'marker1', function() {	
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});	
				});
			});
		}});
	});
}

function tweenmaxAnimation1(selector1, selector2) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector1).effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$(selector2).removeClass("opacity00");
		TweenMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
			$(".user-btn").click(function() {
				$(".user-btn").remove();
				var text = "Here the <span class='ct-code-b-yellow'>pointer</span> variable " +
							"<span class='ct-code-b-yellow'>p</span> has the address of the " +
							"<span class='ct-code-b-yellow'>dynamic memory</span> allocated, " +
							"so it can access the value at <span class='ct-code-b-yellow'>3456</span>.";
				typing('.introjs-tooltiptext', text, function() {
					svgAppend($('#secondExDiv'), 'svg2');
					svgMarkerAppend($('#svg2'), 'marker2');
					svgAnimatingLine($('#secondExDiv'), $('#memoryBox3'), $('#memoryBox4'), $('#svg2'), 'svgLine2', 'marker2', function() {	
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							tweenmaxValueAnimation("#kValue", "#Value1");
						});
					});
				});
			});
		}});
	});
}

function tweenmaxValueAnimation(selector1, selector2) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector1).addClass("css-circle").effect( "highlight", {color:"white"}, 1000, function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("css-circle");
		TweenMax.from(selector2, 1.5, {top: topLength, left: leftLength, onComplete: function() {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		}});
	});
}

function tweenmaxArrayAnimation() {
	var l3 = $("#firstAddressId").offset();
	var l4 = $("#eValue").offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$("#firstAddressId").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$("#eValue").removeClass("opacity00");
		TweenMax.from("#eValue", 1, {top: topLength, left: leftLength, onComplete: function() {
			svgAppend($('#thirdExDiv'), 'svg3');
			svgMarkerAppend($('#svg3'), 'marker3');
			svgAnimatingLine('#thirdExDiv', '#memoryBox5', '#smallBox', '#svg3', 'svgLine3', 'marker3', function() {
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			});
		}});
	});
}

function boxAnimation(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLine(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
