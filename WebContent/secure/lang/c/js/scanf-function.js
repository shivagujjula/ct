var introjs;
var typingSpeed = 10;
var tl;
var arr;

var scanfFunctionReady = function() {
	introGuide();
	tl = new TimelineLite();
	$("[data-toggle='popover']").popover({html : true});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#description",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#codeAnimation",
			intro : "",
			position : "right"
		},{
			element : "#addressDiv",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#printf",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#scanf",
			intro : "",
			position : "right"
		},{
			element : "#consoleId",
			intro : "",
			position : "right"
		},{
			element : "#scanf",
			intro : "",
			position : "bottom"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#scanf",
			intro : "",
			position : "bottom"
		},{
			element : "#finalPrintf",
			intro : "",
			position : "right"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#restart",
			intro : "",
			position : "right",
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		introjs.refresh();
		var elementId = targetElement.id;
		switch (elementId) {
		case "description":
			$(".introjs-nextbutton").hide();
			setTimeout(function() {
				tl.to("#desText", 1, {opacity: 1, onComplete: function() {
					$("#desText").removeClass("opacity00");
				}});
			},100);
			
			break;
			
		case "codeAnimation":
			$(".introjs-nextbutton").hide();
			$("#codeAnimation").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "In this program we will learn how <span class='ct-code-b-yellow'>scanf()</span> function behaves."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "printf":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 1000);
			});
			break;
			
		case "finalPrintf":
			$(".introjs-nextbutton").hide();
			$("[data-toggle='popover']").popover("show");
			$("#popoverContent1").text( $("#val0").text() );
			$("#popoverContent2").text( $("#val1").text() );
			$('#val1').css('border', 'none');
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'>printf()</span> statement will print the values stored in " 
							+ " <span class='ct-code-b-yellow'>a</span> and <span class='ct-code-b-yellow'>b</span> respectively.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "addressDiv":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#addressDiv").removeClass("opacity00");
				tl.to("#addressLocation", 1, {opacity: 1, onComplete: function() {
					$("#addressLocation").removeClass("opacity00");
					introjs.nextStep();
				}});
			});
			break;
			
		case "consoleId":
			$(".introjs-nextbutton").hide();
				if (introjs._currentStep == 4) {
					$(".introjs-helperLayer").one("transitionend", function() {
						tl.to("#consoleId", 1, {opacity: 1, onComplete: function() {
							$("#consoleId").removeClass("opacity00");
							var text = "Enter two numbers: <span id='inputVal'></span>"
								typing("#runEditor1", text, function() {
									setTimeout(function() {
										introjs.nextStep();
									}, 1000);
								});
						}});
					});
				} else if (introjs._currentStep == 6) {
					$(".introjs-helperLayer").one("transitionend", function() {
						var text = "<input id='num1' spellcheck='false' class='int-num'/>";
						typing("#inputVal", text, function() {
							var text2 = "Enter <span class='ct-code-b-yellow'>two</span> numbers. <br/><br/> While you are trying to read numbers using " 
										+ " <span class='ct-code-b-yellow'>scanf()</span> you can seperate the numbers either by space or by hitting " 
										+ " enter between the numbers. <br/><br/>In this case please provide a " 
										+ " <span class='ct-code-b-yellow'>space</span> to sperate your numbers."
							typing(".introjs-tooltiptext", text2, function() {
								$("#num1").addClass("blinking-orange");
								$("#num1").focus();
								arr = [];
								$('#num1').on("keydown", function(e) {
									if (arr.length == 2) {
										if (e.keyCode == 32) {
											e.preventDefault();
										}
									}
									if ($.inArray(e.keyCode, [46, 8, 9, 27, 32, 35, 36, 37, 39]) !== -1) {
										return;
									}
									if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
										e.preventDefault();
									}
								});
								
								$('#num1').on("keyup", function(e) {
									$('.length-error-text').remove();
									if ($(this).val() == "") {
										$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																			"Please enter 2 numbers and separate each with space.</span>");
									}
									var givenText = $(this).val();
									var splittedText = givenText.split(" ");
									arr = [];
									
									$.each(splittedText, function(idx, val) {
										if (val != '') {
											arr.push(val);
										}
									});
									
									if (arr.length < 2) {
										$(".introjs-nextbutton").hide();
									} else if (arr.length == 2) {
										$(".introjs-nextbutton").show();
									}
									
									$.each(arr, function(idx, val) {
										if (val.length > 2) {
											$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																					"Please limit the number length to 2.</span>");
											$(".introjs-nextbutton").hide();
										}
									});
								});
							});
						});
					});
					
				} else if (introjs._currentStep == 8) {
					$("#scanNum1").popover("show");
					$("#popoverContent2").text($("#val1").text());
					$("#popoverContent1").text($("#val0").text());
					$(".introjs-helperLayer").one("transitionend", function() {
						$('#val0').css("border", "none");
						$('#val0').effect( "transfer", { to: $("#space0"), className: "ui-effects-transfer" }, 1000, function() {
							$('#space0').css('border', '1px solid yellow');
							
							var newStep = {
								"element" : "#space0",
								"intro" : "",
								"position" : "right"
							}
							introjs.insertOption(introjs._currentStep + 1, newStep);
							setTimeout(function() {
								introjs.nextStep();
							},1000);
						});
					});
					
				} else if (introjs._currentStep == 10) {
					$("#scanNum1").popover("show");
					$("#popoverContent2").text($("#val1").text());
					$("#popoverContent1").text($("#val0").text());
					$('#space0').css('border', 'none');
					$(".introjs-helperLayer").one("transitionend", function() {
						$('#space0').css("border", "none");
						$('#space0').effect( "transfer", { to: $("#val1"), className: "ui-effects-transfer" }, 1000, function() {
							$('#val1').css('border', '1px solid yellow');
							setTimeout(function() {
								introjs.nextStep();
							},1000);
						})
					});
					
				} else {
					$("[data-toggle='popover']").popover("show");
					$("#popoverContent2").text($("#val1").text());
					$("#popoverContent1").text($("#val0").text());
					$("#inputVal").removeClass("zIndex");
					$(".introjs-helperLayer").one("transitionend", function() {
						var text = "a = "+$("#givenNum1").text()+" b = "+$("#givenNum2").text()+"";
						typing("#runEditor2", text, function() {
							setTimeout(function() {
								$(".introjs-nextbutton").click();
							},1000)
						});
					});
				}
			break;
			
		case "scanf":
			$(".introjs-nextbutton").hide();
			if (introjs._currentStep == 5) {
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here we are using the <span class='ct-code-b-yellow'>scanf()</span> function with two " 
								+ " <span class='ct-code-b-yellow'>%d</span> format characters which will read two numbers " 
								+ " from the console and  store them in the addresses of <span class='ct-code-b-yellow'>a</span> " 
								+ " and <span class='ct-code-b-yellow'>b</span> respectively."
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			} else if (introjs._currentStep == 7) {
				var text = $("#num1").val();
				var i = 0;
				$("#inputVal").empty();
				$.each(text.split(" "), function(index, val) {
				  $("#inputVal").append("<span id='val"+i+"'>" + val + "</span><span id='space"+i+"'>&nbsp;</span>");
				  i++;
				});
				
				$(".introjs-helperLayer").one("transitionend", function() {
					var l1 = $("#scanNum1").offset();
					var l2 = $("#scanNum2").offset();
					
					$("#givenNum1").offset({"top": l1.top, "left": l1.left});
					$("#givenNum2").offset({"top": l2.top, "left": l2.left});
					
					$("#givenNum1").text( $('#val0').text() );
					$("#givenNum2").text( $('#val1').text() );
					
					$('#val0').css('border', '1px solid yellow');
					$("#inputVal").addClass("zIndex");
					$('#val0').effect( "transfer", { to: $("#dBlink1"), className: "ui-effects-transfer" }, 1000, function() {
						$("#val0").addClass("blinking-orange");
						$("#dBlink1").addClass("blinking-orange");
						$("#scanNum1").popover("show");
						$("#popoverContent1").text($("#val0").text());
						var text1 = "The <span class='ct-code-b-yellow'>scanf()</span> function reads " 
							+ "<span class='ct-code-b-yellow'>"+$("#val0").text()+"</span> into " 
							+ "<span class='ct-code-b-yellow'>&a</span> using the first <span class='ct-code-b-yellow'>%d</span> format character."
						typing(".introjs-tooltiptext", text1, function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="valTransfer1()">Next &#8594;</a>');
						});
					});
				});
			} else {
				$("#scanNum1").popover("show");
				$("#popoverContent2").text($("#val1").text());
				$("#popoverContent1").text($("#val0").text());
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#val1').effect( "transfer", { to: $("#dBlink2"), className: "ui-effects-transfer" }, 1000, function() {
						$("#val1").addClass("blinking-orange");
						$("#scanNum2").popover("show");
						$("#popoverContent2").text($("#val1").text());
						
						$("#scanNum2").addClass("blinking-orange");
						$("#givenNum2").addClass("zIndex");
						
						tl.to("#givenNum2", 1, {opacity: 1, top:0, left:0, onComplete: function() {
							$("#val1").removeClass("blinking-orange");
							$("#givenNum2").addClass("blinking-orange");
							$("#givenNum2").removeClass("opacity00");
							$("#scanNum2").removeClass("blinking-orange");
							var text = "The <span class='ct-code-b-yellow'>scanf()</span> function reads " 
							+ "<span class='ct-code-b-yellow'>"+$("#val1").text()+"</span> into " 
							+ "<span class='ct-code-b-yellow'>&b</span> using the second <span class='ct-code-b-yellow'>%d</span> format character."
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					});
				});
			}
			
			break;
			
		case "space0":
			$(".introjs-nextbutton").hide();
			$("#popoverContent2").text( $("#val1").text() );
			$("#popoverContent1").text( $("#val0").text() );
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#space0').css('border', '1px solid black');
				$('#space0').css('color', 'black');
				var text = "This <span class='ct-code-b-yellow'>space</span> is used by <span class='ct-code-b-yellow'>scanf()</span> " 
							+ " to understand that the first input number has terminated and what follows next is a next input number.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "restart":
			$(".introjs-nextbutton").hide();
			$("#popoverContent2").text($("#val1").text());
			$("#popoverContent1").text($("#val0").text());
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to <span class='ct-code-b-yellow'>restart</span>." 
				typing(".introjs-tooltiptext", text, function() {
					$("#restart").removeClass("opacity00");
					$("#restart").click(function() {
						location.reload();
					});
				});
			});
			break;
		}	
	});	
	
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function valTransfer1() {
	$(".user-btn").remove();
	$("#val0").removeClass("blinking-orange");
	$("#dBlink1").removeClass("blinking-orange");
	$("#scanNum1").addClass("blinking-orange");
	$("#givenNum1").addClass("zIndex");
	
	tl.to("#givenNum1", 1, {opacity: 1, top:0, left:0, onComplete: function() {
		$("#givenNum1").addClass("blinking-orange");
		$("#givenNum1").removeClass("opacity00");
		$("#scanNum1").removeClass("blinking-orange");
		$(".introjs-nextbutton").show();
	}});
}

function nextStep() {
	$(".user-btn").remove();
	introjs.nextStep();
}