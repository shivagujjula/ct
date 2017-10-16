var arr =[];
var count = 0;
var readPrintStringUsingGetsPutsReady = function() {
	$("#restartBtn").click(function() {
		$("#inputChar").val('');
		$("#hiddentotalEnterChar").val();
		location.reload();
	});
	intro = introJs();
	$("nextButton").click(function() {
		$(this).remove();
		intro.nextStep();
	});
	intro.setOptions ({
		showBullets : false,
		exitOnOverlayClick : false,
		keyboardNavigation : false,
		escOnExit : false,
		showStepNumbers : false,
		steps : [{
			element : "#informationDiv",
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : "#preBody",
			intro : '',
		}, {
			element : '#class',
			intro : '',
		
		}, {
			element : '#count',
			intro : '',
			tooltipClass: 'hide'
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory',
			tooltipClass: 'hide'
		}, {
			element : '#int',
			intro : '',
			tooltipClass: 'hide'
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'countIncrease',
			tooltipClass: 'hide'
		}, {
			element : '#main',
			intro : '',
		}, {
			element : '#object',
			intro : '',
			tooltipClass: 'hide'
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory1',
			tooltipClass: 'hide'
		}, {
			element : '#data',
			intro : '',
		}, {
			element : '#method',
			intro : '',
			animateStep : 'public1'
		}, {
			element : '#cout',
			intro : '',
			animateStep : 'output',
			tooltipClass :'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData',
			tooltipClass :'hide'
		}, {
			element : '#enterVal',
			intro : '',	
			animateStep : 'value',
			tooltipClass :'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterValue'
		},{
			element : '#count1',
			intro : '',
			animateStep : 'increment',
			tooltipClass : 'hide'
		},{
			element : '#animationBox',
			intro : '',
			animateStep : 'increment1',
			tooltipClass : 'hide'
		}, {
			element : '#put',
			intro : '',
		}, {
			element : '#method2',
			intro : '',
			animateStep : 'default1'
		}, {
			element : '#cout2',
			intro : '',
			animateStep : 'outptt',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData2',
			tooltipClass : 'hide'
		},{
			element : '#outputVal',
			intro : '',
			animateStep : 'element1',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry',
			tooltipClass : 'hide'
		}, {
			element : '#count2',
			intro : '',
		},{
			element : '#method1',
			intro : '',
			animateStep : 'static1',
			tooltipClass :'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep :'enterData3',
			tooltipClass :'hide'
		}, {
			element : '#count4',
			intro : '',
			animateStep : "raj",
			tooltipClass :'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry1',
			tooltipClass :'hide'
		}, {
			element : '#data1',
			intro : '',
		}, {
			element : '#method',
			intro : '',
			animateStep : 'public2'
		}, {
			element : '#cout',
			intro : '',
			animateStep : 'output1',
			tooltipClass :'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData1',
			tooltipClass :'hide'
		}, {
			element : '#enterVal',
			intro : '',	
			animateStep : 'value1',
			tooltipClass :'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterValue1',
			tooltipClass :'hide'
		},{
			element : '#count1',
			intro : '',
			animateStep : 'increment2',
			tooltipClass: 'hide'
		},{
			element : '#animationBox',
			intro : '',
			animateStep : 'increment3',
			tooltipClass: 'hide'
		}, {
			element : '#put1',
			intro : '',
		}, {
			element : '#method2',
			intro : '',
			animateStep : 'default2',
		}, {
			element : '#cout2',
			intro : '',
			animateStep : 'outptt1',
			tooltipClass: 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData4',
			tooltipClass: 'hide'
		},{
			element : '#outputVal',
			intro : '',
			animateStep : 'element2',
			tooltipClass: 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry2',
			tooltipClass: 'hide'
		}, {
			element : '#count3',
			intro : '',
		},{
			element : '#method1',
			intro : '',
			animateStep : 'static2',
			tooltipClass: 'hide'
		}, {
			element : "#cout1",
			intro : '',
			animateStep : "outputt1",
			tooltipClass: 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep :'enterData5',
			tooltipClass :'hide'
		}, {
			element : '#count4',
			intro : '',
			animateStep : "raj1",
			tooltipClass: 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry3',
			tooltipClass: 'hide'
		}, {
			element : '#mainClose',
			intro : '',
		}, {
			element : "#restartBtn",
			intro : "",
			position : "left"
		}]
	});
	intro.onbeforechange(function(targetElement){
		var elementId = targetElement.id;
		switch(elementId) {
		case 'count' :
			$("#countBox").addClass("opacity00");
		break;
		case 'int' :
			$("#countCupValue").addClass('opacity00');
		break;
		case 'object':
			$("#borderBox, #borderBox1").addClass("opacity00")
			$("#one, #two, #three, #four").addClass("opacity00");
		break;
		case 'cout' :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "output" :
				$("#outputBody").empty();
			break;
			case "output1" :
				$("#inputNumber1").addClass("opacity00");
			break;
			}
			break;
		case "enterVal" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "value" :
				$('#inputChar').text("");
				$('.arrayValue').text("");
				$("#inputChar").removeAttr("placeholder");
			break;
			case "value1":
				$('#inputChar1').text("");
				$("#inputChar1").removeAttr("placeholder");
				$('.arrayValue1').text("");
			break;
			}
			break;
		case 'cout2' :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "outptt" :
				$('#inputNumber2').addClass("opacity00");
			break;
			case "outptt1" :
				$('#inputNumber4').addClass("opacity00");
			break;
			}
			break;
		case  'method1':
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'static1' :
				$('#inputNumber3').addClass("opacity00");
			break;
			}
			break;
		case "outputVal" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "element1" :
				$("#value11").addClass("opacity00");
				$('#value12').addClass("opacity00");
			break;
			case "element2" :
				$("#value14").addClass("opacity00");
				$('#value15').addClass("opacity00");
			break;
			}
			break;
		case 'count4' :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "raj" :
				$('#value13').addClass("opacity00");
			break;
			case "raj1" :
				$('#value16').addClass("opacity00");
			break;
			}
			break;
		case "animationBox" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "memory" :
				$("#countBox").addClass("opacity00");
			break;
			case "countIncrease":
				count = 0;
				$("#countCupValue").addClass('opacity00');
			break;
			case "increment1":
				count = 1;
			break;
			case "increment3":
				count = 2;
			break;
			case 'memory1':
				$("#borderBox, #borderBox1").addClass("opacity00");
				$("#one, #two, #three, #four").addClass("opacity00");
				break;
			}
			break;
		/*case  'count1':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'increment' :
				count = 0;
			break;
			}
			break;*/
		case "outputBox" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "enterData" :
				$("#outputBody").empty();
			break;
			case "enterData1" :
				$("#inputNumber1").addClass('opacity00');
			break;
			case "enterData2" :
				$("#inputNumber2").addClass('opacity00');
			break;
			case "enterData3" :
				$("#inputNumber3").addClass('opacity00');
			break;
			case "enterData4" :
				$("#inputNumber4").addClass('opacity00');
			break;
			case "enterData5" :
				$("#inputNumber5").addClass('opacity00');
			break;
			case "enterValue" :
				$('#inputChar').text("");
				$('.arrayValue').text("");
				$("#inputChar").removeAttr("placeholder");
			break;
			case 'enterValue1':
				$("#inputChar1").text("");
				$("#inputChar1").removeAttr("placeholder");
				$('.arrayValue1').text("");
			break;
			case 'dataEntry':
				$("#value11").addClass("opacity00");
				$('#value12').addClass("opacity00");
			break;
			case 'dataEntry1':
				$("#value13").addClass("opacity00");
			break;
			case 'dataEntry2':
				$("#value14").addClass("opacity00");
				$('#value15').addClass("opacity00");
			break;
			case 'dataEntry3':
				$("#value16").addClass("opacity00");
			break;
			}
		break;
		}
	});
	intro.onafterchange(function(targetElement) {
		intro.refresh();
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case "preBody" :
			$('.introjs-helperLayer').one('transitionend',function() {
				$("#preBody").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Let us learn <span class='ct-code-b-yellow'>"+
						"Static-Data-Members</span>.", 10,"", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'class' :
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"To create a class as <span class='ct-code-b-yellow'>Student</span>", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'int' :
			$('.introjs-helperLayer').one('transitionend',function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"A <span class='ct-code-b-yellow'>static varibles</span> are initialised to <span class='ct-code-b-yellow'>zero</span>" +
						" by default the user can also initialise a value to the static variable.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'count' :
			$('.introjs-helperLayer').one('transitionend',function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"<ul><li>The type of each <span class='ct-code-b-yellow'>static member</span> variable must be defined outside class defination.</li>" +
						"<li>This is necessary because the <span class='ct-code-b-yellow'>static data members</span> are stored separately rather than a part of an object.</li>" +
						"<li>They are also associated with the class itself ratherthan with any object, they are also known as <span class='ct-code-b-yellow'>variable</span>.</li>" +
						"</ul>", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'object' :
			$('.introjs-helperLayer').one("transitionend", function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"<span class='ct-code-b-yellow'>s1</span>,<span class='ct-code-b-yellow'>s2</span>,"+
						"are the objects for class student", 10, "", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "main" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$("#countCupValue").removeClass('z-index10000000');
				typing('.introjs-tooltiptext',"<span class='ct-code-b-yellow'>main()</span> method to execute the programm.", 10,"",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'data' :
			$('.introjs-helperLayer').one("transitionend", function() {
				typing('.introjs-tooltiptext',"", 10, "", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'put' :
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#countCupValue").removeClass('z-index10000000');
				typing('.introjs-tooltiptext',"", 10, "", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'put1' :
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#countCupValue").removeClass('z-index10000000');
				typing('.introjs-tooltiptext',"", 10, "", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'count2' :
			$('.introjs-helperLayer').one("transitionend", function() {
				$('#borderBox').removeClass('z-index1000000');
				typing('.introjs-tooltiptext',"", 10, "", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'count3' :
			$('.introjs-helperLayer').one("transitionend", function() {
				$('#borderBox1').removeClass('z-index1000000');
				typing('.introjs-tooltiptext',"", 10, "", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'data1' :
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#countBox").removeClass('z-index10000000');
				typing('.introjs-tooltiptext',"", 10, "", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "mainClose" :
			$('#countBox').removeClass('z-index10000000');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"close the <y>main</y> tag.", 10,"", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'variables' :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "first":
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"The varibles access specifier is <span class='ct-code-b-yellow'>"+
							"private</span>", 10,"", function(){
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "last":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeout(function() {
						intro.nextStep();
					},500)
				});
				break;
			}
		break;
		case 'count4' :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "raj":
				$('.introjs-helperLayer').one('transitionend',function() {
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", 10,"", function(){
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "raj1":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeout(function() {
						intro.nextStep();
					},500)
				});
				break;
			}
		break;
		case "animationBox" :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "memory" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#animationBox').removeClass('opacity00');
					$('#countBox').removeClass("opacity00").addClass('animated zoomIn').one('animationend', function() {
						$('#countBox').removeClass("animated zoomIn");
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"Memory is allocated to the <span class='ct-code-b-yellow'>count</span>.", 10,"",function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case 'memory1' :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#animationBox').removeClass('opacity00');
					transferEffect("#paraMeter1","#borderBox", function() {
						$('#borderBox').removeClass("opacity00");
							transferEffect("#first","#bodyBox", function() {
								$("#one").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
									transferEffect("#second", "#bodyBox1", function() {
										$("#two").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
											transferEffect("#paraMeter2","#borderBox1", function() {
												$('#borderBox1').removeClass("opacity00");
												transferEffect("#first", "#bodyBox2", function() {
													$("#three").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
														transferEffect("#second", "#bodyBox3", function() {
															$("#four").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
																$(".introjs-tooltip").removeClass("hide");
																$("#object").removeClass('z-index1000000');
																typing('.introjs-tooltiptext',"<y>S1</y> ,<y>S2</y> memories are allocated to the <y>2bytes</y> of memory.",10, "", function() {
																	$("#one, #two, #three, #four").removeClass("animated zoomIn");
																	$('.introjs-nextbutton, .introjs-prevbutton').show();
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				break;
			case "countIncrease":
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#animationBox').removeClass('opacity00');
					$("#int").addClass("z-index1000000");
					$("#countCupValue").text(count).addClass('opacity00');
					transferEffect("#int","#countCupValue", function() {
						$("#countCupValue").removeClass('opacity00');
						$(".introjs-tooltip").removeClass("hide");
						$("#int").removeClass("z-index1000000");
						typing('.introjs-tooltiptext',"By default count value is initilased to <y>0</y>.", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "increment1":
				$('.introjs-helperLayer').one('transitionend',function() {
					$('#animationBox').removeClass('opacity00');
					$("#count1").addClass("z-index1000000");
					transferEffect("#count1","#countCupValue", function() {
						$("#countCupValue").text(count);
						$("#count1").removeClass("z-index1000000");
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"Increment to  <span class='ct-code-b-yellow'>count</span>" +
							" value is  <span class='ct-code-b-yellow'>1</span>.", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "increment3":
				$('.introjs-helperLayer').one('transitionend',function() {
					$('#animationBox').removeClass('opacity00');
					$("#count1").addClass("z-index1000000");
					transferEffect("#count1","#countCupValue", function() {
						$("#countCupValue").text(count);
						$("#count1").removeClass("z-index1000000")
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"Increment to  <span class='ct-code-b-yellow'>count</span>" +
							" value is  <span class='ct-code-b-yellow'>2</span>.", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			
			}
			break;
		case  'method':
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'public1' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"The method access specifier is <span class='ct-code-b-yellow'>"+
							"public</span>.", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "public2":
			case "public3":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeout(function() {
						intro.nextStep();
					},500)
			});
				break;
				}
			break;
		case  'method1':
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'static1' :
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"The method access specifier is <span class='ct-code-b-yellow'>"+
							"public</span>.", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "static2":
			case "static3":
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeout(function() {
						intro.nextStep();
					},500)
				});
				break;
				}
			break;
		case  'method2':
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'default1' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"The method access specifier is <span class='ct-code-b-yellow'>"+
							"public</span>.", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "default2":
			case "default3":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeout(function() {
						intro.nextStep();
					},500)
				});
				break;
				}
			break;
		case 'cout' :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "output" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"<y>cout</y> is used to display the output in console", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "output1" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break;
		case "cin" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "result" :
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"<y>cin</y> is used to input the given data", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "result1" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break; 
		case 'cout1' :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "outputt" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"<y>cout</y> is used to display the output in console", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "outputt1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#countBox').removeClass('z-index10000000');
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break;
		case 'cout2' :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "outptt" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#borderBox').removeClass('z-index10000000');
					$("#box1").removeClass("z-index1000000")
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"<y>cout</y> is used to display the output in console", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "outptt1" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break;
		case "outputBox" :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "enterData" :
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#outputBox').removeClass('opacity00');
					$("#outputBody").append(' <span id ="inputNumber" class="opacity00">Enter two subject marks  : <span id="outputPrintfLine"><div  id="inputChar" contenteditable="true" maxlength="2" class="position input-char"></div></span></span><br><br>');
					transferEffect("#textEnter","#inputNumber",function() {
						$('#inputNumber').removeClass('opacity00');
						setTimeout(function () {
								intro.nextStep();
							},1500);
					});
				});
				break;
			case "enterValue" :
				//$('#inputChar').removeAttr('disabled').focus();
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#inputChar').attr({contenteditable: 'true', placeholder: 'Enter 2 values'}).focus();
					$("#borderBox").addClass("z-index1000000");
					$('#inputChar').removeAttr('disabled').focus();
					$(".introjs-tooltip").removeClass("hide");
					typing(".introjs-tooltiptext", "Please enter <y>two</y> values with space.","",10,function() {
						//$('.introjs-nextbutton').show();
						//$('.introjs-nextbutton, .introjs-prevbutton').show();
						checking('#inputChar');
						charAtEnd("inputChar");
					});
			});
			break;
			case "enterData1" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#outputBox').removeClass('opacity00');
					$("#outputBody").append(' <span id ="inputNumber1" class="opacity00">Enter two subject marks  : <span id="outputPrintfLine1"><div  id="inputChar1" contenteditable="true" maxlength="2" class="position input-char"></div></span></span><br><br>');
					transferEffect("#textEnter","#inputNumber1",function() {
						$('#inputNumber1').removeClass('opacity00');
						setTimeout(function () {
							intro.nextStep();
						},1500);
					});
				});
				break;
			case "enterValue1" :
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#inputChar1').attr({contenteditable: 'true', placeholder: 'Enter 2 values'});
					$("#borderBox1").addClass("z-index1000000");
					$('#inputChar1').removeAttr('disabled').focus();
					checking('#inputChar1')
					charAtEnd("inputChar1");
					$(".introjs-tooltip").removeClass("hide");
					typing(".introjs-tooltiptext", "Please enter <y>two</y> values with space.", 10, "",function() {
						//$('.introjs-nextbutton').show();
					});
			});
			break;
			case "enterData2" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber2" class="opacity00">The given two subjects marks are  : <span class="border opacity00 position" id="value11">'
								+ $('#box').text() +'</span> <span class="border opacity00 position" id="value12">' 
								+ $('#box1').text()+'</span></span><br><br>');
						transferEffect("#textEnter1","#inputNumber2",function() {
							$('#inputNumber2').removeClass('opacity00');
							setTimeout(function () {
								intro.nextStep();
							},1500);
						});
					});
				break;
			case 'dataEntry' :
				$('#borderBox').addClass('z-index1000000');
				$("#box").effect( "highlight",{color: 'red'}, 200);
				transferEffect("#box","#value11", function() {
					$("#value11").removeClass("opacity00");
					$("#box1").addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 200);
					transferEffect("#box1","#value12", function() {
						$("#value12").removeClass("opacity00");
						$(".introjs-tooltip").removeClass("hide");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					})
				});
				break;
			case "enterData3" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber3" class="opacity00">Student count is : <span class="border opacity00 position" id="value13">'
								+ $('#countCupValue').text()+'</span><br><br>');
						transferEffect("#textEnter2","#inputNumber3",function() {
							$('#inputNumber3').removeClass('opacity00');
							setTimeout(function () {
								intro.nextStep();
							},1500);
					});
				});
				break;
			case 'dataEntry1' :
				$('#countBox').addClass('z-index10000000');
				$("#textEnter2").removeClass("z-index1000000");
				$("#countCupValue").effect( "highlight",{color: '#ffff33'}, 200);
				transferEffect("#countBox","#value13", function() {
					$("#value13").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					$('#countBox').removeClass('z-index10000000');
						$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
				break;
			case "enterData4" :
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber4" class="opacity00">The given two subjects marks are  : <span class="border opacity00 position" id="value14">'
								+ $('#box2').text() +'</span> <span class="border opacity00 position" id="value15">' 
								+ $('#box3').text()+'</span></span><br><br> ');
						transferEffect("#textEnter1","#inputNumber4",function() {
							$('#inputNumber4').removeClass('opacity00');
							setTimeout(function () {
								intro.nextStep();
							},1500);
					});
				});
				break;
			case 'dataEntry2' :
				$('#borderBox1').addClass('z-index1000000');
				$("#box2").css("zIndex","1000000").effect( "highlight",{color: 'red'}, 200);
				transferEffect("#box2","#value14", function() {
					$("#value14").removeClass("opacity00");
					$("#box3").css("zIndex","1000000").effect( "highlight",{color: '#ffff33'}, 200);
					transferEffect("#box3","#value15", function() {
						$("#value15").removeClass("opacity00");
						$(".introjs-tooltip").removeClass("hide");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					})
				});
				break;
			case "enterData5" :
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber5" class="opacity00">Student count is : <span class="border opacity00 position" id="value16">'
								+ $('#countCupValue').text()+'</span>');
						transferEffect("#textEnter2","#inputNumber5",function() {
							$('#inputNumber5').removeClass('opacity00');
							setTimeout(function () {
								intro.nextStep();
							},1500);
						});
					});
				break;
			case 'dataEntry3' :
				$('#countBox').addClass('z-index10000000');
				$("#textEnter2").removeClass("z-index1000000");
				$("#countCupValue").effect( "highlight",{color: 'red'}, 200);
				transferEffect("#countBox","#value16", function() {
					$("#value16").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					$('#countBox').removeClass('z-index10000000');
						$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
				break;
			}
			break;
		case "enterVal" :
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "value" :
				$('.introjs-helperLayer').one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"<y>cin</y> is used to input the given data", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "value1" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break; 
		case  'count1':
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'increment' :
				if (intro._direction == "backward") {
					if (parseInt($("#countCupValue").text()) > 0) {
						count--;
						$("#countCupValue").text(count);
					}
				}
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"To increment <span class='ct-code-b-yellow'>count</span>" +
							" value.", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "increment2":
				if (intro._direction == "backward") {
					if (parseInt($("#countCupValue").text()) > 0) {
						count--;
						$("#countCupValue").text(count);
					}
				}
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"To increment <span class='ct-code-b-yellow'>count</span>" +
							" value.", 10, "", function() {
						$('#borderBox1').removeClass('z-index1000000');
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			}
		break;
		case "outputVal" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "element1" :
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#textEnter1").removeClass("z-index1000000");
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"<y>cin</y> is used to input the given data", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "element2" :
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#textEnter1").removeClass("z-index1000000");
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break; 
		case "restartBtn" :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#countBox').removeClass('z-index1000000');
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
TweenMax.to('#infoText', 1 ,{
	opacity00 : 1,
	onComplete : function() {
		$('#nextButton').removeClass("opacity00");
		$('#nextButton').click(function(){
			$('#nextButton').remove();
			intro.nextStep();
			});
		}
	});
}
function checking(selector) {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	var maxNumberOfInputs;
	var maxLengthOfInput;
	$(selector).on("keydown", function(e) {
		maxNumberOfInputs = 2;
		maxLengthOfInput = 1;
		
		if (arr.length == maxNumberOfInputs) {
			if (e.keyCode == 32) {
				e.preventDefault();
			}
		}
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 32, 35, 36, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
	
	
	$(selector).on("keyup", function(e) {
		$(".user-btn").remove();
		$('.error-text').remove();
		maxNumberOfInputs = 2;
		maxLengthOfInput = 2;
		if ($(this).text() == "") {
			$('.user-btn').remove();
			$('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
												"Please enter " + maxNumberOfInputs + " numbers and separate each with space.</span>");
		}
		var arr1 = $(this).text().split(" ");
		var count = 0;
		arr = [];
		
		$.each(arr1, function(idx, val) {
			if (val > 99 || val < 0) {
				$('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
														"Please limit the index " + idx + " number in between 0 and 99 .</span>");
				$('.user-btn').remove();
				
			} else if (val.trim().length > 0) {
				arr.push(val);
				count++;
			}
		});
		if (count == 2) {
			if (selector == '#inputChar') {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal1()">Next&rarr;</a>');
			} else {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal2()">Next&rarr;</a>');
			}
		}
	});
}
function storeVal1() {
	$('#inputChar').attr('contenteditable', false);
	$('.user-btn').remove();
	var splittedText = $('#inputChar').text().split(" ");
	$('#inputChar').html('');
	$.each(splittedText, function(idx, val) {
		if (val.trim().length > 0) {
			$('#inputChar').append('<span class="scanfValue non-empty">' + val + '</span> ');
			$('.printfValue').remove();
			$('#outputPrintfLine').append('<span class="printfValue visibility-hidden">' + val + '</span> ');
		} else {
			$('#inputChar').append(' ');
		}
	});
	$('.scanfValue').addClass('output-value-circle circle-css');
	$.each(arr, function(idx, val) {
		$('.arrayValue').eq(idx).text(parseInt(val)).parent().addClass("z-index1000000");
		var l = $('#inputChar .non-empty').eq(idx).offset();
		$('.arrayValue').eq(idx).offset({
			"top" : l.top,
			"left" : l.left
		});
		TweenMax.to($('.arrayValue').eq(idx), 1, {top: 0, left : 0, onComplete:function() {
			$(".z-index1000000").removeClass("z-index1000000");
			$('.scanfValue').removeClass('output-value-circle circle-css');
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		}});
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
function storeVal2() {
	$('#inputChar1').attr('contenteditable', false);
	$('.user-btn').remove();
	var splittedText = $('#inputChar1').text().split(" ");
	$('#inputChar1').html('');
	$.each(splittedText, function(idx, val) {
		if (val.trim().length > 0) {
			$('#inputChar1').append('<span class="scanfValue1 non-empty">' + val + '</span> ');
			$('.printfValue').remove();
			$('#outputPrintfLine1').append('<span class="printfValue1 visibility-hidden">' + val + '</span> ');
		} else {
			$('#inputChar1').append(' ');
		}
	});
	$('.scanfValue1').addClass('output-value-circle circle-css');
	$.each(arr, function(idx, val) {
		$('.arrayValue1').eq(idx).text(parseInt(val)).parent().addClass("z-index1000000");
		var l = $('#inputChar1 .non-empty').eq(idx).offset();
		$('.arrayValue1').eq(idx).offset({
			"top" : l.top,
			"left" : l.left
		});
		TweenMax.to($('.arrayValue1').eq(idx), 1, {top: 0, left : 0, onComplete:function() {
			$(".z-index1000000").removeClass("z-index1000000");
			$('.scanfValue1').removeClass('output-value-circle circle-css');
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		}});
	});
}
function typing(typingId, typingContent,cursorColor, typingInterval, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
	})
}
function zoomInEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(this).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	})
}
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1300 , function() {
	$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
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