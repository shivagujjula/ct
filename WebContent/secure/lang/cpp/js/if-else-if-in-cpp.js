var checkval;
var checkingFlag = false;
var ch;
var num;
var ifElseIfInCReady = function() {
	intro = introJs();
	$("#restartBtn").click(function() {
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
	/*$("#consoleBodyDiv").click(function() {
		$("#charInput").focus();
	})*/
	
	$('#charInput').keyup(function() {
		if($('#charInput').val().length > 0) {
			$('.introjs-nextbutton').show();
			$('.introjs-prevbutton').show();
			$('.errorText').empty();
		} else {
			$('.errorText').html("Please enter a character.");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
		}
	});
	
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element :'#ifElseStatement',
			intro :''
		},{
			element :'#mainFunctions',
			intro :'',
			tooltipClass : "hide"
		},{
			element :'#charCh',
			intro :'',
			tooltipClass : "hide"
		},{
			element :'#enterCharSpan',
			intro :'',
			tooltipClass : "hide"
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#getCh',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hide'
			
		},{
			element :'#ifCondition',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#ifConditionForLowerCase',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#printF1',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#ifConditionForUpperCase',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#printF2',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#printF3',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#printF4',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#end',
			intro :'',
			tooltipClass:'hide'
			
		},{
			element :'#button',
			intro :'',
			position:"right"
		}]
	});
	
	intro.onafterchange(function(targetElement) { 
		t1 = new TimelineLite();
		var elementId = targetElement.id;
		console.log("Step : " + intro._currentStep);
		switch (elementId) {
		case "mainFunctions" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-prevbutton,.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext', "<ul><li><b class='color-yellow'>main()</b> function is called by the operating system.</li>"+
						"<li><b class='color-yellow'>main()</b> is execution starting point for any <b class='color-yellow'>C++</b> program.</li>"+
						"</ul>", function() {
					$('.introjs-prevbutton,.introjs-nextbutton').show();
				});
			});
		break; 
		case "charCh" :
			$(".introjs-nextbutton").hide()
			$('.introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
		  		typing('.introjs-tooltiptext', "<b class='color-yellow'>ch</b> is the variable which is of type char.<ul><li>It allocates 1 byte "+
		  				"of memory.</li><li>It stores only 1 character.</li></ul>", function() {  
		  			$('.introjs-prevbutton,.introjs-nextbutton').show();
		  		});
			});
		break;
	 	case "enterCharSpan" :
	 		$("#charInput").val("");
			$(".user-btn").remove();
	 		$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
		  		typing('.introjs-tooltiptext', "<b class='color-yellow'>cout</b> is library function, used to display the message specified "+
		  				"with in double quotes on to the output screen.", function() { 
		  			$('.introjs-prevbutton,.introjs-nextbutton').show();
				});
			});
		break; 
		case "consoleId" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			if(intro._currentStep == 4) {
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#consoleId').removeClass('opacity00');
					if (intro._direction == "backward") {
						setTimeout(function(){
							intro.previousStep();
							$('#consoleId').addClass('opacity00');
						}, 800);
					} else {
					setTimeout(function(){
						intro.nextStep();
					}, 800);
					}
				 });
			} else if(intro._currentStep == 6) {
				$("#charInput").val("");
				$(".user-btn").remove();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#charInput").attr("disabled",false);
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext', "Enter a <b class='color-yellow'>character</b>.<br><span class='errorText'></span>", function() {  
		  				$('#charInput').focus();
					});
				 });
			} else if(intro._currentStep == 10 || num == 1) {
				$(".introjs-helperLayer").one("transitionend", function() {
					if (intro._direction == "backward" && num == 1) {
						console.log(num)
						setTimeout(function(){
							intro.goToStep(10);
						}, 1000); 
					} else {
						num = 1;
					typing('#printInConsole',"<span style='color: #0f0;'>"+ ch + "</span> is a letter and vowel", function() {
						setTimeout(function(){
							intro.goToStep(19);
						}, 1000); 
					});
					}
				});
			}  else if(intro._currentStep == 13 || num == 2) {
				$(".introjs-helperLayer").one("transitionend", function() {
					if (intro._direction == "backward" && num == 2) {
						console.log(num)
						setTimeout(function(){
							intro.goToStep(13);
						}, 1000); 
					} else {
						num = 2;
					 typing('#printInConsole',"<span style='color: #0f0;'>"+ ch + "</span> is a letter and vowel", function() {
					  setTimeout(function(){
						  intro.goToStep(19);
						}, 1000); 
					});
					}
				});
			} else if(intro._currentStep == 15 || num == 3) {
				$(".introjs-helperLayer").one("transitionend", function() {
					if (intro._direction == "backward" && num == 3) {
						console.log(num)
						setTimeout(function(){
							intro.goToStep(15);
						}, 1000); 
					} else {
						num = 3;
						typing('#printInConsole',"<span style='color: #0f0;'>"+ ch + "</span> is a letter and consonant", function() {
							setTimeout(function(){
								intro.goToStep(19);
							}, 1000); 
						});
					}
				});
			} else if(intro._currentStep == 17 || num == 4) {
				$(".introjs-helperLayer").one("transitionend", function() {
					if (intro._direction == "backward" && num == 4) {
						setTimeout(function(){
						  intro.goToStep(17);
						}, 1000); 
					} else {
						num = 4;
						if (ch.charCodeAt(0) == 32) {
							typing('#printInConsole',"<span style='color: #0f0;'>"+ "\'\'" + "</span> is not a letter", function() {
								 setTimeout(function(){
									 intro.goToStep(19);
								 }, 1000); 
							});
						} else {
					 typing('#printInConsole',"<span style='color: #0f0;'>"+ ch + "</span> is not a letter", function() {
						 setTimeout(function(){
							 intro.goToStep(19);
						 }, 1000); 
					});
						}
					}
				});
			}
			break;
		case "getCh" :
			ch = $('#charInput').val();
			$("#charInput").val("");
			$(".user-btn").remove();
			$('.introjs-prevbutton,.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
		  		typing('.introjs-tooltiptext', "<b class='color-yellow'>cin</b> is a library function which reads character from "+
		  				"keyboard and it is assigned to variable <b class='color-yellow'>ch</b>.", function() {  
		  				$('.introjs-prevbutton,.introjs-nextbutton').show();
			  		});
				});
			break;
		case "enteredCharSpan" :
			$('.introjs-prevbutton,.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					intro.nextStep();
					}, 700);
				});
		break; 
		case "putChar" :
			$('.introjs-prevbutton,.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext', "<b class='color-yellow'>putchar()</b> is used to print the character on to the console.", function() {  
		  			$('.introjs-prevbutton,.introjs-nextbutton').show();
					});
				});
			break;
		case "ifCondition" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			ch = $('#charInput').val();
			checking();
			$(".introjs-helperLayer").one("transitionend", function() {
				animation();				
			});
			break;
		case "ifConditionForLowerCase":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				animation1();
			});
			break;
		case "printF1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("div>#printInConsole").empty()
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext', "Since the condition evaluates to <b class='color-yellow'>true</b>, the control enters into the "+
						"<b class='color-yellow'>if</b> block.", function() {
					$('.introjs-prevbutton,.introjs-nextbutton').show();
					});
				});
			break;
		case "ifConditionForUpperCase":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				animation2();
			  	});
			break;
		case "printF1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("div>#printInConsole").empty();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext', "Since the condition evaluates to <b class='color-yellow'>true</b>, the control enters into the "+
						"<b class='color-yellow'>if</b> block.", function() {
					$('.introjs-prevbutton,.introjs-nextbutton').show();
					});
				});
			break;
		case "ifConditionForUpperCase":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				animation3();
			  	});
			break;
		case "printF2":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".userBackBtn").remove();
			$("div>#printInConsole").empty();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext', "Since the condition evaluates to <b class='color-yellow'>true</b>, the control enters into the "+
						"<b class='color-yellow'>else if</b> block.", function() {
					$('.introjs-prevbutton,.introjs-nextbutton').show();
					});
				});
			break;
		case "printF3":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("div>#printInConsole").empty();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext', "Since the condition evaluates to <b class='color-yellow'>true</b>, the control enters into the "+
						"<b class='color-yellow'>if</b> block and inside <b class='color-yellow'>if</b> block it enters into "+
						"<b class='color-yellow'>else</b> block.", function() {
					$(".introjs-tooltipbuttons").prepend("<a class='introjs-button userBackBtn' onclick='backStep1()'>&#8592; Back</a>");
					$('.introjs-nextbutton').show();
					});
				});
			break;
		case "printF4":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("div>#printInConsole").empty();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext', "Since the condition evaluates to <b class='color-red'>false</b>, the control enters into the "+
						"<b class='color-yellow'>else</b> block.", function() {
					$(".introjs-tooltipbuttons").prepend("<a class='introjs-button userBackBtn' onclick='backStep1()'>&#8592; Back</a>");
					$('.introjs-nextbutton').show();
					
					});
				});
			break;
		case "end":
			$(".userBackBtn").remove();
			$('.introjs-prevbutton,.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide")
				typing('.introjs-tooltiptext', "End of the program.", function() {
					//$(".introjs-tooltipbuttons").prepend("<a class='introjs-button userBackBtn' onclick='backStep2()'>&#8592; Back</a>");
					$('.introjs-prevbutton,.introjs-nextbutton').show();
				});
			});
		break;
		case "button" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn, #closeBtn").removeClass("opacity00");
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
/*$("#charInput").attr("disabled",true);*/
$('.introjs-nextbutton,.introjs-prevbutton,.introjs-skipbutton').hide();
typing('.introjs-tooltiptext',"This code demonstrates the working of <b><span class='color-yellow'>if-else-if</span></b> block.",function() {
	$('#preBox').removeClass('opacity00');
	$('.introjs-nextbutton').show();
	});	
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 1;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			intro._introItems[intro._currentStep].intro= $(".introjs-tooltiptext").html();
		}
	})
}
	
function charcheck() {
	$('.introjs-prevbutton').show();
	if ( (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))	{
		if ( ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ) {
		   $(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
		   $(".user-btn").click(function() {
	    		$(".user-btn").remove();
	    		intro.goToStep(9);
	        });
		   
	   } else if ( ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U' ) {
	    	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
	    	$(".user-btn").click(function() {
	    		$(".user-btn").remove();
	    	 	intro.goToStep(12);
	        });
	   } else {
	    	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
			$(".user-btn").click(function() {
				$(".user-btn").remove();
		    	 intro.goToStep(15);
		     });
	  }
   }
   else {
   	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
   	$(".user-btn").click(function() {
	   	$(".user-btn").remove();
	   	 intro.goToStep(17);
        });
	} 
}
 
 
function checking() {
	if ((ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') ) {
		checkingFlag = true;
	} else if((ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')) {
		checkingFlag = true;
	} else if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
		checkingFlag = true;
	} else {
		checkingFlag = false;
	}
}
 
function evaluateCndtn(text) {
	if (text) {
		text = "<span class='ct-code-b-yellow'>" + text + "</span>";
	} else {
		text = "<span class='color-red'>" + text + "</span>";
	}
	return text;
}
 
 function animation() {
	 $(".introjs-tooltip").removeClass("hide");
	 typing('.introjs-tooltiptext', "This is the <b class='color-yellow'>condition</b> part. If the condition evaluates to "
			 	+ "<b class='color-yellow'>true</b>, the control enters into the <b class='color-yellow'>if</b> block, "
			 	+ "otherwise the control enters into the <b class='color-yellow'>else</b> block.<br><br>" 
				+ "<span id='ifConditionCheckIntooltip' class='opacity00'>(<span id='chFlip1' class='bold' style='display: inline-block;'>"
				+ "ch</span> >= <span class='color-yellow'> 'A'</span> <span class=''> && </span><span id='chFlip2' class='bold' "
				+ "style='display: inline-block;'> ch </span> <= <span class='color-yellow'> 'Z'</span>) <span class=''> ||"
				+ " </span>(<span id='chFlip3'class='bold' style='display: inline-block;'> ch </span> >= <span class='color-yellow'> 'a'</span> "
				+ "<span class=''> && </span><span id='chFlip4' class='bold' style='display: inline-block;'> ch </span> <= <span class='color-yellow'> "
				+ "'z'</span>)</span><br><span id='span'class='opacity00'>System converts each and every character into "
				+ "<b class='color-yellow'>ASCII</b> value.</span><br><span id='ifConditionCheckIntooltip1'></span>", function() {  
		var l = $("#ifConditionCheck").offset();
		$("#ifConditionCheckIntooltip").offset({"top": l.top,"left": l.left});
        TweenMax.to("#ifConditionCheckIntooltip", 0.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
        	rotationEffect("#chFlip1", "#charInput", function() {
        		rotationEffect("#chFlip2", "#charInput", function() {
        			rotationEffect("#chFlip3", "#charInput", function() {
        				rotationEffect("#chFlip4", "#charInput", function() {
        					$('#span').removeClass('opacity00');
		    				$('#ifConditionCheckIntooltip1').append("(<span id='chFlip11' class='bold' style='display: inline-block;'> '" + ch + 
		    							"'</span> >= <span id='upperA' style='display: inline-block;' class='color-yellow'> 'A'</span> <span class=''> "+
		    							"&& </span><span id='chFlip22' class='bold' style='display: inline-block;'> '" + ch + 
		    							"' </span> <= <span class='color-yellow' id='upperZ' style='display: inline-block;'> 'Z'</span>) <span class=''> ||"+
  			        			  		" </span>(<span id='chFlip33'class='bold' style='display: inline-block;'> '" + ch + 
  			        			  		"' </span> >= <span class='color-yellow' id='lowerA' style='display: inline-block;'> "+
  			        			  		"'a'</span> <span class=''> && </span><span id='chFlip44' class='bold' style='display: inline-block;'> '" + ch + 
  			        			  		"' </span> <= <span class='color-yellow' id='lowerZ' style='display: inline-block;'> 'z'</span>)</span><br>"+
  			        			  		"<span id='trueAndFalse'></span><br><span id='trueAndFalse1'></span><br><span id='checking'></span>");
  							var l = $("#ifConditionCheckIntooltip").offset();
  							$("#ifConditionCheckIntooltip1").offset({"top": l.top,"left": l.left});
  			  			        TweenMax.to("#ifConditionCheckIntooltip1", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
  			  			        	rotationEffect1("#chFlip11", "#charInput", function() {
  			  			        		rotationEffect2("#upperA", "65", function() {    			  			        		
  			  			        			rotationEffect1("#chFlip22", "#charInput", function() {
  			  			        				rotationEffect2("#upperZ", "90", function() {  
  			  			        					rotationEffect1("#chFlip33", "#charInput", function() {
  			  			        						rotationEffect2("#lowerA", "97", function() {  
  			  			        							rotationEffect1("#chFlip44", "#charInput", function() {
  			  			        								rotationEffect2("#lowerZ", "122", function() {  
  			  			        									$("#trueAndFalse").append(evaluateCndtn(ch >= "A" ? true : false) + " ");
  			  			        									$("#trueAndFalse").append("&& " + " ");
  			  			        									$("#trueAndFalse").append(evaluateCndtn(ch <= "Z" ? true : false) + " ");
  			  			        									$("#trueAndFalse").append("|| "+ " ");
  			  			        									$("#trueAndFalse").append(evaluateCndtn(ch >= "a" ? true : false) + " ");
  			  			        									$("#trueAndFalse").append("&& "+ " ");
  			  			        									$("#trueAndFalse").append(evaluateCndtn(ch <= "z" ? true : false) + " ");
  			  			        									$("#trueAndFalse1").append(evaluateCndtn(ch >= "A" && ch <= "Z" ? true : false) + " ");
  			  			        									$("#trueAndFalse1").append("|| "+ " ");
  			  			        									$("#trueAndFalse1").append(evaluateCndtn(ch >= "a" && ch <= "z" ? true : false) + " ");
  			  			        									var evaluateMsg;							  	  			        	  			        		
															  	  	if (checkingFlag){
															  	  	  	evaluateMsg = "evaluates to <b class='color-yellow'>" + checkingFlag + "</b>.";
															  	  	} 	else {
															  	  	 	evaluateMsg = "evaluates to <b class='color-red'>" + checkingFlag + "</b>.";
															  	  	}
															  	  	typing('#checking', evaluateMsg, function() { 
																  	  setTimeout(function(){
																  		  charcheck();
																	  }, 2600); 
															  	  	});
  			  			        								});
  			  			        							});
			  			        						});	
  			  			        					});
  			  			        				});
  			  			        			});	
  			  			        		});
  			  			        	});
  			  			        }});		
        				});
        			});
        		});
        	});
        }});
	 });
 }
 function animation1() {
	 $(".introjs-tooltip").removeClass("hide");
	 typing('.introjs-tooltiptext', "<span id='lowerLetterVowelsIntoolTip' class='opacity00'><span id='lowerCaseCh' class='bold' "
			 + "style='display: inline-block;'>ch</span> == <span class='color-yellow'>'a'</span> <span class=''>||</span> "
			 + "<span id='lowerCaseCh1' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'e'</span> "
			 + "<span class=''>||</span> <span id='lowerCaseCh2' class='bold' style='display: inline-block;'>ch</span> == "
			 + "<span class='color-yellow'>'i'</span> <span class=''>||</span> <span id='lowerCaseCh3' class='bold' "
			 + "style='display: inline-block;'>ch</span> == <span class='color-yellow'>'o'</span> <span class=''>||</span>"
			 + " <span id='lowerCaseCh4' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>"
			 + "'u'</span></span><br><span id='lowerLetterVowelsIntoolTip1'></span><br><span id='trueSpan'></span>", function() {
		var l = $("#lowerLetterVowels").offset();
		$("#lowerLetterVowelsIntoolTip").offset({"top": l.top,"left": l.left});
	    TweenMax.to("#lowerLetterVowelsIntoolTip", 0.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
	    	rotationEffect("#lowerCaseCh", "#charInput", function() {
	    		rotationEffect("#lowerCaseCh1", "#charInput", function() {
	    			rotationEffect("#lowerCaseCh2", "#charInput", function() {
	    				rotationEffect("#lowerCaseCh3", "#charInput", function() {
	    					rotationEffect("#lowerCaseCh4", "#charInput", function() {
	    						$('#lowerLetterVowelsIntoolTip1').append("<span id='lowerCaseCh10' class='bold' style='display: inline-block;'>'"+ch+
	    								"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelsmallA'>'a'</span> "+
	    								"<span class=''>||</span> <span id='lowerCaseCh12' class='bold' style='display: inline-block;'>'"+ch+
	    								"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelsmallE'>'e'</span> "+
	    								"<span class=''>||</span> <span id='lowerCaseCh23' class='bold' style='display: inline-block;'>'"+ch+
	    								"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelsmallI'>'i'</span> "+
	    								"<span class=''>||</span> <span id='lowerCaseCh34' class='bold' style='display: inline-block;'>'"+ch+
	    								"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelsmallO'>'o'</span> "+
	    								"<span class=''>||</span>"+
			 							" <span id='lowerCaseCh45' class='bold' style='display: inline-block;'>'"+ch+
			 							"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelsmallU'>'u'</span></span>"); 
			 			    	var l = $("#lowerLetterVowelsIntoolTip").offset();
				 				$("#lowerLetterVowelsIntoolTip1").offset({"top": l.top,"left": l.left});
				 			    TweenMax.to("#lowerLetterVowelsIntoolTip1", 0.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
				 			    	rotationEffect1("#lowerCaseCh10", "#charInput", function() {
				 			    		rotationEffect2("#vowelsmallA", "97", function() {
				 			    			rotationEffect1("#lowerCaseCh12", "#charInput", function() {
				 			    				rotationEffect2("#vowelsmallE", "101", function() {
				 			    					rotationEffect1("#lowerCaseCh23", "#charInput", function() {
				 			    						rotationEffect2("#vowelsmallI", "105", function() {
				 			    							rotationEffect1("#lowerCaseCh34", "#charInput", function() {
				 			    								rotationEffect2("#vowelsmallO", "111", function() {
				 			    									rotationEffect1("#lowerCaseCh45", "#charInput", function() {
				 			    										rotationEffect2("#vowelsmallU", "117", function() {
				 			    											typing('#trueSpan', "evaluates to <b class=color-yellow>true</b>.", function() {
				 			    												$('.introjs-nextbutton, .introjs-prevbutton').show();
				 			    											});
				 			    										});
				 			    									});
																});
					 										});
														});
				 			    					});
		        						 		});
											});
										});
									});
				 			   }});	
	    					});
					 	});
    			   	});
			    });
   			});
        }});
  	});
	}

function animation2() {
	 $(".introjs-tooltip").removeClass("hide");
	typing('.introjs-tooltiptext', "<span id='upperLetterVowelsIntoolTip' class='opacity00'><span id='upperCaseCh' "+
		 "class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'A'</span> <span class=''>||</span> "+
		 "<span id='upperCaseCh1' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'E'</span> "+
		 "<span class=''>||</span> <span id='upperCaseCh2' class='bold' style='display: inline-block;'>ch</span> == "+
		 "<span class='color-yellow'>'I'</span> <span class=''>||</span> <span id='upperCaseCh3' class='bold' "+
		 "style='display: inline-block;'>ch</span> == <span class='color-yellow'>'O'</span> <span class=''>||</span>"+
		" <span id='upperCaseCh4' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'U'</span></span>"+
		"<br><span id='upperLetterVowelsIntoolTip1' ></span><br><span id='trueSpan1'></span>", function() {
		var l = $("#upperLetterVowels").offset();
		$("#upperLetterVowelsIntoolTip").offset({"top": l.top,"left": l.left});
		TweenMax.to("#upperLetterVowelsIntoolTip", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			rotationEffect("#upperCaseCh", "#charInput", function() {
				rotationEffect("#upperCaseCh1", "#charInput", function() {
					rotationEffect("#upperCaseCh2", "#charInput", function() {
						rotationEffect("#upperCaseCh3", "#charInput", function() {
							rotationEffect("#upperCaseCh4", "#charInput", function() {
								$('#upperLetterVowelsIntoolTip1').append("<span id='upperCaseCh10' class='bold' style='display: inline-block;'>'"+ch+
    								"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelUpperA'>'A'</span> "+
		 			    			"<span class=''>||</span> <span id='upperCaseCh11' class='bold' style='display: inline-block;'>'"+ch+
		 			    			"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelUpperE'>'E'</span> "+
		 			    			"<span class=''>||</span> <span id='upperCaseCh22' class='bold' style='display: inline-block;'>ch"+
		 			    			"</span> == <span class='color-yellow' style='display: inline-block;' id='vowelUpperI'>'I'</span> "+
		 			    			"<span class=''>||</span> <span id='upperCaseCh33' class='bold' style='display: inline-block;'>'"+ch+
		 			    			"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelUpperO'>'O'</span> "+
		 			    			"<span class=''>||</span>"+
		 							" <span id='upperCaseCh44' class='bold' style='display: inline-block;'>'"+ch+
		 							"'</span> == <span class='color-yellow' style='display: inline-block;' id='vowelUpperU'>'U'</span></span");
								var l = $("#upperLetterVowelsIntoolTip").offset();
								$("#upperLetterVowelsIntoolTip1").offset({"top": l.top,"left": l.left});
								TweenMax.to("#upperLetterVowelsIntoolTip1", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
									rotationEffect1("#upperCaseCh10", "#charInput", function() {
										rotationEffect2("#vowelUpperA", "65", function() {
											rotationEffect1("#upperCaseCh11", "#charInput", function() {
												rotationEffect2("#vowelUpperE", "69", function() {
													rotationEffect1("#upperCaseCh22", "#charInput", function() {
														rotationEffect2("#vowelUpperI", "73", function() {
															rotationEffect1("#upperCaseCh33", "#charInput", function() {
																rotationEffect2("#vowelUpperO", "79", function() {
																	rotationEffect1("#upperCaseCh44", "#charInput", function() {
																		rotationEffect2("#vowelUpperU", "85", function() {
																			typing('#trueSpan1', "evaluates to <b class=color-yellow>true</b>.", function() {
																				$(".introjs-tooltipbuttons").prepend("<a class='introjs-button "+
																						"userBackBtn' onclick='backStep1()'>&#8592; Back</a>");
																				$('.introjs-nextbutton').show();
			 		 	  			        								});
			 			    											});
			 			    										});
			 			    									});
				 											});
			 			    							});
			 			    						});
	        						 			});
			 			    				});
			 			    			});
			 			    		});
			 					}});
							});
    					});
    				});
				});
			});
		}});
	});
}			    	
								 			    	
         							

function animation3() {
	 $(".introjs-tooltip").removeClass("hide");
	typing('.introjs-tooltiptext', "<span id='upperLetterVowelsIntoolTip' class='opacity00'><span id='upperCaseCh' class='bold' "+
		 "style='display: inline-block;'>ch</span> == <span class='color-yellow'>'A'</span> <span class=''>||</span> "+
		 "<span id='upperCaseCh1' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>'E'"+
		 "</span> <span class=''>||</span> <span id='upperCaseCh2' class='bold' style='display: inline-block;'>ch</span> == "+
		 "<span class='color-yellow'>'I'</span> <span class=''>||</span> <span id='upperCaseCh3' class='bold' style='display: "+
		 "inline-block;'>ch</span> == <span class='color-yellow'>'O'</span> <span class=''>||</span>"+
		" <span id='upperCaseCh4' class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow'>"+
		"'U'</span></span><br><span id='upperLetterVowelsIntoolTip1' ></span><br><span id='trueSpan1'></span>", function() {
		var l = $("#upperLetterVowels").offset();
		$("#upperLetterVowelsIntoolTip").offset({"top": l.top,"left": l.left});
		TweenMax.to("#upperLetterVowelsIntoolTip", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			rotationEffect("#upperCaseCh", "#charInput", function() {
				rotationEffect("#upperCaseCh1", "#charInput", function() {
					rotationEffect("#upperCaseCh2", "#charInput", function() {
						rotationEffect("#upperCaseCh3", "#charInput", function() {
							rotationEffect("#upperCaseCh4", "#charInput", function() {
								$('#upperLetterVowelsIntoolTip1').append("<span id='upperCaseCh10' class='bold' "+
		 			    			"style='display: inline-block;'>'"+ch+"'</span> == <span class='color-yellow' "+
		 			    			"style='display: inline-block;' id='vowelUpperA'>'A'</span> <span class=''>||</span> "+
		 			    			"<span id='upperCaseCh11' class='bold' style='display: inline-block;'>'"+ch+
		 			    			"'</span> == <span class='color-yellow' style='display: inline-block;' "+
		 			    			"id='vowelUpperE'>'E'</span> <span class=''>||</span> <span id='upperCaseCh22' "+
		 			    			"class='bold' style='display: inline-block;'>ch</span> == <span class='color-yellow' "+
		 			    			"style='display: inline-block;' id='vowelUpperI'>'I'</span> <span class=''>||</span> "+
		 			    			"<span id='upperCaseCh33' class='bold' style='display: inline-block;'>"+ch+
		 			    			"</span> == <span class='color-yellow' style='display: inline-block;' "+
		 			    			"id='vowelUpperO'>'O'</span> <span class=''>||</span>"+
		 							" <span id='upperCaseCh44' class='bold' style='display: inline-block;'>'"+ch+
		 							"'</span> == <span class='color-yellow' style='display: inline-block;' "+
		 							"id='vowelUpperU'>'U'</span></span");
								var l = $("#upperLetterVowelsIntoolTip").offset();
								$("#upperLetterVowelsIntoolTip1").offset({"top": l.top,"left": l.left});
								TweenMax.to("#upperLetterVowelsIntoolTip1", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
									rotationEffect1("#upperCaseCh10", "#charInput", function() {
										rotationEffect2("#vowelUpperA", "65", function() {
											rotationEffect1("#upperCaseCh11", "#charInput", function() {
												rotationEffect2("#vowelUpperE", "69", function() {
													rotationEffect1("#upperCaseCh22", "#charInput", function() {
														rotationEffect2("#vowelUpperI", "73", function() {
															rotationEffect1("#upperCaseCh33", "#charInput", function() {
																rotationEffect2("#vowelUpperO", "79", function() {
																	rotationEffect1("#upperCaseCh44", "#charInput", function() {
																		rotationEffect2("#vowelUpperU", "85", function() {
																			typing('#trueSpan1', "evaluates to <b class=color-yellow>true</b>.", function() {
																				$('.introjs-nextbutton, .introjs-prevbutton').show();
				 		 	  			        							});
		 			    												});
																	});
		 			    										});
			 												});
		 			    								});
													});
												});
		 			    					});
		 			    				});
		 			    			}); 			  
			 			    	}});
							});
						});
					});
				});
			});							
		}});
	});
}	 			   

function rotationEffect(selector, selector2, callBackFunction) {
 t1.to(selector, 0.3, {opacity:1, rotationX: -90, onComplete: function() {
		$(selector).text('\'' +$(selector2).val() +'\'');
		t1.to(selector, 0.3, {opacity:1, rotationX: 0, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function rotationEffect1(selector, selector2, callBackFunction) {
 t1.to(selector, 0.3, {opacity:1, rotationX: -90, onComplete: function() {
		$(selector).text($(selector2).val().charCodeAt(0));
		t1.to(selector, 0.3, {opacity:1, rotationX: 0, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}
function rotationEffect2(selector, selector2, callBackFunction) {
 t1.to(selector, 0.3, {opacity:1, rotationX: -90, onComplete: function() {
		$(selector).text(selector2);
		t1.to(selector, 0.3, {opacity:1, rotationX: 0, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}    	
				 			        		
function backStep1() {
	$(".userBackBtn").remove();
	$(".introjs-nextbutton").hide();
	intro.goToStep(8);
}				 		 			        		
				




								 	  			        			
								 	  			        					
										 	  			        					
											 		 	  			        										
																			 		 		 			        
							 		 		 			        		
       								
	    	
								 			 
        						
