var intro;
var typingInterval = 1;
var iVal = 1;
var globalString;
var processingOfStructureWithDotReady = function() {
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {  //tab pressed
	        objEvent.preventDefault(); // stops its action
	    }
	});
	$("[contenteditable=true]").parent().parent().click(function() {
		$("[contenteditable=true]").focus();
	});
	$("#restartBtn").click(function() {
		location.reload(); 
	});
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});

		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [ {
				element : "#informationDiv",
				tooltipClass:"hide"
			},{
				element : "#codeDiv",
				intro : "",
				position:"right",
				animateStep : "introduction"
			},{
				element : "#declaration",
				intro : "",
				position:"right",
				tooltipClass:"hide",
				animateStep : 'firstStepDeclaration',
			},{
				element : "#mainDeclaration", 
				intro : "",
				position:"right"
			},{
				element : "#empId",
				intro : "",
				position:"right",
				tooltipClass:"hide",
			},{
				element : "#readDataId",
				intro : "",
				position:"right",
			},{
				element : "#readDataFunction", 
				intro : "",
				position:"right",
				tooltipClass:"hide"
			},{
				element : "#readDataFunCout",
				intro : "",
				position:"right",
				tooltipClass:"hide"
			},{
				element : "#outputDiv", 
				intro : "",
				tooltipClass:"hide",
				animateStep : 'readCoutAction',
			},{
				element : "#readDataFunCin",
				intro : "",
				tooltipClass : "hide"
			},{
				element : "#outputDiv", 
				intro : "",
				tooltipClass:"hide",
				position : 'left',
				animateStep : 'enterCinAction',
			},{
				element : "#animationDiv", 
				intro : "",
				tooltipClass:"hide",
			},{
				element : "#mainCout",
				intro : "",
				tooltipClass:"hide",
				animateStep : 'coutAsPublic'
			},{
				element : "#coutId1",
				intro : "",
				position:"right",
				tooltipClass:"hide",
			},{
				element : "#coutId2",
				intro : "",
				position:"right",
				tooltipClass:"hide",
			},{
				element : "#coutId3",
				intro : "",
				position:"right",
				tooltipClass:"hide",
			},{
				element : "#declaration",
				intro : "",
				position:"right",
				tooltipClass:"hide",
				animateStep : 'secondStepDeclaration',
			},{
				element : "#mainCout",
				intro : "",
				animateStep : 'coutAsError'
			},{
				element : "#outputDiv", 
				intro : "",
				tooltipClass:"hide",
				position : 'left',
				animateStep : 'coutErrorStep',
			},{
				element : "#codeDiv",
				intro : "",
				position:"right",
				tooltipClass:"hide",
				animateStep : "displayFunction"
			},{
				element : "#outputDiv", 
				intro : "",
				tooltipClass:"hide",
				position : 'left',
				animateStep : 'coutDisplayFunctionStep',
			},{
				element : "#button",
				intro : "",
				position:"right",
			}
			
			]});
		
		intro.onbeforechange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
				
				case "mainDeclaration":
				case "empId":
					$("#animationDiv").removeClass("z-index").addClass("opacity00");
					$("#borderBox, #bodyBox1, #bodyBox2").addClass("opacity00");	
					break;
				case "outputDiv":
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case 'enterCinAction':
							var string = $("#val0").text();
							$("#charAtTd" + string.length).empty();
							$(".char-class, #box1, #box2").empty();
							$(".small-box").removeClass("char-class");
							break;
					}
					break;
				case "declaration":
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case 'secondStepDeclaration':
							$("#privateIdSpan").remove();
							$("#publicIdSpan").remove();
							intro.refresh();
							break;
					}
					break;
				case 'mainCout':
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
					case 'coutAsPublic':
						$("#privateIdSpan").remove();
						$("#publicIdSpan").remove();
						intro.refresh();
						break;
					case 'coutAsError':
					//	$("#output").empty();
						$("#outputSpan1, #inputVal, #outputText1, #outputText2, #outputText3").show();
						$("#errorImageId").remove();
						break;
					}
					break;
					
			}
			
		});
		
		
		intro.onafterchange(function(targetElement) {
			
			$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
			
			
			// ********************** start ************back button logic
			
			if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
				intro._introItems[intro._currentStep]["animation"] = "repeat";
			}
			
			if (intro._introItems[intro._currentStep]["isCompleted"]) {
				if (intro._currentStep != 1) {
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
			case "informationDiv":
				TweenMax.to($("#li1"), 0.5, {opacity: 1, onComplete: function() {
					TweenMax.to($("#li2"), 0.5, {opacity: 1, onComplete: function() {
						$("#li2").append('&emsp; <a class="introjs-button user-btn">Next &#8594;</a>');
						$(".user-btn").click(function() {
							$(this).remove();
							intro.nextStep();
						});
					}});
				}});
			break;
			case "codeDiv":
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'introduction':
						$("#codeDiv").removeClass("opacity00");
						$(".introjs-helperLayer ").one('transitionend', function() {
						//	$("#outputDiv").removeClass("opacity00");
							var text = "Let us consider a <span class='ct-code-b-yellow'>c++</span> program.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
						break;
					case 'displayFunction':
						$(".introjs-helperLayer ").one('transitionend', function() {
							$("#mainCout").effect( "highlight", {color:"#0fea85"}, 1000, function() {
								$("#mainCout").remove();
								$("#readDataId").after("<br><span id='displayDataId' class='opacity00'>\temp.displayData();</span>");
								TweenMax.to($("#displayDataId"), 1, {opacity: 1, onComplete: function() {
									$("#readDataFunction").after("<br>\t<span id='displayDataFunction' class='opacity00'><g>void</g> displayData() {<br>"+
										"\t\tcout << <pink>\"name : \"</pink> << name << endl;<br>"+
										"\t\tcout << <pink>\"age : \"</pink> << age << endl;<br>"+
										"\t\tcout << <pink>\"salary : \"</pink> << salary << endl;<br>"+
										"\t}</span>");
									intro.refresh();
									TweenMax.to($("#displayDataFunction"), 1, {opacity: 1, onComplete: function() {
										$("#displayDataId").addClass("blinking").one('animationend', function() {
											$("#displayDataId").removeClass("blinking").off();
											$("#displayDataFunction").addClass("blinking").one('animationend', function() {
												$("#displayDataFunction").removeClass("blinking").off();
												setTimeToIntroNextStep();
											});
										});
									}});
								}});
							});
						});
						break;
				}
				break;
			case "declaration":
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'firstStepDeclaration':
						$(".introjs-helperLayer ").one('transitionend', function() {
							var text = "<ul><li>Here a structure named <span class='ct-code-b-yellow'>employee</span> is declared with"
								+ " three data members <span class='ct-code-b-yellow'>name</span>, <span class='ct-code-b-yellow'>age</span>"
								+ ", <span class='ct-code-b-yellow'>salary</span> and one member function <span class='ct-code-b-yellow'>readData()</span>."
								+ "</li><li>By default in s structure all the members are <span class='ct-code-b-yellow'>public</span>.</li></ul>";
							$('.introjs-tooltip').removeClass('hide');
							typing(".introjs-tooltiptext", text, function() {
								$("#variableDefinition").effect( "highlight", {color:"burlywood"}, 1500, function() {
									$("#readDataFunction").effect( "highlight", {color:"burlywood"}, 1500, function() {
										$('.introjs-nextbutton, .introjs-prevbutton').show();
									});
								});
							});
						});
						break;
					case 'secondStepDeclaration':
						$("#animationDiv").removeClass("z-index");
						$(".introjs-helperLayer ").one('transitionend', function() {
							var text = "Now make data members as <span class='ct-code-b-yellow'>private</span> and member function as "+
							"<span class='ct-code-b-yellow'>public</span>.";
							$('.introjs-tooltip').removeClass('hide');
							typing(".introjs-tooltiptext", text, function() {
								$("#structLine").after("<span id='privateIdSpan'><br><m>private</m>:</span>");
								$("#floatData").after("<span id='publicIdSpan'><br><m>public</m>:</span>");
								intro.refresh();
								$("#privateIdSpan, #publicIdSpan").effect( "highlight", {color:"burlywood"}, 2000, function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
						break;
				}
				break;	
			case "mainDeclaration":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow'>main()</span> is the starting point of execution of any program in "+
						"<span class='ct-code-b-yellow'>c++</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "empId":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "A structure variable <span class='ct-code-b-yellow'>emp</span> is defined, memory will be allocated to "+
						"<span class='ct-code-b-yellow'>emp</span>.";
					$('.introjs-tooltip').removeClass('hide');
					typing(".introjs-tooltiptext", text, function() {
						$("#animationDiv").addClass("animated zoomIn z-index").removeClass("opacity00").one('animationend', function() {
							$("#animationDiv").removeClass("animated zoomIn").off();
							$("#charData").addClass("z-index");
							transferEffectFunction("#charData", "#borderBox", function() {
								$("#charData").removeClass("z-index");
								$("#intData").addClass("z-index");
								transferEffectFunction("#intData", "#bodyBox1", function() {
									$("#intData").removeClass("z-index");
									$("#floatData").addClass("z-index");
									transferEffectFunction("#floatData", "#bodyBox2", function() {
										$("#floatData").removeClass("z-index");
										$('.introjs-nextbutton, .introjs-prevbutton').show();
										
									});
								});
							});
						});
					});
				});
				break;
			case "readDataId":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "The member function <span class='ct-code-b-yellow'>readData()</span> is invoked by "+
						"<span class='ct-code-b-yellow'>emp</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "readDataFunction":
				if (intro._direction == "forward") {
					$(".introjs-helperLayer ").one('transitionend', function() {
						setTimeToIntroNextStep();
					});
				} else {
					setTimeout(function () {
						intro.previousStep();
					}, 1000);
				}
				break;
			case "readDataFunCout":
				if (intro._direction == "forward") {
					$(".introjs-helperLayer ").one('transitionend', function() {
						$("#outputDiv").removeClass("opacity00");
						setTimeToIntroNextStep();
					});
				} else {
					setTimeout(function () {
						$("#outputDiv").addClass("opacity00");
						intro.previousStep();
					}, 1000);
				}
				break;
			case "readDataFunCin":
				if (intro._direction == "forward") {
					$(".introjs-helperLayer ").one('transitionend', function() {
						setTimeToIntroNextStep();
					});
				} else {
					setTimeout(function () {
						intro.previousStep();
					}, 1000);
				}
				break;
			case "coutId1":
				if (intro._direction == "forward") {
					$(".introjs-helperLayer ").one('transitionend', function() {
						$("#inputVal").after("<div id='outputText1' class='opacity00'><span id='outPutNamekey'>name : </span><span id='outPutNameValue'></div>");
						$("#outputDiv").addClass("z-index");
						transferEffectFunction("#coutId1", "#outputText1", function() {
							$("#coutEmpName").addClass("blinking").one('animationend', function() {
								$("#coutEmpName").removeClass("blinking").off();
								$("#empObjectSpan").addClass("blinking").one('animationend', function() {
									$("#empObjectSpan").removeClass("blinking").off();
									$("#s1Span").addClass("blinking").one('animationend', function() {
										$("#s1Span").removeClass("blinking").off();
										$(".char-class").addClass("blinking").one('animationend', function() {
											$(".char-class").removeClass("blinking").off();
											$("#outPutNameValue").text($("#val0").text());
											setTimeToIntroNextStep();
										});
									});
								});
							});
						});
					});
				} else {
					setTimeout(function () {
						$("#outputText1").remove();
						intro.previousStep();
					}, 1000);
				}
				break;
			case "coutId2":
				if (intro._direction == "forward") {
					$(".introjs-helperLayer ").one('transitionend', function() {
						$("#outputText1").after("<div id='outputText2' class='opacity00'><span id='outPutAgekey'>age : </span><span id='outPutAgeValue'></div>");
						transferEffectFunction("#coutId2", "#outputText2", function() {
							$("#coutEmpAge").addClass("blinking").one('animationend', function() {
								$("#coutEmpAge").removeClass("blinking").off();
								$("#empObjectSpan").addClass("blinking").one('animationend', function() {
									$("#empObjectSpan").removeClass("blinking").off();
									$("#panelAge").addClass("blinking").one('animationend', function() {
										$("#panelAge").removeClass("blinking").off();
										$("#box1").addClass("blinking").one('animationend', function() {
										$("#box1").removeClass("blinking").off();
										$("#outPutAgeValue").text($("#val1").text());
											setTimeToIntroNextStep();
										});
									});
								});
							});
						});
					});
				} else {
					setTimeout(function () {
						$("#outputText2").remove();
						intro.previousStep();
					}, 1000);
				}
				break;
			case "coutId3":
				if (intro._direction == "forward") {
					$(".introjs-helperLayer ").one('transitionend', function() {
						$("#outputText2").after("<div id='outputText3' class='opacity00'><span id='outPutSalkey'>salary : </span><span id='outPutSalValue'></div>");
						transferEffectFunction("#coutId3", "#outputText3", function() {
							$("#coutEmpSalary").addClass("blinking").one('animationend', function() {
								$("#coutEmpSalary").removeClass("blinking").off();
								$("#empObjectSpan").addClass("blinking").one('animationend', function() {
									$("#empObjectSpan").removeClass("blinking").off();
									$("#panelSalary").addClass("blinking").one('animationend', function() {
										$("#panelSalary").removeClass("blinking").off();
										$("#box2").addClass("blinking").one('animationend', function() {
											$("#box2").removeClass("blinking").off();
											$("#outPutSalValue").text($("#val2").text());
											$("#outputDiv").removeClass("z-index");	
											setTimeToIntroNextStep();
										});
									});
								});
							});
						});
					});
				} else {
					setTimeout(function () {
						$("#outputText3").remove();
						intro.previousStep();
					}, 1000);
				}
				break;
			case 'mainCout':
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case 'coutAsPublic':
					$(".introjs-helperLayer ").one('transitionend', function() {
						var text = "<span class='ct-code-b-yellow'>name</span>, <span class='ct-code-b-yellow'>age</span> and "+
							"<span class='ct-code-b-yellow'>salary</span> are public data members and they can be accessed outside "+
							"of the member function using structure variable <span class='ct-code-b-yellow'>emp</span>."
						$('.introjs-tooltip').removeClass("hide");
						typing(".introjs-tooltiptext", text, function() {
							$("#coutEmpName").effect( "highlight", {color:"coral"}, 1000, function() {
								$("#coutEmpAge").effect( "highlight", {color:"coral"}, 1000, function() {
									$("#coutEmpSalary").effect( "highlight", {color:"coral"}, 1000, function() {
										$('.introjs-nextbutton, .introjs-prevbutton').show();
										$("#animationDiv").addClass("z-index");
									});
								});
							});
						});
					});
					break;
				case 'coutAsError':
					$(".introjs-helperLayer ").one('transitionend', function() {
						var text = "Here <span class='ct-code-b-yellow'>name</span>, <span class='ct-code-b-yellow'>age</span> and "+
							"<span class='ct-code-b-yellow'>salary</span> are declared as <span class='ct-code-b-yellow'>private</span> "+
							"data members, so they can not be accessed outside of the structure.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				}
				break;
			case "outputDiv":
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'readCoutAction':
						if (intro._direction == "forward") {	
							$(".introjs-helperLayer ").one('transitionend', function() {
								$("#output").append("<span id='outputSpan1'>Enter name, age and salary details : </span>");
								setTimeToIntroNextStep();
							});
						} else {
							setTimeout(function () {
								intro.previousStep();
								$("#output").text("");
							}, 1000);
						}
						break;
					case 'enterCinAction':
						$(".introjs-helperLayer ").one('transitionend', function() {
							$("#outputSpan1").after("<div id='inputVal' class='input-all'><input id='secondInput' maxlength='20' class='input-all'/></div>");
							$('.introjs-tooltip').removeClass('hide');
							text ="Enter a string, an integer and a float value each separated by a"
								+" <b class='ct-code-b-yellow'>space</b>.<br/>For example,"
								+" if your string value is <b class='ct-code-b-yellow'>ramana</b>,"
								+" integer value is <b class='ct-code-b-yellow'>24</b>,  and the float value is" 
								+" <b class='ct-code-b-yellow'>25000.0</b> respectively enter"
								+" them as <b class='ct-code-b-yellow'>ramana 24 25000.0</b>";
							typing(".introjs-tooltiptext", text, function() {
								arr = [];
								$("#secondInput").addClass("blinking-orange").removeAttr('disabled');
								$("#secondInput").focus();
								$("#outputDiv").click(function() {
									$("#secondInput").focus();	
								}) 
								$('#secondInput').on("keydown", function(e) {
									if (arr.length == 3 || arr.length == 0) {
										if (e.keyCode == 32) {
											e.preventDefault();
										}
									}
								});
									
								$('#secondInput').on("keyup", function(e) {
									$('.length-error-text').remove();
									if ($(this).val() == "") {
										$(".introjs-nextbutton").hide();
										$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
											"Please enter an integer, string and a float value each separated by a space.</span>");
									} 
									var givenText = $(this).val();
									var splittedText = givenText.split(" ");
									arr = [];
									
									$.each(splittedText, function(idx, val) {
										if (val != '') {
											arr.push(val);
										}
									});
									if (arr.length == 3) {
										var a0 = !($.isNumeric(arr[0]));
										var a1 = $.isNumeric(arr[1]);
										var a2 = $.isNumeric(arr[2]);
										var dot = arr[2].indexOf(".") !== -1;
										var dot1 = arr[1].indexOf(".") == -1;
										if (a0 && a1 && a2 && dot && dot1) {
											$('.introjs-nextbutton, .introjs-prevbutton').show();
										  } else {
										    $(".introjs-nextbutton").hide();
										    $('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'> "
													+"<br/> Please follow the above format.</span>");
										  }
									} else {
										$(".introjs-nextbutton").hide();
									}
								});
							});
						});
						break;
					case 'coutErrorStep':
					//	$("#output").text("");
						$("#outputSpan1, #inputVal, #outputText1, #outputText2, #outputText3").hide();
						$(".introjs-helperLayer ").one('transitionend', function() {
							$('.introjs-tooltip').removeClass('hide');
							var text = "So the output will give error.";
							typing(".introjs-tooltiptext", text, function() {
								$("#output").append("<div id='errorImageId'><img src='../images/error-dot.png'></div>");
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
						break;
					case 'coutDisplayFunctionStep':
						$("#output").text("");
						$(".introjs-helperLayer ").one('transitionend', function() {
							$("#output").append("name : " + globalString +
									"<br>age : " + $("#box1").text() +
									"<br>salary : " + $("#box2").text());
							setTimeToIntroNextStep();
						});
						break;
				}
				break;
			case 'animationDiv':
				if (intro._direction == "forward") {
					var text = $('#secondInput').val();
					var i = 0;
					$('#inputVal').empty();
					
					var intIndexOfMatch = text.indexOf("  ");
					while (intIndexOfMatch != -1) {
					//	console.log(text);
					  text = text.replace( "  ", " " )
					  intIndexOfMatch = text.indexOf( "  " );
					}
					$.each(text.split(' '), function (index, val) {
						$("#inputVal").append("<span id='val"+i+"'>" + val + "</span><span id='space"+i+"'>&nbsp;</span>");
					//	console.log($("#val" + i).text());
							i++ 
						});
					var dotPos = $('#val2').text().indexOf(".");
					if (dotPos == (($('#val2').text().length) - 1)) {
						$('#val2').text($('#val2').text()+"0");
					} else if (dotPos == 0){
						$('#val2').text("0"+$('#val2').text());
					}
					var string = $("#val0").text();
					globalString = $("#val0").text();
					for (var i = 0; i < string.length; i++) {
						$("#charAtTd" + i).append(string.charAt(i)).addClass("char-class opacity00");
					}
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#empIdValue").text($("#val0").text());
						$(".char-class").removeClass("opacity00");
						fromEffectWithTweenMax("#val0",".char-class", function() {
							intro.refresh();
							$("#charAtTd" + string.length).append("\\0");
							zoomingEffect($("#charAtTd" + string.length), function() {
								$("#charAtTd" + string.length).off();
								$("#box1").text($("#val1").text());
								fromEffectWithTweenMax("#val1","#box1", function() {
									$("#box2").text($("#val2").text());	
									fromEffectWithTweenMax("#val2","#box2", function() {
										setTimeToIntroNextStep();
									});
								});
							});
						});
					});
				} else {
					setTimeout(function () {
						intro.previousStep();
						$("#inputVal").remove();
					}, 1000);
				}
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
		intro.start();
		$('.introjs-bullets').hide();
}

function typing(typingId, typingContent,callBackFunction) {
	$('.introjs-nextbutton').hide();
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
			intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector1).addClass("z-index").effect( "highlight",{color: 'yellow'}, 800);
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector1).removeClass("z-index");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function transferEffectFunction(selector1, selector2, callBackFunction) {
	$(selector1).effect("highlight", {color:"#06e6c0"}, 1000);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function scrollAtOutput() {
	var container = $('.output-console-body');
	scrollTo = $('.output-console-body').find("span").last();
	container.animate({
	   scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
	});
}

function setTimeToIntroNextStep() {
	setTimeout(function() {
		intro.nextStep();
	}, 1000);
}
function setTimeToIntroPreviousStep() {
	setTimeout(function() {
		intro.previousStep();
	}, 800);
}

function zoomingEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").effect("highlight", {color:"#00FF00"}, 1000).addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
