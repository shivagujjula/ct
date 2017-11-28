var isAValueIsModified = false;
	var typingSpeed = 30;
	var introjs;


var swapDemoReady = function() {
	$(".allowOnlyNumber").keydown(function (e) {
		var max = $(this).attr("maxlength");
		
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || (e.keyCode >= 35 && e.keyCode <= 40)) {
		// let it happen, don't do anything
			return;
		}
		// Ensure that it is a number and stop the keypress
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
        
		if ($(this).text().length > max) {
			e.preventDefault();
		}
    });
	
	$('#restart').click(function() {
		location.reload();
	});
	
    introJsGuide();
}

function introJsGuide() {		 
	introjs = introJs();
	introjs.setOptions({
		steps : [
		{
			element : '#swapDemo',
			intro : "",
			position : 'right'
		}, {
			element : '#line1',
			intro : "",
			position : 'bottom'
		}, {
			element : '#aValuePanel',
			intro : "",
			position : 'bottom'
		}, {
			element : '#line2',
			intro : "",
			position : 'bottom'
		}, {
			element : '#bValuePanel',
			intro : "",
			position : 'bottom'
		}, {
			element : '#wrongSolution',
			intro : "",
			position : 'bottom'
		}, {
			element : '#line3',
			intro : "",
			position : 'bottom'
		}, {
			element : '#valuesPanel',
			tooltipClass : 'hide'
		}, {
			element : '#line4',
			intro : "",
			position : 'bottom'
		}, {
			element : '#valuesPanel',
			intro : "",
			position : 'bottom'
		}, {
			element : '#wrongSolution',
			intro : "",
			position : 'bottom'
		}, {
			element : '#lineTemp',
			intro : "",
			position : 'bottom'
		}, {
			element : '#valuesPanel',
			tooltipClass : 'hide'
		}, {
			element : '#line3',
			intro : "",
			position : 'bottom'
		}, {
			element : '#valuesPanel',
			tooltipClass : 'hide'
		}, {
			element : '#line4',
			intro : "",
			position : 'bottom'
		}, {
			element : '#valuesPanel',
			intro : "",
			position : 'bottom'
		}, {
			element : '#line5',
			intro : "The above statement prints the values in variables <b class='ct-code-b-yellow'>a</b> and <b class='ct-code-b-yellow'>b</b> after swapping.",
			position : 'bottom'
		}, {
			element : '#outputDiv',
			tooltipClass : "hide"
		}, {
			element : '#restart',
			intro : "Click to restart.",
			position : 'right'
		}]
	});
	
	introjs.onafterchange(function(targetElement) {  
	    switch (targetElement.id) 
	        { 
	    
	        case "swapDemo":
		    	var text = "Let us learn how to exchange values stored in two variables. " 
		    					+ "It is commanlly called <b class='ct-code-b-yellow'>swapping</b>.";
				typing('.introjs-tooltiptext', text);
		    	break;
	    
		    	
	        case "line1":
		    	$('.introjs-nextbutton').addClass("opacity00");
		    	$('.introjs-helperLayer').one('transitionend', function () {
		    		var text = "Let us consider an <b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>a</b> " 
		    						+ "with value <b class='changeVal ct-code-b-yellow'>12</b>.<br>" 
		    						+ "You can change the value of <b class='ct-code-b-yellow'>a</b> to any other value.";
					typing(".introjs-tooltiptext", text, function() {
						$('#line1').removeClass("opacity00").addClass("position-absolute animated flipInX").one("animationend", function() {
							charAtEnd("aValue");
						});
					});
		    	});
		    	break;
		    	
	        case "aValuePanel":
	        	
	        	introjs._introItems[introjs._currentStep].intro = "The memory location refered by <b class='ct-code-b-yellow'>a</b> is initialized with " 
							+ "the value <b class='ct-code-b-yellow'> " + $("#aValue").text() + "</b>."
				sendAValue();
	        	break;
	        	
			case "bValuePanel":
	        	
	        	introjs._introItems[introjs._currentStep].intro = "The memory location refered by <b class='ct-code-b-yellow'>b</b> is initialized with " 
							+ "the value <b class='ct-code-b-yellow'> " + $("#bValue").text() + "</b>."
				sendBValue();
	        	break;
		    	
	    	case "line2":
				$('.introjs-nextbutton').addClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function () {
		    		var text = "Let us consider an <b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>b</b> " 
		    					+ "with value <b class='changeVal ct-code-b-yellow'>45</b>.<br>You can change "
		    					+ "the value of <b class='ct-code-b-yellow'>b</b> to any other value.";
					typing(".introjs-tooltiptext", text, function() {
						$('#line2').removeClass("opacity00").addClass("position-absolute animated flipInX").one("animationend", function() {
							charAtEnd("bValue");
						});
					});
		    	});
				break;
				
	    	case "wrongSolution":
				$('.introjs-nextbutton').addClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function () {
					
				if (introjs._currentStep == 5) {	
		    		var text = "To change the value of <b class='ct-code-b-yellow'>a</b> to that of <b class='ct-code-b-yellow'>b</b>, " 
		    					+ " we can use the assignment operator.<br/>"
		    					+ "i.e. <b class='ct-code-b-yellow'>a = b</b>.<br/><span></span>";
		    						
		    		typing(".introjs-tooltiptext", text, function() {
		    			$('#wrongSolution').removeClass("opacity00");
		    			$('#line4').addClass("opacity00");
		    			var text = "Similarly when we want to change the value of <b class='ct-code-b-yellow'>b</b> to " 
		    						+ "<b class='ct-code-b-yellow'>a</b> we can write <b class='ct-code-b-yellow'>b = a.</b>";
		    			
		    			typing(".introjs-tooltiptext > span", text, function() {
			    			$('#line4').removeClass("opacity00");
		    			});
		    		});
		    		
				} else if (introjs._currentStep == 10) {
		    		var text = "Let us consider a new solution where we store the original value of " 
		    				+ "<b class='ct-code-b-yellow'>a</b> before changing it.";
		    		typing(".introjs-tooltiptext", text, function() {
		    			$('.introjs-nextbutton').addClass("opacity00");
		    			
		    			$("#line3").addClass("animated bounceOut");
		    			$("#line4").addClass("animated bounceOut").one("animationend", function() {
		    				$("#line3").text("a = b");
		    				$("#line4").text("b = t");
		    				
		    				$('.introjs-nextbutton').removeClass("opacity00");
		    			});
		    			
		    		});
		    	}
		    		
		    	});
				break;
				
				
				
	    	case "line3":
	    		$('.introjs-nextbutton').addClass('opacity00');
	    		$('.introjs-helperLayer').one('transitionend', function () {
	    			if (introjs._currentStep == 6) {
		    			var text = "This statement assigns the value stored in " 
									+ "<b class='ct-code-b-yellow'>b</b> to <b class='ct-code-b-yellow'>a</b>.";
		    			typing(".introjs-tooltiptext", text);
	    			
	    			} else if (introjs._currentStep == 13) {
	    				var text = "Now let us assign the value of  " 
							+ "<b class='ct-code-b-yellow'>b</b> to <b class='ct-code-b-yellow'>a</b>.";
		    			typing(".introjs-tooltiptext", text, function() {
		    				$("#line3").removeClass("bounceOut").addClass("flipInX");
		    			});	
	    			}
	    			
	    		});
	    	break;
	    		
	    	case "line4":
	    		$('.introjs-nextbutton').addClass('opacity00');
	    		$('.introjs-helperLayer').one('transitionend', function () {
	    			if (introjs._currentStep == 8) {
		    			var text =  "This statement assigns the value stored in " 
									+ "<b class='ct-code-b-yellow'>a</b> to <b class='ct-code-b-yellow'>b</b>.";
		    			typing(".introjs-tooltiptext", text);
	    			
	    			} else if (introjs._currentStep == 15) {
	    				var text =  "Now let us assign the value stored in the temperory variable " 
							+ "<b class='ct-code-b-yellow'>t</b> to <b class='ct-code-b-yellow'>b</b>.";
    					typing(".introjs-tooltiptext", text, function() {
		    				$("#line4").removeClass("bounceOut").addClass("flipInX");
		    			});
	    			}
	    		});
	    	break;
	    	
	    	case "lineTemp":
	    		$('.introjs-nextbutton').addClass('opacity00');
	    		setTimeout(function() {
	    			$("#aValueInOutput").text($("#aValue").text()).css({"opacity" : "1", "left" : ""});
	    			$("#bValueInOutput").text($("#bValue").text()).css({"opacity" : "1", "left" : ""});
	    			
	    			$("#aValueInOutputWithBValue").text("");
	    			$("#bValueInOutputWithAValue").text("");
	    			
	    			
	    				
	    			var text = "Let us create a temporary variable called <b class='ct-code-b-yellow'>t</b>" 
						+ " and initialize it with the value stored in <b class='ct-code-b-yellow'>a</b>.";
						
	    				typing(".introjs-tooltiptext", text, function() {
	    					$("#lineTemp").fadeTo(500, 1);
	    			});
	    		}, 1300);
	    		
	    		break;
	    		
			case "valuesPanel":
				
				if (introjs._currentStep == 7) {
					copyBValuetoAValue();
				} else if (introjs._currentStep == 9) {
					copyAValuetoBValue();
				} else if (introjs._currentStep == 12) {
					copyAValuetoTValue();
				} else if (introjs._currentStep == 14) {
					copyBValuetoAValue();
				} else if (introjs._currentStep == 16) {
					copyTValuetoBValue();
				}
				break;
				
			case "line5":
				setTimeout(function() {
					$("#line5").fadeTo(800, 1);
				}, 1300);
				
				break;
	        
	        case "outputDiv": 
	        	$('.introjs-helperLayer').one('transitionend', function () {
	        		var text = "After swapping : a = " + $("#bValue").text() + " b = " + $("#aValue").text();
	        		typing("#output", text, function() {
	        			setTimeout(function() {
	        				introjs.nextStep();
	        			}, 1000);
	        		});
	        	});
		    break;	        
	    
			case "restart":
				$('.introjs-tooltipbuttons').addClass("hide");
				$('.introjs-helperLayer').one('transitionend', function () {
					$('#restart').fadeTo(1, 800, function() {
						$(this).removeClass("opacity00");
					});
				});
			break;
	    }
	});

	introjs.setOption('tooltipPosition', 'bottom');
	introjs.setOption('positionPrecedence', [ 'left', 'right', 'bottom',
			'top' ])
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	
}


$(".allowOnlyNumber").keyup(function() {
	introjs.refresh();
	$('.changeVal').text($(this).text());
	if ($(this).text().length > 0) {
		$('.errorMsg').remove();
    	$(".introjs-nextbutton").removeClass("opacity00");
    	iVal = parseInt($('#initialization_value').text());
    } else {
    	$('.errorMsg').remove();
    	$('.introjs-tooltiptext').append("<div class='errorMsg'>please enter a value</div>");
    	$(".introjs-nextbutton").addClass("opacity00");
    }
});

function copyAValuetoTValue() {
	$('.introjs-nextbutton').addClass('opacity00');
	$('#tValueInOutput').addClass('opacity00');
	$("#tValueInOutput").text($('#aValue').text());
	var l1 = $('#aValueInOutput').offset();
	var l2 = $("#tValueInOutput").offset();
	$("#tValuePanel").removeClass('opacity00');
	TweenMax.from($("#tValuePanel"), 1.3, {top:-200, onComplete: function() {
		$('#tValueInOutput').removeClass('opacity00');
		$("#tValueInOutput").css('z-index','999999999')
		TweenLite.from($('#tValueInOutput'), 1.5, { ease:  Power4.easeOut, top:l1.top-l2.top, left :l1.left-l2.left, onComplete: function() {
			$('.introjs-nextbutton').removeClass('opacity00');
			setTimeout(function() {
				introjs.nextStep();
			}, 1000);
		}});
	}});
}

function sendAValue() {
	$('.introjs-nextbutton').addClass('opacity00');
	$('#aValueInOutput').addClass('opacity00');
	$("#aValueInOutput").text($('#aValue').text());
	$("#aValuePanel").removeClass('opacity00');
	TweenMax.from($("#aValuePanel"), 1.3, {top:-200, onComplete: function() {
		$('#aValueInOutput').removeClass('opacity00').addClass("focus");
		$('#aValueInOutput').css('opacity','1');
		var l1 = $('#aValue').offset();
		var l2 = $('#aValueInOutput').offset();
		TweenMax.from($('#aValueInOutput'), 1.2, {top: l1.top-l2.top, left: l1.left-l2.left, onComplete: function() {
			$('.introjs-nextbutton').removeClass('opacity00');
			$('#aValueInOutput').removeClass("focus");
		}});
	}});
	
}

function sendBValue() {
	$('.introjs-nextbutton').addClass('opacity00');
	$('#bValueInOutput').addClass('opacity00');
	$("#bValueInOutput").text($('#bValue').text());
	$("#bValuePanel").removeClass('opacity00');
	TweenMax.from($("#bValuePanel"), 1.3, {top:-200, onComplete: function() {
		$('#bValueInOutput').removeClass('opacity00').addClass("focus");
		var l1 = $('#bValue').offset();
		var l2 = $('#bValueInOutput').offset();
		TweenMax.from($('#bValueInOutput'), 1.2, {top: l1.top-l2.top, left: l1.left-l2.left, onComplete: function() {
			$('.introjs-nextbutton').removeClass('opacity00');
			$('#bValueInOutput').removeClass("focus");
		}});
	}});
}

function copyBValuetoAValue() {
	$('.introjs-nextbutton').addClass('opacity00');
	$("#aValueInOutputWithBValue").text($('#bValue').text());
	var l1 = $('#bValueInOutput').offset();
	var l2 = $("#aValueInOutputWithBValue").offset();
	$("#aValueInOutputWithBValue").css('z-index','999999999')
	TweenLite.from($('#aValueInOutputWithBValue'), 3, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left, delay :1.3});
	TweenLite.to($('#aValueInOutput'), 1.5, { ease: Sine.easeOut, left:-150 , delay : 2.4, opacity:0 , onComplete: function() {
		$('#aValueInOutput').text("");
		setTimeout(function() {
			introjs.nextStep();
		}, 1000);
	}});
}


function copyAValuetoBValue() {
	
	$('.introjs-nextbutton').addClass('opacity00');
	$("#bValueInOutputWithAValue").text($('#aValueInOutputWithBValue').text());
	var l1 = $('#aValueInOutputWithBValue').offset();
	var l2 = $("#bValueInOutputWithAValue").offset();
	$("#bValueInOutputWithAValue").css('z-index','999999999');
	TweenLite.from($('#bValueInOutputWithAValue'), 3, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left, delay :1.3});
	TweenLite.to($('#bValueInOutput'), 1.5, { ease: Sine.easeOut, left:150 , delay :2.4, opacity:0 , onComplete: function() {
		$('#bValueInOutput').text("");
		
		var text = "As you can notice there is only <b class='ct-code-b-yellow'>b</b>'s value(<b class='ct-code-b-yellow'>" + $("#bValue").text() +"</b>) " 
		+ "in both <b class='ct-code-b-yellow'>a</b> and <b class='ct-code-b-yellow'>b</b>.<br/> "
		+ "The original value stored in <b class='ct-code-b-yellow'>a</b> is losted, hence this is not a correct solution."
		
		typing(".introjs-tooltiptext", text);
	}});
}


function copyTValuetoBValue() {
	$('.introjs-nextbutton').addClass('opacity00');
	$("#bValueInOutputWithAValue").text($('#tValueInOutput').text());
	var l1 = $('#tValueInOutput').offset();
	var l2 = $("#bValueInOutputWithAValue").offset();
	$("#bValueInOutputWithAValue").css('z-index','999999999')
	TweenLite.from($('#bValueInOutputWithAValue'), 3, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left, delay :1.3});
	TweenLite.to($('#bValueInOutput'), 1.5, { ease: Sine.easeOut, left:150 , delay :2.4, opacity:0 , onComplete: function() {
		$('#bValueInOutput').text("");
		
		var text = "Now we find both <b class='ct-code-b-yellow'>a</b>'s and <b class='ct-code-b-yellow'>b</b>'s values swapped.";
		
		typing(".introjs-tooltiptext", text);
		
	}});
}

function showMethodName1(){
	$('#className1').show();
	$('#className').hide();
	$("#aValuePanel").addClass('opacity00');
	$("#bValuePanel").addClass('opacity00');
}

function charAtEnd(id) {
	var element = document.getElementById(id);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}	

function typing(id, content, callBackFunction) {
	$('.introjs-nextbutton').addClass('opacity00');
	$(id).typewriting( content , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$('.introjs-nextbutton').removeClass('opacity00');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}