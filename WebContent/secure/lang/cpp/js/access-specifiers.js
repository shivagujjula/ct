var introjs;
var typingSpeed = 10;
var arr = [];

var accessSpecifier = function() {
	introGuide();
  	$("body").keydown(function(e) {
    	if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
 	$("#restart").click(function() {
 		location.reload();
 	});
		
function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick	: false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [{
			element : "#demoTitle",
			intro : "",
			position : "right"
		},{
			element : "#informationDiv", 
			intro : "",
			animateStep : "first",
			tooltipClass : 'hide'
			
		},{
			element : "#preBody", 
			intro : "",
			position : "right"
		},{
			element : "#class",
			intro : "",
			position : "right"  
		},{
			element : "#variable",
			intro : "",
			animateStep : "first",
			position : "right"  
		},{
			element : "#method1", 
			intro : "",
			position : "right"
		},{
			element : "#main",
			intro : "",
			position : "right"  
		},{
			element : "#object1",
			intro : "",
			position : "right"  
		},{
			element : "#animationBox",
			intro : '',
			animateStep : 'first',
			position : "bottom" 
		},{
			element : "#variable",
			intro : "",
			animateStep : "last",
			tooltipClass : 'hide'
		},{
			element : "#animationBox",
			intro : '',
			animateStep : 'second',
			position : "bottom" 
		},{
			element : "#funcCall",
			intro : "",
			position : "right"  
		},{
			element : "#outputBody", 
			intro : "",
			animateStep : "out1",
			position : "right"  
		},{
			element : "#private", 
			intro : "",
			position : "right"  
		},{
			element : "#informationDiv", 
			intro : "",
			animateStep : "li4",
			tooltipClass : 'hide'
		},{
			element : "#preBody1",
			intro : "",
			position : "right"    
		},{
			element : "#class1",
			intro : "",
			position : "right" 
		},{
			element : "#private1",
			intro : "",
			position : "right"
		},{
			element : "#public",
			intro : "",
			position : "right" 
		},{
			element : "#main1",
			intro : "",
			position : "right"
		},{
			element : "#obj2",
			intro : "",
			position : "right"
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : "boxfirst",
			position : "bottom"  
			
		},{
			element : "#variable2",
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : "#animationBox2",
			intro : '',
			animateStep : "boxsecond",
			position : "bottom"  
		},{
			element : "#areaVar",
			intro : '',
			tooltipClass : 'hide'
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : "boxthird",
			position : "bottom"  
			
		},{
			element : "#funcCall2",
			intro : "",
			position : "right" 
		},{
			element : "#multiply2", 
			intro : "",
			position : "right" 
		},{
			element : "#read",
			intro : "",
			position : "right" 
		},{
			element : "#read1",
			intro : "",
			position : "right" 
		},{
			element : "#console1",
			intro : "",
			position : "right" 
		},{
			element : "#outputBody",
			intro : "",
			animateStep : "out2",
			tooltipClass : "hide"
		},{
			element : "#console2",  
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#input1",  
			intro : "",
			position : "right" 
		},{
			element : "#outputBody",
			intro : "",
			animateStep : "out3",
			position : "right"  
		},{
			element : "#area",  
			intro : "",
			position : "right" 
		},{
			element : "#console3",  
			intro : "",
			position : "right" 
		},{
			element : "#outputBody",
			intro : "",
			animateStep : "out4",
			tooltipClass : "hide"
		},{
			element : "#console4",  
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#console5",  
			intro : "",
			position : "right"
		},{
			element : "#outputBody",
			intro : "",
			animateStep : "out5",
			position : "right"
		},{
			element : "#informationDiv",  
			intro : "",
			animateStep : "li5",
			position : "bottom"
		},{
			element : "#restart", 
			intro : "",
			position : "right"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		introjs.refresh();
		
		switch (elementId) {
		case  "demoTitle" :
			var text = "Let us learn about <span class='ct-code-b-yellow'>Access specifiers</span>.";
			typing($('.introjs-tooltiptext'),text,function() {
				$('.introjs-nextbutton').show();
			});
		break;
		case "informationDiv" :
			introjs.refresh();
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			$('#informationDiv').removeClass("opacity00");
			switch(animateStep) {
			case "first":
			$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#li").fadeTo(300, 1, function() {
								$("#ul1").fadeTo(300, 1, function() {
									$("#ul2").fadeTo(300, 1, function() {
										$("#ul3").fadeTo(300, 1, function() {
											$("#nextButton1").fadeTo(300, 1, function() {
												$("#nextButton1").click(function() {
													$('#nextButton1').remove();
													$("#li2").fadeTo(300,1, function() {
														$("#nextButton2").fadeTo(300, 1, function() {
															$("#nextButton2").click(function() {
																$('#nextButton2').remove();
																$("#li3").fadeTo(300, 1, function() {
																	$("#nextButton3").fadeTo(300, 1, function() {
																		$("#nextButton3").click(function() {
																			$('#nextButton3').remove();
																			introjs.nextStep();
																			
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
		case "li4" :
			/*$("#informationDiv").removeClass("z-index1000000");*/
			$("#preBody, #animationBox").hide();
			$("#outputBody").addClass("opacity00");
			$("#err").hide();
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#li4").fadeTo(300, 1, function() {
					$("#nextButton4").fadeTo(300, 1, function() {
						$("#nextButton4").click(function() {
							$('#nextButton4').remove();
							introjs.nextStep();
						});
					});
				});
			});
			$("#preBody1").removeClass("hide");
		break;
		case "li5" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#li5").fadeTo(300, 1, function() {
					var text = "<span class='ct-code-b-yellow'>Protected access</span> members can be used in child class.";
					typing($('.introjs-tooltiptext'), text, function() { 
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
			}
			break;
		case "preBody" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
		//	$("#informationDiv").addClass("z-index1000000");
			$('#preBody').removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here let us see how <span class='ct-code-b-yellow'>" +
							"access specifiers</span> are important.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "class" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#preBody').removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "class <span class='ct-code-b-yellow'>Area</span> which is "+
							"<span class='ct-code-b-yellow'>global</span> class has " +
							"<span class='ct-code-b-yellow'>data members</span> and "+
							"<span class='ct-code-b-yellow'>member functions</span>.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "variable" :
			introjs.refresh();
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "first" :
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here data member <span class='ct-code-b-yellow'>len</span> is "+
						   "<span class='ct-code-b-yellow'>private</span>, since there is no "+
						   "<span class='ct-code-b-yellow'>access specifier</span> specified.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton').show();
				});
			});
			break;
			case "last":
				introjs.refresh();
				$("#object1").removeClass('z-index1000000');
				$('.introjs-helperLayer').one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep();
					},1500);
				});
				break; 
			}
			break;
		case "method1" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "member function <span class='ct-code-b-yellow'>sqr</span> is also " + 
							"<span class='ct-code-b-yellow'>private</span> by default, since there "+
							"is no <span class='ct-code-b-yellow'>access specifier</span> specified.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "main" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "In <span class='ct-code-b-yellow'>main</span> method";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton').show();
				});
			});
			break;		
		case "object1" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "declaring <span class='ct-code-b-yellow'>obj1</span> object of "+
							"class <span class='ct-code-b-yellow'>Area</span>.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton').show();
					
				});
			});
			
			break;
		case "animationBox" :
			$("#animationBox").removeClass("opacity00");
			$('#preBody').removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "first" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#object1').addClass('z-index1000000');
					$("#s1").removeClass("opacity00").addClass("animated zoomIn").one('animationend',function() {
						$("#borderBox").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							var text = "Memory is allocated when object <span class='ct-code-b-yellow'>obj1</span> is declared.";
								typing($('.introjs-tooltiptext'),text,function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				break;
			case "second" :
				$('.introjs-helperLayer').one('transitionend',function() {
					$("#animationBox").removeClass("opacity00");
					$("#variable").addClass('z-index1000000');
						$("#boxParent").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							transferEffect("#variable", "#boxParent", function() {
								$("#one").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
									typing('.introjs-tooltiptext',"memory is allocated for variable <span class='ct-code-b-yellow'>len</span>.", function() {
										
										$('.introjs-nextbutton').show();
									});
								});
							});
						});
					});
				break;
			}
			break;
		case "funcCall" :
			$(".introjs-nextbutton, introjs-prevbutton").hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "when the function call of <span class='ct-code-b-yellow'>sqr(20)</span> through "+
							"<span class='ct-code-b-yellow'>obj1</span>.";
				typing($('.introjs-tooltiptext'), text, function() { 
					
					$('.introjs-nextbutton').show();
				});
			});
			 break;
		case "outputBody" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputBody").removeClass("opacity00");
				introjs.refresh();
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				if (animateStep == "out1") {
					$("#outDiv").append("<div id='err'>sample.cpp: In function <b class ='ct-code-b-yellow'>int main()</b> : <br>"+
							"sample.cpp: <b class ='warning-color'>error :</b> int <b class ='ct-code-b-yellow'>Area</b>::"+
							"<b class ='ct-code-b-yellow'>sqr(int)</b> is private <br>int " +
							"<b class ='ct-code-b-yellow'>sqr</b>(int num) { <br>sample.cpp: " +
							"<b class ='warning-color'>error :</b> within this context<br>" +
							"obj1.<b class ='ct-code-b-yellow'>sqr</b>(20);</div>");
					var text =	"It shows <b class ='warning-color'>compile time error</b> that  <b class ='ct-code-b-yellow'>sqr</b> "+
								"is <b class ='ct-code-b-yellow'>private</b>.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
					});
				}
				if (animateStep == "out2") {
					$("#outDiv").append('<span id ="inputNumber">Enter length and breadth  : <span id="outputPrintfLine"><div  id="inputChar" '+
										'contenteditable="true" maxlength="2" class="position input-char"></div></span></span>');
					setTimeout(function() {
						introjs.nextStep();
					},1500);
				}
				if (animateStep =="out3") {
					$('#inputChar').attr({contenteditable: 'true', placeholder: 'Enter 2 values'});
					$("#borderBox1").addClass("z-index1000000");
					$('#inputChar').removeAttr('disabled').focus();
					enterTwoValues('#inputChar')
					charAtEnd("inputChar");
						typing(".introjs-tooltiptext","<span id='please1'><span id='please'>Please enter two values<span></span>", 10, "",function() {
					});
				}
				if (animateStep == "out4") {
					$("#outDiv").append(' <span id ="outputNumber">The area of rectangle is : <span class="border opacity00 position" id="value1">'
					+ $('#box4').text() + '</span></span><br>'); 
					setTimeout(function() {
						introjs.nextStep();
					},1500)
				}
				if (animateStep == "out5") {
					$("#box4").css("zIndex","1000080").effect( "highlight",{color: 'red'}, 200);
					transferEffect("#box4","#value1", function() {
						$("#value1").removeClass("opacity00");
						$("#box4").addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 200);
						$("#animationBox2, #borderBox1, .box-border2").removeClass("z-index1000000");
						var text = "displays value of <span class='ct-code-b-yellow'>area</span> in output console.";
						typing($('.introjs-tooltiptext'), text, function() { 
							$('.introjs-nextbutton').show();
						});
					});
				}
			});
			break;
		case "private" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "since sqr is <span class='ct-code-b-yellow'>private</span> and <span class='ct-code-b-yellow'>sqr</span> "+
							"function cannot be accessed outside of the class <span class='ct-code-b-yellow'>Area</span> and this "+
							"concept is called  <span class='ct-code-b-yellow'>data hiding</span>.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "preBody1" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			 $("#preBody1").removeClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here we discuss about <span class='ct-code-b-yellow'>public access</span> specifier.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "class1":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = 	"Here we are defining class <span class='ct-code-b-yellow'>Area</span> which has "+
							"member functions and data members as <span class='ct-code-b-yellow'>public</span> "+
							"and <span class='ct-code-b-yellow'>private</span>.";
				typing($('.introjs-tooltiptext'), text, function() { 
					//$('.introjs-prevbutton').show();
					$('.introjs-nextbutton').show();
				});
			});
			break;	
		case "private1":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here data members <span class='ct-code-b-yellow'>len</span>, <span class='ct-code-b-yellow'>"+
							"bred</span> and member function <span class='ct-code-b-yellow'>read()</span> are specified "+
							"as <span class='ct-code-b-yellow'>private</span>.";
				typing($('.introjs-tooltiptext'), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;	
		case "public":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here data members <span class='ct-code-b-yellow'>area</span> and member function "+
							"<span class='ct-code-b-yellow'>rect()</span> are specified as <span class='ct-code-b-yellow'>public</span>.";
				typing($('.introjs-tooltiptext'), text, function() { 
					
					$('.introjs-nextbutton').show();
				});
			});
			break;	
		case "main1":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "During the execution of <span class='ct-code-b-yellow'>main()</span> method.";
				typing($('.introjs-tooltiptext'), text, function() {
					
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "obj2":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here declaring <span class='ct-code-b-yellow'>obj</span> for class <span class='ct-code-b-yellow'>Area</span>.";
				typing($('.introjs-tooltiptext'), text, function() { 
					
					$('.introjs-nextbutton').show();
				});
			});
			$("#animationBox2").removeClass("hide");
			break;	
		case "animationBox2" :
			introjs.refresh();
			//$("#animationBox2").removeClass("opacity00")
			$('.introjs-nextbutton').hide();
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "boxfirst" :
			$('.introjs-helperLayer').one('transitionend',function() {
				$("#obj2").addClass('z-index1000000');
					$("#s2").removeClass("opacity00").addClass("animated zoomIn").one('animationend',function() {
					$("#borderBox1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						typing($('.introjs-tooltiptext'),"Memory is allocated when object <span class='ct-code-b-yellow'>obj</span> "+
								"is declared for class <span class='ct-code-b-yellow'>Area</span>.",function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
			break;
			case "boxsecond" :
				$('#variable2').addClass('z-index1000000');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#boxParent2').removeClass("opacity00").addClass('animated zoomIn').one('animationend', function() {
						transferEffect('#var1','#boxParent2', function() {
							$("#three").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								$('#boxParent3').removeClass("opacity00").addClass('animated zoomIn').one('animationend', function() {
									transferEffect("#bred", "#boxParent3", function() {
										$("#four").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
											typing('.introjs-tooltiptext',"here <span class='ct-code-b-yellow'>len</span> and "+
													"<span class='ct-code-b-yellow'>bred</span> are <span class='ct-code-b-yellow'>private"+
													"</span> members and can be accessed only inside <span class='ct-code-b-yellow'>class</span>.", function() {
												$('.introjs-nextbutton').show();
											});				
										});			
									});							
								});		
							});
						});
					});
				});
			break;
			case "boxthird" :
				$('#areaVar').addClass('z-index1000000');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#boxParent4').removeClass("opacity00").addClass('animated zoomIn').one('animationend', function() {
						transferEffect("#areaVar", "#boxParent4", function() {
							$("#five").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								typing('.introjs-tooltiptext',"here <span class='ct-code-b-yellow'>area</span> "+
										"is <span class='ct-code-b-yellow'>public</span> member and can be accessed "+
										"outside <span class='ct-code-b-yellow'>class</span>", function() {
										$('.introjs-nextbutton').show();
								});
							});
						});
					});				
				});			
			break;
		}
			break;
		case "variable2":
			$('.introjs-helperLayer').one('transitionend',function() {
				setTimeout(function() {
					introjs.nextStep();
				},500);
			});
			break;
		case "areaVar":
			$('#variable2').removeClass('z-index1000000');
			$('.introjs-helperLayer').one('transitionend',function() {
					setTimeout(function() {
						introjs.nextStep();
					},500);
			});
			break;
		case "funcCall2":
			$("#obj2").removeClass('z-index1000000');
			$('#areaVar').removeClass('z-index1000000');
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "calling the function <span class='ct-code-b-yellow'>rect()</span> through object "+
							"<span class='ct-code-b-yellow'>obj</span>, it can be accessed directly since it "+
							"is <span class='ct-code-b-yellow'>public</span> member.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "multiply2":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here in function definition of <span class='ct-code-b-yellow'>rect()</span>.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "read" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here calling the <span class='ct-code-b-yellow'>read()</span> function which "+
							"is a <b class='ct-code-b-yellow'>private</b> member function and can be accessed only in class "+
							"<span class='ct-code-b-yellow'>Area</span>."; 
					typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "read1" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "During execution of <span class='ct-code-b-yellow'>read()</span> function.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "console1" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>cout</span> displays this statement in console.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "console2" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				setTimeout(function() {
					introjs.nextStep();
				},1500);
				
			});
			break;
			case "input1" :
				introjs.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow'>cin</span> uses to store the values "+
								"which you enter into <span class='ct-code-b-yellow'>len</span> and "+
								"<span class='ct-code-b-yellow'>bred</span>.";
					typing($('.introjs-tooltiptext'), text, function() { 
						$('.introjs-nextbutton').show();
					});
				});
				break;
		case "area" :
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = " ";
				typing($('.introjs-tooltiptext'), text, function() { 
					$(".introjs-tooltiptext").append("<b class='ct-code-b-yellow opacity00' id='areamul'>area = len * bred</b><br><br>");
					$("#areamul").fadeTo(200, 1);
					
					$(".introjs-tooltiptext").append("<b class='ct-code-b-yellow'>"+
							"<div id='return'>area = <span id='mul'><span id='len1'>len"+
							"</span> * <span id='len2'>bred</span></span></div></b><br>");
					$("#return").fadeTo(200, 1);
					var l1 = $("#return").offset();
					var l2 = $("#area").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#return", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#len1", 0.5, {rotationX : -90, onComplete:function() {
						
							transferEffect("#box2", "#len1", function() {
							$("#len1").text($("#box2").text());
							TweenMax.to("#len1", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#len2", 0.5, {rotationX : -90, onComplete:function() {
									transferEffect("#box3", "#len2", function() {
										$("#len2").text($("#box3").text());
										TweenMax.to("#len2", 0.5, {rotationX : 0, onComplete:function() {
											$("#box-border2").removeClass("z-index1000000");
											$("#mul").text(parseInt($("#box2").text()) * parseInt($("#box3").text()));
											TweenMax.to("#mul", 0.5, {rotationX : 0, onComplete:function() {
												introjs.refresh();
												$(".introjs-tooltiptext").append('<a class="introjs-button user-button" '+
														'style="text-align:right;" id="nextButton5">Next&rarr;</a>');
												$("#nextButton5").click(function() {
													$('#nextButton5').remove();
													$("#animationBox2").addClass("z-index1000000");
													transferEffect("#mul", "#boxParent4", function() {
														$("#box4").text(parseInt($("#box2").text()) * parseInt($("#box3").text()));
														typing($('.introjs-tooltiptext'), "value is stored in variable "+
																"<span class='ct-code-b-yellow'>area</span>.", function() { 
															$('.introjs-nextbutton').show();
														});
													});
												});
											}});
										}});
									});							
								}});
							}});
						});
					}});
				}});
			});
		});
			break;
		case "console3" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>cout</span> displays this statement in console.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "console4" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				setTimeout(function() {
					introjs.nextStep();
				},1000);
			});
			break;
		case "console5" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>cout</span> displays value of <span class='ct-code-b-yellow'>area</span> in console.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton').show();
					});
				});
			break;
		/*case "li5" :
		
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#li5").fadeTo(300, 1, function() {
					var text = "<span class='ct-code-b-yellow'>Protected access</span> members can be used in child class.";
					typing($('.introjs-tooltiptext'), text, function() { 
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;*/
		case "restart":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#restart').removeClass("opacity00");
			$('.introjs-tooltip').css({'min-width' : '120px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart";
				typing($(".introjs-tooltiptext"), text, function() {
				});
			});
			break;
		}
	});
	introjs.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
};
}


function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: 'yellow'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
	$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}


function enterTwoValues(selector) {
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
		maxNumberOfInputs = 2;
		maxLengthOfInput = 1;
		$('.length-error-text').remove();
		if ($(this).text() == "") {
			$('.introjs-tooltiptext')
				.append("<span class='ct-code-b-red length-error-text'><br/>" + 
				"Please enter " + maxNumberOfInputs + " number and separate each with space.</span>");
		}
		var givenText = $(this).text();
		var splittedText = givenText.split(" ");
		arr = [];
		
		$.each(splittedText, function(idx, val) {
			if (val != '') {
				arr.push(val);
			}
		});
		
		if (arr.length < maxNumberOfInputs) {
			$(".introjs-nextbutton").hide();
		} else if (arr.length == maxNumberOfInputs) {
			$('.user-btn').remove();
			$("#please").hide();
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal3()">Next&rarr;</a>');
		
		}
		
		$.each(arr, function(idx, val) {
			if ((val > 100 || val < 0)) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
														"<ul><li>Please limit the index " + idx + " number in between 0 and 99.</li></ul></span>");
				$('.user-btn').remove();
			}
		});
	});
}
function storeVal3() {
	$("#please1").append("you entered values of <span class='ct-code-b-yellow'>length</span> and <span class='ct-code-b-yellow'>breadth</span>.");
		$('.user-btn').remove();
	var splittedText = $('#inputChar').text().split(" ");
	$('#inputChar').html('');
	$.each(splittedText, function(idx, val) {
		if (val != '') {
			$('#inputChar').append('<span class="scanfValue">' + val + '</span> ');
			$('#outputPrintfLine').append('<span class="printfValue visibility-hidden">' + val + '</span> ');

				$('#outputPrintfLine').append('<br/>');
			
		} else {
			$('#inputChar').append(' ');
		}
	});
	
	$('.scanfValue').addClass('output-value-circle circle-css');
	TweenMax.fromTo($('.scanfValue'), 1, {backgroundColor: '#FFFFFF'}, {backgroundColor: 'cyan', onComplete: function() {
		$('.scanfValue').removeClass('output-value-circle circle-css');
		$.each(arr, function(idx, val) {
			$('.arrayValue1').eq(idx).text(parseInt(val));
		});
		for (var i = 0; i < $('.scanfValue').length; i++) {
			if (i <= ($('.scanfValue').length - 1)) {
				fromEffectWithTweenMax($('.scanfValue').eq(i), $('.arrayValue1').eq(i), function() {
				});
			}
		}
		$('.introjs-nextbutton').show();
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