/**
 * 
 */
function launchHelp() {
	if ($('.introjs-overlay').is(":visible")) {
		//if already visible...
		return false;
	}
	
	//switch-animate
	$(".switch-animate").eq(0).attr("id", "statusEnabled");
	
	$(".introjs-skipbutton").click(function() {
		introjs.goToStep(introjs._introItems.length);
	});
	
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#course",
			intro : "",
			position : "bottom",
		}, {
			element : "#topic",
			intro : "",
			position : "right" 
		}, {
			element : "#section",
			intro : "",
			position : "right" 
		}, {
			element : "#s2id_courseTag",
			intro : "",
			position : "left" 
		}, {
			element : "#questionType",
			intro : "",
			position : "right" 
		}, {
			element : "#difficultyLevel",
			intro : "",
			position : "left" 
		}, {
			element : "#statusEnabled",
			intro : "",
			position : "right" 
		}, {
			element : "#duration",
			intro : "",
			position : "left" 
		}, {
			element : "#questionIntent",
			intro : "",
			position : "right" 
		}, {
			element : "#s2id_parentId",
			intro : "",
			position : "right" 
		}, {
			element : "#s2id_pending",
			intro : "",
			position : "right" 
		}, {
			element : "#progLanguage",
			intro : "",
			position : "right" 
		}, {
			element : "#s2id_autogen2",
			intro : "",
			position : "right" 
		}, {
			element : "#s2id_autogen5",
			intro : "",
			position : "right"
		}, {
			element : "#displayText",
			intro : "",
			position : "right" 
		}, {
			element : "#designView",
			intro : "",
			position : "right" 
		}, {
			element : "#copyWritingUl",
			intro : "",
			position : "right" 
		}, {
			element : "#copyWritingFileNameSpan-1519303708693",
			intro : "",
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
		case "course":
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