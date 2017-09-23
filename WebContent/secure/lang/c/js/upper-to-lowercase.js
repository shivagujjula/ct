var t1;

var upperToLowerCaseReady = function() {
	t1 = new TimelineLite();
	$("#restartBtn").click(function() {
		location.reload();
	});
	
	$("#inputChar").keyup(function() {
		console.log("hello");
		if ($("#inputChar").val().length < 1) {
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		}
	});
	
	console.log();
	intro = introJs();
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps : [{
					element :'#preBody',
					intro :'',
					position:"bottom"
				},{
					element :'#line1',
					intro :'',
					position:"bottom"
				},{
					element :'#line2',
					intro :'',
					position:"bottom"
				},{
					element :'#line3',
					intro :'',
					position:"bottom"
				},{
					element :'#addressBox',
					intro :'',
					position:"bottom"
				},{
					element :'#line4',
					intro :'',
					position:"bottom"
				},{
					element :'#consoleId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line5',
					intro :'',
					position:"bottom"
				},{
					element :'#inputChar',
					intro :'',
					position:"bottom"
				},{
					element :'#addressBox',
					intro :'',
					position:"bottom"
				},{
					element :'#line6',
					intro :'',
					position:"bottom"
				},{
					element :'#consoleId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line7',
					intro :'',
					position:"bottom"
				},{
					element :'#panelBox',
					intro :'',
					position:"bottom"
				},{
					element :'#line8',
					intro :'',
					position:"bottom"
				},{
					element :'#hiddenTotalEnterChar',
					intro :'',
					position:"bottom"
				},{
					element :'#restartBtn',
					intro :'',
					position:"left"
			}]
	});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "line1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "It is a header file which contains standard <span class='ct-code-b-yellow'>input/output</span> library functions.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is the operating system call.<ul><li><span class='ct-code-b-yellow'>main()</span> is execution starting point for any c program.</li></ul>", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>ch</span> is character variable which is of type char.<ul><li>It allocates 1 byte of memory to each element.</li></ul>", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is library function, uesd to display anything in double quotes on the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line5" :
			$("#hiddenTypingChar").removeClass("hidden");
			$("#totalBlinkText").addClass("hidden");
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>getchar()</span> is library function which reads only 1 char from keyboard.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line6" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is library function, uesd to display anything in double quotes on the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line7" :
			$('.introjs-nextbutton').hide();
			$("#totalEnterChar").addClass("hidden");
			$("#upperLetter").append($('#inputChar').val().toUpperCase());
			$("#enterHiddenToltal").removeClass("hidden");
			$("#hiddenTotalEnterChar").removeClass("hidden");
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "here, ch + 32 is <span class='ct-code-b-yellow'>ASCII</span> code value, which converts into lowercase.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line8" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>putchar()</span> is library function which writes a string onto the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "inputChar" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Enter any <span class='ct-code-b-yellow'>uppercase</span> letter.</br> <span id='errorText'></span>", 10, "",function() {
					$("#inputChar").focus();
					
					$('#inputChar').keyup(function(e) {
						$(".error-text").remove();
						console.log("keyup is pressed.......");
						var str = $("#inputChar").val();
						if ($("#inputChar").val().length < 1) {
							$('.introjs-nextbutton').hide();
						} else {
							if (!/^[a-zA-Z]*$/g.test(this.value)) {
								$(".introjs-tooltiptext").append("<span id='errorText' class='ct-code-b-red error-text'>Enter only alphabets</span>");
								$('.introjs-nextbutton').hide();
						    } else if(str === str.toLowerCase()) {
						    	$(".introjs-tooltiptext").append("<span id='errorText' class='ct-code-b-red error-text'>Enter only Uppercase letters</span>");
								$('.introjs-nextbutton').hide();
						    } else {
						    	$('.introjs-nextbutton').show();
						    }
						}
						
						if (e.which === 13) {
							e.preventDefault();
						}
					
					});
				});
			});
			break;
			
		case "addressBox" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 4) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#panelBox").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
						$('#addressId').removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
							typing(".introjs-tooltiptext", "The variable <span class='ct-code-b-yellow'>ch</span> is stored in certain memory location. <ul><li>The address <span class='ct-code-b-yellow'>1024</span> is allocated to it.</li></ul>", 10, "",function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
			} else if(intro._currentStep == 9) {
				console.log("inputChat is = " + $('#inputChar').val());
				$('.introjs-helperLayer ').one('transitionend', function() {
				//	$("#panelBox").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
						$('.panel-uppercase').text($('#inputChar').val().toUpperCase()).fadeIn();
						//$('#addressId').removeClass("visibility-hidden").fadeIn();
						$(".arrowId").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
							$(".byteId").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
								typing(".introjs-tooltiptext", "Arrows shows that : <ul><li><span class='ct-code-b-yellow'>ch</span> is a character variable.</li><li>ch allocated by 1 byte and it stores the <span class='ct-code-b-yellow'>ASCII</span> value of character <span class='ct-code-b-yellow'>" + $('#inputChar').val() + "</span>.</li><li><span class='ct-code-b-yellow'>1024</span> is the address.</li></ul>", 10, "",function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
				//	});
				});
			}
			break;
			
		case "panelBox" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				console.log("outside tween lite.....");
				t1.to("#panelBodyUpperCaseId", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
					console.log("inside tween lite.....");
					$("#panelBodyUpperCaseId").text($('#inputChar').val().toLowerCase());
				}});
				
				t1.to("#panelBodyUpperCaseId", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
					console.log("&&&&&&&&&&&&&&& tween lite.....");
					typing(".introjs-tooltiptext", "The value of uppercase is converted to lowercase and is stored in <span class='ct-code-b-yellow'>ch</span>.", 10, "",function() {
						$('.introjs-nextbutton').show();
					});
				}});
				
			});
			break;
			
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 6) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#typeChar", "<span id='totalBlinkText'>Enter an uppercase letter : <span id='blinkChar'><input id='in' maxlength='0' tabindex='0' value=''/></span></span>", 10, "",function() {
						$("#in").focus();
					//	typing(".introjs-tooltiptext", "The Control is waiting for a character, which was given by the user using keyboard.", 10, "",function() {
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						//	$('.introjs-nextbutton').show();
					//	});
					});
				});
			} else if(intro._currentStep == 11) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#totalEnterChar", "The lowercase letter of "+ $('#inputChar').val().toUpperCase() + " is : <span id='putValueId'><input id='lowerValue' maxlength='0' tabindex='0' value=''/></span> ", 10, "",function() {
						$("#lowerValue").focus();
					//	typing(".introjs-tooltiptext", "The Control is waiting for a character, which was given by the user using keyboard.", 10, "",function() {
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
					//	});
					});
				});
			} 
			break;
			
		case "hiddenTotalEnterChar" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#hiddenTotalEnterChar").val($('#inputChar').val().toLowerCase()).fadeIn('slow');
				typing(".introjs-tooltiptext", "here, the given character is converted and printed on to the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
			
		case "restartBtn" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 10, "",function() {
					
				});
			});
			break;
		}
	});
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	
	typing(".introjs-tooltiptext", "It is a sample program to convert upper to lowercase letters.", 10, "",function() {
		$('.introjs-nextbutton').show();
	});
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
	});
}