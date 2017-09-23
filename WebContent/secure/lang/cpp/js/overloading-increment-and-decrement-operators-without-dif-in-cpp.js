var typingInterval = 5;
var arr = [];
var iVal = 1;
var usageOfGetcharReady = function() {
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
		}, {
			element :"#class",
			intro : "",
			position : 'right',
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
			animateStep : 'sAddress',
			/*}, {
			element :"#class",
			intro : "",
			position : 'right',
		}, {
			element :"#init",
			intro : "",
			position : 'right',
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'aAddress',
		}, {
			element :"#public",
			intro : "",
			position : 'right',*/
		}, {
			element :"#samplePara",
			intro : "",
			tooltipClass: "hide"
		}, {
			element :"#sample",
			intro : "",
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'xAddress',
		}, {
			element :"#aValue",
			intro : "",
			position : 'right',
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'animationDiv',
		}, {
			element :"#sPutData",
			intro : "",
			position : 'right',
		}, {
			element :"#putData",
			intro : "",
			position : 'right',
		}, {
			element :"#printA",
			intro : "",
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'sValue',
			position : "left"
		}, {
			element :"#sPreInc",
			intro : "",
			position : 'right',
		}, {
			element :"#preInc",
			intro : "",
			position : 'right',
		}, {
			element :"#aPreInc",
			intro : "",
			position : 'right',
		}, {
			element :"#sPutData1",
			intro : "",
			position : 'right',
		}, {
			element :"#putData",
			intro : "",
			position : 'right',
		}, {
			element :"#printA",
			intro : "",
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'sPreIncVal',
			position : "left"
		}, {
			element :"#sPostInc",
			intro : "",
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'errorText',
			position : "left"
		}, {
			element :"#postInc",
			intro : "",
			position : 'right',
		}, {
			element :"#aPostIncVal",
			intro : "",
			position : 'right',
		}, {
			element :"#sPutData2",
			intro : "",
			position : 'right',
		}, {
			element :"#putData",
			intro : "",
			position : 'right',
		}, {
			element :"#printA",
			intro : "",
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'sPostIncVal',
			position : "left"
			/*           */
		}, {
			element :"#sPreDec",
			intro : "",
			position : 'right',
		}, {
			element :"#preDec",
			intro : "",
			position : 'right',
		}, {
			element :"#aPreDecVal",
			intro : "",
			position : 'right',
		}, {
			element :"#sPutData3",
			intro : "",
			position : 'right',
		}, {
			element :"#putData",
			intro : "",
			position : 'right',
		}, {
			element :"#printA",
			intro : "",
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'sPreDecVal',
			position : "left"
		}, {
			element :"#sPostDec",
			intro : "",
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'errorText1',
			position : "left"
		}, {
			element :"#postDec",
			intro : "",
			position : 'right',
		}, {
			element :"#aPostDecVal",
			intro : "",
			position : 'right',
		}, {
			element :"#sPutData4",
			intro : "",
			position : 'right',
		}, {
			element :"#putData",
			intro : "",
			position : 'right',
		}, {
			element :"#printA",
			intro : "",
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'sPostDecVal',
			position : "left"
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case 'infoDiv':
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list").fadeTo(300, 1, function() {
				$('#nextButton').removeClass("opacity00");
					$('.user-btn').click(function() {
					$('#nextButton').remove();
					setTimeout(function () {
						introjs.nextStep();
					}, 200);
				});
			});
			break;
		case 'preTableDiv':
			$("#postInc, #postDec").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Let us understand <span class='ct-code-b-yellow'>Operator"+
						" overloading</span> in binary operators.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'class':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#class").removeClass("opacity00");
				$('.introjs-nextbutton').show();
			});
			break;
		case 'main':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#main").removeClass("opacity00");
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is"+
						" the operating system call.<ul><li><span class='ct-code-b-yellow'>main()"+
						"</span> is execution starting point for any C++ program.</li></ul>", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'sInit':
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'init':
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'public':
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'samplePara':
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'sample':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#sInit").addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 1000);
				$("#num").effect( "transfer", { to: $("#xInit"), className: "ui-effects-transfer-custom" }, 1000 , function() {
					$("#sInit").removeClass("z-index1000000")
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'aValue':
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'sPutData':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'putData':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'printA':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'sPreInc':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'preInc':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'aPreInc':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#aPreInc").effect( "highlight",{color: 'red'}, 800,function() {
				 $(".introjs-tooltiptext").append("<span id='aSum' class='position opacity00'>a = <span id ='total' class='position'><span id='a1' class='position'>a<span> + <span id='one1' class='position'>1</span>;</span></span>");
				 $('.introjs-tooltip').removeClass("hide");
				 $('#aSum').removeClass('opacity00');
					 $('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
							$('.user-btn').remove(); 
							$("#aSum").append("<br><span id='aSum1' class='position opacity00'>a = <span id ='tot' class='position'><span id='a' class='position'>5<span> + <span id='one' class='position'>1</span>;</span</span>");
							 $('#aSum1').removeClass('opacity00');
								var t = parseInt($("#sVal").text()) + parseInt($("#one").text());
								rotation('#tot', t, function() {
								fadeInBounceEffectWithTimelineMax("#tot", "#sVal", function() {
									$("#sAddress").addClass("z-index1000000");
										$('.introjs-nextbutton').show();
								});			
							});
						});
					
				 });
			});
			break;
		case 'sPutData1':
			$("#sAddress").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'sPostInc':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'postInc':
			$("#errorText").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#postInc').removeClass('opacity00');
				$('.introjs-nextbutton').show();
			});
			break;
		case 'aPostIncVal':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#aPostIncVal").effect( "highlight",{color: 'red'}, 800,function() {
					 $(".introjs-tooltiptext").append("<span id='aSum' class='position opacity00'>a = <span id ='total' class='position'><span id='a1' class='position'>a<span> + <span id='one1' class='position'>1</span>;</span></span>");
					 $('.introjs-tooltip').removeClass("hide");
					 $('#aSum').removeClass('opacity00');
						 $('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
							$('.user-btn').click(function() { 
								$('.user-btn').remove(); 
								$("#aSum").append("<br><span id='aSum1' class='position opacity00'>a = <span id ='tot' class='position'><span id='a' class='position'>6<span> + <span id='one' class='position'>1</span>;</span</span>");
								 $('#aSum1').removeClass('opacity00');
									var t = parseInt($("#sVal").text()) + parseInt($("#one").text());
									rotation('#tot', t, function() {
										fadeInBounceEffectWithTimelineMax("#tot", "#sVal", function() {
											$("#sAddress").addClass("z-index1000000");
												$('.introjs-nextbutton').show();
										});	
								});
							});
						
					 });
			});
			break;
		case 'sPutData2':
			$("#sAddress").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
			
		case 'sPreDec':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'preDec':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preDec").removeClass("opacity00");
				$('.introjs-nextbutton').show();
			});
			break;
		case 'aPreDecVal':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#aPreDecVal").effect( "highlight",{color: 'red'}, 800,function() {
					 $(".introjs-tooltiptext").append("<span id='aSub' class='position opacity00'>a = <span id ='total' class='position'><span id='a1' class='position'>a<span> - <span id='one1' class='position'>1</span>;</span></span>");
					 $('.introjs-tooltip').removeClass("hide");
					 $('#aSub').removeClass('opacity00');
						 $('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
							$('.user-btn').click(function() { 
								$('.user-btn').remove(); 
								$("#aSub").append("<br><span id='aSub1' class='position opacity00'>a = <span id ='tot' class='position'><span id='a' class='position'>7<span> - <span id='one' class='position'>1</span>;</span</span>");
								 $('#aSub1').removeClass('opacity00');
									var t = parseInt($("#sVal").text()) - parseInt($("#one").text());
									rotation('#tot', t, function() {
									fadeInBounceEffectWithTimelineMax("#tot", "#sVal", function() {
										$("#sAddress").addClass("z-index1000000");
											$('.introjs-nextbutton').show();
									});			
								});
							});
						
					 });
			});
			break;
		case 'sPutData3':
			$("#sAddress").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'sPostDec':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'postDec':
			$("#errorText1").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#postDec").removeClass("opacity00");
				$('.introjs-nextbutton').show();
			});
			break;
		case 'aPostDecVal':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#aPostDecVal").effect( "highlight",{color: 'red'}, 800,function() {
					 $(".introjs-tooltiptext").append("<span id='aSub' class='position opacity00'>a = <span id ='total' class='position'><span id='a1' class='position'>a<span> - <span id='one1' class='position'>1</span>;</span></span>");
					 $('.introjs-tooltip').removeClass("hide");
					 $('#aSub').removeClass('opacity00');
						 $('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
							$('.user-btn').click(function() { 
								$('.user-btn').remove(); 
								$("#aSub").append("<br><span id='aSub1' class='position opacity00'>a = <span id ='tot' class='position'><span id='a' class='position'>6<span> - <span id='one' class='position'>1</span>;</span</span>");
								 $('#aSub1').removeClass('opacity00');
									var t = parseInt($("#sVal").text()) - parseInt($("#one").text());
									rotation('#tot', t, function() {
									fadeInBounceEffectWithTimelineMax("#tot", "#sVal", function() {
										$("#sAddress").addClass("z-index1000000");
											$('.introjs-nextbutton').show();
									});			
								});
							});
						
					 });
			});
			break;
		case 'sPutData4':
			$("#sAddress").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		

		case 'consoleId':
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "sValue" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing('.introjs-tooltiptext'," ", function() {
						$("#sValue").removeClass("opacity00");
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "sPreIncVal" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing('.introjs-tooltiptext'," ", function() {
						$("#sPreIncVal").removeClass("opacity00");
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "errorText" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<span class='ct-white-color'>sample1.cpp:</span> In function"+
								" <span class='ct-white-color'>‘int main()’:</span> <br>"+
								" <span class='ct-white-color'>sample1.cpp:37:3:</span>"+
								" <span class='errorText'>error: </span>no <span class='ct-white-color'>"+
								" ‘operator++(int)’</span> declared for<br>" +
								" postfix <span class='ct-white-color'> ‘++’</span>[-fpermissive]<br> s++;";
						typing('#errorText',text, function() {
						$('.introjs-nextbutton').show();
						$("#postInc").show();
					});
				});
				break;
			case "sPostIncVal" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing('.introjs-tooltiptext'," ", function() {
						$("#sPostIncVal").removeClass("opacity00");
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "sPreDecVal" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing('.introjs-tooltiptext'," ", function() {
						$("#sPreDecVal").removeClass("opacity00");
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "errorText1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<span class='ct-white-color'>sample1.cpp:</span> In function"+
							" <span class='ct-white-color'>‘int main()’:</span> <br>"+
							" <span class='ct-white-color'>sample1.cpp:45:3:</span>"+
							" <span class='errorText blinking'>error: </span>no <span class='ct-white-color'>"+
							" ‘operator--(int)’</span> declared for<br>" +
							" 	postfix <span class='ct-white-color'> ‘--’</span>[-fpermissive]<br> s--;";
					typing('#errorText1',text, function() {
						$('.introjs-nextbutton').show();
						$("#postDec").show();
					});
				});
				break;
			case "sPostDecVal" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing('.introjs-tooltiptext'," ", function() {
						$("#sPostDecVal").removeClass("opacity00");
						$('.introjs-nextbutton').show();
					});
				});
				break;
			}
			break;
		case "addressDiv" :
			$("#addressDiv").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "sAddress" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#varBox").removeClass("opacity00");
					$("#sAddress").removeClass("opacity00");
					$("#sVal").text("5");
					/*$("#sInit").addClass("z-index1000000");
					transferEffect("#num","#sVal", function() {
						$("#sInit").removeClass("z-index1000000");
					});*/
					$('.introjs-nextbutton').show();
					
				});
				break;
			case "aAddress" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#aAddress").removeClass("opacity00");
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
				break;
			case "xAddress" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#xAddress").removeClass("opacity00");
					$("#sample").addClass("blinking");
					$("#xVal").text("5");
					transferEffect("#xInit","#xVal", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "animationDiv" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#aBoxS").removeClass("opacity00");
					$("#sVal").text("5");
					transferEffect("#aValue", "#sVal", function() {
						$("#noVal").text($("#printLineInConsole1").val());
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "animationDiv2" :
				$("#printLineInConsole2").attr('disabled','disabled');
				$('.introjs-helperLayer ').one('transitionend', function() {
					transferEffect("#printLineInConsole2", "#marksVal", function() {
						$("#marksVal").text($("#printLineInConsole2").val());
						$('.introjs-nextbutton').show();
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
function fadeInBounceEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var val;
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500);
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		
		$('#codeDiv').append("<span id='dummy' class='ct-code-b-yellow ct-fonts' style='position: relative; z-index: 99999999;'>" 
			+ $(selector2).text() + "</span>");
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
		
		$(selector2).css('width', $('#dummy').width());
		$(selector2).text($(selector1).text());
		TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
			$(selector2).fadeIn(1000, 0, function() {
				$(selector2).fadeIn(1000, 1, function() {
					$(selector2).css('width', "auto");
					$("#dummy").remove();
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				});
			});
		}
	});
}