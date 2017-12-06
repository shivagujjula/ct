var typingInterval = 5;
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
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element :"#class",
			intro : "",
			position : 'right',
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
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuDet',
			tooltipClass : 'hide'
		}, {
			element :"#sEnter",
			intro : "",
			tooltipClass : "introjs-tooltip-width-custom",
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
			tooltipClass : 'hide'
		}, {
			element :"#sName",
			intro : "",
			//tooltipClass : 'hide'
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
			//tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterNAM',
			tooltipClass : 'hide'
		}, {
			element :"#sNAM",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole1',
			position : 'left',
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'animationDiv1',
			position : 'left',
		}, {
			element : '#eSN',
			intro : '',
			//tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterStuName1',
			tooltipClass : 'hide'
		}, {
			element :"#sName",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterName1',
			position : 'left',
		}, {
			element : '#addressDiv1',
			intro : "",
			animateStep : 'animationDiv',
			//tooltipClass : 'hide'
		}, {
			element : '#eNAM',
			intro : '',
			//tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterNAM1',
			tooltipClass : 'hide'
		}, {
			element :"#sNAM",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole2',
			position : 'left',
		}, {
			element : '#addressDiv1',
			intro : "",
			animateStep : 'animationDiv1',
			position : "left"
		}, {
			element : '#tSd',
			intro : '',
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'theStuDet',
			//tooltipClass : 'hide'
		}, {
			element :"#sOut",
			intro : "",
			tooltipClass : "introjs-tooltip-width-custom",
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
			tooltipClass : 'hide'
		}, {
			element : '#sName1',
			intro : '',
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole3',
			tooltipClass : 'hide'
		}, {
			element : '#nAM',
			intro : '',
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuNAM',
			tooltipClass : 'hide'
		}, {
			element : '#sNAM1',
			intro : '',
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole4',
			tooltipClass : 'hide'
		}, {
			element :"#sN",
			intro : "",
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuName1',
			tooltipClass : 'hide'
		}, {
			element : '#sName1',
			intro : '',
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole5',
			tooltipClass : 'hide'
		}, {
			element : '#nAM',
			intro : '',
			//tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuNAM1',
			tooltipClass : 'hide'
		}, {
			element : '#sNAM1',
			intro : '',
			//tooltipClass : 'hide'
	
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole6',
			tooltipClass : 'hide'
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case 'sInit':
				$("#addressDiv, #addressDiv1").addClass("opacity00");
				break;
			case "s1":
				$("#addressDiv").addClass("opacity00");
				break;
			case "s2":
				$("#addressDiv1").addClass("opacity00");
				break;
	
			case "addressDiv" :
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case "obj" :
					$("#addressDiv").addClass("opacity00");
					$("#tableId, #noBox, #marksBox").hide();
					break;
				}
				break;
			case "addressDiv1" :
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case "obj1" :
					$("#addressDiv1").addClass("opacity00");
					$("#tableId1, #noBox1, #marksBox1").hide();
					break;
				}
				break;
			case 'eSd':
				$("#stuDet").addClass("opacity00");
				break;
			case 'eSN':
				if (flag && introjs._direction == "backward") {
					flag = !flag;
					$("#enterStuName").addClass("opacity00");
				} 
					$("#enterStuName1").addClass("opacity00");
				break;
			case 'sName':
				$("#enterName").val("");
				break;
			case 'eNAM':
				$("#enterNAM").addClass("opacity00");
				break;
			case 'sNAM':
				$("#printLineInConsole1").val("");
				break;
			case 'consoleId':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'enterName':
					$(".td-css").text("");
					$("#enterName").val("");
					break;
			/*	case 'enterName1':
					$(".td-css").text("");
					$("#enterName1").val("");
					break;*/
				case 'printLineInConsole1':
					$("#marksVal, #noVal, #printLineInConsole1").text("");
					break;
				case 'printLineInConsole2':
					$("#marksVal, #noVal, #printLineInConsole2").text("");
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
			if (introjs._currentStep != 0 || introjs._currentStep != 1) {
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
					$("#preTableDiv").removeClass("opacity00");
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext', "Let us understand how <span class='ct-code-b-yellow'>insertion(<<)</span>"+
							" and <span class='ct-code-b-yellow'>extraction(>>)</span> operators are cascaded.", function() {
						$(".introjs-nextbutton").show();
						$(".introjs-prevbutton").hide();
					});
				});
				break;
			case 'class':
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "This is a class <span class='ct-code-b-yellow'>Student</span>, which " +
								"consists of a private members <span class='ct-code-b-yellow'>name,no " +
								"and marks</span> and different friend functions in public section.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'main':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#main").removeClass("opacity00");
					var text = 	"<span class='ct-code-b-yellow'>main()</span> is the starting point of execution.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'sInit':
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<ul><li>Here, <span class='ct-code-b-yellow'>s1, s2 </span>" +
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
					var text = "All the member variables of <span class='ct-code-b-yellow'>" + elementId
								+ "</span> will be allocated memory as per their datatype.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			break;	
			case 'sEnter':
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<ul><li>In this statement first call is made to " +
							"<span class='ct-code-b-yellow position'> cin >> s1</span><br>i.e " +
							"<span class='ct-code-b-yellow position'>operator >> (cin, s1)</span></li>" +
							"<li>After completion of that call the <span class='ct-code-b-yellow'> " +
							"friend function</span> returns the  <span class='ct-code-b-yellow'> " +
							"refrence</span> of input i.e <span class='ct-code-b-yellow'> cin</span></li>" +
							"<li>So the next call is made as <span class='ct-code-b-yellow position'> cin >> s2</span>" +
							"<br>i.e <span class='ct-code-b-yellow position'>operator >> (cin, s2)</span></li>";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'friendFunction':
				$('.introjs-helperLayer ').one('transitionend', function() {
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
					var text = "<span class='ct-code-b-yellow'>cin</span> is referenced with"+
					   " <span class='ct-code-b-yellow'>&input</span> and " +
					   " <span class='ct-code-b-yellow'>s</span> is referenced with"+
					   " <span class='ct-code-b-yellow'>&s</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'sName':
			case 'sNAM':
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "This statement is used to extract input from keyboard.";
						typing(".introjs-tooltiptext",text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
				});
				break;
			
			case 'sOut':
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<ul><li>In this statement first call is made to " +
							"<span class='ct-code-b-yellow position'> cout << s1</span><br> i.e " +
							"<span class='ct-code-b-yellow position'>operator << (cout, s1)</span></li>" +
							"<li>After completion of that call the <span class='ct-code-b-yellow'> " +
							"friend function</span> returns the  <span class='ct-code-b-yellow'> " +
							"refrence</span> of output<br> i.e <span class='ct-code-b-yellow'>cout</span></li>" +
							"<li>So the next call is made as <span class='ct-code-b-yellow position'> cout >> s2</span>" +
							"<br>i.e <span class='ct-code-b-yellow position'>operator >> (cout, s2)</span></li>";
					typing(".introjs-tooltiptext",text, function() {
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
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'sN':
			case 'sName1':
			case 'nAM':
			case 'sNAM1':
				$('.introjs-helperLayer').one("transitionend", function() {
					var text = "This statement is used to print the string in the console.";
					typing(".introjs-tooltiptext",text, function() {
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
							//charAtEnd("#enterName");
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
							//charAtEnd("#printLineInConsole1");
						});	
						
					});
					break;
				case "enterStuName1" :
					stepProcess('#enterStuName1');
					break;
				case 'enterName1':
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
						$("#printLineInConsole2").removeClass("opacity00").attr('contenteditable', true).addClass("blinking").focus();
						var text = "Enter two numbers and seperate them with a <span class='ct-code-b-yellow'>space</span>. " 
							+ " <ul><li>For example, if your numbers are <span class='ct-code-b-yellow'>123</span> and " 
							+ " <span class='ct-code-b-yellow'>345</span> enter them as <span class='ct-code-b-yellow'>123 345</span></li></ul>";
						$('.introjs-tooltip').removeClass("hide");
						typing('.introjs-tooltiptext',text, function() {
							checking("#printLineInConsole2");
							//charAtEnd("#printLineInConsole2");
						});
				});
				break;
				case 'theStuDet':
					stepProcess('#theStuDet');
					break;
				case 'stuName':
					break;
				case 'printLineInConsole3':
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#printLineInConsole3").append($("#enterName").val().substr(0, 19));
							transferEffect("#name", "#printLineInConsole3", function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 500);
							});
					});
					break;
				case 'stuNAM':
					stepProcess('#stuNAM');
					break;
				
				case 'printLineInConsole4':
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#printLineInConsole4").append($("#noVal").text());
							transferEffect("#num", "#printLineInConsole4", function() {
								$("#printLineInConsole41").append($("#marksVal").text());
								transferEffect("#mark", "#printLineInConsole41", function() {
									setTimeout(function () {
										introjs.nextStep();
									}, 500);
								});
							});
					});
					break;
				case 'stuName1':
					stepProcess('#stuName1');
					break;
				case 'printLineInConsole5':
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#printLineInConsole5").append($("#enterName1").val()).substr(0, 19);
							transferEffect("#name", "#printLineInConsole5", function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 500);
							});
					});
					break;
				case 'stuNAM1':
					stepProcess('#stuNAM1');
					break;
				
				case 'printLineInConsole6':
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#printLineInConsole6").append($("#noVal1").text());
							transferEffect("#num", "#printLineInConsole6", function() {
								$("#printLineInConsole61").append($("#marksVal1").text());
								transferEffect("#mark", "#printLineInConsole61", function() {
									setTimeout(function () {
										introjs.nextStep();
									}, 500);
								});
							});
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
									var text = "The members of <span class='ct-code-b-yellow'>s1</span> can be accessed "
												+ "by using<span class='ct-code-b-yellow'>dot(.)</span> operator<br>i.e., " 
												+ "<span class='ct-code-b-yellow'>s1.name</span>, "
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
						//transferEffect("#printLineInConsole1", "#noVal", function() {
							//$("#noVal").text($("#printLineInConsole1").val());
						$(".introjs-nextbutton, .introjs-prevbutton").show();
	
						//});
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
												+ "by using <span class='ct-code-b-yellow'>dot(.)</span> operator<br>i.e., "
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
									$("#tableId1 tr:nth-child(2) td:eq("+ (i+1) + ")");
								} else {
									$("#tableId1 tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
								}
							}  else {
								if (i == 19) {
									$("#tableId1 tr:nth-child(2) td:eq("+ (i+1) + ")");
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
							$(".introjs-nextbutton, .introjs-prevbutton").show();
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
	if(selector == "#enterName" || selector == "#enterName1" ) {
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
			arr = [];
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
			//arr = [];
			$.each(splittedText, function(idx, val) {
				if (val != "" || val != " ") {
					arr.push(val);
				}
			});
				if (arr.length < 2) {
					$(".introjs-nextbutton").hide();
				} else if (arr.length == 2 && (arr[0]  && arr[1]) != "") {
					$(".introjs-nextbutton").show();
				}
				
				$.each(arr, function(idx, val) {
					if (val.length > 3) {
						$('.introjs-tooltiptext').append("<span class='error-text'><br/>" 
								+ " Please limit the number length to 3 digits and remember " 
								+ " to provide a space between the two numbers.</span>");
						$(".introjs-nextbutton").hide();
					}
					
				});
				
				/*if (val != '' &&  val != ' ') {
					arr.push(val);
					count++;
					console.log("count : " + count);
			
			
			/*if (arr.length < 2) {
				$(".introjs-nextbutton").hide();
			} else if (arr.length == 2) {
				$(".introjs-nextbutton").show();
			}
			$.each(arr, function(idx, val) {
				if (val.length > 3) {
					$('.introjs-tooltiptext').append("<span class='error-text'><br/>" 
							+ " Please limit the number length to 3 digits and remember " 
							+ " to provide a space between the two numbers.</span>");
					$(".introjs-nextbutton").hide();
				}
				
			});*/
			
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
			$('#printLineInConsole').append('<span class="printfValue visibility-hidden">' + val + '</span> ');
				$('#printLineInConsole').append('<br/>');
		} else {
			$('#printLineInConsole1').append(' ');
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
			$(".introjs-nextbutton, .introjs-prevbutton").show();
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
			$('#printLineInConsoleNAM1').append('<span class="printfValue1 visibility-hidden">' + val + '</span> ');
				$('#printLineInConsoleNAM1').append('<br/>');
		} else {
			$('#printLineInConsole2').append(' ');
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
			$(".introjs-nextbutton, .introjs-prevbutton").show();
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
			}, 500);
		}
	});
}