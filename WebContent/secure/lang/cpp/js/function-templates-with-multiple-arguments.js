var typingInterval = 1;
var arr = [];
var iVal = 1;
var functionTemplateWithArgumentsReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$('#restartBtn').click(function() {
		$("#inputChar, #inputChar1").val("");
		location.reload();
	});
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});


	/*$("#restart").click(function(){
		$("#inputChar, #inputChar1").val("");
		location.reload();
	});*/
	
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
			element :"#templateDiv",
			intro : "",
			position : 'right',
		}, {
			element :"#template",
			intro : "",
			position : 'right',
		}, {
			element :"#typeName",
			intro : "",
			animateStep : 'class',
			tooltipClass: "hide",
			position : 'right',
		}, {
			element :"#functionDiv",
			intro : "",
			animateStep : 'functionDet',
			position : 'right',
		}, {
			element : '#main',
			intro : '',
			position : "right"
		}, {
			element :"#temp1",
			intro : "",
			position : 'right',
		}, {
			element :"#functionDiv",
			intro : "",
			animateStep : 'temp1',
			position : 'right',
		}, {
			element :"#show",
			intro : "",
			animateStep : 'animationDiv',
			tooltipClass: "hide",
			position : 'right',
		}, {
			element :"#cout",
			intro : "",
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'firstLine',
			tooltipClass: "hide"
		}, {
			element :"#temp2",
			intro : "",
			position : 'right',
		}, {
			element :"#functionDiv",
			intro : "",
			animateStep : 'temp2',
			position : 'right',
		}, {
			element :"#show",
			intro : "",
			animateStep : 'animationDiv1',
			tooltipClass: "hide",
			position : 'right',
		}, {
			element :"#cout",
			intro : "",
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'secondLine',
			tooltipClass: "hide"
		}, {
			element :"#temp3",
			intro : "",
			position : 'right',
		}, {
			element :"#functionDiv",
			intro : "",
			animateStep : 'temp3',
			position : 'right',
		}, {
			element :"#show",
			intro : "",
			animateStep : 'animationDiv2',
			tooltipClass: "hide",
			position : 'right',
		}, {
			element :"#cout",
			intro : "",
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'thirdLine',
			tooltipClass: "hide"
		}, {
			element :"#temp4",
			intro : "",
			position : 'right',
		}, {
			element :"#functionDiv",
			intro : "",
			animateStep : 'temp4',
			position : 'right',
		}, {
			element :"#show",
			intro : "",
			animateStep : 'animationDiv3',
			tooltipClass: "hide",
			position : 'right',
		}, {
			element :"#cout",
			intro : "",
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'fourthLine',
			tooltipClass: "hide"
		}, {
			element : '#end',
			intro : '',
			position : "right"
		}, {
			element : "#button",
			intro : "",
			position : "right"
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "template":
				$("#lt, #gt, #t1, #t2, #class1, #class2").removeClass("blinking-white");
				break;
				
			case 'typeName':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case "class" :
					$('.introjs-tooltip').removeAttr('style');
					break;
				}
				break;
			case 'main':
				$('.introjs-tooltip').removeAttr('style');
				break;
			case 'show':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'animationDiv':
					$("#addressDiv, #xBox, #yBox").addClass("opacity00");
					$('#xBox, #yBox').removeAttr('style');
					$("#XVal, #YVal").text("");
					break;
				case 'animationDiv1':
					$("#addressDiv, #xBox, #yBox").addClass("opacity00");
					$('#xBox, #yBox').removeAttr('style');
					$("#XVal, #YVal").text("");
					break;
				case 'animationDiv2':
					$("#addressDiv, #xBox, #yBox").addClass("opacity00");
					$('#xBox, #yBox').removeAttr('style');
					$("#XVal, #YVal").text("");
					break;
				case 'animationDiv3':
					$("#addressDiv, #xBox, #yBox").addClass("opacity00");
					$('#xBox, #yBox').removeAttr('style');
					$("#XVal, #YVal").text("");
					break;
				}
				break;
			case "functionDiv" :
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'temp1':
				case 'temp2':
				case 'temp3':
				case 'temp4':
					$("#addressDiv, #xBox, #yBox").addClass("opacity00");
					$('#xBox, #yBox').removeAttr('style');
					$("#XVal, #YVal").text("");
					break;
				case 'functionDet':
					$("#lt, #gt, #t1, #t2, #class1, #class2").removeClass("blinking-white");
					$('.introjs-tooltip').css('width', '300px');
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
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$("#syntax").fadeTo(300, 1, function() {
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
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				var text = 	"Let us learn about <span class='ct-code-b-yellow'> function templates</span> " +
							"with <span class='ct-code-b-yellow'>multiple arguments</span>.";
				typing('.introjs-tooltiptext',text , function() {
					$(".introjs-nextbutton").show();
					$(".introjs-prevbutton").hide();
				});
			});
			break;
		case 'templateDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<ul><li>This statement is called  <span class='ct-code-b-yellow'>template " +
							"function</span> declaration.</li><li>In this statement, a template with " +
							"<span class='ct-code-b-yellow'>T1</span>, <span class='ct-code-b-yellow'>T2</span> " +
							"classes are declared.</li></ul>"; 
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'template':
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Function template declaraion begins with a keyword"+
						   " <span class='ct-code-b-yellow'>template</span>."; 
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'typeName':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "class" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					$("#class1, #class2").addClass("blinking-white");
					var text = "Function template declaration followed by a keyword "+
							   "<span class='ct-code-b-yellow'>class</span> " +
							   "after <span class='ct-code-b-yellow'>template</span>."; 
					typing(".introjs-tooltiptext",text, function() {
						$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
							$('.user-btn').remove(); 
							$("#class1, #class2").removeClass("blinking-white");
							$("#t1, #t2").addClass("blinking-white");
							//$('.introjs-tooltip').removeClass('hide');
							var text = "<span class='ct-code-b-yellow'>Template type arguments (T1 and T2)</span> should " +
										"be mentioned after <span class='ct-code-b-yellow'>class</span> or <span class='ct-code-b-yellow'>" +
										"type_name</span>"; 
							typing(".introjs-tooltiptext",text, function() {
								$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
								$('.user-btn').click(function() { 
									$('.user-btn').remove();
									$("#class1, #class2, #t1, #t2").removeClass("blinking-white");
									$("#lt, #gt").addClass("blinking-white");
									var text = "The <span class='ct-code-b-yellow'>class</span> with <span class='ct-code-b-yellow'>" +
												"template type arguments</span> must be enclosed in <span class='ct-code-b-yellow'>angular " +
												"brackets</span>(<span class='ct-code-b-yellow'>< ></span>)";
									typing(".introjs-tooltiptext",text, function() {
										$(".introjs-nextbutton, .introjs-prevbutton").show();
									});
										
								});
							});
						});
					});
						
				});
				break;
			}
			break;
		case "functionDiv" :
			$("#lt, #gt, #t1, #t2, #class1, #class2").removeClass("blinking-white");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'temp1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "The <span class='ct-code-b-yellow'>show()</span> function " +
							"receives <span class='ct-code-b-yellow'>x</span> and " +
							"<span class='ct-code-b-yellow'>y</span> of type " +
							"<span class='ct-code-b-yellow p1Type'>int</span>.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			case 'temp2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = 	"The <span class='ct-code-b-yellow'>show()</span> function " +
								"receives <span class='ct-code-b-yellow'>x</span> and " +
								"<span class='ct-code-b-yellow'>y</span> of type " +
								"<span class='ct-code-b-yellow p3Type'>float</span>.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'temp3':
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>show()</span> function " +
								"receives <span class='ct-code-b-yellow'>x</span> is of type " +
								"<span class='ct-code-b-yellow p5Type'>int</span> and " +
								"<span class='ct-code-b-yellow'>y</span> is of type " +
								"<span class='ct-code-b-yellow p6Type'>float</span>.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'temp4':
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>show()</span> function " +
								"receives <span class='ct-code-b-yellow'>x</span> " +
								"is of type <span class='ct-code-b-yellow p7Type'>char</span> " +
								"and  <span class='ct-code-b-yellow'>y</span> is of type " +
								"<span class='ct-code-b-yellow p8Type'>int</span>.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'functionDet':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').css("width", "300px");
					var text = "<ul><li>The function <span class='ct-code-b-yellow'>show()</span> " +
								"has two arguments of template type, that is, " +
								"<span class='ct-code-b-yellow'>x</span> and <span class='ct-code-b-yellow'>y " +
								"</span>respectively.</li><li>The <span class='ct-code-b-yellow'>show()</span> " +
								"function receives different data type values and displays the values on the screen.</li></ul>" 
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			}
			break;
		case 'main':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>main()</span> is the starting point of execution."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		
		case 'show':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'animationDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				//animation("#p1", "#p2");
				$("#temp1").addClass("blinking-white");
				$("#p1").effect( "transfer", { to: $("#x"), className: "ui-effects-transfer-custom" }, 1000 , function() {
					$("#p2").effect( "transfer", { to: $("#y"), className: "ui-effects-transfer-custom" }, 1000 , function() {
						$('.introjs-tooltip').removeClass('hide');
						$("#temp1").removeClass("blinking-white");
						$("#addressDiv").removeClass("opacity00");
						$("#addressDiv").addClass("z-index1000000");
						var text = "Here the two integer variables <span class='ct-code-b-yellow'>x</span> "+
						" and <span class='ct-code-b-yellow'>y</span> will occupy <span class='ct-code-b-yellow'>2 bytes</span>"+
						" of memory.";
						typing($(".introjs-tooltiptext"), text, function() {
							$(".introjs-tooltiptext").append("<b class ='ct-code-b-yellow'>"
									+ " <div id='rtn' class='position display'>show"
									+ "(<div id='xyVal' class='position display'>"
									+ " <div id='t1Div' class='position display'><div id='t1Val' class='position display'>T1</div> <div id='xVal' class='position display'>x</div></div>" 
									+ ", "
									+ " <div id='t2Div' class='position display'><div id='t2Val' class='position display'>T2</div> <div id='yVal' class='position display'>y</div></div>"
									+ "</div>) </div>"); 
							var l1 = $("#rtn").offset();
							var l2 = $("#show").offset();
							var topLength = l2.top - l1.top;
							var leftLength = l2.left - l1.left;
							TweenMax.from("#rtn", 1, {top : topLength, left : leftLength, onComplete:function() {
								TweenMax.to("#t1Val", 0.5, {rotationX : -90, onComplete:function() {
									$("#t1Val").text("int");
									TweenMax.to("#t1Val", 0.5, {rotationX : 0, onComplete:function() {
										TweenMax.to("#t2Val", 0.5, {rotationX : -90, onComplete:function() {
											$("#t2Val").text("int");
											TweenMax.to("#t2Val", 0.5, {rotationX : 0, onComplete:function() {
												$("#xVal").addClass("blinking-white");
												TweenMax.to("#xBox", 1, {opacity: 1, onComplete: function() {
													$("#xBox").removeClass("opacity00");
													$("#xVal").removeClass("blinking-white");
													$("#yVal").addClass("blinking-white");
													TweenMax.to("#yBox", 1, {opacity: 1, onComplete: function() {
														$("#yBox").removeClass("opacity00");
														$("#yVal").removeClass("blinking-white");
														$("#XVal").text($("#p1").text()).addClass("opacity00");
														transferEffect("#xVal", "#XVal", function() {
															$("#YVal").text($("#p2").text()).addClass("opacity00");;
															transferEffect("#yVal", "#YVal", function() {
																$("#addressDiv").removeClass("z-index1000000");
																$(".introjs-nextbutton, .introjs-prevbutton").show();
															});
														});
													}});
												}});
											}});
										}});
									}});
								}});
							}});
						});
					});
				});
			});
			break;
			case 'animationDiv1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					//animation("#p3", "#p4");
					$("#temp2").addClass("blinking-white");
					$("#p3").effect( "transfer", { to: $("#x"), className: "ui-effects-transfer-custom" }, 1000 , function() {
						$("#p4").effect( "transfer", { to: $("#y"), className: "ui-effects-transfer-custom" }, 1000 , function() {
							$('.introjs-tooltip').removeClass('hide');
							$("#temp2").removeClass("blinking-white");
							$("#addressDiv").removeClass("opacity00");
							$("#addressDiv").addClass("z-index1000000");
							var text = "Here the two float variables <span class='ct-code-b-yellow'>x</span> "+
										" and <span class='ct-code-b-yellow'>y</span> will occupy <span class='ct-code-b-yellow'>4 bytes</span>"+
										" of memory.";
							typing($(".introjs-tooltiptext"), text, function() {
								$(".introjs-tooltiptext").append("<b class ='ct-code-b-yellow'>"
										+ " <div id='rtn' class='position display'>show"
										+ "(<div id='xyVal' class='position display'>"
										+ " <div id='t1Div' class='position display'><div id='t1Val' class='position display'>T1</div> <div id='xVal' class='position display'>x</div></div>" 
										+ ", "
										+ " <div id='t2Div' class='position display'><div id='t2Val' class='position display'>T2</div> <div id='yVal' class='position display'>y</div></div>"
										+ "</div>) </div>"); 
								var l1 = $("#rtn").offset();
								var l2 = $("#show").offset();
								var topLength = l2.top - l1.top;
								var leftLength = l2.left - l1.left;
								TweenMax.from("#rtn", 1, {top : topLength, left : leftLength, onComplete:function() {
									TweenMax.to("#t1Val", 0.5, {rotationX : -90, onComplete:function() {
										$("#t1Val").text("float");
										TweenMax.to("#t1Val", 0.5, {rotationX : 0, onComplete:function() {
											TweenMax.to("#t2Val", 0.5, {rotationX : -90, onComplete:function() {
												$("#t2Val").text("float");
												TweenMax.to("#t2Val", 0.5, {rotationX : 0, onComplete:function() {
													$("#xVal").addClass("blinking-white");
													TweenMax.to("#xBox", 1, {opacity: 1, onComplete: function() {
														$("#xBox").removeClass("opacity00");
														$("#xVal").removeClass("blinking-white");
														$("#yVal").addClass("blinking-white");
														TweenMax.to("#yBox", 1, {opacity: 1, onComplete: function() {
															$("#yBox").removeClass("opacity00");
															$("#yVal").removeClass("blinking-white");
															$("#XVal").text($("#p3").text()).addClass("opacity00");
															transferEffect("#xVal", "#XVal", function() {
																$("#YVal").text($("#p4").text()).addClass("opacity00");;
																transferEffect("#yVal", "#YVal", function() {
																	$("#addressDiv").removeClass("z-index1000000");
																	$(".introjs-nextbutton, .introjs-prevbutton").show();
																});
															});
														}});
													}});
												}});
											}});
										}});
									}});
								}});
							});
						});
					});
				});
				break;
			case 'animationDiv2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					//animation("#p5", "#p6");
					$("#temp3").addClass("blinking-white");
					$("#p5").effect( "transfer", { to: $("#x"), className: "ui-effects-transfer-custom" }, 1000 , function() {
						$("#p6").effect( "transfer", { to: $("#y"), className: "ui-effects-transfer-custom" }, 1000 , function() {
							$('.introjs-tooltip').removeClass('hide');
							$("#addressDiv").removeClass("opacity00");
							$("#addressDiv").addClass("z-index1000000");
							$("#temp3").removeClass("blinking-white");
							var text = "Here the two variables <span class='ct-code-b-yellow'>x</span> "+
										" and <span class='ct-code-b-yellow'>y</span> will occupy"+
										" <span class='ct-code-b-yellow'>2 bytes</span> and"+
										" <span class='ct-code-b-yellow'>4 bytes</span>"+
										" of memory.";
							typing($(".introjs-tooltiptext"), text, function() {
								$(".introjs-tooltiptext").append("<b class ='ct-code-b-yellow'>"
										+ " <div id='rtn' class='position display'>show"
										+ "(<div id='xyVal' class='position display'>"
										+ " <div id='t1Div' class='position display'><div id='t1Val' class='position display'>T1</div> <div id='xVal' class='position display'>x</div></div>" 
										+ ", "
										+ " <div id='t2Div' class='position display'><div id='t2Val' class='position display'>T2</div> <div id='yVal' class='position display'>y</div></div>"
										+ "</div>) </div>"); 
								var l1 = $("#rtn").offset();
								var l2 = $("#show").offset();
								var topLength = l2.top - l1.top;
								var leftLength = l2.left - l1.left;
								TweenMax.from("#rtn", 1, {top : topLength, left : leftLength, onComplete:function() {
									TweenMax.to("#t1Val", 0.5, {rotationX : -90, onComplete:function() {
										$("#t1Val").text("int");
										TweenMax.to("#t1Val", 0.5, {rotationX : 0, onComplete:function() {
											TweenMax.to("#t2Val", 0.5, {rotationX : -90, onComplete:function() {
												$("#t2Val").text("float");
												TweenMax.to("#t2Val", 0.5, {rotationX : 0, onComplete:function() {
													$("#xVal").addClass("blinking-white");
													TweenMax.to("#xBox", 1, {opacity: 1, onComplete: function() {
														$("#xBox").removeClass("opacity00");
														$("#xVal").removeClass("blinking-white");
														$("#yVal").addClass("blinking-white");
														TweenMax.to("#yBox", 1, {opacity: 1, onComplete: function() {
															$("#yBox").removeClass("opacity00");
															$("#yVal").removeClass("blinking-white");
															$("#XVal").text($("#p5").text()).addClass("opacity00");
															transferEffect("#xVal", "#XVal", function() {
																$("#YVal").text($("#p6").text()).addClass("opacity00");;
																transferEffect("#yVal", "#YVal", function() {
																	$("#addressDiv").removeClass("z-index1000000");
																	$(".introjs-nextbutton, .introjs-prevbutton").show();
																	
																});
															});
														}});
													}});		
												}});
											}});
										}});
									}});
								}});
							});
						});
					});
				});
				break;
			case 'animationDiv3':
				$('.introjs-helperLayer ').one('transitionend', function() {
					//animation("#p7", "#p8");
					$("#temp4").addClass("blinking-white");
					$("#p7").effect( "transfer", { to: $("#x"), className: "ui-effects-transfer-custom" }, 1000 , function() {
						$("#p8").effect( "transfer", { to: $("#y"), className: "ui-effects-transfer-custom" }, 1000 , function() {
							$('.introjs-tooltip').removeClass('hide');
							$("#addressDiv").removeClass("opacity00");
							$("#addressDiv").addClass("z-index1000000");
							$("#temp4").removeClass("blinking-white");
							var text = "Here the two variables <span class='ct-code-b-yellow'>x</span> "+
										" and <span class='ct-code-b-yellow'>y</span> will occupy"+
										" <span class='ct-code-b-yellow'>1 byte</span> and <span class='ct-code-b-yellow'>2 bytes</span> "+
										" of memory.";
							typing($(".introjs-tooltiptext"), text, function() {
								$(".introjs-tooltiptext").append("<b class ='ct-code-b-yellow'>"
										+ " <div id='rtn' class='position display'>show"
										+ "(<div id='xyVal' class='position display'>"
										+ " <div id='t1Div' class='position display'><div id='t1Val' class='position display'>T1</div> <div id='xVal' class='position display'>x</div></div>" 
										+ ", "
										+ " <div id='t2Div' class='position display'><div id='t2Val' class='position display'>T2</div> <div id='yVal' class='position display'>y</div></div>"
										+ "</div>) </div>"); 
								var l1 = $("#rtn").offset();
								var l2 = $("#show").offset();
								var topLength = l2.top - l1.top;
								var leftLength = l2.left - l1.left;
								TweenMax.from("#rtn", 1, {top : topLength, left : leftLength, onComplete:function() {
									TweenMax.to("#t1Val", 0.5, {rotationX : -90, onComplete:function() {
										$("#t1Val").text("char");
										TweenMax.to("#t1Val", 0.5, {rotationX : 0, onComplete:function() {
											TweenMax.to("#t2Val", 0.5, {rotationX : -90, onComplete:function() {
												$("#t2Val").text("int");
												TweenMax.to("#t2Val", 0.5, {rotationX : 0, onComplete:function() {
													$("#xVal").addClass("blinking-white");
													TweenMax.to("#xBox", 1, {opacity: 1, onComplete: function() {
														$("#xBox").removeClass("opacity00");
														$("#xVal").removeClass("blinking-white");
														$("#yVal").addClass("blinking-white");
														TweenMax.to("#yBox", 1, {opacity: 1, onComplete: function() {
															$("#yBox").removeClass("opacity00");
															$("#yVal").removeClass("blinking-white");
															$("#XVal").text($("#p7").text()).addClass("opacity00");
															transferEffect("#xVal", "#XVal", function() {
																$("#YVal").text($("#p8").text()).addClass("opacity00");;
																transferEffect("#yVal", "#YVal", function() {
																	$("#addressDiv").removeClass("z-index1000000");
																	$(".introjs-nextbutton, .introjs-prevbutton").show();
																});
															});
														}});
													}});		
												}});
											}});
										}});
									}});
								}});
							});
						});
					});
				});
				break;
			}
			break;
		case 'cout':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				var text = "The <span class='ct-code-b-yellow'>cout</span> is used to display the values " +
							"<span class='ct-code-b-yellow'>x</span> and <span class='ct-code-b-yellow'>y</span> " +
							"on the console.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'temp1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Here two <span class='ct-code-b-yellow'>integers</span> are passed to the " +
							"function <span class='ct-code-b-yellow'>show()</span>.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'temp2':
			//$("#addressDiv").addClass("opacity00");	
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Here two <span class='ct-code-b-yellow'>float</span> values are passed to the " +
							"function <span class='ct-code-b-yellow'>show()</span>.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'temp3': 
			//$("#addressDiv").addClass("opacity00");
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Here  <span class='ct-code-b-yellow'>integer</span> and <span class='ct-code-b-yellow'>float</span> " +
							"values are passed to the  function <span class='ct-code-b-yellow'>show()</span>.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'temp4':
			//$("#addressDiv").addClass("opacity00");
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Here  <span class='ct-code-b-yellow'>char</span> and <span class='ct-code-b-yellow'>integer</span> " +
							"values are passed to the  function <span class='ct-code-b-yellow'>show()</span>.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'end':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the end of the <span class='ct-code-b-yellow'>main()</span> function where the program execution ends.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'consoleId':
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "firstLine" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#XVal").text("10");
						$("#YVal").text("20");
						$("#x1, #y1").text("");
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#firstLine").append("<span id='x1' class='ct-sgreen-color'></span>  <span id='y1' class='ct-sgreen-color'></span>");
						$("#x1").text($("#p1").text()).addClass("opacity00");
						$("#xBox").addClass("z-index1000000");
						transferEffect("#coutX", "#x1", function() {
							$("#xBox").removeClass("z-index1000000");
							$("#y1").text($("#p2").text()).addClass("opacity00");
							$("#yBox").addClass("z-index1000000");
							transferEffect("#coutY", "#y1", function() {
								$("#yBox").removeClass("z-index1000000");
								setTimeout(function () {
									introjs.nextStep();
								}, 500);
							});
						});
					}
					
				});
				break;
			case "secondLine" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#XVal").text("10.5");
						$("#YVal").text("20.5");
						$("#x2, #y2").text("");
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#secondLine").append("<span id='x2' class='ct-sgreen-color'></span>  <span id='y2' class='ct-sgreen-color'></span>");
						$("#x2").text($("#p3").text()).addClass("opacity00");
						$("#xBox").addClass("z-index1000000");
						transferEffect("#coutX", "#x2", function() {
							$("#xBox").removeClass("z-index1000000");
							$("#y2").text($("#p4").text()).addClass("opacity00");
							$("#yBox").addClass("z-index1000000");
							transferEffect("#coutY", "#y2", function() {
								$("#yBox").removeClass("z-index1000000");
								setTimeout(function () {
									introjs.nextStep();
								}, 500);
							});
						});
					}
					
				});
				break;
			case "thirdLine" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#XVal").text("10");
						$("#YVal").text("30.5");
						$("#x3, #y3").text("");
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#thirdLine").append("<span id='x3' class='ct-sgreen-color'></span>  <span id='y3' class='ct-sgreen-color'></span>");
						$("#x3").text($("#p5").text()).addClass("opacity00");
						$("#xBox").addClass("z-index1000000");
						transferEffect("#coutX", "#x3", function() {
							$("#xBox").removeClass("z-index1000000");
							$("#y3").text($("#p6").text()).addClass("opacity00");
							$("#yBox").addClass("z-index1000000");
							transferEffect("#coutY", "#y3", function() {
								$("#yBox").removeClass("z-index1000000");
								setTimeout(function () {
									introjs.nextStep();
								}, 500);
							});
						});
					}
				});
				break;
			case "fourthLine" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#XVal").text("A");
						$("#YVal").text("533");
						$("#x4, #y4").text("");
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#fourthLine").append("<span id='x4' class='ct-sgreen-color'></span>  <span id='y4' class='ct-sgreen-color'></span>");
						$("#x4").text($("#p7").text()).addClass("opacity00");
						$("#xBox").addClass("z-index1000000");
						transferEffect("#coutX", "#x4", function() {
							$("#xBox").removeClass("z-index1000000");
							$("#y4").text($("#p8").text()).addClass("opacity00");
							$("#yBox").addClass("z-index1000000");
							transferEffect("#coutY", "#y4", function() {
								$("#yBox").removeClass("z-index1000000");
								setTimeout(function () {
									introjs.nextStep();
								}, 500);
							});
						});
					}
				});
				break;
			}
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