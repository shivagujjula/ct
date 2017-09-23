
var readPrintStringUsingGetsPutsReady = function() {
	$("restartBtn").click(function(){
		$("#inputChar").val('');
		$("#hiddenTotalEnterChar").val();
		location.reload();
	});
	intro = introJs();
	$("nextButton").click(function(){
		$(this).remove();
		intro.nextStep();
	});
	intro.setOptions ({
		showBullets : false,
		exitOnOverlayClick : false,
		escOnExit : false,
		keyboardNavigation : false,
		showStepNumbers : false,
		steps : [{
			element : '#informationDiv',
			intro :"",
			tooltipClass : 'hide'
		}, {
			element : '#preBody',
			intro :"",
		}, {
			element : '#method1',
			intro :"",
			animateStep : 'method11'
		}, {
			element : '#method2',
			intro :"",
			animateStep : 'method21'
		}, {
			element : '#method3',
			intro :"",
			animateStep : 'method31'
		}, {
			element : '#main',
			intro :"",
		}, {
			element : '#int1',
			intro :"",
		}, {
			element : '#animationBox',
			intro :"",
			animateStep : 'memory1'
		}, {
			element : '#float1',
			intro :"",
		}, {
			element : '#animationBox',
			intro :"",
			animateStep : 'memory2'
		}, {
			element : '#char1',
			intro :"",
		}, {
			element : '#animationBox',
			intro :"",
			animateStep : 'memory3'
		}, {
			element : '#show1',
			intro :"",
		}, {
			element : '#method1',
			intro :"",
			animateStep : 'method12'
		}, {
			element : '#cout1',
			intro :"",	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData1'
		}, {
			element : '#animateVal1',
			intro :"",	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry1'
		}, {
			element : '#show2',
			intro :"",
		}, {
			element : '#method2',
			intro :"",
			animateStep : 'method22'
		}, {
			element : '#cout2',
			intro :"",
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData2'
		}, {
			element : '#animateVal2',
			intro :"",	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry2'
		}, {
			element : '#show3',
			intro :"",
		}, {
			element : '#method3',
			intro :"",
			animateStep : 'method32'
		}, {
			element : '#cout3',
			intro :"",
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData3'
		}, {
			element : '#animateVal3',
			intro :"",	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry3'
		}, {
			element : '#return',
			intro :"",	
		}, {
			element : '#mainClose1',
			intro :"",
		}, {
			element : '#preBody1',
			intro :"",	
		}, {
			element : '#template',
			intro :"",
		}, {
			element : '#method4',
			intro :"",
			animateStep : 'method41'
		}, {
			element : '#main1',
			intro :"",	
		}, {
			element : '#int2',
			intro :"",
		}, {
			element : '#animationBox',
			intro :"",
			animateStep : 'memory4'
		}, {
			element : '#float2',
			intro :"",
		}, {
			element : '#animationBox',
			intro :"",
			animateStep : 'memory5'
		}, {
			element : '#char2',
			intro :"",
		}, {
			element : '#animationBox',
			intro :"",
			animateStep : 'memory6'
		}, {
			element : '#show4',
			intro :"",
		}, {
			element : '#method4',
			intro :"",
			animateStep : 'method42',
			position : 'right'
		}, {
			element : '#cout4',
			intro :"",
			animateStep : 'cout41'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData4'
		}, {
			element : '#animateVal4',
			intro :"",	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry4'
		}, {
			element : '#show5',
			intro :"",
		}, {
			element : '#method4',
			intro :"",
			animateStep : 'method43',
			position : 'right'
		}, {
			element : '#cout4',
			intro :"",
			animateStep : 'cout42'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData5'
		}, {
			element : '#animateVal4',
			intro :"",	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry5'
		}, {
			element : '#show6',
			intro :"",
		}, {
			element : '#method4',
			intro :"",
			animateStep : 'method44',
			position : 'right'
		}, {
			element : '#cout4',
			intro :"",
			animateStep : 'cout43'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData6'
		}, {
			element : '#animateVal4',
			intro :"",	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry6'
		}, {
			element : '#return1',
			intro :"",	
		}, {
			element : '#mainClose2',
			intro :"",
		}]
	});
	intro.onafterchange(function(targetElement){
		var elementId = targetElement.id;
		switch(elementId) {
		case 'preBody' :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#preBody").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Let us learn <y> overloading method</y>.", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'preBody1' :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#preBody1").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Let us learn <y> function-with-templates</y>.", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "main" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"<y>main()</y> method to execute the program.", function() {
					$('.introjs-nextbutton').show();
					$('.introjs-prevbutton').show();
				});
			});
		break;
		case "main1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"<y>main()</y> method to execute the program.", function() {
					$('.introjs-nextbutton').show();
					$('.introjs-prevbutton').show();
				});
			});
		break;
		case "char1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext'," To declare a variable of type <y>char</y>" +
						" called <y>c</y> and initialize it to a value of <y>'R'</y> .", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "int1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext'," To declare a variable of type <y>int</y>" +
						" called <y>a</y> and initialize it to a value of <y>10</y> .", function() {
					$('.introjs-nextbutton').show();
					$('.introjs-prevbutton').show();
				});
			});
		break;
		case "float1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext'," To declare a variable of type <y>float</y>" +
						" called <y>b</y> and initialize it to a value of <y>10.5</y> .", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "char2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext'," To declare a variable of type <y>char</y>" +
						" called <y>c</y> and initialize it to a value of <y>'S'</y> .", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "int2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext'," To declare a variable of type <y>int</y>" +
						" called <y>a</y> and initialize it to a value of <y>6</y> .", function() {
					$('.introjs-nextbutton').show();
					$('.introjs-prevbutton').show();
				});
			});
		break;
		case "float2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext'," To declare a variable of type <y>float</y>" +
						" called <y>b</y> and initialize it to a value of <y>7.9</y> .", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "show1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"Here we are calling the <y>show(num1)</y> with the value <y>num1</y> as parameter.", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "show2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"Here we are calling the <y>show(num2)</y> with the value <y>num2</y> as parameter.", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "show3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"Here we are calling the <y>show(ch)</y> with the value <y>ch</y> as parameter.", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "show4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"Here we are calling the <y>show(num1)</y> with the value <y>num1</y> as parameter.", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "show5" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"Here we are calling the <y>show(num2)</y> with the value <y>num2</y> as parameter.", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "show6" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"Here we are calling the <y>show(ch)</y> with the value <y>ch</y> as parameter.", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "cout1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"<y>cout</y> is used " +
								"to display the <y>output</y> in console.", function() {
					$('.introjs-nextbutton').show();
					$('.introjs-prevbutton').show();
				});
			});
		break;
		case "cout2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"<y>cout</y> is used " +
								"to display the <y>output</y> in console.", function() {
					$('.introjs-nextbutton').show();
					$('.introjs-prevbutton').show();
				});
			});
		break;
		case "cout3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"<y>cout</y> is used " +
								"to display the <y>output</y> in console.", function() {
					$('.introjs-nextbutton').show();
					$('.introjs-prevbutton').show();
				});
			});
		break;
		case "animateVal1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext'," ", function() {
					$('.introjs-nextbutton').show();
					$('.introjs-prevbutton').show();
				});
			});
		break;
		case "animateVal2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext'," ", function() {
					$('.introjs-nextbutton').show();
					$('.introjs-prevbutton').show();
				});
			});
		break;
		case "animateVal3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext'," ", function() {
					$('.introjs-nextbutton').show();
					$('.introjs-prevbutton').show();
				});
			});
		break;
		case "animateVal4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext'," ", function() {
					$('.introjs-nextbutton').show();
					$('.introjs-prevbutton').show();
				});
			});
		break;
		case "return" :
		case "return1":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"<y>main</y> function has to <y>return</y> a value because it is declared as int main"+
						"which means <y>main</y> function should <y>return integer data</y> type. ", function() {
					$('.introjs-nextbutton').show();
					$('.introjs-prevbutton').show();
				});
			});
		break;
		case "mainClose1" :
		case "mainClose2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"close the <y>main</y> tag.", function() {
					$('.introjs-nextbutton').show();
					$('.introjs-prevbutton').show();
				});
			});
		break;
		case "template" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				$("#tempVal").addClass("blinking-orange");
				typing('.introjs-tooltiptext',"In <y>templates</y>, we define only function with <y>parameters</y> of" +
						" <y>templates</y>, the template concept avoid the <y>duplicate code</y>.", function() {
					$('.introjs-nextbutton').show();
					$('.introjs-prevbutton').show();
				});
			});
		break;
		case 'method1':
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'method11':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"<y>show</y> method which prints the value of <y>num1</y>. ", function() {
						$('.introjs-nextbutton').show();
						$('.introjs-prevbutton').show();
					});
				});
				break;
			case 'method12':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					setTimeout(function() {
						intro.nextStep();
					},1000);
				});
				break;
			}
			break;
		case 'method2':
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'method21':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"<y>show</y> method which prints the value of <y>num2</y>.", function() {
						$('.introjs-nextbutton').show();
						$('.introjs-prevbutton').show();
					});
				});
				break;
			case 'method22':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					setTimeout(function() {
						intro.nextStep();
					},1000);
				});
				break;
			}
			break;
		case 'method3':
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'method31':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"<y>show</y> method which prints the value of <y>ch</y>", function() {
						$('.introjs-nextbutton').show();
						$('.introjs-prevbutton').show();
					});
				});
				break;
			case 'method32':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					setTimeout(function() {
						intro.nextStep();
					},1000);
				});
				break;
			}
			break;
		case 'void':
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'void11':
				$('.introjs-helperLayer').one("transitionend", function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="flipEffect()">Next&rarr;</a>');
				});
			break;
			case 'void12':
				$('.introjs-helperLayer').one("transitionend", function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="flipEffect()">Next&rarr;</a>');
				});
			break;
			}
			break;
		case 'method4':
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'method41':
				$("#tempVal").removeClass("blinking-orange");
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"Here we have created a <y>template</y> function " +
							"with <y>show()</y> as its <y>template parameter</y>. ", function() {
						$('.introjs-nextbutton').show();
						$('.introjs-prevbutton').show();
					});
				});
				break;
			case 'method42':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"<y>show(num1)</y> is a <y>int</y> type variable so <y>templates</y> calls the " +
					"data type as <y>int</y>.", function() {	
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="flipEffect(4, \'int\', \'a\')">Next&rarr;</a>');
					});
				});
				break;
			case 'method43':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"<y>show(num2)</y> is a <y>float</y> type variable so <y>templates</y> calls the " +
					"data type as <y>float</y>.", function() {	
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="flipEffect(5, \'float\', \'b\')">Next&rarr;</a>');
					});
				});
				break;
			case 'method44':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"<y>show(ch)</y> is a <y>char</y> type variable so <y>templates</y> calls the " +
							"data type as <y>char</y>.", function() {	
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="flipEffect(6, \'char\', \'c\')">Next&rarr;</a>');
					});
				});
				break;
			}
			break;
			
		case 'cout4':
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'cout41':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"<y>cout</y> is used " +
								"to display the <y>output</y> in console.", function() {
						$('.introjs-nextbutton').show();
						$('.introjs-prevbutton').show();
					});
				});
				break;
			case 'cout42':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					setTimeout(function() {
						intro.nextStep();
					},1000);
				});
				break;
			case 'cout43':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					setTimeout(function() {
						intro.nextStep();
					},1000);
				});
				break;
			}
			break;
		case 'animationBox':
			$('.introjs-prevbutton').hide();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'memory1':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#animationBox").removeClass("opacity00");
					transferEffect("#aVal1", "#aValue1" ,function() {
						$("#aValue1").fadeTo(1000, 1, function() {
							$(".introjs-tooltip").removeClass("hide");
							typing('.introjs-tooltiptext',"memeory is alloactaed to the <y>num1</y> variable.", function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case 'memory2':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					transferEffect("#bVal1", "#bValue1" ,function() {
						$("#bValue1").fadeTo(1000, 1, function() {
							$(".introjs-tooltip").removeClass("hide");
							typing('.introjs-tooltiptext',"memeory is alloactaed to the <y>num2</y> variable.", function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case 'memory3':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					transferEffect("#cVal1", "#cValue1" ,function() {
						$("#cValue1").fadeTo(1000, 1, function() {
							$(".introjs-tooltip").removeClass("hide");
							typing('.introjs-tooltiptext',"memeory is alloactaed to the <y>ch</y> variable.", function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case 'memory4':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#animationBox").removeClass("opacity00");
					transferEffect("#aVal2", "#aValue2" ,function() {
						$("#aValue2").fadeTo(1000, 1, function() {
							$(".introjs-tooltip").removeClass("hide");
							typing('.introjs-tooltiptext',"memeory is alloactaed to the <y>num2</y> variable.", function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case 'memory5':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					transferEffect("#bVal2", "#bValue2" ,function() {
						$("#bValue2").fadeTo(1000, 1, function() {
							$(".introjs-tooltip").removeClass("hide");
							typing('.introjs-tooltiptext',"memeory is alloactaed to the <y>num2</y> variable.", function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case 'memory6':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					transferEffect("#cVal2", "#cValue2" ,function() {
						$("#cValue2").fadeTo(1000, 1, function() {
							$(".introjs-tooltip").removeClass("hide");
							typing('.introjs-tooltiptext',"memeory is alloactaed to the <y>ch</y> variable.", function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			}
			break;
		case "outputBox" :
			$('.introjs-prevbutton').hide();
			$('.introjs-nextbutton').hide();
			$("#outputBox").removeClass("opacity00");
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
		case "enterData1" :
			intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#outputBody").append('<span id ="inputNumber1" class="opacity00">Integer number is : <span class="border opacity00 position" id="value1">'
						+ $('#boxValue1').text() +'');
				transferEffect("#enterText1","#inputNumber1",function() {
					$('#inputNumber1').removeClass('opacity00');
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
		case 'dataEntry1' :
			intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
			$("#borderBox1").addClass('z-index1000000');
			$("#boxValue1").css("zIndex","1000000").effect( "highlight",{color: '#ff8080'}, 200);
			transferEffectCircle("#boxValue1","#value1", function() {
					$("#value1").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					$("#borderBox1").removeClass('z-index1000000');
					typing('.introjs-tooltiptext',"memeory is alloactaed to the <y>ch</y> variable.", function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
		case 'enterData2':
			intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#outputBody").append('<br><br><span id="inputNumber2" class="opacity00">Float number is : <span class="border opacity00 position" id="value2">'
						+ $('#boxValue2').text() +'');
				transferEffect("#enterText2","#inputNumber2",function() {
					$('#inputNumber2').removeClass('opacity00');
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
		case 'dataEntry2' :
			intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
			$("#borderBox2").addClass('z-index1000000');
			$("#boxValue2").css("zIndex","1000000").effect( "highlight",{color: '#ff8080'}, 200);
				transferEffectCircle("#boxValue2","#value2", function() {
					$("#value2").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					$("#borderBox2").removeClass('z-index1000000');
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
		case 'enterData3':
			intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#outputBody").append('<br><br><span id="inputNumber3" class="opacity00">Character is : <span class="border opacity00 position" id="value3">'
						+ $('#boxValue3').text() +'');
				transferEffect("#enterText3","#inputNumber3",function() {
					$('#inputNumber3').removeClass('opacity00');
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
		case 'dataEntry3' :
			intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
			$("#borderBox3").addClass('z-index1000000');
			$("#boxValue3").css("zIndex","1000000").effect( "highlight",{color: '#ff8080'}, 200);
			transferEffectCircle("#boxValue3","#value3", function() {
					$("#value3").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", function() {
						$("#borderBox3").removeClass('z-index1000000');
						$('.introjs-nextbutton').show();
					});
				});
			break;
		case 'enterData4':
			intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#outputBody").append('<br><br><span id="inputNumber4" class="opacity00">The val is : <span class="border opacity00 position" id="value4">'
						+ $('#boxValue4').text()+'');
				transferEffect("#enterText4", "#inputNumber4", function() {
					$("#inputNumber4").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
		case 'dataEntry4':
			intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
			$("#borderBox4").addClass('z-index1000000');
			$("#boxValue4").css("zindex", "1000000").effect('highlight', {color : '#ff8080'}, 200);
			transferEffectCircle("#boxValue4", "#value4", function() {
				$("#value4").removeClass("opacity00");
				$(".introjs-tooltip").removeClass("hide");
				$("#borderBox4").removeClass('z-index1000000');
				typing('.introjs-tooltiptext',"", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'enterData5':
			intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#outputBody").append('<br><br><span id="inputNumber5" class="opacity00">The val is : <span class="border opacity00 position" id="value5">'
						+ $('#boxValue5').text()+'');
				transferEffect("#enterText4", "#inputNumber5", function() {
					$("#inputNumber5").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
		case 'dataEntry5':
			intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
			$("#borderBox5").addClass('z-index1000000');
			$("#boxValue5").css("zindex", "1000000").effect('highlight', {color : '#ff8080'}, 200);
			transferEffectCircle("#boxValue5", "#value5", function() {
				$("#value5").removeClass("opacity00");
				$(".introjs-tooltip").removeClass("hide");
				$("#borderBox5").removeClass('z-index1000000');
				typing('.introjs-tooltiptext',"", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'enterData6':
			intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
		$('.introjs-helperLayer ').one('transitionend', function() {
			$("#outputBody").append('<br><br><span id="inputNumber6" class="opacity00">The val is : <span class="border opacity00 position" id="value6">'
					+ $('#boxValue6').text()+'');
			transferEffect("#enterText4", "#inputNumber6", function() {
				$("#inputNumber6").removeClass("opacity00");
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext',"", function() {
					$('.introjs-nextbutton').show();
				});
			});
		});
		break;
	case 'dataEntry6':
		intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
		$("#borderBox6").addClass('z-index1000000');
		$("#boxValue6").css("zindex", "1000000").effect('highlight', {color : '#ff8080'}, 200);
		transferEffectCircle("#boxValue6", "#value6", function() {
			$("#value6").removeClass("opacity00");
			$(".introjs-tooltip").removeClass("hide");
			$("#borderBox6").removeClass('z-index1000000');
			typing('.introjs-tooltiptext',"", function() {
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
				typing(".introjs-tooltiptext", "Click to restart.",function() {
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
function flipEffect(value, type, typeVal) {
	console.log("flipEffect");
	$('.user-button').remove();
	$('.introjs-tooltiptext').append("<div class='position opacity00' style='display:inline-block;' id='voidMethod'><y1>void show " +
	"(<div class='display' id='t'>T</div> <span id='x' class='display'>x</span>) {</y1>" +
	"<div class='' id= 'cOutput'><y1>&nbsp;&nbsp;cout << 'The val is : ' << <div class='display position' id='xValue'>x</div> << endl;</div>" +
	"<y1>}</y1></div><div id='one'></div>");
	$("#voidMethod").removeClass("opacity00");
	fromEffectWithTweenMax("#method4", "#voidMethod", function() {
		$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="methodFlipEffect('+value+',\''+ type+'\',\''+typeVal+'\')">Next&rarr;</a>');
	});
}
function methodFlipEffect(value, type, typeVal) {
	$('.user-button').remove();
	console.log("rahasasdh");
	transferEffect("#show" + value, "#"+ type +"2", function() {
		transferEffect("#" + type, "#t", function() {
			flipEffectWithTweenMax("#t", $("#" + type).text(), function() {
				transferEffect("#"+ typeVal +"Val2",  "#x", function(){
					flipEffectWithTweenMax("#x",$("#"+ typeVal +"Val2 span").text(), function() {
						typing('#one',"The<y> output</y> will be as <y>"+ $("#"+ typeVal +"Val2 span").text() + "</y>.",function() {	
							$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="xValFlipEffect(\''+ type+'\')">Next&rarr;</a>');
						});
					});	
				});
			});
		});
	});
}
function xValFlipEffect(check) {
	 if (check == "int") {
		 $('.user-button').remove();
		 bounceFromEffectWithTimelineMax("#x", "#xValue", function() {
			$('.introjs-nextbutton').show();
		 });
	 } else if (check == "float") {
		 $('.user-button').remove();
		 bounceFromEffectWithTimelineMax("#x", "#xValue", function() {
			$('.introjs-nextbutton').show();
		 });
	 } else {
		 $('.user-button').remove();
		 bounceFromEffectWithTimelineMax("#x", "#xValue", function() {
			$('.introjs-nextbutton').show();
		 });
	 }
}
function typing(typingId, typingContent, typingCallbackFunction) {
	var typingSpeed = 10;
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingSpeed,
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
	//$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
function transferEffectCircle(selector1, selector2, callBackFunction) {
	$(selector1).addClass("circle-css").effect( "highlight",{color: '#ffff33'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effectss-transfer" }, 1000 , function() {
	//$(selector2).removeClass("opacity00");
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