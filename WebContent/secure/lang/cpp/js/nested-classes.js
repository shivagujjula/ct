var introjs;
var typingInterval = 30;

var nestedClassesReadyFunction = function() {
	
	introJsFunction();
	var typingContent = 'Here we learn how the Outer class and Inner and Outer class will work.';
	typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
		$('.introjs-nextbutton').show();
	});
} 


function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element : "#heading",
			intro : "",
			position : "right"
		},{
			element : "#preCode",
			intro : "",
			position : "bottom"
		},/*{
			element : "#outerClass",
			intro : "",
			position : "bottom"
		},{
			element : "#innerClass",
			intro : "",
			position : "bottom"
		},{
			element : "#voidSecond",
			intro : "",
			position : "bottom"
		},{
			element : "#mainMthd",
			intro : "",
			position : "right"
		},*/{
			element : "#errOut",
			intro : "",
			position : "right"
		},{ 
			element : "#outputBox",
			intro : "",
			position : "bottom",
			tooltipClass: "hide",
			animateStep: "errOut"
		},{
			element : "#error1",
			intro : "",
			position : "right"
		},{
			element : "#outerObj",
			intro : "",
			position : "bottom"
		},{
			element : "#memoryBox",
			intro : "",
			position : "bottom",
			tooltipClass: "hide",
			animateStep: "outerClass"//errInner
		},{
			element : "#errInner",
			intro : "",
			position : "bottom"
		},{ 
			element : "#outputBox",
			intro : "",
			position : "bottom",
			tooltipClass: "hide",
			animateStep: "errInner"//errDisp2
		},{ 
			element : "#errDisp2",
			intro : "",
			position : "bottom",
		},{ 
			element : "#outputBox",
			intro : "",
			position : "bottom",
			tooltipClass: "hide",
			animateStep: "errDisp2"//error2
		},{ 
			element : "#error2",
			intro : "",
			position : "bottom",
		},{ 
			element : "#otDisp1",
			intro : "",
			position : "bottom",
		},{
			element : "#objInner2",
			intro : "",
			position : "bottom",
			animateStep: "objInner2"
		}, {
			element : "#memoryBox",
			intro : "",
			position : "bottom",
			tooltipClass: "hide",
			animateStep: "innerBox"//disp2
		},{ 
			element : "#objDisp2",
			intro : "",
			position : "bottom",
		},{ 
			element : "#disp2",
			intro : "",
			position : "bottom",
			tooltipClass: "hide"
		},{ 
			element : "#outputBox",
			intro : "",
			position : "bottom",
			tooltipClass: "hide",
			animateStep: "disp2"//twoObj
		},{ 
			element : "#twoObj",
			intro : "",
			position : "bottom",
		},{ 
			element : "#outputBox",
			intro : "",
			position : "bottom",
			tooltipClass: "hide",
			animateStep: "twoObj"//restartBtn
		},{ 
			element : "#restartBtn",
			intro : "",
			position : "bottom",
			tooltipClass: "hide"
		}
		]})
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].animateStep;
		switch (elementId) {
		
		case "preCode":
			$("#preCode").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				
				var typingContent = 'Here we look at the sample code on inner classes.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$("#headers").removeClass("opacity00");
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "outerClass":
			
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#headers").removeClass("opacity00");
				var typingContent = 'The class with the name Outer is the outer class contains the variable i and method display1().';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".outerProperty").removeClass("opacity00");
						$('.introjs-nextbutton').show();
				});
			});
		break;
		
		case "memoryBox":
			
			$(".introjs-helperLayer").one("transitionend", function() {
				
				if (animateStep == "outerClass") {
					
					$("#parentPanel").removeClass("visibility-hidden");
					$("#varI").fadeIn(800, function() { 
						setTimeout(function() {
							$("#errInner").removeClass("opacity00");
							introjs.nextStep();
						}, 1000);
					})
					
				} else  if (animateStep == "innerBox") {
					$("#childPanelOfOuter").fadeIn(800, function() {
						$("#childPanel").fadeIn(800, function() {
							introjs.nextStep();
						});
					});
				}
			});
			break;
			
		case "innerClass":
			
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#innerClass").removeClass("opacity00");
				var typingContent = 'The class with in the another class is called as <y>inner</y> class,'
									+' this class is the <y>inner</y> class of <y>outer</y> class '
									+'and it contains the variable <y>s</y> and method <y>display2()</y>.<ul><li>The variable <y>s</y>'
									+' does not contain any access specifier by default it takes <y>private</y>.</li></ul>';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
				});
			});
			
		break;	
			
		case "voidSecond":
			
			//$("#memoryBox").removeClass("zIndex");
			
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#voidSecond").removeClass("opacity00");
				var typingContent = 'The <y>display1()</y> is the member function of <y>outer</y> class.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
				});
			});
		break;
			
		case "mainMthd":
			$("#memoryBox").removeClass("zIndex");
			$(".introjs-helperLayer").one("transitionend", function() {
				
				if (animateStep == "innerObj") {
					var typingContent = 'To call the inner class methods, create the inner class object through outer class and call the methods.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$("#innerId").removeClass("opacity00");
							$('.introjs-nextbutton').show();
					});
				} else {
					
					var typingContent = 'The program execution starts from the <span>main()</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
					});
				}
				
			});
		break;
			
		case "outerObj":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = 'Here we are creating the outer class object.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
				});
			});
		break;
			
		case "errInner":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "Here creating the Inner class obj.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$("#errInner").removeClass("opacity00");
						$('.introjs-nextbutton').show();
				});
			});//errDisp2
			break;
			
		case "errDisp2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "Calling the display2() from the inner class.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					//$("#outerId").removeClass("opacity00");
						$('.introjs-nextbutton').show();
				});
			});//errDisp2
			break;	
			
		case "errOut":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "Here calling the variable i of the outer class since it is a private we get the compilation error.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$("#errOut").removeClass("opacity00");
					$("#iValue").addClass("zIndex");
						$('.introjs-nextbutton').show();
				});
			});
		break;
			
		case "error1":
			$("#memoryBox").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "Since it shows the error so we comment the line.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$("b").eq(0).removeClass("opacity00");
					$("#iValue").removeClass("zIndex");
					$("#error1").addClass("opacity55");
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "error2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "Since it shows the error so we comment the line.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					//$("b").eq(0).removeClass("opacity00");
					$("#error2").addClass("opacity55");
					$("#otDisp1").removeClass("opacity00");
					$('.introjs-nextbutton').show();
				});
			});
		break;
			
		case "otDisp1":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "Here wer are calling the display() of outer class.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$("#error2").addClass("opacity55");
					$("#otDisp1").removeClass("opacity00");
					$('.introjs-nextbutton').show();
				});
			});
		break;
		
		case "objInner2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "When we call the display2() it creates the Inner class object.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
			
		case "objDisp2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "We are calling the display2() of inner class.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;//disp2
		
		case "disp2":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 1500);
			});
		break;//twoObj
		
		case "twoObj":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "The another way of creating the inner class object and calling its methods.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		
		case "restartBtn":
			$("#restartBtn").removeClass("visibility-hidden");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").click(function() {
					location.reload(true);
				})
			});
		break;
		
		
		case "outputBox":
			introjs.refresh();
			
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputBox").removeClass("opacity00");
				$(".output-console-body").empty();
				if (animateStep == "errInner") {
					
					var typingContent = "<div id='exception' >"
										+"<div><span>Outer.cpp</span>: In function ‘int main()’:</div>"
										+"<div><span>Outer.cpp</span>: <r>error:</r> ‘Inner’ was not declared in this scope</div>"
										+"<div><span>Outer.cpp</span>: <r>error:</r> expected ‘;’ before ‘in’</div>"
										+"</div>"
									typing('.output-console-body', typingContent, typingInterval, 'white', function() {
										setTimeout(function() {
											$("#errDisp2").removeClass("opacity00")
											introjs.nextStep();
										}, 1500);
									});
					
				} else if (animateStep == "errDisp2") {
				
				var typingContent = "<div id='dispExcp'>"
									+"<div><span><span>Outer.cpp</span>: <r>error:</r> ‘in’ was not declared in this scope</span></div>"
									+"<div><span>in.display2();</span></div>"
									+"</div>";
									
								typing('.output-console-body', typingContent, typingInterval, 'white', function() {
									setTimeout(function() {
										introjs.nextStep();
									}, 1500);
								});	
				
				} else if (animateStep == "errOut") {
					var typingContent = "<div>"
											+"<div><span>Outer.cpp</span>: <span>In member function ‘void Outer::Inner::display2()’:</span></div>"
											+"<div><span>Outer.cpp</span>: <r>error:</r> invalid use of non-static data member ‘Outer::a’ int a;"
											+"<div><span>Outer.cpp</span>: <r>error:</r> from this location cout << \"A = \" << a << endl;" 
										+"</div>"
										typing('.output-console-body', typingContent, typingInterval, 'white', function() {
											setTimeout(function() {
												introjs.nextStep();
											}, 1500);
										});				
				} else if (animateStep == "disp2") {
					$(".output-console-body").append("<div><div>CodeTantra Inner Class</div><div>1</div></div>");
					setTimeout(function() {
						$("#twoObj").removeClass("opacity00");
						introjs.nextStep();
					}, 1500);
				}else if (animateStep == "twoObj") {
					$(".output-console-body").append("<div><div>CodeTantra Inner Class</div><div>1</div></div>");
					$(".output-console-body").append("<div><div>CodeTantra Inner Class</div><div>1</div></div>");
					setTimeout(function() {
						introjs.nextStep();
					}, 1500);
				}
				
			});
			break;	
			
		}
	})
	introjs.start();
	
}

	function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
		$(typingId).typewriting(typingContent, {
			"typing_interval": typingInterval,
			"cursor_color": cursorColor
		}, function() {
			$(typingId).removeClass('typingCursor');
			if (typeof typingCallbackFunction === "function") {
				typingCallbackFunction();
			}
		});
	}
