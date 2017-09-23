var count = 0;
var multiplierMap = {
	"x1Ω" : ["1", "Ω"],
	"x10Ω" : ["10", "Ω"],
	"x100Ω" : ["0.1", "KΩ"],
	"x1KΩ" : ["1", "KΩ"],
	"x10KΩ" : ["10", "KΩ"],
	"x100KΩ" : ["0.1", "MΩ"],
	"x1MΩ" : ["1", "MΩ"],
	"x10MΩ" : ["10", "MΩ"],
	"x100MΩ" : ["100", "MΩ"],
	"x1GΩ" : ["1", "GΩ"],
}
function ResistorConnectionsReady() {
	$("select").click();
	$("line").hide();
	$("text").hide();
	intro = introJs();
	$('#restartBtn').click(function() {
		location.reload();
		});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
			}
	});
	
	$("select").on("click", function() {
		$("#totalDiv").popover("destroy");
		/* $('#popover' + (count - 1)).remove(); */
		var selectedColor = $(this).find(":selected").attr("color");
		var value = $(this).find(":selected").attr("color-val");
		$(this).attr("class", "form-control digit-picker " +  selectedColor);
		$("#" + $(this).attr("strip")).attr("class", selectedColor);
		$("#" + $(this).attr("strip-val")).find("input").val(value);
		
		var mul = multiplierMap[$("input").eq(2).val()][0];
		var symbol = multiplierMap[$("input").eq(2).val()][1];
		var val1 = $("input").eq(0).val();
		var val2 = $("input").eq(1).val();
		
		$("#resistanceValue").find("input").val( ( parseFloat(parseInt(val1 + "" + val2) * mul).toFixed(2)) + symbol);
		
		$(".user-btn").removeClass("hide");
	});
	
	
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element :'#totalDiv',
			intro :'',
			position:"bottom",
			tooltipClass:'hidden'
			
		},{
			element :'#restartBtn',
			intro :'',
			position:"right" 
		}]
	});
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		case "totalDiv" :
			scrollTop();
			$('.introjs-nextbutton').hide();
			
			var text = "Let us learn about the Resistor.";
			popover('#totalDiv', 'right', text, function() {
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep()">Next →</a>');
			});
			break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Click to restart.", function() {
					});
				});
			break;
		}
	});
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
}

function firstStep() {
	$(".user-btn").remove();
	$(".popover").remove();
	$("#resistorDefination").fadeTo(1000, 1);
	var text = "Introduction about resistor.";
	popover('#resistorDefination', 'right', text, function() {
		$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep1()">Next →</a>');
	});
}




function firstStep1() {
	$(".user-btn").remove();
	$(".popover").remove();
	$("#basicResisitor").fadeTo(1000, 1);
	arrowRevealVertical("#arrow1", function() {
		$("#digitOne").fadeTo(1000, 1);
		arrowRevealVertical("#arrow2", function() {
			$("#digitTwo").fadeTo(1000, 1);
			arrowRevealVertical("#arrow3", function() {
				$("#multiplier").fadeTo(1000, 1);
				arrowRevealVertical("#arrow4", function() {
					$("#tolerance").fadeTo(1000, 1);
					var text = "The figure shows the basic resistor.";
					popover('#basicResisitor', 'right', text, function() {
						$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep2()">Next →</a>');
					});
				});
			});
		}); 
	});
}
function firstStep2() {
	$(".user-btn").remove();
	$(".popover").remove();
	$("#colorCodingTable").fadeTo(1000, 1);
	var text = "Color coding is used for calculating the resistance value.";
	popover('#colorCodingTable', 'right', text, function() {
		$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep3()">Next →</a>');
	});
}
function firstStep3() {
	$(".user-btn").remove();
	$(".popover").remove();
	scrollBottom();
	$("#calculateResisitor").fadeTo(1000, 1);
	$("#digitsDiv").removeClass("opacity00");
	$("#colorPickDiv").removeClass("opacity00");
	$("#valueDiv").removeClass("opacity00");
	$("#resistanceResultDiv").removeClass("opacity00");
	var text = "Calculate the resistor value by changing the colors.";
	popover('#calculateResisitor', 'right', text, function() {
		$("#popover" + count+"").append('<a class="introjs-button user-btn hide" style="display: inline-block;" onclick="firstStep4()">Next →</a>');
	});
	$('#calculateResisitor').on('hide.bs.popover', function() {
		return false;
	})
	
}
function firstStep4() {
	$(".user-btn").remove();
	$(".popover").remove();
	intro.nextStep();
}

function popover(selector, position, text, callBackFunction) {
	count++;
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover'+count+'">' + text + '</div>',
		//container: '#totalDiv'
	}).popover("show");
	
	typing('#popover' + count, text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
		//$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep()">Next →</a>');
 	});
}
function arrowReveal(lineId, callBackFunction) {
	var x2 = $(lineId).attr("x2");
	var y2 = $(lineId).attr("y2");
	$(lineId).attr("x2", $(lineId).attr("x1"));
	$(lineId).attr("y2", $(lineId).attr("y1"));
	$(lineId).show();
	TweenMax.to(lineId, 1, {attr:{x2 : x2, y1 : y2}, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
function arrowRevealVertical(lineId, callBackFunction) {
	 var x2 = $(lineId).attr('x2');
	 var y2 = $(lineId).attr('y2');
	 $(lineId).attr('x2', $(lineId).attr('x1'));
	 $(lineId).attr('y2', $(lineId).attr('y1'));
	 $(lineId).show();
	 TweenMax.to(lineId, 1, {
	   attr: {
	     x2: x2,
	     y2: y2
	   },
	   onComplete: function () {
	     if (typeof callBackFunction === 'function') {
	       callBackFunction();
	     }
	   }
	});
}
function typing(selector, text, callBackFunction) {
	var typingSpeed = 5;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function scrollTop() {
    window.scrollTo(0, 0);
}

function scrollBottom() {
    window.scrollTo(0, 1000);
}

