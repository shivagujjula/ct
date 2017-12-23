var typingSpeed = 1;
var introjs;
var tl;

var virtualFunction = function() {
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
			intro : "",
			position : "right",
			//tooltipClass : "hide"
		}, {
			element : "#base",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		},{
			element : "#derived",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#main",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#pointObj",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#pointer",
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#pointObj1",//objpointer
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#pointer2",//"objaddr"
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#objaddr",//objpointer
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#objpointer",//objpointer
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#funcCall",//objpointer
			intro : "",
			animateStep : "first",
			tooltipClass : "hide",
			position : "right"
		},{
			element : "#displayFunc",//objpointer
			intro : "",
			tooltipClass : "hide",
			position : "right"
		},{
			element : "#funcCall",//objpointer
			intro : "",
			animateStep : "second",
			tooltipClass : "hide",
			position : "right"
		},{
			element : "#restart",
			intro : "",
			position : "right"
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case "code":
			$("#informationDiv").addClass("z-index1000000");
			$("#base").addClass("opacity00");
			break;
		case "base":
			$("#derived").addClass("opacity00");
			break;
		case "derived":
			$("#main").addClass("opacity00");
			break;
		case "main":
			$("#animationBox").addClass("opacity00");
			break;
		case "pointObj":
			$("#pointer,#addr, #box").addClass("opacity00");
			break;
		case "pointObj1":
			$("#borderLine").css("opacity","0")
			$("#pointer2,#addr2, #box2, #func2").addClass("opacity00");
			break;
		case "objaddr":			
			$("#xValue").text("");
			$(".svg-line").attr("x2", "42%");
			$(".svg-line").css("opacity", "0");
			break;
		case "objpointer":
			$("#outputBody").empty();
			$("#outputDiv").addClass("opacity00");
			break;
		case "funcCall":
			if (introjs._introItems[introjs._currentStep].animateStep == "first") {
				$("#void > .ct-red-color").text("");
			}
			$("#outputBody").empty();
			break;
		case "displayFunc":
			$("#void > .ct-red-color").text("");
			break;
		
		}
	});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			if (introjs._currentStep != 0 && introjs._currentStep != 1 && introjs._currentStep != 2) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		var elementId = targetElement.id;
		switch(elementId) {
		case "title":
			var text = "Let us learn about <b class ='ct-code-b-yellow'>virtual functions</b>.";	
			typing($(".introjs-tooltiptext"), text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case "informationDiv":
			$("#informationDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$( "#li1" ).removeClass("opacity00", function() {
					$( "#li2" ).removeClass("opacity00", function() {
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
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#code").removeClass("opacity00");
			$(".introjs-tooltip").removeClass("hide");
			var text = "Let us see a sample code to understand the usage of <b class='ct-code-b-yellow'>virtual functions</b>.";
			typing($(".introjs-tooltiptext"), text, function() {
				$(".introjs-nextbutton").show();
			});
			});
			break;
		case "base":
			console.log("1k");
			$(".introjs-helperLayer").one("transitionend", function() {
				console.log("2");
				$("#base").removeClass("opacity00");
			var text = "Here <b class='ct-code-b-yellow'>Base</b> class is declared with one member function <b class='ct-code-b-yellow'>display()</b>.";
			$(".introjs-tooltip").removeClass("hide");
			typing($(".introjs-tooltiptext"), text, function() {
				console.log("3");
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			});
			});
			break;
		case "derived":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#derived").removeClass("opacity00");
				var text = 	"<ul><li>A derived class <b class='ct-code-b-yellow'>Derived</b> is declared "+
							" which is derived publicly from the class <b class='ct-code-b-yellow'>Base</b>.</li>" +
							"<li>This <b class='ct-code-b-yellow'>Derived</b> class also contains one member function "+
							" <b class='ct-code-b-yellow'>display()</b>.</li></ul>"; 
				$(".introjs-tooltip").removeClass("hide");
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "main":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#main").removeClass("opacity00");
				var text = "<b class='ct-code-b-yellow'>main()</b> is the starting point of execution.";
				$(".introjs-tooltip").removeClass("hide");
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "pointObj":
			$("#animationBox").removeClass("opacity00");
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here a pointer <b class='ct-code-b-yellow'>p</b> is declared to the <b class='ct-code-b-yellow'>Base</b> class.";
				$(".introjs-tooltip").removeClass("hide");
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "pointer":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			if (introjs._direction == "forward") {
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#pointer").removeClass("opacity00", function() {
					$("#box").removeClass("opacity00", function() {
						$("#addr").removeClass("opacity00", function() {
						setTimeout(function() {
							introjs.goToStep(9);
						},1500);
					});
				});
				});
			});
			} else {
				$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.goToStep(7);
				},1500);
				});
			}
			break;
		case "pointObj1":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here an object <b class='ct-code-b-yellow'>obj</b> is created to the <b class='ct-code-b-yellow'>Derived</b> class.";
				$(".introjs-tooltip").removeClass("hide");
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "pointer2":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			if (introjs._direction == "forward") {
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#pointer2").removeClass("opacity00", function() {
					$("#box2").removeClass("opacity00", function() {
							$("#addr2").removeClass("opacity00", function() {
								$("#borderLine").css("opacity","1")
								transferEffect("#displayFunc1", "#func2", function() {
									$("#func2").removeClass("opacity00");
						setTimeout(function() {
							introjs.goToStep(11);
						},1500);
						});
					});
				});
				});
			});
			} else {
				$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.goToStep(9);
				},1500);
			});
			}
			break;
		case "objaddr":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text =	"The address of the <b class='ct-code-b-yellow'>Derived</b>  class object <b class='ct-code-b-yellow'>obj</b> is assigned "+
				"to the pointer <b class='ct-code-b-yellow'>p</b> of the <b class='ct-code-b-yellow'>Base</b> class.";
				$(".introjs-tooltip").removeClass("hide");
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "objpointer":
			introjs.refresh();
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
				if (introjs._direction == "forward") {
					$(".introjs-helperLayer").one("transitionend", function() {
				$("#xValue").text($("#addr2").text());
				var l1 = $("#addr2").offset();
				$("#xValue").offset({"top": l1.top, "left": l1.left});
				tl.to("#xValue", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
					$(".svg-line, #arrowEnd1").show();
					$(".svg-line").attr("x2", "42%");
					TweenMax.to($('.svg-line'), 1,  {opacity: 1, attr: {x2: '55%', y2: '50%'}, onComplete: function() {
						setTimeout(function() {
							introjs.nextStep(); 
						},1500);
					}});
				}}); 
				});
				} else {
						$(".introjs-helperLayer").one("transitionend", function() {
							setTimeout(function() {
								introjs.previousStep(); 
							},1200);
						});
				}
		
			break;
		case "funcCall":
			$("#outputDiv").removeClass("opacity00");
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			if (introjs._introItems[introjs._currentStep].animateStep == "first") {
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#displayFunc").addClass("z-index");
				var text = "<ul><li>The <b class='ct-code-b-yellow'>Base</b> and <b class='ct-code-b-yellow'>Derived</b> classes "+
						"have the same member function <b class='ct-code-b-yellow'>display()</b>.</li>"+
					"<li>The pointer <b class='ct-code-b-yellow'>p</b> contains the address of <b class='ct-code-b-yellow'>obj</b> "+
					"but the method <b class='ct-code-b-yellow'>display()</b> of the <b class='ct-code-b-yellow'>Base</b> class"+
					" is called according to the declared type of the pointer i.e of base class type.</li></ul>";
				$(".introjs-tooltip").removeClass("hide");
				typing($(".introjs-tooltiptext"), text, function() {
				$('.introjs-tooltipbuttons').append("<a  class='introjs-button nextBtn'>Next&#8594;</a>");
				$(".nextBtn").click(function() {
					$(".introjs-tooltiptext").empty();
					$(".nextBtn").remove();
					$("#displayFunc").addClass("z-index1000000");
					$(".introjs-tooltiptext").append("<b id='x1'></b>");
					$("#x1").append("<span id='line1'>void display() {</span><br>");
					$("#x1").append("<span id='line8'><span>&nbsp;&nbsp;&nbsp;</span><span id='line2' style='white-space: nowrap;'> "+
							"cout << <b class='ct-code-b-yellow'>\"This is base class display()\"</b> << endl;</span></span><br>");
					$("#x1").append("<span id='line3'>}</span>");
					var l1 = $("#displayFunc").offset();
					$("#x1").offset({"top": l1.top, "left": l1.left});
					tl.to("#x1", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
						$('.introjs-tooltipbuttons').append("<a  class='introjs-button nextBtn1'>Next&#8594;</a>");
					$(".nextBtn1").click(function() {
						$("#displayFunc").removeClass("z-index1000000");
						$(".nextBtn1").remove();
						$("#outputDiv").addClass("z-index1000000");
						$("#outputBody").append("<span class='opacity00' id='out1'>This is base class display()</span>");
						transferEffect("#line2", "#out1", function() {
							$("#out1").removeClass("opacity00");
						var text = "The <b class='ct-code-b-yellow'>display()</b> of <b class='ct-code-b-yellow'>Base</b> class "+
											" is bounded by <b class='ct-code-b-yellow'>early binding</b>(by the compiler)" +
											" according to the declared type of the pointer <b class='ct-code-b-yellow'>p</b>.";
						$("#outputDiv").removeClass("z-index1000000");	
						typing($(".introjs-tooltiptext"),  text, function() {
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
						});
					});
					}});
				});
				
				});
			});
			} else {
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#displayFunc").addClass("z-index");
					var text = "<ul><li>The method <b class='ct-code-b-yellow'>display()</b> is called by pointer <b class='ct-code-b-yellow'>p</b> "+
					"according to the actual type of the object referred to, i.e object of derived class <b class='ct-code-b-yellow'>obj</b>.</li></ul>";
				$(".introjs-tooltip").removeClass("hide");
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-tooltipbuttons').append("<a  class='introjs-button nextBtn'>Next&#8594;</a>");
					$(".nextBtn").click(function() {
						$(".introjs-tooltiptext").empty();
						$(".nextBtn").remove();
						$("#displayFunc1").addClass("z-index1000000");
						$(".introjs-tooltiptext").append("<b id='x2'></b>");
						$("#x2").append("<span id='line4'>void display() {</span><br>");
						$("#x2").append("<span id='line7'  style='white-space: nowrap;'><span>&nbsp;&nbsp;&nbsp;</span><span id='line5'> "+
								"cout << <b class='ct-code-b-yellow'>\"This is derived class display()\"</b> << endl;</span></span><br>");
						$("#x2").append("<span id='line6'>}</span>");
						var l1 = $("#displayFunc1").offset();
						$("#x2").offset({"top": l1.top, "left": l1.left});
						tl.to("#x2", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
							$('.introjs-tooltipbuttons').append("<a  class='introjs-button nextBtn1'>Next&#8594;</a>");
						$(".nextBtn1").click(function() {
							$("#displayFunc1").removeClass("z-index1000000");
							$(".nextBtn1").remove();
							$("#outputDiv").addClass("z-index1000000");
							$("#outputBody").append("<span class='opacity00' id='out2'>This is derived class display()</span>");
							transferEffect("#line5", "#out2", function() {
								$("#out1").removeClass("opacity00");
							var text = "Here the <b class='ct-code-b-yellow'>display()</b> called by the pointer <b class='ct-code-b-yellow'>p</b>"+
												" is bounded by <b class='ct-code-b-yellow'>late binding</b>(during the runtime).";
							$("#outputDiv").removeClass("z-index1000000");
								typing($(".introjs-tooltiptext"),  text, function() {
										$(".introjs-nextbutton, .introjs-prevbutton").show();
									});
							});
						});
						}});
					});
				});
			});
			}
			break;
		case "displayFunc":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputBody").empty();
				var text = "Now add keyword <b class='ct-code-b-yellow'>virtual</b> to <b class='ct-code-b-yellow'>display()</b> "+
								" in <b class='ct-code-b-yellow'>Base</b> class.";
				$(".introjs-tooltip").removeClass("hide");
				typing($(".introjs-tooltiptext"), text, function() {
					$("#void").prepend("<b class='ct-red-color' id='virtual'>virtual </b>")
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "restart":
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#restart").removeClass("opacity00");
			var text = "Click to restart";
			typing($(".introjs-tooltiptext"), text, function() {
			});
			});
			break;
		}
	});
	introjs.start();
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: 'red'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index1000000");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
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