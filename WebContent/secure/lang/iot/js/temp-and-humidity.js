var typingInterval = 2;
function temparatureAndHumidityReady() {
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
			intro : '<span class="ct-code-b-yellow">dht.h</span> library is temperature and humidity library used for '+
						'caluclating DHT humidity and temperature sensor values.',
			position : 'left'
		}, {
			element : "#includeSpanId2",
			intro : '<span class="ct-code-b-yellow">SoftwareSerial</span> library is used for serial communication.',
			position : 'left'
		}, {
			element : "#includeSpanId3",
			intro : '<span class="ct-code-b-yellow">ESP8266</span> library is used for wifi communication.',
			position : 'left'
		}, {
			element : '#declarationSpanId1',
			intro : '<span class="ct-code-b-yellow">int</span> temperature creates a variable name called '+
						'<span class="ct-color-lime">temperature</span> to store values of temperature from <span class="ct-text-color">DHT</span> '+
						'Sensor and whose type is <span class="ct-code-b-yellow">int</span>.',
			position : 'left'
		}, {
			element : '#declarationSpanId2',
			intro : '<span class="ct-code-b-yellow">int</span> humidity creates a variable name called '+
						'<span class="ct-color-lime">humidity</span> to store values of humidity from <span class="ct-text-color">DHT</span> Sensor and '+
						'whose type is <span class="ct-code-b-yellow">int</span>.',
			position : 'left'
		}, {
			element : '#unitSpanId1',
			intro : '<span class="ct-code-b-yellow">startTime</span> is variable used for storing microseconds.',
			position : 'left'
		}, {
			element : '#declarationSpanId3',
			intro : '<span class="ct-code-b-yellow">int</span> dhtRead creates a variable name called '+
						'<span class="ct-color-lime">dhtRead</span> to store values of dhtRead from <span class="ct-text-color">DHT</span> '+
						'Sensor and whose type is <span class="ct-code-b-yellow">int</span>.',
			position : 'left'
		}, {
			element : '#unitSpanId2',
			intro : '<span class="ct-code-b-yellow">stopTime</span> is variable used for storing microseconds.',
			position : 'left'
		}, {
			element : '#defineSpanId',
			intro : 'In this statement we are declaring a symbolic constant <span class="ct-color-lime">dht_pin</span> with its value '+
						'<span class="ct-text-color">5</span> using <span class="ct-code-b-yellow">#define</span>. So, whenever the compilation '+
						'starts all the occurrences of <span class="ct-color-lime">dht_pin</span> is replaced by <span class="ct-text-color">5</span>.',
			position : 'left'
		}, {
			element : '#serialSpanId1',
			intro : '<span class="ct-code-b-yellow">Receiver(Rx)</span> and <span class="ct-code-b-yellow">Transmitter(Tx)</span> pins '+
						'setup a new SoftwareSerial port communication through <span class="ct-text-color">10</span> and '+
						'<span class="ct-text-color">11</span> pins of Arduino board.',
			position : 'left'
		}, {
			element : '#serialSpanId2',
			intro : 'Creating <span class="ct-text-color">wifi</span> object for <span class="ct-code-b-yellow">ESP8266</span>.',
			position : 'left'
		}, {
			element : '#serialSpanId3',
			intro : '<span class="ct-color-lime">DHT</span> is an object of <span class="ct-code-b-yellow">dht</span> used for '+
						'reading temperature and humidity values.',
			position : 'left'
		}, {
			element : '#functionDeclarationSpanId',
			intro : '<span class="ct-code-b-yellow">readAndDisplayData()</span> is function declaration with no arguements and '+
						'return type as void for reading and displaying data on serial monitor when function is called.',
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
			intro : '<span class="ct-code-b-yellow">Serial.begin(9600)</span> sets data rate(baud rate) as <span class="ct-text-color">9600'+
						'</span> bits per second for serial data transmission.',
			position : 'left'
		}, {
			element : '#setupLine2',
			intro : '<span class="ct-code-b-yellow">mySerial.begin(115200)</span> sets the data rate as <span class="ct-text-color">115200'+
						'</span> bits per second for SoftwareSerial data transmission.',
			position : 'left'
		}, {
			element : '#setupLine3',
			intro : '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"setup begin"</span> '+
						'on Serial Monitor.',
			position : 'left'
		}, {
			element : '#setupWhileLoop',
			intro : 'This is the condition part of while loop. If wifi connection is successful, the control enters into the while-loop body.',
			position : 'left'
		},{
			element : '#whileLoopPrint',
			intro : '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"connected to your wifi"</span>'+
						' on Serial Monitor.',
			position : 'left'
		}, {
			element : '#whileLoopBreak',
			intro : '<span class="ct-code-b-yellow">break</span> command is used for exiting from the while loop.',
			position : 'left'
		}, {
			element : '#whileLoopEnd',
			intro : 'Control exit the while loop.',
			position : 'left'
		}, {
			element : '#setupFunctionPrint',
			intro : '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"setup end"</span> '+
						'on Serial Monitor.',
			position : 'left'
		}, {
			element : '#setUpSpanEnd',
			intro : 'This is end of the <span class="ct-code-b-yellow">setup()</span> method.',
			position : 'left'
		}, {
			element : '#loopSpanId',
			intro : '',
			position : 'left',
			animateStep : 'secondStepInLoopSpan'
		}, {
			element : '#loopSpanLine1',
			intro : '<span class="ct-code-b-yellow">Serial.println()</span> prints '+
						'<span class="ct-color-lime">"caluclating temperature and humidity values for every 1 second"</span> on Serial Monitor.',
			position : 'left'
		}, {
			element : '#loopSpanLine2',
			intro : 'A call to function <span class="ct-code-b-yellow">readAndDisplayData()</span> for reading and displaying data of DHT Sensor.',
			position : 'left'
		}, {
			element : '#dispalySpanId',
			intro : 'This is Function Definition named <span class="ct-code-b-yellow">readAndDisplayData()</span> '+
						'contains self-contained block of statements that specifies one or more actions to be performed.',
			position : 'left'
		}, {
			element : '#displayLine1',
			intro : '<span class="ct-color-lime">micros()</span> is used to return the number of microseconds and store in '+
						'<span class="ct-code-b-yellow">startTime</span>.',
			position : 'left'
		}, {
			element : '#displayLine2',
			intro : '<span class="ct-color-lime">DHT.read(dht_pin)</span> is function of DHT library which reads from DHT sensor '+
						'through <span class="ct-text-color">dht_pin</span>(i.e. 5) and assigns '+
						'values to <span class="ct-code-b-yellow">dhtRead</span> variable.',
			position : 'left'
		}, {
			element : '#displayLine3',
			intro : '<span class="ct-color-lime">micros()</span> is used to return number of microseconds and store in '+
						'<span class="ct-code-b-yellow">stopTime</span>.',
			position : 'left'
		}, {
			element : '#displayLine4',
			intro : '<span class="ct-color-lime">DHT.temperature</span> calculates temperature reading and assigns its value to '+
						'<span class="ct-code-b-yellow">temperature</span> variable.',
			position : 'left'
		}, {
			element : '#displayLine5',
			intro : '<span class="ct-color-lime">DHT.humidity</span> calculates humidity reading and assigns its value to '+
						'<span class="ct-code-b-yellow">humidity</span> variable.',
			position : 'left'
		}, {
			element : '#displayLine6',
			intro : '<span class="ct-code-b-yellow">Serial.print()</span> prints value of <span class="ct-color-lime">humidity</span> '+
						'on Serial Monitor.',
			position : 'left'
		}, {
			element : '#displayLine7',
			intro : '<span class="ct-code-b-yellow">Serial.print()</span> prints units of humidity '+
						'<span class="ct-color-lime">"gm/m3"</span> on Serial Monitor.',
			position : 'left'
		}, {
			element : '#displayLine8',
			intro : '<span class="ct-code-b-yellow">Serial.print()</span> prints value of <span class="ct-color-lime">temperature</span> '+
						'on Serial Monitor.',
			position : 'left'
		}, {
			element : '#displayLine9',
			intro : '<span class="ct-code-b-yellow">Serial.print()</span> prints units of temperature <span class="ct-color-lime">"deg"</span> '+
						'on Serial Monitor.',
			position : 'left'
		}, {
			element : '#displayLine10',
			intro : '<span class="ct-code-b-yellow">Serial.println()</span> is used to print values on next line.',
			position : 'left'
		}, {
			element : '#dispalySpanEnd',
			intro : 'Control exit the <span class="ct-code-b-yellow">readAndDisplayData()</span> method.',
			position : 'left'
		}, {
			element : '#loopSpanIfId1',
			intro : 'This is the condition part of if loop. <span class="ct-code-b-yellow">createTCP()</span> checks if the ip '+
						'address and port of cloud machine matches the given ip and port.',
			position : 'left'
		}, {
			element : '#loopFunctionPrint1',
			intro : '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"connected to cloud"</span> '+
						'on Serial Monitor.',
			position : 'left'
		}, {
			element : '#loopSpanElseId',
			intro : 'If <span class="ct-code-b-yellow">if</span> condition evaluates to false, the control enters into the '+
						'<span class="ct-code-b-yellow">else</span> block.',
			position : 'left'
		}, {
			element : '#loopFunctionPrint2',
			intro : '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"Unable to connect cloud"</span>'+
						' on Serial Monitor.',
			position : 'left'
		}, {
			element : '#loopSpanIfId2',
			intro : '<span class="ct-code-b-yellow">wifi.send_two_parameters()</span> is used for sending values of sensor to cloud. '+
						'The values are successfully sent, if condition returns true.',
			position : 'left'
		}, {
			element : '#loopFunctionPrint3',
			intro : '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"values moving on"</span> '+
						'on Serial Monitor.',
			position : 'left'
		}, {
			element : '#loopSpanDelay',
			intro : '<span class="ct-code-b-yellow">delay(1000)</span> pauses the execution for <span class="ct-color-lime">1 sec</span> '+
						'between updates.',
			position : 'left'
		}, {
			element : '#loopSpanEnd',
			intro : 'Control exit the <span class="ct-code-b-yellow">loop()</span> method.',
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
			var text = 'Let us learn steps involved in <span class="ct-code-b-yellow">temperature and humidity program</span>.';
			typing(".introjs-tooltiptext", text, typingInterval, function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'includeSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'includeSpanId2':
		case 'includeSpanId3':
		case 'defineSpanId':
		case 'serialSpanId1':
		case 'serialSpanId2':
		case 'serialSpanId3':
		case 'functionDeclarationSpanId':
		case 'declarationSpanId1':
		case 'declarationSpanId2':
		case 'declarationSpanId3':
		case 'unitSpanId1':
		case 'unitSpanId2':
		case 'setupLine1':
		case 'setupLine2':
		case 'setupLine3':
		case 'setupWhileLoop':
		case 'whileLoopPrint':
		case 'whileLoopBreak':
		case 'whileLoopEnd':
		case 'setupFunctionPrint':
		case 'setUpSpanEnd':
		case 'loopSpanLine1':
		case 'loopSpanLine2':
		case 'dispalySpanId':
		case 'displayLine1':
		case 'displayLine2':
		case 'displayLine3':
		case 'displayLine4':
		case 'displayLine5':
		case 'displayLine6':
		case 'displayLine7':
		case 'displayLine8':
		case 'displayLine9':
		case 'displayLine10':
		case 'dispalySpanEnd':
		case 'loopSpanIfId1':
		case 'loopFunctionPrint1':
		case 'loopSpanElseId':
		case 'loopFunctionPrint2':
		case 'loopSpanIfId2':
		case 'loopFunctionPrint3':
		case 'loopSpanDelay':
		case 'loopSpanEnd':
			
			$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			});
			break;
		
		
		
		
		case 'setupSpanId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStepInSetupSpan':
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#setupSpanId").addClass("blinking").one("animationend", function() {
						$(".introjs-tooltiptext").html('<span class="ct-code-b-yellow">setup()</span> function is used to initialize the '+
								'variables and this function will only run <span class="ct-text-color">once</span>.');
						$("#setupSpanId").removeClass("blinking").off();
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'secondStepInSetupSpan':
				$(".introjs-helperLayer").one('transitionend', function() {
					$(".introjs-tooltiptext").html('Now control enters into the <span class="ct-code-b-yellow">setup</span> function.');
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
				break;
			}
			break;
			
		case 'loopSpanId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStepInLoopSpan':
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#loopSpanId").addClass("blinking").one("animationend", function() {
						$(".introjs-tooltiptext").html('<span class="ct-code-b-yellow">loop()</span> function executes '+
								'<span class="ct-text-color">infinitely</span>.');
						$("#loopSpanId").removeClass("blinking").off();
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'secondStepInLoopSpan':
				$(".introjs-helperLayer").one('transitionend', function() {
					$(".introjs-tooltiptext").html('Now control enters into the <span class="ct-code-b-yellow">loop</span> function.');
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
				break;
			}
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