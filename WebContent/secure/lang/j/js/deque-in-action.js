
	var givenText;
	var tl;
	var count1;
	var count2;
	var introjs;
	var i;
	var methodCount;
	var sopCount;
	var keyCount;
	var keyLastCount;
	var firstClickAtPoll = 0;
	var firstClickAtPeek = 0;
	
	function introJsTest(stepNo){
		introjs = introJs();
		introjs.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation:false,
			steps: [
	      	  		{
		  				element: '#objectCode', 
		  				intro: "",
	  				},
	  				
	  				{
		  				element: '#offerFirstCall1', 
		  				intro: "",
	  				},
	  				
	  				{
		  				element: '#animationDiv', 
		  				intro: "",
		  				tooltipClass: "hide"
	  				},
	  				
	  				{
		  				element: '#offerStatusId1', 
		  				intro: "",
		  				tooltipClass: "hide"
	  				},
	  				
	  				{
			  			element: '#consoleId', 
		  				intro: "",
		  				tooltipClass: "hide"
	  				},
	  				
	  				{
			  			element: '#offerLastCall', 
		  				intro: "",
		  				position: "top"
	  				},
	  				
	  				{
		  				element: '#animationDiv', 
		  				intro: "",
		  				tooltipClass: "hide"
	  				},
	  				
	  				{
			  			element: '#offerStatusId2', 
		  				intro: "",
		  				tooltipClass: "hide",
	  				},
	  				
	  				{
			  			element: '#consoleId', 
		  				intro: "",
		  				tooltipClass: "hide"
	  				},
	  				
	  				{
		  				element: '#methodsGroup', 
		  				intro: "",
	  				}]
		});
		
		introjs.onafterchange(function(targetElement){
			var element = targetElement.id;
			
			switch (element) {
				case "objectCode":
					$('.introjs-nextbutton').hide();
					typing(".introjs-tooltiptext", "Let us create a <span class='ct-code-b-yellow'>Deque</span> instance of type <span class='ct-code-b-yellow'>ArrayDeque</span> which accepts elements of type <span class='ct-code-b-yellow'>String</span>.");
				break;
					
			   	case "offerFirstCall1":
			   	case "offerLastCall" :
			    	$('.introjs-nextbutton').hide();
			    	$('.introjs-helperLayer ').one('transitionend', function() {
			    		var text = $("#"+element).removeClass("visibility-hidden").html();
			    		typingForCode("#"+element, text);
			    	});
			    break;
			    
			   	case "offerStatusId1":
			    	$('.introjs-helperLayer ').one('transitionend', function() {
			    		$("#offerStatusId1").removeClass("visibility-hidden").html();
			    		typingSop("#offerStatusId1", 'System.out.println("offerStatus for <span class="ct-pink-color">'+ $("#offerElement0").text() +'</span>: " + offerStatus);');
			    	});
			    break;
				
			   	case "offerStatusId2":
			    	$('.introjs-helperLayer ').one('transitionend', function() {
			    		$("#offerStatusId2").empty();
			    		$("#offerStatusId2").removeClass("visibility-hidden");
			    		typingSop("#offerStatusId2", 'System.out.println("offerStatus for <span class="ct-pink-color">'+ $("#offerElement1").text() +'</span>: " + offerStatus);');
			    	});
			    break;
				
				case "innerCodeDiv":
					$("#offerFirstBtn").addClass("disabled");
					$("#offerLastBtn").addClass("disabled");
					$("#pollBtn").addClass("disabled");
					$("#peekBtn").addClass("disabled");
					$(".inner-code").addClass("zIndex");
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#offerFirstMethod").attr("contenteditable", false);
			        	$("#offerLastMethod").attr("contenteditable", false);
						if($("#offerFirstBtn").hasClass('click-check')) {
							var text1 = $(".inner-code").removeClass("visibility-hidden").html();
								typingStatus(".inner-code", text1);
						} else if($("#offerLastBtn").hasClass('click-check')) {
							var text2 = $(".inner-code").removeClass("visibility-hidden").html();
								typingStatus(".inner-code", text2);
						} else if($("#pollBtn").hasClass('click-check')) {
							$('.introjs-helperLayer ').one('transitionend', function() {
								$(".inner-code").empty();
								$(".inner-code").removeClass("visibility-hidden");
								if(firstClickAtPoll == 0) {
									firstClickAtPoll = -1;
									typingStatus(".inner-code", 'Object polledElement = aDeque.poll();');
								} else {
									typingStatus(".inner-code", 'polledElement = aDeque.poll();');
								}
							});
						} else if($("#peekBtn").hasClass('click-check')) {
							$('.introjs-helperLayer ').one('transitionend', function() {
								$(".inner-code").empty();
								$(".inner-code").removeClass("visibility-hidden");
								if(firstClickAtPeek == 0) {
									firstClickAtPeek = -1;
									typingStatus(".inner-code", 'Object peekedElement = aDeque.peek();');
								} else {
									typingStatus(".inner-code", 'peekedElement = aDeque.peek();');
								}
							});
						}
					});
					
				break;
				
				case "animationDiv":
					$(".edit-element").attr("contenteditable", false);
					$('.introjs-nextbutton').hide();
					$('.introjs-helperLayer ').one('transitionend', function() {
						$(".inner-code").removeClass("zIndex");
		    			$("#sopElement"+ count1).text($("#offerElement"+ count1).text());
						
						if($("#offerFirstBtn").hasClass('click-check') || count1 < 2 || $("#offerLastBtn").hasClass('click-check')) {
							if(introjs._currentStep > 10) {
								if($(".elements").length > 3) {
									$(".elements-div").css("overflow","auto");
								}
								
								if($("#offerFirstBtn").hasClass('click-check')) {
									offerFirstElement();
									var x = $(".elements").first().outerWidth();
									if($(".elements").length > 1) {
										$(".elements").css('left', -x);
									}
									$("#exitDiv").append("<span id='entryBox' class='visibility-hidden'></span>");
								} else if($("#offerLastBtn").hasClass('click-check')) {
									offerLastElement();
									if($(".elements").length > 2) {
										scrollAtAnimationLast();
									}
									$("#entryDiv").append("<span id='entryBox' class='visibility-hidden'></span>");
								}
								var len = $("#textBox" + count1).offset();
								$("#entryBox").offset({ "top": len.top });
								$("#entryBox").text($("#textBox" + count1).text());
								
								var l = $(".inner-sop").offset();
								$("#sopCodeDiv").offset({
									"top": l.top,
									"left": l.left
								}).css({
									"width": $(".inner-sop").width(),
									"height": $(".inner-sop").height()
								});
								$("#entryBox").removeClass("visibility-hidden");
							} else {
								staticBoxes();
								var x = $(".elements").first().outerWidth();
								if(count1 != 1) {
									if($(".elements").length > 1) {
										$(".elements").css('left', -x);
									}
									$("#exitDiv").append("<span id='entryBox' class='visibility-hidden'></span>");
								} else {
									$("#entryDiv").append("<span id='entryBox' class='visibility-hidden'></span>");
								}
								var len = $("#textBox" + count1).offset();
								$("#entryBox").offset({ "top": len.top });
								
								$("#entryBox").text($("#offerElement" + count1).text());
								$("#entryBox").removeClass("visibility-hidden");
							}
							
							var entryBoxOffset = $("#entryBox").offset();
							var left = len.left - entryBoxOffset.left;
							
							tl.to("#entryBox", 1.5, {opacity: 1, left: left, onComplete: function() {
								$("#textBox" + count1).removeClass("visibility-hidden");
								$("#entryBox").remove();
								var x = $(".elements").first().outerWidth();
								tl.to(".elements", 0.5, {left: 0, onComplete: function() {
									$(".introjs-tooltip").removeClass("hide");
									if(introjs._currentStep > 10) {
										typing(".introjs-tooltiptext", 'Since we are calling <span class="ct-code-b-yellow">offerFirst</span> method "<b>'+$("#textBox" + count1).text()+'</b>" has inserted at the <span class="ct-code-b-yellow">head</span> of the Deque.');
										if($(".elements").length == 1) {
											if($("#offerFirstBtn").hasClass('click-check')) {
												typing(".introjs-tooltiptext", 'The <span class="ct-code-b-yellow">offerFirst()</span> method always inserts the element at the <span class="ct-code-b-yellow">head</span> of the <span class="ct-code-b-yellow">Deque</span>.');
											} else if($("#offerLastBtn").hasClass('click-check')) {
												typing(".introjs-tooltiptext", 'Since the <span class="ct-code-b-yellow">Deque</span> is empty, the <span class="ct-code-b-yellow">offerLast()</span> method inserts the element at the <span class="ct-code-b-yellow">head</span> of the <span class="ct-code-b-yellow">Deque</span>.');
											}
										} else if($(".elements").length == 2) {
											if($("#offerFirstBtn").hasClass('click-check')) {
												typing(".introjs-tooltiptext", 'The <span class="ct-code-b-yellow">offerFirst()</span> method always inserts the element at the <span class="ct-code-b-yellow">head</span> of the <span class="ct-code-b-yellow">Deque</span>.');
											} else if($("#offerLastBtn").hasClass('click-check')) {
												typing(".introjs-tooltiptext", '<span class="ct-code-b-yellow">offerLast()</span> method always inserts the element after the <span class="ct-code-b-yellow">last</span> element of the <span class="ct-code-b-yellow">Deque</span>.');
											}
										} else if($(".elements").length > 2) {
											if($("#offerFirstBtn").hasClass('click-check')) {
												typing(".introjs-tooltiptext", 'The <span class="ct-code-b-yellow">offerFirst()</span> method always inserts the element at the <span class="ct-code-b-yellow">head</span> of the <span class="ct-code-b-yellow">Deque</span>.');
											} else if($("#offerLastBtn").hasClass('click-check')) {
												typing(".introjs-tooltiptext", 'The <span class="ct-code-b-yellow">offerLast()</span> method always inserts the element after the <span class="ct-code-b-yellow">last</span> element of the <span class="ct-code-b-yellow">Deque</span>.');
											}
										}
									} else {
										if (introjs._currentStep == 2) {
											typing(".introjs-tooltiptext", 'The <span class="ct-code-b-yellow">offerFirst()</span> method always inserts the element at the <span class="ct-code-b-yellow">head</span> of the <span class="ct-code-b-yellow">Deque</span>.');
										} else if (introjs._currentStep == 6) {
											typing(".introjs-tooltiptext", 'The <span class="ct-code-b-yellow">offerLast()</span> method always inserts the element after the <span class="ct-code-b-yellow">last</span> element of the <span class="ct-code-b-yellow">Deque</span>.');
										}
									}
									count1++;
								}});
							}});
						} else if($("#pollBtn").hasClass('click-check')) {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button poll-animation-nextbtn'>Next &#8594;</a>");
							$(".poll-animation-nextbtn").hide();
							if($(".elements").length > 0) {
								$("#exitDiv").append("<span id='exitBox' class='visibility-hidden'></span");
								$("#exitBox").text($(".elements").first().text());
								var exitLen = $(".elements").first().offset();
								$("#exitBox").offset({ "top": exitLen.top});
								var exitBoxOffset = $("#exitBox").offset();
								var exitLeft = exitLen.left - exitBoxOffset.left;
								$("#randomCode").append('\n\t\t&nbsp;&nbsp;<span class="visibility-hidden inner-sop">System.out.println("poll returned: " + polledElement); </span>');
								var l = $(".inner-sop").offset();
								$("#sopCodeDiv").offset({
									"top": l.top,
									"left": l.left
								}).css({
									"width": $(".inner-sop").width(),
									"height": $(".inner-sop").height()
								});
								
								$("#exitBox").addClass("blinking-border-background-red");
								$(".elements").first().addClass("blinking-border-background-red");
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", 'The <span class="ct-code-b-yellow">poll()</span> method <span class="ct-code-b-yellow">removes</span> the first element at the <span class="ct-code-b-yellow">head</span> of the <b>Deque</b> and returns its value.');
								
								var x = $(".elements").first().outerWidth();
								$(".poll-animation-nextbtn").click(function() {
									$(".poll-animation-nextbtn").remove();
									$("#exitBox").removeClass("visibility-hidden");
									$(".elements").first().addClass('visibility-hidden');
									tl.from("#exitBox", 1.5, {opacity: 0, left: exitLeft});
									TweenLite.to(".elements", 1.5, {delay: 1, opacity: 1, left: (-x-2), onComplete: function() {
										$(".elements-div").find("span").first().hide();
										$(".elements").css('left', 0);
										setTimeout(function() {
											introjs.nextStep();
										}, 1000)
									}});
								});
							} else {
								$("#queueDiv1").addClass('blinking-box-null-border1');
								$("#queueDiv2").addClass('blinking-box-null-border2');
								$("#randomCode").append('\n\t\t&nbsp;&nbsp;<span class="visibility-hidden inner-sop">System.out.println("poll returned: " + polledElement); </span>');
								var l = $(".inner-sop").offset();
								$("#sopCodeDiv").offset({
									"top": l.top,
									"left": l.left
								}).css({
									"width": $(".inner-sop").width(),
									"height": $(".inner-sop").height()
								});
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", 'Since there is no element in <b>Deque</b>, <span class="ct-code-b-yellow">poll()</span> method returns <span class="ct-code-b-yellow">null</span>.');
							}
							
						} else if($("#peekBtn").hasClass('click-check')) {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button peek-animation-nextbtn'>Next &#8594;</a>");
							$(".peek-animation-nextbtn").hide();
							if($(".elements").length > 0) {
								$("#exitDiv").append("<span class='extra-box visibility-hidden'>"+ $('.elements').first().text() +"</span>");
								var extraLen = $(".elements").first().offset();
								$('.extra-box').offset({top: ($('.elements').first().offset().top + 5)});
								var extraBoxOffset = $(".extra-box").offset();
								var extraLeft = extraLen.left - extraBoxOffset.left;
								$("#randomCode").append('\n\t\t&nbsp;&nbsp;<span class="visibility-hidden inner-sop">System.out.println("peek returned: " + peekedElement);</span>');
								var l = $(".inner-sop").offset();
								$("#sopCodeDiv").offset({
									"top": l.top,
									"left": l.left
								}).css({
									"width": $(".inner-sop").width(),
									"height": $(".inner-sop").height()
								});
								$(".elements").first().addClass("blinking-border-background-orange");
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", 'The <span class="ct-code-b-yellow">peek()</span> method <span class="ct-code-b-yellow">retrieves</span> the first element at the <span class="ct-code-b-yellow">head</span> of the <b>Deque</b>, and does not remove it from the Deque.');
								$(".peek-animation-nextbtn").click(function() {
									$(".peek-animation-nextbtn").remove();
									$(".elements").first().removeClass("blinking-border-background-orange");
									$(".extra-box").addClass("blinking-border-background-orange");
									$(".extra-box").removeClass("visibility-hidden");
									tl.from(".extra-box", 2.5, {opacity: 1, left: extraLeft, onComplete: function() {
										setTimeout(function() {
											introjs.nextStep();
										}, 1000)
									}});
								});
							} else {
								$("#queueDiv1").addClass('blinking-box-null-border1');
								$("#queueDiv2").addClass('blinking-box-null-border2');
								$("#randomCode").append('\n\t\t&nbsp;&nbsp;<span class="visibility-hidden inner-sop">System.out.println("peek returned: " + peekedElement);</span>');
								var l = $(".inner-sop").offset();
								$("#sopCodeDiv").offset({
									"top": l.top,
									"left": l.left
								}).css({
									"width": $(".inner-sop").width(),
									"height": $(".inner-sop").height()
								});
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", 'Since there is no element in <b>Deque</b>, <span class="ct-code-b-yellow">peek()</span> method returns <span class="ct-code-b-yellow">null</span>.');
							}
						}
					});
					
				break;
				
				case "sopCodeDiv":
					$(".inner-sop").addClass("zIndex");
					$("#queueDiv1").removeClass('blinking-box-null-border1');
					$("#queueDiv2").removeClass('blinking-box-null-border2');
					$('.introjs-helperLayer ').one('transitionend', function() {
						if($("#offerFirstBtn").hasClass('click-check')) {
							var text = $(".inner-sop").removeClass("visibility-hidden").html();
							typingSop(".inner-sop", text);
						} else if($("#offerLastBtn").hasClass('click-check')) {
							var text = $(".inner-sop").removeClass("visibility-hidden").html();
							typingSop(".inner-sop", text);
						} else if($("#pollBtn").hasClass('click-check')) {
							var text = $(".inner-sop").removeClass("visibility-hidden").html();
							typingSop(".inner-sop", text);
						} else if($("#peekBtn").hasClass('click-check')) {
							var text = $(".inner-sop").removeClass("visibility-hidden").html();
							typingSop(".inner-sop", text);
						}
					});
					
				break;
				
				case "methodsGroup":
					$(".inner-sop").removeClass("inner-sop");
					$(".inner-code").removeClass("inner-code");
					$('.introjs-nextbutton').hide();
					$('.introjs-helperLayer ').one('transitionend', function() {
						if(introjs._currentStep == 9) {
							typingForMethods(".introjs-tooltiptext", 
									"Now you can call any method by clicking on the respective <span class='go-button-duplicate'>Go</span>"
									+ " button.<br><b>Note:</b> To call the <span class = 'ct-code-b-yellow'>offerFirst()</span> or <span class = 'ct-code-b-yellow'>offerLast()</span>"
									+ " methods, enter some text and click on its <span class='go-button-duplicate'>Go</span> button.");
						} else {
							$("#offerFirstMethod").attr("contenteditable", true);
				        	$("#offerLastMethod").attr("contenteditable", true);
				        	$("#pollBtn").removeClass("disabled");
							$("#peekBtn").removeClass("disabled");
						}
						
					});
					
				break;
				
				case "consoleId":
					$('.introjs-nextbutton').hide();
					$("#runEditor").append('<span class="run-output" id="runEditor'+ i +'"></span>\n');
					$('.introjs-helperLayer ').one('transitionend', function() {
						$(".inner-sop").removeClass("zIndex");
						if($("#offerFirstBtn").hasClass('click-check')) {
							$("#offerFirstBtn").removeClass('click-check');
							typingOutput('#runEditor'+ i, "offerStatus for <span class='ct-code-b-yellow'>"+ $('#offerFirstMethod').text() +"</span>: <span class='ct-code-b-green'>true</span>");
						} else if($("#offerLastBtn").hasClass('click-check')) {
							$("#offerLastBtn").removeClass('click-check');
							typingOutput('#runEditor'+ i, "offerStatus for <span class='ct-code-b-yellow'>"+ $('#offerLastMethod').text() +"</span>: <span class='ct-code-b-green'>true</span>");
						} else if($("#pollBtn").hasClass('click-check')) {
							$("#pollBtn").removeClass('click-check');
							if($(".elements").length > 0) {
								typingOutput('#runEditor'+ i, "poll returned: <span class='ct-code-b-green'>"+ $('.elements').first().text() +"</span>");
								$(".elements-div > span").first().remove();
							} else {
								typingOutput('#runEditor'+ i, "poll returned: <span class='ct-code-b-red'>null</span>");
							}
						} else if($("#peekBtn").hasClass('click-check')) {
							$("#peekBtn").removeClass('click-check');
							if($(".elements").length > 0) {
								typingOutput('#runEditor'+ i, "peek returned: <span class='ct-code-b-green'>"+ $('.elements').first().text() +"</span>");
							} else {
								typingOutput('#runEditor'+ i, "peek returned: <span class='ct-code-b-red'>null</span>");
							}
						} else {
							typingOutput('#runEditor'+ i, "offerStatus for <span class='ct-code-b-yellow'>"+ $('#textBox'+ i).first().text() +"</span>: <span class='ct-code-b-green'>true</span>");
						}
						i++;
					});
				break;
			} 
		});
		
		introjs.goToStep(stepNo).start();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.poll-animation-nextbtn').hide();
		$('.peek-animation-nextbtn').hide();
	}

var dequeInActionReady = function() {

	$("#offerMethod").attr("contenteditable", false);
	tl = new TimelineLite();
	givenText = $("#offerMethod").text();
	introJsTest(1);
	methodCount = 0;
	sopCount = 0;
	i = 0;
	count1 = 0;
	
	$('body').keydown(function(e) {
		if(e.which == 13) {
			e.preventDefault();
		}	
	});
	
	$(".entered-element").keydown(function(e) { 
			var max = $(this).attr("maxlength");
			if(e.which == 13 || e.which == 222) {
				e.preventDefault();
			}	
			if ($(this).text().length > max) {
				if(e.which == 8 || e.which == 46){
		   			return true;	
				}
   			e.preventDefault();
		 	}
    });
	
	$("#offerFirstMethod").keyup(function() {
		$("#offerFirstBtn").removeClass("disabled");
		if ($("#offerFirstMethod").text().length > 0 && $("#offerFirstMethod").text().length < 9) {
        	$('.error-text').empty();
        	$('.length-error-text').empty();
        	$("#offerFirstBtn").removeClass("disabled");
        } else if($("#offerFirstMethod").text().length >= 9) {
        	$('.error-text').empty();
        	$('.length-error-text').empty();
        	$("#offerFirstBtn").removeClass("disabled");
        	$(".introjs-tooltiptext").append("<span class='ct-code-b-red length-error-text'><br/>Please limit the String's length to 9 characters.</span>");
        } else {
        	$('.error-text').remove();
        	$('.length-error-text').remove();
        	$("#offerFirstBtn").addClass("disabled");
        	$(".introjs-tooltiptext").append("<span class='ct-code-b-red error-text'><br/>Please enter some text</span>");
        }
	});
	
	$("#offerLastMethod").keyup(function() {
		$("#offerLastBtn").removeClass("disabled");
		if ($("#offerLastMethod").text().length > 0 && $("#offerLastMethod").text().length < 9) {
        	$('.error-text').empty();
        	$('.length-error-text').empty();
        	$("#offerLastBtn").removeClass("disabled");
        } else if($("#offerLastMethod").text().length >= 9) {
        	$('.error-text').empty();
        	$('.length-error-text').empty();
        	$("#offerLastBtn").removeClass("disabled");
        	$(".introjs-tooltiptext").append("<span class='ct-code-b-red length-error-text'><br/>Please limit the String's length to 9 characters.</span>");
        } else {
        	$('.error-text').remove();
        	$('.length-error-text').remove();
        	$("#offerLastBtn").addClass("disabled");
        	$(".introjs-tooltiptext").append("<span class='ct-code-b-red error-text'><br/>Please enter some text</span>");
        }
	});
	
	$("#offerFirstBtn").click(function() {
		if($(this).hasClass('disabled')) {
			return;
		}
		if($(".elements").length > 2) {
			scrollAtAnimationFirst();
		}
		$("#offerLastMethod").empty();
		$("#offerFirstBtn").addClass('disabled');
		$("#offerFirstBtn").addClass("click-check");
		$("#randomCode").append('\n\t\t&nbsp;&nbsp;<span class="visibility-hidden inner-code">offerStatus = aDeque.offerFirst("<span class="ct-pink-color">'+ $("#offerFirstMethod").text() +'</span>");</span>');
		$("#randomCode").append('\n\t\t&nbsp;&nbsp;<span class="visibility-hidden inner-sop">System.out.println("offerStatus for <span class="ct-pink-color">'+$("#offerFirstMethod").text()+'</span>: " + offerStatus);</span>');
		dynamicSteps();
		scrollToBottom();
	});
	
	$("#offerLastBtn").click(function() {
		if($(this).hasClass('disabled')) {
			return;
		}
		$("#offerFirstMethod").empty();
		$("#offerLastBtn").addClass('disabled');
		$("#offerLastBtn").addClass("click-check");
		$("#randomCode").append('\n\t\t&nbsp;&nbsp;<span class="visibility-hidden inner-code">offerStatus = aDeque.offerLast("<span class="ct-pink-color">'+ $("#offerLastMethod").text() +'</span>");</span>');
		$("#randomCode").append('\n\t\t&nbsp;&nbsp;<span class="visibility-hidden inner-sop">System.out.println("offerStatus for <span class="ct-pink-color">'+$("#offerLastMethod").text()+'</span>: " + offerStatus);</span>');
		dynamicSteps();
		scrollToBottom();
	});
	
	$("#pollBtn").click(function() {
		if($(this).hasClass('disabled')) {
			return;
		} 
		$("#offerFirstMethod").empty();
       	$("#offerLastMethod").empty();
       	
       	if($(".elements").length > 2) {
			scrollAtAnimationFirst();
		}
		
		$("#pollBtn").addClass("click-check");
		if(firstClickAtPoll == 0) {
			$("#randomCode").append('\n\t\t&nbsp;&nbsp;<span class="visibility-hidden inner-code">Object polledElement = aDeque.poll();</span>');
		} else {
			$("#randomCode").append('\n\t\t&nbsp;&nbsp;<span class="visibility-hidden inner-code"> polledElement = aDeque.poll();</span>');
		}
		dynamicSteps();
		scrollToBottom();
	});
	
	$("#peekBtn").click(function() {
		if($(this).hasClass('disabled')) {
			return;
		}
		
		if($(".elements").length > 2) {
			scrollAtAnimationFirst();
		}
		
		$("#offerFirstMethod").empty();
       	$("#offerLastMethod").empty();
		$("#peekBtn").addClass("click-check");
		if(firstClickAtPeek == 0) {
			$("#randomCode").append('\n\t\t&nbsp;&nbsp;<span class="visibility-hidden inner-code">Object peekedElement = aDeque.peek();</span>');
		} else {
			$("#randomCode").append('\n\t\t&nbsp;&nbsp;<span class="visibility-hidden inner-code">peekedElement = aDeque.peek();</span>');
		}
		dynamicSteps();
		scrollToBottom();
	});
}

count2 = 0;
function offerFirstElement() {	
	$(".elements-div").prepend("<span id='textBox"+count2+"' class ='elements visibility-hidden'>"+$("#offerFirstMethod").text()+"</span>\n");
	count2++;
}

function offerLastElement() {	
	$(".elements-div").append("<span id='textBox"+count2+"' class ='elements visibility-hidden'>"+$("#offerLastMethod").text()+"</span>\n");
	count2++;
}

function staticBoxes() {	
	if(count2 < 2) {
		if(count2 == 1) {
			$(".elements-div").append("<span id='textBox"+count2+"' class ='click-check elements visibility-hidden'>"+$("#offerElement" + count2).text()+"</span>\n");
			count2++;
		} else {
			$(".elements-div").prepend("<span id='textBox"+count2+"' class ='click-check elements visibility-hidden'>"+$("#offerElement" + count2).text()+"</span>\n");
			count2++;
		}
	}
}

function typingOutput(id, content) {
	scrollAtOutput();
    $(id).typewriting( content , {
          "typing_interval": 20,
          "cursor_color": 'white'
     }, function() {	    
    	$(id).removeClass('typingCursor');
    	$("#offerFirstMethod").empty();
       	$("#offerLastMethod").empty();
       	$("#exitBox").fadeOut(1000);
		$(".extra-box").fadeOut(1000);
   	 	setTimeout(function() {
       		$("#exitBox").remove();
			$(".extra-box").remove();
       	 	introjs.nextStep();
       	 }, 1000);
    }); 
}

function typing(id, content) {
	$(".edit-element").attr("contenteditable", false);
    $(id).typewriting( content , {
          "typing_interval": 5,
          "cursor_color": 'white',    
      }, function() {
    	  if($("#offerFirstBtn").hasClass("click-check")) {
    		  $('.introjs-nextbutton').show();
    	  } else if($("#offerLastBtn").hasClass("click-check")) {
    		  $('.introjs-nextbutton').show();
    	  } else if($("#pollBtn").hasClass("click-check")) {
    		  if($(".elements").length > 0) {
    			$('.introjs-nextbutton').hide();
      		  	$(".poll-animation-nextbtn").show();
      		  } else {
      			$('.introjs-nextbutton').show();
      		  }
    	  } else if($("#peekBtn").hasClass("click-check")) {
    		  if($(".elements").length > 0) {
    			$('.introjs-nextbutton').hide();
        		$(".peek-animation-nextbtn").show();
        	  } else {
        		$('.introjs-nextbutton').show();
        	  }
    	  } else {
    		  $('.introjs-nextbutton').show();
    	  }
      }); 
	}

keyCount = -1;
function typingTooltip(id, content) {
	keyCount++;
	$(".edit-element").attr("contenteditable", false);
    $(id).typewriting( content , {
          "typing_interval": 5,
          "cursor_color": 'white',    
      }, function() {
    	  	$("#offerElement" + keyCount).attr("contenteditable", true);
			charAtEnd(document.getElementById("offerElement"+ keyCount));
    	 	$(id).removeClass('typingCursor');
    	 	$(".edit-element").keydown(function(e) { 
       			var max = $(this).attr("maxlength");
       			if(e.which == 13 || e.which == 222) {
       				e.preventDefault();
       			}	
       			if ($(this).text().length > max) {
       				if(e.which == 8 || e.which == 46){
       		   			return true;	
       				}
           			e.preventDefault();
      		 	}
    	    });
    	 	
    		$("#offerElement0").keyup(function() {
    			introjs.refresh();
    	        $(".tooltip-text-edit").text($("#offerElement0").text());
    	        if ($("#offerElement0").text().length > 0 && $("#offerElement0").text().length < 9) {
    	        	$('.error-text').empty();
    	        	$('.length-error-text').empty();
    	        	$(".introjs-nextbutton").show();
    	        } else if($("#offerElement0").text().length >= 9) {
    	        	$('.error-text').empty();
    	        	$('.length-error-text').empty();
    	        	$(".introjs-nextbutton").show();
    	        	$(".introjs-tooltiptext").append("<span class='ct-code-b-red length-error-text'><br/>Please limit the String's length to 9 characters.</span>");
    	        } else {
    	        	$('.error-text').empty();
    	        	$('.length-error-text').empty();
    	        	$(".introjs-nextbutton").hide();
    	        	$(".introjs-tooltiptext").append("<span class='ct-code-b-red error-text'><br/>Please enter some text</span>");
    	        }
    	    });
    	 	
    	 	$("#offerElement1").keyup(function() {
    			introjs.refresh();
    	        $(".tooltip-text-edit").text($("#offerElement1").text());
    	        if ($("#offerElement1").text().length > 0 && $("#offerElement1").text().length < 9) {
    	        	$('.error-text').remove();
    	        	$('.length-error-text').remove();
    	        	$(".introjs-nextbutton").show();
    	        } else if($("#offerElement1").text().length >= 9) {
    	        	$('.error-text').remove();
    	        	$('.length-error-text').remove();
    	        	$(".introjs-nextbutton").show();
    	        	$(".introjs-tooltiptext").append("<span class='ct-code-b-red length-error-text'><br/>Please limit the String's length to 9 characters.</span>");
    	        } else {
    	        	$('.error-text').remove();
    	        	$('.length-error-text').remove();
    	        	$(".introjs-nextbutton").hide();
    	        	$(".introjs-tooltiptext").append("<span class='ct-code-b-red error-text'><br/>Please enter some text</span>");
    	        }
    	    });
    	 	
    	 	$('.introjs-nextbutton').show();
      }); 
	}

function typingSop(id, content) {
    $(id).typewriting( content , {
          "typing_interval": 5,
          "cursor_color": 'white'
     }, function() {	    
    	 $(id).removeClass('typingCursor');
    	 $(".introjs-nextbutton").hide();
     	$(".introjs-tooltip").removeClass("hide");
     	if($("#offerFirstBtn").hasClass("click-check")) {
     		typingForCode(".introjs-tooltiptext", 'Since the element was inserted successfully, <span class="ct-code-b-yellow">offerFirst()</span> method returns <span class="ct-code-b-yellow">true</span>.');
     	} else if($("#offerLastBtn").hasClass("click-check")) {
     		typingForCode(".introjs-tooltiptext", 'Since the element was inserted successfully, <span class="ct-code-b-yellow">offerLast()</span> method returns <span class="ct-code-b-yellow">true</span>.');
     	} else if($("#pollBtn").hasClass("click-check")) {
     		if($(".elements").length > 0) {
     			typingForCode(".introjs-tooltiptext", 'This statement prints <span class="ct-code-b-yellow">' + $('.elements').first().text() + '</span>.');
     		} else {
     			typingForCode(".introjs-tooltiptext", 'Since there are no elements in the <b>Deque</b>, <span class="ct-code-b-yellow">poll()</span> method returns <span class="ct-code-b-yellow">null</span>.');
     		}
     	} else if($("#peekBtn").hasClass("click-check")) {
     		if($(".elements").length > 0) {
     			typingForCode(".introjs-tooltiptext", 'This statement prints <span class="ct-code-b-yellow">' + $('.elements').first().text() + '</span>.');
     		} else {
     			typingForCode(".introjs-tooltiptext", 'Since there are no elements in the <b>Deque</b>, <span class="ct-code-b-yellow">peek()</span> method returns <span class="ct-code-b-yellow">null</span>.');
     		}
     	} else {
     		if(introjs._currentStep == 7) {
     			typingForCode(".introjs-tooltiptext", 'Since the element was inserted successfully, <span class="ct-code-b-yellow">offerLast()</span> method returns <span class="ct-code-b-yellow">true</span>.');
     		} else {
     			typingForCode(".introjs-tooltiptext", 'Since the element was inserted successfully, <span class="ct-code-b-yellow">offerFirst()</span> method returns <span class="ct-code-b-yellow">true</span>.');
     		}
     	}
    });
}

function typingStatus(id, content) {
    $(id).typewriting( content , {
          "typing_interval": 5,
          "cursor_color": 'white'
     }, function() {	    
    	 $(id).removeClass('typingCursor');
    	 $(".introjs-nextbutton").hide();
    	 $(".introjs-tooltip").removeClass("hide");
    	 if($("#offerFirstBtn").hasClass("click-check")) {
    		 typingForCode(".introjs-tooltiptext", 'This statement inserts the value '+
    				 '<span class="ct-code-b-yellow">'+ $("#offerFirstMethod").text() +'</span> '+
    				 'into the <span class="ct-code-b-yellow">Deque</span> and stores the return value in '+
    				 '<span class="ct-code-b-yellow">offerStatus</span>.');
    	 } else if($("#offerLastBtn").hasClass("click-check")) {
    		 typingForCode(".introjs-tooltiptext", 'This statement inserts the value '+
    				 '<span class="ct-code-b-yellow">'+ $("#offerLastMethod").text() +'</span> '+
    				 'into the <span class="ct-code-b-yellow">Deque</span> and stores the return value in '+
    				 '<span class="ct-code-b-yellow">offerStatus</span>.');
    	 } else if($("#pollBtn").hasClass("click-check")) {
    		 typingForCode(".introjs-tooltiptext", 
    				 'The value returned by <span class="ct-code-b-yellow">poll()</span> method is stored in a variable called'
    				 + ' <span class="ct-code-b-yellow">polledElement</span>.');
    	 } else if($("#peekBtn").hasClass("click-check")) {
    		 typingForCode(".introjs-tooltiptext", 
    				 'The value returned by <span class="ct-code-b-yellow">peek()</span> method is stored in a variable called'
    				 + ' <span class="ct-code-b-yellow">peekedElement</span>.');
    	 }
     });
}

function typingForMethods(id, content) {
    $(id).typewriting( content , {
          "typing_interval": 5,
          "cursor_color": 'white',    
          
      }, function() {
    	  $(id).removeClass('typingCursor');
    	  $("#offerFirstMethod").attr("contenteditable", true);
    	  $("#offerLastMethod").attr("contenteditable", true);
    	  $("#pollBtn").removeClass("disabled");
		  $("#peekBtn").removeClass("disabled");
      }); 
	}

function scrollToBottom() {
	var container = $('#javaCodePre');
	scrollTo = $('#javaCodePre').find("span").last();
	container.animate({
	   scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
	}, function() {
		var l = $(".inner-code").offset();
		$("#innerCodeDiv").offset({
			"top": l.top,
			"left": l.left
		}).css({
			"width": $(".inner-code").width(), 
			"height": $(".inner-code").height()
		});
		introjs.nextStep();
	});
}

function scrollAtOutput() {
	var container = $('.output-console-body');
	scrollTo = $('.output-console-body').find("span").last();
	container.animate({
	   scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
	});
}

function scrollAtAnimationLast() {
	var container = $('.elements-div');
	scrollTo = $('.elements-div > span:last-child');
	container.animate({
	   scrollLeft: scrollTo.offset().left - container.offset().left  + container.scrollLeft()
	});
}

function scrollAtAnimationFirst() {
	var container = $('.elements-div');
	scrollTo = $('.elements-div').find("span").first();
	container.animate({
	   scrollLeft: ((scrollTo.offset().left) - 10) - container.offset().left  + container.scrollLeft()
	});
}

function typingForCode(id, content) {
    $(id).typewriting( content , {
          "typing_interval": 5,
          "cursor_color": 'white',    
          
      }, function() {
    	  $(id).removeClass('typingCursor');
    	  if(introjs._currentStep == 1) {
    		  typingTooltip(".introjs-tooltiptext", 'Here we are inserting a String element called "<span class="tooltip-text-edit ct-code-b-yellow">'+ $("#offerElement0").text() +'</span>" into the <span class="ct-code-b-yellow">Deque</span> instance by calling the <span class = "ct-code-b-yellow">offerFirst()</span> method.<br/>You can also change the value.<br/>The value returned by <span class="ct-code-b-yellow">offerFirst()</span> method is stored in a variable called <span class="ct-code-b-yellow">offerStatus</span>.');
    	  } else if(introjs._currentStep == 5) {
    		  typingTooltip(".introjs-tooltiptext", 'Here we are inserting a String element called "<span class="tooltip-text-edit ct-code-b-yellow">'+ $("#offerElement1").text() +'</span>" into the <span class="ct-code-b-yellow">Deque</span> instance by calling the <span class = "ct-code-b-yellow">offerLast()</span> method.<br/>You can also change the value.<br/>The value returned by <span class="ct-code-b-yellow">offerLast()</span> method is stored in a variable called <span class="ct-code-b-yellow">offerStatus</span>.');
    	  } else {
    		  $(".introjs-nextbutton").show();
    	  }
      }); 
	}

function charAtEnd(element) {
	element.focus();
	if (typeof window.getSelection != "undefined"&& typeof document.createRange != "undefined") {
	    var range = document.createRange();
	    range.selectNodeContents(element);
	    range.collapse(false);
	    
	    var sel = window.getSelection();
	    sel.removeAllRanges();
	    sel.addRange(range);
	}    	   
}

function dynamicSteps() {
	var dynamicStep = {
			"element" : "#innerCodeDiv",
			"tooltipClass" : "hide",
			"position": "top",
	}
	introjs.insertOption(introjs._currentStep + 1, dynamicStep);
	
	var dynamicStep = {
			"element" : "#animationDiv",
			"tooltipClass" : "hide",
	}
	introjs.insertOption(introjs._currentStep + 2, dynamicStep);
	
	var dynamicStep = {
			"element" : "#sopCodeDiv",
			"tooltipClass" : "hide",
	}
	introjs.insertOption(introjs._currentStep + 3, dynamicStep);
	
	var dynamicStep = {
			"element" : "#consoleId",
			"tooltipClass" : "hide",
	}
	introjs.insertOption(introjs._currentStep + 4, dynamicStep);
	
	var dynamicStep = {
			"element" : "#methodsGroup",
			"tooltipClass" : "hide",
	}
	introjs.insertOption(introjs._currentStep + 5, dynamicStep);
}