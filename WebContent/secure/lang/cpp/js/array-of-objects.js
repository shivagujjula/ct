var val = 0;
var count = 0;
var iValComparisionFlag = true;
var iValueComparisionFlag = true;
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
			tooltipClass : 'hide',
		}, {
			element : '#class',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#method',
			intro : '',
			animateStep : 'public',
		}, {
			element : '#method1',
			intro : '',
			animateStep : 'static'
		}, {
			element : '#main',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#manager',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory2',
			tooltipClass : 'hide',
		}, {
			element : '#int1',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#condition',
			intro : '',
			animateStep : 'for',
			tooltipClass : 'hide'
		}, {
			element : '#forLoop',
			intro : '',
			animateStep : 'loop1',
			tooltipClass : 'hide'
		}, {
			element : '#iVal',
			intro : '',
			animateStep: 'iVal1',
			tooltipClass : 'hide'
		}, {
			element : '#iValComparision',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#cout4',
			intro : '',
			animateStep : 'cout41',
			tooltipClass : 'hide',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData',
			tooltipClass : 'hide'
		}, {
			element : '#manager1',
			intro : '',
			animateStep : 'data',
			tooltipClass : 'hide'
		}, {
			element : '#method',
			intro : '',
			animateStep : 'public1',
			tooltipClass : 'hide',
		}, {
			element : '#cout',
			intro : '',
			animateStep : 'outputt1',
			tooltipClass : 'hide',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData1',
			tooltipClass:'hide'
		}, {
			element : '#cin',
			intro : '',
			animateStep : 'cinStep',
			tooltipClass:'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal',
			tooltipClass:'hide'
		}, {
			element : '#cout1',
			intro : '',
			animateStep : 'output',
			tooltipClass:'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData2',
			tooltipClass:'hide'
		}, {
			element : '#cin1',
			intro : '',
			animateStep : 'cinStep11',
			tooltipClass:'hide'
			
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal1',
			tooltipClass:'hide'
		},{
			element : '#close',
			intro : '',
			animateStep : 'close_1',
			tooltipClass:'hide'
		}, {
			element : '#condition',
			intro : '',
			animateStep : 'for1',
			tooltipClass : 'hide'
		},{
			element : '#iValIncrement',
			intro : '',
			animateStep : 'iValIncrement_1',
			tooltipClass:'hide'
		}, {
			element : '#iValComparision',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#cout4',
			intro : '',
			animateStep : 'cout41',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData3',
			tooltipClass : 'hide'
		}, {
			element : '#manager1',
			intro : '',
			animateStep : 'data1',
			tooltipClass : 'hide'
		}, {
			element : '#method',
			intro : '',
			animateStep : 'public2',
			tooltipClass : 'hide'
		}, {
			element : '#cout',
			intro : '',
			animateStep : 'outputt2',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData4',
			tooltipClass : 'hide'
		}, {
			element : '#cin',
			intro : '',
			animateStep : 'cinStep1',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal2',
			tooltipClass : 'hide'
		}, {
			element : '#cout1',
			intro : '',
			animateStep : 'output1',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData5',
			tooltipClass : 'hide'
		}, {
			element : '#cin1',
			intro : '',
			animateStep : 'cinStep12',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal3',
			tooltipClass : 'hide'
		},{
			element : '#close',
			intro : '',
			animateStep : 'close_2',
			tooltipClass : 'hide'
		}, {
			element : '#condition',
			intro : '',
			animateStep : 'for2',
			tooltipClass : 'hide'
		},{
			element : '#iValIncrement',
			intro : '',
			animateStep : 'iValIncrement_2',
			tooltipClass : 'hide'
		}, {
			element : '#cout4',
			intro : '',
			animateStep : 'cout42',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData6',
			tooltipClass : 'hide'
		}, {
			element : '#manager1',
			intro : '',
			animateStep : 'data2',
			tooltipClass : 'hide'
		}, {
			element : '#method',
			intro : '',
			animateStep : 'public3',
			tooltipClass : 'hide'
		}, {
			element : '#cout',
			intro : '',
			animateStep : 'outputt3',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData7',
			tooltipClass : 'hide'
		}, {
			element : '#cin',
			intro : '',
			animateStep : 'cinStep2',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal4',
			tooltipClass : 'hide'
		}, {
			element : '#cout1',
			intro : '',
			animateStep : 'output2',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData8',
			tooltipClass : 'hide'
		}, {
			element : '#cin1',
			intro : '',
			animateStep : 'cinStep13',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal5',
			tooltipClass : 'hide'
		},{
			element : '#close',
			intro : '',
			animateStep : 'close_3',
			tooltipClass : 'hide'
		},{
			element : '#iValIncrement',
			intro : '',
			animateStep : 'iValIncrement_3',
			tooltipClass : 'hide'
		}, {
			element : '#iValComparision',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#close1',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#cout5',
			intro : '',
			animateStep : 'outputVal',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData9',
			tooltipClass : 'hide'
		}, {
			element : '#condition1',
			intro : '',
			animateStep : 'for11',
			tooltipClass : 'hide'
		}, {
			element : '#forLoop1',
			intro : '',
			animateStep : 'loop11',
			tooltipClass : 'hide'
		}, {
			element : '#iValue',
			intro : '',
			animateStep: 'iValue1',
			tooltipClass : 'hide'
		}, {
			element : '#iValComparision1',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#manager2',
			intro : '',
			animateStep : 'data_1',
			tooltipClass : 'hide'
		}, {
			element : '#method1',
			intro : '',
			animateStep : 'static1',
			tooltipClass : 'hide'
		}, {
			element : '#cout2',
			intro : '',
			animateStep : 'output_11',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData10',
			tooltipClass : 'hide'
		},{
			element : '#name1',
			intro : '',
			animateStep : 'outputName',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry',
			tooltipClass : 'hide'
		},{
			element : '#cout3',
			intro : '',
			animateStep : 'output_1',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData11',
			tooltipClass : 'hide'
		},{
			element : '#age5',
			intro : '',
			animateStep : 'outputAge',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry1',
			tooltipClass : 'hide'
		},{
			element : '#iValIncrement1',
			intro : '',
			animateStep : 'iValIncrement_11',
			tooltipClass : 'hide'
		}, {
			element : '#iValComparision1',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#manager2',
			intro : '',
			animateStep : 'data_2',
			tooltipClass : 'hide'
		}, {
			element : '#method1',
			intro : '',
			animateStep : 'static2',
			tooltipClass : 'hide'
		}, {
			element : '#cout2',
			intro : '',
			animateStep : 'output_22',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData12',
			tooltipClass : 'hide'
		},{
			element : '#name1',
			intro : '',
			animateStep : 'outputName1',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry2',
			tooltipClass : 'hide'
		},{
			element : '#cout3',
			intro : '',
			animateStep : 'output_2',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData13',
			tooltipClass : 'hide'
		},{
			element : '#age5',
			intro : '',
			animateStep : 'outputAge1',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry3',
			tooltipClass : 'hide'
		},{
			element : '#iValIncrement1',
			intro : '',
			animateStep : 'iValIncrement_22',
			tooltipClass : 'hide'
		}, {
			element : '#iValComparision1',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#manager2',
			intro : '',
			animateStep : 'data_3',
			tooltipClass : 'hide'
		}, {
			element : '#method1',
			intro : '',
			animateStep : 'static3',
			tooltipClass : 'hide'
		}, {
			element : '#cout2',
			intro : '',
			animateStep : 'output_33',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData14',
			tooltipClass : 'hide'
		},{
			element : '#name1',
			intro : '',
			animateStep : 'outputName2'	,
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry4',
			tooltipClass : 'hide'
		},{
			element : '#cout3',
			intro : '',
			animateStep : 'output_3',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData15',
			tooltipClass : 'hide'
		},{
			element : '#age5',
			intro : '',
			animateStep : 'outputAge2',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry5',
			tooltipClass : 'hide'
		}, {
			element : '#iValIncrement1',
			intro : '',
			animateStep : 'iValIncrement_33',
			tooltipClass : 'hide'
		}, {
			element : '#iValComparision1',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#close2',
			intro : '',
			tooltipClass : 'hide'
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
		case 'preBody':
			$("#class").css('opacity', '0').removeAttr('style');
			$("#method").css('opacity', '0').removeAttr('style');
			$("#method1").css('opacity', '0').removeAttr('style');
		break;
		case 'class' :
			$("#main").css('opacity', '0').removeAttr('style');
		break;
		case 'main' :
			$("#manager").css('opacity', '0').removeAttr('style');
		break;
		case 'int1' :
			$('#condition').addClass('opacity00');
		break;
		case 'iVal':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'iVal1':
				$('#countCup').addClass('opacity00').removeAttr('style');
				$("#cup_value").text('');
				$("#num1").removeClass('z-index1000000');
			break;	
			}
		break;
		case 'iValue':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'iValue1':
				$("#countCup1").addClass('opacity00').removeAttr('style');
				$("#cup_value1").text('');
				$("#num1").removeClass('z-index1000000');
			break;	
			}
		break;
		case "cin" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "cinStep" :
				$("#table tr:eq(1) .value span").text("");
				$('.inputVal').text('');
			break;	
			case "cinStep1" :
				$("#table2 tr:eq(1) .value1 span").text("");
				$('.inputVall').text('');
			break;	
			case "cinStep2" :
				$("#table4 tr:eq(1) .value2 span").text("");
				$('.inputVall_1').text('');
			break;	
			}
		break;
		case "outputBox" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "enterVal1" :
				$('#inputAge1').val('');
				$("#borderBox1").text('');
			break;
			case "enterVal3" :
				$('#inputAge2').val('');
				$("#borderBox2").text('');
			break;
			case "enterVal5" :
				$('#inputAge3').val('');
				$("#borderBox3").text('');
			break;
			}
		break;
		case  'manager2':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'data_1' :
				$('.user-btn').remove();
			break;
			case "data_2":
				$('.user-btn').remove();
			break;
			case "data_3":
				$('.user-btn').remove();
			break;
			}
		break;
		case 'cout5' :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "outputVal" :
				$('#cout5').addClass('opacity00').removeAttr('style');
			break;	
			}
		break;
		case 'iValIncrement':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'iValIncrement_1':
				$('#cup_value').text('0');
			break;
			case 'iValIncrement_2':
				$('#cup_value').text('1');
			break;
			case 'iValIncrement_3':
				$('#cup_value').text('2');
			break;
			}
		break;
		}
	});
	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		
		if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
			intro._introItems[intro._currentStep]["animation"] = "repeat";
		}
		
		if (intro._introItems[intro._currentStep]["isCompleted"]) {
			if (intro._currentStep != 1) {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
			intro._introItems[intro._currentStep]["isCompleted"] = true;
		}
		var elementId = targetElement.id;
		switch(elementId) {
		case "preBody" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				$("#preBody").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"Let us learn an example on <y>array of objects</y>.</span>", 10,"", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'class' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"Here a class <y>Employee</y> is created with " +
						"<br>&ensp;&ensp; - two private data members <y>name</y>, <y> age</y>. " +
						"<br>&ensp;&ensp; - two public member functions " +
						"are <y>getData()</y> and <y>putData()</y>.", 10, "",function() {
					$('#class').fadeTo(300, 1, function() {
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
		break;
		case 'return' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'char' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				setTimeout(function() {
					intro.nextStep();
				},500);
			});
		break;
		
		case 'manager' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				$('#manager').fadeTo(300, 1, function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"<ul><li>An array of object <y>manager</y> with size <y>3 </y>" +
						"is declared to the class <y>Employee</y>.</li>" +
						"<li>Memory is alloacted to each object of an array of object <y>manager</y>. ", 10, "",function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			});
		break;
		case 'int1' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				$('#int1').removeClass('opacity00');
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"A local variable <y>i</y> is declared as <y>int</y> type.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'cout4' :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'cout41':
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeOut();
				});
			break;
			case 'cout42':
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeOut();
				});
			break;
			case 'cout43':
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeOut();
				});
			break;
			}
			break;
		case 'iVal' :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'iVal1':
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend',function() {
					$('#countCup').removeClass('opacity00');
					$("#num1").addClass('z-index1000000');
					$("#cup_value").append('0').addClass("animated zoomIn").one('animationend', function() {
						$("#cup_value").addClass('z-index10000000');
						$(".introjs-tooltip").removeClass("hide");
						$("#num1").removeClass('z-index1000000');
						typing('.introjs-tooltiptext',"This is the  <span class='ct-code-b-yellow'>initialization</span> section. Here a local " +
							"variable i is declared and initialized to <span class='ct-code-b-yellow'> 0</span>."+
								"", 10, "",function() {
							$("#cup_value").removeClass('animated zoomIn');
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			break;
			}
		break;
		case 'iValue' :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'iValue1':
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$('#countCup1').css({"top": "440px", "left": "350px"});*/
					$('#countCup1').removeClass('opacity00');
					$("#num2").addClass('z-index1000000');
					$("#cup_value1").append('0').addClass("animated zoomIn").one('animationend', function() {
						$("#cup_value1").addClass('z-index10000000');
						$(".introjs-tooltip").removeClass("hide");
						$("#num2").removeClass('z-index1000000');
						typing('.introjs-tooltiptext',"This is the  <span class='ct-code-b-yellow'>initialization</span> section. Here a local " +
							"variable i is declared and initialized to <span class='ct-code-b-yellow'> 0</span>."+
								"", 10, "",function() {
							$("#cup_value1").removeClass('animated zoomIn');
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			break;
			}
		break;
		case 'mainClose' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#cup_value").removeClass('z-index10000000');
				typing('.introjs-tooltiptext',"close the main tag", 10, "", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'int' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext'," The variable named <y>age</y> would be defined as an <y>int</y>.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "main" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				$("#cup_value").removeClass('z-index10000000');
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"<y>main()</y> is the starting point of execution.", 10,"",function() {
					$('#main').fadeTo(300, 1, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			});
		break;
		case 'close1':
			$('.introjs-helperLayer').one('transitionend',function() {
				$('#countCup').addClass('opacity00').removeAttr('style');
				if (intro._direction == "forward") {
					setTimeout(function() {
						intro.nextStep();
					},500);
				} else {
					$('#countCup').removeClass('opacity00');
					setTimeout(function() {
						intro.previousStep();
					},500);
				}
			});
		break;
		case 'close2':
			$('.introjs-helperLayer').one('transitionend',function() {
				if (intro._direction == "forward") {
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
		case "return" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"<y>main</y> function has to <y>return</y> a value because it is declared as int main"+
						"which means <y>main</y> function should <y>return integer data</y> type. ", "", 10,function() {
					$('.introjs-nextbutton').show();
					$('.introjs-prevbutton').show();
				});
			});
		break;
		case 'animationBox' :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'memory2' :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$("#animationBox").removeClass("opacity00");
							$("#manager1Details").fadeTo(1000, 1, function() {
								transferEffect("#createMemory","#table", function() {
									$("#table").fadeTo(100, 1, function() {
										transferEffect("#age","#age2", function() {
											$("#age2").fadeTo(100, 1, function() {
												$("#borderBox1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
													$("#manager2Details").fadeTo(1000, 1, function() {
														$("#manager3Details").fadeTo(1000, 1, function() {
															$('#borderLine').removeClass('opacity00');
															transferEffect('#getVoid', "#voidGet", function() {
																$('#voidGet').removeClass('opacity00');
																transferEffect('#getVoid1', "#voidPut", function() {
																	$('#voidPut').removeClass('opacity00');
																	setTimeout(function() {
																		intro.nextStep();
																	}, 1000);
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
						$('#int1').addClass('opacity00');
						$("#animationBox").addClass('opacity00');
						$("#manager1Details,#table ,#age2").css('opacity', '0');
						$("#borderBox1").addClass('opacity00').removeClass("animated zoomIn");
						$("#manager2Details, #manager3Details").css('opacity', '0');
						$('#borderLine').addClass('opacity00');
						$('#voidGet').addClass('opacity00').removeAttr('style');
						$('#voidPut').addClass('opacity00').removeAttr('style');
						setTimeout(function() {
							intro.previousStep();
						}, 1000);
					}
					});
				break;
			}
		break;
		case 'close':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'close_1':
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeOut();
				});
			break;
			case 'close_2':
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeOut();
				});
			break;
			case 'close_3':
				$('.introjs-helperLayer').one('transitionend',function() {
					if(intro._direction == 'forward') {
						setTimeout(function() {
							intro.nextStep();
						},500);
					} else {
						$("#cup_value").text('2')
						setTimeout(function() {
							intro.previousStep();
						},500);
					};
				});
			break;
			}
		break;
		case 'iValIncrement':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'iValIncrement_1':
					$('.introjs-helperLayer').one('transitionend',function() {
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext',"<ul><li>After executing the statements in the <y>for-loop</y> body the control " +
								"is transferred to the update section.</li><li>The <y>post-increment</y> operator increments the " +
								"value of <y>i</y> by <y>1</y>. <br>Now <y>i = <span id='one' class='position display'>1</span></y>.</li></ul>", 10, "", function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>");
							$('.user-btn').click(function() { 
								$('.user-btn').remove(); 
								flipEffectWithTweenMax("#cup_value", $("#one").text(),function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
					});
				break;
				case 'iValIncrement_2':
					$('.introjs-helperLayer').one('transitionend',function() {
							$('.introjs-tooltip').removeClass('hide');
							typing('.introjs-tooltiptext',"The <y>post-increment</y> operator increments the " +
									"value of <y>i</y> by <y>2</y>. <br>Now <y>i = <span id='two' class='position display'>2</span></y>.", 10, "", function() {
								$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>");
								$('.user-btn').click(function() { 
									$('.user-btn').remove(); 
									flipEffectWithTweenMax("#cup_value", $("#two").text(),function() {
										$('.introjs-nextbutton, .introjs-prevbutton').show();
									});
								});
							});
						});
					break;
				case 'iValIncrement_3':
					$('.introjs-helperLayer').one('transitionend',function() {
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext',"The <y>post-increment</y> operator increments the " +
								"value of <y>i</y> by <y>3</y>. <br>Now <y>i = <span id='three' class='position display'>3</span></y>.", 10, "", function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>");
							$('.user-btn').click(function() { 
								$('.user-btn').remove(); 
								flipEffectWithTweenMax("#cup_value", $("#three").text(),function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
					});
				break;
				}
			break;
			case 'iValIncrement1':
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'iValIncrement_11':
					$('.introjs-helperLayer').one('transitionend',function() {
						if (intro._direction == "forward") {
							flipEffectWithTweenMax($("#cup_value1").text('1'),function() {
								setTimeout(function() {
									intro.nextStep();
								},1000);
							});
						} else {
							$('#cup_value1').text('0');
							setTimeout(function() {
								intro.previousStep();
							},500);
						}
					});
				break;
			case 'iValIncrement_22':
				$('.introjs-helperLayer').one('transitionend',function() {
					if (intro._direction == "forward") {
						flipEffectWithTweenMax($("#cup_value1").text('2'),function() {
							setTimeout(function() {
								intro.nextStep();
							},1000);
						});
					} else {
						$('#cup_value1').text('1');
						setTimeout(function() {
							intro.previousStep();
						},500);
					}
				});
			break;
			case 'iValIncrement_33':
				$('.introjs-helperLayer').one('transitionend',function() {
					if (intro._direction == "forward") {
						flipEffectWithTweenMax($("#cup_value1").text('3'),function() {
							setTimeout(function() {
								intro.nextStep();
							},1000);
						});
					} else {
						$('#cup_value1').text('2');
						setTimeout(function() {
							intro.previousStep();
						},500);
					}
				});
			break;
			}
		break;
		case 'method':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'public' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"The <y>getData()</y> is used to read the " +
							"manager details <y>name</y> and <y>age</y>.", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "public1":
				$('.introjs-helperLayer').one('transitionend',function() {
					if(intro._direction == 'forward') {
						setTimeout(function() {
							intro.nextStep();
						},500);
					} else {
						$(".user-btn").remove();
						setTimeout(function() {
							intro.previousStep();
						},500);
					};
				});
			break;
			case "public2":
				$('.introjs-helperLayer').one('transitionend',function() {
					if(intro._direction == 'forward') {
						setTimeout(function() {
							intro.nextStep();
						},500);
					} else {
						$(".user-btn").remove();
						setTimeout(function() {
							intro.previousStep();
						},500);
					};
				});
			break;
			case "public3":
				$('.introjs-helperLayer').one('transitionend',function() {
					if(intro._direction == 'forward') {
						setTimeout(function() {
							intro.nextStep();
						},500);
					} else {
						$(".user-btn").remove();
						setTimeout(function() {
							intro.previousStep();
						},500);
					};
				});
			break;
			}
		break;
		case  'method1':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'static' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"The <y>putData()</y> is used to print the " +
							"manager deatils <y>name</y> and <y>age</y>.", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "static1":
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeOut();
				});
			break;
			case "static2":
				$('.user-btn').remove();
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeOut();
				});
			break;
			case "static3":
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeOut();
				});
			break;
			}
		break;
		case  'condition':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'for' :
				$('.introjs-helperLayer').one('transitionend',function() {
					$('#condition').removeClass('opacity00');
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"The above code demonstrates the working of a <y>for-loop</y>.", 10, "", function() {
						$('.introjs-nextbutton ,.introjs-prevbutton').show();
					});
				});
			break;
			case "for1":
				$('.introjs-helperLayer').one('transitionend',function() {
					$("#animationBox").removeClass('z-index1000000');
					if(intro._direction == 'forward') {
						setTimeout(function() {
							intro.nextStep();
						},500);
					} else {
						$("#cup_value").text('0')
						setTimeout(function() {
							intro.previousStep();
						},500);
					}
				});
			break;
			case "for2":
				$('.introjs-helperLayer').one('transitionend',function() {
					$("#animationBox").removeClass('z-index1000000');
					if(intro._direction == 'forward') {
						setTimeout(function() {
							intro.nextStep();
						},500);
					} else {
						$("#cup_value").text('1')
						setTimeout(function() {
							intro.previousStep();
						},500);
					}
				});
			break;
			}
		break;
		case  'condition1':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'for11' :
				$('.introjs-helperLayer').one('transitionend',function() {
					$('#condition1').removeClass('opacity00');
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"The above code demonstrates the working of a <y>for-loop</y>.", 10, "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			}
		break;
		case  'manager1':
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'data' :
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').append("<span id='retnVal2' class='position'>" +
					"<span id='declartion1'><span class='position'><y> manager[<span id='valueIm' class='position' style='display : inline-block;'>i</span>].getdata()</span></y>;</span> </span>");
					fromEffectWithTweenMax("#manager1", "#retnVal2", function() {
						flipEffectWithTweenMax("#valueIm", $("#cup_value").text(),function() {
							$('.introjs-tooltiptext').append("<br>The <y>getData()</y> is called by the object" +
									"<y> manager[0].getdata()</y>.");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			break;
			case "data1":
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').append("<span id='retnVal2' class='position'>" +
					"<span id='declartion1'><span class='position'><y> manager[<span id='valueIm' class='position' style='display : inline-block;'>i</span>].getdata()</span></y>;</span> </span>");
					fromEffectWithTweenMax("#manager1", "#retnVal2", function() {
						flipEffectWithTweenMax("#valueIm", $("#cup_value").text(),function() {
							$('.introjs-tooltiptext').append("<br>The <y>getData()</y> is called by the object" +
									"<y> manager[1].getdata()</y>.");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			break;
			case "data2":
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').append("<span id='retnVal2' class='position'>" +
					"<span id='declartion1'><span class='position'><y> manager[<span id='valueIm' class='position' style='display : inline-block;'>i</span>].getdata()</span></y>;</span> </span>");
					fromEffectWithTweenMax("#manager1", "#retnVal2", function() {
						flipEffectWithTweenMax("#valueIm", $("#cup_value").text(),function() {
							$('.introjs-tooltiptext').append("<br>The <y>getData()</y> is called by the object" +
									"<y> manager[2].getdata()</y>.");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			break;
			}
		break;
		case  'manager2':
			intro.refresh();
			$('.user-btn').remove();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'data_1' :
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').append("<span id='retnVal3' class='position'>" +
					"<span id='declartion2'><span class='position'><y> manager[<span id='valueIm1' class='position' style='display : inline-block;'>i</span>].getdata()</span></y>;</span> </span>");
					fromEffectWithTweenMax("#manager2", "#retnVal3", function() {
						flipEffectWithTweenMax("#valueIm1", $("#cup_value1").text(),function() {
							$('.introjs-tooltiptext').append("<br>The <y>putData()</y> is called by the object" +
							"<y> manager[0].putdata()</y>.");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
					
						});
					});
				});
			break;

			case "data_2":
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').append("<span id='retnVal3' class='position'>" +
					"<span id='declartion2'><span class='position'><y> manager[<span id='valueIm1' class='position' style='display : inline-block;'>i</span>].getdata()</span></y>;</span> </span>");
					fromEffectWithTweenMax("#manager2", "#retnVal3", function() {
						flipEffectWithTweenMax("#valueIm1", $("#cup_value1").text(),function() {
							$('.introjs-tooltiptext').append("<br>The <y>putData()</y> is called by the object" +
							"<y> manager[1].putdata()</y>.");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			break;

			case "data_3":
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').append("<span id='retnVal3' class='position'>" +
					"<span id='declartion2'><span class='position'><y> manager[<span id='valueIm1' class='position' style='display : inline-block;'>i</span>].getdata()</span></y>;</span> </span>");
					fromEffectWithTweenMax("#manager2", "#retnVal3", function() {
						flipEffectWithTweenMax("#valueIm1", $("#cup_value1").text(),function() {
							$('.introjs-tooltiptext').append("<br>The <y>putData()</y> is called by the object" +
							"<y> manager[2].putdata()</y>.");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			break;
			}
		break;
		case  'cin':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'cinStep' :
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeOut();
				});
			break;
			case "cinStep1":
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeOut();
				});
			break;
			case "cinStep2":
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeOut();
				});
			break;
			case "cinStep3":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeout(function() {
						intro.nextStep();
					},500)
				});
			break;
			}
		break;
		case  'cin1':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'cinStep11' :
				$('.introjs-helperLayer').one('transitionend',function() {
					if(intro._direction == 'forward') {
						setTimeout(function() {
							intro.nextStep();
						},500);
					} else {
						$('#inputAge1').val('');
						$("#borderBox1").text('')
						setTimeout(function() {
							intro.previousStep();
						},500);
					}
				});
			break;
			case "cinStep12":
				$('.introjs-helperLayer').one('transitionend',function() {
					if(intro._direction == 'forward') {
						setTimeout(function() {
							intro.nextStep();
						},500);
					} else {
						$('#inputAge2').val('');
						$("#borderBox2").text('')
						setTimeout(function() {
							intro.previousStep();
						},500);
					}
				});
			break;
			case "cinStep13":
				$('.introjs-helperLayer').one('transitionend',function() {
					if(intro._direction == 'forward') {
						setTimeout(function() {
							intro.nextStep();
						},500);
					} else {
						$('#inputAge3').val('');
						$("#borderBox3").text('')
						setTimeout(function() {
							intro.previousStep();
						},500);
					}
				});
			break;
			}
		break;
		case 'cout' :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "outputt" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeOut();
				});
			break;
			case "outputt1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeOut();
				});
			break;
			case "outputt2" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeOut();
				});
			break;
			case "outputt3" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeOut();
				});
			break;
			}
		break;
		case 'cout3' :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
				case "output_1" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$(".td-css").css("zIndex","");
						$("#animationBox").removeClass('z-index1000000');
						$('.introjs-tooltip').removeClass("hide");
						typing('.introjs-tooltiptext',"This statement is used to print " +
						"the age of employee in the console.", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				break;
				case "output_2":
					$('.introjs-helperLayer').one('transitionend', function() {
						$(".td-css1").css("zIndex","");
						$("#animationBox").removeClass('z-index1000000');
						$('.introjs-tooltip').removeClass("hide");
						typing('.introjs-tooltiptext',"This statement is used to print " +
								"the age of employee in the console.", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				break;
				case "output_3" :
					$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == 'forward') {
							$(".td-css2").css("zIndex","");
							$("#animationBox").removeClass('z-index1000000');
							setTimeout(function() {
								intro.nextStep();
							}, 1500);
						} else {
							setTimeout(function() {
								intro.previousStep();
							}, 1000);	
						}
					});
				break;
				}
			break;
		case 'cout2' :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
				case "output_11" :
					$("#animationBox").removeClass('z-index1000000');
					$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == 'forward') {
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						} else {
							setTimeout(function() {
								console.log('asdggasdashda');
								intro.previousStep();
							}, 1000);	
						}
					});
				break;
				case "output_22" :
					$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == 'forward') {
							$("#animationBox").removeClass('z-index1000000');
							setTimeout(function() {
								intro.nextStep();
							},2000);
						} else {
							$('.user-btn').remove();
							setTimeout(function() {
								console.log('asdggasdashda');
								intro.previousStep();
							}, 1000);	
						}
					});
				break;
				case "output_33" :
					$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == 'forward') {
							$("#animationBox").removeClass('z-index1000000');
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						} else {
							$('.user-btn').remove();
							setTimeout(function() {
								console.log('asdggasdashda');
								intro.previousStep();
							}, 1000);	
						}
					});
				break;
				}
			break;
			case 'cout1' :
				intro.refresh();
				$('.introjs-nextbutton').hide();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case "output" :
					$('.introjs-helperLayer').one('transitionend', function() {
						setTimeOut();
					});
					break;
				case "output1" :
					$('.introjs-helperLayer').one('transitionend', function() {
						setTimeOut();
					});
				break;
				case "output2" :
					$('.introjs-helperLayer').one('transitionend', function() {
						setTimeOut();
					});
					break;
				}
			break;
			case 'cout5' :
				intro.refresh();
				$('.introjs-nextbutton').hide();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case "outputVal" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$('#cout5').removeClass('opacity00');
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext',"<y>cout</y> is used " +
								"to display the output in console", 10, "", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				break;
				case "outputVal1" :
					$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == 'forward') {
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						} else {
							setTimeout(function() {
								console.log('asdggasdashda');
								intro.previousStep();
							}, 1000);	
						}
					});
				break;
				case "outputVal2" :
					$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == 'forward') {
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						} else {
							setTimeout(function() {
								console.log('asdggasdashda');
								intro.previousStep();
							}, 1000);	
						}
					});
				break;
				}
			break;
			case 'name1' :
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case "outputName" :
					$('.introjs-helperLayer').one('transitionend', function() {
						setTimeOut();
					});
				break;
				case "outputName1" :
					$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == 'forward') {
							setTimeout(function() {
								intro.nextStep();
							}, 2000);
						} else {
							setTimeout(function() {
								intro.previousStep();
							}, 1000);	
						}
					});
				break;
				case "outputName2" :
					$('.introjs-helperLayer').one('transitionend', function() {
						setTimeOut();
					});
				break;
				}
			break;
			
			case 'age5' :
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case "outputAge" :
					$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == 'forward') {
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						} else {
							setTimeout(function() {
								intro.previousStep();
							}, 1000);	
						}
					});
				break;
				case "outputAge1" :
					$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == 'forward') {
							setTimeout(function() {
								intro.nextStep();
							}, 2000);
						} else {
							setTimeout(function() {
								intro.previousStep();
							}, 1000);	
						}
					});
				break;
				case "outputAge2" :
					$('.introjs-helperLayer').one('transitionend', function() {
						if(intro._direction == 'forward') {
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						} else {
							setTimeout(function() {
								console.log('asdggasdashda');
								intro.previousStep();
							}, 1000);	
						}
					});
				break;
				}
			break;
		case 'forLoop':
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'loop1' :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
							setTimeout(function() {
							intro.nextStep();
						},1000);
					} else {
						$('#countCup').addClass('opacity00').removeAttr('style');
						$("#num1").removeClass('z-index1000000');
						$("#cup_value").text('');
						setTimeout(function() {
							intro.previousStep();
						},1000);
					}
				});
			break;
			}
		break;
		case 'forLoop1':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'loop11' :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
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
		case 'iValComparision':
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#cup_value, #animationBox").removeClass('z-index10000000');
				$('.introjs-tooltip').removeClass("hide")
				intro.refresh();
				if (iValComparisionFlag) {
					iValComparisionFlag = false;
					$('.introjs-tooltiptext').append("<span id='condition_Text' class=''>This is the condition part. If the condition evaluates "
							+ "to <span class='ct-code-b-yellow'>true</span>, the control enters into the for-loop body.</span>" );
				} else {
					$('.introjs-tooltiptext').append("<span>After  <span class='ct-code-b-yellow'>update</span>" 
							+ ", control comes back to the  <span class='ct-code-b-yellow'>condition</span> section.</span>" );
				}
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="flipEffect()">Next&rarr;</a>');
			});
		break;
		case 'iValComparision1':
			$('.user-btn').remove();
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#cup_value1").removeClass('z-index10000000');
				$('.introjs-tooltip').removeClass("hide")
				if (iValueComparisionFlag) {
					iValueComparisionFlag = false;
					$('.user-btn').remove();
					$('.introjs-tooltiptext').append("<span id='condition_Text' class=''>This is the condition part. If the condition evaluates "
							+ "to <span class='ct-code-b-yellow'>true</span>, the control enters into the for-loop body.</span>" );
				} else {
					$('.user-btn').remove();
					$('.introjs-tooltiptext').append("<span>After  <span class='ct-code-b-yellow'>update</span>" 
							+ ", control comes back to the  <span class='ct-code-b-yellow'>condition</span> section.</span>" );
				}
				$('.user-btn').remove();
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="flipEffect1()">Next&rarr;</a>');
			});
		break;
		case "outputBox" :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "enterData" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append('<span id ="inputNumber" class="opacity00">Enter the manager-0 details</span><br>');
						transferEffect("#enterDetails","#inputNumber",function() {
							$('#inputNumber').removeClass('opacity00');
							setTimeout(function() {
								intro.nextStep();
							},500);
						});
					} else {
						$('#inputNumber + *').after().remove();
						$('#inputNumber').remove();
						$('#inputNumber').addClass('opacity00');
						$('#outputBox').addClass('opacity00');
						setTimeout(function() {
							$('br').each(function () {
							    if ($(this).next().is('br')) {
							        $(this).next().remove();
							    }
							});
							intro.previousStep();
						},500);
					}
				});
			break;
			case "enterData1" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$("#outputBody").append('<span id ="inputNumber1" class="opacity00">Enter employee name : '
										+ '<input id="inputName1" type="text" maxlength="9" size="9" '+
										'spellcheck="false" class="input-char" disabled/></span><br>');
						transferEffect("#enterText","#inputNumber1",function() {
							$('#inputNumber1').removeClass('opacity00');
							setTimeout(function () {
								intro.nextStep();
							},1500);
						});
					} else {
						$('#inputNumber + *').after().remove();
						$('#inputNumber1').remove();
						$('#inputNumber1').addClass('opacity00');
						setTimeout(function () {
							$('br').each(function () {
							    if ($(this).next().is('br')) {
							        $(this).next().remove();
							    }
							});
							intro.previousStep();
						},1000);
					}
				});
			break;
			case "enterVal" :
				$('.introjs-helperLayer').one("transitionend", function() {
					 if(intro._direction == 'forward') {
						$(".introjs-tooltip").removeClass("hide");
						typing(".introjs-tooltiptext", "Please enter <y>employee name</y>", 10, "",function() {
							textValidation('#inputName1', 'enterValAction');
							$('.introjs-prevbutton').show();
						});
					 } else {
						 $('.user-btn').remove();
						 setTimeout(function() {
							 intro.previousStep();
						 },500);
					 }
				});
			break;
			case "enterData2" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber2" class="opacity00">Enter age  :'+
								' <input  id="inputAge1" count=1  type="text" maxlength="2" size="2" '+
								'spellcheck="false" class="input-char" /></span><br>');
						transferEffect("#enterText1","#inputNumber2",function() {
							$('#inputNumber2').removeClass('opacity00');
							setTimeout(function () {
								intro.nextStep();
							},1000);
						});
					} else {
						$('#inputNumber1 + *').after().remove();
						$('#inputNumber2').remove();
						$('#inputNumber2').addClass('opacity00');
						setTimeout(function () {
							intro.previousStep();
						},1000);
					}
				});
			break;
			case "enterVal1" :
					$('.introjs-helperLayer').one("transitionend", function() {
						$("#animationBox").addClass("z-index1000000");
						$(".introjs-tooltip").removeClass("hide");
					typing(".introjs-tooltiptext", "Please enter age of <y>employee</y>", 10, "",function() {
						checking('#inputAge1');
					});
				});
			break;
			case "enterData3" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber3" class="opacity00">Enter the manager-1 details</span><br>');
						transferEffect("#enterDetails","#inputNumber3",function() {
							$('#inputNumber3').removeClass('opacity00');
							setTimeout(function () {
									intro.nextStep();
							},1000);
						});
					} else {
						$('#inputNumber2 + *').after().remove();
						$('#inputNumber3').remove();
						$('#inputNumber3').addClass('opacity00');
						setTimeout(function () {
							intro.previousStep();
						},1000);
					}
				});
			break;
			case "enterData4" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber4" class="opacity00">Enter employee name : '
										+ '<input id="inputName2" type="text" maxlength="9" size="9" spellcheck="false"'+
										' class="input-char" disabled/><span id="	"></span></span><br>');
						transferEffect("#enterText","#inputNumber4",function() {
							$('#inputNumber4').removeClass('opacity00');
							setTimeout(function () {
								intro.nextStep();
							},1500);
						});
					} else {
						$('#inputNumber4').remove();
						$('#inputNumber4').addClass('opacity00');
						setTimeout(function () {
							$('br').each(function () {
							    if ($(this).next().is('br')) {
							        $(this).next().remove();
							    }
							});
							intro.previousStep();
						},1000);
					}
				});
			break;
			case "enterVal2" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$('.introjs-tooltip').removeClass('hide');
						typing(".introjs-tooltiptext", "Please enter <y>employee name</y>", 10, "",function() {
							textValidation('#inputName2' ,'enterValAction1');
							$('.introjs-prevbutton').show();
						});
					} else {
						$('.user-btn').remove();
						setTimeout(function () {
							intro.previousStep();
						},1000);
					}
				});
			break;
			case "enterData5" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber5" class="opacity00">Enter age  : '+
								'<input  id="inputAge2" count=2  type="text" maxlength="2" size="2" spellcheck="false" '+
								'class="input-char" /></span><br>');
						transferEffect("#enterText1","#inputNumber5",function() {
							$('#inputNumber5').removeClass('opacity00');
							setTimeout(function () {
								intro.nextStep();
							},1500);
						});
					} else {
						$('#inputNumber4 + *').after().remove();
						$('#inputNumber5').addClass('opacity00');
						$('#inputNumber5').remove();
						setTimeout(function () {
							intro.previousStep();
						},1000);
					}
				});
			break;
			case "enterVal3" :
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#animationBox").addClass("z-index1000000");
					$('.introjs-tooltip').removeClass('hide');
					typing(".introjs-tooltiptext", "Please enter age of <y>employee</y>", 10, "",function() {
						checking('#inputAge2');
					});
				});
			break;
			case "enterData6" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$("#outputBody").append(' <span id ="inputNumber6" class="opacity00">Enter the manager-2 details</span><br>');
						transferEffect("#enterDetails","#inputNumber6",function() {
							$('#inputNumber6').removeClass('opacity00');
							setTimeout(function () {
									intro.nextStep();
							},1500);
					});
					} else {
						$('#inputNumber5 + *').after().remove();
						$('#inputNumber6').addClass('opacity00');
						$('#inputNumber6').remove();
						setTimeout(function () {
							intro.previousStep();
						 },1000);
					}
				});
			break;
			case "enterData7" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber7" class="opacity00">Enter employee name : '
										+ '<input id="inputName3" type="text" maxlength="9" size="9" spellcheck="false"'+
										' class="input-char" disabled/></span><br>');
						transferEffect("#enterText","#inputNumber7",function() {
							$('#inputNumber7').removeClass('opacity00');
							setTimeout(function () {
									intro.nextStep();
							},1000);
						});
					} else {
						$('#inputNumber6 + *').after().remove();
						$('#inputNumber7').addClass('opacity00');
						$('#inputNumber7').remove();
						setTimeout(function () {
							$('br').each(function () {
							    if ($(this).next().is('br')) {
							        $(this).next().remove();
							    }
							});
							intro.previousStep();
						},1000);
					}
				});
			break;
			case "enterVal4" :
				$('.introjs-helperLayer').one("transitionend", function() {
					 if(intro._direction == 'forward') {
						$(".introjs-tooltip").removeClass("hide");
						typing(".introjs-tooltiptext", "Please enter <y>employee name</y>", 10, "",function() {
							textValidation('#inputName3', 'enterValAction2');
							$('.introjs-prevbutton').show();
						});
					 } else {
						 $('.user-btn').remove();
						 setTimeout(function() {
							 intro.previousStep();
						 },500);
					 }
				});
			break;
			case "enterData8" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$("#outputBody").append(' <span id ="inputNumber8" class="opacity00">Enter age  : '+
								'<input  id="inputAge3" count=3  type="text" maxlength="2" size="2" spellcheck="false" '+
								'class="input-char" /></span><br>');
						transferEffect("#enterText1","#inputNumber8",function() {
							$('#inputNumber8').removeClass('opacity00');
							setTimeout(function () {
								intro.nextStep();
							},1500);
						});
					} else {
						$('#inputNumber7 + *').after().remove();
						$('#inputNumber8').addClass('opacity00');
						$('#inputNumber8').remove();
						setTimeout(function () {
							intro.previousStep();
						 },1000);
					}
				});
			break;
			case "enterVal5" :
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#animationBox").addClass("z-index1000000")
					$(".introjs-tooltip").removeClass("hide");;
					typing(".introjs-tooltiptext", "Please enter age of <y>employee</y>", 10, "",function() {
						checking('#inputAge3');
					});
				});
			break;
			case "enterData9" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$("#outputBody").append(' <span id ="inputNumber9" class="opacity00">The managers details are : </span>');
						transferEffect("#enterDetails1","#inputNumber9",function() {
							$('#inputNumber9').removeClass('opacity00');
						});
						setTimeout(function () {
							intro.nextStep();
						},1500);
					} else {
						$('#inputNumber9').remove();
						$('#inputNumber9').addClass('opacity00');
						setTimeout(function () {
								intro.previousStep();
						},1000);
					}
				});
			break;
			case "enterData10" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$("#outputBody").append('<br><span id ="inputNumber10" class="opacity00">Employee name is : <span class="border opacity00 position" id="value11">'
								+ $('#inputName1').text() +'');
						transferEffect("#textEnter","#inputNumber10",function() {
							$('#inputNumber10').removeClass('opacity00');
						});
						setTimeout(function () {
							intro.nextStep();
						},1500);
					} else {
						$('#inputNumber9 + *').after().remove();
						$('#inputNumber10').remove();
						$('#inputNumber10').addClass('opacity00');
						setTimeout(function () {
							intro.previousStep();
						},1000);
					}
				});
			break;
			case 'dataEntry' :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$('#animationBox').addClass('z-index1000000');
						$(".td-css").css("zIndex","1000000").effect( "highlight",{color: 'red'}, 200);
							transferEffect(".td-css","#value11", function() {
								/*var len = $("#value11").text().length;
								$("#value11").eq(len).text("");*/
								$("#value11").removeClass("opacity00");
							});
							setTimeout(function () {
								intro.nextStep();
							},1500);
					} else {
						$("#value11").addClass("opacity00");
						setTimeout(function () {
							intro.previousStep();
						},1000);
					}
				});
			break;
			case "enterData11" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$('#animationBox').removeClass('z-index1000000');
						$("#outputBody").append('<br><span id ="inputNumber11" class="opacity00">Employee age is : <span class="border opacity00 position" id="value12">'
								+ $('#borderBox1').text() +'');
						transferEffect("#textEnter1","#inputNumber11",function() {
							$('#inputNumber11').removeClass('opacity00');
						});
						setTimeout(function () {
							intro.nextStep();
						},1500);
					} else {
						$('#inputNumber10 + *').after().remove();
						$('#inputNumber11').remove();
						$('#inputNumber11').addClass('opacity00');
						setTimeout(function () {
							$('br').each(function () {
							    if ($(this).next().is('br')) {
							        $(this).next().remove();
							    }
							});
							intro.previousStep();
						},1000);
					}
				});
			break;
			case 'dataEntry1' :
				if(intro._direction == 'forward') {
					$("#borderBox1").css("zIndex","1000000").effect( "highlight",{color: 'red'}, 200);
					transferEffect("#borderBox1","#value12", function() {
						$("#value12").removeClass("opacity00");
					});
					setTimeout(function () {
						intro.nextStep();
					},1500);
				} else {
					$('#cup_value1').text('0');
					$("#value12").addClass("opacity00");
					setTimeout(function () {
						intro.previousStep();
					},1000);
				}
			break;
					
			case "enterData12" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append('<br><span id ="inputNumber12" class="opacity00">Employee name is : <span class="border opacity00 position" id="value13">'
								+ $('#inputName2').text() +'');
						transferEffect("#textEnter","#inputNumber12",function() {
							$('#inputNumber12').removeClass('opacity00');
						});
						setTimeout(function () {
							intro.nextStep();
						},2000);
					} else {
						$('#inputNumber11 + *').after().remove();
						$('#inputNumber12').remove();
						$('#inputNumber12').addClass('opacity00');
						setTimeout(function () {
							$('br').each(function () {
							    if ($(this).next().is('br')) {
							        $(this).next().remove();
							    }
							});
							intro.previousStep();
						},1000);
					}
				});
			break;
			case 'dataEntry2' :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$('#animationBox').addClass('z-index1000000');
						$(".td-css1").css("zIndex","1000000").effect( "highlight",{color: 'red'}, 200);
							transferEffect(".td-css1","#value13", function() {
								$("#value13").removeClass("opacity00");
							});
							setTimeout(function () {
								intro.nextStep();
							},1500);
					} else {
						$("#value13").addClass("opacity00");
						setTimeout(function () {
							intro.previousStep();
						},1000);
					}
				});
			break;
			case "enterData13" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$('#animationBox').removeClass('z-index1000000');
						$("#outputBody").append('<br><span id ="inputNumber13" class="opacity00">Employee age is : <span class="border opacity00 position" id="value14">'
								+ $('#borderBox2').text() +'');
						transferEffect("#textEnter1","#inputNumber13",function() {
							$('#inputNumber13').removeClass('opacity00');
						});
						setTimeout(function () {
							intro.nextStep();
						},2000);
					} else {
						$('#inputNumber12 + *').after().remove();
						$('#inputNumber13').remove();
						$('#inputNumber13').addClass('opacity00');
						setTimeout(function () {
							$('br').each(function () {
							    if ($(this).next().is('br')) {
							        $(this).next().remove();
							    }
							});
							intro.previousStep();
						},1000);
					}
				});
			break;
			case 'dataEntry3' :
				if(intro._direction == 'forward') {
					$("#borderBox2").css("zIndex","1000000").effect( "highlight",{color: 'red'}, 200);
						transferEffect("#borderBox2","#value14", function() {
							$("#value14").removeClass("opacity00");
						});
						setTimeout(function () {
							intro.nextStep();
						},2500);
				} else {
					$('#cup_value1').text('1');
					$("#value14").addClass("opacity00");
					setTimeout(function () {
						intro.previousStep();
					},1000);
				}
			break;
			case "enterData14" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append('<br><span id ="inputNumber14" class="opacity00">Employee name is : <span class="border opacity00 position" id="value15">'
								+ $('#inputName3').text() +'');
						transferEffect("#textEnter","#inputNumber14",function() {
							$('#inputNumber14').removeClass('opacity00');
						});
						setTimeout(function () {
							intro.nextStep();
						},1500);
					} else {
						$('#inputNumber13 + *').after().remove();
						$('#inputNumber14').remove();
						$('#inputNumber14').addClass('opacity00');
						setTimeout(function () {
							$('br').each(function () {
							    if ($(this).next().is('br')) {
							        $(this).next().remove();
							    }
							});
							intro.previousStep();
						},1000);
					}
				});
			break;
			case 'dataEntry4' :
				if(intro._direction == 'forward') {
					$('#animationBox').addClass('z-index1000000');
					$(".td-css2").css("zIndex","1000000").effect( "highlight",{color: 'red'}, 200);
						transferEffect(".td-css2","#value15", function() {
							$("#value15").removeClass("opacity00");
						});
						setTimeout(function () {
							intro.nextStep();
						},1500);
				} else {
					$("#value15").addClass("opacity00");
					setTimeout(function () {
						intro.previousStep();
					},1000);
				}
			break;
			case "enterData15" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$('#animationBox').removeClass('z-index1000000');
						$("#outputBody").append('<br><span id ="inputNumber15" class="opacity00">Employee age is : <span class="border opacity00 position" id="value16">'
								+ $('#borderBox3').text() +'');
						transferEffect("#textEnter1","#inputNumber15",function() {
							$('#inputNumber15').removeClass('opacity00');
						});
						setTimeout(function () {
							intro.nextStep();
						},1500);
					} else {
						$('#inputNumber14 + *').after().remove();
						$('#inputNumber15').remove();
						$('#inputNumber15').addClass('opacity00');
						setTimeout(function () {
							$('br').each(function () {
							    if ($(this).next().is('br')) {
							        $(this).next().remove();
							    }
							});
							intro.previousStep();
						},1000);
					}
				});
			break;
			case 'dataEntry5' :
				if(intro._direction == 'forward') {
					$("borderBox3").css("zIndex","1000000").effect( "highlight",{color: 'red'}, 200);
						transferEffect("#borderBox3","#value16", function() {
							$("#value16").removeClass("opacity00");
						});
						setTimeout(function () {
							intro.nextStep();
						},1500);
				} else {
					$("#value16").addClass("opacity00");
					$('#cup_value1').text('2');
					setTimeout(function () {
						intro.previousStep();
					},1000);
				}
			break;
			}
		break;
		case "restartBtn" :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#animationBox').removeClass('z-index1000000');
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

function textValidation(selector, animateFun) {
	$(selector).removeAttr('disabled').focus();
	$(selector).on("keydown", function(e){
		$('.error-text').remove();
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ((e.keyCode < 65 || e.keyCode > 90) || (e.keyCode == 13 || e.keyCode == 9)){
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="error-text">Please restrict the maximum length to ' + max + ' digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on("keyup", function(e){
		if ($(this).val().length > 1) {
			$('.user-btn').remove();
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="' + animateFun + '()">Next&rarr;</a>');
		} else {
			$('.user-btn').remove();
		}
	});
}
	
function checking(selector) {
	$(selector).removeAttr('disabled').focus();
	$(selector).on("keydown", function(e){
		$('.error-text').remove();
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="error-text">Please restrict the maximum length to ' + max + ' digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on("keyup", function(e){
		$('.user-btn').remove();
		if ($(this).val().length > 1) {
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal(' + $(this).attr('count') + ')">Next&rarr;</a>');
		}
	});
}

function storeVal(count) {
	$('.user-btn').remove();
	transferEffect("#inputAge" + count, "#borderBox" + count, function() {
		$("#borderBox" + count).append($("#inputAge" + count).val());
		$('#inputAge' + count).attr('disabled', 'disabled');
		typing(".introjs-tooltiptext", "The given <y>age</y> is stored in the <y>memeory</y>." +
				"", 10,"",function() {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	});
}
function managerFlip() {
	$('.introjs-tooltiptext').append("<br><span id='retnVal2' class='position opacity00'>" +
	"<span id='declartion1'><span class='position'><y> manager[<span id='valueIm' class='position' style='display : inline-block;'>i</span>].getdata()</span></y>;</span> </span>");
	$('.user-btn').remove();
	$('#retnVal2').removeClass('opacity00');
	fromEffectWithTweenMax("#manager1", "#retnVal2", function() {
		$('.user-btn').remove();
		flipEffectWithTweenMax("#valueIm", $("#cup_value").text(),function() {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
	
		});
	});
}
function managerFlipEffect() {
	$('.user-btn').remove();
		flipEffectWithTweenMax("#valueIm", $("#cup_value").text(),function() {
			/*if (parseInt($("#managerVal").text()) < 3) {
				$('.introjs-tooltiptext').append("<br><span> details are enter<y>true</y>.</span>");
			}*/
			$('.introjs-nextbutton, .introjs-prevbutton').show();
	
	});
}
function managerFlip1() {
	$('.user-btn').remove();
	$('.introjs-tooltiptext').append("<br><span id='retnVal3' class='position opacity00'>" +
	"<span id='declartion2'><span class='position'><y> manager[<span id='valueIm1' class='position' style='display : inline-block;'>i</span>].getdata()</span></y>;</span> </span>");
	$('#retnVal3').removeClass('opacity00');
	fromEffectWithTweenMax("#manager2", "#retnVal3", function() {
		flipEffectWithTweenMax("#valueIm1", $("#cup_value1").text(),function() {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
	
		});
	});
}
function flipEffect() {
	$('.user-btn').remove();
	$('.introjs-tooltiptext').append("<br><span id='retnVal' class='position opacity00'>" +
	"<span id='declartion'><span class='position'><y><span id='valueI' class='position' style='display : inline-block;'>i</span> < 3</span></y>;</span> </span>");
	$('.user-btn').remove();
	$('#retnVal').removeClass('opacity00');
	fromEffectWithTweenMax("#iValComparision", "#retnVal", function() {
		flipEffectWithTweenMax("#valueI", $("#cup_value").text(), function() {
			if (parseInt($("#valueI").text()) < 3) {
				$('.user-btn').remove();
				$('.introjs-tooltiptext').append("<br><span>evaluates to <y>true</y>.</span>");
			} else {
				$('.user-btn').remove();
				$('.introjs-tooltiptext').append("<br><span>evaluates to <r>false</r>.<br>The condition comes out of the loop.</span>");
			}
			$('.user-btn').remove();
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	});
}
function flipEffect1() {
	$('.user-btn').remove();
	$('.introjs-tooltiptext').append("<br><span id='retnVal1' class='position opacity00'>" +
	"<span id='declartion'><span class='position'><y><span id='valueI1' class='position' style='display : inline-block;'>i</span> < 3</span></y>;</span> </span>");
	$('#retnVal1').removeClass('opacity00');
	fromEffectWithTweenMax("#iValComparision1", "#retnVal1", function() {
		flipEffectWithTweenMax("#valueI1", $("#cup_value1").text(), function() {
			if (parseInt($("#valueI1").text()) < 3) {
				$('.user-btn').remove();
				$('.introjs-tooltiptext').append("<br><span>evaluates to <y>true</y>.</span>");
			} else {
				$('.user-btn').remove();
				$('.introjs-tooltiptext').append("<br><span>evaluates to <r>false</r>.<br>The condition comes out of the loop.</span></span>");
			}
			$('.user-btn').remove();
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	});
}
function typing(typingId, typingContent,cursorColor, typingInterval, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": 10,
		"cursor_color": 'white'
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
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
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
	$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
function transferEffect1(selector1, selector2, callBackFunction) {
	$(selector1).effect( "highlight",{color: '#ffff33'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
	$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
function transferEffectCircle(selector1, selector2, callBackFunction) {
	$(selector1).addClass("circle-css").effect( "highlight",{color: '#ffff33'}, 500);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effectss-transfer" }, 2000 , function() {
	$(selector2).removeClass("opacity00");
	$(selector1).removeClass("circle-css")
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
function flipEffectWithTweenMax(selector, val, callBackFunction) {
	console.log("function Entered");
	$(selector).effect( "highlight",{color: 'green'}, 500, function() {
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
function setTimeOut() {
	if(intro._direction == 'forward') {
			setTimeout(function() {
				intro.nextStep();
			},1500);
	} else {
		setTimeout(function() {
			intro.previousStep();
		},1000);
	}
}

function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$('body').append("<i class='fa fa-coffee arrow fa-2x sm faa-passing animated' style='position: relative; z-index: 10000000;'>"
			+ "</i><span id='cupVal' style='position: relative; z-index: 10000000; color:white;'>0</span>");
	
	var l = $(fromId).offset();
	$('.arrow').offset({
		'top': l.top,
		'left': l.left - ($('.arrow').width() * 1.5)
	});
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = parseInt($(".arrow").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrow").css("left")) + (l2.left - l1.left);
	var time = 0;
	if (fromId !== toId) {
		time = 1;
	}
	TweenMax.to(".arrow", time, { top : topLength - 60, left : leftLength + 50, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
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
function bounceFromEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).parent().append('<span id="temp" style="position: absolute;"></span>');
	$('#temp').offset({top: l2.top, left: l2.left}).text($(selector2).text());
	$(selector2).text($(selector1).text());
	timelineMax.from(selector2, 3, {ease:  Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}}).to('#temp', 1, { ease: Sine.easeOut, top: "-=100", opacity: 0, onComplete: function() {
		$('#temp').remove();
	}}, "-=2");
}


function enterValAction() {
	$('.introjs-prevbutton').hide();
	$('.user-btn').remove();
	$("#inputName1").attr("disabled", "disabled");
	$("#animationBox").addClass("z-index1000000");
	$(".td-css").addClass("ct-code-b-green");
	$(".introjs-tooltip").removeClass("hide");
	$('#inputNumber1').append('<div id="inputField" style="display:inline-block;"></div>');
	$.each($("#inputName1").val().split(""), function(idx, val) {
		$("#table tr:nth-child(2) td:eq("+ ( idx + 1) +")").find("span").text(val);
		$("#inputField").append('<span class="inputVal val'+ idx +'">'+ val +'</span>');
	});
	$('#inputName1').remove();
	$('#inputField').attr('id', 'inputName1');
	$.each($(".inputVal"), function(idx) {
		var l1 = $(this).offset();
		$('.td-css').offset({
			"top" : l1.top,
			"left" : l1.left
		});
	});
	TweenMax.to($(".td-css"), 2, {top: 0, left : 0, onComplete: function() {
		typing(".introjs-tooltiptext", "The given <y>name</y> is stored in the <y>memory</y>.", "",  10, function() {
			var len = $("#inputName1").text().length;
			$(".td-css").eq(len).text("\\0");
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
		
	}});
}
function enterValAction1() {
	$('.introjs-prevbutton').hide();
	$('.user-btn').remove();
	$("#animationBox").addClass("z-index1000000");
	$(".td-css1").addClass("ct-code-b-green");
	$('#inputNumber4').append('<div id="inputField1" style="display:inline-block;"></div>');
	$.each($("#inputName2").val().split(""), function(idx, val) {
		$("#table2 tr:nth-child(2) td:eq("+ ( idx + 1) +")").find("span").text(val);
		$("#inputField1").append('<span class="inputVall vall'+ idx +'">'+ val +'</span>')
	});
	$('#inputName2').remove();
	$('#inputField1').attr('id', 'inputName2');
	$.each($(".inputVall"), function(idx) {
		var l1 = $(this).offset();
		$('.td-css1').offset({
			"top" : l1.top,
			"left" : l1.left
		});
	});
	TweenMax.to($(".td-css1"), 1, {top: 0, left : 0, onComplete: function() {
		typing(".introjs-tooltiptext", "The given <y>name</y> is stored in the <y>memory</y>.", "",  10, function() {
			var len = $("#inputName2").text().length;
			$(".td-css1").eq(len).text("\\0");
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	}});
}
function enterValAction2() {
	$('.introjs-prevbutton').hide();
	$('.user-btn').remove();
	$("#animationBox").addClass("z-index1000000");
	$(".td-css2").addClass("ct-code-b-green");
	$('#inputNumber7').append('<div id="inputField2" style="display:inline-block;"></div>');
	$.each($("#inputName3").val().split(""), function(idx, val) {
		$("#table4 tr:nth-child(2) td:eq("+ ( idx + 1) +")").find("span").text(val);
		$("#inputField2").append('<span class="inputVall_1 vall_1'+ idx +'">'+ val +'</span>');
	});
	$('#inputName3').remove();
	$('#inputField2').attr('id', 'inputName3');
	$.each($(".inputVall_1"), function(idx) {
		var l1 = $(this).offset();
		$('.td-css2').offset({
			"top" : l1.top,
			"left" : l1.left
		});
	});
	TweenMax.to($(".td-css2"), 1, {top: 0, left : 0, onComplete: function() {
		typing(".introjs-tooltiptext", "The given <y>name</y> is stored in the <y>memory</y>.", "",  10, function() {
			var len = $("#inputName3").text().length;
			$(".td-css2").eq(len).text("\\0");
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	}});
}
