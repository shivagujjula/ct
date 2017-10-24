var typingInterval = 50;

var usageOfGcountReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function(){
		$("#inputChar, #inputChar2").val("");
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
			tooltipClass : 'hide'
		}, {
			element : '#preline',
			intro : '',
			position : 'right',
		}, {
			element : '#addressBox',
			intro : "",
			animateStep : 'memoryBox',
			tooltipClass : 'hide'
		}, {
			element : '#preline1',
			intro : '',
			position : 'right',
		}, {
			element : '#addressBox',
			intro : "",
			animateStep : 'countBox',
			tooltipClass : 'hide'
		}, {
			element : '#preline2',
			intro : '',
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'typeChar',
			position:"right",
			tooltipClass : 'hide'
		}, {
			element : '#preline3',
			intro : '',
			position : 'right',
		}, {
			element : '#addressBox',
			intro : "",
			animateStep : 'animationDiv',
			tooltipClass : 'hide'
		}, {
			element : '#preline31',
			intro : '',
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printPreline1',
			tooltipClass : 'hide'
		}, {
			element : '#preline32',
			intro : '',
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printPre',
			tooltipClass : 'hide'
				
		}, {
			element : '#preline4',
			intro : '',
			position : 'right',
		}, {
			element : '#addressBox',
			intro : "",
			animateStep : 'countCupValue',
			tooltipClass : 'hide'
		}, {
			element : '#preline5',
			intro : '',
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printPreline2',
			tooltipClass : 'hide'
		}, {
			element : '#preline6',
			intro : '',
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printPreline3',
			tooltipClass : 'hide'
		}, {
			element : '#preline7',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'inputChar3',
			tooltipClass : 'hide'
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
		case 'preline':
			$("#addressBox").addClass("opacity00");
			break;
		case 'preline1':
			$("#countBox").addClass("opacity00");
			$("#inputChar").val("");
			break;
		case 'preline2':
			$("#typeChar").addClass("opacity00");
			break;
		case 'preline3':
			$(".td-css").text("");
			break;
		case 'preline31':
			$("#printpreLine1").addClass("opacity00");
			break;
		case 'preline32':
			$("#printpre").text("");
			break;
		case 'preline4':
			$("#countCupValue").addClass('opacity00');
			break;
		case 'preline5':
			$("#extract, #printpreLine2").addClass("opacity00");
			$("#inputChar2").text("");
			break;
		case 'preline6':
			$("#printpreLine3").addClass("opacity00");
			break;
		case 'preline7':
			$("#inputChar3").text("");
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'typeChar':
				$("#inputChar").val("");
				$(".td-css").text("");
				break;
			case 'printPreline1':
				$("#printpreLine1").addClass("opacity00");
				$(".input1").remove();
				break;
			case 'printPre':	
				$("#printpre").text("");
				break;
			case 'printPreline2':
				$("#extract, #printpreLine2").addClass("opacity00");
				$("#inputChar2").text("");
				break;
			case 'printPreline3':
				$("#printpreLine3").addClass('opacity00');
				break;
			case 'inputChar3':
				$("#inputChar3").text("");
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
		if (elementId == "line5") {
			$("#line5").addClass('z-index9999999');
		}
		switch (elementId) {
		case 'infoDiv':
/*** The general format is: variable=gcount( ); ***/			
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list").fadeTo(300, 1, function() {
				$("#list1").fadeTo(300, 1, function() {
					$("#list2").fadeTo(300, 1, function() {
						$("#list3").fadeTo(300, 1, function() {
							$("#syntax").fadeTo(300, 1, function() {
								$('#nextButton').removeClass("opacity00");
								$('.user-btn').click(function() {
									$('.user-btn').remove();
									introjs.nextStep();
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
				typing('.introjs-tooltiptext', "Let us consider an sample program using "+
						"<span class='ct-code-b-yellow'>gcount()</span> function.", function() {
					$(".introjs-nextbutton").show();
					$(".introjs-prevbutton").hide();
				});
			});
			break;
		case 'preline':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here, <span class='ct-code-b-yellow'>ch</span>"+
						" is the <span class='ct-code-b-yellow'>character array varaiable</span> which"+
						" contains <span class='ct-code-b-yellow'>10</span> characters.</li>" +
						"<li>Each character occupies <span class='ct-code-b-yellow'>1</span>" +
						" byte(8 bits) in the memory.</li></ul> ", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'preline1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Here we declared <span class='ct-code-b-yellow'>count</span> is of type " +
						"<span class='ct-code-b-yellow'>int</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'preline2':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'preline3':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'>read()</span>"+
						   " reads first <span class='ct-code-b-yellow'>5</span> characters" +
						   " and stored in <span class='ct-code-b-yellow'>ch</span>. "
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'preline31':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'preline32':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'>write()</span> "+
			   			   "prints first <span class='ct-code-b-yellow'>5</span> " +
			   			   "characters on to the dispay. ";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'preline4':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "The <span class='ct-code-b-yellow'>gcount()</span> " +
						"returns the number of characters extracted by the last unformatted input " +
						"operation (<b><span class='ct-code-b-yellow'>read()</span></b>) performed "+
						"on the object.", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'preline5':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'preline6':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'preline7':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				text = '<div id="cWrite" class="ct-code-b-yellow">cout.write(<span class="position" id="chVal">ch</span>, '
						+'<span class="position" id="countVal">count</span>)</div>';
				$('.introjs-tooltiptext').append(text);
				fromEffectWithTweenMax('#preline7', '#cWrite', function() {
					var givenInput = $("#inputChar").val();
					var result = givenInput.slice(0, 5);
					rotation('#chVal', result, function() {
						rotation('#countVal', 5, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						})
					});
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
		case "addressBox" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "memoryBox" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#addressBox").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#addressBox").removeClass("opacity00");
						TweenMax.to("#tableId", 0.2, {opacity: 1, onComplete: function() {
							$('.introjs-tooltip').removeClass('hide');
							typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>10</span> bytes " +
									" are allocated to the array <span class='ct-code-b-yellow'>ch</span>.", function() {
								$(".introjs-nextbutton, .introjs-prevbutton").show();
							});
						}});
					}
				});
				break;
			case "animationDiv" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#tableRowId").removeClass("opacity00");
					introjs.refresh();
					$(".td-css").addClass("ct-code-b-green");
					var result = $("#inputChar").val();
					for(var i = 0; i <= result.length; i++) {
						if (result.length >= 0 && result.length <= 5) {
							if (i == result.length) {
								$("table tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
							} else {
								$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
							}
						}  else {
							if (i == 5) {
								$("table tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
								break;
							} else {
								$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
							}
						} 
					}
					TweenMax.to(".td-css", 1, {opacity: 1, onComplete: function() {
						$('.introjs-tooltip').removeClass('hide');
						var text = "The given string is stored in the array"+
									" and delimiter <span class='ct-code-b-yellow'>\\0</span>"+
									" (or) <span class='ct-code-b-yellow'>\\n</span>"+
									" is placed at the end of the string by the system.";
						typing(".introjs-tooltiptext",text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					}});
					
				});
				break;
			case "countBox" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#countBox").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						transferEffect("#preline1", "#countBox", function() {
							$("#countBox").css("color","skyblue");
							setTimeout(function(){
								introjs.nextStep();
							}, 500); 
						});
					}
				});
				break;
			case "countCupValue" :
				$("#preTableDiv").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#countCupValue").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#preline4").addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
						transferEffect("#preline4", "#countCupValue", function() {
							setTimeout(function(){
								introjs.nextStep();
							}, 500); 
						});
					}
				});
				break;
			}
			break;
			
		case 'consoleId':
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "typeChar" :
				$("#typeChar").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					typing(".introjs-tooltiptext", "Enter <span class='ct-code-b-yellow'>5</span>"+
							" characters.", function() {
						$("#inputChar").addClass("blinking").focus();
						checking("#inputChar");
					});
				});
				break;
			case 'printPreline1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#printpreLine1").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#printpreLine1").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}
				});
				break;
			case 'printPre':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#printpre").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						var givenInput = $("#inputChar").val();
						var result = givenInput.slice(0, 5);
						var text =  '<span class="input-char input1">' + result + '</span>';
						$("#printpre").append(text).addClass('opacity00');
						transferEffect("#preline32", "#printpre" , function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					}
				});
				break;
			case 'printPreline2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#printPreline2").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						transferEffect("#cout", "#printpreLine2", function() {
							var givenInput = $("#countCupValue").text();
							$("#inputChar2").append(givenInput).addClass('opacity00');
							$("#countBox").addClass("z-index1000000");
							transferEffect("#count", "#inputChar2", function() {
								$("#countBox").removeClass("z-index1000000");
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							});
						});
					}
				});
				break;
			case 'printPreline3':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#printpreLine3").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#printpreLine3").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}
				});
				break;
			case 'inputChar3':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#inputChar3").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						var givenInput = $("#inputChar").val();
						var result = givenInput.slice(0, 5);
						$("#inputChar3").append(result).css("color","#0f0");;
						transferEffect("#preline7", "#inputChar3" , function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					}
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
	$(selector).on("click keyup keydown", function(){
		if($(selector).val() != "" &&  $(selector).val().length >= 5) {
			$('.errorText').empty();
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		} else {
			$('.introjs-tooltiptext').html("<span class='errorText'>" +
					"Please type correctly.</span><br><b>Note : </b>" +
					"<span class='ct-code-b-yellow'>Enter upto 5 characters."+
					"</span>");
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		}
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