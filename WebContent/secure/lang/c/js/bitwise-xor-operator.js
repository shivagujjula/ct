var intro;
var typingInterval = 1;
var res, res1;
var resxyz, resxyz1;
var flag = true;
var flag1 = true;
var tl = new TimelineLite();

var bitwiseXorOperator = function() {
	$("[contenteditable=true]").on("keydown keyup", function(e) { // conditions to enter text
		if ($('#firstNum').val() != "" && $('#secondNum').val() != "") {
			$('.introjs-nextbutton').show();
		} else {
			$('.introjs-nextbutton').hide();
		}
		if((e.shiftKey)) {
			e.preventDefault();
		}
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength");
		
	    if ((e.which != 8) && (e.which != 46) && (e.which != 37) && (e.which != 39) && ($(this).val().length) > max) {
	    	$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 2 characters.</div>");
	    	e.preventDefault();
	    }
	    
		if (((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105) || e.which == 8 || e.which == 46)) {
			return true;
		} else {
			e.preventDefault();
		}
 	});
	
	$("#restart").click(function(){
		$('#firstNum').val('');
		$('#secondNum').val('');
		location.reload(); 
	});
	
	introSteps();
	function introSteps() {	
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [ {
				element : "#informationDiv",
				intro : "",
				position:"right",
				tooltipClass: "hide"
			},{
				element : "#inputDiv",
				intro : "",
				position:"right",
				tooltipClass: "hide"
			},{
				element : "#table1",
				intro : "",
				poition: "right"
			},{
				element : "#display",
				intro : "",
				poition: "right",
				tooltipClass: "hide"
			},{
				element : "#restart",
				intro : "",
				position:"right",
				tooltipClass : "restart-tooltip-min-width"
			}
			]});
		
		intro.onbeforechange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "inputDiv":
				$('#valueSpan1, #valueSpan2').empty();
				$('#firstBinaryValue').addClass('opacity00').removeAttr('style');
			break;
			case "firstBinaryValue":
				$("#secondBinaryValue").css({"opacity":0});
			break;
			case "secondBinaryValue":
				$("#table1").css({"opacity":0});
			break;
			case "table1":
				$(".nextButton").remove();
				$("#table1").removeClass("opacity00").removeAttr("style");
				$("#lineDiv").addClass("opacity00");
				$("#xAndY, #resultValueDiv").addClass("opacity00");
				$("#table1").css({"opacity":1});
				
				
				$("#firstBinaryNumber").removeAttr("style");
				$("#secondBinaryNumber").removeAttr("style");
			break;
			case "addOperationDiv":
				$("#addOperationDiv").removeClass("opacity00").removeAttr("style");
				
				$("#firstBinaryNumber").removeAttr("style");
				$("#secondBinaryNumber").removeAttr("style");
				$(".line-div").remove();
				$("#resultDiv").remove();
				$("#secondBinaryNumber + div").remove();
				$("#display").empty().removeAttr('style');
				$("#display").addClass("opacity00");
			break;		
			}
		});
		
		intro.onafterchange(function(targetElement) {
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
				intro._introItems[intro._currentStep]["animation"] = "repeat";
			}
			
			if (intro._introItems[intro._currentStep]["isCompleted"]) {
				
				if (intro._currentStep != 0) {
					$('.introjs-prevbutton').show();
				}

				$('.introjs-nextbutton').show();
				return;
			}
			
			if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
				intro._introItems[intro._currentStep]["isCompleted"] = true;
			}
			
			var elementId = targetElement.id;
			switch (elementId) {
			case "informationDiv":
				$('.introjs-nextbutton').hide();
				$("#informationDiv").css({"z-index": "999999999","background-color": "rgb(243, 235, 235)"});
				$("#li1").fadeTo(500, 1, function() {
					$("#li2").fadeTo(500, 1, function() {
						$("#li3").fadeTo(500, 1, function() {
							$("#li4").fadeTo(500, 1, function() {
								$("#informationDiv").css({"z-index": "999999999"})
								intro.nextStep();
							});
						});
					});
				});
			break;	
			case "inputDiv":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').hide();
					$("#firstNum").val("");
					$("#secondNum").val("");
					
					TweenMax.to("#inputDiv", 1, {"opacity" : "1"});
					TweenMax.to("#firstNum", 1, {"opacity" : "1"});
					TweenMax.to("#secondNum", 1, {"opacity" : "1", onComplete:function() {
						$('.introjs-tooltip').removeClass('hide');
						var text = "Enter values in <span class='ct-code-b-yellow'>x</span> and <span class='ct-code-b-yellow'>y</span> to understand the working of " 
								+ "<span class='ct-code-b-yellow'>bitwise XOR (^)</span>.";
						typing(".introjs-tooltiptext", text, function() {
							$("#firstNum, #secondNum").effect( "highlight",{color: 'yellow'}, 1500 );
							$("#firstNum").focus();
							$("#value, #value2").empty();
							
							/*$('#animationProcessDiv').append('<div class="col-xs-12" id="binaryValues"><div class="col-xs-6 padding0"><div id="firstBinaryValue" class="opacity00"><b>x</b> = <span id="valueSpan1">' 
									+ '</span><span class="fa fa-long-arrow-right" aria-hidden="true" style="margin:15px;">' 
									+ '</span><span id="value"></span></div></div></div>');
							$('#binaryValues').append('<div class="col-xs-6 padding0"><div id="secondBinaryValue" class="opacity00"><b>y</b> = <span id="valueSpan2">'
									+ '</span><span class="fa fa-long-arrow-right" aria-hidden="true" style="margin:15px;">' 
								 	+ '</span><span id="value2"></span></div></div>');*/
							
							if (flag) {
								flag = !flag;
								
								$('#animationProcessDiv').append('<div class="col-xs-12" id="binaryValues"><div class="col-xs-6 padding0">'
										+ '<div id="firstBinaryValue" class="opacity00"><b>x</b> = <span id="valueSpan1">' 
										+ '</span><span class="fa fa-long-arrow-right" aria-hidden="true" style="margin:15px;">' 
										+ '</span><span id="value"></span></div></div></div>');
								$('#binaryValues').append('<div class="col-xs-6 padding0"><div id="secondBinaryValue" class="opacity00"><b>y</b> = <span id="valueSpan2">'
										+ '</span><span class="fa fa-long-arrow-right" aria-hidden="true" style="margin:15px;">' 
									 	+ '</span><span id="value2"></span></div></div>');
								
							var newStep = {
								"element" : "#firstBinaryValue",
								"position" : "right",
								"intro" : "",
								tooltipClass: "hide"
							};
							
							intro.insertOption(intro._currentStep + 1, newStep);
							var newStep = {
								"element" : "#secondBinaryValue",
								"position" : "right",
								"intro" : "",
								tooltipClass: "hide"
							};
							
								intro.insertOption(intro._currentStep + 2, newStep);
							}
						});
					}});
				});
			break;
			case "firstBinaryValue":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
					var num1=parseInt($('#firstNum').val(), 10).toString(2);
					var zeros1='';
					for(var i=num1.length; i < 8; i++) {
					  zeros1 = 0 + zeros1;
					}
					res = "";
					var number = "";
					$.each((zeros1+num1).split(""), function(ind, val){
						number = number + " " + val;
						res =  res + " " + '<span id="index' + ind + '" >' + val + '</span>';
					});
					
					$("#value").text(number);
					$("#valueSpan1").text($('#firstNum').val());
					$(".introjs-helperLayer ").one('transitionend', function() {
						intro.refresh();
						TweenMax.to("#firstBinaryValue", 1,{opacity : 1, onComplete:function() {
							$('.introjs-tooltip').removeClass('hide');
							var text = "The given number <span class = 'ct-code-b-yellow'>" + $('#firstNum').val() + "</span> is converted into " 
							+ "its <span class = 'ct-code-b-yellow'>binary</span> representation.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						}});
					});
			break;
			case "secondBinaryValue":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				var num2=parseInt($('#secondNum').val(), 10).toString(2);
				var zeros2='';
				for(var i=num2.length; i < 8; i++) {
				  zeros2 = 0 + zeros2;
				}
				res1 = "";
				var number1 = "";
				$.each((zeros2+num2).split(""), function(ind, val){
					number1 = number1 + " " + val;
					res1 =  res1 + " " + '<span id="count' + ind + '" >' + val + '</span>';
				});
				$("#value2").text(number1);
				$("#valueSpan2").text($('#secondNum').val());
				$(".introjs-helperLayer ").one('transitionend', function() {
					intro.refresh();
					TweenMax.to("#secondBinaryValue", 1,{opacity : 1, onComplete:function() {
						$('.introjs-tooltip').removeClass('hide');
						var text = "Similarly, the number <span class = 'ct-code-b-yellow'>" + $('#secondNum').val() + "</span> is converted into " 
									+ "its <span class = 'ct-code-b-yellow'>binary</span> representation.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					}});
				});
			break;
			case "table1":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#table1").removeClass("opacity00", function() {
						/*$('#animationProcessDiv').append('<div id="addOperationDiv" class="col-xs-12"><div class="opacity00" id="firstBinaryNumber"><div class="col-xs-offset-4 col-xs-5" style="margin-top:30px;padding: 2px 3px;"><b class=" ct-code-b-green">x</b> =   '
								+ '</span>' + res  + '</div></div></div>');
							$('#addOperationDiv').append('<div class="opacity00" id="secondBinaryNumber"><div class="col-xs-offset-4 col-xs-5" style="margin-top:10px;padding: 2px 3px;"><b class=" ct-code-b-green">y</b> =   '
									+ '</span>' + res1  + '</div></div>');*/
						var text="As per the table the bitwise <span class = 'ct-code-b-yellow'>XOR(^)</span> operation will" 
									+ " return <span class = 'ct-code-b-yellow'>0</span> only" 
									+ " when <span class = 'ct-code-b-yellow'>both</span> the bits of operand1 and" 
									+ " operand2 are either <span class = 'ct-code-b-yellow'>0</span> or <span class = 'ct-code-b-yellow'>1</span>.<br>"; 
						typing(".introjs-tooltiptext", text, function() {
							$("#table1").addClass("z-index-class");
							$("#resxyz, #resxyz1").empty();
							if(flag1) {
								flag1 = false;
								
								$('#animationProcessDiv').append('<div id="addOperationDiv" class="col-xs-12"><div class="opacity00" id="firstBinaryNumber"><div class="col-xs-offset-4 col-xs-5" style="margin-top:30px;padding: 2px 3px;" id="binaryDigits1"><b class=" ct-code-b-green">x</b> =   '
										+ '</span> <span id="resxyz"></span></div></div></div>');
									$('#addOperationDiv').append('<div class="opacity00" id="secondBinaryNumber"><div class="col-xs-offset-4 col-xs-5" style="margin-top:10px;padding: 2px 3px;" id="binaryDigits2"><b class=" ct-code-b-green">y</b> =   '
											+ '</span> <span id="resxyz1"></span></div></div>');
									
								var newStep = {
									"element" : "#addOperationDiv",
									"position" : "right",
									"intro" : "",
									tooltipClass:"hide"
								};
								intro.insertOption(intro._currentStep + 1, newStep);
							}
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			break;
			case "addOperationDiv":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#resxyz, #resxyz1").empty();
					var num1=parseInt($('#firstNum').val(), 10).toString(2);
					var num2=parseInt($('#secondNum').val(), 10).toString(2);
					var zeros1='';
					for(var i=num1.length; i < 8; i++) {
					  zeros1 = 0 + zeros1;
					}
					var zeros2='';
					for(var i=num2.length; i < 8; i++) {
					  zeros2 = 0 + zeros2;
					}
					var res = "";
					var number = "";
					$.each((zeros1+num1).split(""), function(ind, val){
						number = number + " " + val;
						//res =  res + " " + '<span id="index' + ind + '" >' + val + '</span>';
						$("#resxyz").append('&nbsp;<span id="index' + ind + '" >' + val + '</span>');
					});
					var res1 = "";
					var number1 = "";
					$.each((zeros2+num2).split(""), function(ind, val){
						number1 = number1 + " " + val;
						//res1 =  res1 + " " + '<span id="count' + ind + '" >' + val + '</span>';
						$("#resxyz1").append('&nbsp;<span id="count' + ind + '" >' + val + '</span>');
					});
					/*res="";
					res1="";*/
					afterConverting();
				});
			break;	
			
			case "display":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				var result = parseInt($('#resultValueDiv span').text(), 2).toString(10);
				$("#resultValue").text($('#resultValueDiv span').text());
			    $("#decimalResult").addClass("red-color-css");
			    $("#decimalResult").text(result);
				$(".introjs-helperLayer ").one('transitionend', function() {
					intro.refresh();
					$("#display").removeClass("opacity00").hide().fadeIn(2000, function() {
						$('.introjs-tooltip').removeClass('hide');
						var text="The resultant value of <span class = 'ct-code-b-yellow'>" + $("#firstNum").val() + " ^" 
						+ " " + $("#secondNum").val() + "</span> = (" + $('#resultValueDiv span').text() + ")<sub>2</sub> =" 
						+ " <span class = 'ct-code-b-yellow'>" + result + "</span>.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "restart":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$('#informationDiv, #table1').css({"z-index": "0"});
				$(".introjs-helperLayer ").one('transitionend', function() {
					TweenMax.to("#restart", 1, {"opacity" : "1", onComplete:function() {
						var text = "Click to restart.";
						typing(".introjs-tooltiptext", text, function() {
							
						});
					}});
				});
			break;
			}
		});
		intro.start();
		$('.introjs-nextbutton').show();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
	}
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
			intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}


function perform(i) {
	$('.nextButton').remove();
	if(i >= 0) {
		TweenMax.to("#resultDiv", 1, {"opacity" : "1", onComplete:function() {
			var id = "#row" + $('#index' + i).text() + $('#count' + i).text();
			$('#index' + i).effect("highlight", {color: '#FF0000'}, 500);
			$('#count' + i).effect("highlight", {color: '#FF0000'}, 500, function() {
				$(id).effect("highlight", {color: '#008000'}, 1000, function() {
				    if($('#index' + i).text() == "0" && $('#count' + i).text() == "0" || $('#index' + i).text() == "1" && $('#count' + i).text() == "1") {
				    	$('#result' + i).removeClass('opacity00');
				    	var l1=$(id + " td:last-child span").offset();
				    	l2=$('#result' + i).offset({
				    		"top": l1.top,
				    		"left":l1.left
				    	});
				    	$('#result' + i).text();
			    	    TweenMax.to("#result" + i, 0.2,{top:0,left:0, onComplete:function() {
			    	    	
			    	    }});
				    } else {
				    	$('#result' + i).removeClass('opacity00');			
				    	var l1=$(id + " td:last-child span").offset();
				    	l2=$('#result' + i).offset({ 
				    		"top": l1.top,
				    		"left":l1.left
				    	});
				    	$('#result' + i).text(1);
			    	    TweenMax.to("#result" + i, 0.2,{top:0,left:0, onComplete:function() {
			    	    	
			    	    }});
				     }
				    i--;
				    perform(i);
				});		
			 });
		}});
	} else {
		$(".introjs-nextbutton, .introjs-prevbutton").show();
	}
}

	function afterConverting() {
		$(".nextButton").remove();
		$("#value").addClass("z-index-class");
		$("#value").effect("highlight", {color: '#FF0000'}, 1000, function() {
			$("#value").removeClass("z-index-class");
			TweenMax.to($("#firstBinaryNumber"),1,{opacity : 1, onComplete:function() {
				$("#value2").addClass("z-index-class");
				$("#value2").effect("highlight", {color: '#FF0000'}, 1000, function() {
					$("#value2").removeClass("z-index-class");
					TweenMax.to($("#secondBinaryNumber"),1,{opacity : 1, onComplete:function() {
						$('#addOperationDiv').append('<div class="col-xs-offset-4 col-xs-2 " style="margin-top:10px;padding:0;width:34%;">'
								+ '<div class="line-div reveal-right" id="lineDiv"></div>'
								+ '<div class="opacity00" style="margin-top:10px;" id="resultDiv"><span class="ct-code-b-green" style="margin-left:-29px;" id="xAndY"><b>x ^ y</b> =</span>'
								+ '<span id="resultValueDiv" style="margin-left: 10px;"><span class="opacity00" id="result0">0</span> '
								+ '<span class="opacity00" id="result1">0</span> '
								+ '<span class="opacity00" id="result2">0</span> '
								+ '<span class="opacity00" id="result3">0</span> '
								+ '<span class="opacity00" id="result4">0</span> '
								+ '<span class="opacity00" id="result5">0</span> '
								+ '<span class="opacity00" id="result6">0</span> '
								+ '<span class="opacity00" id="result7">0</span></span>'
								+ '</div></div>');
						$('#display').append('<span>The decimal value of <span id="resultValue"></span> is : <span id="decimalResult"></span></span>');
						intro.refresh();
						$('.introjs-tooltip').removeClass('hide');
						var text="Now, let us perform the bitwise <span class = 'ct-code-b-yellow'>XOR</span> on the binary representation" 
							+ " of <span class='ct-code-b-yellow'>x</span> and <span class='ct-code-b-yellow'>y</span>."; 
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'perform(7)'>Next &#8594;</a>");
						});
					}});
				});
			}});
		});
	}