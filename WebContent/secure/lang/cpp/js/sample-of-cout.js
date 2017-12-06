var sampleOfCout = function() {
	$("#restartBtn").click(function() {
		$("#inputChar").val('');
		$("#hiddentotalEnterChar").val();
		location.reload();
	});
	intro = introJs();
	$("nextButton").click(function() {
		$(this).remove();
		intro.nextStep();
	});
	intro.setOptions ({
		showBullets : false,
		exitOnOverlayClick : false,
		keyboardNavigation : false,
		escOnExit : false,
		showStepNumbers : false,
		steps : [{
			element : "#preBody",
			intro: '',
		},{
			element : "#declaration",
			intro: '',
		},{
			element : '#using',
			intro : "",
			position :"bottom"
		},{
			element :"#namespace",
			intro : '', 
			position: "bottom"
		},{
			element :"#std",
			intro : '',
			position:"bottom"
		},{
			element : "#main",
			intro: '',
		},{
			element : "#printf1",	
			intro: '',
		}, {
			element: '#printlnId1',
			intro: '',
			tooltipClass:'hide'
		}, {
			element : "#printf2",	
			intro: '',
		}, {
			element: '#printlnId2',
			intro: '',
			tooltipClass:'hide'
		}, {
			element : "#printf3",	
			intro: '',
		}, {
			element: '#printlnId3',
			intro: '',
			tooltipClass:'hide'
		},{
			element : "#close",
			intro: '',
		}, {
			element : "#restartBtn",
			intro : "",
			position : "left"
		
		}]
	});
	intro.onbeforechange(function(targetElement) {
		intro.refresh();
		var elementId = targetElement.id;
		switch (elementId) {
		case "printlnId1":
		case "printf1":
			$('#outputBox').addClass("opacity00");
			$('#printlnId1').addClass("opacity00");
			break;
		case "printlnId2":
		case "printf2":
			$('#printlnId2').addClass("opacity00");
			break;
		case "printlnId3":
		case "printf3":
			$('#printlnId3').addClass("opacity00");
			break;
		}
	});
	intro.onafterchange(function(targetElement) {
		intro.refresh();
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
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
		switch(elementId) {
		case "preBody" :
				$("#preBody").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Let us learn <y>sample" +
						" cout program</y>.", function() {
					$('.introjs-nextbutton').show();
				});
			break;
		case 'declaration':
			typing('.introjs-tooltiptext',"It is a <y>preprocessor directive</y> which includes the header" +
					" file <y>iostream</y> in our program.", function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
			break;
		case 'using':
			typing('.introjs-tooltiptext',"<span class ='color-yellow'>using</span> means you are going to use it.", function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
			break;
		case 'namespace':
			typing('.introjs-tooltiptext',"<span class= 'color-yellow'>namespace</span> is a container for a set of elements "+
					"in which each element has a name unique to that set.", function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
			break;
		case 'std':
			typing('.introjs-tooltiptext',"<span class= 'color-yellow'>std </span>is a namespace where features of the C++ Standard "+
					"Library, such as string or vector are declared.", function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
			break;
		case 'main':
			typing('.introjs-tooltiptext',"This is the <y>main()</y> method where the program execution starts.", function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
		break;
		case 'printf1':
			$('.introjs-helperLayer').one('transitionend',function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext','The statement <y>cout << "Hello World!\\n"</y>; prints <y>Hello World!</y> and a' +
						' new-line <y>(\'\\n\')</y> character after that.', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'printf2':
			$('.introjs-helperLayer').one('transitionend',function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"This statement prints <y>I am learning Cpp programming</y> " +
						"and a new-line <y>(\'\\n\')</y> character after that.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'printf3':
			$('.introjs-helperLayer').one('transitionend',function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"This statement prints <y>Bye!</y>", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'close':
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"This is the end of the <y>main()</y> function where " +
						"the program execution ends.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "printlnId1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('#outputBox').removeClass("introjs-fixParent");
			$('.introjs-helperLayer').one('transitionend',function() {
				$('#outputBox').removeClass("opacity00");
				transferEffect("#hello", "#printlnId1", function(){
					$("#printlnId1").removeClass('opacity00').addClass('animated zoomIn').one('animationend', function(){
						$("#printlnId1").removeClass('animated zoomIn');
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext',"<y>Hello World!</y> is printed to the console.", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
			});
			break;
		case "printlnId2":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				transferEffect("#learning", "#printlnId2", function() {
					$("#printlnId2").removeClass("opacity00").addClass('animated zoomIn').one('animationend', function(){
						$("#printlnId2").removeClass('animated zoomIn');
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext',"The String <y>I am learning C++ programming</y> appears on the next line in the console. "+
								"It is printed in the new line because of \'\\n\'(a new line character) present in the previous line.", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
						
			});
			break;
		case "printlnId3":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				transferEffect("#bye", "#printlnId3", function() {
					$("#printlnId3").removeClass("opacity00").addClass('animated zoomIn').one('animationend', function(){
						$("#printlnId3").removeClass('animated zoomIn');
						$('.introjs-tooltip').removeClass('hide');
						var text = "<y class='color-yellow'>Bye!</y> appears on the next line in the console.<br>It is printed in the new"+
									" line because of <span class='color-yellow'>\'\\n\'</span>(a new line character) present in the previous line."
						typing('.introjs-tooltiptext',text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
						
			});
			break;
		case "restartBtn" :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-tooltip').css('min-width', '130px');
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#countBox').removeClass('z-index1000000');
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 10, "",function() {
					$('#restart').click(function() {
						location.reload();
					});
				});
			});
		break;
		}
	});
	intro.start();
	
}

function typing(typingId, typingContent, typingCallbackFunction) {
	var typingSpeed = 1;
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingSpeed,
		"cursor_color": 'white'
	}, function() {
		$(typingId).removeClass('typingCursor');
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		typingCallbackFunction();
	})
}
function zoomInEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(this).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	})
}
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1300 , function() {
	$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}