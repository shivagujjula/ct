var t1;
var TweenMax;
var tl = new TimelineLite();
var typingSpeed = 1;
var executeBtnCount = 1;
var cubeFunc;
var usageOfHashDefineReady = function() {

	t1 = new TimelineLite();
	$("#restartBtn").click(function() {
		$("#inputChar").attr("disabled", false);
		$("#inputChar").val('');
		$("#inputChar1").val('');
		$("#hiddenTotalEnterChar").val('');
		location.reload();
	});
	
	$('body').keypress(function(event) {
		if (event.keyCode == 13) {
		     event.preventDefault();
		}
	});
	
	$('#inputChar').on("keydown", function(e) {
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength"); 
		if ($(this).val().length > max) {
			if (e.keyCode == 110 || e.keyCode == 190) {
				e.preventDefault();
			}
		}
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 35, 36, 37, 39, 110, 190]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).val().length > max) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'>Please restrict the Max Length 3 digits only</div>");
			e.preventDefault();
		}
	});
	
	$("#inputChar").on("keyup", function(e) {
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength");
		
		if ($(this).val() == "") {
			$(".introjs-nextbutton , .introjs-prevbutton").hide();
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'>Please enter a float number.</div>");
		} else {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		}
		if ($("#inputChar").val().length <= 1) {
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		}
		if ($("#inputChar").val().startsWith('.') || $("#inputChar").val().endsWith('.')) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'>Number can't start or end with dot.</div>");
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			return false;
		} 
	});
	introjsGuide();
	$("#nextBtn").click(function() {
		$('.introjs-nextbutton').click();
		$("#nextBtn").remove();
	});
}

function introjsGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
					element :'#informationdiv',
					intro :'',
					tooltipClass:'hide',
					position:"right"
				},{
					element :'#line2',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#piValue1',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#piValue2',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line4',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#animationDiv',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line5',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#consoleId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line6',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#inputChar',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#radiusId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line7',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#areaId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line8',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#circumferenceId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line9',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#consoleId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line10',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#consoleId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#preBody1',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line12',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#cubeAId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line14',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#aValue',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line15',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#consoleId1',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line16',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#inputChar1',
					intro :'',
					position:"bottom"
				},{
					element :'#aValue',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line17',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#cubeAId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#consoleId1',
					intro :'',
					tooltipClass: "hide",
					position: "bottom"
				},{
					element :'#restartBtn',
					intro :'',
					position: "right"
			}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case "inputChar":
			$('#inputChar').val("");
			$('#radiusValue,#panelAreaBody, #panelCircumferenceBody').text("");
			break;
		case "line4":
			$("#animationDiv").addClass("opacity00");
			$("#radiusId, #circumferenceId, #areaId").addClass("opacity00").removeAttr('style');
			break;
		case "line5":
			$('#typeRadiusId').addClass("hidden");
			$("#consoleId").addClass("opacity00");
			break;
		case "line6":
			$('#inputChar').addClass("opacity00");
			break;
		case "radiusId":
			$("#panelAreaBody, #panelCircumferenceBody").text("");
			break;
		case "line8": 
			$("#panelCircumferenceBody").addClass("visibility-hidden")
			break;
		case "line9":
			$("#finalAreaValue").empty();
			break;
		case "line10":
			$("#finalCircumferenceValue").empty();
			break;
		case "line15":
			$('#typeNumberId').addClass("hidden");
			$("#consoleId1").addClass("opacity00");
			break;
		case "line16":
			$('#inputChar1').addClass("opacity00");
			break;
		case "inputChar1":
			$('#inputChar1').val("");
			break;
		case "line14":
			$("#aValue").addClass("visibility-hidden")
			break;
		case "consoleId":
			if (introjs._currentStep == 18) {
			if (introjs._direction == "backward") {
				$("#preBody1, #animationDiv1").addClass("opacity00");
				}
			}
			break;
		}
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "informationdiv" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#informationdiv").removeClass("opacity00");
			$("#defination").removeClass("opacity00");
			TweenMax.to("#list1", 0.2, {opacity: 1, onComplete: function() {
				TweenMax.to("#list2", 0.2, {opacity: 1, onComplete: function() {
					TweenMax.to("#list3", 0.2, {opacity: 1, onComplete: function() {
						$("#nextBtn").removeClass("opacity00");
					}});
				}});
			}});
			break;
			
		case "line2" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#preBody").removeClass("introjs-fixParent");
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#preBody").removeClass("opacity00").removeClass("introjs-fixParent");
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext", "In this statement we are declaring a symbolic constant <span class='ct-code-b-yellow'>PI</span> "+
						"with its value <span class='ct-code-b-yellow'>3.141</span> using <span class='ct-code-b-yellow'>#define</span>.<br/>" +
						"So, whenever the compilation starts all the occurrences of <span class='ct-code-b-yellow'>PI</span> is replaced "+
						"by <span class='ct-code-b-yellow'>3.141</span>.</li></ul>", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "piValue1" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
			if (introjs._direction == "backward") {
				$("#piValue1").text("PI");
				setTimeout(function() {
					introjs.previousStep();
				}, 500);
			} else {
				TweenMax.to("#piValue1", 0.4, {opacity: 1, rotationX: -90, onComplete: function() {
						$("#piValue1").text("3.141");
						introjs.refresh();
						TweenMax.to("#piValue1", 0.4, {opacity:1, rotationX: 0, onComplete: function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 1500);
						}});
					}});
				}
			});
			break;
			
		case "piValue2" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._direction == "backward") {
					$("#piValue2").text("PI");
					setTimeout(function() {
						introjs.previousStep();
					}, 500);
				} else {
				TweenMax.to("#piValue2", 0.4, {opacity:1, rotationX: -90, onComplete: function() {
					$("#piValue2").text("3.141");
					introjs.refresh();
					TweenMax.to("#piValue2", 0.4, {opacity:1, rotationX: 0, onComplete: function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					}});
				}});
				}
			});
			break;
			
		case "line4" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "we are declaring <span class='ct-code-b-yellow'>3</span> float variables "+
					"<span class='ct-code-b-yellow'>radius</span>, <span class='ct-code-b-yellow'>area</span>, "+
					"<span class='ct-code-b-yellow'>circumferences</span>.";
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}, 500);
			});
			break;
			
		case "animationDiv" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			if (introjs._direction == "forward") {
				$("#animationDiv").removeClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#radiusId").removeClass("opacity00");
					TweenMax.staggerFrom("#radiusId", 0.6, {opacity:0, top: -100}, -0.5, function() {
						$("#areaId").removeClass("opacity00");
						TweenMax.staggerFrom("#areaId", 0.6, {opacity:0, top: -100}, -0.5, function() {
							$("#circumferenceId").removeClass("opacity00");
							TweenMax.staggerFrom("#circumferenceId", 0.6, {opacity:0, top: -100}, -0.5, function() {
								setTimeout(function() {
									introjs.nextStep();
								}, 1000);
							});
						});
					});
				});
			} else {
				setTimeout(function() {
					introjs.previousStep();
				}, 1000);
			}
			break;
			
		case "line5" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>cout</span> object displays the "+
						"string <span class='ct-code-b-yellow'>\"Enter the radius : \"</span> on output.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line6" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
					$("#scanAmpPercentId").effect("highlight",{color: '#008000'}, 1000, function() {
						$(".introjs-tooltip").removeClass("hide");
						typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>cin</span> object is used to read the input data "+
								"and store it in variable.", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
					});
			});
			break;
			
		case "line7" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext", "Expression is evaluated and the result is stored in area.</br>" +
						"<span><span class='ct-code-b-yellow'>area</span> = "+
						"<span id='totalRadius' class='ct-code-b-yellow position-relative display-inline'>3.141 * "+
						"<span  id='radiusOne' class='ct-code-b-yellow position-relative display-inline'>r</span> * "+
						"<span id='radiusTwo' class='ct-code-b-yellow position-relative display-inline'>r</span></span></span>", function() {
					$('.introjs-tooltipbuttons').append("<span class='introjs-button next-btn' onclick='tooltipFlipArea()'>Next &#8594;</span>");
				});
			});
			break;
			
		case "line8" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext", "Expression is evaluated and the result is stored in circumference.</br>" +
						"<span><span class='ct-code-b-yellow'>circumference</span> = "+
						"<span id='totalCircumference' class='ct-code-b-yellow position-relative display-inline'>2 * "+
						"<span  id='circumPiValue' class='ct-code-b-yellow position-relative display-inline'>3.141</span> * "+
						"<span id='circumRadius' class='ct-code-b-yellow position-relative display-inline'>r</span></span></span>", function() {
					$('.introjs-tooltipbuttons').append("<span class='introjs-button next-btn' onclick='tooltipFlipCircum()'>Next &#8594;</span>");
				});
			});
			break;
			
		case "line9" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._direction == "forward") {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				} else {
					setTimeout(function() {
						introjs.previousStep();
					}, 1000);
				}
			});
			break;
			
		case "line10" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext", "Here <span class='ct-code-b-yellow'>\"Circumference of the circle\"</span> is displayed on output.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "inputChar" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#inputChar").removeClass("opacity00");
				$("#inputChar").removeAttr('disabled');
				$("#inputChar").addClass("blinking-orange");	
				$("#inputChar").focus();
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext", "Enter the radius.</br>" +
						"<span id='errorTextBox1' class='ct-code-b-red'></span>", function() {
				});
			});
			break;
			
		case "radiusId" :
			if (introjs._direction == "forward") {
			if($('#inputChar').val().includes(".")) {
				$("#radiusValue").text($('#inputChar').val() + '00000');
			} else {
				$("#radiusValue").text($('#inputChar').val() + '.000000');
			}
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#inputChar").attr("disabled", true);
			$("#panelRadiusBody").addClass("visibility-hidden")
			$('.introjs-helperLayer ').one('transitionend', function() {
				introjs.refresh();
				$("#panelRadiusBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#panelRadiusBody").removeClass('animated zoomIn');
					if (introjs._direction == "forward") {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					} 
				});
			});
			} else {
				setTimeout(function() {
					introjs.previousStep();
					$("#radiusValue").text("");
				}, 1000);
			}
			break;
			
		case "areaId" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "forward") {
				$("#panelAreaBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#panelAreaBody").removeClass('animated zoomIn');
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				});
				} else {
					setTimeout(function() {
						introjs.previousStep();
						$("#panelAreaBody").addClass("visibility-hidden");
					}, 1000);
				}
			});
			break;
			
		case "circumferenceId" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "forward") {
				$("#panelCircumferenceBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#panelCircumferenceBody").removeClass('animated zoomIn');
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				});
				} else {
					setTimeout(function() {
						introjs.previousStep();
						$("#panelCircumferenceBody").text("");
					}, 1000);
				}
			});
			break;
			
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			if(introjs._currentStep == 7) {
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._direction == "forward") {
						$("#consoleId").removeClass("opacity00");
						$("#typeRadiusId").removeClass("hidden");	
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					} else {
						setTimeout(function() {
							introjs.previousStep();
						}, 1000);
					}
				});
			} else if(introjs._currentStep == 16) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "forward") {
					typing("#finalAreaValue", "<br /> Area of circle is : <span class='ct-code-b-green'>"+ $("#panelAreaBody").text() +"</span>", function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
					} else {
						setTimeout(function() {
							introjs.previousStep();
						}, 1000);
					}
				});
			} else if(introjs._currentStep == 18) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "forward") {
						typing("#finalCircumferenceValue", "Circumference of circle : <span class='ct-code-b-green'>"+ $("#panelCircumferenceBody").text() +"</span>", function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 1000);
						});
						} else {
							setTimeout(function() {
								introjs.previousStep();
							}, 1000);
						}
					});
			}
			break;
			
		case "preBody1" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#preBody1").removeClass("opacity00");
				$("#animationDiv1").removeClass("opacity00");
				$("#animationDiv").removeClass("opacity00");
				setTime();
			});
			break;
			
		case "line12" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>CUBE(num)</span> is a symbolic function.<br/>It is replaced "+
						"with the formula <span class='ct-code-b-yellow'>num * num * num</span> before compilation starts.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line14" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._direction == "forward") {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
			} else {
				setTimeout(function() {
					introjs.previousStep();
				}, 1000);
			}
			});
			break;
			
		case "line15" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext", "Here <span class='ct-code-b-yellow'>cout</span> object displays the "+
						"string <span class='ct-code-b-yellow'>\"Enter a number : \"</span> on output console.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line16" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#typeInputChar1").addClass("hidden");
			$("#enterNumberId").removeClass("hidden");
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#scanAmpPercentId1").effect("highlight",{color: '#008000'}, 1000, function() {
					$(".introjs-tooltip").removeClass("hide");
					typing(".introjs-tooltiptext", "Here <span class='ct-code-b-yellow'>cin</span> object is used to store the number "+
							"entered into variable <span class='ct-code-b-yellow'>a</span>.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			});
			break;
			
		case "line17" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				setTime();
			});
			break;
			
		case "aValue" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			if(introjs._currentStep == 23) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "forward") {
					$("#aValue").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
						$("#aValue").removeClass('animated zoomIn');
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
				} else {
					setTimeout(function() {
						introjs.previousStep();
					}, 1000);
				}
				});
			} else if(introjs._currentStep == 28) {
				$("#aNumber").text($('#inputChar1').val());
				$("#inputChar1").attr("disabled", true);
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#panelABody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
						$("#panelABody").removeClass('animated zoomIn');
						introjs.refresh();
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
				});
			}
			break;
			
		case "cubeAId" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			if (introjs._currentStep == 21) {
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#aCubeValue").removeAttr('style');
						$("#aCubeValue").empty().text(cubeFunc);
						setTimeout(function() {
							introjs.previousStep();
						}, 1000);
					} else {
					TweenMax.to("#aCubeValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#aCubeValue").html('<span id="a1" class="position-relative display-inline">a</span> * <span id="a2" class="position-relative display-inline">a</span> * <span id="a3" class="position-relative display-inline">a</span>');
						introjs.refresh();
						TweenMax.to("#aCubeValue", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 1000);
						}});
						}});
					}
				}); // 36
			} else if (introjs._currentStep == 30) {
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					
					TweenMax.to("#a1", 1.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#a1").text($('#inputChar1').val());
					TweenMax.to("#a1", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
					TweenMax.to("#a2", 1.0, {opacity:1, rotationX: -90, onComplete: function() {
						$("#a2").text($('#inputChar1').val());
				    TweenMax.to("#a2", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
				    	introjs.refresh();
					TweenMax.to("#a3", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#a3").text($('#inputChar1').val());
					TweenMax.to("#a3", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						introjs.refresh();
						var l1 = parseInt($('#inputChar1').val());
						var result = l1 * l1 * l1;
						
						TweenMax.to("#aCubeValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
							$("#aCubeValue").text(result);
							introjs.refresh();
							TweenMax.to("#aCubeValue", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
								setTimeout(function() {
									introjs.nextStep();
								}, 2000);
							}});
						}});

					}});
					 }});
					}});
					}});
					}});
					}});
					
					
				});
			}
			break;
			
		case "inputChar1" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#inputChar1").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Enter a number.</br>" +
				"<span id='errorTextBox2' class='ct-code-b-red'></span>", function() {
					$("#inputChar1").addClass("blinking-orange");
					$("#inputChar1").focus();
					$("#inputChar1").keyup(function() {
						if ($("#inputChar1").val().length == '') {
							$('.introjs-nextbutton, .introjs-prevbutton').hide();
						} else {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						}
					});
				});
			});
			break;
			
		case "consoleId1" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			if(introjs._currentStep == 25) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "forward") {
						$("#consoleId1").removeClass("opacity00");
						$("#typeNumberId").removeClass("hidden");
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					} else {
						setTimeout(function() {
							introjs.previousStep();
						}, 1000);
					}
						
				});
			} else if(introjs._currentStep == 31) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#finalCubeValue", "The cube of the given number is : <span class='ct-code-b-green'>"+ $("#aCubeValue").text() +"</span>", function() {
						setTime();
					});
				});				
			}
			break;
			
		case "restartBtn" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", function() {
					
				});
			});
			break;
		}
	});
	
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	
	introjs.refresh();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	$('.introjs-nextbutton').addClass('opacity00');
	cubeFunc = $("#aCubeValue").html();
}

function setTime() {
	if (introjs._direction == "backward") {
		setTimeout(function() {
			introjs.previousStep();
		}, 500);
	} else {
		setTimeout(function() {
			introjs.nextStep();
		}, 500);
	}
}

function isNumber(evt) {
	$(".error-text").remove();
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    	$("#errorTextBox2").addClass("ct-code-b-red");
    	$("#errorTextBox2").text("Enter only integer values");
        return false;
	} else {
    	$("#errorTextBox2").removeClass("ct-code-b-red");
    	$("#errorTextBox2").text("");
	    return true;
    }
}

function tooltipFlipArea() {
	$(".next-btn").remove();	
	t1.to("#radiusOne", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
		if($('#inputChar').val().includes(".")) {
			$("#radiusOne").text($('#inputChar').val() + '00000');
		} else {
			$("#radiusOne").text($('#inputChar').val() + '.000000');							
		}
	}});
	
	t1.to("#radiusOne", 1, {opacity:1, rotationX: 0});
	
	t1.to("#radiusTwo", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
		if($('#inputChar').val().includes(".")) {
			$("#radiusTwo").text($('#inputChar').val() + '00000');
		} else {
			$("#radiusTwo").text($('#inputChar').val() + '.000000');							
		}
	}});
	
	t1.to("#radiusTwo", 1, {opacity:1, rotationX: 0});
	var l1;
	var result;
	if($('#inputChar').val().includes(".")) {
		l1 = parseFloat($('#inputChar').val() + '00000');
		result = 3.141 * l1 * l1;
	} else {
		l1 = parseFloat($('#inputChar').val() + '.000000');
		result = 3.141 * l1 * l1;
	}
	
	var givenString = result.toString();
	var indexOfDot = givenString.indexOf(".");
	var index;
	if (indexOfDot == -1) {
		index = 0;
	} else {
		index = givenString.substring(indexOfDot + 1, givenString.length).length;
	}
	if(index > 6) {
		givenString = givenString.substring(0, 8);
	}
	
	for (var i = index; i < 6; i++) {
		if(i == 0) {
			givenString = givenString.concat(".0");
		} else {
			givenString = givenString.concat("0");
		}
	}
	
	t1.to("#totalRadius", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
		$("#totalRadius").text(givenString);
		$("#panelAreaBody").text(givenString);
		$("#totalRadius").addClass("ct-code-b-yellow");
	}});
	
	t1.to("#totalRadius", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	}});
}

function tooltipFlipCircum() {
	$(".next-btn").remove();
	t1.to("#circumRadius", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
		if($('#inputChar').val().includes(".")) {
			$("#circumRadius").text($('#inputChar').val() + '00000');
		} else {
			$("#circumRadius").text($('#inputChar').val() + '.000000');
		}
	}});
	
	t1.to("#circumRadius", 1, {opacity:1, rotationX: 0});
	var l1;
	var result;
	if($('#inputChar').val().includes(".")) {
		l1 = parseFloat($('#inputChar').val() + '00000');
		result = 2 * 3.141 * l1;
	} else {
		l1 = parseFloat($('#inputChar').val() + '.000000');
		result = 2 * 3.141 * l1;
	}
	
	
	var givenString = result.toString();
	var indexOfDot = givenString.indexOf(".");
	var index;
	if (indexOfDot == -1) {
		index = 0;
	} else {
		index = givenString.substring(indexOfDot + 1, givenString.length).length;
	}
	if(index > 6) {
		givenString = givenString.substring(0, 8);
	}
	
	for (var i = index; i < 6; i++) {
		if(i == 0) {
			givenString = givenString.concat(".0");
		} else {
			givenString = givenString.concat("0");
		}
	}
	t1.to("#totalCircumference", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
		$("#totalCircumference").text(givenString);
		$("#panelCircumferenceBody").text(givenString);
		$("#totalCircumference").addClass("ct-code-b-yellow");
	}});
	
	t1.to("#totalCircumference", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	}});
}

function typing(id, text, callBackFunction) {
	$(id).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro= $(".introjs-tooltiptext").html();
		}
	});
}