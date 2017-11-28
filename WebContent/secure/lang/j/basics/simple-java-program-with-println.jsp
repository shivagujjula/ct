<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<script src="/js/jquery-latest.js" type="text/javascript"></script>
<script src="/js/bootstrap.js" type="text/javascript"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="../js-min/sjpwp.min.js"></script>
<title>Basics of println method</title>
</head>
<style>
#preBody, #typeWriteId {
	height: 150px;
	margin-left: 30px;
	margin-top: 110px;
	-moz-tab-size: 2;
	background-color: #fffae6;
	white-space: pre;
}

.introjs-tooltip {
	padding: 5px !important;
}

.introjs-tooltiptext {
	border-top-left-radius: 3px !important;
	border-top-right-radius: 3px !important;
}

.introjs-tooltipbuttons {
	border-bottom-left-radius: 3px !important;
	border-bottom-right-radius: 3px !important;
}

.introjs-tooltiptext, .introjs-tooltipbuttons {
	background-color: #003399;
	color: white;
	padding: 2px;
}

a:focus, a:hover {
	text-decoration: none !important;
}

.introjs-button {
	margin: 10px 2px 2px !important;
	padding: 3px !important;
	background-image: none !important;
	text-shadow: none !important;
	color: white !important;
}

.introjs-prevbutton, .introjs-nextbutton, .introjs-skipbutton {
	border-radius: 3px !important;
}

.introjs-prevbutton {
	background-color: #5bc0de !important;
}

.introjs-nextbutton {
	background-color: green !important;
}

.introjs-skipbutton {
	margin-right: 15px !important;
	background-color: orange !important;
}

.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	margin-top: 105px;
	padding: 2px 0;
	text-align: center;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 10px;
	margin-bottom: 14px;
	height: 140px;
	overflow: auto;
	padding: 10px;
}

.opacity00 {
	opacity: 0.0;
	color : black;
}

#buttonDiv {
	height: 6px;
}

body {
	margin-top: 10px;
}
</style>
<body>
	<script>
		var intro = introJs();
		function startIntro() {
			intro.setOptions({
						exitOnEsc: false,
						exitOnOverlayClick: false,
						showStepNumbers : false,
						keyboardNavigation : false,
						steps : [
								{
									element : '#startBtn',
									intro : "Click to Start",
									position : "right"
								},
								{
									element : '#typeWriteId',
									intro : "Below sample code prints three lines to the console.",
									position : "top"
								},
								{
									element : '#line1',
									intro : "This is the name of the class.",
									position : "top"
								},
								{
									element : '#line2',
									intro : "This is the <b>main</b> method where the program execution starts.",
									position : "top"
								},

								{
									element : '#line3',
									intro : 'The statement System.out.println("Hello");<br/> prints <b>Hello</b> and a new-line (\'\\n\') character after that.',
									position : "bottom"
								},
								{
									element : '#printlnId1',
									intro : "<b>Hello</b> is printed to the console.",
									position : "bottom"
								},
								{
									element : '#line4',
									intro : "This statement prints <br/> <b>I am learning Java</b>.",
									position : "bottom"
								},
								{
									element : '#printlnId2',
									intro : "<b>I am learning Java</b> appears on the next line in the console.",
									position : "bottom"
								},
								{
									element : '#line5',
									intro : "This statement prints <b>Bye!</b>.",
									position : "bottom"
								},
								{
									element : '#printlnId3',
									intro : "<b>Bye!</b> appears on the next line in the console.",
									position : "bottom"
								},
								{
									element : '#line6',
									intro : "This is the end of the <b>main</b> method where the program execution ends.",
									position : "bottom"
								},
								{
									element : '#reStartBtn',
									intro : "Click to Restart.",
									position : "right",
								} ]
					});
			intro.start();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-skipbutton').hide();
			$('.introjs-bullets').hide();
		}
		
	 <% 
		if (request.getParameter("restart") != null) {
	  %>
		setTimeout(function () {
			$("#startBtn").click();
		}, 500);
	<%
	  }
	%> 
		
$(document).ready(function() {
	simpleJavaProgramWithPrintlnReady();
			});
	</script>
	<div class="row text-center" id="buttonDiv">
		<button type="button" class="btn btn-success btn-sm" id="startBtn">Start</button>
		<button type="button" class="btn btn-warning btn-sm hidden"
			id="reStartBtn">Restart</button>
	</div>
	<div class="col-sm-12">
		
		<div class="col-sm-7">
			<pre id="typeWriteId" class=""></pre>
			<pre class="creamPreTab4 hidden" id="preBody">
public class <span id="line1"><b>Example</b></span> {
		 public static void <span id="line2"><b>main(String[] args)</b></span> {
				 <span id="line3">System.out.<b>println</b>("Hello");</span>
				 <span id="line4">System.out.<b>println</b>("I am learning Java.");</span>
				 <span id="line5">System.out.<b>println</b>("Bye!");</span>
		 <span id="line6">}</span>
<span id="line7">}</span>
</pre>
		</div>
		
		<div class="col-sm-5">
		<div class="col-sm-offset-2 col-sm-6">
			<div id="consoleId" >
				<div class="output-console-title-bar">
					<span class="title">Console</span>
				</div>
				<div class="output-console-body">
				    <span class="hidden" id="printlnId1"> Hello</span><br/>
				    <span class="hidden" id="printlnId2"> I am learning Java.</span><br/>
				    <span class="hidden" id="printlnId3"> Bye!</span>
					<span id="runEditor"></span>
				</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
