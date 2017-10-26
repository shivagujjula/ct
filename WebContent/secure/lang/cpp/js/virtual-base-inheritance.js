
var typingSpeed = 0.1;
var flag1 = true;

var virtualBaseInheritanceReady = function() {
	introJsFunction();
	
	$(".introjs-prevbutton").hide();
	var text = "Here we learn how the <y>virtual</y> key works.";
	typing($(".introjs-tooltiptext"), text, function() {
		$(".introjs-nextbutton").show();
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
		steps : [{
			element : "#heading",
			intro : "",
			position : "right"//description
		},{
			element : "#pre",
			intro : "",
			position : "right",
		},{
			element : "#gpCls",
			intro : "",
			position : "right",
		},{
			element : "#p1Cls",
			intro : "",
			position : "top",
		},{
			element : "#p2Cls",
			intro : "",
			position : "top",
		},{
			element : "#childCls",//pre
			intro : "",
			position : "top",
			action : "intro"
		},{
			element : "#mainMthd",
			intro : "",
			position : "right",
		},{
			element : "#pre",
			intro : "",
			position : "right",
		}
		]});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].action;
		var visit = introjs._introItems[introjs._currentStep]["visits"];
		introjs.refresh();
		
		switch (elementId) {
		case "gpCls":
		case "p1Cls" :
		case "p2Cls":
		case "mainMthd":	
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "";
				if (elementId == "gpCls") {
					text = "Here class <y>GrantParent</y> contains a member variable <y>age1</y>,"
							+" it is the base class or parent class to <y>parent1, parent2</y> classes.";
				} else if (elementId == "p1Cls") {
					text = "Here the class <y>Parent1</y> is the base class or parent class to a class <y>child</y>,"
					 	+" which contains only one member variable <y>age2</y>.";
				} else if (elementId == "p2Cls") {
					text = "Here the class <y>Parent2</y> is also the base class or parent class to a class <y>child</y>,"
					 	+" which contains only one member variable <y>age3</y>.";
				} else if (elementId == "mainMthd") {
					text = "The execution starts from <y>main()</y>.";
				}
				
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		
		case "childCls":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "";
					if (animateStep == "intro") {
						text = "Here the class <y>Parent2</y> is also the base class or parent class to a class <y>child</y>,"
								+" which contains only one member variable <y>age3</y>.";
					} else if (animateStep == "erroExp") {
						text = "Since the child class is trying to access the variable <y>age1</y> of <y>GrandParent</y> class,"
								+"<ul><li>It will get the <y>age1</y> variable through any one of its parent class of <y>Parent1 or Parent2</y>.</li>"
								+"<li>But there will be a <y>ambiguous</y> to a class <y>child</y> through which parent class it has to access the variable <y>age1</y>.</li>"
								+"<li>To resolve this <y>ambiguous</y> we add a key called <y>virtual</y>.</li></ul>";
						/*insertionIntro("childParent", "", "", "hide", "error");*/
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("childParent", "", "top", "", "error"));
					}
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
			});
		break;	
		
		case "childParent":
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs.refresh();
				$(".displayNone").fadeIn(800, function() {
					introjs.refresh();
					$(".displayNone").addClass("blinking-orange");
					var text = "Now the code will compile successfully without any <y>errors</y>.";
					typing(".introjs-tooltiptext", text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("obj", "", "right"));
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				})
			})
		break;
		
		case "obj":
			$(".displayNone").removeClass("blinking-orange");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#" + elementId).removeClass("opacity00");
				var text = "Here creating the <y>object</y> for the child class.";//callRead
				typing(".introjs-tooltiptext", text, function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("callRead", "", "top"));
					introjs.insertOption(introjs._currentStep + 2, insertionIntro("readMthd", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 3, insertionIntro("textPrint", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 4, insertionIntro("outputBox", "", "top", "hide","printText"));
					introjs.insertOption(introjs._currentStep + 5, insertionIntro("textRead", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 6, insertionIntro("outputBox", "", "top", "","textRead"));
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				})
			})
		break;	
		
		case "callRead":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#" + elementId).removeClass("opacity00");
				var text = "Here calling the <y>readAge()</y> by child class <y>obj</y>.";
				typing(".introjs-tooltiptext", text, function() {
					
					/* setTimeout(function() {
						introjs.nextStep();
					},600); */
					
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			})
		break;	
			
		case "callWrite":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#callWrite").removeClass("opacity00");
				var text = "Here calling the <y>printAge()</y> by child class obj.";
				typing(".introjs-tooltiptext", text, function() {//printMthd
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("printMthd", "", "right", "hide"));
					introjs.insertOption(introjs._currentStep + 2, insertionIntro("result", "", "right", "hide"));
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				})
			})
		break;	
			
		case "readMthd":
		case "textPrint":
		case "textRead":
		case "printMthd":
		/*case "result":*/	
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				},800);
			})
		break;	
			
		case "result":	
		$(".introjs-helperLayer").one("transitionend", function() {
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "right", "hide","display"));
			introjs.insertOption(introjs._currentStep + 2, insertionIntro("restart", "", "right", "",""));
			setTimeout(function() {
				introjs.nextStep();
			},800);
		})
		break;
		
		case "restart":
			$("#restart").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "click to <y>restart</y>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#restart").click(function() {
						location.reload(true);
					})
				})
			});
		break;	
		
		case "pre":
			$("#pre").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (flag1) {
					var text = "This is the sample program of <y>virtual</y> key <y>inheritance</y>.";//animate
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("animate", "", "right", "hide", ""));
					flag1 = false;
				} else {
					var text = "If we compile the entire code it will not compile <y>successfully</y>.";
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "right", "hide", "error"));
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();//outputBox
				});
			});
		break;
		
		case "animate":
			$("#animate").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#flow4").removeClass("opacity00");
				setTimeout(function(){
					introjs.nextStep();
				}, 1100);
			})
		break;	
		
		case "outputBox":
			$("#outputBox").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				
				if (animateStep == "error") {
					$(".output-console-body").html("<g>virtual.cpp</g>:In member function 'void child::readAge()':" 
										+"<br><g>virtual.cpp</g>: <r>error</r>: reference to 'age1' is ambiguous"
										+"<br>&emsp;&emsp;cin >> <r>age1</r> >> age2 >> age3;"
										+"<br><g>virtual.cpp</g>: In member function 'void child::writeAge()':"
										+"<br><g>virtual.cpp</g>: <r>error</r>: reference to 'age1' is ambiguous"
										+"<br>&emsp;&emsp;cout << <r>age1</r> << age2 << age3;");
					introjs.insertOption(introjs._currentStep + 1,insertionIntro("childCls", "", "top", "", "erroExp"));
				} else if (animateStep == "printText") {
					$(".output-console-body").html("<div><span>Enter age1, age2, age3 :</span></div>");
				} else if (animateStep == "textRead") {
					$(".output-console-body div").append("<span  id='inputChar1' contenteditable='true' maxlength='2' class='input-field input-char'></span>");
					var text = "Enter <y>three</y> integer values separated with <y>space</y>.";
					typing(".introjs-tooltiptext", text, function() {//callWrite
						charAtEnd("inputChar1");
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("callWrite", "", "right"));
						setTimeout(function() {
							checking("#inputChar1");
						}, 400);
					})
				} else if (animateStep == "display") {
					$(".output-console-body").append("<div>The values are : "+ arr[0]+"&nbsp;"+ arr[1] +"&nbsp;"+ arr[2]+"</div>");
				}
				
				if (animateStep !== "textRead") {
					setTimeout(function() {
						introjs.nextStep();
					}, 800);
				}
				
			})
		break;
		}
	})
	introjs.start();
}
var arr; 
function checking(selector) {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	var maxNumberOfInputs;
	var maxLengthOfInput;
	$(selector).on("keydown", function(e) {
		maxNumberOfInputs = 3;
		maxLengthOfInput = 1;
		
		if (arr.length == maxNumberOfInputs) {
			if (e.keyCode == 32) {
				e.preventDefault();
			}
		}
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 32, 35, 36, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
	
	
	
	
	$(selector).on("keyup", function(e) {
		$(".user-btn").remove();
		$('.error-text').remove();
		maxNumberOfInputs = 3;
		maxLengthOfInput = 1;
		if ($(this).text() == "") {
			$('.user-btn').remove();
			$('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
												"Please enter " + maxNumberOfInputs + " numbers and separate each with space.</span>");
		}
		var arr1 = $(this).text().split(" ");
		var count = 0;
		arr = [];
		
		$.each(arr1, function(idx, val) {
			if (val > 99 || val < 0) {
				$('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
														"Please limit the index " + idx + " number in between 0 and 99 .</span>");
				$('.user-btn').remove();
				
			} else if (val.trim().length > 0) {
				arr.push(val);
				count++;
			}
		});
		if (count == 3) {
			$(".introjs-nextbutton").show();
			/*if (selector == '#inputChar') {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal1()">Next&rarr;</a>');
			} else {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal2()">Next&rarr;</a>');
			}*/
			
		} else {
			$(".introjs-nextbutton").hide();
		}
	});
}

function insertionIntro(element, msg, position, tooltip, action) {
	
	var insert = {};
	if (typeof element != undefined) {
		insert["element"] = "#"+ element;
	}
	if (typeof msg != undefined) {
		insert["intro"] = msg;
	}
	if (typeof position != undefined) {
		insert["position"] = position;
	}
	if (typeof tooltip != undefined) {
		insert["tooltipClass"] = tooltip;
	}
	if (typeof action != undefined) {
		insert["action"] = action;
	}
	return insert;
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
