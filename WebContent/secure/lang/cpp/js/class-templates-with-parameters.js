var count = 1;
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
			/*}, {
				element :"#template",
				intro : "",
				position : 'right',*/
			/*}, {
				element :"#typeName",
				intro : "",
				animateStep : 'class',
				position : 'right',*/
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
				animateStep: "class1",
			}, {
				element : '#main',
				intro :"",
			}, {
				element : '#ob1',
				intro :"",
			}, {
				element : '#int',
				intro :"",
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
			/*}, {
				element : '#obValue1',
				intro :"",
				animateStep: "obText2",
				tooltipClass: "hide",*/
			}, {
				element: "#class",
				intro: "",
				animateStep: "class2",
				position: 'top',
				tooltipClass: "hide"
			}, {
				element : '#put1',
				intro :"",
			}, {
				element : '#void',
				intro :"",
				animateStep: "void10",
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
				tooltipClass: "hide"
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "outputData1",
				tooltipClass: "hide",
			}, {
				element : '#cout2',
				intro :"",
				animateStep: "output21",
				tooltipClass: "hide",
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "enterText2",
				tooltipClass: "hide",
			}, {
				element : '#yOutput',
				intro :"",
				animateStep: "yOutput11",
				tooltipClass: "hide",
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
				element: "#class",
				intro: "",
				animateStep: "class3",
				position: 'top',
				tooltipClass: "hide",
			}, {
				element : '#put2',
				intro :"",
			}, {
				element : '#void',
				intro :"",
				animateStep: "void11",
				tooltipClass: "hide",
			}, {
				element : '#cout1',
				intro :"",
				animateStep: "output1",
				tooltipClass: "hide",
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "enterText3",
				tooltipClass: "hide",
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
				tooltipClass: "hide",
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "enterText4",
				tooltipClass: "hide",
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
				element: "#class",
				intro: "",
				animateStep: "class4",
				position: 'top',
				tooltipClass: "hide",
			}, {
				element : '#put3',
				intro :"",
			}, {
				element : '#void',
				intro :"",
				animateStep: "void12",
				tooltipClass: "hide",
			}, {
				element : '#cout1',
				intro :"",
				animateStep: "output3",
				tooltipClass: "hide",
			
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "enterText5",
				tooltipClass: "hide",
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
				tooltipClass: "hide",
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "enterText6",
				tooltipClass: "hide",
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
				tooltipClass: "hide"
			}, {
				element : '#obValue4',
				intro :"",
				animateStep: "obText7",
				tooltipClass: "hide",
			}, {
				element : '#animationBox',
				intro :"",
				animateStep: "memory4",
				tooltipClass: "hide"
			}, {
				element: "#class",
				intro: "",
				animateStep: "class5",
				position: 'top',
				tooltipClass: "hide",
			}, {
				element : '#put4',
				intro :"",
			}, {
				element : '#void',
				intro :"",
				animateStep: "void13",
				tooltipClass: "hide",
			}, {
				element : '#cout1',
				intro :"",
				animateStep: "output4",
				tooltipClass: "hide",
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "enterText7",
				tooltipClass: "hide",
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
				tooltipClass: "hide",
			}, {
				element : '#outputBox',
				intro :"",
				animateStep: "enterText8",
				tooltipClass: "hide",
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
		
		intro.onbeforechange(function(targetElement) {
			var elementId = targetElement.id;
			switch(elementId) {
			case "obValue1" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'obText1':
					$('.user-button').remove();
					$("#ob1Box").addClass("opacity00");
					$("#one, #val1, #two, #val2").addClass("opacity00");
				break;
				}
			break;
			case "obValue2" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'obText3':
					$('.user-button').remove();
					$("#ob2Box").addClass("opacity00")
					$("#three, #four, #val3, #val4").addClass("opacity00");
				break;
				}
			break;
			case "obValue3" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'obText5':
					$('.user-button').remove();
					$("#ob3Box").addClass("opacity00")
					$("#five, #six, #val5, #val6").addClass("opacity00");
				break;
				}
			break;
			case "obValue4" :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'obText7':
					$('.user-button').remove();
					$("#ob4Box").addClass("opacity00");
					$("#seven, #eight, #val7, #val8").addClass("opacity00");
				break;
				}
			break;
			case 'class' :
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'class2':
					$("#one, #val1, #two, #val2").addClass("opacity00");
				break;
				case 'class3':
					$("#three, #four, #val3, #val4").addClass("opacity00");
				break;
				case 'class4':
					$("#five, #six, #val5, #val6").addClass("opacity00");
				break;
				case 'class5':
					$("#seven, #eight, #val7, #val8").addClass("opacity00");
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
				typing('.introjs-tooltiptext',"Let us learn <y>Class Templates</y> with an example program.", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "main" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"<y>main()</y> is the starting point of execution.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "ob1" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"The object <y>ob1</y> is instantiated with <y>int</y>, <y>int</y> type." +
						"", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "ob2" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"The object <y>ob2</y> is instantiated with <y>float</y>, <y>float</y> type.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "ob3" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"The object <y>ob3</y> is instantiated with <y>int</y>, <y>float</y> type.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "ob4" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"The object <y>ob4</y> is instantiated with <y>float</y>, <y>char</y> type.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'float':
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext', "Class <y>T1</y>,<y>T2</y> is replaced with <y>float</y> data type.", function() {
					/*$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="floatFromEffect1()">Next&rarr;</a>');*/
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'int':
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext', "The template type arguments  <y>T1</y>,<y>T2</y> are replaced with <y>int</y>, <y>int</y> type.", function() {
					/*$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="intFromEffect1()">Next&rarr;</a>');*/
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'intFloat':
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext', "Class <y>T1</y>,<y>T2</y> is replaced with <y>int</y>, <y>float</y> data types.", function() {
					/*$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="intFloatFromEffect1()">Next&rarr;</a>');*/
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'charFloat':
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext', "Class <y>T1</y>,<y>T2</y> is replaced with <y>float</y>, <y>char</y> data types.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'put1':
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"The <y>putdata()</y> is called by the object <y>ob1</y>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'put2':
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"he <y>putdata()</y> is called by the object <y>ob2</y>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'put3':
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"he <y>putdata()</y> is called by the object <y>ob3</y>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'put4':
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"he <y>putdata()</y> is called by the object <y>ob4</y>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'templateDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var typingContent = "<ul><li>Template declaration begins with the keyword <y>template</y>.</li>"+
				"<li>The template type arguments must be enclosed in <y>angular brackets</y>.</li></ul>"; 
				typing(".introjs-tooltiptext",typingContent, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		/*case 'template':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var typingContent = "Function template declaraion begins with a keyword"+
				" <span class='ct-code-b-yellow'>template</span>."; 
				typing(".introjs-tooltiptext",typingContent, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;*/
		case "obValue1" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'obText1':
				$('.introjs-helperLayer').one("transitionend",function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"When an object is created " +
							"<br>" +
							"&ensp;&ensp;- first the <y>memory</y> is allocated to <y>ob1</y>." +
							"<br>&ensp;&ensp;- next, the constructor will be called.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			}
		break;
		case 'class' :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'class1':
			$("#lt, #gt").removeClass("blinking-white");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#preBody").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Here a class <y>Sample</y> is created with two " +
						"template arguments type <y>T1</y> and <y>T2</y>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			case 'class2':
				$('.introjs-helperLayer').one("transitionend", function() {
					$('.introjs-tooltip').removeClass('hide');
					$('.introjs-tooltiptext').append("We can see <y>a</y>, <y>b</y> values are replaced with <y>int</y> type numbers.<br>");
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="fromEffect1(\'int\')">Next&rarr;</a>');
				});
			break;
			case 'class3':
				$('.introjs-helperLayer').one("transitionend", function() {
					$('.introjs-tooltip').removeClass('hide');
					$('.introjs-tooltiptext').append("We can see <y>a</y>, <y>b</y> values are replaced with <y>float</y> type numbers.<br>");
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="fromEffect1(\'float\')">Next&rarr;</a>');
				});
			break;
			case 'class4':
				$('.introjs-helperLayer').one("transitionend", function() {
					$('.introjs-tooltip').removeClass('hide');
					$('.introjs-tooltiptext').append("We can see <y>a</y>, <y>b</y> values are replaced with <y>int</y>, <y>float</y> type numbers.<br>");
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="intFloatFromEffect1()">Next&rarr;</a>');
				});
			break;
			case 'class5':
				$('.introjs-helperLayer').one("transitionend", function() {
					$('.introjs-tooltip').removeClass('hide');
					$('.introjs-tooltiptext').append("We can see <y>a</y>, <y>b</y> values are replaced with <y>float</y>, <y>char</y> type numbers.<br>");
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="floatCharFromEffect1()">Next&rarr;</a>');
				});
			break;
			}
		break;
		case "obValue2" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'obText3':
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"When an object is created " +
						"<br>" +
						"&ensp;&ensp;- first the <y>memory</y> is allocated to <y>ob2</y>." +
						"<br>&ensp;&ensp;- next, the constructor will be called.", function() {
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
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"When an object is created " +
							"<br>" +
							"&ensp;&ensp;- first the <y>memory</y> is allocated to <y>ob3</y>." +
							"<br>&ensp;&ensp;- next, the constructor will be called.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
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
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"When an object is created " +
							"<br>" +
							"&ensp;&ensp;- first the <y>memory</y> is allocated to <y>ob4</y>." +
							"<br>&ensp;&ensp;- next, the constructor will be called.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			}
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
			case 'xOutput1' + count:
				$('.introjs-helperLayer').one("transitionend",function() {
					setTimeOut();
				});
			break;
			}
		break;
		case 'yOutput':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'yOutput1' + count:
				$('.introjs-helperLayer').one("transitionend",function() {
					setTimeOut();
				});
			break;
			}
		break;
		case 'void':
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'void10':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext', "The <y>putData()</y> is used to print the " +
							"data members <y>x</y> and <y>y</y>.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case 'void1' + count:
				$('.introjs-helperLayer').one("transitionend", function() {
					setTimeOut();
				});
			break;
			}
		break;
		case 'cout1' :
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "output":
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"This statement is used to print " +
							"the string in the console.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			default:
				$('.introjs-helperLayer').one('transitionend', function() {
					if(intro._direction == 'forward') {
						console.log("before increment count ====", count);
						count++;
						console.log("after increcrement count ====", count);
						setTimeout(function() {
							intro.nextStep();
						},1000);
					} else {
						console.log("before decrement count ====", count);
						count--;
						console.log("after decrement count ====", count);
						
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
			case "output2" + count :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeOut();
				});
			break;
			}
		break;
		case "mainClose" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"This is the end of the <y>main()</y> function " +
						"where the program execution ends.", function() {
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
					if(intro._direction == 'forward') {
						$("#animationBox").removeClass("opacity00");
						transferEffect("#obValue1", "#borderBox1", function() {
							$("#ob1Box").removeClass("opacity00");
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						});
					} else {
						$("#ob1Box").addClass("opacity00");
						setTimeout(function() {
							intro.previousStep();
						}, 1000);
					}
				});
			break;
			case'memory2' :
				$('.introjs-helperLayer').one("transitionend",function() {
					if(intro._direction == 'forward') {
						$("#animationBox").removeClass("opacity00");
						transferEffect("#obValue2", "#borderBox2", function() {
							$("#ob2Box").removeClass("opacity00");
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						});
					} else {
						$("#ob2Box").addClass("opacity00");
						setTimeout(function() {
							intro.previousStep();
						}, 1000);
					}
				});
			break;
			case'memory3' :
				$('.introjs-helperLayer').one("transitionend",function() {
					if(intro._direction == 'forward') {
						$("#animationBox").removeClass("opacity00");
						transferEffect("#obValue3", "#borderBox3", function() {
							$("#ob3Box").removeClass("opacity00");
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						});
					} else {
						$("#ob3Box").addClass("opacity00");
						setTimeout(function() {
							intro.previousStep();
						}, 1000);
					}
				});
			break;
			case'memory4' :
				$('.introjs-helperLayer').one("transitionend",function() {
					if(intro._direction == 'forward') {
						$("#animationBox").removeClass("opacity00");
						transferEffect("#obValue4", "#borderBox4", function() {
							$("#ob4Box").removeClass("opacity00");
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						});
					} else {
						$("#ob4Box").addClass("opacity00");
						setTimeout(function() {
							intro.previousStep();
						}, 1000);
					}
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
					if(intro._direction == 'forward') {
						$('#outputBody').append('<span id="inputNumber1" class="opacity00">Value of x is : <span class="border opacity00 position" '+
								'id="value1">'+ $("#val1").text() +'</span></span>');
						transferEffect("#textVal1", "#inputNumber1", function() {
							$("#inputNumber1").removeClass("opacity00");
							setTimeout(function(){
								intro.nextStep();
							},1000);
						});
					} else {
						$("#inputNumber1").addClass("opacity00");
						setTimeout(function(){
							intro.previousStep();
						},1000);
					}
				});
			break;
			case 'outputData1':
				if(intro._direction == 'forward') {
					$("#box1").addClass('z-index1000000');
					$("#val1").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
					transferEffect("#val1" ,"#value1", function() {
						$("#value1").removeClass("opacity00");
						$("#box1").removeClass('z-index1000000');
						setTimeout(function(){
							intro.nextStep();
						},1000);
					});
				} else {
					$("#value1").addClass("opacity00");
					setTimeout(function(){
						intro.previousStep();
					},500);
				}
			break;
			case 'enterText2':
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$("#outputBody").append('<br><span id="inputNumber2" class="opacity00">Value of y is : '+
								'<span class="border opacity00 position" id="value2">'+ $("#val2").text() +'</span></span>');
						transferEffect("#textVal2", "#inputNumber2", function() {
							$("#inputNumber2").removeClass("opacity00");
							setTimeout(function(){
								intro.nextStep();
							},1000);
						});
					} else {
						$("#inputNumber2").addClass("opacity00");
						setTimeout(function(){
							intro.previousStep();
						},500);
					}
				});
			break;
			
			case 'outputData2':
				if(intro._direction == 'forward') {
					$("#box2").addClass('z-index1000000');
					$("#val2").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
					transferEffect("#val2" ,"#value2", function() {
						$("#value2").removeClass("opacity00");
						$("#box2").removeClass('z-index1000000');
						setTimeout(function(){
							intro.nextStep();
						},1000);
					});
				} else {
					$("#value2").addClass("opacity00");
					setTimeout(function(){
						intro.previousStep();
					},500);
				}
			break;
			case 'enterText3':
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$("#outputBody").append('<br><span id="inputNumber3" class="opacity00">Value of x is : '+
								'<span class="border opacity00 position" id="value3">'+ $("#val3").text() +'</span></span>');
						transferEffect("#textVal1", "#inputNumber3", function() {
							$("#inputNumber3").removeClass("opacity00");
							setTimeout(function(){
								intro.nextStep();
							},1000);
						});
					} else {
						$("#inputNumber3").addClass("opacity00");
						setTimeout(function(){
							intro.previousStep();
						},500);
					}
				});
			break;
			case 'outputData3':
				if(intro._direction == 'forward') {
					$("#box3").addClass('z-index1000000');
					$("#val3").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
					transferEffect("#val3" ,"#value3", function() {
						$("#value3").removeClass("opacity00");
						$("#box3").removeClass('z-index1000000');
						setTimeout(function(){
							intro.nextStep();
						},1000);
					});
				} else {
					$("#value3").addClass("opacity00");
					setTimeout(function(){
						intro.previousStep();
					},500);
				}
			break;
			case 'enterText4':
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$("#outputBody").append('<br><span id="inputNumber4" class="opacity00">Value of y is : '+
								'<span class="border opacity00 position" id="value4">'+ $("#val4").text() +'</span></span>');
						transferEffect("#textVal2", "#inputNumber4", function() {
							$("#inputNumber4").removeClass("opacity00");
							setTimeout(function(){
								intro.nextStep();
							},500);
						});
					} else {
						$("#inputNumber4").addClass("opacity00");
						setTimeout(function(){
							intro.previousStep();
						},500);
					}
				});
			break;
			case 'outputData4':
				if(intro._direction == 'forward') {
					$("#box4").addClass('z-index1000000');
					$("#val4").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
					transferEffect("#val4" ,"#value4", function() {
						$("#value4").removeClass("opacity00");
						$("#box4").removeClass('z-index1000000');
						setTimeout(function(){
							intro.nextStep();
						},1000);
					});
				} else {
					$("#value4").addClass("opacity00");
					setTimeout(function(){
						intro.previousStep();
					},500);
				}
			break;
			case 'enterText5':
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$("#outputBody").append('<br><span id="inputNumber5" class="opacity00">Value of x is : '+
								'<span class="border opacity00 position" id="value5">'+ $("#val5").text() +'</span></span>');
						transferEffect("#textVal1", "#inputNumber5", function() {
							$("#inputNumber5").removeClass("opacity00");
							setTimeout(function(){
								intro.nextStep();
							},500);
						});
					} else {
						$("#inputNumber5").addClass("opacity00");
						setTimeout(function(){
							intro.previousStep();
						},500);
					}
				});
			break;
			case 'outputData5':
				if(intro._direction == 'forward') {
					$("#box5").addClass('z-index1000000');
					$("#val5").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
					transferEffect("#val5" ,"#value5", function() {
						$("#value5").removeClass("opacity00");
						$("#box5").removeClass('z-index1000000');
						setTimeout(function(){
							intro.nextStep();
						},1000);
					});
				} else {
					$("#value5").addClass("opacity00");
					setTimeout(function(){
						intro.previousStep();
					},500);
				}
			break;
			case 'enterText6':
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$("#outputBody").append('<br><span id="inputNumber6" class="opacity00">Value of y is : '+
								'<span class="border opacity00 position" id="value6">'+ $("#val6").text() +'</span></span>');
						transferEffect("#textVal2", "#inputNumber6", function() {
							$("#inputNumber6").removeClass("opacity00");
							setTimeout(function(){
								intro.nextStep();
							},500);
						});
					} else {
						$("#inputNumber6").addClass("opacity00");
						setTimeout(function(){
							intro.previousStep();
						},500);
					}
				});
			break;
			case 'outputData6':
				if(intro._direction == 'forward') {
					$("#box6").addClass('z-index1000000');
					$("#val6").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
					transferEffect("#val6" ,"#value6", function() {
						$("#value6").removeClass("opacity00");
						$("#box6").removeClass('z-index1000000');
						setTimeout(function(){
							intro.nextStep();
						},1000);
					});
				} else {
					$("#value6").addClass("opacity00");
					setTimeout(function(){
						intro.previousStep();
					},500);
				}
			break;
			case 'enterText7':
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$("#outputBody").append('<br><span id="inputNumber7" class="opacity00">Value of x is : '+
								'<span class="border opacity00 position" id="value7">'+ $("#val7").text() +'</span></span>');
						transferEffect("#textVal1", "#inputNumber7", function() {
							$("#inputNumber7").removeClass("opacity00");
							setTimeout(function(){
								intro.nextStep();
							},500);
						});
					} else {
						$("#inputNumber7").addClass("opacity00");
						setTimeout(function(){
							intro.previousStep();
						},500);
					}
				});
			break;
			case 'outputData7':
				if(intro._direction == 'forward') {
					$("#box7").addClass('z-index1000000');
					$("#val7").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
					transferEffect("#val7" ,"#value7", function() {
						$("#value7").removeClass("opacity00");
						$("#box7").removeClass('z-index1000000');
						setTimeout(function(){
							intro.nextStep();
						},1000);
					});
				} else {
					$("#value7").addClass("opacity00");
					setTimeout(function(){
						intro.previousStep();
					},500);
				}
			break;
			case 'enterText8':
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$("#outputBody").append('<br><span id="inputNumber8" class="opacity00">Value of y is : '+
								'<span class="border opacity00 position" id="value8">'+ $("#val8").text() +'</span></span>');
						transferEffect("#textVal2", "#inputNumber8", function() {
							$("#inputNumber8").removeClass("opacity00");
							setTimeout(function(){
								intro.nextStep();
							},500);
						});
					} else {
						$("#inputNumber8").addClass("opacity00");
						setTimeout(function(){
							intro.previousStep();
						},500);
					}
				});
			break;
			case 'outputData8':
				if(intro._direction == 'forward') {
					$("#box8").addClass('z-index1000000');
					$("#val8").css("z-index", "1000000").effect("highlight", {color :"ff8080"}, 200);
					transferEffect("#val8" ,"#value8", function() {
						$("#value8").removeClass("opacity00");
						$("#box8").removeClass('z-index1000000');
						setTimeout(function(){
							intro.nextStep();
						},1000);
					});
				} else {
					$("#value8").addClass("opacity00");
					setTimeout(function(){
						intro.previousStep();
					},500);
				}
			break;
			}
		break;
		case "restartBtn" :
			$('.introjs-prevbutton').hide();
			$('.introjs-prevbutton').hide();
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
function fromEffect1(type) {
	$('.user-button').remove();
	$('.introjs-tooltiptext').addClass("toolTip").append('<y><div class="display position opacity00 " id="clasSample">class Sample {'+
			'<br>&nbsp;&nbsp;&nbsp;<div class="display" id="xTval"><div id="t1Value1" class="display">T1</div> x;</div>'+
			'<br>&nbsp;&nbsp;&nbsp;<div class="display" id="yTval"><div id="t2Value1" class="display">T2</div> y;</div>'+
			'<br><div class="display" id="publicMethod">&nbsp;&nbsp;&nbsp;public:'+
			' <br>&ensp;&ensp;&ensp;&ensp;Sample(<div class="display" id="t1Value2">T1</div> a, <div class="display" id="t2Value2">T2</div> b) {'+
			'<y><br>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<div class="display position" id="xyVal"><div class="display" id="xaValue">x = <div class="display" id="aValue">a</div>;'+
			'<br><div class="display" id="ybValue">y = <div class="display" id="bValue">b</div>;</div></div>'+
			'</div></y>'+
			'<br>&ensp;&ensp;&ensp;&ensp;}</div><br>};');
	$("#class").css("z-index", "1000000").effect("highlight", {color: "yellow"}, 1000, function() {
		$("#clasSample").removeClass("opacity00");
		fromEffectWithTweenMax("#class", "#clasSample", function() {
			$("#class").css("z-index", "");
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="flipEffect'+type+'()">Next&rarr;</a>');
		});
	});
}
function flipEffectint() {
	$('.user-button').remove();
	transferEffect("#intVal1","#t1Value1", function() {
		flipEffectWithTweenMax("#t1Value1", $("#intVal1").text(), function() {
			transferEffect("#intVal2","#t2Value1", function() {
				flipEffectWithTweenMax("#t2Value1", $("#intVal2").text(), function() {
					transferEffect("#t1Value1","#t1Value2", function() {
						flipEffectWithTweenMax("#t1Value2", $("#t1Value1").text(), function() {
							transferEffect("#t2Value1","#t2Value2", function() {
								flipEffectWithTweenMax("#t2Value2", $("#t2Value1").text(), function() {
									$("#class").css("z-index", "");
									$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="intFlipEffect2()">Next&rarr;</a>');
								});
							});
						});
					});
				});
			});
		});
	});
}

/*function intFromEffect2() {
	$('.introjs-prevbutton').hide();
	$('.user-button').remove();
	$('.introjs-tooltiptext').append('<y><div class="display opacity00 position" id="xyVal"><div class="display" id="xaValue">x = <div class="display" id="aValue">a</div>;'+
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
}*/
function intFlipEffect2() {
	$('.user-button').remove();
	$("#ten").effect( "transfer", { to: $("#aValue"), className: "ui-effects-transfer-custom" }, 1000 , function() {
		flipEffectWithTweenMax("#aValue", $("#ten").text(), function() {
			$("#twenty").effect( "transfer", { to: $("#bValue"), className: "ui-effects-transfer-custom" }, 1000 , function() {
				flipEffectWithTweenMax("#bValue", $("#twenty").text(), function() {
					$('.introjs-tooltiptext').append('<br>To allocate the memories are <y>x</y> and <y>y</y>.');
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="intFromMemoryEffect1()">Next&rarr;</a>');
					$('.introjs-prevbutton').show();
				});
			});
		});
	});
}
function intFromMemoryEffect1() {
	$('.introjs-prevbutton').hide();
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
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="floatFlipEffect1()">Next&rarr;</a>');
		});
	});
}
function flipEffectfloat() {
	$('.user-button').remove();
	transferEffect("#floatVal1","#t1Value1", function() {
		flipEffectWithTweenMax("#t1Value1", $("#floatVal1").text(), function() {
			transferEffect("#floatVal2","#t2Value1", function() {
				flipEffectWithTweenMax("#t2Value1", $("#floatVal2").text(), function() {
					transferEffect("#t1Value1","#t1Value2", function() {
						flipEffectWithTweenMax("#t1Value2", $("#t1Value1").text(), function() {
							transferEffect("#t2Value1","#t2Value2", function() {
								flipEffectWithTweenMax("#t2Value2", $("#t2Value1").text(), function() {
									$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="floatFlipEffect2()">Next&rarr;</a>');
								});
							});
						});
					});
				});
			});
		});
	});
}

function floatFlipEffect2() {
	$('.user-button').remove();
	$("#floatNum1").effect( "transfer", { to: $("#aValue"), className: "ui-effects-transfer-custom" }, 1000 , function() {
		flipEffectWithTweenMax("#aValue", $("#floatNum1").text(), function() {
			$("#floatNum2").effect( "transfer", { to: $("#bValue"), className: "ui-effects-transfer-custom" }, 1000 , function() {
				flipEffectWithTweenMax("#bValue", $("#floatNum2").text(), function() {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="floatFromMemoryEffect1()">Next&rarr;</a>');
					$('.introjs-prevbutton').show();
				});
			});
		});
	});
}

function floatFromMemoryEffect1() {
	$('.introjs-prevbutton').hide();
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
	$('.introjs-tooltiptext').addClass("toolTip").append('<y><div class="display position opacity00 " id="clasSample">class Sample {'+
			'<br>&nbsp;&nbsp;&nbsp;<div class="display" id="xTval"><div id="t1Value1" class="display">T1</div> x;</div>'+
			'<br>&nbsp;&nbsp;&nbsp;<div class="display" id="yTval"><div id="t2Value1" class="display">T2</div> y;</div>'+
			'<br><div class="display" id="publicMethod">&nbsp;&nbsp;&nbsp;public:'+
			' <br>&ensp;&ensp;&ensp;&ensp;Sample(<div class="display" id="t1Value2">T1</div> a, <div class="display" id="t2Value2">T2</div> b) {'+
			'<y><br>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<div class="display position" id="xyVal"><div class="display" id="xaValue">x = <div class="display" id="aValue">a</div>;'+
			'<br><div class="display" id="ybValue">y = <div class="display" id="bValue">b</div>;</div></div>'+
			'</div></y>'+
			'<br>&ensp;&ensp;&ensp;&ensp;}</div><br>};');
	$("#class").css("z-index", "1000000").effect("highlight", {color: "yellow"}, 1000, function() {
		$("#clasSample").removeClass("opacity00");
		fromEffectWithTweenMax("#class", "#clasSample", function() {
			$("#class").css("z-index", "");
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
									$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="intFloatFlipEffect2()">Next&rarr;</a>');
									$('.introjs-prevbutton').show();
								});
							});
						});
					});
				});
			});
		});
	});
}

/*function intFloatFromEffect2() {
	$('.introjs-prevbutton').hide();
	$('.user-button').remove();
	$('.introjs-tooltiptext').append('<y><br><div class="display opacity00 position" id="xyVal"><div class="display" id="xaValue">x = <div class="display" id="aValue">a</div>;'+
			'<br><div class="display" id="ybValue">y = <div class="display" id="bValue">b</div>;</div></div>'+
			'</div></y>');
	$("#xyValue").css('z-index', '1000000').effect("highlight", {color:"yellow"}, 1000, function() {
		$("#xyVal").removeClass("opacity00");
		fromEffectWithTweenMax("#xyValue", "#xyVal", function() {
			$("#class").css("z-index", "");
			
		});
	});
}*/
function intFloatFlipEffect2() {
	$('.introjs-prevbutton').hide();
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
	$('.introjs-tooltiptext').addClass("toolTip").append('<y><div class="display position opacity00 " id="clasSample">class Sample {'+
			'<br>&nbsp;&nbsp;&nbsp;<div class="display" id="xTval"><div id="t1Value1" class="display">T1</div> x;</div>'+
			'<br>&nbsp;&nbsp;&nbsp;<div class="display" id="yTval"><div id="t2Value1" class="display">T2</div> y;</div>'+
			'<br><div class="display" id="publicMethod">&nbsp;&nbsp;&nbsp;public:'+
			' <br>&ensp;&ensp;&ensp;&ensp;Sample(<div class="display" id="t1Value2">T1</div> a, <div class="display" id="t2Value2">T2</div> b) {'+
			'<y><br>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<div class="display position" id="xyVal"><div class="display" id="xaValue">x = <div class="display" id="aValue">a</div>;'+
			'<br><div class="display" id="ybValue">y = <div class="display" id="bValue">b</div>;</div></div>'+
			'</div></y>'+
			'<br>&ensp;&ensp;&ensp;&ensp;}</div><br>};');
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
									$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="floatCharFlipEffect2()">Next&rarr;</a>');
								});
							});
						});
					});
				});
			});
		});
	});
}

/*function floatCharFromEffect2() {
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
}*/

function floatCharFlipEffect2() {
	$('.user-button').remove();
	$("#charFloatNum1").effect( "transfer", { to: $("#aValue"), className: "ui-effects-transfer-custom" }, 1000 , function() {
		flipEffectWithTweenMax("#aValue", $("#charFloatNum1").text(), function() {
			$("#charFloatNum2").effect( "transfer", { to: $("#bValue"), className: "ui-effects-transfer-custom" }, 1000 , function() {
				flipEffectWithTweenMax("#bValue", $("#charFloatNum2 span").text(), function() {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="floatCharFromMemoryEffect1()">Next&rarr;</a>');
					$('.introjs-prevbutton').show();
				});
			});
		});
	});
}

function floatCharFromMemoryEffect1() {
	$('.introjs-prevbutton').hide();
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
function setTimeOut() {
	if(intro._direction == 'forward') {
			setTimeout(function() {
				intro.nextStep();
			},1000);
	} else {
		setTimeout(function() {
			intro.previousStep();
		},500);
	}
}