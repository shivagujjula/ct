var readPrintStringUsingGetsPutsReady = function() {
	$("#restartBtn").click(function() {
		$('#inputChar').val('');
		$('#hiddentotalEnterChar').val();
		location.reload();
	});
	intro = introJs();
	$('#nextButton').click(function() {
		$(this).remove();
		intro.nextStep();
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
			steps : [{
			element :'#informationDiv',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#preBody',
			intro : '',
		}, {
			element :'#line10',
			intro : '',
			animateStep : "line10"
		}, {
			element : '#line8',
			intro : '',
			animateStep : "line8"
		}, {
			element :'#line10',
			intro : '',
			animateStep : "line13"
		}, {
			element : '#line8',
			intro : '',
			animateStep : "number"
		},{
			element : '#line2',
			intro : '',
		},{
			element : '#line3',
			intro : '',
		},{
			element :'#animationBox',
			intro :'',
			animateStep : "memory"
		},{
			element : '#line4',
			intro : '',
		},{
			element :'#animationBox',
			intro :'',
			animateStep : "outputBox",
			tooltipClass : "hide",
		},{
			element : '#line5',
			intro : '',
		},{
			element :'#animationBox',
			intro :'',
			animateStep : "animation"
		},{
			element : '#line6',
			intro : '',
		},{
			element :'#animationBox',
			intro :'',
			animateStep : "outputBox1"
		},{
			element : '#mainClose',
			intro : '',
		}, {
			element : "#restartBtn",
			intro : "",
			position : "right"
		}]
	});
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case 'preBody':
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#preBody").removeClass("opacity00");
				typing(".introjs-tooltiptext", "<li>Let us learn <span class='ct-code-b-yellow'>"+
						"Inline-functions</span>.</li> ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});	
			});
			break;
		case "line1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here <span class='ct-code-b-yellow'>width </span>"+
						"field is set as 15.</li><li>Each element occupies <span class='ct-code-b-yellow'>" +
						"1</span> byte(8 bits) in the memory.</li></ul> ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		
			break;
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "The program starts the execution from"+
						" <span class='ct-code-b-yellow'>main()</span> method ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		
			break;
		case "line3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "A variable declaration of type <span class='ct-code-b-yellow'>int</span>"+
						" with the identifier <span class='ct-code-b-yellow'>num</span> ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		
			break;
		case "line4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "This statements is used to print <span class ='ct-code-b-yellow'>" +
						"Enter a number :</span>.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		
			break;
		case "line6" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "This statements is used to print <span class ='ct-code-b-yellow'>" +
						"Cube of a given number :</span>.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		
			break;
		case "line5" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "It is used to read a value from <y>standard inpu</y>t and store" +
						" the value in <span class ='ct-code-b-yellow'>num</span> variable ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		
			break;
		case 'mainClose' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#countCupValue").removeClass('z-index10000000');
				typing('.introjs-tooltiptext',"close the <y>main</y> tag", 10, "", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			case "line8" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "line8" :
							console.log("fffff");
								typing(".introjs-tooltiptext", "With <y>inline</y> code,the <y>compiler</y> replaces" +
										" the function call statement with the function code. ", 10, "",function() {
									$('.introjs-nextbutton').show();
								});
						break;
						case "number" :
							$('#number').removeClass("z-index1000000");
							$('.introjs-nextbutton').hide();
							$('.introjs-helperLayer ').one('transitionend', function() {
								typing(".introjs-tooltiptext", "See in place of function call the function's body is substituted because" +
										" <y>cube</y> is a <span class='ct-code-b-yellow'>inline function</span>", 10, "",function() {
									$('.introjs-nextbutton').show();
								});
							});
					
						break;
					}
				});

			break;
			case "line10" :
				$('#line7').removeClass("z-index1000000");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "line10" :
							typing(".introjs-tooltiptext", "Once you define an inline function, using the"+
								 "<span class='ct-code-b-yellow'> inline </span> keyword, whenever you call that function the "+
								 "<span class='ct-code-b-yellow'> compiler </span> will replace the function call with the actual code from the function ", 10, "",function() {
								$('.introjs-nextbutton').show();
							});
						break;
						
						case "line13" :
							$(".introjs-tooltiptext").append('<span id="retnVal" class="position opacity00 ">'+
							'<span id="total1"><span id="lineInline" ><span class="ct-code-b-yellow"><b>inline</b></span> int cube(int <span id="sNum" class="ct-code-b-yellow">s</span>) {</span><br>'+
								'\t\t<span id="line11"><span id="return" >return <span id="mul1" class="position ct-code-b-yellow"><span id="s1" class="position">s</span> * '+
								'<span class = "position" id="s2">s</span> * <span class="position" id="s3" >s</span></span>;<br></span>}</span></span></span>');
									var t1 = $('#retnVal').offset();
									var t2 = $('#total').offset();
									$('#total').effect('highlight', {color: 'blue'}, 800);
									TweenMax.to('#retnVal', 1, {'top': t2.top - t1.top, 'left': t2.left - t1.left, onComplete: function() {
											$('#retnVal').removeClass('opacity00');
												TweenMax.to('#retnVal', 1, {'top': 0, 'left': 0, onComplete: function() {
													$('#sNum').text($('#number').text());
														fromEffectWithTweenMax('#number', '#sNum', function() {
															retnValChange(1, function() {
																$('#line8').addClass('z-index1000000');
																transferEffect('#mul1', '#line8', function() {
																	$('#retnVal').addClass('z-index10000');
																	$('#line8').html($('#retnVal #mul1').html());
																	intro.refresh();
																	setTimeout(function() {
																		$('#line8').removeClass('z-index1000000');
																		}, 800);
																		setTimeout(function () {
																			intro.nextStep();
																		},500);
																	});
																});
															});
														}});
													}});
												break;
											}
										});
									break;
								case "animationBox" :
									$('.introjs-nextbutton').hide();
									var animateStep = intro._introItems[intro._currentStep].animateStep;
									switch(animateStep) {
										case "memory" :
											intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
											$('.introjs-helperLayer ').one('transitionend', function() {
												$("#animationBox").removeClass("opacity00");
												transferEffect("#num","#one", function(){
													$("#one").removeClass("opacity00");
													$("#boxParent").removeClass("opacity00").addClass("animated zoomIn").one('animationend',function(){ 
														$(".introjs-tooltip").removeClass("hide");
														typing(".introjs-tooltiptext", "Here 2 bytes of memory is allocated to the  variable "+
															"<span class='ct-code-b-yellow'>num</span>.", 10, "",function() {
															$('.introjs-nextbutton').show();
														});
													});
												});
											});
										break;
										case "outputBox":
											intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
											$('.introjs-helperLayer').one('transitionend', function () {
												$("#outputBox").removeClass('opacity00');
												transferEffect("#cout","#inputNumber",function()  {
													$('#inputNumber').removeClass('opacity00');
													$('#inputChar').attr('disabled', 'disabled')
													setTimeout(function () {
														intro.nextStep();
													},1500);
												});
											});
										break;
										case "animation":
											$('.introjs-helperLayer').one('transitionend', function() {
												$('#inputChar').removeAttr('disabled').focus();
												charAtEnd("inputChar");
												keyDown();
												typing(".introjs-tooltiptext", "Please enter a value", 10, "",function() {
												});
											});
										break;
										case "outputBox1":
											intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
											$('.introjs-helperLayer').one('transitionend', function () {
												transferEffect("#line7", "#inputNumber1", function() {
													$('#line8').addClass('z-index1000000');
													valChangeAnim(1, function() {
														var mul = parseInt($('#box').text()) * parseInt($('#box').text()) * parseInt($('#box').text());
														flipEffectWithTweenMax('#line8', mul, function() {
															$('#inputNumber2').text($('#line8').text()).addClass('opacity00');
															transferEffect('#line8', '#inputNumber2', function() {
																$('#inputNumber2').removeClass('opacity00');
																$(".introjs-tooltip").removeClass("hide");
																typing(".introjs-tooltiptext", "<y>Cube</y> of a given <y>number</y> is display on console",10,"",function() {
																	$('.introjs-nextbutton').show(); 
																});
															});
														})
													});
												});
											});
											break;
										}
									break;
								case "restartBtn" :
									$('.introjs-nextbutton').hide();
									$('.introjs-helperLayer ').one('transitionend', function() {
										$("#restartBtn").removeClass("opacity00");
										typing(".introjs-tooltiptext", "Click to restart.", 10, "",function() {
											$('#restart').click(function() {
												location.reload();
											});
										});
									});
								break;
							}
						});
	
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	$('#informationDiv').removeClass('opacity00');
	TweenMax.to("#infotext", 1, {
		opacity : 1,
		onComplete : function() {
			$("#NextButton").removeClass("opacity00");
			$("#NextButton").click(function() {
				$("#NextButton").remove();
				intro.nextStep();
			});
		}
	});
}

function valChangeAnim(val, callBackFunction) {
	if (val <= 3) {
		transferEffect('#box', '#line8 > #s' + val, function() {
			flipEffectWithTweenMax('#line8 > #s' + val, $('#box').text(), function() {
				valChangeAnim(++val, callBackFunction);
			});
		});
	} else {
		callBackFunction();
	}
}

function inlineAnim() {
	$('.user-btn').remove();
	$('#line10').addClass('z-index1000000');
	transferEffect('#line8', '#sVal', function() {
		flipEffectWithTweenMax('#sVal', $('#number').text(), function() {
			$('#line10').removeClass('z-index1000000')
			$(".introjs-nextbutton").show();
		});
	});
}

function retnValChange(val, callBackFunction) {
	if (val <= 3) {
		$('#retnVal span > #s' + val).effect('highlight', {color: 'yellow'}, 500, function() {
				flipEffectWithTweenMax('#retnVal span > #s' + val, $('#number').text(), function() {
				retnValChange(++val, callBackFunction);
			});
		});
		
	} else {
		callBackFunction();
	}
}

function storeVal() {
	$('#inputChar').attr('disabled', 'disabled');
	$('.user-btn').remove();
	$('.introjs-tooltiptext').html("The given value is stored in <span class='ct-code-b-yellow'>num</span> variable.");
	
	transferEffect("#inputChar", "#boxParent", function() {
		$("#box").append($("#inputChar").val());
		$('.introjs-nextbutton').show();
	});
}

function inlineFunction() {
	$('.user-btn').remove();
	$('#line8').addClass('z-index1000000')
	flipEffectWithTweenMax('#number', $('#box').text(), function() {
		transferEffect("#line8", "#line10", function() {
			  $('#line10').addClass('z-index1000000');
			  flipEffectWithTweenMax('#sVal', $('#box').text(), function() {
				  intro.nextStep();
			  });
		});
	});
}

function typing(typingId, typingContent,cursorColor, typingInterval, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
	});
}
function introNextSteps(stepName, animatedStep, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element :stepName,
			intro :'',
			position : position,
			tooltipClass : "hide",
			animateStep: animatedStep
	}
	intro.insertOption(intro._currentStep + 1, options);
	intro._options.steps.push({"element" : stepName});
}
function keyDown() {
	$("#inputChar").on("click keydown keyup", function(e) {
		$(".errMsg").remove();
		if ($(this).val().length > 0) {
			$('.user-btn').remove();
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal()">Next&rarr;</a>');
			
			} else {
			$('.user-btn').remove();
			//$(".introjs-nextbutton").hide();
		}
		
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).val().length > max) {
			$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 3 digits only</div>")
			e.preventDefault();
		}
	});
}

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
	$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function zoomInEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(this).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	})
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	$(selector).effect( "highlight",{color: 'blue'}, 500, function() {
		TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
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
		}
	});
}
function zoomInEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(this).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	})
}