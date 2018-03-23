/**
 * 
 */
function launchHelp() {
	if ($('.introjs-overlay').is(":visible")) {
		//if already visible...
		return false;
	}
	
	//switch-animate
	$(".switch-animate").eq(0).attr("id", "sendEmails");
	$(".switch-animate").eq(1).attr("id", "isEnabled");
	$(".switch-animate").eq(2).attr("id", "isHideMainContent");
	$("#emailForOnlyNewYes").parent().attr("id", "selectUsers");
	
	// table button selectors
	$("tr td a").eq(0).attr("id", "editBtn");
	$("tr td a").eq(1).attr("id", "cloneBtn");
	$("tr td a").eq(2).attr("id", "deleteBtn");
	
	introjs = introJs();
	introjs.setOptions({
		steps : initSteps()
	});
	
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

function initSteps() {
	var steps = [{
		element : "#formAndSearchContainerDiv",
		intro : "Here you can create or update <span class='ct-code-b-yellow'>Test Schedule</span>.",
		position : "left",
	}, {
		element : "#startTime",
		intro : "Select or enter start time of the test.",
		position : "right" 
	}, {
		element : "#endTime",
		intro : "Select or enter end time of the test.",
		position : "right"
	}, {
		element : "#s2id_test",
		intro : "Select a test.",
		position : "right" 
	}, {
		element : "#name",
		intro : "Give a name for the schedule test.",
		position : "right" 
	}, {
		element : "#s2id_autogen2",
		intro : "Select a group for the test.",
		position : "right" 
	}, {
		element : "#sendEmails",
		intro : "Select <span class='ct-code-b-yellow'>yes</span> to send emails to the users.",
		position : "right" 
	}, {
		element : "#selectUsers",
		intro : "Select users.",
		position : "right" 
	}, {
		element : "#emailSubject",
		intro : "You can change email subject.",
		position : "right" 
	}, {
		element : "#emailBodyText",
		intro : "This is email body text. You can add any text related to test if you want.",
		position : "right" 
	}, {
		element : ".code",
		intro : "Please follow the below instructions.",
		position : "top"
	}, {
		element : "#isEnabled",
		intro : "Click <span class='ct-code-b-yellow'>Yes</span> to enable the status.",
		position : "right" 
	}, {
		element : "#isHideMainContent",
		intro : "When the user on schedule test you can hide the main content of the course by click to yes.",
		position : "right" 
	}, {
		element : "#addBtn",
		intro : "Click on <span class='ct-code-b-yellow'>add</span> button " +
		"will add your details.",
		position : "left" 
	}, {
		element : "#resetBtn",
		intro : "Click on <span class='ct-code-b-yellow'>reset</span> button will reset your details.",
		position : "right" 
	}, {
		element : "#tableDetails",
		intro : "",
		position : "top"
	}, {
		element : "#menuBarHelp",
		intro : "",
		tooltipClass : "hide"
	}];
	
	if ($("#editBtn").is(":visible")) {
		steps.splice(16, 0, {
			element : "#editBtn",
			intro: "",
			position: "top"
		}, {
			element : "#cloneBtn",
			intro: "",
			position: "right"
		}, {
			element : "#deleteBtn",
			intro: "",
			position: "right"
		})
	}
	
	return steps;
}