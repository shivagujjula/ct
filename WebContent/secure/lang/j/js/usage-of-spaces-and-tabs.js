var introjs;

var usageOfSpacesAndTabsReady = function() {

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
					"<span class='ct-code-b-yellow'>Java</span> using this sample code."
		},
		{
			element : "#public",
			intro : "<span class='ct-code-b-yellow'>public</span> is a keyword and all keywords are written in " +
					"<span class='ct-code-b-yellow'>lower-case</span>."
		},
		{
			element : "#class",
			intro : "<span class='ct-code-b-yellow'>class</span> is also a keyword and hence written in " +
					"<span class='ct-code-b-yellow'>lower-case</span>."
		},
		{
			element : "#spaceId1",
			intro : "Keywords are separated by a single <span class='ct-code-b-yellow'>space</span> " + 
					"<span class='space-css' style='white-space: pre;'> </span>."
		},
		{
			element : "#spacesAndTabsDemo",
			intro : "This is name of a class specified in <span class='ct-code-b-yellow'>camelCase</span> letters.</br>" +
					"A class name will always starts with <span class='ct-code-b-yellow'>captial</span> letter."
		},
		{
			element : "#openBrace1",
			intro : "The class block starts with an <span class='ct-code-b-yellow'>opening Brace</span> <span class='ct-code-b-yellow'>{</span>."
		},
		{
			element : "#enterButton1",
			intro : "<span class='ct-code-b-yellow'>opening brace</span> is always followed by an <span class='ct-code-b-yellow'>enter</span> " + 
					"<span class='enter-css'>¬</span>."
		},
		{
			element : "#tabLine1",
			intro : "The lines inside a block are always indented by a single <span class='ct-code-b-yellow'>tab</span> " + 
					"<span class='tab-css' style='white-space: pre'>→	</span>"
		},
		{
			element : "#static",
			intro : "<span class='ct-code-b-yellow'>static</span> is a keyword and hence written in <span class='ct-code-b-yellow'>lower-case</span>."
		},
		{
			element : "#void",
			intro : "<span class='ct-code-b-yellow'>void</span> is a keyword and hence written in <span class='ct-code-b-yellow'>lower-case</span>."
		},
		{
			element : "#main",
			intro : "<span class='ct-code-b-yellow'>main</span> is the method name.</br>" +
					"Method names are written in <span class='ct-code-b-yellow'>camelCase</span>.</br>" +
					"Method names will always starts with <span class='ct-code-b-yellow'>lower-case</span> letter."
		},
		{
			element : "#string",
			intro : "<span class='ct-code-b-yellow'>String</span> is a reference data types and hence starts with " +
					"<span class='ct-code-b-yellow'>captial</span> letter."
		},
		{
			element : "#args",
			intro : "<span class='ct-code-b-yellow'>args</span> is the variable name.</br>" +
					"Variable names are written in <span class='ct-code-b-yellow'>camelCase</span>.</br>" +
					"Variable names will always starts with <span class='ct-code-b-yellow'>lower-case</span> letter."
		},
		{
			element : "#openBrace2",
			intro : "The method block starts with an <span class='ct-code-b-yellow'>opening Brace</span> <span class='ct-code-b-yellow'>{</span> " +
					"and followed by an <span class='ct-code-b-yellow'>enter key</span> <span class='enter-css'>¬</span>."
		},
		{
			element : "#for",
			intro : "<span class='ct-code-b-yellow'>for</span> is a keyword and hence written in <span class='ct-code-b-yellow'>lower-case</span>."
		},
		{
			element : "#int",
			intro : "<span class='ct-code-b-yellow'>int</span> is a primitive data types and hence starts with " +
					"<span class='ct-code-b-yellow'>lower-case</span> letter."
		},
		{
			element : "#equalTo",
			intro : "<span class='ct-code-b-yellow'>Equals-to (=)</span> symbol is an operator and operators are separated by single " +
					"<span class='ct-code-b-yellow'>space</span> <span class='space-css' style='white-space: pre;'> </span> on both sides."
		},
		{
			element : "#lessThan",
			intro : "<span class='ct-code-b-yellow'>Less-than (<)</span> symbol is an operator and operators are separated by single " +
					"<span class='ct-code-b-yellow'>Space</span> <span class='space-css' style='white-space: pre;'> </span> on both sides."
		},
		{
			element : "#openBrace3",
			intro : "The for block starts with an <span class='ct-code-b-yellow'>opening Brace</span> <span class='ct-code-b-yellow'>{</span> " +
					"and followed by an <span class='ct-code-b-yellow'>enter key</span> <span class='enter-css'>¬</span>."
		},
		{
			element : "#closeBrace1",
			intro : "Here the for block ends with a <span class='ct-code-b-yellow'>closing Brace</span> <span class='ct-code-b-yellow'>}</span> " +
					"and followed by an <span class='ct-code-b-yellow'>enter key</span> <span class='enter-css'>¬</span>."
		},
		{
			element : "#closeBrace2",
			intro : "Here the method block ends with a <span class='ct-code-b-yellow'>closing Brace</span> <span class='ct-code-b-yellow'>}</span> " +
					"and followed by an <span class='ct-code-b-yellow'>enter key</span> <span class='enter-css'>¬</span>."
		},
		{
			element : "#closeBrace3",
			intro : "The class block ends with an <span class='ct-code-b-yellow'>closing Brace</span> <span class='ct-code-b-yellow'>}</span>."
		},
		{
			element : "#restartBtn",
			intro : "Click to Restart",
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
