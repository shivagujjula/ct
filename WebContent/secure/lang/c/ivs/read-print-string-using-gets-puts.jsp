<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<link rel="stylesheet" href="/css/jquery-ui.css">
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link href="/css/introjs.css" rel="stylesheet">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/animate.css" /> 
<script src="/secure/lang/c/js-min/rpsugp.min.js" type="text/javascript"></script> 
<title>gets() and puts() and Strings</title>
</head>
<style>
.output-console-title-bar {
	padding: 3px;
	letter-spacing: 1px;
	font-family: monospace;
	font-weight: bold;
	background-color: whitesmoke;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	height: 100px;
	overflow: auto;
	padding: 10px;
	white-space: inherit;
}

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs.tooltiptext > span {
	display: inline-block;
}

.introjs-tooltip {
	min-width: 280px;
}

.introjs-tooltip-min-width-custom {
	min-width: max-content;
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

.ct-pink-color {
	font-family: monospace;
	color: #ed138e;
	outline: none;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.ct-code-b-blue {
	font-family: monospace;
	font-weight: bold;
	color: blue;
}


.ct-code-b-brown {
	font-family: monospace;
	font-weight: bold;
	color: brown;
}

.ct-code-b-green {
	font-family: monospace;
	font-weight: bold;
	color: green;
}

#typewritingId {
	height: 167px; 
}

.blink {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
	100% { opacity: 0.0; }
}

.blinking {
	animation-name: blink;
	animation-duration: 0.6s;
	animation-iteration-count: 3;
	z-index: 9999999 !important;
	background: white;
}

@keyframes blink {
	50% {
		background: #0ee1be;
	}
}

.address-box {
	height: 169px;
	border: 1px solid lightgray;
	border-radius: 4px;
}

.ct-demo-heading {
	background: #f67f34 repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 9999999;
}

.creamPreTab4 {
	height: 167px;
}

.padding0 {
	padding: 0px;
}

#startBtn {
	margin-top: 10px;
}

#in, .input-char {
	width: 170px;
 /* padding: 8px; */
	border-width: 0px 0 0 0;
	background-color: #000;
	color: yellow;
}

.base-address {
	font-size: 12px;
    height: 37px;
    margin-left: 39px;
    margin-top: -15px;
    padding: 2px;
    width: 40px;
}
in {
	color: rgb(62, 50, 173);
}

ink {
	color: 	rgb(255, 0, 191)
}

go {
	color: rgb(134, 19, 19);
	font-weight: bold;
}


g {
	color: 	rgb(64, 130, 65);
	font-weight: bold;
}

r {
	color: red;
}

pi {
	color: fuchsia;
}

 y {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
} 
 

.table-bordered {
	border: 1px solid black !important;
}

#preBody {
	tab-size : 4;
}

.z-index-td {
	position: relative;
	background: white;
	z-index: 9999999999;
}

.ui-effects-transfer {
	border: 1px solid #0bf30b;
	 z-index: 9999999 !important;
}


</style>
<body>
<div class="col-xs-12 text-center">
	<h3><span class="ct-demo-heading label" id="titleName">Usage of gets() puts() on Strings</span></h3>
</div>
<div class="body-div col-sm-12 padding0">
<br>
<div class="col-xs-5">
<!-- <pre id="typewritingId"></pre> -->
<pre class="creamPreTab4" id="preBody">
<in>#include</in> <ink>&lt;stdio.h&gt;</ink>
<span id='line1'>main()</span> {
	<span id='line2'>char ch[<ink>20</ink>];</span>
	<span id='line3'>printf(<ink>"Enter a string : "</ink>);</span>
	<span id='line4'>gets(ch);</span>
	<span id='line5'>printf(<ink id="codePrinf">"The given string is : "</ink>);</span>
	<span id='line6'>puts(ch);</span>
<span id='line7'>}</span>
</pre>
</div>
<div class="col-xs-7">
	<div class="address-box opacity00" id="addressBox">
  		<div class="col-xs-12" id="animationBox">
  			<table id="tableId" class="table opacity00" style="margin-top: -1px;">
				
				<tbody>
					<tr>
				        <td></td>
				        <%for (int i = 0; i < 20; i++) {%>
				        	<td><%=i %></td>
				        <%} %>
					</tr>
			  
			      <tr id="tableRowId">
				     	<td style="border-top: none;"><b class="ct-code-b-blue">ch </b>=</td>
				     	<%for (int i = 0; i < 20; i++) {%>
				        	 <td class="td-css table-bordered opacity00"></td>
				        <%} %>
			      	</tr>
				</tbody>
  			</table>
		</div>
	</div>
</div>
</div>
	<div class="col-sm-offset-4 col-sm-4" style="margin-top: 10px">
		<div id="consoleId" class="center opacity00">
			<div class="output-console-title-bar">
				<span class="title"><b>Console</b></span>
			</div>
			<div class="output-console-body" id="consoleBodyDiv">
				<div id="typeChar"></div>
				<div id="hiddenTypingChar" class="opacity00">Enter a String : <input id='inputChar' class='input-char' maxlength='19' tabindex='0' /></div>
				<div id="totalEnterChar" ></div>
				<div id="enterHiddenTotal" class="opacity00">The given string is : <input id="hiddenTotalEnterChar" maxlength='20' class='input-char' tabindex='0' /></div>
			</div>
		</div>
	</div>
	<div class="margin-top-20 text-center col-xs-12">
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
	
<script>
	$(document).ready(function() {
		readPrintStringUsingGetsPutsReady();
	});
</script>
</body>
</html>
