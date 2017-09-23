var typingInterval = 5;
var arr = [];
var iVal = 1;
var usageOfGetcharReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function(){
		$("#enterName, #printLineInConsole1, #printLineInConsole2").val("");
		location.reload();
	});
	
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :"#infoDiv",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element :"#preTableDiv",
			intro : "",
			position : 'right',
		}, {
			element :"#class",
			intro : "",
			position : 'right',
		}, {
			element : '#main',
			intro : '',
			position : "right"
		}, {
			element : '#sInit',
			intro : "",
			position : "right"
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'obj',
		}, {
			element :"#class",
			intro : "",
			position : 'right',
		}, {
			element : '#char',
			intro : '',
			position : "right"
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'charMemory',
		}, {
			element : '#init',
			intro : "",
			position : "right"
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'intMemory',
		}, {
			element : '#eSd',
			intro : '',
			position : "right"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuDet',
			tooltipClass : 'hide'
		}, {
			element :"#sEnter",
			intro : "",
			position : "right"
		}, {
			element : '#friendFunction1',
			intro : '',
			position : "right"
		}, {
			element : '#frndFunCin',
			intro : "",
			position : "right"
		}, {
			element : '#eSN',
			intro : '',
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterStuName',
			tooltipClass: "hide"
		}, {
			element :"#sName",
			intro : "",
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterName',
			position : "left"
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'animationDiv',
			position : "left"
		}, {
			element : '#eN',
			intro : '',
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterNo',
			tooltipClass: "hide"
		}, {
			element :"#sNo",
			intro : "",
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole1',
			position : 'left',
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'animationDiv1',
			position : "left"
		}, {
			element : '#eM',
			intro : '',
			tooltipClass: "hide"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'enterMarks',
			tooltipClass: "hide"
		}, {
			element :"#sMarks",
			intro : "",
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole2',
			position : "left"
		}, {
			element : '#addressDiv',
			intro : "",
			animateStep : 'animationDiv2',
			position : "left"
		}, {
			element : '#tSd',
			intro : '',
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'theStuDet',
			tooltipClass: "hide"
		}, {
			element :"#sOut",
			intro : "",
			position : "right"
		}, {
			element : '#frndFunCout',
			intro : '',
		}, {
			element :"#sN",
			intro : "",
			position : "right"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuName',
			tooltipClass: "hide"
		}, {
			element : '#sName1',
			intro : '',
			position : "right"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole3',
		}, {
			element : '#no1',
			intro : '',
			position : "right"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuNo',
			tooltipClass: "hide"
		}, {
			element : '#sNo1',
			intro : '',
			position : "right"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole4',
		}, {
			element : '#marks',
			intro : '',
			position : "right"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'stuMarks',
			position : "left"
		}, {
			element : '#sMarks1',
			intro : '',
			position : "right"
		}, {
			element :"#consoleId",
			intro : "",
			animateStep : 'printLineInConsole5',
			position : "left"
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case 'infoDiv':
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list").fadeTo(300, 1, function() {
				$("#list1").fadeTo(300, 1, function() {
					$("#list11").fadeTo(300, 1, function() {
						$("#list12").fadeTo(300, 1, function() {
							$('#nextButton').removeClass("opacity00");
								$('.user-btn').click(function() {
								$('#nextButton').remove();
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							});
						});
					});
				});
			});
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Let us understand <span class='ct-code-b-yellow'>Operator"+
						" overloading</span> in binary operators.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'class':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#class").removeClass("opacity00");
				$('.introjs-nextbutton').show();
			});
			break;
		case 'main':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#main").removeClass("opacity00");
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is"+
						" the operating system call.<ul><li><span class='ct-code-b-yellow'>main()"+
						"</span> is execution starting point for any C++ program.</li></ul>", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'sInit':
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'char':
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'init':
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'sEnter':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = " ";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'char':
		case 'friendFunction':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'friendFunction1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case 'eSd':
			$('.introjs-helperLayer').one("transitionend", function() {
				typing(".introjs-tooltiptext"," ", function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'frndFunCin':
			$('.introjs-helperLayer').one("transitionend", function() {
				typing(".introjs-tooltiptext"," ", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'eSN':
			$('.introjs-helperLayer').one("transitionend", function() {
				typing(".introjs-tooltiptext"," ", function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'sName':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext"," ", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'eN':
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;
		case 'sNo':
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;

		case 'eM':
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;
		case 'sMarks':
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;
		case 'tSd':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = " ";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'sOut':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = " ";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'frndFunCout':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = " ";
				typing(".introjs-tooltiptext",text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'sN':
			$('.introjs-helperLayer').one("transitionend", function() {
				typing(".introjs-tooltiptext"," ", function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'sName1':
			$('.introjs-helperLayer').one("transitionend", function() {
				typing(".introjs-tooltiptext"," ", function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'no1':
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;
		case 'sNo1':
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;
		case 'marks':
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;

		case 'sMarks1':
			$('.introjs-helperLayer ').one('transitionend', function() {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
			});
			break;
		case 'consoleId':
			$("#consoleId").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "stuDet" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#stuDet").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					
				});
				break;
			case "enterStuName" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					//text = 'printing ' + introjs._introItems[introjs._currentStep].animateStep;
					typing('.introjs-tooltiptext'," ", function() {
						$("#enterStuName").removeClass("opacity00");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					});
				});
				break;
			case 'enterName':
				$('.introjs-helperLayer ').one('transitionend', function() {
					text = "Enter any name"; 
					typing('.introjs-tooltiptext', text, function() {
						$("#enterName").removeClass("opacity00").attr('contenteditable', true).addClass("blinking").focus();
						checking("#enterName");
					});
				});
				break;
			case 'enterNo':
				$("#enterName").attr('contenteditable', false)
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#enterNo').removeClass('opacity00');
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
				break;
			case 'printLineInConsole1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#printLineInConsole1").removeClass("opacity00").attr('contenteditable', true).addClass("blinking").focus();
					typing('.introjs-tooltiptext',"Enter numbers upto 5 digits <span class='ct-code-b-yellow'>i.e 12345</span>", function() {
						checking("#printLineInConsole1");
					});	
					
				});
				break;
			case 'enterMarks':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#enterMarks').removeClass('opacity00');
					typing('.introjs-tooltiptext'," ", function() {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					});
					
				});
				break;
			case 'printLineInConsole2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#printLineInConsole2").removeClass("opacity00").attr('contenteditable', true).addClass("blinking").focus();
					checking("#printLineInConsole2");
			});
			break;
			case 'theStuDet':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#theStuDet').removeClass('opacity00');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
				});
				break;
			case 'stuName':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#stuName').removeClass('opacity00');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
				});
				break;
			case 'printLineInConsole3':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#printLineInConsole3").append($("#enterName").val()).addClass("opacity00");
						transferEffect("#sName1", "#printLineInConsole3", function() {
								$('.introjs-nextbutton').show();
						});
				});
				break;
			case 'stuNo':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#stuNo').removeClass('opacity00');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
				});
				break;
			
			case 'printLineInConsole4':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#printLineInConsole4").append($("#printLineInConsole1").val()).addClass("opacity00");
						transferEffect("#sNo1", "#printLineInConsole4", function() {
								$('.introjs-nextbutton').show();
						});
				});
				break;
			case 'stuMarks':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#stuMarks').removeClass('opacity00');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
				});
				break;
			case 'printLineInConsole5':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#printLineInConsole5").append($("#printLineInConsole2").val()).addClass("opacity00");
					transferEffect("#sMarks1", "#printLineInConsole5", function() {	
							$('.introjs-nextbutton').show();
					});
				});
				break;
			}
			break;
		case "addressDiv" :
			$("#addressDiv").removeClass("opacity00");
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "obj" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#obj").removeClass("opacity00");
					$("#addressAnimationDiv").removeClass("opacity00");
					$('.introjs-nextbutton').show();
				});
				break;
			case "charMemory" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#addressAnimationDiv").removeClass("opacity00");
					TweenMax.to("#tableId", 0.2, {opacity: 1, onComplete: function() {
						typing(".introjs-tooltiptext", "20 bytes are allocated to the array of the variable <span class='ct-code-b-yellow'>ch</span>.", function() {
							$('.introjs-nextbutton').show();
						});
					}});
				});
				break;
			case "intMemory" :
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#noBox").removeClass("opacity00");
					$("#marksBox").removeClass("opacity00");
					$('.introjs-nextbutton').show();
				});
				break;
			case "animationDiv" :
				$("#enterName").attr('disabled','disabled');
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#tableRowId").removeClass("opacity00");
					introjs.refresh();
					$(".td-css").addClass("ct-code-b-green");
					var result = $("#enterName").val();
					for(var i = 0; i <= result.length; i++) {
						if (result.length >= 0 && result.length < 20) {
							if (i == result.length) {
								$("table tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
							} else {
								$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
							}
						}  else {
							if (i == 19) {
								$("table tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
								break;
							} else {
								$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
							}
						} 
					}
					TweenMax.to(".td-css", 1, {opacity: 1, onComplete: function() {
						typing(".introjs-tooltiptext", "The given string is stored in the array and delimiter <span class='ct-code-b-yellow'>\\0</span> (or) <span class='ct-code-b-yellow'>\\n</span> is placed at the end of the string by the system.", function() {
							$('.introjs-nextbutton').show();
						});
					}});
					
				});
				break;
			case "animationDiv1" :
				$("#printLineInConsole1").attr('disabled','disabled');
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#noVal").text($("#printLineInConsole1").val()).addClass("opacity00");
					transferEffect("#printLineInConsole1", "#noVal", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "animationDiv2" :
				$("#printLineInConsole2").attr('disabled','disabled');
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#marksVal").text($("#printLineInConsole2").val()).addClass("opacity00");
					transferEffect("#printLineInConsole2", "#marksVal", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			}
			break;
		
			
		case "restart":
			$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-tooltipbuttons').addClass("hide");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	
	introjs.start();
}
function checking(selector) {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	if(selector == "#enterName") {
		$(selector).off("keydown keyup");
			$(selector).on("keydown", function(e){
				
				  // Ignore controls such as backspace
				
				  var arr = [8,16,17,20,35,36,37,38,39,40,45,46];
		
				  // Allow letters
				  for(var i = 65; i <= 90; i++){
				    arr.push(i);
				  }
				  //Disable cut copy paste
				  $(selector).bind('cut copy paste', function (e) {
				        e.preventDefault();
				    });
				   
				    //Disable mouse right click
				    $(selector).on("contextmenu",function(e){
				        return false;
				    });
					    
					  if($.inArray(e.which, arr) === -1  || e.ctrlKey || e.altKey){
					    e.preventDefault();
					  }
				
			});
			$(selector).on("keyup", function(){
				$('.error-text').remove();
					var letters = /^[A-Za-z]+$/;
				      if($(selector).val().match(letters)){
				    	  $('.introjs-nextbutton').show();
				      }
				      else {
				      $('.introjs-nextbutton').hide();
				      $('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
								"Please enter alphabet characters only.</span>");
				      }
					
			});
	} else if (selector == "#printLineInConsole1" || selector == "#printLineInConsole2" ){
		$(selector).off("keydown keyup");
		$(selector).on("keydown", function(e) {
			$('.error-text').remove();
			if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
				return;
			}
			if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
				e.preventDefault();
			}
		});$(selector).on("keyup", function(){
			$('.error-text').remove();
				var letters = /^[0-9]+$/;
			      if($(selector).val().match(letters) && $(this).val().length >= 1){
			    	  $('.introjs-nextbutton').show();
			      }
			      else {
			      $('.introjs-nextbutton').hide();
			      $('.introjs-tooltiptext').append("<span class='error-text'><br/>" + 
							"Please enter numbers only.</span>");
			      }
		});
		
	}
		
	
}
function rotation(selector1, val, callBackFunction) {
	$(selector1).effect( "highlight",{color: '#ffff33'}, 1000);
	TweenMax.to($(selector1), 1, {rotationX : -90, onComplete:function() {
		$(selector1).text(val);
		TweenMax.to($(selector1), 1, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}
	});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 1000);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1200 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
} 


function typing(selector, text, callBackFunction) {
	var typingSpeed = 10;
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
function fadeInBounceEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var val;
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500);
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$('#codeDiv').append("<span id='dummy' class='ct-code-b-yellow ct-fonts' style='position: relative; z-index: 99999999;'>" 
			+ $(selector2).text() + "</span>");
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
		
		$(selector2).css('width', $('#dummy').width());
		$(selector2).text($(selector1).text());
		TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
			$(selector2).fadeIn(1000, 0, function() {
				$(selector2).fadeIn(1000, 1, function() {
					$(selector2).css('width', "auto");
					$("#dummy").remove();
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				});
			});
		}});
}