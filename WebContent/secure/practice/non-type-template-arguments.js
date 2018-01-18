var totalCount;
var id = 1;
var arr = [];
var count = 0;
var iValComparisionFlag = true;
var iValueComparisionFlag = true;
var readPrintStringUsingGetsPutsReady = function() {
	$('#restartBtn').click(function() {
		$('#inputChar').val('');
		$('#hiddenTotalEnterChar').val();
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
		},/*{
			element : '#preBody',
			intro :"",
		},{
			element : '#template',
			intro :"",
		},{
			element : '#class',
			intro :"",
		}, {
			element : '#main',
			intro :"",	
		}, {
			element : '#ob1',
			intro :"",	
		},*/ {
			element : '#animationBox',
			intro :"",	
			animateStep :'memory',
			tooltipClass:'hide'
		}, {
			element : '#arrSize',
			intro :"",	
			animateStep :'arrSize1',
			tooltipClass:'hide'
		}, {
			element : '#cout',
			intro :"",	
		}, {
			element : '#outputBox',
			intro :"",
			animateStep: "enterText1",
			tooltipClass: "hide",
		}, {
			element : '#read1',
			intro :"",	
		}, {
			element : '#voidMethod',
			intro :"",
			animateStep: "voidMethod1",
			tooltipClass: "hide",
		}, {
			element : '#outputBox',
			intro :"",
			animateStep: "enterValue",
			tooltipClass: "hide",
		}, {
			element : '#ob2',
			intro :"",	
		}, {
			element : '#animationBox',
			intro :"",	
			animateStep :'memory1',
			tooltipClass:'hide'
		}, {
			element : '#arrSize',
			intro :"",	
			animateStep :'arrSize2',
			tooltipClass:'hide'
		}, {
			element : '#cout1',
			intro :"",
		}, {
			element : '#outputBox',
			intro :"",
			animateStep: "enterText2",
			tooltipClass: "hide",
		}, {
			element : '#read2',
			intro :"",	
		}, {
			element : '#voidMethod',
			intro :"",
			animateStep: "voidMethod2",
			tooltipClass: "hide",
		}, {
			element : '#outputBox',
			intro :"",
			animateStep: "enterValue1",
			tooltipClass: "hide",
		}, {
			element : '#cout2',
			intro :"",
		}, {
			element : '#outputBox',
			intro :"",
			animateStep: "enterSumInt",
			tooltipClass: "hide",
		}, {
			element : '#ob1Sum',
			intro :"",
		}, {
			element : '#intSum',
			intro :"",
		}, {
			element : '#intTotal',
			intro :"",
		}, {
			element : '#condition2',
			intro :"",
			animateStep: "condition11",
		}, {
			element : '#iValZero',
			intro :"",
			animateStep: "iValZero1",
			tooltipClass: "hide",
		}, {
			element : '#sizeVal_1',
			intro :"",
		}, {
			element : '#total',
			intro :"",
			animateStep: "total11",
			tooltipClass: "hide",
		}, {
			element : '#iValIncrement',
			intro :"",
			animateStep: "iValIncrement_1",
		}, {
			element : '#sizeVal_1',
			intro :"",
		}, {
			element : '#total',
			intro :"",
			animateStep: "total11",
			tooltipClass: "hide",
		}]
		
	});
	
	
	intro.onbeforechange(function(targetElement){
		var elementId = targetElement.id;
		switch(elementId) {
		
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
				typing('.introjs-tooltiptext',"Let us learn an example on <y>Non-type Template Arguments</y>.", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'template':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var typingContent = "<ul><li>The <y>template argument size</y> becomes a part of the template class name.</li><li> An object of such a template" +
						" class is created with both the type argument <y>T</y> of the class and the value of the <y>non-type template argument size</y>.</li></ul>"; 
				typing(".introjs-tooltiptext",typingContent, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case 'ob1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext',"<ul><li>If the template arguments do not evaluate identically, t" +
						"he object is created is <y>int</y> type.</li><li>" +
						" So create object <y>ob1</y> of class <y>Array</y>.</li><li>Since an array always stores elements in a sequential manner" +
						" the memory location of the second element will be adjacent to the memory location of the first element.</li>" +
						"<li>Since we are declaring an array of type <y>int</y> and int occupies <y>2 bytes</y> in memory you will notice" +
						" that the memory addresses of all the elements very sequentially with <y>2</y>" +
						" as the difference starting with <y>1024</y>.</li></ul>", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'ob2':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext',"<ul><li>If the template arguments do not evaluate identically, t" +
						"he object is created is <y>float</y> type.</li><li>" +
						" So create object <y>ob2</y> of class <y>Array</y>.</li></ul>", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'intSum':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext',"", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'intTotal':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext',"", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'main':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is" +
						" the starting point of execution.", function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
		break;
		case 'class':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext',"Here a class <y>Array</y> is created with two " +
						"template arguments type <y>T</y> and <y>size</y>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'cout':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext',"This statement is used to print " +
						"the string in the console.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'cout1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext',"This statement is used to print " +
						"the string in the console.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'cout2':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext',"This statement is used to print " +
						"the string in the console.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'cout3':
			$('.introjs-helperLayer ').one('transitionend', function() {
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
		case 'read1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext',"The <y>readArray()</y> is called " +
						"by the object <y>ob1</y>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'read2':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext',"The <y>readArray()</y> is called " +
						"by the object <y>ob2</y>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'ob1Sum':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext',"", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'ob2Sum':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext',"", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'voidMethod':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'voidMethod1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"<ul><li>The <y>readArray()</y> is used to print the " +
							"integer elements of the array.</li><li>The size of an array is " +
							"<y>4</y> so user can access <y>4</y> values.</li>", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;	
			case 'voidMethod2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"<ul><li>The <y>readArray()</y> is used to print the " +
							"integer elements of the array.</li><li>The size of an array is " +
							"<y>5</y> so user can access <y>5</y> values.</li>", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;	
			}
		break;
		case 'condition2':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'condition11':
				$('.introjs-helperLayer ').one('transitionend', function() {
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
			case 'condition12':
				$('.introjs-helperLayer ').one('transitionend', function() {
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
			}
		break;
		case 'iValZero':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'iValZero1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#countCup').removeClass('opacity00');
					$("#num1").addClass('z-index1000000');
				//	$("#cup_value2").append('0');
					$("#cup_value").append('0').addClass("animated zoomIn").one('animationend', function() {
						$("#cup_value").addClass('z-index10000000');
						$(".introjs-tooltip").removeClass("hide");
						$("#num1").removeClass('z-index1000000');
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext',"This is the  <span class='ct-code-b-yellow'>initialization</span> section. Here a local " +
							"variable i is declared and initialized to <span class='ct-code-b-yellow'> 0</span>.", function() {
							$("#cup_value").removeClass('animated zoomIn');
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			break;	
			case 'iValZero2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;	
			}
		break;
		case 'arrSize' :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'arrSize1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
							$('.user-btn').remove(); 
							$('#borderBox1').addClass('z-index1000000');
							transferEffect('#size', "#box1", function() {
								$('#box1').fadeTo(300, 1 ,function() {
									$('#borderBox1').removeClass('z-index1000000');
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
					});
				});
			break;
			case 'arrSize2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"", function() {
						$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
							$('.user-btn').remove(); 
							$('#borderBox2').addClass('z-index1000000');
							transferEffect('#size', "#box2", function() {
								$('#box2').fadeTo(300, 1 ,function() {
									$('#borderBox2').removeClass('z-index1000000');
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
					});
				});
			break;
			}
		break;
		case 'sizeVal_1':
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
		case 'total':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'total11':
				$('.introjs-helperLayer').one("transitionend", function() {
					$('.introjs-tooltip').removeClass('hide');
					$('.introjs-tooltiptext').append('<span id="total2">total = <span id="totalSumIntArray" class="display position"><y>'+
							'<span id="total1" class="display position">total</span> + <span id="arrValue1" class="display position">'+
							'arr[<span id="iDeclaration1" class="display position">i</span>]</span>;</y></span></span>');
					$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="flipEffectTotal()">Next&rarr;</a>');
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
								"value of <y>i</y> by <y>1</y>. <br>Now <y>i = <span id='one' class='position display'>1</span></y>.</li></ul>", function() {
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
									"value of <y>i</y> by <y>2</y>. <br>Now <y>i = <span id='two' class='position display'>2</span></y>.", function() {
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
								"value of <y>i</y> by <y>3</y>. <br>Now <y>i = <span id='three' class='position display'>3</span></y>.", function() {
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
		case 'animationBox' :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'memory':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#animationBox').removeClass('opacity00');
					$("#ob1Details").fadeTo(1000, 1, function() {
						transferEffect("#ob1","#table1", function() {
							$("#table1").fadeTo(100, 1, function() {
								$("#size1").fadeTo(100, 1, function() {
									$("#borderBox1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
										$("#borderBox1").off();
										setTimeout(function() {
											intro.nextStep();
										},1000);
									});
								});
							});
						});
					});
				});
			break;
			case 'memory1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#animationBox').removeClass('opacity00');
					$("#ob2Details").fadeTo(1000, 1, function() {
						//$("#border1").fadeTo(1, 1, function() {
							transferEffect("#ob2","#table3", function() {
								$("#table3").fadeTo(100, 1, function() {
									$("#size2").fadeTo(100, 1, function() {
										$("#borderBox2").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
											$("#borderBox2").off();
											setTimeout(function() {
												intro.nextStep();
											},1000);
										});
									});
								});
							});
						//});
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
					if(intro._direction == 'forward') {
						$('#outputBody').append('<span id="inputNumber1" class="opacity00">Enter 4 integer elements of '+
								'the array : <span id="outputPrintfLine"><div  id="inputChar" '+
								'contenteditable="true" maxlength="4" class="position display input-char"></div></span></span>');
						transferEffect("#enterText", "#inputNumber1", function() {
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
			case "enterValue" :
				//$('#inputChar').removeAttr('disabled').focus();
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#inputChar').attr({contenteditable: 'true', placeholder: 'Enter 4 values'}).focus();
					$("#borderBox").addClass("z-index1000000");
					$('#inputChar').removeAttr('disabled').focus();
					$(".introjs-tooltip").removeClass("hide");
					typing(".introjs-tooltiptext", "Please enter <y>4</y> values with space." , function() {
						$('.introjs-prevbutton').show();
						//$('.introjs-nextbutton, .introjs-prevbutton').show();
						intNumbers('#inputChar');
						charAtEnd("inputChar");
					});
			});
			break;
			case 'enterText2':
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$('#outputBody').append('<br><span id="inputNumber2" class="opacity00">Enter 4 integer elements of '+
								'the array : <span id="outputPrintfLine1"><div  id="inputChar1" '+
								'contenteditable="true" maxlength="5" class="position display input-char1"></div></span></span>');
						transferEffect("#enterText1", "#inputNumber2", function() {
							$("#inputNumber2").removeClass("opacity00");
							setTimeout(function(){
								intro.nextStep();
							},1000);
						});
					} else {
						$("#inputNumber2	").addClass("opacity00");
						setTimeout(function(){
							intro.previousStep();
						},1000);
					}
				});
			break;
			case "enterValue1" :
				//$('#inputChar').removeAttr('disabled').focus();
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#inputChar1').attr({contenteditable: 'true', placeholder: 'Enter 5 values'}).focus();
					$("#borderBox").addClass("z-index1000000");
					$('#inputChar1').removeAttr('disabled').focus();
					$(".introjs-tooltip").removeClass("hide");
					typing(".introjs-tooltiptext", "Please enter <y>5</y> float values with space." , function() {
						$('.introjs-prevbutton').show();
						//$('.introjs-nextbutton, .introjs-prevbutton').show();
						//checking('#inputChar');
						floatNumbers("#inputChar1");
						charAtEnd("inputChar1");
					});
			});
			break;
			case "enterSumInt" :
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						$("#outputBody").append('<br><span id ="inputNumber3" class="opacity00">Sum of integer elements of the array : : <span class="border opacity00 position" id="value11">'
								+ $('#').text() +'');
						transferEffect("#sumArray","#inputNumber3",function() {
							$('#inputNumber3').removeClass('opacity00');
						});
						setTimeout(function () {
							intro.nextStep();
						},1500);
					} else {
						$('#inputNumber3').remove();
						$('#inputNumber3').addClass('opacity00');
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


function intNumbers(selector) {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	var maxNumberOfInputs;
	var maxLengthOfInput;
	$(selector).on("keydown", function(e) {
		maxNumberOfInputs = 4;
		maxLengthOfInput = 2;
		
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
		console.log('this is keup')
		$(".user-btn").remove();
		$('.error-text').remove();
		maxNumberOfInputs = 4;
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
		if (count == 4) {
			if (selector == '#inputChar') {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="inttNumberSplittingFunction()">Next&rarr;</a>');
			/*} else {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal2()">Next&rarr;</a>');
			}*/
			}
		}
	});
}
function inttNumberSplittingFunction() {
	$('#inputChar').attr('contenteditable', false);
	$('.user-btn').remove();
	var splittedText = $('#inputChar').text().split(" ");
	$('#inputChar').html('');
	$.each(splittedText, function(idx, val) {
		if (val.trim().length > 0) {
			$('#inputChar').append('<span class="scanIntValue non-empty">' + val + '</span> ');
			$('.printIntValue').remove();
			$('#outputPrintfLine').append('<span class="printIntValue visibility-hidden">' + val + '</span> ');
		} else {
			$('#inputChar').append(' ');
		}
	});
	$('.scanIntValue').addClass('output-value-circle circle-css');
	$.each(arr, function(idx, val) {
		$('.arrayValue').eq(idx).text(parseInt(val)).parent().addClass("z-index1000000");
		var l = $('#inputChar .non-empty').eq(idx).offset();
		$('.arrayValue').eq(idx).offset({
			"top" : l.top,
			"left" : l.left
		});
		TweenMax.to($('.arrayValue').eq(idx), 1, {top: 0, left : 0, onComplete:function() {
			$(".z-index1000000").removeClass("z-index1000000");
			$('.scanIntValue').removeClass('output-value-circle circle-css');
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		}});
	});
}

function floatNumberSplittingFunction() {
	$("#inputChar1").attr("contenteditable", false);
	$('.user-btn').remove();
	var floatNum = $('#inputChar1').text().split(" ");
	$('#inputChar1').html('');
	$.each(floatNum, function(idx, val) {
		if (val.trim().length > 0) {
			$('#inputChar1').append('<span class="scanFloatValue non-empty">' + val + '</span> ');
			$('.printFloatValue').remove();
			$('#outputPrintfLine1').append('<span class="printFloatValue visibility-hidden">' + val + '</span> ');
		} else {
			$('#inputChar').append(' ');
		}
	});
	
	$('.scanFloatValue').addClass('output-value-circle circle-css');
	$.each(arr, function(idx, val) {
		$('.arrayValue1').eq(idx).text(parseFloat(val)).parent().addClass("z-index1000000");
		var l = $('#inputChar1 .non-empty').eq(idx).offset();
		$('.arrayValue1').eq(idx).offset({
			"top" : l.top,
			"left" : l.left
		});
		TweenMax.to($('.arrayValue1').eq(idx), 1, {top: 0, left : 0, onComplete:function() {
			$(".z-index1000000").removeClass("z-index1000000");
			$('.scanFloatValue').removeClass('output-value-circle circle-css');
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

function floatNumbers(selector) {
	$(selector).on("keydown", function(e) {
		if (arr.length == 5 || arr.length == 0) {
			if (e.keyCode == 32) {
				e.preventDefault();
			}
		}
	});
	
	$(selector).on("keyup", function(e) {
		$('.length-error-text').remove();
		if ($(this).text() == "") {
			$(".introjs-nextbutton").hide();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
			"Please enter an integer, string and a float value each separated by a space.</span>");
		} 
		var givenText = $(this).text();
		var splittedText = givenText.split(" ");
		arr = [];
		
		$.each(splittedText, function(idx, val) {
			if (val != '') {
				arr.push(val);
			}
		});
		if (arr.length == 5) {
			let count = 0;
			for (let i = 0; i < arr.length; i++) {
				if ($.isNumeric(arr[i]) && arr[i].indexOf(".") !== -1) {
					count++;
				}
			}
			if (count == 5) {
				$(".user-btn").remove();
				//$('.introjs-nextbutton, .introjs-prevbutton').show();
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="floatNumberSplittingFunction()">Next&rarr;</a>');
			} else {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'> "
						+"<br/> Please follow the above format.</span>");
				$(".user-btn").remove();
			}
		} else {
			$(".user-btn").remove();
		}
	});
	
}


function flipEffect() {
	$('.user-btn').remove();
	$('.introjs-tooltiptext').append("<br><span id='retnVal' class='position opacity00'>" +
	"<span id='declartion'><span class='position'><y><span id='valueI' class='position' style='display : inline-block;'>i</span> <" +
	" <span id='size11' style='display : inline-block;'>size</span></span></y>;</span> </span>");
	$('.user-btn').remove();
	$('#retnVal').removeClass('opacity00');
	fromEffectWithTweenMax("#sizeVal_1", "#retnVal", function() {
		flipEffectWithTweenMax("#size11", $("#five").text(), function() {
			flipEffectWithTweenMax("#valueI", $("#cup_value").text(), function() {
				if (parseInt($("#valueI").text()) < 5) {
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
	});
}

function flipEffectTotal() {
	$('.user-btn').remove();
	flipEffectWithTweenMax("#total1", $("#cup_value2").text(), function() {
		flipEffectWithTweenMax("#iDeclaration1", $("#cup_value").text(), function() {
			flipEffectWithTweenMax("#arrValue1", $("#value" + id).text(), function() {
				flipEffectWithTweenMax("#totalSumIntArray", Number($("#cup_value2").text()) + Number($("#value" +id).text()), function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					$("#cup_value2").text($("#totalSumIntArray").text());
					id++;
				});
			});
		});
	});
}

/*function flipEffectTotal() {
	$('.user-btn').remove();
	flipEffectWithTweenMax("#total1", $("#cup_value").text(), function() {
		flipEffectWithTweenMax("#iDeclaration1", $("#cup_value").text(), function() {
			flipEffectWithTweenMax("#arrValue1", $("#value" + id).text(), function() {
				totalCount = Number($("#totalSumIntArray").text());
				flipEffectWithTweenMax("#totalSumIntArray", Number(totalCount) + Number($("#value" +id).text()), function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					id++;
				});
			});
		});
	});
}*/






function typing(typingId, typingContent, typingCallbackFunction) {
	var typingSpeed = 0.0000001;
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
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 2);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1 , function() {
	//$(selector2).removeClass("opacity00");
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

