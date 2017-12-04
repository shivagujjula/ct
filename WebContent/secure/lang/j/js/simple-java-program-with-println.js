var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
var simpleJavaProgramWithPrintlnReady = function() {
	introGuide();

	$('#reStartBtn').click(function() {
		location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#startBtn",
			intro : "Click to Start",
			position : "right"
		},{
			element : "#preBody",
			intro : "",
			position : "bottom"
		},{
			element : "#line1",
			intro : "",
			position : "bottom"
		},{
			element : "#line2",
			intro : "",
			position : "#bottom"
		},{
			element : "#line3",
			intro : "",
			position : "bottom"
		},{
			element : "#printlnId1",
			position : "top",
			position : "bottom"
		},{
			element : "#line4",
			intro : "",
			position : "bottom"
		},{
			element : "#printlnId2",
			intro : "",
			position : "bottom"
		},{
			element : "#line5",
			intro : "",
			position : "bottom"
		},{
			element : "#printlnId3",
			intro : "",
			position : "bottom"
		},{
			element : "#line6",
			intro : "",
			position : "bottom"
		},{
			element : "#reStartBtn",
			intro : "Click to Restart",
			position : "right"
		}
		]});
	
	introjs.onbeforechange(function(targetElement) {

		
		var elementId = targetElement.id;
		switch (elementId) {
		case "startBtn":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;	
		case "preBody":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "line1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "line2":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "line3":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId1").addClass("opacity00 white");
			$("#printlnId1").removeClass("green");
		break;
		case "printlnId1":
			$("#printlnId1").removeClass("opacity00");
			$("#printlnId1").removeClass("white");
			$("#printlnId1").addClass("green");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "line4":
			$("#printlnId1").addClass("white");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId2").addClass("opacity00 white");
			$("#printlnId2").addClass("opacity00");
		break;
		case "printlnId2":
			$("#printlnId2").removeClass("opacity00 white");
			$("#printlnId2").addClass("green");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "line5":
			$("#printlnId2").addClass("white");
			$("#printlnId3").addClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "printlnId3":
			$("#printlnId3").removeClass("opacity00 white");
			$("#printlnId3").addClass("green");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "line6":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId3").addClass("white");
		break;
		case "reStartBtn":
			
		break;
		
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 1) {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		var elementId = targetElement.id;
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		switch (elementId) {
		case "startBtn":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#startBtn").click(function() {
				$(this).addClass('hidden');
				$('#restartBtn').addClass('visibility-hidden').removeClass('hidden');
				introjs.nextStep();
			});
			
		break;
		case "preBody":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$('.introjs-tooltip').removeClass('hide');
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Below sample code prints three lines to the console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "line1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$('.introjs-tooltip').removeClass('hide');
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the name of the class.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "line2":
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		introjs.refresh();
		$('.introjs-tooltip').removeClass('hide');
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "This is the main method where the program execution starts.";
			typing($(".introjs-tooltiptext"), text, function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
		});
		break;
		case "line3":
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		introjs.refresh();
		$('.introjs-tooltip').removeClass('hide');
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "The statement System.out.println('Hello'); prints <b>Hello</b> and a new-line (" + "'" + "\n" + "'" + ") character after that.";
			typing($(".introjs-tooltiptext"), text, function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
		});
		break;
		case "printlnId1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId1").removeClass("opacity00");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<b>Hello</b> is printed to the console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "line4":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement prints <b>I am learning Java</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "printlnId2":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId2").removeClass("opacity00");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<b>I am learning Java</b> appears on the next line in the console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "line5":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement prints <b>Bye!</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "printlnId3":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId3").removeClass("opacity00");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<b>Bye!</b> appears on the next line in the console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "line6":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the end of the main method where the program execution ends.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "reStartBtn":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "115px"});
			$('#reStartBtn').removeClass("hide");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart.";
				typing($(".introjs-tooltiptext"), text, function() {
				});
			});
		break;
		}
	});
	
	introjs.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}