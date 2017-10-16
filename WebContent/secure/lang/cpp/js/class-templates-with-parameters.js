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
				element :"#templateDiv",
				intro : "",
				position : 'right',
			}, {
				element :"#template",
				intro : "",
				position : 'right',
			}, {
				element :"#typeName",
				intro : "",
				animateStep : 'class',
				position : 'right',
			/*}, {
				element :"#typeName",
				intro : "",
				animateStep : 'args',
				position : 'right',
			}, {
				element :"#typeName",
				intro : "",
				animateStep : 'angBrac',
				position : 'right',*/
			}, {
				element: "#class",
				intro: "",
			}, {
				element : '#main',
				intro :"",
			}, {
				element : '#ob1',
				intro :"",
			}, {
				element : '#int',
				intro :"",
				animateStep: "int11",
				tooltipClass: "hide",
			}, {
				element : '#obValue1',
				intro :"",
				animateStep: "obText1",
				tooltipClass: "hide",
			}, {
				element : '#animationBox',
				intro :"",
				animateStep: "memory1",
				tooltipClass: "hide",
			}, {
				element : '#obValue1',
				intro :"",
				animateStep: "obText2",
				tooltipClass: "hide",
			}, {
				element : '#put1',
				intro :"",
			}, {
				element : '#void',
				intro :"",
				animateStep: "void11",
			}, {
				element : '#cout1',
				intro :"",
				animateStep: "output",
			
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "enterText1",
				tooltipClass: "hide",
			}, {
				element : '#xOutput',
				intro :"",
				animateStep: "xOutput11",
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "outputData1",
				tooltipClass: "hide",
			}, {
				element : '#cout2',
				intro :"",
				animateStep: "output21",
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "enterText2",
				tooltipClass: "hide",
			}, {
				element : '#yOutput',
				intro :"",
				animateStep: "yOutput11",
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "outputData2",
				tooltipClass: "hide",
			}, {
				element : '#ob2',
				intro :"",
			}, {
				element : '#float',
				intro :"",
				tooltipClass: "hide"
			}, {
				element : '#obValue2',
				intro :"",
				animateStep: "obText3",
			}, {
				element : '#animationBox',
				intro :"",
				animateStep: "memory2",
				tooltipClass: "hide",
			}, {
				element : '#obValue2',
				intro :"",
				animateStep: "obText4",
				tooltipClass: "hide",
			}, {
				element : '#put2',
				intro :"",
			}, {
				element : '#void',
				intro :"",
				animateStep: "void12",
			}, {
				element : '#cout1',
				intro :"",
				animateStep: "output1",
			
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "enterText3",
			}, {
				element : '#xOutput',
				intro :"",
				animateStep: "xOutput12",
				tooltipClass:'hide'
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "outputData3",
				tooltipClass: "hide",
			}, {
				element : '#cout2',
				intro :"",
				animateStep: "output22",
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "enterText4",
			}, {
				element : '#yOutput',
				intro :"",
				animateStep: "yOutput12",
				tooltipClass:'hide'
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "outputData4",
				tooltipClass:'hide'
			}, {
				element : '#ob3',
				intro :"",
			}, {
				element : '#intFloat',
				intro :"",
				animateStep : 'int_11',
				tooltipClass: "hide",
			}, {
				element : '#obValue3',
				intro :"",
				animateStep: "obText5",
			}, {
				element : '#animationBox',
				intro :"",
				animateStep: "memory3",
				tooltipClass:'hide'
			}, {
				element : '#obValue3',
				intro :"",
				animateStep: "obText6",
				tooltipClass:'hide'
			}, {
				element : '#put3',
				intro :"",
			}, {
				element : '#void',
				intro :"",
				animateStep: "void13",
			}, {
				element : '#cout1',
				intro :"",
				animateStep: "output3",
			
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "enterText5",
			}, {
				element : '#xOutput',
				intro :"",
				animateStep: "xOutput13",
				tooltipClass:'hide'
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "outputData5",
				tooltipClass:'hide'
			}, {
				element : '#cout2',
				intro :"",
				animateStep: "output23",
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "enterText6",
			}, {
				element : '#yOutput',
				intro :"",
				animateStep: "yOutput13",
				tooltipClass:'hide'
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "outputData6",
				tooltipClass:'hide'
			}, {
				element : '#ob4',
				intro :"",
			}, {
				element : '#charFloat',
				intro :"",
				animateStep : 'char1',
				tooltipClass: "hide"
			}, {
				element : '#obValue4',
				intro :"",
				animateStep: "obText7",
			}, {
				element : '#animationBox',
				intro :"",
				animateStep: "memory4",
				tooltipClass: "hide"
			}, {
				element : '#obValue4',
				intro :"",
				animateStep: "obText8",
				tooltipClass: "hide"
			}, {
				element : '#put4',
				intro :"",
			}, {
				element : '#void',
				intro :"",
				animateStep: "void14",
			}, {
				element : '#cout1',
				intro :"",
				animateStep: "output4",
			
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "enterText7",
			}, {
				element : '#xOutput',
				intro :"",
				animateStep: "xOutput14",
				tooltipClass:'hide'
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "outputData7",
				tooltipClass: "hide"
			}, {
				element : '#cout2',
				intro :"",
				animateStep: "output24",
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "enterText8",
			}, {
				element : '#yOutput',
				intro :"",
				animateStep: "yOutput14",
				tooltipClass:'hide'
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "outputData8",
				tooltipClass: "hide"
			}, {
				element : '#mainClose',
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
			case "obValue1" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'obText1':
					$("#ob1Box").addClass("opacity00");
					$("#one, #val1, #two, #val2").addClass("opacity00");
				break;
				case 'obText2':
					$("#one, #val1, #two, #val2").addClass("opacity00");
					break;
				}
			break;
			case "obValue2" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'obText3':
					$("#ob2Box").addClass("opacity00")
					$("#three, #four, #val3, #val4").addClass("opacity00");
				break;
				case 'obText4':
					$("#three, #four, #val3, #val4").addClass("opacity00");
					break;
				}
			break;
			case "obValue3" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'obText5':
					$("#ob3Box").addClass("opacity00")
					$("#five, #six, #val5, #val6").addClass("opacity00");
				break;
				case 'obText6':
					$("#five, #six").addClass("opacity00");
					$("#val5, #val6").addClass("opacity00");
					break;
				}
			break;
			case "obValue4" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'obText7':
				$("#ob4Box").addClass("opacity00");
				$("#seven, #eight, #val7, #val8").addClass("opacity00");
				break;
				case 'obText8':
					$("#seven, #eight").addClass("opacity00");
					$("#val7", "#val8").addClass("opacity00");
					break;
				}
			break;
			case 'typeName':
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				$(".introjs-nextbutton, .introjs-prevbutton").hide();
				switch(animateStep) {
				case "class" :
					
					break;
				}
				break;
			case 'xOutput':
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'xOutput11':
					$("#value1").addClass("opacity00");
					break;
				}
				break;
			case 'yOutput':
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'yOutput11':
					$("#value2").addClass("opacity00");
				break;
				}
				break;
			case 'cout1' :
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case "output" :
					$("#inputNumber1").addClass("opacity00");
					break;
				case "output1" :
				case "output2" :
				case "output3" :
				case "output4" :
					
					break;
				}
				break;
			case 'cout2' :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case "output21" :
					$("#inputNumber2").addClass("opacity00");
					break;
				}
				break;
			case 'animationBox':
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case'memory1' :
					$("#ob1Box").addClass("opacity00");
					$("#one, #two").addClass("opacity00");
					$("#val1, #val2").addClass("opacity00");
					
					break;
				case'memory2' :
					$("#ob2Box").addClass("opacity00");
					$("#three, #four").addClass("opacity00");
					$("#val3, #val4").addClass("opacity00");
					break;
				case'memory3' :
					$("#ob3Box").addClass("opacity00");
					$("#five, #six").addClass("opacity00");
					$("#val5, #val6").addClass("opacity00");
					break;
				case'memory4' :
					$("#ob4Box").addClass("opacity00");
					$("#seven, #eight").addClass("opacity00");
					$("#val7, #val8").addClass("opacity00");
					break;
				}
				break;
				
			case 'outputBox':
				intro.refresh();
				$("#outputBox").removeClass("opacity00");
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'enterText1':
					$("#inputNumber1").addClass("opacity00");
					break;
				case 'outputData1':
					$("#value1").addClass("opacity00");
					break;
				case 'enterText2':
					$("#inputNumber2").addClass("opacity00");
					break;
				case 'outputData2':
					$("#value2").addClass("opacity00");
					break;
				case 'enterText3':
					$("#inputNumber3").addClass("opacity00");
					break;
				case 'outputData3':
					$("#value3").addClass("opacity00");
					break;
				case 'enterText4':
					break;
				case 'outputData4':
					$("#value4").addClass("opacity00");
					break;
				case 'enterText5':
					
					break;
				case 'outputData5':
					$("#value5").addClass("opacity00");
					break;
				case 'enterText6':
					
					break;
				case 'outputData6':
					$("#value6").addClass("opacity00");
					break;
				case 'enterText7':
					
					break;
				case 'outputData7':
					$("#value7").addClass("opacity00");
					break;
				case 'enterText8':
					
					break;
				case 'outputData8':
					$("#value8").addClass("opacity00");
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
				typing('.introjs-tooltiptext',"Let us learn <y>Class Templates with Parameters</y>.", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'class' :
			$("#lt, #gt").removeClass("blinking-white");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#preBody").removeClass("opacity00");
				typing('.introjs-tooltiptext',"To create a class as <y>Sample</y>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
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
		case "ob1" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"Following statement <y>instantiation</y> with <y>int</y> type.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "ob2" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"Following statement <y>instantiation</y> with <y>float</y> type.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "ob3" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"Following statement <y>instantiation</y> with" +
						" <y>int</y>,<y>float</y> types.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "ob4" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"Following statement <y>instantiation</y>" +
						" with <y>float</y>,<y>char</y> types.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "obValue1" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'obText1':
			$('.introjs-helperLayer').one("transitionend",function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"To create a memory to the <y>ob1</y>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			case 'obText2':
				$('.introjs-helperLayer').one("transitionend",function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"To create x, y values.", function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" '+
								'onclick="intFromEffect2()">Next&rarr;</a>');
					});
				});
				break;
			}
		break;
		case "obValue2" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'obText3':
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"To create a memory to the <y>ob1</y>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			case 'obText4':
				$('.introjs-helperLayer').one("transitionend",function() {
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"To create x, y values.", function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button"'+
								' onclick="floatFromEffect2()">Next&rarr;</a>');
					});
				});
				break;
			}
		break;
		case "obValue3" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'obText5':
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"To create a memory to the <y>ob3</y>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			case 'obText6':
				$('.introjs-helperLayer').one("transitionend",function() {
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"To create x, y values.", function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" '+
								'onclick="intFloatFromEffect2()">Next&rarr;</a>');
					});
				});
				break;
			}
		break;
		case "obValue4" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'obText7':
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"To create a memory to the <y>ob4</y>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			case 'obText8':
				$('.introjs-helperLayer').one("transitionend",function() {
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"To create x, y values.", function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" '+
								'onclick="floatCharFromEffect2()">Next&rarr;</a>');
					});
				});
				break;
			}
		break;
		case 'put1':
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'put2':
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'put3':
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'put4':
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'templateDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var typingContent = "This statement is called  <span class='ct-code-b-yellow'>template" +
						" function declaration</span>.<br>" +
						"In this statement, a template with <span class='ct-code-b-yellow'>T1</span>" +
						", <span class='ct-code-b-yellow'>T2</span> classes are declared."; 
				typing(".introjs-tooltiptext",typingContent, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'template':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var typingContent = "Function template declaraion begins with a keyword"+
				" <span class='ct-code-b-yellow'>template</span>."; 
				typing(".introjs-tooltiptext",typingContent, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'typeName':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "class" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					$("#class1, #class2").addClass("blinking-white");
					var typingContent = "Function template declaration followed by a keyword "+
							   "<span class='blinking-white ct-code-b-yellow'>class</span> " +
							   "after <span class='ct-code-b-yellow'>template</span>."; 
					typing(".introjs-tooltiptext",typingContent, function() {
						$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
							$('.user-btn').remove(); 
							$("#class1, #class2").removeClass("blinking-white");
							$("#t1, #t2").addClass("blinking-white");
							//$('.introjs-tooltip').removeClass('hide');
							var typingContent = "<span class='blinking-white'>Template type argument/s"+
									   " or parameter/s(T1 and T2)</span> should be mentioned after"+
									   " class or type_name"; 
							typing(".introjs-tooltiptext",typingContent, function() {
								$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
								$('.user-btn').click(function() { 
									$('.user-btn').remove();
									$("#class1, #class2, #t1, #t2").removeClass("blinking-white");
									$("#lt, #gt").addClass("blinking-white");
									var typingContent = "The class with template type arguments must"+
									   		   " be enclosed in angle brackets(<span class='blinking-white'>< ></span>)";
									typing(".introjs-tooltiptext",typingContent, function() {
										$(".introjs-nextbutton, .introjs-prevbutton").show();
									});
										
								});
							});
						});
					});
						
				});
				break;
			}
			break;
		case 'xOutput':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'xOutput11':
				$('.introjs-helperLayer').one("transitionend",function() {
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case 'xOutput12':
			case 'xOutput13':
			case 'xOutput14':
				$('.introjs-helperLayer').one("transitionend",function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break;
		case 'yOutput':
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'yOutput11':
				$('.introjs-helperLayer').one("transitionend",function() {
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case 'yOutput12':
			case 'yOutput13':
			case 'yOutput14':
				$('.introjs-helperLayer').one("transitionend",function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break;
		case 'float':
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext', "Class <y>T1</y>,<y>T2</y> is replaced with <y>float</y> data type.", function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="floatFromEffect1()">Next&rarr;</a>');
				});
			});
			break;
		case 'int':
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'int11':
				$('.introjs-helperLayer').one("transitionend",function() {
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext', "Class <y>T1</y>,<y>T2</y> is replaced with <y>int</y> data type.", function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="intFromEffect1()">Next&rarr;</a>');
					});
				});
				break;
			}
			break;
		case 'intFloat':
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'int_11':
				$('.introjs-helperLayer').one("transitionend",function() {
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext', "Class <y>T1</y>,<y>T2</y> is replaced with <y>int</y>, <y>float</y> data types.", function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="intFloatFromEffect1()">Next&rarr;</a>');
					});
				});
				break;
			}
			break;
		case 'charFloat':
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'char1':
				$('.introjs-helperLayer').one("transitionend",function() {
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext', "Class <y>T1</y>,<y>T2</y> is replaced with <y>float</y>, <y>char</y> data types.", function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="floatCharFromEffect1()">Next&rarr;</a>');
					});
				});
				break;
			}
			break;
		case 'void':
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'void11':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext', "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'void12':
			case 'void13':
			case 'void14':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext', "", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			}
			break;
		case 'cout1' :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "output" :
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext',"<y>cout</y> is used to display the output in console", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "output1" :
			case "output2" :
			case "output3" :
			case "output4" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend', function() {
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
			case "output21" :
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext',"<y>cout</y> is used to display the output in console", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "output22" :
			case "output23" :
			case "output24" :
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break;
		case "mainClose" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"close the <y>main</y> tag.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'animationBox':
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case'memory1' :
				$('.introjs-helperLayer').one("transitionend",function() {
					$("#animationBox").removeClass("opacity00");
					transferEffect("#obValue1", "#borderBox1", function() {
						$("#ob1Box").removeClass("opacity00");
							$(".introjs-tooltip").removeClass("hide");
							typing('.introjs-tooltiptext',"Memory is allocated to the <y>ob1</y>.", function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
				});
				break;
			case'memory2' :
				$('.introjs-helperLayer').one("transitionend",function() {
					transferEffect("#obValue2", "#borderBox2", function() {
						$("#ob2Box").removeClass("opacity00");
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"Memory is allocated to the <y>ob2</y>.", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case'memory3' :
				$('.introjs-helperLayer').one("transitionend",function() {
					transferEffect("#obValue3", "#borderBox3", function() {
						$("#ob3Box").removeClass("opacity00");
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"Memory is allocated to the <y>ob3</y>.", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case'memory4' :
				$('.introjs-helperLayer').one("transitionend",function() {
					transferEffect("#obValue4", "#borderBox4", function() {
						$("#ob4Box").removeClass("opacity00");
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"Memory is allocated to the <y>ob4</y>.", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			}
			break;
			
		case 'outputBox':
			intro.refresh();
			$("#outputBox").removeClass("opacity00");
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'enterText1':
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#outputBody').append('<span id="inputNumber1" class="opacity00">Value of x is : <span class="border opacity00 position" '+
							'id="value1">'+ $("#val1").text() +'</span></span>');
					transferEffect("#textVal1", "#inputNumber1", function() {
						$("#inputNumber1").removeClass("opacity00");
						setTimeout(function(){
							intro.nextStep();
						},500);
					});
				});
				break;
			case 'outputData1':
				$("#box1").addClass('z-index1000000');
				$("#val1").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
				transferEffect("#val1" ,"#value1", function() {
					$("#value1").removeClass("opacity00");
					$("#box1").removeClass('z-index1000000');
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'enterText2':
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#outputBody").append('<br><br><span id="inputNumber2" class="opacity00">Value of y is : '+
							'<span class="border opacity00 position" id="value2">'+ $("#val2").text() +'</span></span>');
					transferEffect("#textVal2", "#inputNumber2", function() {
						$("#inputNumber2").removeClass("opacity00");
						setTimeout(function(){
							intro.nextStep();
						},500);
					});
				});
				break;
			case 'outputData2':
				$("#box2").addClass('z-index1000000');
				$("#val2").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
				transferEffect("#val2" ,"#value2", function() {
					$("#value2").removeClass("opacity00");
					$("#box2").removeClass('z-index1000000');
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'enterText3':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#outputBody").append('<br><br><span id="inputNumber3" class="opacity00">Value of x is : '+
							'<span class="border opacity00 position" id="value3">'+ $("#val3").text() +'</span></span>');
					transferEffect("#textVal1", "#inputNumber3", function() {
						$("#inputNumber3").removeClass("opacity00");
						setTimeout(function(){
							intro.nextStep();
						},500);
					});
				});
				break;
			case 'outputData3':
				$("#box3").addClass('z-index1000000');
				$("#val3").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
				transferEffect("#val3" ,"#value3", function() {
					$("#value3").removeClass("opacity00");
					$("#box3").removeClass('z-index1000000');
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'enterText4':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#outputBody").append('<br><br><span id="inputNumber4" class="opacity00">Value of y is : '+
							'<span class="border opacity00 position" id="value4">'+ $("#val4").text() +'</span></span>');
					transferEffect("#textVal2", "#inputNumber4", function() {
						$("#inputNumber4").removeClass("opacity00");
						setTimeout(function(){
							intro.nextStep();
						},500);
					});
				});
				break;
			case 'outputData4':
				$("#box4").addClass('z-index1000000');
				$("#val4").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
				transferEffect("#val4" ,"#value4", function() {
					$("#value4").removeClass("opacity00");
					$("#box4").removeClass('z-index1000000');
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'enterText5':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#outputBody").append('<br><br><span id="inputNumber5" class="opacity00">Value of x is : '+
							'<span class="border opacity00 position" id="value5">'+ $("#val5").text() +'</span></span>');
					transferEffect("#textVal1", "#inputNumber5", function() {
						$("#inputNumber5").removeClass("opacity00");
						setTimeout(function(){
							intro.nextStep();
						},500);
					});
				});
				break;
			case 'outputData5':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$("#box5").addClass('z-index1000000');
				$("#val5").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
				transferEffect("#val5" ,"#value5", function() {
					$("#value5").removeClass("opacity00");
					$("#box5").removeClass('z-index1000000');
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'enterText6':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#outputBody").append('<br><br><span id="inputNumber6" class="opacity00">Value of y is : '+
							'<span class="border opacity00 position" id="value6">'+ $("#val6").text() +'</span></span>');
					transferEffect("#textVal2", "#inputNumber6", function() {
						$("#inputNumber6").removeClass("opacity00");
						setTimeout(function(){
							intro.nextStep();
						},500);
					});
				});
				break;
			case 'outputData6':
				$("#box6").addClass('z-index1000000');
				$("#val6").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
				transferEffect("#val6" ,"#value6", function() {
					$("#value6").removeClass("opacity00");
					$("#box6").removeClass('z-index1000000');
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'enterText7':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#outputBody").append('<br><br><span id="inputNumber7" class="opacity00">Value of x is : '+
							'<span class="border opacity00 position" id="value7">'+ $("#val7").text() +'</span></span>');
					transferEffect("#textVal1", "#inputNumber7", function() {
						$("#inputNumber7").removeClass("opacity00");
						setTimeout(function(){
							intro.nextStep();
						},500);
					});
				});
				break;
			case 'outputData7':
				$("#box7").addClass('z-index1000000');
				$("#val7").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
				transferEffect("#val7" ,"#value7", function() {
					$("#value7").removeClass("opacity00");
					$("#box7").removeClass('z-index1000000');
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'enterText8':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#outputBody").append('<br><br><span id="inputNumber8" class="opacity00">Value of y is : '+
							'<span class="border opacity00 position" id="value8">'+ $("#val8").text() +'</span></span>');
					transferEffect("#textVal2", "#inputNumber8", function() {
						$("#inputNumber8").removeClass("opacity00");
						setTimeout(function(){
							intro.nextStep();
						},500);
					});
				});
				break;
			case 'outputData8':
				intro._introItems[intro._currentStep]["tooltipClass"] = "hide";
				$("#box8").addClass('z-index1000000');
				$("#val8").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
				transferEffect("#val8" ,"#value8", function() {
					$("#value8").removeClass("opacity00");
					$("#box8").removeClass('z-index1000000');
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			}
			break;
		case "restartBtn" :
			intro.refresh();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#animationBox').removeClass('z-index1000000');
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.",function() {
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
	TweenMax.to("#infoText", 2, {
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
function intFromEffect1() {
	$('.user-button').remove();
	$('.introjs-tooltiptext').addClass("toolTip").append('<y><br><div class="display position opacity00 " id="clasSample">class Sample {'+
			'<br>&nbsp;&nbsp;&nbsp;<div class="display" id="xTval"><div id="t1Value1" class="display">T1</div> x;</div>'+
			'<br>&nbsp;&nbsp;&nbsp;<div class="display" id="yTval"><div id="t2Value1" class="display">T2</div> y;</div>'+
			'<br><div class="display" id="publicMethod">&nbsp;&nbsp;&nbsp;public:'+
			' Sample(<div class="display" id="t1Value2">T1</div> a, <div class="display" id="t2Value2">T2</div> b) {'+
			'<br>&nbsp;&nbsp;&nbsp;}</div><br>};');
	$("#class").css("z-index", "1000000").effect("highlight", {color: "yellow"}, 1000, function() {
		$("#clasSample").removeClass("opacity00");
		fromEffectWithTweenMax("#class", "#clasSample", function() {
			$("#class").css("z-index", "");
			//$('.introjs-prevbutton').show();
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="intFlipEffect1()">Next&rarr;</a>');
		});
	});
}
function intFlipEffect1() {
	$('.user-button').remove();
	transferEffect("#intVal1","#t1Value1", function() {
		flipEffectWithTweenMax("#t1Value1", $("#intVal1").text(), function() {
			transferEffect("#intVal2","#t2Value1", function() {
				flipEffectWithTweenMax("#t2Value1", $("#intVal2").text(), function() {
					transferEffect("#t1Value1","#t1Value2", function() {
						flipEffectWithTweenMax("#t1Value2", $("#t1Value1").text(), function() {
							transferEffect("#t2Value1","#t2Value2", function() {
								flipEffectWithTweenMax("#t2Value2", $("#t2Value1").text(), function() {
									$('.introjs-tooltiptext').append('<li>fdgsdfgvbxvgcdgbfs</li>');
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
					});
				});
			});
		});
	});
}

function intFromEffect2() {
	$('.introjs-prevbutton').hide();
	$('.user-button').remove();
	$('.introjs-tooltiptext').append('<y><br><div class="display opacity00 position" id="xyVal"><div class="display" id="xaValue">x = <div class="display" id="aValue">a</div>;'+
			'<br><div class="display" id="ybValue">y = <div class="display" id="bValue">b</div>;</div></div>'+
			'</div></y>');
	$("#xyValue").css('z-index', '1000000').effect("highlight", {color:"yellow"}, 1000, function() {
		$("#xyVal").removeClass("opacity00");
		fromEffectWithTweenMax("#xyValue", "#xyVal", function() {
			$("#class").css("z-index", "");
			//$('.introjs-prevbutton').show();
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="intFlipEffect2()">Next&rarr;</a>');
		});
	});
}
function intFlipEffect2() {
	$('.user-button').remove();
	$("#ten").effect( "transfer", { to: $("#aValue"), className: "ui-effects-transfer-custom" }, 1000 , function() {
		flipEffectWithTweenMax("#aValue", $("#ten").text(), function() {
			$("#twenty").effect( "transfer", { to: $("#bValue"), className: "ui-effects-transfer-custom" }, 1000 , function() {
				flipEffectWithTweenMax("#bValue", $("#twenty").text(), function() {
					//$('.introjs-prevbutton').show();
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="intFromMemoryEffect1()">Next&rarr;</a>');
				});
			});
		});
	});
}
function intFromMemoryEffect1() {
	$('.user-button').remove();
	$("#borderBox1").addClass('z-index1000000');
	transferEffect("#ten", "#box1" ,function() {
	$("#one").removeClass("opacity00");
		$("#val1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$("#val1").removeClass("animated zoomIn");
			transferEffect("#twenty", "#box2" ,function() {
			$("#two").removeClass("opacity00");
				$("#val2").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
					$("#val2").removeClass("animated zoomIn");
					$("#borderBox1").removeClass('z-index1000000');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		});
	});
}
function floatFromEffect1() {
	$('.introjs-prevbutton').hide();
	$('.user-button').remove();
	$('.introjs-tooltiptext').addClass("toolTip").append('<y><br><div class="display position opacity00 " id="clasSample">class Sample {'+
			'<br>&nbsp;&nbsp;&nbsp;<div class="display" id="xTval"><div id="t1Value1" class="display">T1</div> x;</div>'+
			'<br>&nbsp;&nbsp;&nbsp;<div class="display" id="yTval"><div id="t2Value1" class="display">T2</div> y;</div>'+
			'<br><div class="display" id="publicMethod">&nbsp;&nbsp;&nbsp;public:'+
			' Sample(<div class="display" id="t1Value2">T1</div> a, <div class="display" id="t2Value2">T2</div> b) {'+
			'<br>&nbsp;&nbsp;&nbsp;}</div><br>};');
	$("#class").css("z-index", "1000000").effect("highlight", {color: "yellow"}, 1000, function() {
		$("#clasSample").removeClass("opacity00");
		fromEffectWithTweenMax("#class", "#clasSample", function() {
			$("#class").css("z-index", "");
			//$('.introjs-prevbutton').show();
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="floatFlipEffect1()">Next&rarr;</a>');
		});
	});
}
function floatFlipEffect1() {
	//$('.introjs-prevbutton').hide();
	$('.user-button').remove();
	transferEffect("#floatVal1","#t1Value1", function() {
		flipEffectWithTweenMax("#t1Value1", $("#floatVal1").text(), function() {
			transferEffect("#floatVal2","#t2Value1", function() {
				flipEffectWithTweenMax("#t2Value1", $("#floatVal2").text(), function() {
					transferEffect("#t1Value1","#t1Value2", function() {
						flipEffectWithTweenMax("#t1Value2", $("#t1Value1").text(), function() {
							transferEffect("#t2Value1","#t2Value2", function() {
								flipEffectWithTweenMax("#t2Value2", $("#t2Value1").text(), function() {
									$('.introjs-tooltiptext').append('<li>fdgsdfgvbxvgcdgbfs</li>');
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
					});
				});
			});
		});
	});
}

function floatFromEffect2() {
	$('.introjs-prevbutton').hide();
	$('.user-button').remove();
	$('.introjs-tooltiptext').append('<y><br><div class="display opacity00 position" id="xyVal"><div class="display" id="xaValue">x = <div class="display" id="aValue">a</div>;'+
			'<br><div class="display" id="ybValue">y = <div class="display" id="bValue">b</div>;</div></div>'+
			'</div></y>');
	$("#xyValue").css('z-index', '1000000').effect("highlight", {color:"yellow"}, 1000, function() {
		$("#xyVal").removeClass("opacity00");
		fromEffectWithTweenMax("#xyValue", "#xyVal", function() {
			$("#class").css("z-index", "");
			//$('.introjs-prevbutton').show();
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="floatFlipEffect2()">Next&rarr;</a>');
		});
	});
}

function floatFlipEffect2() {
	$('.user-button').remove();
	$("#floatNum1").effect( "transfer", { to: $("#aValue"), className: "ui-effects-transfer-custom" }, 1000 , function() {
		flipEffectWithTweenMax("#aValue", $("#floatNum1").text(), function() {
			$("#floatNum2").effect( "transfer", { to: $("#bValue"), className: "ui-effects-transfer-custom" }, 1000 , function() {
				flipEffectWithTweenMax("#bValue", $("#floatNum2").text(), function() {
					//$('.introjs-prevbutton').show();
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="floatFromMemoryEffect1()">Next&rarr;</a>');
				});
			});
		});
	});
}

function floatFromMemoryEffect1() {
	$('.user-button').remove();
	$("#borderBox2").addClass('z-index1000000');
	transferEffect("#floatNum1", "#box3" ,function() {
		$("#three").removeClass("opacity00");
		$("#val3").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$("#val3").removeClass("animated zoomIn");
			transferEffect("#floatNum2", "#box4" ,function() {
				$("#four").removeClass("opacity00");
				$("#val4").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
					$("#val4").removeClass("animated zoomIn");
					$("#borderBox2").removeClass('z-index1000000');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		});
	});
}
function intFloatFromEffect1() {
	$('.introjs-prevbutton').hide();
	$('.user-button').remove();
	$('.introjs-tooltiptext').addClass('toolTip').append('<y><br><div class="display position opacity00 " id="clasSample">class Sample {'+
			'<br>&nbsp;&nbsp;&nbsp;<div class="display" id="xTval"><div id="t1Value1" class="display">T1</div> x;</div>'+
			'<br>&nbsp;&nbsp;&nbsp;<div class="display" id="yTval"><div id="t2Value1" class="display">T2</div> y;</div>'+
			'<br><div class="display" id="publicMethod">&nbsp;&nbsp;&nbsp;public:'+
			' Sample(<div class="display" id="t1Value2">T1</div> a, <div class="display" id="t2Value2">T2</div> b) {'+
			'<br>&nbsp;&nbsp;&nbsp;}</div><br>};');
	$("#class").css("z-index", "1000000").effect("highlight", {color: "yellow"}, 1000, function() {
		$("#clasSample").removeClass("opacity00");
		fromEffectWithTweenMax("#class", "#clasSample", function() {
			$("#class").css("z-index", "");
			$('.introjs-prevbutton').show();
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="intFloatFlipEffect1()">Next&rarr;</a>');
		});
	});
}
function intFloatFlipEffect1() {
	$('.introjs-prevbutton').hide();
	$('.user-button').remove();
	transferEffect("#intVal3","#t1Value1", function() {
		flipEffectWithTweenMax("#t1Value1", $("#intVal3").text(), function() {
			transferEffect("#floatVal3","#t2Value1", function() {
				flipEffectWithTweenMax("#t2Value1", $("#floatVal3").text(), function() {
					transferEffect("#t1Value1","#t1Value2", function() {
						flipEffectWithTweenMax("#t1Value2", $("#t1Value1").text(), function() {
							transferEffect("#t2Value1","#t2Value2", function() {
								flipEffectWithTweenMax("#t2Value2", $("#t2Value1").text(), function() {
									$('.introjs-tooltiptext').append('<li>fdgsdfgvbxvgcdgbfs</li>');
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
					});
				});
			});
		});
	});
}

function intFloatFromEffect2() {
	$('.introjs-prevbutton').hide();
	$('.user-button').remove();
	$('.introjs-tooltiptext').append('<y><br><div class="display opacity00 position" id="xyVal"><div class="display" id="xaValue">x = <div class="display" id="aValue">a</div>;'+
			'<br><div class="display" id="ybValue">y = <div class="display" id="bValue">b</div>;</div></div>'+
			'</div></y>');
	$("#xyValue").css('z-index', '1000000').effect("highlight", {color:"yellow"}, 1000, function() {
		$("#xyVal").removeClass("opacity00");
		fromEffectWithTweenMax("#xyValue", "#xyVal", function() {
			$("#class").css("z-index", "");
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="intFloatFlipEffect2()">Next&rarr;</a>');
		});
	});
}
function intFloatFlipEffect2() {
	$('.user-button').remove();
	$("#intFloatNum1").effect( "transfer", { to: $("#aValue"), className: "ui-effects-transfer-custom" }, 1000 , function() {
		flipEffectWithTweenMax("#aValue", $("#intFloatNum1").text(), function() {
			$("#intFloatNum2").effect( "transfer", { to: $("#bValue"), className: "ui-effects-transfer-custom" }, 1000 , function() {
				flipEffectWithTweenMax("#bValue", $("#intFloatNum2").text(), function() {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="intFloatFromMemoryEffect1()">Next&rarr;</a>');
				});
			});
		});
	});
}
function intFloatFromMemoryEffect1() {
	$('.user-button').remove();
	$("#borderBox3").addClass('z-index1000000');
	transferEffect("#intFloatNum1", "#box5" ,function() {
		$("#five").removeClass("opacity00");
		$("#val5").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$("#val5").removeClass("animated zoomIn");
			transferEffect("#intFloatNum2", "#box6" ,function() {
				$("#six").removeClass("opacity00");
				$("#val6").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
					$("#val6").removeClass("animated zoomIn");
					$("#borderBox3").removeClass('z-index1000000');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		});
	});
}
function floatCharFromEffect1() {
	$('.introjs-prevbutton').hide();
	$('.user-button').remove();
	$('.introjs-tooltiptext').addClass("toolTip").append('<y><br><div class="display position opacity00 " id="clasSample">class Sample {'+
			'<br>&nbsp;&nbsp;&nbsp;<div class="display" id="xTval"><div id="t1Value1" class="display">T1</div> x;</div>'+
			'<br>&nbsp;&nbsp;&nbsp;<div class="display" id="yTval"><div id="t2Value1" class="display">T2</div> y;</div>'+
			'<br><div class="display" id="publicMethod">&nbsp;&nbsp;&nbsp;public:'+
			' Sample(<div class="display" id="t1Value2">T1</div> a, <div class="display" id="t2Value2">T2</div> b) {'+
			'<br>&nbsp;&nbsp;&nbsp;}</div><br>};');
	$("#class").css("z-index", "1000000").effect("highlight", {color: "yellow"}, 1000, function() {
		$("#clasSample").removeClass("opacity00");
		fromEffectWithTweenMax("#class", "#clasSample", function() {
			$("#class").css("z-index", "");
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="floatCharFlipEffect1()">Next&rarr;</a>');
		});
	});
}
function floatCharFlipEffect1() {
	$('.introjs-prevbutton').hide();
	$('.user-button').remove();
	transferEffect("#floatVal4","#t1Value1", function() {
		flipEffectWithTweenMax("#t1Value1", $("#floatVal4").text(), function() {
			transferEffect("#charVal1","#t2Value1", function() {
				flipEffectWithTweenMax("#t2Value1", $("#charVal1").text(), function() {
					transferEffect("#t1Value1","#t1Value2", function() {
						flipEffectWithTweenMax("#t1Value2", $("#t1Value1").text(), function() {
							transferEffect("#t2Value1","#t2Value2", function() {
								flipEffectWithTweenMax("#t2Value2", $("#t2Value1").text(), function() {
									$('.introjs-tooltiptext').append('<li>fdgsdfgvbxvgcdgbfs</li>');
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
					});
				});
			});
		});
	});
}

function floatCharFromEffect2() {
	$('.introjs-prevbutton').hide();
	$('.user-button').remove();
	$('.introjs-tooltiptext').append('<y><br><div class="display opacity00 position" id="xyVal"><div class="display" id="xaValue">x = <div class="display" id="aValue">a</div>;'+
			'<br><div class="display" id="ybValue">y = <div class="display" id="bValue">b</div>;</div></div>'+
			'</div></y>');
	$("#xyValue").css('z-index', '1000000').effect("highlight", {color:"yellow"}, 1000, function() {
		$("#xyVal").removeClass("opacity00");
		fromEffectWithTweenMax("#xyValue", "#xyVal", function() {
			$("#class").css("z-index", "");
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="floatCharFlipEffect2()">Next&rarr;</a>');
		});
	});
}

function floatCharFlipEffect2() {
	$('.user-button').remove();
	$("#charFloatNum1").effect( "transfer", { to: $("#aValue"), className: "ui-effects-transfer-custom" }, 1000 , function() {
		flipEffectWithTweenMax("#aValue", $("#charFloatNum1").text(), function() {
			$("#charFloatNum2").effect( "transfer", { to: $("#bValue"), className: "ui-effects-transfer-custom" }, 1000 , function() {
				flipEffectWithTweenMax("#bValue", $("#charFloatNum2 span").text(), function() {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="floatCharFromMemoryEffect1()">Next&rarr;</a>');
				});
			});
		});
	});
}

function floatCharFromMemoryEffect1() {
	$('.user-button').remove();
	$("#borderBox4").addClass('z-index1000000');
	transferEffect("#charFloatNum1", "#box7" ,function() {
		$("#seven").removeClass("opacity00");
		$("#val7").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$("#val7").removeClass("animated zoomIn");
			transferEffect("#charFloatNum2", "#box8" ,function() {
				$("#eight").removeClass("opacity00");
				$("#val8").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
					$("#val8").removeClass("animated zoomIn");
					$("#borderBox4").removeClass('z-index1000000');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		});
	});
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
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: 'yellow'}, 400);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
	//$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
/*function transferEffectCircle(selector1, selector2, callBackFunction) {
	$(selector1).addClass("circle-css").effect( "highlight",{color: '#ffff33'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effect-transfer-custom" }, 1000 , function() {
	//$(selector2).removeClass("opacity00");
	$(selector1).removeClass("circle-css")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}*/

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