var typingInterval = 5;
var arr = [];
var iVal = 1;
var usageOfGetcharReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function(){
		$("#inputChar, #inputChar1").val("");
		location.reload();
	});
	
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :"#infoDiv",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element :"#preTableDiv",
			intro : "",
			position : 'right',
		}, {
			element :"#class",
			intro : "",
			//tooltipClass: "introjs-tooltip-width-one",
			position : 'right',
		}, {
			element : '#main',
			intro : '',
			position : "right"
		}, {
			element : '#sampleinit',
			intro : "",
			position : "right"
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'addressAnimationDiv',
		}, {
			element : '#s1GetData',
			intro : '',
			position : "right"
		}, {
			element : '#getData',
			intro : "",
			position : "right"
		}, {
			element : '#print',
			intro : '',
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'typeChar',
			tooltipClass : 'hide'
		}, {
			element :"#get",
			intro : "",
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			position : "bottom",
			animateStep : 'checking',
		}, {
			element : '#s2GetData',
			intro : '',
			position : "right"
		}, {
			element : '#getData',
			intro : "",
			position : "right"
		}, {
			element : '#print',
			intro : '',
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'typeChar1',
			tooltipClass: "hide"
		}, {
			element :"#get",
			intro : "",
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			position : 'bottom',
			animateStep : 'checking1',
		}, {
			element : '#s3Sum',
			intro : '',
			animateStep : 's3Sum1',
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}, {
			element : '#memberFunction',
			intro : "",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}, {
			element : '#s3Sum',
			intro : '',
			animateStep : 's3Sum2',
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}, {
			element : '#memFunAdd',
			intro : '',
			//tooltipClass: "introjs-tooltip-width-one",
			position : "right"
		}, {
			element :"#s3Temp",
			intro : "",
			position : "right"
		}, {
			element : '#s3Real',
			intro : '',
			position : "right"
		}, {
			element :"#s3Imag",
			intro : "",
			position : "right"
		}, {
			element : '#return',
			intro : '',
			position : "right"
		}, {
			element :"#addressDiv",
			intro : "",
			animateStep : 'animationDiv',
		}, {
			element : '#printSum',
			intro : '',
			position : "right"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printPreline1',
			tooltipClass: "hide"
		}, {
			element : '#s3PutData',
			intro : '',
			position : "right"
		}, {
			element : '#putData',
			intro : '',
			position : "right"
		}, {
			element : '#print1',
			intro : "",
			
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printPreline2',
			tooltipClass: "hide"
		}, {
			element : '#s3Sub',
			intro : '',
			animateStep : 's3Sub1',
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}, {
			element : '#friendFunction',
			intro : '',
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}, {
			element : '#s3Sub',
			intro : '',
			animateStep : 's3Sub2',
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}, {
			element : '#frndFunSub',
			intro : '',
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}, {
			element :"#s3Temp1",
			intro : "",
			position : "right"
		}, {
			element : '#s3Real1',
			intro : '',
			position : "right"
		}, {
			element :"#s3Imag1",
			intro : "",
			position : "right"
		}, {
			element : '#return1',
			intro : '',
			position : "right"
		}, {
			element :"#addressDiv",
			intro : "",
			animateStep : 'animationDiv',
		}, {
			element : '#printSub',
			intro : '',
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printPreline3',
		}, {
			element : '#s3PutData1',
			intro : '',
			position : "right"
		}, {
			element : '#putData',
			intro : '',
			position : "right"
		}, {
			element : '#print1',
			intro : "",
			position : "right"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printPreline4',
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
		var elementId = targetElement.id;
		if (elementId == "line5") {
			$("#line5").addClass('z-index9999999');
		}
		switch (elementId) {
		case 'infoDiv':
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list").fadeTo(300, 1, function() {
				$('#nextButton1').removeClass("opacity00");
					$('.user-btn').click(function() {
						$('#nextButton1').remove();
						$("#list1").fadeTo(300, 1, function() {
							$("#list11").fadeTo(300, 1, function() {
								$("#list12").fadeTo(300, 1, function() {
									$("#list13").fadeTo(300, 1, function() {
										$('#nextButton').removeClass("opacity00");
										$('.user-btn').click(function() {
											$('#nextButton').remove();
												$("#list2").fadeTo(300, 1, function() {
													$("#list21").fadeTo(300, 1, function() {
														$("#list22").fadeTo(300, 1, function() {
															$("#list23").fadeTo(300, 1, function() { 
																$("#list24").fadeTo(300, 1, function() { 
																	$("#list25").fadeTo(300, 1, function() {
																		$("#list26").fadeTo(300, 1, function() { 
																			$('#nextButton2').removeClass("opacity00");
																				$('.user-btn').click(function() {
																					$('#nextButton2').remove();
																					setTimeout(function () {
																						introjs.nextStep();
																					}, 300);
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
						});
					});
			});
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Let us understand <span class='ct-code-b-yellow'>Operator"+
						" overloading</span> in binary operators.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'class':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#class").removeClass("opacity00");
				typing(".introjs-tooltiptext"," " /*"<pre id='classDef'><span class='ct-white-color'>class<span> <span class='ct-code-b-yellow'>className</span> <span class='ct-white-color'>{<span> </br> " +
						"	<span class='ct-code-b-yellow'>Acess specifier:</span>    <span class='ct-white-color'>// can be private, public and protected</span></br> " +
						"	<span class='ct-code-b-yellow'>Data members;</span>       <span class='ct-white-color'>// Variables to be used</span></br>" +
						"	<span class='ct-code-b-yellow'>Member Functions()</span>{}<span class='ct-white-color'>// Methods to access data members</span> </br>" +
						"}<span class='ct-code-b-yellow'>;</span>			    <span class='ct-white-color'>// Class name ends with a semi colon</span></pre> "*/, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'main':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#main").removeClass("opacity00");
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is"+
						" the operating system call.<ul><li><span class='ct-code-b-yellow'>main()"+
						"</span> is execution starting point for any C++ program.</li></ul>", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'sampleinit':
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 's1GetData':
			$('.introjs-helperLayer').one("transitionend", function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			break;
		case 'getData':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This <span class='ct-code-b-yellow'><span class='ct-code-b-yellow'>getdata()</span>"+
				"</span> member function is used to get data. "
				typing(".introjs-tooltiptext", text, function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'print':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This statement prints the characters stored in <span class='ct-code-b-yellow'>ch</span>. "
				typing(".introjs-tooltiptext", " ", function() {
					$("#inputChar1").removeClass("blinking");
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'get':
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", " ", function() {
					$("#s" + iVal + "AnimationDiv").removeClass("opacity00");
						iVal++;
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
				});
			});
			break;
		case 's2GetData':
			$("#s1Box").removeClass("z-index1000000");
			$('.introjs-helperLayer').one("transitionend", function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			break;
		case 's3Sum':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "s3Sum1" :
			$("#s2Box").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<ul> <li>s3 = s1 + s2;</li>" +
						" <li>Here <span class='ct-code-b-yellow'>s1</span>,"+
						" <span class='ct-code-b-yellow'>s2</span>,"+
						" <span class='ct-code-b-yellow'>s3</span> are"+
						" objects of sample class and also not"+
						" primitive datatypes like <span class='ct-code-b-yellow'>int</span>,"+
						" <span class='ct-code-b-yellow'>float</span>,<span class='ct-code-b-yellow'>"+
						" double</span>, <span class='ct-code-b-yellow'>char</span>.</li><li>We cannot" +
						" simply add two objects and assume that the compiler"+
						" will add up the corresponding member data.</li><li>Objects are user-defined data types"+
						" and the operators will operate only on in-built data types.</li><li>Thus to operate on"+
						" user-defined data types, we overload the operator and tell the compiler"+
						" as to what it should do.</li> On seeing the two operands, the compiler knows"+
						" that + is overloaded and so it goes to the definition of the operator function.</ul>";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			case "s3Sum2" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow'>s3 = s1 + s2;</span><br>"+
					" <ul><li>Here, in the above statement, the object s1 invokes the function operator()"+
					" and the object s2 is used as an argument for the function.</li><li>The above"+
					" statement can also be written as follows."+
					" (The compiler, recognizing the operands as belonging to the"+
					" <b class='ct-code-b-yellow'>sample</b> class, replaces the operator with the"+
					" corresponding operator function:)</li><li><span class='ct-code-b-yellow'>s3 = s1.operator+(s2)</span></li>"+
					" <li>Here, the data members of s1 are passed directly and data members of s2 are passed as an argument.</li>";
					typing(".introjs-tooltiptext",text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			}
			break;
			
		case 'memberFunction':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<ul><li>To overload an operator, a special"+
				" function(<b>operator function</b>) is defined inside the class.</li>" +
				" <li>operator functions are called"+
				" when the corresponding operator i.e '+'  is used.</li>"+
				" For example, when we overload '+' : " +
				" <br><span class='ct-code-b-yellow'>operator+(argument_list)</span>."+
				" <li>Here we have a <span class='ct-code-b-yellow'>sample</span>"+
				" class for which we define an operator+() member function to overload"+
				" the + operator so"+
				" that it adds one complex number to another complex number.</li>"
				" <li>Member function can be called by using class of that object.</li>"+
				" <li>Hence, the called member function is always preceded by the object.</li>";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'memFunAdd':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = " " /*"<pre id='memFun'>The general format for defining an operator function as"+
						"<br>memeber function is :<br>"+
						"<span class='ct-code-b-yellow'>returntype classname:: operator symbol(arguments) {<br>"+
						"		statement 1<br>"+
						"		statemnet 2<br>"+
						"		----------<br>"+
						"		statement n<br>"+
						"}</span></pre>"*/;
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 's3Temp':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 's3Real':
			$('.introjs-helperLayer ').one('transitionend', function() {
				 $("#s3Real").effect( "highlight",{color: 'red'}, 800,function() {
					 addOperator("#s1RealVal", "#s2RealVal","#s3RealVal");
				 });
			});
			break;
		case 's3Imag':
			$('.introjs-helperLayer ').one('transitionend', function() {
				 $("#s3Imag").effect( "highlight",{color: 'red'}, 800,function() {
					 addOperator("#s1ImagVal", "#s2ImagVal", "#s3ImagVal");
				 });
				
			});
			break;
		case 'return':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'printSum':
			$('.introjs-helperLayer ').one('transitionend', function() {
				
				$('.introjs-nextbutton').show();
			});
			break;
		case 's3PutData':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'putData':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'print1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 's3Sub':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "s3Sub1" :
			$("#s2Box").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<ul><li>s3 = s1 - s2;</li>" +
						"<li>Here <span class='ct-code-b-yellow'>s1</span>,"+
						" <span class='ct-code-b-yellow'>s2</span>,"+
						" <span class='ct-code-b-yellow'>s3</span> are"+
						" objects of sample class and also not"+
						" primitive datatypes like <span class='ct-code-b-yellow'>int</span>,"+
						" <span class='ct-code-b-yellow'>float</span>,<span class='ct-code-b-yellow'>"+
						" double</span>, <span class='ct-code-b-yellow'>char</span>.</li><li>We cannot" +
						" simply subtract two objects and assume that the compiler"+
						" will subtract the corresponding member data.</li><li>Objects are user-defined data types"+
						" and the operators will operate only on in-built data types.</li><li>Thus to operate on"+
						" user-defined data types, we overload the operator and tell the compiler"+
						" as to what it should do.</li> <br>On seeing the two operands, the compiler knows"+
						" that - is overloaded and so it goes to the definition of the operator function.</ul>";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			case "s3Sub2" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow'>s3 = s1 - s2;</span><br>"+
					"<ul> <li>Here, in the above statement, the object s1 is used as first argument"+
					" and the object s2 is used as an second argument.</li> <br><li>The above"+
					" statement can also be written as follows."+
					" (The compiler, recognizing the operands as belonging to the"+
					" <b class='ct-code-b-yellow'>sample</b> class, replaces the operator with the"+
					" corresponding operator function:)</li><br><li><span class='ct-code-b-yellow'>s3 = operator-(s1, s2)</span></li>";
					typing(".introjs-tooltiptext",text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			}
			break;
		case 'friendFunction':
			$("#s3Box").removeClass("z-index1000000");
			$("#s3RealVal").text("");
			$("#s3ImagVal").text("");
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text ="Operator overloading is also possible  by using friend"+
				" function.<br> The format is : <br><span class='ct-code-b-yellow'>"+
				" friend returntype operator symbol(arguments)</span><ul><li>This"+
				" is the declaration which is written inside the class.</li><li>The"+
				" friend function can  access private members of class even"+
				" though it is not a member function.</li><li>Friend function has no"+
				" permission to access private members of a class directly.</li>"+
				"<li>However, it can access the private members through objects"+
				" of the same class.</li><li>Both the operands will passed explicitly."+
				" operand to the left of the operator will be passed as the"+
				" first argument and operand to the right as the second argument.</li></ul>";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'frndFunSub':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text ="";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 's3Temp1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 's3Real1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				 $("#s3Real1").effect( "highlight",{color: 'red'}, 800,function() {
					 subOperator("#s1RealVal", "#s2RealVal","#s3RealVal");
				 });
			});
			break;
		case 's3Imag1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#s3Imag1").effect( "highlight",{color: 'red'}, 800,function() {
					subOperator("#s1ImagVal", "#s2ImagVal", "#s3ImagVal");
				 });
			});
			break;
		case 'return1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'printSub':
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 's3PutData1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'putData':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#s3Box").addClass("z-index1000000");
				$('.introjs-nextbutton').show();
			});
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "typeChar" :
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
					
				});
				break;
			case 'checking':
				$("#inputChar").attr("disabled", false);
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing('.introjs-tooltiptext', "Please enter two numbers seperated each with space.", function() {
						$("#inputChar").addClass("blinking");
						$("#inputChar").focus();
						checking("#inputChar");
						charAtEnd("#inputChar");
					});
				});
				break;
			case "typeChar1" :
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					//text = 'printing ' + introjs._introItems[introjs._currentStep].animateStep;
					typing('.introjs-tooltiptext'," ", function() {
						$("#hiddenTypingChar1").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					});
				});
				break;
			case 'checking1':
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					//text = "hai value enter " + introjs._introItems[introjs._currentStep].animateStep; 
					typing('.introjs-tooltiptext', " ", function() {
						$("#outputPrintfLine1").removeClass("opacity00");
						$("#inputChar1").removeClass("opacity00").attr('contenteditable', true).addClass("blinking").focus();
						checking("#inputChar1");
						charAtEnd("#inputChar1");
					});
				});
				break;
			case 'printPreline1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#printLineInConsole').removeClass('opacity00');
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
					
				});
				break;
			case 'printPreline2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					var result = $("#s3RealVal").text() + "+i" + $("#s3ImagVal").text();
					$("#printpreLine2").text(result).addClass('opacity00');
						transferEffect("#print1", "#printpreLine2", function() {	
							var text = '<span class="input-char">' + result + '</span>';
							typing("#printpreLine2", text, function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
						});
					});
				});
				break;
			case 'printPreline3':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#printLineInConsole1').removeClass('opacity00');
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
				break;
			case 'printPreline4':
				$('.introjs-helperLayer ').one('transitionend', function() {
					var result = $("#s3RealVal").text() + "+i" + $("#s3ImagVal").text();
					$("#printpreLine3").text(result).addClass('opacity00');
					transferEffect("#print1", "#printpreLine3", function() {	
						var text = '<span class="input-char">' + result + '</span>';
						typing("#printpreLine3", text, function() {
							$('.introjs-nextbutton').show();
					});
				});
			});
			break;
			}
			break;
		case "addressDiv" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			$("#addressDiv").removeClass("opacity00");
			switch(animateStep) {
			case "addressAnimationDiv" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#addressAnimationDiv").removeClass("opacity00");
					/*TweenMax.to("#tableId", 0.2, {opacity: 1, onComplete: function() {
						typing(".introjs-tooltiptext", "20 bytes are allocated to the array of the variable <span class='ct-code-b-yellow'>ch</span>.", function() {*/
					$(".box-Heading").removeClass("opacity00");
					$("#s1Box, #s2Box, #s3Box").removeClass("opacity00");
					/*$("#s2Box").removeClass("opacity00");
					$("#s3Box").removeClass("opacity00")*/;
					$('.introjs-nextbutton').show();
						/*});
					}});*/
				});
				break;
			case "animationDiv" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-nextbutton').show();
				});
				break;
			}
			break;
		
			
		case "restart":
			$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-tooltipbuttons').addClass("hide");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	
	introjs.start();
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
		maxLengthOfInput = 1;
		if ($(this).text() == "") {
			$('.user-btn').remove();
			$('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
												"Please enter " + maxNumberOfInputs + " numbers and separate each with space.</span>");
		}
		var arr1 = $(this).text().split(" ");
		var count = 0;
		arr = [];
		$.each(arr1, function(idx, val) {
			if (val > 9 || val < 0) {
				$('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
														"Please limit the index " + idx + " number in between 0 and 9 .</span>");
				$('.user-btn').remove();
				
			} else if (val.trim().length > 0) {
				arr.push(val);
				count++;
			}
		});
		if (count == 2) {
			if (selector == '#inputChar') {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal3()">Next&rarr;</a>');
			} else {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal4()">Next&rarr;</a>');
			}
		}
		
	});
}

function storeVal3() {
	$('#inputChar').attr('contenteditable', false);
	$('.user-btn').remove();
	var splittedText = $('#inputChar').text().split(" ");
	$('#inputChar').html('');
	$.each(splittedText, function(idx, val) {
		if (val.trim().length > 0) {
			$('#inputChar').append('<span class="scanfValue non-empty">' + val + '</span> ');
			$('#outputPrintfLine').append('<span class="printfValue visibility-hidden">' + val + '</span> ');
				$('#outputPrintfLine').append('<br/>');
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
			$('.introjs-nextbutton').show();
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
function storeVal4() {
	$('#inputChar1').attr('contenteditable', false);
	$('.user-btn').remove();
	var splittedText = $('#inputChar1').text().split(" ");
	$('#inputChar1').html('');
	$.each(splittedText, function(idx, val) {
		if (val.trim().length > 0) {
			$('#inputChar1').append('<span class="scanfValue1 non-empty">' + val + '</span> ');
			$('#outputPrintfLine1').append('<span class="printfValue1 visibility-hidden">' + val + '</span> ');
				$('#outputPrintfLine1').append('<br/>');
		} else {
			$('#inputChar1').append(' ');
		}
	});
	
	$('.scanfValue1').addClass('output-value-circle circle-css');
	
	$.each(arr, function(idx, val) {
		$('.arrayValue1').eq(idx).text(parseInt(val)).parent().addClass("z-index1000000");;
		var l = $('#inputChar1 .non-empty').eq(idx).offset();
		$('.arrayValue1').eq(idx).offset({
			"top" : l.top,
			"left" : l.left
		});
		TweenMax.to($('.arrayValue1').eq(idx), 1, {top: 0, left : 0, onComplete:function() {
			$(".z-index1000000").removeClass("z-index1000000");
			$('.scanfValue1').removeClass('output-value-circle circle-css');
			$('.introjs-nextbutton').show();
		}});
	});
}

function rotation(selector1, val, callBackFunction) {
	$(selector1).effect( "highlight",{color: '#ffff33'}, 1000);
	TweenMax.to($(selector1), 1, {rotationX : -90, onComplete:function() {
		$(selector1).text(val);
		TweenMax.to($(selector1), 1, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
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

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 1000);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1200 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
} 

function typing(selector, text, callBackFunction) {
	var typingSpeed = 10;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}
function fadeInBounceEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var val;
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500);
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		
		$('#codeDiv').append("<span id='dummy' class='ct-code-b-yellow ct-fonts' style='position: relative; z-index: 99999999;'>" 
			+ $(selector2).text() + "</span>");
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
		
		$(selector2).css('width', $('#dummy').width());
		$(selector2).text($(selector1).text());
		TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
			$(selector2).fadeIn(1000, 0, function() {
				$(selector2).fadeIn(1000, 1, function() {
					$(selector2).css('width', "auto");
					$("#dummy").remove();
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				});
			});
		}
		});
}
function addOperator(selector1, selector2, selector3) {
	 $(".introjs-tooltiptext").append('<span  class="ct-code-b-yellow  opacity00 position" id="s3Re">s3.real = '
			 + '<span id="s1Re" class="position">real<span> <span>+</span> <span id="s2Re" class="position">s2.real</span>;</span>');
	 $('.introjs-tooltip').removeClass("hide");
	 $('#s3Re').removeClass('opacity00');
	 $('#s3Re').removeClass('ct-code-b-yellow');
	 fromEffectWithTweenMax("#s3Real", "#s3Re", function() {
		 $('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
			$('.user-btn').click(function() { 
				$('.user-btn').remove(); 
				$("#s3Re").append('<br>This statement can also be written as '+
						'<br><span id = "s3Re2" class = "position opacity00">s3.real = <span id="tot" class="position">'
						+'<span id="s1Re2" class="displayBlock position">this.real</span><span>+</span> '+
						'<span id="s2Re2" class="position">s2.real</span></span>;</span>');
				$('#s3Re2').removeClass('opacity00');
				fromEffectWithTweenMax("#s3Re", "#s3Re2", function() {
					$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
					$('.user-btn').click(function() { 
						$('.user-btn').remove(); 
						fadeInBounceEffectWithTimelineMax(selector1, "#s1Re2", function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
							$('.user-btn').click(function() { 
								$('.user-btn').remove(); 
								fadeInBounceEffectWithTimelineMax(selector2, "#s2Re2", function() {
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
									$('.user-btn').click(function() { 
										$('.user-btn').remove(); 
										$("#s3Re2").effect( "highlight",{color: 'red'}, 800,function() {
											var t = parseInt($("#s1Re2").text()) + parseInt($("#s2Re2").text());
											rotation('#tot', t, function() {
												$('#s3Div').removeClass('opacity00');
												$(selector3).text($("#tot").text());
												fromEffectWithTweenMax("#tot", selector3, function() {
													$('.introjs-nextbutton').show();
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
 }
function subOperator(selector1, selector2, selector3) {
	$(".introjs-tooltiptext").append('<span  class="ct-code-b-yellow position opacity00" id="s3Re">s3.real = <span id="s1Re" class="position">s1.real<span> - <span id="s2Re" class="position">s2.real</span>;</span>');
	 $('.introjs-tooltip').removeClass("hide");
	 $('#s3Re').removeClass('opacity00');
	 $('#s3Re').removeClass('ct-code-b-yellow');
	 fromEffectWithTweenMax("#s3Real1", "#s3Re", function() {
		 $('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
			$('.user-btn').click(function() { 
				$('.user-btn').remove(); 
				$("#s3Re").append('<br><span id = "s3Re2" class = "position opacity00">s3.real = <span id="tot" class="position"><span id="s1Re2" class="displayBlock position">s1.real</span> <span>-</span> '+
						'<span id="s2Re2" class="position">s2.real</span></span>;</span>');
				$('#s3Re2').removeClass('opacity00');
				fromEffectWithTweenMax("#s3Re", "#s3Re2", function() {
					$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
					$('.user-btn').click(function() { 
						$('.user-btn').remove(); 
						fadeInBounceEffectWithTimelineMax(selector1, "#s1Re2", function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
							$('.user-btn').click(function() { 
								$('.user-btn').remove(); 
								fadeInBounceEffectWithTimelineMax(selector2, "#s2Re2", function() {
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
									$('.user-btn').click(function() { 
										$('.user-btn').remove(); 
										$("#s3Re2").effect( "highlight",{color: 'red'}, 800,function() {
											var t = parseInt($("#s1Re2").text()) - parseInt($("#s2Re2").text());
											rotation('#tot', t, function() {
												$('#s3Div').removeClass('opacity00');
												$(selector3).text($("#tot").text());
												fromEffectWithTweenMax("#tot", selector3, function() {
													$('.introjs-nextbutton').show();
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
	
}
