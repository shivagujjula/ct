var introjs;
	var typingSpeed = 30;
	var continueBtnCount = 0;
	var introjsNextBtnCount = 0;
	var passCount = 0;
	var tl = new TimelineLite();
	var continueActionCount = 0;
	
	var subName = "";
  	var ifBlkId = "";
  	var subMarks = "";
  	var animationIfBlkName = "maths";

var countingReady = function() {
	console.log("In the counting ready...");
	introJsGuide();
	$(".mathsMarksDiv").click(function() {
		$(".mathsMarksDiv > .allowNumbers").focus();
	});
	
	$(".scienceMarksDiv").click(function() {
		$(".scienceMarksDiv > .allowNumbers").focus();
	});
	
	$(".socialMarksDiv").click(function() {
		$(".socialMarksDiv > .allowNumbers").focus();
	});
	$(".introjsNextBtn").click(function() {
		introjsNextBtnCount++;
		$(this).addClass("hidden");
		
		if (introjsNextBtnCount == 1) {
			if ($("#mathsMarks").text().length > 0 && $("#scienceMarks").text().length > 0 && $("#socialMarks").text().length > 0) {
				$('.allowNumbers').attr('contenteditable', false);
				
				
				$(".javacode-maths-marks").text($("#mathsMarks").text());
				$(".javacode-science-marks").text($("#scienceMarks").text());
				$(".javacode-social-marks").text($("#socialMarks").text());
				
				$(".errorMsg").empty();
				
				$(".introjs-tooltiptext").append("<div></div>");
				var text = "<br/>Let us assume the pass mark as 50."
					typing(".introjs-tooltiptext > div:last-child", text, function() {
						var text = $(".passMarkDiv").removeClass("opacity00").html();
						typing(".passMarkDiv", text, function() {
							$(".introjsNextBtn").removeClass("hidden");
						});
				});	
			} else {
				
				if ($("#mathsMarks").text().length == 0) {
					$(".errorMsg").text("Please enter valid marks for maths.");
				} else if ($("#scienceMarks").text().length == 0) {
					$(".errorMsg").text("Please enter valid marks for science.");
				} else {
					$(".errorMsg").text("Please enter valid marks for social.");
				}
				
				charAtEnd("socialMarks");
				introjsNextBtnCount = 0;
				$(".introjsNextBtn").removeClass("hidden");
			}
		} else if (introjsNextBtnCount == 2) {
			$(".introjs-tooltiptext").append("<div></div>");
			var text = "<br/>We will have to count the subjects in which the student has secured a pass mark."
				typing(".introjs-tooltiptext > div:last-child", text, function() {
					$(".introjsNextBtn").removeClass("hidden");
				});
		} else if (introjsNextBtnCount == 3) {
			$(".introjs-tooltiptext").append("<div></div>");
			var text = "<br/>Let us declare a variable to store the count of subjects in which the student has secured pass mark."
				typing(".introjs-tooltiptext > div:last-child", text, function() {
					var text = $(".passCountDiv").removeClass("opacity00").html();
					
					typing(".passCountDiv", text, function() {
						$(".introjsNextBtn").removeClass("hidden");
					});
				});
		} else if (introjsNextBtnCount == 4) {
			var text = "We need to individually verify if the student has secured a pass mark in each of the three subjects " 
						+ "and keep incrementing the value stored in the variable <b class='monospace-text'>passCount</b>.";
				$(".count-increment-exp").removeClass("opacity00");
				typing(".count-increment-exp", text, function() {
					$("#animationDiv").addClass("focus");
					$(".introjsNextBtn").removeClass("hidden");
				});
		} else if (introjsNextBtnCount == 5) {
			$("#animationDivArea").removeClass("opacity00").css("display", "none").slideDown(2000, function() {
				introjs.nextStep();
			});
		} else if (introjsNextBtnCount == 6) {
			var text = $(".mathsIf").removeClass("opacity00").html();
			typing(".mathsIf", text, function() {
				subName = "mathsMarks";
			  	ifBlkId = ".mathsIf";
			  	subMarks = $("#mathsMarks").text();
				
				flipIfCondition(subName, subMarks, ifBlkId);
			});
		}
	});
	
	$('#restartBtn').click(function() {
		$(this).addClass("opacity00");
		continueBtnCount = 0;
		introjsNextBtnCount = 0;
		passCount = 0;
		continueActionCount = 0;
		
		subName = "mathsMarks";
	  	ifBlkId = ".mathsIf";
	  	subMarks = $("#mathsMarks").text();
		animationIfBlkName = "maths";
		
		$('.allowNumbers').attr('contenteditable', true);
		
		$(".passCount-rightside").empty().append("<span class='display-inline-block'>passCount</span><span> + 1</span>");
		$(".passmark-in-animation").text("passMark");
		
		$(".maths-ifblk-condition-in-animation").addClass("opacity00");
		$(".science-ifblk-condition-in-animation").addClass("opacity00");
		$(".social-ifblk-condition-in-animation").addClass("opacity00");
		
		$(".maths-ifblk-body-in-animation").addClass("opacity00");
		$(".science-ifblk-body-in-animation").addClass("opacity00");
		$(".social-ifblk-body-in-animation").addClass("opacity00");
		
		$(".dynamic-tag").remove();
		$('.introjs-tooltipbuttons').show();
		$('.introjs-tooltiptext').css("min-width", "250px");
		$("#animationDivArea").addClass("opacity00");
		$("#javaCodeDiv").addClass("opacity00");
		$("#animationDiv .completed").addClass("opacity00");
		$("#outputDiv").addClass("opacity00");
		//introjs.goToStep(2);
		location.reload();
	});
	$('#closeBtn').click(function() {
		window.parent.$(".ui-dialog-titlebar-close").click();
	});
}


function introJsGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : '#expTypingArea',
			tooltipClass : 'hide'
		}, {
			element : '#animationDiv',
			intro : '',
			position : 'right'
		}, {
			element : '#animationDivArea',
			intro : '',
			position : 'right'
		}, {
			element : '#javaCodeDiv',
			tooltipClass : 'hide'
		}, {
			element : '#outputDiv',
			tooltipClass : 'hide'
		}, {
			element : "#button",
			intro : "<ul><li>Click on <span class='ct-code-b-yellow'>Close</span> button to close the Live Demo.</li>" +
				"<li>Click on <span class='ct-code-b-yellow'>Restart</span> button to restart the Live Demo.</li></ul>",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		switch (targetElement.id) {
		case "expTypingArea":
		//	console.log("**********************");
			var text = "<li class='opacity00'>Counting is a very common requirement while solving programming problems.</li>" 
						+ "<li class='opacity00'>Let us learn how to count using an example." 
						+ " In this example let us consider marks scored by a student in 3 subjects.</li>"
						
				$("#expTypingArea > ul").append(text);
				tl.to("#expTypingArea > ul li", 2, {opacity:1, onComplete: function() {
						$("#expTypingArea > ul > li:last-child()").append("<a class='introjs-button continueBtn' onclick='continueNextEvent()'>Next &#8594;</a>");
					//$(".countinueBtn").removeClass("hidden");
				}})
			break;
			
		case "animationDiv":
			$('.introjs-nextbutton').addClass("opacity00");
			$('.introjs-helperLayer').one("transitionend", function() {
				
				var text = "The marks in 3 subjects are :";
				typing(".introjs-tooltiptext", text, function() {
					
					var text = $(".mathsMarksDiv").removeClass("opacity00").html();
					typing(".mathsMarksDiv", text, function() {
						var text = $(".scienceMarksDiv").removeClass("opacity00").html();
						typing(".scienceMarksDiv", text, function() {
							var text = $(".socialMarksDiv").removeClass("opacity00").html();
							typing(".socialMarksDiv", text, function() {
								
								$(".introjs-tooltiptext").append("<div></div>");
								var text = "You can also edit the marks."
								typing(".introjs-tooltiptext > div:last-child", text, function() {
									$(".introjs-tooltiptext").append("<div class='errorMsg'></div>");
									charAtEnd("mathsMarks");
									charAtEnd("scienceMarks");
									charAtEnd("socialMarks");
									$(".introjsNextBtn").removeClass("hidden");
								});
							});
						});
					});
				});
			});
			break;
			
		case "animationDivArea":
			$('.introjs-nextbutton').addClass("opacity00");
			$('.introjs-helperLayer').one("transitionend", function() {
				
				var text = "Let us compare <b class='ct-code-b-yellow'>mathsMarks</b> with <b class='ct-code-b-yellow'>passMark</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjsNextBtn").removeClass("hidden");
				});
			});
			break;
			
			
		case "javaCodeDiv":
			$('.introjs-nextbutton').addClass("opacity00");
			$('.introjs-helperLayer').one("transitionend", function() {
				
				$("#output").append("<div class='opacity00 dynamic-tag'>The passCount = " + passCount + "</div>");
				$("#javaCodeDiv").fadeTo(800, 1, function() {
					$(this).css("opacity", "");
					$('.introjs-nextbutton').removeClass("opacity00");
					$("#javaCodeDiv").removeClass("opacity00").addClass("focus");
					
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				});
			});
			break;
			
		case "outputDiv":
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#outputDiv").removeClass("opacity00");
				$("#output > div").fadeTo(1000,1, function() {
					
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
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
	
	
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	introjs.refresh();
	
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	$('.introjs-nextbutton').addClass('opacity00');
	$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn hidden'>Next &#8594;</a>");
}

function typing(id, text, callBackFunction) {
		$(id).typewriting( text , {
			"typing_interval": typingSpeed,
			"cursor_color": 'white',
		}, function() {
			$(id).removeClass("typingCursor").addClass("completed");
			introjs.refresh();
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
}

function charAtEnd(elementId) {
	$('#' + elementId).select();
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
	
	
	$(".allowNumbers").keydown(function(e) {
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($(this).text().length > max) {
			e.preventDefault();
		}
	});
}

function continueNextEvent() {
	$(".continueBtn").addClass("hidden");
	continueBtnCount++;
	$("#expTypingArea > ul").append("<li class='opacity00'></li>");
	if (continueBtnCount == 1) {
		var text = "Our aim is to write code which can determine the count of subjects " 
						+ "in which the student has secured a pass mark."
		$("#expTypingArea > ul > li:last-child()").append(text);
			tl.to("#expTypingArea > ul li", 1, {opacity: 1, onComplete: function() {
				$("#expTypingArea > ul > li:last-child()").append("<a class='introjs-button continueBtn' onclick='continueNextEvent()'>Next &#8594;</a>");
			}})
	} else if (continueBtnCount == 2) {
		var text = "Whenever we want to count we should remember to declare an <b class='monospace-text'>int</b> variable which will store the value of count."
			$("#expTypingArea > ul > li:last-child()").append(text);
			tl.to("#expTypingArea > ul li", 1, {opacity: 1, onComplete: function() {
				$("#expTypingArea > ul > li:last-child()").append("<a class='introjs-button continueBtn' onclick='continueNextEvent()'>Next &#8594;</a>");
			}});
	} else if (continueBtnCount == 3) {
		var text = "It is advisable not to use generic names like <b class='monospace-text'>x</b>, " 
					+ "<b class='monospace-text'>y</b> or <b class='monospace-text'>count</b> as the variable name." 
					+ "The name should clearly indicate what we are trying to count.";
					$("#expTypingArea > ul > li:last-child()").append(text);
					tl.to("#expTypingArea > ul li", 1, {opacity: 1, onComplete: function() {
						$("#expTypingArea > ul > li:last-child()").append("<a class='introjs-button continueBtn' onclick='continueNextEvent()'>Next &#8594;</a>");
					}});
	} else if (continueBtnCount == 4) {
		var text = "In our example, <b class='monospace-text'>passCount</b> could be the name of variable, which holds the count of subjects " 
					+ "in which the student has secured a pass mark.";
		$("#expTypingArea > ul > li:last-child()").append(text);
		tl.to("#expTypingArea > ul li", 1, {opacity: 1, onComplete: function() {
			introjs.nextStep();
		}});
	}
}

function flipIfCondition() {
	
	$("." + animationIfBlkName + "-ifblk-condition-in-animation > .subMark").text(subName);
	var l = $(ifBlkId + " > span:first-child()").offset();
	$("." + animationIfBlkName + "-ifblk-condition-in-animation").removeClass("opacity00").offset({"top" : l.top, "left" : l.left});
	$("." + animationIfBlkName + "-ifblk-condition-in-animation").effect("highlight", {color: '#003399'}, 1000, function () {
		tl.to("." + animationIfBlkName + "-ifblk-condition-in-animation", 1, {"top" : 0, "left" : 0, onComplete : function() {
			$("." + animationIfBlkName + "-ifblk-condition-in-animation").css({"top": "", left : ""});
			
			TweenMax.fromTo("." + animationIfBlkName + "-ifblk-condition-in-animation > .subMark" , 0.8,{rotationX: 0},{rotationX: 90, onComplete:function(){
				$("." + animationIfBlkName + "-ifblk-condition-in-animation > .subMark").text(subMarks);
				TweenMax.fromTo("." + animationIfBlkName + "-ifblk-condition-in-animation > .subMark", 0.8, {rotationX : -90},{rotationX:0, onComplete: function() {
					TweenMax.fromTo("." + animationIfBlkName + "-ifblk-condition-in-animation > .passmark-in-animation" , 0.8,{rotationX: 0},{rotationX: 90,onComplete:function(){
						$("." + animationIfBlkName + "-ifblk-condition-in-animation > .passmark-in-animation").text("50");
						TweenMax.fromTo("." + animationIfBlkName + "-ifblk-condition-in-animation > .passmark-in-animation", 0.8, {rotationX : -90},{rotationX:0, onComplete: function() {
							$(".introjs-tooltiptext").append("<div></div>");
							var text = "";
							$("." + animationIfBlkName + "-ifblk-condition-in-animation").append("<span class='dynamic-tag'></span>");
							if (parseInt(subMarks) >= 50) {
								typing("." + animationIfBlkName + "-ifblk-condition-in-animation > span:last-child()", "is <b class='ct-code-b-blue'>true</b>", function() {
									$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn2' onclick=evalateCondition()>Next &#8594;</a>");
								});
							} else {
								typing("." + animationIfBlkName + "-ifblk-condition-in-animation > span:last-child()", "is <b style='color:red;'>false</b>", function() {
									$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn2' onclick=evalateCondition()>Next &#8594;</a>");
								});
							}
						}});
					}});
				}});
			}});
		}});
	});
}

function flipPassCount() {
	$(".introjsNextBtn1").hide();
	var l = $(ifBlkId + " > span").eq(1).offset();
	$("." + animationIfBlkName + "-ifblk-body-in-animation").removeClass("opacity00").addClass("position-relative").offset({"top" : l.top, "left" : l.left});
	
	$("." + animationIfBlkName + "-ifblk-body-in-animation").effect("highlight", {color: '#003399'}, 1000, function () {
		tl.to("." + animationIfBlkName + "-ifblk-body-in-animation", 1, {"top" : 0, "left" : 0, onComplete : function() {
			TweenMax.fromTo("." + animationIfBlkName + "-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)", 0.8, {rotationX :0},{rotationX:-90, onComplete: function() {
				$("." + animationIfBlkName + "-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)").text(passCount);
				TweenMax.fromTo("." + animationIfBlkName + "-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)" , 0.8,{rotationX: -90},{rotationX: 0,onComplete:function() {
					$("." + animationIfBlkName + "-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)").css("transform", "");
					$("." + animationIfBlkName + "-ifblk-body-in-animation" + " > .passCount-rightside").text(passCount + " + 1 ");
					passCount++;
					$("." + animationIfBlkName + "-ifblk-body-in-animation").append("<span class='dynamic-tag'></span>");
					typing("." + animationIfBlkName + "-ifblk-body-in-animation > span:last-child()", " = <b>" + passCount + "</b>", function() {
						$(".introjs-tooltiptext").append("<div></div>");
						$("." + animationIfBlkName + "-ifblk-body-in-animation" + " > .passCount-rightside").css("transform", "");
						$(".introjs-tooltipbuttons").append('<a class="introjs-button introjsNextBtn1" onclick=continueAction()>Next &#8594;</a>');
					});
				}});
			}});
		}});
	});
}

function continueAction() {
	$(".introjsNextBtn1").addClass("hidden");
	continueActionCount++;
	if (continueActionCount == 1) {
		$(".introjs-tooltiptext").empty();
		
		var text = "Let us compare <b class='ct-code-b-yellow'>scienceMarks</b> with <b class='ct-code-b-yellow'>passMark</b>.";
		
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn1' onclick=continueAction()>Next &#8594;</a>");
		});
	} else if (continueActionCount == 2) { 
		
		var text = $(".scienceIf").removeClass("opacity00").html();
		typing(".scienceIf", text, function() {
			animationIfBlkName = "science";
			subName = "scienceMarks";
			ifBlkId = ".scienceIf";
			subMarks = $("#scienceMarks").text();
			flipIfCondition(subName, subMarks, ifBlkId);
		});
		
	} else if (continueActionCount == 3) {
		$(".introjs-tooltiptext").empty();
		var text = "Let us compare <b class='ct-code-b-yellow'>socialMarks</b> with <b class='ct-code-b-yellow'>passMark</b>.";
		
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn1' onclick=continueAction()>Next &#8594;</a>");
		});
	} else if (continueActionCount == 4) { 
		var text = $(".socialIf").removeClass("opacity00").html();
		typing(".socialIf", text, function() {
			animationIfBlkName = "social";
			subName = "socialMarks";
			ifBlkId = ".socialIf";
			subMarks = $("#socialMarks").text();
			flipIfCondition(subName, subMarks, ifBlkId);
		});
	} else {
		$(".introjs-tooltiptext").append("<br/><div></div>");
		var text = "Finally the value of <b class='ct-code-b-yellow'>passCount</b> is " + passCount +  ".";
		typing(".introjs-tooltiptext > div:last-child()", text, function() {
			$(".introjs-nextbutton").removeClass("opacity00");
		});
	}
}

function evalateCondition() {
	$(".introjsNextBtn2").hide();
	if (parseInt(subMarks) >= 50) {
		text = "Since the condition evaluates to <b class='ct-code-b-yellow'>true</b>,<br>" 
				+ "the control enters into <b class='ct-code-b-yellow'>if-body</b> and updates " 
				+ "the <b class='ct-code-b-yellow'>passCount</b> by <b class='ct-code-b-yellow'>1.</b>";
		typing(".introjs-tooltiptext > div:last-child()", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn1'  onclick=flipPassCount()>Next &#8594;</a>");
		});
	} else {
		text = "Since the condition evaluates to <b style='color:red;'>false</b>, there is no change in the <b class='ct-code-b-yellow'>passCount</b>.";
		typing(".introjs-tooltiptext > div:last-child()", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn1' onclick=continueAction()>Next &#8594;</a>");
		});
	}
}