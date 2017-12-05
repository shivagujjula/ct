var introjs;
var tl;
var sum;
var arr;

var differentArgumentVariableReady = function() {
	introGuide();
	tl = new TimelineLite();
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ {
			element : "#heading",
			intro : "",
			position : "right",
		}, {
			element : "#codeAnimation",
			intro : "",
			position : "right",
		}, {
			element : "#funcDec",
			intro : "",
			position : "right",
		}, {
			element : "#globalVar",
			intro : "",
			position : "right",
		}, {
			element : "#addressDiv",
			intro : "",
			position : "left",
			tooltipClass : "hide",
		}, {
			element : "#mainFunc",
			intro : "",
			position : "right",
		}, {
			element : "#funcDef",
			intro : "",
			position : "right",
		}, {
			element : "#localVar",
			intro : "",
			position : "right",
		}, {
			element : "#addressDiv",
			intro : "",
			position : "left",
			tooltipClass : "hide",
		},{
			element : "#printf1",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		}, {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#scanf",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#consoleId",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		}, {
			element : "#addressDiv",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		}, {
			element : "#functionCall",
			intro : "",
			position : "right",
		}, {
			element : "#formalArgs",
			intro : "",
			position : "right",
			tooltipClass : "hide",
		}, {
			element : "#addressDiv",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		}, {
			element : "#sumRes",
			intro : "",
			position : "right",
		}, {
			element : "#sumDec",
			intro : "",
			position : "right",
		}, {
			element : "#addVar",
			intro : "",
			position : "right",
		}, {
			element : "#addressDiv",
			intro : "",
			position : "left",
			tooltipClass : "hide",
		}, {
			element : "#endFunction",
			intro : "",
			position : "right",
		}, {
			element : "#printf2",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		}, {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#endMain",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#restart",
			intro : "Click to restart.",
			tooltipClass : "introjs-tooltip-min-width",
			position : "right"
		} ]
	});
	
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "heading":
			$("#codeAnimation").addClass("opacity00");
			break;
		case "codeAnimation":
			$("#codeAnimation").removeClass("opacity00");
			break;
		case "globalVar":
			$("#addressDiv").addClass("opacity00");
			$("#globalVar").removeClass("blinking-white")
			break;
			
		case "addressDiv":
			if (introjs._currentStep == 4) {
				$("#sumAddress").addClass("check");
			} else if (introjs._currentStep == 13) {
				$("#sumAddress").removeClass("check");
				$("#aAddress").addClass("check");
			} else if (introjs._currentStep == 16) {
				$("#xAddress").addClass("check");
				$("#sumAddress").removeClass("check");
				$("#xVal, #yVal").addClass("opacity00").text("");
			} else if (introjs._currentStep == 20) {
				$("#sumAddress").addClass("check");
			}
			
			if (introjs._currentStep == 8) {
				$("#aAddress").addClass("check");
			}
			
			if($("#sumAddress").hasClass("check")) {
				if (introjs._currentStep == 4) {
					$("#sumAddress").removeAttr("style");
				}
			} else if ($("#aAddress").hasClass("check")) {
				$("#aVal, #bVal").removeAttr("style");
			} else if ($("#xAddress").hasClass("check")) {
				$("#xVal, #yVal").removeAttr("style").text("");
			}
			break;
			
		case "localVar":
			$("#localVar").removeClass("blinking-white");
			$("#sumVal").removeAttr("style");
			$("#varBox1").addClass("opacity00").css("opacity", "");
			$("#aAddress, #bAddress").css("opacity", "").addClass("opacity00");
			$("#boxHeading1").css("opacity", "").addClass("opacity00");
			break;
		case "mainFunc":
			$("#globalVar").removeClass("blinking-white")
			break;
		case "formalArgs":
			$("#varBox2").addClass("opacity00").css("opacity", "");
			$("#xAddress, #yAddress").css("opacity", "").addClass("opacity00");
			$("#boxHeading2").css("opacity", "").addClass("opacity00");
			$("#xVal, #yVal").addClass("opacity00").text("");
			break;
			
		case "addVar":
			$("#localVar, #globalVar").removeClass("blinking-white");
			$("#sumVal").text("");
			$("#sumAddress").addClass("check");
			break;
		case "sumRes":
			$(".blinking-white").removeClass("blinking-white");
			break;
		case "sumDec":
			$("#globalVar").addClass("blinking-white");
			break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		
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
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "heading":
			var text = "Let us understand <span class='ct-code-b-yellow'>Formal and Actual arguments</span>.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "codeAnimation":
			$("#codeAnimation").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Consider an example.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "funcDec":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "We declare a <span class='ct-code-b-yellow'>function</span> with name <span class='ct-code-b-yellow'>"
							+"addition(int, int)</span> with two arguments of type <b class='ct-code-b-yellow'>int</b> and "
							+" <b class='ct-code-b-yellow'>no</b> return value.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "addressDiv":   
			$("#addressDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#sumAddress").hasClass("check")) {
					$("#sumAddress").removeClass("check");
					if(introjs._currentStep == 4) {
						$("#globalVar").addClass("blinking-white");
						tl.to("#sumAddress", 1, {opacity: 1, onComplete: function() {
							$("#aAddress").addClass("check");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The variable <span class='ct-code-b-yellow'>sum</span> will be allocated <b class='ct-code-b-yellow'>"
										+"2 bytes</b> of memory in some memory location.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton, .introjs-prevbutton").show();
							});
						}});
					} else {
						$("#globalVar").removeClass("blinking-white");
						sum = parseInt($("#num1").text().substring(0, $("#num1").text().indexOf(" "))) + parseInt($("#num1").text().substring($("#num1").text().indexOf(" ") + 1));
						$("#sumVal").text(sum);
						var l1 = $("#sumRes").offset();
						$("#sumVal").offset({"top": l1.top, "left": l1.left});
						$("#sumVal, #sumRes").addClass("blinking-white");
						$("#sumVal").removeClass("opacity00");
						tl.to("#sumVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
							$("#sumVal, #sumRes").removeClass("blinking-white");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The value of <span class='ct-code-b-yellow'>sum</span> is stored in the memory allocated for the same.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton, .introjs-prevbutton").show();
							});
						}});
					}
					
				} else if($("#aAddress").hasClass("check")) {
					if(introjs._currentStep == 8) {
						$("#boxHeading1").css("opacity", "").addClass("opacity00");
						$("#localVar").addClass("blinking-white");
						$("#sumVal").removeAttr("style");
						$("#varBox1").addClass("opacity00").css("opacity", "");
						$("#aAddress, #bAddress").css("opacity", "").addClass("opacity00");
						tl.to("#boxHeading1, #varBox1", 1, {opacity: 1, onComplete: function() {
							$("#boxHeading1, #varBox1").removeClass("opacity00");
							tl.to("#aAddress", 1, {opacity: 1, onComplete: function() {
								tl.to("#bAddress", 1, {opacity: 1, onComplete: function() {
									$("#aAddress, #bAddress").removeClass("opacity00");
									$('.introjs-tooltip').removeClass("hide");
									var text = "<span class='ct-code-b-yellow'>a</span> and <span class='ct-code-b-yellow'>b</span> are allocated"
												+ " <b class='ct-code-b-yellow'>2 bytes</b> of memory each.";
									typing(".introjs-tooltiptext", text, function() {
										$(".introjs-nextbutton, .introjs-prevbutton").show();
									});
								}});
							}});
						}});
						
					} else if(introjs._currentStep == 13) {
						$("#aAddress").removeClass("check");
						$('#num1').text($('#num1').text().trim());
						$("#aVal").text($("#num1").text().substring(0, $("#num1").text().indexOf(" ")));
						$("#bVal").text($("#num1").text().substring($("#num1").text().indexOf(" ") + 1));
						
						var l1 = $("#addr1").offset();
						var l2 = $("#addr2").offset();
						
						$("#aVal").offset({"top": l1.top, "left": l1.left});
						$("#bVal").offset({"top": l2.top, "left": l2.left});
						
						$("#d1").addClass("blinking-white");
						$("#d1").removeClass("blinking-white");
						$("#aVal, #addr1").addClass("blinking-white");
						$("#aVal").removeClass("opacity00");
						tl.to("#aVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
							$("#aVal, #addr1").removeClass("blinking-white");
							$("#d2").addClass("blinking-white");
							$("#bVal, #addr2").addClass("blinking-white");
							$("#d2").removeClass("blinking-white");
							$("#bVal").removeClass("opacity00");
							tl.to("#bVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
								$("#bVal, #addr2").removeClass("blinking-white");
								$('.introjs-tooltip').removeClass("hide");
								var text = "The two values are stored in variables <b class='ct-code-b-yellow'>a</b> and "
											+"<b class='ct-code-b-yellow'>b</b>.";
								typing(".introjs-tooltiptext", text, function() {
									$("#xAddress").addClass("check");
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							}});
						}});
					}
				} else if($("#xAddress").hasClass("check")) {
					
					$("#xVal").text($("#num1").text().substring(0, $("#num1").text().indexOf(" ")));
					$("#yVal").text($("#num1").text().substring($("#num1").text().indexOf(" ") + 1));
					$("#xAddress").removeClass("check");
					$("#formalArgs").addClass("blinking-white");
					tl.to("#boxHeading2, #varBox2", 1, {opacity: 1, onComplete: function() {
						$("#boxHeading2, #varBox2").removeClass("opacity00");
						tl.to("#xAddress", 1, {opacity: 1, onComplete: function() {
							$("#xAddress").removeClass("opacity00");
							tl.to("#yAddress", 1, {opacity: 1, onComplete: function() {
								$("#yAddress").removeClass("opacity00");
								$("#formalArgs").removeClass("blinking-white");
								var l1 = $("#formArg1").offset();
								var l2 = $("#formArg2").offset();
								$("#xVal").offset({"top": l1.top, "left": l1.left});
								$("#yVal").offset({"top": l2.top, "left": l2.left});
								$("#formArg1, #xVal").addClass("blinking-white");
								$("#formArg1").removeClass("blinking-white");
								$("#xVal").removeClass("opacity00");
								tl.to("#xVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
									$("#xVal").removeClass("blinking-white");
									$("#formArg2, #yVal").addClass("blinking-white");
									$("#yVal").removeClass("opacity00");
									tl.to("#yVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
										$("#formArg2, #yVal").removeClass("blinking-white");
										$("#sumAddress").addClass("check");
										$('.introjs-tooltip').removeClass("hide");
										var text = "The variables <b class='ct-code-b-yellow'>x</b> and <b class='ct-code-b-yellow'>y</b> are "
													+"allocated memory of <b class='ct-code-b-yellow'>2</b> bytes each at different" 
													+ " locations.<br><br>When a call is made with <span class='ct-code-b-yellow'>a</span> and"
													+ " <span class='ct-code-b-yellow'>b</span> values to the function "
													+ "<span class='ct-code-b-yellow'>addition()</span> the values of a and b are stored in x and y.<br>"
													+ " Now <b>x</b> = <span class='ct-code-b-yellow'>"
													+ $("#num1").text().substring(0, $("#num1").text().indexOf(" ")) 
													+ "</span> and <b>y</b> = <span class='ct-code-b-yellow'>"
													+ $("#num1").text().substring($("#num1").text().indexOf(" ") + 1)+ "</span>.";
										typing(".introjs-tooltiptext", text, function() {
											$(".introjs-nextbutton, .introjs-prevbutton").show();
										});
									}});
								}});
							}});
						}});
					}});
				}
			});
			break;
			
		case "globalVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here we declare a variable <span class='ct-code-b-yellow'>sum</span> of type <span class='ct-code-b-yellow'>int</span> above the"
							+ " <span class='ct-code-b-yellow'>main()</span> method. <br>" 
							+ "<br> This type of variables are called <span class='ct-code-b-yellow'>global variables</span>, and they can be used"
							+ " anywhere in the program (including the function body).";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "mainFunc":
			$("#globalVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the <span class='ct-code-b-yellow'>main()</span> method, in which the call to the function"
							+ " <span class='ct-code-b-yellow'>addition()</span> is made.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "funcDef":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the definition of the function <span class='ct-code-b-yellow'>addition(int x, int y)</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "localVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "We have declared two integer variables <span class='ct-code-b-yellow'>a</span> and"
							+ " <span class='ct-code-b-yellow'>b</span> of type <span class='ct-code-b-yellow'>int</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "printf1":
		case "printf2":
		case "endMain":
			$("#localVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._direction == "forward") {
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				} else {
					introjs.previousStep();
				}
			});
			break;
			
		case "consoleId":
			$("#consoleId").removeClass("opacity00");
			$("#localVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				if(introjs._currentStep == 10) {
					if (introjs._direction == "forward") {
						var text = "Enter two numbers : <span id='inputVal'></span>";
						typing("#runEditor1", text, function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 1000);
						});
					} else {
						$('#runEditor1').empty();
						introjs.previousStep();
					}
					
				} else if(introjs._currentStep == 12) {
					$('#inputVal, #aVal, #bVal, #xVal, #yVal').empty();
					var text1 = "<span id='num1' contenteditable = 'true' maxlength='1' spellcheck='false'"
								+ " class='text-center span-box output-scanf-line'></span>";
					typing("#inputVal", text1, function() {
						$('.introjs-tooltip').removeClass('hide');
						var text2 = "Please enter two numbers seperated by a <span class='ct-code-b-yellow'>space</span>."
						typing(".introjs-tooltiptext", text2, function() {
							$("#num1").focus();
							$(".output-console-body").click(function() {
								$("#num1").focus();
							});
							
							arr = [];
							$('.output-scanf-line').on("keydown", function(e) {
								if (arr.length == 2 || arr.length == 0) {
									if (e.keyCode == 32) {
										e.preventDefault();
									}
								}//delete(46), backspace(8), tab(9) esc(27), space bar(32), home(35), end(36), leftarrow(37), rightarrow(39)
								if ($.inArray(e.keyCode, [46, 8, 9, 27, 32, 35, 36, 37, 39]) !== -1) {
									return;
								}
								//numbers
								if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
									e.preventDefault();
								}
							});
							
							$('.output-scanf-line').on("keyup", function(e) {
								$('.length-error-text').remove();
								if ($(this).text() == "") {
									$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" 
																	+ "Please enter 2 numbers and separate each with space.</span>");
								}
								var givenText = $('#num1').text().trim();
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
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								}
								
								$.each(arr, function(idx, val) {
									if (val.length > 2) {
										$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>"
																		+ "Please limit the number length to 2.</span>");
										$(".introjs-nextbutton, .introjs-prevbutton").hide();
									}
								});
							});
						});
					});
				} else {
					var text = "sum = <b style='color: yellow'>" + sum + "</b>";
					typing("#runEditor2", text, function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
				}
				
			});
			break;
			
		case "scanf":
			$("#localVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() { 
				if (introjs._direction == "forward") {
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				} else {
					introjs.previousStep();
				}
				
			});
			break;
			
		case "sumRes":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here we are adding the values of <b class='ct-code-b-yellow'>x</b> and <b class='ct-code-b-yellow'>y</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "sumDec":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here, <span class='ct-code-b-yellow'>sum</span> being a <span class='ct-code-b-yellow'>global variable</span>"
							+ " is accessible throughout the program."; 
				typing(".introjs-tooltiptext", text, function() {
					$("#globalVar").addClass("blinking-white");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "addVar":
			$("#localVar, #globalVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "The result of adding <b>x</b> and <b>y</b> is stored in <span class='ct-code-b-yellow'>sum</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "functionCall":
			$("[contenteditable=true]").attr("contenteditable", false);
			$("#localVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "A call to the function <span class='ct-code-b-yellow'>addition(a, b)</span> is made by sending" 
							+ " <b class='ct-code-b-yellow'>a</b> and <b class='ct-code-b-yellow'>b</b>(actual arguments) as parameters.<br><br>This <span class='ct-code-b-yellow'>a</span>"
							+ " and <span class='ct-code-b-yellow'>b</span> are called <span class='ct-code-b-yellow'>actual arguments</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "formalArgs":
			$("#localVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#actArg1").effect( "transfer", { to: $("#formArg1"), className: "ui-effects-transfer" }, 1000 , function() {
					$("#actArg2").effect( "transfer", { to: $("#formArg2"), className: "ui-effects-transfer" }, 1000 , function() {
						$('.introjs-tooltip').removeClass('hide');
						var text = "Here the two integer variables <span class='ct-code-b-yellow'>x</span> and <span class='ct-code-b-yellow'>y</span>"
									+ " are called  <span class='ct-code-b-yellow'>formal arguments</span>. <br><br>The variables" 
									+ " <span class='ct-code-b-yellow'>x</span> and <span class='ct-code-b-yellow'>y</span> will store the values"
									+ " of <span class='ct-code-b-yellow'>a</span> and <span class='ct-code-b-yellow'>b</span>.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
				});
			
			});
			break;
			
		case "endFunction":
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "When the end of the function is reached, the control is transferred to the <span class='ct-code-b-yellow'>main()"
							+ "</span> method and the next statement after the function call starts executing.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "restart":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				$("#restart").click(function() {
					location.reload();
				});
			});
			break;
		}
	});
	introjs.start();
	
	/*var a = document.querySelectorAll("#mainBox *");
	
	for (var i = 0; i < a.length; i++) {
		a[i].addEventListener('DOMAttrModified', function(e) {
			if (e.attrName === 'style' || e.attrName === "class") {
				console.log('prevValue: ' + e.prevValue);
				console.log('newValue: ' + e.newValue);
			}
		});
	}*/
	
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": '1',
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}