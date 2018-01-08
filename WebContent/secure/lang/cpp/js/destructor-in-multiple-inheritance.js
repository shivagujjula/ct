var tl;
var iVal = 1;
var destructorsInMultipleInheritanceReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function(){
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
			element :"#preTableDiv",
			intro : "",
			position : 'right',
	/*-------- Multiple Inheritance ------------ */
		}, {
			element :"#classBase1",
			intro : "",
			animateStep : 'firstStep',
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#classBase2",
			intro : "",
			animateStep : 'firstStep',
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#classDerived",
			intro : "",
			animateStep : 'firstStep',
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#main",
			intro : "",
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#derivedObj",
			intro : "",
			tooltipClass : 'hide',
			position : 'right', 
		}, {
			element :"#classDerived",
			intro : "",
			animateStep : 'secondStep',
			position : 'right',
			//tooltipClass : 'hide'
		}, {
			element :"#base2",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#classBase2",
			intro : "",
			animateStep : 'secondStep',
			tooltipClass : 'hide',
			position : 'right',

		}, {
			element :"#base2ClassConstructor",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#base2ClassConstructorCout",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'base2ConstrPrint',
			tooltipClass : 'hide'
		}, {
			element :"#classDerived",
			intro : "",
			animateStep : 'thirdStep',
			tooltipClass : 'hide'
		}, {
			element :"#base1",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#classBase1",
			intro : "",
			animateStep : 'secondStep',
			tooltipClass : 'hide',
			position : 'right',

		}, {
			element :"#base1ClassConstructor",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#base1ClassConstructorCout",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'base1ConstrPrint',
			tooltipClass : 'hide'
		}, {
			element :"#spanDerived",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#derivedClassConstructor",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#derivedClassConstructorCout",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'derivedConstrPrint',
			tooltipClass : 'hide'
		},{
			element : '#end',
			intro : '',
			position : "right"	
		}, {
			element :"#classDerived",
			intro : "",
			animateStep : 'thirdStep',
			tooltipClass : 'hide'
		}, {
			element :"#derivedClassDestructor",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#derivedClassDestructorCout",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'derivedDestrPrint',
			tooltipClass : 'hide' 
				
		}, {
			element :"#base1",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#classBase1",
			intro : "",
			animateStep : 'secondStep',
			tooltipClass : 'hide',
			position : 'right',

		}, {
			element :"#base1ClassDestructor",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#base1ClassDestructorCout",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'base1DestrPrint',
			tooltipClass : 'hide'
		}, {
			element :"#base2",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#classBase2",
			intro : "",
			animateStep : 'secondStep',
			tooltipClass : 'hide',
			position : 'right',

		}, {
			element :"#base2ClassDestructor",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#base2ClassDestructorCout",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'base2DestrPrint',
			tooltipClass : 'hide'
				
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
			$("#classBase1").addClass("opacity00");
			$('.introjs-tooltip').css("min-width", "227px");
			break;
			
		case 'classBase1':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$('.introjs-tooltip').removeAttr("style");
				$("#classBase1, #classBase2").addClass("opacity00");
				break;
				
			case 'secondStep':
				if(introjs._currentStep == 14) {
					$("#base1ClassConstructor").addClass("opacity00");
				} else if(introjs._currentStep == 28) {
					$("#base1ClassDestructor").addClass("opacity00");
				}
				break;
			}
			break;
			
		case 'classBase2':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$("#classBase, #classDerived").addClass("opacity00");
				break;
				
			case 'secondStep':
				if(introjs._currentStep == 8) {
					$("#base2ClassConstructor").addClass("opacity00");
				} else if(introjs._currentStep == 33) {
					$("#base2ClassDestructor").addClass("opacity00");
				}
				break;
			}
			break;
			
		case 'classDerived':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$("#classDerived").show();
				$("#classDerived, #main").addClass("opacity00");
				break;
				
			case 'secondStep':
				$('.introjs-tooltip').css("min-width", "314px");
				break;
				
			case 'thirdStep':
				$("#derivedClassDestructor").addClass("opacity00");
				$('.introjs-tooltip').removeAttr("style");
				break;
			}
			break;
			
		case 'base':
			
			break;
			
		case 'main':
			$("#derivedObj").addClass("opacity00");
			break;
			
		case 'derivedObj':
			$("#derivedObj").addClass("opacity00");
			$('.introjs-tooltip').removeAttr("style");
			break;
			
		case 'base1ClassConstructor':
			$("#base1ClassConstructor, #base1ClassDestructor").addClass("opacity00");
			break;
			
		case 'base1ClassConstructorCout':
			$("#base1ConstrPrint").text("");
			break;
			
		case 'base2ClassConstructor':
			$("#base2ClassConstructor, #base2ClassDestructor").addClass("opacity00");
			break;
			
		case 'base2ClassConstructorCout':
			 $("#base2ConstrPrint").text("");
			break;
			
			
		case 'derivedClassConstructor':
			$("#derivedClassConstructor").addClass("opacity00");
			break;
			
		case 'derivedClassConstructorCout':
			$("#derivedConstrPrint").text("");
			break;
			
			
		case 'base1ClassDestructor':
			$("#base1ClassDestructor").addClass("opacity00");
			break;
			
		case 'base1ClassDestructorCout':
			$("#base1DestrPrint").text("");
			break;
			
		case 'base2ClassDestructor':
			$("#base2ClassDestructor").addClass("opacity00");
			break;
			
		case 'base2ClassDestructorCout':
			$("#base2DestrPrint").text("");
			break;
			
		case 'derivedClassDestructor':
			$("#derivedClassDestructor").addClass("opacity00");
			break;
			
		case 'derivedClassDestructorCout':
			 $("#derivedDestrPrint").text("");
			 $("#derivedDestrPrint").addClass("opacity00");
			break;
			
		case 'base1':
			
			break;
			
		case 'base2':
			$("#derived1ClassConstructor").addClass("opacity00");
			$('.introjs-tooltip').removeAttr("style");
			break;
			
		case 'spanDerived':
			$("#derivedClassConstructor").addClass("opacity00");
			break;
			
		case "addressDiv" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			
			}
			break;
		
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "baseConstrPrint" :
				$("#baseConstrPrint").text("");
				break;
				
			case "base1ConstrPrint" :
				$("#base1ConstrPrint").show();
				break;
				
			case "derivedConstrPrint" :
				$("#derivedConstrPrint").text("");
				$('.introjs-tooltip').removeAttr("style");
				break;
				
			case "derived1ConstrPrint" :
				$("#derived1ConstrPrint").text("");
				break;
				
			case "derived1DestrPrint" :
				 $("#derived1DestrPrint").text("");
				break;
				
			case "derivedDestrPrint" :
				
				break;
				
				
			case "baseDestrPrint" :
				
				break;
				
			case "base1DestrPrint" :
				$("#base1DestrPrint").show();
				break;
			
		}
		break;
			
		case 'end':
			$('.introjs-tooltip').css("min-width", "245px");
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
			$('.introjs-tooltip').css("min-width", "227px");
			$("#preTableDiv").removeClass("opacity00");
			var text = 	"Let us understand how <span class='ct-code-b-yellow'>destructors</span> can " +
						"be called in <span class='ct-code-b-yellow'>multiple inheritance</span>.";
			typing('.introjs-tooltiptext', text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case 'classBase1':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#classBase1").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					var text = 	"The class <span class='ct-code-b-yellow'>Base1</span> " +
								"is called <span class='ct-code-b-yellow'>base</span> or " +
								"<span class='ct-code-b-yellow'>parent</span> class.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
					
				});
				break;
				
			case 'secondStep':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					}
					
				});
				break;
			}
			break;
			
		case 'classBase2':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#classBase2").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					var text = 	"The class <span class='ct-code-b-yellow'>Base2</span> " +
								"is called <span class='ct-code-b-yellow'>base</span> or " +
								"<span class='ct-code-b-yellow'>parent</span> class.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
					
				});
				break;
				
			case 'secondStep':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					}
					
				});
				break;
			}
			break;
			
		case 'classDerived':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#classDerived").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					var text = 	"<ul><li>Here the class <span class='ct-code-b-yellow'>Derived</span> is " +
								"derived from class <span class='ct-code-b-yellow'>Base1</span> and " +
								"class <span class='ct-code-b-yellow'>Base2</span>.</li>" +
								"<li>It inherits the properties of class <span class='ct-code-b-yellow'>Base1</span> and " +
								"as well as class <span class='ct-code-b-yellow'>Base2</span>.</li></ul>";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
					
				});
				break;
				
			case 'secondStep':
				$('.introjs-tooltip').css("min-width", "314px");
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = 	"<ul><li>The <span class='ct-code-b-yellow'>default constructors</span> " +
								"are called in the order in which they are inherited.</li>" +
								"<li>The class <span class='ct-code-b-yellow'>Base2</span> is inherited " +
								"first, so the <span class='ct-code-b-yellow'>default constructor</span> of " +
								"class <span class='ct-code-b-yellow'>Base2</span> is called first.</li>" +
								"<li>The class <span class='ct-code-b-yellow'>Base1</span> is inherited " +
								"next, so the <span class='ct-code-b-yellow'>default constructor</span> of " +
								"class <span class='ct-code-b-yellow'>Base1</span> is called next.</li></ul>";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
				
			case 'thirdStep':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					}
					
				});
				break;
			}
			break;
			
			
			
		case 'base1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 500);
				} else {
					setTimeout(function () {
						introjs.nextStep();
					}, 500);
				}
				
			});
			break;
			
		case 'base2':
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 500);
				} else {
					setTimeout(function () {
						introjs.nextStep();
					}, 500);
				}
				
			});
			break;
			
		case 'spanDerived':
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 500);
				} else {
					setTimeout(function () {
						introjs.nextStep();
					}, 500);
				}
				
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
			
		case 'derivedObj':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#derivedObj").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"Here an object <span class='ct-code-b-yellow'>obj</span> is " +
							"created to class <span class='ct-code-b-yellow'>Derived</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'base1ClassConstructor':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#base1ClassConstructor").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"Here the <span class='ct-code-b-yellow'>default constructor</span> of " +
							"class <span class='ct-code-b-yellow'>Base1</span>, which is called after " +
							"execution of <span class='ct-code-b-yellow'>default constructor</span> of " +
							"the class <span class='ct-code-b-yellow'>Base2</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
			
		case 'base1ClassConstructorCout':
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 500);
				} else {
					setTimeout(function () {
						introjs.nextStep();
					}, 500);
				}
				
			});
			break;
			
		case 'base2ClassConstructor':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#base2ClassConstructor").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"Here the <span class='ct-code-b-yellow'>default constructor</span> " +
							"of the class <span class='ct-code-b-yellow'>Base2</span>, which is " +
							"called first because <span class='ct-code-b-yellow'>Base2</span> is " +
							"inherited first.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
			
		case 'base2ClassConstructorCout':
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 500);
				} else {
					setTimeout(function () {
						introjs.nextStep();
					}, 500);
				}
				
			});
			break;

			
		case 'derivedClassConstructor':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#derivedClassConstructor").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"After execution of <span class='ct-code-b-yellow'>default constructor</span> " +
							"of class <span class='ct-code-b-yellow'>Base2</span> and <span class='ct-code-b-yellow'>Base1</span>, " +
							"the <span class='ct-code-b-yellow'>default constructor</span> of " +
							"class <span class='ct-code-b-yellow'>Derived</span> is called.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'derivedClassConstructorCout':
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 500);
				} else {
					setTimeout(function () {
						introjs.nextStep();
					}, 500);
				}
				
			});
			break;
			
		case 'base1ClassDestructor':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#base1ClassDestructor").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"After execution of <span class='ct-code-b-yellow'>destructor</span> " +
							"of class <span class='ct-code-b-yellow'>Derived</span>, the " +
							"<span class='ct-code-b-yellow'>destructor</span> of " +
							"class <span class='ct-code-b-yellow'>Base1</span> will be executed.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'base1ClassDestructorCout':
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 500);
				} else {
					setTimeout(function () {
						introjs.nextStep();
					}, 500);
				}
				
			});
			break;
			
		case 'base2ClassDestructor':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#base2ClassDestructor").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"The <span class='ct-code-b-yellow'>destructor</span> of the class " +
							"<span class='ct-code-b-yellow'>Base2</span> will be executed, " +
							"after execution of <span class='ct-code-b-yellow'>destructor</span> " +
							"of the class <span class='ct-code-b-yellow'>Base1</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'base2ClassDestructorCout':
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 500);
				} else {
					setTimeout(function () {
						introjs.nextStep();
					}, 500);
				}
				
			});
			break;
			
		case 'derivedClassDestructor':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#derivedClassDestructor").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"The <span class='ct-code-b-yellow'>destructor</span> of the class " +
							"<span class='ct-code-b-yellow'>Derived</span> will be executed first " +
							"because the <span class='ct-code-b-yellow'>destructors</span> are called " +
							"in the reverse order of <span class='ct-code-b-yellow'>constructors</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'derivedClassDestructorCout':
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 500);
				} else {
					setTimeout(function () {
						introjs.nextStep();
					}, 500);
				}
				
			});
			break;
			
		case 'end':
			$('.introjs-tooltip').css("min-width", "245px");
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = 	"<ul><li>After completion of <span class='ct-code-b-yellow'>main()</span> " +
							"the <span class='ct-code-b-yellow'>destructors</span> will be " +
							"called in the <span class='ct-code-b-yellow'>reverse</span> order " +
							"of their <span class='ct-code-b-yellow'>constructors</span>.</li>" +
							"<li>First class <span class='ct-code-b-yellow'>derived</span>, next " +
							"class <span class='ct-code-b-yellow'>Base1</span> and class " +
							"<span class='ct-code-b-yellow'>Base2</span> " +
							"<span class='ct-code-b-yellow'>destructors</span> will be executed.</li></ul>";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "addressDiv" :
			//$("#addressDiv").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			
			}
			break;
		
		case 'consoleId':
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "base2ConstrPrint" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#base2ConstrPrint").append($("#base2Print").text()).addClass("opacity00");
						transferEffect("#base2Print", "#base2ConstrPrint", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
				
			case "base1ConstrPrint" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#base1ConstrPrint").append($("#base1Print").text()).addClass("opacity00");
						transferEffect("#base1Print", "#base1ConstrPrint", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
				
			case "derivedConstrPrint" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#derivedConstrPrint").append($("#derivedPrint").text()).addClass("opacity00");
						transferEffect("#derivedPrint", "#derivedConstrPrint", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
				
			
				break;
				
			case "derivedDestrPrint" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#derivedDestrPrint").append($("#derivedPrint1").text()).addClass("opacity00");
						transferEffect("#derivedPrint1", "#derivedDestrPrint", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
				
				
			case "base1DestrPrint" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#base1DestrPrint").append($("#base1Print1").text()).addClass("opacity00");
						transferEffect("#base1Print1", "#base1DestrPrint", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
				
			case "base2DestrPrint" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#base2DestrPrint").append($("#base2Print1").text()).addClass("opacity00");
						transferEffect("#base2Print1", "#base2DestrPrint", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
				
			
		}
		break;
			
		case "restart":
			$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-tooltipbuttons').addClass("hide");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(500, 1);
				$("#restart").removeClass("opacity00");
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
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1200 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index1000000");
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
	$(selector1).effect( "highlight",{color: '#ffff33'}, 500);
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
		
		$('#codeDiv').append("<span id='dummy' class='ct-code-b-yellow ct-fonts' style='position: relative; z-index: 5000010;'>" 
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

