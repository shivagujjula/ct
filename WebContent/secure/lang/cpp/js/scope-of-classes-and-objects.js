var introjs;
var typingSpeed = 2;
var scopeClass = function() {
	introGuide();
 	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
 	$("#restartBtn").click(function() {
 		location.reload();
 	});
 	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
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
		steps : [{
			element : "#demoTitle",
			intro : '',
			position : "right"
		},{
			element : "#informationDiv", 
			intro : '',
			animateStep : 'first',
			tooltipClass : "hide"
		},{
			element : "#code", 
			intro : '',
			position : "right"
		},{ 
			element : "#Outer", 
			intro : '',
			tooltipClass : "hide",
			position : "right"
		},{ 
			element : "#object1", 
			intro : '',
			tooltipClass : "hide",
			position : "right"
		},{ 
			element : "#animationBox", 
			intro : '',
			animateStep : 'first',
			tooltipClass : "hide",
			position : "right"
		},{ 
			element : "#variable", 
			intro : '',
			tooltipClass : 'hide'
		},{
			element : "#animationBox",
			intro : '',
			animateStep : 'second',
			tooltipClass : "hide",
			position : "right" 
		},{ 
			element : "#main",
			intro : '',
			
			tooltipClass : "hide"
		},{
			element : "#objVal1",
			intro : '',
			position : "right"
		},{ 
			element : "#value1", 
			intro : '',
			tooltipClass : 'hide'
		},{
			element : "#animationBox",
			intro : '',
			animateStep : 'third',
			tooltipClass : 'hide',
			position : "right" 
		},{ 
			element : "#cout1", 
			intro : '',
			tooltipClass : 'hide',
			position : "right"
		},{ 
			element : "#outputDiv", 
			intro : '',
			animateStep : 'out1',
			tooltipClass : "hide"
		},{ 
			element : "#func1",
			intro : '',
			tooltipClass : "hide"
		},{ 
			element : "#func2",
			intro : '',
			tooltipClass : "hide"
		},{
			element : "#objVal2",
			intro : '',
			position : "right"
		},{
			element : "#value2",
			intro : '',
			tooltipClass : "hide"
		},{
			element : "#animationBox",
			intro : '',
			animateStep : 'forth',
			tooltipClass : 'hide',
			position : "right" 
		},{ 
			element : "#cout2",
			intro : '',
			position : "right"
		},{ 
			element : "#outputDiv", 
			intro : '',
			animateStep : 'out2',
			tooltipClass : "hide"
		},{ 
			element : "#cout4",
			intro : '',
			position : "right"
		},{ 
			element : "#outputDiv", 
			intro : '',
			animateStep : 'out6',
			tooltipClass : "hide"
		},{
			element : "#end",
			intro : "",
			position : "right"
		},{
			element : "#informationDiv", 
			intro : '',
			animateStep : "li3",
			tooltipClass : "hide"
		},{
			element : "#code1",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		},{ 
			element : "#main1", 
			intro : '',
			tooltipClass : "hide"
		},{
			element : "#Inner",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		},{ 
			element : "#object2", 
			intro : '',
			tooltipClass : "hide",
			position : "right"
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : 'first',
			tooltipClass : "hide", 
			position : "right" 
		},{ 
			element : "#variable1", 
			intro : '',
			tooltipClass : 'hide'
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : 'second',
			tooltipClass : 'hide',
			position : "right" 
		},{ 
			element : "#object3", 
			intro : '',
			tooltipClass : 'hide',
			position : "right"
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : 'third',
			tooltipClass : 'hide',
			position : "right" 
		},{ 
			element : "#variable2", 
			intro : '',
			tooltipClass : 'hide'
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : 'forth',
			tooltipClass : 'hide',
			position : "right" 
		},{
			element : "#objVal3",
			intro : '',
			position : "right"
		},{ 
			element : "#value3", 
			intro : '',
			tooltipClass : 'hide'
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : 'fifth',
			tooltipClass : 'hide',
			position : "right" 
		},{
			element : "#objVal4",
			intro : '',
			position : "right"
		},{ 
			element : "#value4", 
			intro : '',
			tooltipClass : 'hide'
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : 'sixth',
			tooltipClass : 'hide',
			position : "right" 
		},{ 
			element : "#cout3", 
			intro : '',
			tooltipClass : 'hide',
			position : "right"
		},{ 
			element : "#outputDiv", 
			intro : '',
			animateStep : 'out3',
			tooltipClass : 'hide'
		},{ 
			element : "#cout5", 
			intro : '',
			position : "right"
		},{ 
			element : "#outputDiv", 
			intro : '',
			animateStep : 'out4',
			tooltipClass : 'hide'
		},{
			element : "#end1",
			intro : "",
			position : "right"
		},{ 
			element : "#button", 
			intro : '',
			position : "right"
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case "animationBox" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'first':
				$("#animationBox, #s1, #borderBox").addClass("opacity00");
				break;
			case 'second':
				$("#boxParent, #one").addClass("opacity00");
				break;
			case "third":
				$("#box").text("");
				break;
			case "forth":
				$("#box").text($("#value1").text());
				break;			
			}
			break;
		case "li3":
			$("#li3,#li4").addClass("opacity00");
			$("#code1").addClass("hide");
			break;
		case "cout3":
			$("#outputDiv").addClass("opacity00");
			break;
		case "code1":
			$("#code1").removeClass("hide");
			break;
		case "end":
			$("#animationBox, #code").show();
			$("#outputDiv, #output1, #output2").removeClass("opacity00");
			$("#li3, #li4").addClass("opacity00");
			$("#outResult1, #outResult2, #outResult3").removeClass("hide");
			break;
		case "animationBox2" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'first':
				$("#s2, #borderBox1").addClass("opacity00");
				break;
			case 'second':
				$("#boxParent2, #three").addClass("opacity00");
				break;
			case 'third' :
				$("#s3, #borderBox2").addClass("opacity00");
				break;
			case "forth" :
				$("#boxParent3, #four").addClass("opacity00");
				break;
			case "fifth":
				$("#box2").text("");
				break;
			case "sixth":
				$("#box3").text("");
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
		case "demoTitle":
			var text = "Here we will learn about <b class ='ct-code-b-yellow'>Scope of classes</b> "+
						"and <b class ='ct-code-b-yellow'>Objects</b>.";					
			typing($(".introjs-tooltiptext"), text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case "informationDiv" :
			introjs.refresh();
			$('#informationDiv').removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			$('#informationDiv').removeClass("opacity00");
			switch (animateStep) {
			case "first":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#li1").fadeTo(300, 1, function() {
						$("#li2").fadeTo(300, 1, function() {
							$("#nextButton").fadeTo(300, 1, function() {
								$("#nextButton").click(function() {
									$('#nextButton').remove();
									introjs.nextStep();
								});
							});
						});
					});
				});
				break;
			case "li3" :
				$("#animationBox, #code").hide();
				$("#outputDiv, #output1, #output2").addClass("opacity00");
				$("#code1").addClass("hide");
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#li3").removeClass("opacity00", function() {
						$("#li4").removeClass("opacity00", function() {
							$(".introjs-tooltip").removeClass("hide");
							var text =	"Here we will learn about <b class ='ct-code-b-yellow'>local class</b> and "+
										"<b class ='ct-code-b-yellow'>local object</b>.";
								typing($('.introjs-tooltiptext'), text, function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
					});
				break;
			}
			break;
		case "code" :
			$('.classCode').removeClass("opacity00");
			$("#Outer").removeAttr("style");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text =	"Here we will learn about <b class ='ct-code-b-yellow'>global class</b> and "+
							"<b class ='ct-code-b-yellow'>global object</b>.";
				typing($('.introjs-tooltiptext'), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "Outer" :
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs.refresh();
				$("#Outer").effect("highlight",{color: 'yellow'}, 1200);
				var text = "Here class <b class ='ct-code-b-yellow'>Outer</b>  is a "+
							"<b class ='ct-code-b-yellow'>global class</b> because class is declared outside of all functions."; 
				$('.introjs-tooltip').removeClass('hide');
				typing($('.introjs-tooltiptext'), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "object1" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#s1,#borderBox, #animationBox").addClass("opacity00");
			$('.introjs-helperLayer').one("transitionend", function() {
				var text =	"Here <b class ='ct-code-b-yellow'>out</b> is a <b class ='ct-code-b-yellow'>global</b> object of class "+
							"<b class ='ct-code-b-yellow'>Outer</b>, where this object can be used "+
							"in all the functions to access the members of <b class ='ct-code-b-yellow'>global</b> class <b class ='ct-code-b-yellow'>Outer</b>.";
				$(".introjs-tooltip").removeClass("hide");
				typing($('.introjs-tooltiptext'), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "animationBox" :
			$("#animationBox").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'first':
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#object1').addClass('z-index1000000');
					$("#s1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#borderBox").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							$("#s1, #borderBox").removeClass("animated zoomIn");
							$(".introjs-tooltip").removeClass("hide")
							var text ="Memory is allocated when object <b class ='ct-code-b-yellow'>out</b> is declared.";
							typing($('.introjs-tooltiptext'), text, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
								$("#object1").removeClass('z-index1000000');
							});
						});
					});
				});
				break;
			case 'second' :
				$('.introjs-helperLayer').one('transitionend',function() {
					$("#variable").addClass('z-index1000000');
					$("#boxParent").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						transferEffect("#variable", "#boxParent", function() {
							$("#one").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								$("#one, #boxParent").removeClass("animated zoomIn");
								$(".introjs-tooltip").removeClass("hide");
								typing('.introjs-tooltiptext',"Memory is allocated for data member "+
										"<span class='ct-code-b-yellow'>id</span>.", function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
									$("#variable").removeClass('z-index1000000');
								});
							});
						});
					});
				});
				break;
			case 'third' :
				$("#value1").addClass('z-index1000000');
				$('.introjs-helperLayer').one('transitionend',function() {
					transferEffect("#value1", "#boxParent", function() {
						$("#box").text($("#value1").text()).addClass("animated zoomIn").one('animationend', function() {
							$("#box").removeClass("animated zoomIn");
							$(".introjs-tooltip").removeClass("hide");
							typing('.introjs-tooltiptext',"<b class ='ct-code-b-yellow'>501</b> is stored in "+
									"<span class='ct-code-b-yellow'>id</span>.", function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
								$("#value1").removeClass('z-index1000000');
							});
						});
					});
				});
				break;
			case "forth" :
				$("#value2").addClass('z-index1000000');
				$('.introjs-helperLayer').one('transitionend',function() {
					transferEffect("#value2", "#boxParent", function() {
						$("#box").text($("#value2").text()).addClass("animated zoomIn");
						$("#box").removeClass("animated zoomIn");
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"<b class ='ct-code-b-yellow'>502</b> is stored in "+
								"<span class='ct-code-b-yellow'>id</span>.", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
							$("#value2").removeClass('z-index1000000');
						});
					});
				});
				break;
			}
			break;
		case "variable" :
			introjs.refresh();
			$("#one").addClass("opacity00");
			$('.introjs-helperLayer').one("transitionend", function() {
				nextStep();
			});
			break;
		case  "value1":
			$(".introjs-helperLayer").one("transitionend", function() {
				if(introjs._direction == "backward") {
					$("#box").text("");
				}
				nextStep();
			});
			break;
		case  "value2" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if(introjs._direction == "backward") {
					$("#box").text($("#value1").text());
				}
				nextStep();
			});
			break;
		case "main":
			$(".introjs-helperLayer").one("transitionend", function() {
				nextStep();
			});
			break;
		case "objVal1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				var text =	"<ul><li>Here accessing the member <b class ='ct-code-b-yellow'>id</b> "+
							"of <b class ='ct-code-b-yellow'>Outer</b> class through <b class ='ct-code-b-yellow'>global</b> object "+
							"<b class ='ct-code-b-yellow'>out</b> in <b class ='ct-code-b-yellow'>main()</b> "+
							"function.</li><li>The integer value <b class ='ct-code-b-yellow'>501</b> is "+
							"assigned to data member <b class ='ct-code-b-yellow'>id</b> of <b class ='ct-code-b-yellow'>global</b> object "+
							"<b class ='ct-code-b-yellow'>out</b>.</li></ul>";
				typing($('.introjs-tooltiptext'), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "cout1" :
			$("#outputDiv, #outResult1").addClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				var text =	"<b class ='ct-code-b-yellow'>cout</b> statement displays the value of "+
							"<b class ='ct-code-b-yellow'>id</b> through <b class ='ct-code-b-yellow'>out</b> object on console.";
				typing($('.introjs-tooltiptext'), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "outputDiv" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "out1": 
				$("#outputDiv").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					if(introjs._direction == "backward") {
						$("#outResult1").hide();
					} else {
						$("#outputBody").append("<div><b class ='ct-green-color' id='outResult1'>501</b><div>");
					}
					nextStep();
				});
				break;
			case "out2" :
				$(".introjs-helperLayer").one("transitionend", function() {
					if (introjs._direction == "backward") {
						$("#outResult2").hide();
					} else {
						$("#outputBody").append("<div><b class ='ct-green-color' id='outResult2'>502</b><div>");
					}
					nextStep();
				});
				break;
			case "out6" :
				$(".introjs-helperLayer").one("transitionend", function() {
					if (introjs._direction == "backward") {
						$("#outResult3").hide();
					} else {
						$("#outputBody").append("<div><b class ='ct-green-color' id='outResult3'>502</b><div>");
					}
					nextStep();
				});
				break;
			case "out3" :
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputDiv, #outResult4").removeClass("opacity00");
					$("#outResult1, #outResult2, #outResult3").addClass("hide");
					if (introjs._direction == "backward") {
						$("#outResult4").remove();
					} else {
						$("#outputBody").append("<div><b class ='ct-green-color' id='outResult4'>36</b><div>");
					}
					nextStep();
				});
				break;
			case "out4" :
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputDiv").removeClass("opacity00");
					if (introjs._direction == "backward") {
						$("#outResult5").remove();
					} else {
						$("#outputBody").append("<div><b class ='ct-green-color' id='outResult5'>401</b><div>");
					}
					nextStep();
				});
				break;
			}
			break;
		case "end":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "End of the program on <b class ='ct-code-b-yellow'>global class</b> and "+
							"<b class ='ct-code-b-yellow'>global object</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "func1":
			$(".introjs-helperLayer").one("transitionend", function() {
				nextStep();
			});
			break;
		case "func2":
			$(".introjs-helperLayer").one("transitionend", function() {
				nextStep();
				/*var text ="Here in <b class ='ct-code-b-yellow'>display()</b> function.";
				typing($('.introjs-tooltiptext'), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});*/
			});
			break;
		case "objVal2" :
			$(".introjs-helperLayer").one("transitionend", function() {
				var text =	"<ul><li>Here accessing the member <b class ='ct-code-b-yellow'>id</b> of "+
							"<b class ='ct-code-b-yellow'>Outer</b> class through global object "+
							"<b class ='ct-code-b-yellow'>out</b> in <b class ='ct-code-b-yellow'>dispaly()</b> "+
							"function.</li><li>The integer value <b class ='ct-code-b-yellow'>502</b> is assigned "+
							"to data member <b class ='ct-code-b-yellow'>id</b> of global object "+
							"<b class ='ct-code-b-yellow'>out</b> in <b class ='ct-code-b-yellow'>display()</b> "+
							"function.</li></ul>";
				typing($('.introjs-tooltiptext'), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "cout2" :
			$(".introjs-helperLayer").one("transitionend", function() {
				var text =	"<b class ='ct-code-b-yellow'>cout</b> statement displays "+
							"<b class ='ct-code-b-yellow'>502</b> on console.";
				typing($('.introjs-tooltiptext'), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "cout4" :
			$(".introjs-helperLayer").one("transitionend", function() {
				var text =	"<b class ='ct-code-b-yellow'>cout</b> statement displays the value of "+
							"<b class ='ct-code-b-yellow'>id</b> i.e <b class ='ct-code-b-yellow'>502</b> on console.";
				typing($('.introjs-tooltiptext'), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "main1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				nextStep();
			});
			break;
		case "Inner" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#animationBox2").addClass("opacity00");
				$(".introjs-tooltip").removeClass("hide");
				var text = "Here class <b class = 'ct-code-b-yellow'>Inner</b> is a "+
					    		"<b class ='ct-code-b-yellow'>local class</b> because class "+
								"is declared inside of <b class ='ct-code-b-yellow'>main()</b> function."; 
				typing($('.introjs-tooltiptext'), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "object2" :
			$("#s2, #borderBox1").addClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				var text =	"Here <b class ='ct-code-b-yellow'>inn</b> is a <b class ='ct-code-b-yellow'>local</b> object of class "+
								"<b class ='ct-code-b-yellow'>Inner</b> and this <b class ='ct-code-b-yellow'>inn</b> "+
								"object is used only in <b class ='ct-code-b-yellow'>main()</b> function.";
				typing($('.introjs-tooltiptext'), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			$("#animationBox2").removeClass("hide");
			$("#animationBox2").removeClass("opacity00");
			break;
		case "animationBox2":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'first':
				$(".introjs-helperLayer").one("transitionend", function() {
				$('#object2').addClass('z-index1000000');
					$("#s2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#borderBox1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							$("#borderBox1, #s2").removeClass("animated zoomIn");
							$(".introjs-tooltip").removeClass("hide");
							typing($('.introjs-tooltiptext'), "Memory is allocated when object " +
									"<b class ='ct-code-b-yellow'>inn</b> is declared.", function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
								$('#object2').removeClass('z-index1000000');
							});
						});
					});
				});
				break;
			case 'second':
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#variable1").addClass('z-index1000000');
					$("#boxParent2").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						transferEffect("#variable1", "#boxParent2", function() {
							$("#three").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								$("#three, #boxParent2").removeClass("animated zoomIn");
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "Memory is allocated for data member "+
										"<span class='ct-code-b-yellow'>age</span>.", function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
					});
				});
				break;
			case 'third':
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#object3").addClass('z-index1000000');
					$("#s3").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#borderBox2").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							$("#s3, #borderBox2").removeClass("animated zoomIn");
							$(".introjs-tooltip").removeClass("hide");
							typing($('.introjs-tooltiptext'), "Memory is allocated when <b class='ct-code-b-yellow'>local</b> object "+
									"<b class ='ct-code-b-yellow'>out</b> is declared.", function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
								$("#object3").removeClass('z-index1000000');
							});
						});
					});
				});
				break;
			case 'forth':
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#variable2").addClass('z-index1000000');
					$("#boxParent3").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						transferEffect("#variable2", "#boxParent3", function() {
							$("#four").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								$("#four, #boxParent3").removeClass("animated zoomIn");
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "Memory is allocated for data member "+
									"<span class='ct-code-b-yellow'>id</span>.", function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
									$("#variable2").removeClass('z-index1000000');
								});
							});
						});
					});
				});
				break;
			case 'fifth' :
				$("#value3").addClass('z-index1000000');
				$('.introjs-helperLayer').one('transitionend',function() {
					transferEffect("#value3", "#boxParent2", function() {
						$("#box2").text($("#value3").text()).addClass("animated zoomIn").one('animationend', function() {
							$("#box2").removeClass("animated zoomIn");
							$(".introjs-tooltip").removeClass("hide");
							typing('.introjs-tooltiptext',"<b class ='ct-code-b-yellow'>36</b> is stored in "+
									"<span class='ct-code-b-yellow'>age</span>.", function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
				});
				break;
			case 'sixth' :
				$("#value4").addClass('z-index1000000');
				$('.introjs-helperLayer').one('transitionend',function() {
					transferEffect("#value4", "#boxParent3", function() {
						$("#box3").text($("#value4").text()).addClass("animated zoomIn").one('animationend', function() {
							$("#box3").removeClass("animated zoomIn");
							$(".introjs-tooltip").removeClass("hide");
							typing('.introjs-tooltiptext',"<b class ='ct-code-b-yellow'>401</b> is stored in "+
									"<span class='ct-code-b-yellow'>id</span>.", function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
				});
				break;
			}
			break;
			case "variable1" :
				introjs.refresh();
				$("#object2").removeClass('z-index1000000');
				$("#boxParent2, #three").addClass("opacity00");
				$('.introjs-helperLayer').one("transitionend", function() {
					nextStep();
				});
				break;
			case "variable2" :
				introjs.refresh();
				$("#four, #boxParent3").addClass("opacity00");
				$('.introjs-helperLayer').one("transitionend", function() {
					nextStep();
				});
				break;
			case "object3" :
				
				$("#s3, #borderBox2").addClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					var text =	"Here <b class ='ct-code-b-yellow'>out</b> is a <span class='ct-code-b-yellow'>local</span> object for class "+
								"<b class ='ct-code-b-yellow'>Outer</b> and this object can be used "+ 
								"to access members of <b class ='ct-code-b-yellow'>Outer</b> class "+
								"only in <b class ='ct-code-b-yellow'>main()</b> function.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "objVal3" :
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"Integer value  <b class ='ct-code-b-yellow'>36</b> is assigned to " +
								"data member <b class ='ct-code-b-yellow'>age</b> of <b class ='ct-code-b-yellow'>"+
								"Inner</b> class through <b class ='ct-code-b-yellow'>local</b> object <b class ='ct-code-b-yellow'>inn</b>.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case  "value3":
				$(".introjs-helperLayer").one("transitionend", function() {
					if(introjs._direction == "backward") {
						$("#box2").text("");
					}
					nextStep();
				});
				break;
			case "objVal4" :
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"Here accessing the member <b class ='ct-code-b-yellow'>id</b> of "+
								"<b class ='ct-code-b-yellow'>Outer</b> class through <b class='ct-code-b-yellow'>local</b> object "+
								"<b class ='ct-code-b-yellow'>out</b> in <b class ='ct-code-b-yellow'>"+
								"main()</b> function.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case  "value4":
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-helperLayer").one("transitionend", function() {
						if(introjs._direction == "backward") {
							$("#box3").text("");
						}
						nextStep();
					});
				});
				break;
			case "cout3" :
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					var text =	"<b class ='ct-code-b-yellow'>cout</b> statement displays "+
								"the value of <b class ='ct-code-b-yellow'>age</b>  on console.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "cout5" :
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"<b class ='ct-code-b-yellow'>cout</b> statement "+
								"displays the value of <b class ='ct-code-b-yellow'>id</b> on console.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "code1" :
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					var text =	"This example explains about <b class ='ct-code-b-yellow'>local class</b> "+
								"and <b class ='ct-code-b-yellow'>local object</b>.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "objVal5" :
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case "obj1": 
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#value3, #value4").hide();
						var text =	"Here accessing the member <b class ='ct-code-b-yellow'>age</b> of "+
								"<b class ='ct-code-b-yellow'>Inner</b> class through <b class ='ct-code-b-yellow'>local</b> object i.e, "+
								"<b class ='ct-code-b-yellow'>inn</b><br> of <b class ='ct-code-b-yellow'>main()</b> "+
								"function in <b class ='ct-code-b-yellow'>display()</b> function." +
								"It gives <b class ='ct-red-color'>error</b>.";
						typing($('.introjs-tooltiptext'), text, function() {
							$('.introjs-nextbutton').show();
						});
					});
					break;
				case "obj2": 
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#objVal5").prepend("//");
						$(".introjs-helperLayer").css("width", "137");
						var text =	"Thus, Local object of <b class ='ct-code-b-yellow'>main</b> "+
							"function is invalid in <b class ='ct-code-b-yellow'>display()</b>. "+
							"so, we cannot use it for accessing the members.";
						typing($('.introjs-tooltiptext'), text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				}
				break;	
			case "end1":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "End of the program.";
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "button" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#restartBtn, #closeBtn").removeClass("opacity00");
					console.log('haiiiii');
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
	$('.introjs-nextbutton, .introjs-prevbutton').hide();
	$('.introjs-skipbutton, .introjs-bullets').hide();
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

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: 'yellow'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index1000000");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function fadefunction(selector) {
	$(selector).fadeTo(300, 1, function() {
		$("#nextButton").fadeTo(300, 1, function() {
			$("#nextButton").click(function() {
				$('#nextButton').remove();
	   	   		setTimeout(function() {
	   	   			introjs.nextStep();
	   	   		},300);
			});
		});
	});
}

function nextStep() {
	if (introjs._direction == "backward") {
		setTimeout(function() {
			introjs.previousStep();
		},1500);

	} else {
		setTimeout(function() {
			introjs.nextStep();
		},1500);
	}
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