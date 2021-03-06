/**
 * 
 */

var buttonpressed;
var qType = "Copy Writing";
var langType = "No Language";
var launchHelpFlag = false;
var testCasesBtnFlag = false;
var editCloneBtnsFlag = false;

function launchHelp() {
	launchHelpFlag = true;
	testCasesBtnFlag = true;
	editCloneBtnsFlag = true;
	if ($('.introjs-overlay').is(":visible")) {
		//if already visible...
		return false;
	}
	var introQTypeModal = '<div class="modal fade" id="userDetailsModal" tabindex="-1" role="dialog">'+
		'<div class="modal-dialog modal-lg" role="document">'+
			'<div class="modal-content">'+
				'<div class="modal-header btn-primary" style="padding: 10px;">'+
					'<button type="button" style="opacity: 1;" class="close"'+
						'data-dismiss="modal" aria-label="Close">'+
						'<span style="color: white" aria-hidden="true">&times;</span>'+
					'</button>'+
					'<h4 class="modal-title" id="exampleModalLabel">Select what you want to know about</h4>'+
				'</div>'+
				'<div class="modal-body col-xs-12" style="background: white;font-family: monospace;">'+
					'<div class="col-xs-6">'+
					'<div style="color: #009907;text-decoration: underline;font-size: 13px;">Select a question type</div>'+
					'<form style="color: #1c249c;">'+
						'<div class="radio">'+
						 '<label><input type="radio" name="quesradio" qtype="Copy Writing" checked>Copy Writing</label>'+
						'</div>'+
						'<div class="radio">'+
						  '<label><input type="radio" name="quesradio" qtype="Compilation Errors">Compilation Errors</label>'+
						'</div>'+
						'<div class="radio">'+
						  '<label><input type="radio" name="quesradio" qtype="Multiple Choice - Multiple Answers">'+
						  	'Multiple Choice - Multiple Answers</label>'+
						'</div>'+
						'<div class="radio">'+
						  '<label><input type="radio" name="quesradio" qtype="Multiple Choice - Single Answer">'+
						  	'Multiple Choice - Single Answer</label>'+
						'</div>'+
						'<div class="radio">'+
						  '<label><input type="radio" name="quesradio" qtype="Restore Correct Order">'+
						  	'Restore Correct Order</label>'+
						'</div>'+
						'<div class="radio">'+
						  '<label><input type="radio" name="quesradio" qtype="Fill in the Blanks">'+
						  	'Fill in the Blanks</label>'+
						'</div>'+
						'<div class="radio">'+
						  '<label><input type="radio" name="quesradio" qtype="Match the Following">'+
						  	'Match the Following</label>'+
						'</div>'+
						'<div class="radio">'+
						  '<label><input type="radio" name="quesradio" qtype="Spoken Language">'+
						  	'Spoken Language</label>'+
						'</div>'+
					'</form>'+
					'</div>'+
					'<div class="col-xs-6">'+
						'<div style="color: #009907;text-decoration: underline;font-size: 13px;">Select a language type</div>'+
						'<form style="color: #1c249c;">'+
						'<div class="radio">'+
						  '<label><input type="radio" name="langradio" langtype="No Language" checked>No Language</label>'+
						'</div>'+
						'<div class="radio">'+
						  '<label><input type="radio" name="langradio" langtype="C">C</label>'+
						'</div>'+
						'<div class="radio">'+
						  '<label><input type="radio" name="langradio" langtype="C++">C++</label>'+
						'</div>'+
						'<div class="radio">'+
						  '<label><input type="radio" name="langradio" langtype="IoT-Arduino">IoT-Arduino</label>'+
						'</div>'+
					'</form>'+
					'</div>'+
				'</div>'+
				'<div class="modal-footer">'+
					'<a class="btn btn-success" data-dismiss="modal" id="startBtn" onclick="introGuide()">Start</a>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>';

	$("body").append(introQTypeModal);
	qTypeModalFun();
	
	//switch-animate
	$(".switch-animate").eq(0).attr("id", "statusEnabled");
	
	// table button selectors
	$("tr td a").eq(0).attr("id", "editBtn");
	$("tr td a").eq(1).attr("id", "cloneBtn");
	
	for (var i = 0; i < $(".checkbox-inline").length; i++) {
		$(".checkbox-inline").eq(i).attr("id", "checkboxInline" + i);
	}
	
	$(".btn-info strong").parent().attr("id", "hintsBtn");
	
	$(".codingEditorClass").eq(0).attr("id", "compilationErrorEditorDiv");
	$(".codingEditorClass").eq(1).attr("id", "correctContentEditorDiv");
	
	$(".introjs-skipbutton").click(function() {
		introjs.goToStep(introjs._introItems.length);
	});
	
	$("input[type='radio']").on('click', function() {
		qType = $("input[name='quesradio']:checked").attr('qtype');
		
		if ($("input[qtype='Spoken Language']").prop('checked')) {
			$("input[name='langradio']").attr('disabled', true);
			$("input[langtype='No Language']").prop('checked', true);
		} else {
			$("input[name='langradio']").attr('disabled', false);
		}

		langType = $("input[name='langradio']:checked").attr('langtype');
	});
	
	/*$("input[name='quesradio']").on('click', function() {
	$("input[name='langradio']").on('click', function() {
		 langType = $("input[name='langradio']:checked").attr('langtype');
	});*/
}

function qTypeModalFun() {	
	$('#userDetailsModal').modal({
		backdrop: 'static',
		keyboard: false,
		show: true
	});
}
	
function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#course",
			intro : "Select your <span class='ct-code-b-yellow'>course</span> type.",
			position : "right",
		}, {
			element : "#topic",
			intro : "Select your <span class='ct-code-b-yellow'>topic</span>.",
			position : "right" 
		}, {
			element : "#section",
			intro : "Select your <span class='ct-code-b-yellow'>section</span>.",
			position : "right" 
		}, {
			element : "#s2id_courseTag",
			intro : "",
			position : "right" 
		}, {
			element : "#questionType",
			intro : "Select your question type.<span class='errorText'></span>",
			position : "right" 
		}, {
			element : "#difficultyLevel",
			intro : "",
			position : "left" 
		}, {
			element : "#statusEnabled",
			intro : "Click <span class='ct-code-b-yellow'>Yes</span> to enable the question.",
			position : "right" 
		}, {
			element : "#hintsBtn",
			intro : "You can add <span class='ct-code-b-yellow'>hints</span> to the question.",
			position : "left"
		}, {
			element : "#duration",
			intro : "Duration",
			position : "left" 
		}, {
			element : "#questionIntent",
			intro : "Write your question intent.",
			position : "right" 
		}, {
			element : "#s2id_parentId",
			intro : "",
			position : "right" 
		}, {
			element : "#s2id_pending",
			intro : "",
			position : "right" 
		}, {
			element : "#progLanguage",
			intro : "Select your language type.<span class='errorText2'></span>",
			position : "right" 
		}, {
			element : "#s2id_autogen2",
			intro : "",
			position : "right" 
		}, {
			element : "#s2id_autogen5",
			intro : "",
			position : "left"
		}, {
			element : "#displayText",
			intro : "",
			position : "right" 
		}, {
			element : "#checkboxInline0",
			intro : "",
			position : "top" 
		}, {
			element : "#checkboxInline1",
			intro : "",
			position : "top" 
		}, {
			element : "#checkboxInline2",
			intro : "",
			position : "top" 
		}, {
			element : "#checkboxInline3",
			intro : "",
			position : "top" 
		}, {
			element : "#checkboxInline4",
			intro : "",
			position : "top" 
		}, {
			element : "#checkboxInline5",
			intro : "",
			position : "top" 
		}, {
			element : "#checkboxInline6",
			intro : "",
			position : "left" 
		}, {
			element : "#usingTestCodeContainer",
			intro : "",
			position : "left" 
		}, {
			element : "#testMethodName",
			intro : "",
			position : "top" 
		}, {
			element : "#designView",
			intro : "",
			position : "top" 
		}, {
			element : "#addBtn",
			intro : "Click on <span class='ct-code-b-yellow'>add</span> button " +
			"will add your details.",
			position : "left" 
		}, {
			element : "#resetBtn",
			intro : "Click on <span class='ct-code-b-yellow'>reset</span> button will reset your details.",
			position : "left" 
		}/*, {
			element : "#copyWritingUl",
			intro : "",
			position : "right" 
		}, {
			element : "#copyWritingFileNameSpan-1519303708693",
			intro : "",
			position : "right" 
		}*/, {
			element : "#tableDetails",
			intro : "",
			position : "top"
		}, {
			element : "#menuBarHelp",
			intro : "",
			animateStep : 'exitStep',
			tooltipClass : "hide"
		}]
	});
	
	
	
	introjs.onafterchange(function(targetElement) {
		introjs.refresh();
		$('.introjs-nextbutton').show();
		$('.introjs-prevbutton').show();		
		var elementId = targetElement.id;
		switch (elementId) {
		case "course":
			$('.introjs-prevbutton').hide();
			break;			
		case "section":
			$(".introjs-helperLayer").one("transitionend", function() {				
				introjs._introItems.splice(3, 1);
				introjs.insertOption(3, getStep("#s2id_courseTag", "Tags.", "left"));
			});
			break;
		case "questionIntent":
			$(".introjs-helperLayer").one("transitionend", function() {				
				introjs._introItems.splice(introjs._currentStep + 1, 1);
				introjs.insertOption(introjs._currentStep + 1, getStep("#s2id_parentId", "Parent", "left"));
			});
			break;
		case "s2id_parentId":
			$(".introjs-helperLayer").one("transitionend", function() {				
				introjs._introItems.splice(introjs._currentStep + 1, 1);
				introjs.insertOption(introjs._currentStep + 1, getStep("#s2id_pending", "", "left"));
			});
			break;
		/*case "progLanguage":
			$(".introjs-helperLayer").one("transitionend", function() {				
				introjs._introItems.splice(introjs._currentStep + 1, 1);
				introjs.insertOption(introjs._currentStep + 1, getStep("#s2id_autogen2", "", "left"));
			});
			break;*/
		case "s2id_autogen2":
			$(".introjs-helperLayer").one("transitionend", function() {				
				introjs._introItems.splice(introjs._currentStep + 1, 1);
				introjs.insertOption(introjs._currentStep + 1, getStep("#s2id_autogen5", "", "left"));
			});
			break;
		case "statusEnabled":
		case "duration":
			$(".introjs-helperLayer").one("transitionend", function() {	
				if ($(".hintsDialogContent").is(':visible')) {
					setTimeout(function() {
						closeHintsClicked();
					}, 500);
				}
			});
			break;
		case "designView":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (launchHelpFlag) {
					launchHelpFlag = false;
					addDynamicSteps();					
				}
			});
			break;
			//
		case 'course':
			$(".introjs-tooltip").css("width", "220px");
			$(".introjs-helperLayer").one("transitionend", function() {
			});
			break;
		case 'resetBtn':
			$(".introjs-helperLayer").one("transitionend", function() {
				if (testCasesBtnFlag) {
					testCasesBtnFlag = false;
					testCasesBtnSteps();
				}
			});
			break;
		case "tableDetails":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (editCloneBtnsFlag) {
					editCloneBtnsFlag = false;
					editCloneBtnsSteps();
				}
			});
			break;
		/*case "editBtn":
			$(".introjs-helperLayer").one("transitionend", function() {
				if ($("#cloneBtn").is(":visible")) {
					introjs.insertOption(introjs._currentStep + 1, getStep("#cloneBtn", "", "right"));
				}
			});
			break;*/
		case "menuBarHelp":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'exitStep':
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function() {
						introjs.exit();
					}, 1000);
				});
				break;
			}
			break;
		case 'questionType':
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#questionType").change(function () {
					var questionTypeText = $(this).find("option:selected").text();
					if (questionTypeText == qType ) {						
						$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').show();
						$('.errorText').empty();
					} else {
						$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
						$('.errorText').html("<br><br>Please select <span class='ct-code-b-yellow'>" + qType +"</span>.");
					}
				});
				$("#questionType").change();
			});
			break;
		case 'progLanguage':
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				introjs._introItems.splice(introjs._currentStep + 1, 1);
				introjs.insertOption(introjs._currentStep + 1, getStep("#s2id_autogen2", "", "left"));
				$("#progLanguage").change(function () {
					var progLanguageText = $(this).find("option:selected").text();
					if (progLanguageText == langType ) {						
						$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').show();
						$('.errorText2').empty();
					} else {
						$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
						$('.errorText2').html("<br><br>Please select <span class='ct-code-b-yellow'>" + langType +"</span>.");
					}
				});
				if (langType == "C" || langType == "C++") {
	            	$('html, body').animate({
	            		scrollTop: 0
	            	}, 1000);
				}
				
				$("#progLanguage").change();
			});
			break;
		}
		introjs._introItems[introjs._currentStep]["isVisited"] = true;
	});

	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);	
	introjs.start();	
	
	$(".introjs-skipbutton").addClass("pull-left");
	$('.introjs-bullets').hide();
	
	
}

function editCloneBtnsSteps() {
	if ($("#editBtn").is(":visible")) {
		introjs.insertOption(introjs._currentStep + 1, getStep("#editBtn", "", "top"));
		introjs.insertOption(introjs._currentStep + 2, getStep("#cloneBtn", "", "right"));
	}
}

function testCasesBtnSteps() {
	var questionTypeText = $("#questionType :selected").text();
	var progLanguageText = $("#progLanguage :selected").text();
	if((questionTypeText == "Copy Writing" || questionTypeText == "Compilation Errors")
			&& (progLanguageText == "No Language" || progLanguageText == "IoT-Arduino")) {
		introjs.insertOption(introjs._currentStep + 1, getStep("#generateTestCasesBtn", "Click on <span class='ct-code-b-yellow'>" +
				"Generate Test Cases</span> button to generate the test cases.", "left"));
		
	} else if((questionTypeText == "Copy Writing" || questionTypeText == "Compilation Errors") && progLanguageText != "No Language") {
		introjs.insertOption(introjs._currentStep + 1, getStep("#generateTestCasesBtn", "Click on <span class='ct-code-b-yellow'>" +
				"Execute Main File</span> button to execute the main file.", "left"));
	}
}

function addDynamicSteps() {
	var questionTypeText = $("#questionType :selected").text();
	var progLanguageText = $("#progLanguage :selected").text();
	
	// Code for Copy Writing
	
	if(questionTypeText == "Copy Writing" && progLanguageText == "No Language" && $("#className").is(':visible') == true) {
		introjs.insertOption(introjs._currentStep + 1, getStep("#className", "Write your " +
				"<span class='ct-code-b-yellow'>class</span> name.", "right"));		
		introjs.insertOption(introjs._currentStep + 2, getStep("#copyWritingEditor", "Write your " +
				"<span class='ct-code-b-yellow'>code</span> name.", "top"));
	} else if(questionTypeText == "Copy Writing" && progLanguageText == "IoT-Arduino") {
		introjs.insertOption(introjs._currentStep + 1, getStep("#mainFileName", "Write main file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 2, getStep(".copyWritingFileName", "Enter file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 3, getStep(".codingEditorClass", "Type here code.", "top"));
		
	} else if(questionTypeText == "Copy Writing" && (progLanguageText != "No Language" || $("#className").is(':visible') != true)) {
		introjs.insertOption(introjs._currentStep + 1, getStep("#mainFileName", "Write main file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 2, getStep(".copyWritingFileName", "Enter file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 3, getStep(".codingEditorClass", "Type here code.", "top"));
		
		introjs.insertOption(introjs._currentStep + 4, getStep("#testCodeEditor", "Test code editor.", "top"));
		
		introjs.insertOption(introjs._currentStep + 5, getStep("#testCodeOutputDiv", "Test results.", "top"));
		
		introjs.insertOption(introjs._currentStep + 6, getStep(".terminal", "CodeTantra's Live Linux Console!", "top"));
	}
	
	// Code for Compilation Erros
	
	if(questionTypeText == "Compilation Errors" && progLanguageText == "No Language" && $("#className").is(':visible') == true) {
		introjs.insertOption(introjs._currentStep + 1, getStep("#className", "Write your " +
				"<span class='ct-code-b-yellow'>class</span> name.", "right"));
		
		introjs.insertOption(introjs._currentStep + 2, getStep("#correctContentEditor", "Write your " +
				"<span class='ct-code-b-yellow'>code</span> name.", "top"));
				
		introjs.insertOption(introjs._currentStep + 3, getStep("#compilationErrorEditorContainer", "Compilation editor", "top"));
				
	} else if(questionTypeText == "Compilation Errors" && progLanguageText == "IoT-Arduino") {
		introjs.insertOption(introjs._currentStep + 1, getStep("#correctContentMainFileName", "Write main file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 2, getStep(".correctContentFileName", "Write main file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 3, getStep("#" + $("#correctContentTabPanesDiv .editorContainerDiv:eq(0)").attr("id"), "Correct code.", "top"));
		
		introjs.insertOption(introjs._currentStep + 4, getStep("#" + $("#compilationErrorTabPanesDiv .codingEditorClass:eq(0)").attr("id"), "Code with compilations.", "top"));
		
	} else if(questionTypeText == "Compilation Errors" && (progLanguageText != "No Language" || $("#className").is(':visible') != true)) {
		introjs.insertOption(introjs._currentStep + 1, getStep("#correctContentMainFileName", "Write main file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 2, getStep(".correctContentFileName", "Write main file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 3, getStep("#" + $("#correctContentTabPanesDiv .editorContainerDiv:eq(0)").attr("id"), "Correct code.", "top"));
		
		introjs.insertOption(introjs._currentStep + 4, getStep("#" + $("#compilationErrorTabPanesDiv .codingEditorClass:eq(0)").attr("id"), "Code with compilations.", "top"));
		
		introjs.insertOption(introjs._currentStep + 5, getStep("#testCodeEditor", "Test code editor.", "top"));
		
		introjs.insertOption(introjs._currentStep + 6, getStep("#testCodeOutputDiv", "Test results.", "top"));
		
		introjs.insertOption(introjs._currentStep + 7, getStep(".terminal", "CodeTantra's Live Linux Console!", "top"));
	}
	
		// Code for Multiple Choice - Multiple Answers
	
		else if (questionTypeText == "Multiple Choice - Multiple Answers" || questionTypeText == "Spoken Language") {
			
			introjs.insertOption(introjs._currentStep + 1, getStep("#mutipleChoiceEditorContainer", "Enter your multiple choices here.", "top"));
			
			$("#mutipleChoicePreviewContainer").parent().attr("id", "previewDivId");
			
			introjs.insertOption(introjs._currentStep + 2, getStep("#previewDivId", "Click on <span class='ct-code-b-yellow'>Preview Panel</span>" +
					" to view the format of multiple choice question.", "top"));
		}
		// Code for remaining Q types
}

function getStep(element, intro, position, tooltipClass) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	return step;
}

/*function addDynamicSteps() {
	var questionTypeText = $("#questionType :selected").text();
	var progLanguageText = $("#progLanguage :selected").text();
	
	// Code for Copy Writing
	
	if(questionTypeText == "Copy Writing" && progLanguageText == "No Language") {
		introjs.insertOption(introjs._currentStep + 1, getStep("#className", "Write your " +
				"<span class='ct-code-b-yellow'>class</span> name.", "right"));
		
		introjs.insertOption(introjs._currentStep + 2, getStep("#copyWritingEditor", "Write your " +
				"<span class='ct-code-b-yellow'>code</span> name.", "top"));
	} else if(questionTypeText == "Copy Writing" && progLanguageText == "IoT-Arduino") {
		introjs.insertOption(introjs._currentStep + 1, getStep("#mainFileName", "Write main file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 2, getStep(".copyWritingFileName", "Enter file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 3, getStep(".codingEditorClass", "Type here code.", "top"));
		
	} else if(questionTypeText == "Copy Writing" && progLanguageText != "No Language") {
		introjs.insertOption(introjs._currentStep + 1, getStep("#mainFileName", "Write main file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 2, getStep(".copyWritingFileName", "Enter file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 3, getStep(".codingEditorClass", "Type here code.", "top"));
		
		introjs.insertOption(introjs._currentStep + 4, getStep("#testCodeEditor", "Test code editor.", "top"));
		
		introjs.insertOption(introjs._currentStep + 5, getStep("#testCodeOutputDiv", "Test results.", "top"));
		
		introjs.insertOption(introjs._currentStep + 6, getStep(".terminal", "CodeTantra's Live Linux Console!", "top"));
	}
	
	// Code for Compilation Erros
	
	if(questionTypeText == "Compilation Errors" && progLanguageText == "No Language") {
		introjs.insertOption(introjs._currentStep + 1, getStep("#className", "Write your " +
				"<span class='ct-code-b-yellow'>class</span> name.", "right"));
		
		introjs.insertOption(introjs._currentStep + 2, getStep("#correctContentEditor", "Write your " +
				"<span class='ct-code-b-yellow'>code</span> name.", "top"));
				
		introjs.insertOption(introjs._currentStep + 2, getStep("#compilationErrorEditorContainer", "Compilation editor", "top"));
				
	} else if(questionTypeText == "Compilation Errors" && progLanguageText == "IoT-Arduino") {
		introjs.insertOption(introjs._currentStep + 1, getStep("#correctContentMainFileName", "Write main file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 2, getStep(".correctContentFileName", "Write main file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 3, getStep("#" + $("#correctContentTabPanesDiv .editorContainerDiv:eq(0)").attr("id"), "Correct code.", "top"));
		
		introjs.insertOption(introjs._currentStep + 4, getStep("#" + $("#compilationErrorTabPanesDiv .codingEditorClass:eq(0)").attr("id"), "Code with compilations.", "top"));
		
	} else if(questionTypeText == "Compilation Errors" && progLanguageText != "No Language") {
		introjs.insertOption(introjs._currentStep + 1, getStep("#correctContentMainFileName", "Write main file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 2, getStep(".correctContentFileName", "Write main file name.", "top"));
		
		introjs.insertOption(introjs._currentStep + 3, getStep("#" + $("#correctContentTabPanesDiv .editorContainerDiv:eq(0)").attr("id"), "Correct code.", "top"));
		
		introjs.insertOption(introjs._currentStep + 4, getStep("#" + $("#compilationErrorTabPanesDiv .codingEditorClass:eq(0)").attr("id"), "Code with compilations.", "top"));
		
		introjs.insertOption(introjs._currentStep + 5, getStep("#testCodeEditor", "Test code editor.", "top"));
		
		introjs.insertOption(introjs._currentStep + 6, getStep("#testCodeOutputDiv", "Test results.", "top"));
		
		introjs.insertOption(introjs._currentStep + 7, getStep(".terminal", "CodeTantra's Live Linux Console!", "top"));
	}
	
		// Code for Multiple Choice - Multiple Answers
	
		else if (questionTypeText == "Multiple Choice - Multiple Answers") {
			
			introjs.insertOption(introjs._currentStep + 1, getStep("#mutipleChoiceEditorContainer", "Enter your multiple choices here.", "top"));
			
			$("#mutipleChoicePreviewContainer").parent().attr("id", "previewDivId");
			
			introjs.insertOption(introjs._currentStep + 2, getStep("#previewDivId", "Click on <span class='ct-code-b-yellow'>Preview Panel</span>" +
					" to view the format of multiple choice question.", "top"));
		}
}*/