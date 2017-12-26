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
	$("#restart").click(function() {
		location.reload(); 
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
				animateStep : 'firstStepDeclaration',
			},{
				element : "#variableDefinition", 
				intro : "",
				position:"right"
			},{
				element : "#readDataFunction", 
				intro : "",
				position:"right",
				animateStep : 'explanation',
			},{
				element : "#mainDeclaration", 
				intro : "",
				position:"right"
			},{
				element : "#empId",
				intro : "",
				position:"right",
			},{
				element : "#readDataId",
				intro : "",
				position:"right",
			},{
				element : "#readDataFunction", 
				intro : "",
				position:"right",
				animateStep : 'implementation',
			},{
				element : "#readDataFunCout",
				intro : "",
				position:"right",
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
				animateStep : 'secondStepDeclaration',
			},{
				element : "#mainCout",
				intro : "",
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
				animateStep : "displayFunction"
			},{
				element : "#outputDiv", 
				intro : "",
				tooltipClass:"hide",
				position : 'left',
				animateStep : 'coutDisplayFunctionStep',
			},{
				element : "#restart",
				intro : "Click to restart",
				position:"right",
			}
			
			]});
		
		/*intro.onbeforechange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
				
				case "emp3":
				case "emp2":
				case "emp1":
					if (elementId == "emp1") {
						$("#animationDiv1").addClass("opacity00");
					} else if (elementId == "emp2") {
						$("#animationDiv2").addClass("opacity00");
					} else if (elementId == "emp3") {
						$("#animationDiv3").addClass("opacity00");
						$("#output").empty();
					}
				break;
				
				case "animationDiv1":
				case "animationDiv2":
				case "animationDiv3":
						if (elementId == "animationDiv1") {
							$("#" + elementId).addClass("opacity00");
						} else if (elementId == "animationDiv2") {
							$("#" + elementId).addClass("opacity00");
						} else if (elementId == "animationDiv3") {
							$("#" + elementId).addClass("opacity00");
							$("#output").empty();
						}
				break;
				case "outputDiv":
					if (intro._currentStep == 13) {
						$("#enterName1, #editname1").empty();
						$("#editname1").attr("contenteditable", true);
					}
					if (intro._currentStep == 17) {
						$("#enterAge1, #editage1").empty();
						$("#editage1").attr("contenteditable", true);
					}
					
					if (intro._currentStep == 21) {
						$("#enterSal1, #editsal1").empty();
						$("#editsal1").attr("contenteditable", true);
					}
					
					if (intro._currentStep == 27) {
						$("#enterName2, #editname2").empty();
						$("#editname2").attr("contenteditable", true);
					}
					if (intro._currentStep == 31) {
						$("#enterAge2, #editage2").empty();
						$("#editage2").attr("contenteditable", true);
					}
					
					if (intro._currentStep == 35) {
						$("#enterSal2, #editsal2").empty();
						$("#editsal2").attr("contenteditable", true);
					}
					
					if (intro._currentStep == 41) {
						$("#enterName3, #editname3").empty();
						$("#editname3").attr("contenteditable", true);
					}
					if (intro._currentStep == 45) {
						$("#enterAge3, #editage3").empty();
						$("#editage3").attr("contenteditable", true);
					}
					
					if (intro._currentStep == 49) {
						$("#enterSal3, #editsal3").empty();
						$("#editsal3").attr("contenteditable", true);
					}
					
					
					
				break;
			}
			
		});*/
		
		
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
							var text = "Let us consider an example.";
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
									$("#readDataFunction").after("<br>\t<span id='displayDataFunction' class='opacity00'>void displayData() {<br>"+
										"\t\tcout << \"name : \" << name << endl;<br>"+
										"\t\tcout << \"age : \" << age << endl;<br>"+
										"\t\tcout << \"salary : \" << salary << endl;<br>"+
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
							var text = "We declare a user defined datatype <span class='ct-code-b-yellow'>employee_record</span>" 
								+ ", which contains one <span class='ct-code-b-yellow'>character</span> member <span class='ct-code-b-yellow'>name</span>"
								+ ", two <span class='ct-code-b-yellow'>integer</span> members <span class='ct-code-b-yellow'>age</span>"
								+ " and <span class='ct-code-b-yellow'>sal</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
						break;
					case 'secondStepDeclaration':
						$(".introjs-helperLayer ").one('transitionend', function() {
							var text = "Now make variables as private and readData member function as private."
							typing(".introjs-tooltiptext", text, function() {
								$("#structLine").after("<span id='privateIdSpan'><br>private:</span>");
								$("#floatData").after("<span id='publicIdSpan'><br>public:</span>");
								intro.refresh();
								$("#privateIdSpan, #publicIdSpan").effect( "highlight", {color:"burlywood"}, 1000, function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
						break;
				}
				break;	
			case "variableDefinition":
				$(".introjs-helperLayer ").one('transitionend', function() {
					/*var text = "We have defined three struct variables <span class='ct-code-b-yellow'>emp1</span>, "
								+ " <span class='ct-code-b-yellow'>emp2</span>, <span class='ct-code-b-yellow'>emp3</span> of type"
								+ " <span class='ct-code-b-yellow'>employee_record</span>.";*/
					var text = " ";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				
			break;
			case "readDataFunction":
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'explanation':
						$(".introjs-helperLayer ").one('transitionend', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
						break;
					case 'implementation':
						$(".introjs-helperLayer ").one('transitionend', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
						break;
				}
				break;
			case "mainDeclaration":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
				break;
			case "empId":
				$(".introjs-helperLayer ").one('transitionend', function() {
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
				break;
			case "readDataId":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
				break;
			case "readDataFunction":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
				break;
			case "readDataFunCout":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#outputDiv").removeClass("opacity00");
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
				break;
			case "readDataFunCin":
				$(".introjs-helperLayer ").one('transitionend', function() {
					setTimeToIntroNextStep();
				});
				break;
			case "coutId1":
				$("#inputVal").after("<br><span id='outputText1' class='opacity00'><span id='outPutNamekey'>name : </span><span id='outPutNameValue'></span>");
				$(".introjs-helperLayer ").one('transitionend', function() {
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
				break;
			case "coutId2":
				$("#outputText1").after("<br><span id='outputText2' class='opacity00'><span id='outPutAgekey'>age : </span><span id='outPutAgeValue'></span>");
				$(".introjs-helperLayer ").one('transitionend', function() {
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
				break;
			case "coutId3":
				$("#outputText2").after("<br><span id='outputText3' class='opacity00'><span id='outPutSalkey'>salary : </span><span id='outPutSalValue'></span>");
				$(".introjs-helperLayer ").one('transitionend', function() {
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
				break;
			case 'mainCout':
				$(".introjs-helperLayer ").one('transitionend', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
				break;
			case "outputDiv":
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'readCoutAction':
						$(".introjs-helperLayer ").one('transitionend', function() {
							$("#output").append("<span id='outputSpan1'>Enter name, age and salary details : </span>");
							setTimeToIntroNextStep();
						});
						break;
					case 'enterCinAction':
						$("#outputSpan1").after("<br><span id='inputVal' class='input-all'><input id='secondInput' maxlength='20' class='input-all'/></span>");
						$(".introjs-helperLayer ").one('transitionend', function() {
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
										    $(".introjs-nextbutton").show();
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
						$("#output").text("");
						$(".introjs-helperLayer ").one('transitionend', function() {
							$("#output").append("<img src='../images/error-dot.png'>");
							setTimeToIntroNextStep();
						});
						break;
					case 'coutDisplayFunctionStep':
						$("#output").text("");
						$(".introjs-helperLayer ").one('transitionend', function() {
							$("#output").append("name : " + globalString +
									"<br>age : " + $("#box1").text() +
									"<br>salary : " + $("#box2").text());
						});
						break;
				}
				break;
			case 'animationDiv':
				var text = $('#secondInput').val();
				var i = 0;
				$('#inputVal').empty();
				
				var intIndexOfMatch = text.indexOf("  ");
				while (intIndexOfMatch != -1) {
					console.log(text);
				  text = text.replace( "  ", " " )
				  intIndexOfMatch = text.indexOf( "  " );
				}
				$.each(text.split(' '), function (index, val) {
					$("#inputVal").append("<span id='val"+i+"'>" + val + "</span><span id='space"+i+"'>&nbsp;</span>");
					console.log($("#val" + i).text());
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
					fromEffectWithTweenMax("#val0",".char-class", function() {
						intro.refresh();
						$(".char-class").removeClass("opacity00");
						$("#box1").text($("#val1").text());
						fromEffectWithTweenMax("#val1","#box1", function() {
							$("#box2").text($("#val2").text());	
							fromEffectWithTweenMax("#val2","#box2", function() {
								setTimeToIntroNextStep();
							});
						});
					});
				});
				break;
			
			case "restart":
				$('.introjs-tooltip').css({'min-width' : '110px'});
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#restart").removeClass("opacity00");
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
	}, 800);
}
function setTimeToIntroPreviousStep() {
	setTimeout(function() {
		intro.previousStep();
	}, 800);
}
