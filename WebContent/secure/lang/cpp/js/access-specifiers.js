var introjs;
var typingSpeed = 1;
var arr = [];
var spaceCount;

var accessSpecifier = function() {
	introGuide();
  	$("body").keydown(function(e) {
    	if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
 	$("#restartBtn").click(function() {
 		location.reload();
 	});
 	
 	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});
		
function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick	: false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [{
			element : "#demoTitle",
			intro : "",
			position : "right"
		},{
			element : "#informationDiv", 
			intro : "",
			animateStep : "first",
			tooltipClass : 'hide'
			
		},{
			element : "#preBody", 
			intro : "",
			tooltipClass : 'hide',
			position : "right"
		},{
			element : "#class",
			intro : "",
			tooltipClass : 'hide',
			position : "right"  
		},{
			element : "#variable",
			intro : "",
			animateStep : "first",
			position : "right"  
		},{
			element : "#method1", 
			intro : "",
			animateStep : 'one',
			position : "right"
		},{
			element : "#main",
			intro : "",
			position : "right"  
		},{
			element : "#object1",
			intro : "",
			tooltipClass : 'hide',
			position : "right"  
		},{
			element : "#animationBox",
			intro : '',
			animateStep : 'first',
			tooltipClass : 'hide',
			position : "bottom" 
		},{
			element : "#variable",
			intro : "",
			animateStep : "last",
			tooltipClass : 'hide'
		},{
			element : "#animationBox",
			intro : '',
			animateStep : 'second',
			tooltipClass : 'hide',
			position : "bottom" 
		},{
			element : "#funcCall",
			intro : "",
			position : "right"  
		},{
			element : "#outputBody", 
			intro : "",
			animateStep : "out1",
			tooltipClass : 'hide',
			position : "bottom"  
		},{
			element : "#method1", 
			intro : "",
			animateStep : 'two',
			position : "right"  
		},{
			element : "#end",
			intro : "",
			position : "right"
		},{
			element : "#informationDiv", 
			intro : "",
			animateStep : "li4",
			tooltipClass : 'hide',
			position : "bottom"
		},{
			element : "#preBody1",
			intro : "",
			position : "right"    
		},{
			element : "#class1",
			intro : "",
			position : "right" 
		},{
			element : "#private1",
			intro : "",
			position : "right"
		},{
			element : "#public",
			intro : "",
			position : "right" 
		},{
			element : "#main1",
			intro : "",
			position : "right"
		},{
			element : "#obj2",
			intro : "",
			position : "right"
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : "boxfirst",
			tooltipClass : 'hide',
			position : "bottom"  
			
		},{
			element : "#variable2",
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : "#animationBox2",
			intro : '',
			animateStep : "boxsecond",
			tooltipClass : 'hide',
			position : "bottom"  
		},{
			element : "#areaVar",
			intro : '',
			tooltipClass : 'hide'
		},{
			element : "#animationBox2",
			intro : '',
			animateStep : "boxthird",
			tooltipClass : 'hide',
			position : "bottom"  
			
		},{
			element : "#funcCall2",
			intro : "",
			position : "right" 
		},{
			element : "#multiply2", 
			intro : "",
			tooltipClass : 'hide',
			//position : "right" 
		},{
			element : "#read",
			intro : "",
			position : "right" 
		},{
			element : "#read1",
			intro : "",
			tooltipClass : 'hide',
			//position : "right" 
		},{
			element : "#console1",
			intro : "",
			position : "right" 
		},{
			element : "#outputBody",
			intro : "",
			animateStep : "out2",
			tooltipClass : "hide"
		},{
			element : "#console2",  
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#input1",  
			intro : "",
			position : "right" 
		},{
			element : "#outputBody",
			intro : "",
			animateStep : "out3",
			tooltipClass : "hide",
			position : "bottom"  
		},{
			element : "#area",  
			intro : "",
			tooltipClass : "hide",
			position : "right" 
		},{
			element : "#console3",  
			intro : "",
			position : "right" 
		},{
			element : "#outputBody",
			intro : "",
			animateStep : "out4",
			tooltipClass : "hide"
		},{
			element : "#console4",  
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#console5",  
			intro : "",
			position : "right"
		},{
			element : "#outputBody",
			intro : "",
			animateStep : "out5",
			tooltipClass : "hide",
			position : "bottom"
		},{
			element : "#end1",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		},{
			element : "#informationDiv",  
			intro : "",
			animateStep : "li5",
			tooltipClass : "hide",
			position : "bottom"
		},{
			element : "#button", 
			intro : "",
			position : "right"
		}]
	});
	
	introjs.onbeforechange(function(targetElement) {
		var element = targetElement.id;
		switch(element) {
		case "end1":
			$("#outputBody, #preBody1, #animationBox2").removeClass("opacity00");
			break;
		case "console5" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#value1").addClass("opacity00")
			break;
		case "area":
			$("#box4").text("");
			break;
		case "funcCall":
			$("#outputBody").addClass("opacity00");
			break;
		case "object1" :
			$("#animationBox, #s1, #borderBox").addClass("opacity00");
			break;
		case "main1":
			$("#animationBox2").addClass("hide");
			$("#main1").removeClass("opacity00");
			break;
		case "variable":
			$("#one").addClass("opacity00");
			break;
		case "variable2":
			$("#four, #three").addClass("opacity00");
			break;
		case "areaVar":
			$("#five").addClass("opacity00");
			break;
		
		case "console1":
			$("#outputBody").addClass("opacity00")
			break;
		case "animationBox2":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "boxfirst" :
				$("#animationBox2").removeClass("hide");
				$("#s2, #borderBox1").addClass("opacity00");
				break;
			case "boxsecond":
				$("#boxParent2,#boxParent3, #three, #four").addClass("opacity00");
				break;
			case "boxthird":
				$("#boxParent4, #five").addClass("opacity00");
				break;
			}
			break;
		case "obj2":
			$("#s2, #borderBox1").addClass("opacity00");
			$("#animationBox2").addClass("hide");
			break;
			case "informationDiv":
				var element = introjs._introItems[introjs._currentStep].animateStep;
				switch(element) {
				case "li4":
					$("#preBody1").addClass("hide");
					$("#li4, #li3").addClass("opacity00");
					break;
				case "li5":
					$("#li5").addClass("opacity00");
					$("#outputBody, #preBody1, #animationBox2").addClass("opacity00");
					break;
				}
			break;
			case "animationBox":
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case "first" :
					$("#s1, #borderBox").addClass("opacity00");
					break;
				case "second":
					$("#one").addClass("opacity00") ;
					break;
			}
			break;
			case "outputBody" :
				$("#outputBody").removeClass("opacity00");
				introjs.refresh();
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				if (animateStep == "out3") {
					$(".scanfValue").hide();
					$(" #box2, #box3").empty();
					$("#outputPrintfLine").remove();
					$("#box4").text("");
				}
				if (animateStep == "out5") {
					$("#li5").addClass("opacity00");
					$("#box4").removeAttr("style");
				}
				break;
				
			case "input1":
				$(".scanfValue").hide(); 
				$("#box2, #box3").empty();
				$("#outputPrintfLine").remove();
			break;
			case "end":
				$("#li4, #li3").addClass("opacity00");
				$("#outputBody").removeClass("opacity00");
				$("#err").show()
				$("#preBody, #animationBox").show();
				break;
			case "main":
				$("#main").removeClass("opacity00");
				break;
			case "preBody":
				$("#class").addClass("opacity00");
				break;
			case "class" :
				$("#class").removeClass("opacity00");
				break;
			case "method1":
				var element = introjs._introItems[introjs._currentStep].animateStep;
				switch(element) {
					case "one" :
						$("#main").addClass("opacity00");
						break;
				}
				break;
			case "preBody1":
				$("#preBody1").removeClass("hide");
				$("#class1").addClass("opacity00");
				break;
			case "class1":
				$("#class1").removeClass("opacity00");
				$("#private1").addClass("opacity00");
				break;
			case "private1":
				$("#private1").removeClass("opacity00");
				$("#public").addClass("opacity00");
				break;
			case "public":
				$("#public").removeClass("opacity00");
				$("#main1").addClass("opacity00");
				break;
			case "restart":
				$('#restart').removeClass("hide");
				break;
			
		}
	}); 
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		introjs.refresh();
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			if (introjs._currentStep != 0 && introjs._currentStep != 2) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		switch (elementId) {
		case  "demoTitle" :
			var text = "Let us learn about <span class='ct-code-b-yellow'>Access specifiers</span>.";
			typing($('.introjs-tooltiptext'),text,function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "informationDiv" :
			introjs.refresh();
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			$('#informationDiv').removeClass("opacity00");
			switch(animateStep) {
			case "first":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#li").fadeTo(300, 1, function() {
						$("#ul1").fadeTo(300, 1, function() {
							$("#ul2").fadeTo(300, 1, function() {
								$("#ul3").fadeTo(300, 1, function() {
									$("#li2").fadeTo(300,1, function() {
										$("#nextButton1").fadeTo(300, 1, function() {
											$("#nextButton1").click(function() {
												$('#nextButton1').remove();
												introjs.nextStep();
											});
										});	
									});
								});
							});
						});
					});
				});
				break;	
			case "li4" :
				$(".introjs-nextbutton, #err, #preBody, #animationBox").hide();
				$("#outputBody").addClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#li3").removeClass("opacity00", function() {
						$("#li4").removeClass("opacity00", function() {
							$(".introjs-tooltip").removeClass("hide");
							var text = "Now we learn about <span class='ct-code-b-yellow'>public access</span> and "+
										"<span class='ct-code-b-yellow'>private access</span>  members.";
							typing($('.introjs-tooltiptext'), text, function() { 
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
				});
				break;
			case "li5" :
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#li5").removeClass("opacity00");
						$(".introjs-tooltip").removeClass("hide");
						var text = "<span class='ct-code-b-yellow'>Protected access</span> members can be accessed in child class.";
						typing($('.introjs-tooltiptext'), text, function() { 
							$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			}
		break;
		case "preBody" :
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('#preBody').removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				var text = "Let us learn about default <span class='ct-code-b-yellow'>access specifier</span></span>.";
				typing($('.introjs-tooltiptext'), text, function() { 
						$('.introjs-nextbutton').show();
				});
			});
			break;
		case "class" :
			introjs.refresh();
			$('.introjs-prevbutton,.introjs-nextbutton').hide();
			$('#preBody').removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "Here class <span class='ct-code-b-yellow'>Area</span> is a "+
							"<span class='ct-code-b-yellow'>global</span> class with one data member " +
							"<span class='ct-code-b-yellow'>len</span> and a member function "+
							"<span class='ct-code-b-yellow'>sqr()</span>.";
				$('.introjs-tooltip').removeClass('hide');
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "variable" :
			introjs.refresh();
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "first" :
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Here data member <span class='ct-code-b-yellow'>len</span> is "+
						   "<span class='ct-code-b-yellow'>private</span>, since there is no "+
						   "<span class='ct-code-b-yellow'>access specifier</span> specified.";
					typing($('.introjs-tooltiptext'), text, function() { 
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "last":
				introjs.refresh();
				$("#object1").removeClass('z-index1000000');
				$('.introjs-helperLayer').one("transitionend", function() {
					nextStep();
					$("#object1").removeClass('z-index1000000');
				});
				break; 
			}
			break;
		case "method1" :
			introjs.refresh();
			var element = introjs._introItems[introjs._currentStep].animateStep;
			switch(element) {
			case "one" :
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text =  "Here member function <span class='ct-code-b-yellow'>sqr()</span> is also " + 
							"<span class='ct-code-b-yellow'>private</span> by default, since there "+
							"is no <span class='ct-code-b-yellow'>access specifier</span> specified.";
					typing($('.introjs-tooltiptext'), text, function() { 
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "two" :
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "<ul><li>It shows <b class ='warning-color'>compile time error</b> that  <b class ='ct-code-b-yellow'>sqr</b> "+
							"is a <b class ='ct-code-b-yellow'>private</b> data member.</li><li>So <span class='ct-code-b-yellow'>sqr()</span>"+
							" cannot be accessed outside of the class <span class='ct-code-b-yellow'>Area</span> and this "+
							"concept is called  <span class='ct-code-b-yellow'>data hiding</span>.</li></ul>";
					typing($('.introjs-tooltiptext'), text, function() { 
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			}
			break;
		case "end":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "End of the program of default access specifier."
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "main" :
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>main()</span> is the starting point of execution.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;		
		case "object1" :
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "Here <span class='ct-code-b-yellow'>obj1</span> is an object of a class <span class='ct-code-b-yellow'>Area</span>." + 
				" Memory is allocated to that object when <span class='ct-code-b-yellow'>obj1</span> is declared to class <span class='ct-code-b-yellow'>Area</span>.";
				$(".introjs-tooltip").removeClass("hide");
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "animationBox" :
			$("#preBody, #animationBox").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "first" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#object1').addClass('z-index1000000');
					$("#s1").removeClass("opacity00").addClass("animated zoomIn").one('animationend',function() {
						$("#borderBox").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							$("#s1, #borderBox").removeClass("animated zoomIn");
							$(".introjs-tooltip").removeClass("hide");
							var text = "Memory is allocated when object <span class='ct-code-b-yellow'>obj1</span> is declared.";
							typing($('.introjs-tooltiptext'),text,function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
								$('#object1').removeClass('z-index1000000');
							});
						});
					});
				});
				break;
			case "second" :
				$('.introjs-helperLayer').one('transitionend',function() {
					$("#variable").addClass('z-index1000000');
					$("#boxParent").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						transferEffect("#variable", "#boxParent", function() {
							$("#one").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								$(".introjs-tooltip").removeClass("hide");
								$("#one, #boxParent").removeClass("animated zoomIn");
								typing('.introjs-tooltiptext',"Memory is allocated for variable <span class='ct-code-b-yellow'>len</span>.", function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
									$("#variable").removeClass('z-index1000000');
								});
							});
						});
					});
				});
				break;
			}
			break;
		case "funcCall" :
			$(".introjs-nextbutton, introjs-prevbutton").hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "The member function <span class='ct-code-b-yellow'>sqr(20)</span> is called through the object "+
							"<span class='ct-code-b-yellow'>obj1</span>.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "outputBody" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputBody").removeClass("opacity00");
				introjs.refresh();
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				if (animateStep == "out1") {
					if (introjs._direction == "backward") {
						$("#err").remove();
					} else {
					$("#outDiv").append("<div id='err'>sample.cpp: In function <b class ='ct-code-b-yellow'>int main()</b> : <br>"+
							"sample.cpp: <b class ='warning-color'>error :</b> int <b class ='ct-code-b-yellow'>Area</b>::"+
							"<b class ='ct-code-b-yellow'>sqr(int)</b> is private <br>int " +
							"<b class ='ct-code-b-yellow'>sqr</b>(int num) { <br>sample.cpp: " +
							"<b class ='warning-color'>error :</b> within this context<br>" +
							"obj1.<b class ='ct-code-b-yellow'>sqr</b>(20);</div>");
					}
					nextStep();
				}
				
				if (animateStep == "out2") {
					if (introjs._direction == "backward") {
						$("#inputNumber").remove();
					} else {
						$("#outDiv").append('<span id ="inputNumber">Enter length and breadth  : <span>');
					}
					nextStep();
				}
				if (animateStep =="out3") {
					$("#outDiv").append('<span id="outputPrintfLine"><input id="inputChar" maxlength="5" placeholder="Enter 2 values" class="position input-char"></span>');
					$("#borderBox1").addClass("z-index1000000");
					$('#inputChar').focus();
					$(".introjs-tooltip").removeClass("hide");
					spaceCount = 0;
					enterTwoValues('#inputChar');
					$("#borderBox1").removeClass("z-index1000000");
					typing(".introjs-tooltiptext","<span id='please1'><span id='please'>Please enter two values<span></span>", 10, "",function() {
					});
				}
				if (animateStep == "out4") {
					if (introjs._direction == "backward") {
						$("#outputNumber").remove();
						$("#outDiv > br").remove();
					} else {
						$("#outDiv").append('<br><span id ="outputNumber">The area of rectangle is : <span class="opacity00 position" id="value1">'
								+ $('#box4').text() + '</span></span>');
					}
					nextStep();
				}
				if (animateStep == "out5") {
					if (introjs._direction == "backward") {
						setTimeout(function() {
							introjs.previousStep();
						},1500);
					} else {
						$("#box4").css("zIndex","1000080").effect( "highlight",{color: 'red'}, 200);
						transferEffect("#box4","#value1", function() {
							$("#value1").removeClass("opacity00");
							$("#box4").addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 200);
						 	$("#box4").removeClass("z-index1000000");
							setTimeout(function() {
								introjs.nextStep();
							},1500);
						});
					}
				}
			});
			break;
		
		case "preBody1" :
			introjs.refresh();
			$('.introjs-prevbutton,.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "Here we discuss about <span class='ct-code-b-yellow'>public access</span> and "+
							"<span class='ct-code-b-yellow'>private access</span> specifier.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "class1":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = 	"Here class <span class='ct-code-b-yellow'>Area</span> contains "+
							"member functions and data members which are specified as <span class='ct-code-b-yellow'>public</span> "+
							"and <span class='ct-code-b-yellow'>private</span>.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;	
		case "private1":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here data members <span class='ct-code-b-yellow'>len</span>, <span class='ct-code-b-yellow'>"+
							"bred</span> and member function <span class='ct-code-b-yellow'>read()</span> are specified "+
							"as <span class='ct-code-b-yellow'>private</span>.";
				typing($('.introjs-tooltiptext'), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;	
		case "public":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here data members <span class='ct-code-b-yellow'>area</span> and member function "+
							"<span class='ct-code-b-yellow'>rect()</span> are specified as <span class='ct-code-b-yellow'>public</span>.";
				typing($('.introjs-tooltiptext'), text, function() { 
					
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;	
		case "main1":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>main()</span> is the starting point of execution.";
				typing($('.introjs-tooltiptext'), text, function() {
					
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "obj2":
			introjs.refresh();
			$('.introjs-prevbutton, .introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here an object <span class='ct-code-b-yellow'>obj</span> is created to the class <span class='ct-code-b-yellow'>Area</span>.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			
			break;	
		case "animationBox2" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "boxfirst" :
				$('.introjs-helperLayer').one('transitionend',function() {
					$("#obj2").addClass('z-index1000000');
						$("#s2").removeClass("opacity00").addClass("animated zoomIn").one('animationend',function() {
							$("#borderBox1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								$("#s2, #borderBox1").removeClass("animated zoomIn");
								$(".introjs-tooltip").removeClass("hide");
								typing($('.introjs-tooltiptext'),"Memory is allocated when object <span class='ct-code-b-yellow'>obj</span> "+
										"is declared for class <span class='ct-code-b-yellow'>Area</span>.",function() {
										$('.introjs-nextbutton, .introjs-prevbutton').show();
									$("#obj2").removeClass('z-index1000000');
								});
							});
						});
					});
				break;
			case "boxsecond" :
				$('#variable2').addClass('z-index1000000');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#boxParent2').removeClass("opacity00").addClass('animated zoomIn').one('animationend', function() {
						transferEffect('#var1','#boxParent2', function() {
							$("#three").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								$('#boxParent3').removeClass("opacity00").addClass('animated zoomIn').one('animationend', function() {
									transferEffect("#bred", "#boxParent3", function() {
										$("#four").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
											$("#boxParent2,#boxParent3, #three, #four").removeClass("animated zoomIn");
											$(".introjs-tooltip").removeClass("hide");
											typing('.introjs-tooltiptext',"Here <span class='ct-code-b-yellow'>len</span> and "+
													"<span class='ct-code-b-yellow'>bred</span> are <span class='ct-code-b-yellow'>private"+
													"</span> members and can be accessed only inside class <span class='ct-code-b-yellow'>Area</span>.", function() {
												$('.introjs-nextbutton, .introjs-prevbutton').show();
												$('#variable2').removeClass('z-index1000000');
											});				
										});			
									});							
								});		
							});
						});
					});
				});
				break;
			case "boxthird" :
					$('#areaVar').addClass('z-index1000000');
					$('.introjs-helperLayer').one('transitionend', function() {
						$('#boxParent4').removeClass("opacity00").addClass('animated zoomIn').one('animationend', function() {
							transferEffect("#areaVar", "#boxParent4", function() {
								$("#five").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
									$(".introjs-tooltip").removeClass("hide");
									$("#boxParent4, #five").removeClass("animated zoomIn");
										typing('.introjs-tooltiptext',"Here <span class='ct-code-b-yellow'>area</span> "+
												"is <span class='ct-code-b-yellow'>public</span> member and can be accessed "+
												"outside of the class <span class='ct-code-b-yellow'>Area</span>.", function() {
											$('.introjs-nextbutton, .introjs-prevbutton').show();
											$('#areaVar').removeClass('z-index1000000');
										});
									});
								});
							});				
						});			
				break;
			}
			break;
		case "variable2":
			$('.introjs-helperLayer').one('transitionend',function() {
				nextStep();
			});
			break;
		case "areaVar":
			$('.introjs-helperLayer').one('transitionend',function() {
				nextStep();
			});
			break;
		case "funcCall2":
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Calling the function <span class='ct-code-b-yellow'>rect()</span> through object "+
							"<span class='ct-code-b-yellow'>obj</span>, it can be accessed directly since it "+
							"is <span class='ct-code-b-yellow'>public</span> member.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "multiply2":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				//var text = "Here in function definition of <span class='ct-code-b-yellow'>rect()</span>.";
				//typing($('.introjs-tooltiptext'), text, function() { 
				//	$('.introjs-nextbutton, .introjs-prevbutton').show();
				//});
				nextStep();
			});
			break;
		case "read" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here calling the <span class='ct-code-b-yellow'>read()</span> function which "+
							"is a <b class='ct-code-b-yellow'>private</b> member function and can be accessed only in class "+
							"<span class='ct-code-b-yellow'>Area</span>."; 
					typing($('.introjs-tooltiptext'), text, function() { 
						$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "read1" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
		//		var text = "During execution of <span class='ct-code-b-yellow'>read()</span> function.";
			////	typing($('.introjs-tooltiptext'), text, function() { 
					//$('.introjs-nextbutton, .introjs-prevbutton').show();
			//	});
					nextStep();
			});
			break;
		case "console1" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>cout</span> displays this statement in console.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "console2" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				nextStep();
			});
			break;
		case "input1" :
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>len</span> and <span class='ct-code-b-yellow'>bred</span> " +
					"are used to store the values which you enter.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "area" :
			introjs.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = " ";
				$(".introjs-tooltip").removeClass("hide");
				typing($('.introjs-tooltiptext'), text, function() { 
					$(".introjs-tooltiptext").append("<b class='ct-code-b-yellow'>"+
							"<div id='return'>area = <span id='mul'><span id='len1'>len"+
							"</span> * <span id='len2'>bred</span></span></div></b><br>");
					$("#return").fadeTo(200, 1);
					var l1 = $("#return").offset();
					var l2 = $("#area").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#return", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#len1", 0.5, {rotationX : -90, onComplete:function() {
							transferEffect("#box2", "#len1", function() {
								$("#len1").text($("#box2").text());
								TweenMax.to("#len1", 0.5, {rotationX : 0, onComplete:function() {
									TweenMax.to("#len2", 0.5, {rotationX : -90, onComplete:function() {
										transferEffect("#box3", "#len2", function() {
											$("#len2").text($("#box3").text());
											TweenMax.to("#len2", 0.5, {rotationX : 0, onComplete:function() {
												$("#mul").text(parseInt($("#box2").text()) * parseInt($("#box3").text()));
												TweenMax.to("#mul", 0.5, {rotationX : 0, onComplete:function() {
													transferEffect2("#mul", "#boxParent4", function() {
														$("#box4").text(parseInt($("#box2").text()) * parseInt($("#box3").text()));
														$('.introjs-nextbutton, .introjs-prevbutton').show();
													});
												}});
											}});
										});							
									}});
								}});
							});
						}});
					}});
				});
			});
			break;
		case "console3" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>cout</span> displays this statement in console.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "console4" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				nextStep();
			});
			break;
		case "console5" :
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>cout</span> displays value of "+
							"<span class='ct-code-b-yellow'>area</span> in console.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "end1":
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				var text =  "End of the program.";
				typing($('.introjs-tooltiptext'), text, function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "button" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn, #closeBtn").removeClass("opacity00");
				console.log('haiiiii');
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

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
		introjs._introItems[introjs._currentStep].intro= $(".introjs-tooltiptext").html();
	});
};
}

function transferEffect2(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: 'green'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
	$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}


function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: 'yellow'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
	$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}


function enterTwoValues(selector) {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	var maxNumberOfInputs;
	var maxLengthOfInput;
	$(selector).on("keydown", function(e) {
		maxNumberOfInputs = 2;
		maxLengthOfInput = 1;
		if (arr.length == maxNumberOfInputs) {
			if (e.keyCode == 32) {
				e.preventDefault();
			}
		}
		if ((arr.length == 0) && e.keyCode == 32) {
			e.preventDefault();
		}
		if (arr.length == 1 && spaceCount >= 1 && e.keyCode == 32) {
			e.preventDefault();
		}
		/*if ($("#inputChar").val().search(" ") == 1 && e.keyCode == 32) {
			e.preventDefault();
		}*/
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 32, 35, 36, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
	
	$(selector).on("keyup", function(e) {
		maxNumberOfInputs = 2;
		maxLengthOfInput = 1;
		$('.length-error-text').remove();
		if ($(this).val() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
				"Please enter " + maxNumberOfInputs + " number and separate each with space.</span>");
			$('.user-btn').hide();
		}
		var givenText = $(this).val();
		spaceCount = givenText.split(" ").length - 1;
		var splittedText = givenText.split(" ");
		arr = [];
		$.each(splittedText, function(idx, val) {
			if (val != '' ) {
				arr.push(val);
			}
		});
		if ((arr.length == 2) && e.keyCode == 32) {
			e.preventDefault();
		}
		
		if (arr.length < 2 ) {
			$("#please").show();
			$('.user-btn').hide();
			$(".introjs-nextbutton").hide();
			
		} else if (arr.length == 2) {
			$('.user-btn').remove();
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal3()">Next&rarr;</a>');
		}
		$.each(arr, function(idx, val) {
			if (val < 0 || val > 100  ) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
						"<ul><li>Please limit the index " + idx + " number in between 0 and 99.</li></ul></span>");
				$('.user-btn').remove();
			}
		});
	});
}

function storeVal3() {
	$("#please").hide();
	$("#please1").append("The values of <span class='ct-code-b-yellow'>length</span> and "+
						"<span class='ct-code-b-yellow'>breadth</span> are entered.");
	$('.user-btn').remove();
	var splittedText = $('#inputChar').val().split(" ");
	$('#inputChar').html('');
	$('#inputChar').remove();
	$.each(splittedText, function(idx, val) {
		if (val != '') {
			$('#outputPrintfLine').append('<span class="scanfValue">' + val + '</span> ');
		} else {
			$('#outputPrintfLine').append(' ');
		}
	});
	$('.scanfValue').addClass('output-value-circle circle-css');
	TweenMax.fromTo($('.scanfValue'), 1, {backgroundColor: '#FFFFFF'}, {backgroundColor: 'cyan', onComplete: function() {
		$('.scanfValue').removeClass('output-value-circle circle-css');
		$.each(arr, function(idx, val) {
			$('.arrayValue1').eq(idx).text(parseInt(val));
		});
		for (var i = 0; i < $('.scanfValue').length; i++) {
			if (i <= ($('.scanfValue').length - 1)) {
				fromEffectWithTweenMax($('.scanfValue').eq(i), $('.arrayValue1').eq(i), function() {
				});
			}
		}
		$('.scanfValue').removeClass('output-value-circle circle-css');
		$(".scanfValue").removeAttr('style');
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	}});
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

function nextStep() {
	if (introjs._direction == "backward") {
		setTimeout(function() {
			introjs.previousStep();
		},1500);
	} else {
		setTimeout(function() {
			introjs.nextStep();
		},1500);
	}
} 