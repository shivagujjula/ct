var val = 0;
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
		}, {
			element : '#class',
			intro : '',
		
		}, {
			element : '#char',
			intro : '',
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory'
		}, {
			element : '#int',
			intro : '',
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory1'
		}, {
			element : '#method',
			intro : '',
			animateStep : 'public'
		}, {
			element : '#method1',
			intro : '',
			animateStep : 'static'
		}, {
			element : '#main',
			intro : '',
		}, {
			element : '#manager',
			intro : '',
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory2'
		}, {
			element : '#int1',
			intro : '',
		}, {
			element : '#condition',
			intro : '',
			animateStep : 'for'
				
		}, {
			element : '#forLoop',
			intro : '',
			animateStep : 'loop1'
		}, {
			element : '#iVal',
			intro : '',
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'countIncrease'
		}, {
			element : '#iValComparision',
			intro : '',
			/*animateStep : 'ivc1'*/
		}, {
			element : '#cout4',
			intro : '',
			animateStep : 'output'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData',
			/*tooltipClass : 'hide'*/	
		}, {
			element : '#manager1',
			intro : '',
			animateStep : 'data'
		}, {
			element : '#method',
			intro : '',
			animateStep : 'public1'
		}, {
			element : '#cout',
			intro : '',
			animateStep : 'outputt1'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData1'	,
			tooltipClass:'hide'
		
		}, {
			element : '#cin',
			intro : '',
			animateStep : 'cinStep'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterValAction'
		}, {
			element : '#cout1',
			intro : '',
			animateStep : 'output_1'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData2'
		}, {
			element : '#cin1',
			intro : '',
			animateStep : 'cinStep11',
			
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal1'
		},{
			element : '#close',
			intro : '',
			animateStep : 'close_1'
		},{
			element : '#iValIncrement',
			intro : '',
			animateStep : 'iValIncrement_1'
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'countIncrease1'	
		}, {
			element : '#iValComparision',
			intro : '',
			//animateStep : 'ivc2'
		}, {
			element : '#cout4',
			intro : '',
			animateStep : 'output1',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData3'
		}, {
			element : '#manager1',
			intro : '',
			animateStep : 'data1',
			//tooltipClass : 'hide'
		/*}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory3'*/
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
			animateStep : 'enterData4'
		}, {
			element : '#cin',
			intro : '',
			animateStep : 'cinStep1'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal2'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterValAction1'
		}, {
			element : '#cout1',
			intro : '',
			animateStep : 'output_3',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData5'
		}, {
			element : '#cin1',
			intro : '',
			animateStep : 'cinStep12',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal3'
		},{
			element : '#close',
			intro : '',
			animateStep : 'close_2'
		}, {
			element : '#condition',
			intro : '',
			animateStep : 'for2',
			tooltipClass : 'hide'
		},{
			element : '#iValIncrement',
			intro : '',
			animateStep : 'iValIncrement_2'
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'countIncrease2'	
		}, {
			element : '#iValComparision',
			intro : '',
			//animateStep : 'ivc3'
		}, {
			element : '#cout4',
			intro : '',
			animateStep : 'output2',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData6'
		}, {
			element : '#manager1',
			intro : '',
			animateStep : 'data2',
			//tooltipClass : 'hide'
		/*}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory4'*/
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
			animateStep : 'enterData7'
		}, {
			element : '#cin',
			intro : '',
			animateStep : 'cinStep2',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal4'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterValAction2'
		}, {
			element : '#cout1',
			intro : '',
			animateStep : 'output_3',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData8'
		}, {
			element : '#cin1',
			intro : '',
			animateStep : 'cinStep13',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal5'
		/*}, {
			element : '#condition',
			intro : '',
			animateStep : 'for3',
			tooltipClass : 'hide'*/
		},{
			element : '#close',
			intro : '',
			animateStep : 'close_3'
		},{
			element : '#iValIncrement',
			intro : '',
			animateStep : 'iValIncrement_3'
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'countIncrease3'	
		}, {
			element : '#iValComparision',
			intro : '',
		}, {
			element : '#close1',
			intro : '',
		}, {
			element : '#cout5',
			intro : '',
			animateStep : 'outputVal',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData9',
		}, {
			element : '#condition1',
			intro : '',
			animateStep : 'for11',
		}, {
			element : '#forLoop1',
			intro : '',
			animateStep : 'loop11'
		}, {
			element : '#iValue',
			intro : '',
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'countIncrease4',
			//position: 'right'
		}, {
			element : '#iValComparision1',
			intro : '',
		}, {
			element : '#manager2',
			intro : '',
			animateStep : 'data_1',
		}, {
			element : '#method1',
			intro : '',
			animateStep : 'static1'
		}, {
			element : '#cout2',
			intro : '',
			animateStep : 'output_11',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData10',
		},{
			element : '#name1',
			intro : '',
			animateStep : 'outputName'	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry'
		},{
			element : '#cout1',
			intro : '',
			animateStep : 'output_2'	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData11'
		},{
			element : '#age5',
			intro : '',
			animateStep : 'outputAge'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry1'
		},{
			element : '#iValIncrement1',
			intro : '',
			animateStep : 'iValIncrement_11'

		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'countIncrease5',
		}, {
			element : '#iValComparision1',
			intro : '',
		}, {
			element : '#manager2',
			intro : '',
			animateStep : 'data_2',
		}, {
			element : '#method1',
			intro : '',
			animateStep : 'static2'
		}, {
			element : '#cout2',
			intro : '',
			animateStep : 'output_22',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData12'
		},{
			element : '#name1',
			intro : '',
			animateStep : 'outputName1'	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry2'
		},{
			element : '#cout1',
			intro : '',
			animateStep : 'output_3'	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData13'
		},{
			element : '#age5',
			intro : '',
			animateStep : 'outputAge1'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry3'
		},{
			element : '#iValIncrement1',
			intro : '',
			animateStep : 'iValIncrement_22'

		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'countIncrease6',
		}, {
			element : '#iValComparision1',
			intro : '',
		}, {
			element : '#manager2',
			intro : '',
			animateStep : 'data_3',
		}, {
			element : '#method1',
			intro : '',
			animateStep : 'static3'
		}, {
			element : '#cout2',
			intro : '',
			animateStep : 'output_33',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData14'
		},{
			element : '#name1',
			intro : '',
			animateStep : 'outputName2'	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry4'
		},{
			element : '#cout1',
			intro : '',
			animateStep : 'output_4'	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData15'
		},{
			element : '#age5',
			intro : '',
			animateStep : 'outputAge2'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry5'
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'countIncrease7',
		}, {
			element : '#iValComparision1',
			intro : '',
		}, {
			element : '#close2',
			intro : '',
		}, {
			element : '#return',
			intro : '',
		}, {
			element : '#mainClose',
			intro : '',
		}, {
			element : "#restartBtn",
			intro : "",
			position : "left"
		}]
	});
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case "preBody" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				$("#preBody").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Let us learn <span class='ct-code-b-yellow'>"+
						"array of objects</span>.", 10,"", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'class' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"To create a class as <span class='ct-code-b-yellow'>Employee</span>", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'return' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'char' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"Here <y>char </y>field is set" +
						" as <y>10</y>.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'manager' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'int1' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"<ul><li>This is the <y>initialization</y> section." +
						" Here a local variable <y>i</y> is declared and initialized to <y>0</y>.</li>" +
						" <li>You can also change the value <y>0</y> to any other number.</li></ul>", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'iVal' :
		case 'iValue':
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"This is the  <span class='ct-code-b-yellow'>initialization</span> section. Here a local " +
						"variable i is declared and initialized to <span class='ct-code-b-yellow'> 0</span>."+
							"", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'mainClose' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#countCupValue").removeClass('z-index10000000');
				typing('.introjs-tooltiptext',"close the main tag", 10, "", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'int' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext'," The variable named <y>age</y> would be defined as an <y>int</y>.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "main" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				$("#countCupValue").removeClass('z-index10000000');
				typing('.introjs-tooltiptext',"<y>main()</y> method to execute the program.", 10,"",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'close1':
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"close the <y>forloop<y> body.", 10, "", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'close2':
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"close the <y>forloop<y> body.", 10, "", function() {
					$('.introjs-nextbutton').show();
				});
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
			case 'memory' :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#animationBox").removeClass("opacity00");
					transferEffect("#createMemory","#table", function() {
						$("#table").fadeTo(100, 1, function() {
							$(".introjs-tooltip").removeClass("hide");
							typing(".introjs-tooltiptext","In the output <span class='ct-code-b-yellow'>10</span>" +
									" digits space is occupied by "+
									"<span class='ct-code-b-yellow'>name(10)</span>.",10,"",function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case 'memory1' :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#animationBox").removeClass("opacity00");
					transferEffect("#age","#age2", function() {
						$("#age2").fadeTo(100, 1, function() {
							$("#borderBox1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext","",10,"",function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				});
				break;
			case "countIncrease":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#countBox').removeClass('opacity00');
					$("#countCupValue").text('0').addClass('opacity00');
					$("#num1").addClass('z-index1000000');
					transferEffectCircle("#num1","#countCupValue", function() {
						$("#countCupValue").addClass('z-index10000000');
						$(".introjs-tooltip").removeClass("hide");
						$("#num1").removeClass('z-index1000000');
						typing('.introjs-tooltiptext',"By default count value is initilased to <y>0</y>.", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "countIncrease1":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$("#animationBox").removeClass("z-index1000000");
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#iValIncrement").addClass('z-index1000000');
					transferEffectCircle("#iValIncrement","#countCupValue", function() {
						$("#countCupValue").text(parseInt($("#countCupValue").text()) + 1);
						$(".introjs-tooltip").removeClass("hide");
						$("#iValIncrement").removeClass('z-index1000000');
						typing('.introjs-tooltiptext',"Increment to  <y>i</y>" +
								" value is  <y>" + $("#countCupValue").text() +"</y>.", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "countIncrease2":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#iValIncrement").addClass('z-index1000000');
					transferEffectCircle("#iValIncrement","#countCupValue", function() {
						$("#countCupValue").text(parseInt($("#countCupValue").text()) + 1);
						$(".introjs-tooltip").removeClass("hide");
						$("#iValIncrement").removeClass('z-index1000000');
						typing('.introjs-tooltiptext',"Increment to  <y>i</y>" +
								" value is  <y>" + $("#countCupValue").text() +"</y>.", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "countIncrease3":
				$("#animationBox").removeClass("z-index1000000");
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#iValIncrement").addClass('z-index1000000');
					transferEffectCircle("#iValIncrement","#countCupValue", function() {
						$("#countCupValue").text(parseInt($("#countCupValue").text()) + 1);
						$(".introjs-tooltip").removeClass("hide");
						$("#iValIncrement").removeClass('z-index1000000');
						typing('.introjs-tooltiptext',"Increment to  <y>i</y>" +
								" value is  <y>" + $("#countCupValue").text() +"</y>.", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "countIncrease4":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#countBox1').removeClass('opacity00');
						$("#countCupValue1").addClass('z-index10000000');
						$("#num2").addClass('z-index1000000');
						$("#countCupValue1").text('0').addClass("opacity00");
						transferEffectCircle("#num2","#countCupValue1", function() {
							$(".introjs-tooltip").removeClass("hide");
							$("#num2").removeClass('z-index1000000');
						typing('.introjs-tooltiptext',"Increment to  <span class='ct-code-b-yellow'>I</span>" +
								" value is  <span class='ct-code-b-yellow'>0</span>.", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "countIncrease5":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$("#animationBox").removeClass("z-index1000000");
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#iValIncrement1").addClass('z-index1000000');
					transferEffectCircle("#iValIncrement1","#countCupValue1", function() {
						$("#countCupValue1").text(parseInt($("#countCupValue1").text()) + 1);
						$(".introjs-tooltip").removeClass("hide");
						$("#iValIncrement1").removeClass('z-index1000000');
						typing('.introjs-tooltiptext',"Increment to  <y>i</y>" +
								" value is  <y>" + $("#countCupValue1").text() +"</y>.", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "countIncrease6":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#iValIncrement1").addClass('z-index1000000');
					transferEffectCircle("#iValIncrement1","#countCupValue1", function() {
						$("#countCupValue1").text(parseInt($("#countCupValue1").text()) + 1);
						$(".introjs-tooltip").removeClass("hide");
						$("#iValIncrement1").removeClass('z-index1000000');
						typing('.introjs-tooltiptext',"Increment to  <y>i</y>" +
								" value is  <y>" + $("#countCupValue1").text() +"</y>.", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "countIncrease7":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#iValIncrement1").addClass('z-index1000000');
					transferEffectCircle("#iValIncrement1","#countCupValue1", function() {
						$("#countCupValue1").text(parseInt($("#countCupValue1").text()) + 1);
						$(".introjs-tooltip").removeClass("hide");
						$("#iValIncrement1").removeClass('z-index1000000');
						typing('.introjs-tooltiptext',"Increment to  <y>i</y>" +
								" value is  <y>" + $("#countCupValue1").text() +"</y>.", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case 'memory2' :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#animationBox").removeClass("opacity00");
					$("#managerName").fadeTo(500, 1, function() {
						$("#border").css({"border" : "1px solid darkseagreen","padding-bottom" : "10px", "border-top" : "0px"});
						$("#manager1Details").fadeTo(1000, 1, function() {
							$("#manager2Details").fadeTo(1000, 1, function() {
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext","<y>3</y> memories are alloacted to the <y>3</y> diffrent employees.",10,"", function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
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
					typing('.introjs-tooltiptext',"close the getdata tag.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case 'close_2':
			case 'close_3':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeout(function() {
						intro.nextStep();
					},500)
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
					typing('.introjs-tooltiptext',"<ul><li>After executing the statements in the <y>for-loop</y> body the control " +
							"is transferred to the update section.</li><li>The <y>post-increment</y> operator increments the " +
							"value of i by <y>1</y>. <br>Now <y>i = 1</y>.</li></ul>", 10, "", function() {
						$('.introjs-nextbutton').show();
					//});
				});
			break;
			case 'iValIncrement_2':
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"The <y>post-increment</y> operator increments the " +
							"value of i by <y>2</y>. <br>Now <y>i = 2</y>.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case 'iValIncrement_3':
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"The <y>post-increment</y> operator increments the " +
							"value of i by <y>3</y>. <br>Now <y>i = 3</y>.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			}
			break;
		case 'iValIncrement1':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'iValIncrement_11':
				typing('.introjs-tooltiptext',"<ul><li>After executing the statements in the <y>for-loop</y> body the control " +
						"is transferred to the update section.</li><li>The <y>post-increment</y> operator increments the " +
						"value of i by <y>1</y>. <br>Now <y>i = 1</y>.</li></ul>", 10, "", function() {
					$('.introjs-nextbutton').show();
				//});
			});
			break;
			case 'iValIncrement_22':
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"The <y>post-increment</y> operator increments the " +
							"value of i by <y>2</y>. <br>Now <y>i = 2</y>.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case 'iValIncrement_33':
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"The <y>post-increment</y> operator increments the " +
							"value of i by <y>3</y>. <br>Now <y>i = 3</y>.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			}
			break;
		case  'method':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'public' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"The method access specifier is <span class='ct-code-b-yellow'>"+
							"public</span>.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "public1":
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
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'static' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"The method access specifier is <span class='ct-code-b-yellow'>"+
							"public</span>.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "static1":
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-nextbutton').show();
				});
				break;
			case "static2":
			case "static3":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeout(function() {
						intro.nextStep();
					},1000);
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
					typing('.introjs-tooltiptext',"The above code demonstrates the working of a <y>for-loop</y>.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "for1":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend',function() {
					$("#animationBox").removeClass('z-index1000000');
						setTimeout(function() {
							intro.nextStep();
						},500);
				});
				break;
			case "for2":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend',function() {
					$("#animationBox").removeClass('z-index1000000');
					setTimeout(function() {
						intro.nextStep();
					},500)
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
					typing('.introjs-tooltiptext',"The above code demonstrates the working of a <y>for-loop</y>.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			}
		break;
		case  'manager1':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'data' :
			case "data1":
			case "data2":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"manager details are", 10, "", function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="managerFlip()">Next&rarr;</a>');
					});
				});
				break;
			}
		break;
		case  'manager2':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'data_1' :
			case "data_2":
			case "data_3":
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend',function() {
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"manager details are", "", 10,  function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="managerFlip1()">Next&rarr;</a>');
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
					typing('.introjs-tooltiptext',"<y>cin</y> is used to input the given data.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "cinStep1":
			case "cinStep2":
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
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'cinStep11' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"<y>cin</y> is used to input the given data.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "cinStep12":
			case "cinStep13":
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
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "outputt" :
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext',"<y>cout</y> is used to" +
							" display the output in console", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "outputt1" :
			case "outputt2" :
			case "outputt3" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break;
		case 'cout1' :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
				case "output_1" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#animationBox").removeClass('z-index1000000');
						typing('.introjs-tooltiptext',"<y>cout</y> is used " +
								"to display the output in console.", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
					break;
				case "output_2" :
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#animationBox").removeClass('z-index1000000');
						typing('.introjs-tooltiptext',"<y>cout</y> is used " +
								"to display the output in console", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
					break;
				case "output_3" :
				case "output_4" :
					intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#animationBox").removeClass('z-index1000000');
						setTimeout(function() {
							intro.nextStep();
						},1000);
					});
					break;
			}
			break;
		case 'cout2' :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "output_11" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#animationBox").removeClass('z-index1000000');
					typing('.introjs-tooltiptext',"<y>cout</y> is used " +
							"to display the output in console", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "output_22" :
			case "output_33" :
			case "output_44" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#animationBox").removeClass('z-index1000000');
					setTimeout(function() {
						intro.nextStep();
					},1000);
				});
				break;
			}
			break;
		case 'cout4' :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "output" :
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext',"<y>cout</y> is used " +
							"to display the output in console", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "output1" :
			case "output2" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},1000);
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
					typing('.introjs-tooltiptext',"<y>cout</y> is used " +
							"to display the output in console", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "outputVal1" :
			case "outputVal2" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break;
		case 'name1' :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "outputName" :
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext',"<y>cout</y> is used " +
							"to display the output in console", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "outputName1" :
			case "outputName2" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},1000);
				});
				break;
			}
			break;
			
		case 'age5' :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "outputAge" :
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext',"<y>cout</y> is used " +
							"to display the output in console", "" , 10, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "outputAge1" :
			case "outputAge2" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},1000);
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
					$('.introjs-nextbutton').show();
					$('.introjs-tooltiptext',"", 10,"",function() {
					});
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
					$('.introjs-nextbutton').show();
					$('.introjs-tooltiptext',"", 10,"",function() {
					});
				});
				break;
			}
			break;
		case 'iValComparision':
			intro.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#countCupValue, #animationBox").removeClass('z-index10000000');
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
			intro.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#countCupValue1, #animationBox").removeClass('z-index10000000');
				if (iValueComparisionFlag) {
					iValueComparisionFlag = false;
					$('.introjs-tooltiptext').append("<span id='condition_Text' class=''>This is the condition part. If the condition evaluates "
							+ "to <span class='ct-code-b-yellow'>true</span>, the control enters into the for-loop body.</span>" );
				} else {
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
					$('#outputBox').removeClass('opacity00');
					$("#outputBody").append(' <span id ="inputNumber" class="opacity00">Enter the manager details  : </span><br>');
					transferEffect("#enterDetails","#inputNumber",function() {
						$('#inputNumber').removeClass('opacity00');
							$('.introjs-nextbutton').show();
					});
				});
				break;
			case "enterData1" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#outputBox').removeClass('opacity00');
					$("#outputBody").append(' <span id ="inputNumber1" class="opacity00">Enter employee name : '
									+ '<input id="inputName1" type="text" maxlength="10" size="10" '+
									'spellcheck="false" class="input-char" disabled/></span><br>');
					transferEffect("#enterText","#inputNumber1",function() {
						$('#inputNumber1').removeClass('opacity00');
						$(".introjs-tooltip").removeClass("hide");
						setTimeout(function () {
							intro.nextStep();
						},1500);
					});
				});
				break;
			case "enterVal" :
				$('.introjs-helperLayer').one("transitionend", function() {
					typing(".introjs-tooltiptext", "Please enter <y>employee name</y>", 10, "",function() {
						textValidation('#inputName1');
						
					});
				});
				break;
				case "enterValAction" :
					$("#inputName1").attr("disabled", "disabled");
					$("#animationBox").addClass("z-index1000000");
					$(".td-css").addClass("ct-code-b-green");
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
					TweenMax.to($(".td-css"), 1, {top: 0, left : 0});
						typing(".introjs-tooltiptext", "The given <y>string</y> is stored in the <y>array</y>.", "",  10, function() {
							$('.introjs-nextbutton').show();
						});
					break;
				case "enterData2" :
					intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
					$('.introjs-helperLayer').one("transitionend", function() {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber2" class="opacity00">Enter age  :'+
								' <input  id="inputAge1" count=1  type="text" maxlength="2" size="2" '+
								'spellcheck="false" class="input-char" /></span><br><br>');
						transferEffect("#enterText1","#inputNumber2",function() {
							$('#inputNumber2').removeClass('opacity00');
							setTimeout(function () {
								intro.nextStep();
							},1500);
						});
					});
					break;
				case "enterVal1" :
					$('.introjs-helperLayer').one("transitionend", function() {
						$("#animationBox").addClass("z-index1000000");
						typing(".introjs-tooltiptext", "Please enter age of <y>employee</y>", 10, "",function() {
							checking('#inputAge1');
						});
					});
				break;
				case "enterData3" :
					intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
					$('.introjs-helperLayer').one("transitionend", function() {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber3" class="opacity00">Enter the manager details  : </span><br>');
						transferEffect("#enterDetails","#inputNumber3",function() {
							$('#inputNumber3').removeClass('opacity00');
							setTimeout(function () {
									intro.nextStep();
							},1500);
						});
					});
					break;
				case "enterData4" :
					intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
					$('.introjs-helperLayer').one("transitionend", function() {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber4" class="opacity00">Enter employee name : '
										+ '<input id="inputName2" type="text" maxlength="10" size="10" spellcheck="false"'+
										' class="input-char" disabled/><span id="	"></span></span><br>');
						transferEffect("#enterText","#inputNumber4",function() {
							$('#inputNumber4').removeClass('opacity00');
							setTimeout(function () {
								intro.nextStep();
							},1500);
						});
					});
					break;
				case "enterVal2" :
					$('.introjs-helperLayer').one("transitionend", function() {
						typing(".introjs-tooltiptext", "Please enter <y>employee name</y>", 10, "",function() {
							textValidation('#inputName2');
						});
					});
					break;
				case "enterValAction1" :
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
					TweenMax.to($(".td-css1"), 1, {top: 0, left : 0});
						typing(".introjs-tooltiptext", "The given <y>string</y> is stored in the <y>array</y>.", "",  10, function() {
							$('.introjs-nextbutton').show();
						});
					break;
							
					case "enterData5" :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$('.introjs-helperLayer').one("transitionend", function() {
							$('#outputBox').removeClass('opacity00');
							$("#outputBody").append(' <span id ="inputNumber5" class="opacity00">Enter age  : '+
									'<input  id="inputAge2" count=2  type="text" maxlength="2" size="2" spellcheck="false" '+
									'class="input-char" /></span><br><br>');
							transferEffect("#enterText1","#inputNumber5",function() {
								$('#inputNumber5').removeClass('opacity00');
								setTimeout(function () {
									intro.nextStep();
								},1500);
							});
						});
						break;
					case "enterVal3" :
						$('.introjs-helperLayer').one("transitionend", function() {
							$("#animationBox").addClass("z-index1000000");
							typing(".introjs-tooltiptext", "Please enter age of <y>employee</y>", 10, "",function() {
								checking('#inputAge2');
							});
						});
					break;
					case "enterData6" :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$('.introjs-helperLayer').one("transitionend", function() {
							$('#outputBox').removeClass('opacity00');
							$("#outputBody").append(' <span id ="inputNumber6" class="opacity00">Enter the manager details  : </span><br>');
							transferEffect("#enterDetails","#inputNumber6",function() {
								$('#inputNumber6').removeClass('opacity00');
								
								setTimeout(function () {
										intro.nextStep();
								},1500);
							});
						});
						break;
					case "enterData7" :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$('.introjs-helperLayer').one("transitionend", function() {
							$('#outputBox').removeClass('opacity00');
							$("#outputBody").append(' <span id ="inputNumber7" class="opacity00">Enter employee name : '
											+ '<input id="inputName3" type="text" maxlength="10" size="10" spellcheck="false"'+
											' class="input-char" disabled/></span><br>');
							transferEffect("#enterText","#inputNumber7",function() {
								$('#inputNumber7').removeClass('opacity00');
								setTimeout(function () {
										intro.nextStep();
								},1500);
							});
						});
						break;
					case "enterVal4" :
						$('.introjs-helperLayer').one("transitionend", function() {
							typing(".introjs-tooltiptext", "Please enter <y>employee name</y>.", 10, "",function() {
								textValidation('#inputName3');
							});
						});
						break;
					case "enterValAction2" :
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
						TweenMax.to($(".td-css2"), 1, {top: 0, left : 0});
							typing(".introjs-tooltiptext", "The given <y>string</y> is stored in the <y>array</y>.", "",  10, function() {
							$('.introjs-nextbutton').show();
						});
						break;
					case "enterData8" :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$('.introjs-helperLayer').one("transitionend", function() {
							$('#outputBox').removeClass('opacity00');
							$("#outputBody").append(' <span id ="inputNumber8" class="opacity00">Enter age  : '+
									'<input  id="inputAge3" count=3  type="text" maxlength="2" size="2" spellcheck="false" '+
									'class="input-char" /></span><br><br>');
							transferEffect("#enterText1","#inputNumber8",function() {
								$('#inputNumber8').removeClass('opacity00');
								setTimeout(function () {
									intro.nextStep();
								},1500);
							});
						});
						break;
					case "enterVal5" :
						$('.introjs-helperLayer').one("transitionend", function() {
							$("#animationBox").addClass("z-index1000000");
							typing(".introjs-tooltiptext", "Please enter age of <y>employee</y>", 10, "",function() {
								checking('#inputAge3');
							});
						});
					break;
					case "enterData9" :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$('.introjs-helperLayer').one("transitionend", function() {
							$("#outputBody").append(' <span id ="inputNumber9" class="opacity00">The manager details are : </span>');
							transferEffect("#enterDetails1","#inputNumber9",function() {
								$('#inputNumber9').removeClass('opacity00');
								setTimeout(function () {
										intro.nextStep();
								},1500);
							});
						});
						break;
					case "enterData10" :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$('.introjs-helperLayer').one("transitionend", function() {
							$('#outputBox').removeClass('opacity00');
							$("#outputBody").append('<br><span id ="inputNumber10" class="opacity00">Employee name is : <span class="border opacity00 position" id="value11">'
									+ $('.td-css').text() +'');
							transferEffect("#textEnter","#inputNumber10",function() {
								$('#inputNumber10').removeClass('opacity00');
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "", 10, "",function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
						break;
					case 'dataEntry' :
						$('#animationBox').addClass('z-index1000000');
						$(".td-css").css("zIndex","1000000").effect( "highlight",{color: 'red'}, 200);
							transferEffect(".td-css","#value11", function() {
								$("#value11").removeClass("opacity00");
							});
							typing(".introjs-tooltiptext", "", 10, "",function() {
								$('.introjs-nextbutton').show();
							});
						break;
					case "enterData11" :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$('.introjs-helperLayer').one("transitionend", function() {
							$('#animationBox').removeClass('z-index1000000');
							$("#outputBody").append('<br><span id ="inputNumber11" class="opacity00">Employee age is : <span class="border opacity00 position" id="value12">'
									+ $('#borderBox1').text() +'');
							transferEffect("#textEnter1","#inputNumber11",function() {
								$('#inputNumber11').removeClass('opacity00');
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "", 10, "",function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
						break;
					case 'dataEntry1' :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$("#borderBox1").css("zIndex","1000000").effect( "highlight",{color: 'red'}, 200);
							transferEffect("#borderBox1","#value12", function() {
								$("#value12").removeClass("opacity00");
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "", 10, "",function() {
									$('.introjs-nextbutton').show();
								});
							});
						break;
					case "enterData12" :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$('.introjs-helperLayer').one("transitionend", function() {
							$('#outputBox').removeClass('opacity00');
							$("#outputBody").append('<br><br><span id ="inputNumber12" class="opacity00">Employee name is : <span class="border opacity00 position" id="value13">'
									+ $('.td-css1').text() +'');
							transferEffect("#textEnter","#inputNumber12",function() {
								$('#inputNumber12').removeClass('opacity00');
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "", 10, "",function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
						break;
					case 'dataEntry2' :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$('#animationBox').addClass('z-index1000000');
						$(".td-css1").css("zIndex","1000000").effect( "highlight",{color: 'red'}, 200);
							transferEffect(".td-css1","#value13", function() {
								$("#value13").removeClass("opacity00");
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "", 10, "",function() {
									$('.introjs-nextbutton').show();
								});
							});
						break;
					case "enterData13" :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$('.introjs-helperLayer').one("transitionend", function() {
							$('#animationBox').removeClass('z-index1000000');
							$("#outputBody").append('<br><span id ="inputNumber13" class="opacity00">Employee age is : <span class="border opacity00 position" id="value14">'
									+ $('#borderBox2').text() +'');
							transferEffect("#textEnter1","#inputNumber13",function() {
								$('#inputNumber13').removeClass('opacity00');
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "", 10, "",function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
						break;
					case 'dataEntry3' :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$("#borderBox2").css("zIndex","1000000").effect( "highlight",{color: 'red'}, 200);
							transferEffect("#borderBox2","#value14", function() {
								$("#value14").removeClass("opacity00");
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "", 10, "",function() {
									$('.introjs-nextbutton').show();
								});
							});
						break;
					case "enterData14" :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$('.introjs-helperLayer').one("transitionend", function() {
							$('#outputBox').removeClass('opacity00');
							$("#outputBody").append('<br><br><span id ="inputNumber14" class="opacity00">Employee name is : <span class="border opacity00 position" id="value15">'
									+ $('.td-css2').text() +'');
							transferEffect("#textEnter","#inputNumber14",function() {
								$('#inputNumber14').removeClass('opacity00');
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "", 10, "",function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
						break;
					case 'dataEntry4' :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$('#animationBox').addClass('z-index1000000');
						$(".td-css2").css("zIndex","1000000").effect( "highlight",{color: 'red'}, 200);
							transferEffect(".td-css2","#value15", function() {
								$("#value15").removeClass("opacity00");
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "", 10, "",function() {
									$('.introjs-nextbutton').show();
								});
							});
						break;
					case "enterData15" :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$('.introjs-helperLayer').one("transitionend", function() {
							$('#animationBox').removeClass('z-index1000000');
							$("#outputBody").append('<br><span id ="inputNumber15" class="opacity00">Employee age is : <span class="border opacity00 position" id="value16">'
									+ $('#borderBox3').text() +'');
							transferEffect("#textEnter1","#inputNumber15",function() {
								$('#inputNumber15').removeClass('opacity00');
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "", 10, "",function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
						break;
					case 'dataEntry5' :
						intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
						$("borderBox3").css("zIndex","1000000").effect( "highlight",{color: 'red'}, 200);
							transferEffect("#borderBox3","#value16", function() {
								$("#value16").removeClass("opacity00");
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "", 10, "",function() {
									$('.introjs-nextbutton').show();
								});
							});
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

function textValidation(selector) {
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
			$('.introjs-nextbutton').show();
		} else {
			$('.introjs-nextbutton').hide();
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
			$('.introjs-nextbutton').show();
		});
	});
}
function managerFlip() {
	
	$('.introjs-tooltiptext').append("<br><span id='retnVal2' class='position opacity00'>" +
	"<span id='declartion1'><span class='position'><y> manager[<span id='valueIm' class='position' style='display : inline-block;'>i</span>].getdata()</span></y>;</span> </span>");
	$('.user-btn').remove();
	$('#retnVal2').removeClass('opacity00');
	fromEffectWithTweenMax("#manager1", "#retnVal2", function() {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="managerFlipEffect()">Next&rarr;</a>');
	});
}
function managerFlipEffect() {
	$('.user-btn').remove();
		flipEffectWithTweenMax("#valueIm", $("#countCupValue").text(),function() {
			/*if (parseInt($("#managerVal").text()) < 3) {
				$('.introjs-tooltiptext').append("<br><span> details are enter<y>true</y>.</span>");
			}*/
			$('.introjs-nextbutton').show()
	
	});
}
function managerFlip1() {
	$('.user-btn').remove();
	$('.introjs-tooltiptext').append("<br><span id='retnVal3' class='position opacity00'>" +
	"<span id='declartion2'><span class='position'><y> manager[<span id='valueIm1' class='position' style='display : inline-block;'>i</span>].getdata()</span></y>;</span> </span>");
	$('#retnVal3').removeClass('opacity00');
	fromEffectWithTweenMax("#manager2", "#retnVal3", function() {
		$('.user-btn').remove();
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="managerFlipEffect1()">Next&rarr;</a>');
	});
}
function managerFlipEffect1() {
	$('.user-btn').remove();
		flipEffectWithTweenMax("#valueIm1", $("#countCupValue1").text(),function() {
			/*if (parseInt($("#managerVal").text()) < 3) {
				$('.introjs-tooltiptext').append("<br><span> details are enter<y>true</y>.</span>");
			}*/
			$('.introjs-nextbutton').show()
	
	});
}
function flipEffect() {
	
	$('.introjs-tooltiptext').append("<br><span id='retnVal' class='position opacity00'>" +
	"<span id='declartion'><span class='position'><y><span id='valueI' class='position' style='display : inline-block;'>i</span> < 3</span></y>;</span> </span>");
	$('.user-btn').remove();
	$('#retnVal').removeClass('opacity00');
	fromEffectWithTweenMax("#iValComparision", "#retnVal", function() {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="flip()">Next&rarr;</a>');
	});
}
function flip() {
	$('.user-btn').remove();
		flipEffectWithTweenMax("#valueI", $("#countCupValue").text(), function() {
			if (parseInt($("#valueI").text()) < 3) {
				$('.introjs-tooltiptext').append("<br><span>evaluates to <y>true</y>.</span>");
			} else {
				$('.introjs-tooltiptext').append("<br><span>evaluates to <r>false</r>.</span>");
			}
			$('.introjs-nextbutton').show();
	});
}
function flipEffect1() {
	$('.user-btn').remove();
	$('.introjs-tooltiptext').append("<br><span id='retnVal1' class='position opacity00'>" +
	"<span id='declartion'><span class='position'><y><span id='valueI1' class='position' style='display : inline-block;'>i</span> < 3</span></y>;</span> </span>");
	$('#retnVal1').removeClass('opacity00');
	fromEffectWithTweenMax("#iValComparision1", "#retnVal1", function() {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="flipp()">Next&rarr;</a>');
	});
}
function flipp() {
	$('.user-btn').remove();
		flipEffectWithTweenMax("#valueI1", $("#countCupValue1").text(), function() {
			if (parseInt($("#valueI1").text()) < 3) {
				$('.introjs-tooltiptext').append("<br><span>evaluates to <y>true</y>.</span>");
			} else {
				$('.introjs-tooltiptext').append("<br><span>evaluates to <r>false</r>.</span>");
			}
			$('.introjs-nextbutton').show();
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