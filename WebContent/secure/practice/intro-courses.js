/**
 * 
 */
function launchHelp() {
	if ($('.introjs-overlay').is(":visible")) {
		//if already visible...
		return false;
	}
	
	//switch-animate
	$(".switch-animate").eq(0).attr("id", "javaEnabled");
	$(".switch-animate").eq(1).attr("id", "statusEnabled");
	
	$(".introjs-skipbutton").click(function() {
		introjs.goToStep(introjs._introItems.length);
	});
	
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#formAndSearchContainerDiv",
			intro : "Here we can create a <span class='ct-code-b-yellow'>course</span> details.",
			position : "left",
		}, {
			element : "#course",
			intro : "Enter a course name.",
			position : "right" 
		}, {
			element : "#description",
			intro : "Enter here description for the course.",
			position : "right" 
		}, {
			element : "#javaEnabled",
			intro : "Click to enable the java applet (If requires only).",
			position : "right" 
		}, {
			element : "#statusEnabled",
			intro : "Click to enable the course status.",
			position : "right" 
		}, {
			element : "#addBtn",
			intro : "Clicking on the <span class='ct-code-b-yellow'>add</span> button will add your course details.",
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
	/*$(".introjs-skipbutton").click(function() {
		introjs.goToStep(introjs._introItems.length - 1);
	});*/
}