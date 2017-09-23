var typingInterval = 50;

var usageOfGetcharReady = function() {
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
		}, {
			element : '#preline',
			intro : '',
		}, {
			element : '#addressBox',
			intro : "",
			animateStep : 'memoryBox',
		
		}, {
			element : '#preline1',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#addressBox',
			intro : "",
			animateStep : 'countBox',
			tooltipClass : 'hide'
		}, {
			element : '#preline2',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'typeChar',
			position:"right"
		}, {
			element : '#preline3',
			intro : '',
		}, {
			element : '#addressBox',
			intro : "",
			animateStep : 'animationDiv',
		}, {
			element : '#preline31',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printPreline1',
			tooltipClass : 'hide'
		}, {
			element : '#preline4',
			intro : '',
		}, {
			element : '#addressBox',
			intro : "",
			animateStep : 'countCupValue',
		}, {
			element : '#preline5',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printPreline2',
			tooltipClass : 'hide'
		}, {
			element : '#preline6',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printPreline3',
			tooltipClass : 'hide'
		}, {
			element : '#preline7',
			intro : '',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'inputChar3',
			tooltipClass : 'hide'
		}, {
			element : '#preline8',
			intro : '',
		
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
		var elementId = targetElement.id;
		if (elementId == "line5") {
			$("#line5").addClass('z-index9999999');
		}
		switch (elementId) {
		case 'infoDiv':
/*** The general format is: variable=get ( ); ***/			
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
				typing('.introjs-tooltiptext', "Let us consider an example using "+
						"<span class='ct-code-b-yellow'>gcount()</span> function.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'preline':
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here, <span class='ct-code-b-yellow'>ch</span>"+
						" is the <span class='ct-code-b-yellow'>character array varaiable</span> which"+
						" contains 10 characters.</li><li>Each element occupies"+
						" <span class='ct-code-b-yellow'>1</span> byte(8 bits) in the memory.</li></ul> ", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'preline1':
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'preline2':
			$('.introjs-helperLayer').one("transitionend", function() {
				//typing(".introjs-tooltiptext", text, function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				//});
			});
			break;
		case 'preline3':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'><span class='ct-code-b-yellow'>read()</span>"+
				"</span> reads 10 characters and stored in <span class='ct-code-b-yellow'>ch</span>. "
				typing(".introjs-tooltiptext", text, function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'preline31':
			$('.introjs-helperLayer').one("transitionend", function() {
				//var text = "This statement prints the characters stored in <span class='ct-code-b-yellow'>ch</span>. "
				//typing(".introjs-tooltiptext", text, function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				//});
			});
			break;
		case 'preline4':
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "The <span class='ct-code-b-yellow'>gcount()</span> returns"+
						" the number of characters extracted by the last unformatted input operation"+
						" (<b><span class='ct-code-b-yellow'>read()</span></b>) performed"+
						" on the object.", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'preline5':
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				//typing(".introjs-tooltiptext", "<ul><li>Here, <span class='ct-code-b-yellow'>ch</span> is the <span class='ct-code-b-yellow'>character array varaiable</span> which contains 10 characters.</li><li>Each element occupies <span class='ct-code-b-yellow'>1</span> byte(8 bits) in the memory.</li></ul> ", function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				//});
			});
			break;
		case 'preline6':
			$('.introjs-nextbutton').hide();
			$("#countBox").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;
		case 'preline7':
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				text = '<div id="cWrite" class="ct-code-b-yellow">cout.write("<span class="position" id="chVal">ch</span>, '
						+'<span class="position" id="countVal">count</span>")</div>';
				$('.introjs-tooltiptext').append(text);
				fromEffectWithTweenMax('#preline7', '#cWrite', function() {
					var givenInput = $("#inputChar").val();
					var result = givenInput.slice(0, 10) + "@";
					rotation('#chVal', result, function() {
						rotation('#countVal', 10, function() {
							$('.introjs-nextbutton').show();
						})
					});
				});
			});
			break;
		case 'preline8':
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "This is end of line means when printing something using"+
						" cout(console output) if you write this &lt;&lt;endl it ends that line.", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "addressBox" :
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "memoryBox" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#addressBox").removeClass("opacity00");
					TweenMax.to("#tableId", 0.2, {opacity: 1, onComplete: function() {
						typing(".introjs-tooltiptext", "10 bytes are allocated to the array of the variable"+
								" <span class='ct-code-b-yellow'>ch</span>.", function() {
							$('.introjs-nextbutton').show();
						});
					}});
				});
				break;
			case "animationDiv" :
				console.log("Haii..")
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#tableRowId").removeClass("opacity00");
					introjs.refresh();
					$(".td-css").addClass("ct-code-b-green");
					var result = $("#inputChar").val();
					for(var i = 0; i <= result.length; i++) {
						if (result.length >= 0 && result.length < 11) {
							if (i == result.length) {
								$("table tr:nth-child(2) td:eq("+ (i+1) + ")").text("\@");
							} else {
								$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
							}
						}  else {
							if (i == 10) {
								$("table tr:nth-child(2) td:eq("+ (i+1) + ")").text("\@");
								break;
							} else {
								$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
							}
						} 
					}
					TweenMax.to(".td-css", 1, {opacity: 1, onComplete: function() {
						typing(".introjs-tooltiptext", "The given string is stored in the array"+
								" and delimiter <span class='ct-code-b-yellow'>\@</span>"+
								" (or) <span class='ct-code-b-yellow'>\\n</span>"+
								" is placed at the end of the string by the system.", function() {
							$('.introjs-nextbutton').show();
						});
					}});
					
				});
				break;
			case "countBox" :
				$("#preTableDiv").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					transferEffect("#preline1", "#countBox", function() {
						$("#countBox").removeClass('opacity00').css("color","skyblue");
							setTimeout(function(){
								introjs.nextStep();
							}, 500); 
					});
				});
				break;
			case "countCupValue" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#preline4").addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
					transferEffect("#preline4", "#countCupValue", function() {
						$("#countCupValue").removeClass('opacity00');
							setTimeout(function(){
								introjs.nextStep();
							}, 500); 
					});
				});
				break;
			}
			break;
			
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "typeChar" :
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", "Enter <span class='ct-code-b-yellow'>10</span>"+
							" characters.", function() {
						$("#inputChar").addClass("blinking");
						$("#inputChar").focus();
						checking("#inputChar");
						
					});
				});
				break;
			case 'checking':
				$("#inputChar").attr("disabled", false);
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text ="Enter any string.";
					typing('.introjs-tooltiptext', text, function() {
						$("#inputChar").addClass("blinking");
						$("#inputChar").focus();
						checking("#inputChar");
					});
				});
				break;
			case 'printPreline1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#preline2").effect( "transfer", { to: $("#printpreLine1"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#printpreLine1").removeClass("opacity00");
							var givenInput = $("#inputChar").val();
							var result = givenInput.slice(0, 10) + "@";
							var text = $("#printpreLine1").text() + '<span class="input-char-2">' + result + '</span>';
							typing("#printpreLine1", text, function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
						});
					});
				});
				break;
			case 'printPreline2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#preline5").effect( "transfer", { to: $("#printpreLine2"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#printpreLine2").removeClass("opacity00");
						/*$("#countCupValue").addClass(blinking);*/
						var givenInput = $("#countCupValue").text();
						$("#inputChar2").append(givenInput);
						$("#countBox").addClass("z-index1000000");
						//var text = $("#printpreLine2").text();
						//typing("#printpreLine2", text, function() {
							transferEffect("#preline4", "#inputChar2", function() {
								
							//	$("#inputChar2").removeClass('opacity00');
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							});
						//});
					});
				});
				break;
			case 'printPreline3':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#preline6").effect( "transfer", { to: $("#printpreLine3"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#printpreLine3").removeClass("opacity00");
							//var text = $("#printpreLine3").text();
							//typing("#printpreLine3", text, function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
						//});
					});
				});
				break;
			case 'inputChar3':
				$('.introjs-helperLayer ').one('transitionend', function() {
					var givenInput = $("#inputChar").val();
					var result = givenInput.slice(0, 10);
					$("#inputChar3").append(result).css("color","#0f0");;
					$("#preline7").effect("transfer", { to: $("#inputChar3"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#inputChar3").removeClass("opacity00");
							//var text = $("#printpreLine3").text();
							//typing("#printpreLine3", text, function() {
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
						//});
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
	$(selector).on("click keyup keydown", function(){
		if($(selector).val() != "" &&  $(selector).val().length == 10) {
			$(".introjs-nextbutton").show();
			$('.errorText').empty();
		} else {
			$('.errorText').html("Please type correctly.<b>Note :</b><br>Enter upto 10 characters.");
			$(".introjs-nextbutton").hide();
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
		}
	})
}