/**
 * 
 */
function launchHelp() {
	if ($('.introjs-overlay').is(":visible")) {
		//if already visible...
		return false;
	}
	
	//switch-animate
	$(".switch-animate").eq(0).attr("id", "isEnabled");
	
	// table button selectors
	$("tr td a").eq(0).attr("id", "editBtn");
	$("tr td a").eq(1).attr("id", "cloneBtn");
	
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
		intro : "<span class='ct-code-b-yellow'>End User Course Sub-Units</span>",
		position : "left",
	}, {
		element : "#endUserCourse",
		intro : "",
		position : "right" 
	}, {
		element : "#endUserCourseUnit",
		intro : "",
		position : "right"
	}, {
		element : "#subUnit",
		intro : "",
		position : "right" 
	}, {
		element : "#description",
		intro : "",
		position : "right" 
	}, {
		element : "#isEnabled",
		intro : "Click <span class='ct-code-b-yellow'>Yes</span> to enable the status.",
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
		steps.splice(9, 0, {
			element : "#editBtn",
			intro: "",
			position: "top"
		}, {
			element : "#cloneBtn",
			intro: "",
			position: "right"
		})
	}
	
	return steps;
}