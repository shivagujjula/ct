
var differenceBetweenPrintAndPrintln = function() {
	$("#typeWriteId").hide();
	$("#consoleId").hide();
	startIntro();
	$("#startBtn").click(function() {
				$("#consoleId").show();
				$("#typeWriteId").show();
				$("#startBtn").addClass("hidden");
				$('.introjs-nextbutton').show();
				$('.introjs-nextbutton').css("opacity",0);
				$('.introjs-nextbutton').click();
						$("#preBody").addClass("hidden");
					    $("#typeWriteId").removeClass("hidden");
								$("#typeWriteId").typewriting('public class Example {\n\t\tpublic static void main(String[] args) {\n\t\t\t\tSystem.out.<b>print</b>("Ganga");\n\t\t\t\tSystem.out.<b>print</b>("River");\n\t\t\t\tSystem.out.<b>println</b>();\n\t\t\t\tSystem.out.<b>println</b>("Yamuna");\n\t\t\t\tSystem.out.<b>println</b>("River");\n\t\t\t\tSystem.out.<b>print</b>("Godavari");\n\t\t\t\tSystem.out.<b>println</b>("River");\n\t\t}\n}',
									{
										"typing_interval" : 5,
										"cursor_color" : 'white'
									},
									function() {
										$("head").append("<style>.typingCursor::after{ width : 0px; }</style>");
										$("#typeWriteId").addClass("hidden");
										$('.introjs-nextbutton').addClass("opacity00").fadeTo(2000,1);
										$("#preBody").addClass("introjs-showElement introjs-relativePosition").removeClass("hidden");
										$('.introjs-nextbutton').removeClass("opacity00");
										$('.introjs-nextbutton').show();
							});
						});

			 $("#reStartBtn").click(function() {
				location.reload();
				/*window.location.href =  "http://localhost:8080/RecursionProject/difference-between-print-n-println.jsp?restart=1";*/
				window.location.href =  "http://localhost:8080/secure/lang/j/basics/difference-between-print-n-println.jsp?restart=1";
			}); 
			 
			 $('.introjs-nextbutton').click(function() {
				 if (intro._currentStep == 2) {
					   $("#preBody").removeClass("introjs-showElement introjs-relativePosition introjs-fixParent");
	                	$("#printlnId1").removeClass("hidden").addClass("opacity00");
	                }
					if (intro._currentStep == 3) {
						setTimeout(function() {
							$("#printlnId1").fadeTo(1300, 1);
							}, 1300);
						}
					if (intro._currentStep == 4) {
						$("#printlnId1").css('color','white');
	                	$("#printlnId2").removeClass("hidden").addClass("opacity00");
	                }
					
							if (intro._currentStep == 5) {
								setTimeout(function() {
									$("#printlnId2").fadeTo(1300, 1);
								}, 1300);
							}
							if(intro._currentStep == 6) {
								$("#printlnId2").css('color','white');
							}
							if(intro._currentStep == 8) {
								$("#printlnId3").removeClass("hidden").addClass("opacity00");
							}
							
							if (intro._currentStep == 9) {
								setTimeout(function() {
									$("#printlnId3").fadeTo(1300, 1);
								}, 1300);
							}
							if(intro._currentStep == 10) {
								$("#printlnId3").css('color','white');
								$("#printlnId4").removeClass("hidden").addClass("opacity00");
							}
							if (intro._currentStep == 11) {
								setTimeout(function() {
									$("#printlnId4").fadeTo(1300, 1);
								}, 1300);
							}
							if(intro._currentStep == 12) {
								$("#printlnId4").css('color','white');
								$("#printlnId5").removeClass("hidden").addClass("opacity00");
							}
							if (intro._currentStep == 13) {
								setTimeout(function() {
									$("#printlnId5").fadeTo(1300, 1);
								}, 1300);
							}
							if(intro._currentStep == 14) {
								$("#printlnId5").css('color','white');
								$("#printlnId6").removeClass("hidden").addClass("opacity00");
							}
							if (intro._currentStep == 15) {
								setTimeout(function() {
									$("#printlnId6").fadeTo(1300, 1);
								}, 1300);
							}
							if (intro._currentStep == 16) {
								$("#printlnId6").css('color','white');
								$("#reStartBtn").removeClass("hidden").addClass("opacity00");
							}

							if ($("#reStartBtn").hasClass("introjs-showElement")) {
								$('.introjs-nextbutton').hide();
								$("#reStartBtn").fadeTo(1300, 1);
							}
			 });
					
}

