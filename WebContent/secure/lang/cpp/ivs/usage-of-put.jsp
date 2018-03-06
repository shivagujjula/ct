<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<script src='/secure/lang/cpp/js-min/uop.min.js'></script>
<title>Usage of put()</title>
</head>

<style>
#infoDiv {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 15px;
	padding: 11px 12px;
	min-height: 141px;
}

.margin-top-2 {
	margin-top: 2%;
}

#heading {
	margin-top:10px;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	height: 120px;
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

.z-index9999999 {
	z-index: 9999999;
	background: white;
}

.input-char {
	width: 10px;
	/* padding: 8px; */
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}

.output-char {
	width: 30px;
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}

.ct-sgreen-color {
	color: springgreen;
}

.ct-orange-color {
	color: orange;
}

.ct-code-b-gold {
	color: gold;
}

.ct-green-color {
	color: green;
	font-weight : bold;
}
.ct-color-red {
	color: red;
	font-weight : bold;
}

.ct-Maroon-color {
	color: Maroon;
}

.ct-greenyellow-color {
	color: greenyellow;
}
.ct-blue-color {
	color: blue;
	font-weight : bold;
}
.ct-color-gold {
	color: gold;
	font-weight : bold;
}

.ct-color-spring {
	color: mediumspringgreen;
}

.ct-code-b-teal {
	font-family: message-box;
	color: teal;
}
#restart {
    margin-top: 13%;
}
.panel-heading {
	padding: 2px;
}
.panel-body {
	padding: 18px;
	min-width: 91px;
    min-height: 36px;	
}

.panel-group {
	margin-top: 18px;
	margin-bottom: 7px;
}

.creamPreTab4 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 13px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
}

.ui-effects-transfer {
	border: 1px solid green;
	 z-index: 9999999 !important;
}

.user-btn {
	background: green;
}

.introjs-tooltip {
	min-width: 240px;
}

.fa-arrow-right {
	color: green;
	position: relative;
	-webkit-animation: myfirst 1s infinite; /* Chrome, Safari, Opera */
	-webkit-animation-direction: alternate; /* Chrome, Safari, Opera */
	animation: myfirst 1s infinite;
	/* animation-direction:alternate; */
}

.finalText {
	border: 1px solid gray;
	border-radius: 8px;
	min-height: 45px;
	padding: 6px;
}

.syntax {
	background: black;
	border-radius: 6px;
	color: white;
	padding: 2px;
	font-family: monospace;
}

div, span {
	position: relative;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: 1;
 }

@keyframes blink {
	50% {
		background: orange;
	}
}
.output-console-title-bar {
	background-color: rgba(165, 165, 165, 0.5);
}

</style>

<body>
<div class="main-div col-xs-12">
	<div class="row text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-2'>
			<span>Usage of put( )</span>
		</h3>
	</div>
	<div class="col-xs-9 col-xs-offset-1 margin-top-2 infoDiv" id="infoDiv">
		<ul>
			<li id="list1" class="opacity00">The function <span class="ct-code-b-teal">put( )</span> prints a single character on to the console.</li>
			<li id="list2" class="opacity00"><span class="ct-code-b-teal">put( )</span> is a member of <span class='ct-green-color'>ostream</span> class.</li>
			<li id="list3" class="opacity00">The format of <span class="ct-code-b-teal">put( )</span> function : <span class="syntax">put(variable);</span></li>
			<li id="list4" class="opacity00">When we enter a character using keyboard, the <span class="ct-Maroon-color">get( )</span> reads 
				and converts it to <span class="ct-green-color">ASCII</span> value then stores it in the memory.</li>
			<li	id="list5" class="opacity00">The <span class="ct-Maroon-color">get( )</span> is used to read where as the 
				<span class="ct-code-b-teal">put( )</span> is used to write or send the content to the output device.
				<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></li>
		</ul>
	</div>
	<div class='col-xs-12 margin-top-2'>
		<div class="col-xs-4 col-xs-offset-1">
<pre id="preTableDiv" class="creamPreTab4 opacity00">
#include &lt;<span class="ct-green-color">iostream</span>&gt;
<span class="ct-color-red">using</span> <span class="ct-green-color">namespace</span> std;
<span id="main"><span class="ct-blue-color">int</span> main() </span> {
	<span id="line2">char ch;</span>
	<span id="line3">cout << "Enter a character : "; </span>
	<span id="line4">ch = cin.get(); </span> 
	<span id="line5">cout.put(ch);</span>
<span id="end">}</span>
	</pre>
		</div>
		<div class="col-xs-3">
			<div class="col-xs-12 " style="margin-top: 3%">
				<div class="col-xs-6 col-xs-offset-3 text-center visibility-hidden" id="memoryBox">
					<div class="panel-group" id="panelBox">
						<div class="panel panel-info">
							<div class="panel-heading"><b>ch</b></div>
							<div class="panel-body" id="panelBody"></div>
						</div>
		 			</div>
			 		<div>
			 		<span id="addressId">2034</span>
			 		</div>
				</div>
			</div>
		</div>
		<div class="col-xs-3">
			<div id="consoleId" class="center opacity00"  style="margin-top: 3%">
				<div class="output-console-title-bar">
					<span class="title"><b>Console</b></span>
				</div>
				<div class="output-console-body" id="consoleBodyDiv">
					<div id="typeChar" class="visibility-hidden">Enter a character :  <input id='inputChar' maxlength='1' class='input-char' tabindex='0'/></div>
					<div id='inputValue'><input id='inputChar' maxlength='1' class='input-char' tabindex='0'/></div>
					<span id="typingChar"><input id='outputChar' maxlength='0' class='output-char' tabindex='0' contenteditable="false"/></span>
				</div>
			</div>
		</div>
	</div>
	<div class='col-xs-12 margin-top-2'>
		<div class="col-xs-3 col-xs-offset-1">
	<pre id="preDiv" class="creamPreTab4 visibility-hidden" style="margin-top: 8%">
#include &lt;<span class="ct-green-color">iostream</span>&gt;
<span class="ct-color-red">using</span> <span class="ct-green-color">namespace</span> std;
<span id="main1"><span class="ct-blue-color">int</span> main() </span> {
	<span id="line6" class="">cout.put('<span id="constantId">p</span>');</span>
	<span id="line7" class="">cout.put(65);</span>
<span id="end1">}</span>
	</pre>
		</div>
		<div class="col-xs-4 col-xs-offset-1">
			<div id="consoleId1" class="center opacity00"  style="margin-top: 8%">
				<div class="output-console-title-bar">
					<span class="title"><b>Console</b></span>
				</div>
				<div class="output-console-body" id="consoleBodyDiv">
					<span id="constantChar"></span><br><br>
					<span id="asciiChar"></span>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-8 col-xs-offset-2 opacity00 finalText" id="finalText">
			<span>So the <span class='ct-green-color'>put()</span> can either take a single character enclosed 
		in single quotes to print or a numerical value in which case its corresponding ASCII character will be printed to the console.</span>
		</div>
	</div>
	<div class="margin-top-20 col-xs-12 text-center">
			<span class="col-xs-6 col-xs-offset-3">
		 		<span class="col-xs-12">
		 			<span class="col-xs-8 col-xs-offset-2">
		 				<span class="col-xs-12" id="button">
							<span class="btn btn-warning opacity00" id="closeBtn">Close <i class="fa fa-close"></i></span>&nbsp;&nbsp;
							<span class="btn btn-restart opacity00" id="restartBtn">Restart <i class="fa fa-refresh"></i></span>
						</span>
					</span>
				</span>
			</span>
		</div>
</div>

</body>

<script type="text/javascript">
$(document).ready(function() {
	usageOfPutReady();
});
</script>

</html>
