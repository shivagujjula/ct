var introjs;
var tl = new TimelineLite();	
var typingSpeed = 5;
var buttonCount = 1;
var delete_key = 46;
var backspace_key = 8;
var structureOfJavaReadyFun = function() {
	introGuide();

	$("#restartBtn").click(function() {
		location.reload(true);
	});
	$('#closeBtn').click(function() {
		window.parent.$(".ui-dialog-titlebar-close").click();
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
			 		element : "#licSection",
					intro : "",
					position : "left"
				},{
			 		element : "#packageStmnt",
					intro : "",
					position : "left"
				},{
			 		element : "#packageExplain",
					intro : "",
					position : "right"
				},{
			 		element : "#importStmnt",
					intro : "",
					position : "left"
				},{
			 		element : "#import1",
					intro : "",
					position : "right"
				},{
			 		element : "#import2",
					intro : "",
					position : "right"
				},{
			 		element : "#docSection",
					intro : "",
					position : "left"
				},{
			 		element : "#docExplain",
					intro : "",
					position : "right"
				},{
			 		element : "#singleComment",
					intro : "",
					position : "right"
				},{
			 		element : "#multipleComments",
					intro : "",
					position : "right"
				},{
			 		element : "#interfaceStmnt",
					intro : "",
					position : "left"
				},{
			 		element : "#interface",
					intro : "",
					position : "right"
				},{
			 		element : "#public",
					intro : "",
					position : "right"
				},{
			 		element : "#class",
					intro : "",
					position : "right"
				},{
			 		element : "#static",
					intro : "",
					position : "right"
				},{
			 		element : "#void",
					intro : "",
					position : "right"
				},{
			 		element : "#main",
					intro : "",
					position : "right"
				},{
					element : "#button",
					intro : "<ul><li>Click on <span class='ct-code-b-yellow'>Close</span> button to close the Live Demo.</li>" +
						"<li>Click on <span class='ct-code-b-yellow'>Restart</span> button to restart the Live Demo.</li></ul>",
					position : 'right',
				}
			]});
	
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "licSection":
			$("#box1").removeClass("opacity00");
			$("#packageStmnt, #packageExplain, #hr1").addClass("opacity00");
			$("#box2").addClass("opacity00");
		break;
		case "packageStmnt":
			$("#box2, #hr1").removeClass("opacity00");
			$("#packageStmnt, #packageExplain").removeClass("opacity00");
			$("#packageExplain").addClass("z-index");
		break;
		case "packageExplain":
			$("#packageExplain").removeClass("z-index");
			$("#importStmnt, #importExplain, #hr2").addClass("opacity00");
			$("#box3").addClass("opacity00");
		break;
		case "importStmnt":
			$("#box3").removeClass("opacity00");
			$("#importStmnt, #importExplain, #hr2").removeClass("opacity00");
			$("#importExplain").addClass("z-index");
		break;
		case "import1":
			$("#importExplain").removeClass("z-index");
		break;
		case "import2":
			$("#docSection, #docExplain, #hr3").addClass("opacity00");
			$("#box4").addClass("opacity00");
		break;
		case "docSection":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#importExplain").removeClass("z-index");
			$("#docSection, #docExplain, #box4, #hr3").removeClass("opacity00");
			$("#docExplain").addClass("z-index");
		break;
		case "docExplain":
			$("#docExplain").removeClass("z-index");
		break;
		case "singleComment":
			
		break;
		case "multipleComments":
			$("#interfaceStmnt, #interfaceExplain, #hr4, #box5").addClass("opacity00");
		break;
		case "interfaceStmnt":
			$("#box5").removeClass("opacity00");
			$("#docExplain").removeClass("z-index");
			$("#interfaceStmnt, #interfaceExplain, #hr4").removeClass("opacity00");
			$("#interfaceExplain").addClass("z-index");
		break;
		case "interface":
			$("#interfaceExplain").removeClass("z-index");
			/*$("#classDef, #classExplain, #hr4, #box5").addClass("opacity00");
			$("#box6").addClass("opacity00");*/
		break;
		
		case "public":
			
		break;
		case "class":

		break;
		case "static":
			
		break;
		
		case "void":

		break;
		case "main":

		break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
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
		$("#" + elementId).removeClass("hide");
		introjs.refresh();
		switch (elementId) {
		case "licSection":
			$(".introjs-tooltip").css({"min-width": "250px"});
			$("#licSection").removeClass("opacity00");
			$('.introjs-nextbutton, .introjs-prevbutton').show();
			var text = "The <y>License Statement</y> usually contains details about the copyright and other ownership information.";
			typing($(".introjs-tooltiptext"), text, function() {
				$('.introjs-nextbutton').show();
			});
		break;
		case "packageStmnt":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>This is the first statement in every java program.</li>"
						+ "<li>This statement tells the compiler that the classes defined here belongs to this package.</li>"
						+ "<li>This statement is optional.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "packageExplain":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Here <y>com.codetantra</y> is a package</li>"
						+ "<li>The classes defined within this program belong to this package.</li></ul>"
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "importStmnt":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>The import statement tells the interpreter to include the classes from the package defined.</li>"
					+ "<li>This is the next statement after the package declaration, but should be written before defining a class.</li>"
					+ "<li>There may be a number of import statements. This is optional.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "import1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This <y>imports</y> all the classes from <y>java.io</y> package.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "import2":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "imports only the <y>Date</y> class in <y>java.util</y> package.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "docSection":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>This section consits of a set of <y>comments</y> about the program including the name of the program.</li>"
						+ "<li>This section is suggested as it helps in understanding the program.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "docExplain":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "It includes the comments to tell the program's purpose. It improves the readability of the program.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "singleComment":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a <y>single line comment</y> it starts with two forward slashes (<y>//</y>) and continues to the end of the current line.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "multipleComments":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a <y>block comment</y> start with a forward slash and an asterisk (<y>/*</y>) and end with an asterisk and a forward slash (<y>*/</y>)";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "interfaceStmnt":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>The interface statement defines method declaration without body for the subclasses to provide implementation for them.</li>"
						+ " <li>This is optional, it is used only if we want to implement multiple inheritance feature in our programs.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "interface":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Here <y>stack</y> is an <y>interface</y>.</li>"
						+ "<li><y>push</y> and <y>pop</y> are methods without body.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "public":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>public</y> is a access modifier keyword which tells compiler access to class.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "class":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>class</y> is a keyword used to declare a class.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "static":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<y>static</y> is a reserved keyword which means that a method is accessible and usable even though no objects of the class exist.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "void":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This keyword declares nothing would be returned from the method.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "main":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = " The <y>main()</y> method is optional in a class, but when present acts as the starting point of execution in that class.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "button":
			$(".introjs-tooltip").css("min-width","380px");
			$(".introjs-tooltipbuttons").hide()
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn, #closeBtn").removeClass("opacity00");
			});
			break;
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
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

function getStep(element, intro, position, tooltipClass) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	
	return step;
}