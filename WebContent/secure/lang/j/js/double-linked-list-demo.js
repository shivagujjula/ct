

var setInterval;
var lineIndex;
var l = console.log.bind(console);
var elementIndex = 0
var codeLineNum = 3;
var addClickedFirstTime = true;
var removeClickedFirstTime = true;
var removeElementClickedFirstTime = true;
var exceptionThrown = false;
var str = "";

var doubleLinkedListDemoReady = function() {

	lineIndex = 0;
	$("#executionDiv").show();  //To show the execution Div
	$(".fa-long-arrow-right").eq($(".fa-long-arrow-right").length-1).remove();
	$(".fa-long-arrow-left").eq($(".fa-long-arrow-left").length-1).remove();
	
	spaceEmpty("#addMethod");
	spaceEmpty("#addElement");
	spaceEmpty("#removeByElementMethod");
	 
	//to restrict the maxlength for contentEditable and also to disable the enter
	$("[contenteditable=true]").keydown(function(e) {
		$(".max-length-check").remove();
		var max = $(this).attr("maxlength");
		if($(this).text().length >= max) {
			$(".introjs-tooltiptext").append("<span class='ct-code-b-red max-length-check'></br>Max length is limited to 3 characters only.</span>");
		}
		if (e.which === 13) {
			e.preventDefault();
		}
	});
	
	$("body").keydown(function(e) {
		if (e.which === 9) {
			e.preventDefault();
		}
	});
	
	$(document).keydown(function(objEvent) {
		if (objEvent.keyCode == 9) {  //tab pressed
			objEvent.preventDefault(); // stops its action
		}
	});

	 //To enabling and disabling the Go button
	$("#removeByIndexMethod").on("keyup mousedown", function() {
		$(".max-length-check").remove();
		var max = $(this).attr("maxlength");
		if($(this).text().length >= max) {
			$(".introjs-tooltiptext").append("<span class='ct-code-b-red max-length-check'></br>Max length is limited to 2 characters only.</span>");
		}
		
		var methodId = $(this).attr("methodId");
			$(".methods-div-list").each(function(index) {
				if (index == methodId) {
					$(".go-button[methodId=" + methodId + "]").removeClass('disabled').removeClass('opacity40');
				} else {
					$(".go-button[methodId=" + index + "]").addClass('disabled').addClass('opacity40'); 
					$(".inputbox[methodId=" + index + "]").text("");
				}
			});
	});
       
	$("#addIndex").on("keyup mousedown", function() {
		$(".max-length-check").remove();
		var max = $(this).attr("maxlength");
		if($(this).text().length >= max) {
			$(".introjs-tooltiptext").append("<span class='ct-code-b-red max-length-check'></br>Max length is limited to 2 characters only.</span>");
		}
		
		var methodId = $(this).attr("methodId");
			$(".methods-div-list").each(function(index) {
				if (index == methodId) {
					$(".go-button[methodId=" + methodId + "]").removeClass('disabled').removeClass('opacity40');
				} else {
					$(".go-button[methodId=" + index + "]").addClass('disabled').addClass('opacity40'); 
					$(".inputbox[methodId=" + index + "]").text("");
				}
			});
	});
	 
	$("#addMethod, #removeByElementMethod").on("keyup mousedown", function() {
		var methodId = $(this).attr("methodId");
		$(".methods-div-list").each(function(index) {
			if (index == methodId) {
				$(".go-button[methodId=" + methodId + "]").removeClass('disabled').removeClass('opacity40');
			} else {
				$(".go-button[methodId=" + index + "]").addClass('disabled').addClass('opacity40'); 
				$(".inputbox[methodId=" + index + "]").text("");
			}
		});
	});
	 
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case 'methodsDiv':
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", "These are some of the methods in a linked list.", 10, "",function() {
				
					});
				});
				break;
				
			case 'totalAddId':
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", "Here we are using <span class='ct-code-b-yellow'>add()</span> to insert elements into the <span class='ct-code-b-yellow'>LinkedList</span>. enter the element and click <span class='duplicate-btn-sm-success'>Go</span> button.", 10, "",function() {
						$('.introjs-nextbutton').click();
					});
				});
				break;
				
			case 'hiddenInsertElementLine':
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
				var text = $("#insertElement" + lineIndex).addClass('z-index10000000').removeClass("visibility-hidden").html();
				if($("#add_e").hasClass("click-check")) {
					typing($("#insertElement" + lineIndex), text, 50, "", function() {
						typing(".introjs-tooltiptext", "The value returned by <span class='ct-code-b-yellow'>add()</span> method is stored in a variable called <span class='ct-code-b-yellow'>addStatus</span>. The stored value is<span class='ct-code-b-yellow'> "+ str +" </span> ", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
				} else if($("#addIndexElementBtn").hasClass("click-check")) {
					typing($("#insertElement" + lineIndex), text, 50, "", function() {
						typing(".introjs-tooltiptext", "The value returned by <span class='ct-code-b-yellow'>add()</span> method with index is stored in a variable called <span class='ct-code-b-yellow'>addStatus</span>.<span class='ct-code-b-yellow'> "+ str +" </span> ", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
				} else if($("#removeIndexBtn").hasClass("click-check")) {
					typing($("#insertElement" + lineIndex), text, 50, "", function() {
						typing(".introjs-tooltiptext", "The value returned by <span class='ct-code-b-yellow'>remove(index)</span> method is stored in a variable called <span class='ct-code-b-yellow'>removeStatus</span>.<span class='ct-code-b-yellow'> "+ str +" </span> ", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
				} else {
					typing($("#insertElement" + lineIndex), text, 50, "", function() {
						typing(".introjs-tooltiptext", "The value returned by <span class='ct-code-b-yellow'>remove(element)</span> method is stored in a variable called <span class='ct-code-b-yellow'>removeStatus element</span>.<span class='ct-code-b-yellow'> "+ str +" </span> ", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					});
				}
			});
			break;
			    
			case 'hiddenSopCodeLine':
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = $("#sopCode" + lineIndex).addClass('z-index10000000').removeClass("visibility-hidden").html();
					typing("#sopCode" + lineIndex, text, 10, "", function() {
						typing(".introjs-tooltiptext", "This System.out.print()  is used to print the status of the list.", 10, "", function() {
							$('.introjs-nextbutton').show();
						});								
					});
				});
				break;
				
			case 'javacodeDivWidth':
				$(".introjs-helperLayer").one("transitionend", function() {
					$('.introjs-nextbutton').show();
				});
				break;
				
			case 'animationArrayBox':
			//	$(".introjs-tooltip").hide();
				$('.introjs-nextbutton').hide();							
				$("#insertElement" + lineIndex).removeClass('z-index10000000');
				$(".introjs-helperLayer").one("transitionend", function() {
					if($("#add_e").hasClass("click-check"))	{
						elementValue = $('#codeElement' + lineIndex).html();
						var text = "";
						if (elementIndex != 0) {
							text = "It appends the specified element to the end of this list.";
							arrowAppend(elementIndex, elementValue, text);
							} else {
								text = "This is live demo where the elements is inserted into a node in linked list.";
								boxAppend(elementIndex, elementValue, text);
							}
						$('.introjs-nextbutton').hide();
						$(".introjs-tooltipbuttons").append("<a class='introjs-button background-green visibility-hidden' id='introHideBtn' onclick='userDefinedBtnClick("+elementIndex+", \""+text+"\");'>Next &#8594;</a>")
						elementIndex++;
						$('#add_e').removeClass("click-check");
						$("#add_e").addClass('disabled opacity40');
						$('#addMethod').text('');
					} else if($("#addIndexElementBtn").hasClass("click-check"))	{
						$('.introjs-nextbutton').hide();
						$('#addIndexElementBtn').removeClass("click-check");
						linkedListAddElementIndex();text
					} else if($("#removeIndexBtn").hasClass("click-check"))	{
						$('.introjs-nextbutton').hide();
						$('#removeIndexBtn').removeClass("click-check");
						linkedListRemoveWithIndex();
					} else if($("#removeElementBtn").hasClass("click-check")) {
						$('.introjs-nextbutton').hide();
						$('#removeElementBtn').removeClass("click-check");
						linkedListRemoveWithElement();
					}
				});
				break;
				
			case 'outputDiv':
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					if(exceptionThrown) {
						exceptionThrown = false;
						var text = $('#outputline' + lineIndex + ' .exceptionLine1').removeClass('visibility-hidden').html();
						typing('#outputline' + lineIndex + ' .exceptionLine1', text, 50, "", function() {
							var text = $('#outputline' + lineIndex + ' .exceptionLine2').removeClass('visibility-hidden').html();
							typing('#outputline' + lineIndex + ' .exceptionLine2', text, 50, "", function() {
								var text = $('#outputline' + lineIndex + ' .exceptionLine3').removeClass('visibility-hidden').html();
								typing('#outputline' + lineIndex + ' .exceptionLine3', text, 50, "", function() {
									var text = $('#outputline' + lineIndex + ' .exceptionLine4').removeClass('visibility-hidden').html();
									typing('#outputline' + lineIndex + ' .exceptionLine4', text, 50, "", function() {
										lineIndex++;
										setTimeout(function() {
											intro.nextStep();
										}, 1000);
									});
								});
							});
						});
					} else {
						var text = $('#outputline' + lineIndex).removeClass('visibility-hidden').html();
						typing('#outputline' + lineIndex, text, 50, "", function() {
							typing(".introjs-tooltiptext", "In the output ", 5, "", function() {
								$("#sopCode" + lineIndex).removeClass('z-index10000000');
								lineIndex++;
								setTimeout(function() {
									intro.nextStep();
								}, 1000);
							});
						});
					}
				});
				break;
			}
		});
		startIntro();
		$('.introjs-nextbutton').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		typing(".introjs-tooltiptext", "Let us create a <span class='ct-code-b-yellow'>List</span> instance of type <span class='ct-code-b-yellow'>LinkedList</span> which accepts of type <span class='ct-code-b-yellow'>String</span>.", 10, "",function() {
			$('.introjs-nextbutton').show();			
		});
		
	 // add(element) method
		$("#add_e").click(function() {
			if ($("#add_e").hasClass("disabled")) {
				return;
			}
			if($("#addMethod").text() == "") {
				str = "emptyString";
			}
			$(this).addClass("disabled");
			$(this).addClass("click-check");
			if (addClickedFirstTime) {
				addClickedFirstTime = false;
				$("#randomCode").append("\n\t\t<span class='visibility-hidden' id='insertElement" + lineIndex + "'>boolean addStatus = aList.add(\"<span class='ct-pink-color' id='codeElement" + lineIndex + "'>"  +  $("#addMethod").html() + "</span>\");</span>");
			} else {
				$("#randomCode").append("\n\t\t<span class='visibility-hidden' id='insertElement" + lineIndex + "'>addStatus = aList.add(\"<span class='ct-pink-color' id='codeElement" + lineIndex + "'>"  +  $("#addMethod").html() + "</span>\");</span>");
			}
		
			if($("#addMethod").text() == "") {
				$("#randomCode").append('\n\t\t<span class="visibility-hidden" id="sopCode' + lineIndex + '">System.out.println("add status for<span class="ct-pink-color"> ' + str + ' </span> : " + addStatus);</span>');
			} else {
				$("#randomCode").append('\n\t\t<span class="visibility-hidden" id="sopCode' + lineIndex + '">System.out.println("add status for<span class="ct-pink-color"> ' + $("#addMethod").html() + ' </span> : " + addStatus);</span>');
			}
			codeLineNum += 2;
			dynamicSteps(true, true);
			scrollToBottom('javaCode', true);
		});
	    
	// add(index, element) method
		$('#addIndexElementBtn').click(function() {
			$(".max-length-check").remove();
			if ($(this).hasClass("disabled")) {
				return;
			}
		
			if($("#addElement").text() == "") {
				$(".introjs-tooltiptext").append("<span class='ct-code-b-red max-length-check'></br>Please enter the index.</span>");
				str = "emptyString";
			} else {
				$(this).addClass("disabled")
				$("#addIndexElementBtn").addClass("click-check");
				$("#randomCode").append("\n\t\t<span class='visibility-hidden' id='insertElement" + lineIndex + "'>aList.add(<span id='codeElement" + lineIndex + "'><span class='ct-pink-color' id='codeElementIndex" + lineIndex + "'>" + $("#addIndex").text() + "</span>, \"<span class='ct-pink-color' id='codeElementVal" + lineIndex + "'>" + $("#addElement").html() + "</span>\"</span>);</span>");
				codeLineNum += 1;
				if($("#addIndex").text() > elementIndex) {
					dynamicSteps(false, true);
				} else {
					dynamicSteps(false, false);
				}
				scrollToBottom('javaCode', false);
			}
			
		});
	 
	 // remove(index) method...
		$('#removeIndexBtn').click(function() {
			$(".max-length-check").remove();
			if ($(this).hasClass("disabled")) {
				return;
			}
			if($("#removeByIndexMethod").text() == "") {
				l("sssss indeex");				
				$(".introjs-tooltiptext").append("<span class='ct-code-b-red max-length-check'></br>Please enter the index.</span>");
				str = "emptyString";
			} else {
				$(this).addClass("disabled");
				if(parseInt(isNaN($("#removeByIndexMethod").text())) == "") {
					alert("Enter the correct input");
				} else {
					$('#removeIndexBtn').addClass("click-check");
					if (removeClickedFirstTime) {
						removeClickedFirstTime = false;
						$("#randomCode").append("\n\t\t<span class='visibility-hidden' id='insertElement" + lineIndex + "'>Object removeStatus = aList.remove(<span class='ct-pink-color' id='codeElement" + lineIndex + "'>" + $('#removeByIndexMethod').text() + "</span>);</span>");
					} else {
						$("#randomCode").append("\n\t\t<span class='visibility-hidden' id='insertElement" + lineIndex + "'>removeStatus = aList.remove(<span class='ct-pink-color' id='codeElement" + lineIndex + "'>" + $('#removeByIndexMethod').text() + "</span>);</span>");
					}
					if (elementIndex > parseInt($('#removeByIndexMethod').text())) {
						$("#randomCode").append('\n\t\t<span class="visibility-hidden" id="sopCode' + lineIndex + '">System.out.println("removeStatus for index <span class="ct-pink-color">' + $('#removeByIndexMethod').text() + '</span> : " + removeStatus);</span>');
						codeLineNum += 2;
						dynamicSteps(true, true);
						scrollToBottom('javaCode', true);
					} else {
						codeLineNum += 1;
						dynamicSteps(false, true);
						scrollToBottom('javaCode', false);
					}
				}
			}
		});
	 
	// remove(element) method...
		$('#removeElementBtn').click(function() {
			if($(this).hasClass("disabled")) {
				return;
			}
		
			if($("#removeByElementMethod").text() == "") {
				str = "emptyString";
			}
		
			$(this).addClass("disabled");
			$("#removeElementBtn").addClass("click-check");
			if(removeElementClickedFirstTime) {
				removeElementClickedFirstTime = false;
				$("#randomCode").append("\n\t\t<span class='visibility-hidden' id='insertElement" + lineIndex + "'>Object removeStatus = aList.remove(\"<span class='ct-pink-color' id='codeElement" + lineIndex + "'>" + $('#removeByElementMethod').html() + "</span>\");</span>");
			} else {
				$("#randomCode").append("\n\t\t<span class='visibility-hidden' id='insertElement" + lineIndex + "'>removeStatus = aList.remove(\"<span class='ct-pink-color' id='codeElement" + lineIndex + "'>" + $('#removeByElementMethod').html() + "</span>\");</span>");
			}
				$("#randomCode").append('\n\t\t<span class="visibility-hidden" id="sopCode' + lineIndex + '">System.out.println("removeStatus for <span class="ct-pink-color">' + $('#removeByElementMethod').text() + '</span> : " + removeStatus);</span>');
				codeLineNum += 2;
				dynamicSteps(true, true);
				scrollToBottom('javaCode', true);
		});
		
	 
		$("#addIndex, #removeByIndexMethod").keyup(function() {
			var yourInput = $(this).text();
			re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
			var isSplChar = re.test(yourInput);
			if(isSplChar) {
				var no_spl_char = yourInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
				$(this).text(no_spl_char);
			}
		});
	
		$("#addIndex, #removeByIndexMethod").keydown(function(e) { // conditions to enter text
			var max = $(this).attr("maxlength");
			if ((e.which != 8) && (e.which != 46) && (e.which != 37) && (e.which != 39) && ($(this).text().length + 1) > max) {
				e.preventDefault();
			}
			if (((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105) || e.which == 8 || e.which == 46)) {
				return true;
			} else {
				e.preventDefault();
			}
 		});
	
		$("#addMethod, #addElement, #removeByElementMethod").keydown(function(e) { // conditions to enter text
			var max = $(this).attr("maxlength");
			if ((e.which != 8) && (e.which != 46) && (e.which != 37) && (e.which != 39) && ($(this).text().length + 1) > max) {
				e.preventDefault();
			} else {
				return true;
			}
		});
}

function arrowAppend(elementIndex, elementValue, text) {
	$("#boxDiv").append('<div id="arrowId' + elementIndex + '" class="box-arrow">' +
			'<span id="arrowRight' + elementIndex + '" class="fa fa-long-arrow-right fa-2x arrow-css-gray arrow-css-right"></span>' +
			'<span id="arrowLeft' + elementIndex + '" class="fa fa-long-arrow-left fa-2x arrow-css-gray arrow-css-left"></span>' +
		'</div>');
	$('#arrowRight' + elementIndex).addClass('opacity00');
	$('#arrowLeft' + elementIndex).addClass('opacity00')
	var text = "This is live demo where the elements is inserted into a node in linked list.";
	boxAppend(elementIndex, elementValue, text);
}

function boxAppend(elementIndex, elementValue, text) { //233 java code to live display
	var index = $('#codeElementIndex' + lineIndex).html();
	$("#invisibleDiv").append("<span id='innerInvisibleDiv' class='inner-invisible-span'><span id='tempElement' class='temp-element ct-pink-color'>" + $('#codeElement' + lineIndex).html() + "</span></span>");
	var l1 = $('#codeElement' + lineIndex).offset();
	var l2 = $(".temp-element").offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from(".temp-element", 1, {top : topLength, left: leftLength, onComplete: function() {
		typing(".introjs-tooltiptext", "element is ready to insert into a node. click next to continue.", 40, "", function() {
			$("#introHideBtn").removeClass("visibility-hidden");
		});
	}});
}

function userDefinedBtnClick(elementIndex, text) { //next click
	$("#boxDiv").append('<div id="boxId' + elementIndex + '" class="box" style="display: inline-block;">' +
			'<div id="boxRow' + elementIndex + '" class="boxRowIds" style="width: 45px;">' +
				'<span class="box-css" id="spanRow' + elementIndex + '" style="">' +
					'<span class="box-element opacity00" id="boxElement' + elementIndex + '" style="">' + elementValue + '</span>' +
				'</span>' +
			'</div>' +
			'<div class="index-css">' +
				'<span id="indexId' + elementIndex +'" class="index-box opacity00">'+ elementIndex + '</span>' +
			'</div>' +
		'</div>');

	var delay = 0;
	if (elementIndex > 7) {
		delay = 1;
	}
	scrollToIndex(elementIndex);
	TweenMax.from("#boxId" + elementIndex , 1, {opacity: 0, delay: delay, top: -100, onComplete:function() {
		$("#introHideBtn").remove();
		$("#spanRow" + elementIndex).effect('highlight',{color:'#7094FF'}, 1000);
		if($(".box-css").length == 1) {
			$("#indexId" + elementIndex).addClass('linkedList-circle blinking').one('animationend', function() {
				$("#indexId" + elementIndex).fadeTo("1000", 2, function() {
					$("#indexId" + elementIndex).removeClass('linkedList-circle blinking');
					$(this).removeClass('opacity00');
					var l1 = $('#tempElement').offset();
					var l2 = $('#boxElement' + elementIndex).offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.to("#tempElement", 1, {top : topLength, left: leftLength, onComplete: function() {
						$("#boxElement" + elementIndex).removeClass("opacity00");
						$("#innerInvisibleDiv").remove();
						//$("#introHideBtn").remove();
						typing(".introjs-tooltiptext", text, 10, "", function() {
							$('#outputRandom').append('\n<span class="visibility-hidden" id="outputline' + lineIndex + '">add status for <span class="ct-code-b-yellow"> '+ str +' </span>: <span class="ct-code-b-green">true</span></span>');
							scrollToBottom('outputConsoleBody', true);
							$('.introjs-nextbutton').show();
							scrollToIndex(elementIndex);
						});
					}});
				});
			});
		} else {
			l("text is  = " + text);
			$("#introHideBtn").remove();
			$("#indexId" + elementIndex).addClass('linkedList-circle blinking').one('animationend', function() {
				$("#indexId" + elementIndex).fadeTo("1000", 2, function() {
					$("#indexId" + elementIndex).removeClass('linkedList-circle blinking');
					$(this).removeClass('opacity00');
					$('#arrowRight' + elementIndex).removeClass('opacity00');
					$('#arrowRight' + elementIndex).addClass('arrow-css-green reveal-left').one('animationend', function() {
						$('#arrowRight' + elementIndex).removeClass('arrow-css-green reveal-left');
						$('#arrowLeft' + elementIndex).removeClass('opacity00');
						$('#arrowLeft' + elementIndex).addClass('arrow-css-green reveal-right').one('animationend', function() {
							$('#arrowLeft' + elementIndex).removeClass('arrow-css-green reveal-right');
								
							var l1 = $('#tempElement').offset();
							var l2 = $('#boxElement' + elementIndex).offset();
							var topLength = l2.top - l1.top;
							var leftLength = l2.left - l1.left;
							TweenMax.to("#tempElement", 1, {top : topLength, left: leftLength, onComplete: function() {
								$("#boxElement" + elementIndex).removeClass("opacity00");
								$("#innerInvisibleDiv").remove();
								typing(".introjs-tooltiptext", text, 10, "", function() {
									$('#outputRandom').append('\n<span class="visibility-hidden" id="outputline' + lineIndex + '">add status for <span class="ct-code-b-yellow"> '+ str +' </span>: <span class="ct-code-b-green">true</span></span>');
									scrollToBottom('outputConsoleBody', true);
									$('.introjs-nextbutton').show();
									scrollToIndex(elementIndex);
								});
							}});
						});
					});
				});
			});
		}
	}});
}

function linkedListAddElementIndex() {
	$('.nextButton').remove();
	var count = 0;
	var index = parseInt($('#codeElementIndex' + lineIndex).html());
	$("#invisibleDiv").append("<span id='innerInvisibleDiv' class='inner-invisible-span'><span id='tempElement' class='temp-element ct-pink-color'>" + $('#codeElementIndex' + lineIndex).html() + "</span>&nbsp;&nbsp;&nbsp;<span id='tempElement1' class='temp-element ct-pink-color'>" + $('#codeElementVal' + lineIndex).html() + "</span></span>");
	var l1 = $('#codeElementIndex' + lineIndex).offset();
	var l2 = $(".temp-element").offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left
	TweenMax.from(".temp-element", 1, {top : topLength, left: leftLength, onComplete: function() {
		var size = (elementIndex >> 1);
		if (elementIndex <= index) {
			$("#innerInvisibleDiv").addClass('blinking').one('animationend', function() {
				linkedListAddElementWithIndex();
				$("#innerInvisibleDiv").remove();
			});
		} else if(index < size) {
			checkingAddIndexElementsofLinkedListforwads(count, size);
		} else {
			count = elementIndex - 1;
			checkingAddIndexElementsofLinkedListbackwards(count, size);
		}
	}});
}


function checkingAddIndexElementsofLinkedListforwads(count, size) {
	var index = parseInt($('#codeElementIndex' + lineIndex).html());
	if(index == count) {
		scrollToIndex(index);
		$("#tempElement").effect("highlight",{color: '#008000'}, 1000, function() {
			$("#indexId" + count).addClass('linkedList-circle').effect("highlight",{color: '#008000'}, 1000, function() {
				$("#innerInvisibleDiv").remove();
				linkedListAddElementWithIndex();
				$("#indexId" + count).removeClass('linkedList-circle');
			});
		});
	} else if (count < size) {
		scrollToIndex(count);
		$("#tempElement").addClass('blinking').one('animationend', function() {
			$("#tempElement").removeClass('blinking');
			$("#indexId" + count).addClass('linkedList-circle blinking').one('animationend', function() {
				$("#indexId" + count).removeClass('linkedList-circle blinking');
				$('body').append('<div class="arrow-div" id="tempArrowDiv"><span id="tempArrow" class="fa fa-long-arrow-right fa-2x arrow-css-gray arrow-right arrow-css-blue"></span></div>');
				$('#tempArrow').offset({top: $('#arrowRight' + (count + 1)).offset().top, left: $('#arrowRight' + (count + 1)).offset().left});
				$('#tempArrow').css({"z-index": "99999999"}).addClass('reveal-left').one('animationend', function() {
					$('#arrowRight' + (count + 1)).addClass("arrow-css-blue");
					$('#tempArrowDiv').remove();
					console.log("Forward action");
					count++;
					checkingAddIndexElementsofLinkedListforwads(count, size);
		 		});
			});
		});
	}
}

function checkingAddIndexElementsofLinkedListbackwards(count, size) {
	var index = parseInt($('#codeElementIndex' + lineIndex).html());
	if(count >= size) {
		if(index == count) {
			scrollToIndex(index);
			$("#tempElement").effect("highlight",{color: '#008000'}, 1000, function() {
				$("#indexId" + count).addClass('linkedList-circle').effect("highlight",{color: '#008000'}, 1000, function() {	
					$("#innerInvisibleDiv").remove();
					linkedListAddElementWithIndex();
					$("#indexId" + count).removeClass('linkedList-circle');
				});
			});
		} else if (count > size) {
			scrollToIndex(count);
			$("#tempElement").addClass('blinking').one('animationend', function() {
				$("#tempElement").removeClass('blinking');
				$("#indexId" + count).addClass('linkedList-circle blinking').one('animationend', function() {
					$("#indexId" + count).removeClass('linkedList-circle blinking');
					$('body').append('<div class="arrow-div"><span id="tempArrow" class="fa fa-long-arrow-left fa-2x arrow-css-gray arrow-css-blue arrow-div"></span></div>');
					var l1 = $('#arrowLeft' + (count)).offset();
					$('#tempArrow').offset({top: l1.top, left: l1.left});
					$('#tempArrow').css({"z-index": "99999999"}).addClass('reveal-right').one('animationend', function() {
						$('#arrowLeft' + count).addClass("arrow-css-blue");
						console.log("count before remove : " + count);
						$('#tempArrow').remove();
						count--;
						checkingAddIndexElementsofLinkedListbackwards(count, size);
					});
				});
			});
		}
	}
}

function linkedListAddElementWithIndex() {
	var index = parseInt($("#addIndex").text());
	var elementValue = $("#addElement").html();
	var noException = true;
	if (!isNaN(index)) {
		l(elementIndex + " = " + index);
		if (elementIndex == index) {
			l(elementIndex + " : " + index);
			if (elementIndex != 0) {
				arrowAppend(elementIndex++ , elementValue);
			} else {
				var text = "This is live demo where the elements is inserted into a node in linked list.";
				boxAppend(elementIndex++ , elementValue, text);
			}
		} else if (index == 0 && elementIndex != 0) {
				$("#indexId" + index).removeClass('linkedList-circle blinking');
				$("#boxDiv").prepend('<div id="boxId' + index + '" class="box visibility-hidden" style="display: inline-block;">' +
					'<div id="boxRow' + index +'" class="boxRowIds" style="width: 45px;">' +
						'<span  class="box-css" id="spanRow' + index + '" style="">' +
							'<span class="box-element" id="boxElement' + index + '"style="color=green;">' + elementValue + '</span>' +
						'</span>' +
					'</div>' +
				'<div class="index-css">' +
					'<span id="indexId' + index +'" class="index-box opacity00">'+ index + '</span>' +
				'</div>' +
			'</div>');
			 
				$("#boxId" + index).after('<div id="arrowId' + (index + 1) + '" class="box-arrow visibility-hidden">' +
					'<span id="arrowRight' + (index + 1) + '" class="fa fa-long-arrow-right fa-2x arrow-css-gray arrow-css-right opacity00"></span>' +
						'<span id="arrowLeft' + (index + 1) + '" class="fa fa-long-arrow-left fa-2x arrow-css-gray arrow-css-left opacity00"></span>' +
				'</div>');
			
				changeElementId();
				scrollToIndex(index);
		
				var delay = 0;
				if (index > 7) {
					delay = 1;
				}
				var marginLeft = $('#boxId' + index).outerWidth();
				TweenMax.from('#arrowId' + (index + 1), 1, {marginLeft: '-=' + marginLeft, onComplete: function() {
					$("#boxId" + index).removeClass('visibility-hidden');
					TweenMax.from("#boxId" + index , 1, {opacity: 0, delay: delay, top: -100, onComplete:function() {
						$(".arrow-css-blue").removeClass("arrow-css-blue");
						$("#spanRow" + index).effect('highlight',{color:'#7094FF'}, 1000, function() {
							$("#indexId" + index).addClass('linkedList-circle blinking').one('animationend', function() {
								$("#indexId" + index).fadeTo("1000", 1, function() {
									$("#indexId" + index).removeClass('linkedList-circle blinking');
									$(this).removeClass('opacity00');
									$('#arrowId' + (index + 1)).removeClass('visibility-hidden');
									$('#arrowRight' + (index + 1)).removeClass('opacity00');
									$('#arrowRight' + (index + 1)).addClass('arrow-css-green reveal-left').one('animationend', function() {
										$('#arrowRight' + (index + 1)).removeClass('arrow-css-green reveal-left');
										$('#arrowLeft' + (index + 1)).removeClass('opacity00');
										$('#arrowLeft' + (index + 1)).addClass('arrow-css-green reveal-right').one('animationend', function() {
											$('#arrowLeft' + (index + 1)).removeClass('arrow-css-green reveal-right');
											typing(".introjs-tooltiptext", "This is live demo where the elements is inserted into a node in linked list. ", 10, "", function() {
											//	$('.introjs-tooltip').show();
												$('.introjs-nextbutton').show();
											});
										});
									});
									elementIndex++;
								});
							});
						});		
					}});
				}});
			} else if (index < elementIndex) {
				$('#arrowRight' + index + ', #arrowLeft' + index).addClass('arrow-css-red');
				TweenMax.to('#arrowRight' + index + ', #arrowLeft' + index, 1 ,{opacity: 0, onComplete: function() {
					$(".arrow-css-blue").removeClass("arrow-css-blue");
					$('#arrowRight' + index + ', #arrowLeft' + index).removeClass('arrow-css-red').css({'opacity': '1'}).addClass('visibility-hidden');										
					$("#boxId" + (index - 1)).after('<div id="arrowId' + index + '" class="box-arrow">' +
							'<span id="arrowRight' + index + '" class="fa fa-long-arrow-right fa-2x visibility-hidden arrow-css-gray arrow-css-right"></span>' +
								'<span id="arrowLeft' + index + '" class="fa fa-long-arrow-left fa-2x visibility-hidden arrow-css-gray arrow-css-left"></span>' +
							'</div>');
					$("#arrowId" + index).after('<div id="boxId' + index + '" class="box visibility-hidden" style="display: inline-block;">' +
						'<div id="boxRow' + index +'" class="boxRowIds" style="width: 45px;">' +
							'<span id="spanRow' + index +'" class="box-css" style="">' +
								'<span class="box-element" id="boxElement' + index + '"style="color=green;">' + elementValue + '</span>' +
							'</span>' +
						'</div>' +
						'<div class="index-css">' +
							'<span id="indexId' + index +'" class="index-box opacity00">'+ index + '</span>' +
						'</div>' +
					'</div>');
					changeElementId();
					scrollToIndex(index);
					var delay = 0;
					if (index > 7) {
						delay = 1;
					}
		
					var marginLeft = $('#arrowId' + index).outerWidth() + $('#boxId' + index).outerWidth();
					TweenMax.from('#arrowId' + (index), 1, {marginLeft: '-=' + marginLeft, onComplete: function() {
						$("#boxId" + index).removeClass('visibility-hidden');
						TweenMax.from("#boxId" + index , 1, {opacity: 0, delay: delay, top: -100, onComplete:function() {
							$("#spanRow" + index).effect('highlight',{color:'#7094FF'}, 1000, function() {
								$("#indexId" + index).addClass('linkedList-circle blinking').one('animationend', function() {
									$("#indexId" + index).fadeTo("1000", 1, function() {
										$("#indexId" + index).removeClass('linkedList-circle blinking');
										$('#arrowId' + index).removeClass('visibility-hidden');
										$('#arrowRight' + index).removeClass('visibility-hidden');
										$(".arrow-css-blue").removeClass("arrow-css-blue");
										$('#arrowRight' + index).addClass('arrow-css-green reveal-left').one('animationend', function() {
											$('#arrowRight' + index).removeClass('arrow-css-green reveal-left');
											$('#arrowLeft' + index).removeClass('visibility-hidden');
											$('#arrowLeft' + index).addClass('arrow-css-green reveal-right').one('animationend', function() {
												$('#arrowLeft' + index).removeClass('arrow-css-green reveal-right');
												$('#arrowRight' + (index + 1)).removeClass('visibility-hidden');
												$('#arrowRight' + (index + 1)).addClass('arrow-css-green reveal-left').one('animationend', function() {
													$('#arrowRight' + (index + 1)).removeClass('arrow-css-green reveal-left');
													$('#arrowLeft' + (index + 1)).removeClass('visibility-hidden');
													$('#arrowLeft' + (index + 1)).addClass('arrow-css-green reveal-right').one('animationend', function() {
														$('#arrowLeft' + (index + 1)).removeClass('arrow-css-green reveal-right');
														typing(".introjs-tooltiptext", "This is live demo where the elements is inserted into a node in linked list. ", 10, "", function() {
														//	$('.introjs-tooltip').show();
															$('.introjs-nextbutton').show();
														});
														elementIndex++;
													});
												});
											});
										});
									});
								});
							});
						}});
					}});
				}});
			} else {
				noException = false;
			}
		}
		if (noException) {
			lineIndex++;
			scrollToBottom('outputConsoleBody', true);
		} else {
			exceptionThrown = true;
			typing(".introjs-tooltiptext", "Index Outof bound exception is thrown means index is greater than your given index. ", 10, "", function() {
				$('#outputRandom').append('\n<span id="outputline' + lineIndex + '"><span class="ct-code-b-red visibility-hidden exceptionLine1">Exception in thread "main" java.lang.IndexOutOfBoundsException: Index: ' + $('#codeElementIndex'+ lineIndex).text() + ', Size: ' + elementIndex + '</span>' +
					'\n<span class="ct-code-b-red visibility-hidden exceptionLine2">\tat java.util.LinkedList.checkPositionIndex(LinkedList.java:560)</span>' +
					'\n<span class="ct-code-b-red visibility-hidden exceptionLine3">\tat java.util.LinkedList.add(LinkedList.java:507)</span>' +
					'\n<span class="ct-code-b-red visibility-hidden exceptionLine4">\tat LinkedListDemo.main(LinkedListDemo.java:' + codeLineNum + ')</span></span>');
					scrollToBottom('outputConsoleBody', true);
					$('.introjs-nextbutton').show();
			});
		}
		$("#addIndex").text('');
		$("#addElement").text('');
	}

	function linkedListRemoveWithIndex() {
		$('.nextButton').remove();
		var count = 0;
		var index = parseInt($('#codeElement' + lineIndex).html());
		$("#invisibleDiv").append("<span id='innerInvisibleDiv' class='inner-invisible-span'><span id='tempElement'>" + $('#codeElement' + lineIndex).html() + "</span></span>");
		var l1 = $('#codeElement' + lineIndex).offset();
		var l2 = $("#tempElement").offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		TweenMax.from("#tempElement", 1, {top : topLength, left: leftLength, onComplete: function() {
			var size = (elementIndex >> 1);
			if (elementIndex <= index) {
				$("#innerInvisibleDiv").addClass('blinking').one('animationend', function() {
					linkedListremoveElementwithIndex();
					$("#innerInvisibleDiv").remove();
				});
			} else if(index < size) {
				checkingElementsofLinkedListforwads(count, size);
			} else {
				count = elementIndex - 1;
				checkingElementsofLinkedListbackwards(count, size);
			}
		}});
	}		

	function checkingElementsofLinkedListforwads(count, size) {
		var index = parseInt($('#codeElement' + lineIndex).html());
		if(index == count) {
			scrollToIndex(index);
			$("#innerInvisibleDiv").effect("highlight",{color: '#008000'}, 1000, function() {
				$("#indexId" + count).addClass('linkedList-circle').effect("highlight",{color: '#008000'}, 1000, function() {
					$("#innerInvisibleDiv").remove();
					linkedListremoveElementwithIndex();
				});
			});
		} else if (count < size) {
			scrollToIndex(count);
			$("#innerInvisibleDiv").addClass('blinking').one('animationend', function() {
				$("#innerInvisibleDiv").removeClass('blinking');
				$("#indexId" + count).addClass('linkedList-circle blinking').one('animationend', function() {
					$("#indexId" + count).removeClass('linkedList-circle blinking');
					$('body').append('<div class="arrow-div" id="tempArrowDiv"><span id="tempArrow" class="fa fa-long-arrow-right fa-2x arrow-css-gray arrow-right arrow-css-blue"></span></div>');
					$('#tempArrow').offset({top: $('#arrowRight' + (count + 1)).offset().top, left: $('#arrowRight' + (count + 1)).offset().left});
					$('#tempArrow').css({"z-index": "99999999"}).addClass('reveal-left').one('animationend', function() {
						$('#arrowRight' + (count + 1)).addClass("arrow-css-blue");
						$('#tempArrowDiv').remove();
						console.log("Forward action");
						count++;
						checkingElementsofLinkedListforwads(count, size);
					});
				});
			});
		}
	}

	function checkingElementsofLinkedListbackwards(count, size) {
		var index = parseInt($('#codeElement' + lineIndex).html());
		if(count >= size) {
			if(index == count) {
				scrollToIndex(index);
				$("#innerInvisibleDiv").effect("highlight",{color: '#008000'}, 1000, function() {
					$("#indexId" + count).addClass('linkedList-circle').effect("highlight",{color: '#008000'}, 1000, function() {	
						$("#innerInvisibleDiv").remove();
						linkedListremoveElementwithIndex();
					});
				});
			} else if (count > size) {
				scrollToIndex(count);
				$("#innerInvisibleDiv").addClass('blinking').one('animationend', function() {
					$("#innerInvisibleDiv").removeClass('blinking');
					$("#indexId" + count).addClass('linkedList-circle blinking').one('animationend', function() {
						$("#indexId" + count).removeClass('linkedList-circle blinking');
						$('body').append('<div class="arrow-div"><span id="tempArrow" class="fa fa-long-arrow-left fa-2x arrow-css-gray arrow-css-blue arrow-div"></span></div>');
						var l1 = $('#arrowLeft' + (count)).offset();
						$('#tempArrow').offset({top: l1.top, left: l1.left});
						$('#tempArrow').css({"z-index": "99999999"}).addClass('reveal-right').one('animationend', function() {
							$('#arrowLeft' + count).addClass("arrow-css-blue");
							console.log("count before remove : " + count);
							$('#tempArrow').remove();
							count--;
							checkingElementsofLinkedListbackwards(count, size);
						});
					});
				});
			}
		}
	}


	function linkedListremoveElementwithIndex() {
		var index = parseInt($('#codeElement' + lineIndex).html());
		var elementwithIndex;
		var delay = 0;
		if (index > 7) {
			delay = 1;
		}
		if(index == 0 && elementIndex != 0) {
			scrollToIndex(index);
			$('#arrowRight' + (index + 1) + ', #arrowLeft' + (index + 1)).addClass('arrow-css-red');
			TweenMax.to('#arrowRight' + (index + 1) + ', #arrowLeft' + (index + 1), 1 ,{opacity: 0, onComplete: function() {
				$('#arrowRight' + (index + 1) + ', #arrowLeft' + (index + 1)).removeClass('arrow-css-red').css({'opacity': '1'}).addClass('visibility-hidden');
				TweenMax.to("#boxId" + (index), 1, {opacity: 0, delay: delay, top: -100, onComplete:function() {
					$(".arrow-css-blue").removeClass("arrow-css-blue");
					var marginLeft = $('#arrowId' + (index + 1)).outerWidth() + $('#boxId' + (index + 1)).outerWidth();
					elementwithIndex = $('#boxElement' + index).html();
					if(elementwithIndex == "") {
						elementwithIndex = "emptyString";
					}
					l("elementIndex is 1 = " + elementwithIndex);
					$('#outputRandom').append('\n<span class="visibility-hidden" id="outputline' + lineIndex + '">removeStatus for index <span style="color: yellow";>' + $('#codeElement' + lineIndex).text() + '</span>: <span class="ct-code-b-green">' + elementwithIndex + '</span></span>');
					scrollToBottom('outputConsoleBody', true);
					$('#boxId' + (index) + ', #arrowId' + (index + 1)).remove();
					TweenMax.from('#boxId' + (index + 1), 1, {marginLeft: '+=' + marginLeft, onComplete: function() {
						if (index < elementIndex) {
							elementIndex--;
						}
						changeElementId();
						$('#removeByIndexMethod').text('');
						typing(".introjs-tooltiptext", "This is live demo where the elements is removed into a node in linked list. ", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					}});
				}});
			}});
		} else if (elementIndex - 1 == index) {
			scrollToIndex(index);
			var delay = 0;
			if (index > 7) {
				delay = 1;
			}
			$('#arrowRight' + index + ', #arrowLeft' + index).addClass('arrow-css-red');
			TweenMax.to('#arrowRight' + index + ', #arrowLeft' + index, 1 ,{opacity: 0, onComplete: function() {
				$('#arrowRight' + index + ', #arrowLeft' + index).removeClass('arrow-css-red').css({'opacity': '1'}).addClass('visibility-hidden');
				TweenMax.to("#boxId" + index, 1, {opacity: 0, delay: delay, top: -100, onComplete:function() {
					$(".arrow-css-blue").removeClass("arrow-css-blue");
					var marginLeft = $('#arrowId' + index).outerWidth() + $('#boxId' + index).outerWidth();
					elementwithIndex = $('#boxElement' + index).html();
					if(elementwithIndex == "") {
						elementwithIndex = "emptyString";
					}
					$('#outputRandom').append('\n<span class="visibility-hidden" id="outputline' + lineIndex + '">removeStatus for index <span style="color: yellow";>' + $('#codeElement' + lineIndex).text() + '</span>: <span class="ct-code-b-green">' + elementwithIndex + '</span></span>');
					scrollToBottom('outputConsoleBody', true);
					$('#boxId' + index + ', #arrowId' + index).remove();
					if (index < elementIndex) {
						elementIndex--;
					}
					changeElementId();
					$('#removeByIndexMethod').text('');
					typing(".introjs-tooltiptext", "This is live demo where the elements is removed into a node in linked list. ", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				}});
			}});
		} else if (elementIndex > index) {
			scrollToIndex(index);
			var delay = 0;
			if (index > 7) {
				delay = 1;
			}
			$('#arrowRight' + index + ', #arrowLeft' + index).addClass('arrow-css-red');
			$('#arrowRight' + (index + 1) + ', #arrowLeft' + (index + 1)).addClass('arrow-css-red');
			TweenMax.to('#arrowRight' + index + ', #arrowLeft' + index, 1, {opacity: 0, onComplete: function() {
				$('#arrowRight' + index + ', #arrowLeft' + index).removeClass('arrow-css-red').css({'opacity': '1'}).addClass('visibility-hidden');
				TweenMax.to('#arrowRight' + (index + 1) + ', #arrowLeft' + (index + 1), 1 ,{opacity: 0, onComplete: function() {
					$('#arrowRight' + (index + 1) + ', #arrowLeft' + (index + 1)).removeClass('arrow-css-red').css({'opacity': '1'}).addClass('visibility-hidden');
					TweenMax.to("#boxId" + index , 1, {opacity: 0, top: -100, onComplete:function() {
						$(".arrow-css-blue").removeClass("arrow-css-blue");
						var marginLeft = $('#arrowId' + index).outerWidth() + $('#boxId' + index).outerWidth();
						elementwithIndex = $('#boxElement' + index).html();
						if(elementwithIndex == "") {
							elementwithIndex = "emptyString";
						}
						$('#boxId' + index + ', #arrowId' + index).remove();
						TweenMax.from('#arrowId' + (index + 1), 1, {marginLeft: '+=' + marginLeft, onComplete: function() {
							$('#arrowRight' + (index + 1)).removeClass('visibility-hidden').addClass('arrow-css-green reveal-left').one('animationend', function() {
								$('#arrowRight' + (index + 1)).removeClass('arrow-css-green reveal-left');
								$('#outputRandom').append('\n<span class="visibility-hidden" id="outputline' + lineIndex + '">removeStatus for index <span style="color: yellow";>' + $('#codeElement' + lineIndex).text() + '</span>: <span class="ct-code-b-green">' + elementwithIndex + '</span></span>');
								scrollToBottom('outputConsoleBody', true);
								$('#arrowLeft' + (index + 1)).removeClass('visibility-hidden').addClass('arrow-green-css reveal-right').one('animationend', function() {
									$('#arrowLeft' + (index + 1)).removeClass('arrow-css-green reveal-right');
									if (index < elementIndex) {
										elementIndex--;
									}
									changeElementId();
									$('#removeByIndexMethod').text('');
									typing(".introjs-tooltiptext", "This is live demo where the elements is removed into a node in linked list. ", 10, "", function() {
										$('.introjs-nextbutton').show();
									});
								});
							});
						}});
					}});
				}});
			}});
		} else {
			exceptionThrown = true;
			typing(".introjs-tooltiptext", "Index Outof bound exception is thrown means index is greater than your given index. ", 10, "", function() {
				$('#outputRandom').append('\n<span class="" id="outputline' + lineIndex + '"><span class="ct-code-b-red visibility-hidden exceptionLine1">Exception in thread "main" java.lang.IndexOutOfBoundsException: Index: ' + $("#codeElement" + lineIndex).text() + ', Size: ' + elementIndex + '</span>' +
					'\n<span class="ct-code-b-red visibility-hidden exceptionLine2">\tat java.util.LinkedList.checkPositionIndex(LinkedList.java:560)</span>' +
					'\n<span class="ct-code-b-red visibility-hidden exceptionLine3">\tat java.util.LinkedList.remove(LinkedList.java:507)</span>' +
					'\n<span class="ct-code-b-red visibility-hidden exceptionLine4">\tat LinkedListDemo.main(LinkedListDemo.java:' + codeLineNum + ')</span></span>');
					scrollToBottom('outputConsoleBody', true);
					$('#removeByIndexMethod').text('');
					$('.introjs-nextbutton').show();
			});
		}
	}
	
	function linkedListRemoveWithElement() {
		$('.nextButton').remove();
		var count = 0;
		$("#invisibleDiv").append("<span id='innerInvisibleDiv' class='inner-invisible-span'><span id='tempElement'>" + $('#codeElement' + lineIndex).html() + "</span></span>");
		var l1 = $("#codeElement" + lineIndex).offset();
		var l2 = $("#tempElement").offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left
		TweenMax.from("#tempElement", 1, {top : topLength, left: leftLength, onComplete: function() {
			if (count < elementIndex) {
				checkRemoveWithElement(count);
			}
		}});
	}

	function checkRemoveWithElement(count) {
 		var element = $("#removeByElementMethod").html();
 		var noException = true;
			if ($("#boxElement" + count).html() == element) {
				$("#innerInvisibleDiv").effect("highlight", {color: 'green'}, 1000, function() {
					$("#spanRow" + count).effect("highlight", {color: 'green'}, 1000, function() {
					var index = count;
					if(index == 0 && elementIndex != 0) {
						scrollToIndex(count);
						var delay = 0;
						if (index > 7) {
							delay = 1;
						}
						$('#arrowRight' + (count + 1) + ' , #arrowLeft' + (count + 1)).addClass("arrow-css-red");
						TweenMax.to('#arrowRight' + (count + 1) + ', #arrowLeft' + (count + 1), 1 ,{opacity: 0, onComplete: function() {
							$('#arrowRight' + (count + 1) + ', #arrowLeft' + (count + 1)).removeClass('arrow-css-red').css({'opacity': '1'}).addClass('visibility-hidden');
							TweenLite.to("#boxId" + count , 1, {top: -100,opacity : 0, onComplete:function () {
								$("#innerInvisibleDiv").remove();
								var marginLeft = $('#arrowId' + (count + 1)).outerWidth() + $('#boxId' + (count + 1)).outerWidth();
								$('#boxId' + count + ', #arrowId' + (count + 1)).remove();
								TweenMax.from('#boxId' + (count + 1), 1, {marginLeft: '+=' + marginLeft, onComplete: function() {
									if (index < elementIndex) {
										elementIndex--;
									}
									changeElementId();
									$('#outputRandom').append('\n<span class="visibility-hidden" id="outputline' + lineIndex + '">removeStatus for element <span class="ct-code-b-yellow"> '+ str +' </span>: <span class="ct-code-b-green">true</span></span>');
									scrollToBottom('outputConsoleBody', true);
									$('#removeByElementMethod').text('');
									typing(".introjs-tooltiptext", "This is live demo where the elements is removed into a node in linked list. ", 10, "", function() {
										$('.introjs-nextbutton').show();
									});
								}});
							}});
						}});
					} else if (elementIndex - 1 == index) {
						scrollToIndex(count);
						var delay = 0;
						if (index > 7) {
							delay = 1;
						}
						$('#arrowRight' + index + ', #arrowLeft' + index).addClass('arrow-css-red');
						TweenMax.to('#arrowRight' + index + ', #arrowLeft' + index, 1 ,{opacity: 0, onComplete: function() {
							$('#arrowRight' + index + ', #arrowLeft' + index).removeClass('arrow-css-red').css({'opacity': '1'}).addClass('visibility-hidden');
							TweenMax.to("#boxId" + index, 1, {opacity: 0, delay: delay, top: -100, onComplete:function() {
								$("#innerInvisibleDiv").remove();
								var marginLeft = $('#arrowId' + index).outerWidth() + $('#boxId' + index).outerWidth();
								$('#boxId' + index + ', #arrowId' + index).remove();
								if (index < elementIndex) {
									elementIndex--;
								}
								changeElementId();
								$('#outputRandom').append('\n<span class="visibility-hidden" id="outputline' + lineIndex + '">removeStatus for element <span class="ct-code-b-yellow"> '+ str +' </span>: <span class="ct-code-b-green">true</span></span>');
								scrollToBottom('outputConsoleBody', true);
								$('#removeByElementMethod').text('');
								typing(".introjs-tooltiptext", "This is live demo where the elements is removed into a node in linked list. ", 10, "", function() {
									$('.introjs-nextbutton').show();
								});
							}});
						}});
					} else if (elementIndex > index) {
						scrollToIndex(count);
						var delay = 0;
						if (index > 7) {
							delay = 1;
						}
						$('#arrowRight' + index + ', #arrowLeft' + index).addClass('arrow-css-red');
						$('#arrowRight' + (index + 1) + ', #arrowLeft' + (index + 1)).addClass('arrow-css-red');
						TweenMax.to('#arrowRight' + index + ', #arrowLeft' + index, 1, {opacity: 0, onComplete: function() {
							$('#arrowRight' + index + ', #arrowLeft' + index).removeClass('arrow-css-red').css({'opacity': '1'}).addClass('visibility-hidden');
							TweenMax.to('#arrowRight' + (index + 1) + ', #arrowLeft' + (index + 1), 1 ,{opacity: 0, onComplete: function() {
								$('#arrowRight' + (index + 1) + ', #arrowLeft' + (index + 1)).removeClass('arrow-css-red').css({'opacity': '1'}).addClass('visibility-hidden');
								TweenMax.to("#boxId" + index , 1, {opacity: 0, top: -100, onComplete:function() {
									$("#innerInvisibleDiv").remove();
									var marginLeft = $('#arrowId' + index).outerWidth() + $('#boxId' + index).outerWidth();
									$('#boxId' + index + ', #arrowId' + index).remove();
									TweenMax.from('#arrowId' + (index + 1), 1, {marginLeft: '+=' + marginLeft, onComplete: function() {
										$('#arrowRight' + (index + 1)).removeClass('visibility-hidden').addClass('arrow-css-green reveal-left').one('animationend', function() {
											$('#arrowRight' + (index + 1)).removeClass('arrow-css-green reveal-left');
											$('#arrowLeft' + (index + 1)).removeClass('visibility-hidden').addClass('arrow-green-css reveal-right').one('animationend', function() {
												$('#arrowLeft' + (index + 1)).removeClass('arrow-css-green reveal-right');
												if (index < elementIndex) {
													elementIndex--;
												}
												changeElementId();
												$('#outputRandom').append('\n<span class="visibility-hidden" id="outputline' + lineIndex + '">removeStatus for element <span class="ct-code-b-yellow"> '+ str +' </span>: <span class="ct-code-b-green">true</span></span>');
												scrollToBottom('outputConsoleBody', true);
												$('#removeByElementMethod').text('');
												typing(".introjs-tooltiptext", "This is live demo where the elements is removed into a node in linked list. ", 10, "", function() {
													$('.introjs-nextbutton').show();
												});
											});
										});
									}});
								}});
							}}); 
						}});
					}
				});
			});
		} else {
			scrollToIndex(count);
			$("#innerInvisibleDiv").effect("highlight", {color: 'red'}, 1000, function() {
				$("#spanRow" + count).effect("highlight", {color: 'red'}, 1000, function() {
					count++;
					if (count < elementIndex) {
						$('body').append('<div class="arrow-div"><span id="tempArrow" class="fa fa-long-arrow-right fa-2x arrow-css-gray arrow-css-blue"></span></div>');
						$('#tempArrow').offset({top: $('#arrowRight' + count).offset().top, left: $('#arrowRight' + count).offset().left});
						$('#tempArrow').css({"z-index": "99999999"}).addClass('reveal-left').one('animationend', function() {
							$('#arrowRight' + count).addClass("arrow-css-blue");
							$('#tempArrow').remove();
							$('#arrowRight' + count).removeClass("arrow-css-blue");
							checkRemoveWithElement(count);
						});
					} else {
						$("#innerInvisibleDiv").remove();
						$('#outputRandom').append('\n<span class="visibility-hidden" id="outputline' + lineIndex + '">remove status for <span class="ct-code-b-yellow"> '+ str +' </span>: <span class="ct-code-b-red">false</span></span>');
						scrollToBottom('outputConsoleBody', true);
						$('#removeByElementMethod').text('');
						typing(".introjs-tooltiptext", "Element not found.", 10, "", function() {
							$('.introjs-nextbutton').show();
						});
					}
				});
			});
		}
	}
	
	function spaceEmpty(id) {
		$(id).keyup(function(e) {
			intro.refresh();
			var textlength = $(id).text().length;
			var spacelength = $(id).text().trim();
			if (textlength > spacelength && spacelength == 0) {
				spacediff = (textlength - spacelength) + " space(s)";
				str = spacediff;
			} else if($(id).text() == "") {
				str = "emptyString";
			} else {
				str = $(id).html();
			} 
			//$("#" + lineIndex).text($(id).text());
		});
	}

	
	function scrollToBottom(id, action) {
		var container = $('#' + id);
		scrollTo = $('#' + id).find('span').last();
		container.animate({
			scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
		}, function() {
			if (id == 'javaCode') {
				$('#hiddenInsertElementLine').css({width: $('#insertElement' + lineIndex).width(), height: $('#insertElement' + lineIndex).height()})
												.offset({top: $('#insertElement' + lineIndex).offset().top, left: $('#insertElement' + lineIndex).offset().left});
				if (action) {
					$('#hiddenSopCodeLine').css({width: $('#sopCode' + lineIndex).width(), height: $('#sopCode' + lineIndex).height()})
												.offset({top: $('#sopCode' + lineIndex).offset().top, left: $('#sopCode' + lineIndex).offset().left});						
				}
				intro.nextStep();
			}
		});
	}

	function scrollToIndex(index) {
		var container = $('#animationArray');
		scrollTo = $('#boxDiv > div').eq(index);
		container.animate({
			scrollLeft: scrollTo.offset().left - container.offset().left  + container.scrollLeft()
		});
	}

	function changeElementId() {
		$('.box').each(function(index) {
			$(this).attr('id', 'boxId' + index);
		});
		$('.index-box').each(function(index) {
			$(this).attr('id', 'indexId' + index);
		});
		$('.box-arrow').each(function(index) {
			$(this).attr('id', 'arrowId' + (index + 1));
		});
		$('.arrow-css-right').each(function(index) {
			$(this).attr('id', 'arrowRight' + (index + 1));
		});
		$('.arrow-css-left').each(function(index) {
			$(this).attr('id', 'arrowLeft' + (index + 1));
		});
		$('.boxRowIds').each(function(index) {
			$(this).attr('id', 'boxRow' + (index));
		});
		$('.box-css').each(function(index) {
			$(this).attr('id', 'spanRow' + (index));
		});
		$('.box-element').each(function(index) {
			$(this).attr('id', 'boxElement' + (index));
		});
		$('.index-box').each(function(index) {
			$(this).text(index);
		});
	}
	
	function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
		$(typingId).typewriting(typingContent, {
			"typing_interval": typingInterval,
			"cursor_color": cursorColor
		}, function() {
			$(typingId).removeClass('typingCursor');
			typingCallbackFunction();
		});
	}

	function dynamicSteps(sopLine, outputLine) {
		var step = 1;

		var dynamicStep = {
			"element" : "#hiddenInsertElementLine",
			"intro" : ""
		}
		intro.insertOption(intro._currentStep + step++, dynamicStep);

		var dynamicStep = {
			"element" : "#animationArrayBox",
			"intro" : ""
		}
		intro.insertOption(intro._currentStep + step++, dynamicStep);

		if (sopLine) {
			var dynamicStep = {
				"element" : "#hiddenSopCodeLine",
				"intro" : ""
			}
			intro.insertOption(intro._currentStep + step++, dynamicStep);
		}

		if (outputLine) {
			var dynamicStep = {
				"element" : "#outputDiv",
				"intro" : "",
				tooltipClass : "hide"
			}
			intro.insertOption(intro._currentStep + step++, dynamicStep);
		}

		if (elementIndex != 0) {
			var dynamicStep = {
				"element" : "#methodsDiv",
				"intro" : ""
		}
		intro.insertOption(intro._currentStep + step++, dynamicStep);
		} else {
			var dynamicStep = {
				"element" : "#totalAddId",
				"intro" : ""
			}
			intro.insertOption(intro._currentStep + step++, dynamicStep);
		}
	}