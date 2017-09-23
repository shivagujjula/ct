var readPrintStringUsingGetsPutsReady = function() {
	
	$("line, text").hide();
	$("#restartBtn").click(function() {
		/*$("#inputChar").val('');
		$("#hiddenTotalEnterChar").val('');*/
		location.reload();
	});
	intro = introJs();
	$('#nextButton').click(function() {
		$(this).remove();
		intro.nextStep();
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ {
			element : '#informationDiv',
			intro : '',
			tooltipClass : 'hide',
			position : "right"
		}, {
			element : '#streamFlow',
			intro : '',
			position : "bottom"
		 }, {
			element : '#totalDiv',
			intro : '',
			position : "left",
			tooltipClass : "hide"
		}, {
			element :'#restartBtn',
			intro :'',
			position:"right"
		} ]
	});
	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "streamFlow":
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#streamFlow').removeClass('opacity00');
				$('#streamFlow').focus();
				typing('.introjs-tooltiptext', "This is a <span class='color-b-yellow'>standard input device </span>where"+
						" the user can be used to enter the input.", "20", function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "totalDiv":
			intro.refresh();
			$("#totalDiv").removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend',function() {
				arrowReveal("#line9", function() {
					$("#text1").show();
					$("#board").empty().text("Data");
					zoomInEffect("#board", function() {
						var text = "User enters through  <span class='color-b-yellow'>keyboard</span>  the input data";
						customPopover("#board", "bottom", text,  function() {
							$('#customPopover').append('<a class="introjs-button introjs-duplicate-nextbutton'
									+'" id="NextButton" onclick=step1()>Next &#8594;</a>');
						});
					});	
				});
			});
			break;
		case "restartBtn":
			intro.refresh();
			$('.introjs-nextbutton').hide();
			$("#restartBtn").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Click to <span class='color-b-yellow'>restart</span>.", "20", function() {
					
				});
			});
			break;
		}
	});
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	$('#informationDiv').removeClass('opacity00');
	TweenMax.to("#infotext", 1, {
		opacity : 1,
		onComplete : function() {
			$("#NextButton").removeClass("opacity00");
			$("#NextButton").click(function() {
				$("#NextButton").remove();
				intro.nextStep();
			});
		}
	});
}
function textenter(selector, value) {
	$(selector).keyup(function(e) {
		if (e.keyCode == 77 && e.altKey) {
			$(selector).val(value);
		}
		if ($(selector).val() == value) {
			$('.introjs-nextbutton').show();
			$('.errorText').empty();
		} else {
			$('.errorText').html("Please type correctly.");
			$('.introjs-nextbutton').hide();
		}
	});
}
function typing(selector, text, typingSpeed, callBackFunction) {
	var typingSpeed = 5;
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}


function step1() {
	$(".introjs-duplicate-nextbutton").remove();
	arrowReveal("#line1", function() {
			$("#dataFlow").removeClass("opacity00");
			arrowReveal("#line10", function() {
				$("#text2").show();
				var text ="<ul><li>It is <span class='color-b-yellow'>istream</span>(input stream) flow of data from keyboard.</li>" +
						"<li>We will see the data flow from keyboard to <span class='color-b-yellow'>isteam</span>.</li>";
				customPopover("#dataFlow", "bottom", text,  function() {
					$('#customPopover').append('<a class="introjs-button introjs-duplicate-nextbutton'
							+'" id="NextButton" onclick=step3()>Next &#8594;</a>');
				});
			});
		});
	}
/*function step2() {
	$(".introjs-duplicate-nextbutton").remove();
	var text = "";
	customPopover("#dataFlow", "bottom", text,  function() {
		$('#customPopover').append('<a class="introjs-button introjs-duplicate-nextbutton'
				+'" id="NextButton" onclick=step3()>Next &#8594;</a>');
	});
}*/

function step3() {
	$(".introjs-duplicate-nextbutton").remove();
	fromEffectWithTweenMax("#board", ".value", function() {
		var text ="The data is inserted into <span class='color-b-yellow'>istream</span>.";
		customPopover("#dataFlow", "bottom", text,  function() {
			$('#customPopover').append('<a class="introjs-button introjs-duplicate-nextbutton'
					+'" id="NextButton" onclick=step4()>Next &#8594;</a>');
		}); 
	});
}
function step4() {
	$(".introjs-duplicate-nextbutton").remove();
	arrowReveal("#line2", function() {
		$("#text7").show();
		$("#text3").show();
		arrowReveal("#line11",function () {
			$("#text4")	.show();
			var text ="<span class='color-b-yellow'>cin</span> extracts data from <span class='color-b-yellow'>isteam</span>"+
				" and the data will be assigned to corresponding variables.";
			customPopover("#text7", "right", text,  function() {
				$('#customPopover').append('<a class="introjs-button introjs-duplicate-nextbutton'
						+'" id="NextButton" onclick=step5()>Next &#8594;</a>');
			});
		});
	}); 
}

function step5() {
$(".introjs-duplicate-nextbutton").remove();
$("#line2").css("marker-end", "url('')");
arrowReveal("#line3", function() {
	$("#program").removeClass("opacity00");
	var text ="<span class='color-b-yellow'>Program</span> recieves the input and processed it and "+
	"the output <span class='color-b-yellow'>cin</span> be displayed on the monitor through <span class='color-b-yellow'>ostream</span>(output stream).";
	customPopover("#program", "left", text,  function() {
		$('#customPopover').append('<a class="introjs-button introjs-duplicate-nextbutton'
				+'" id="NextButton" onclick=step6()>Next &#8594;</a>');
	});
});
}
			 

function step6() {
	$(".introjs-duplicate-nextbutton").remove();
	arrowReveal("#line6", function() {
		$("#line6").css("marker-end", "url('')");
		arrowReveal("#line7", function() {
		$("#text8").show();
		$("#text5").show();
			arrowReveal("#line12",function() {
				$("#text6").show();
				var text ="The <span class='color-b-yellow'><<</span>(insertion operator) operator inserts the specified data"+
				" on to the <span class='color-b-yellow'>ostream</span>.";
				customPopover("#text8", "right", text,  function() {
					$('#customPopover').append('<a class="introjs-button introjs-duplicate-nextbutton'
						+'" id="NextButton" onclick=step7()>Next &#8594;</a>');
				});
			});
		});
	});
}
function step7() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#dataFlow1").fadeTo(1000, 1, function(){
	var text ="<li><span class='color-b-yellow'>cout</span> inserts the data in <span class='color-b-yellow'>ostream</span>.</li>"+
	"<li><span class='color-b-yellow'>ostream </span>is used to display the data in monitor.</li>";
		customPopover("#dataFlow1", "bottom", text,  function() {
			$('#customPopover').append('<a class="introjs-button introjs-duplicate-nextbutton'
				+'" id="NextButton" >Next &#8594;</a>');
			$(".introjs-duplicate-nextbutton").remove();
			$("#program1").addClass('blinking-orange');
			$.each($("#program1"), function(idx) {
				var l1 = $(this).offset();
				$('.flow').offset({
					"top" : l1.top,
					"left" : l1.left
				});
			});
			
			TweenMax.to(".flow", 1, {opacity:1, top:0, left:0, onComplete:function() {
				$('#customPopover').append('<a class="introjs-button introjs-duplicate-nextbutton'
						+'" id="NextButton" onclick=step9()>Next &#8594;</a>');
			}});
		});
	});
}
function step9() {
	$("#program1").removeClass('blinking-orange');
	arrowReveal("#line8", function() {
		$("#outputDevice").removeClass("opacity00"); 
		var text ="Output shows on <y>monitor</y>.";
		customPopover("#outputDevice", "bottom", text,  function() {
			$('#customPopover').append('<a class="introjs-button introjs-duplicate-nextbutton'
					+'" id="NextButton" onclick=step10()>Next &#8594;</a>');
		});
	});
}

function step10() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#customPopover").parents(".popover").remove();
	intro.nextStep();
}
function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).removeClass("opacity00");
	TweenMax.from($(selector2), 1, {
		top : topLength,
		left : leftLength,
		onComplete : function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}
	});
}
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect("highlight", {
		color : '#ffff33'
	}, 500);
	$(selector1).effect("transfer", {
		to : $(selector2),
		className : "ui-effects-transfer"
	}, 1000, function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
function animationStep() {
	$('.introjs-duplicate-nextbutton').remove();
	fromEffectWithTweenMax("#c1", "#data1", function() {
		transferEffect("#c2", "#data2", function() {
			transferEffect("#c3", "#data3", function() {
				transferEffect("#c4", "#data4", function() {
					transferEffect("#c5", "#data5", function() {
						transferEffect("#c6", "#data6", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		});
	});
}
function arrowReveal(lineId, callBackFunction) {
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
function zoomInEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(this).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	});
}


function customPopover(selector, position, text, callBackFunction) {
	$("#customPopover").parents(".popover").remove();
	$(selector).popover({
		placement: position,
		html: true,
		trigger: 'focus',
		container : "#totalDiv",
		content: '<div id="customPopover">' + text + '</div>'
	}).popover('show');
	
	typing($("#customPopover"), text, 20, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}