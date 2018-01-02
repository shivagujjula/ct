var tl;
var iVal = 1;
var destructorsInInheritanceReady = function() {
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
	//var date = new Date("Tue Jan 02 2018 12:54:14 GMT+0530 (IST)");
	//console.log(date);
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
			animateStep : 'singleInheritance',
			position : 'right',
	/*-------- Single inheritance ------------ */
		}, {
			element :"#classBase",
			intro : "",
			animateStep : 'classBase1',
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#classDerived",
			intro : "",
			animateStep : 'classDerived1',
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
			animateStep : 'classDerived2',
			tooltipClass : 'hide'
		}, {
			element :"#base",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#classBase",
			intro : "",
			animateStep : 'classBase2',
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#baseClassConstructor",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#baseClassConstructorCout",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'baseConstrPrint',
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
			animateStep : 'classDerived2',
			tooltipClass : 'hide'
		}, {
			element :"#derivedClassDestructor",
			intro : "",
			animateStep : 'firstStep',
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
			element :"#classDerived",
			intro : "",
			animateStep : 'classDerived2',
			tooltipClass : 'hide'
		}, {
			element :"#base",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#classBase",
			intro : "",
			animateStep : 'classBase2',
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#baseClassDestructor",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#baseClassDestructorCout",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'baseDestrPrint',
			tooltipClass : 'hide' 
	/*-------- Multilevel inheritance ------------ */
	//introjs._currentStep == 26
		}, {
			element :"#preTableDiv",
			intro : "",
			animateStep : 'multiLevelInheritance',
			position : 'right',
		}, {
			element :"#classBase",
			intro : "",
			animateStep : 'classBase1',
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#classDerived",
			intro : "",
			animateStep : 'classDerived1',
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#classDerived1",
			intro : "",
			animateStep : 'classDerived1',
			position : 'right',
			tooltipClass : 'hide'
				
		}, {
			element :"#main",
			intro : "",
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#derived1Obj",
			intro : "",
			tooltipClass : 'hide',
			position : 'right', 
			
		}, {
			element :"#classDerived1",
			intro : "",
			animateStep : 'classDerived2',
			tooltipClass : 'hide'
		}, {
			element :"#derived1",
			intro : "",
			tooltipClass : 'hide'
				
		}, {
			element :"#classDerived",
			intro : "",
			animateStep : 'classDerived2',
			tooltipClass : 'hide'
		}, {
			element :"#base",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#classBase",
			intro : "",
			animateStep : 'classBase2',
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#baseClassConstructor",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#baseClassConstructorCout",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'baseConstrPrint',
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
		}, {
			element :"#spanDerived1",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#derived1ClassConstructor",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#derived1ClassConstructorCout",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'derived1ConstrPrint',
			tooltipClass : 'hide'
		},{
			element : '#end',
			intro : '',
			position : "right"	
		}, {
			element :"#classDerived1",
			intro : "",
			animateStep : 'classDerived2',
			tooltipClass : 'hide'
				
		}, {
			element :"#derived1ClassDestructor",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#derived1ClassDestructorCout",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'derived1DestrPrint',
			tooltipClass : 'hide'
		}, {
			element :"#classDerived1",
			intro : "",
			animateStep : 'classDerived2',
			tooltipClass : 'hide'
		}, {
			element :"#derived1",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#classDerived",
			intro : "",
			animateStep : 'classDerived2',
			tooltipClass : 'hide'
		}, {
			element :"#derivedClassDestructor",
			intro : "",
			animateStep : 'secondStep',
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
			element :"#classDerived",
			intro : "",
			animateStep : 'classDerived2',
			tooltipClass : 'hide'
		}, {
			element :"#base",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#classBase",
			intro : "",
			animateStep : 'classBase2',
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#baseClassDestructor",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#baseClassDestructorCout",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'baseDestrPrint',
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
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'singleInheritance':
				$("#classDerived, #classDerived1, #derived1Obj").hide();
				$("#derivedObj, #derived1Obj").hide();
				$("#classBase").addClass("opacity00");
			break;
			
			case 'multiLevelInheritance':
				$('.introjs-tooltip').css("min-width", "227px");
				$("#classDerived, #classDerived1, #derived1Obj").hide();
				$("#derivedObj, #derived1Obj").hide();
				$("#classBase, #main").addClass("opacity00");
				$("#consoleId").addClass("opacity00");
			break;
		}
		break;
			
		case 'classBase':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'classBase1':
				$(".introjs-tooltip").removeAttr("style");
				$("#classBase").addClass("opacity00");
				$("#classDerived").hide();
				$("#baseClassConstructor, #baseClassDestructor").addClass("opacity00");
				break;
				
			case 'classBase2':
				if(introjs._currentStep == 7 || introjs._currentStep == 36) {
					$("#baseClassConstructor").addClass("opacity00");
				} else if(introjs._currentStep == 22 || introjs._currentStep == 61) {
					$("#baseClassDestructor").addClass("opacity00");
				}
				break;
			}
			break;
			
		case 'classDerived':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'classDerived1':
				$("#classDerived").show();
				$("#main").addClass("opacity00");
				$("#derivedClassConstructor, #derivedClassDestructor").addClass("opacity00");
				$("#classDerived1").hide();
				break;
				
			case 'classDerived2':
				if(introjs._currentStep == 16 || introjs._currentStep == 55) {
					$(".introjs-tooltip").removeAttr("style");
					$("#derivedClassDestructor").addClass("opacity00");
				} 
				break;
			}
			break;
			
		case 'classDerived1':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'classDerived1':
				$("#classDerived1").show();
				$("#main").addClass("opacity00");
				break;
				
			case 'classDerived2':
				 if(introjs._currentStep == 49) {
					$("#derived1ClassDestructor").addClass("opacity00");
				}
				break;
			}
			break;
			
			
		case 'base':
			if(introjs._currentStep == 41) {
				$("#derivedClassConstructor").addClass("opacity00");
			}
			break;
			
		case 'main':
			$("#main").addClass("opacity00");
			if(introjs._currentStep == 3) {
				$("#derivedObj").addClass("opacity00");
			} else if(introjs._currentStep == 30) {
				$("#derived1Obj").addClass("opacity00");
			}
			break;
			
		case 'derivedObj':
			$("#derivedObj").show();
			$("#derivedObj").addClass("opacity00");
			$("#derivedConstrPrint, #derived1ConstrPrint, #derived1DestrPrint").text("");
			$("#base1DestrPrint, #derivedDestrPrint, #baseConstrPrint, #baseDestrPrint").text("");
			$("#baseClassConstructor").addClass("opacity00");
			break;
			
		case 'derived1Obj':
			$("#derived1Obj").show();
			$("#derivedConstrPrint, #derived1ConstrPrint, #derived1DestrPrint").text("");
			$("#base1DestrPrint, #derivedDestrPrint, #baseConstrPrint, #baseDestrPrint").text("");
			$("#derived1Obj").addClass("opacity00");
			break;
			
		case 'baseClassConstructor':
			$("#baseConstrPrint, #derivedConstrPrint, #baseDestrPrint, #derivedDestrPrint").text("");
			$("#baseClassConstructor, #baseClassDestructor").addClass("opacity00");
			break;
			
		case 'baseClassConstructorCout':
			if(introjs._currentStep == 9 || introjs._currentStep == 38 || introjs._currentStep == 76 ) {
				$("#baseConstrPrint, #derivedConstrPrint, #baseDestrPrint, #derivedDestrPrint").text("");
			}
			break;
			
		case 'derivedClassConstructor':
			$("#derivedClassConstructor").addClass("opacity00");
			break;
			
		case 'derivedClassConstructorCout':
			if(introjs._currentStep == 13 || introjs._currentStep == 36) {
				 $("#derivedConstrPrint").text("");
				 $("#derivedConstrPrint").addClass("opacity00");
			} 
			break;
			
		case 'baseClassDestructor':
			$("#baseClassDestructor").addClass("opacity00");
			break;
			
		case 'baseClassDestructorCout':
			if(introjs._currentStep == 24 || introjs._currentStep == 63) {
				 $("#baseDestrPrint").text("");
			} 
			break;
			
		case 'derivedClassDestructor':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
			case 'secondStep':
				$("#derivedClassDestructor").addClass("opacity00");
				break;
			}
			break;
			
		case 'derivedClassDestructorCout':
			if(introjs._currentStep == 18 || introjs._currentStep == 57) {
				 $("#derivedDestrPrint").text("");
				 $("#derivedDestrPrint").addClass("opacity00");
			} 
			break;
			
		case 'derived1Obj':
			$("#derived1Obj").show();
			$("#consoleId").addClass("opacity00");
			break;
			
		case 'derived1ClassConstructor':
			$("#derived1ClassConstructor").addClass("opacity00");
			break;
			
		case 'derived1ClassConstructorCout':
			//introjs._currentStep == 46
			$("#derived1ConstrPrint").text("");
			break;
			
		case 'derived1ClassDestructor':
			$("#derived1ClassDestructor").addClass("opacity00");
			break;
			
		case 'derived1ClassDestructorCout':
			//introjs._currentStep == 51
			$("#derived1DestrPrint").text("");
			break;
			
			
		case 'derived1':
			if(introjs._currentStep == 44) {
				//$("#derived1ClassConstructor").addClass("opacity00");
			}
			break;
			
		case 'base':
			
			break;
			
		case 'spanDerived':
			$("#derivedClassConstructor").addClass("opacity00");
			break;
			
		case 'spanDerived1':
			$("#derived1ClassConstructor").addClass("opacity00");
			break;
			
		case 'baseClassDestructorEnd':
			
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
				
			case "derivedConstrPrint" :
				$("#derivedConstrPrint").text("");
				$(".introjs-tooltip").removeAttr("style");
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
				$(".introjs-tooltip").removeAttr("style");
				if(introjs._currentStep == 25) {
					$("#derivedObj, #classDerived").show();
					$("#classBase, #baseClassConstructor, #baseClassDestructor").removeClass("opacity00");
					$("#main, #derivedClassConstructor, #derivedClassDestructor, #consoleId").removeClass("opacity00");
				}
				break;
			}
			break;
			
		case 'end':
			if(introjs._currentStep == 15) {
				$("#derivedClassDestructor").addClass("opacity00");
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
			if (introjs._currentStep != 0) {
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
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'singleInheritance':
				$("#preTableDiv").removeClass("opacity00");
				var text = 	"Let us understand how <span class='ct-code-b-yellow'>destructors</span> can be called " +
							"in <span class='ct-code-b-yellow'>single inheritance</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();
				});
				break;
			
			case 'multiLevelInheritance':
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = 	"Let us understand how <span class='ct-code-b-yellow'>destructors</span> can be called " +
								"in <span class='ct-code-b-yellow'>multiLevel inheritance</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			}
			break;
		case 'classBase':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'classBase1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#classBase").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					var text = 	"The class <span class='ct-code-b-yellow'>Base</span> is " +
								"called a <span class='ct-code-b-yellow'>base</span> or " +
								"<span class='ct-code-b-yellow'>parent</span> class.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
					
				});
				break;
				
			case 'classBase2':
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
			case 'classDerived1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#classDerived").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					var text = 	"<ul><li>Here the class <span class='ct-code-b-yellow'>Derived</span> is " +
								"the <span class='ct-code-b-yellow'>derived</span> class (or) " +
								"<span class='ct-code-b-yellow'>child</span> class of " +
								"<span class='ct-code-b-yellow'>Base</span> class.</li>" +
								"<li>It inherits the properties of <span class='ct-code-b-yellow'>base</span> class " +
								"<span class='ct-code-b-yellow'>Base</span>.</li></ul>";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
					
				});
				break;
				
			case 'classDerived2':
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
			
		case 'base':
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
			
		case 'spanDerived1':
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
			
		case 'baseClassConstructor':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#baseClassConstructor").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"This is a <span class='ct-code-b-yellow'>default constructor</span> of " +
							"class <span class='ct-code-b-yellow'>Base</span>, which is called before " +
							"the calling of <span class='ct-code-b-yellow'>default constructor</span> of " +
							"the class <span class='ct-code-b-yellow'>Derived</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
			
		case 'baseClassConstructorCout':
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
							"of class <span class='ct-code-b-yellow'>Base</span>, the " +
							"<span class='ct-code-b-yellow'>default constructor</span> of " +
							"class <span class='ct-code-b-yellow'>Derived</span> will be executed.";
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
			
		case 'baseClassDestructor':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#baseClassDestructor").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"The <span class='ct-code-b-yellow'>destructor</span> of the " +
							"class <span class='ct-code-b-yellow'>Base</span> will be executed next.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'baseClassDestructorCout':
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
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#derivedClassDestructor").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					var text = 	"The <span class='ct-code-b-yellow'>destructor</span> of the " +
								"class <span class='ct-code-b-yellow'>Derived</span> will be executed first.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				});
				break;
				
			case 'secondStep':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#derivedClassDestructor").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					var text = 	"The <span class='ct-code-b-yellow'>destructor</span> of the " +
								"class <span class='ct-code-b-yellow'>Derived</span> will be " +
								"executed after execution of <span class='ct-code-b-yellow'>destructor</span> of the " +
								"class <span class='ct-code-b-yellow'>Derived1</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				});
				break;
			}
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
			
		case 'derived1Obj':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#derived1Obj").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"Here an object <span class='ct-code-b-yellow'>obj</span> is " +
							"created to class <span class='ct-code-b-yellow'>Derived1</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'classDerived1':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'classDerived1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#classDerived1").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					var text = 	"Here the class <span class='ct-code-b-yellow'>Derived1</span> is " +
								"derived from class <span class='ct-code-b-yellow'>Derived</span>. " +
								"So, it inherits the properties of class " +
								"<span class='ct-code-b-yellow'>Derived</span> and as well as class " +
								"<span class='ct-code-b-yellow'>Base</span>.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
					
				});
				break;
				
			case 'classDerived2':
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
			
		case 'derived1':
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
			
			
		case 'derived1ClassConstructor':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#derived1ClassConstructor").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"After execution of <span class='ct-code-b-yellow'>default constructor</span> " +
							"of class <span class='ct-code-b-yellow'>Derived</span>, the " +
							"<span class='ct-code-b-yellow'>default constructor</span> of " +
							"class <span class='ct-code-b-yellow'>Derived1</span> will be called.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'derived1ClassConstructorCout':
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
			
		case 'derived1ClassDestructor':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#derived1ClassDestructor").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"The <span class='ct-code-b-yellow'>destructor</span> of <span class='ct-code-b-yellow'>derived</span> " +
							"class <span class='ct-code-b-yellow'>Derived1</span> will be executed first.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
			
		case 'derived1ClassDestructorCout':
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
			case "baseConstrPrint" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#baseConstrPrint").append($("#basePrint").text()).addClass("opacity00");
						transferEffect("#basePrint", "#baseConstrPrint", function() {
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
				
			case "derived1ConstrPrint" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#derived1ConstrPrint").append($("#derived1Print").text()).addClass("opacity00");
						transferEffect("#derived1Print", "#derived1ConstrPrint", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				}); 
				break;
				
			case "derived1DestrPrint" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#derived1DestrPrint").append($("#derived1Print1").text()).addClass("opacity00");
						transferEffect("#derived1Print1", "#derived1DestrPrint", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
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
				
				
			case "baseDestrPrint" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#baseDestrPrint").append($("#basePrint1").text()).addClass("opacity00");
						transferEffect("#basePrint1", "#baseDestrPrint", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;	
			}
			break;
			
		case 'end':
			$('.introjs-tooltip').css("min-width", "230px");
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = 	"After completion of <span class='ct-code-b-yellow'>main()</span> " +
							"the <span class='ct-code-b-yellow'>destructors</span> will be called " +
							"in the <span class='ct-code-b-yellow'>reverse</span> order of their " +
							"<span class='ct-code-b-yellow'>constructors</span> i.e, from the " +
							"last class <span class='ct-code-b-yellow'>Derived</span> to the " +
							"class <span class='ct-code-b-yellow'>Base</span>.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "restart":
			$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-tooltipbuttons').addClass("hide");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
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