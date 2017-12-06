var typingInterval = 5;
var arr = [];
var iVal;
var overloadingIncrementAndDecrementOperatorsReady = function() {
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
			tooltipClass : 'hide',
		}, {
			element : '#main',
			intro : '',
			position : "right",
			tooltipClass : 'hide',
		}, {
			element : '#s1Init',
			intro : "",
			tooltipClass : "hide",
			position : "right",
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 's1Address',
			tooltipClass : 'hide',
		}, {
			element : '#SamplePara',
			intro : "",
			position : "right",
			tooltipClass : 'hide',
		}, {
			element : '#diffObj',
			intro : "", 
			tooltipClass : 'hide',
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'diffObjMemory',
			tooltipClass : 'hide',
		}, {
			element : '#s2PreInc',
			intro : "",
			animateStep : 'firstStep',
			tooltipClass : "hide",
			position : "right",
		}, {
			element : '#preInc',
			intro : "",
			tooltipClass : 'hide',
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'boxHeading1',
			tooltipClass : 'hide',
		}, {
			element : '#preIncS1',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'sAddress',
			tooltipClass : 'hide',
		}, {
			element : '#aPreInc',
			intro : "",
			position : "right",
			tooltipClass : 'hide'
		}, {
			element :"#s1PreIncVal",
			intro : "",
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'animationDiv',
			tooltipClass : 'hide'
		}, {
			element : '#return',
			intro : "",
		}, {
			element : '#s2PreInc',
			intro : "",
			animateStep : 'secondStep',
			tooltipClass : 'hide',
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 's2Address',
			tooltipClass : 'hide'
		}, {
			element : '#s1PutData',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's1Value',
			tooltipClass : 'hide',
		}, {
			element : '#s2PutData',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's2Value',
			tooltipClass : 'hide',
		}, {
			element : '#s3PostInc',
			intro : "",
			animateStep : 'firstStep',
			tooltipClass : "hide",
			position : "right"
		}, {
			element : '#postInc',
			intro : "",
			tooltipClass : 'hide',
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'boxHeading2',
			tooltipClass : 'hide',
		}, {
			element : '#postIncS1',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'sAddress',
			tooltipClass : 'hide',
		}, {
			element :"#s1PostIncVal",
			intro : "",
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'animationDiv1',
			tooltipClass : 'hide'
		}, {
			element :"#aPostIncVal",
			intro : "",
			position : "right",
			tooltipClass : "hide",
		}, {
			element : '#return1',
			intro : "",
		}, {
			element : '#s3PostInc',
			intro : "",
			animateStep : 'secondStep',
			tooltipClass : 'hide',
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 's3Address',
			tooltipClass : 'hide',
				
		}, {
			element : '#s1PutData1',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's1Value1',
			tooltipClass : 'hide',
		}, {
			element : '#s3PutData',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's3Value',
			tooltipClass : 'hide',		
		}, {
			element : '#s4PreDec',
			intro : "",
			animateStep : 'firstStep',
			tooltipClass : "hide",
			position : "right"
		}, {
			element : '#preDec',
			intro : "",
			tooltipClass : 'hide',
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'boxHeading3',
			tooltipClass : 'hide',
		}, {
			element : '#preDecS1',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'sAddress',
			tooltipClass : 'hide',
		}, {
			element : '#aPreDecVal',
			intro : "",
			position : "right",
			tooltipClass : "hide",
		}, {
			element :"#s1PreDecVal",
			intro : "",
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'animationDiv2',
			tooltipClass : 'hide'
		}, {
			element : '#return2',
			intro : "",
		}, {
			element : '#s4PreDec',
			intro : "",
			animateStep : 'secondStep',
			tooltipClass : 'hide'
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 's4Address',
			tooltipClass : 'hide',
		}, {
			element : '#s1PutData2',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's1Value2',
			tooltipClass : 'hide',
		}, {
			element : '#s4PutData',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's4Value',
			tooltipClass : 'hide',	
				
		}, {
			element : '#s5PostDec',
			intro : "",
			animateStep : 'firstStep',
			tooltipClass : "hide",
			position : "right"
		}, {
			element : '#postDec',
			intro : "",
			tooltipClass : 'hide',
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'boxHeading4',
			tooltipClass : 'hide',
		}, {
			element : '#postDecS1',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'sAddress',
			tooltipClass : 'hide',
		}, {
			element :"#s1PostDecVal",
			intro : "",
			position : "right"
		}, {
			element : '#locVarAddress',
			intro : "",
			animateStep : 'animationDiv3',
			tooltipClass : 'hide'
		}, {
			element :"#aPostDecVal",
			intro : "",
			position : "right",
			tooltipClass : "hide",
		}, {
			element : '#return3',
			intro : "",
		}, {
			element : '#s5PostDec',
			intro : "",
			animateStep : 'secondStep',
			tooltipClass : 'hide'
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 's5Address',
			tooltipClass : 'hide',
		}, {
			element : '#s1PutData3',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's1Value3',
			tooltipClass : 'hide',
		}, {
			element : '#s5PutData',
			intro : '',
		}, {
			element :"#putData",
			intro : "",
		}, {
			element :"#printA",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 's5Value',
			tooltipClass : 'hide',
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
			$("#class").fadeTo("slow" , 0);
			break;
		case 'class':
			$("#class, #init, #Sample, #SamplePara, #putData").fadeTo("slow" , 0);
			$("#main").addClass("opacity00");
			break;
		case 'main':	
			$("#s1Init").addClass("opacity00");
			break;
		case 's1Init':
			$("#s1Init").addClass("opacity00");
			break;
		case 'SamplePara':	
			$("#s1Val").text("");
			$("#diffObj").addClass("opacity00");
			break;
		case 'diffObj':
			$("#diffObj, #s2PreInc").addClass("opacity00");
			break;
		case 's2PreInc':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$("#s2PreInc, #preInc").addClass("opacity00");
				$("#sAddress").addClass("opacity00");
				break;
		}
		break;
		case 's3PostInc':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$("#s3PostInc, #postInc").addClass("opacity00");
				$("#sAddress").addClass("opacity00");
				break;
			}
			break;
		case 's4PreDec':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$("#s4PreDec, #preDec").addClass("opacity00");
				$("#sAddress").addClass("opacity00");
				break;
			}
			break;
		case 's5PostDec':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$("#s5PostDec, #postDec").addClass("opacity00");
				$("#sAddress").addClass("opacity00");
				break;
			}
			break;
		case "locVarAddress" :
			//$("#locVarAddress").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "boxHeading1" :
				$("#boxHeading1").show();
				$("#boxHeading2, #boxHeading3, #boxHeading4").hide();
				
				break;
			case "boxHeading2" :
				$("#boxHeading2").show();
				$("#boxHeading1, #boxHeading3, #boxHeading4").hide();
				break;
			case "boxHeading3" :
				$("#boxHeading3").show();
				$("#boxHeading1, #boxHeading2, #boxHeading4").hide();
				break;
			case "boxHeading4" :
				$("#boxHeading4").show();
				$("#boxHeading1, #boxHeading2, #boxHeading3").hide();
				break;
			}
			break;
		case 'preInc':
		case 'postInc':
		case 'preDec':
		case 'postDec':
			$("#" + elementId).show();
			$("#sVal").text("");
			break;
		case 'preIncS1':
			$("#s1Val").text(5);
			$("#sAddress").addClass("opacity00");
			break;
		case 'preDecS1':
			$("#s1Val").text(6);
			$("#sAddress").addClass("opacity00");
			break;
		case 'postIncS1':
			$("#s1Val").text(7);
			$("#sAddress").addClass("opacity00");
			break;
		case 'postDecS1':
			$("#s1Val").text(6);
			$("#sAddress").addClass("opacity00");
			break;
		case "addressDiv" :
			$("#addressDiv").addClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "s1Address" :
				break;
			case "aInS1Box" :
				break;
			case "diffObjMemory" :
				TweenMax.to("#varBox2, #s2Address, #aBox, #s3Address, #aBox1, " +
						"#s4Address, #aBox2,#s5Address, #aBox3", 1, {opacity: 0});
			}
			break;
		case 'aPreInc':
			$("#aPreInc").addClass("opacity00");
			$("#s1Val").text(5);
			break;
		case 'aPostIncVal':
			$("#aPostIncVal").addClass("opacity00");
			$("#s1Val").text(6);
			break;
		case 'aPreDecVal':
			$("#aPreDecVal").addClass("opacity00");
			$("#s1Val").text(7);
			break;
		case 'aPostDecVal':
			$("#aPostDecVal").addClass("opacity00");
			$("#s1Val").text(6);
			break;
		case 's1PreIncVal':
		case 's1PostIncVal':
			$("#sVal").text("");
			$("#s1Val").text(6);
			break;
		case 's1PreDecVal':
		case 's1PostDecVal':
			$("#sVal").text("");
			$("#s1Val").text(6);
			break;
		case 's1PutData':
			$("s1Value").addClass("opacity00");
			break;
		case 's1PutData1':
			$("s1Value1").addClass("opacity00");
			break;
		case 's1PutData2':
			$("#s1Value2").addClass("opacity00");
			break;
		case 's1PutData3':
			$("#s1Value3").addClass("opacity00");
			break;
		case "s2PutData" :
			$("#s2Value").addClass("opacity00");
			break;
		case "s3PutData" :
			$("#s3Value").addClass("opacity00");
			break;
		case "s4PutData" :
			$("#s4Value").addClass("opacity00");
			break;
		case "s5PutData" :
			$("#s5Value").addClass("opacity00");
			break;
		case 'return':
		case 'return1':
		case 'return2':
		case 'return3':
			/*iVal = 2;
			$("#s" + iVal + "Val").text("");
			iVal++;*/
			$("#s1Address").removeAttr("style");
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
			$("#preInc, #postInc, #preDec, #postDec").hide();
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list").fadeTo(300, 1, function() {
				$("#list1").fadeTo(300, 1, function() {
					$("#list2").fadeTo(300, 1, function() {
						$("#list3").fadeTo(300, 1, function() {
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
			});
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext', "Let us consider a sample " +
						"program to overload <span class='ct-code-b-yellow'>prefix</span> "+
						"and <span class='ct-code-b-yellow'>postfix</span> "+
						"<span class='ct-code-b-yellow'>increment</span> "+
						"and <span class='ct-code-b-yellow'>decrement</span> operators.", function() {
					$(".introjs-nextbutton").show();
					$(".introjs-prevbutton").hide();
				});
			});
			break;
		case 'class':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				var text = "This is the class  <span class='ct-code-b-yellow'>Sample</span>" +
							" which consists of a private member <span class='ct-code-b-yellow'>num</span>" +
							" and different member functions in public section.";
				typing(".introjs-tooltiptext",text, function() {
					$("#class").fadeTo("slow" , 1, function() {
						$("#init").fadeTo("slow" , 1, function() {
							$("#Sample").fadeTo("slow" , 1, function() {
								$("#SamplePara").fadeTo("slow" , 1, function() {
									$("#putData").fadeTo("slow" , 1, function() {
										$(".introjs-nextbutton, .introjs-prevbutton").show();
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
				$('.introjs-tooltip').removeClass('hide');
				var text = 	"<span class='ct-code-b-yellow'>main()</span> is the starting point of execution.";
				typing(".introjs-tooltiptext", text, function() {
					$("#main").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 's1Init':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#s1Address").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				$('.introjs-tooltiptext').css("width", "250px");
				var text = 	"<ul><li>Here <span class='ct-code-b-yellow'>s1</span> is " +
							"an object of class <span class='ct-code-b-yellow'>Sample</span></li>" +
							"<li>When an object is created, memory allocated for that object.</li>" +
							"<li>After memory allocation it will call either a " +
							"<span class='ct-code-b-yellow'>default constructor</span> when no arguments " +
							"is passed or <span class='ct-code-b-yellow'>parameterized constructor</span> " +
							"when different arguments are passed.</li></ul>";
				typing(".introjs-tooltiptext",text, function() {
					$("#s1Init").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'SamplePara':
			$('.introjs-tooltiptext').removeAttr("style");
			$('#SamplePara').removeClass('opacity00');
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				$(".introjs-tooltiptext").append("<span id='sample' class='position ct-code-b-yellow opacity00'>Sample"
								+ " (<span id='xTip' class='position'>int x</span>) {</span>");
				$('#sample').removeClass('opacity00');
				fromEffectWithTweenMax("#SampleInt", "#sample", function() {
					/*$("#xTip").text("5");
					fromEffectWithTweenMax("#xInit", "#xTip", function() {*/
						 $(".introjs-tooltiptext").append("<br>&emsp;<span id='aVal' class='position ct-code-b-yellow opacity00'>"
								 	+ " num = <span id='xVal' class='position'>x</span>;</span><br><span class='ct-code-b-yellow'>}</span>");
						 $('#aVal').removeClass('opacity00');
						 $('#aValue').addClass('blinking-white');
						 fromEffectWithTweenMax("#aValue", "#aVal", function() {
							 $('#aValue').removeClass('blinking-white');
							 $('#xVal').text("5");
							 $('#s1Init').addClass('blinking-white');
							 fromEffectWithTweenMax("#num", "#xVal", function() {
								 $("#s1Val").text("5").addClass('opacity00');
								 //$('#aBoxS1').addClass('z-index1000000');
								 $('#s1Val').removeClass("opacity00");
								 $('#s1Init').removeClass('blinking-white');
								 $('#aBoxS1').css("z-index", "10000010");
								 fromEffectWithTweenMax("#xVal", "#s1Val", function() {
									 $('#aBoxS1').css('z-index', '');
									 $(".introjs-nextbutton, .introjs-prevbutton").show();
								 });
							 });
						 });
					/* });*/
				 });
			});
			break;
		case 'diffObj':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass("hide");
				var text = "<ul><li>New objects <span class='ct-code-b-yellow'>s2</span>, <span class='ct-code-b-yellow'>s3</span>, " +
		 				"<span class='ct-code-b-yellow'>s4</span>, <span class='ct-code-b-yellow'>s5</span> " +
		 				"are create to the class <span class='ct-code-b-yellow'>Sample</span></li>" +
		 				"<li>Memory is allocated for each and every object.</li>"; 
				typing(".introjs-tooltiptext",text, function() {
					$("#diffObj").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 's2PreInc':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
			//	$("#s1Address").removeClass("z-index1000000");
				$("#boxHeading2, #boxHeading3, #boxHeading4").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').css("width", "250px");
					var text = "<ul><li>In the statement <span class='ct-code-b-yellow'>s2 = ++s1</span>,"+
							   " first <span class='ct-code-b-yellow'>pre increment operation</span> is done and" +
	 				           " next the <span class='ct-code-b-yellow'>assignment operation</span> is done.</li>" +
	 				           " <li><span class='ct-code-b-yellow'>s2 = ++s1</span> is executed as<br>" +
	 				           " <span class='ct-code-b-yellow'>s2 = s1.operator ++();</span></li>";
					typing(".introjs-tooltiptext",text, function() {
						$("#s2PreInc").removeClass("opacity00");
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'secondStep':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#s2Val").text("");
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					}
				});
				break;
			}
			break;
		case 'preInc':
		case 'postInc':
		case 'preDec':
		case 'postDec':
			$("#sBox, #aBoxS").addClass("opacity00");
			$('.introjs-tooltiptext').removeAttr("style");
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'> operator function ++ </span> "+
						   "is written as <span class='ct-code-b-yellow'>memeber function</span> " +
						   "in class <span class='ct-code-b-yellow'>Sample</span>."; 
				$('.introjs-tooltip').removeClass("hide");
				typing(".introjs-tooltiptext", text, function() {
					$("#" + elementId).removeClass("opacity00");
					$("#" + elementId).show();
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'preIncS1':
		case 'preDecS1':
		case 'postIncS1':
		case 'postDecS1':
			$('.introjs-helperLayer').one("transitionend", function() {
				$('.introjs-tooltip').removeClass("hide");
				var text = "Here, <span class='ct-code-b-yellow'>s</span> is an object of sample is created.";
				typing(".introjs-tooltiptext", text, function() {
					//$("#" + elementId).removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'aPreInc':
			$("#aPreInc").removeClass("opacity00");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#aPreInc").effect( "highlight",{color: 'red'}, 800,function() {
					$(".introjs-tooltiptext").append("<span id='aSum' class='position ct-code-b-yellow opacity00'>num = <span id ='total' class='position'><span id='a1' class='position'>num<span> + <span id='one1' class='position'>1</span>;</span></span>");
					$('.introjs-tooltip').removeClass("hide");
					$('#aSum').removeClass('opacity00');
					fromEffectWithTweenMax("#aPreInc", "#aSum", function() {
					$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
							$('.user-btn').remove(); 
							$("#aSum").append("<br><span id='aSum1' class='position opacity00'>s1.num = "
									+ "<span id ='tot' class='position'><span id='a' class='position'>s1.num</span> "
									+ "<span id='one' class='position'>+ 1</span></span>;</span>");
							$('#aSum1').removeClass('opacity00');
							fromEffectWithTweenMax("#aSum", "#aSum1", function() {
								$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
								$('.user-btn').click(function() { 
									$('.user-btn').remove(); 
									fadeInBounceEffectWithTimelineMax("#s1Val", "#a", function() {
										$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
										$('.user-btn').click(function() { 
											$('.user-btn').remove(); 
											var t = parseInt($("#s1Val").text()) + 1;
											rotation('#tot', t, function() {
												$('#s1Val').removeClass('opacity00');
												 $('#aBoxS1').css("z-index", "10000010");
												fadeInBounceEffectWithTimelineMax("#tot", "#s1Val", function() {
													$("#aBoxS1").css('z-index', '');
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
			break;
		case 's1PreIncVal':
		case 's1PostIncVal':
		case 's1PreDecVal':
		case 's1PostDecVal':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = 	"Here <span class='ct-code-b-yellow'>num</span> is "+
							"assigned to <span class='ct-code-b-yellow'>s.num</span>"+
							"<br> i.e <span class='ct-code-b-yellow'>s.num = s1.num</span>."; 
				typing(".introjs-tooltiptext", text, function() {
					$("#" + elementId).removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'return':
		case 'return1':
		case 'return2':
		case 'return3':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "It returns the value of s.";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
		case 's1PutData':
		case 's1PutData1':
		case 's1PutData2':
		case 's1PutData3':
			//$("#sVal").text("");
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = 	"The member function <span class='ct-code-b-yellow'>putData()</span>" +
							" is called by the  object <span class='ct-code-b-yellow'>s1</span>";
				typing(".introjs-tooltiptext",text, function() {
					$("#" + elementId).removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'putData':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = 	"The member function <span class='ct-code-b-yellow'>putData()</span>"+
							" is used to print the  <span class='ct-code-b-yellow'>num</span>.";
				typing(".introjs-tooltiptext",text, function() {
					$("#putData").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'printA':
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				}
		});
		break;
		case 's2PutData':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = 	"The member function <span class='ct-code-b-yellow'>putData()</span>" +
							" is called by the  object <span class='ct-code-b-yellow'>s2</span>";
				typing(".introjs-tooltiptext",text, function() {
					$("#s2PutData").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 's3PostInc':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				//$("#s2Address").removeClass("z-index1000000");
				$("#boxHeading1, #boxHeading2, #boxHeading4").hide();
				$('.introjs-helperLayer').one("transitionend", function() {
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').css("width", "250px");
					var text = "<ul><li>In the statement <span class='ct-code-b-yellow'>s3 = s1++</span>,"+
							   " first <span class='ct-code-b-yellow'>assignment operation</span> is done and" +
					           " next the <span class='ct-code-b-yellow'>post increment operation</span> is done.</li>" +
					           " <li><span class='ct-code-b-yellow'>s3 = s1++</span> is executed as<br>" +
					           " <span class='ct-code-b-yellow'>s3 = s1.operator ++(int);</span><br>" +
					           " Here <span class='ct-code-b-yellow'>int</span> is used as dummy" +
					           " argument to distinguish between <span class='ct-code-b-yellow'>prefix</span>" +
					           " and <span class='ct-code-b-yellow'>postfix</span> operators.</li>";
					typing(".introjs-tooltiptext",text, function() {
						$("#s3PostInc").removeClass("opacity00");
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'secondStep':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#s3Val").text("");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}
				});
				break;
			}
			break;
		case 'aPostIncVal':
			$("#aPostIncVal").removeClass("opacity00");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				$("#aPostIncVal").effect( "highlight",{color: 'red'}, 800,function() {
					$(".introjs-tooltiptext").append("<span id='aSum' class='ct-code-b-yellow position opacity00'>num = <span id ='total' class='position'><span id='a1' class='position'>num<span> + <span id='one1' class='position'>1</span>;</span></span>");
					$('.introjs-tooltip').removeClass("hide");
					$('#aSum').removeClass('opacity00');
					fromEffectWithTweenMax("#aPostIncVal", "#aSum", function() {
					$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
						$('.user-btn').remove(); 
							$("#aSum").append("<br><span id='aSum1' class='position opacity00'>s1.num = "
									+ "<span id ='tot' class='position'><span id='a' class='position'>s1.num</span> "
									+ "<span id='one' class='position'>+ 1</span></span>;</span>");
							$('#aSum1').removeClass('opacity00');
							fromEffectWithTweenMax("#aSum", "#aSum1", function() {
								$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
								$('.user-btn').click(function() { 
									$('.user-btn').remove(); 
									fadeInBounceEffectWithTimelineMax("#s1Val", "#a", function() {
										$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
										$('.user-btn').click(function() { 
											$('.user-btn').remove(); 
											var t = parseInt($("#s1Val").text()) + 1;
											rotation('#tot', t, function() {
												$('#s1Val').removeClass('opacity00');
												 $('#aBoxS1').css("z-index", "10000010");
												 fadeInBounceEffectWithTimelineMax("#tot", "#s1Val", function() {
													 $("#aBoxS1").css('z-index', '');
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
			break;
		case 's3PutData':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = 	"The member function <span class='ct-code-b-yellow'>putData()</span>" +
							" is called by the  object <span class='ct-code-b-yellow'>s3</span>";
				typing(".introjs-tooltiptext",text, function() {
					$("#s3PutData").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 's4PreDec':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$("#boxHeading1, #boxHeading2, #boxHeading3").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').css("width", "250px");
					var text = "<ul><li>In the statement <span class='ct-code-b-yellow'>s4 = --s1</span>,"+
							   " first <span class='ct-code-b-yellow'>pre decrement operation</span> is done and" +
					           " next the <span class='ct-code-b-yellow'>assignment operation</span> is done.</li>" +
					           " <li><span class='ct-code-b-yellow'>s4 = --s1</span> is executed as<br>" +
					           " <span class='ct-code-b-yellow'>s4 = s1.operator --();</span></li>";
					typing(".introjs-tooltiptext",text, function() {
						$("#s4PreDec").removeClass("opacity00");
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'secondStep':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							$("#s4Val").text("");
							introjs.previousStep();
						}, 1000);
					} else {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}
				});
				break;
			}
			break;
		case 'aPreDecVal':
			$("#aPreDecVal").removeClass("opacity00");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#aPreDecVal").effect( "highlight",{color: 'red'}, 800,function() {
					$(".introjs-tooltiptext").append("<span id='aSub' class='ct-code-b-yellow position opacity00'>num = <span id ='total' class='position'><span id='a1' class='position'>num<span> - <span id='one1' class='position'>1</span>;</span></span>");
					$('.introjs-tooltip').removeClass("hide");
					$('#aSub').removeClass('opacity00');
					fromEffectWithTweenMax("#aPreDecVal", "#aSub", function() {
						$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
							$('.user-btn').remove(); 
							$("#aSub").append("<br><span id='aSub1' class='position opacity00'>s1.num = "
									+ "<span id ='tot' class='position'><span id='a' class='position'>s1.num</span> "
									+ "<span id='one' class='position'>- 1</span></span>;</span>");
							$('#aSub1').removeClass('opacity00');
							fromEffectWithTweenMax("#aSub", "#aSub1", function() {
								$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
								$('.user-btn').click(function() { 
									$('.user-btn').remove(); 
									fadeInBounceEffectWithTimelineMax("#s1Val", "#a", function() {
										$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
										$('.user-btn').click(function() { 
											$('.user-btn').remove(); 
											var t = parseInt($("#s1Val").text()) - 1;
											rotation('#tot', t, function() {
												$('#s1Val').removeClass('opacity00');
												$('#aBoxS1').css("z-index", "10000010");
												fadeInBounceEffectWithTimelineMax("#tot", "#s1Val", function() {
													$("#aBoxS1").css('z-index', '');
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
			break;
		case 's4PutData':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = 	"The member function <span class='ct-code-b-yellow'>putData()</span>" +
							" is called by the  object <span class='ct-code-b-yellow'>s4</span>";
				typing(".introjs-tooltiptext",text, function() {
					$("#s4PutData").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 's5PostDec':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$("#boxHeading2, #boxHeading3, #boxHeading4").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').css("width", "250px");
					var text = "<ul><li>In the statement <span class='ct-code-b-yellow'>s5 = s1--</span>,"+
							   " first <span class='ct-code-b-yellow'>assignment operation</span> is done and" +
					           " next the <span class='ct-code-b-yellow'>post decrement operation</span> is done.</li>" +
					           " <li><span class='ct-code-b-yellow'>s5 = s1--</span> is executed as<br>" +
					           " <span class='ct-code-b-yellow'>s5 = s1.operator --(int);</span><br>" +
					           "Here <span class='ct-code-b-yellow'>int</span> is used as dummy" +
					           " argument to distinguish between <span class='ct-code-b-yellow'>prefix</span>" +
					           " and <span class='ct-code-b-yellow'>postfix</span> operators.</li>";
					typing(".introjs-tooltiptext", text, function() {
						$("#s5PostDec").removeClass("opacity00");
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'secondStep':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#s5Val").text("");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}
				});
				break;
			}
			break;
		case 'aPostDecVal':
			$("#aPostDecVal").removeClass("opacity00");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#aPostDecVal").effect( "highlight",{color: 'red'}, 800,function() {
					$(".introjs-tooltiptext").append("<span id='aSub' class='ct-code-b-yellow position opacity00'>num = <span id ='total' class='position'><span id='a1' class='position'>num<span> - <span id='one1' class='position'>1</span>;</span></span>");
					$('.introjs-tooltip').removeClass("hide");
					$('#aSub').removeClass('opacity00');
					fromEffectWithTweenMax("#aPostDecVal", "#aSub", function() {
					$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
						$('.user-btn').click(function() { 
							$('.user-btn').remove(); 
							$("#aSub").append("<br><span id='aSub1' class='position opacity00'>s1.num = "
									+ "<span id ='tot' class='position'><span id='a' class='position'>s1.num</span> "
									+ "<span id='one' class='position'>- 1</span></span>;</span>");
							$('#aSub1').removeClass('opacity00');
							fromEffectWithTweenMax("#aSub", "#aSub1", function() {
								$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
								$('.user-btn').click(function() { 
									$('.user-btn').remove(); 
									fadeInBounceEffectWithTimelineMax("#s1Val", "#a", function() {
										$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button user-btn'>Next &#8594;</a>"); 
										$('.user-btn').click(function() { 
											$('.user-btn').remove(); 
											var t = parseInt($("#s1Val").text()) - 1;
											rotation('#tot', t, function() {
												$('#aBoxS1').css("z-index", "10000010");
												$('#s1Val').removeClass('opacity00');
												fadeInBounceEffectWithTimelineMax("#tot", "#s1Val", function() {
													$("#aBoxS1").css('z-index', '');
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
			break;
		case 's5PutData':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = 	"The member function <span class='ct-code-b-yellow'>putData()</span>" +
							" is called by the  object <span class='ct-code-b-yellow'>s5</span>";
				typing(".introjs-tooltiptext",text, function() {
					$("#s5PutData").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'consoleId':
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "s1Value" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#s1Value").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#s1Address").addClass("z-index1000000");
						transferEffect("#value", "#s1Value", function() {
							$("#s1Address").removeClass("z-index1000000");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
			case "s2Value" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#s2Value").addClass("opacity00");
						$("#s3PostInc").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$("#s2Address").addClass("z-index1000000");
						transferEffect("#value", "#s2Value", function() {
							$("#s2Address").removeClass("z-index1000000");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
			case 's1Value1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#s1Value1").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#s1Address").addClass("z-index1000000");
						transferEffect("#value", "#s1Value1", function() {
							$("#s1Address").removeClass("z-index1000000");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
			case "s3Value" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#s3Value").addClass("opacity00");
						 $("#s4PreDec").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#s3Address").addClass("z-index1000000");
						transferEffect("#value", "#s3Value", function() {
							$("#s3Address").removeClass("z-index1000000");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
					
				});
				break;
			case "s1Value2" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#s1Value2").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#s1Address").addClass("z-index1000000");
						transferEffect("#value", "#s1Value2", function() {
							$("#s1Address").removeClass("z-index1000000");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
			case "s4Value" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#s4Value").addClass("opacity00");
						 $("#s5PostDec").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#s4Address").addClass("z-index1000000");
						transferEffect("#value", "#s4Value", function() {
							$("#s4Address").removeClass("z-index1000000");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
			case "s1Value3" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#s1Value3").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#s1Address").addClass("z-index1000000");
						transferEffect("#value", "#s1Value3", function() {
							$("#s1Address").removeClass("z-index1000000");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
			case "s5Value" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#s5Value").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#s5Address").addClass("z-index1000000");
						transferEffect("#value", "#s5Value", function() {
							$("#s5Address").removeClass("z-index1000000");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
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
			case "s1Address" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						TweenMax.to("#varBox1, #s1Address, #aBoxS1", 1, {opacity: 0});
						$("#s1Val").text("");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#s1").addClass("blinking-white");
						TweenMax.to("#varBox1, #s1Address", 1, {opacity: 1, onComplete: function() {
							//$("#varBox1, #s1Address").removeClass("opacity00");
							$("#s1").removeClass("blinking-white");
							$("#intNum").addClass("blinking-white");
							TweenMax.to("#aBoxS1", 1, {opacity: 1, onComplete: function() {
								//$("#aBoxS1").removeClass("opacity00");
								$("#intNum").removeClass("blinking-white");
								setTimeout(function () {
									introjs.nextStep();
								}, 500);
							}});
						}});
					}
				});
				break;
			case "diffObjMemory" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							$("#s2PreInc").addClass("opacity00");
							introjs.previousStep();
						}, 1000);
					} else {
						$("#s2, #intNum").addClass("blinking-white");
						TweenMax.to("#varBox2, #s2Address", 1, {opacity: 1, onComplete: function() {
							//$("#varBox2, #s2Address").removeClass("opacity00");
							TweenMax.to("#aBox", 1, {opacity: 1, onComplete: function() {
								$("#s2, #intNum").removeClass("blinking-white");
								//$("#aBox").removeClass("opacity00");
								$("#s3, #intNum").addClass("blinking-white");
								TweenMax.to("#s3Address, #aBox1", 1, {opacity: 1, onComplete: function() {
									$("#s3, #intNum").removeClass("blinking-white");
									//$("#s3Address, #aBox1").removeClass("opacity00");
									$("#s4, #intNum").addClass("blinking-white");
									TweenMax.to("#s4Address, #aBox2", 1, {opacity: 1, onComplete: function() {
										$("#s4, #intNum").removeClass("blinking-white");
										//$("#s4Address, #aBox2").removeClass("opacity00");
										$("#s5, #intNum").addClass("blinking-white");
										TweenMax.to("#s5Address, #aBox3", 1, {opacity: 1, onComplete: function() {
											$("#s5, #intNum").removeClass("blinking-white");
											//$("#s4Address, #aBox2").removeClass("opacity00");
											setTimeout(function () {
												introjs.nextStep();
											}, 500);
										}});
									}});
								}});
							}});
						}});
					}
				});
				break;
			case "s2Address" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#aBox").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#aBox").removeClass("opacity00");
						$("#s2PreInc").addClass("blinking-white");
						$("#s2Val").text(6).addClass('opacity00');
						transferEffect("#pre", "#s2Val", function() {
							$("#s2PreInc").removeClass("blinking-white");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
			case "s3Address" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#aBox1").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#aBox1").removeClass("opacity00");
						$("#s3PostInc").addClass("blinking-white");
						$("#s3Address").addClass("z-index1000000");
						$("#s3Val").text($("#sVal").text()).addClass('opacity00');
						transferEffect("#post", "#s3Val", function() {
							$("#s3Address").removeClass("z-index1000000");
							$("#s3PostInc").removeClass("blinking-white");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
			case "s4Address" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#aBox2").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#aBox2").removeClass("opacity00");
						$("#s4PreDec").addClass("blinking-white");
						$("#s4Address").addClass("z-index1000000");
						$("#s4Val").text($("#sVal").text()).addClass('opacity00');
						transferEffect("#pre1", "#s4Val", function() {
							$("#s4Address").removeClass("z-index1000000");
							$("#s4PreDec").removeClass("blinking-white");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
			case "s5Address" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#aBox3").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#aBox3").removeClass("opacity00");
						$("#s5PostDec").addClass("blinking-white");
						$("#s5Val").text($("#sVal").text()).addClass("opacity00");
						transferEffect("#post1", "#s5Val", function() {
							$("#s5PostDec").removeClass("blinking-white");
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
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
					if (introjs._direction == "backward") {
						$("#boxHeading1").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#boxHeading1,#sAddress").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					}
				});
				break;
			case "boxHeading2" :
				$("#locVarAddress").fadeTo(1, 400);
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#boxHeading2").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#boxHeading2, #sAddress").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					}
				});
				break;
			case "boxHeading3" :
				$("#locVarAddress").fadeTo(1, 400);
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#boxHeading3").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#boxHeading3, #sAddress").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					}
				});
				break;
			case "boxHeading4" :
				$("#locVarAddress").fadeTo(1, 400);
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#boxHeading4").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#boxHeading4, #sAddress").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					}
				});
				break;
			case "sAddress" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#sBox, #aBoxS, #sAddress").addClass('opacity00');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#sBox, #aBoxS, #sAddress").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					}
						
				});
				break;
			case "animationDiv" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#sVal").append($("#s1Val").text()).addClass("opacity00");
						transferEffect("#s1PreIncVal", "#sVal", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
			case "animationDiv1" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#sVal").append($("#s1Val").text()).addClass("opacity00");
						transferEffect("#s1PostIncVal", "#sVal", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
			case "animationDiv2" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#sVal").append($("#s1Val").text()).addClass("opacity00");
						transferEffect("#s1PreDecVal", "#sVal", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
			case "animationDiv3" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#sVal").append($("#s1Val").text()).addClass("opacity00");
						transferEffect("#s1PostDecVal", "#sVal", function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 500);
						});
					}
				});
				break;
			}
			break;

		case 'end':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the end of the main() function where the program execution ends.";
				typing(".introjs-tooltiptext",text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
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
function fadeInBounceEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var val;
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500);
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		
		$('#codeDiv').append("<span id='dummy' class='ct-code-b-yellow ct-fonts' style='position: relative; z-index: 1000010;'>" 
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