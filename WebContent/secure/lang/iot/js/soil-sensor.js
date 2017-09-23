var typingInterval = 10;
function soilSensorReady() {
	introGuide();
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function() {
		location.reload();
	});
	
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element : "#heading",
			intro : "",
			position : 'right'
		}/* , {
			element :'#infoDiv',
			intro : '',
			tooltipClass : 'hide',
		} */, {
			element : "#includeSpanId1",
			intro : '',
			position : 'left'
		}, {
			element : "#includeSpanId2",
			intro : '',
			position : 'left'
		}, {
			element : '#declarationSpanId1',
			intro : '',
			position : 'left'
		}, {
			element : '#declarationSpanId2',
			intro : '',
			position : 'left'
		}, {
			element : "#serialSpanId1",
			intro : '',
			position : 'left'
		}, {
			element : "#serialSpanId2",
			intro : '',
			position : 'left'
		}, {
			element : '#setupSpanId',
			intro : '',
			position : 'left',
			animateStep : 'firstStepInSetupSpan'
		}, {
			element : '#loopSpanId',
			intro : '',
			position : 'left',
			animateStep : 'firstStepInLoopSpan'
		}, {
			element : '#setupLine1',
			intro : '',
			position : 'left'
		}, {
			element : '#setupLine2',
			intro : '',
			position : 'left'
		}, {
			element : '#setupLine3',
			intro : '',
			position : 'left'
		}, {
			element : '#setupLine4',
			intro : '',
			position : 'left'
		}, {
			element : '#setupLine5',
			intro : '',
			position : 'left'
		}, {
			element : '#setupWhileLoop',
			intro : '',
			position : 'left'
		},{
			element : '#whileLoopPrint',
			intro : '',
			position : 'left'
		}, {
			element : '#whileLoopBreak',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanLine1',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanLine2',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanLine3',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanLine4',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanLine5',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanIfId1',
			intro : '',
			position : 'left'
		}, {
			element : '#loopFunctionPrint1',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanElseId',
			intro : '',
			position : 'left'
		}, {
			element : '#loopFunctionPrint2',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanIfId2',
			intro : '',
			position : 'left'
		}, {
			element : '#loopFunctionPrint3',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanDelay',
			intro : '',
			position : 'left'
		}, {
			element :'#restart',
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'heading':
			var text = 'Let us learn steps involved in <span class="ct-code-b-yellow">soil sensor program</span>.';
			typing(".introjs-tooltiptext", text, typingInterval, function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'infoDiv':
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'includeSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text ='<span class="ct-code-b-yellow">ESP8266</span> library is used for <span class="ct-text-color">wifi</span> communication.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$("#serialSpanId2, #wifiJoinId1, #wifiJoinId2, #wifiJoinId3").addClass("z-index blinking");
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'includeSpanId2':
			$("#serialSpanId2, #wifiJoinId1, #wifiJoinId2, #wifiJoinId3").removeClass("z-index blinking");
			$(".introjs-helperLayer").one('transitionend', function() {
				var text ='<span class="ct-code-b-yellow">SoftwareSerial</span> library is used for serial communication.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$("#setupLine2").addClass("z-index blinking");
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'serialSpanId1':
			$("#setupLine2").removeClass("z-index blinking");
			$(".introjs-helperLayer").one('transitionend', function() {
				/* var text = '<span class="ct-code-b-yellow">Receiver(Rx)</span> and <span class="ct-code-b-yellow">Transmitter(Tx)</span> pins '+
				'setup a new SoftwareSerial port communication through 10 and 11 pins of Arduino board.'; */
				var text = '<ul>'+
					'<li><span class="ct-color-lime">SoftwareSerial</span> is a class which is included in '+
						'<span class="ct-code-b-yellow">SoftwareSerial.h</span> header file.</li>'+
					'<li><span class="ct-color-lime">mySerial</span> is an object of the class <span class="ct-code-b-yellow">softwareSerial</span>.</li>'+
					'<li><span class="ct-text-color">10</span> and <span class="ct-text-color">11</span> initialization of pins.</li>'+
					'<li><span class="ct-text-color">10</span> is <span class="ct-code-b-yellow">Receiver(Rx)</span> and '+
					'<span class="ct-text-color">11</span> is <span class="ct-code-b-yellow">Transmitter(Tx)</span> to assign the pin numbers of '+
					'Arduino board.</li></ul>';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'serialSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				/* var text = 'Creating wifi object for <span class="ct-code-b-yellow">ESP8266</span>.'; */
				var text = 'The object <span class="ct-color-lime">wifi</span> is created for the class '+
					'<span class="ct-code-b-yellow">ESP8266</span> '+
					'by using an argument as another object <span class="ct-code-b-yellow">mySerial</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'declarationSpanId1':
			$("#setupLine2").removeClass("z-index blinking");
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Pin 9</span> on Arduino board is assigned as '+
					'<span class="ct-color-lime">digitalPin</span> (i.e. input pin)  to read digital values from Soil Sensor.'
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'declarationSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Pin A0</span> on Arduino board is assigned as <span class="ct-color-lime">analogPin</span> '+
				'(i.e. input pin) to read analog values from Soil Sensor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'setupSpanId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStepInSetupSpan':
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#setupSpanId").addClass("blinking").one("animationend", function() {
						var text = '<span class="ct-code-b-yellow">setup()</span> function is used to initialize the variables and this '+
						'function will only run once.'
						typing(".introjs-tooltiptext", text, typingInterval, function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
				break;
			case 'secondStepInSetupSpan':
				$(".introjs-helperLayer").one('transitionend', function() {
					setTimeOutFunction();
				});
				break;
			}
			break;
		case 'setupLine1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.begin(9600)</span> sets data rate(baud rate) as '+
				'<span class="ct-color-lime">9600</span> bits per second for serial data transmission.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'setupLine2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">mySerial.begin(115200)</span> sets the data rate as '+
				'<span class="ct-color-lime">115200</span> bits per second for SoftwareSerial data transmission.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'setupLine3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"setup begin"</span> '+
				'on Serial Monitor.'
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'setupLine4':
			$(".introjs-helperLayer").one('transitionend', function() {
				/* var text = 'Configures the specified pin(i.e. <span class="ct-code-b-yellow">digitalPin</span>) to behave as digital input mode.'; */
				var text = 'The <span class="ct-code-b-yellow">pinMode</span> function configures the specified <span class="ct-color-lime">digitalPin'+
				'</span> (<span class="ct-text-color">9</span>) to behave as a digital <span class="ct-color-lime">INPUT</span> mode.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'setupLine5':
			$(".introjs-helperLayer").one('transitionend', function() {
				/* var text = 'Configures the specified pin(i.e. <span class="ct-code-b-yellow">analogPin</span>) to behave as analog input mode.'; */
				var text = 'The <span class="ct-code-b-yellow">pinMode</span> function configures the specified <span class="ct-color-lime">analogPin'+
				'</span> (<span class="ct-text-color">A0</span>) to behave as a digital <span class="ct-color-lime">INPUT</span> mode.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'setupWhileLoop':
			$(".introjs-helperLayer").one('transitionend', function() {
				/* var text = 'This is the condition part of while loop. If wifi connection is successful, the control enters into the while-loop body.'; */
				var text = 'Here the while loop is repeated until it get connect to <span class="ct-color-lime">wifi</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'whileLoopPrint':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Whenever it is connected the <span class="ct-code-b-yellow">Serial.println()</span> prints '+
				'<span class="ct-color-lime">"connected to your wifi"</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'whileLoopBreak':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">break</span> command is used for exiting from the while loop.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#whileLoopEnd");
			});
			break;
		case 'whileLoopEnd':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Control exit the while loop.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#setUpEnd");
			});
			break;
		case 'setUpEnd':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is end of the <span class="ct-code-b-yellow">setup()</span> method.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanId", "secondStepInLoopSpan", "hide");
			});
			break;
		case 'loopSpanId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStepInLoopSpan':
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#loopSpanId").addClass("blinking").one("animationend", function() {
						var text = '<span class="ct-code-b-yellow">loop()</span> function executes infinitely.';
						typing(".introjs-tooltiptext", text, typingInterval, function() {
							$(".introjs-nextbutton").show();
						});
						dynamicSteps("#setupSpanId", "secondStepInSetupSpan", "hide");
					});
				});
				break;
			case 'secondStepInLoopSpan':
				$(".introjs-helperLayer").one('transitionend', function() {
					setTimeOutFunction();
				});
				break;
			}
			break;
			
		case 'loopSpanLine1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints the string '+
				'<span class="ct-color-lime">"Sensor takes new values and prints here.........."</span> on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanLine2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">digitalRead</span> function reads the digital values from '+
				'<span class="ct-text-color">digitalPin</span> and stores in variable <span class="ct-color-lime">soilStatus</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanLine3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">analogRead</span> function reads the analog values from '+
				'<span class="ct-text-color">analogPin</span> and stores in variable <span class="ct-color-lime">soilAnalogStatus</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanLine4':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints the value of '+
				'<span class="ct-text-color">soilStatus</span> on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanLine5':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints the value of '+
				'<span class="ct-text-color">soilAnalogStatus</span> on serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case 'loopSpanIfId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is the condition part of <span class="ct-code-b-yellow">if</span> loop. '+
				'<span class="ct-code-b-yellow">createTCP()</span> checks if the ip address and port of '+
				'cloud machine matches the given ip and port.'
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopFunctionPrint1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Serial.println() prints <span class="ct-color-lime">"connected to cloud"</span> on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanElseId':
			$("#elseEndBrace").html("\t}");
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'If <span class="ct-code-b-yellow">if</span> condition evaluates to false, then the control enters into '+
				'<span class="ct-code-b-yellow">else</span> block.'
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopFunctionPrint2':
			$("#elseEndBrace").html("}");
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints '+
				'<span class="ct-color-lime">"Unable to connect cloud"</span> on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanIfId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">wifi.send_two_parameters()</span> is used for sending values of sensor '+
				'to cloud. The values are successfully sent, <span class="ct-code-b-yellow">if</span> condition returns true.'
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopFunctionPrint3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints '+
				'<span class="ct-color-lime">"values moving on"</span> on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanDelay':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">delay(1000)</span> pauses the execution for '+
				'<span class="ct-color-lime">1 sec</span> between updates.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanEnd");
			});
			break;
		case 'loopSpanEnd':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'control exit the <span class="ct-code-b-yellow">loop()</span> method.'
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'restart':
			$("#preCode").addClass("z-index");
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}

function setTimeOutFunction() {
	setTimeout(function() {
		introjs.nextStep();
	}, 500);
}

function typing(typingId, text, typingInterval, typingCallbackFunction) {
	$(typingId).typewriting(text, {
		"typing_interval": typingInterval,
		"cursor_color": 'white'
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
		}
	});
}

//****dynamic steps*************
function dynamicSteps(stepName, animatedStep, tooltipClass) {
	var options = {
			element :stepName,
			intro :'',
			tooltipClass : tooltipClass,
			animateStep: animatedStep,
			position: 'left'
	}
	introjs.insertOption(introjs._currentStep + 1, options);
}