var tl;
var iVal = 1;
var constructorsTypesInInheritanceReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$('#restartBtn').click(function() {
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
		tooltip : false,
		steps :[{
			element :"#preTableDiv",
			intro : "",
			position : 'right',
		}, {
			element :"#classCounter",
			intro : "",
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#classSample",
			intro : "",
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#main",
			intro : "",
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#s1Init",
			intro : "",
			position : 'right', 
			tooltipClass : 'hide'
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 's1Address',
			position : 'left', 
			tooltipClass : 'hide'
		}, {
			element :"#defConstrInCounter",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#defCountInCounter",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 's1Count',
			tooltipClass : 'hide'
		}, {
			element :"#defCoutInCounter",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'firstLine',
			tooltipClass : 'hide'
		}, {
			element :"#defConstrInSample",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#defCoutInSample",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'secondLine',
			tooltipClass : 'hide'
		}, {
			element :"#s1Display",
			intro : "",
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element :"#displayFunction",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#decrementCount",
			intro : "",
			animateStep : 'decrementCountS1',
			tooltipClass : 'hide'
		}, {
			element :"#displayCoutCount",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'decCountValue',
			tooltipClass : 'hide'
		}, {
			element :"#s2Init",
			intro : "",
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 's2Address',
			tooltipClass : 'hide'
		}, {
			element :"#paraConstrInSample",
			intro : "",
			animateStep : 'paraConstrInit',
			tooltipClass : 'hide'
		/*}, {
			element :"#counterCall",
			intro : "",
			tooltipClass : 'hide'*/
		}, {
			element :"#paraConstrInCounter",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#paraConstrCountInCounter",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#paraConstrCoutInCounter",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'thirdLine',    
			tooltipClass : 'hide'
		}, {
			element :"#paraConstrEnd",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element :"#counterCall",
			intro : "",
			tooltipClass : 'hide' 				
		}, {
			element :"#paraConstrCoutInSample",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'fourthLine',    
			tooltipClass : 'hide'
		}, {
			element :"#s2Display",
			intro : "",
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element :"#displayFunction",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#decrementCount",
			intro : "",
			animateStep : 'decrementCountS2',
			tooltipClass : 'hide'
		}, {
			element :"#displayCoutCount",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'decCountValue1',
			tooltipClass : 'hide'
		},{
			element : '#end',
			intro : '',
			position : "right"
		}, {
			element :"#button",
			intro : "",
			position : 'right',
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case 'preTableDiv':
				$('.introjs-tooltip').removeAttr("style");
				$('.introjs-tooltip').css("min-width", "250px");
				$("#classCounter, #classSample").addClass("opacity00");
			break;
			
		case 'classCounter':
				$('.introjs-tooltip').removeAttr("style");
				$("#classCounter, #classSample").addClass("opacity00");
			break;
			
		case 'classSample':
				$("#classSample, #main").addClass("opacity00");
			break;
			
		case 'main':
			$('.introjs-tooltip').removeAttr("style");
			$("#main, #s1Init").addClass("opacity00");
			break;
			
		case 's1Init':
			$("#s1Init").addClass("opacity00");
			$("#addressDiv").css("opacity", 0);
			$("#s1Box").css("opacity", 0);
			$("#aBox").css("opacity", 0);
			break;
			
		case 'defConstrInCounter':
			$('.introjs-tooltip').removeAttr("style");
			$("#defConstrInCounter").addClass("opacity00");
			break;
			
		case 'defCountInCounter':
			 $("#countNum").text("4");
			 $("#s1Val").addClass("opacity00");
			break;
			
		case 'defCoutInCounter':
			$("#consoleId").addClass("opacity00");
			$("#firstLine").text("");
			break;
			
		case 'defConstrInSample':
			 $("#defConstrInSample").addClass("opacity00");
			 break;
			
		case 'defCoutInSample':
			 $("#secondLine").text("");
			 break;
			
		case 's1Display':
			 $("#s1Display, #displayFunction").addClass("opacity00");
			 break;
			
		case 'displayFunction':
			if(introjs._currentStep == 15) {
				$("#displayFunction").addClass("opacity00");
				 $("#s1Val").text("4");
			} else if(introjs._currentStep == 30) {
				 $("#s2Val").text("10");
			}
			break;
			 
			
		case 'decrementCount':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "decrementCountS1" :
				$("#s1Val").text("4");
				break;
				
			case "decrementCountS2" :
				$("#s2Val").text("10");
				break;
			}
			break;
				
				
		case 'displayCoutCount':
			if(introjs._currentStep == 17) {
				$("#decCountValue, #decCountCout, #decCountVal").addClass("opacity00");
			} else if(introjs._currentStep == 32) {
				$("#decCountValue1, #decCountCout1, #decCountVal1").addClass("opacity00");
			}
			break;
			
		case 's2Init':
			$("#s2Init").addClass("opacity00");
			$("#s2Box").css("opacity", 0);
			$("#bBox").css("opacity", 0);
			break;
			
		case 'paraConstrInSample':
			$('.introjs-tooltip').removeAttr("style");
			$("#paraConstrInSample").addClass("opacity00");
			$("#paraConstrInCounter").addClass("opacity00");
			break;
			
		case 'counterCall':
			//$("#paraConstrInCounter").addClass("opacity00");
			$('.introjs-tooltip').removeAttr("style");
			break;
			
		case 'paraConstrInCounter':
			$("#paraConstrInCounter").addClass("opacity00");
			$("#s2Val").addClass("opacity00");
			break;
			
		case 'paraConstrCountInCounter':
			$("#s2Val").addClass("opacity00");
			break;
			
		case 'paraConstrCoutInCounter':
			$("#thirdLine").text("");
			break;
			
		case 'paraConstrCoutInSample':
			$("#fourthLine").text("");
			break;
			
		case 's2Display':
			$("#s2Display").addClass("opacity00");
			break;
			
		case "addressDiv" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "s1Address" :
				$('.introjs-tooltip').removeAttr("style");
				$("#addressDiv").css("opacity", 0);
				$("#s1Box").css("opacity", 0);
				$("#aBox").css("opacity", 0);
				$("#defConstrInCounter").addClass("opacity00");
				$('.introjs-tooltip').css("min-width", "300px");
				break;
				
			case "s2Address" :
				$('.introjs-tooltip').removeAttr("style");
				$("#s2Box").css("opacity", 0);
				$("#bBox").css("opacity", 0);
				$("#paraConstrInSample").addClass("opacity00");
				break;
				
			case "s1Count" :
				
				break;
				
			case "s2Count" :
				 $("#s2Val").text("");
				break;
			}
			break;
			
		case 'paraConstrEnd':
			$('.introjs-tooltip').css("min-width", "265px");
			break;
		
		case 'consoleId':
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "firstLine" :
				$("#firstLine").addClass("opacity00");
				$("#defConstrInSample").addClass("opacity00");
				break;
				
			case "secondLine" :
				$("#secondLine").addClass("opacity00");
				$("#s1Display").addClass("opacity00");
				break;
				
			case "decCountValue" :
				$("#decCountValue").addClass("opacity00");
				$("#decCountCout, #decCountVal").text("").addClass("opacity00");
				$("#s2Init").addClass("opacity00");
				break;
				
			case "thirdLine" :
				$("#thirdLine").addClass("opacity00");
				//$("#paraConstrCoutInSample").addClass("opacity00");
				$('.introjs-tooltip').removeAttr("style");
				break;
				
			case "fourthLine" :
				$("#fourthLine").addClass("opacity00");
				$("#s2Display").addClass("opacity00");
				break;
				
			case "decCountValue1" :
				$("#decCountValue1").addClass("opacity00");
				$("#decCountCout1, #decCountVal1").text("").addClass("opacity00");
				break;
		}
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
		case 'preTableDiv':
			$('.introjs-tooltip').css("min-width", "250px");
			//$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				var text = 	"Let us learn how <span class='ct-code-b-yellow'>default</span> "+
							"and <span class='ct-code-b-yellow'>parameterized constructors</span> will " +
							"work in <span class='ct-code-b-yellow'>inheritance</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();
				});
			//});
			break;
			
		case 'classCounter':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#classCounter").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"Let us consider a class <span class='ct-code-b-yellow'>Counter</span> which is a " +
							"<span class='ct-code-b-yellow'>base class</span> or <span class='ct-code-b-yellow'>" +
							"parent class</span>, which contains private member <span class='ct-code-b-yellow'>count</span> " +
							"in <span class='ct-code-b-yellow'>protected</span> section.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
				
			});
			break;
			
		case 'classSample':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#classSample").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"Here a class <span class='ct-code-b-yellow'>Sample</span> is inherited from " +
							"the base class <span class='ct-code-b-yellow'>Counter</span>.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
				
			});
			break;
			
		case 'main':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#main").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"<span class='ct-code-b-yellow'>main()</span> is the starting point of execution.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 's1Init':
			$('.introjs-tooltip').css("min-width", "300px");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#s1Init").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"<ul><li>Here an object <span class='ct-code-b-yellow'>s1</span> is created " +
							"to <span class='ct-code-b-yellow'>derived</span> class <span class='ct-code-b-yellow'>Sample</span>.</li>" +
							"<li>when an object is created, the <span class='ct-code-b-yellow'>memory</span> " +
							"will be allocated for that an object.</li>" +
							"<li id = 'list3'>No data members are available in <span class='ct-code-b-yellow'>derived</span> class " +
							"<span class='ct-code-b-yellow'>Sample</span> but, one private data member " +
							"<span class='ct-code-b-yellow'>count</span> is there in the <span class='ct-code-b-yellow'>base</span> class " +
							"<span class='ct-code-b-yellow'>Counter</span>.</li></ul>";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'defConstrInCounter':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#defConstrInCounter").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"This is a <span class='ct-code-b-yellow'>base</span> class " +
							"<span class='ct-code-b-yellow'>default constructor</span> which is " +
							"called before  the calling of <span class='ct-code-b-yellow'>derived</span> " +
							"class <span class='ct-code-b-yellow'>default constructor</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'defCountInCounter':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = 	"The variable <span class='ct-code-b-yellow'>count</span> is initialized to " +
							"<span class='ct-code-b-yellow'>4</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'defCoutInCounter':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>cout</span> is used to print the string on the console.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'defConstrInSample':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#defConstrInSample").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"After execution of <span class='ct-code-b-yellow'>default constructor</span> " +
							"of <span class='ct-code-b-yellow'>base</span> class <span class='ct-code-b-yellow'>Counter</span>, " +
							"the <span class='ct-code-b-yellow'>default constructor</span> of " +
							"derived class <span class='ct-code-b-yellow'>Sample</span> will be called.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'defCoutInSample':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>cout</span> is used to print the string on the console.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 's1Display':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#s1Display").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"The member function <span class='ct-code-b-yellow'>display()</span> " +
				   			"is called by the  object <span class='ct-code-b-yellow'>s1</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case 'displayFunction':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#displayFunction").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = "The member function <span class='ct-code-b-yellow'>display()</span>"+
				   		   "is used to print the decrement value of <span class='ct-code-b-yellow'>count</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case 'decrementCount':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "decrementCountS1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = 	"The value of <span class='ct-code-b-yellow'>count</span> is <span class='ct-code-b-yellow'>decreased</span> by " +
								"<span class='ct-code-b-yellow'>1</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltiptext").append("<br><span id='countDec1' class='display position ct-code-b-yellow opacity00'>count = <span id = 'sub' class='display position'>" +
													"<span id='countSub' class='display position'>count</span> - <span id='one' class='display position'>1</span></span>;</span>");
						$('#countDec1').removeClass('opacity00');
						fromEffectWithTweenMax("#decrementCount", "#countDec1", function() {
							$("#s1Val").text("4");
							fadeInBounceEffectWithTimelineMax("#s1Val", "#countSub", function() {
							var t = parseInt($("#s1Val").text()) - parseInt($("#one").text());
								rotation('#sub', t, function() {
									$('#s1Box').addClass("z-index1000000");
									fadeInBounceEffectWithTimelineMax("#sub", "#s1Val", function() {
										$('#s1Box').removeClass("z-index1000000");
										$(".introjs-nextbutton, .introjs-prevbutton").show();
									});			
								});
							 });
						});
					});
				});
				break;
			case "decrementCountS2" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = 	"The value of <span class='ct-code-b-yellow'>count</span> is <span class='ct-code-b-yellow'>decreased</span> by " +
								"<span class='ct-code-b-yellow'>1</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltiptext").append("<br><span id='countDec1' class='display position ct-code-b-yellow opacity00'>count = <span id = 'sub' class='display position'>" +
													"<span id='countSub' class='display position'>count</span> - <span id='one' class='display position'>1</span></span>;</span>");
						$('#countDec1').removeClass('opacity00');
						fromEffectWithTweenMax("#decrementCount", "#countDec1", function() {
							$("#s2Val").text("10");
							fadeInBounceEffectWithTimelineMax("#s2Val", "#countSub", function() {
								var t = parseInt($("#s2Val").text()) - parseInt($("#one").text());
								rotation('#sub', t, function() {
									$('#s2Box').addClass("z-index1000000");
									fadeInBounceEffectWithTimelineMax("#sub", "#s2Val", function() {
										$('#s2Box').removeClass("z-index1000000");
										$(".introjs-nextbutton, .introjs-prevbutton").show();
									});			
								});
							});
						});
					});
				});
				break;
			}
			break;
			
		case 'displayCoutCount':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = 	"<span class='ct-code-b-yellow'>cout</span> is used to print the the value of  " +
							"<span class='ct-code-b-yellow'>count</span> on the console.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 's2Init':
			$('.introjs-tooltip').css("min-width", "300px");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#s2Init").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"<ul><li>Here, an object <span class='ct-code-b-yellow'>s2</span> is created " +
							"for derived class <span class='ct-code-b-yellow'>Sample</span>.</li>" +
							"<li>when an object is created, the <span class='ct-code-b-yellow'>memory</span> " +
							"will be allocated for that an object.</li>" +
							"<li id = 'list3'>No data members are available in <span class='ct-code-b-yellow'>" +
							"derived</span> class <span class='ct-code-b-yellow'>Sample</span> but, one private " +
							"data member <span class='ct-code-b-yellow'>count</span> is there in the base class " +
							"<span class='ct-code-b-yellow'>Counter</span>.</li></ul>";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'paraConstrInSample':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'paraConstrInit':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#paraConstrInSample").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					$("#paraConstrInit").addClass("blinking-orange");
					var text = 	"This is <span class='ct-code-b-yellow'>parameterized constructor</span> of " +
								"<span class='ct-code-b-yellow'>derived</span> class <span class='ct-code-b-yellow'>Sample</span>.";
					typing(".introjs-tooltiptext",text, function() {
						$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
							$('.user-btn').remove(); 
							$("#paraConstrInit").removeClass("blinking-orange");
							$("#counterCall").addClass("blinking-orange");
							var text = 	"The <span class='ct-code-b-yellow'>parameterized constructor</span> of derived class " +
										"<span class='ct-code-b-yellow'>Sample</span> explicitly called the <span class='ct-code-b-yellow'>" +
										"parameterized constructor</span> of the <span class='ct-code-b-yellow'>base</span> class " +
										"<span class='ct-code-b-yellow'>Counter</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$("#counterCall").removeClass("blinking-orange");
								$('.introjs-prevbutton, .introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			
			}
			break;
			
		case 'counterCall':
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				}
			});
			break;
			
		case 'paraConstrInCounter':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#paraConstrInCounter").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"This is the <span class='ct-code-b-yellow'>parameterized constructor</span> " +
							"of base class  <span class='ct-code-b-yellow'>Counter</span> definition which " +
							"receive an argument <span class='ct-code-b-yellow'>value</span> to initialize " +
							"the data member <span class='ct-code-b-yellow'>count</span>.";

				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'paraConstrCountInCounter':
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				$(".introjs-tooltiptext").append("<span id='countPara' class='display position ct-code-b-yellow opacity00'>count = " +
												"<span id = 'valuePara' class='display position '>value</span>;</span>");
				$('#countPara').removeClass('opacity00');
					fromEffectWithTweenMax("#paraConstrCountInCounter", "#countPara", function() {
					/*$("#countPara").append("<br><span id='countPara1' class='display position ct-code-b-yellow opacity00'>count = " +
											"<span id = 'value1' class='display position'>value</span>;</span>");
					$('#countPara1').removeClass('opacity00');*/
					$('#valuePara').text( $('#s2Num').text());
						fromEffectWithTweenMax("#s2Num", "#valuePara", function() {
						 $('#s2Val').removeClass("opacity00");
						 $('#s2Box').css("z-index", "1000000");
						 fromEffectWithTweenMax("#valuePara", "#s2Val", function() {
							$('#s2Box').css("z-index", "");
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});			
					 });
				});
			});
			break;
			
		case 'paraConstrCoutInCounter':
			$('.introjs-helperLayer').one('transitionend', function() {
				//$("#defConstrInSample").removeClass("opacity00");
				var text = "<span class='ct-code-b-yellow'>cout</span> is used to print the string on the console.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
		case 'paraConstrEnd':
			$('.introjs-helperLayer').one('transitionend', function() {
				//$("#defConstrInSample").removeClass("opacity00");
				var text = 	"This is the end of <span class='ct-code-b-yellow'>parameterized constructor</span> of " +
							"<span class='ct-code-b-yellow'>base</span> class <span class='ct-code-b-yellow'>Counter</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'paraConstrCoutInSample':
			$('.introjs-helperLayer ').one('transitionend', function() {
				//$("#defConstrInSample").removeClass("opacity00");
				var text = "<span class='ct-code-b-yellow'>cout</span> is used to print the string on the console.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 's2Display':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#s2Display").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"The member function <span class='ct-code-b-yellow'>display()</span> " +
				   			"is called by the  object <span class='ct-code-b-yellow'>s2</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "addressDiv" :
			//$("#addressDiv").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "s1Address" :
				$('.introjs-tooltip').css("min-width", "260px");
				$('.introjs-helperLayer').one('transitionend', function() {
					TweenMax.to("#addressDiv", 1, {opacity: 1, onComplete: function() {
						$("#s1").addClass("blinking-orange");
						TweenMax.to("#s1Box", 1, {opacity: 1, onComplete: function() {
							$("#s1").removeClass("blinking-orange");
							$("#s1, #count").addClass("blinking-orange");
							TweenMax.to("#aBox", 1, {opacity: 1, onComplete: function() {
								$("#s1, #count").removeClass("blinking-orange");
								$("#addressDiv").removeClass("z-index1000000");
								$('.introjs-tooltip').removeClass('hide');
								var text =  "After <span class='ct-code-b-yellow'>memory</span> allocation to an object, " +
											"<span class='ct-code-b-yellow'>default constructor</span> of " +
											"<span class='ct-code-b-yellow'>base</span> class <span class='ct-code-b-yellow'>" +
											"Counter</span> will be called first and next <span class='ct-code-b-yellow'>default " +
											"constructor</span> of <span class='ct-code-b-yellow'>derived</span> class " +
											"<span class='ct-code-b-yellow'>Sample</span> will be called.";
								typing(".introjs-tooltiptext", text, function() {
									$('.introjs-prevbutton, .introjs-nextbutton').show();
								});
							}});
						}});
					}});
				});
				break;
				
			case "s2Address" :
				$('.introjs-helperLayer').one('transitionend', function() {
					TweenMax.to("#addressDiv", 1, {opacity: 1, onComplete: function() {
						$("#s2").addClass("blinking-orange");
						TweenMax.to("#s2Box", 1, {opacity: 1, onComplete: function() {
							$("#s2").removeClass("blinking-orange");
							$("#s2, #count").addClass("blinking-orange");
							TweenMax.to("#bBox", 1, {opacity: 1, onComplete: function() {
								$("#s2, #count").removeClass("blinking-orange");
								$('.introjs-tooltip').removeClass('hide');
								var text = 	"<ul><li>After <span class='ct-code-b-yellow'>memory</span> allocation " +
											"to an object, <span class='ct-code-b-yellow'>parameterized constructor</span> of " +
											"<span class='ct-code-b-yellow'>derived</span> class <span class='ct-code-b-yellow'>Sample</span> " +
											"will be called.</li>" +
											"<li>The <span class='ct-code-b-yellow'>parameterized constructor</span> of " +
											"<span class='ct-code-b-yellow'>base</span> class <span class='ct-code-b-yellow'>Counter</span> " +
											"will be called explicitly by the user from <span class='ct-code-b-yellow'>derived</span> class " +
											"<span class='ct-code-b-yellow'>Sample</span>.</li></ul>";
								typing(".introjs-tooltiptext", text, function() {
									$('.introjs-prevbutton, .introjs-nextbutton').show();
								});
							}});
						}});
					}});
				});
				break;
			
		
			case "s1Count" :
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#countNum").addClass("css-circle").effect( "highlight", {color:"white"}, 1000, function() {
							$("#s1Val").removeClass("opacity00");
							$("#countNum").removeClass("css-circle");
							fromEffectWithTweenMax("#countNum", "#s1Val", function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							});
						});
					}
						
				});
				break;
				
			case "s2Count" :
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						fromEffectWithTweenMax("#value", "#s2Val", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					}
				});
				break;
			}
			break;
		
		case 'consoleId':
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "firstLine" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#firstLine").append($("#defBase").text());
						transferEffect("#defBase", "#firstLine", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					}
				});
				break;
				
			case "secondLine" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#secondLine").append($("#defDer").text());
						transferEffect("#defDer", "#secondLine", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					}
				});
				break;
				
			case "decCountValue" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#decCountValue").removeClass("opacity00");
						$("#decCountCout").append($(countCout).text());
						transferEffect("#countCout", "#decCountCout", function() {
							$("#decCountVal").append(parseInt($(countNum).text() - 1));
							transferEffect("#displayCount", "#decCountVal", function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							});
						});
					}
				});
				break;
				
			case "thirdLine" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#thirdLine").append($("#parBase").text());
						transferEffect("#parBase", "#thirdLine", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					}
				}); 
				break;
				
			case "fourthLine" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#fourthLine").append($("#parDer").text());
						transferEffect("#parDer", "#fourthLine", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					}
				});
				break;
				
			case "decCountValue1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#decCountValue1").removeClass("opacity00");
						$("#decCountCout1").append($(countCout).text());
						transferEffect("#countCout", "#decCountCout1", function() {
							$("#decCountVal1").append(parseInt($(s2Num).text() - 1));
							transferEffect("#displayCount", "#decCountVal1", function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							});
						});
					}
				});
				break;
		}
		break;
			
		case 'end':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = 	"This is the end of the <span class='ct-code-b-yellow'>main()</span> function " +
							"where the program execution ends.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
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

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
		TweenMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
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

function fadeInBounceEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var val;
	$(selector1).effect( "highlight",{color: '#ffff33'}, 500);
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		
		$('#codeDiv').append("<span id='dummy' class='ct-code-b-yellow ct-fonts' style='position: relative; z-index: 10000010;'>" 
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

