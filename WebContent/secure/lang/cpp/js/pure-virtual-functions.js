var introjs;
var typingSpeed = 1;
var tl;
var pureVirtualFunction = function() {
	$(".introjs-nextbutton").keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	$('#restartBtn').click(function() {
		location.reload();
	});
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});

	introGuide();
	tl = new TimelineLite();
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick: false,
		showBullets : false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps :[{
			element :"#title",
			intro : "",
			position : "right"
		},{
			element : "#informationDiv",
			intro :"",
			tooltipClass : 'hide'
		},{
			element : "#code",
			intro :"",
			position : "right"
		},{
			element:"#base",
			intro:"",
			position:"right",
			animateStep : "line1",
			tooltipClass: "hide"
		},{
			element : "#derived",
			intro : "",
			position:"right",
			tooltipClass: "hide"
		},{
			element : "#main",
			intro : "", 
			position : "right",
			tooltipClass: "hide"
		},{
			element : "#obj1",
			intro : "",
			animateStep : "first",
			position : "right"
		},{
			element : "#obj2",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		},{
			element : "#pointer",
			intro : "",
			tooltipClass : "hide",
		},{
			element : "#emp",
			intro : "",
			tooltipClass: "hide",
			position : "right",
		},{
			element : "#pointer2",
			intro : "",
			tooltipClass : "hide",
			position : "bottom"
		},{
			element : "#objaddr",
			intro : "",
			position : "right"
		},{
			element : "#objpointer",
			intro : "",
			tooltipClass : "hide",
			position : "bottom"
		},{
			element : "#display3",
			intro : "",
			animateStep : "first",
			tooltipClass : "hide",
			position : "right"
		},{
			element : "#outputDiv",
			intro : "",
			animateStep : "first",
			tooltipClass: "hide"
		},{
			element : "#display3",
			intro : "",
			animateStep : "second",
			tooltipClass : "hide",
			position : "right"
		},{
			element : "#virtual",
			intro : "",
			animateStep : "first",
			position : "right"
		},{
			element : "#virtual2",
			intro : "",
			animateStep : "first",
			position : "right"					
		},{
			element:"#base",
			intro:"",
			position:"right",
			animateStep : "line2",
			tooltipClass: "hide"
		},{
			element : "#obj1",
			intro : "",
			animateStep : "second",
			position : "right"
		},{
			element : "#outputDiv",
			intro : "",
			animateStep : "second",
			tooltipClass: "hide"
		},{
			element : "#obj1",
			intro : "",
			animateStep : "third",
			position : "bottom",
			tooltipClass: "hide"
		},{
			element : "#display",
			intro : "",
			position : "right"
		},{
			element : "#funcdef",
			intro : "",
			animateStep : "second",
			position  : "right",
			tooltipClass: "hide"
		},{
			element : "#cout1",
			intro : "",
			position  : "right"
			
		},{
			element : "#outputDiv",
			intro : "",
			animateStep : "third",
			tooltipClass: "hide"
		},{
			element : "#display2",
			intro : "",
			position : "right"
		},/*{
			element : "#virtual2",
			intro : "",
			position : "right"					
		},*/{
			element : "#funcdef2",
			intro : "",
			animateStep : "second",
			position : "right"
		},{
			element : "#cout2",
			intro : "",
			position  : "right"
		},{
			element : "#outputDiv",
			intro : "",
			animateStep : "forth",
			tooltipClass: "hide"
		},{
			element : "#end",
			intro : "",
			position : "right"
		},{
			element : "#button",
			intro : "",
			position : "right"
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		var element = targetElement.id;
		switch(element) {
		case "obj2":
			$("#s1, #box, #addr").addClass("opacity00");
			$("#animationBox").addClass("opacity00");
			break;
			
		case "objaddr":	
			$(".svg-line, #arrowEnd1").hide();
			$("#xValue").text("");
			break;
		case "objpointer":
			$("#outputDiv").addClass("opacity00");
			$("#outputBody").empty();
			$(".svg-line, #arrowEnd1").hide();
			$("#xValue").text("");
			break;
			
		case "display3":
			if (introjs._introItems[introjs._currentStep].animateStep == "second") {
				$("#out0").show();
				$("#baseClass").addClass("opacity00");
			}
			break;
		
		case "derived":
			$("#animationBox,#main,#derived").addClass("opacity00");
			break;
		case "code":
			$("#base").addClass("opacity00");
			$("#informationDiv").addClass("z-index");
			break;
		case "virtual":
			var element = introjs._introItems[introjs._currentStep].animateStep;
			switch(element) {
			case "first":
				$("#out0").hide()
				$("#baseClass").removeClass("opacity00");
				introjs.refresh();
				break;
			}
			break;
		case "obj1":
			var animateelement = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateelement) {
			case "first":
			$("#outputDiv").addClass("opacity00");
				break;
			}
			break;
		case "base ":
			var animateelement = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateelement) {
			case "line1":
			$("#animationBox,#main,#derived").addClass("opacity00");
			break;
			}
			break;
		}
	});
	introjs.onafterchange(function(targetElement) {
		
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			if (introjs._currentStep != 0 && introjs._currentStep != 2) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		var element = targetElement.id;
		switch(element) {
		case "title":
			$('.introjs-tooltip').css({'min-width' : '220px'});
			var text = "Here we will learn about <b class ='ct-code-b-yellow'>pure virtual functions</b>.";					
			typing($(".introjs-tooltiptext"), text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case "informationDiv":
			$("#informationDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#li1").removeClass("opacity00", function() {
					$("#li2").removeClass("opacity00", function() {
						$("#nextButton1").removeClass("opacity00", function() {
							$("#nextButton1").click(function() {
								$('#nextButton1').remove();
								$("#informationDiv").css("height","80px");
								introjs.nextStep();
							});
						});
					});
				});
			});
			break;
		case "code":
			$("#code").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us see a sample code to understand the usage of <b class='ct-code-b-yellow'>pure virtual functions</b>.";
				
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
					
				});
			});
			break;
		case "base":
			var animateelement = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateelement) {
			case "line1":
				$("#derived").addClass("opacity00");
				$("#base").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
				var text =	"A class <b class='ct-code-b-yellow'>Company</b> is declared without any methods.";
				$(".introjs-tooltip").removeClass("hide");			
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			case "line2":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"Now class <b class='ct-code-b-yellow'>Company</b> becomes an <b class='ct-code-b-yellow'>abstract</b> class "+
							"and used as interface for other derived class.";
					$(".introjs-tooltip").removeClass("hide");			
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			}
			break;
		case "main":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$("#main").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<b class='ct-code-b-yellow'>main()</b> is the starting point of execution.";
				$(".introjs-tooltip").removeClass("hide");
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "obj1":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			introjs.refresh();
			var animateelement = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateelement) {
			case "first":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "An object <b class='ct-code-b-yellow'>comp</b> is created to the class <b class='ct-code-b-yellow'>Company</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			case "second":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "It shows an <b class='ct-red-color'>error</b> on console.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case "third":
				$(".introjs-helperLayer").one("transitionend", function() {
					if (introjs._direction == "forward") {
					$("#obj1").prepend("<span id='slash'><mark>//<mark></span>");
					}
					introjs.refresh();
					$("#out3, #slash").show();
					$('.introjs-tooltip').removeClass('hide');
					var text = "So we cannot declare an object for abstract class  <b class='ct-code-b-yellow'>Company</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			}
			break;
		case "obj2":
			introjs.refresh();
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		//	$("#obj1").prepend("<span id='slash'><mark>//<mark></span>");
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass('hide');
				var text =  "<ul><li>A pointer object <b class='ct-yellow-color'>obj</b> is created to the class "+
							"<b class='ct-yellow-color'>Company</b>.</li>"+
					"<li>This base class pointer object <b class='ct-yellow-color'>obj</b> is used to store the "+
						"address of either base class objects or  the derived class objects.</li></ul>";
				typing((".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "pointer":
			introjs.refresh();
			$("#animationBox").removeClass("opacity00");
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._direction == "forward") {
				$("#s1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$("#box,#addr").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#s1, #box,#addr").removeClass("animated zoomIn");
						setTimeout(function() {
							introjs.goToStep(10)
						},1500);
					});
				});
				} else {
					setTimeout(function() {
						$("#s1, #box, #addr").addClass("opacity00");
						introjs.previousStep(); 
					},1500);
				}
			});
			break;
		case "emp" :
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				console.log("emp");
				var text = "An object <b class='ct-yellow-color'>emp</b> is created to the class "+
							"<b class='ct-yellow-color'>Employee</b>.";
				$('.introjs-tooltip').removeClass('hide');
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "pointer2":
			introjs.refresh();
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._direction == "forward") {
				$("#s2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$("#box2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#funcdef").addClass("z-index1000000");
						$("#funcdef").effect("transfer", {to : $("#box3"), className: "ui-effects-transfer"}, 1000, function() {
							$("#box3").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$("#funcdef").removeClass("z-index1000000");
								$("#funcdef2").addClass("z-index1000000");
								$("#funcdef2").effect("transfer", {to : $("#box4"), className: "ui-effects-transfer"}, 1000, function() {
									$("#box4").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
										$("#funcdef2").removeClass("z-index1000000");
										$("#addr2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
											$("#s2, #box2, #addr2, #box4, #box3").removeClass("animated zoomIn");
											setTimeout(function() {
												introjs.nextStep(); 
											},1500);
										});
									});
									
									});
								});
							});
						});
					});
				} else {
					setTimeout(function() {
						$("#s2, #box2, #addr2, #box4, #box3").addClass("opacity00");
						introjs.previousStep(); 
					},1500);
					}
				});
			break;
		case "objaddr":
			introjs.refresh();
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text =	"The address of <b class='ct-yellow-color'>Employee</b> class object <b class='ct-yellow-color'>emp</b> is assigned "+
							"to the pointer object <b class='ct-yellow-color'>obj</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "objpointer":
			introjs.refresh();
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#xValue").text($("#addr2").text());
				var l1 = $("#addr2").offset();
				$("#xValue").offset({"top": l1.top, "left": l1.left});
				tl.to("#xValue", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
					$(".svg-line, #arrowEnd1").show();
					$(".svg-line").attr("x2", "36.1%");
					TweenMax.to($('.svg-line'), 1,  {opacity: 1, attr: {x2: '53.5%', y2: '46%'}, onComplete: function() {
						$('.introjs-tooltip').removeClass('hide');
						typing($(".introjs-tooltiptext"),  "The pointer object <b class='ct-yellow-color'>obj</b> holds the address of the "+
							"derived class object <b class='ct-yellow-color'>emp</b>.", function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					}});
				}}); 
			});
			break;
			
		case "display3":
			introjs.refresh();
			$("#outputDiv").removeClass("opacity00");
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			if (introjs._introItems[introjs._currentStep].animateStep == "first") {
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>The Employee class method <b class='ct-yellow-color'>displayName()</b> and <b class='ct-yellow-color'>displayLocation()</b>"+
							" is accessed using pointer object <b class='ct-yellow-color'>obj</b>.</li></ul>";
				$('.introjs-tooltip').removeClass('hide');
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append("<li id='err'>It shows an <b class='ct-red-color'>error</b> on console.</li>");
					$(".introjs-nextbutton, .introjs-prevbutton").show();	
				});
					});
				} else {
					$(".introjs-helperLayer").one("transitionend", function() {
						var text =	"So to avoid <b class='ct-red-color'>errors</b>, we declare the same functions as "+
								 "<b class='ct-yellow-color'>pure virtual functions</b> in the base class <b class='ct-yellow-color'>Company</b>.";
						$('.introjs-tooltip').removeClass('hide');
						typing($(".introjs-tooltiptext"), text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
				}
			break;
		case "outputDiv" :
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").css("width","380");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].animateStep == "first") {
					if (introjs._direction == "forward") {
					$("#outputDiv").addClass("z-index1000000");
					$("#out0").show();
					$("#outputBody").append("<div id='out0'><div id='out'><b class='ct-yellow-color'>sample</b>.cpp: "+
								"<b class='ct-red-color'>error</b>: <b>'class Company'</b> has no member named <b>'displayName'</b><br>"+
								"   <b class='blinking pure' >obj -> displayName();</b></div>"+
								"<br><div id='out2'><b class='ct-yellow-color'>sample</b>.cpp: "+
								"   <b class='ct-red-color'>error</b>: <b>'class Company'</b> has no member named <b>'displayLocation'</b>"+
								" <b class='blinking pure' >obj -> displayLocation();</b></div>");
						$("#abstract").removeClass("blinking-white");
						$(".pure").removeClass("blinking-white");
						$("#outputDiv").removeClass("z-index1000000");
					} else {
						$("#outputBody").empty();
					}
					nextStep1();
				} else if (introjs._introItems[introjs._currentStep].animateStep == "second") {
					$("#slash").remove();
					if (introjs._direction == "forward") {
					$("#outputDiv").addClass("z-index1000000");
					$("#out3").hide();
					$("#outputBody").append("<div id='out3'><div id='out4'><b class='ct-yellow-color'>sample</b>.cpp: "+
								"<b class='ct-red-color'>error</b>: cannot declare variable 'comp' to be of "+
								"<span class='blinking' id='abstract1'>abstract</span> type 'Company'</div>"+
								"<br><div id='out5'><b class ='ct-yellow-color'>sample</b>.cpp: <b class='ct-red-color'>error</b>: "+
								"because the following virtual functions are <b class='blinking' id='pure'>pure</b> "+
								"within class 'Company'</div></div>");
						$("#abstract1").removeClass("blinking-white");
						$(".pure").removeClass("blinking-white");
						$("#outputDiv").removeClass("z-index1000000");
					} else {
						$("#slash").remove();
						$("#outputBody").empty();
					}
					nextStep1();
				} else if (introjs._introItems[introjs._currentStep].animateStep == "third") {
					if (introjs._direction == "backward") {
						$("#cod").remove();
					} else {
						$("br").remove();
						$("#outputBody").append("<div id='cod'>CodeTantra</div>");
					}
					nextStep1();
				} else {
					if (introjs._direction == "backward") {
						$("#hyd").remove();
					} else {
						$("#outputBody").append("<div id='hyd'>Hyderabad</div>");
						setTimeout(function() {
							introjs.nextStep(); 
						},1500);
					}
					nextStep1();
				}
			});
			break;
		case "virtual":
			var element = introjs._introItems[introjs._currentStep].animateStep;
			switch(element) {
			case "first":
				$("#baseClass").removeClass("opacity00");
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The <b class ='ct-code-b-yellow'>displayName()</b> is defined as a <b class ='ct-code-b-yellow'>pure virtual function</b> "+
						" without a function definition in the class <b class ='ct-code-b-yellow'>Company</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case "second":
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =  "<ul><li>Compiler searches for function in base class <b class='ct-yellow-color'>Company</b>.</li>"+
								"<li>Here <b class ='ct-code-b-yellow'>displayName()</b> in this class is "+
								"a pure virtual function without implementation.</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
				} 
			break;
			
		case "derived":
			$("#derived").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 	"<ul><li>A derived class <b class='ct-code-b-yellow'>Employee</b> is created "+
							" which is derived publicly from the base class <b class='ct-code-b-yellow'>Company</b>.</li>" +
							"<li>This class <b class='ct-code-b-yellow'>Employee</b> contains two public member functions "+
							" <b class='ct-code-b-yellow'>displayName()</b> and <b class='ct-code-b-yellow'>displayLocation().</b></li></ul>"; 
				$(".introjs-tooltip").removeClass("hide");
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "virtual2":
			var element = introjs._introItems[introjs._currentStep].animateStep;
			switch(element) {
			case "first":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<b class ='ct-code-b-yellow'>displayLocation()</b> is defined as a <b class ='ct-code-b-yellow'>pure virtual function</b> without "+
								"a function definition in the class <b class ='ct-code-b-yellow'>Company</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "second":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text =  "<ul><li>Compiler searches for function in base class <b class='ct-yellow-color'>Company</b>.</li>"+
							"<li>Here <b class ='ct-code-b-yellow'>displayLocation()</b> in this class is a "+
							"pure virtual function without implementation.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			}
		break;
		case "funcdef" :
			introjs.refresh();
			$(".introjs-helperLayer").css("width","300px");
			introjs.refresh();
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "second":
				$(".introjs-nextbutton, .introjs-prevbutton").hide();
				$("#out3").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					var text = 	"The <b class = 'ct-code-b-yellow'>displayName()</b> of the class "+
								"<b class = 'ct-code-b-yellow'>Employee</b> is overridden and executed since "+
								"<b class = 'ct-code-b-yellow'>displayName()</b> is a <b>pure virtual function</b> in class  "+
								"<b class = 'ct-code-b-yellow'>Company</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			}
			break;
		case "funcdef2":
			introjs.refresh();
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch (animateStep) {
			case "second":
				$(".introjs-nextbutton, .introjs-prevbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =  "The <b class = 'ct-code-b-yellow'>displayLocation()</b> of the class "+
								"<b class = 'ct-code-b-yellow'>Employee</b> is overridden and executed since "+
								"<b class = 'ct-code-b-yellow'>displayLocation()</b> is a <b>pure virtual function</b> in class  "+
								"<b class = 'ct-code-b-yellow'>Company</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			}
			break;
		
		
		case "cout1":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement displays <b class='ct-yellow-color'>CodeTantra</b> on console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "cout2":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement displays <b class='ct-yellow-color'>Hyderabad</b> on console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "display":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement calls the <b class='ct-yellow-color'>displayName()</b>"+
							" through pointer object <b class='ct-yellow-color'>obj</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();	
				});
			});
			break;
		
		
	
		case "display2":
			introjs.refresh();
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement calls the <b class='ct-yellow-color'>displayLocation()</b> "+
							"through pointer object <b class='ct-yellow-color'>obj</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
		case "end":
			introjs.refresh();
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing($(".introjs-tooltiptext"),"End of the program.", function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
		case "button" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn, #closeBtn").removeClass("opacity00");
				var text = "<ul><li>Click on <span class='ct-code-b-yellow'>Close</span> button to close the Live Demo.</li>" +
						"<li>Click on <span class='ct-code-b-yellow'>Restart</span> button to restart the Live Demo.</li></ul>"
									
				typing('.introjs-tooltiptext', text, function() {
					$('#restartBtn').click(function() {
						location.reload();
						
					});

				});
			});
		break;
		}
	});
	introjs.start();
}
function fromEffectWithTweenMax(selector1, selector2, callbackfunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function fadefunction(selector, callBackFunction) {
	$(selector).fadeTo(300, 1, function() {
		$("#nextButton").fadeTo(300, 1, function() {
			$("#nextButton").on('click', function() {
				$('#nextButton').remove();
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		});
	});
}

function nextStep1() {
	if ((introjs._introItems[introjs._currentStep]["animation"] == "repeat") && (introjs._direction == "backward")) {
		setTimeout(function() {
			introjs.previousStep(); 
		},1500);
	} else {
		setTimeout(function() {
			introjs.nextStep();
		}, 1500);
	}
}