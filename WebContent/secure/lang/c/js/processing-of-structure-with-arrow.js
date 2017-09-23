var intro;
var typingInterval = 5;
var processingOfStructureWithArrow = function() {
	$(".line").hide();
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {  //tab pressed 
	        objEvent.preventDefault(); // stops its action
	    }
	    if (objEvent.keyCode == 16) { //shift key
	    	 objEvent.preventDefault();
	    }
	});
	$("#restart").click(function(){
		location.reload();
	});
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [ {
				element : "#informationDiv",
				tooltipClass:"hide"
			},{
				element : "#codeDiv",
				intro : "",
				position:"right"
			},{
				element : "#declaration",
				intro : "",
				position:"right"
			},{
				element : "#pointerVariable",
				intro : "",
				position:"right"
			},{
				element : "#pDiv",
				intro : "",
				position:"right",
			},{
				element : "#mallocStmt",
				intro : "",
				position:"bottom",
			},{
				element : "#animationDiv",
				intro : "",
				position:"bottom",
			},{
				element : "#enterName",
				intro : "",
				position:"bottom",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass: "hide"
			},{
				element : "#readName",
				intro : "",
				position:"bottom",
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
			},{
				element : "#pname",
				tooltipClass:"hide"
			},{
				element : "#enterPages",
				intro : "",
				position:"bottom",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass: "hide"
			},{
				element : "#readPages",
				intro : "",
				position:"bottom",
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
			},{
				element : "#ppages",
				tooltipClass:"hide"
			},{
				element : "#enterPrice",
				intro : "",
				position:"bottom",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass: "hide"
			},{
				element : "#readprice",
				intro : "",
				position:"bottom",
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
			},{
				element : "#pprice",
				tooltipClass:"hide"
			},{
				element : "#printDetails",
				intro : "",
				position:"bottom",
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#restart",
				intro : "",
				position:"right",
			}
			]});
		
		intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "informationDiv":
				$('.introjs-nextbutton').hide();
				$("#li1").fadeTo(500, 1, function() {
					$("#li2").fadeTo(500, 1, function() {
						$("#li3").fadeTo(500, 1, function() {
							$("#informationDiv").css({"z-index": "999999999"});
							intro.nextStep();
						});
					});
				});
			break;
			case "codeDiv":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#codeDiv").removeClass("opacity00");
					var text = "Let us consider an  example.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;	
			case "declaration":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the declaration of user defined datatype <span class='ct-code-b-yellow'>book</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;	
			case "pointerVariable":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the definition of <span class='ct-code-b-yellow'>struct</span> pointer variable."
								+"<br/><br/>The pointer variable " 
								+ "<span class='ct-code-b-yellow'>p</span> occupies <span class='ct-code-b-yellow'>2 bytes</span>" 
								+ " in memory.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				
			break;	
			case "pDiv":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#tableOfp").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "Here, pointer variable p stores <span class='ct-code-b-yellow'>address</span>" 
							+ " of the struct <span class='ct-code-b-yellow'>book</span> datatype.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			break;
			case "mallocStmt":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "The method <span class='ct-code-b-yellow'>malloc()</span> allocates runtime memory "
								+"to book and returns the base address of the allocated memory.<br/><br/>This memory address"
								+" is stored in structure pointer variable  <span class='ct-code-b-yellow'>p</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "animationDiv":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#memory").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#memory").removeClass("animated zoomIn");
						$("#arrowMark1").show();
						TweenMax.to("#arrowMark1", 1, {attr:{x2: "35%", y2: "45%" }, onComplete:function() {
							$("#address1").effect( "highlight",{color: 'yellow'}, 1500, function() {
								fromEffectWithTweenMax("#address1", "#address", function() {
									var text = "Now, the base address is stored in the pointer variable p.";
									typing(".introjs-tooltiptext", text, function() {
										$('.introjs-nextbutton').show();
									});
								});
							});
						}});
					});
				});
			break;
			case "enterName":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
						$("#output").append('<span id="name"></span><span class="padding3 input" contenteditable="true" id="editname" maxlength="18" spellcheck="false"></span><br>');
					characters();
					introNextStep();
				});
			break;
			case "outputDiv" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#outputDiv").removeClass("opacity00");
					if (intro._currentStep == 8) {
						var text = "Enter name : ";
						typing("#name", text, function() {
							introNextStep();
						});
					} else if (intro._currentStep == 10) {
						$("#editname").effect( "highlight",{color: 'yellow'}, 1500);
						$("#editname").focus();
						var text = "Please enter a <span class='ct-code-b-yellow'>name.";
						typing(".introjs-tooltiptext", text, function() {
						});
					} else if (intro._currentStep == 13) {
						var text = "Enter pages : ";
						typing("#pages", text, function() {
							introNextStep();
						});
					} else if (intro._currentStep == 15) {
						$("#editpages").effect( "highlight",{color: 'yellow'}, 1500);
						$("#editpages").focus();
						var text = "Please enter number of <span class='ct-code-b-yellow'>pages</span>.";
						typing(".introjs-tooltiptext", text, function() {
						});
					} else if (intro._currentStep == 18) {
						var text = "Enter price : ";
						typing("#price", text, function() {
							introNextStep();
						});
					} else if (intro._currentStep == 20) {
						$("#editprice").effect( "highlight",{color: 'yellow'}, 1500);
						$("#editprice").focus();
						var text = "Please enter <span class='ct-code-b-yellow'>price</span>.";
						typing(".introjs-tooltiptext", text, function() {
						});
					} else if (intro._currentStep == 23) {
						var text = "Name : "+ $("#pname").text() + "  pages : " 
								+ $("#ppages").text() + "  price : " + $("#pprice").text() + "";
						typing("#result", text, function() {
							introNextStep();
						});
					}
				});
			break;
			case "readName":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement reads the value entered by user "
						+ "from the standard input device(keyboard) "
						+" and stores it in the <span class='ct-code-b-yellow'>p->name</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				}); 
			break;
			case "pname":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#pname").addClass("opacity00");
					$("#pname").text($("#editname").text());
					$("#editname").attr("contenteditable", false);
					opacityTo100WithTweenMax($("#pname"), function() {
						intro.nextStep();
					});
				});
			break;
			case "enterPages":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#output").append('<span id="pages"></span><span class="containnumbers input padding3" contenteditable="true" id="editpages" maxlength="3" spellcheck="false"></span><br>');
					numbers();
					introNextStep();
				});
			break;
			case "readPages":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement reads the value entered by user "
						+ "from the standard input device(keyboard) "
						+" and stores it in the <span class='ct-code-b-yellow'>p->pages</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				}); 
			break;
			case "ppages":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#editpages").attr("contenteditable", false);
					$("#ppages").addClass("opacity00");
					$("#ppages").text($("#editpages").text());
					opacityTo100WithTweenMax($("#ppages"), function() {
						intro.nextStep();
					});
				});
			break;
			case "enterPrice":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
						$("#output").append('<span id="price"></span><span class="containnumbers input'
								+' padding3" contenteditable="true" id="editprice" maxlength="3" spellcheck="false"></span><br>');
						numbers();
						introNextStep();
				});
			break;
			case "readprice":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() { 
					var text = "This statement reads the value entered by user "
						+ "from the standard input device(keyboard) "
						+" and stores it in the <span class='ct-code-b-yellow'>p->price</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "pprice":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#editprice").attr("contenteditable", false);
					$("#pprice").addClass("opacity00");
					$("#pprice").text($("#editprice").text());
					$("#pprice").removeClass("opacity00").hide().fadeIn(2000,function() {
						intro.nextStep();
					});
				});
			break;
			case "printDetails" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement prints the values of <span class='ct-code-b-yellow'>book p</span> by accessing"
								+" the members of p using the arrow operator<br/><span class='ct-code-b-yellow'>p->name</span>,"
								+" <span class='ct-code-b-yellow'>p->pages</span> and <span class='ct-code-b-yellow'>p->price</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="result"></span>');
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "restart":
				$('.introjs-nextbutton').hide();
				$('#informationDiv').css({"z-index": "0"});
				$(".introjs-helperLayer ").one('transitionend', function() {
					TweenMax.to("#restart", 1, {"opacity" : "1", onComplete:function() {
						var text = "Click to restart.";
						typing(".introjs-tooltiptext", text, function() {
							
						});
					}});
				});
			break;
			}
		});
		intro.start();
		$('.introjs-nextbutton').show();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
}

function introNextStep() {
	setTimeout(function() {
		intro.nextStep();
	}, 1000);
}


function typing(typingId, typingContent,callBackFunction) {
	$('.introjs-nextbutton').hide();
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).removeClass('opacity00')
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: '#ffff33'}, 500);
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector1).removeClass('z-index1000000');
		$("#dummy").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


function opacityTo100WithTweenMax(selector, callBackFunction) {
	TweenMax.to($(selector), 0.5, {opacity: 1, onComplete: function() {
		$(selector).removeClass('opacity00')
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function characters() {
	$("[contenteditable=true]").on("keydown keyup", function(e) {
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength");
		if (($(this).text().length) > max) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 20 characters, because the array variable size is name[20].</div>");
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			} else {
			e.preventDefault();
			}
		}
		if ($("[contenteditable=true]").text().length == 0) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please enter a name.</div>");
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		} 
		
		if (((e.which >= 60 && e.which <= 90))) {
			return true;
		} else {
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			}  else {
				e.preventDefault();
			}
		}
		
	});
}


function numbers() {
	$("[contenteditable=true]").on("keydown keyup", function(e) {
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength");
		if (($(this).text().length) > max) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 4 characters.</div>");
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			} else {
			e.preventDefault();
			}
		}
		if ($("[contenteditable=true]").text().length == 0) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please enter a number.</div>");
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		} 
		
		if (((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105))) {
			return true;
		} else {
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			}  else {
			e.preventDefault();
			}
		}
	});
		
}
