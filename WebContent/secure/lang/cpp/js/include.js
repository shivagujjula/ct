var introjs;
var typingSpeed = 1;

var includeReady = function() {
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
		
	 	if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
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
					position : "bottom",
					tooltipClass:'hide'
				},{
			 		element : "#code1",
					intro : "",
					position : "right"
				},{
			 		element : "#main",
					intro : "",
					position : "right"
				},{
			 		element : "#printf1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "top",
					tooltipClass : "hide"
				},{
			 		element : "#include1",
					intro : "",
					position : "right",
					tooltipClass : "hide"
				},{
			 		element : "#namespace",
					intro : "",
					position : "right",
					tooltipClass : "hide"
				},{
			 		element : "#totalPro",
					intro : "",
					position : "right",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "top",
					tooltipClass : "hide"
				},{
			 		element : "#code2",
					intro : "",
					position : "right",
					tooltipClass : "hide"
				},{
			 		element : "#printf2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "top",
					tooltipClass : "hide"
				},{
			 		element : "#include22",
					intro : "",
					position : "right",
					tooltipClass : "hide"
				},{
			 		element : "#totalPro2",
					intro : "",
					position : "right",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "top",
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
		case "include1":    
			$("#namespace").addClass("opacity00");
			break;
		case "namespace":    
			$("#main, #printf1").removeClass("colorMain");
			break;
		case "code1":
			if(introjs._direction == "backward") {
				 $("#main, #printf1").removeClass("colorMain");
			}
		break;
		case "outputDiv":
			if (introjs._currentStep == 4) {
				$("#outputDiv").addClass("opacity00");
				$("#error").empty();
				$('#include1').addClass('opacity00');
				$("#include1").removeClass("colorMain");
			} else if (introjs._currentStep == 8) {
				$('#code2').addClass('opacity00');
			 } else if (introjs._currentStep == 11) {
				 introjs.refresh();
				 $('#include22').addClass('opacity00');
				 $("#sqrt").addClass("colorWhite");
				 $("#error1").empty();
			}
			break;
		case "printf1":
			if (introjs._currentStep == 3) {
				introjs.refresh();
				$("#outputDiv").addClass("opacity00");
				$("#error").empty();
			}
			break;
		case "totalPro":
			if(introjs._direction == "backward") {
				$('#error').show();
				$('#code').remove();
				$("#main,#printf1, #namespace,#include1").addClass("colorMain");
			}
		break;
		case "code2":
			if(introjs._direction == "backward") {
				$('#code').show();
				 $("#printf2").removeClass("colorMain");
				 $('#code2').removeClass('opacity00');
			}
		break;
		case "totalPro2":
			if(introjs._direction == "backward") {
				$('#error1').show();
				$('#squareCode').remove();
				$("#totalPro2").addClass("colorMain");
				$("#sqrt").addClass("colorWhite");
			}
		break;
		case 'main':
			$("#main").addClass("colorMain");
			$("#printf1").addClass("colorMain");
		break;	
		case "include22":
			 $('#include21, #include22,#namespace1').removeClass('opacity00');
			 $("#totalPro2, #include2, #printf2").removeClass("colorMain");
			 $("#include22").addClass("colorMain");
		 break;
			
		}
	})
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			if (introjs._currentStep != 0 && introjs._currentStep != 1) {
				$('.introjs-prevbutton').show();
			} 
			$('.introjs-nextbutton').show();
			return;
		}
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		var elementId = targetElement.id;
		switch (elementId) {
		case "totalDiv":
			$('.introjs-nextbutton').hide();
			$("#li1").fadeTo(300, 1, function () {
				$("#li2").fadeTo(300, 1, function () {
					$("#li3").fadeTo(300, 1, function () {
						$("#li4").fadeTo(300, 1, function () {
							$("#li5").fadeTo(300, 1, function () {
									$("#olLi1").fadeTo(300, 1, function () {
										$("#olLi2").fadeTo(300, 1, function () {
											$(".introjs-tooltip").show();
											var text = "Let us see the sample <b class ='ct-code-b-yellow'>C++</b> program.";
											$('.introjs-tooltip').removeClass('hide');
											typing(".introjs-tooltiptext", text, function() {
												$(".introjs-nextbutton").show();
											});
										});
									});
							});
						});
					});
				});
			});
		break;
		case "code1":
			$("#code1").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here the <b class ='ct-code-b-yellow'>#include</b> directive is purposely not included."
						+ " To show you the output which we get when it is not included.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "main":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Compilation starts from first line of the program and ends at the last line.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "printf1":
			if (introjs._currentStep == 3) {
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				introjs.refresh();
				$("#main").addClass("colorMain");
				$("#printf1").addClass("colorMain");
				$(".introjs-helperLayer").one("transitionend", function() {
					if (introjs._direction == "forward") {
						setTimeout(function() {
							introjs.nextStep();
						},500)
					} else {
						$("#outputDiv").addClass("opacity00");
						$("#error").empty();
						setTimeout(function() {
							introjs.previousStep();
						},500)
					}
				});
			}
		break;
		case "totalPro":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$("#ct").removeClass("colorWhite");
			$("#main,#namespace,#printf1").addClass("colorMain");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Now we will recompile the complete code.";
				$('.introjs-tooltip').removeClass('hide');
				typing($(".introjs-tooltiptext"), text, function() {
					$("#totalPro").removeClass("colorMain");
					//$("#printf1").removeClass("colorMain");
					introjs.refresh();
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 4) {
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-tooltiptext').css({"max-height" : "233px", "overflow" : "auto"});
			introjs.refresh();
			$("#main").removeClass("colorMain");
			$("#ct").addClass("colorWhite");
			$("#printf1").removeClass("colorMain");
			$("#outputDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltiptext").text('').append("<div>You will notice that will get errors when "+
									"we compile the code because the compiler was not able to "
									+ " locate <b class ='ct-code-b-yellow'>cout</b> object.<br><br>"
									+ " In the errors you will notice that there is a suggestion to include <b class ='ct-code-b-yellow'>iostream</b>."+
									" Because <b class ='ct-code-b-yellow'>iostream</b> provides standard way to flow the data.</div>");
				var text =  "test.cpp:2:2: <b class='warning-color'>error</b>: <b>cout</b> was not declared in this scope <br>"
							+ "test.cpp:2:2: <span class='blink-in-console'><b class='note-color'>note</b>: include <b>'&lt;iostream&gt;'</b> or "+
									"provide a declaration of <b>'cout <<'</b></span>";
				$('#error').remove();
				$("#outputBody").append("<div id='error'></div>");
				$('.introjs-tooltip').removeClass('hide');
				typing($("#outputBody > #error"), text, function() {
					setTimeout(function() {
						$(".blink-in-console").addClass("blink");
					}, 1000);
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					$(".blink-in-console").removeClass("blink");
					$("#ct").removeClass("colorWhite");
				});
			});
		 } else if (introjs._currentStep == 8) {
			 introjs.refresh();
			 $("#ct").addClass("colorWhite");
			 $(".colorMain").removeClass("colorMain");
			 $(".introjs-helperLayer").one("transitionend", function() {
				 $(".introjs-tooltiptext").text('').append("<div>The program successfully executes after compiling "+
						 "because we have including <b class ='ct-code-b-yellow'>#include</b>.  Below is the output of the program.</div>");
				 $('#error').hide();
				 $('#code').remove();
				 $("#outputBody").append("<div id='code'></div>");
				 var text = "CodeTantra";
				 $('.introjs-tooltip').removeClass('hide');
				 typing($("#outputBody > #code"), text, function() {
					 $("#ct").removeClass("colorWhite");
					 $('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		 } else if (introjs._currentStep == 11) {
			 introjs.refresh();
			 $("#sqrt").addClass("colorWhite");
			 $("#printf2").removeClass("colorMain");
			 $(".introjs-helperLayer").one("transitionend", function() {
				 $(".introjs-tooltiptext").text('').append("<div>These errors have occurred because the compiler was not able to locate "
						 						+ "<b class ='ct-code-b-yellow'>sqrt()</b> functions.</div>");
				 var text = "test.cpp:2:2: <span class='blink-in-console'><b class='note-color'>note</b>:<b class='warning-color'>error</b>: "+
				 			"sqrt was not declared in this scope cout 'Square root of 4.0 is ' << sqrt(4.0) << endl;";
				 $('#code').hide();
				 $('#error1').remove();
				 $('#include22').addClass('opacity00');
					$("#outputBody").append("<div id='error1'></div>");
					$('.introjs-tooltip').removeClass('hide');
					//typing($("#outputBody > div:last-child"), text, function() {
						typing($("#outputBody > #error1"), text, function() {
					 $(".blink-in-console").addClass("blink");
					// $("#printf2").removeClass("colorMain");
					 $('.introjs-nextbutton, .introjs-prevbutton').show();
				 });
			 });
		 } else if (introjs._currentStep == 14){
			 introjs.refresh();
			 $(".colorMain").removeClass("colorMain");
			 $("#sqrt").addClass("colorWhite");
			 $("#printf2").removeClass("colorMain");
			 $(".introjs-helperLayer").one("transitionend", function() {
				 $(".introjs-tooltiptext").text('').append("The compilation will be successfully after including"
						 			+ " <b class ='ct-code-b-yellow'>math.h</b>, and the program generates the below output.")
				$('#error1').hide();
				 $('#squareCode').remove();
				 $("#outputBody").append("<div id='squareCode'></div>");
				var text = "<b>Square root of 4.000000 is 2.000000</b><br><br>";
				$('.introjs-tooltip').removeClass('hide');
				typing($("#outputBody > #squareCode"), text, function() {
					 $('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		 }
		break;
		case "include1":    
			$(".blink").removeClass("blink");
			$("#include1").addClass("colorMain");
			var text = $("#include1").html();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#include1").removeClass("opacity00");
				typing("#include1", text, function() {
					var text1 = "Now let us include the header file <b class ='ct-code-b-yellow'>iostream.h</b> which contains the "+
								"<b class ='ct-code-b-yellow'>cout</b> object.";
					$('.introjs-tooltip').removeClass('hide');
					typing($(".introjs-tooltiptext"), text1, function() {
						 $('.introjs-nextbutton, .introjs-prevbutton').show();
					});	
				});
			 });
		break;
		case "namespace":    
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".blink").removeClass("blink");
			$("#namespace").addClass("colorMain");
			var text = $("#namespace").html();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#namespace").removeClass("opacity00");
				typing("#namespace", text, function() {
					var text1 = "The statement <span class='ct-code-b-yellow'>using namespace std</span> specifies that "+
								"<span class='ct-code-b-yellow'>std </span>"+
					"is a standard namespace which includes <span class='ct-code-b-yellow'>cout</span>,<span class='ct-code-b-yellow'>cin</span>, etc.";
					$('.introjs-tooltip').removeClass('hide');
					typing($(".introjs-tooltiptext"), text1, function() {
						 $('.introjs-nextbutton, .introjs-prevbutton').show();
					});	
				});
			 });
		break;
		case "code2":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#code2, #include21,#namespace1").removeClass("opacity00");
				$("#code").removeClass("hide");
				var text = "Let us consider another sample program and compile it  without the <b class ='ct-code-b-yellow'>#include</b> directives.";
				$('.introjs-tooltip').removeClass('hide');
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "printf2":
			if (introjs._currentStep == 10) {
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._direction == "forward") {
					$("#printf2").addClass("colorMain");
						setTimeout(function() {
							introjs.nextStep();
						},500)
					} else {
						$("#sqrt").removeClass("colorWhite");
						$("#printf2").addClass("colorMain");
						$("#error1").empty();
						setTimeout(function() {
							introjs.previousStep();
						},500)
					}
				});
			}
		break;
		case "totalPro2":
			introjs.refresh();
			$("#sqrt").removeClass("colorWhite");
			$("#totalPro2").addClass("colorMain");
			$("#printf2").addClass("colorMain");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "We will recompile the code after including the directives.";
				$('.introjs-tooltip').removeClass('hide');
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.refresh();
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "include22":
			$('.introjs-nextbutton').hide();
			$("#include22").addClass("colorMain");
			var text2 = $("#include22").html();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#include2").removeClass("opacity00");
				$("#include21").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				$("#include22").removeClass("opacity00");
				typing("#include22", text2, function() {
					var text1 = "<span class='ct-code-b-yellow'>sqrt</span> is a mathametical function and which is"+
								" available at the headerfile <span class='ct-code-b-yellow'>math.h</span>";
					typing($(".introjs-tooltiptext"), text1, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});	
				});
			});
		break;
		case "button" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn, #closeBtn").removeClass("opacity00");
				var text = "<ul><li>Click on <span class='ct-code-b-yellow'>Close</span> button to close the Live Demo.</li>" +
						"<li>Click on <span class='ct-code-b-yellow'>Restart</span> button to restart the Live Demo.</li></ul>"
									
				typing('.introjs-tooltiptext', text, function() {
					$('#restartBtn').click(function() {
						location.reload();
						
					});
					$('#closeBtn').click(function() {
						window.parent.$("#javaDocBrowserDiv").dialog("close");
					});

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

function stepsTyping(text, nextBtnAction) {
	$(".introjs-tooltiptext > ul").append("<li class='opacity00'>" + text + "</li>");
	var container = $('.introjs-tooltiptext');
	scrollTo = $('.introjs-tooltiptext > ul > li:last-child');
		container.animate({
		scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
	}, function() {
		TweenMax.to($(".introjs-tooltiptext > ul li:last-child"), 1, {opacity : 1, onComplete:function() {
			$(".introjs-tooltiptext > ul li:last-child").removeClass("opacity00");
		}});
	});
}
