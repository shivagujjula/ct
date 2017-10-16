
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
			element : '#main',
			intro :"",
		}, {
			element : '#int1',
			intro :"",
			tooltipClass : 'hide',
		}, {
			element : '#animationBox',
			intro :"",
			animateStep : 'memory1',
			tooltipClass : 'hide',
		}, {
			element : '#float1',
			intro :"",
			tooltipClass : 'hide',
		}, {
			element : '#animationBox',
			intro :"",
			animateStep : 'memory2',
			tooltipClass : 'hide',
		}, {
			element : '#char1',
			intro :"",
			tooltipClass : 'hide',
		}, {
			element : '#animationBox',
			intro :"",
			animateStep : 'memory3',
			tooltipClass : 'hide',
		}, {
			element : '#show1',
			intro :"",
			tooltipClass : 'hide',
		}, {
			element : '#method1',
			intro :"",
			animateStep : 'method11'
		}, {
			element : '#cout1',
			intro :"",	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData1',
			tooltipClass : 'hide',
		}, {
			element : '#animateVal1',
			intro :"",
			tooltipClass : 'hide',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry1',
			tooltipClass: 'hide'
		}, {
			element : '#show2',
			intro :"",
			tooltipClass: 'hide'
		}, {
			element : '#method2',
			intro :"",
			animateStep : 'method21'
		}, {
			element : '#cout2',
			intro :"",
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData2',
			tooltipClass: 'hide'
		}, {
			element : '#animateVal2',
			intro :"",	
			tooltipClass: 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry2',
			tooltipClass: 'hide'	
		}, {
			element : '#show3',
			intro :"",
		}, {
			element : '#method3',
			intro :"",
			animateStep : 'method31'
		}, {
			element : '#cout3',
			intro :"",
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData3',
			tooltipClass: 'hide'	
		}, {
			element : '#animateVal3',
			intro :"",	
			tooltipClass: 'hide'	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry3',
			tooltipClass: 'hide'	
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
			tooltipClass: 'hide'
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
			tooltipClass : 'hide'
		}, {
			element : '#animationBox',
			intro :"",
			animateStep : 'memory4',
			tooltipClass : 'hide'
		}, {
			element : '#float2',
			intro :"",
		}, {
			element : '#animationBox',
			intro :"",
			animateStep : 'memory5',
			tooltipClass : 'hide'
		}, {
			element : '#char2',
			intro :"",
			tooltipClass : 'hide'
		}, {
			element : '#animationBox',
			intro :"",
			animateStep : 'memory6',
			tooltipClass : 'hide'
		}, {
			element : '#show4',
			intro :"",
		}, {
			element : '#method4',
			intro :"",
			animateStep : 'method42',
			tooltipClass : 'hide',
			position : 'top'
		}, {
			element : '#cout4',
			intro :"",
			animateStep : 'cout41'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData4',
			tooltipClass : 'hide',
		}, {
			element : '#animateVal4',
			intro :"",	
			animateStep : 'animateVal41',
			tooltipClass : 'hide',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry4',
			tooltipClass : 'hide',
		}, {
			element : '#show5',
			intro :"",
		}, {
			element : '#method4',
			intro :"",
			animateStep : 'method43',
			tooltipClass : 'hide',
			position : 'top'
		}, {
			element : '#cout4',
			intro :"",
			animateStep : 'cout42'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData5',
			tooltipClass : 'hide',
		}, {
			element : '#animateVal4',
			intro :"",	
			animateStep : 'animateVal42',
			tooltipClass : 'hide',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry5',
			tooltipClass : 'hide',
		}, {
			element : '#show6',
			intro :"",
		}, {
			element : '#method4',
			intro :"",
			animateStep : 'method44',
			tooltipClass : 'hide',
			position : 'top'
		}, {
			element : '#cout4',
			intro :"",
			animateStep : 'cout43'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData6',
			tooltipClass : 'hide',
		}, {
			element : '#animateVal4',
			intro :"",	
			animateStep : 'animateVal43',
			tooltipClass : 'hide',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry6',
			tooltipClass : 'hide',
		}, {
			element : '#return1',
			intro :"",	
		}, {
			element : '#mainClose2',
			intro :"",
		}, {
			element : "#restartBtn",
			intro : "",
			position : "left"
		}]
	});
	intro.onbeforechange(function(targetElement){
		var elementId = targetElement.id;
		switch(elementId) {
		case "int1" :
			$("#aValue1").addClass("opacity00");
		break;
		case "float1" :
			$("#bValue1").addClass("opacity00");
		break;
		case "char1" :
			$("#cValue1").addClass("opacity00");
			break;
		case "int2" :
			$("#aValue2").addClass("opacity00");
		break;
		case "float2" :
			$("#bValue2").addClass("opacity00");
		break;
		case "char2" :
			$("#cValue2").addClass("opacity00");
		break;
		case "animateVal1" :
			$("#value1").addClass("opacity00");
		break;
		case "animateVal2" :
			$("#value2").addClass("opacity00");
		break;
		case "animateVal3" :
			$("#value3").addClass("opacity00");
		break;
		case "animateVal4" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'animateVal41':
				$("#value4").addClass("opacity00");
			break;
			case 'animateVal42':
				$("#value5").addClass("opacity00");
			break;
			case 'animateVal43':
				$("#value6").addClass("opacity00");
			break;
			}
			break;
		case 'animationBox':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'memory1':
				$("#aValue1").addClass("opacity00");
				break;
			case 'memory2':
				$("#bValue1").addClass("opacity00");
				break;
			case 'memory3':
				$("#cValue1").addClass("opacity00");
				break;
			case 'memory4':
				$("#aValue2").addClass("opacity00");
				break;
			case 'memory5':
				$("#bValue2").addClass("opacity00");
				break;
			case 'memory6':
				$("#cValue2").addClass("opacity00");
				break;
			}
			break;
		case "outputBox" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
		case "enterData1" :
			$('#inputNumber1').addClass('opacity00');
			break;
		case 'dataEntry1' :
			$("#value1").addClass("opacity00");
			break;
		case 'enterData2':
			$('#inputNumber2').addClass('opacity00');
			break;
		case 'dataEntry2' :
			$("#value2").addClass("opacity00");
			break;
		case 'enterData3':
			$('#inputNumber3').addClass('opacity00');
			break;
		case 'dataEntry3' :
			$("#value3").addClass("opacity00");
			break;
		case 'enterData4':
			$('#inputNumber4').addClass('opacity00');
			break;
		case 'dataEntry4':
			$("#value4").addClass("opacity00");
			break;
		case 'enterData5':
			$('#inputNumber5').addClass('opacity00');
			break;
		case 'dataEntry5':
			$("#value5").addClass("opacity00");
			break;
		case 'enterData6':
			$('#inputNumber6').addClass('opacity00');
		break;
		case 'dataEntry6':
			$("#value6").addClass("opacity00");
			break;
			}
		break;
		}
	});
	intro.onafterchange(function(targetElement){
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
		case 'preBody' :
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#preBody").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Let us learn <y> overloading method</y>.", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'preBody1' :
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#preBody1").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Let us learn <y> function-with-templates</y>.", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "main" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"<y>main()</y> method to execute the program.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "main1" :
			$("#tempVal").removeClass("blinking-orange");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"<y>main()</y> method to execute the program.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "int1" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext'," To declare a variable of type <y>int</y>" +
						" called <y>a</y> and initialize it to a value of <y>10</y> .", function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
		break;
		case "float1" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext'," To declare a variable of type <y>float</y>" +
						" called <y>b</y> and initialize it to a value of <y>10.5</y> .", function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
		break;
		case "char1" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext'," To declare a variable of type <y>char</y>" +
						" called <y>c</y> and initialize it to a value of <y>'R'</y> .", function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
		break;
		case "int2" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext'," To declare a variable of type <y>int</y>" +
						" called <y>a</y> and initialize it to a value of <y>6</y> .", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "float2" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext'," To declare a variable of type <y>float</y>" +
						" called <y>b</y> and initialize it to a value of <y>7.9</y> .", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "char2" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext'," To declare a variable of type <y>char</y>" +
						" called <y>c</y> and initialize it to a value of <y>'S'</y> .", function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
		break;
		case "show1" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext',"Here we are calling the <y>show(num1)</y> with the value <y>num1</y> as parameter.", function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
		break;
		case "show2" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext',"Here we are calling the <y>show(num2)</y> with the value <y>num2</y> as parameter.", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "show3" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"Here we are calling the <y>show(ch)</y> with the value <y>ch</y> as parameter.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "show4" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"Here we are calling the <y>show(num1)</y> with the value <y>num1</y> as parameter.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "show5" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"Here we are calling the <y>show(num2)</y> with the value <y>num2</y> as parameter.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "show6" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"Here we are calling the <y>show(ch)</y> with the value <y>ch</y> as parameter.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "cout1" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"<y>cout</y> is used " +
								"to display the <y>output</y> in console.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "cout2" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"<y>cout</y> is used " +
								"to display the <y>output</y> in console.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();				});
			});
		break;
		case "cout3" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"<y>cout</y> is used " +
								"to display the <y>output</y> in console.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "animateVal1" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext'," ", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "animateVal2" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext'," ", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "animateVal3" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext'," ", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "animateVal4" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'animateVal41':
				$('.introjs-helperLayer').one("transitionend",function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext'," ", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case 'animateVal42':
				$('.introjs-helperLayer').one("transitionend",function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext'," ", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case 'animateVal43':
				$('.introjs-helperLayer').one("transitionend",function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext'," ", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			}
			break;
		case "return" :
		case "return1":
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"<y>main</y> function has to <y>return</y> a value because it is declared as int main"+
						"which means <y>main</y> function should <y>return integer data</y> type. ", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "mainClose1" :
		case "mainClose2" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"close the <y>main</y> tag.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "template" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$("#tempVal").addClass("blinking-orange");
				$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext',"In <y>templates</y>, we define only function with <y>parameters</y> of" +
						" <y>templates</y>, the template concept avoid the <y>duplicate code</y>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					$("#tempVal").removeClass("blinking-orange");
				});
			});
		break;
		case 'method1':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'method11':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"<y>show</y> method which prints the value of <y>num1</y>. ", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
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
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'method21':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"<y>show</y> method which prints the value of <y>num2</y>.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
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
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'method31':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"<y>show</y> method which prints the value of <y>ch</y>", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
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
		case 'method4':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'method41':
				$("#tempVal").removeClass("blinking-orange");
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"Here we have created a <y>template</y> function " +
							"with <y>show()</y> as its <y>template parameter</y>. ", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'method42':
				$('.introjs-helperLayer').one("transitionend", function() {
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"<y>show(num1)</y> is a <y>int</y> type variable so <y>templates</y> calls the " +
					"data type as <y>int</y>.", function() {	
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="flipEffect(4, \'int\', \'a\')">Next&rarr;</a>');
					});
				});
				break;
			case 'method43':
				$('.introjs-helperLayer').one("transitionend", function() {
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"<y>show(num2)</y> is a <y>float</y> type variable so <y>templates</y> calls the " +
					"data type as <y>float</y>.", function() {	
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="flipEffect(5, \'float\', \'b\')">Next&rarr;</a>');
					});
				});
				break;
			case 'method44':
				$('.introjs-helperLayer').one("transitionend", function() {
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"<y>show(ch)</y> is a <y>char</y> type variable so <y>templates</y> calls the " +
							"data type as <y>char</y>.", function() {	
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="flipEffect(6, \'char\', \'c\')">Next&rarr;</a>');
					});
				});
				break;
			}
			break;
			
		case 'cout4':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'cout41':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"<y>cout</y> is used " +
								"to display the <y>output</y> in console.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
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
			$("#animationBox").removeClass("opacity00");
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'memory1':
				$('.introjs-helperLayer').one("transitionend", function() {
					transferEffect("#aVal1", "#aValue1" ,function() {
						$("#aValue1").removeClass("opacity00");
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"memeory is alloactaed to the <y>num1</y> variable.", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case 'memory2':
				$('.introjs-helperLayer').one("transitionend", function() {
					transferEffect("#bVal1", "#bValue1" ,function() {
						$("#bValue1").removeClass("opacity00");
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"memeory is alloactaed to the <y>num2</y> variable.", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case 'memory3':
				$('.introjs-helperLayer').one("transitionend", function() {
					transferEffect("#cVal1", "#cValue1" ,function() {
						$("#cValue1").removeClass("opacity00");
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"memeory is alloactaed to the <y>ch</y> variable.", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case 'memory4':
				$('.introjs-helperLayer').one("transitionend", function() {
					transferEffect("#aVal2", "#aValue2" ,function() {
						$("#aValue2").removeClass("opacity00");
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"memeory is alloactaed to the <y>num2</y> variable.", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case 'memory5':
				$('.introjs-helperLayer').one("transitionend", function() {
					transferEffect("#bVal2", "#bValue2" ,function() {
						$("#bValue2").removeClass("opacity00");
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"memeory is alloactaed to the <y>num2</y> variable.", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case 'memory6':
				$('.introjs-helperLayer').one("transitionend", function() {
					transferEffect("#cVal2", "#cValue2" ,function() {
						$("#cValue2").removeClass("opacity00");
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"memeory is alloactaed to the <y>ch</y> variable.", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			}
			break;
		case "outputBox" :
			$("#outputBox").removeClass("opacity00");
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
		case "enterData1" :
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#outputBody").append('<span id ="inputNumber1" class="opacity00">Integer number is : <span class="border opacity00 position" id="value1">'
						+ $('#boxValue1').text() +'');
				transferEffect("#enterText1","#inputNumber1",function() {
					$('#inputNumber1').removeClass('opacity00');
					setTimeout(function() {
						intro.nextStep();
					},1000);
				});
			});
			break;
		case 'dataEntry1' :
			$("#borderBox1").addClass('z-index1000000');
			$("#boxValue1").css("zIndex","1000000").effect( "highlight",{color: '#ff8080'}, 200);
			transferEffectCircle("#boxValue1","#value1", function() {
					$("#value1").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					$("#borderBox1").removeClass('z-index1000000');
					typing('.introjs-tooltiptext',"memeory is alloactaed to the <y>ch</y> variable.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
		case 'enterData2':
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#outputBody").append('<br><br><span id="inputNumber2" class="opacity00">Float number is : <span class="border opacity00 position" id="value2">'
						+ $('#boxValue2').text() +'');
				transferEffect("#enterText2","#inputNumber2",function() {
					$('#inputNumber2').removeClass('opacity00');
					setTimeout(function() {
						intro.nextStep();
					},1000);
				});
			});
			break;
		case 'dataEntry2' :
			$("#borderBox2").addClass('z-index1000000');
			$("#boxValue2").css("zIndex","1000000").effect( "highlight",{color: '#ff8080'}, 200);
				transferEffectCircle("#boxValue2","#value2", function() {
					$("#value2").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					$("#borderBox2").removeClass('z-index1000000');
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
		case 'enterData3':
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#outputBody").append('<br><span id="inputNumber3" class="opacity00">Character is : <span class="border opacity00 position" id="value3">'
						+ $('#boxValue3').text() +'');
				transferEffect("#enterText3","#inputNumber3",function() {
					$('#inputNumber3').removeClass('opacity00');
					setTimeout(function() {
						intro.nextStep();
					},1000);
				});
			});
			break;
		case 'dataEntry3' :
			$("#borderBox3").addClass('z-index1000000');
			$("#boxValue3").css("zIndex","1000000").effect( "highlight",{color: '#ff8080'}, 200);
			transferEffectCircle("#boxValue3","#value3", function() {
					$("#value3").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", function() {
						$("#borderBox3").removeClass('z-index1000000');
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
		case 'enterData4':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#outputBody").append('<br><br><span id="inputNumber4" class="opacity00">The val is : <span class="border opacity00 position" id="value4">'
						+ $('#boxValue4').text()+'');
				transferEffect("#enterText4", "#inputNumber4", function() {
					$("#inputNumber4").removeClass("opacity00");
					setTimeout(function() {
						intro.nextStep();
					},1000);
				});
			});
			break;
		case 'dataEntry4':
			$("#borderBox4").addClass('z-index1000000');
			$("#boxValue4").css("zindex", "1000000").effect('highlight', {color : '#ff8080'}, 200);
			transferEffectCircle("#boxValue4", "#value4", function() {
				$("#value4").removeClass("opacity00");
				$(".introjs-tooltip").removeClass("hide");
				$("#borderBox4").removeClass('z-index1000000');
				typing('.introjs-tooltiptext',"", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'enterData5':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#outputBody").append('<br><br><span id="inputNumber5" class="opacity00">The val is : <span class="border opacity00 position" id="value5">'
						+ $('#boxValue5').text()+'');
				transferEffect("#enterText4", "#inputNumber5", function() {
					$("#inputNumber5").removeClass("opacity00");
					setTimeout(function() {
						intro.nextStep();
					},1000);
				});
			});
			break;
		case 'dataEntry5':
			$("#borderBox5").addClass('z-index1000000');
			$("#boxValue5").css("zindex", "1000000").effect('highlight', {color : '#ff8080'}, 200);
			transferEffectCircle("#boxValue5", "#value5", function() {
				$("#value5").removeClass("opacity00");
				$(".introjs-tooltip").removeClass("hide");
				$("#borderBox5").removeClass('z-index1000000');
				typing('.introjs-tooltiptext',"", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'enterData6':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#outputBody").append('<br><br><span id="inputNumber6" class="opacity00">The val is : <span class="border opacity00 position" id="value6">'
						+ $('#boxValue6').text()+'');
				transferEffect("#enterText4", "#inputNumber6", function() {
					$("#inputNumber6").removeClass("opacity00");
					setTimeout(function() {
						intro.nextStep();
					},1000);
				});
			});
		break;
	case 'dataEntry6':
		$("#borderBox6").addClass('z-index1000000');
		$("#boxValue6").css("zindex", "1000000").effect('highlight', {color : '#ff8080'}, 200);
		transferEffectCircle("#boxValue6", "#value6", function() {
			$("#value6").removeClass("opacity00");
			$(".introjs-tooltip").removeClass("hide");
			$("#borderBox6").removeClass('z-index1000000');
			typing('.introjs-tooltiptext',"", function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
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
	$('.user-button').remove();
	$('.introjs-tooltiptext').append("<div class='position opacity00' style='display:inline-block;' id='voidMethod'>&nbsp;&nbsp;<y>void show " +
	"(<div class='display' id='t'>T</div> <span id='x' class='display'>x</span>) {</y>" +
	"<div class='' id= 'cOutput'><y>&nbsp;&nbsp;&nbsp;&nbsp;cout << 'The val is : ' << <div class='display position' id='xValue'>x</div> << endl;</div>" +
	"<y>}</y></div><div id='one'></div>");
	$("#voidMethod").removeClass("opacity00");
	fromEffectWithTweenMax("#method4", "#voidMethod", function() {
		$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="methodFlipEffect('+value+',\''+ type+'\',\''+typeVal+'\')">Next&rarr;</a>');
	});
}
function methodFlipEffect(value, type, typeVal) {
	$('.user-button').remove();
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
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		 });
	 } else if (check == "float") {
		 $('.user-button').remove();
		 bounceFromEffectWithTimelineMax("#x", "#xValue", function() {
			 $('.introjs-nextbutton, .introjs-prevbutton').show();
		 });
	 } else {
		 $('.user-button').remove();
		 bounceFromEffectWithTimelineMax("#x", "#xValue", function() {
			 $('.introjs-nextbutton, .introjs-prevbutton').show();
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