var simpleJavaProgramWithPrintlnReady = function() {

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
				$("#typeWriteId").typewriting('public class <b>Example</b> {\n\t\t public static void <b>main(String[] args)</b> {\n\t\t\t\t System.out.<b>println</b>("Hello"); \n\t\t\t\t System.out.<b>println</b>("I am learning Java.");\n\t\t\t\t System.out.<b>println</b>("Bye!"); \n\t\t}\n}',
						{
							"typing_interval" : 25,
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
				//	location.reload();
		            window.location.href =  "simple-java-program-with-println.jsp?restart=1";
				});

		$('.introjs-nextbutton').click(function() {
	                 if(intro._currentStep == 2){
	                	$("#preBody").removeClass("introjs-showElement introjs-relativePosition introjs-fixParent");
	                }  
	                if (intro._currentStep == 4) {
	                	$("#printlnId1").removeClass("hidden").addClass("opacity00");
	                }
					if (intro._currentStep == 5) {
						setTimeout(function() {
							$("#printlnId1").fadeTo(1300, 1);
						}, 1300);
					}
					if(intro._currentStep == 6) {
						$("#printlnId1").css('color','white');
						$("#printlnId2").removeClass("hidden").addClass("opacity00");
					}
					if (intro._currentStep == 7) {
						setTimeout(function() {
							$("#printlnId2").fadeTo(1300, 1);   
						}, 1300);
					}
					if(intro._currentStep == 8) {
						$("#printlnId2").css('color','white');
						$("#printlnId3").removeClass("hidden").addClass("opacity00");
					}
					if (intro._currentStep == 9) {
						setTimeout(function() {
							$("#printlnId3").fadeTo(1300, 1); 
						}, 1300);
					}
					if (intro._currentStep == 10) {
						$("#printlnId3").css('color','white');
						$("#reStartBtn").removeClass("hidden").addClass("opacity00");
					}

					if ($("#reStartBtn").hasClass("introjs-showElement")) {
						$('.introjs-nextbutton').hide();
						$("#reStartBtn").fadeTo(1300, 1);
					}

				});
}