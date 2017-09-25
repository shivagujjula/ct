var introjs;
var typingSpeed = 10;
var scopeClass = function() {
	introGuide();
 	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
 	$("#restart").click(function() {
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
		steps : [{
			element : "#demoTitle",
			intro : '',
			position : "right"
		},{
			element : "#informationDiv", //code
			intro : '',
			animateStep : 'first',
			tooltipClass : "hide"
		},{
			element : "#code", //code
			intro : '',
			position : "right"
		},{ 
			element : "#Outer", 
			intro : '',
			position : "right"
		},{ 
			element : "#object1", 
			intro : '',
			position : "right"
		},{ 
			element : "#animationBox", 
			intro : '',
			animateStep : 'first',
			position : "right"
		},{ 
			element : "#variable", 
			intro : '',
			tooltipClass : 'hide'
		},{
			element : "#animationBox",
			intro : '',
			animateStep : 'second',
			position : "right" 
		},{ 
			element : "#main",
			intro : '',
			
			tooltipClass : "hide"
		},{
			element : "#objVal1",
			intro : '',
			position : "right"
		},{ 
			element : "#value1", 
			intro : '',
			tooltipClass : 'hide'
		},{
			element : "#animationBox",
			intro : '',
			animateStep : 'third',
			position : "right" 
		},{ 
			element : "#cout1", 
			intro : '',
			position : "right"
		},{ 
			element : "#outputDiv", //"#output1",
			intro : '',
			animateStep : 'out1',
			tooltipClass : "hide"
		},{ 
			element : "#func1",
			intro : '',
			tooltipClass : "hide"
		},{ 
			element : "#func2",
			intro : '',
		},{
			element : "#objVal2",
			intro : '',
			position : "right"
		},{
			element : "#value2",
			intro : '',
			tooltipClass : "hide"
		},{
			element : "#animationBox",
			intro : '',
			animateStep : 'forth',
			position : "right" 
		},{ 
			element : "#cout2", //objVal1
			intro : '',
			position : "right"
		},{ 
			element : "#outputDiv", //output2
			intro : '',
			animateStep : 'out2',
			//position : "right"
			tooltipClass : "hide"
		},{ 
			element : "#cout4",
			intro : '',
			position : "right"
		},{ 
			element : "#outputDiv", 
			intro : '',
			animateStep : 'out6',
			tooltipClass : "hide"
		},{
			element : "#informationDiv", 
			intro : '',
			animateStep : "li3",
			tooltipClass : "hide"
		},{
			element : "#informationDiv", 
			intro : '',
			animateStep : "li4",
			tooltipClass : "hide"
		},{
			element : "#code1",
			intro : "",
			position : "right"
		},{ 
			element : "#main1", 
			intro : '',
			tooltipClass : "hide"
		},{
			element : "#Inner",
			intro : "",
			position : "right"
		},{ 
			element : "#object2", 
			intro : '',
			position : "right"
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : 'first',
			position : "right" 
		},{ 
			element : "#variable1", 
			intro : '',
			tooltipClass : 'hide'
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : 'second',
			position : "right" 
		},{ 
			element : "#object3", 
			intro : '',
			position : "right"
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : 'third',
			position : "right" 
		},{ 
			element : "#variable2", 
			intro : '',
			tooltipClass : 'hide'
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : 'forth',
			position : "right" 
		},{
			element : "#objVal3",
			intro : '',
			position : "right"
		},{ 
			element : "#value3", 
			intro : '',
			tooltipClass : 'hide'
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : 'fifth',
			position : "right" 
		},{
			element : "#objVal4",
			intro : '',
			position : "right"
		},{ 
			element : "#value4", 
			intro : '',
			tooltipClass : 'hide'
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : 'sixth',
			position : "right" 
		},{ 
			element : "#cout3", //objVal1
			intro : '',
			
			position : "right"
		},{ 
			element : "#outputDiv", //output3
			intro : '',
			animateStep : 'out3',
			tooltipClass : 'hide'
		},{ 
			element : "#cout5", //objVal1
			intro : '',
			position : "right"
		},{ 
			element : "#outputDiv", //output4
			intro : '',
			animateStep : 'out4',
			tooltipClass : 'hide'
		},{ 
			element : "#restart", 
			intro : '',
			position : "right"
		}]
	});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case "demoTitle":
			$('.introjs-nextbutton').hide();
			var text = "Here we will learn about <b class ='ct-code-b-yellow'>Scope of classes</b> "+
						"and <b class ='ct-code-b-yellow'>Objects</b>.";					
			typing($(".introjs-tooltiptext"), text, function() {
				$(".introjs-nextbutton").show();
			});
		break;
		case "informationDiv" :
			introjs.refresh();
			
			$('#informationDiv').removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			$('#informationDiv').removeClass("opacity00");
			switch (animateStep) {
			case "first":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#li1").fadeTo(300, 1, function() {
					$("#nextButton").fadeTo(300, 1, function() {
						$("#nextButton").click(function() {
			    		$('#nextButton').remove();
			    			$("#li2").fadeTo(300, 1, function() {
			    				$("#nextButton").fadeTo(300, 1, function() {
			    					$("#nextButton").click(function() {
			    						$('#nextButton').remove();
			    						introjs.nextStep();
			    					});
			    				});
			    			});
						});
					});
				});
			});
		break;
		case "li3" :
			$("#animationBox").hide();
			$("#code").remove();
			$("#outputDiv, #output1, #output2").addClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#li3").fadeTo(300, 1, function() {
				$("#nextButton").fadeTo(300, 1, function() {
		    	$("#nextButton").click(function() {
		    		$('#nextButton').remove();
		    			setTimeout(function() {
		    				introjs.nextStep();
		    			},300);
					});
				});
			});
			});
			break;
		case "li4" :
			introjs.refresh();
		//	$(".introjs-helperLayer").one("transitionend", function() {
				$("#li4").fadeTo(300, 1, function() {
					$("#nextButton").fadeTo(300, 1, function() {
						$("#nextButton").click(function() {
							$("#informationDiv").addClass('z-index1000000');
							$("#nextButton").remove();
							
							setTimeout(function() {
								$("#code1").removeClass("hide");
								
								introjs.nextStep();
							}, 300);
						});
					});
				});
		//	});	
			break;
		}
			break;
		case "code" :
			$('.classCode').removeClass("opacity00");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text =	"Here we will learn about <b class ='ct-code-b-yellow'>global class</b> and "+
							"<b class ='ct-code-b-yellow'>global object</b> in this program.";
				typing($('.introjs-tooltiptext'), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "Outer" :
			$('.introjs-nextbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs.refresh();
				$("#Outer").effect("highlight",{color: 'yellow'}, 1200);
				var text = "Here class <b class ='ct-code-b-yellow'>Outer</b>  is a "+
							"<b class ='ct-code-b-yellow'>global class</b> because class is declared outside of all functions."; 
				typing($('.introjs-tooltiptext'), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		
		case "object1" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text =	"<b class ='ct-code-b-yellow'>out</b> is a global object of class "+
							"<b class ='ct-code-b-yellow'>Outer</b>, where this object can be used "+
							"in all the functions to access the members of global class <b class ='ct-code-b-yellow'>Outer</b>.";
				typing($('.introjs-tooltiptext'), text, function() {
					$("#Outer").effect("highlight",{color: 'yellow'}, 1200);
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "animationBox" :
			$("#animationBox").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'first':
			
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				
				$('#object1').addClass('z-index1000000');
				$("#s1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$("#borderBox").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
				var text ="memory is allocated when object <b class ='ct-code-b-yellow'>out</b> is declared.";
				typing($('.introjs-tooltiptext'), text, function() {
					//$("#Outer").effect("highlight",{color: 'yellow'}, 1200);
					$('.introjs-nextbutton').show();
						});
					});
				});
			});
			break;
			case 'second' :
				$('.introjs-helperLayer').one('transitionend',function() {
					$("#variable").addClass('z-index1000000');
						$("#boxParent").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							transferEffect("#variable", "#boxParent", function() {
								$("#one").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
									typing('.introjs-tooltiptext',"memory is allocated for data member "+
											"<span class='ct-code-b-yellow'>id</span>.", function() {
										$('.introjs-nextbutton').show();
									});
								});
							});
						});
					});
				break;
			case 'third' :
				$("#value1").addClass('z-index1000000');
				$('.introjs-helperLayer').one('transitionend',function() {
					transferEffect("#value1", "#boxParent", function() {
						$("#box").text($("#value1").text()).addClass("animated zoomIn").one('animationend', function() {
							typing('.introjs-tooltiptext',"<b class ='ct-code-b-yellow'>501</b> is stored in "+
									"<span class='ct-code-b-yellow'>id</span>.", function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
	
		case "forth" :
			$('.introjs-helperLayer').one('transitionend',function() {
				$("#value2").addClass('z-index1000000');
				transferEffect("#value2", "#boxParent", function() {
					//$("#box").effect(  "bounce", {direction : "down"}, 300);
					$("#box").text($("#value2").text()).addClass("animated zoomIn");
					typing('.introjs-tooltiptext',"<b class ='ct-code-b-yellow'>502</b> is stored in "+
							"<span class='ct-code-b-yellow'>id</span>.", function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
			}
			break;
		case "variable" :
			introjs.refresh();
			$("#object1").removeClass('z-index1000000');
			$('.introjs-helperLayer').one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				},1500);
			});
			break;
		case  "value1":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				},1500);
			});
			break;
		case  "value2":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
					$("#value2").addClass('z-index1000000');
				},1500);
			});
			break;
		case "main":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
			case "objVal1" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"<ul><li>Here accessing the member <b class ='ct-code-b-yellow'>id</b> "+
								"of <b class ='ct-code-b-yellow'>Outer</b> class through global object "+
								"<b class ='ct-code-b-yellow'>out</b> in <b class ='ct-code-b-yellow'>main()</b> "+
								"function.</li><li>The integer value <b class ='ct-code-b-yellow'>501</b> is "+
								"assigned to data member <b class ='ct-code-b-yellow'>id</b> of global object "+
								"<b class ='ct-code-b-yellow'>out</b>.</li></ul>";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "cout1" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"<b class ='ct-code-b-yellow'>cout</b> statement displays the value of "+
								"<b class ='ct-code-b-yellow'>id</b> through <b class ='ct-code-b-yellow'>out</b> object on console.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "outputDiv" : //"output1" :
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case "out1": 
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputDiv").removeClass("opacity00");
					//$("#output1").removeClass("opacity00");
					$("#outputBody").append("<span><b class ='ct-green-color' id='outResult1'>501</b><span><br>");
					setTimeout(function() {
						introjs.nextStep();
					}, 1500);
				
				});
				break;
				case "out2" :
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#outputDiv").removeClass("opacity00");
						$("#outputBody").append("<b class ='ct-green-color' id='outResult2'>502</b><br>");
						setTimeout(function() {
							introjs.nextStep();
						}, 1500);
					});
				break;
				case "out6" :
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#outputDiv").removeClass("opacity00");
						$("#outputBody").append("<b class ='ct-green-color' id='outResult3'>502</b>");
						setTimeout(function() {
							introjs.nextStep();
						}, 1500);
					});
				break;
				case "out3" :
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#outputDiv").removeClass("opacity00");
						$("#outResult1, #outResult2, #outResult3").addClass("hide");
						$("#outResult1").replaceWith("<b class ='ct-green-color' id='outResult4'>36</b>");
						setTimeout(function() {
							introjs.nextStep();
						}, 1500);
					});
				break;
				case "out4" :
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#outputDiv").removeClass("opacity00");
						$("#outResult4").append("<br><b class ='ct-green-color' id='outResult5'>401</b>");
						setTimeout(function() {
							introjs.nextStep();
						}, 1500);
					});
				break;
				case "out5" :
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#outputDiv").removeClass("opacity00");
						$("#outputBody").append("<div id='err'><b class ='ct-red-color'>error :</b> "+
									"<b class ='ct-code-b-yellow'>inn</b> was not declared in "+
									"<b class ='ct-code-b-yellow'>display()</b> scope</div>");
						var text =	"since <b class ='ct-code-b-yellow'>inn</b> is <b class ='ct-code-b-yellow'>local</b> "+
									"object of class <b class ='ct-code-b-yellow'>Inner</b> in <b class ='ct-code-b-yellow'>main()</b> "+
									"function. so, local objects are used only in that particular scope.";
						typing($('.introjs-tooltiptext'), text, function() {
							$('.introjs-nextbutton').show();
							
						});
					});
				break;
				}
			break;
			case "func1":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				});
			break;
			case "func2":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text ="Here in <b class ='ct-code-b-yellow'>display()</b> function.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "objVal2" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"<ul><li>Here accessing the member <b class ='ct-code-b-yellow'>id</b> of "+
								"<b class ='ct-code-b-yellow'>Outer</b> class through global object "+
								"<b class ='ct-code-b-yellow'>out</b> in <b class ='ct-code-b-yellow'>dispaly()</b> "+
								"function.</li><li>The integer value <b class ='ct-code-b-yellow'>502</b> is assigned "+
								"to data member <b class ='ct-code-b-yellow'>id</b> of global object "+
								"<b class ='ct-code-b-yellow'>out</b> in <b class ='ct-code-b-yellow'>display()</b> "+
								"function.</li></ul>";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "cout2" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"<b class ='ct-code-b-yellow'>cout</b> statement displays "+
								"<b class ='ct-code-b-yellow'>502</b> on console.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
						
					});
				});
			break;
			case "cout4" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"<b class ='ct-code-b-yellow'>cout</b> statement displays value of "+
								"<b class ='ct-code-b-yellow'>id</b> i.e <b class ='ct-code-b-yellow'>502</b> on console.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
						
					});
				});
			break;
			case "main1" :
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				});
				break;
			case "Inner" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here class <b class ='ct-code-b-yellow'>Inner</b> is a "+
								"<b class ='ct-code-b-yellow'>local class</b> because class "+
								"is declared inside of <b class ='ct-code-b-yellow'>main</b> function."; 
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "object2" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"<b class ='ct-code-b-yellow'>inn</b> is a local object of class "+
								"<b class ='ct-code-b-yellow'>Inner</b> and this <b class ='ct-code-b-yellow'>inn</b> "+
								"object is used only in <b class ='ct-code-b-yellow'>main()</b> function.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				$("#animationBox2").removeClass("hide");
				$("#animationBox").removeClass("opacity00");
				break;
			case "animationBox2":
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'first':
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
				$('#object2').addClass('z-index1000000');
				$("#s2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#borderBox1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							typing($('.introjs-tooltiptext'), "memory is allocated when object "+
									"<b class ='ct-code-b-yellow'>inn</b> is declared.", function() {
						$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
				case 'second':
					$(".introjs-helperLayer").one('transitionend', function() {
						$("#variable1").addClass('z-index1000000');
						$("#boxParent2").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							transferEffect("#variable1", "#boxParent2", function() {
								$("#three").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								typing(".introjs-tooltiptext", "memory is allocated for data member "+
										"<span class='ct-code-b-yellow'>age</span>.", function() {
									$(".introjs-nextbutton").show();
								});
							});
						});
						});
					});
					break;
				case 'third':
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#object3").addClass('z-index1000000');
						$("#s3").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#borderBox2").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								typing($('.introjs-tooltiptext'), "memory is allocated when local object "+
										"<b class ='ct-code-b-yellow'>out</b> is declared.", function() {
									$('.introjs-nextbutton').show();
								});
							});
									});
							});
					break;
				case 'forth':
					$(".introjs-helperLayer").one('transitionend', function() {
						$("#variable2").addClass('z-index1000000');
						$("#boxParent3").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							transferEffect("#variable2", "#boxParent3", function() {
								$("#four").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								typing(".introjs-tooltiptext", "memory is allocated for data member "+
										"<span class='ct-code-b-yellow'>id</span>.", function() {
									$(".introjs-nextbutton").show();
									});
								});
							});
						});
					});
					break;
				case 'fifth' :
					$("#value3").addClass('z-index1000000');
					$('.introjs-helperLayer').one('transitionend',function() {
						transferEffect("#value3", "#boxParent2", function() {
							$("#box2").text($("#value3").text()).addClass("animated zoomIn").one('animationend', function() {
								typing('.introjs-tooltiptext',"<b class ='ct-code-b-yellow'>36</b> is stored in "+
										"<span class='ct-code-b-yellow'>age</span>.", function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
					break;
				case 'sixth' :
					$("#value4").addClass('z-index1000000');
					$('.introjs-helperLayer').one('transitionend',function() {
						transferEffect("#value4", "#boxParent3", function() {
							$("#box3").text($("#value4").text()).addClass("animated zoomIn").one('animationend', function() {
								typing('.introjs-tooltiptext',"<b class ='ct-code-b-yellow'>401</b> is stored in "+
										"<span class='ct-code-b-yellow'>id</span>.", function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
					break;
				}
			break;
			case "variable1" :
				introjs.refresh();
				$("#object2").removeClass('z-index1000000');
				$('.introjs-helperLayer').one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep();
					},1500);
				});
				break;
			case "variable2" :
				introjs.refresh();
				$("#object3").removeClass('z-index1000000');
				$('.introjs-helperLayer').one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep();
					},1500);
				});
				break;
			case "object3" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"<b class ='ct-code-b-yellow'>out</b> is a local object for class "+
								"<b class ='ct-code-b-yellow'>Outer</b> and this object can be used "+ 
								"to access members of <b class ='ct-code-b-yellow'>Outer</b> class "+
								"only in <b class ='ct-code-b-yellow'>main()</b> function.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "objVal3" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"Integer value  <b class ='ct-code-b-yellow'>36</b> is assigned to " +
								"data member <b class ='ct-code-b-yellow'>age</b> of <b class ='ct-code-b-yellow'>"+
								"Inner</b> class through local object <b class ='ct-code-b-yellow'>inn</b>.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case  "value3":
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep();
						$("#value3").addClass('z-index1000000');
					},1500);
				});
				break;
			case "objVal4" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"Here accessing the member <b class ='ct-code-b-yellow'>id</b> of "+
								"<b class ='ct-code-b-yellow'>Outer</b> class through local object "+
								"<b class ='ct-code-b-yellow'>out</b> in <b class ='ct-code-b-yellow'>"+
								"main()</b> function.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case  "value4":
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep();
						$("#value4").addClass('z-index1000000');
					},1500);
				});
				break;
			case "cout3" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"<b class ='ct-code-b-yellow'>cout</b> statement displays "+
								"the value of <b class ='ct-code-b-yellow'>age</b>  on console.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "cout5" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"<b class ='ct-code-b-yellow'>cout</b> statement "+
								"displays the value of <b class ='ct-code-b-yellow'>id</b> on console.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "code1" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text =	"This example explains about <b class ='ct-code-b-yellow'>local class</b> "+
								"and <b class ='ct-code-b-yellow'>local object</b>.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "objVal5" :
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case "obj1": 
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#value3").hide();
					$("#value4").hide();
					var text =	"Here accessing the member <b class ='ct-code-b-yellow'>age</b> of "+
								"<b class ='ct-code-b-yellow'>Inner</b> class through local object i.e, "+
								"<b class ='ct-code-b-yellow'>inn</b><br> of <b class ='ct-code-b-yellow'>main()</b> "+
								"function in <b class ='ct-code-b-yellow'>display()</b> function." +
								"It gives <b class ='ct-red-color'>error</b>.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				case "obj2": 
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#objVal5").prepend("//");
						$(".introjs-helperLayer").css("width", "137");
						var text =	"Thus, Local object of <b class ='ct-code-b-yellow'>main</b> "+
									"function is invalid in <b class ='ct-code-b-yellow'>display()</b>. "+
									"so, we cannot use it for accessing the members.";
						typing($('.introjs-tooltiptext'), text, function() {
							$('.introjs-nextbutton').show();
						});
					});
					break;
				}
			break;	
			case "restart":
			$("#err").hide();
			$('.introjs-tooltip').css({'min-width' : '120px'});
			$('#restart').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart";
				typing($(".introjs-tooltiptext"), text, function() {
				});
			});
			break;
			}
		});
	introjs.start();
	$('.introjs-nextbutton, .introjs-prevbutton').hide();
	$('.introjs-skipbutton, .introjs-bullets').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: 'yellow'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index1000000");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function fadefunction(selector) {
	$('.introjs-nextbutton').hide();
	$(selector).fadeTo(300, 1, function() {
		$("#nextButton").fadeTo(300, 1, function() {
			$("#nextButton").click(function() {
				$('#nextButton').remove();
	   	   		setTimeout(function() {
	   	   			introjs.nextStep();
	   	   		},300);
			});
		});
	});
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