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
			element : "#printlnId11",
			intro : "",
			position : "bottom"
		},{
			element : "#line4",
			intro : "",
			position : "bottom"
		},{
			element : "#printlnId12",
			intro : "",
			position : "bottom"
		},{
			element : "#line5",
			intro : "",
			position : "bottom"
		},{
			element : "#outputDiv",
			intro : "",
			position : "bottom"
		},{
			element : "#line6",
			intro : "",
			position : "bottom"
		},{
			element : "#printlnId2",
			intro : "",
			position : "bottom"
		},{
			element : "#line7",
			intro : "",
			position : "bottom"
		},{
			element : "#printlnId3",
			intro : "",
			position : "bottom"
		},{
			element : "#line8",
			intro : "",
			position : "bottom"
		},{
			element : "#printlnId41",
			intro : "",
			position : "bottom"
		},{
			element : "#line9",
			intro : "",
			position : "bottom"
		},{
			element : "#printlnId42",
			intro : "",
			position : "bottom"
		},{
			element : "#line10",
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
		case "printlnId11":
			$("#printlnId11").removeClass("opacity00");
			$("#printlnId11").removeClass("white");
			$("#printlnId11").addClass("green");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "line4":
			$("#printlnId11").addClass("white");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId12").addClass("opacity00");
		break;
		case "printlnId12":
			$("#printlnId12").addClass("green");
			$("#printlnId12").removeClass("white");
			$("#printlnId12").removeClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "line5":
			$("#printlnId12").addClass("white");
			$("#printlnId3").addClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "line6":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId2").addClass("opacity00");
		break;
		case "printlnId2":
			$("#printlnId2").addClass("green");
			$("#printlnId2").removeClass("white");
			$("#printlnId2").removeClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "line7":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId2").addClass("white");
			$("#printlnId3").addClass("opacity00");
		break;
		case "printlnId3":
			$("#printlnId3").addClass("green");
			$("#printlnId3").removeClass("white");
			$("#printlnId3").removeClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "line8":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId3").addClass("white");
			$("#printlnId41").addClass("opacity00");
		break;
		case "printlnId41":
			$("#printlnId41").addClass("green");
			$("#printlnId41").removeClass("white");
			$("#printlnId41").removeClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "line9":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId41").addClass("white");
			$("#printlnId42").addClass("opacity00");
		break;
		case "printlnId42":
			$("#printlnId42").addClass("green");
			$("#printlnId42").removeClass("white");
			$("#printlnId42").removeClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "line10":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId42").addClass("white");
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
				var text = "Below code uses <b>print()</b> and <b>println()</b> methods.";
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
			var text = "This statement uses print method to print <b>Ganga</b>.";
			typing($(".introjs-tooltiptext"), text, function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
		});
		break;
		case "printlnId11":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId11").removeClass("opacity00");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<b>Ganga</b> is printed to the console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "line4":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement prints <b>River</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "printlnId12":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId12").removeClass("opacity00");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<b>River</b> is printed to the console.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "line5":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The println method prints a new-line character ('\n'). The new-line character is an invisible character."
						+ " Text editors/renderes end the line at '\n' and display the remaining text in the next line.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "outputDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "You will notice that there is no visible change in the console, since '\n' is an invisible character.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "line6":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <b>println</b> method first prints <b>Yamuna</b> and a new-line character after it.";
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
				var text = "<b>Yamuna</b> is printed in the next line, because a new-line character was already printed by the previous statement." 
						+ "You will also notice that the next output will appears in the next line, since a '\n' char is printed by the println method after printing <b>Yamuna</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "line7":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "It will print <b>River</b> and also a new-line character after it.";
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
				var text = "You will notice that <b>River</b> is printed in the next line, since a '\n' was already printed after <b>Yamuna</b> in the previous line.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "line8":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Since we are using <b>print</b> method only <b>Godavari</b> is printed without the new-line char after <b>Godavari</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "printlnId41":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId41").removeClass("opacity00");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "You will notice that <b>Godavari</b> is printed in the next line, since a '\n' was already printed after <b>River</b> in the previous line.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "line9":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This statement prints <b>River</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "printlnId42":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#printlnId42").removeClass("opacity00");
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<b>River</b> is printed next to <b>Godavari</b> in the same line because we used print and not <b>println</b> method while printing <b>Godavari</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "line10":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the end of the <b>main</b> method where the program execution ends.";
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