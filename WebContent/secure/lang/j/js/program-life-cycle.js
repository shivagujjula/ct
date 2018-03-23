
	function intoJsTest() {
			var introjs = introJs();
			introjs.setOptions({
		        steps: [
		          { 
		       	   	  element: '.writeBtn' ,
		              intro: "Click to write code",
		              position: 'right'
		          },
		          { 
		       	   	  element: '#fileContent' ,
		              intro: "Writing code",
		              position: 'bottom'
		          },
		          {
		          	  element : '.savingFileStep',
		       	      intro:'Saving to Hello.java file',
		       	      position :'right'
		          },
		          {
		          	   element : '.compileBtn',
		          	   intro:'Click to compile',
		          	   position :'right'
		          },
		          {
		          	   element : '.compilingFileStep',
		          	   intro:'Compiling Hello.java',
		          	   position :'top'
		          },
		          {
		          	   element : '.exeBtn',
		          	   intro:'Click to execute',
		          	   position :'right'
		          },
		          {
		          	   element : '.runningFileStep',
		          	   intro:'Running Hello',
		          	   position :'top'
		          },
		          {
	          		element : "#button",
	          		intro : "<ul><li>Click on <b class='ct-code-b-yellow'>Close</b> button to close the Live Demo.</li>" +
	          			"<li>Click on <b class='ct-code-b-yellow'>Restart</b> button to restart the Live Demo.</li></ul>",
	          		position : 'right',

		          },
			 	]
			 });
			introjs.setOption('tooltipPosition', 'bottom');
			introjs.setOption('positionPrecedence', ['left', 'right', 'bottom', 'top'])
			introjs.setOption('showStepNumbers', false);
			introjs.setOption('exitOnOverlayClick', false);
			introjs.setOption('keyboardNavigation', false);
			introjs.setOption('exitOnEsc', false);
			introjs.start();
			
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-skipbutton').hide();
			$('.introjs-bullets').hide();
		}
		
		function typing(id, content, interval, callBackFunction) {
			$('#' + id).typewriting( content , {
				"typing_interval": interval,
				"cursor_color": 'white'
			}, function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}); 
		}
				
		function saveFile() {
			$('.introjs-nextbutton').click();
			$("head").append($('<style>#fileContent:after {width : 0em; }</style>'));
			$('.arrow1').append('<i class="fa fa-arrow-right faa-passing animated"></i>');
			$('#dotJavaFileAboveText').show(1000).text('Saving').addClass('loading');
			$('.dotJavaFile').fadeTo(5000,1,function() {
				$('.arrow1 i').removeClass('faa-passing')
				$('#dotJavaFileAboveText').text('Saved to file').removeClass('loading');
				$('#dotJavaFileBelowText').text('Hello.java').addClass('pulse');/*.on('animationend',function() {*/
					setTimeout(function() {
					$('.introjs-nextbutton').click();
					$('.compileBtn').removeClass('disabled');
					}, 3000);
				/*});*/
			});
		}
		
		function compileFile() {
			$("head").append($('<style>#compileEditor:after {width : 0em; }</style>'));
			$('.gearIcon').fadeTo('3000',1,function() {
				$('.gearIcon').addClass('fa-spin');
				$('#compiling').text('Compiling').addClass('loading');
				setTimeout(function() {
					$('#compiling').text('Compiled').removeClass('loading').css('opacity','0.4');
					$('.gearIcon').removeClass('fa-spin').css('opacity','0.4');
					$('.arrow2').append('<i class="fa fa-arrow-right faa-passing animated"></i>');
					
					$('#dotClassFileAboveText').show(2000).text('Generating').addClass('loading');
					$('.dotClassFile').fadeTo(3000,1,function() {
						$('.arrow2 i').removeClass('faa-passing')
						$('#dotClassFileAboveText').text('Generated').removeClass('loading');
						$('#dotClassFileBelowText').text('Hello.class').addClass('pulse')/*.on('animationend',function() {*/
						setTimeout(function() {
						$('.exeBtn').removeClass('disabled');
							$('.introjs-nextbutton').click();
						}, 3000);
						/*});*/
					});
					
				},2500);
			})
		}
		
		function runFile() {
			$("head").append($('<style>#runEditor:after {width : 0em; }</style>'));
			$('.arrow3').append('<i class="fa fa-arrow-right faa-passing animated"></i>');
			$("#output").slideDown(2500,function() {
				$('.arrow3 i').removeClass('faa-passing')
				$('.introjs-tooltipReferenceLayer').css({'display':'none'})
		 		$('#outputEditor').text('Hola Amigos!!');
				setTimeout(function() {
					$('.introjs-nextbutton').click();
					$(".introjs-tooltip").css("min-width","380px");
					$("#restartBtn, #closeBtn").show().removeClass("opacity00");
				}, 1000);
			});
		}


var programLifeCycleReady = function() {

	intoJsTest();
	$('.restart').hide();
	$('.dotJavaFile').hide();
	$('.dotClassFile').hide();
	$('.gearIcon').hide();
	$('#output').hide();
	$('#dotJavaFileAboveText').hide();
	$('.writeBtn').click(function() {
		$('.introjs-nextbutton').click();
		$('.writeBtn').addClass('disabled');
		$("head").append($('<style>#fileContent:after {width : 0.5em; }</style>'));
		$('.introjs-helperLayer').one('transitionend', function () {
			typing('fileContent','public class Hello {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hola Amigos!!");\n\t}\n}',50, saveFile);
		});
		
	});
	$('.compileBtn').click(function() {
		$('.compileBtn').addClass('disabled');
		$('.introjs-nextbutton').click();
		$("head").append($('<style>#compileEditor:after {width : 0.5em; }</style>'));
		$('.introjs-helperLayer').one('transitionend', function () {
			typing('compileEditor','javac Hello.java',50, compileFile);
		});
	})
	
	$('.exeBtn').click(function() {
		$('.exeBtn').addClass('disabled');
		$("head").append($('<style>#runEditor:after {width : 0.5em; }</style>'));
		$('.introjs-nextbutton').click();
		$('.introjs-helperLayer').one('transitionend', function () {
			typing('runEditor','java Hello',50,runFile);
		});
	});
	
	$("#restartBtn").click(function() {
		location.reload(true);
	});
	$('#closeBtn').click(function() {
		window.parent.$(".ui-dialog-titlebar-close").click();
	});
}