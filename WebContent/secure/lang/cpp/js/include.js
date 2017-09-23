var introjs;
var typingSpeed = 5;

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
	 $("#restart").click(function(){
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
		steps : [{
			 		element : "#totalDiv",
					intro : "",
					position : "bottom"
				},{
			 		element : "#code1",
					intro : "",
					position : "right"
				},{
			 		element : "#main",
					intro : "",
					position : "right"
				},{
			 		element : "#cOut1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "top"
				},{
			 		element : "#include1",
					intro : "",
					position : "right"
				},{
			 		element : "#namespace",
					intro : "",
					position : "right"
				},{
			 		element : "#totalPro",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "top"
				},{
			 		element : "#code2",
					intro : "",
					position : "right"
				},{
			 		element : "#cOut2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "top"
				},{
			 		element : "#include2",
					intro : "",
					position : "right"
				},{
			 		element : "#totalPro2",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "top"
				},{
			 		element : "#restart",
					intro : "",
					position : "right"
				}
			]});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "totalDiv":
			$(".introjs-tooltip").hide();
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
			$('.introjs-nextbutton').hide();
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
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$("#main").addClass("colorMain");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Compilation starts from first line of the program and ends at the last line.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.refresh();
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "cOut1":
			if (introjs._currentStep == 3) {
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				introjs.refresh();
				//$("#main").removeClass("colorMain");
				//$("#printf1").addClass("colorMain");
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep()
					}, 1000);
				});
			}/*  else if (introjs._currentStep == 6) {
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				introjs.refresh();
				$("#ct").removeClass("colorWhite");
				$("#include1").removeClass("colorMain");
				$("#printf1").addClass("colorMain");
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep()
					}, 1000);
				});
			} */
		break;
		case "totalPro":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$("#ct").removeClass("colorWhite");
			$("#totalPro").addClass("colorMain");
			$("#cOut1").addClass("colorMain");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Now we will recompile the complete code.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.refresh();
					$(".introjs-nextbutton").show();
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
			$("#cOut1").removeClass("colorMain");
			$("#outputDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltiptext").append("<div>You will notice that will get errors when we compile the code because the compiler was not able to "
									+ " locate <b class ='ct-code-b-yellow'>cout </b> object.<br><br>"
									+ " In the errors you will notice that there is a suggestion to include <b class ='ct-code-b-yellow'>iostream</b>.because <span class='ct-code-b-yellow'>"+
									"iostream</span> provides standard way to flow the data.</div>");
				var text =  "test.c:2:2: <b class='warning-color'>error</b>: <b>cout</b> was not declared in this scope <br>"
							+ "test.c:2:2: <span class='blink-in-console'><b class='note-color'>note</b>: include <b>'&lt;iostream&gt;'</b> or provide a declaration of <b>'cout <<'</b></span>";
				$("#outputBody").append("<div></div>");
				typing($("#outputBody > div:last-child"), text, function() {
					setTimeout(function() {
					$(".blink-in-console").addClass("blink");
					}, 1000);
					$(".introjs-nextbutton").show();
				});
			});
		 } else if (introjs._currentStep == 8) {
			 $('.introjs-nextbutton').hide();
			 $('.introjs-prevbutton').hide();
			 introjs.refresh();
			 $("#ct").addClass("colorWhite");
			 $(".colorMain").removeClass("colorMain");
			 $(".introjs-helperLayer").one("transitionend", function() {
				 $(".introjs-tooltiptext").append("<div>The program successfully executes after compiling because we have including <b class ='ct-code-b-yellow'>#include</b>.  Below is the output of the program.</div>")
				 var text = "<b>CodeTantra</b><br><br>";
				 typing($("#outputBody > div:last-child"), text, function() {
					 $(".introjs-nextbutton").show();
				});
			});
		 } else if (introjs._currentStep == 11) {
			 $('.introjs-nextbutton').hide();
			 $('.introjs-prevbutton').hide();
			 introjs.refresh();
			 $("#sqrt").addClass("colorWhite");
			 $("#cOut2").removeClass("colorMain");
			 $(".introjs-helperLayer").one("transitionend", function() {
				 $(".introjs-tooltiptext").append("<div>These errors have occurred because the compiler was not able to locate  "
						 						+ "<b class ='ct-code-b-yellow'>sqrt()</b> functions.</div>");
				 var text = "test.c:2:2: <span class='blink-in-console'><b class='note-color'>note</b>:<b class='warning-color'>error</b>: sqrt was not declared in this scope cout 'Square root of 4.0 is ' << sqrt(4.0) << endl;";
				 typing($("#outputBody > div:last-child"), text, function() {
					 $(".blink-in-console").addClass("blink");
					 $(".introjs-nextbutton").show();
				 });
			 });
		 } else if (introjs._currentStep == 14){
			 $('.introjs-nextbutton').hide();
			 $('.introjs-prevbutton').hide();
			 introjs.refresh();
			 $(".colorMain").removeClass("colorMain");
			 $("#sqrt").addClass("colorWhite");
			 $("#cOut2").removeClass("colorMain");
			 $(".introjs-helperLayer").one("transitionend", function() {
				 $(".introjs-tooltiptext").append("<div>The compilation will be successfully after including "
						 			+ " <b class ='ct-code-b-yellow'>math.h</b>, and the program generates the below output.</div>")
				 var text = "<b>Square root of 4.0 = 2</b><br><br>";
				 typing($("#outputBody > div:last-child"), text, function() {
					 $(".introjs-nextbutton").show();
				});
			});
		 }
		break;
		case "include1":    
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".blink").removeClass("blink");
			$("#include1").addClass("colorMain");
			var text = $("#include1").html();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#include1").removeClass("opacity00");
				typing("#include1", text, function() {
					var text1 = "Now let us include the header file <b class ='ct-code-b-yellow'>iostream</b> which contains the <b class ='ct-code-b-yellow'>cout</b>.";
					typing($(".introjs-tooltiptext"), text1, function() {
						$(".introjs-nextbutton").show();
					});	
				});
			 });
		break;
		case "namespace":    
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".blink").removeClass("blink");
			$("#namespace").addClass("colorMain");
			var text = $("#namespace").html();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#namespace").removeClass("opacity00");
				typing("#namespace", text, function() {
					var text1 = "The statement <span class='ct-code-b-yellow'>using namespace std</span> specifies that <span class='ct-code-b-yellow'>std </span>"+
					"is a standard namespace which includes <span class='ct-code-b-yellow'>cout</span>,<span class='ct-code-b-yellow'>cin</span>, etc.";
					typing($(".introjs-tooltiptext"), text1, function() {
						$(".introjs-nextbutton").show();
					});	
				});
			 });
		break;
		case "code2":
			$('.introjs-nextbutton').hide();
			$("#code2").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider another sample program and compile it  without the <b class ='ct-code-b-yellow'>#include</b> directives.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "cOut2":
			if (introjs._currentStep == 10) {
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				introjs.refresh();
				$("#cOut2").addClass("colorMain");
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep()
					}, 1000);
				});
			}
		break;
		case "totalPro2":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$("#sqrt").removeClass("colorWhite");
			$("#totalPro2").addClass("colorMain");
			$("#cOut2").addClass("colorMain");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "We will recompile the code after including the directives.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.refresh();
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "include2":
			$('.introjs-nextbutton').hide();
			$("#include2").addClass("colorMain");
			var text2 = $("#include22").html();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#include2").removeClass("opacity00");
					$("#include22").removeClass("opacity00");
					typing("#include22", text2, function() {
						var text1 = "<span class='ct-code-b-yellow'>sqrt</span> is a mathametical function and which is"+
						" available at the headerfile <span class='ct-code-b-yellow'>math.h</span>";
						typing($(".introjs-tooltiptext"), text1, function() {
							$(".introjs-nextbutton").show();
						});	
					});
				});
		break;
		case "restart":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#restart').removeClass("opacity00");
			$(".introjs-tooltip").css({"min-width": "115px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart.";
				typing($(".introjs-tooltiptext"), text);
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