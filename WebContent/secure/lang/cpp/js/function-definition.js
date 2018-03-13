var functionDefinitionReady = function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		location.reload();
	});
	
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});

	$("body").keypress(function(e) {
		if (e.which === 13) {
			 e.preventDefault();
		}
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps :	[{
			element :'#informationdiv',
			intro :'',
			tooltipClass:"hide"
		},{
			element :'#format',
			intro :'',
			//tooltipClass: "hide"
		},{
			element :'#returnType1',
			intro :''
		},{
			element :'#functionName1',
			intro :''
		},{
			element :'#argument1',
			intro :'',
			position:"bottom"
		},{
			element :'#functionBody',
			intro :''
		},{
			element :'#returnValue',
			intro :''
		},{
			element :'#declaration1',
			intro :'',
			tooltipClass: 'hide'
		},{
			element :'#functionDeclaration',
			intro :''
		},{
			element :'#functionBody3',
			intro :''
		},{
			element :'#returnS',
			intro :''
	 	},{
			element :'#button',
			intro :'',
			position:"right"
		}]
	});
	
	intro.onbeforechange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		case "declaration1" :
  			$("#declaration1").addClass("opacity00");
  		break;
		case "returnValue" :
  			$("#declaration1").addClass("opacity00");
  		break;
		}
	});
	intro.onafterchange(function(targetElement) { 
		if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
			intro._introItems[intro._currentStep]["animation"] = "repeat";
		}
		
		if (intro._introItems[intro._currentStep]["isCompleted"]) {
			
			if (intro._currentStep != 0) {
				$('.introjs-prevbutton').show();
			}

			$('.intro-nextbutton').show();
			return;
		}
		
		if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
			intro._introItems[intro._currentStep]["isCompleted"] = true;
		}
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "format" :
			$("#informationdiv").addClass('zindex10');
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#format").removeClass("opacity00");
		  		typing('.introjs-tooltiptext', "let us consider the syntax of function definition.", function() {  
		  			$('.introjs-nextbutton').show();
				});
			});
		break;
		case "returnType1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "<ul><li><span class='ct-code-b-yellow'>return_type</span> is data type of the value returned by"
						+ " function.</li><li>Function that does not return any value then the <span class='ct-code-b-yellow'>return_type</span>"
						+ " uses the keyword <span class='ct-code-b-yellow'>void</span>.</li></ul>", function() {  
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "functionName1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "<ul><li>Any valid identifier can be used as a <span class='ct-code-b-yellow'>function_name</span>."
						+ "</li><li>Keywords should not be used to name user-defined <span class='ct-code-b-yellow'>function_names</span>.</li></ul>",
						function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "argument1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "<span class='ct-code-b-yellow'>Parameters</span> in the function are defined as a list with datatype"
						+ " of the <span class='ct-code-b-yellow'>variable</span> and <span class='ct-code-b-yellow'>name</span> of the variable"
		  				+ " seperated by a <span class='ct-code-b-yellow'>space</span>(i.e., int a).<br> If there are more than one parameters,"
		  				+ " they are seperated by a <span class='ct-code-b-yellow'>comma</span>.", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "functionBody" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "The function body is a collection of statements that define what the function does.", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "returnValue" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "<ul><li>A <span class='ct-code-b-yellow'>return</span> statement is used to return a value by the"
						+ " function.</li><li>If a function does not return any value, the <span class='ct-code-b-yellow'>return</span> "
						+ "type is specified as <span class='ct-code-b-yellow'>void</span>.</li></ul>", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "declaration1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass('hide');
		  		typing('.introjs-tooltiptext', "Let us consider the example of a function definition.", function() {  
		  			$("#declaration1").removeClass("opacity00");
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "functionDeclaration" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Here the name of the function is <span class='ct-code-b-yellow'>sum</span>, it takes two"
			  			+ " <span class='ct-code-b-yellow'>int</span> arguments and it will return a value of type <span class='ct-code-b-yellow'>"
			  			+ "int</span>.", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "functionBody3" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "The function body defines local variable declarations and some executable statements.", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "returnS" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Here, it returns the value <span class='ct-code-b-yellow'>s</span> which is the"
						+ " <span class='ct-code-b-yellow'>sum</span> of adding variables <span class='ct-code-b-yellow'>a</span> and"
						+ " <span class='ct-code-b-yellow'>b</span>.", function() {  
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
	
	intro.start();

	$("#informationdiv").removeClass("opacity00");
  	$("#informationdiv").append("<ul><li id='li1' class='opacity00'>A <span class='color-green'>function definition</span> is the body of the function"
  			+ " that contains the set of statements that perform a task. A function definition starts with the same <span class='color-green'>syntax"
  			+ "</span> as the declaration,  with the <span class='color-green'>name</span> of the function, its <span class='color-green'>parameter"
  			+ " types</span> with their <span class='color-green'>names</span>, and the data type of the <span class='color-green'>value</span>"
  			+ " it would return.</li><li id='li2' class='opacity00'>A function body can have the declarations of its <span class='color-green'>"
  			+ "local variables</span>, and the statements that determine what the function does.</li>");
  	TweenMax.to($('#li1'), 0.5, {opacity: 1, onComplete: function() {
  		TweenMax.to($('#li2'), 0.5, {opacity: 1, onComplete: function() {
  			$('.introjs-tooltip').removeClass('hide');
  			typing('.introjs-tooltiptext',"Let us consider the syntax of function definition." ,function() {
  				$('.introjs-nextbutton').show();
  			});
  		}});
  	}});
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 5;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	})
}