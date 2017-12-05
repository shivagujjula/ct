var typingSpeed = 1;
var intro;

var printfUsageInCReady = function() { 
	$("#restart").click(function() {
		location.reload();
	});
	
	var typingId;
	var typingContent;
	var typingInterval;
	var cursorColor;
	var typingCallbackFunction;
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element : "#typingDiv",
			intro : "",
			tooltipClass : "hide" 
		/*}, {
			element : "#typingDiv",
			intro : "",
			position : "bottom"*/
		}, {
			element : "#firstLine",
			intro : "",
			position : "right",
			//tooltipClass:"hide"
		}, {
			element : "#outputDiv",
			intro : "",
			tooltipClass : "hide",
			action : "line1"
		}, {
			element : "#secondLine",
			intro : "",
			position : "right",
			//tooltipClass :"hide"
		}, {
			element : "#outputDiv",
			intro : "",
			tooltipClass : "hide",
			action : "line2"
		}, {
			element : "#thirdLine",
			intro : "",
			position : "right",
			//tooltipClass :"hide"
		}, {
			element : "#outputDiv",
			intro : "",
			tooltipClass : "hide",
			action : "line3"
		}, {
			element : "#fourthLine",
			intro : "",
			position : "right",
			//tooltipClass :"hide"
		}, {
			element : "#outputDiv",
			intro : "",
			tooltipClass : "hide",
			action : "line4"
		}, {
			element : "#restart",
			intro : "",
			position : "left"
		}]});
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "firstLine":
				$('#secondLine').addClass('opacity00');
				if (intro._currentStep == 1) {
				$('#lineOne').addClass('opacity00');
				$('#firstLine').removeClass('opacity00');
				}
				break;
				
			case "secondLine":
				$('#thirdLine').addClass('opacity00');
			    $('#lineTwo').text("");
				$('#secondLine').removeClass('opacity00');
				
				break;
				
			case "thirdLine":
				$('#fourthLine').addClass("opacity00");
				$("#3").text("");
				$('#thirdLine').removeClass('opacity00');
				break;
				
			case "fourthLine":
				$('#fourthLine').removeClass("opacity00");

				break;
		}
	});
	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		// ********************** start ************back button logic
				
				if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
					intro._introItems[intro._currentStep]["animation"] = "repeat";
				}
				
				if (intro._introItems[intro._currentStep]["isCompleted"]) {
					if (intro._currentStep != 0 && intro._currentStep != 1) {
						$('.introjs-prevbutton').show();
					}
					$('.introjs-nextbutton').show();
					return;
				}
				
				if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
					intro._introItems[intro._currentStep]["isCompleted"] = true;
				}
				
				// ********************** end ************back button logic

		var elementId = targetElement.id;
		switch (elementId) {
			case "typingDiv":
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 1 ) {
				$('.introjs-nextbutton').show();
			};
			break;
			
			case "codeOne":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "In this we will learn how the <b class='ct-code-b-yellow'>printf()</b> can be used to  print text enclosed within double quotes.";
			 		typing(".introjs-tooltiptext", text, function() {
			 			$('.introjs-nextbutton,.introjs-prevbutton').show();
			 		});
				});
				break;
				
			case "restart":
				$('.introjs-nextbutton').hide();
				$('#restart').removeClass('opacity00');
				$('.introjs-tooltip').css('min-width','125px');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Click to restart.";
			 		typing(".introjs-tooltiptext", text, function() {
			 		});
				});
			break;
			
			case "firstLine":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
				
					
					var text = "The <b class='ct-code-b-yellow'>printf()</b> statement prints the text enclosed within the double quotes. At the "
								+ "end of statement we will notice <b class='ct-code-b-yellow'>\\n</b>, which is an escape sequence that "
								+ "repersents a <b class='ct-code-b-yellow'>newline</b> character.<br>When a newline character is printed the text"+
								   " that will be printed after the newline character will appear in the next line.";
			 		typing(".introjs-tooltiptext", text, function() {
			 			$('.introjs-nextbutton').show();
			 		});
				});
				break;
				
			case "secondLine":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					
				
					var text = "In case we want to print a string containing double quotes we need to place the "
								+ "<b class='ct-code-b-yellow'>escape</b> character (<b class='ct-code-b-yellow'>\\</b>) before the double quote as show in the text.";
			 		typing(".introjs-tooltiptext", text, function() {
			 			$('.introjs-nextbutton,.introjs-prevbutton').show();
			 		});
				});
				break;
				
			case "thirdLine":
				
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
				
				
					var text = "In this <b class='ct-code-b-yellow'>printf()</b> we will notice that there is no <b class='ct-code-b-yellow'>\\n</b> (newline) character.";
			 		typing(".introjs-tooltiptext", text, function() {
			 			$('.introjs-nextbutton,.introjs-prevbutton').show();
			 		});
				});
				break;
				
			case "fourthLine":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$(".introjs-tooltip").removeClass("hide");
					$('#fourthLine').removeClass('opacity00');
					var text = 'This <b class="ct-code-b-yellow">printf()</b> statement will print the text '
								+ '<span class="ct-code-b-yellow">"Line Two"</span> adjecent to <span class="ct-code-b-yellow">"Line one"</span> beacuse while printing <span class="ct-code-b-yellow">"Line one"</span> we did not print a <b class="ct-code-b-yellow">\\n</b> (newline) character.';
			 		typing(".introjs-tooltiptext", text, function() {
			 			$('.introjs-nextbutton,.introjs-prevbutton').show();
			 		});
				});
				break;
				
			case "outputDiv":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var action = intro._introItems[intro._currentStep].action;
					switch(action) {
					case "line1":
						
						     setTimeout(function() {
						    	
									if (intro._direction=="forward") {
										transferEffect($("#firstLine > span").eq(0),"#lineOne",function() {
											$('#lineOne').removeClass('opacity00');
											
										$('#line-two-cursor').append('<div id="cursorId" class="outline-none" contenteditable="true" ></div>');
										charAtEnd('cursorId');
										$('#cursorId').keydown(function(e) {
											e.preventDefault();
										});
										});
										setTimeout(function() {
											intro.nextStep()
										}, 2000);
									} else {
							
										
										
										intro.previousStep()
									}
								}, 500);;
						
					break;
					case "line2":
						$('#cursorId').remove();
						
						     setTimeout(function() {
						    	 
									if (intro._direction=="forward") {
										$('#lineTwo').append('C programming language is "easy". ').addClass('opacity00');
										$('#cursorId').remove();
										transferEffect($('#secondLine > span').eq(0),"#lineTwo",function() {
											
											$('#lineThree').append('<div id="cursorId" class="outline-none" contenteditable="true" ></div>');
											charAtEnd('cursorId');
											$('#cursorId').keydown(function(e) {
												e.preventDefault();
											});
										});
										setTimeout(function() {
											intro.nextStep()
										}, 2000);
									} else {
										intro.previousStep()
									}
								}, 500);
						
					break;
					case "line3":
						$('#cursorId').remove();
						     
						$('#lineThree > span').append('Line one.').addClass('opacity00');
					
									if (intro._direction=="forward") {
										transferEffect('#thirdLine > span',"#lineThree > span",function() {
											$('#lineThree >#31').empty();
											$('#lineThree > span').append('<span id="cursorId" class="outline-none" contenteditable="true" ></span>');
											charAtEnd('cursorId');
											$('#cursorId').keydown(function(e) {
												e.preventDefault();
											});
										});
										setTimeout(function() {
											intro.nextStep()
										}, 2000);
									} else {
										
										setTimeout(function() {
											intro.previousStep()
										}, 500);
									}
							
						
					break;
					case "line4":
						$('#cursorId').remove();
						setTimeout(function() {
								if (intro._direction=="forward") {
									$('#lineThree > #31').eq(0).append('Line two.').addClass("opacity00")
									transferEffect('#fourthLine > span',$('#lineThree > #31').eq(0),function() {
										setTimeout(function() {
										intro.nextStep()
										}, 300);
									});
								} else {
									intro.previousStep()
								}
							}, 500);
						
					break;
					}
				});
				break;
				
		}
	});
		intro.start();
		$('.introjs-nextbutton').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
		typingId = '#typingDiv';
		$('#typingDiv > ul > li').css('opacity','0');
		$('#typingDiv  ol > li').addClass('opacity00');
		TweenMax.to($('#typingDiv > ul > li').eq(0), 0.4, {opacity: 1, onComplete: function() {
			TweenMax.to($('#typingDiv > ul > li').eq(1), 0.4, {opacity: 1, onComplete: function() {
				TweenMax.to($('#typingDiv > ul > li').eq(2), 0.4, {opacity: 1, onComplete: function() {
					TweenMax.to($('#typingDiv ol > li').eq(0), 0.4, {opacity: 1, onComplete: function() {
						TweenMax.to($('#typingDiv ol > li').eq(1), 0.4, {opacity: 1, onComplete: function() {
							$('.introjs-duplicate-nextbutton').removeClass('opacity00').addClass("animated zoomIn").one('animationend', function() {
								$('.introjs-duplicate-nextbutton').click(function() {
									$(".introjs-duplicate-nextbutton").remove();
									$('#exampleDiv, #outputDiv').removeClass('opacity00');
										intro.nextStep();
								});
							});
                   		}});
            		}});
   				 }});	
			}});		
		}});
}
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index").effect( "highlight",{color: '#ffff33'}, 500);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			
		}
	});
}


function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") { 
			callBackFunction();
			intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}
function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
	
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}