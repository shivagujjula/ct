var typingInterval = 1;
var iVal = 1;
var tl;
var arr;
var overloadingBinaryMinusAsMemberFunctionReady = function() {
	introGuide();
	tl = new TimelineLite();
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
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element : '#getData',
			intro : "",
			position : "right"
		}, {
			element : '#putData',
			intro : '',
			position : "right"
		}, {
			element : '#main',
			intro : '',
			tooltipClass : 'hide',
			position : "right"
		}, {
			element : '#sampleInit',
			intro : "",
			tooltipClass : 'hide',
			position : "right"
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'addressAnimationDiv',
			tooltipClass : 'hide'
		}, {
			element : '#objGetData',
			intro : '',
			tooltipClass : 'hide',
			position : "right"
		}, {
			element : '#s1GetData',
			intro : '',
			tooltipClass : 'hide',
			position : "right"
		}, {
			element : '#getData',
			intro : "",
			position : "right"
		}, {
			element : '#print',
			intro : '',
			//tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'typeChar',
			tooltipClass : 'hide'
		}, {
			element :"#get",
			intro : "",
			//tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			position : "left",
			animateStep : 'checking',
			tooltipClass : 'hide',
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
			//tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'typeChar1',
			tooltipClass: "hide"
		}, {
			element :"#get",
			intro : "",
			//tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			position : 'left',
			animateStep : 'checking1',
			tooltipClass : 'hide',
		}, {
			element : '#s3Sub',
			intro : '',
			animateStep : 's3Sub1',
			tooltipClass : "hide",
			position : "right"
		}, {
			element : '#memberFunction',
			intro : "",
			tooltipClass : 'hide',
			position : "right"
		}, {
			element :"#s3Temp",
			intro : "",
			position : "right"
		}, {
			element : '#s3Real',
			intro : '',
			tooltipClass : "hide",
			position : "right"
		}, {
			element :"#s3Imag",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		}, {
			element : '#return',
			intro : '',
			position : "right"
		}, {
			element : '#s3Sub',
			intro : '',
			animateStep : 's3Sub2',
			tooltipClass: "hide"
		}, {
			element : '#printSub',
			intro : '',
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printPreline1',
			tooltipClass: "hide"
		}, {
			element : '#s3PutData',
			intro : '',
			tooltipClass: "hide",
			position : "right"
		}, {
			element : '#putData',
			intro : '',
			position : "right"
		}, {
			element : '#print1',
			intro : "",
			//tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printPreline2',
			tooltipClass: "hide"
		},{
			element : '#end',
			intro : '',
			position : "right"
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case 'preTableDiv':
			$("#class").css("opacity", 0);	
			break;
			
		case 'class':
			$("#class, #init, #public, #getData, #putData").css("opacity", 0);	
			break;
			
		case 'main':
			$("#sampleInit").css("opacity", 0);	
			$("#main").css("opacity", 0);	
			break;
			
		case 'sampleInit':
			$("#addressDiv").addClass("opacity00");
			$(".box-Heading, #boxHeading1, #boxHeading2, #boxHeading3, #s1AnimationDiv, #s2AnimationDiv").css("opacity", 0);
			$("#s1Box, #s1RealBox, #s1ImagBox,  #s2Box, #s2RealBox, #s2ImagBox, #s3Box, #s3Div, #s3RealBox, #s3ImagBox").css("opacity", 0);
			$("#s1GetData").css("opacity", 0);	
			$("#s2GetData").css("opacity", 0);	
			break;  
			
		case "addressDiv" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "addressAnimationDiv" :
				$(".box-Heading, #boxHeading1, #boxHeading2, #boxHeading3, #s1AnimationDiv, #s2AnimationDiv").css("opacity", 0);
				$("#s1Box, #s1RealBox, #s1ImagBox,  #s2Box, #s2RealBox, #s2ImagBox, #s3Box, #s3Div, #s3RealBox, #s3ImagBox").css("opacity", 0);
				$("#s1GetData").css("opacity", 0);	
				$("#s2GetData").css("opacity", 0);	
				break;
			case "animationDiv" :
				
				break;
			}
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "typeChar" :
				$("#hiddenTypingChar").addClass("opacity00");
				break;
			case 'checking':
				$("#inputChar").text("");
				$("#s1RealVal, #s1ImagVal").text("");
				break;
			case "typeChar1" :
				$("#hiddenTypingChar1").addClass("opacity00");
				break;
			case 'checking1':
				$("#inputChar1").text("");
				$("#s2RealVal, #s2ImagVal").text("");
				$("#s3Sub").css("opacity", 0);
				$(".introjs-tooltip").removeAttr("style");
				break;
			case 'printPreline1':
				$('#printLineInConsole').addClass('opacity00');
				$('#s3PutData').addClass("opacity00");
				break;
			case 'printPreline2':
				$('#s3PutData').addClass("opacity00");
				break;
			}
			break;
			
		case 'objGetData':
			$("#objGetData").css("opacity", 0);	
			$("#s1GetData").css("opacity", 0);	
			$("#s2GetData").css("opacity", 0);	
			break;
			
		case 's1GetData':
			
			
			break;
			
		case 's2GetData':
			
			break;
			
		case 'getData':
			if (introjs._currentStep == 10) {
				$("#consoleId").addClass("opacity00");
			} 
			break;
			break;
			
		case 'putData':
			if (introjs._currentStep == 4) {
				$("#main").css("opacity", 0);	
			} else if (introjs._currentStep == 32) {
				//$("#hiddenTypingChar1").addClass("opacity00");
			}
			break;
			break;
		
		case 'print':
			if (introjs._currentStep == 11) {
				$("#hiddenTypingChar").addClass("opacity00");
			} else if (introjs._currentStep == 17) {
				$("#hiddenTypingChar1").addClass("opacity00");
			}
			break;
			
		case 'get':
			$('.user-btn').remove();
			if (introjs._currentStep == 13) {
				$("#inputChar").text("");
			} else if (introjs._currentStep == 19) {
				$("#inputChar1").text("");
			}
			break;
		case 's3Sub':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "s3Sub1" :
				$(".introjs-tooltip").removeAttr("style");
				$("#s3Sub").css("opacity", 0);
				$('.introjs-tooltip').css({'min-width' : '310px'});	
				$("#memberFunction").css("opacity", 0);	
				$("#memberFunction").hide();
				break;
			case "s3Sub2" :
				 $('#printSub').addClass("opacity00");
				break;
			}
			break;
		
		case 'memberFunction':
			$('#memberFunction').show();
			$(".introjs-tooltip").removeAttr("style");
			break;
			
		case 's3Temp':
			 $(".introjs-tooltip").removeAttr("style");
			 $("#s3RealVal, #s3ImagVal").text("");
			break;
			
		case 's3Real':
			$('.introjs-tooltip').css({'min-width' : '280px'});	
			 $("#s3RealVal, #s3ImagVal").text("");
			 $(".introjs-tooltip").removeAttr("style");
			break;
			
		case 's3Imag':
			$('.introjs-tooltip').css({'min-width' : '280px'});	
			 $("#s3ImagVal").text("");
			 $(".introjs-tooltip").removeAttr("style");
			break;
			
		case 'return':
			 $(".introjs-tooltip").removeAttr("style");
			break;
			
		case 'printSub':
			//$('#printSub').addClass("opacity00");
			$('#s3Box').addClass("z-index1000000");
			$('#printLineInConsole').addClass('opacity00');
			//$('#s3PutData').addClass("opacity00");
			break;
			
		case 's3PutData':
			//$('#s3PutData').addClass("opacity00");
			break;
			
		case 'print1':
			
			break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 0 && introjs._currentStep != 1) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		
		var elementId = targetElement.id;
		switch (elementId) {
		case 'infoDiv':
			$('#memberFunction').hide();
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$("#list3").fadeTo(300, 1, function() {
						$('#nextButton').removeClass("opacity00");
						$('.user-btn').click(function() {
							$('#nextButton').remove();
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					});
				});
			});
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				var text =  "Let us consider a sample program to overload binary operator " +
							"<span class='ct-code-b-yellow'>-</span> as <span class='ct-code-b-yellow'>member function</span>.";
				typing('.introjs-tooltiptext', text, function() { 
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'class':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass('hide');
				var text = 	"Let us consider a class <span class='ct-code-b-yellow'>Sample</span> "+
							"which contains two data members <span class='ct-code-b-yellow'>real</span>, "+
							"<span class='ct-code-b-yellow'>imag</span> and two public member "+
							"functions <span class='ct-code-b-yellow'>getData()</span> and "+
							"<span class='ct-code-b-yellow'>putData()</span>.";
				typing(".introjs-tooltiptext", text, function() {
					//$("#class, #init, #public, #getData, #putData").fadeTo(300, 1);
					$("#class").fadeTo("slow" , 1, function() {
						$("#init").fadeTo("slow" , 1, function() {
							$("#public").fadeTo("slow" , 1,function() {
								$("#getData").fadeTo("slow" , 1, function() {
									$("#putData").fadeTo("slow" , 1, function() {
										$('.introjs-prevbutton, .introjs-nextbutton').show();
									});
								});
							});
						});
					});
				});
			});
			break;
		case 'main':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass('hide');
				var text = 	"<span class='ct-code-b-yellow'>main()</span> is the starting point of execution.";
				typing(".introjs-tooltiptext", text, function() {
					$("#main").fadeTo("slow" , 1, function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				});
			});
			break;
		case 'sampleInit':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass('hide');
				var text = 	"Let us create three objects to class <span class='ct-code-b-yellow'>Sample</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#sampleInit").fadeTo("slow" , 1, function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				});
			});
			break;  
		case 'objGetData':
			$('.introjs-helperLayer').one("transitionend", function() {
				$(".introjs-tooltip").removeClass('hide');
				var text = 	"Now read the <span class='ct-code-b-yellow'>real</span> and " +
							"<span class='ct-code-b-yellow'>imag</span> values of " +
							"<span class='ct-code-b-yellow'>s1</span> and <span class='ct-code-b-yellow'>s2</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#objGetData").fadeTo("slow" , 1, function() {
						$("#s1GetData").fadeTo("slow" , 1, function() {
							$("#s2GetData").fadeTo("slow" , 1,function() {
								$('.introjs-prevbutton, .introjs-nextbutton').show();
							});
						});
					});
				});
			});
			break;
		case 's1GetData':
			$('.introjs-helperLayer').one("transitionend", function() {
				$(".introjs-tooltip").removeClass('hide');
				var text = 	"The member function <span class='ct-code-b-yellow'>getData()</span> " +
							"is called by the  object <span class='ct-code-b-yellow'>s1</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#s1GetData").fadeTo("slow" , 1, function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				});
			});
			break;
		case 's2GetData':
			$('.introjs-helperLayer').one("transitionend", function() {
				$(".introjs-tooltip").removeClass('hide');
				var text = 	"The member function <span class='ct-code-b-yellow'>getData()</span> " +
							"is called by the  object <span class='ct-code-b-yellow'>s2</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#s2GetData").fadeTo("slow" , 1, function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				});
			});
			break;
		case 'getData':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'>getData()</span>"+
						   " is used to read the data members <span class='ct-code-b-yellow'>real</span>"+
				           " and <span class='ct-code-b-yellow'>imag</span>. "
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
		case 'putData':
			$('.introjs-helperLayer ').one('transitionend', function() {
			//$("#s3Box").addClass("z-index1000000");
				var text = 	"The member function <span class='ct-code-b-yellow'>putData()</span>"+
							"</span> is used to print the data members <span class='ct-code-b-yellow'>real</span>"+
							" and <span class='ct-code-b-yellow'>imag</span> values of complex numbers. ";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
		case 'print':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext", text, function() {
					$("#inputChar1").removeClass("blinking");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'get':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This statement is used to extract input from keyboard.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 's3Sub':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "s3Sub1" :
			$(".introjs-tooltip").css("min-width", "310px");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass('hide');
				var text = "Now find out the addition of two objects <span class='ct-code-b-yellow'>s1</span> "+
							"and <span class='ct-code-b-yellow'>s2</span>, store the result in " +
							"<span class='ct-code-b-yellow'>s3</span>.<br>" +
							"<span class='ct-code-b-yellow'>s3 = s1 - s2;</span><br>" +
							"It will call like <span class='ct-code-b-yellow'>s3 = s1.operator -(s2);</span>;";
				typing(".introjs-tooltiptext",text, function() {
					$("#s3Sub").fadeTo("slow" , 1,function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			});
			break;
			case "s3Sub2" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == 'backward') {
						$('#s3Box').removeClass("z-index1000000");
						setTimeout(function() {
							introjs.previousStep();
						}, 500);
					} else{
						$('#s3Box').addClass("z-index1000000");
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					}
				});
				break;
			}
			break;
		case 'memberFunction':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass('hide');
				var text = 	"Here,the object <span class='ct-code-b-yellow'>s1</span> " +
							"invokes the function operator() and the object <span class='ct-code-b-yellow'>s2</span> " +
							"is used as an argument for the function ."; 
				typing(".introjs-tooltiptext",text, function() {
					tl.to("#memberFunction", 1, {opacity: 1, onComplete: function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					}});
				});
			});
			break;
		case 's3Temp':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Here, <span class='ct-code-b-yellow'>s3</span> is an object of sample is created.";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
		case 's3Real':
			$(".introjs-tooltip").css("min-width", "280px");
			$('.introjs-helperLayer ').one('transitionend', function() {
				 $("#s3Real").effect( "highlight",{color: 'red'}, 800,function() {
					 $(".introjs-tooltip").removeClass('hide');
					 subOperator("#s1RealVal", "#s2RealVal","#s3RealVal");
				 });
			});
			break;
		case 's3Imag':
			$(".introjs-tooltip").css("min-width", "280px");
			$('.introjs-helperLayer ').one('transitionend', function() {
				 $("#s3Imag").effect( "highlight",{color: 'red'}, 800,function() {
					 $(".introjs-tooltip").removeClass('hide');
					 subOperator1("#s1ImagVal", "#s2ImagVal", "#s3ImagVal");
				 });
				
			});
			break;
		case 'return':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "It returns the value of s3.";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
		case 'printSub':
			$("#s3Box").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#printSub').removeClass("opacity00");
				$(".introjs-tooltip").removeClass('hide');
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 's3PutData':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass('hide');
				$('#s3PutData').removeClass("opacity00");
				var text = 	"The member function <span class='ct-code-b-yellow'>putData()</span> " +
							"is called by the  object <span class='ct-code-b-yellow'>s3</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
		case 'print1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'consoleId':
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "typeChar" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#hiddenTypingChar").removeClass("opacity00");
					timeOut();
				});
				break;
			case 'checking':
				$("#inputChar").removeAttr("disabled");
				$('.user-btn').remove();
				$('#inputChar').attr('contenteditable', true);
				$('.introjs-prevbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$(".introjs-tooltip").removeClass('hide');
					typing('.introjs-tooltiptext', "Enter two numbers seperated each with space.", function() {
						$("#inputChar").addClass("blinking").focus();
						checking("#inputChar");
						charAtEnd("inputChar");
					});
				});
				break;
			case "typeChar1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#hiddenTypingChar1").removeClass("opacity00");
					timeOut();
				});
				break;
			case 'checking1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$(".introjs-tooltip").removeClass('hide');
					typing('.introjs-tooltiptext', "Enter two numbers seperated each with space.", function() {
						$("#outputPrintfLine1").removeClass("opacity00");
						$("#inputChar1").removeClass("opacity00").attr('contenteditable', true).addClass("blinking").focus();
						checking("#inputChar1");
						charAtEnd("inputChar1");
					});
				});
				break;
			case 'printPreline1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#printLineInConsole').removeClass('opacity00');
					timeOut();
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
							}, 500);
						});
					});
				});
				break;
			}
			break;
		case "addressDiv" :
			$("#addressDiv").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "addressAnimationDiv" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							$("#addressAnimationDiv").addClass("opacity00");
							$("#s1GetData").css("opacity", 0);	
							$("#s2GetData").css("opacity", 0);	
							introjs.previousStep();
						}, 1000);
					} else {
						$("#addressAnimationDiv").removeClass("opacity00");
						$("#s1, #real").addClass("blinking-white");
						tl.to(".box-Heading, #boxHeading1, #s1AnimationDiv, #s1Box, #s1RealBox", 1, {opacity: 1, onComplete: function() {
							$("#s1, #real").removeClass("blinking-white");
							$("#s1, #imag").addClass("blinking-white");
							tl.to(" #s1ImagBox", 1, {opacity: 1, onComplete: function() {
								$("#s1, #imag").removeClass("blinking-white");
								$("#s2, #real").addClass("blinking-white");
								tl.to("#boxHeading2, #s2Box, #s2AnimationDiv, #s2RealBox", 1, {opacity: 1, onComplete: function() {
									$("#s2, #real").removeClass("blinking-white");
									$("#s2, #imag").addClass("blinking-white");
										tl.to("#s2ImagBox", 1, {opacity: 1, onComplete: function() {
											$("#s2, #imag").removeClass("blinking-white");
											$("#s3, #real").addClass("blinking-white");
											tl.to("#boxHeading3, #s3Box, #s3Div, #s3RealBox", 1, {opacity: 1, onComplete: function() {
												$("#s3, #real").removeClass("blinking-white");
												$("#s3, #imag").addClass("blinking-white");
												tl.to("#s3ImagBox", 1, {opacity: 1, onComplete: function() {
													$("#s3, #imag").removeClass("blinking-white");
												setTimeout(function () {
													introjs.nextStep();
												}, 500);
											}});
										}});
									}});
								}});
							}});
						}});
					}	
				});
				break;
			}
			break;
			
		case 'end':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the end of the main() function where the program execution ends.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
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
function timeOut() {
	if (introjs._direction == 'backward') {
		setTimeout(function() {
			introjs.previousStep();
		}, 1000);
	} else{
		setTimeout(function() {
			introjs.nextStep();
		}, 1000);
	}
}

function checking(selector) {
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	var maxNumberOfInputs;
	var maxLengthOfInput;
	$(selector).on("keydown", function(e) {
		$('.introjs-prevbutton').hide();
		maxNumberOfInputs = 2;
		maxLengthOfInput = 1;
		arr = [];
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
		var max = $(this).attr("maxlength");
		if ($(this).text().split("").length > max) {
			//$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>String length to 3.</span>");
			e.preventDefault();
		} 
	});
	
	
	$(selector).on("keyup", function(e) {
		$('.introjs-prevbutton').hide();
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
				$(".introjs-nextbutton").hide();
				
			} else if (val.trim().length > 0) {
				arr.push(val);
				count++;
			}
		});
		if (count == 2 && arr1.length == 2) {
			if (selector == '#inputChar') {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal3()">Next&rarr;</a>');
				$('.introjs-prevbutton').show();
			} else {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal4()">Next&rarr;</a>');
				$('.introjs-prevbutton').show();
			}
		}
		
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

function storeVal3() {
	$('#inputChar').attr('contenteditable', false);
	$('.user-btn').remove();
	$('.introjs-prevbutton').hide();
	var splittedText = $('#inputChar').text().split(" ");
	$('#inputChar').html('');
	$.each(splittedText, function(idx, val) {
		if (val.trim().length > 0) {
			$('#inputChar').append('<span class="scanfValue non-empty">' + val + '</span> ');
			$('.printfValue').remove();
			$('#outputPrintfLine').append('<span class="printfValue visibility-hidden">' + val + '</span> ');
			//$('#outputPrintfLine').append('<br/>');
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
function storeVal4() {
	$('#inputChar1').attr('contenteditable', false);
	$('.user-btn').remove();
	$('.introjs-prevbutton').hide();
	var splittedText = $('#inputChar1').text().split(" ");
	$('#inputChar1').html('');
	$.each(splittedText, function(idx, val) {
		if (val.trim().length > 0) {
			$('#inputChar1').append('<span class="scanfValue1 non-empty">' + val + '</span> ');
			$('.printfValue1').remove();
			$('#outputPrintfLine1').append('<span class="printfValue1 visibility-hidden">' + val + '</span> ');
			//$('#outputPrintfLine1').append('<br/>');
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
function transferEffect1(selector1, selector2, callBackFunction) {
	$(selector1).addClass("circle-css").effect( "highlight",{color: '#fff'}, 1000);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer-custom" }, 1200 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("circle-css")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
} 

function typing(selector, text, callBackFunction) {
	var typingSpeed = 1;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	})
}
function fadeInBounceEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var val;
	$(selector1).parent().addClass("z-index1000000").effect( "highlight",{color: 'blue'}, 500);
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		
		$('#codeDiv').append("<span id='dummy' class='ct-code-b-yellow ct-fonts' style='position: absolute; z-index: 99999999;'>" 
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
						$(selector1).parent().removeClass("z-index1000000")
						callBackFunction();
					}
				});
			});
			}
		});
}
function subOperator(selector1, selector2, selector3) {
	$(".introjs-tooltiptext").append('<span  class="ct-code-b-yellow opacity00" id="s3Re">s3.real = '
			 + '<span id="s1Re">real</span> <span>-</span> <span id="s2Re">s2.real</span>;</span>');
	 $('.introjs-tooltip').removeClass("hide");
	 $('#s3Re').removeClass('opacity00');
	 fromEffectWithTweenMax("#s3Real", "#s3Re", function() {
		$("#s3Re").append('<br><span id="s3Re2" class = "ct-code-b-yellow position opacity00">s3.real = '
				+'<span id="tot" class="position"> <span id="s1Re2" class="position">this.real</span> <span>-</span> '+
				'<span id="s2Re2" class="position">s2.real</span></span>;</span>');
		$('#s3Re2').removeClass('opacity00');
		fromEffectWithTweenMax("#s3Re", "#s3Re2", function() {
			fadeInBounceEffectWithTimelineMax(selector1, "#s1Re2", function() {
				fadeInBounceEffectWithTimelineMax(selector2, "#s2Re2", function() {
					$("#s3Re2").effect( "highlight",{color: 'red'}, 800,function() {
						var t = parseInt($("#s1Re2").text()) - parseInt($("#s2Re2").text());
						rotation('#tot', t, function() {
							$(selector3).text($("#tot").text()).addClass("opacity00");
							$('#s3Box').addClass("z-index1000000");
							transferEffect1("#tot", selector3, function() {
								$('#s3Box').removeClass("z-index1000000");
								$('.introjs-prevbutton, .introjs-nextbutton').show();
							});
						});
					});
				});
			});
		});
	 });
}
function subOperator1(selector1, selector2, selector3) {
	$(".introjs-tooltiptext").append('<span  class="ct-code-b-yellow opacity00" id="s3Re">s3.imag = '
			 + '<span id="s1Re">imag</span> <span>-</span> <span id="s2Re">s2.imag</span>;</span>');
	 $('.introjs-tooltip').removeClass("hide");
	 $('#s3Re').removeClass('opacity00');
	 fromEffectWithTweenMax("#s3Imag", "#s3Re", function() {
		$("#s3Re").append('<br><span id="s3Re2" class = "ct-code-b-yellow position opacity00">s3.imag = '
				+'<span id="tot" class="position"> <span id="s1Re2" class="position">this.imag</span> <span>-</span> '+
				'<span id="s2Re2" class="position">s2.imag</span></span>;</span>');
		$('#s3Re2').removeClass('opacity00');
		fromEffectWithTweenMax("#s3Re", "#s3Re2", function() {
			fadeInBounceEffectWithTimelineMax(selector1, "#s1Re2", function() {
				fadeInBounceEffectWithTimelineMax(selector2, "#s2Re2", function() {
					$("#s3Re2").effect( "highlight",{color: 'red'}, 800,function() {
						var t = parseInt($("#s1Re2").text()) - parseInt($("#s2Re2").text());
						rotation('#tot', t, function() {
							$(selector3).text($("#tot").text()).addClass("opacity00");
							$('#s3Box').addClass("z-index1000000");
							transferEffect1("#tot", selector3, function() {
								$('#s3Box').removeClass("z-index1000000");
								$('.introjs-prevbutton, .introjs-nextbutton').show();
							});
						});
					});
				});
			});
		});
	});
}