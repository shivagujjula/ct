var introjs;

var usageOfSpacesAndTabsInCReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});

	introJsFunction();
}

function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#code",
			intro : "Let us learn the <span class='ct-code-b-yellow'>coding</span> and <span class='ct-code-b-yellow'>naming</span> conventions in " +
					"<span class='ct-code-b-yellow'>C++</span> using this sample code."
		},
		{
			element : "#include",
			intro : "<span class='ct-code-b-yellow'>#include</span> is used to include both user and system header files."
		},
		{
			element : "#iostream",
			intro : "<span class='ct-code-b-yellow'>iostream</span> is a system header file.<br>It is a part of"+
					" <span class='ct-code-b-yellow'>C++ standard Library</span>.<br>It means"+
					" <span class='ct-code-b-yellow'>I</span>nput/<span class='ct-code-b-yellow'>O</span>utput <span class='b-yellow'>Stream</span>"
		},
		{
			element : "#enterButton",
			intro : "<span class='ct-code-b-yellow'>#include</span> line is always followed by an <span class='ct-code-b-yellow'>enter key</span> " + 
					"<span class='enter-css'>¬</span>."
		},
		{
			element : "#using",
			intro : "<span class='ct-code-b-yellow'>using</span> is a keyword. It means which is going to use mentioned"+
			" namespace in program.<br>It should be in <span class='ct-code-b-yellow'>lowercase</span>."
		},
		{
			element : "#spaceId",
			intro : "Keywords are separated by a single <span class='ct-code-b-yellow'>space</span> " + 
					"<span class='space-css' style='white-space: pre;'> </span>."
		},
		{
			element : "#namespace",
			intro : "<span class='ct-code-b-yellow'>namespace</span> is a keyword.</br>" +
					"It is a container for a set of elements in which each element has a name unique to that set.<br>" +
					" It should be in <span class='ct-code-b-yellow'>lowercase</span> letter."
		
		},
		{
			element : "#spaceId1",
			intro : "Keywords are separated by a single <span class='ct-code-b-yellow'>space</span> " + 
					"<span class='space-css' style='white-space: pre;'> </span>."
		},
		{
			element : "#std",
			intro : "<span class='ct-code-b-yellow'>std</span> is a namespace" +
					" where features of the <b>C++ Standard Library</b>, such as string or vector are declared." +
					"<br>namespace will always <span class='ct-code-b-yellow'>lowercase</span> ."
		},
		{
			element : "#semicolon",
			intro : "<span class='ct-code-b-yellow'>semicolon (;)</span> is used at the end of every statement " +
					"to mark the termination of that statement."
		},
		{
			element : "#enterButton1",
			intro : "<span class='ct-code-b-yellow'>using namespace</span> line is always followed by an <span class='ct-code-b-yellow'>enter key</span> " + 
					"<span class='enter-css'>¬</span>."
		},
		{
			element : "#int",
			intro : "<span class='ct-code-b-yellow'>int</span> is a keyword and all keywords must be written in " +
					"<span class='ct-code-b-yellow'>lowercase</span>."
		},
		{
			element : "#spaceId2",
			intro : "Keywords are separated by a single <span class='ct-code-b-yellow'>space</span> " + 
					"<span class='space-css' style='white-space: pre;'> </span>."
		},
		{
			element : "#main",
			intro : "<span class='ct-code-b-yellow'>main()</span> is a function name.</br>" +
					"Function names are written in <span class='ct-code-b-yellow'>camelCase</span>.</br>" +
					"Function names will always starts with <span class='ct-code-b-yellow'>lowercase</span> letter."
		},
		{
			element : "#openBrace1",
			intro : "The function block starts with an <span class='ct-code-b-yellow'>opening brace</span> <span class='ct-code-b-yellow'>{</span> " +
					"and followed by an <span class='ct-code-b-yellow'>enter key</span> <span class='enter-css'>¬</span>."
		},
		{
			element : "#tabLine1",
			intro : "The lines inside a block are always indented by a single <span class='ct-code-b-yellow'>tab</span> " + 
					"<span class='tab-css' style='white-space: pre'>→	</span>."
		},
		{
			element : "#int1",
			intro : "<span class='ct-code-b-yellow'>int</span> is a primitive data type and hence starts with " +
					"<span class='ct-code-b-yellow'>lowercase</span> letter."
		},
		{
			element : "#i",
			intro : "<span class='ct-code-b-yellow'>i</span> is a variable name.</br>" +
					"Variable names will always starts with <span class='ct-code-b-yellow'>lowercase</span> letter."
		},
		{
			element : "#semicolon1",
			intro : "<span class='ct-code-b-yellow'>semicolon (;)</span> is used at the end of every statement " +
					"to mark the termination of that statement."
		},
		{
			element : "#for",
			intro : "<span class='ct-code-b-yellow'>for</span> is a keyword and hence written in <span class='ct-code-b-yellow'>lowercase</span>."
		},
		{
			element : "#equalTo",
			intro : "<span class='ct-code-b-yellow'>Equals-to (=)</span> symbol is an operator and operators are separated by a single " +
					"<span class='ct-code-b-yellow'>space</span> <span class='space-css' style='white-space: pre;'> </span> on both sides."
		},
		{
			element : "#lessThan",
			intro : "<span class='ct-code-b-yellow'>Less-than (<)</span> symbol is an operator and operators are separated by a single " +
					"<span class='ct-code-b-yellow'>space</span> <span class='space-css' style='white-space: pre;'> </span> on both sides."
		},
		{
			element : "#openBrace2",
			intro : "The for block starts with an <span class='ct-code-b-yellow'>opening brace</span> <span class='ct-code-b-yellow'>{</span> " +
					"and followed by an <span class='ct-code-b-yellow'>enter key</span> <span class='enter-css'>¬</span>."
		},
		{
			element : "#cout",
			intro : "This <span class='ct-code-b-yellow'>cout</span> is used for displaying data on the screen."
		},
		{
			element : "#insert",
			intro : "The operator <span class='ct-code-b-yellow'><<</span> called as <span class='ct-code-b-yellow'>insertion operator</span>"+
			" or <span class='ct-code-b-yellow'>put to operator</span>.The insertion operator inserts the data that follows it into the stream that precedes it. "
		},
		{
			element : "#insert1",
			intro : "The operator <span class='ct-code-b-yellow'><<</span> called as <span class='ct-code-b-yellow'>insertion operator</span>"+
			" or <span class='ct-code-b-yellow'>put to operator</span>.The insertion operator inserts the data that follows it into the stream that precedes it. "
		},
		{
			element : "#out",
			intro : "This <span class='ct-code-b-yellow'>cout</span> will print or display mentioned output on screen."
		},
		{
			element : "#closeBrace1",
			intro : "The for block ends with a <span class='ct-code-b-yellow'>closing brace</span> <span class='ct-code-b-yellow'>}</span> " +
					"and followed by an <span class='ct-code-b-yellow'>enter key</span> <span class='enter-css'>¬</span>."
		},
		{
			element : "#closeBrace2",
			intro : "The method block ends with a <span class='ct-code-b-yellow'>closing brace</span> <span class='ct-code-b-yellow'>}</span>."
		},
		{
			element : "#restartBtn",
			intro : "Click to restart.",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}
		]});

	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		switch (elementId) {
		case "code":
			$('.introjs-nextbutton').show();
			break;
		case "restartBtn":
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
			break;
		default:
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
			break;
		}
	});
	
	introjs.start();
}