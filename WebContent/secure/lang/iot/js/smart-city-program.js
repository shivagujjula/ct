var typingInterval = 10;
function SmartCityProgramReady() {
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
		}, {
			element : "#includeSpanId1",
			intro : '',
			position : 'left'
		}, {
			element : "#includeSpanId2",
			intro : '',
			position : 'left'
		}, {
			element : "#includeSpanId3",
			intro : '',
			position : 'left'
		}, {
			element : '#defineSpanId1',
			intro : '',
			position : 'left'
		}, {
			element : '#defineSpanId2',
			intro : '',
			position : 'left'
		}, {
			element : '#defineSpanId3',
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
			element : "#serialSpanId3",
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
			element : '#setupSpanId',
			intro : '',
			position : 'left',
			animateStep : 'secondStepInSetupSpan'
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
			element : '#whileLoopEnd',
			intro : '',
			position : 'left'
		}, {
			element : '#setUpSpanEnd',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanId',
			intro : '',
			position : 'left',
			animateStep : 'secondStepInLoopSpan'
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
			element : '#loopSpanLine6',
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
			element : '#loopSpanElseId1',
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
			element : '#loopSpanElseId2',
			intro : '',
			position : 'left'
			/*tooltipClass : 'hide'*/
		}, {
			element : '#loopFunctionPrint4',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanDelay',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanEnd',
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
			var text = 'Let us learn steps involved in <span class="ct-code-b-yellow">smart city program</span>.';
			typing(".introjs-tooltiptext", text, typingInterval, function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'includeSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">ESP8266</span> library is used for <span class="ct-text-color">wifi</span> communication.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				//	dynamicSteps("#includeSpanId2");
				});
			});
			break;
		case 'includeSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">SoftwareSerial</span> library is used for serial communication.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				//	dynamicSteps("#includeSpanId3");
				});
			});
			break;
		case 'includeSpanId3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">NewPing.h</span> library is used for calculating '+
				'distance of an object from <span class="ct-text-color">UltraSonic</span> Sensor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'defineSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">#define</span> is a preprocessor command used for defining constant '+
				'<span class="ct-color-lime">trigger_pin</span> with value <span class="ct-text-color">6</span>. '+
					'Whenever the compilation starts, at all occurrences of <span class="ct-color-lime">trigger_pin</span>, '+
					'it is replaced by <span class="ct-text-color">6</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				//	dynamicSteps("#defineSpanId2");
				});
			});
			break;
		case 'defineSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'In this statement we are defining a constant <span class="ct-color-lime">echo_pin</span> with its value '+
				'<span class="ct-text-color">7</span> using <span class="ct-code-b-yellow">#define</span>. So, whenever the compilation starts '+
				'all the occurrences of <span class="ct-color-lime">echo_pin</span> is replaced by <span class="ct-text-color">7</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				//	dynamicSteps("#defineSpanId3");
				});
			});
			break;
		case 'defineSpanId3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'In this statement we are defining a constant <span class="ct-color-lime">max_distance</span> with its value '+
				'<span class="ct-text-color">200</span> using <span class="ct-code-b-yellow">#define</span>. So, whenever the compilation '+
				'starts all the occurrences of <span class="ct-color-lime">max_distance</span> is replaced by <span class="ct-text-color">200</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'serialSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Receiver(Rx)</span> and <span class="ct-code-b-yellow">Transmitter(Tx)</span> pins '+
				'setup a new <span class="ct-color-lime">SoftwareSerial</span> port communication through <span class="ct-text-color">10</span> '+
				'and <span class="ct-text-color">11</span> pins of Arduino board.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				//	dynamicSteps("#serialSpanId2");
				});
			});
			break;
		case 'serialSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Creating <span class="ct-text-color">wifi</span> object for <span class="ct-code-b-yellow">ESP8266</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				//	dynamicSteps("#serialSpanId3");
				});
			});
			break;
		case 'serialSpanId3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-text-color">sonar</span> object initializes <span class="ct-code-b-yellow">NewPing</span> to use '+
				'<span class="ct-color-lime">trigger_pin</span> for trigger output, <span class="ct-color-lime">echo_pin</span> for echo input and '+
				'with ping distance of <span class="ct-color-lime">max_distance</span>(i.e. <span class="ct-text-color">200</span>).';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case 'setupSpanId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStepInSetupSpan':
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#setupSpanId").addClass("blinking").one("animationend", function() {
						var text = '<span class="ct-code-b-yellow">setup()</span> function is used to initialize variables and this '+
								'function will only run once.';
						typing(".introjs-tooltiptext", text, typingInterval, function() {
							$("#setupSpanId").removeClass("blinking").off();
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
						
					});
				});
				break;
			case 'secondStepInSetupSpan':
				$(".introjs-helperLayer").one('transitionend', function() {
					$(".introjs-tooltiptext").html('Now control enters into the setup function.');
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
				break;
			}
			break;
		/* case 'setupSpanId':
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#setupSpanId").addClass("blinking").one("animationend", function() {
					var text = '<span class="ct-code-b-yellow">setup()</span> function is used to initialize variables and this '+
					'function will only run once.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			});
			break; */
		case 'setupLine1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.begin(9600)</span> sets data rate(baud rate) as <span class="ct-text-color">9600'+
				'</span>  bits per second for serial data transmission.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'setupLine2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">mySerial.begin(115200)</span> sets the data rate as '+
				'<span class="ct-text-color">115200</span> bits per second for SoftwareSerial data transmission.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case 'setupLine3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"setup begin"</span> on '+
				'Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'setupWhileLoop':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is the condition part of <span class="ct-color-lime">while</span> loop. If <span class="ct-text-color">wifi</span> '+
				'connection is successful, the control enters into the while-loop body.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'whileLoopPrint':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"connected to your wifi"'+
				'</span> on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'whileLoopBreak':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">break</span> command is used for exiting from the while loop.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				//	dynamicSteps("#whileLoopEnd");
				});
			});
			break;
		case 'whileLoopEnd':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Control exit the while loop.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				//	dynamicSteps("#setUpSpanEnd");
				});
			});
			break;
		case 'setUpSpanEnd':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is end of the <span class="ct-code-b-yellow">setup()</span> method.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
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
							$("#loopSpanId").removeClass("blinking").off();
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
				});
				break;
			case 'secondStepInLoopSpan':
				$(".introjs-helperLayer").one('transitionend', function() {
					$(".introjs-tooltiptext").html('Now control enters into the loop function.');
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
				break;
			}
			break;
		
		/* case 'loopSpanId':
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#loopSpanId").addClass("blinking").one("animationend", function() {
					var text = '<span class="ct-code-b-yellow">loop()</span> function executes infinitely.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			});
			break; */
		case 'loopSpanLine1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints the string '+
				'<span class="ct-color-lime">"loop runs with new values"</span> on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'loopSpanLine2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">delay</span> about <span class="ct-color-lime">50ms</span> between two pings '+
				'(about 20 pings/sec). 29ms should be the shortest delay between pings.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'loopSpanLine3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-color-lime">sonar.ping_cm()</span> sends a ping out and gets distance in centimeters and assigns '+
				'value to <span class="ct-code-b-yellow">sensorValue</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'loopSpanLine4':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.print()</span> prints <span class="ct-color-lime">"ping value : "</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'loopSpanLine5':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.print()</span> prints value of <span class="ct-color-lime">sensorValue</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'loopSpanLine6':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">" cm"</span> units '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'loopSpanIfId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is the condition part of if-loop. <span class="ct-code-b-yellow">createTCP()</span> checks if the ip address '+
				'and port of cloud machine matches the given ip and port.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'loopFunctionPrint1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"connected to cloud"</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'loopSpanElseId1':
			$("#elseEndBrace1").html("\t}");
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'If <span class="ct-code-b-yellow">if</span> condition evaluates to false, the control enters into the '+
				'<span class="ct-code-b-yellow">else</span> block.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'loopFunctionPrint2':
			$("#elseEndBrace1").html("}");
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"Unable to connect cloud"</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'loopSpanIfId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">wifi.send_one_parameter()</span> is used for sending values from sensor to cloud. '+
				'The values are successfully sent, if condition returns true.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'loopFunctionPrint3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"values moving on"</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'loopSpanElseId2':
			$("#elseEndBrace2").html("\t}");
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'If <span class="ct-code-b-yellow">if</span> condition evaluates to false, then the control enters into '+
				'<span class="ct-code-b-yellow">else</span> block.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
				//	setTimeOutFunction();
			});
			break;
		case 'loopFunctionPrint4':
			$("#elseEndBrace2").html("}");
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'else <span class="ct-code-b-yellow">Serial.println()</span> prints '+
				'<span class="ct-color-lime">"values are not moving"</span> on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'loopSpanDelay':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">delay(1000)</span> pauses the execution for <span class="ct-text-color">1 sec</span> '+
				'between updates.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			//	dynamicSteps("#loopSpanEnd");
			});
			break;
		case 'loopSpanEnd':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'control exit the <span class="ct-code-b-yellow">loop()</span> method.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
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
	}, 1000);
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