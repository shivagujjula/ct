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
<!-- <script src="../js-min/dbpnpln.min.js"></script> -->
<script src="../js-min/dbpnpln.min.js"></script>
<title>Difference between print and println methods</title>
</head>
<style>
#preBody, #typeWriteId {
	height: 220px;
	margin-left: 30px;
	margin-top: 95px;
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
	margin-top: 95px;
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
	height: 200px;
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
								intro : "Below code uses <b>print</b>() and <b>println</>() methods.",
								position : "top"
							},
							{
								element : '#line3',
								intro : "This statement uses <strong>print</strong> method to print <b>Ganga</b>.",
								position : "bottom"
							},
							{
								element : '#printlnId1',
								intro : "<b>Ganga</b> is printed to the console.",
								position : "bottom"
							},

							{
								element : '#line4',
								intro : "This statement also uses the <strong>print</strong> method to print <b>River</b>.",
								position : "bottom"
							},
							{
								element : '#printlnId2',
								intro : "You will notice that <b>River</b> is printed next to <b>Ganga</b> in the same line in the console.",
								position : "bottom"
							},
							{
								element : '#line5',
								intro : "The <b>println</b> method prints a new-line character ('\\n'). The new-line character is an invisible character. Text editors/renderes end the line at '\\n' and display the remaining text in the next line.",
								position : "bottom"
							},
							{
								element : '#consoleId',
								intro : "You will notice that there is no visible change in the console, since '\\n' is an invisible character.",
								position : "left"
							},
							{
								element : '#line6',
								intro : "The <b>println</b> method first prints <b>Yamuna</b> and a new-line character after it.",
								position : "bottom"
							},
							{
								element : '#printlnId3',
								intro : "<b>Yamuna</b> is printed in the next line, because a new-line character was already printed by the previous statement. <br/> You will also notice that the next output will appears in the next line, since a '\\n' char is printed by the <b>println</b> method after printing <b>Yamuna</b>.",
								position : "bottom"
							},
							{
								element : '#line7',
								intro : "It will print <b>River</b> and also a new-line character after it.",
								position : "bottom"
							},
							{
								element : '#printlnId4',
								intro : "You will notice that <b>River</b> is printed in the next line, since a '\\n' was already printed after <b>Yamuna</b> in the previous line.",
								position : "bottom"
							},
							{
								element : '#line8',
								intro : "Since we are using <b>print</b> method only <b>Godavari</b> is printed without the new-line char after <b>Godavari</b>.",
								position : "bottom"
							},
							{
								element : '#printlnId5',
								intro : "You will notice that <b>Godavari</b> is printed in the next line, , since a '\\n' was already printed after <b>River</b> in the previous line.",
								position : "bottom"
							},
							{
								element : '#line9',
								intro : "This statement prints<br/> <b>River</b>",
								position : "bottom"
							},
							{
								element : '#printlnId6',
								intro : "<b>River</b> is printed next to <b>Godavari</b> in the same line because we used <b>print</b> and not <b>println</b> method while printing <b>Godavari</b>.",
								position : "bottom"
							},
							{
								element : '#line10',
								intro : "This is the end of the <b>main</b> method where the program execution ends.",
								position : "bottom"
							},
							{
								element : '#reStartBtn',
								intro : "Click to Restart",
								position : "right",
							} ]
				});
		intro.start();
		console.log(intro);
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
			}, 1000);
		<%
			}
		%> 
		
		$(document).ready(function() {
			differenceBetweenPrintAndPrintln();
		});
	</script>
	<div class="row text-center" id="buttonDiv">
		<button type="button" class="btn btn-success btn-sm" id="startBtn">Click
			Here</button>
		<button type="button" class="btn btn-warning btn-sm hidden"
			id="reStartBtn">Restart</button>
	</div>
	<div class="col-sm-12">
		<div class="col-sm-7">
			<pre id="typeWriteId" class=""></pre>
			<pre class="creamPreTab4 hidden" id="preBody">
public class <span id="line1">Example</span> {
		public static void <span id="line2">main(String[] args)</span> {
				<span id="line3">System.out.<b>print</b>("Ganga");</span>
				<span id="line4">System.out.<b>print</b>("River");</span>
				<span id="line5">System.out.<b>println</b>();</span>
				<span id="line6">System.out.<b>println</b>("Yamuna");</span>
				<span id="line7">System.out.<b>println</b>("River");</span>
				<span id="line8">System.out.<b>print</b>("Godavari");</span>
				<span id="line9">System.out.<b>println</b>("River");</span>
		<span id="line10">}</span>
<span id="line11">}</span>
</pre>
	 </div>
		<div class="col-sm-5">
			<div class="col-sm-offset-2 col-sm-6">
				<div id="consoleId">
					<div class="output-console-title-bar">
						<span class="title">Console</span>
					</div>
					<div class="output-console-body">
					    <span class="hidden" id="printlnId1"> Ganga</span><span class="hidden" id="printlnId2">River</span><br/>
					    <span class="hidden" id="printlnId3"> Yamuna</span><br/>
					    <span class="hidden" id="printlnId4"> River</span><br/>
					    <span class="hidden" id="printlnId5"> Godavari</span><span class="hidden" id="printlnId6">River</span>
						<span id="runEditor"></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
