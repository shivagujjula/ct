/**
 * 
 */
function launchHelp() {
	if ($('.introjs-overlay').is(":visible")) {
		//if already visible...
		return false;
	}
	
	//switch-animate
	$(".switch-animate").eq(0).attr("id", "requiresJavaApplet");
	$(".switch-animate").eq(1).attr("id", "isEnabled");
	
	// table button selectors
	$("tr td a").eq(0).attr("id", "editBtn");
	$("tr td a").eq(1).attr("id", "cloneBtn");
	
	introjs = introJs();
	introjs.setOptions({
		steps : initSteps()
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

function initSteps() {
	var steps = [{
		element : "#formAndSearchContainerDiv",
		intro : "<span class='ct-code-b-yellow'>Lab</span>",
		position : "left",
	}, {
		element : "#lab",
		intro : "",
		position : "right" 
	}, {
		element : "#displayName",
		intro : "",
		position : "right" 
	}, {
		element : '#generalInstructions',
		intro : '',
		position : "right"
	}, {
		element : "#requiresJavaApplet",
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
		element : ".table-responsive",
		intro : "",
		position : "top"
	}, {
		element : "#menuBarHelp",
		intro : "",
		tooltipClass : "hide"
	}]
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

function getStep(element, intro, position, tooltipClass) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	return step;
}	