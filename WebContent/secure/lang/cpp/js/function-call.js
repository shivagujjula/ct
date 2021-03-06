var putElement;
var introjs = null;
var timelineLite = new TimelineLite();	

var functionCallReady = function() {
	introGuide();
	 $("[contenteditable=true]").on("click keydown keyup", function(e) {
		$(".errMsg").remove();
		if ($(this).text() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introjs.refresh();
		
	 	if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
		
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
	 	if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 2 digits only.</div>")
			e.preventDefault();
		}
		if((e.keyCode >= 65 && e.keyCode <= 90)){
			return;
		}
	});
	 $("#restartBtn").click(function(){
		 location.reload();
	});
	 $('#closeBtn').click(function() {
			window.parent.$('.ui-dialog-titlebar-close').click();
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
		steps : [{
			 		element : "#totalDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#funName",
					intro : "",
					position : "right",
					tooltipClass : "hide"
				},{
			 		element : "#parameters",
					intro : "",
					position : "right"
				},{
			 		element : "#nameFun",
					intro : "",
					position : "right"
				},{
			 		element : "#addFun",
					intro : "",
					position : "right"
				},{
			 		element : "#mulFun",
					intro : "",
					position : "right"
				},{
			 		element : "#leftDiv",
					intro : "",
					position : "right",
					tooltipClass : "hide"
				},{
			 		element : "#funDec",
					intro : "",
					position : "right"
				},{
			 		element : "#callingFun",
					intro : "",
					position : "right"
				},{
			 		element : "#funDef",
					intro : "",
					position : "right"
				},{
			 		element : "#printf1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				}, {
					element: '#endFunc',
					intro: '',
					position: 'right',
				},{
			 		element : "#printf2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#button",
					intro : "",
					position : "right"
				}
			]});
	
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case "totalDiv":
			$("#totalDiv").removeAttr('style');
		break;
		case "parameters":
			$("#example").addClass("opacity00");
		break;
		case "nameFun":
			$("#example").addClass("opacity00");
		break;	
		case "mulFun":
			$('#leftDiv').addClass("opacity00").removeAttr('style');
		break;	
		case "leftDiv":
			$('#leftDiv').addClass("opacity00").removeAttr('style');
		break;
		}
	});
	introjs.onafterchange(function(targetElement) {
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 0) {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "totalDiv":
			$("#totalDiv").css({"height" : $("#totalDiv").outerHeight()});
			TweenMax.to($("#li1"), 0.5, {opacity: 1, onComplete: function() {
				TweenMax.to($("#li2"), 0.5, {opacity: 1, onComplete: function() {
					$("#li2").append(' &emsp; <a class="introjs-button user-btn">Next &#8594;</a>');
					$('.user-btn').click(function() {
						$("#typingDiv1").addClass('zindex10');
						$(this).remove();
						$("#syntax").removeClass("opacity00");
						introjs.nextStep();
					});
				}});
			}});
		break;
		case "funName":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass('hide');
				var text = "Name of the function.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "parameters":
			$(".introjs-helperLayer").one("transitionend", function() {
				typing($(".introjs-tooltiptext"),"The parameter-list is a list of variables that are passed to the function.<br> A <span class ='ct-code-b-yellow'>" 
						+ "function call </span> must end with a <span class ='ct-code-b-yellow'>semicolon (;)</span>.", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "nameFun":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#example").removeClass("opacity00");
				typing($(".introjs-tooltiptext"), "This is a call to the function <b class ='ct-code-b-yellow'>printName()</b>. This function returns void.", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "addFun":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a call to the function <b class ='ct-code-b-yellow'>addition()</b>.<br> This function "
							+ "has a return type of int and the parameters passed are <b class ='ct-code-b-yellow'>a</b> and"
							+ " <span class ='ct-code-b-yellow'>b</span>."
							+ "<br> The returned value will be stored in the variable <b class ='ct-code-b-yellow'>sum</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "mulFun":
			$(".introjs-helperLayer").one("transitionend", function() {
				typing($(".introjs-tooltiptext"), "This is a call to the function <b class ='ct-code-b-yellow'>mul()</b>.<br> This function "
							+ "has a return type of int and the parameters passed are <b class ='ct-code-b-yellow'>a</b>,"
							+ " <span class ='ct-code-b-yellow'>b</span> and <span class ='ct-code-b-yellow'>c</span>."
							+ "<br> The returned value will be stored in the variable <b class ='ct-code-b-yellow'>total</b>.", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "leftDiv":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#leftDiv').removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				typing($(".introjs-tooltiptext"), "Let's consider an example. We will learn <b class ='ct-code-b-yellow'>Function Definition</b>"
						+ ", <b class ='ct-code-b-yellow'>Function Declaration</b> and <b class ='ct-code-b-yellow'>Function Call</b>.", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "funDec":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This is the <b class ='ct-code-b-yellow'> Function Declaration</b>."
							+ " Here, user defined functions with name <b class ='ct-code-b-yellow'>printName()</b> is declared.<br> This function"
							+ " takes <span class='ct-code-b-yellow'>no parameters</span> and does not return any value.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
		break;
		case "callingFun":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a <b class ='ct-code-b-yellow'>Function Call</b>. Here, when a call to function is made the control is"
							+ " transferred to the called function.<br>  i.e., <b class ='ct-code-b-yellow'> Function Definition</b>(body)";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "funDef":
			$(".introjs-helperLayer").one("transitionend", function() {
				typing($(".introjs-tooltiptext"), "This is the <b class ='ct-code-b-yellow'>Function Definition</b>.", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "printf1":
			$(".introjs-helperLayer").one("transitionend", function() {
				if(introjs._direction == "forward") {
					setTimeout(function() {
						introjs.nextStep()
					}, 1000);
				} else {
					$("#outputDiv").addClass("opacity00");
					setTimeout(function() {
						introjs.previousStep();
					},1000);
				}
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 11) {
			introjs.refresh();
			$("#outputDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if(introjs._direction == "forward") {
					$("#outputBody").append("<div id='code'></div>");
					typing($("#outputBody > div:last-child"),"<b class='val-color' id='codeTantra'>Codetantra</b>", function() {
						setTimeout(function(){
							introjs.nextStep();
						}, 1500);
					});
				
				} else {
					$("#codeTantra").remove();
					setTimeout(function() {
						introjs.previousStep();
					},1000);
				}
			});
		 } else if (introjs._currentStep == 14){
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<b class='val-color'> inside main(), after printName() </b>";
				$("#outputBody").append("<div></div>");
				typing($("#outputBody > div:last-child"), text, function() {
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			});
		 }
		break;
		case "endFunc":
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "When the end of the function is reached, the control is transferred back to the calling method.";
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "printf2":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep()
				}, 1000);
			});
		break;
		case "button" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn, #closeBtn").removeClass("opacity00");
				console.log('haiiiii');
				var text = "<ul><li>Click on <span class='ct-code-b-yellow'>Close</span> button to close the Live Demo.</li>" +
						"<li>Click on <span class='ct-code-b-yellow'>Restart</span> button to restart the Live Demo.</li></ul>"
									
				typing('.introjs-tooltiptext', text, function() {
					$('#restartBtn').click(function() {
						location.reload();
						
					});

				});
			});
		break;
		}
	});
	
	introjs.start();
	$('.introjs-bullets').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : '5',
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 1, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
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