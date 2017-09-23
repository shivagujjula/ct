var typingInterval = 10;
function SmartStreetLightProgramReady() {
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
			element : '#declarationSpanId1',
			intro : '',
			position : 'left'
		}, {
			element : '#serialSpanId1',
			intro : '',
			position : 'left'
		}, {
			element : '#functionDeclarationSpanId',
			intro : '',
			position : 'left'
		}, {
			element : '#setupSpanId',
			intro : '',
			position : 'left'
		}, {
			element : '#setupLine1',
			intro : '',
			position : 'left'
		}, {
			element : '#setupWhileLoop',
			intro : '',
			position : 'left'
		}, {
			element : '#whileLoopPrint',
			intro : '',
			position : 'left'
		}, {
			element : '#whileLoopBreak',
			intro : '',
			position : 'left'
		}, {
			element : '#setupFunctionPrint',
			intro : '',
			position : 'left'
		}, {
			element : '#setUpSpanEnd',
			intro : '',
			position : 'left'
		}, {
			element : '#loopSpanId',
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
			tooltipClass : 'hide'
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
			var text = 'Let us learn steps involved in <span class="ct-code-b-yellow">smart street light program</span>.';
			typing(".introjs-tooltiptext", text, typingInterval, function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'includeSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">ESP8266</span> library is used for <span class="ct-color-lime">wifi</span> communication.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#includeSpanId2");
			});
			break;
		case 'includeSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">SoftwareSerial</span> library is used for serial communication.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'serialSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Receiver(Rx)</span> and <span class="ct-code-b-yellow">Transmitter(Tx)</span> '+
				'pins setup a new SoftwareSerial port communication through <span class="ct-text-color">10</span> and '+
				'<span class="ct-text-color">11</span> pins of Arduino board.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#serialSpanId2");
			});
			break;
		case 'serialSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Creating <span class="ct-color-lime">wifi</span> object for <span class="ct-code-b-yellow">ESP8266</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'declarationSpanId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-color-lime">lightState</span> is global variable for storing values from lightSensor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#declarationSpanId2");
			});
			break;
		case 'declarationSpanId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Pin <span class="ct-text-color">2</span> on Arduino board is assigned as <span class="ct-color-lime">relaySwitch</span>'+
				'(i.e. input pin)  to send out values to relay switch for <span class="ct-text-color">ON</span> or '+
				'<span class="ct-text-color">OFF</span> of <span class="ct-color-lime">LED</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'functionDeclarationSpanId':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">lightControl()</span> is function declaration with no arguments and return type '+
				'as void for operation of <span class="ct-color-lime">relaySwitch</span> to be either <span class="ct-text-color">HIGH</span> '+
				'or <span class="ct-text-color">LOW</span>, when function is called.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'setupSpanId':
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#setupSpanId").addClass("blinking");
				var text = '<span class="ct-code-b-yellow">setup()</span> function is used to initialize variables & this function will only run once.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'setupLine1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.begin(9600)</span> sets data rate(baud rate) as <span class="ct-text-color">9600'+
				'</span> bits per second for serial data transmission.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#setupLine2");
			});
			break;
		case 'setupLine2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">mySerial.begin(115200)</span> sets the data rate as '+
				'<span class="ct-text-color">115200</span> bits per second for SoftwareSerial data transmission.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#setupLine3");
			});
			break;
		case 'setupLine3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Configures the specified pin(i.e. <span class="ct-text-color">A0</span>) to behave as '+
				'<span class="ct-color-lime">INPUT</span> mode.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#setupLine4");
			});
			break;
		case 'setupLine4':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Configures the specified pin(i.e. <span class="ct-text-color">relaySwitch</span>) to behave as '+
				'<span class="ct-color-lime">OUTPUT</span> mode.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#setupLine5");
			});
			break;
		case 'setupLine5':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"setup begin"</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'setupWhileLoop':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is the condition part of while loop. If <span class="ct-color-lime">wifi</span> connection is successful, '+
				'the control enters into the while-loop body.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'whileLoopPrint':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"connected to your wifi"</span>'+
				' on Serial Monitor.';
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
			});
			break;
		case 'setupFunctionPrint':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"setup end"</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'setUpSpanEnd':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is end of the <span class="ct-code-b-yellow">setup()</span> method.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanId':
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#loopSpanId").addClass("blinking").one('animationend', function() {
					var text = '<span class="ct-code-b-yellow">loop()</span> function executes infinitely.';
					typing(".introjs-tooltiptext", text, typingInterval, function() {
						$(".introjs-nextbutton").show();
					});
				});
				dynamicSteps("#loopSpanLine1");
			});
			break;
		case 'loopSpanLine1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Initializing and assiging value <span class="ct-color-text">0</span> to a variable '+
				'<span class="ct-code-b-yellow">lightSensor</span> to read analog values from analog pin <span class="ct-color-text">A0</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanLine2");
			});
			break;
		case 'loopSpanLine2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints the string '+
				'<span class="ct-color-lime">"loop runs with new values"</span> on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanLine3");
			});
			break;
		case 'loopSpanLine3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">analogRead(A0)</span> is used to read analog values from specified '+
				'pin <span class="ct-color-text">A0</span> and values read are assigned to <span class="ct-color-lime">lightSensor</span> variable.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanLine4");
			});
			break;
		case 'loopSpanLine4':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'Value of <span class="ct-code-b-yellow">lightSensor</span> is assigned to <span class="ct-color-lime">lightState</span> '+
				'variable.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanLine5");
			});
			break;
		case 'loopSpanLine5':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.print()</span> prints the string '+
				'<span class="ct-color-lime">"Value of lightState : "</span> on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanLine6");
			});
			break;
		case 'loopSpanLine6':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints the value of <span class="ct-color-lime">lightState</span>'+
				' variable on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanLine7");
			});
			break;
		case 'loopSpanLine7':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'A call to function <span class="ct-code-b-yellow">lightControl()</span> for <span class="ct-color-lime">relaySwitch</span>'+
				' to be either <span class="ct-text-color">HIGH</span> or <span class="ct-text-color">LOW</span>.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#lightControlId");
			});
			break;
		case 'lightControlId':
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#lightControlId").addClass("blinking");
				var text = 'This is Function Definition named <span class="ct-code-b-yellow">lightControl()</span> contains self-contained '+
				'block of statements that '+
				'specifies one or more actions of <span class="ct-color-lime">relaySwitch</span> to be performed.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#lightControlIfId");
			});
			break;
		case 'lightControlIfId':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is the condition part of <span class="ct-code-b-yellow">if</span> loop. If the condition evaluates to '+
				'true (value of lightState > 1000), control enters into the if-block, otherwise the control enters into the else-block.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#lightControlPrint1");
			});
			break;
		case 'lightControlPrint1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">digitalWrite()</span> writes <span class="ct-color-lime">HIGH</span> value to '+
				'specified output pin(i.e. <span class="ct-color-lime">relaySwitch</span>) connected to <span class="ct-text-color">LED</span>(Light).';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#lightControlElseId", "", "hide");
			});
			break;
		case 'lightControlElseId':
			$("#elseEndBrace2").html("\t}");
			$(".introjs-helperLayer").one('transitionend', function() {
				setTimeOutFunction();
				dynamicSteps("#lightControlPrint2");
			});
			break;
		case 'lightControlPrint2':
			$("#elseEndBrace2").html("}");
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'else <span class="ct-code-b-yellow">digitalWrite()</span> writes LOW value to specified output pin '+
				'(i.e. <span class="ct-color-lime">relaySwitch</span>) connected to <span class="ct-text-color">LED</span>(Light).';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#lightControlEnd");
			});
			break;
		case 'lightControlEnd':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is end of the <span class="ct-code-b-yellow">lightControl()</span> method.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanIfId1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is the condition part of if-loop. <span class="ct-code-b-yellow">createTCP()</span> checks if the ip '+
				'address and port of cloud machine '+
				'matches the given ip and port.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopFunctionPrint1':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"connected to cloud"</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanElseId1':
			$("#elseEndBrace1").html("\t}");
			$(".introjs-helperLayer").one('transitionend', function() {
				setTimeOutFunction();
			});
			break;
		case 'loopFunctionPrint2':
			$("#elseEndBrace1").html("}");
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'If <span class="ct-code-b-yellow">if</span> condition evaluates to false, '+
				'<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"Unable to connect cloud"</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanIfId2':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">wifi.send_one_parameter()</span> is used for sending values from sensor to cloud. '+
				'The values are successfully sent, if condition returns true.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopFunctionPrint3':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">Serial.println()</span> prints <span class="ct-color-lime">"values moving on"</span> '+
				'on Serial Monitor.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
				dynamicSteps("#loopSpanDelay");
			});
			break;
		case 'loopSpanDelay':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = '<span class="ct-code-b-yellow">delay(1000)</span> pauses the execution for '+
				'<span class="ct-color-lime">1 sec</span> between updates.';
				typing(".introjs-tooltiptext", text, typingInterval, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'loopSpanEnd':
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = 'This is end of the <span class="ct-code-b-yellow">loop()</span> method.';
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