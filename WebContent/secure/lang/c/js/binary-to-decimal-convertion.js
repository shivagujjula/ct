var intro;
var l;
var x;



var binaryToDecimalConvetionReady = function()	{
	intro = introJs();
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
			}
	 });
	
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
						element :'#informationDiv',
						intro :'',
						tooltipClass:"hide",
						position:"bottom"
					},{
						element :'#numberconversion',
						intro :'',
						position:"right"
					},{
						element :'#inputDiv',
						intro :'',
						position:"right"
					  },{
						element :'#calculationtable',
						intro :'',
						tooltipClass: "hide",
						position:"right" 
					}, {
						element :'#binary',
						intro :'',
						position:"right"  
					}, {
						element :'#positionDiv',
						intro :'',
						position:"right"
					}, {
						element :'#power',
						intro :'',
						position:"right"
					}, {
						element :'#powecalculation',
						intro :'',
						position:"right"				
					}, {
						element :'#multiply',
						intro :'',
						position:"right"
					}, {
						element :'#multiplytwonos',
						intro :'',
						position:"right"	
					}, {
						element :'#adding',
						intro :'',
						position:"right"	
					}, {
						element :'#restartBtn',
						intro :'',
						position:"right"
					 }]
				});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "informationDiv" :
			break;
		case "numberconversion":
			$('.introjs-nextbutton').hide();
			$('.user-btn').remove();
			$("#binarylValue").attr("disabled", true);
			$("#totalbox").removeClass("visibility-hidden");
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Binary representation of (<span class='ct-code-b-yellow'>11100100</span>)<sub>2</sub> .", function() {
					$('.introjs-nextbutton').show();
					});
				});
			break;
		case "inputDiv":
			$('.introjs-nextbutton').hide();
			$("#inputDiv").removeClass("visibility-hidden");
			$(".introjs-helperLayer").one("transitionend",  function() {
			$('.introjs-nextbutton').hide();
				typing('.introjs-tooltiptext', "Provide a binary number and click on <span class='convert'>Convert to Decimal</span> button to understand how a binary number converted to decimal.<br>"+
									"<span class='ct-code-b-yellow'>Note:</span> Enter a value of maximum length 8.<br><span class='errorText'></span>", function() {
					$("#binarylValue").attr("disabled", false);	
					$("#binarylValue").focus();
					});
				});
			break;
	 	case "calculationtable":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#calculationtable").removeClass("visibility-hidden");
					typing('.introjs-tooltiptext', "Let us consider the binary value.", function() {
						setTimeout(function(){
							intro.nextStep();
							}, 300);
						});
					})
			break;	 
		case "binary":
			$('.introjs-nextbutton').hide();
			intro.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
			$("#firstbox").removeClass("visibility-hidden");
				$(".box").removeClass("opacity00");	
				var l = $("#binarylValue").offset();
				$(".box").offset({"top": l.top,"left": l.left});
       				TweenMax.to(".box", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() { 
						typing('.introjs-tooltiptext', "This is the given binary value.", function() {
						$('.introjs-nextbutton').show();
						}); 
					}});
		 		})
			break;
		case "positionDiv":
			$('.introjs-nextbutton').hide();
			intro.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#positionBox").removeClass("visibility-hidden");
				TweenMax.staggerFrom(".box5", 0.1, {opacity:0, top: -60}, -0.3, function() {
					typing('.introjs-tooltiptext', "These are the positions for the given bits.", function() {
					$('.introjs-nextbutton').show();
						}); 
					});
		 		})
			break; 
		case "power":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typing('.introjs-tooltiptext', "These are the multiplying factors for the given positions.", function() {
					//$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					//$('.user-btn').click(function() {
						//$('.user-btn').remove();
						$("#secondbox").removeClass("visibility-hidden");
						TweenMax.staggerFrom(".box2", 0.3, {opacity:0, top: -60}, -0.3, function() {
							$('.introjs-nextbutton').show();
							//}); 
						});
					});
			 	})
			break;
		case "powecalculation":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#thirdbox").removeClass("visibility-hidden");
				 typing('.introjs-tooltiptext', "Processing should start from right to left i.e from  <span class='ct-code-b-yellow'>2<sup>0</sup></span>.", function() {
						calculate(function() {
							 	$('.introjs-nextbutton').show();
						});
					});
			 	})
			break;
		case "multiply":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
		 		typing('.introjs-tooltiptext', "Multiplying with powers.", function() {
		 			flipingSpeed = 0.5;
		 			count = 0;
			 		power(function() {
			 			console.log("poewerfunction");
			 	 		$('.introjs-nextbutton').show();
			 	 		});
		 			});
		 		})
			break;
		case "multiplytwonos":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				 if (l > 0) {
		 	 		typing('.introjs-tooltiptext', "By <span class='ct-code-b-yellow'>adding</span> all the decimal number values together from <span class='ct-code-b-yellow'>right</span> to <span class='ct-code-b-yellow'>left</span> we get the resultant <span class='ct-code-b-yellow'>decimal number</span>.", function() {
		 	 			flipingSpeed = 0.5;
			 			count = 0;
		 	 			poweradd(function() {
			 				$('.introjs-nextbutton').show();
		 				});
			 		});
				 } else {
					 typing('.introjs-tooltiptext', "By adding all the decimal number values together from right to left we get the resultant decimal number.", function() {
						var l6 = $("#multiplytotal0").offset();
					    $("#multiplytwo0").offset({"top": l6.top,"left": l6.left});
					 	$("#multiplytwo0").removeClass("opacity00");
					 	$("#multiplytotal0").effect('highlight',  {color: "#F08080"}, 1000);
						TweenMax.to("#multiplytwo0", 1.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
				 			}});
							});	
							$('.introjs-nextbutton').show();
					 }
				 })
			break;
		case "adding":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = $('#adding').text();
				text.substring(1, text.length-5);
				typing('.introjs-tooltiptext', "Hence,<br><span class='ct-code-b-yellow'>("+ $('#binarylValue').val() + ")<sub>(2)</sub></span>" + "= <span class='ct-code-b-yellow'>" +  $('#adding').html()  + "</span><br> or simply <span class='ct-code-b-yellow'> " + text.substring(1, text.length-5) + "</span>.", function() {
					addition(function() {
						$('.introjs-nextbutton').show();
						});
					})
				});
			break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend",  function() {
			$("#restartBtn").removeClass("opacity00");
			$('.introjs-nextbutton').hide();
			typing('.introjs-tooltiptext', "Click to restart", function() {
				});
				$('.introjs-nextbutton').hide();
				$('#binarylValue').val("");
				});
			break;
			}
		}); 
		intro.start();
   		$('.introjs-skipbutton').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-nextbutton').hide();
		   $('.text').html ("<li id='list1' class='opacity00'>Conversion of binary to decimal (<span class='ct-demo-green'>base-2 to base-10</span>) numbers is an important "+
				"concept to understand. The binary numbering system forms the basis for all "+
				"computer and digital systems.</li>"+
				"<li id='list2' class='opacity00'> A binary number for (<span class='ct-demo-green'>11100100</span>)<sub>2</sub> is considered or read from right most bit to left most bit.</li>"+
				"<li id='list3' class='opacity00'>In binary numbering system, right most bit is considered as <b class='ct-demo-green z-index'>LSB</b> (least significant bit) and the left most"+
				" bit is considered as <b class='ct-demo-green z-index'>MSB</b> (most significant bit)."+
				"<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></li>");
			   setTimeout(function () {
					$("#list1").fadeTo(300, 1, function() {
						$("#list2").fadeTo(300, 1, function() {
							$("#list3").fadeTo(300, 1, function() {
								$(".text").addClass('z-index9999999');
									$('#nextButton').removeClass("opacity00");
									$('.user-btn').click(function() {
										setTimeout(function(){
											intro.nextStep();
											}, 500);
									});
							});
						});
				})}, 1000);  
		$("#binarylValue").keydown(function(e) {
		if (e.which == 46 || e.which == 48 || e.which == 8 || e.which == 49 || e.which == 96 || e.which == 97 ) {
			return true;
		} else {
			e.preventDefault();
			}
		});
	
	$("#convert").click(function() {
		if ($('#convert').hasClass('disabled')) {
			return;
		}
		$('.introjs-nextbutton').click();
		l = $("#binarylValue").val();
		 x = l.length - 1;
		for (var i=0; i<l.length; i++) {
			$("#binary").append("<span id= a"+i+ " class='box  text-center ct-code-b-black opacity00'><span id= b"+ i +">"+ l[i] +"</span></span>");
		}
		
		for (var i = l.length - 1, j=0; i >= 0; i--, j++) {
			$("#power").append("<span class='box2  text-center ct-code-b-black'>" +
								"<span id= powervalues" +i+ ">" + 2 +"<sup class='ct-code-b-green'>"+ i +"</sup></span></span>");
			$("#positionDiv").append("<span class='box5  text-center ct-code-b-green'>" +
					"<span 'ct-code-b-green'>"+ i +"</span></span>");
			
			if (i > 0) {
				$("#powecalculation").append("<span id = 'overall"+i+"'><span id = 'bracket" + i +"' class = 'bracket opacity00'>(</span>"+ 
						"<span id = 'total" + i + "' class='total'>"+ 
						"<span id= c"+j+ " class='ct-code-b-black opacity00'>"+ l[j] +"</span>"+
						"<b id = 'ct-code-b-red" + i +"'class='ct-code-b-red opacity00'> x </b></span> "+ 
						"<span id = 'powerv" + i + "' class= 'ct-code-b-black opacity00'>" + 2 +"<sup class='ct-code-b-green'>"+ i +"</sup></span>" +
						"<span id = 'bracket2" + i +"'  class = 'bracket opacity00'>)</span></span><span id = 'plus" + i + "' class = 'plus opacity00'> + </span>");
	        } else {
	        	$("#powecalculation").append("<span id = 'overall" + i +"'><span id = 'bracket" + i +"' class = 'bracket opacity00'>(</span>" + 
	        			"<span id = 'total" + i +"' class = 'total'><span id= c"+j+ " class='ct-code-b-black opacity00'>"+ l[j] +"</span>" +
	        			"<b id = 'ct-code-b-red" + i +"' class='ct-code-b-red opacity00'> x </b></span> "+ 
	        			"<span id='powerv" + i +"' class='ct-code-b-black opacity00'>" + 2 +"<sup class='ct-code-b-green'>"+ i +"</sup></span>" +
	        			"<span id = 'bracket2" + i +"'class = 'bracket opacity00'>)</span></span>");
	        			
	        }
		}
		
		for (var i = l.length - 1, j=0; i >= 0; i--, j++) {
			var result = Math.pow(2, i);
			console.log(result);
			if (i > 0) {
				$("#multiply").append("<span id = 'multiplytotal" + i + "'class = multiplytotal'><span id = 'bracket3" + i + "' class = 'bracket3 opacity00'>(</span><span class= 'onemultiply opacity00' id = 'onemultiply" + i + "'><span id= c"+j+ " class='ct-code-b-black'>"+ l[j] +"</span><span class='box1 text-center' ><b class='ct-code-b-red into' > x </b></span></span>" +
						"<span id = 'd" + i + "'class = 'result opacity00'>" + result + "</span><span id = 'bracket4" + i + "' class = 'bracket4 opacity00'>)</span></span><span id = 'plus1" + i + "' class = 'plus1 opacity00'>  + </span>");
	       	} else {
	       		$("#multiply").append("<span id = 'multiplytotal" + i + "'class = multiplytotal'><span id = 'bracket3"+ i +"' class = 'bracket3 opacity00'>(</span><span class= 'onemultiply opacity00' id = 'onemultiply" + i + "'><span id= c"+j+ " class='ct-code-b-black'>"+ l[j] +"</span><span class='box1 text-center' ><b class='ct-code-b-red into' > x </b></span></span>" +
						"<span id = 'd" + i + "'class = 'result opacity00'>" + result + "</span><span id = 'bracket4"+ i +"' class = 'bracket4 opacity00'>)</span></span>");
			}
		}
		for (var i = l.length - 1, j=0; i >= 0; i--, j++) {
			var result = Math.pow(2, i);
			var multiply = l[j] * result;
 			if (i > 0) {
 				$("#multiplytwonos").append("<span id = 'multiplytwo" + i + "' class = 'multiplytwo opacity00'>(<span class='box1 text-center ct-code-b-black' id = m" + i + ">"+multiply+"</span>)</span></span><span id = 'plus2" + i +"'class = 'plus2 opacity00'>  + </span>");		
 				
 			} else {
 				$("#multiplytwonos").append("<span id = 'multiplytwo" + i + "' class = 'multiplytwo opacity00'>(<span class='box1 text-center ct-code-b-black' id = m" + i + ">"+multiply+"</span>)</span></span>");
 			}
		}
			var sum = 0;
		for (var i = l.length - 1, j=0; i >= 0; i--, j++) {
			var result = Math.pow(2, i);
			var multiply = l[j] * result;
			sum = sum + multiply;
			if (i == 0) {
				$("#adding").append("<span><span class='box1 text-center ' id = r" + i + ">("+sum+")<sub>(<span class=''id='radix'>" +10 +"</span>)</sub></span></span>");
				}
			}
		});

	$("#binarylValue").keyup(function() {
		var yourInput = $(this).val();
		re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
		var isSplChar = re.test(yourInput);
		if(isSplChar) {
			var no_spl_char = yourInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
			$(this).val(no_spl_char);
		}
		if ($("#binarylValue").val().length > 0) {
			$("#convert").removeClass("disabled").removeClass("opacity40");
			$("#binarylValue").removeClass("backgroundColor");
			$('.errorText').empty();
		} else {
			$('.errorText').html("Since a binary number can have 0's and 1's, use only 0's and 1's.");
			$("#binarylValue").addClass("backgroundColor");
			$("#convert").addClass("disabled").addClass("opacity40");
		}
	});
} 	
function typing(selector, text, callBackFunction) {
	var typingSpeed = 5;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

var p = 0;
var count = 0;
var flipingSpeed = 0.4;

function calculate(callBackFunction) {
	var l1 = $("#b" + x).offset();
 	var l2 = $("#c" + x).offset();
 	var toplen = l1.top - l2.top;
 	var leftlen = l1.left- l2.left;
 	var l3 = $("#powervalues" + p).offset();
    $("#powerv" + p).offset({"top": l3.top,"left": l3.left});
 	TweenMax.to("#bracket2" + p, flipingSpeed, {opacity:1, onComplete: function() {
 	$("#bracket2" + p).removeClass("opacity00");
	$("#powerv" + p).removeClass("opacity00");
	$("#powervalues" + p).effect('highlight',  {color: "#F08080"}, 3000);
	TweenMax.to("#powerv"+ p, flipingSpeed, {Color:"blue", opacity:1, top: 0, left: 0, onComplete:function() {
	 	TweenMax.to("#ct-code-b-red" + p, flipingSpeed, {opacity:1, onComplete: function() {
	 		$("#ct-code-b-red" + p).removeClass("opacity00");
	 			$("#c" + x).removeClass("opacity00");
	 			TweenMax.from("#c"+ x, flipingSpeed, {backgroundColor:"#7FFFD4", opacity:1, top: toplen, left: leftlen, onComplete:function() {
	 				TweenMax.to("#bracket" + p, flipingSpeed, {opacity:1, onComplete: function() {
 		 				$("#bracket" + p).removeClass("opacity00");
	 					TweenMax.to("#plus" + (p+1),flipingSpeed, {opacity:1, onComplete: function() {
	 		 				$("#plus" + (p+1)).removeClass("opacity00");
		 					if (x >= 1 && p < l.length) {
			 		  			x--;
				 	  			p++;
				 	  			
				 	  			count++;
				 	  			
				 	  			if (count >= 2) {
				 	  				flipingSpeed = 0.09;
				 	  			}
				 	  			
			 		  	    	calculate(callBackFunction);
	 		  	    		} else {
		 		  	    		if(typeof callBackFunction === "function") {
		 		  	    			callBackFunction();
		 		  	    		}
	 		  	    		}
	 					}});
	 				}});
	 			}});
	 		}});		

  		}});
	}});
}	

var q = 0;
function power(callBackFunction) {
	if (q < l.length) {
		$("#fourthbox").removeClass("visibility-hidden");
		var l4 = $("#total" + q).offset();
	    $("#onemultiply" + q).offset({"top": l4.top,"left": l4.left});
	    var l5 = $("#powerv" + q).offset();
	    $("#d" + q).offset({"top": l5.top,"left": l5.left});
	 	TweenMax.to("#bracket4" + q, flipingSpeed , {opacity:1, onComplete: function() {
		$("#bracket4" + q).removeClass("opacity00");
		$("#d" + q).removeClass("opacity00");
		$("#d" + q).effect('highlight',  {color: "#F08080"}, 1000);
		TweenMax.to("#d"+ q, flipingSpeed, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
	 	$("#onemultiply" + q).removeClass("opacity00");
	 	$("#total" + q).effect('highlight',  {color: "#F08080"}, 3000);
		TweenMax.to("#onemultiply"+ q, flipingSpeed, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			TweenMax.to("#bracket3" + q, flipingSpeed, {opacity:1, onComplete: function() {
					$("#bracket3" + q).removeClass("opacity00");
					TweenMax.to("#plus1" + (q+1),flipingSpeed , {opacity:1, onComplete: function() {
						$("#plus1" + (q+1)).removeClass("opacity00");
						q++;
						count++;
		 	  			
		 	  			if (count >= 2) {
		 	  				flipingSpeed = 0.09;
		 	  			}
		  				power(callBackFunction);
						}});
					}});
	 			 }});
		 	}});
	 	}});
	} else {
			console.log("else statemenet");
			if(typeof callBackFunction === "function") {
				console.log("callbackfunction");
   				callBackFunction();
   			}
	}
}
var s = 0;
function poweradd(callBackFunction) {
	if (s < l.length) {
		$("#fifthbox").removeClass("visibility-hidden");
		var l6 = $("#multiplytotal" + s).offset();
	    $("#multiplytwo" + s).offset({"top": l6.top,"left": l6.left});
	 	$("#multiplytwo" + s).removeClass("opacity00");
	 	$("#multiplytotal" + s).effect('highlight',  {color: "#F08080"}, 1000);
		TweenMax.to("#multiplytwo"+ s,flipingSpeed, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			TweenMax.to("#plus2" + (s+1),flipingSpeed , {opacity:1, onComplete: function() {
				$(".plus2" + (s+1)).removeClass("opacity00");
			 	s++;
			 	count++;
 	  			
 	  			if (count >= 2) {
 	  				flipingSpeed = 0.09;
 	  			}
	  			poweradd(callBackFunction);
  			}});
		}});
		} else {
			if(typeof callBackFunction === "function") {
			console.log("callbackfunction");
			callBackFunction();
		}
	}
}
var t = 0;
function addition(callBackFunction) {
	if (t < l.length) {
	$("#sixthbox").removeClass("visibility-hidden");
	var l7 = $("#multiplytwonos").offset();
    $("#r" + t).offset({"top": l7.top,"left": l7.left});
 	$("#r" + t).removeClass("opacity00");
 	$("#multiplytwonos").effect('highlight',  {color: "#F08080"}, 1000);
	TweenMax.to("#r"+ t, 0.09, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
		 t++;
			addition(callBackFunction);
  		}});
	} else {
		console.log("else statemenet");
		if(typeof callBackFunction === "function") {
			console.log("callbackfunction");
			callBackFunction();
			}
	}
}