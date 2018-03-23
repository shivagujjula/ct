var countBox = 0;
var key;
var value;
var introjs;
var typingSpeed = 4;
var valueArr = [];
var recursionCount = 0;
var countGetClicked = 0;
var countRemoveClicked = 0;
var countPutClicked = 0;
var declaringObjValue = true;

var hashMapInActionReady = function() {
	$("[contenteditable=true]").on("click keydown", function(e) {
		$(".length-error-text").remove();
		$(".go-btn").addClass("disabled").addClass('opacity20');
		$(this).parent().parent().find(".go-btn").removeClass("disabled opacity20");
		var methodId = $(this).parent().parent().attr("id");
		$("#methodsBody [contenteditable=true]").not("#" + methodId + " [contenteditable=true]").empty();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if ($(this).text().length > max) {
			$(".introjs-tooltiptext").append("<div class='length-error-text'>Max length was restricted to 8 characters only.</div>")
			e.preventDefault();
		}
		if (e.keyCode == 13) {
	//		console.log("space or enter clicked");
			e.preventDefault();
		}
	});
	
	$("#putBtn").on("click", function() {
		if ($(this).hasClass("disabled")) {
			return;
		}
		$(this).addClass("disabled");
		$("#putKey, #putVal").removeAttr("id");
		key = ($("#putMethod .key").text() == "") ? "empty key": ($("#putMethod .key").text().trim().length == 0) ? $("#putMethod .key").text().length + " space(s)": $("#putMethod .key").html().split(' ').join('&nbsp;');
		value = ($("#putMethod .value").text() == "") ? "empty value" : ($("#putMethod .value").text().trim().length == 0) ? $("#putMethod .value").text().length + " space(s)" : $("#putMethod .value").html().split(' ').join('&nbsp;');
		countPutClicked++;
		
		$("#randomCode").append("\n\t\t<span class='opacity00 code-line'>oldValue = aMap.put(\"<span id='putKey' class='key'>" 
								+ ((key == "empty key") ? "" : (key.substring(2) == "space(s)") ? repeatspaces(key) : key) 
								+ "</span>\", \"<span id='putVal' class='ct-pink-color'>" 
								+ ((value == "empty value") ? "" : (value.substring(2) == "space(s)") ? repeatspaces(value) : value) + "</span>\");</span>");
		
		$("#randomCode").append("\n\t\t<span class='opacity00 sop-line'>System.out.println(\"oldValue returned by put(<span class='key'>" + key 
								+ "</span>, <span class='ct-pink-color'>" + value + "</span>) is : \" + oldValue);</span>");
		scrollToBottom(function() {
			dynamicIntroSteps("put");
		});
	});
	
	$("#getBtn").on("click", function() {
		if ($(this).hasClass("disabled")) {
			return;
		}
		$(this).addClass("disabled");
		key = ($("#getMethod .key").text() == "") ? "empty key" : ($("#getMethod .key").text().trim().length == 0) ? $("#getMethod .key").text().length + " space(s)" : $("#getMethod .key").html().split(' ').join('&nbsp;');
		$("#getKey").removeAttr("id");
		countGetClicked++;
		if (declaringObjValue) {
			declaringObjValue = false;
			$("#randomCode").append("\n\t\t<span class='opacity00 zIndex code-line'>String value = aMap.get(\"<span id='getKey' class='key'>" 
					+ ((key == "empty key") ? "" : (key.substring(2) == "space(s)") ? repeatspaces(key) : key) + "</span>\");</span>");
		} else {
			$("#randomCode").append("\n\t\t<span class='opacity00 zIndex code-line'>value = aMap.get(\"<span id='getKey' class='key'>" 
					+ ((key == "empty key") ? "" : (key.substring(2) == "space(s)") ? repeatspaces(key) : key) + "</span>\");</span>");
		}
		
		$("#randomCode").append("\n\t\t<span class='opacity00 zIndex sop-line'>System.out.println(\"value returned by get(<span class='key'>" + key 
								+ "</span>) is : \" + value);</span>");
		scrollToBottom(function() {
			dynamicIntroSteps("get");
		});
	});
	
	$("#removeBtn").on("click", function() {
		if ($(this).hasClass("disabled")) {
			return;
		}
		$(this).addClass("disabled");
		key = ($("#removeMethod .key").text() == "") ? "empty key" : ($("#removeMethod .key").text().trim().length == 0) ? $("#removeMethod .key").text().length + " space(s)" : $("#removeMethod .key").html().split(' ').join('&nbsp;');
		$("#removeKey").removeAttr("id");
		countRemoveClicked++;
		if (declaringObjValue) {
			declaringObjValue = false;
			$("#randomCode").append("\n\t\t<span class='opacity00 zIndex code-line'>Object value = aMap.remove(\"<span id='removeKey' class='key'>" 
					+ ((key == "empty key") ? "" : (key.substring(2) == "space(s)") ? repeatspaces(key) : key) + "</span>\");");
		} else {
			$("#randomCode").append("\n\t\t<span class='opacity00 zIndex code-line'>value = aMap.remove(\"<span id='removeKey' class='key'>" 
					+ ((key == "empty key") ? "" : (key.substring(2) == "space(s)") ? repeatspaces(key) : key) + "</span>\");");
		}
		$("#randomCode").append("\n\t\t<span class='opacity00 zIndex sop-line'>System.out.println(\"value returned by remove(<span class='key'>" 
									+ key + "</span>) is : \" + value);</span>");
		scrollToBottom(function() {
			dynamicIntroSteps("remove");
		});
	});
	
	introGuide();
}

function dynamicIntroSteps(action) {
	var l = $("#randomCode .code-line").offset(); 
	$("#innerCodeLineDiv").offset({
		"top" : l.top,
		"left" : l.left
	});
	$("#innerCodeLineDiv").css({
		"width" : $("#randomCode .code-line").width(),
		"height" : $("#randomCode .code-line").height()
	});
	var l = $("#randomCode .sop-line").offset(); 
	$("#innerSopLineDiv").offset({
		"top" : l.top,
		"left" : l.left
	});
	$("#innerSopLineDiv").css({
		"width" : $("#randomCode .sop-line").width(),
		"height" : $("#randomCode .sop-line").height()
	});
	var nextStep = {
		element : "#innerCodeLineDiv",
		intro : "",
	}
	introjs.insertOption(introjs._currentStep + 1, nextStep);
	var nextStep = {
		element : "#animationDiv",
		intro : "",
		position: "bootom",
		tooltipClass : "hide",
		action : action
	}
	introjs.insertOption(introjs._currentStep + 2, nextStep);
	var nextStep = {
		element : "#innerSopLineDiv",
		intro : ""
	}
	introjs.insertOption(introjs._currentStep + 3, nextStep);
	introjs.nextStep();
}

function addingElement() {
	checkElementPresent();
}

function gettingElement() {
	introjs._introItems[introjs._currentStep + 1]. intro = "The <b class='ct-code-b-yellow'>get()</b> method returns " 
		+ "the <b class='ct-code-b-yellow'>value</b> associated with given <b class='ct-code-b-yellow'>key</b>, " 
		+  "or returns <b class='ct-code-b-yellow'>null</b> if there no mapping for <b class='ct-code-b-yellow'>key</b>.";
	var elmtFound = false;
	$('#animationJar .set-key').each(function(index) {
		if ($(this).html() == (key == "empty key" ? "" : key.substring(2) == "space(s)" ? repeatspaces(key) : key) && !$(this).hasClass('removed')) {
			$(".created-element-area .keyDiv").addClass("blinking-border-background-blue");
			elmtFound = true;
			value = $("#animationJar #map" + index + " .set-value").text();
			value = (value == "") ? "empty value" : (value.trim().length == 0) ? value.length + " space(s)" : value;
			$("#output").append("<div class='opacity00'>value returned by get(<b class='key'>" + key 
									+ "</b>) is : <b class='ct-pink-color'>" + value + "</b></div>");
			$(this).parent().addClass("blinking-border-background-blue").one("animationend", function() {
				$(".blinking-border-background-blue").removeClass("blinking-border-background-blue");
				$(".created-element-area .set-value").html((value == "empty value") ? "" : (value.substring(2) == "space(s)") ? repeatspaces(value) : value);
				var l = $("#animationJar #map" + index + " .valDiv").offset();
				$(".created-element-area .valDiv").removeClass("opacity00").offset({
					"top" : l.top,
					"left" : l.left
				}).css("border-color", "gray");
				TweenMax.to(".created-element-area .valDiv", 2, {top : 0, left : 0, onComplete:function() {
					$(".created-element-area .valDiv").css({"top": "", "left" : ""});
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				}});
			});
			$('.introjs-tooltip').removeClass('hide');
			var text = "Since the <b class='ct-code-b-yellow'>map</b> contains the key (<b class='ct-code-b-yellow'>" + key 
					+ "</b>), it returns the value (<b class='ct-code-b-yellow'>" + value + "</b>) associated with the key (<b class='ct-code-b-yellow'>" + key + "</b>).";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").addClass("opacity00");
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='pauseBlinkingEffect()'>Next &#8594;</a>");
			});
		}
	});
	if (!elmtFound) {
		$(".created-element-area .keyDiv").addClass("blinking-border-background-red");
		$('#animationJar').addClass('blinking-border-jar-red');
		$("#output").append("<div class='opacity00'>value returned by get(<b class='key'>" + key + "</b>) is : " 
							+ "<b class='ct-code-b-red'>null</b></div>");
		$('.introjs-tooltip').removeClass('hide');
		var text = "Since the <b class='ct-code-b-yellow'>map</b> does not contains the key (<b class='ct-code-b-yellow'>"+ key 
				+ "</b>), it returns <b class='ct-code-b-yellow'>null</b> as the value.";
		
		typing(".introjs-tooltiptext", text);
	}
}

function removingElement() {
	var elmtFound = false;
	introjs._introItems[introjs._currentStep + 1]. intro = "The <b class='ct-code-b-yellow'>remove()</b> method returns " 
		+ "the previous <b class='ct-code-b-yellow'>value</b> associated with given <b class='ct-code-b-yellow'>key</b>, " 
		+  "or returns <b class='ct-code-b-yellow'>null</b> if there is no mapping for <b class='ct-code-b-yellow'>key</b>.";
	$('#animationJar .set-key').each(function(index) {
		if ($(this).html() == (key == "empty key" ? "" : key.substring(2) == "space(s)" ? repeatspaces(key) : key) && !$(this).hasClass('removed')) {
			elmtFound = true;
			value = $("#animationJar #map" + index + " .set-value").text();
			value = (value == "") ? "empty value" : (value.trim().length == 0) ? value.length + " space(s)" : value;
			$("#output").append("<div class='opacity00'>value returned by remove(<b class='key'>" + key + "</b>) is : <b class='ct-pink-color'>" + value + "</b></div>");
			$('.created-element-area .keyDiv').effect( "transfer", { to: $("#animationJar #map" + index + " .keyDiv"), className: "ui-effects-transfer" }, 1000, function() {
				$(".created-element-area > span").remove();
				$("#animationJar #map" + index + " .keyDiv").addClass('blinking-border-background-blue').one("animationend", function() {
					TweenMax.to($("#animationJar #map" + index), 1, {opacity:0, top: -300, onComplete: function() {
						$("#animationJar #map" + index + " .set-key").addClass("removed");
						setTimeout(function() {
							introjs.nextStep();
						}, 500);
					}});
				});
				$('.introjs-tooltip').removeClass('hide');
				var text = "Since the map contains the key-value mapping for the key (<b class='ct-code-b-yellow'>" + key 
						+ "</b>), the call to <b class='ct-code-b-yellow'>remove()</b> method will remove the key-value entry.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").addClass("opacity00");
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='pauseBlinkingEffect()'>Next &#8594;</a>");
				});
			});
		}
	});
	if (!elmtFound) {
		$('#animationJar').addClass('blinking-border-jar-red');
		$(".created-element-area .keyDiv").addClass("blinking-border-background-red");
		$("#output").append("<div class='opacity00'>value returned by remove(<b class='key'>" + key + "</b>) is : <b class='ct-code-b-red'>null</b></div>");
		$('.introjs-tooltip').removeClass('hide');
		var text = "Since the map does not contains the key-value mapping for the key (<b class='ct-code-b-yellow'>" + key 
					+ "</b>), the call to <b class='ct-code-b-yellow'>remove()</b> method <b>will not remove</b> any key-value entry.";
		typing(".introjs-tooltiptext", text);
	}
}

function checkElementPresent() {
	var noDuplicate = true;
	$('#animationJar .set-key').each(function(index) {
		if ($(this).html() == (key == "empty key" ? "" : key.substring(2) == "space(s)" ? repeatspaces(key) : key) && !$(this).hasClass('removed')) {
			var oldValue = $("#animationJar #map" + index + " .set-value").text();
			if (oldValue == "") {
				oldValue = "empty value";
			}
			if (oldValue.trim().length == 0) {
				oldValue = oldValue.length + " space(s)"; 
			}
			$("#output").append("<div class='opacity00'>oldValue returned by put(<b class='key'>" + key 
					+ "</b>, <b class='ct-pink-color'>" + value + "</b>) is : <b class='ct-pink-color'>" 
					+ oldValue + "</b></div>");
			
			$(".created-element-area .keyDiv").addClass('blinking-border-background-blue');
			$(this).parent().addClass('blinking-border-background-blue').one("animationend", function() {
				$(".blinking-border-background-blue").removeClass("blinking-border-background-blue");
				$("body").append("<span class='duplicateKeyVal border'>" + ((value == "empty value") ? "" : (value.substring(2) == "space(s)") ? repeatspaces(value) : value) + "</span>");
				$(".duplicateKeyVal").css("border-color", "gray");
				var l1 = $(".created-element-area .valDiv").offset();
				$(".duplicateKeyVal").offset({
					"top" : l1.top,
					"left" : l1.left
				});
				var l2 = $(".duplicateKeyVal").offset();
				var l3 = $("#animationJar #map" + index + " .valDiv").offset();
				var topLength = l3.top-l2.top;
				var leftLength = l3.left-l2.left;
				TweenMax.to(".duplicateKeyVal", 3, { ease: Bounce.easeOut, top: "+=" + topLength, left: "+=" + leftLength, delay :1.3});
				TweenMax.to($("#animationJar #map" + index + " .valDiv"), 1.5, { ease: Sine.easeOut, top:100 , delay : 2.4, opacity:0 , onComplete: function() {
					
					$(".duplicateKeyVal").remove();
					$("#animationJar #map" + index + " .valDiv").css({
						"opacity" : 1,
						"top" : "0"
					});
					$("#animationJar #map" + index + " .set-value").html(value == "empty value" ? "" : (value.substring(2) == "space(s)") ? repeatspaces(value) : value);
					$(".blinking-border-background-red").removeClass("blinking-border-background-blue");
					TweenMax.to(".created-element-area span", 1, {left:50, opacity:0, onComplete:function() {
						$(".created-element-area span").remove();
						introjs.nextStep();
					}});
				}});
			});
			$('.introjs-tooltip').removeClass('hide');
			var text = "Since the map already contains an entry for the key (<b class='ct-code-b-yellow'>" + key 
						+ "</b>), the old value (<b class='ct-code-b-yellow'>" + oldValue + "</b>) will be replaced with " 
						+ "the new value (<b class='ct-code-b-yellow'>" + value + "</b>).";
			introjs._introItems[introjs._currentStep + 1]. intro = "The <b class='ct-code-b-yellow'>put()</b> method returns " 
					+ "the previous <b class='ct-code-b-yellow'>value</b> associated with <b class='ct-code-b-yellow'>key</b>, " 
					+  "or <b class='ct-code-b-yellow'>null</b> if there is no mapping for <b class='ct-code-b-yellow'>key</b>" + 
					" in the <b class='ct-code-b-yellow'>map</b>.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").addClass("opacity00");
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='pauseBlinkingEffect()'>Next &#8594;</a>");
			});
			noDuplicate = false;
			return;
		}
	});
	if (noDuplicate) {
		$(".created-element-area .keyDiv").addClass("blinking-border-background-blue");
		$('#animationJar').addClass('blinking-border-jar-blue');
		$("#output").append("<div class='opacity00'>oldValue returned by put(<b class='key'>" + key + "</b>, <b class='ct-pink-color'>" 
								+ value + "</b>) is : <b class='ct-code-b-red'>null</b></div>");
		$('.introjs-tooltip').removeClass('hide');
		var text = "Since the key (<b class='ct-code-b-yellow'>" + key + "</b>) does not exist in the <b class='ct-code-b-yellow'>Map</b> " 
					+ "instance, the <b class='ct-code-b-yellow'>put()</b> method call will insert the key-value pair into the <b class='ct-code-b-yellow'>HashMap</b>.";
		introjs._introItems[introjs._currentStep + 1]. intro = "The <b class='ct-code-b-yellow'>put()</b> method returns " 
			+ "the previous <b class='ct-code-b-yellow'>value</b> associated with <b class='ct-code-b-yellow'>key</b>, " 
			+  "or <b class='ct-code-b-yellow'>null</b> if there is no mapping for <b class='ct-code-b-yellow'>key</b>" + 
			" in the <b class='ct-code-b-yellow'>map</b>.";
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-nextbutton").addClass("opacity00");
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='checkPositionOfValue()'>Next &#8594;</a>");
		});
	}
}

function checkPositionOfValue() {
	$(".user-btn").remove();
	$(".created-element-area .keyDiv").removeClass("blinking-border-background-blue");
	$('#animationJar').removeClass('blinking-border-jar-blue');
	var elementOffset = $(".created-element-area > span").offset();
	var elementHeight = $(".created-element-area > span").height();
	var elementWidth = $(".created-element-area > span").width();
	var animationJarOffset = $("#animationJar").offset();
	var animationJarHeight = $("#animationJar").height();
	var animationJarWidth = $("#animationJar").width();
	var topPosition = Math.floor((Math.random() * (animationJarHeight - elementHeight)) + animationJarOffset.top);
	var leftPosition = Math.floor((Math.random() * (animationJarWidth - elementWidth)) + animationJarOffset.left);
	valueArr[countBox] = {left: leftPosition, leftWidth: leftPosition + elementWidth,
												top: topPosition, topHeight: topPosition + elementHeight};
	var flag = true;
	for (var i = 0; i < valueArr.length-1; i++) {
		var p1, p2, p3, p4;
		p1 = [valueArr[countBox].left, valueArr[countBox].leftWidth];
		p2 = [valueArr[i].left, valueArr[i].leftWidth];
		p3 = [valueArr[countBox].top, valueArr[countBox].topHeight];
		p4 = [valueArr[i].top, valueArr[i].topHeight];
		if (comparePositions(p1, p2) && comparePositions(p3, p4)) {
			recursionCount++;
			if (recursionCount >= 50) {
				console.log("too much recursion");
				flag = true;
			} else {
				checkPositionOfValue();
				flag = false;
			}
			break;
		}
	}
	if (flag) {
		recursionCount = 0;
		setPositionOfValue(elementOffset, topPosition, leftPosition);
		return;
	}
}

function comparePositions( p1, p2 ) {
	var r1, r2;
	r1 = p1[0] < p2[0] ? p1 : p2;
	r2 = p1[0] < p2[0] ? p2 : p1;
	return r1[1] > r2[0] || r1[0] === r2[0];
}

function setPositionOfValue(elementOffset, topPosition, leftPosition) {
	$('#animationJar').removeClass('blinking-border-jar-blue');
	TweenMax.to(".created-element-area > span", 1, {top: (topPosition - elementOffset.top), left: (leftPosition - elementOffset.left),
		onComplete: function() {
			$("#animationJar").append("<span class='val-box-width' id='map" + countBox + "'>" 
					+ "<div class='border keyDiv'><span class='key set-key'>" 
					+ ((key == "empty key") ? "" : (key.substring(2) == "space(s)") ? repeatspaces(key) : key) + "</span></div>" 
					+ "<div class='arrowDiv'><span class='fa fa-long-arrow-right arrow fa-2x'></span></div>" 
					+ "<div class='border valDiv'><span class='ct-pink-color set-value'>" 
					+ (((value == "empty value") ? "" : (value.substring(2) == "space(s)") ? repeatspaces(value) : value)) + "</span></div></span>");
			
			$('#animationJar > span:last-child').offset({top: topPosition, left: leftPosition});
			$("#animationJar .keyDiv, #animationJar .valDiv").css("border-color", "gray");
			$(".created-element-area > span").remove();
			setTimeout(function() {
				introjs.nextStep();
			}, 500);
			countBox++;
	}});
}

function emptyTheVals() {
	$("#methodsBody [contenteditable=false]").text("");
	$(".go-btn").addClass("disabled");
}

function introGuide() {
	introjs = introJs();
	$("#restartBtn").click(function() {
		location.reload(true);
	});
	$('#closeBtn').click(function() {
		window.parent.$(".ui-dialog-titlebar-close").click();
	});
	introjs.setOptions({
		steps : [{
			element : "#javaCode",
			intro : ""
		}, {
			element : "#mapObject",
			intro : ""
		}, {
			element : "#codeLine1",
			intro : ""
		}, {
			element : "#animationDiv",
			intro : "",
			tooltipClass : "hide",
			action : "put"
		},  {
			element : "#sopLine1",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#outputDiv",
			tooltipClass : "hide",
		}, {
			element : "#codeLine2",
			intro : ""
		}, {
			element : "#animationDiv",
			intro : "",
			tooltipClass : "hide",
			action : "put"
		}, {
			element : "#sopLine2",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#outputDiv",
			tooltipClass : "hide"
		}, {
			element : "#methodsBody",
			intro : ""
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "javaCode":
			$(".introjs-nextbutton").addClass("opacity00");
			$("[contenteditable=true]").attr("contenteditable", "false");
			var text = "Here we will learn how <b class='ct-code-b-yellow'>put()</b>, <b class='ct-code-b-yellow'>get()</b>" 
						+ " and <b class='ct-code-b-yellow'>remove()</b> methods work in a <b class='ct-code-b-yellow'>HashMap</b>.<br/><br/>"
						+ " We will first add 2 key-value pairs and later the <b>Live Demo</b> " 
						+ "will allow you to <b class='ct-code-b-yellow'>put</b>, <b class='ct-code-b-yellow'>get</b> and <b class='ct-code-b-yellow'>remove</b> multiple times.";
			
			typing(".introjs-tooltiptext", text);
			break;
		
		case "mapObject":
			$(".introjs-nextbutton").addClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var	text = "Let us create a <b class='ct-code-b-yellow'>Map</b> instance of type <b class='ct-code-b-yellow'>HashMap</b> " 
							+ "and stores <b class='ct-code-b-yellow'>key-value</b> pairs of type <b class='ct-code-b-yellow'>String</b>."
				typing(".introjs-tooltiptext", text);
			});
			break;
		case "codeLine1":
		case "codeLine2":
			$(".introjs-nextbutton").addClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#putKey, #putVal").removeAttr("id contenteditable");
				$("#" + elementId  + " > span:first-child").attr({"class" : "outline-none key", "id" : "putKey" });
				$("#" + elementId  + " > span:last-child").attr({"class" : "outline-none ct-pink-color", "id" : "putVal"});
				var id = $("#" + elementId).next().attr("id");
				$("#" + id + " .key").attr("class", "key new-key");
				$("#" + id + " .value").attr("class", "ct-pink-color new-value");
				key = $("#putKey").html();
				value = $("#putVal").html();
				key = (key == "") ? "empty key" : (key.substring(2) == "space(s)") ? repeatspaces(key) : key;
				value = (value == "") ? "empty value" : (value.substring(2) == "space(s)") ? repeatspaces(value) : value;
				
				var text = $("#" + elementId).removeClass("opacity00").html();
				typing("#" + elementId, text, function() {
					var text = "<span>Here we are using the <b class='ct-code-b-yellow'>put()</b> method to insert <b class='ct-code-b-yellow new-key'>" 
								+ key + "</b> as key and <b class='ct-code-b-yellow new-value'>" + value + "</b> as its value. </span>" 
								+ "<span style='white-space:nowrap;'>  (i.e. <span class='ct-code-b-yellow new-key'>" + key +"</span>" 
								+ " <span class='html-arrow ct-pink-color'>&#8594;</span> <span class='ct-code-b-yellow new-value'>" 
								+ value +"</span>)</span><br/><br/>"
								+ "You can also change the key and value.<br/><br/>"
								+ "The value returned by <b class='ct-code-b-yellow'>put()</b> method is stored in a variable " 
								+ "called <b class='ct-code-b-yellow'>oldValue</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#" + elementId  + " > span:first-child").attr({"contenteditable" : true,"maxlength" : "7", "spellcheck":"false"});
						$("#" + elementId  + " > span:last-child").attr({"contenteditable" : true,"maxlength" : "7", "spellcheck":"false"});
						
						charAtEnd("putKey");
						$("[contenteditable=true]").off("keydown keyup");
						$("[contenteditable=true]").on("keydown", function(e) {
							$(".length-error-text").remove();
							var max = $(this).attr("maxlength");
							introjs.refresh();
							if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
								return;
							}
							if ($(this).text().length > max) {
								$(".introjs-tooltiptext").append("<div class='length-error-text'>Max length was restricted to 8 characters only.</div>")
								e.preventDefault();
							}
							if(e.keyCode == 13) {
								e.preventDefault();
							}
						});
						$("[contenteditable=true]").on("keyup", function(e) {
							key = ($("#putKey").text() == "") ? "empty key" : ($("#putKey").text().trim().length == 0) ? $("#putKey").text().length + " space(s)" :$("#putKey").text().split(' ').join('&nbsp;');
							value = ($("#putVal").text() == "") ? "empty value" : ($("#putVal").text().trim().length == 0) ? $("#putVal").text().length + " space(s)" : $("#putVal").text().split(' ').join('&nbsp;');
							$(".new-key").html(key);
							$(".new-value").html(value);
						});
						$("[contenteditable=true]").on("keydown keyup");
					});
				});
			});
			break;
		case "sopLine1":
		case "sopLine2":
			$('#animationJar').removeClass('blinking-border-jar-red');
			$(".introjs-nextbutton").addClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = $("#" + elementId).removeClass("opacity00").html();
				typing("#" + elementId, text, function() {
					$("#" + elementId + " .new-key").removeClass("new-key");
					$("#" + elementId + " .new-value").removeClass("new-value");
					$('.introjs-tooltip').removeClass('hide');
					var text = $(".introjs-tooltiptext").html();
					typing(".introjs-tooltiptext", text);
				});
			});
			break;
		case "methodsBody":
			$(".code-line").removeClass("code-line");
			$(".sop-line").removeClass("sop-line");
			$(".created-element-area").empty();
			$(".introjs-nextbutton").addClass("opacity00");
			$("[contenteditable=false]").attr("contenteditable", "true");
			$(".introjs-nextbutton").addClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				
				if (introjs._currentStep == 10) {
					var text = "Choose any of the above methods and press <span class='duplicate-btn-sm-success'>Go</span> after providing the values.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").addClass("opacity00");
					});
				} else {
					if (countGetClicked >= 1 && countRemoveClicked >= 1 && countPutClicked >= 1) { 
						$("#restartBtn, #closeBtn").removeClass("opacity00").addClass("zIndex");
					}
				}
			});
			break;
		case "animationDiv":
			$("#javaCode [contenteditable=true]").attr("contenteditable", false);
			$(".zIndex").removeClass("zIndex");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".created-element-area").append("<span class='val-box-width' id='map" + countBox + "'>" 
						+ "<div class='border keyDiv'><span class='key set-key'>" 
						+ ((key == "empty key") ? "" : (key.substring(2) == "space(s)") ? repeatspaces(key) : key) + "</span></div>" 
						+ "<div class='arrowDiv'><span class='fa fa-long-arrow-right  arrow fa-2x opacity00'></span></div>" 
						+ "<div class='opacity00 border valDiv'><span class='ct-pink-color set-value'>" 
						+ ((value == "empty value") ? "" : (value.substring(2) == "space(s)") ? repeatspaces(value) : value) + "</span></div></span>");
				var l1;
				var action = introjs._introItems[introjs._currentStep].action;
				if (action == "put") {
					var l1 = $("#putKey").offset();
					$(".created-element-area .valDiv").removeClass("opacity00");
					$("#putKey, #putVal").addClass("zIndex").effect("highlight", {color: '#FFFFFF'}, 2000, function () {
						$(this).removeClass("zIndex");
					});
					var l2 = $("#putVal").offset();
					$(".created-element-area .set-value").offset({
						"top" : l2.top,
						"left" : l2.left
					});
					TweenMax.to(".created-element-area .set-value", 1, {top : 0, left : 0, onComplete:function() {
						TweenMax.to($(".created-element-area .valDiv"), 1, {borderColor: "gray"});
					}});
				} else if (action == "get") {
					var l1 = $("#getKey").offset();
					$("#getKey").addClass("zIndex").effect("highlight", {color: '#FFFFFF'}, 2000, function () {
						$(this).removeClass("zIndex");	
					});
				} else if (action = "remove") {
					$(".created-element-area .valDiv, .created-element-area .arrowDiv").remove();
					var l1 = $("#removeKey").offset();
					$("#removeKey").addClass("zIndex").effect("highlight", {color: '#FFFFFF'}, 2000, function () {
						$(this).removeClass("zIndex");	
					});
				}
				$(".created-element-area .set-key").offset({
					"top" : l1.top,
					"left" : l1.left
				});
				TweenMax.to(".created-element-area .set-key", 1, {top : 0, left : 0, onComplete:function() {
					emptyTheVals();
					TweenMax.to($(".created-element-area .keyDiv"), 1, {borderColor: "gray", onComplete:function() {
						$(".introjs-nextbutton").addClass("opacity00");
						if (action == "put") {
							$(".created-element-area .arrow").removeClass("opacity00").addClass("reveal-left").one("animationend", function() {
								addingElement();
							});
						} else if (action == "get") {
							gettingElement();
						} else if (action == "remove") {
							removingElement();
						}
					}});
				}});
			});
			break;
		case "outputDiv":
			$(".zIndex").removeClass("zIndex");
			$("#animationJar .keyDiv").removeAttr("style");
			$("#animationJar .keyDiv").css("border-color", "gray");
			var container = $('.output-console-body');
			scrollTo = $('#output > div:last-child');
				container.animate({
				scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
			});
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#output > div:last-child").fadeTo(1000, 1, function() {
					$(this).removeClass("opacity00");
					$("#output > div:last-child > b:last-child").addClass("zIndex").effect("highlight", {color: '#f4ed15'}, 2000, function () {
						introjs.nextStep();
					});
				});
			});
			break;
		case "innerCodeLineDiv" :
			$("#restartBtn, #closeBtn").removeClass("zIndex");
			$(".code-line").addClass("zIndex");
			$(".introjs-nextbutton").addClass("opacity00");
			$("[contenteditable=true]").attr("contenteditable", "false");
			var action = introjs._introItems[introjs._currentStep + 1].action;
			if (action == "put") {
			var text = "Here we are using the <b class='ct-code-b-yellow'>put()</b> method to insert <b class='ct-code-b-yellow'>" 
						+ key + "</b> as key and <b class='ct-code-b-yellow'>" + value + "</b> as its value.<br/><br/>"
						+ "The value returned by <b class='ct-code-b-yellow'>put()</b> method is stored in a variable " 
						+ "called <b class='ct-code-b-yellow'>oldValue</b>.";
			} else if (action == "get") {
				text = "The <b class='ct-code-b-yellow'>get()</b> method returns the <b class='ct-code-b-yellow'>value</b> associated " 
						+ "with the given key (<b class='ct-code-b-yellow'>" + key + "</b>), or returns <b class='ct-code-b-yellow'>null</b> if " 
						+ "there is no mapping for the <b class='ct-code-b-yellow'>key</b>."		
			} else if (action == "remove") {
				text = "The <b class='ct-code-b-yellow'>remove()</b> method removes the key-value mapping of the " 
						+ "given key (<b class='ct-code-b-yellow'>" + key + "</b>) from the map if present.";
			}
			
			introjs._introItems[introjs._currentStep].intro = text;
			$(".introjs-helperLayer").one("transitionend", function() {
				var codeText = $("#randomCode .code-line").removeClass("opacity00").html();
				typing($("#randomCode .code-line"), codeText);
			});
			break;
		case "innerSopLineDiv" :
			$('#animationJar').removeClass('blinking-border-jar-red');
			$(".created-element-area .keyDiv").removeClass("blinking-border-background-red");
			$(".sop-line").addClass("zIndex");
			$(".introjs-nextbutton").addClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = $("#randomCode .sop-line").removeClass("opacity00").html();
				typing($("#randomCode .sop-line"), text, function() {
					$(".introjs-nextbutton").removeClass("opacity00 introjs-disabled");
					var nextStep = {
						element : "#outputDiv",
						tooltipClass : "hide"
					}
					introjs.insertOption(introjs._currentStep + 1, nextStep);
					var nextStep = {
						element : "#methodsBody",
						intro : "Choose any of the above methods and press <span class='duplicate-btn-sm-success'>Go</span> after providing the values."
					}
					introjs.insertOption(introjs._currentStep + 2, nextStep);
				});
			});
			break;
		}
	});
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
}

function typing(selector, text, callBackFunction) {
	$(".introjs-nextbutton").addClass("opacity00");
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function scrollToBottom(callBackFunction) {
	var container = $('#javaCode');
	scrollTo = $('#randomCode > span:last-child');
		container.animate({
		scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
	}, function() {
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

function pauseBlinkingEffect() {
	$(".user-btn").remove();
	$(".blinking-border-background-blue").css('animation-iteration-count', "1");
}

function repeatspaces(str) {
	var len = parseInt(str.substring(0, 1)); 
	var spacesString = "&nbsp;";
	for (var i = 0; i < len - 1; i++) {
		spacesString = spacesString + "&nbsp;"
	}
	return spacesString;
}