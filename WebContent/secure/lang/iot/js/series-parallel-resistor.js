var count = 0;
function SeriesParallelResistorReady() {
	intro = introJs();
	keyupAndDownValidation();
	$('#restartBtn').click(function() {
		location.reload();
		});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
			}
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element :'#seriesConnectionHeading',
			intro :'',
			position:"right"
		},{
			element :'#seriesText',
			intro :'',
			position:"right",
			tooltipClass:"hide"
		},{
			element :'#image',
			intro :'',
			position:"right" 
		},{
			element :'#seriesFormula',
			intro :'',
			position:"right"  
		},{
			element :'#exampleQuestion',
			intro :'',
			position:"right"
		},{
			element :'#calculationDiv',
			intro :'',
			position:"bottom"
		},{
			element :'#parallelConnectionHeading',
			intro :'',
			position:"bottom"
		},{
			element :'#parallelText',
			intro :'',
			position:"bottom",
			tooltipClass:"hide"
		},{
			element :'#image1',
			intro :'',
			position:"bottom"
		},{
			element :'#parallelFormula',
			intro :'',
			position:"bottom"
		},{
			element :'#exampleQuestion1',
			intro :'',
			position:"bottom"
		},{
			element :'#calculationDiv1',
			intro :'',
			position:"right"
		},{
			element :'#restartBtn',
			intro :'',
			position:"right" 
		}]
	});
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		case "seriesConnectionHeading" :
			scrollTop();
			$('.introjs-nextbutton').hide();
		  	typing('.introjs-tooltiptext', "Let us learn about series connection of a resistor.", function() {  
				$('.introjs-nextbutton').show();
				});
			break;
		case "seriesText" : 
			$("#seriesConnectionHeading").addClass("z-index");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#seriesText").fadeTo(300, 1, function() {
					 setTimeout(function(){ 
						 intro.nextStep();
						}, 1000);
						
					});
				});
			break;
		case "image" : 
			$("#seriesText").addClass("z-index");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#image").fadeTo(300, 1, function() {
					typing('.introjs-tooltiptext', "A diagram of several resistors, connected end to end, with the same amount of current going through each.", function() {
						$('.introjs-nextbutton').show();
						});
					});
				});
			break;
		case "seriesFormula" : 
			$("#image").addClass("z-index");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#seriesFormula").fadeTo(300, 1, function() {
					typing('.introjs-tooltiptext', "The total resistance of resistors in series is equal to the sum of their individual resistances.", function() {
						$('.introjs-nextbutton').show();
						});
					});
				});
			break;
		case "exampleQuestion" : 
			$("input").attr("disabled", true);
			$("#seriesFormula").addClass("z-index");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#exampleQuestion").fadeTo(300, 1, function() {
					typing('.introjs-tooltiptext', "Calculate the total resistance value in series.", function() {
						$('.introjs-nextbutton').show();
						});
					});
				});
			break;
		case "calculationDiv" : 
			$("#exampleQuestion").addClass("z-index");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#calculationDiv").fadeTo(300, 1, function() {
					typing('.introjs-tooltiptext', "Please change all the resistance values.", function() {
						$(".series-input").attr("disabled", false);	
						});
					});
				});
			break;
		case "parallelConnectionHeading" : 
			$("input").attr("disabled", true);
			$("#calculationDiv").addClass("z-index");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#parallelConnectionHeading").fadeTo(300, 1, function() {
			  		typing('.introjs-tooltiptext', "Let us learn about parallel connection of a resistor.", function() {  
						$('.introjs-nextbutton').show();
						});
					});
				});
			break;
		case "parallelText" : 
			$("#parallelConnectionHeading").addClass("z-index");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() { 
				$("#parallelText").fadeTo(300, 1, function() {
					setTimeout(function(){ 
						 intro.nextStep();
						}, 1000);
					});
				});
			break;
		case "image1" : 
			$("#parallelText").addClass("z-index");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#image1").fadeTo(300, 1, function() {
					typing('.introjs-tooltiptext', "A diagram of several resistors, side by side, both leads of each connected to the same wires.", function() {
						$('.introjs-nextbutton').show();
						});
					});
				});
			break;
		case "parallelFormula" : 
			$("#image1").addClass("z-index");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#parallelFormula").fadeTo(300, 1, function() {
					typing('.introjs-tooltiptext', "The total resistance of resistors in parallel is equal to the sum of their reciprocal of the resistances.", function() {
						$('.introjs-nextbutton').show();
						});
					});
				});
			break;
		case "exampleQuestion1" : 
			$("#parallelFormula").addClass("z-index");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#exampleQuestion1").fadeTo(300, 1, function() {
					typing('.introjs-tooltiptext', "Calculate the total resistance value in parallel.", function() {
						$('.introjs-nextbutton').show();
						});
					});
				});
			break;
		case "calculationDiv1" : 
			$("#exampleQuestion1").addClass("z-index");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#calculationDiv1").fadeTo(300, 1, function() {
					typing('.introjs-tooltiptext', "Please change all the resistance values.", function() {
						$(".parallel-input").attr("disabled", false);	
						});
					});
				});
			break;
		case "restartBtn":
			$(".parallel-input").attr("disabled", true);
			$("#calculationDiv1").addClass("z-index");
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

function scrollTop() {
    window.scrollTo(0, 0);
}

function keyupAndDownValidation() {
	$("input").keyup(function() {
		var yourInput = $(this).val();
		re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
		var isSplChar = re.test(yourInput);
		if(isSplChar)
		{
			var no_spl_char = yourInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
			$(this).val(no_spl_char);
		}
	});
	
	
	$(".series-input").keyup(function() {
		console.log("keypressed.....");
		var r1 = parseInt($("#valueR1").val());
		var r2 = parseInt($("#valueR2").val());
		var r3 = parseInt($("#valueR3").val());
		var add = r1 + r2 + r3;
		$("#resistorValueget1").text($("#valueR1").val());
		$("#resistorValueget2").text($("#valueR2").val());
		$("#resistorValueget3").text($("#valueR3").val());
		$("#result").text(add);
		
		if(($('#valueR1').val().length <= 0) || ($('#valueR2').val().length <= 0) || ($('#valueR3').val().length <= 0)) {
			$(".introjs-nextbutton").hide();
		} else {
			console.log("Iam in if  else ....");
		  	$(".introjs-nextbutton").show()
		}
	}); 
	
	
	$(".parallel-input").keyup(function() {
		console.log("keypressed.....");
		var r1 = parseInt($("#parallelvalueR1").val());
		var r2 = parseInt($("#parallelvalueR2").val());
		var r3 = parseInt($("#parallelvalueR3").val());
		if ($(".parallel-input").val() > 0) {
			var add1 = 1/(1/r1 + 1/r2 + 1/r3);
			$("#parellalValueget1").text($("#parallelvalueR1").val());
			$("#parellalValueget2").text($("#parallelvalueR2").val());
			$("#parellalValueget3").text($("#parallelvalueR3").val());
			$("#result1").text(parseFloat(add1).toFixed(3));
		}
		
		if(($('#parallelvalueR1').val().length <= 0) || ($('#parallelvalueR2').val().length <= 0) || ($('#parallelvalueR3').val().length <= 0) || ($("#parallelvalueR1").val() <= 0) || ($("#parallelvalueR2").val() <= 0) || ($("#parallelvalueR3").val() <= 0)) {
			$(".introjs-nextbutton").hide();
		} else {
			console.log("Iam in if  else ....");
		  	$(".introjs-nextbutton").show()
		}
	}); 
	
	$("input").keydown(function(e) {
		 if (e.which >= 48 && e.which <= 57 || e.which >= 96 && e.which <= 105 || e.which == 8  || e.which == 37 || e.which == 39) {
				return true;
		} else {
			e.preventDefault();
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