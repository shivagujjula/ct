/**
 * 
 */
function launchHelp() {
	if ($('.introjs-overlay').is(":visible")) {
		//if already visible...
		return false;
	}
	
	//switch-animate
	$(".switch-animate").eq(0).attr("id", "RandomiseQuestions");
	$(".switch-animate").eq(1).attr("id", "EnableNegativeMarks");
	$(".switch-animate").eq(2).attr("id", "showHints");
	$(".switch-animate").eq(3).attr("id", "showFeedback");
	$(".switch-animate").eq(4).attr("id", "showHintsOnExceptions");
	$(".switch-animate").eq(5).attr("id", "emailResults");
	$(".switch-animate").eq(6).attr("id", "isScheduledTest");
	$(".switch-animate").eq(7).attr("id", "requiresJavaApplet");
	$(".switch-animate").eq(8).attr("id", "showExecutionResults");
	$(".switch-animate").eq(9).attr("id", "isEnabled");
	
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#formAndSearchContainerDiv",
			intro : "Here we can create a <span class='ct-code-b-yellow'>Test</span> details.",
			position : "left",
		}, {
			element : "#test",
			intro : "Enter your test name.",
			position : "right" 
		}, {
			element : "#displayName",
			intro : "Select your display name.",
			position : "right" 
		}, {
			element : '#totalTime',
			intro : '',
			position : "right"
		}, {
			element : '#totalMarks',
			intro : 'Enter total marks for the test.',
			position : "right"
		}, {
			element : '#passMarks',
			intro : 'give some pass marks for the test.',
			position : "right"
		}, {
			element : '#RandomiseQuestions',
			intro : '',
			position : "right"
		}, {
			element : '#EnableNegativeMarks',
			intro : '',
			position : "right"
		}, {
			element : '#showHints',
			intro : '',
			position : "right"
		}, {
			element : '#showFeedback',
			intro : '',
			position : "right"
		}, {
			element : '#showHintsOnExceptions',
			intro : '',
			position : "right"
		}, {
			element : '#emailResults',
			intro : '',
			position : "right"
		}, {
			element : "#description",
			intro : "Enter here description for the topic.",
			position : "right" 
		}, {
			element : '#isScheduledTest',
			intro : '',
			position : "right"
		}, {
			element : '#requiresJavaApplet',
			intro : '',
			position : "right"
		}, {
			element : '#showExecutionResults',
			intro : '',
			position : "right"
		}, {
			element : '#isEnabled',
			intro : '',
			position : "right"
		}, {
			element : "#addBtn",
			intro : "Clicking on the <span class='ct-code-b-yellow'>add</span> button " +
					"will add topic details to your course.",
			position : "left" 
		}, {
			element : "#resetBtn",
			intro : "Clicking on the <span class='ct-code-b-yellow'>reset</span> button will reset your details.",
			position : "right" 
		}, {
			element : "#menuBarHelp",
			intro : "",
			tooltipClass : "hide"
		}]
	});//description
	
	introjs.onafterchange(function(targetElement) {
		introjs.refresh();
		$('.introjs-nextbutton').show();
		$('.introjs-prevbutton').show();
		
		var elementId = targetElement.id;
		switch (elementId) {
		case "formAndSearchContainerDiv":
			$('.introjs-prevbutton').hide();
			break;			
			
		case "menuBarHelp":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.exit();
				}, 1000);
			});
			break;
		}
	});

	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);	
	introjs.start();	
	
	$(".introjs-skipbutton").addClass("pull-left");
	$('.introjs-bullets').hide();
}