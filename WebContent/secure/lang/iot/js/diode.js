function DiodeActionReady() {
	$("line").hide();
	intro = introJs();
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
			element :'#totalDiv',
			intro :'',
			position:"right"
		},{
			element :'#diodeDefination',
			intro :'',
			position:"right",
			tooltipClass:'hide'
		},{
			element :'#image',
			intro :'',
			position:"right" 
		},{
			element :'#batteryConnection1',
			intro :'',
			position:"right"  
		},{
			element :'#batteryConnection2',
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
		case "totalDiv" :
			$('.introjs-nextbutton').hide();
		  	typing('.introjs-tooltiptext', "Let us learn about Diode.", function() {  
				$('.introjs-nextbutton').show();
				});
			break;
		case "diodeDefination" : 
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#diodeDefination").fadeTo(300, 1, function() {
					 setTimeout(function(){ 
						 intro.nextStep();
						}, 1000);
					});
				});
			break;
		case "image" : 
			$("#diodeDefination").addClass("z-index");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#image").fadeTo(300, 1, function() {
					typing('.introjs-tooltiptext', "The figure shows the Diode symbol."+
							"<ul><li>The +ve end of Diode is called Anode and –ve end of Diode is called Cathode.</li></ul>", function() {
						$('.introjs-nextbutton').show();
						});
					});
				});
			break;
		case "batteryConnection1" : 
			$("#image").addClass("z-index");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#batteryConnection1").fadeTo(300, 1, function() {
					arrowRevealVertical("#arrow2", function() {
						arrowReveal("#arrow1", function() {
							$("#diodeImage").fadeTo(300, 1, function() {
								arrowReveal("#arrow3", function() {
									arrowRevealVertical("#arrow4", function() {
										$("#circle1").attr("fill", "yellow");
										$("#circleSvg").fadeTo(300, 1, function() {
											arrowRevealVertical("#arrow5", function() {
												arrowReveal("#arrow6", function() {
													arrowRevealVertical("#arrow7", function() {
														typing('.introjs-tooltiptext', "<ul><li>When a Diode is connected to a battery and bulb as shown in figure, "+
																"electrons from the cathode(-ve) and holes(+ve) from the anode are forced toward the center by the electric field supplied by the battery.</li>"+
																"<li>The electrons and holes combine causing the current to pass through the Diode and now bulb is in ON condition, "+
																"i.e we connect the battery in forward biased to Diode.</li></ul>", function() {
															$('.introjs-nextbutton').show();
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			break;
		case "batteryConnection2" : 
			$("#batteryConnection1").addClass("z-index");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#batteryConnection2").fadeTo(300, 1, function() {
					arrowRevealVertical("#arrow14", function() {
						arrowReveal("#arrow13", function() {
							arrowReveal("#arrow12", function() {
								$("#circleSvg1").fadeTo(300, 1, function() {
									arrowRevealVertical("#arrow11", function() {
										arrowRevealVertical("#arrow10", function() {
											$("#diodeImage1").fadeTo(300, 1, function() {
												arrowReveal("#arrow8", function() {
													arrowRevealVertical("#arrow9", function() {
														typing('.introjs-tooltiptext', "<ul><li>When a Diode is connected to a battery and bulb as shown in the figure, " +
																"electrons from the cathode (-ve) flow towards to left and holes from anode (+ve) flow towards to right, " + 
																"i.e this creates no junction. Now bulb is in OFF condition." + 
																"<li>Thus a Diode is used to allow an electric current to pass in one direction (called the diode's forward direction), " + 
																"while blocking current in the opposite direction (the reverse direction). Thus, the Diode can be viewed as an electronic " +
																"version of a check valve.</li></ul>", function() {
															$('.introjs-nextbutton').show();
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			break;
		case "restartBtn":
			$("#batteryConnection2").addClass("z-index");
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