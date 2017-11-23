var typingInterval = 5;
var t1;
var overloadingIncrementAndDecrementOperatorsWithoutDiffReady = function() {
	introGuide();
	tl = new TimelineLite();
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
			tooltipClass: "hide"
		}, {
			element :"#SamplePara",
			intro : "",
			position : 'right',
			
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
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'sValue',
			tooltipClass: "hide"
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
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'sPreIncVal',
			tooltipClass: "hide"
		}, {
			element :"#sPostInc",
			intro : "",
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'errorText',
			position : 'left',
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
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'sPostIncVal',
			tooltipClass: "hide"
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
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'sPreDecVal',
			tooltipClass: "hide"
		}, {
			element :"#sPostDec",
			intro : "",
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'errorText1',
			position : 'left',
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
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'sPostDecVal',
			tooltipClass: "hide"
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case 'postInc':
			$("#postInc").show();
			break;
		case 'postDec':
			$("#postDec").show();
			break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case 'infoDiv':
			$("#postInc, #postDec").hide();
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list").fadeTo(300, 1, function() {
				$('#nextButton').removeClass("opacity00");
					$('.user-btn').click(function() {
					$('#nextButton').remove();
					setTimeout(function () {
						introjs.nextStep();
					}, 500);
				});
			});
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Let us understand how to overload " +
						"<span class='ct-code-b-yellow'>prefix"+
						" </span> and <span class='ct-code-b-yellow'>postfix increment</span>" +
						" and <span class='ct-code-b-yellow'>decrement</span> operators.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'class':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the class <span class='ct-code-b-yellow'>Sample</span> which" +
						   " consists of a private member <span class='ct-code-b-yellow'>num</span>" +
						   " and different member functions in public section.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'main':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is"+
						" the operating system call.<ul><li><span class='ct-code-b-yellow'>main()"+
						"</span> is execution starting point for any C++ program.</li></ul>", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'sInit':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<ul><li>Here <span class='ct-code-b-yellow'>s</span> is an object of class "+
				"<span class='ct-code-b-yellow'>Sample</span></li>" +
				"<li>When an object is created, memory allocated for that object.</li>" +
				"<li>After memory allocation it will call either a <span class='ct-code-b-yellow'>default constructor</span> "+
				"when no arguments is passed or <span class='ct-code-b-yellow'>parameterized constructor</span> when " +
				"different arguments are passed.</li></ul>";						   
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'SamplePara':
			$('#SamplePara').removeClass('opacity00');
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				$(".introjs-tooltiptext").append("<span id='sample' class='position ct-code-b-yellow opacity00'>Sample(<span id='xTip' class='position'>int x</span>) {</span>");
				$('#sample').removeClass('opacity00');
				fromEffectWithTweenMax("#Sample", "#sample", function() {
					$("#xTip").text("5");
					fromEffectWithTweenMax("#xInit", "#xTip", function() {
						 $(".introjs-tooltiptext").append("<br>&emsp;<span id='aVal' class='position ct-code-b-yellow opacity00'>num = <span id='xVal' class='position'>x</span>;</span><br><span class='ct-code-b-yellow'>}</span>");
						 $('#aVal').removeClass('opacity00');
						 $('#aValue').addClass('blinking-white');
						 fromEffectWithTweenMax("#aValue", "#aVal", function() {
							 $('#aValue').removeClass('blinking-white');
							 $('#xVal').text("5");
							 fromEffectWithTweenMax("#xTip", "#xVal", function() {
								 $("#sVal").text("5").addClass('opacity00');
								// $('#aBoxS').addClass('z-index1000000');
								 $('#sVal').removeClass("opacity00").css("z-index", "10000010");
								 fromEffectWithTweenMax("#xVal", "#sVal", function() {
									 $('#sVal').css('z-index', '');
									// $('#aBoxS').removeClass('z-index1000000');
									 $(".introjs-nextbutton, .introjs-prevbutton").show();
								 });
							 });
						 });
					 });
				 });
			});
			break;
		case 'sPutData':
		case 'sPutData1':
		case 'sPutData2':
		case 'sPutData3':
		case 'sPutData4':
			$("#sAddress").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "The member function <span class='ct-code-b-yellow'>getdata()</span>" +
						   " is called by the  object <span class='ct-code-b-yellow'>s</span>";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'putData':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "The member function <span class='ct-code-b-yellow'>putdata()</span>"+
						   " is used to print the data memeber <span class='ct-code-b-yellow'>num</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#consoleId").removeClass("opacity00");
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'printA':
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 500);
			});
			break;
		case 'sPreInc':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<ul><li>In the statement <span class='ct-code-b-yellow'>++s</span>,"+
				   " first increment operation is done and next assignment operation is done.</li>" +
				   "<li><span class='ct-code-b-yellow'>++s</span> is executed as <br>" +
				   " <span class='ct-code-b-yellow'>s.operator ++()</span> </li></ul>";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'preInc':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Here the member <span class='ct-code-b-yellow'>operator ++()</span> function" +
						" is called by object <span class='ct-code-b-yellow'>s</span>";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'aPreInc':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#aPreInc").effect( "highlight",{color: 'red'}, 800,function() {
					$(".introjs-tooltiptext").append("<span id='aSum' class='position ct-code-b-yellow opacity00'>num = <span id ='total' class='position'><span id='a' class='position'>num</span> + <span id='one' class='position'>1</span>;</span></span>");
					$('.introjs-tooltip').removeClass("hide");
					$('#aSum').removeClass('opacity00');
					fromEffectWithTweenMax("#aPreInc", "#aSum", function() {
						$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
							$('.user-btn').remove(); 
							$("#aSum").append("<br><span id='aSum1'  class='position ct-code-b-yellow opacity00'>num = <span id ='tot' class='displayBlock position'><span id='a1' class='position'>s.num</span> + <span id='one1' class='position'>1</span>;</span></span>");
							 $('#aSum1').removeClass('opacity00');
							 fadeInBounceEffectWithTimelineMax("#sVal", "#a1", function() {
								var t = parseInt($("#sVal").text()) + parseInt($("#one1").text());
								rotation('#tot', t, function() {
									fadeInBounceEffectWithTimelineMax("#tot", "#sVal", function() {
										$("#sAddress").addClass("z-index1000000");
											$('.introjs-nextbutton').show();
									});			
								});
							});
						});
				 	});
				});
			});
			break;
		
		case 'sPostInc':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<ul><li>In the statement <span class='ct-code-b-yellow'>s++</span>,"+
				   " first assignment operation is done and next increment operation is done.</li>" +
				   "<li><span class='ct-code-b-yellow'>s++</span> is executed as <br>" +
				   " <span class='ct-code-b-yellow'>s.operator ++(int)</span> </li>" +
				   "<li>Here <span class='ct-code-b-yellow'>int</span> is an additional argument" +
				   " is used to distinguish between the prefix and postfix increment operators. </li></ul>";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'postInc':
			$("#errorText").remove();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#postInc').removeClass('opacity00');
				var text = "Here the member <span class='ct-code-b-yellow'>operator ++(int)</span> function" +
							" is called by object <span class='ct-code-b-yellow'>s</span>";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'aPostIncVal':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#aPostIncVal").effect( "highlight",{color: 'red'}, 800,function() {
					 $(".introjs-tooltiptext").append("<span id='aSum' class='position ct-code-b-yellow opacity00'>num = "+
							 " <span id ='total' class='position'><span id='a' class='position'>num<span>"+
							 " + <span id='one' class='position'>1</span>;</span></span>");
					 $('.introjs-tooltip').removeClass("hide");
					 $('#aSum').removeClass('opacity00');
					 fromEffectWithTweenMax("#aPostIncVal", "#aSum", function() {
						 $('.introjs-tooltipbuttons').append("<a style='background-color:green'"+
									 " class='introjs-button user-btn'>Next &#8594;</a>"); 
						 $('.user-btn').click(function() { 
							$('.user-btn').remove(); 
							$("#aSum").append("<br><span id='aSum1' class='position ct-code-b-yellow opacity00'>num = "+
									"<span id ='tot' class='displayBlock position'><span id='a1' class='position displayBlock'>s.num</span> + <span id='one1' class='position'>1</span>;</span</span>");
							$('#aSum1').removeClass('opacity00');
							fadeInBounceEffectWithTimelineMax("#sVal", "#a1", function() {
								var t = parseInt($("#sVal").text()) + parseInt($("#one1").text());
								rotation('#tot', t, function() {
									fadeInBounceEffectWithTimelineMax("#tot", "#sVal", function() {
										$("#sAddress").addClass("z-index1000000");
										$('.introjs-nextbutton').show();
									});	
								});
							});
						});
					});
				});
			});
			break;
			
		case 'sPreDec':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<ul><li>In the statement <span class='ct-code-b-yellow'>--s</span>,"+
				   " first decrement operation is done and next assignment operation is done.</li>" +
				   "<li><span class='ct-code-b-yellow'>--s</span> is executed as <br>" +
				   " <span class='ct-code-b-yellow'>s.operator --()</span> </li></ul>";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'preDec':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preDec").removeClass("opacity00");
				var text = "Here the member <span class='ct-code-b-yellow'>operator --()</span> function" +
							" is called by object <span class='ct-code-b-yellow'>s</span>";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'aPreDecVal':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#aPreDecVal").effect( "highlight",{color: 'red'}, 800,function() {
					$(".introjs-tooltiptext").append("<span id='aSub' class='position ct-code-b-yellow opacity00'>num = "+
							 " <span id ='total' class='position'><span id='a' class='position displayBlock'>num<span>"+
							 " - <span id='one' class='position'>1</span>;</span></span>");
					$('.introjs-tooltip').removeClass("hide");
					$('#aSub').removeClass('opacity00');
					fromEffectWithTweenMax("#aPreDecVal", "#aSub", function() {
						$('.introjs-tooltipbuttons').append("<a style='background-color:green'"+
									 "class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
							$('.user-btn').remove(); 
							$("#aSub").append("<br><span id='aSub1' class='position ct-code-b-yellow opacity00'>num ="+
											" <span id ='tot' class='displayBlock position'><span id='a1' class='position displayBlock'>s.num</span> - <span id='one1' class='position'>1</span>;</span</span>");
							 $('#aSub1').removeClass('opacity00');
							 fadeInBounceEffectWithTimelineMax("#sVal", "#a1", function() {
								var t = parseInt($("#sVal").text()) - parseInt($("#one1").text());
								rotation('#tot', t, function() {
									fadeInBounceEffectWithTimelineMax("#tot", "#sVal", function() {
										$("#sAddress").addClass("z-index1000000");
										$('.introjs-nextbutton').show();
									});			
								});
							 });
						});
					});
				});
			});
			break;
		
		case 'sPostDec':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<ul><li>In the statement <span class='ct-code-b-yellow'>s++</span>,"+
				   " first assignment operation is done and next decrement operation is done.</li>" +
				   "<li><span class='ct-code-b-yellow'>s++</span> is executed as <br>" +
				   " <span class='ct-code-b-yellow'>s.operator --(int)</span> </li>" +
				   "<li>Here <span class='ct-code-b-yellow'>int</span> is an additional argument" +
				   " is used to distinguish between the prefix and postfix increment operators. </li></ul>";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'postDec':
			$("#errorText1").remove();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#postDec").removeClass("opacity00");
				var text = "Here the member <span class='ct-code-b-yellow'>operator --(int)</span> function" +
				" is called by object <span class='ct-code-b-yellow'>s</span>";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'aPostDecVal':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#aPostDecVal").effect( "highlight",{color: 'red'}, 800,function() {
					$(".introjs-tooltiptext").append("<span id='aSub' class='position ct-code-b-yellow opacity00'>num = "+
							 " <span id ='total' class='position'><span id='a' class='position displayBlock'>num<span>"+
							 " - <span id='one' class='position'>1</span>;</span></span>");
					$('.introjs-tooltip').removeClass("hide");
					$('#aSub').removeClass('opacity00');
					fromEffectWithTweenMax("#aPostDecVal", "#aSub", function() {
						$('.introjs-tooltipbuttons').append("<a style='background-color:green'"+
									 " class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
							$('.user-btn').remove(); 
							$("#aSub").append("<br><span id='aSub1' class='position ct-code-b-yellow opacity00'>num ="+
									" <span id ='tot' class='displayBlock position'><span id='a1'"+
									" class='position displayBlock'>s.num</span> - <span id='one1' class='position'>1</span>;</span</span>");
							 $('#aSub1').removeClass('opacity00');
							 fadeInBounceEffectWithTimelineMax("#sVal", "#a1", function() {
								var t = parseInt($("#sVal").text()) - parseInt($("#one1").text());
								rotation('#tot', t, function() {
									fadeInBounceEffectWithTimelineMax("#tot", "#sVal", function() {
										$("#sAddress").addClass("z-index1000000");
										$('.introjs-nextbutton').show();
									});			
								});
							 });
						});
					});
				});
			});
			break;
		case 'consoleId':
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "sValue" :
				$("#sAddress").addClass("z-index1000000");
				$('.introjs-helperLayer ').one('transitionend', function() {
						transferEffect("#number", "#sValue", function() {
							$("#sAddress").removeClass("z-index1000000");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					
				});
				break;
			case "sPreIncVal" :
				$("#sAddress").addClass("z-index1000000");
				$('.introjs-helperLayer ').one('transitionend', function() {
					transferEffect("#number", "#sPreIncVal", function() {
						$("#sAddress").removeClass("z-index1000000");
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					});
					
				});
				break;
			case "errorText" :
				$(".introjs-tooltip").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<span class='ct-white-color'>sample1.cpp:</span> In function"+
								" <span class='ct-white-color'>‘int main()’:</span> <br>"+
								" <span class='ct-white-color'>sample1.cpp:37:3:</span>"+
								" <span class='blinking-orange'><span class='errorText'>error: " +
								"</span>no <span class='ct-white-color'>"+
								" ‘operator++(int)’</span><br> declared for" +
								" postfix <span class='ct-white-color'> ‘++’</span>[-fpermissive]" +
								"<br> s++;</span>";
						typing('#errorText',text, function() {
							introjs.refresh();
							$(".introjs-tooltip").show();
							//$("#postInc").show();
							var text = "This error occurs when compiler cannot find the definition for the " +
									"<span class='ct-code-b-yellow'>s++</span> that is, " +
									"<span class='ct-code-b-yellow'>post increment</span>. To remove this error" +
									" add the post increment definition";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
					});
				});
				break;
			case "sPostIncVal" :
				$("#sAddress").addClass("z-index1000000");
				$('.introjs-helperLayer ').one('transitionend', function() {
					transferEffect("#number", "#sPostIncVal", function() {
						$("#sAddress").removeClass("z-index1000000");
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					});
				});
				break;
			case "sPreDecVal" :
				$("#sAddress").addClass("z-index1000000");
				$('.introjs-helperLayer ').one('transitionend', function() {
					transferEffect("#number", "#sPreDecVal", function() {
						$("#sAddress").removeClass("z-index1000000");
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					});
				});
				break;
			case "errorText1" :
				$(".introjs-tooltip").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<span class='ct-white-color'>sample1.cpp:</span> In function"+
							" <span class='ct-white-color'>‘int main()’:</span> <br>"+
							" <span class='ct-white-color'>sample1.cpp:45:3:</span>"+
							" <span class='blinking-orange'><span class='errorText'>error: " +
							"</span>no <span class='ct-white-color'>"+
							" ‘operator--(int)’</span><br> declared for" +
							" 	postfix <span class='ct-white-color'> ‘--’</span>[-fpermissive]" +
							"<br> s--;</span>";
					typing('#errorText1',text, function() {
						//$("#postDec").show();
						$(".introjs-tooltip, #postDec").show();
						var text = "This error occurs when compiler cannot find the definition for the " +
									"<span class='ct-code-b-yellow'>s--</span> that is, " +
									"<span class='ct-code-b-yellow'>post decrement</span>." +
									" To remove this error" +
									" add the post decrement definition";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "sPostDecVal" :
				$("#sAddress").addClass("z-index1000000");
				$('.introjs-helperLayer ').one('transitionend', function() {
					transferEffect("#number", "#sPostDecVal", function() {
						$("#sAddress").removeClass("z-index1000000");
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
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
					$("#sInit").addClass("z-index1000000");
					$("#sObj").addClass("blinking");
					TweenMax.to("#varBox, #sAddress", 1, {opacity: 1, onComplete: function() {
						$("#varBox, #sAddress").removeClass("opacity00");
						TweenMax.to("#aBoxS", 1, {opacity: 1, onComplete: function() {
							$("#aBoxS").removeClass("opacity00");
							$("#sInit").removeClass("z-index1000000");
							$("#sObj").removeClass("blinking");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						}});
					}});
					
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
	var typingSpeed = 1;
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
function transferEffect1(selector1, selector2, callBackFunction) {
	$(selector1).addClass("circle-css").effect( "highlight",{color: '#fff'}, 1000);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer-custom" }, 1200 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("circle-css")
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
	$(selector1).parent().effect( "highlight",{color: 'dodgerblue'}, 500);
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
