var intro;
var typingInterval = 1;
var iVal = 1;
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
				position:"right"
			},{
				element : "#declaration",
				intro : "",
				position:"right"
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
				animateStep : 'enterCinAction',
			},{
				element : "#animationDiv", 
				intro : "",
				tooltipClass:"hide",
			},{
				element : "#coutId1",
				intro : "",
				position:"right",
			},{
				element : "#coutId2",
				intro : "",
				position:"right",
			},{
				element : "#coutId3",
				intro : "",
				position:"right",
			}
			
			
			
			,{
				element : "#animationDiv1",
				intro : "",
				tooltipClass: "hide",
			},{
				element : "#emp2",
				intro : "",
				position:"right",
			},{
				element : "#animationDiv2",
				intro : "",
				tooltipClass: 'hide',
			},{
				element : "#emp3",
				intro : "",
				position:"right",
			},{
				element : "#animationDiv3",
				intro : "",
				tooltipClass: 'hide',
			},{
				element : "#firstRecord",
				intro : "",
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#name1",
				intro : "",
				tooltipClass: "hide",
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#readName1",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#s1name",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#age1",
				intro : "",
				tooltipClass:"hide",
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#readAge1",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#s1age",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#salary1",
				intro : "",
				tooltipClass:"hide",
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#readSalary1",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#s1sal",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#secondRecord",
				intro : "",
				tooltipClass:"hide",
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#name2",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#readName2",
				tooltipClass:"hide"
			},{
				element : "#s2name",
				tooltipClass:"hide"
			},{
				element : "#age2",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#readAge2",
				tooltipClass:"hide"
			},{
				element : "#s2age",
				tooltipClass:"hide"
			},{
				element : "#salary2",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#readSalary2",
				tooltipClass:"hide"
			},{
				element : "#s2sal",
				tooltipClass:"hide"
			},{
				element : "#thirdRecord",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass: "hide",
			},{
				element : "#name3",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#readName3",
				tooltipClass:"hide"
			},{
				element : "#s3name",
				tooltipClass:"hide"
			},{
				element : "#age3",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#readAge3",
				tooltipClass:"hide"
			},{
				element : "#s3age",
				tooltipClass:"hide"
			},{
				element : "#salary3",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#readSalary3",
				tooltipClass:"hide"
			},{
				element : "#s3sal",
				tooltipClass:"hide"
			},{
				element : "#titles",
				intro : "",
				tooltipClass:"hide",
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#printRecord1",
				intro : "",
				position: 'top'
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#printRecord2",
				intro : "",
				position: 'top'
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#printRecord3",
				intro : "",
				position: 'top'
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
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
					/*	TweenMax.to($("#li3"), 0.5, {opacity: 1, onComplete: function() {
							TweenMax.to($("#li4"), 0.5, {opacity: 1, onComplete: function() {*/
								$("#li2").append('&emsp; <a class="introjs-button user-btn">Next &#8594;</a>');
								$(".user-btn").click(function() {
									$(this).remove();
									intro.nextStep();
								});
							/*}});
						}});*/
					}});
				}});
			break;
			case "codeDiv":
				$("#codeDiv").removeClass("opacity00");
				$(".introjs-helperLayer ").one('transitionend', function() {
				//	$("#outputDiv").removeClass("opacity00");
					var text = "Let us consider an example.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;	
			case "declaration":
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
						$("#outPutNameValue").text($("#val0").text());
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "coutId2":
				$("#outputText1").after("<br><span id='outputText2' class='opacity00'><span id='outPutAgekey'>age : </span><span id='outPutAgeValue'></span>");
				$(".introjs-helperLayer ").one('transitionend', function() {
					transferEffectFunction("#coutId2", "#outputText2", function() {
						$("#outPutAgeValue").text($("#val1").text());
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "coutId3":
				$("#outputText2").after("<br><span id='outputText3' class='opacity00'><span id='outPutSalkey'>salary : </span><span id='outPutSalValue'></span>");
				$(".introjs-helperLayer ").one('transitionend', function() {
					transferEffectFunction("#coutId3", "#outputText3", function() {
						$("#outPutSalValue").text($("#val2").text());
						$('.introjs-nextbutton, .introjs-prevbutton').show();
						$("#outputDiv").addClass("z-index");
					});
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
			case "emp3":
			case "emp2":
			case "emp1":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "All the member variables of <span class='ct-code-b-yellow'>"+ elementId +"</span>"
								+" will be allocated memory as per their datatype.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;	
			case "animationDiv1":
			case "animationDiv2":
			case "animationDiv3":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#" + elementId).removeClass("opacity00");
					var t;
					if (elementId == "animationDiv1") {
						t = 1;
					} else if (elementId == "animationDiv2") {
						t = 2;
					} else {
						t = 3;
						$("#output").append('<span id="stmt1"></span><br>');
					}
					$('.introjs-tooltip').removeClass("hide");
					var text = "The members of  <span class='ct-code-b-yellow'>emp" + t + " </span> can be accessed by using"
								+ "  <span class='ct-code-b-yellow'>dot(.)</span> operator<br>i.e., <span class='ct-code-b-yellow'>emp" + t 
								+ ".name</span>, <span class='ct-code-b-yellow'>emp" + t + ".age</span> and"
								+ " <span class='ct-code-b-yellow'>emp" + t + ".sal</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "outputDiv2":
				$(".introjs-helperLayer ").one('transitionend', function() {
					scrollAtOutput();
					$('.introjs-nextbutton').hide();
					 if (intro._currentStep == 11) {
						 if (intro._direction == "forward") {
							$("#stmt1").append("Enter details of first record name, age and salary ");
							var text = "Enter first record values.";
							typing(".introjs-tooltiptext", text, function() {
								setTimeToIntroNextStep();
							});
						 } else {
							 $("#stmt1").empty();
							 setTimeToIntroPreviousStep();
						 }
						
					} else if (intro._currentStep == 13) {
						$('.introjs-tooltip').removeClass("hide");
						$("#enterName1").append("Enter name:");
						$("#editname1").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter the <b class='ct-code-b-yellow'>name</b> for the first record."
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 17) {
						$('.introjs-tooltip').removeClass("hide");
						$("#enterAge1").append("Enter age:");
						$("#editage1").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter the <b class='ct-code-b-yellow'>age</b> for the first record."
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 21) {
						$('.introjs-tooltip').removeClass("hide");
						$("#enterSal1").append("Enter salary:");
						$("#editsal1").effect("highlight",{color: 'yellow'}, 500).focus();
						var text="Enter <b class='ct-code-b-yellow'>salary</b> for the first record."
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 25) {
						 if (intro._direction == "forward") {
							iVal++;
							 $("#stmt2").append("Enter details of second record name, age and salary ");
								setTimeToIntroNextStep();
						 } else {
							 iVal--;
							 $("#stmt2").empty();
							 setTimeToIntroPreviousStep();
						 }
					}	
					 
					 //second Record
					 else if (intro._currentStep == 27) {
						 $('.introjs-tooltip').removeClass("hide");
						$("#enterName2").append("Enter name:");
						$("#editname2").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter the <b class='ct-code-b-yellow'>name</b> for the second record."
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 31) {
						$('.introjs-tooltip').removeClass("hide");
						$("#enterAge2").append("Enter age:");
						$("#editage2").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter the <b class='ct-code-b-yellow'>age</b> for the second record."
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 35) {
						$('.introjs-tooltip').removeClass("hide");
						$("#enterSal2").append("Enter salary:");
						$("#editsal2").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter <b class='ct-code-b-yellow'>salary</b> for the second record."
						typing(".introjs-tooltiptext", text);
					}
				 //third Record
					else if (intro._currentStep == 39) {
						 if (intro._direction == "forward") {
							iVal++;
							$("#stmt3").append("Enter details of third record name, age and salary ");
							setTimeToIntroNextStep();
						 } else {
							 iVal--;
							 $("#stmt3").empty();
							 setTimeToIntroPreviousStep();
						 }
					
					} else if (intro._currentStep == 41) {
						$('.introjs-tooltip').removeClass("hide");
						$("#enterName3").append("Enter name:");
						$("#editname3").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter the <b class='ct-code-b-yellow'>name</b> for the third record."
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 45) {
						$('.introjs-tooltip').removeClass("hide");
						$("#enterAge3").append("Enter age:");
						$("#editage3").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter the <b class='ct-code-b-yellow'>age</b> for the third record."
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 49) {
						$('.introjs-tooltip').removeClass("hide");
						$("#enterSal3").append("Enter salary:");
						$("#editsal3").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter <b class='ct-code-b-yellow'>salary</b> for the third record."
						typing(".introjs-tooltiptext", text);
					}
				 //printing
				 else if (intro._currentStep == 53) {
					 if (intro._direction == "forward") {
						 $("#printtitlesAge").append("AGE");	
							$("#printtitlesName").append("NAME");
							$("#printtitlesSalary").append("SALARY");			
								setTimeToIntroNextStep();
					 } else {
						 $('#printtitlesAge, #printtitlesName, #printtitlesSalary').empty();
						 setTimeToIntroPreviousStep();
					 }
					
					} else if (intro._currentStep == 55) {
						 if (intro._direction == "forward") {
							 $("#printingStmt1").append($("#s1age").text());
								$("#printingStmt2").append($("#s1name").text());
								$("#printingStmt3").append($("#s1sal").text());
								setTimeToIntroNextStep();
						 } else {
							 $('#printingStmt1, #printingStmt2, #printingStmt3').empty();
							 setTimeToIntroPreviousStep();
						 }
					} else if (intro._currentStep == 57) {
						 if (intro._direction == "forward") {
							 $("#printingStmt4").append($("#s2age").text());
								$("#printingStmt5").append($("#s2name").text());
								$("#printingStmt6").append($("#s2sal").text());
								setTimeToIntroNextStep();
						 } else {
							 $('#printingStmt4, #printingStmt5, #printingStmt6').empty();
							 setTimeToIntroPreviousStep();
						 }
						
					} else if (intro._currentStep == 59) {
						 if (intro._direction == "forward") {
							 $("#printingStmt7").append($("#s3age").text());
								$("#printingStmt8").append($("#s3name").text());
								$("#printingStmt9").append($("#s3sal").text());
								setTimeToIntroNextStep();
						 } else {
							 $('#printingStm7, #printingStmt8, #printingStmt9').empty();
							 setTimeToIntroPreviousStep();
						 }
					}
				}); 
					 
			break;
			case "firstRecord":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement prints the string in the console.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "salary" + iVal:
			case "age" + iVal:
			case "name" + iVal:
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._direction  == "forward") {
						if (elementId == "name" + iVal) {
							editableContentAppend("enterName" + iVal, "editname" + iVal, "20", function() {
								characters();
							});
						} else {
							if (elementId == "age" + iVal) {
								editableContentAppend("enterAge" + iVal, "editage" + iVal, 2, function() {
									numbers("2");
								});
							} else {
								editableContentAppend("enterSal" + iVal, "editsal" + iVal, "5", function() {
									numbers("5");
								});
							}
						}
						setTimeToIntroNextStep();
					} else {
						$("[contenteditable]:last").parent().remove();
						setTimeToIntroPreviousStep();
					}
				});
			break;

			case "readName1":
				getAnimation("#editname1", "#s1name", "true", "name", "emp1");
				break;
			case "readName2":
				getAnimation("#editname2", "#s2name", "false");
				break;
			case "readName3":
				getAnimation("#editname3", "#s3name", "false");
				break;
			case "s3name":
			case "s2name":
			case "s1name":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._direction == "forward") {
						$("#" + elementId).removeClass("opacity00");
						setTimeToIntroNextStep();
					} else {
						$("#" + elementId).empty();
						setTimeToIntroPreviousStep();
					}
				});
			break;
			case "readAge1":
				getAnimation("#editage1", "#s1age", "true", "age", "emp1");
			break;
			case "readAge2":
				getAnimation("#editage2", "#s2age", "false");
			break;
			case "readAge3":
				getAnimation("#editage3", "#s3age", "false");
			break;
			case "s3age":
			case "s2age":
			case "s1age":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._direction == "forward") {
						$("#" + elementId).removeClass("opacity00");
						setTimeToIntroNextStep();
					} else {
						$("#" + elementId).empty();
						setTimeToIntroPreviousStep();
					}
				});
			break;
			case "readSalary1":
				$('.introjs-tooltop').removeClass("hide");
				getAnimation("#editsal1", "#s1sal", "true", "salary", "emp1");
			break;
			case "readSalary2":
				getAnimation("#editsal2", "#s2sal", "false");
			break;
			case "readSalary3":
				getAnimation("#editsal3", "#s3sal", "false");
			break;
			case "s3sal":
			case "s2sal":
			case "s1sal":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._direction == "forward") {
						$("#" + elementId).removeClass("opacity00");
						setTimeToIntroNextStep();
					} else {
						if (elementId == "s3sal") {
							iVal = 3;
							$('#finalResult').remove();
						}
						$("#" + elementId).empty();
						setTimeToIntroPreviousStep();
					}
					
				});
			break;
			case "secondRecord":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._direction == "forward") {
						$("#output").append('<span><span id="stmt2"></span><br></span>');
						setTimeToIntroNextStep();
					} else {
						$("#stmt2").parent().remove();
						setTimeToIntroPreviousStep();
					}
				});
			break;
			case "thirdRecord":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._direction == "forward") {
						$("#output").append('<span><span id="stmt3"></span><br></span>');
						setTimeToIntroNextStep();
					} else {
						$("#stmt3").parent().remove();
						setTimeToIntroPreviousStep();
					}
				});
			break;
			case "titles":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._direction == "forward") {
						iVal = 1;
						$("#output").append('<table id="finalResult"><tr><th class="output-table-border" id="printtitlesAge"></th>' 
								+ '<th class="output-table-border" id="printtitlesName"></th>' 
								+ '<th class="output-table-border" id="printtitlesSalary"></th>' 
								+ '</tr><tr>' 
								+ '<td class="output-table-border" id="printingStmt1"></td>'
								+ '<td class="output-table-border" id="printingStmt2"></td>'
								+ '<td class="output-table-border" id="printingStmt3"></td>'
							+ '</tr>'
							+ '<tr>'
								+ '<td class="output-table-border" id="printingStmt4"></td>'
								+ '<td class="output-table-border" id="printingStmt5"></td>'
								+ '<td class="output-table-border" id="printingStmt6"></td>'
							+ '</tr>'

							+ '<tr>'
								+ '<td class="output-table-border" id="printingStmt7"></td>'
								+ '<td class="output-table-border" id="printingStmt8"></td>'
								+ '<td class="output-table-border" id="printingStmt9"></td>'
							+ '</tr>'
							+ '</table>');
						setTimeToIntroNextStep();
					} else {
						setTimeToIntroPreviousStep();
					}
					
				});
			break;
			case "printRecord3":
			case "printRecord2":
			case "printRecord1":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "Let us access the members of <span class='ct-code-b-yellow'>emp" + iVal + "</span> using the dot operator and print them"
								+ " to the console.";
					typing('.introjs-tooltiptext', text, function() {
						iVal++;
						$('.introjs-nextbutton, .introjs-prevbutton').show();
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

function getAnimation(id1, id2, flag, val, sType) {
	$(".introjs-helperLayer ").one('transitionend', function() {
		$(id1).attr("contenteditable", false);
		$(id2).addClass("opacity00");
		$(id2).text($(id1).text());
		if (flag == 'true') {
			$('.introjs-tooltip').removeClass("hide");
			var text = "This statement gets the <span class='ct-code-b-yellow'>" + val + "</span> of <span class='ct-code-b-yellow'>" 
						+ sType + "</span> from the standard input device (keyboard).";
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
		} else {
			if (intro._direction == "forward") {
				setTimeToIntroNextStep();
			} else {
				setTimeToIntroPreviousStep();
			}
		}
	});
}
function editableContentAppend(id1, id2, val, callBackFunction) {
	$("#output").append('<span><span id='+ id1 + '></span><span class="padding3" contenteditable="true" id=' + id2
			+ ' maxlength=' + val + ' spellcheck="false"></span><br></span>');
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}
function characters() {
	$("[contenteditable=true]").on("keydown keyup", function(e) {
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength");
		if (($(this).text().length) >= max) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 20 characters,"
						+ " because the array variable size is name[20].</div>");
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			} else {
			e.preventDefault();
			}
		}
		if ($("[contenteditable=true]").text().length == 0) {
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please enter string.</div>");
		} else {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		} 
		
		if (((e.which >= 60 && e.which <= 90))) {
			return true;
		} else {
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			}  else {
				e.preventDefault();
			}
		}
		
	});
}


function numbers(val) {
	$("[contenteditable=true]").on('keydown', function(e) {
		$('.ct-code-b-red').remove();
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (e.keyCode == 109 || e.keyCode == 189 || e.keyCode == 173) {
			if ($(this).text().length < 1) {	
				return;
			} else {
				e.preventDefault();
			}
		}
		if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) || (e.keyCode == 13 || e.keyCode == 9)){
			e.preventDefault();
		}
		if ($(this).text().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="ct-code-b-red">Please restrict the maximum length to '+ val +' digits only.</div>')
			e.preventDefault();
		}
	});
	$("[contenteditable=true]").on('keyup', function(e) {
		var max = $(this).attr('maxlength');
		if ($(this).text().length != max ) {
			$('.ct-code-b-red').remove();
		}
		if ($(this).text().length != 0) {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		} else {
			if ($('ct-code-b-red').length == 0) {
				$('.introjs-tooltiptext').append('<div class="ct-code-b-red">Please enter any integer.</div>');
			}
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		}
	});
}

