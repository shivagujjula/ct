var introjs;
var typingInterval = 5;

var callByReferenceReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});

	introJsFunction();
};
function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}
function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#preCode",
			intro : "",
			position : "right"
		}, {
			element : "#swapDeclareLine",
			intro : ""
		}, {
			element : "#mainMethodBlock",
			intro : ""
		}, {
			element : "#aLine",
			intro : ""
		}, {
			element : "#aBox",
			intro : "",
			animateStep : "aBoxAnimate",
			tooltipClass : 'hide'
		}, {
			element : "#bLine",
			intro : ""
		}, {
			element : "#bBox",
			intro : "",
			animateStep : "bBoxAnimate",
			tooltipClass : 'hide'
		}, {
			element : "#printBeforeSwapInMain",
			intro : "",
		}, {
			element : "#outputBox",
			intro : "",
			animateStep : "printBfr",
			tooltipClass: "hide"
		}, {
			element : "#swapLine",
			intro : ""
		}, {
			element : "#swapMethodBlock",
			intro : ""
		}, {
			element : "#swapAnimationDiv",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element : "#tDeclareLine",
			intro : ""
		}, {
			element : "#tBox",
			intro : "",
			animateStep : "tBoxAnimate",
			tooltipClass : 'hide'
		}, {
			element : "#tAssignLine",
			intro : ""
		}, {
			element : "#tBox",
			intro : "",
			animateStep : "tBoxValueAnimate",
			tooltipClass : 'hide'
		}, {
			element : "#xLine",
			intro : ""
		}, {
			element : "#aBox",
			intro : "",
			animateStep : "aBoxValueAnimate",
			position : "left",
			tooltipClass : 'hide'
		}, {
			element : "#yLine",
			intro : ""
		}, {
			element : "#bBox",
			intro : "",
			animateStep : "bBoxValueAnimate",
			position : "left",
			tooltipClass : 'hide'
		}, {
			element : "#printAfterSwapInSwap",
			intro : ""
		}, {
			element : "#outputBox",
			intro : "",
			animateStep : "swapAftr",
			tooltipClass: "hide"
		}, {
			element : "#swapMethodCloseBrace",
			intro : ""
		}, {
			element : "#animationDiv",
			intro : "",
			tooltipClass: "hide"
		}, {
			element : "#printAfterSwapInMain",
			intro : ""
		}, {
			element : "#outputBox",
			intro : "",
			animateStep : "printAftr",
			tooltipClass: "hide"
		}, {
			element : '#end',
			intro : '',
			position : "right"
		}, {
			element : "#restartBtn",
			intro : "Click to Restart.",
			position : "right"
		} ]});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "aLine":
			TweenMax.to($('#mainMethodBox'), 1, {opacity: 0});
			$('#aBox').addClass("visibility-hidden");
			$('#aValue').text("");
			break;
		case "aBox":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch (animateStep) {
			case "aBoxAnimate":
				$('#aBox').addClass("visibility-hidden");
				break;
			case "aBoxValueAnimate":
				$('#aValue').text(5);
				break;
			}
			break;
		case "bLine":
			$('#bBox').addClass("visibility-hidden");
			$('#bValue').text("");
			break;
		case "bBox":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch (animateStep) {
			case "bBoxAnimate":
				$('#bBox').addClass("visibility-hidden");
				break;
			case "bBoxValueAnimate":
				$('#bValue').text(10);
				break;
			}
			break;
		case "printBeforeSwapInMain":
			$('#bfrSwap').addClass('visibility-hidden');
			$("#aBfr, #aConsVal,#bBfr, #bConsVal").addClass("opacity00");
			$("#outputBox").addClass("opacity00");
		case "printAfterSwapInSwap":
			$('#aftrSwap').addClass('visibility-hidden');
			$("#xAftr, #xConsVal,#yAftr, #yConsVal").addClass("opacity00");
			break;
		case "swapMethodBlock":
			TweenMax.to($('.svg-line').eq(0).hide(), 1, {attr: {x2: '22%', y2: '59%'}});
			TweenMax.to($('.svg-line').eq(1).hide(), 1, {attr: {x2: '65%', y2: '59%'}});
			$('#xBox, #yBox').addClass( "visibility-hidden");
			$('#xValue, #yValue').text("");
			break;
		case "tDeclareLine":
			$('#tBox').addClass("visibility-hidden");
			break;
		case "tAssignLine":
			$('#tValue').text("");
			break;
		case "xLine":
			$('#aValue').text(5);
			break;
		case "yLine":
			$('#bValue').text(10);
			break;
		case "tBox":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch (animateStep) {
			case "tBoxAnimate":
				$('#tBox').addClass('visibility-hidden')
				break;
			case "tBoxValueAnimate":
				$('#tValue').text("");
				break;
			}
			break;
		case "swapMethodCloseBrace":
			$("#swapMethodBox, .svg-css > line").css("opacity", 1);
			break;
		}
	});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			if (introjs._currentStep != 0) {
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
		case "preCode":
			var typingContent = 'Let us learn <span class="ct-code-b-yellow">Call By Reference</span>.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
				$(".introjs-prevbutton").hide();
			});
			break;
		case "swapDeclareLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement declares a <span class="ct-code-b-yellow">swap()</span> method with two arguments of type ' +
									'<span class="ct-code-b-yellow">int</span>. The <span class="ct-code-b-yellow">int</span> ' +
									'is a keyword used when a method returns a value.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "mainMethodBlock":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This is the <span class="ct-code-b-yellow">main()</span> block where the program execution begins.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "aLine":
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'A variable <span class="ct-code-b-yellow">a</span> of type <span class="ct-code-b-yellow">int</span> is ' +
									'initialized with value <span class="ct-code-b-yellow">' + $('#valueOfA').text() + '</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "aBox":
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "aBoxAnimate":
					$('.introjs-tooltip').removeClass('hide');
					TweenMax.to($('#mainMethodBox'), 1, {opacity: 1});
					var typingContent = 'As <span class="ct-code-b-yellow">a</span> is of type <span class="ct-code-b-yellow">int</span>, ' +
										'it occupies <span class="ct-code-b-yellow">2 bytes</span> of memory with some address. Let us assume ' +
										'the address to be <span class="ct-code-b-yellow">' + $('#aAddress').text() + '</span>.</br> The variable ' + 
										'<span class="ct-code-b-yellow">a</span> is initialized with  value <span class="ct-code-b-yellow">' + 
										$('#valueOfA').text() + '</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationABox()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "aBoxValueAnimate":
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = 'The value of <span class="ct-code-b-yellow">y</span> is copied to <span class="ct-code-b-yellow">' + 
											'x</span> (i.e., <span class="ct-code-b-yellow">a</span> is copied with <span class="ct-code-b-yellow">' +
											$('#bValue').text() + '</span>) as ' +
											'<span class="ct-code-b-yellow">x</span>, <span class="ct-code-b-yellow">y</span> are the ' +
											'<span class="ct-code-b-yellow">reference(alias)</span> for '+
											'<span class="ct-code-b-yellow">a</span>, <span class="ct-code-b-yellow">b</span> respectively.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationABoxValue()'>" + 
																	"Next &#8594;</a>");
						});
					}
					break;
				}
			});
			break;
		case "bLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'A variable <span class="ct-code-b-yellow">b</span> of type <span class="ct-code-b-yellow">int</span>  is ' +
				'initialized with value <span class="ct-code-b-yellow">' + $('#valueOfB').text() + '</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "bBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "bBoxAnimate":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'As the variable <span class="ct-code-b-yellow">b</span> is of type <span class="ct-code-b-yellow">' +
										'int</span>, it occupies <span class="ct-code-b-yellow">2 bytes</span> of memory with some address. ' +
										'Let us assume the address to be <span class="ct-code-b-yellow">' + $('#bAddress').text() + 
										'</span>.</br>The variable <span class="ct-code-b-yellow">b</span> is initialized with  value ' + 
										'<span class="ct-code-b-yellow">' + $('#valueOfB').text() + '</span> .';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationBBox()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "bBoxValueAnimate":
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = 'The value of <span class="ct-code-b-yellow">t</span> is copied to <span class="ct-code-b-yellow">' + 
											'y</span> (i.e., <span class="ct-code-b-yellow">b</span> is copied with <span class="ct-code-b-yellow">' +
											$('#tValue').text() + '</span>).';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationBBoxValue()'>" + 
																	"Next &#8594;</a>");
						});
					}
					break;
				}
			});
			break;
		case "printBeforeSwapInMain":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">values</span> of <span class="ct-code-b-yellow">' + 
									'a</span>, <span class="ct-code-b-yellow">b</span> before we call the <span class="ct-code-b-yellow">swap()' +
									'</span> method.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$("#outputBox").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "outputBox":
			$("#outputBox").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "printBfr" :
				$('.introjs-helperLayer').one('transitionend', function () {
					if (introjs._direction == "backward") {
						$('#bfrSwap').addClass('visibility-hidden');
						$("#aBfr, #aConsVal,#bBfr, #bConsVal").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						transferEffect1("#printBfr", "#bfrSwap", function(){
							var typingContent = $('#bfrSwap').removeClass('visibility-hidden').html();
							typing("#bfrSwap", typingContent, 30, 'white', function() {
								$("#aBox").addClass("z-index9999999");
								transferEffect1("#aSec", "#aBfr", function(){
									transferEffect("#aVal", "#aConsVal", function(){
										$("#aBox").removeClass("z-index9999999");
										$("#bBox").addClass("z-index9999999");
										transferEffect1("#bSec", "#bBfr", function(){
											transferEffect("#bVal", "#bConsVal", function(){
												$("#bBox").removeClass("z-index9999999");
												setTimeout(function() {
													introjs.nextStep();
												},500);
											});
										});
									});
								});
							});
						});
					}
				});
				break;
			case "swapAftr" :
				$('.introjs-helperLayer').one('transitionend', function () {
					if (introjs._direction == "backward") {
						$('#aftrSwap').addClass('visibility-hidden');
						$("#xAftr, #xConsVal,#yAftr, #yConsVal").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						transferEffect1("#swapAftr", "#aftrSwap", function(){
							var typingContent = $("#aftrSwap").removeClass('visibility-hidden').html();
							typing("#aftrSwap", typingContent, 30, 'white', function() {
								$("#aBox").addClass("z-index9999999");
								transferEffect1("#valX", "#xAftr", function(){
									transferEffect("#valXVal", "#xConsVal", function(){
										$("#aBox").removeClass("z-index9999999");
										$("#bBox").addClass("z-index9999999");
										transferEffect1("#valY", "#yAftr", function(){
											transferEffect("#valYVal", "#yConsVal", function(){
												$("#bBox").removeClass("z-index9999999");
												setTimeout(function() {
													introjs.nextStep();
												},500);
											});
										});
									});
								});
							});
						});
					}
				});
				break;
			case "printAftr" :
				$('.introjs-helperLayer').one('transitionend', function () {
					if (introjs._direction == "backward") {
						$('#aftrMain').addClass('visibility-hidden');
						$("#aAftr, #aConsVal1,#bAftr, #bConsVal1").addClass("opacity00");
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						transferEffect1("#printAftr", "#aftrMain", function(){
							var typingContent = $("#aftrMain").removeClass('visibility-hidden').html();
							typing("#aftrMain", typingContent, 30, 'white', function() {
								$("#aBox").addClass("z-index9999999");
								transferEffect1("#aSec1", "#aAftr", function(){
									transferEffect("#aVal1", "#aConsVal1", function(){
										$("#aBox").removeClass("z-index9999999");
										$("#bBox").addClass("z-index9999999");
										transferEffect1("#bSec1", "#bAftr", function(){
											transferEffect("#bVal1", "#bConsVal1", function(){
												$("#bBox").removeClass("z-index9999999");
												setTimeout(function() {
													introjs.nextStep();
												},500);
											});
										});
									});
								});
							});
						});
					}
				});
				break;
			}
			break;
		case "swapLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This is a method call <span class="ct-code-b-yellow">swap()</span>, we pass two parameters  ' +
									'<span class="ct-code-b-yellow">a</span>, <span class="ct-code-b-yellow">b</span> to the method. ';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "swapMethodBlock":
			var typingContent = '<ul><li>The <span class="ct-code-b-yellow">swap()</span> method has two'+
								' formal parameters <span class="ct-code-b-yellow">x</span>,'+
								' <span class="ct-code-b-yellow">y</span> and they are'+
								' <span class="ct-code-b-yellow">reference</span> variables.</li>' +
								'<li>The <span class="ct-code-b-yellow">reference</span> variables'+
								' doesnot allocate any seperate memory space, they act as <span class="ct-code-b-yellow"> alias'+
								' </span>names for actual arguments <span class="ct-code-b-yellow">a</span>,'+
								' <span class="ct-code-b-yellow">b</span><br>i.e <span class="ct-code-b-yellow">x</span>' + 
								' is an <span class="ct-code-b-yellow">alias</span> name for variable'+
								' <span class="ct-code-b-yellow">a</span>.<br> <span class="ct-code-b-yellow">y</span>'+
								' is an <span class="ct-code-b-yellow">alias</span> name for variable'+
								' <span class="ct-code-b-yellow">b</span>.</li>';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			});
			break;
		case "swapAnimationDiv":
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._direction == "backward") {
					TweenMax.to($('#swapMethodBox'), 1, {opacity: 0});
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					TweenMax.to($('#swapMethodBox'), 1, {opacity: 1});
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'The <span class="ct-code-b-yellow">swap()</span> method takes two ' +
										'<span class="ct-code-b-yellow">reference variables</span> <span class="ct-code-b-yellow">x</span>, ' +
										'<span class="ct-code-b-yellow">y</span>.<br>The <span class="ct-code-b-yellow">x</span>,'+
										' <span class="ct-code-b-yellow">y</span> are dummy parameters and '+
										' <span class="ct-code-b-yellow">alias</span> names for ' +
										' <span class="ct-code-b-yellow">a</span>, <span class="ct-code-b-yellow">b</span>'+
										' respectively.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationSwap()'>" + 
																"Next &#8594;</a>");
					});
				}
			});
			break;
		case "tDeclareLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'A temporary variable <span class="ct-code-b-yellow">t</span> is declared of type ' +
									'<span class="ct-code-b-yellow">int</span>. It will be used to store the temporary value when the ' +
									'values are swapped.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "tBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "tBoxAnimate":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'Here, the variable <span class="ct-code-b-yellow">t</span> is of type ' +
										'<span class="ct-code-b-yellow">int</span> and it occupies <span class="ct-code-b-yellow">2 bytes</span> ' +
										'of memory.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationTBox()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "tBoxValueAnimate":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'Here the value of <span class="ct-code-b-yellow">t</span> is assigned with the value of <span class' +
										'="ct-code-b-yellow">x</span> (i.e., <span class="ct-code-b-yellow">' + $('#aValue').text() + '</span>) ' +
										'since <span class="ct-code-b-yellow">x</span> is <span class="ct-code-b-yellow">reference(alias)</span> for <span class="ct-code-b-yellow">a</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationTBoxValue()'>" + 
																"Next &#8594;</a>");
					});
					break;
				}
			});
			break;
		case "tAssignLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here variable <span class="ct-code-b-yellow">t</span> is assigned with value of ' + 
									'<span class="ct-code-b-yellow">x</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "xLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The variable <span class="ct-code-b-yellow">x</span> is assigned with value of ' +
									'<span class="ct-code-b-yellow">y</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "yLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The variable <span class="ct-code-b-yellow">y</span> is assigned with value of ' +
									'<span class="ct-code-b-yellow">t</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "printAfterSwapInSwap":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">values</span> of <span class="ct-code-b-yellow">' + 
									'x</span>, <span class="ct-code-b-yellow">y</span> after calling the <span class="ct-code-b-yellow">' +
									'swap()</span> method.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "swapMethodCloseBrace":
			$("#bBox").removeClass("z-index9999999");
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here <span class="ct-code-b-yellow">swap()</span> method has completed its execution, and all the ' +
									'reference variables <span class="ct-code-b-yellow">x</span>, <span class="ct-code-b-yellow">y</span> and ' +
									'<span class="ct-code-b-yellow">t</span> are destroyed.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "animationDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				TweenMax.to($('#swapMethodBox, .svg-line'), 1, {opacity: 0, onComplete: function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				}});
			});
			break;
		case "printAfterSwapInMain":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">values</span> of <span class="ct-code-b-yellow">' + 
									'a</span> and <span class="ct-code-b-yellow">b</span> after the <span class="ct-code-b-yellow">swap()</span> '+
									'method call is done.<br><br/>Notice that the values of <span class="ct-code-b-yellow">a</span> and ' + 
									'<span class="ct-code-b-yellow">b</span> have been changed. This is how <span class="ct-code-b-yellow">call ' +
									'by reference</span> works.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'end':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var typingContent = "This is the end of the <span class='ct-code-b-yellow'>main</span> function where the program execution ends.";
				typing(".introjs-tooltiptext",typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case "restartBtn":
			$("#bBox").removeClass("z-index9999999");
			$('.introjs-tooltip').css({'min-width' : '120px'});
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
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
	}});
}
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass('circle-css').effect( "highlight",{color: '#ffff33'}, 1000);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1200 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("circle-css")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
} 
function transferEffect1(selector1, selector2, callBackFunction) {
	$(selector1).addClass('z-index9999999').effect( "highlight",{color: '#ffff33'}, 1000);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1200 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index9999999")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
} 
function bounceFromEffextWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).parent().append('<span id="temp" style="position: absolute;"></span>');
	$('#temp').offset({top: l2.top, left: l2.left}).text($(selector2).text());
	$(selector2).text($(selector1).text());
	timelineMax.from(selector2, 3, {ease:  Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}}).to('#temp', 1, { ease: Sine.easeOut, top: "-=100", opacity: 0, onComplete: function() {
		$('#temp').remove();
	}}, "-=2");
}

function animationABox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#aBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#aBox').removeClass('animated zoomIn');
		$('#valueOfA').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#valueOfA').removeClass('circle-css');
			$('#aValue').text($('#valueOfA').text());
			fromEffectWithTweenMax('#valueOfA', '#aValue', function() {
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			});
		});
	});
}

function animationBBox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#bBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#bBox').removeClass('animated zoomIn');
		$('#valueOfB').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#valueOfB').removeClass('circle-css');
			$('#bValue').text($('#valueOfB').text());
			fromEffectWithTweenMax('#valueOfB', '#bValue', function() {
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			});
		});
	});
}

function animationSwap() {
	$('.introjs-duplicate-nextbutton').remove();
	animationXBox();
	animationYBox();
}

function animationXBox() {
	$('#xBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#xBox').removeClass('animated zoomIn');
		TweenMax.to($('.svg-line').eq(0).show(), 1, {attr: {x2: '31%', y2: '33%'}});
	});
}

function animationYBox() {
	$('#yBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#yBox').removeClass('animated zoomIn');
		TweenMax.to($('.svg-line').eq(1).show(), 1, {attr: {x2: '75%', y2: '33%'}, onComplete: function() {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		}});
	});
}

function animationTBox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#tBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#tBox').removeClass('animated zoomIn');
		$(".introjs-nextbutton, .introjs-prevbutton").show();
	});
}

function animationTBoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	TweenMax.fromTo('#xValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
									{ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 2, onComplete: function() {
		TweenMax.fromTo($('.svg-line').eq(0), 0.5, {ease: Sine.easeInOut, stroke: 'red'}, {ease: Sine.easeInOut, stroke: 'gray', repeat: 2});
		TweenMax.fromTo($('#arrowEnd1'), 0.5, {ease: Sine.easeInOut, fill: 'red'},
												{ease: Sine.easeInOut, fill: 'gray', repeat: 2, onComplete: function() {
			TweenMax.fromTo('#aValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
											{ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 2, onComplete: function() {
				$('#aValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
					$('#aValue').removeClass('circle-css');
					$('#tValue').text($('#aValue').text());
					fromEffectWithTweenMax('#aValue', '#tValue', function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			}});
		}});
	}});
}

function animationABoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	TweenMax.fromTo('#yValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
									{ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 2, onComplete: function() {
		TweenMax.fromTo($('.svg-line').eq(1), 0.5, {ease: Sine.easeInOut, stroke: 'red'}, {ease: Sine.easeInOut, stroke: 'gray', repeat: 2});
		TweenMax.fromTo($('#arrowEnd2'), 0.5, {ease: Sine.easeInOut, fill: 'red'},
												{ease: Sine.easeInOut, fill: 'gray', repeat: 2, onComplete: function() {
			TweenMax.fromTo('#bValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
											{ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 2, onComplete: function() {
				$('#bValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
					$('#bValue').removeClass('circle-css');
					bounceFromEffextWithTimelineMax('#bValue', '#aValue', function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			}});
		}});
	}});
}

function animationBBoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#tValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
		$('#tValue').removeClass('circle-css');
		bounceFromEffextWithTimelineMax('#tValue', '#bValue', function() {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		});
	});
}