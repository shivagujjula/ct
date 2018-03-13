var arr = [];
var count = 0;
var flag = true;
var cascadingOfInsertionAndExtractionOperatorsReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restartBtn").click(function(){
		$("#enterName").val("");
		$("#printLineInConsole1, #printLineInConsole2").text("");
		location.reload();
	});
	
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :"#infoDiv",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element :"#preTableDiv",
			intro : "",
			//tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#class",
			intro : "",
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element : '#friendFunction',
			intro : '',
			tooltipClass : 'hide',
			position : "right"
		}, {
			element : '#friendFunction1',
			intro : '',
			tooltipClass : 'hide',
			position : "right"
		}, {
			element : '#main',
			intro : '',
			tooltipClass : 'hide',
			position : "right"
		}, {
			element : '#sInit',
			intro : "",
			tooltipClass : 'hide',
			position : "right"
		},{
			element : "#s1",
			intro : "",
			position:"right",
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'obj',
			tooltipClass : 'hide'
		},{
			element : "#s2",
			intro : "",
			position:"right",
		}, {
			element : '#addressDiv1',
			intro : "",
			animateStep : 'obj1',
			tooltipClass : 'hide'
		}, {
			element : '#eSd',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuDet',
			tooltipClass : 'hide'
		}, {
			element :"#sEnter",
			intro : "",
			animateStep : 'sEnter',
			tooltipClass : "hide",
			position : "right"
		}, {
			element : '#frndFunCin',
			intro : "",
			tooltipClass : 'hide',
			position : "right"
		}, {
			element : '#eSN',
			intro : '',
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterStuName',
			tooltipClass : 'hide'
		}, {
			element :"#sName",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterName',
			tooltipClass : 'hide',
			position : 'left',
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'animationDiv',
			tooltipClass : 'hide'
		}, {
			element : '#eNAM',
			intro : '',
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterNAM',
			tooltipClass : 'hide'
		}, {
			element :"#sNAM",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole1',
			tooltipClass : 'hide',
			position : 'left',
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'animationDiv1',
			position : 'left',
			tooltipClass : 'hide'
		}, {
			element : '#return',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#sEnter",
			intro : "",
			animateStep : 'return',
			tooltipClass : "hide",
		}, {
			element : '#eSN',
			intro : '',
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterStuName1',
			tooltipClass : 'hide'
		}, {
			element :"#sName",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterName1',
			tooltipClass : 'hide',
			position : 'left',
		}, {
			element : '#addressDiv1',
			intro : "",
			animateStep : 'animationDiv',
			tooltipClass : 'hide'
		}, {
			element : '#eNAM',
			intro : '',
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterNAM1',
			tooltipClass : 'hide'
		}, {
			element :"#sNAM",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole2',
			tooltipClass : 'hide',
			position : 'left',
		}, {
			element : '#addressDiv1',
			intro : "",
			animateStep : 'animationDiv1',
			position : "left",
			tooltipClass : 'hide'
		}, {
			element : '#return',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#sEnter",
			intro : "",
			animateStep : 'return',
			tooltipClass : "hide",
		}, {
			element : '#tSd',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'theStuDet',
			tooltipClass : 'hide'
		}, {
			element :"#sOut",
			intro : "",
			animateStep : 'sOut',
			tooltipClass : "hide",
			position : "right"
		}, {
			element : '#frndFunCout',
			intro : '',
			tooltipClass : 'hide',
			position : "right"
		}, {
			element :"#sN",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuName',
			tooltipClass : 'hide'
		}, {
			element : '#sName1',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole3',
			tooltipClass : 'hide'
		}, {
			element : '#nAM',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuNAM',
			tooltipClass : 'hide'
		}, {
			element : '#sNAM1',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole4',
			tooltipClass : 'hide'
		}, {
			element : '#return1',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#sOut",
			intro : "",
			animateStep : 'return1',
			tooltipClass : "hide",
		}, {
			element :"#sN",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuName1',
			tooltipClass : 'hide'
		}, {
			element : '#sName1',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole5',
			tooltipClass : 'hide'
		}, {
			element : '#nAM',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuNAM1',
			tooltipClass : 'hide'
		}, {
			element : '#sNAM1',
			intro : '',
			tooltipClass : 'hide'
	
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole6',
			tooltipClass : 'hide'
		}, {
			element : '#return1',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#sOut",
			intro : "",
			animateStep : 'return1',
			tooltipClass : "hide",
		}, {
			element : '#end',
			intro : '',
			position : "right"
		}, {
			element :"#button",
			intro : "",
			position : 'right',
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case 'preTableDiv':
				$("#class").css("opacity", 0);
				break;
				
			case 'class':
				$("#class, #char, #charName, #init, #intNum, #intMarks,#public, #friendFunction, #friendFunction1").fadeTo("slow" , 0);
				break;
				
			case 'friendFunction':
				//$("#friendFunction").addClass("opacity00");
				
				break;
			case 'friendFunction1':
				//$("#friendFunction1").addClass("opacity00");
				$("#main").addClass("opacity00");
				break;
				
			case "main":
				$("#main").addClass("opacity00");
				$("#sInit").addClass("opacity00");
				break;
				
			case 'sInit':
				$("#sInit").addClass("opacity00");
				$("#addressDiv, #addressDiv1").addClass("opacity00");
				break;
				
			case "s1":
				$("#addressDiv").addClass("opacity00");
				//$("#sInit").addClass("opacity00");
				break;
				
			case "s2":
				$("#addressDiv1").addClass("opacity00");
				break;
				
			case 'eSd':
				$("#eSd").addClass("opacity00");
				$("#stuDet").addClass("opacity00");
				$("#sEnter").addClass("opacity00");
				$("#consoleId").addClass("opacity00");
				break;
			
			case 'sEnter':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'sEnter':
					$("#sEnter").addClass("opacity00");
					$("#frndFunCin").addClass("opacity00");
					$('.introjs-tooltip').removeAttr("style");
					break;
				
				case "return" :
					if (introjs._currentStep == 26) {
					
					}  else if(introjs._currentStep == 38) {
						
					}
					break;
					
				}
				break;
				
			case 'frndFunCin':
				$("#frndFunCin" ).addClass("opacity00");
				$('.introjs-tooltip').removeAttr("style");
				$("#eSN").addClass("opacity00");
				break;
				
			case 'eSN':
				if (introjs._currentStep == 15) {
					$("#eSN").addClass("opacity00");
					$("#enterStuName").addClass("opacity00");
				}  else if(introjs._currentStep == 25) {
					$("#enterStuName1").addClass("opacity00");   
				}
				break;
				
			case 'sName':
				if (introjs._currentStep == 17) {
					$("#sName").addClass("opacity00");
					$("#enterName").val("");
				}  else if(introjs._currentStep == 29) {
					$("#enterName1").val("");
				}
				break;
				
			case 'eNAM':
				if (introjs._currentStep == 20) {
					$("#enterNAM").addClass("opacity00");
					$("#eNAM").addClass("opacity00");
				}  else if(introjs._currentStep == 32) {
					$("#enterNAM1").addClass("opacity00");
				}
				break;
				
			case 'sNAM':
				if (introjs._currentStep == 22) {
					$("#printLineInConsole1").text("");
					$("#sNAM").addClass("opacity00");
				}  else if(introjs._currentStep == 34) {
					$("#printLineInConsole2").text("");
				}
				break;
				
			case "return" :
				if (introjs._currentStep == 25) {
					$("#return").addClass("opacity00");
				}  else if(introjs._currentStep == 37) {
					
				}
				break;
				
			case 'sOut':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'sOut':
					$("#sOut").addClass("opacity00");
					$("#frndFunCout").addClass("opacity00");
					$('.introjs-tooltip').removeAttr("style");
					break;
				
				case "return1" :
					
					break;
				}
				break;
				
			case 'frndFunCout':
				$("#frndFunCout" ).addClass("opacity00");
				$('.introjs-tooltip').removeAttr("style");
				$("#sN").addClass("opacity00");
				break;
	
			case "addressDiv" :
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case "obj" :
					$("#addressDiv").addClass("opacity00");
					$("#tableId, #noBox, #marksBox").hide();
					break;
					
				case "animationDiv" :
					$(".td-css").text("");
					$("#eNAM").addClass("opacity00");
					break;
				case "animationDiv1" :
					$("#marksVal, #noVal").text("");
					$("#return").addClass("opacity00");
					break;
				}
				break;
				
			case "addressDiv1" :
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case "obj1" :
					$("#addressDiv1").addClass("opacity00");
					$("#tableId1, #noBox1, #marksBox1").hide();
					$("#eSd").addClass("opacity00");
					break;
					
				case "animationDiv" :
					$("#tableRowId1 td:eq(0)"). nextAll().text("");
					break;
					
				case "animationDiv1" :
					$("#marksVal1, #noVal1").text("");
					//$("#return").addClass("opacity00");
					break;
				}
				break;
			
			case 'tSd':
				$("#tSd").addClass("opacity00");
				break;
				
			case 'sN':
				if (introjs._currentStep == 39) {
					$("#stuName").addClass("opacity00");
					$("#sN").addClass("opacity00");
				}  else if(introjs._currentStep == 47) {
					$("#stuName1").addClass("opacity00");
				}
				break;
				
			case 'sName1':
				if (introjs._currentStep == 41) {
					$("#printLineInConsole3").text("");
					$("#sName1").addClass("opacity00");
				}  else if(introjs._currentStep == 49) {
					$("#printLineInConsole5").addClass("opacity00");
				}
				break;
			case 'nAM':
				if (introjs._currentStep == 43) {
					$("#stuNAM").addClass("opacity00");
					$("#nAM").addClass("opacity00");
				}  else if(introjs._currentStep == 51) {
					$("#stuNAM1").addClass("opacity00");
				}
				break;
				
			case 'sNAM1':
				if (introjs._currentStep == 45) {
					$("#printLineInConsole4").text("");
					$("#sNAM1").addClass("opacity00");
				}  else if(introjs._currentStep == 53) {
					$("#printLineInConsole6").addClass("opacity00");
				}
				break;
				
			case "return1" :
				if (introjs._currentStep == 51) {
					$("#return1").addClass("opacity00");
					
				}  else if(introjs._currentStep == 61) {
					
				}
				
				break;
				
			case 'consoleId':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case "stuDet" :
					$("#consoleId").addClass("opacity00");
					$("#sEnter").addClass("opacity00");
					$('.introjs-tooltip').removeAttr("style");
					break;
					
				case 'enterName':
					$(".td-css").text("");
					$("#enterName").val("");
					break;
					
				case "enterStuName" :
					 $("#sName").addClass("opacity00");
					break;
				
				case 'enterNAM':
					$("#sNAM").addClass("opacity00");
					break;
					
				case 'enterName1':
					$("#tableRowId1 td:eq(0)"). nextAll().text("");
					$("#enterName1").val("");
					break;
					
				case 'theStuDet':
					$('.introjs-tooltip').removeAttr("style");
					$("#sOut").addClass("opacity00");
					break;
					
				case 'stuName':
					$("#sName1").addClass("opacity00");
					break;
					
				case 'stuName1':
					
					break;
					
				case 'stuNAM':
					$("#sNAM1").addClass("opacity00");
					break;
					
				case 'stuNAM1':
					
					break;
					
				case 'printLineInConsole1':
					$("#marksVal, #noVal, #printLineInConsole1").text("");
					break;
					
				case 'printLineInConsole2':
					$("#marksVal1, #noVal1, #printLineInConsole2").text("");
					break;
					
				case 'printLineInConsole3':
					$("#printLineInConsole3").text("");
					$("#nAM").addClass("opacity00");
					break;
					
				case 'printLineInConsole4':
					$("#printLineInConsole4, #printLineInConsole41").text("");
					break;
					
				case 'printLineInConsole5':
					$("#printLineInConsole5").text("");
					break;
					
				case 'printLineInConsole6':
					$("#printLineInConsole6, #printLineInConsole61").text("");
					//$("#return1").addClass("opacity00");
					break;
				}
				break;
			}
	});
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
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
			case 'infoDiv':
				$("#infoDiv").removeClass("opacity00");
				/*$("#infoDiv").css({height: $("#infoDiv").outerHeight()});*/
				$("#list").fadeTo(300, 1, function() {
					$("#list1").fadeTo(300, 1, function() {
						$("#list2").fadeTo(300, 1, function() {
							$("#list11").fadeTo(300, 1, function() {
								$("#list12").fadeTo(300, 1, function() {
									$("#list13").fadeTo(300, 1, function() {
										$("#list14").fadeTo(300, 1, function() {
											$('#nextButton').removeClass("opacity00");
												$('.user-btn').click(function() {
												$('#nextButton').remove();
												setTimeout(function () {
													introjs.nextStep();
												}, 300);
											});
										});
									});
								});
							});
						});
					});
				});
				break;
			case 'preTableDiv':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					$("#preTableDiv").removeClass("opacity00");
					typing('.introjs-tooltiptext', "Let us understand how <span class='ct-code-b-yellow'>insertion(<<)</span>"+
							" and <span class='ct-code-b-yellow'>extraction(>>)</span> operators are cascaded.", function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;
			case 'class':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					var text = "This is a class <span class='ct-code-b-yellow'>Student</span>, which " +
								"consists of a private members <span class='ct-code-b-yellow'>name</span>, " +
								"<span class='ct-code-b-yellow'>no</span> and <span class='ct-code-b-yellow'>" +
								"marks</span> and different friend functions in public section.";
					typing(".introjs-tooltiptext",text, function() {
						$("#class").fadeTo("slow" , 1, function() {
							$("#char").fadeTo("slow" , 1, function() {
								$("#charName").fadeTo("slow" , 1, function() {
									$("#init").fadeTo("slow" , 1, function() {
										$("#intNum").fadeTo("slow" , 1, function() {
											$("#intMarks").fadeTo("slow" , 1, function() {
												$("#public").fadeTo("slow" , 1, function() {
													$("#friendFunction").fadeTo("slow" , 1, function() {
														$("#friendFunction1").fadeTo("slow" , 1, function() {
															$(".introjs-nextbutton, .introjs-prevbutton").show();
														});
													});
												});
											});
										});	
									});
								});
							});
						});
					});
				});
				break;
			case 'main':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					var text = 	"<span class='ct-code-b-yellow'>main()</span> is the starting point of execution.";
					typing(".introjs-tooltiptext", text, function() {
						$("#main").removeClass("opacity00");
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'sInit':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#sInit").removeClass("opacity00");
					$('.introjs-tooltip').removeClass("hide");
					var text = 	"<ul><li>Here, <span class='ct-code-b-yellow'>s1, s2 </span>" +
								" are the objects of a class <span class='ct-code-b-yellow'>Student</span>.</li>" +
								"<li>When an object is created, the memory is allocated to that objects.</li></ul>";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case "s2":
			case "s1":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#" + elementId).removeClass("opacity00");
					var text = "All the member variables of <span class='ct-code-b-yellow'>" + elementId
								+ "</span> will be allocated memory as per their datatype.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			break;	
			case 'sEnter':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'sEnter':
					$('.introjs-tooltip').css("min-width", "250px");
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#sEnter").removeClass("opacity00");
						$('.introjs-tooltip').removeClass("hide");
						var text = 	"<ul><li>In this statement first call is made to " +
									"<span class='ct-code-b-yellow position'> cin >> s1</span><br>i.e " +
									"<span class='ct-code-b-yellow position'>operator >> (cin, s1)</span></li>" +
									"<li>After completion of that call the <span class='ct-code-b-yellow'> " +
									"friend function</span> returns the  <span class='ct-code-b-yellow'> " +
									"reference</span> of input i.e <span class='ct-code-b-yellow'> cin</span></li>" +
									"<li>So the next call is made as <span class='ct-code-b-yellow position'> cin >> s2</span>" +
									"<br>i.e <span class='ct-code-b-yellow position'>operator >> (cin, s2)</span></li>";
						typing(".introjs-tooltiptext",text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
					break;
				
				case "return" :
					$('.introjs-helperLayer ').one('transitionend', function() {
						if (introjs._currentStep == 26) {
							$(".introjs-tooltiptext").append('<span id="cinText" class="ct-code-b-yellow opacity00">cin</span>'+
									'<span id="cinS2Text" class="ct-code-b-yellow opacity00"> >> s2</span>');
							$('.introjs-tooltip').removeClass("hide");
							fromEffectWithTweenMax("#cin", "#cinText", function() {
								fromEffectWithTweenMax("#cinS2", "#cinS2Text", function() {
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							});
						}  else if(introjs._currentStep == 38) {
							if (introjs._direction == "backward") {
								$("#tSd").addClass("opacity00");
								setTimeout(function () {
									introjs.previousStep();
								}, 1000);
							} else {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							}
						}
						
					});
					break;
				}
				break;
				
			case 'friendFunction':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#friendFunction").removeClass("opacity00");
					$('.introjs-tooltip').removeClass("hide");
					var text = "The <span class='ct-code-b-yellow position'> operator function << </span> "+
							   "is written as <span class='ct-code-b-yellow'>friend function</span> " +
							   "in class <span class='ct-code-b-yellow'>Student</span>."; 
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'friendFunction1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#friendFunction1").removeClass("opacity00");
					$('.introjs-tooltip').removeClass("hide");
					var text = "The <span class='ct-code-b-yellow position'> operator function >> </span> "+
							   "is written as <span class='ct-code-b-yellow'>friend function</span> " +
							   "in class <span class='ct-code-b-yellow'>Student</span>."; 
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'eSd':
			case 'eSN':
			case 'eNAM':
			case 'tSd':
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#" + elementId).removeClass("opacity00");
					$('.introjs-tooltip').removeClass("hide");
					var text = "This statement is used to print the string in the console.";
					typing(".introjs-tooltiptext",text, function() {
						//t++;
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'frndFunCin':
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#frndFunCin" ).removeClass("opacity00");
					$('.introjs-tooltip').removeClass("hide");
					var text = "<span class='ct-code-b-yellow'>cin</span> is referenced "+
							   "with <span class='ct-code-b-yellow'>&input</span> and " +
							   "<span class='ct-code-b-yellow'>s</span> is referenced with "+
							   "<span class='ct-code-b-yellow'>&s</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case "return" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#return").removeClass("opacity00");
					$('.introjs-tooltip').removeClass("hide");
					var text = "It returns the input.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'sName':
			case 'sNAM':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#" + elementId).removeClass("opacity00");
					$('.introjs-tooltip').removeClass("hide");
					var text = "This statement is used to extract input from keyboard.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			
			case 'sOut':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case "sOut" :
					$('.introjs-tooltip').css("min-width", "250px");
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#sOut" ).removeClass("opacity00");
						$('.introjs-tooltip').removeClass("hide");
						var text = "<ul><li>In this statement first call is made to " +
									"<span class='ct-code-b-yellow position'> cout << s1</span><br> i.e " +
									"<span class='ct-code-b-yellow position'>operator << (cout, s1)</span></li>" +
									"<li>After completion of that call the <span class='ct-code-b-yellow'> " +
									"friend function</span> returns the  <span class='ct-code-b-yellow'> " +
									"reference</span> of output <br> i.e <span class='ct-code-b-yellow'>cout</span></li>" +
									"<li>So the next call is made as <span class='ct-code-b-yellow position'> cout << s2</span>" +
									"<br>i.e <span class='ct-code-b-yellow position'>operator << (cout, s2)</span></li></ul>";
						typing(".introjs-tooltiptext",text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
					break;
				
				case "return1" :
					$('.introjs-helperLayer ').one('transitionend', function() {
						if (introjs._currentStep == 52) {
							$(".introjs-tooltiptext").append('<span id="coutText" class="ct-code-b-yellow opacity00">cout</span>'+
									'<span id="coutS2Text" class="ct-code-b-yellow opacity00"> << s2</span>');
							$('.introjs-tooltip').removeClass("hide");
							fromEffectWithTweenMax("#cout", "#coutText", function() {
								fromEffectWithTweenMax("#coutS2", "#coutS2Text", function() {
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							});
						}  else if(introjs._currentStep == 62) {
							if (introjs._direction == "backward") {
								setTimeout(function () {
									introjs.previousStep();
								}, 1000);
							} else {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							}
						}
					});
					break;
				}
				break;
			case 'frndFunCout':
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#frndFunCout" ).removeClass("opacity00");
					$('.introjs-tooltip').removeClass("hide");
					var text = "<span class='ct-code-b-yellow'>cout</span> is referenced with"+
							   " <span class='ct-code-b-yellow'>&output</span> and " +
							   " <span class='ct-code-b-yellow'>s</span> is referenced with"+
							   " <span class='ct-code-b-yellow'>&s</span>.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'sN':
			case 'nAM':
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#" + elementId).removeClass("opacity00");
					$('.introjs-tooltip').removeClass("hide");
					var text = "This statement is used to print the string in the console.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
				
			case 'sName1':
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#" + elementId).removeClass("opacity00");
					$('.introjs-tooltip').removeClass("hide");
					var text = "This statement is used to display the student name onto the console.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
				
			case 'sNAM1':
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#" + elementId).removeClass("opacity00");
					$('.introjs-tooltip').removeClass("hide");
					var text = "This statement is used to print the no and marks in the console.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
				
			case "return1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#return1").removeClass("opacity00");
					$('.introjs-tooltip').removeClass("hide");
					var text = "It returns the output.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
	
			case 'consoleId':
				$("#consoleId").removeClass("opacity00");
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case "stuDet" :
					stepProcess('#stuDet');
					break;
				case "enterStuName" :
					stepProcess('#enterStuName');
					break;
				case 'enterName':
					$("#enterName").val("").removeAttr("disabled");
					$('.introjs-helperLayer ').one('transitionend', function() {
						text = "Enter any name"; 
						$('.introjs-tooltip').removeClass("hide");
						typing('.introjs-tooltiptext', text, function() {
							$("#enterName").removeClass("opacity00").attr('contenteditable', true).addClass("blinking").focus();
							checking("#enterName");
						});
					});
					break;
				case 'enterNAM':
					$("#enterName").attr('contenteditable', false);
					stepProcess('#enterNAM');
					break;
				case 'printLineInConsole1':
					$("#printLineInConsole1").val("").removeAttr("disabled");
					$('.introjs-helperLayer ').one('transitionend', function() {
						$('.introjs-tooltip').removeClass("hide");
						var text = "Enter two numbers and seperate them with a <span class='ct-code-b-yellow'>space</span>. " 
								+ " <ul><li>For example, if your numbers are <span class='ct-code-b-yellow'>123</span> and " 
								+ " <span class='ct-code-b-yellow'>345</span> enter them as <span class='ct-code-b-yellow'>123 345</span></li></ul>";
						typing('.introjs-tooltiptext',text, function() {
							$("#printLineInConsole1").removeClass("opacity00").attr('contenteditable', true).addClass("blinking").focus();
							checking("#printLineInConsole1");
							charAtEnd("printLineInConsole1");
						});	
						
					});
					break;
				case "enterStuName1" :
					stepProcess('#enterStuName1');
					break;
				case 'enterName1':
					$("#enterName1").val("").removeAttr("disabled");
					$('.introjs-helperLayer ').one('transitionend', function() {
						text = "Enter any name"; 
						$('.introjs-tooltip').removeClass("hide");
						typing('.introjs-tooltiptext', text, function() {
							$("#enterName1").removeClass("opacity00").attr('contenteditable', true).addClass("blinking").focus();
							checking("#enterName1");
							//charAtEnd("#enterName1");
						});
					});
					break;
				case 'enterNAM1':
					$("#enterName").attr('contenteditable', false);
					stepProcess('#enterNAM1');
					break;
				case 'printLineInConsole2':
					$("#printLineInConsole2").text("").removeAttr("disabled");
					$('.introjs-helperLayer ').one('transitionend', function() {
						$('.introjs-tooltip').removeClass("hide");
						var text = "Enter two numbers and seperate them with a <span class='ct-code-b-yellow'>space</span>. " 
							+ " <ul><li>For example, if your numbers are <span class='ct-code-b-yellow'>123</span> and " 
							+ " <span class='ct-code-b-yellow'>345</span> enter them as <span class='ct-code-b-yellow'>123 345</span></li></ul>";
						$('.introjs-tooltip').removeClass("hide");
						$("#printLineInConsole2").removeClass("opacity00").attr('contenteditable', true).addClass("blinking").focus();
						typing('.introjs-tooltiptext',text, function() {
							checking("#printLineInConsole2");
							("#printLineInConsole2");
						});
				});
				break;
				case 'theStuDet':
					stepProcess('#theStuDet');
					break;
				case 'stuName':
					stepProcess('#stuName');
					break;
				case 'printLineInConsole3':
					$('.introjs-helperLayer ').one('transitionend', function() {
						if (introjs._direction == "backward") {
							$("#printLineInConsole3").addClass("opacity00");
							$("#printLineInConsole3").text("");
							setTimeout(function () {
								introjs.previousStep();
							}, 1000);
						} else {
							$("#printLineInConsole3").append($("#enterName").val().substr(0, 19)).addClass("opacity00");
							transferEffect("#name", "#printLineInConsole3", function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							});
						}
					});
					break;
				case 'stuNAM':
					stepProcess('#stuNAM');
					break;
				
				case 'printLineInConsole4':
					$('.introjs-helperLayer ').one('transitionend', function() {
						if (introjs._direction == "backward") {
							$("#printLineInConsole4, #printLineInConsole41").addClass("opacity00");
							setTimeout(function () {
								introjs.previousStep();
							}, 1000);
						} else {
							$("#printLineInConsole4").append($("#noVal").text()).addClass("opacity00");
							transferEffect("#num", "#printLineInConsole4", function() {
								$("#printLineInConsole41").append($("#marksVal").text()).addClass("opacity00");
								transferEffect("#mark", "#printLineInConsole41", function() {
									setTimeout(function () {
										introjs.nextStep();
									}, 1000);
								});
							});
						}
					});
					break;
				case 'stuName1':
					stepProcess('#stuName1');
					break;
				case 'printLineInConsole5':
					$('.introjs-helperLayer ').one('transitionend', function() {
						if (introjs._direction == "backward") {
							$("#printLineInConsole5").addClass("opacity00");
							setTimeout(function () {
								introjs.previousStep();
							}, 1000);
						} else {
							$("#printLineInConsole5").append($("#enterName1").val().substr(0, 19)).addClass("opacity00");
							transferEffect("#name", "#printLineInConsole5", function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							});
						}
					});
					break;
				case 'stuNAM1':
					stepProcess('#stuNAM1');
					break;
				
				case 'printLineInConsole6':
					$('.introjs-helperLayer ').one('transitionend', function() {
						if (introjs._direction == "backward") {
							$("#printLineInConsole6, #printLineInConsole61").addClass("opacity00");
							setTimeout(function () {
								introjs.previousStep();
							}, 1000);
						} else {
							$("#printLineInConsole6").append($("#noVal1").text()).addClass("opacity00");
							transferEffect("#num", "#printLineInConsole6", function() {
								$("#printLineInConsole61").append($("#marksVal1").text()).addClass("opacity00");
								transferEffect("#mark", "#printLineInConsole61", function() {
									setTimeout(function () {
										introjs.nextStep();
									}, 1000);
								});
							});
						}
					});
					break;
				}
				break;
			case "addressDiv" :
				$("#addressDiv").removeClass("opacity00");
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case "obj" :
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#s1").addClass("blinking-white");
						$("#obj").removeClass("opacity00");
						$("#addressAnimationDiv").removeClass("opacity00");
						$("#charName").addClass("blinking-white");
						$("#tableId").show();
						TweenMax.to("#tableId", 1, {opacity: 1, onComplete: function() {
							$("#charName").removeClass("blinking-white");
							$("#intNum").addClass("blinking-white");
							$("#noBox").show();
							TweenMax.to("#noBox", 1, {opacity: 1, onComplete: function() {
								$("#intNum").removeClass("blinking-white");
								$("#intMarks").addClass("blinking-white");
								$("#marksBox").show();
								TweenMax.to("#marksBox", 1, {opacity: 1, onComplete: function() {
									$("#intMarks, #s1").removeClass("blinking-white");
									$('.introjs-tooltip').removeClass("hide");
									var text = 	"The members of <span class='ct-code-b-yellow'>s1</span> can be accessed "
												+"by using <span class='ct-code-b-yellow'>dot(.)</span> operator.<br>i.e., " 
												+"<span class='ct-code-b-yellow'>s1.name</span>, "
												+"<span class='ct-code-b-yellow'>s1.no</span> and " 
												+"<span class='ct-code-b-yellow'>s1.marks</span>.";
									typing(".introjs-tooltiptext", text, function() {
										$(".introjs-nextbutton, .introjs-prevbutton").show();
									});
								}});
							}});
						}});
					});
					break;
				case "animationDiv" :
					$("#enterName").attr('disabled','disabled');
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#tableRowId").removeClass("opacity00");
						introjs.refresh();
						$(".td-css").addClass("ct-code-b-green");
						var result = $("#enterName").val();
						for(var i = 0; i <= result.length; i++) {
							if (result.length >= 0 && result.length < 20) {
								if (i == result.length) {
									$("table tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
								} else {
									$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
								}
							}  else {
								if (i == 19) {
									$("table tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
									break;
								} else {
									$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
								}
							} 
						}
						TweenMax.to(".td-css", 1, {opacity: 1, onComplete: function() {
							$('.introjs-tooltip').removeClass('hide');
							typing(".introjs-tooltiptext", "The given string is stored in the array and delimiter " +
									"<span class='ct-code-b-yellow'>\\0</span> (or) <span class='ct-code-b-yellow'>\\n</span> " +
									"is placed at the end of the string by the system.", function() {
								$(".introjs-nextbutton, .introjs-prevbutton").show();
							});
						}});
						
					});
					break;
				case "animationDiv1" :
					$("#printLineInConsole1").attr('disabled','disabled');
					$('.introjs-helperLayer ').one('transitionend', function() {
						valTransNAM();
						//$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
					break;
				}
				break;
			case "addressDiv1" :
				$("#addressDiv1").removeClass("opacity00");
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case "obj1" :
					$("#s2").addClass("blinking-white");
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#obj1").removeClass("opacity00");
						$("#addressAnimationDiv1").removeClass("opacity00");
						$("#charName").addClass("blinking-white");
						$("#tableId1").show();
						TweenMax.to("#tableId1", 1, {opacity: 1, onComplete: function() {
							$("#charName").removeClass("blinking-white");
							$("#intNum").addClass("blinking-white");
							$("#noBox1").show();
							TweenMax.to("#noBox1", 1, {opacity: 1, onComplete: function() {
								$("#intNum").removeClass("blinking-white");
								$("#intMarks").addClass("blinking-white");
								$("#marksBox1").show();
								TweenMax.to("#marksBox1", 1, {opacity: 1, onComplete: function() {
									$("#intMarks, #s2").removeClass("blinking-white");
									$('.introjs-tooltip').removeClass("hide");
									var text = "The members of <span class='ct-code-b-yellow'>s2</span> can be accessed "
												+ "by using <span class='ct-code-b-yellow'>dot(.)</span> operator.<br>i.e., "
												+ "<span class='ct-code-b-yellow'>s2.name</span>, " 
												+"<span class='ct-code-b-yellow'>s2.no</span> "
												+"and <span class='ct-code-b-yellow'>s2.marks</span>.";
									typing(".introjs-tooltiptext", text, function() {
										$(".introjs-nextbutton, .introjs-prevbutton").show();
									});
								}});
							}});
						}});
					});
					break;
				case "animationDiv" :
					$("#enterName1").attr('disabled','disabled');
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#tableRowId1").removeClass("opacity00");
						introjs.refresh();
						$(".td-css").addClass("ct-code-b-green");
						var result = $("#enterName1").val();
						for(var i = 0; i <= result.length; i++) {
							if (result.length >= 0 && result.length < 20) {
								if (i == result.length) {
									$("#tableId1 tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
								} else {
									$("#tableId1 tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
								}
							}  else {
								if (i == 19) {eree
									$("#tableId1 tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
									break;
								} else {
									$("#tableId1 tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
								}
							} 
						}
						TweenMax.to(".td-css", 1, {opacity: 1, onComplete: function() {
							$('.introjs-tooltip').removeClass('hide');
							typing(".introjs-tooltiptext", "The given string is stored in the array and delimiter " +
									"<span class='ct-code-b-yellow'>\\0</span> (or) <span class='ct-code-b-yellow'>\\n</span> " +
									"is placed at the end of the string by the system.", function() {
								$(".introjs-nextbutton, .introjs-prevbutton").show();
	
							});
						}});
						
					});
					break;
				case "animationDiv1" :
					$("#printLineInConsole1").attr('disabled','disabled');
					$('.introjs-helperLayer ').one('transitionend', function() {
							valTransNAM1();
							//$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
					break;
			}
			break;
			
			case 'end':
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = 	"This is the end of the <span class='ct-code-b-yellow'>main()</span> function " +
								"where the program execution ends.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
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

					});
				});
			break;

		}
	});
	
	introjs.start();
}
function checking(selector) {
	$(".introjs-prevbutton").hide();
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	if(selector == "#enterName" || selector == "#enterName1" ) {
		$(selector).off("keydown keyup");
			$(selector).on("keydown", function(e){
			//	$(".introjs-prevbutton").hide();
				  // Ignore controls such as backspace
				var arr = [8,16,17,20,35,36,37,38,39,40,45,46];
				  // Allow letters
				for(var i = 65; i <= 90; i++){
					arr.push(i);
				}
				  //Disable cut copy paste
				$(selector).bind('cut copy paste', function (e) {
					e.preventDefault();
				});
				   
				    //Disable mouse right click
				$(selector).on("contextmenu",function(e){
					return false;
				});
					    
				if($.inArray(e.which, arr) === -1  || e.ctrlKey || e.altKey){
					e.preventDefault();
				}
				
			});
			$(selector).on("keyup", function(){
				$('.error-text').remove();
				var letters = /^[A-Za-z]+$/;
				if($(selector).val().match(letters)){
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
				else {
					$('.introjs-nextbutton').hide();
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
							"Please enter alphabet characters only.</span>");
				}
					
			});
	} else if (selector == "#printLineInConsole1" || selector == "#printLineInConsole2" ){
		$(selector).off("keydown keyup");
		$(selector).on("keydown", function(e) {
			//$(".introjs-prevbutton").hide();
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
		
		$(selector).on("keyup", function(e) {
			$(".user-btn").remove();
			$('.error-text').remove();
			if ($(this).text() == "" || $(this).text() == " ") {
				$('.user-btn').remove();
				$(".introjs-nextbutton").hide();
				$('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
													"Please enter 2 numbers and separate each with space.</span>");
			}
			var givenText = $(this).text();
			var splittedText = givenText.split(" ");
			arr = [];
			$.each(splittedText, function(idx, val) {
				if (val.length > 0) {
					arr.push(val);
				}
			});
			
			//arr= arr.filter((val) => {return val.trim().length > 0});
			arr = arr.filter(function(val) {
				return val.trim().length > 0
			});
			
			if (arr.length < 2 || arr.length > 2){
				$(".introjs-nextbutton, .introjs-prevbutton").hide();
			} else if (arr.length == 2) {
				$(".introjs-nextbutton, .introjs-prevbutton").show();
				
			}
			
			$.each(arr, function(idx, val) {
				if (val.trim().length > 3) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>" 
							+ " Please limit the number length to 3 digits.</span>");
					$(".introjs-nextbutton").hide();
				}
			});
		});
	}	
}
function valTransNAM() {
	$('#printLineInConsole1').attr('contenteditable', false);
	var splittedText = $('#printLineInConsole1').text().split(" ");
	$('#printLineInConsole1').html('');
	$.each(splittedText, function(idx, val) {
		if (val.trim().length > 0) {
			$('#printLineInConsole1').append('<span class="scanfValue non-empty">' + val + '</span> ');
			$('.printfValue').remove();
			$('#printLineInConsole').append('<span class="printfValue visibility-hidden">' + val + '</span> ');
			//$('#printLineInConsole').append('<br/>');
		} else {
			//$('#printLineInConsole1').append(' ');
		}
	});
	
	$('.scanfValue').addClass('output-value-circle circle-css');
	
	
	$.each(arr, function(idx, val) {
		$('.arrayValue').eq(idx).text(parseInt(val)).parent().addClass("z-index1000000");
		var l = $('#printLineInConsole1 .non-empty').eq(idx).offset();
		$('.arrayValue').eq(idx).offset({
			"top" : l.top,
			"left" : l.left
		});
		
		TweenMax.to($('.arrayValue').eq(idx), 1, {top: 0, left : 0, onComplete:function() {
			$(".z-index1000000").removeClass("z-index1000000");
			$('.scanfValue').removeClass('output-value-circle circle-css');
			$('.introjs-tooltip').removeClass('hide');
			typing(".introjs-tooltiptext", "The given no and marks are stored in memory boxes named " +
					"<span class='ct-code-b-yellow'>no</span> and <span class='ct-code-b-yellow'>marks</span>.", function() {
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			});
		}});
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
function valTransNAM1() {
	$('#printLineInConsole2').attr('contenteditable', false);
	var splittedText = $('#printLineInConsole2').text().split(" ");
	$('#printLineInConsole2').html('');
	$.each(splittedText, function(idx, val) {
		if (val.trim().length > 0) {
			$('#printLineInConsole2').append('<span class="scanfValue1 non-empty">' + val + '</span> ');
			$('.printfValue1').remove();
			$('#printLineInConsoleNAM1').append('<span class="printfValue1 visibility-hidden">' + val + '</span> ');
			//$('#printLineInConsoleNAM1').append('<br/>');
		} else {
			//$('#printLineInConsole2').append(' ');
		}
	});
	
	$('.scanfValue1').addClass('output-value-circle circle-css');
	
	$.each(arr, function(idx, val) {
		$('.arrayValue1').eq(idx).text(parseInt(val)).parent().addClass("z-index1000000");;
		var l = $('#printLineInConsole2 .non-empty').eq(idx).offset();
		$('.arrayValue1').eq(idx).offset({
			"top" : l.top,
			"left" : l.left
		});
		TweenMax.to($('.arrayValue1').eq(idx), 1, {top: 0, left : 0, onComplete:function() {
			$(".z-index1000000").removeClass("z-index1000000");
			$('.scanfValue1').removeClass('output-value-circle circle-css');
			$('.introjs-tooltip').removeClass('hide');
			typing(".introjs-tooltiptext", "The given no and marks are stored in memory boxes named " +
					"<span class='ct-code-b-yellow'>no</span> and <span class='ct-code-b-yellow'>marks</span>.", function() {
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			});
		}});
	});
}
function rotation(selector1, val, callBackFunction) {
	$(selector1).effect( "highlight",{color: '#ffff33'}, 1000);
	TweenMax.to($(selector1), 1, {rotationX : -90, onComplete:function() {
		$(selector1).text(val);
		TweenMax.to($(selector1), 1, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).removeClass("opacity00");
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 1000);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1200 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
} 


function typing(selector, text, callBackFunction) {
	var typingSpeed = 1;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	})
}
function stepProcess(selector) {
	$('.introjs-helperLayer ').one('transitionend', function() {
		if (introjs._direction == "backward") {
			$(selector).addClass('opacity00');
			setTimeout(function () {
				introjs.previousStep();
			}, 1000);
		} else {
			$(selector).removeClass('opacity00');
			setTimeout(function () {
				introjs.nextStep();
			}, 1000);
		}
	});
}