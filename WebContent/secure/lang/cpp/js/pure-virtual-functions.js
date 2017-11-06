var introjs;
var typingSpeed = 1;
var tl;
var pureVirtualFunction = function() {
	$(".introjs-nextbutton").keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function() {
		location.reload();
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
			position:"right"
		},{
			element : "#virtual",
			intro : "",
			animateStep : "first",
			position : "right"
		},{
			element : "#derived",
			intro : "",
			position:"right"
		},{
			element : "#funcdef",
			intro : "",
			animateStep : "first",
			position : "right"
			
		},{
			element : "#funcdef2",
			intro : "",
			animateStep : "first",
			position : "right"
		},{
			element : "#main",
			intro : "", 
			position : "right"
		},{
			element : "#obj1",
			intro : "",
			position : "right"
		},{
			element : "#outputDiv",
			intro : "",
			animateStep : "first",
			tooltipClass : "hide",
			position : "bottom"
		},{
			element : "#obj2",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		},{
			element : "#pointer",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		},{
			element : "#emp",
			intro : "",
			position : "right"
		},{
			element : "#pointer2",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		},{
			element : "#objaddr",
			intro : "",
			position : "right"
		},{
			element : "#objpointer",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		},{
			element : "#display",
			intro : "",
			position : "right"
		},{
			element : "#virtual",
			intro : "",
			animateStep : "second",
			position : "right"
		},{
			element : "#funcdef",
			intro : "",
			animateStep : "second",
			position  : "right"
			
		},{
			element : "#cout1",
			intro : "",
			position  : "right"
			
		},{
			element : "#outputDiv",
			intro : "",
			animateStep : "second",
			tooltipClass: "hide"
		},{
			element : "#display2",
			intro : "",
			position : "right"
		},{
			element : "#virtual2",
			intro : "",
			position : "right"					
		},{
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
			animateStep : "third",
			tooltipClass: "hide"
		},{
			element : "#end",
			intro : "",
			position : "right"
		},{
			element : "#restart",
			intro : "",
			position : "right"
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		var element = targetElement.id;
		switch(element) {
		case "outputDiv":
			var animateelement = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateelement) {
				case "first":
					$("#slash").remove();
					$("#animationBox").addClass("opacity00");
					break;
				}
			break;
		case "obj1":
			$("#slash").remove();			
			$("#outputDiv").addClass("opacity00");
			$("#out0").remove();
		break;
		case "obj2":
			$("#s1, #box, #addr").addClass("opacity00");
			$("#out0").remove()
			break;
		case "pointer":
			$("#s1, #box, #addr").addClass("opacity00");
			break;
		case "emp":	
		case "pointer2":
			$("#s2, #box2, #addr2, #box3, #box4").addClass("opacity00");
			break;
		case "objaddr":	
		case "objpointer":
			$(".svg-line, #arrowEnd1").hide();
			$("#xValue").text("");
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
			var text = "we will learn about <b class ='ct-code-b-yellow'>pure virtual functions</b>.";					
			typing($(".introjs-tooltiptext"), text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case "informationDiv":
			$("#informationDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				fadefunction("#li1", function() {
					fadefunction("#li2", function() {
						fadefunction("#li3", function() {
							fadefunction("#li4", function() {
							$("#informationDiv").css("height","135px");
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
				var text = "Let us consider an example to explain <b class='ct-code-b-yellow'>pure virtual functions</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
					
				});
			});
			break;
		case "base":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text =	"Here class <b class='ct-code-b-yellow'>Company</b> is an abstract class used as interface " +
							"for other derived classes. These functions are not implemented in this class.";
							
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "virtual":
			var element = introjs._introItems[introjs._currentStep].animateStep;
			switch(element) {
			case "first":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "here <b class ='ct-code-b-yellow'>displayName()</b> is a pure virtual function without function definition.";
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
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = 	"<ul><li>Here class <b class='ct-code-b-yellow'>Employee</b> is a derived "+
							"class which is derived from the base class <b class='ct-code-b-yellow'>Company</b>.</li>" +
							"<li>The derived class <b class='ct-code-b-yellow'>Employee</b> is implementing the"+
							" base class functions.</li></ul>"; 
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "virtual2":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text =  "<ul><li>Compiler searches for function in base class <b class='ct-yellow-color'>Company</b>.</li>"+
							"<li>Here <b class ='ct-code-b-yellow'>displayLocation()</b> in this class is a "+
							"pure virtual function without implementation.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "funcdef" :
			introjs.refresh();
			$(".introjs-helperLayer").css("width","300px");
			introjs.refresh();
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "first":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =  "Here <b class='ct-code-b-yellow'>displayName()</b> in the derived class "+
							"<b class='ct-code-b-yellow'>Employee</b> implements the pure virtual function "+
							"of class <b class='ct-code-b-yellow'>Company</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case "second":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = 	"<b class = 'ct-code-b-yellow'>displayName()</b> of the class "+
								"<b class = 'ct-code-b-yellow'>Employee</b> is overridden and executed because "+
								"<b class = 'ct-code-b-yellow'>obj</b> contains address of derived class object "+
								"<b class = 'ct-code-b-yellow'>emp</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			}
			break;
		case "funcdef2":
			introjs.refresh();
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch (animateStep) {
			case "first":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here <b class='ct-code-b-yellow'>displayLocation()</b> in the derived class "+
							"<b class='ct-code-b-yellow'>Employee</b> implements the pure virtual function "+
							"of class <b class='ct-code-b-yellow'>Comapany</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});	
				break;
			case "second":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =  "<b class = 'ct-code-b-yellow'>displayLocation()</b> of the class "+
								"<b class = 'ct-code-b-yellow'>Employee</b> is overridden and executed because "+
								"<b class = 'ct-code-b-yellow'>obj</b> contains address of derived class object "+
								"<b class = 'ct-code-b-yellow'>emp</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			}
			break;
		case "main":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<b class='ct-code-b-yellow'>main()</b> is the starting point of execution.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "obj1":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here declaring an object for abstract class <b class='ct-code-b-yellow'>Company</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "outputDiv" :
			$("#outputDiv").removeClass("opacity00");
			$(".introjs-helperLayer").css({'width' : '380px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].animateStep == "first") {
					$("#animationBox").addClass("opacity00");
					$("#out0").remove();
					$("#outputBody").append("<div id='out0'><div id='out'><b class='ct-yellow-color'>sample</b>.cpp: "+
								"<b class='ct-red-color'>error</b>: cannot declare variable 'comp' to be of "+
								"<span class='blinking' id='abstract'>abstract</span> type 'Company'</div>"+
								"<br><div id='out2'><b class ='ct-yellow-color'>sample</b>.cpp: <b class='ct-red-color'>error</b>: "+
								"because the following virtual functions are <b class='blinking' id='pure'>pure</b> "+
								"within class 'Company'</div></div>");
					$("#abstract, #pure").removeClass("blinking-white");
					$('.introjs-tooltip').removeClass('hide');
					var text =	"It shows the following <b class='ct-red-color'>error</b> that "+
								"<b class='ct-yellow-color'>Company</b> class is an abstract class.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else if (introjs._introItems[introjs._currentStep].animateStep == "second") {
					if (introjs._direction == "backward") {
						$("#cod").remove();
					} else {
						$("br").remove();
						$("#outputBody").append("<div id='cod'>CodeTantra</div>");
					}
					nextStep();
				} else {
					if (introjs._direction == "backward") {
						$("#hyd").remove();
					} else {
						$("#outputBody").append("<div id='hyd'>Hyderabad</div>");
					}
					nextStep();
				}
			});
			break;
		case "cout1":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement displays <b class='ct-yellow-color'>CodeTantra</b> on console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "cout2":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement displays <b class='ct-yellow-color'>Hyderabad</b> on console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "obj2":
			introjs.refresh();
			$("#out, #out2").remove();
			$("#obj1").prepend("<span id='slash'><mark>//<mark></span>");
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass('hide');
				var text =  "<ul><li>Here declaring a pointer variable <b class='ct-yellow-color'>obj</b> for class "+
							"<b class='ct-yellow-color'>Company</b>.</li>"+
							"<li>It is used to store the address of an object of the derived class.</li></ul>";
				typing((".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
					$("#animationBox").removeClass("opacity00");
				});
			});
			break;
		case "pointer":
			introjs.refresh();
			$(".introjs-helperLayer").css("width", "100px");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#s1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$("#box,#addr").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#s1, #box,#addr").removeClass("animated zoomIn");
						$('.introjs-tooltip').removeClass('hide');
						var text = "During declaration of pointer variable <b class='ct-yellow-color'>obj</b> " + 
								" of class <b class='ct-yellow-color'>Company</b>, 2 bytes of memory is allocated.";
						typing($(".introjs-tooltiptext"), text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
				});
			});
			break;
		case "emp" :
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here declaring <b class='ct-yellow-color'>emp</b> object for derived class "+
							"<b class='ct-yellow-color'>Employee</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "pointer2":
			introjs.refresh();
			$(".introjs-helperLayer").css("width", "180px");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
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
											$('.introjs-tooltip').removeClass('hide');
											var text =  "Here during declaration of object <b class='ct-yellow-color'>emp</b> of derived class "+
														"<b class='ct-yellow-color'>Employee</b>, memory is allocated."
											typing($(".introjs-tooltiptext"), text, function() {
												$(".introjs-nextbutton, .introjs-prevbutton").show();
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
		case "objaddr":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text =	"Here address of derived class object <b class='ct-yellow-color'>emp</b> is assigned to pointer "+
							"<b class='ct-yellow-color'>obj</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			})
			break;
		case "objpointer":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#xValue").text($("#addr2").text());
				var l1 = $("#addr2").offset();
				$("#xValue").offset({"top": l1.top, "left": l1.left});
				tl.to("#xValue", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
					$(".svg-line, #arrowEnd1").show();
					$(".svg-line").attr("x2", "33.5%");
					TweenMax.to($('.svg-line'), 1,  {opacity: 1, attr: {x2: '39%', y2: '46%'}, onComplete: function() {
						$('.introjs-tooltip').removeClass('hide');
						typing($(".introjs-tooltiptext"),  "pointer object <b class='ct-yellow-color'>obj</b> holds the address of "+
							"derived class object <b class='ct-yellow-color'>emp</b>.", function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					}});
				}}); 
			});
			break;
		
		case "display":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement calls the <b class='ct-yellow-color'>displayName()</b>"+
							" through pointer variable <b class='ct-yellow-color'>obj</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();	
				});
			});
			break;
		case "display2":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement calls the <b class='ct-yellow-color'>displayLocation()</b> "+
							"through pointer variable <b class='ct-yellow-color'>obj</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
		case "end":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing($(".introjs-tooltiptext"),"End of the program.", function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
		case "restart":
			$(".introjs-nextbutton").hide();
			$('.introjs-tooltip').css({'min-width' : '120px'});
			$("#restart").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text="click to restart";
				typing($(".introjs-tooltiptext"), text, function() {
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

function nextStep() {
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