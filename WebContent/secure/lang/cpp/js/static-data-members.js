var arr = [];
var count = 0;
var readPrintStringUsingGetsPutsReady = function() {
	$('#restartBtn').click(function() {
		$('#inputChar').val('');
		$('#hiddentotalEnterChar').val();
		location.reload();
	});
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});

	intro = introJs();
	$('#nextButton').click(function() {
		$(this).remove();
		intro.nextStep();
	});
	intro.setOptions ({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
			element : '#informationDiv',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#preBody',
			intro : '',
		}, {
			element : '#class',
			intro : '',
			tooltipClass: 'hide'
		/*}, {
			element : '#variables',
			intro : '',
			animateStep : 'first'*/
		
		}, {
			element : '#count',
			intro : '',
			//tooltipClass: 'hide'
		}, {
			element : '#int',
			intro : '',
			tooltipClass: 'hide'
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory',
			tooltipClass : 'hide'
			
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'countIncrease',
			tooltipClass : 'hide'
		}, {
			element : '#main',
			intro : '',
			/*animateStep : 'execution'*/
		}, {
			element : '#object',
			intro : '',	
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory1',
			tooltipClass : 'hide'
		}, {
			element : '#getData',
			intro : '',	
			tooltipClass : 'hide'
		}, {
			element : '#data',
			intro : '',	
		},{
			element : '#method',
			intro : '',
			animateStep : 'public1'
		},{
			element : '#cout',
			intro : '',
			animateStep : 'output',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData',
			tooltipClass : 'hide'
		},{
			element : '#cin',
			intro : '',
			animateStep: 'result'
		/*}, {
			element : '#enterVal',
			intro : '',	
			animateStep : 'value',
			tooltipClass: 'hide'*/
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterValue',
			tooltipClass: 'hide'
		},{
			element : '#count1',
			intro : '',
			animateStep : 'increment',
			tooltipClass: 'hide'
		},{
			element : '#animationBox',
			intro : '',
			animateStep : 'increment1',
			tooltipClass: 'hide'
		}, {
			element : '#data1',
			intro : '',	
		},{
			element : '#method',
			intro : '',
			animateStep : 'public2',
			tooltipClass: 'hide'
		},{
			element : '#cout',
			intro : '',
			animateStep : 'output1',
			tooltipClass: 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData1',
			tooltipClass :'hide'
		},{
			element : '#cin',
			intro : '',
			animateStep: 'result1',
			tooltipClass:'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterValue1',
			tooltipClass: 'hide'
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
			element : '#getCount',
			intro : '',	
			tooltipClass: 'hide'
		}, {
			element : '#count2',
			intro : '',	
		}, {
			element : '#method1',
			intro : '',
			animateStep : 'default1',
			tooltipClass: 'hide'
		},{
			element : '#cout1',
			intro : '',
			animateStep : 'outputt',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData2',
			tooltipClass: 'hide'
		}, {
			element : '#element',
			intro : '',
			animateStep : 'element11',
			tooltipClass: 'hide'
		
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry',
			tooltipClass: 'hide'
		},{
			element : '#cout2',
			intro : '',
			animateStep : 'outptt',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData3',
			tooltipClass :'hide'
		}, {
			element : '#count4',
			intro : '',
			animateStep : 'count_1',
			tooltipClass :'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry1',
			tooltipClass :'hide'
		}, {
			element : '#count3',
			intro : '',	
		}, {
			element : '#method1',
			intro : '',
			animateStep : 'default2',
			tooltipClass: 'hide'
		},{
			element : '#cout1',
			intro : '',
			animateStep : 'outputt1',
			tooltipClass: 'hide'
				
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData4',
			tooltipClass: 'hide'
		}, {
			element : '#element',
			intro : '',
			animateStep : 'element12',
			tooltipClass: 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry2',
			tooltipClass: 'hide'
		},{
			element : '#cout2',
			intro : '',
			animateStep : 'outptt1',
			tooltipClass: 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData5',
			tooltipClass:'hide'	
		}, {
			element : '#count4',
			intro : '',
			animateStep : 'count_2',
			tooltipClass: 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry3',
			tooltipClass: 'hide'
		},{
			element : '#mainClose',
			intro : '',
		}, {
			element : "#button",
			intro : "",
			position : "left"
		}]
	});
	
	intro.onbeforechange(function(targetElement){
		var elementId = targetElement.id;
		switch(elementId) {
		case 'preBody':
			$("#class").css('opacity', '0').removeAttr('style');
			$("#variables").css('opacity', '0').removeAttr('style');
			$("#count ,#public").css('opacity', '0').removeAttr('style');
			$("#method").css('opacity', '0').removeAttr('style');
			$("#method1").css('opacity', '0').removeAttr('style');
		break;	
		case 'count' :
			$("#countBox").addClass("opacity00");
			$('#int').css('opacity', '0').removeAttr('style');
		break;
		case 'int' :
			$('#int').css('opacity', '0').removeAttr('style');
			$("#countCupValue").addClass('opacity00');
		break;
		case 'object':
			$("#borderBox, #borderBox1").addClass("opacity00");
			$("#one, #two, #three, #four").addClass("opacity00");
			$('#totalBox').addClass('opacity00');
			$('#borderLine').addClass('opacity00');
			$('#voidGet').addClass('opacity00').removeAttr('style');
			$('#voidCount').addClass('opacity00').removeAttr('style');
		break;
		case 'cout' :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "output" :
				$("#outputBody").empty();
				
				break;
			}
			break;
		case "enterVal" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "value" :
				$('.user-btn').remove();
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
		case 'cout1' :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "outputt" :
				$('#inputNumber2').addClass("opacity00");
			break;
			case "outputt1" :
				$('#inputNumber4').addClass("opacity00");
			break;
			}
			break;
		case "element" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "element11" :
				$("#value11").addClass("opacity00");
				$('#value12').addClass("opacity00");
				break;
			case "element12" :
				$("#value14").addClass("opacity00");
				$('#value15').addClass("opacity00");
				break;
			}
			break;
		case 'cout2' :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "outptt" :
				$('#inputNumber3').addClass("opacity00");
			break;
			case "outptt1" :
				$('#inputNumber5').addClass("opacity00");
			break;
			}
			break;
		case 'count4' :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "count_1" :
				$('#value13').addClass("opacity00");
			break;
			case "count_2" :
				$('#value16').addClass("opacity00");
			break;
			}
			break;
		case "animationBox" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			/*case "memory" :
				$("#countBox").addClass("opacity00");
			break;*/
			/*case "countIncrease":
				count = 0;
				$("#countCupValue").addClass('opacity00');
			break;*/
			case "increment1":
				count = 1;
			break;
			case "increment3":
				count = 2;
				$("#getCount").css('opacity','0');
				$("#count2").css('opacity','0');
				$("#count3").css('opacity','0');
			break;
			}
			break;
		case "cin" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
				case 'result':
					console.log("raj")
					$(".user-btn").remove();
					$("#inputChar").removeAttr("placeholder");
					$("#inputChar").text("");
					$('.arrayValue').text("");
				break;
			}
			break;
		case "outputBox" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "enterData" :
				$("#outputBody").empty();
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
			
			/*case 'dataEntry1':
				$("#value13").addClass("opacity00");
			break;*/
			/*case 'dataEntry2':
				$("#value14").addClass("opacity00");
				$('#value15').addClass("opacity00");
			break;
			case 'dataEntry3':
				$("#value16").addClass("opacity00");
			break;*/
			}
		break;
		}
	});
	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		
		if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
			intro._introItems[intro._currentStep]["animation"] = "repeat";
		}
		
		if (intro._introItems[intro._currentStep]["isCompleted"]) {
			if (intro._currentStep != 0) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			return;
		}
		if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
			intro._introItems[intro._currentStep]["isCompleted"] = true;
		}
		intro.refresh();
		var elementId = targetElement.id;
		switch(elementId) {
			case  "preBody" :
				$('.introjs-helperLayer').one('transitionend',function() {
					$('#preBody').removeClass("opacity00");
					typing('.introjs-tooltiptext',"Let us learn an example on <span class='ct-code-b-yellow'>"+
						"Static data members</span>.", 10,"", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			
			case 'class' :
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"Here a class <y>Student</y> is created with two private data members" +
							" <y>maths</y>, <y>physics</y>, one static data member <y>count</y>" +
							" and two public member functions are <y>getData()</y> and <y>getCount()</y>.", 10, "",function() {
						$("#class").fadeTo(300 , 1, function() {
							$("#variables").fadeTo(300 , 1, function() {
								$("#count").fadeTo(300 , 1,function() {
									$("#public").fadeTo(300 , 1,function() {
										$("#method").fadeTo(300 , 1, function() {
											$("#method1").fadeTo(300 , 1, function() {
												$('.introjs-nextbutton, .introjs-prevbutton').show();
											});
										});
									});
								});
							});
						});
					});
				});
			break;
			case 'int' :
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext',"The variable <y>count</y> is defined outside and it is" +
								" initialized to <y>zero</y> by default.", 10, "",function() {
							$('#int').fadeTo(300 , 1, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			break;
			case 'count' :
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass('hide');
					$('.introjs-tooltip').css("min-width", "300px");
					typing('.introjs-tooltiptext',"<ul><li>The variable <y>count</y> is specified as" +
							" <y>static</y>.</li><li>The type of each <y>static member variable</y> must" +
							" be defined outside class definition.</li>" +
							"<li>This is necessary because the <y>static data members</y> are stored " +
							"separately rather than a part of an object.</li>" +
							"<li>Since they are associated with the class itself rather than" +
							" with any object, they are also known as <y>class</y> <y>variable</y>.</li>" +
							"</ul>", 10, "",function() {
						$('#count').fadeTo('slow', 1, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
						/*$('.introjs-tooltip').css('min-width', '');*/
						});
					});
				});
			break;
			case 'object' :
				$('.introjs-helperLayer').one("transitionend", function() {
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"<y>s1</y> and <y>s2</y> are declared as objects" +
							" of class <y>Student</y>.", 10, "", function() {
						$('#object').fadeTo(300, 1, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case 'data' :
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"The member function <y>getData()</y> is" +
							" called by the object <y>s1</y>.", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'data1' :
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#countCupValue").removeClass('z-index10000000');
					typing('.introjs-tooltiptext',"The member function <y>getData()</y> is" +
							" called by the object <y>s2</y>.", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'main':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$(".introjs-tooltip").removeClass('hide');
					var text = 	"<span class='ct-code-b-yellow'>main()</span> is the starting point of execution.";
					typing(".introjs-tooltiptext", text, 10, "", function() {
						$("#main").fadeTo(300 , 1, function() {
							$('.introjs-prevbutton, .introjs-nextbutton').show();
						});
					});
				});
				break;
			case 'count2' :
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#countCupValue").removeClass('z-index10000000');
					typing('.introjs-tooltiptext',"The <y>getCount()</y> is called by <y>s1</y>.", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'count3' :
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"The <y>getCount()</y> is called by <y>s1</y>.", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'mainClose':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"This is the end of the <y>main()</y> function " +
						"where the program execution ends.", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case 'getData':
				$('.introjs-helperLayer').one("transitionend", function() {
					$(".introjs-tooltip").removeClass('hide');
					var text = 	"Now read the <span class='ct-code-b-yellow'>maths</span> and " +
								"<span class='ct-code-b-yellow'>physics</span> marks of " +
								"<span class='ct-code-b-yellow'>s1</span> and <span class='ct-code-b-yellow'>s2</span>.";
					typing(".introjs-tooltiptext", text,10, "", function() {
						$("#getData").fadeTo(300 , 1, function() {
							$("#data").fadeTo(300 , 1, function() {
								$("#data1").fadeTo(300 , 1,function() {
									$('.introjs-prevbutton, .introjs-nextbutton').show();
								});
							});
						});
					});
				});
				break;
			case 'getCount':
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
							$("#getCount").fadeTo(300 , 1, function() {
								$("#count2").fadeTo(300 , 1, function() {
									$("#count3").fadeTo(300 , 1, function() {
										setTimeout(function() {
											intro.nextStep();
										},500);
									});
								});
							});
					} else {
						$("#getCount ,#count2, #count3").css('opacity','0');
						setTimeout(function() {
							intro.previousStep();
						},500);
					}
				});
				break;
			case  'method':
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'public1' :
					$('.introjs-helperLayer').one('transitionend',function() {
						typing('.introjs-tooltiptext',"The <y>getData()</y> is used to read the " +
								"data members <y>maths</y> and <y>physics</y>.", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "public2":
				case "public3":
					/*intro._introItems[intro._currentStep]["tooltipClass"] = "hide";*/
					$('.introjs-helperLayer').one('transitionend',function() {
						if(intro._direction == 'forward') {
							setTimeout(function() {
								intro.nextStep();
							},500);
						} else {
							setTimeout(function() {
								intro.previousStep();
							},500);
						}
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
						typing('.introjs-tooltiptext',"This statement increases the <y>count</y> value.", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				
				case "increment2":
					$('.introjs-helperLayer').one('transitionend',function() {
					if (intro._direction == "forward") {
							/*$('.introjs-tooltip').removeClass("hide");
							typing('.introjs-tooltiptext',"To increment <span class='ct-code-b-yellow'>count</span>" +
									" value.", 10, "", function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});*/
							setTimeout(function() {
								intro.nextStep();
							},1000);
						
					} else {
						if (parseInt($("#countCupValue").text()) > 0) {
							count--;
							$("#countCupValue").text(count);
							setTimeout(function() {
								intro.previousStep();
							},1000);
						}
					}/* else {
						});$("#countCupValue").text(parseInt($("#countCupValue").text()) + 1);
					}*/
					});
					break;
				}
			break;
			case  'method1':
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'default' :
					$('.introjs-helperLayer').one('transitionend',function() {
						typing('.introjs-tooltiptext',"", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "default1":
				case 'default2':
					$('.introjs-helperLayer').one('transitionend',function() {
						if(intro._direction == "forward") {
							setTimeout(function() {
								intro.nextStep();
							},500);
						} else {
							setTimeout(function() {
								intro.previousStep();
							},500);
						}
					});
					break;
				}
			break;
			case "main" :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
				case "execution" :
					$('.introjs-helperLayer').one("transitionend",function() {
						$("#countCupValue").removeClass('z-index10000000');
						typing('.introjs-tooltiptext',"<span class='ct-code-b-yellow'>main()</span> method to execute the programm.", 10,"",function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				break;
			}
			break;
			case "animationBox" :
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case "memory" :
					//$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == 'forward') {
							$('#animationBox').removeClass('opacity00');
							$('#countBox').removeClass("opacity00").addClass('animated zoomIn').one('animationend', function() {
								$('#countBox').removeClass("animated zoomIn");
									setTimeout(function() {
										intro.nextStep();
									},1000);
								});
							} else {
								$("#countBox").addClass("opacity00");
								setTimeout(function() {
									intro.previousStep();
								},1000);
							}
					//});
					break;
				case 'memory1' :
					$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == "forward") {
						$('#animationBox').removeClass('opacity00');
						$('#totalBox').removeClass('opacity00');
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
																	$("#object").removeClass('z-index1000000');
																	$('#borderLine').removeClass('opacity00');
																	transferEffect('#getVoid', "#voidGet", function() {
																		$('#voidGet').removeClass('opacity00');
																		transferEffect('#getVoid1', "#voidCount", function() {
																			$('#voidCount').removeClass('opacity00');
																				$("#one, #two, #three, #four").removeClass("animated zoomIn");
																				setTimeout(function() {
																					intro.nextStep();
																				},1000);
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
					} else {
							$("#borderBox, #borderBox1").addClass("opacity00");
							$("#one, #two, #three, #four").addClass("opacity00");
							$('#totalBox').addClass('opacity00');
							$('#borderLine').addClass('opacity00');
							$('#voidGet').addClass('opacity00').removeAttr('style');
							$('#voidCount').addClass('opacity00').removeAttr('style');
							$("#getData").css('opacity', '0').removeAttr('style');
							$("#data").css('opacity', '0').removeAttr('style');
							$("#data1").css('opacity', '0').removeAttr('style');
								setTimeout(function() {
									intro.previousStep();
								},1000);
							}
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
							typing('.introjs-tooltiptext',"The <y>count</y> value is incremented to <y>1</y>.", 10, "", function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
					break;
				case "increment3":
					$('.introjs-helperLayer').one('transitionend',function() {
							$("#count1").addClass("z-index1000000");
							transferEffect("#count1","#countCupValue", function() {
								$("#countCupValue").text(count);
								$("#count1").removeClass("z-index1000000")
							$(".introjs-tooltip").removeClass("hide");
							typing('.introjs-tooltiptext',"The <y>count</y> value is incremented to <y>2</y>.", 10, "", function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
					break;
				case "countIncrease":
					//$('.introjs-helperLayer').one('transitionend', function() {
						$('#animationBox').removeClass('opacity00');
						$("#int").addClass("z-index1000000");
						//count = intro._introItems[intro._currentStep]["count"];
						console.log(count);
						if(intro._direction == 'forward') {
							$("#countCupValue").text(count).addClass('opacity00');
							//transferEffect("#int","#countCupValue", function() {
								$("#countCupValue").removeClass('opacity00');
								$("#int").removeClass("z-index1000000");
								setTimeout(function() {
									intro.nextStep();
								},1000);
								/*typing('.introjs-tooltiptext',"By default count value is initilased to <y>0</y>.", 10, "", function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});*/
							//});
							} else {
								$("#main").css('opacity', '0');
								count = 0;
								$("#int").removeClass("z-index1000000");
								$("#countCupValue").addClass('opacity00');
								//$('#int').addClass('opacity00').removeAttr('style');
								setTimeout(function() {
									intro.previousStep();
								},1000);
							}
					//});
					break;
					}
				break;
			case 'cout' :
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case "output" :
					$('.introjs-helperLayer').one('transitionend', function() {
						typing('.introjs-tooltiptext',"This statement is used to print " +
								"the string in the console.", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "output1" :
					$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == 'forward') {
							setTimeout(function() {
								intro.nextStep();
							},500);
						} else {
							//$('#inputNumber1').remove();
							setTimeout(function() {
								intro.previousStep();
							},500);
						}
					});
					break;
				}
				break;
			case "cin" :
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case "result" :
					$('.introjs-helperLayer').one("transitionend", function() {
						typing('.introjs-tooltiptext',"This statement is used to extract input from keyboard.", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "result1" :
					$('.introjs-helperLayer').one("transitionend", function() {
						if(intro._direction == "forward") {
							setTimeout(function() {
								intro.nextStep();
							},1000);
						} else {
							console.log("ahgdas");
							$("#inputChar1").removeAttr("placeholder");
							$("#inputChar1").text("");
							$('.arrayValue1').text("");
							setTimeout(function() {
								intro.previousStep();
							},500);
						}
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
						typing('.introjs-tooltiptext',"<y>cout</y> is used to display the output in console", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "outputt1" :
					$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == 'forward') {
						$('#countBox').removeClass('z-index10000000');
						setTimeout(function() {
							intro.nextStep();
						},1000);
						} else {
							setTimeout(function() {
								intro.previousStep();
							},1000);
						}
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
						$('#borderBox').removeClass('z-index1000000');
						$("#box1").removeClass("z-index1000000")
						typing('.introjs-tooltiptext',"<y>cout</y> is used to display the output in console", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "outptt1" :
					$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == "forward") {
							$('#borderBox1').removeClass('z-index1000000');
							setTimeout(function() {
								intro.nextStep();
							},500);
						} else {
							setTimeout(function() {
								intro.previousStep();
							},500);
						}
					});
					break;
				}
				break;
			case 'count4' :
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case "count_1" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext',"", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "count_2" :
					$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == "forward") {
							$('#borderBox1').removeClass('z-index1000000');
							setTimeout(function() {
								intro.nextStep();
							},500);
						} else {
							setTimeout(function() {
								intro.previousStep();
							},500);
						}
					});
					break;
				}
				break;
			/*case "enterVal" :
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case "value" :
					$('.introjs-helperLayer').one("transitionend", function() {
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext',"<y>cin</y> is used to input the given data", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "value1" :
					$('.introjs-helperLayer').one("transitionend", function() {
						if(intro._direction == 'forward') {
							setTimeout(function() {
								intro.nextStep();
							},500);
						} else {
							setTimeout(function() {
								intro.previousStep();
							},500);
						}
					});
					break;
				}
				break; */
			case "element" :
				intro.refresh();
				
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case "element11" :
					$('.introjs-helperLayer').one("transitionend", function() {
						$("#textEnter1").removeClass("z-index1000000");
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext',"<y>cout</y> is used to input the given data", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "element12" :
					$('.introjs-helperLayer').one("transitionend", function() {
						if(intro._direction == "forward") {
							$("#textEnter1").removeClass("z-index1000000");
							setTimeout(function() {
								intro.nextStep();
							},500);
						} else {
							setTimeout(function() {
								intro.previousStep();
							},500);
						}
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
						if(intro._direction == "forward") {
							$('#outputBox').removeClass('opacity00');
							$("#outputBody").append(' <span id ="inputNumber" class="opacity00">Enter two subject marks  : <span id="outputPrintfLine"><div  id="inputChar" contenteditable="true" maxlength="2" class="position input-char"></div></span></span><br>');
							transferEffect("#textEnter","#inputNumber",function() {
								$('#inputNumber').removeClass('opacity00');
								setTimeout(function () {
										intro.nextStep();
								},1500);
							});
					
						} else {
							$('#outputBox').addClass('opacity00');
							$('#inputNumber').addClass('opacity00');
							setTimeout(function () {
								intro.previousStep();
							},1500);
						}
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
							$('.introjs-prevbutton').show();
							//$('.introjs-nextbutton, .introjs-prevbutton').show();
							checking('#inputChar');
							charAtEnd("inputChar");
						});
				});
				break;
				case "enterData1" :
					$('.introjs-helperLayer').one("transitionend", function() {
						if(intro._direction == "forward") {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append('<span id ="inputNumber1" class="opacity00">Enter two subject marks  : <span id="outputPrintfLine1"><div  id="inputChar1" contenteditable="true" maxlength="2" class="position input-char"></div></span></span><br>');
						transferEffect("#textEnter","#inputNumber1",function() {
							$('#inputNumber1').removeClass('opacity00');
							setTimeout(function () {
								intro.nextStep();
							},1000);
						});
						} else {
							$('#inputNumber + *').after().remove();
							$('#inputNumber1').remove();
							$('#inputNumber1').addClass('opacity00').removeAttr('style');
							setTimeout(function() {
								intro.previousStep();
							}, 1000)
						}
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
							$('.introjs-prevbutton').show();
						});
				});
				break;
				case "enterData2" :
					$('.introjs-helperLayer').one("transitionend", function() {
						if(intro._direction == "forward") {
							$("#outputBody").append(' <span id ="inputNumber2" class="opacity00">The given two subjects marks are  : <span class="border opacity00 position" id="value11">'
									+ $('#box').text() +'</span> <span class="border opacity00 position" id="value12">' 
									+ $('#box1').text()+'</span></span><br>');
							transferEffect("#textEnter1","#inputNumber2",function() {
								$('#inputNumber2').removeClass('opacity00');
								setTimeout(function () {
									intro.nextStep();
								},1500);
							});
						} else {
							$("#inputNumber2").remove();
							$('#inputNumber1 + *').after().remove();
							$("#inputNumber2").addClass('opacity00').removeAttr('style');
							setTimeout(function () {
								intro.previousStep();
							},1000);
						}
					});
					break;
				case 'dataEntry' :
					if(intro._direction == "forward") {
						$('#borderBox').addClass('z-index1000000');
						$("#box").effect( "highlight",{color: 'red'}, 200);
						transferEffect("#box","#value11", function() {
							$("#value11").removeClass("opacity00");
							$("#box1").addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 200);
							transferEffect("#box1","#value12", function() {
								$("#value12").removeClass("opacity00");
								$('#borderBox').removeClass('z-index1000000');
								setTimeout(function () {
									intro.nextStep();
								},1000);
							});
						});
					} else {
						$("#value11").addClass("opacity00").removeAttr('style');
						$('#value12').addClass("opacity00").removeAttr('style');
						setTimeout(function () {
							intro.previousStep();
						},1000);
				}
					break;
				case "enterData3" :
					$('.introjs-helperLayer').one("transitionend", function() {
						if(intro._direction == "forward") {
							$('#outputBox').removeClass('opacity00');
								$("#outputBody").append(' <span id ="inputNumber3" class="opacity00">Student count is : <span class="border opacity00 position" id="value13">'
										+ $('#countCupValue').text()+'</span><br>');
								transferEffect("#textEnter2","#inputNumber3",function() {
									$('#inputNumber3').removeClass('opacity00');
									setTimeout(function () {
										intro.nextStep();
									},1500);
							});
						} else {
							$("#inputNumber3").remove();
							$("#inputNumber3").addClass('opacity00');
							setTimeout(function () {
								intro.previousStep();
							},1500);
						}
					});
					break;
				case 'dataEntry1' :
					if(intro._direction == 'forward') {
					$('#countBox').addClass('z-index10000000');
					$("#textEnter2").removeClass("z-index1000000");
					$("#countCupValue").effect( "highlight",{color: '#ffff33'}, 200);
					transferEffect("#countBox","#value13", function() {
						$("#value13").removeClass("opacity00");
						$('#countBox').removeClass('z-index10000000');
						setTimeout(function () {
							intro.nextStep();
						},1000);
					});
					} else {
						$("#value13").addClass("opacity00").removeAttr('style');
						setTimeout(function() {
							intro.previousStep();
						}, 1000);
					}
					break;
				case "enterData4" :
					$('.introjs-helperLayer').one("transitionend", function() {
						if(intro._direction == "forward") {
							$("#outputBody").append(' <span id ="inputNumber4" class="opacity00">The given two subjects marks are  : <span class="border opacity00 position" id="value14">'
									+ $('#box2').text() +'</span> <span class="border opacity00 position" id="value15">' 
									+ $('#box3').text()+'</span></span><br>');
							transferEffect("#textEnter1","#inputNumber4",function() {
								$('#inputNumber4').removeClass('opacity00');
								setTimeout(function () {
									intro.nextStep();
								},1000);
						});
						} else {
							$('#inputNumber3 + *').after().remove();
							$("#inputNumber4").remove();
							$("#inputNumber4").addClass('opacity00');
							setTimeout(function () {
								intro.previousStep();
							},1000);
						}
					});
					break;
				case 'dataEntry2' :
					if(intro._direction == 'forward') {
					$('#borderBox1').addClass('z-index1000000');
					$("#box2").css("zIndex","1000000").effect( "highlight",{color: 'red'}, 200);
					transferEffect("#box2","#value14", function() {
						$("#value14").removeClass("opacity00");
						$("#box3").css("zIndex","1000000").effect( "highlight",{color: '#ffff33'}, 200);
						transferEffect("#box3","#value15", function() {
							$("#value15").removeClass("opacity00");
							setTimeout(function () {
								intro.nextStep();
							},1500);
						})
					});
					} else {
						$("#value14").addClass("opacity00").removeAttr('style');
						$('#value15').addClass("opacity00").removeAttr('style');
						setTimeout(function () {
							intro.previousStep();
						},1500);
					}
					break;
				case "enterData5" :
					$('.introjs-helperLayer').one("transitionend", function() {
						if(intro._direction == "forward") {
							$("#outputBody").append(' <span id ="inputNumber5" class="opacity00">Student count is : <span class="border opacity00 position" id="value16">'
									+ $('#countCupValue').text()+'</span>');
							transferEffect("#textEnter2","#inputNumber5",function() {
								$('#inputNumber5').removeClass('opacity00');
								setTimeout(function () {
									intro.nextStep();
								},1500);
							});
						} else {
							$("#inputNumber5").remove();
							$("#inputNumber5").addClass('opacity00');
							setTimeout(function () {
								intro.previousStep();
							},1500);
						}
					});
					break;
				case 'dataEntry3' :
					if(intro._direction == "forward") {
						$('#countBox').addClass('z-index10000000');
						$("#textEnter2").removeClass("z-index1000000");
						$("#countCupValue").effect( "highlight",{color: 'red'}, 200);
						transferEffect("#countBox","#value16", function() {
							$("#value16").removeClass("opacity00");
							$('#countBox').removeClass('z-index10000000');
							setTimeout(function () {
								intro.nextStep();
							},1500);
						});
					} else {
						$("#value16").addClass("opacity00").removeAttr('style');
						setTimeout(function () {
							intro.previousStep();
						},1500);
					}
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
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	$('#informationDiv').removeClass('opacity00');
	TweenMax.to('#infoText', 1 ,{
		opacity00 : 1,
		onComplete : function() {
			$('#NextButton').removeClass("opacity00");
			$('#NextButton').click(function(){
				$('#NextButton').remove();
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
	/*$(selector2).removeClass("opacity00");*/
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