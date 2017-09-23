var typingInterval = 10;
function SmartIndustryProgramReady() {
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
			element : '#includeSpanId1',
			intro : '<span class="ct-code-b-yellow">SoftwareSerial</span> library is used for serial communication.',
			position : 'left'
		}, {
			element : '#includeSpanId2',
			intro : '<span class="ct-code-b-yellow">ESP8266</span> library is used for <span class="ct-color-lime">wifi</span> communication.',
			position : 'left'
		}, {
			element : '#unsignedSpanId1',
			intro : '<span class="ct-color-lime">long unsigned int</span> <span class="ct-code-b-yellow">lowIn</span> variable has declared '+
						'size <span class="ct-text-color">32 bits</span> (<span class="ct-color-lime">4 bytes</span>) for storage of time in '+
						'<span class="ct-code-b-yellow">milli seconds</span> when the sensor outputs a low impulse.',
			position : 'left'
		}, {
			element : '#unsignedSpanId2',
			intro : '<span class="ct-color-lime">long unsigned int</span> <span class="ct-code-b-yellow">pause</span> variable declares and '+
						'initialised to <span class="ct-text-color">5000</span> for  the sensor has to be low before '+
						'we assume all motion has stopped.',
			position : 'left'
		}, {
			element : '#booleanSpanId1',
			intro : '<span class="ct-code-b-yellow">boolean</span> <span class="ct-color-lime">lockLow</span> variable initialises to '+
						'<span class="ct-text-color">true</span>.',
			position : 'left'
		}, {
			element : '#booleanSpanId2',
			intro : '<span class="ct-code-b-yellow">boolean</span> <span class="ct-color-lime">takeLowTime</span> variable is used to declare '+
						'for either values of <span class="ct-text-color">true</span> or <span class="ct-text-color">false</span>.',
			position : 'left'
		}, {
			element : '#declarationSpanId1',
			intro : 'Pin <span class="ct-code-b-yellow">3</span> on Arduino board is assigned to <span class="ct-color-lime">pir</span> Sensor '+
					'as digitalPin(i.e. input pin)  to read digital values from <span class="ct-color-lime">pir</span> Sensor.',
			position : 'left'
		}, {
			element : '#declarationSpanId2',
			intro : 'Pin <span class="ct-code-b-yellow">13</span> on Arduino board is assigned as digitalPin(i.e. Output pin) to write digital '+
					'values to <span class="ct-color-lime">led</span>.',
			position : 'left'
		}, {
			element : '#declarationSpanId3',
			intro : '<span class="ct-color-lime">count</span> is an <span class="ct-code-b-yellow">static</span> variable declared for counting '+
					'number of objects.',
			position : 'left'
		}, {
			element : '#serialSpanId1',
			intro : '<span class="ct-code-b-yellow">Receiver(Rx)</span> and <span class="ct-code-b-yellow">Transmitter(Tx)</span> '+
						'pins setup a new SoftwareSerial port communication through <span class="ct-text-color">10</span> and '+
						'<span class="ct-text-color">11</span> pins of Arduino board.',
			position : 'left'
		}, {
			element : '#serialSpanId2',
			intro : 'Creating <span class="ct-color-lime">wifi</span> object for <span class="ct-code-b-yellow">ESP8266</span>.',
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
			intro : '<span class="ct-code-b-yellow">Serial.begin(9600)</span> sets data rate(baud rate) as <span class="ct-text-color">9600</span> '+
					'bits per second for serial data transmission.',
			position : 'left'
		}, {
			element : '#setupLine2',
			intro : '<span class="ct-code-b-yellow">mySerial.begin(115200)</span> sets the data rate as <span class="ct-text-color">115200</span> '+
					'bits per second for SoftwareSerial data transmission.',
			position : 'left'
		}, {
			element : '#setupLine3',
			intro : '<span class="ct-code-b-yellow">pinMode</span>(<span class="ct-color-lime">pirPin</span>, <span class="ct-color-lime">INPUT</span>)'+
					' configures the specified pin (i.e. <span class="ct-color-lime">pirPin</span> number <span class="ct-text-color">3</span>) to '+
					'behave as <span class="ct-color-lime">INPUT</span> mode.',
			position : 'left'
		}, {
			element : '#setupLine4',
			intro : '<span class="ct-code-b-yellow">digitalWrite</span>(<span class="ct-color-lime">pirPin</span>, <span class="ct-color-lime">LOW</span>)'+
					' configures the specified pin(i.e. <span class="ct-color-lime">pirPin</span> number <span class="ct-text-color">3</span>) '+
					'to <span class="ct-color-lime">LOW</span> value.',
			position : 'left'
		}, {
			element : '#setupWhileLoop',
			intro : 'This is the condition part of <span class="ct-code-b-yellow">while</span> loop. If <span class="ct-color-lime">wifi</span> '+
					'connection is successful, the control enters into the while-loop body.',
			position : 'left'
		}, {
			element : '#whileLoopPrint',
			intro : '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"connected to your wifi"</span> '+
					'on Serial Monitor.',
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
			element : '#setUpSpanEnd',
			intro : 'This is end of the <span class="ct-code-b-yellow">setup()</span> method.',
			position : 'left'
		}, {
			element : '#loopSpanId',
			intro : '',
			position : 'left',
			animateStep : 'secondStepInLoopSpan'
		}, {
			element : '#loopSpanIfId1',
			intro : 'This is the condition part of <span class="ct-code-b-yellow">if-loop</span>. If <span class="ct-code-b-yellow">digitalRead</span>'+
					'(<span class="ct-color-lime">pirPin</span>) evaluates to <span class="ct-text-color">HIGH</span> value then control enters '+
					'into <span class="ct-code-b-yellow">if</span> loop.',
			position : 'left'
		}, {
			element : '#loopDigitalId1',
			intro : '<span class="ct-code-b-yellow">digitalWrite()</span> writes <span class="ct-text-color">HIGH</span> value to specified '+
					'output pin(i.e. <span class="ct-color-lime">ledPin</span>) connected to <span class="ct-color-lime">LED</span>.',
			position : 'left'
		}, {
			element : '#loopSpanIfId2',
			intro : 'if <span class="ct-code-b-yellow">lockLow</span> is <span class="ct-color-lime">true</span> then it makes sure that we '+
					'wait for a transition to <span class="ct-text-color">LOW</span> before any output is made.',
			position : 'left'
		}, {
			element : '#loopCountId',
			intro : 'Then <span class="ct-code-b-yellow">count</span> will be incremented.',
			position : 'left'
		}, {
			element : '#loopLockLowId1',
			intro : '<span class="ct-code-b-yellow">lockLow</span> variables to <span class="ct-color-lime">false</span>.',
			position : 'left'
		}, {
			element : '#loopSerialPrint1',
			intro : '<span class="ct-code-b-yellow">Serial.print()</span> prints the String '+
					'<span class="ct-color-lime">"motion has been detected at : "</span> on Serial Monitor.',
			position : 'left'
		}, {
			element : '#loopSerialPrint2',
			intro : '<span class="ct-code-b-yellow">Serial.print()</span> prints amount of time the motion of an object been detected.',
			position : 'left'
		}, {
			element : '#loopSerialPrint3',
			intro : '<span class="ct-code-b-yellow">Serial.println()</span> prints string <span class="ct-color-lime">" sec"</span> on Serial Monitor.',
			position : 'left'
		}, {
			element : '#loopDelayId1',
			intro : '<span class="ct-code-b-yellow">delay</span>(<span class="ct-color-lime">50</span>) pauses the execution for '+
					'<span class="ct-text-color">50 millisec</span>.',
			position : 'left'
		}, {
			element : '#loopTakeLowId1',
			intro : 'assigns <span class="ct-color-lime">true</span> to <span class="ct-code-b-yellow">takeLowTime</span>.',
			position : 'left'
		}, {
			element : '#loopSpanIfId3',
			intro : 'This is the condition part of <span class="ct-code-b-yellow">if-loop</span>. If <span class="ct-code-b-yellow">digitalRead</span>'+
					'(<span class="ct-color-lime">pirPin</span>) evaluates to <span class="ct-text-color">LOW</span> value then control enters into '+
					'<span class="ct-code-b-yellow">if</span> loop.',
			position : 'left'
		}, {
			element : '#loopDigitalId2',
			intro : '<span class="ct-code-b-yellow">digitalWrite()</span> writes <span class="ct-text-color">LOW</span> value to specified '+
					'output pin(i.e. <span class="ct-color-lime">ledPin</span>) connected to <span class="ct-color-lime">LED</span>.',
			position : 'left'
		}, {
			element : '#loopSpanIfId4',
			intro : 'if <span class="ct-code-b-yellow">takeLowTime</span> is <span class="ct-color-lime">true</span> then it makes sure that we '+
					'wait for a transition to <span class="ct-text-color">HIGH</span> before any output is made.',
			position : 'left'
		}, {
			element : '#loopLowInId',
			intro : 'save the time of the transition from <span class="ct-text-color">HIGH</span> to <span class="ct-text-color">LOW</span>.',
			position : 'left'
		}, {
			element : '#loopTakeLowId2',
			intro : 'assigns <span class="ct-color-lime">false</span> to <span class="ct-code-b-yellow">takeLowTime</span> variable.',
			position : 'left'
		}, {
			element : '#loopSpanIfId5',
			intro : 'This is the condition part of <span class="ct-code-b-yellow">if-loop</span>.',
			position : 'left'
		}, {
			element : '#loopLockLowId2',
			intro : 'assigns <span class="ct-color-lime">true</span> to <span class="ct-code-b-yellow">lockLow</span> variable.',
			position : 'left'
		}, {
			element : '#loopSerialPrint4',
			intro : '<span class="ct-code-b-yellow">Serial.print()</span> prints String <span class="ct-color-lime">"motion ended at : "</span> '+
					'on Serial Monitor.',
			position : 'left'
		}, {
			element : '#loopSerialPrint5',
			intro : '<span class="ct-code-b-yellow">Serial.print()</span> prints amount of time the motion of object has ended.',
			position : 'left'
		}, {
			element : '#loopSerialPrint6',
			intro : '<span class="ct-code-b-yellow">Serial.print()</span> prints String <span class="ct-color-lime">" sec"</span> on Serial Monitor.',
			position : 'left'
		}, {
			element : '#loopDelayId2',
			intro : '<span class="ct-code-b-yellow">delay</span>(<span class="ct-text-color">50</span>) pauses the execution for '+
					'<span class="ct-text-color">50 millisec</span>.',
			position : 'left'
		}, {
			element : '#loopSerialPrint7',
			intro : '<span class="ct-code-b-yellow">Serial.print()</span> prints the String <span class="ct-color-lime">"Count of objects : "</span> '+
					'on Serial Monitor.',
			position : 'left'
		}, {
			element : '#loopSerialPrint8',
			intro : '<span class="ct-code-b-yellow">Serial.println()</span> prints value of <span class="ct-color-lime">count</span> on Serial Monitor.',
			position : 'left'
		}, {
			element : '#loopSpanIfId6',
			intro : 'This is the condition part of <span class="ct-code-b-yellow">if-loop</span>. <span class="ct-color-lime">createTCP()</span> '+
					'checks if the ip address and port of cloud machine matches the given ip and port.',
			position : 'left'
		}, {
			element : '#loopSerialPrint9',
			intro : '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"connected to cloud"</span> '+
					'on Serial Monitor.',
			position : 'left'
		}, {
			element : '#loopSpanElseId',
			intro : 'If <span class="ct-code-b-yellow">if</span> condition evaluates to false, then the control enters into '+
						'<span class="ct-code-b-yellow">else</span> block.',
			position : 'left'
		}, {
			element : '#loopSerialPrint10',
			intro : 'If <span class="ct-code-b-yellow">if</span> condition evaluates to false, '+
					'<span class="ct-code-b-yellow">if</span>Serial.println()</span> prints '+
					'<span class="ct-color-lime">"Unable to connect cloud"</span> on Serial Monitor.',
			position : 'left'
		}, {
			element : '#loopSpanIfId7',
			intro : '<span class="ct-code-b-yellow">wifi.send_one_parameter()</span> is used for sending values from sensor to cloud. '+
					'The values are successfully sent, if condition returns true.',
			position : 'left'
		}, {
			element : '#loopSerialPrint11',
			intro : '<span class="ct-code-b-yellow">Serial.println() prints <span class="ct-color-lime">"values moving on"</span> on Serial Monitor.',
			position : 'left'
		}, {
			element : '#loopSpanDelay',
			intro : '<span class="ct-code-b-yellow">delay(1000)</span> pauses the execution for '+
						'<span class="ct-color-lime">1 sec</span> between updates.',
			position : 'left'
		}, {
			element :'#restart',
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		console.log("introjs._currentStep : " + introjs._currentStep);
		var elementId = targetElement.id;
		switch(elementId) {
		case 'heading':
			var text = 'Let us learn steps involved in <span class="ct-code-b-yellow">smart industry program</span>.';
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
		case 'unsignedSpanId1':
		case 'unsignedSpanId2':
		case 'booleanSpanId1':
		case 'booleanSpanId2':
		case 'declarationSpanId1':
		case 'declarationSpanId2':
		case 'declarationSpanId3':
		case 'serialSpanId1':
		case 'serialSpanId2':
		case 'setupLine1':
		case 'setupLine2':
		case 'setupLine3':
		case 'setupLine4':
		case 'setupWhileLoop':
		case 'whileLoopPrint':
		case 'whileLoopBreak':
		case 'whileLoopEnd':
		case 'setUpSpanEnd':
		case 'loopSpanIfId1':
		case 'loopDigitalId1':
		case 'loopSpanIfId2':
		case 'loopCountId':
		case 'loopLockLowId1':
		case 'loopSerialPrint1':
		case 'loopSerialPrint2':
		case 'loopSerialPrint3':
		case 'loopDelayId1':
		case 'loopTakeLowId1':
		case 'loopSpanIfId3':
		case 'loopDigitalId2':
		case 'loopSpanIfId4':
		case 'loopLowInId':
		case 'loopTakeLowId2':
		case 'loopSpanIfId5':
		case 'loopLockLowId2':
		case 'loopSerialPrint4':
		case 'loopSerialPrint5':
		case 'loopSerialPrint6':
		case 'loopDelayId2':
		case 'loopSerialPrint7':
		case 'loopSerialPrint8':
		case 'loopSpanIfId6':
		case 'loopSerialPrint9':
		case 'loopSpanElseId':
		case 'loopSerialPrint10':
		case 'loopSpanIfId7':
		case 'loopSerialPrint11':
		case 'loopSpanDelay':
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