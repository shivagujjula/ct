var typingInterval = 5;
var arr = [];
var iVal = 1;
var overloadingInsertionAndExtractionOperatorsReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function(){
		$("#enterName, #printLineInConsole1, #printLineInConsole2").val("");
		location.reload();
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
			position : 'right',
			tooltipClass : 'hide',
		}, {
			element :"#class",
			intro : "",
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element : '#friendFunction',
			intro : '',
			position : "right"
		}, {
			element : '#friendFunction1',
			intro : '',
			position : "right"
		}, {
			element : '#main',
			intro : '',
			position : "right"
		}, {
			element : '#sInit',
			intro : "",
			position : "right"
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'obj',
			tooltipClass : 'hide'
		}, {
			element : '#eSd',
			intro : '',
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuDet',
			tooltipClass : 'hide'
		}, {
			element :"#sEnter",
			intro : "",
			position : "right"
		}, {
			element : '#frndFunCin',
			intro : "",
			position : "right"
		}, {
			element : '#eSN',
			intro : '',
			//tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterStuName',
			tooltipClass: "hide"
		}, {
			element :"#sName",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterName',
			position : 'left',
			tooltipClass : 'hide'
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'animationDiv',
			tooltipClass: "hide"
		}, {
			element : '#eN',
			intro : '',
			//tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterNo',
			tooltipClass: "hide"
		}, {
			element :"#sNo",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole1',
			position : 'left',
			tooltipClass : 'hide'
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'animationDiv1',
			tooltipClass: "hide"
		}, {
			element : '#eM',
			intro : '',
			//tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterMarks',
			tooltipClass: "hide"
		}, {
			element :"#sMarks",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole2',
			position : 'left',
			tooltipClass : 'hide'
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'animationDiv2',
			tooltipClass : 'hide'
		}, {
			element : '#tSd',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'theStuDet',
			tooltipClass: "hide"
		}, {
			element :"#sOut",
			intro : "",
			position : "right"
		}, {
			element : '#frndFunCout',
			intro : '',
		}, {
			element :"#sN",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuName',
			position : "left",
			tooltipClass: "hide"
		}, {
			element : '#sName1',
			intro : '',
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole3',
			position : 'left',
			tooltipClass : 'hide'
		}, {
			element : '#no1',
			intro : '',
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuNo',
			tooltipClass: "hide"
		}, {
			element : '#sNo1',
			intro : '',
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole4',
			position : "left",
			tooltipClass: "hide"
		}, {
			element : '#marks',
			intro : '',
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuMarks',
			tooltipClass: "hide"
		}, {
			element : '#sMarks1',
			intro : '',
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole5',
			position : "left",
			tooltipClass: "hide"
		}, {
			element : '#end',
			intro : '',
			position : "right"
		}, {
			element :"#restart",
			intro : "Click to restart.",
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
			$("#class, #char, #init, #public, #friendFunction, #friendFunction1").fadeTo("slow" , 0);
			break;
		case 'sInit':
			$("#addressDiv").addClass("opacity00");
			break;
		case "addressDiv" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "obj" :
				$("#addressDiv, #obj, #addressAnimationDiv").addClass("opacity00");
				TweenMax.to("#tableId, #noBox, #marksBox", 0.5, {opacity: 0});
				$("#addressDiv").removeAttr("style");
				break;
			}
			break;
		case 'eSd':
			$("#stuDet").addClass("opacity00");
			break;
		case 'frndFunCin':
			$("#frndFunCin").show();
			break;
		case 'eSN':
			$("#enterStuName").addClass("opacity00");
			break;
		case 'sName':
			$("#enterName").val("");
			break;
		case 'eN':
			$("#enterNo").addClass("opacity00");
			break;
		case 'sNo':
			$("#printLineInConsole1").val("");
			break;
		case 'eM':
			$('#enterMarks').addClass('opacity00');
			break;
		case 'sMarks':
			$("#printLineInConsole2").val("");
			break;
		case 'tSd':
			$("#theStuDet").addClass('opacity00');
			break;
		case 'frndFunCout':
			$("#frndFunCout").show();
			break;
		case 'sN':
			$("#stuName").addClass('opacity00');
			break;
		case 'no1':
			$("#stuNo").addClass('opacity00');
			break;
		case 'marks':
			$("#stuMarks").addClass('opacity00');
			break;
		case 'sMarks1':
			$("#printLineInConsole5").text("");
			break;
		case 'consoleId':
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'enterName':
				$(".td-css").text("");
				$("#enterName").val("");
				break;
			case 'printLineInConsole1':
				$("#noVal").text("");
				$("#printLineInConsole1").val("");
				break;
			case 'printLineInConsole2':
				$("#marksVal").text("");
				$("#printLineInConsole2").val("");
				break;
			case 'printLineInConsole3':
				$("#printLineInConsole3").text("");
				break;
			case 'printLineInConsole4':
				$("#printLineInConsole4").text("");
				break;
			case 'printLineInConsole5':
				$("#printLineInConsole5").text("");
				break;
			}
			break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
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
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case 'infoDiv':
			$("#frndFunCin, #frndFunCout").hide();
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list").fadeTo(300, 1, function() {
				$("#list1").fadeTo(300, 1, function() {
					$("#list11").fadeTo(300, 1, function() {
						$("#list12").fadeTo(300, 1, function() {
							$("#list13").fadeTo(300, 1, function() {
								$("#list14").fadeTo(300, 1, function() {
									$('#nextButton').removeClass("opacity00");
									$('.user-btn').click(function() {
										$('#nextButton').remove();
										setTimeout(function () {
											introjs.nextStep();
										}, 500);
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
				$("#preTableDiv").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext', "Let us understand how <span class='ct-code-b-yellow'>insertion(<<)</span>"+
						" and <span class='ct-code-b-yellow'>extraction(>>)</span> operators are overloaded.", function() {
					$(".introjs-nextbutton").show();
					$(".introjs-prevbutton").hide();
				});
			});
			break;
		case 'class':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				var text = "This is a class <span class='ct-code-b-yellow'>Student</span>, which consists of a private members" +
						   " <span class='ct-code-b-yellow'>name, no and marks</span> and different friend functions in public section.";
				typing(".introjs-tooltiptext",text, function() {
					$("#class").fadeTo("slow" , 1, function() {
						$("#char").fadeTo("slow" , 1, function() {
							$("#init").fadeTo("slow" , 1, function() {
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
			break;
		case 'main':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = 	"<span class='ct-code-b-yellow'>main()</span> is the starting point of execution.";
				typing(".introjs-tooltiptext", text, function() {
					$("#main").fadeTo("slow" , 1, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			});
			break;
		case 'sInit':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<ul><li>Here, <span class='ct-code-b-yellow'>s</span>" +
						" is  an object of a class <span class='ct-code-b-yellow'>Student</span>.</li>" +
						"<li>When an object is created, memory is allocated for that object.</li></ul>";
				typing(".introjs-tooltiptext",text, function() {
					$("#sInit").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'sEnter':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "The statement <span class='ct-code-b-yellow'>cin >> s</span> will call as<br>" +
						"<span class='ct-code-b-yellow'>operator >> (cin, s)</span> ";
				typing(".introjs-tooltiptext",text, function() {
					$("#sEnter").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'friendFunction':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "The <span class='ct-code-b-yellow displayBlock'> operator function << </span> "+
						   "is written as <span class='ct-code-b-yellow'>friend function</span> " +
						   "in class <span class='ct-code-b-yellow'>Student</span>."; 
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'friendFunction1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "The <span class='ct-code-b-yellow displayBlock'> operator function >> </span> "+
						   "is written as <span class='ct-code-b-yellow'>friend function</span> " +
						   "in class <span class='ct-code-b-yellow'>Student</span>."; 
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'frndFunCin':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "<span class='ct-code-b-yellow'>cin</span> is referenced with"+
						   " <span class='ct-code-b-yellow'>&input</span> and " +
						   " <span class='ct-code-b-yellow'>s</span> is referenced with"+
						   " <span class='ct-code-b-yellow'>&s</span>.";
				typing(".introjs-tooltiptext",text, function() {
					$("#frndFunCin").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'eSd':
		case 'eSN':
		case 'eN':
		case 'eM':
		case 'tSd':
		case 'sN':
		case 'sName1':
		case 'no1':
		case 'sNo1':
		case 'marks':
		case 'sMarks1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#" + elementId).removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
				
			});
			break;
		case 'sName':
		case 'sNo':
		case 'sMarks':
			$('.introjs-helperLayer ').one('transitionend', function() {
			$("#" + elementId).removeClass("opacity00");
			$('.introjs-tooltip').removeClass('hide');
			var text = "This statement is used to extract from keyboard.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'sOut':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = 	"The statement <span class='ct-code-b-yellow'>cout << s</span> will " +
							"call as<br> <span class='ct-code-b-yellow'>operator << (cout, s)</span> ";
				typing(".introjs-tooltiptext",text, function() {
					$("#sOut").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'frndFunCout':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "<span class='ct-code-b-yellow'>cout</span> is referenced with"+
						   " <span class='ct-code-b-yellow'>&output</span> and " +
						   " <span class='ct-code-b-yellow'>s</span> is referenced with"+
						   " <span class='ct-code-b-yellow'>&s</span>.";
				typing(".introjs-tooltiptext",text, function() {
					$("#frndFunCout").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'end':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the end of the main() function where the program execution ends.";
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
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#stuDet").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#stuDet").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}
				});
				break;
			case "enterStuName" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#enterStuName").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#enterStuName").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}
				});
				break;
			case 'enterName':
				$("#enterName").val("").removeAttr("disabled");
				//$("#enterName").attr('disabled','disabled');
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = "Enter any name"; 
					typing('.introjs-tooltiptext', text, function() {
						$("#enterName").removeClass("opacity00").attr('contenteditable', true).addClass("blinking").focus();
						checking("#enterName");
					});
				});
				break;
			case 'enterNo':
				$("#enterName").attr('contenteditable', false)
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$('#enterNo').addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$('#enterNo').removeClass('opacity00');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}
				});
				break;
			case 'printLineInConsole1':
				$("#printLineInConsole1").val("").removeAttr("disabled");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = "Enter rollno upto 4 digits <span class='ct-code-b-yellow'>i.e 1234</span>"; 
					typing('.introjs-tooltiptext',text, function() {
						$("#printLineInConsole1").removeClass("opacity00").attr('contenteditable', true).addClass("blinking").focus();
						checking("#printLineInConsole1");
					});	
					
				});
				break;
			case 'enterMarks':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$('#enterMarks').addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$('#enterMarks').removeClass('opacity00');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}
				});
				break;
			case 'printLineInConsole2':
				$("#printLineInConsole2").val("").removeAttr("disabled");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					$("#printLineInConsole2").removeClass("opacity00").attr('contenteditable', true).addClass("blinking").focus();
					typing('.introjs-tooltiptext',"Enter marks upto 3 digits <span class='ct-code-b-yellow'>i.e 123</span>", function() {
						checking("#printLineInConsole2");
					});	
				});
				break;
			case 'theStuDet':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$('#theStuDet').addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$('#theStuDet').removeClass('opacity00');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}
				});
				break;
			case 'stuName':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$('#stuName').addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$('#stuName').removeClass('opacity00');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}
				});
				break;
			case 'printLineInConsole3':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$('#table').addClass('z-index1000000');
						var value = $("#enterName").val().substr(0, 19);
						$("#printLineInConsole3").append(value).addClass('opacity00');
						transferEffect("#name", "#printLineInConsole3", function() {
							$('#table').removeClass('z-index1000000');
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					}
				});
				break;
			case 'stuNo':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$('#stuNo').addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$('#stuNo').removeClass('opacity00');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}
				});
				break;
			
			case 'printLineInConsole4':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#printLineInConsole4").append($("#printLineInConsole1").val()).addClass('opacity00');
						$('#noBox').addClass('z-index1000000');
						transferEffect("#num", "#printLineInConsole4", function() {
							$('#noBox').removeClass('z-index1000000');
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					}
				});
				break;
			case 'stuMarks':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$('#stuMarks').addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$('#stuMarks').removeClass('opacity00');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}
				});
				break;
			case 'printLineInConsole5':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#printLineInConsole5").append($("#printLineInConsole2").val()).addClass('opacity00');
						$('#marksBox').addClass('z-index1000000');
						transferEffect("#stdMarks", "#printLineInConsole5", function() {
							$('#marksBox').removeClass('z-index1000000');
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
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
					$("#obj").removeClass("opacity00");
					$("#addressAnimationDiv").removeClass("opacity00");
					//$("#tableId").show();
					$('#char').addClass('blinking-white');
					TweenMax.to("#tableId", 0.5, {opacity: 1, onComplete: function() {
						$('#char').removeClass('blinking-white');
						//$("#noBox").show();
						$('#no').addClass('blinking-white');
						TweenMax.to("#noBox", 0.5, {opacity: 1, onComplete: function() {
							$('#no').removeClass('blinking-white');
							//$("#marksBox").show();
							$('#mark').addClass('blinking-white');
							TweenMax.to("#marksBox", 0.5, {opacity: 1, onComplete: function() {
								$('#mark').removeClass('blinking-white');
								$('.introjs-tooltip').removeClass('hide');
								var text = 	'The members of  <span class="ct-code-b-yellow">s</span>'+
											' can be accessed by using  <span class="ct-code-b-yellow">dot(.)</span>'+
											' operator<br>i.e., <span class="ct-code-b-yellow">s.name</span>,'+
											' <span class="ct-code-b-yellow">s.no</span> and'+
											' <span class="ct-code-b-yellow">s.marks</span>';
								typing(".introjs-tooltiptext",text, function() {
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							}});
						}});
					}});
				});
				break;
			case "animationDiv" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#enterName").attr('disabled','disabled');
					$("#tableRowId").removeClass("opacity00");
					introjs.refresh();
					$(".td-css").addClass("ct-code-b-green");
					var result = $("#enterName").val();
					for(var i = 0; i <= result.length; i++) {
						if (result.length >= 0 && result.length < 20) {
							if (i == result.length) {
								$("table tr:nth-child(2) td:eq("+ (i+1) + ")");
							} else {
								$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
							}
						}  else {
							if (i == 19) {
								$("table tr:nth-child(2) td:eq("+ (i+1) + ")");
								break;
							} else {
								$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
							}
						} 
					}
					TweenMax.to(".td-css", 1, {opacity: 1, onComplete: function() {
						$('.introjs-tooltip').removeClass('hide');
						typing(".introjs-tooltiptext", "The given string is stored in the array.", function() {
							 $(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					}});
				});
				break;
			case "animationDiv1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#printLineInConsole1").attr('disabled','disabled');
					$("#noVal").text($("#printLineInConsole1").val());
					fromEffectWithTweenMax("#printLineInConsole1", "#noVal", function() {
						$('.introjs-tooltip').removeClass('hide');
						typing(".introjs-tooltiptext", "The entered roll number is stored in the " +
								"<span class='ct-code-b-yellow'>no</span>.", function() {
							 $(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
				});
				break;
			case "animationDiv2" :
				$("#printLineInConsole2").attr('disabled','disabled');
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#marksVal").text($("#printLineInConsole2").val());
					fromEffectWithTweenMax("#printLineInConsole2", "#marksVal", function() {
						$('.introjs-tooltip').removeClass('hide');
						typing(".introjs-tooltiptext", "The entered marks is stored in the " +
								"<span class='ct-code-b-yellow'>marks</span>.", function() {
							 $(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
				});
				break;
			}
			break;
		
			
		case "restart":
			$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-tooltipbuttons').addClass("hide");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	
	introjs.start();
}
function checking(selector) {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	if(selector == "#enterName") {
		$(selector).off("keydown keyup");
			$(selector).on("keydown", function(e){
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
			$('.error-text').remove();
			if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
				return;
			}
			if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
				e.preventDefault();
			}
		});
		$(selector).on("keyup", function(){
			$('.error-text').remove();
				var letters = /^[0-9]+$/;
			      if($(selector).val().match(letters) && $(this).val().length >= 1 ){
			    	  $(".introjs-nextbutton, .introjs-prevbutton").show();
			      }
			      else {
			      $('.introjs-nextbutton').hide();
			      $('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
							"Please enter numbers only.</span>");
			      }
		});
		
	}
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
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}
	});
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
	var typingSpeed = 10;
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
