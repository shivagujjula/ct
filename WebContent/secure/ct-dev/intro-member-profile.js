/**
 * 
 */
function launchHelp() {
	if ($('.introjs-overlay').is(":visible")) {
		//if already visible...
		return false;
	}
	$(".introjs-skipbutton").on("click", function() {
		console.log("skipped");
		introjs.goToStep(introjs._introItems.length);
	});
	
	//switch-animate
	$("#10thMarks").addClass("sscmarks");
	$("#12thMarks").addClass("intermarks");
	
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#formAndSearchContainerDiv",
			intro : "Here you can update your <span class='ct-code-b-yellow'>Profile Details</span>.",
			position : "left",
		}, {
			element : "#firstName",
			intro : "Enter your first name.",
			position : "right" 
		}, {
			element : "#lastName",
			intro : "Enter your last name.",
			position : "right"
		}, {
			element : "#gender",
			intro : "Select your gender.",
			position : "right" 
		}, {
			element : "#dob",
			intro : "Select your date of birth.",
			position : "right" 
		}, {
			element : "#phoneNumber",
			intro : "Enter 10 digit mobile number.",
			position : "right" 
		}, {
			element : "#memberId",
			intro : "Enter your ID / Roll number.",
			position : "right" 
		}, {
			element : "#aadharNo",
			intro : "Enter Aadhar number.",
			position : "right" 
		}, {
			element : ".sscmarks",
			intro : "Enter your 10<sup>th</sup> marks details.",
			position : "right" 
		}, {
			element : ".intermarks",
			intro : "Enter your 12<sup>th</sup> marks details",
			position : "right" 
		}, {
			element : "#addBtn",
			intro : "Click on <span class='ct-code-b-yellow'>Update</span> button " +
					"to update your profile details.",
			position : "left" 
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