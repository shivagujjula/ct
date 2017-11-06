var introjs;
var typingSpeed = 10;
var defaultArguementReady123 = function() {
	$(".introjs-nextbutton").keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	introGuide();
	$("#restart").click(function(){
		 location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 		element : "#demoTitle",
					intro : "",
					position : "right"
				},{
			 		element : "#informationDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#leftDiv",
					intro : "",
					position : "right"
				},{
			 		element : "#funDef",
					intro : "",
					animateStep : "first",
					position : "right"
				} ,{
			 		element : "#default",
					intro : "",
					position : "right"
				},{
			 		element : "#callingFunSum1",
					intro : "",
					position : "right"
				},{
			 		element : "#funDef",
					intro : "",
					animateStep : "second",
					position : "right"
				},{
			 		element : "#return",
					intro : "",
					animateStep : "first",
					tooltipClass : "hide",
					position : "right"
				},{
			 		element : "#printf1",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",   
					animateStep : "one",
					tooltipClass : "hide"
				},{
			 		element : "#callingFunSum2",
					intro : "",   
					position : "right"
				},{
			 		element : "#funDef",
					intro : "",
					animateStep : "third",
					position : "right"
				},{
			 		element : "#return",
					intro : "",
					animateStep : "second",
					tooltipClass : "hide",
					position : "right"
				},{
			 		element : "#printf2",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",   
					animateStep : "two",
					tooltipClass : "hide"
				},{
			 		element : "#callingFunSum3",
					intro : "",   
					position : "right"
						
				},{
			 		element : "#funDef",
					intro : "",
					animateStep : "forth",
					position : "right"
				},{
			 		element : "#return",
					intro : "",
					animateStep : "third",
					tooltipClass : "hide",
					position : "right"
				},{
			 		element : "#printf3",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",   
					animateStep : "three",
					tooltipClass : "hide"
				},{
					element : "#end",
					intro : "",
					position : "right"
				},{
			 		element : "#restart",
					intro : "",
					position : "right"
				}
			]});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case "printf1":
			$("#outputDiv").addClass("opacity00");
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
		switch (elementId) {
		case "demoTitle":
			$('.introjs-nextbutton').hide();
     		var text = "Here we will learn about <b class ='ct-code-b-yellow'>Default arguments</b> in "+
     		"<b class ='ct-code-b-yellow'>functions</b>.";					
			typing($(".introjs-tooltiptext"), text, function() {
				$(".introjs-nextbutton").show();
			});
		break;
		case "informationDiv":
			$("#informationDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#li1").fadeTo(500, 1, function() {
					$("#li2").fadeTo(500, 1, function() {
						$("#li3").fadeTo(500, 1, function() {
							$("#nextButton").removeClass("opacity00");
							$("#nextButton").click(function() {
								$("#nextButton").remove();
								introjs.nextStep();
							});
						});
					});
				});
			});	
			
			
		break;
		case "leftDiv":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#leftDiv').removeClass("opacity00");
				var text = "Let us consider program to understand the usage of the <b class ='ct-code-b-yellow'>"+
						   "default arguments</b> in <b class ='ct-code-b-yellow'>functions</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "funDef":
			var elementcase = introjs._introItems[introjs._currentStep].animateStep;
			switch (elementcase) {
			case "first":
				$(".introjs-nextbutton, .introjs-prevbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here we are defining <b class ='ct-code-b-yellow'>sum()</b> function with parameters "+
						   "<b class ='ct-code-b-yellow'>x, y, </b> <b class ='ct-code-b-yellow'>z, w</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case "second":
				$(".introjs-nextbutton, .introjs-prevbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li>In <b class ='ct-code-b-yellow'>sum()</b> function, <b class ='ct-code-b-yellow'>x</b> "
							 +	"is copied with <b class ='ct-code-b-yellow'>10</b>, <b class ='ct-code-b-yellow'>y</b> is copied with "
							 +	"<b class ='ct-code-b-yellow'>15</b>.</li><li><b class ='ct-code-b-yellow'>z</b> is assigned with " 
							 +	"<b class ='ct-code-b-yellow'>3</b> and <b class ='ct-code-b-yellow'>w</b> is assigned with "
							 +	"<b class ='ct-code-b-yellow'>0</b> values which are "
							 +	"<b class ='ct-code-b-yellow'>default arguments</b>.</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case "third": 
				$(".introjs-nextbutton, .introjs-prevbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "<ul><li>In <b class ='ct-code-b-yellow'>sum()</b> function, "+
								"<b class ='ct-code-b-yellow'>x</b> is copied with <b class ='ct-code-b-yellow'>10</b>, "+
								"<b class ='ct-code-b-yellow'>y</b> is copied with <b class ='ct-code-b-yellow'>15</b>, "+
								"<b class ='ct-code-b-yellow'>z</b> is copied with <b class ='ct-code-b-yellow'>25</b>.</li>"+
								"<li><b class ='ct-code-b-yellow'>w</b> is assigned with <b class ='ct-code-b-yellow'>0</b> "+
								"which is a <b class ='ct-code-b-yellow'>default argument</b>.</li></ul>";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case "forth":
				$('.introjs-nextbutton,.introjs-prevbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "In <b class ='ct-code-b-yellow'>sum()</b> function, <b class ='ct-code-b-yellow'>x</b> "+
								"is copied with <b class ='ct-code-b-yellow'>10</b>, <b class ='ct-code-b-yellow'>y</b> "+
								"is copied with <b class ='ct-code-b-yellow'>15</b>, <b class ='ct-code-b-yellow'>z</b> "+
								"is copied with <b class ='ct-code-b-yellow'>25</b> and <b class ='ct-code-b-yellow'>w</b> "+
								"is copied with <b class ='ct-code-b-yellow'>30</b> as arguments and no "+
								"<b class ='ct-code-b-yellow'>default arguments</b> are assaigned.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			}
			break;
		case "default":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here <b class ='ct-code-b-yellow'>z = 3</b> and <b class ='ct-code-b-yellow'>w = 0</b> "+
							"are called <b class ='ct-code-b-yellow'>default arguments</b>. These values are assigned "+
							"by the compiler to the variables only when the arguments are not passed.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "callingFunSum1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Here the function <b class ='ct-code-b-yellow'>sum()</b> is called with two arguments "+
							"<b class ='ct-code-b-yellow'>10</b> and <b class ='ct-code-b-yellow'>15</b>.</li>" + 
							"<li>But in function definition of <b class ='ct-code-b-yellow'>sum()</b>, "+
							"<b class ='ct-code-b-yellow'>4</b> parameters are involved.</li>" + 
							"<li><b class ='ct-code-b-yellow'>10</b> and <b class ='ct-code-b-yellow'>15</b> "+
							"are passed to the function definition of <b class ='ct-code-b-yellow'>sum()</b> and "+
							"remaining two parameters are considered as <b class ='ct-code-b-yellow'>default arguments</b>.</li><ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "callingFunSum2":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Here the function <b class ='ct-code-b-yellow'>sum()</b> is called with three arguments "+
							"<b class ='ct-code-b-yellow'>10,</b> <b class ='ct-code-b-yellow'>15</b> and "+
							"<b class ='ct-code-b-yellow'>25</b>.</li> <li><b class ='ct-code-b-yellow'>10, 15</b> and "+
							"<b class ='ct-code-b-yellow'>25</b> are passed to the function definition of "+
							"<b class ='ct-code-b-yellow'>sum()</b> and remaining parameter is considered as "+
							"<b class ='ct-code-b-yellow'>default argument</b>.</li><ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "callingFunSum3":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Here the function <b class='ct-code-b-yellow'>sum()</b> is called with arguments "+
							"<b class='ct-code-b-yellow'>10, 15, 25</b> and <b class='ct-code-b-yellow'>30</b>.</li>" + 
							" <li><b class='ct-code-b-yellow'>10, 15, 25, 30</b> are passed to the function definition "+
							"<b class='ct-code-b-yellow'>sum()</b> and default argument values are not taken.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
				
		case "return":
			var elementcase = introjs._introItems[introjs._currentStep].animateStep;
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			switch (elementcase) {
			case "first":
				$(".introjs-helperLayer").one("transitionend", function() {
					$('.introjs-tooltip').removeClass('hide');
					$(".introjs-tooltiptext").append("<b class ='ct-code-b-yellow'>" 
							+ " <div id='rtn' class='display-inline-block relative'>return"
							+ " <div id='xyVal' class='display-inline-block relative'>"
							+ " <div id='xVal' class='display-inline-block relative'> x </div>" 
							+ " + "
							+ " <div id='yVal' class='display-inline-block relative'>y</div>"
							+ " + "
							+ " <div id='zVal' class='display-inline-block relative'>z</div>"
							+ " + "
							+ " <div id='wVal' class='display-inline-block relative'>w</div></div></b>");
					fromEffectWithTweenMax("#return", "#rtn", function() {
						transferVal("#aVal", "#xVal", function() {
							transferVal("#bVal", "#yVal", function() {
								transferVal("#cVal", "#zVal", function() {
									transferVal("#dVal", "#wVal", function() {
										$("#xyVal").text(parseInt($("#aVal").text()) + 
												parseInt($("#bVal").text()) + parseInt($("#cVal").text()) + 
												parseInt($("#dVal").text()));
										TweenMax.to("#xyVal", 0.5, {rotationX : 0, onComplete:function() {
											introjs.refresh();
											$(".introjs-nextbutton, .introjs-prevbutton").show();
										}});
									});
								});
							});
						});	
					});
				});
				break;
			case "second":
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					$('.introjs-tooltip').removeClass('hide');
					$(".introjs-tooltiptext").append("<b class ='ct-code-b-yellow'>" 
							+ " <div id='rtn' class='display-inline-block relative'>return"
							+ " <div id='xyVal' class='display-inline-block relative'>"
							+ " <div id='xVal' class='display-inline-block relative'> x </div>" 
							+ " + "
							+ " <div id='yVal' class='display-inline-block relative'>y</div>"
							+ " + "
							+ " <div id='zVal' class='display-inline-block relative'>z</div>"
							+ " + "
							+ " <div id='wVal' class='display-inline-block relative'>w</div></div></b>");
					fromEffectWithTweenMax("#return", "#rtn", function() {
						transferVal("#a1Val", "#xVal", function() {
							transferVal("#b1Val", "#yVal", function() {
									transferVal("#c1Val", "#zVal", function() {
										transferVal("#dVal", "#wVal", function() {
											$("#xyVal").text(parseInt($("#a1Val").text()) + parseInt($("#b1Val").text()) +
													parseInt($("#c1Val").text()) + parseInt($("#dVal").text()));
											TweenMax.to("#xyVal", 0.5, {rotationX : 0, onComplete:function() {
											introjs.refresh();
											$(".introjs-nextbutton, .introjs-prevbutton").show();
											}});
										});
									});
								});
							});	
						});
					});
			break;	
		
			case "third":
				$(".introjs-helperLayer").one("transitionend", function() {
					$('.introjs-tooltip').removeClass('hide');
					$(".introjs-tooltiptext").append("<b class ='ct-code-b-yellow'>" 
							+ " <div id='rtn' class='display-inline-block relative'>return"
							+ " <div id='xyVal' class='display-inline-block relative'>"
							+ " <div id='xVal' class='display-inline-block relative'>x</div>" 
							+ " + "
							+ " <div id='yVal' class='display-inline-block relative'>y</div>"
							+ " + "
							+ " <div id='zVal' class='display-inline-block relative'>z</div>"
							+ " + "
							+ " <div id='wVal' class='display-inline-block relative'>w</div></div></b>");
					fromEffectWithTweenMax("#return", "#rtn", function() {
						transferVal("#a2Val", "#xVal", function() {
							transferVal("#b2Val", "#yVal", function() {
								transferVal("#c2Val", "#zVal", function() {
									transferVal("#d2Val", "#wVal", function() {
										$("#xyVal").text(parseInt($("#a2Val").text()) + 
													parseInt($("#b2Val").text()) +
													parseInt($("#c2Val").text()) +
													parseInt($("#d2Val").text()));
										TweenMax.to("#xyVal", 0.5, {rotationX : 0, onComplete:function() {
											introjs.refresh();
											$(".introjs-nextbutton, .introjs-prevbutton").show();
										}});
									});
								});
							});
						});	
					});
				});
				break;
			}
			break;
		case "printf1":
			coutPrint();
		break;
		case "printf2":
		
			coutPrint();
		break;
		case "printf3":
			coutPrint();
		break;
		case "outputDiv":	
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$("#outputDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].animateStep == "one") {
					if (introjs._direction == "backward") {
						$("#output1").hide();
						nextStep();
					} else {
						$("#output1").show();
						TweenMax.to( $('#output1'), 0.2 , {opacity : 1, onComplete: function() {
							nextStep();
						}});
					}
				} else if (introjs._introItems[introjs._currentStep].animateStep == "two") {
					if (introjs._direction == "backward") {
						$("#output2").hide();
						nextStep();
					} else {
						$("#output2").show();
						TweenMax.to($('#output2'), 0.2 , {opacity : 1, onComplete: function() {
							nextStep();
						}});
					}
				} else {
					if (introjs._direction == "backward") {
						$("#output3").hide();
						nextStep();
					} else {
						$("#output3").show();
						TweenMax.to( $('#output3'), 0.2 , {opacity : 1, onComplete: function() {
							setTimeout(function() {
								introjs.nextStep();
							},1500);
						}});
					}
				}
			});
			break;
		case "end":
			introjs.refresh();
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "End of the program";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			
			break;
		
		case "restart":
			introjs.refresh();
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$('#restart').removeClass("opacity00");
			$(".introjs-tooltip").css({"min-width": "115px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart";
				typing($(".introjs-tooltiptext"), text, function() {
				});
			});
		break;
		}
	});
	
	
	introjs.start();
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
	}});
}

function coutPrint() {
	$('.introjs-nextbutton, .introjs-prevbutton').hide();
	introjs.refresh();
	$(".introjs-helperLayer").one("transitionend", function() {
		var text = "<b class ='ct-code-b-yellow'>cout</b> statement displays the output returned by "+
				"<b class ='ct-code-b-yellow'>sum()</b> function.";
		typing($(".introjs-tooltiptext"), text, function() {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		});
	});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: 'yellow'}, 500);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
	$(selector1).removeClass("z-index1000000")
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
function transferVal(value1, value2, callBackFunction) {
	transferEffect(value1, value2, function() { 
		TweenMax.to(value2, 0.5, {rotationX : -90, onComplete:function() {
			$(value2).text($(value1).text());
			TweenMax.to(value2, 0.5, {rotationX : 0, onComplete:function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
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
