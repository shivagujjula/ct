var introjs;
var typingSpeed = 30;
var flag1 = true;
var clickIndex;

var inheritanceConceptReady = function() {
	$("a").on("click", function() {//description
		$(".code").addClass("hide");
		$("#first").removeClass("opacity00");
		$(".output-console-body").empty();
		clickIndex = $(this).attr("index");
		introjs.insertOption(introjs._currentStep + 1, insertionIntro("description", "", "", "hide"));
		introjs.nextStep();
	});
	introJsFunction();
	$(".introjs-prevbutton").hide();
	var text = "Here we learn the types of inheritance .";
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
			element : "#defination",
			intro : "",
			position : "bottom",
			tooltipClass: "hide"
		}
		]});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		var animateStep = introjs._introItems[introjs._currentStep].animateStep;
		var visit = introjs._introItems[introjs._currentStep]["visits"];
		switch (elementId) {
		
		case "defination":
			$(".introjs-helperLayer").one("transitionend", function() {
				TweenMax.to($("#" + elementId), 2,{opacity:1, onComplete: function() {
					 
				}})
			});
		break;
		
		case "description":
			//introjs.refresh();
			descriptionStep();
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs.refresh();
				//descriptionStep();
				
			});
		break;
		
		case "inheritanceFlow":
			$(".introjs-helperLayer").one("transitionend", function() {
				
				$("#flow" + clickIndex).removeClass("hide");
				introjs.insertOption(introjs._currentStep + 1, insertionIntro("code" + clickIndex, "", ""));
				if (clickIndex === "1") {
					text = "This is how the <y>single inheritance</y> has been done, click on next button to see the sample code.";
				} else if (clickIndex === "2") {
					text = "This is how the <y>multiple inheritance</y> has been done, click on the next button to see the sample code.";
				} else if (clickIndex === "3") {
					text = "This is how the <y>multilevel inheritance</y> has been done click, on the next button to see the sample code";
				} else if (clickIndex === "4") {
					text = "This is how the <y>hierarchical inheritance</y> has been done click, on the next button to see the sample code.";
				}
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				})
			});
		break;
		
		case "code" + clickIndex:
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#code" + clickIndex).removeClass("opacity00");
				var index = 1;
				var text = "Let us consider this is a <y>" + $("#heading" + clickIndex).text().toLowerCase() +"</y> program.";
				typing($(".introjs-tooltiptext"), text, function() {
					if (clickIndex === "1") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("headerFiles1", "", "top"));
						introjs.insertOption(introjs._currentStep + 2, insertionIntro("firstClass1", "", "top"));
						introjs.insertOption(introjs._currentStep + 3, insertionIntro("secondClass1", "", "top"));
						introjs.insertOption(introjs._currentStep + 4, insertionIntro("mainMthd1", "", "top"));
					} else if (clickIndex === "2") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("headerFiles2", "", "top"));
						introjs.insertOption(introjs._currentStep + 2, insertionIntro("firstClass2", "", "top"));
						introjs.insertOption(introjs._currentStep + 3, insertionIntro("secondClass2", "", "top"));
						introjs.insertOption(introjs._currentStep + 4, insertionIntro("thirdClass2", "", "top"));
						introjs.insertOption(introjs._currentStep + 5, insertionIntro("mainMthd2", "", "top"));
					}  else if (clickIndex === "3") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("headerFiles3", "", "top"));
						introjs.insertOption(introjs._currentStep + 2, insertionIntro("firstClass3", "", "top"));
						introjs.insertOption(introjs._currentStep + 3, insertionIntro("secondClass3", "", "top"));
						introjs.insertOption(introjs._currentStep + 4, insertionIntro("thirdClass3", "", "top"));
						introjs.insertOption(introjs._currentStep + 5, insertionIntro("mainMthd3", "", "top"));
					} else if (clickIndex === "4") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("headerFiles4", "", "top"));
						introjs.insertOption(introjs._currentStep + 2, insertionIntro("firstClass4", "", "top"));
						introjs.insertOption(introjs._currentStep + 3, insertionIntro("secondClass4", "", "top"));
						introjs.insertOption(introjs._currentStep + 4, insertionIntro("thirdClass4", "", "top"));
						introjs.insertOption(introjs._currentStep + 5, insertionIntro("mainMthd4", "", "top"));
					}
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				}); 
			});
		break;
		
		case "headerFiles" + clickIndex:
		case "firstClass" + clickIndex:
		case "secondClass" + clickIndex:
		case "thirdClass" + clickIndex:	
			$(".introjs-helperLayer").one("transitionend", function() {
				var element = $(this).attr("element");
				var text = "";
				if (elementId === "thirdClass4") {
					text = "The <y>class C</y> inherits the properties of <y>class A</y>, which contains only one member function <y>print()</y>";
				} else if (elementId === "thirdClass3") {
					text = "The <y>class C</y> inherits the properties of <y>class B</y>, which contains only one member function <y>print()</y>.";
				} else if (elementId === "secondClass3"|| elementId === "secondClass4") {
					text = "Here <y>class B</y> inherits the properties of <y>class A</y>, which contains only one member function <y>show()</y>.";
				} else if (elementId === "secondClass2") {
					text = "Here <y>class B</y> is also the base class or parent class to "
							+"the <y>class C</y>, which contains only one member function <y>show()</y>.";
				} else if (elementId == "thirdClass2") {
					text = "The <y>class C</y> is the derived class it inherits the properties from the <y>class A</y> and <y>class B</y>.";
				} else if (elementId == "headerFiles" + clickIndex) {
						text = "Header files contain definitions of functions and variables,"
								+" which is imported or used into any <y>c++</y> program by using the"
								+" pre-processor <y>#include</y> statement.";
				} else if (elementId == "firstClass" + clickIndex) {
						text = "Here <y>class A</y> is the base class or parent class, which contains only one member function <y>display()</y>.";
				} else if (elementId == "secondClass1") {
					var text = "";
					if(visit === "second_visit") {
						text = "Here <y>class A</y> is inherited as private(default) if we specify it as public we can "
								+"access the member of <y>class A</y> in <y>class B</y>.";
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("print1" + clickIndex, "", "right", ""));
						introjs._introItems[introjs._currentStep + 1]["visits"] = "print1_repeat_visit";
					} else {
						text = "Here <y>class B</y> is the derived class or child class of <y>class A</y>, it inherits the properties of"
								+" base class and also it contains only one member function <y>show()</y>.";
					}
				} 
				typing($(".introjs-tooltiptext"), text, function() {
					if (visit === "second_visit") {
						$("#inheritA").removeClass("hide");
					}
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				});
			})
		break;
			
		case "mainMthd" + clickIndex:
			$(".introjs-helperLayer").one("transitionend", function() {
				var Inheritance = $("#heading" + clickIndex).text();
				var text = "The program execution starts from <y>main()</y> function.";
				typing($(".introjs-tooltiptext"), text, function() {
					if (Inheritance == "Single Inheritance" || Inheritance == "Multiple Inheritance" || Inheritance == "Multilevel Inheritance" || Inheritance == "Hierarchical Inheritance" ) {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("singleObj" + clickIndex, "", "right", ""));
					}
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				});
			})
		break;
		
		case "singleObj" + clickIndex:
			$(".introjs-helperLayer").one("transitionend", function() {
				if ("singleObj" + clickIndex === "singleObj4") {
					text = "<ul><li><y>obj1</y> is an object of <y>class B</y> can access the public members of "
							+"<y>class A</y>.</li><li><y>obj2</y> is an object of <y>class C</y> can access the public"
							+" members of <y>class A</y>.</li></ul>";
				} else if (clickIndex == "2") {
					 text = "<ul><li><y>obj</y> is an object of <y>class C</y>.</li>"
							+"<li>since <y>class C</y> is derived from <y>class A</y>, <y>class B</y> so "
							+"the object of <y>class C</y> can access the public members of <y>class A</y> and <y>class B</y>.</li></ul>"
				} else if (clickIndex == "3") {
						
						 text = "<ul><li><y>obj</y> is an object of <y>class C</y>.</li>"
								+"<li>since <y>class C</y> is derived from <y>class B</y> so "
								+"the object of <y>class C</y> can access the public members of <y>class A</y> and <y>class B</y>.</li></ul>"
				} else {
					
					 text = "<ul><li><y>obj</y> is an object of <y>class B</y>.</li>"
							+"<li>since <y>class B</y> is derived from <y>class A</y> so "
							+"the object of <y>class B</y> can access the public members of <y>class A</y>.</li></ul>"
				}
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("print1" + clickIndex, "", "right", ""));
					$(".introjs-prevbutton, .introjs-nextbutton").show();
				})
			})
		break;
			
		case "cout1" + clickIndex:
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs.refresh();
				introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide"));
				if (clickIndex === "1") {
					var text = "The cout is used to print the text at the output.";
					typing($(".introjs-tooltiptext"), text, function() {
					//introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide"));
					introjs._introItems[introjs._currentStep + 1]["visits"] = "print1_second_visit";
						$(".introjs-nextbutton").show();
					});
				} else if (clickIndex === "2") {
					var text = "The cout is used to print the text at the output.";
					typing($(".introjs-tooltiptext"), text, function() {
					introjs._introItems[introjs._currentStep + 1]["visits"] = "class_A";
						$(".introjs-nextbutton").show();
					});
				} else if (clickIndex === "3") {
					var text = "The cout is used to print the text at the output.";
					typing($(".introjs-tooltiptext"), text, function() {
					introjs._introItems[introjs._currentStep + 1]["visits"] = "class_A";
						$(".introjs-nextbutton").show();
					});
				} else if ("cout14" === "cout1" + clickIndex) {
					var text = "The cout is used to print the text at the output.";
					typing($(".introjs-tooltiptext"), text, function() {
						if (flag1) {
							introjs._introItems[introjs._currentStep + 1]["visits"] = "class_A";
							flag1 = false;
						} else {
							introjs._introItems[introjs._currentStep + 1]["visits"] = "A_class";
						}
						$(".introjs-nextbutton").show();
					});
				}
			});
		break;
		
		case "cout2" + clickIndex:
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide"));
				if (clickIndex === "1") {
					var text = "The cout is used to print the text at the output.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs._introItems[introjs._currentStep + 1]["visits"] = "print2_first_visit";
						$(".introjs-nextbutton").show();
					});
				} else if (clickIndex === "2") {
					var text = "The cout is used to print the text at the output.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs._introItems[introjs._currentStep + 1]["visits"] = "print2_two";
						$(".introjs-nextbutton").show();
					});
				} else if (clickIndex === "3") {
					var text = "The cout is used to print the text at the output.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs._introItems[introjs._currentStep + 1]["visits"] = "print2_two";
						$(".introjs-nextbutton").show();
					});
				} else if (clickIndex === "4") {
					var text = "The cout is used to print the text at the output.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs._introItems[introjs._currentStep + 1]["visits"] = "A_class"; //print2_two
						$(".introjs-nextbutton").show();
					});
				}
			});
		break;
		
		case "cout3" + clickIndex:
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs.refresh();
				var text = "The cout is used to print the text at the output.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide"));
					introjs._introItems[introjs._currentStep + 1]["visits"] = "print2_two"; //
					$(".introjs-nextbutton").show();
				});
			})
		break;
		
		case "print1" + clickIndex:
			$(".introjs-helperLayer").one("transitionend", function() {
				if (visit === "print1_repeat_visit") {
					var text = "Now the <y>class A</y> inherits by <y>class B</y> as public"
								+" access specifier the object of <y>class B</y> can"
								+" access the methods of <y>class A</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("cout1" + clickIndex, "", "top", ""));
						//introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide"));
						//introjs._introItems[introjs._currentStep + 1]["visits"] = "print1_second_visit";
						$(".introjs-nextbutton").show();
					})
				} else {
						var text;
						if (clickIndex === "3") {
							 text = "Here calling the <y>print()</y> of <y>class C</y> .";
						} else {
							 text = "Here calling the <y>display()</y> of base class by dervied class object.";
						}
						typing($(".introjs-tooltiptext"), text, function() {
							//introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide"));
							if (elementId == "print11") {
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide"));
							} else if (elementId == "print12") {
								//introjs._introItems[introjs._currentStep + 1]["visits"] = "class_A";
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("cout1" + clickIndex, "", "top", ""));
							} else if (elementId == "print13") {
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("callShow" + clickIndex, "", "right", ""));
								//introjs.insertOption(introjs._currentStep + 1, insertionIntro("cout1" + clickIndex, "", "top", ""));
							} else if (elementId == "print14") {
								introjs.insertOption(introjs._currentStep + 1, insertionIntro("cout1" + clickIndex, "", "top", ""));
								//introjs._introItems[introjs._currentStep + 1]["visits"] = "class_A";
							}
							$(".introjs-nextbutton").show();
						})
					}
				})
		break;  
		
		case "print2" + clickIndex:
			$(".introjs-helperLayer").one("transitionend", function() {
				var text;
				
				if (clickIndex === "4") {
					 text = "Here calling the <y>display()</y> by derived class object <y>obj</y>.";
				} else {
					 text = "Here calling the <y>show()</y> by derived class object <y>obj</y>.";
				}
				typing($(".introjs-tooltiptext"), text, function() {
					//introjs.insertOption(introjs._currentStep + 1, insertionIntro("outputBox", "", "", "hide"));
					if ("print2" + clickIndex === "print21") {
						//introjs._introItems[introjs._currentStep + 1]["visits"] = "print2_first_visit";
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("cout2" + clickIndex, "", "top", ""));
					} else if ("print2" + clickIndex === "print22") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("cout2" + clickIndex, "", "top", ""));
						//introjs._introItems[introjs._currentStep + 1]["visits"] = "print2_two";
					} else if ("print2" + clickIndex === "print23") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("cout2" + clickIndex, "", "top", ""));
						//introjs._introItems[introjs._currentStep + 1]["visits"] = "print2_two";
					} else if ("print2" + clickIndex === "print24") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("cout1" + clickIndex, "", "top", ""));
						//introjs._introItems[introjs._currentStep + 1]["visits"] = "print2_two";
					}
					$(".introjs-nextbutton").show();
				})
			})
		break;
		
		case "print3" + clickIndex:
			$(".introjs-helperLayer").one("transitionend", function() {
				if ("print3" + clickIndex === "print34") {
						var text = "Here calling the <y>print()</y> by derived class object <y>obj2</y>.";
						typing($(".introjs-tooltiptext"), text, function() {
							introjs.insertOption(introjs._currentStep + 1, insertionIntro("objB", "", "right", ""));
							$(".introjs-nextbutton").show();
						})
				}	
			})
		break;
		
		case "objB":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here in this <y>print()</y> we are creating the object for the <y>class B</y>.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("callShow4", "", "right", ""));
					$(".introjs-nextbutton").show();
				});
			})
		break;	
			
		case "callShow" + clickIndex:
			$(".introjs-helperLayer").one("transitionend", function() {
					if ("callShow" + clickIndex === "callShow3") {
					var text = "Here calling the method <y>display()</y> of <y>class A</y> from <y>print()</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("showMthd3", "", "right", "hide"));
						$(".introjs-nextbutton").show();
					});
				} else {
					var text = "Here we are calling the method <y>show()</y> of <y>class B</y> with the object <y>objB</y> in <y>class C</y>.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("showMthd4", "", "right", "hide"));
						$(".introjs-nextbutton").show();
					});
				}
			})
		break;
			
		case "showMthd" + clickIndex:
			$(".introjs-helperLayer").one("transitionend", function() {
					if ("showMthd" + clickIndex === "showMthd3") {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("cout13", "", "top", ""));
						setTimeout(function() {
							introjs.nextStep();
						}, 600);
					} else {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("cout34", "", "top", ""));
						setTimeout(function() {
							introjs.nextStep();
						}, 600);
					}
			})
		break;	
			
		case "outputBox":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputBox").removeClass("opacity00");
				if (visit === "print2_one") {
					$(".output-console-body").html("<div>Base Class A</div>");
					//introjs.insertOption(introjs._currentStep + 1, insertionIntro("defination", "", "", "hide"));
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("print34", "", "right", ""));
				} else if (visit === "print2_first_visit" || visit === "print2_two") {
					if (visit === "print2_first_visit") {
						$(".output-console-body").append("<div>Derived Class B</div>");
					} else if (visit === "print2_two") {
						$(".output-console-body").append("<div>Base Class B</div>");
					}
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("defination", "", "", "hide"));
				} else if (visit === "print1_second_visit" || visit === "class_A" || visit === "A_class") {
					$(".output-console-body").html("<div>Base Class A</div>");
					if (visit === "A_class") {
						$(".output-console-body").append("<div>Base Class A</div>");
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("print3" + clickIndex, "", "right", ""));
					} else {
						introjs.insertOption(introjs._currentStep + 1, insertionIntro("print2" + clickIndex, "", "right",""));
					}
				} else if (clickIndex === "1") {
					$(".output-console-body").html("<div><div>singleInh.cpp: error: <go>void</go> A::display() is"
													+" inaccessible <go>public</go>: <go>void</go> display() {</div><div>singleInh.cpp:"
													+" error: within <go>this</go> context obj.display();</div><div>singleInh.cpp: error:"
													+" 'A' is not an accessible base of 'B'</div></div>");
					introjs.insertOption(introjs._currentStep + 1, insertionIntro("secondClass1", "", "top"));
					introjs._introItems[introjs._currentStep + 1]["visits"] = "second_visit";
				}
				setTimeout(function() {
					introjs.nextStep();
				}, 1000);
			})
		break;	
		}
	})
	introjs.start();
}

/*$("a").on("click", function() {//description
	$(".code").addClass("hide");
	$("#first").removeClass("opacity00");
	$(".output-console-body").empty();
	clickIndex = $(this).attr("index");
	introjs.insertOption(introjs._currentStep + 1, insertionIntro("description", "", "", "hide"));
	introjs.nextStep();
});*/



function descriptionStep() {
	$(".code").addClass("hide");
	$("#code" + clickIndex).removeClass("hide");
	$("#head" + clickIndex).removeClass("hide");
	/* if (clickIndex === "1") { */
		console.log("in the clickIndex...");
		descriptionFunction();
	//}
	
}

function descriptionFunction() {
	
	if (clickIndex === "1") {
		$("#textDesc").html("<div class='col-xs-12'><ul><li>The single inheritance contains one base class and one derived class.</li>"
								+"<li>The derived class takes all the properties of a base class.</li></ul></div>");
		TweenMax.to($("#description"), 2,{opacity:1, onComplete: function() {
			//$("#description ul li").last().append("<span class='introjs-button user-btn' id='next' onclick='shiftStep()'>Next &rarr;</span>");
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("inheritanceFlow", "", "right", ""));
		}})
	} else if (clickIndex === "2") {
		$("#textDesc").html("<div class='col-xs-12'><ul><li>The multiple inheritance contains more than one base class and one derived class.</li>"
				+"<li>The derived class inherits all the properties of a base classes.</li></ul></div>");
		TweenMax.to($("#description"), 2,{opacity:1, onComplete: function() {
			//$("#description ul").append("<span class='introjs-button user-btn' id='next' onclick='shiftStep()'>Next &rarr;</span>");
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("inheritanceFlow", "", "right", ""));
		}})
	} else if (clickIndex === "3") {
		$("#textDesc").html("<div class='col-xs-12'><ul><li>A derived class itself, acts as a base class for another class.</li>"
				+"<li>Such situation is called multilevel inheritance.</li></ul></div>");
		TweenMax.to($("#description"), 2,{opacity:1, onComplete: function() {
			//$("#description ul").append("<span class='introjs-button user-btn' id='next' onclick='shiftStep()'>Next &rarr;</span>");
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("inheritanceFlow", "", "right", ""));
		}})
	} else if (clickIndex === "4") {
		$("#textDesc").html("<div class='col-xs-12'><ul><li>The hierarchical inheritance contains one base class and more than one derived class.</li>"
				+"<li>In this inheritance, more than one sub class inherits the properties from a single base class.</li>"
				+"</ul></div>");
		TweenMax.to($("#description"), 2,{opacity:1, onComplete: function() {
			//$("#description ul").append("<span class='introjs-button user-btn' id='next' onclick='shiftStep()'>Next &rarr;</span>");
			introjs.insertOption(introjs._currentStep + 1, insertionIntro("inheritanceFlow", "", "right", ""));
		}})
	}
	introjs.refresh();
		$("#textDesc ul li").last().append("<span class='introjs-button user-btn' id='next' onclick='shiftStep()'>Next &rarr;</span>");
}

/* function singleInheritance() {
	//introjs.insertOption(introjs._currentStep + 1, insertionIntro("singleObj", "", ""));
} */

function shiftStep() {
	$("#inheritanceFlow").removeClass("opacity00");
	$(".user-btn").remove();
	introjs.nextStep();
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
