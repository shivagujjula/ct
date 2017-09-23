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
			element : '#s1Init',
			intro : "",
			position : "right"
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 's1Address',
		}, {
			element : '#samplePara',
			intro : "",
			position : "right"
		}, {
			element : '#sampleInt',
			intro : "",
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'xAddress',
		}, {
			element : '#aValue',
			intro : "",
			position : "right"
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'aInS1Box',
		}, {
			element : '#diffObj',
			intro : "",
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'diffObjMemory',
		}, {
			element : '#s2PreInc',
			intro : "",
			position : "right"
		}, {
			element : '#preInc',
			intro : "",
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'boxHeading1',
		}, {
			element : '#preIncS1',
			intro : '',
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'sAddress',
		}, {
			element : '#aPreInc',
			intro : "",
		}, {
			element :"#s1PreIncVal",
			intro : "",
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'animationDiv',
		}, {
			element : '#return',
			intro : "",
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'sAddress',
		}, {
			element : '#s2PreInc',
			intro : "",
			position : "right",
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 's2Address',
		}, {
			element : '#s1PutData',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's1Value',
			position : "left"
		}, {
			element : '#s2PutData',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's2Value',
			position : "left"
		}, {
			element : '#s3PostInc',
			intro : "",
			position : "right"
		}, {
			element : '#postInc',
			intro : "",
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'boxHeading2',
		}, {
			element : '#postIncS1',
			intro : '',
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'sAddress',
		}, {
			element :"#s1PostIncVal",
			intro : "",
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'animationDiv1',
		}, {
			element :"#aPostIncVal",
			intro : "",
			position : "right"
		}, {
			element : '#return1',
			intro : "",
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'sAddress',
		}, {
			element : '#s3PostInc',
			intro : "",
			position : "right",
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 's3Address',
				
		}, {
			element : '#s1PutData1',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's1Value1',
			position : "left"
		}, {
			element : '#s3PutData',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's3Value',
			position : "left"		
		}, {
			element : '#s4PreDec',
			intro : "",
			position : "right"
		}, {
			element : '#preDec',
			intro : "",
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'boxHeading3',
		}, {
			element : '#preDecS1',
			intro : '',
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'sAddress',		
		
		}, {
			element : '#aPreDecVal',
			intro : "",
		}, {
			element :"#s1PreDecVal",
			intro : "",
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'animationDiv2',
		}, {
			element : '#return2',
			intro : "",
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'sAddress',
		}, {
			element : '#s4PreDec',
			intro : "",
			position : "right",
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 's4Address',
		}, {
			element : '#s1PutData2',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's1Value2',
			position : "left"
		}, {
			element : '#s4PutData',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's4Value',
			position : "left"	
				
		}, {
			element : '#s5PostDec',
			intro : "",
			position : "right"
		}, {
			element : '#postDec',
			intro : "",
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'boxHeading4',
		}, {
			element : '#postDecS1',
			intro : '',
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'sAddress',	
		}, {
			element :"#s1PostDecVal",
			intro : "",
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'animationDiv3',
		}, {
			element :"#aPostDecVal",
			intro : "",
			position : "right"
		}, {
			element : '#return3',
			intro : "",
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'sAddress',
		}, {
			element : '#s5PostDec',
			intro : "",
			position : "right",
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 's5Address',
		}, {
			element : '#s1PutData3',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's1Value3',
			position : "left"
		}, {
			element : '#s5PutData',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's5Value',
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
				$("#list1").fadeTo(300, 1, function() {
					$("#list2").fadeTo(300, 1, function() {
						$('#nextButton').removeClass("opacity00");
							$('.user-btn').click(function() {
							$('#nextButton').remove();
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					});
				});
			});
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Let us understand <span class='ct-code-b-yellow'>Operator"+
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
		case 's1Init':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#s1Address").removeClass("opacity00");
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
		case 'sampleInt':
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'aValue':	
			$("#sampleInt").removeClass("z-index1000000").removeClass("blinking");
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = " ";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'diffObj':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 's2PreInc':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'preInc':
			$('.introjs-helperLayer').one("transitionend", function() {
				typing(".introjs-tooltiptext"," ", function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'preIncS1':
			$('.introjs-helperLayer').one("transitionend", function() {
				typing(".introjs-tooltiptext"," ", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'aPreInc':
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#aPreInc").effect( "highlight",{color: 'red'}, 800,function() {
					$(".introjs-tooltiptext").append("<span id='aSum' class='position opacity00'>a = <span id ='total' class='position'><span id='a1' class='position'>a<span> + <span id='one1' class='position'>1</span>;</span></span>");
					$('.introjs-tooltip').removeClass("hide");
					$('#aSum').removeClass('opacity00');
					fromEffectWithTweenMax("#aPreInc", "#aSum", function() {
					$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
						$('.user-btn').remove(); 
						
							$("#aSum").append("<br><span id='aSum1' class='position opacity00'>s1.a = "
									+ "<span id ='tot' class='position'><span id='a' class='position'>s1.a</span> "
									+ "<span id='one' class='position'>+ 1</span>;</span></span>");
							$('#aSum1').removeClass('opacity00');
							fromEffectWithTweenMax("#aSum", "#aSum1", function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
								$('.user-btn').click(function() { 
									$('.user-btn').remove(); 
										fadeInBounceEffectWithTimelineMax("#s1Val", "#a", function() {
											$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
											$('.user-btn').click(function() { 
												$('.user-btn').remove(); 
												$("#aSum1").effect( "highlight",{color: 'red'}, 800,function() {
												var t = parseInt($("#s1Val").text()) + 1;
													rotation('#tot', t, function() {
													fadeInBounceEffectWithTimelineMax("#tot", "#s1Val", function() {
														$('#s1Val').removeClass('opacity00');
														$("#s1Address").addClass("z-index1000000");
															$('.introjs-nextbutton').show();
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
		case 's1PreIncVal':
			$("#s1Address").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "a value is assigned to s(means s1.a value is assigned to s.a)"; 
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'return':
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;

		case 's1PutData':
			$("#locVarAddress").addClass('opacity00');
			$("#sVal").text("");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#s1Address").addClass("z-index1000000");
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;
		case 'putData':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = " ";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'printA':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = " ";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 's2PutData':
			$("#s1Address").removeClass("z-index1000000");
			$("#s2Address").addClass("z-index1000000");
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = " ";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 's3PostInc':
			$("#s2Address").removeClass("z-index1000000");
			$("#boxHeading1").hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				typing(".introjs-tooltiptext"," ", function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'postInc':
			$("#sBox, #aBoxS").addClass("opacity00");
			$('.introjs-helperLayer').one("transitionend", function() {
				typing(".introjs-tooltiptext"," ", function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'postIncS1':
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;
		case 's1PostIncVal':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = " "; 
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case 'aPostIncVal':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#aPostIncVal").effect( "highlight",{color: 'red'}, 800,function() {
					$(".introjs-tooltiptext").append("<span id='aSum' class='position opacity00'>a = <span id ='total' class='position'><span id='a1' class='position'>a<span> + <span id='one1' class='position'>1</span>;</span></span>");
					$('.introjs-tooltip').removeClass("hide");
					$('#aSum').removeClass('opacity00');
					fromEffectWithTweenMax("#aPostIncVal", "#aSum", function() {
					$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
						$('.user-btn').remove(); 
							$("#aSum").append("<br><span id='aSum1' class='position opacity00'>s1.a = "
									+ "<span id ='tot' class='position'><span id='a' class='position'>s1.a</span> "
									+ "<span id='one' class='position'>+ 1</span>;</span></span>");
							$('#aSum1').removeClass('opacity00');
							fromEffectWithTweenMax("#aSum", "#aSum1", function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
								$('.user-btn').click(function() { 
									$('.user-btn').remove(); 
										fadeInBounceEffectWithTimelineMax("#s1Val", "#a", function() {
											$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
											$('.user-btn').click(function() { 
												$('.user-btn').remove(); 
												$("#aSum1").effect( "highlight",{color: 'red'}, 800,function() {
												var t = parseInt($("#s1Val").text()) + 1;
													rotation('#tot', t, function() {
													fadeInBounceEffectWithTimelineMax("#tot", "#s1Val", function() {
														$('#s1Val').removeClass('opacity00');
														$("#s1Address").addClass("z-index1000000");
															$('.introjs-nextbutton').show();
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
		case 'return1':
			$("#s1Address").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;

		case 's1PutData1':
			$("#s1Address").addClass("z-index1000000");
			$("#sVal").text("");
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;
		case 's3PutData':
			$("#s1Address").removeClass("z-index1000000");
			$("#s3Address").addClass("z-index1000000");
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = " ";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 's4PreDec':
			$("#s3Address").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'preDec':
			$("#sBox, #aBoxS").addClass("opacity00");
			$('.introjs-helperLayer').one("transitionend", function() {
				typing(".introjs-tooltiptext"," ", function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'preDecS1':
			$('.introjs-helperLayer').one("transitionend", function() {
				typing(".introjs-tooltiptext"," ", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'aPreDecVal':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#aPreDecVal").effect( "highlight",{color: 'red'}, 800,function() {
					$(".introjs-tooltiptext").append("<span id='aSub' class='position opacity00'>a = <span id ='total' class='position'><span id='a1' class='position'>a<span> - <span id='one1' class='position'>1</span>;</span></span>");
					$('.introjs-tooltip').removeClass("hide");
					$('#aSub').removeClass('opacity00');
					fromEffectWithTweenMax("#aPreDecVal", "#aSub", function() {
					$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
						$('.user-btn').remove(); 
							$("#aSub").append("<br><span id='aSub1' class='position opacity00'>s1.a = "
									+ "<span id ='tot' class='position'><span id='a' class='position'>s1.a</span> "
									+ "<span id='one' class='position'>- 1</span>;</span></span>");
							$('#aSub1').removeClass('opacity00');
							fromEffectWithTweenMax("#aSub", "#aSub1", function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
								$('.user-btn').click(function() { 
									$('.user-btn').remove(); 
										fadeInBounceEffectWithTimelineMax("#s1Val", "#a", function() {
											$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
											$('.user-btn').click(function() { 
												$('.user-btn').remove(); 
												$("#aSub1").effect( "highlight",{color: 'red'}, 800,function() {
												var t = parseInt($("#s1Val").text()) - 1;
													rotation('#tot', t, function() {
													fadeInBounceEffectWithTimelineMax("#tot", "#s1Val", function() {
														$('#s1Val').removeClass('opacity00');
														$("#s1Address").addClass("z-index1000000");
															$('.introjs-nextbutton').show();
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
		case 's1PreDecVal':
			$("#s1Address").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext"," ", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'return2':
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;

		case 's1PutData2':
			$("#sVal").text("");
			$("#s1Address").addClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;
		case 's4PutData':
			$("#s1Address").removeClass("z-index1000000");
			$("#s4Address").addClass("z-index1000000");
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = " ";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;

		case 's5PostDec':
			$("#s4Address").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'postDec':
			$("#sBox, #aBoxS").addClass("opacity00");
			$('.introjs-helperLayer').one("transitionend", function() {
				typing(".introjs-tooltiptext"," ", function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'postDecS1':
			$('.introjs-helperLayer').one("transitionend", function() {
				typing(".introjs-tooltiptext"," ", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 's1PostDecVal':
			$('.introjs-helperLayer').one("transitionend", function() {
				typing(".introjs-tooltiptext"," ", function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'aPostDecVal':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#aPostDecVal").effect( "highlight",{color: 'red'}, 800,function() {
					$(".introjs-tooltiptext").append("<span id='aSub' class='position opacity00'>a = <span id ='total' class='position'><span id='a1' class='position'>a<span> - <span id='one1' class='position'>1</span>;</span></span>");
					$('.introjs-tooltip').removeClass("hide");
					$('#aSub').removeClass('opacity00');
					fromEffectWithTweenMax("#aPostDecVal", "#aSub", function() {
					$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
						$('.user-btn').remove(); 
							$("#aSub").append("<br><span id='aSub1' class='position opacity00'>s1.a = "
									+ "<span id ='tot' class='position'><span id='a' class='position'>s1.a</span> "
									+ "<span id='one' class='position'>- 1</span>;</span></span>");
							$('#aSub1').removeClass('opacity00');
							fromEffectWithTweenMax("#aSub", "#aSub1", function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
								$('.user-btn').click(function() { 
									$('.user-btn').remove(); 
										fadeInBounceEffectWithTimelineMax("#s1Val", "#a", function() {
											$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
											$('.user-btn').click(function() { 
												$('.user-btn').remove(); 
												$("#aSub1").effect( "highlight",{color: 'red'}, 800,function() {
												var t = parseInt($("#s1Val").text()) - 1;
													rotation('#tot', t, function() {
													fadeInBounceEffectWithTimelineMax("#tot", "#s1Val", function() {
														$('#s1Val').removeClass('opacity00');
														$("#s1Address").addClass("z-index1000000");
															$('.introjs-nextbutton').show();
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
		case 'return3':
			$("#s1Address").removeClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;

		case 's1PutData3':
			$("#sVal").text("");
			$("#s1Address").addClass("z-index1000000");
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;
		case 's5PutData':
			$("#s1Address").removeClass("z-index1000000");
			$("#s5Address").addClass("z-index1000000");
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = " ";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'consoleId':
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "s1Value" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#s1Value").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					
				});
				break;
			case "s2Value" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing('.introjs-tooltiptext'," ", function() {
						$("#s2Value").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					});
				});
				break;
			case 's1Value1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing('.introjs-tooltiptext', " ", function() {
						$("#s1Value1").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					});
				});
				break;
			case "s3Value" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#s3Value").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					
				});
				break;
			case "s1Value2" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing('.introjs-tooltiptext'," ", function() {
						$("#s1Value2").removeClass("opacity00");
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "s3Value" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#s3Value").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					
				});
				break;
			case "s1Value2" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing('.introjs-tooltiptext'," ", function() {
						$("#s1Value2").removeClass("opacity00");
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "s4Value" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#s4Value").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					
				});
				break;
			case "s1Value3" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing('.introjs-tooltiptext'," ", function() {
						$("#s1Value3").removeClass("opacity00");
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "s5Value" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#s5Value").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					
				});
				break;
			
			}
			break;
		case "addressDiv" :
			$("#addressDiv").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "s1Address" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#varBox1").removeClass("opacity00");
					$("#s1Address").removeClass("opacity00");
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
				break;
			case "xAddress" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#xAddress").removeClass("opacity00");
					$("#sampleInt").addClass("z-index1000000").addClass("blinking");
					$("#xVal").text("5").addClass('opacity00');
					transferEffect("#xInit", "#xVal", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "aInS1Box" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#aValue").addClass("blinking");
					$("#aBoxS1").removeClass("opacity00");
					$("#s1Val").text("5").addClass('opacity00');
					transferEffect("#xValue", "#s1Val", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "diffObjMemory" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#varBox2").removeClass("opacity00");
						$('.introjs-nextbutton').show();
				});
				break;
			case "s2Address" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#aBox").removeClass("opacity00");
					$("#s2PreInc").addClass("blinking");
					$("#s2Val").append($("#s1Val").text()).addClass('opacity00');
					transferEffect("#pre", "#s2Val", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "s3Address" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#aBox1").removeClass("opacity00");
					$("#s3PostInc").addClass("blinking");
					$("#s3Val").append($("#sVal").text()).addClass('opacity00');
					transferEffect("#post", "#s3Val", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "s4Address" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#aBox2").removeClass("opacity00");
					$("#s4PreDec").addClass("blinking");
					$("#s4Val").append($("#sVal").text()).addClass('opacity00');
					transferEffect("#pre1", "#s4Val", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "s5Address" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#aBox3").removeClass("opacity00");
					$("#s5PostDec").addClass("blinking");
					$("#s5Val").append($("#sVal").text()).addClass("opacity00");
					transferEffect("#post1", "#s5Val", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			}
			break;
			
		case "locVarAddress" :
			$("#locVarAddress").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "boxHeading1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#boxHeading1").removeClass("hide");
					$("#sAddress").removeClass("opacity00");
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
				break;
			case "boxHeading2" :
				$("#locVarAddress").fadeTo(1, 400);
				$("#boxHeading2").removeClass("hide");
				$("#sAddress").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
				break;
			case "boxHeading3" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#boxHeading1, #boxHeading2").hide();
					$("#boxHeading3").removeClass("hide");
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
				break;
			case "boxHeading4" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#boxHeading1, #boxHeading2, #boxHeading3").hide();
					$("#boxHeading4").removeClass("hide");
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
				break;
			case "sAddress" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#sBox, #aBoxS").removeClass("opacity00");
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
				break;
			case "animationDiv" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#sVal").append($("#s1Val").text()).addClass("opacity00");
					transferEffect("#s1PreIncVal", "#sVal", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "animationDiv1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					//$("#aBoxS, sVal").removeClass("opacity00");
					$("#sVal").append($("#s1Val").text()).addClass("opacity00");
					transferEffect("#s1PostIncVal", "#sVal", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "animationDiv2" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					//$("#aBoxS, sVal").removeClass("opacity00");
					$("#sVal").append($("#s1Val").text()).addClass("opacity00");
					transferEffect("#s1PreDecVal", "#sVal", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "animationDiv3" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					//$("#aBoxS, sVal").removeClass("opacity00");
					$("#sVal").append($("#s1Val").text()).addClass("opacity00");
					transferEffect("#s1PostDecVal", "#sVal", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			}
			break;
			
			
		case "restart":
			$("#s5Address").removeClass("z-index1000000");
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
		}});
}
function scrollTop() {
    window.scrollTo(0, 0);
}

