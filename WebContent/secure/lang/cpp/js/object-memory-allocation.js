var introjs;
var typingInterval = 10;

var objectMemoryAllocationReady = function() {
	introJsFunction();
	var typingContent = 'Here we learn how the memory will allocated in this demo.';
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
			element : "#headerFile",
			intro : "",
			position : "right"
		},{
			element : "#classDecl",
			intro : "",
			position : "right"
		},{
			element : "#privateVariable",
			intro : "",
			position : "right"
		},{
			element : "#putData",
			intro : "",
			position : "right"
		},{
			element : "#getData",
			intro : "",
			position : "right"
		},{
			element : "#mainMthd",
			intro : "",
			position : "right"
		},{
			element : "#objDec",
			intro : "",
			position : "right"//
		},{
			element : "#objMemory",
			intro : "",
			position : "right",
			tooltipClass: "hide"
		},{
			element : "#putIn1",
			intro : "",
			position : "right"
		},{
			element : "#fullStack",
			intro : "",
			position : "bottom",
			animateStep: "putData1",
			tooltipClass: "hide"
		},{
			element : "#s1",
			intro : "",
			position : "right"
		},{
			element : "#putIn2",
			intro : "",
			position : "right"
		},{
			element : "#s2",
			intro : "",
			position : "right"
		},{
			element : "#getIn1",
			intro : "",
			position : "right"
		},{
			element : "#memoGetData",
			intro : "",
			position : "right",
			tooltipClass: "hide"
		},{
			element : "#outputBox",
			intro : "",
			position : "right",
			tooltipClass : "hide",
			animateStep : "getData1"
		},{
			element : "#getIn2",
			intro : "",
			position : "right",
			animateStep : "getIn2"
		},{
			element : "#outputBox",//restartBtn
			intro : "",
			position : "right",
			tooltipClass : "hide",
			animateStep : "getData2"
		},{
			element : "#restartBtn",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		}
		]});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].animateStep;
		switch (elementId) {
		case "preCode":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = 'Let us learn <span class="ct-code-b-yellow">Pointers with Two Dimensional Array</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "headerFile":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = 'The preprocessor command <span class="ct-code-b-yellow">#include</span> is used to link header files to our program.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "classDecl":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "Here we have declared a class with name <span class='ct-code-b-yellow'>Item</span>"
									+" is an organization of <span class='ct-code-b-yellow'>data</span> and "
									+"<span class='ct-code-b-yellow'>functions</span> which operate on them.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "privateVariable":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "These are the variables declared inside the class and outside the methods,"
									+" since it doesn't have any access specifiers like <span class='ct-code-b-yellow'>public</span>,"
									+" <span class='ct-code-b-yellow'>protected</span>. so, by default it takes <span class='ct-code-b-yellow'>private</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "putData":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "This <span class='ct-code-b-yellow'>putData()</span> is used to intitialze "
									+"the values to a declared <span class='ct-code-b-yellow'>private</span> variables.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			})
			break;
			
		case "getData":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = 'The <span class="ct-code-b-yellow">getData()</span> is used to get the initilaized values of variables and print.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		
		case "mainMthd":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = 'The program execution starts from the <span class="ct-code-b-yellow">main()</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		
		case "objDec":
			$(".border1px").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = 'Here for the class <span class="ct-code-b-yellow">Item</span> objects are '
									+'declared <span class="ct-code-b-yellow">s1</span> and <span class="ct-code-b-yellow">s2</span>,'
									+' the <span class="ct-code-b-yellow">memory</span> space for objects are allocated.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "objMemory":
			$(".introjs-helperLayer").one("transitionend", function() {
				//var typingContent = '';
				$(".objMemory").removeClass("opacity00");
					setTimeout(function() {
						introjs.nextStep();
					},1500);
				//});
			});
			break;	
		
		case "putIn1":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "calling the <span class='ct-code-b-yellow'>putData()</span> with values as a parameter";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$("#putData").addClass("zIndex");
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "fullStack":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "fullStack";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					if (animateStep == "putData1") {
						$("#memoPutData").removeClass("opacity00");
						setTimeout(function() {
							introjs.nextStep();
							//$('.introjs-nextbutton').show();
						}, 800)
					}
				});
			});
			break;
		
		case "s1":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "we are calling the putData() by s1 and passing the values as parameter.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					//if (animateStep == "s1Obj") {
						//$("#memoPutData").removeClass("opacity00");
						$(".itemNoS1, .priceNoS1").removeClass("opacity00");
						$('.introjs-nextbutton').show();
					//}
				});
			});
			break;
			
		case "putIn2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "we are calling the putData() by s2 and passing the values as parameter.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$("#putData").removeClass("zIndex");//memoPutData
						$("#memoPutData").addClass("zIndex");
						$('.introjs-nextbutton').show();
				})
			});
			break;
			
		case "s2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent = "The passed parameter values are stored in a memory.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					//$("#memoPutData").removeClass("zIndex");
					$(".itemNoS2, .priceNoS2").removeClass("opacity00");
					$('.introjs-nextbutton').show();
				})
			});
			break;
			
		case "getIn1":
		case "getIn2":
			$("#memoPutData").removeClass("zIndex");
			$(".introjs-helperLayer").one("transitionend", function() {
				var typingContent;
				if (animateStep == "getIn2") {
					$("#memoGetData").addClass("zIndex");
					typingContent = "This getData() is used to print the values which we passed in putData() of s2 object.";
				} else {
					//$("#memoGetData").removeClass("zIndex");
					typingContent = "This getData() is used to print the values which we passed in putData() of s1 object.";
				}
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					setTimeout(function() {
						$("#getData").addClass("zIndex");
						$('.introjs-nextbutton').show();
					}, 600);
				})
			});
			break;
		
		case "memoGetData":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#memoGetData").removeClass("opacity00");
				setTimeout(function() {
					introjs.nextStep();
				}, 1500);
			})
			break;
			
		case "outputBox":
			
			$(".introjs-helperLayer").one("transitionend", function() {
				
				$("#memoGetData, #outputBox").removeClass("opacity00");
				if (animateStep == "getData1") {
					$("#getData").removeClass("zIndex");
					$("#s1OutPut").removeClass("opacity00");
				} else {
					$("#memoGetData").removeClass("zIndex");
					$("#getData").addClass("zIndex");
					$("#s2OutPut").removeClass("opacity00");
				}
				setTimeout(function() {
					$("#getData").removeClass("zIndex");
					introjs.nextStep();
				}, 1500);
			})
			break;
			
		case "restartBtn":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").removeClass("visibility-hidden");
				$("#restartBtn").click(function() {
					location.reload();
				})
			})
			break;
			
			
		}});
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