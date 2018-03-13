var introjs;
var typingSpeed = 1;

var structureOfCReady = function() {
	introGuide();
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$("#restartBtn").click(function(){
		location.reload();
	});
	$('#closeBtn').click(function() {
		window.parent.$('.ui-dialog-titlebar-close').click();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 	element : "#heading",
				intro : "",
				position : "right"
			},{
			 	element : "#leftDiv",
				intro : "",
				tooltipClass : "hide"
			},{
			 	element : "#dcmntSection",
				intro : "",
				position : "bottom"
			},{
			 	element : "#comment",
				intro : "",
				position : "right",
				tooltipClass:"hide"
			},{
			 	element : "#linkSection",
				intro : "",
				position : "right",
				tooltipClass : "hide"
		},{
			 	element : "#links",
				intro : "",
				position : "right",
				tooltipClass:"hide"
			},{
			 	element : "#defSection",
				intro : "",
				position : "right",
				tooltipClass:"hide"
			},{
			 	element : "#define",
				intro : "",
				position : "right",
				tooltipClass:"hide"
			},{
			 	element : "#globalDef",
				intro : "",
				position : "right",
				tooltipClass:"hide"
			},{
			 	element : "#globalVariable",
				intro : "",
				position : "right",
				tooltipClass : "hide",
			},{
			 	element : "#totalMainFun",
				intro : "",
				position : "right",
				tooltipClass:"hide"
			},{
			 	element : "#totalMain",
				intro : "",
				position : "right",
				tooltipClass:"hide"
			},{
			 	element : "#subPro",
				intro : "",
				position : "right",
				tooltipClass:"hide"
			},{
			 	element : "#sumFun",
				intro : "",
				position : "right",
				tooltipClass:"hide"
			},{
			 	element : "#button",//sumFun
				intro : "",
				position : "right"
			}
		]});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "dcmntSection":
			$("#dcmntSection").addClass("color-black");
			$("#dcmntSection").css({"background-color": "white"}).addClass("zIndex");
			$("#comment").addClass("opacity00");
			$("#rightCode").addClass("opacity00");
			$("#linkSection").addClass("opacity00");
		break;
		case "comment":
			$("#comment").addClass("opacity00");
			$("#linkSection").addClass("opacity00");
		break;
		case "linkSection":
			$(".color-black").removeClass("color-black");
			$("#linkSection").addClass("opacity00");
			$("#links").addClass("opacity00");
		break;
		case "links":
			$("#links").addClass("opacity00");
			$("#defSection").addClass("opacity00");
		break;
		case "defSection":
			$(".color-black").removeClass("color-black");
			$("#defSection").addClass("opacity00");
			$("#define").addClass("opacity00");
		break;
		case "define":
			$("#define").addClass("opacity00");
			$("#globalDef").addClass("opacity00");
		break;
		case "globalDef":
			$(".color-black").removeClass("color-black");
			$("#globalDef").addClass("opacity00");
			$("#globalVariable").addClass("opacity00");
		break;
		case "globalVariable":
			$("#globalVariable").addClass("opacity00");
			$("#totalMainFun").addClass("opacity00");
		break;
		case "totalMainFun":
			$(".color-black").removeClass("color-black");
			$("#totalMainFun").addClass("opacity00");
			$("#totalMain").addClass("opacity00");
		break;
		case "totalMain":
			$("#totalMain").addClass("opacity00");
			$("#subPro").addClass("opacity00");
		break;
		case "subPro":
			$("#subPro").addClass("opacity00");
			$("#sumFun").addClass("opacity00");
		break;
	}
	});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
				introjs._introItems[introjs._currentStep]["animation"] = "repeat";
			}
			
			if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
				if (introjs._currentStep != 0 && introjs._currentStep != 1 && introjs._currentStep != 2) {
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
		
		case "heading":	
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			var text = "Let us learn the basic structure of a <b class ='ct-code-b-yellow'>C++</b> program.";
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton').show();
			});
		break;
		
		case "leftDiv":
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$("#leftDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout( function () {
					introjs.nextStep();
				}, 1000);
			});	
		break;
		case "dcmntSection" :
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$("#dcmntSection").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {	
				$("#dcmntSection").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$("#dcmntSection").removeClass("animated zoomIn");					
				var text = "<b class ='ct-code-b-yellow'>Documentation section:</b><br> This section consists of documentation comments"
							+ " where the developer gives details of the current program and also its author, date of creation etc.."
							+ " We will learn more about comments later.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#dcmntSection").css({"background-color": "white"}).addClass("zIndex");
						$('.introjs-nextbutton').show();
					});
				});	
			});
		break;
		case "comment":
			introjs.refresh();
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$("#comment").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#rightCode").removeClass("opacity00");
				$("#comment").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$("#comment").removeClass("animated zoomIn");
					var text = "In the <b class ='ct-code-b-yellow'>Documentation section</b> comment lines can be"
						+ " present at any line in <b class ='ct-code-b-yellow'>C++</b> program.";
					$(".introjs-tooltip").removeClass("hide");
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});	
			});
		break;
		case "linkSection":
			introjs.refresh();
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$("#dcmntSection").css({"background-color": "black"}).removeClass("zIndex");
			$("#linkSection").addClass("color-black");
			$("#linkSection").css({"background-color": "white"});
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#linkSection").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$("#linkSection").removeClass("animated zoomIn");
					var text = "<b class ='ct-code-b-yellow'>Link section:</b> This section provides instructions to the compiler, to link pre-defined functions"
							+ " which are available in the header files from the system library to the program.<br>"
							+ " <b class ='color-red'>Example:</b> <br><b class ='ct-code-b-yellow'>#include &lt;iostream&gt;</b><br>"
							+ " <b class ='ct-code-b-yellow'>using namespace std;</b><ul><li>Which grants access to the <y>std</y> "
							+"namespace that includes <y>C++ I/O</y> objects <y>cout</y> and <y>cin</y>.</li></ul>";
					$(".introjs-tooltip").removeClass("hide");
					typing($(".introjs-tooltiptext"), text, function() {
						$("#linkSection").css({"background-color": "white"}).addClass("zIndex");
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			});
		break;
		case "links":
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$("#links").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#links").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$("#links").removeClass("animated zoomIn");
					var text = "#include link the header file<br> <b class ='ct-code-b-yellow'>iostream</b><br>"
						+ "<b class ='ct-code-b-yellow'>using namespace std;</b><br> to the program.";
					$(".introjs-tooltip").removeClass("hide");
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});	
			});
		break;
		case "defSection":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#linkSection").css({"background-color": "black"}).removeClass("zIndex");
			$("#defSection").css({"background-color": "white"});
			$("#defSection").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#defSection").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$("#defSection").removeClass("animated zoomIn");
					var text = "<b class ='ct-code-b-yellow'>Definition section:</b> Defines all the symbolic constants. <br><b class ='color-red'>Example:</b><br>"
						+ " <b class ='ct-code-b-yellow'>#define PI 3.14</b><br>"
						+ " <b class ='ct-code-b-yellow'>#define NAME \"Dennis\"</b>"; 
					$(".introjs-tooltip").removeClass("hide");
					typing($(".introjs-tooltiptext"), text, function() {
						$("#defSection").css({"background-color": "white"}).addClass("zIndex");
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			});
		break;
		case "define":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#define").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#define").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$("#define").removeClass("animated zoomIn");
					var text = "<b class ='ct-code-b-yellow'>#define VALUE 10;</b><br>"
						+ " The symbolic constant <y>VALUE</y> is defined with constatnt value <y>10</y>."
						+ " So <b class ='ct-code-b-yellow'>VALUE</b> is replaced with <b class ='ct-code-b-yellow'>10</b> before compilation process.";
					$(".introjs-tooltip").removeClass("hide");
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});	
			});
		break;
		case "globalDef":
			introjs.refresh();
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$("#defSection").css({"background-color": "black"}).removeClass("zIndex");
			$("#globalDef").css({"background-color": "white"});
			$("#globalDef").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#globalDef").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$("#globalDef").removeClass("animated zoomIn");
					var text = "Some variables are used in more than one function, such variables are declared outside of all the functions,  which is called"
						 + " <b class ='ct-code-b-yellow'>global variable declaration</b>. And this takes place in the declaration section.";
					$(".introjs-tooltip").removeClass("hide");
					typing($(".introjs-tooltiptext"), text, function() {
						$("#globalDef").css({"background-color": "white"}).addClass("zIndex");
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			});
		break;
		case "globalVariable":
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$("#globalVariable").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#globalVariable").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$("#globalVariable").removeClass("animated zoomIn");
					var text = "The variable <b class ='ct-code-b-yellow'>total</b> is declared outside of the <y>main()</y> function so it is treated as"
						+ "  <b class ='ct-code-b-yellow'>global variable</b> and this variable can be accessed from any part of the program.";
					$(".introjs-tooltip").removeClass("hide");
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});	
			});
		break;
		case "totalMainFun":
			introjs.refresh();
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$(".color-black").removeClass("color-black");
			$("#globalDef").css({"background-color": "black"}).removeClass("zIndex");
			$("#totalMainFun").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#totalMainFun").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$("#totalMainFun").removeClass("animated zoomIn");
					var text = "<ul><li>A class is a combination of <span class ='ct-code-b-yellow'>data</span> and "
								+"<span class ='ct-code-b-yellow'>functions</span>.</li>"
								+" <li>Different variables with data types are called <span class ='ct-code-b-yellow'>data members</span> and the "
								+"functions are called <span class ='ct-code-b-yellow'>member functions</span>.</li><li> The combination of "
								+"<span class ='ct-code-b-yellow'>data members</span> and <span class ='ct-code-b-yellow'>"
								+"member functions</span> constitute a data object or simply an object.</li></ul>";
					$(".introjs-tooltip").removeClass("hide");
					typing($(".introjs-tooltiptext"), text, function() {
						$("#totalMainFun").css({"background-color": "white"}).addClass("zIndex");
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			});
		break;
		case "totalMain":
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$("#totalMain").addClass("color-black");
			$("#declPart").addClass("background-color-green");
			$("#exePart1").addClass("background-color-blue");
			$("#exePart2").addClass("background-color-blue");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#totalMain").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$("#totalMain").removeClass("animated zoomIn");
					var text = "<ul><li><b class ='ct-code-b-yellow'>int a, b</b> are declared in <b class ='ct-code-b-yellow'>data members part</b>.</li>"
					+ "<li><b class ='ct-code-b-yellow'>void read()</b>; and<br> <b class ='ct-code-b-yellow'>void display()</b>; are in" 
					+ " <b class ='ct-code-b-yellow'>member functions part</b>.</li>"
					+ " </ul>";
					$(".introjs-tooltip").removeClass("hide");
					typing($(".introjs-tooltiptext"), text, function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});	
			});
		break;
		
		case "subPro" :
			introjs.refresh();
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$(".background-color-green").removeClass("background-color-green");
			$(".background-color-blue").removeClass("background-color-blue");
			$(".color-black").removeClass("color-black");
			$("#totalMainFun").css({"background-color": "black"}).removeClass("zIndex");
			$("#subPro").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#subPro").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$("#subPro").removeClass("animated zoomIn");
				var text = "<ul><li>Every <span class ='ct-code-b-yellow'>C++</span> program must have one "
							+"<span class ='ct-code-b-yellow'>main()</span> function section, because it is the starting point of execution.</li>"
							+"<li><span class ='ct-code-b-yellow'>main()</span> section contains two parts, <span class ='ct-code-b-yellow'>"
							+"declaration part</span> and <span class ='ct-code-b-yellow'>executable part</span>.</li> "
							+"<li>The declaration part contains the declaration of <span class ='ct-code-b-yellow'>objects</span>, "
							+"which are used in the executable part.</li></ul>";	
				$(".introjs-tooltip").removeClass("hide");
				typing($(".introjs-tooltiptext"), text, function() {
					$("#subPro").css({"background-color": "white"}).addClass("zIndex");
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
				});
			});
		break;
		
		case "sumFun":
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$("#sumFun").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>There is at least one statement in the <span class ='ct-code-b-yellow'>executable part</span>.</li> "
							+"<li>These two parts must appear between the opening and closing "
							+"braces of <span class ='ct-code-b-yellow'>main()</span> function.</li><li>All the statements in the declaration "
							+"and executable parts end with a <span class ='ct-code-b-yellow'>semicolon(;)</span>.</li></ul>";
				$(".introjs-tooltip").removeClass("hide");
				typing($(".introjs-tooltiptext"), text, function() {
					$("#sumFun").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#sumFun").removeClass("animated zoomIn");
						$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
				});
			});
		break;
		case "button" :
			introjs.refresh();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$("#subPro").css({"background-color": "black"}).removeClass("zIndex");
			$(".color-black").removeClass("color-black");
			$(".user-btn").remove();
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
		/*case "restart":
			introjs.refresh();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$("#subPro").css({"background-color": "black"}).removeClass("zIndex");
			$(".color-black").removeClass("color-black");
			$(".user-btn").remove();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#restart').removeClass("opacity00");
			$(".introjs-tooltip").css({"min-width": "115px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart.";
				typing($(".introjs-tooltiptext"), text)
			});
		break;*/
		}
	});
	
	introjs.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
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
}
