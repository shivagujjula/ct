var typingSpeed = 0.1;
var flag1 = false;
var virtualDestructorFunction = function() {
	introJsFunction();
	$(".introjs-prevbutton").hide();
	var text = "Here we learn about the <y>virtual</y> destructor.";
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
			position : "right"//baseClass
		},{
			element : "#pre",
			intro : "",
			position : "right"
		}]

	})
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].action;
		switch (elementId) {
			case "pre":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#pre").removeClass("opacity00");
					var text = "This is the sample program of <y>destructor</y> with <y>virtual</y> key.";
					
					typing($(".introjs-tooltiptext"), text, function() {
						
						
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("baseClass", "", "top"));
						introjs.insertOption(introjs._currentStep + 2, insertionIntro("deriveClass", "", "top"));
						introjs.insertOption(introjs._currentStep + 3, insertionIntro("main", "", "top"));
						introjs.insertOption(introjs._currentStep + 4, insertionIntro("objCreation", "", "top"));
						introjs.insertOption(introjs._currentStep + 5, insertionIntro("animate", "", "top", "hide", "obj"));
						introjs.insertOption(introjs._currentStep + 6, insertionIntro("deriveClass", "", "top", "", "check"));
						introjs.insertOption(introjs._currentStep + 7, insertionIntro("baseClass", "", "right","", "check"));
						introjs.insertOption(introjs._currentStep + 8, insertionIntro("invokeSecond", "", "top", "hide"));
						introjs.insertOption(introjs._currentStep + 9, insertionIntro("baseCon", "", "top", "hide"));
						/*introjs.insertOption(introjs._currentStep + 10,insertionIntro("animate", "", "top", "hide", "baseCon"));*/
						introjs.insertOption(introjs._currentStep + 10,insertionIntro("outputBox", "", "top", "hide"));
						introjs.insertOption(introjs._currentStep + 11,insertionIntro("invokeFirst", "", "top", "hide"));
						introjs.insertOption(introjs._currentStep + 12,insertionIntro("animate", "", "top", "hide", "val2"));
						introjs.insertOption(introjs._currentStep + 13,insertionIntro("deriveCon", "", "top", "hide"));
						introjs.insertOption(introjs._currentStep + 14,insertionIntro("outputBox", "", "top", "hide"));
						introjs.insertOption(introjs._currentStep + 15,insertionIntro("memoryRemove", "", "top"));
						introjs.insertOption(introjs._currentStep + 16,insertionIntro("baseShow", "", "top"));
						introjs.insertOption(introjs._currentStep + 17,insertionIntro("parentShow", "", "top"));
						introjs.insertOption(introjs._currentStep + 18,insertionIntro("animate", "", "top", "hide", "k"));
						introjs.insertOption(introjs._currentStep + 19,insertionIntro("deriveDes", "", "top", "hide"));
						//introjs.insertOption(introjs._currentStep + 19,insertionIntro("animate", "", "top", "hide", "desderive"));
						//introjs.insertOption(introjs._currentStep + 18,insertionIntro("baseShow", "", "top", "","print"));//deriveDes
						$(".introjs-nextbutton").show();
						
						
					});
					
				});
			break;
			
			case "baseShow":
				$(".introjs-helperLayer").one("transitionend", function() {
					if (animateStep == "print") {
						setTimeout(function() {
							introjs.nextStep();
						}, 600)
					} else {
						var text = "The base class <y>destructor</y> contians the <y>virtual</y> key, based on the pointer <y>p</y>"
									+" address holded variable it execute the destructor.";
						typing($(".introjs-tooltiptext"), text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					}
				})
			break;
				
			case "parentShow":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Since the pointer <y>p</y> holds the address of the <y>derive</y> class, first it execute "
								+"<y>derive</y> class <y>destructor</y> then <y>base</y> class <y>destructor</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				})
			break;	
			
			case "deriveDes":
				$(".introjs-helperLayer").one("transitionend", function() {
					
					introjs.insertOption(introjs._currentStep + 1,insertionIntro("outputBox", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 2,insertionIntro("baseShow", "", "top", "hide","print"));
					introjs.insertOption(introjs._currentStep + 3,insertionIntro("baseDes", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 4,insertionIntro("outputBox", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 5,insertionIntro("restart", "click to restart.", "right"));
					
					setTimeout(function() {
						introjs.nextStep();
					}, 900);
					
				})
			break;
			
			case "baseDes":
				$(".introjs-helperLayer").one("transitionend", function() {
						/*var text = "";
							typing($(".introjs-tooltiptext"), text, function() {
								$(".introjs-nextbutton").show();
							});*/
					
					setTimeout(function() {
						introjs.nextStep();
					}, 600);
				})
			break;	
				
			case "restart":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#restart").removeClass("opacity00");
					$("#restart").click(function() {
						location.reload(true);
					});
				})
			break;	
				
			case "memoryRemove":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The <y>delete</y> key is used to remove the memory by calling the <y>destructor</y> of a class.";
					typing($(".introjs-tooltiptext"), text, function() {
						/*$(".introjs-tooltiptext").append("<div></div>");*/
						$(".introjs-nextbutton").show();
					});
				});
			break;
			
			case "baseClass":	
				$(".introjs-helperLayer").one("transitionend", function() {
					var text;
					if (animateStep == "check") {
						text = "The class <y>Base</y> doesn't inherit any other class it executes the"
								+" constructor of <y>base</y> class, then it execute the <y>derive</y> class constructor.";
					} else {
						text = "The base class contains the constructor <y>Base()</y> and destructor <y>~Base()</y>.";
					}
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				})
			break;
				
			case "deriveClass":	
				$(".introjs-helperLayer").one("transitionend", function() {
					var text;
					if (animateStep == "check") {
						text = "The derive class is extending or inherits the class <y>Base</y> so it invokes"
								+" the <y>Base</y> class <y>constructor</y>.";
					} else {
						text = "The base class contains the constructor <y>Derived()</y> and destructor <y>~Derived()</y>.";
					}
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					});
				})	
			break;
				
			case "main":	
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The execution starts from <y>main()</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				})	
			break;
				
			case "objCreation":	
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here the object is created to the <y>derived</y> class and storing in to the pointer <y>p</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				})	
			break;	
			
			case "invokeFirst":
			case "invokeSecond":
			case "baseCon":
			case "deriveCon":
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 600);
				})
			break;	
				
			case "removeMemory":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here the <y>memory</y> is removed by using the <y>delete</y> using a pointer <y>p</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				})	
			break;
			
			case "animate":
				
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#animate").removeClass("opacity00");
					$("#" + animateStep).removeClass("opacity00");
					$("#derive").removeClass("opacity00");
					if (animateStep == "obj") {
						var l1 = $("#addr1").offset();
						var l2 = $("#addr2").offset();
						var topLength = l2.top - l1.top;
						var leftLength = l2.left - l1.left;
						setTimeout(function() {
							$("#addr1").append("<b>1274</b>");
							$("#p, #addr2").removeClass("opacity00");
							TweenMax.from("#addr1", 2, {top : topLength, left : leftLength, onComplete:function() {
								setTimeout(function() {
									introjs.nextStep();
									flag1 = true;
								}, 1000);
							}})
						}, 500);
					}
					
					if(flag1) {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					}
					
				});
			break;
			
			case "outputBox":
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#outputBox").removeClass("opacity00");
					$(".output-console-body div").eq(index).removeClass("opacity00");
					index++;
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				})
			break;	
		}
	})
	var index = 0;
	introjs.start();
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


function abValues() {
	$('.user-btn').remove();
	$(".introjs-tooltiptext").append("<ul style='list-style-type: none;'><li><div id='aToX' class='display-inline-block relative ct-code-b-yellow'>"
			+ "  <div>p = <div id='tooltipXVal' class='display-inline-block relative'>1274</div>;</div>"
			+ " </div></li></ul>");
	
	var l1 = $("#aToX").offset();
	var l2 = $("#pCurrent").offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenMax.from("#aToX", 1, {top : topLength, left : leftLength, onComplete:function() {
		flipEffectWithTweenMax("#tooltipXVal", "1264", function() {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		});
	}});
}


function flipEffectWithTweenMax(selector, val, callBackFunction) {
	console.log("function Entered");
	$(selector).effect( "highlight",{color: 'green'}, 500, function() {
		TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	});
}


