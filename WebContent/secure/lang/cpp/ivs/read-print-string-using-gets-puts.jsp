<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
<script type="text/javascript" src="/secure/lang/cpp/js-min/rpsugp.min.js"></script>


<title>gets() and puts() and Strings</title>
</head>
<style>
.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
 	/* margin-top: 20px;  */
	padding: 2px 0;
	text-align: center;
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

.introjs.tooltiptext > span{
	display: inline-block;
}

.introjs-tooltip {
	min-width: 280px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
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

.ct-code-b-yellow {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
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

.address-box {
	height: 169px;
	border: 1px solid lightgray;
	border-radius: 4px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 9999999;
}

.creamPreTab4 {
	height: 200px;
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
	color: #0f0;
}

.base-address {
	font-size: 12px;
    height: 37px;
    margin-left: 39px;
    margin-top: -15px;
    padding: 2px;
    width: 40px;
}

y {
	color: yellow;
	font-family: monospace;
	font-weight: bold;
}

</style>
<body>
<div class="col-sm-12 text-center">
	<div class="margin-padding-css text-center" >
		<div class="col-sm-1"></div>
		<div class="col-sm-offset-3 col-sm-3">
			<h3><span class="ct-demo-heading label label-default" id="titleName">gets() and puts() on Strings</span></h3>
		</div>
	</div>
</div>
<div class="body-div col-sm-12 padding0">
<br>
<div class="col-xs-5">
<!-- <pre id="typewritingId"></pre> -->
<pre class="creamPreTab4" id="preBody">
#include &lt;iostream&gt;
#include &lt;stdio.h&gt;
<span>using <b>namespace</b> std;</span>
void <span id='line1'><b>main()</b></span> {
 <span id='line2'><b>char</b> ch[20];</span>
 <span id='line3'><b>cout</b> &lt;&lt; "Enter a string : ";</span>
 <span id='line4'><b>gets(ch)</b>;</span>
 <span id='line5'><b>cout</b> &lt;&lt; "The entered string is : ";</span>
 <span id='line6'><b>puts(ch)</b>;</span>
<span id='line7'>}</span>
</pre>
</div>
<div class="col-xs-7">
	<div class="address-box opacity00" id="addressBox">
  		<div class="col-xs-12" id="animationBox">
  			<table id="tableId" class="table opacity00" style="margin-top: -1px;">
				
				<tbody>
					<tr class="">
				        <td class=""></td>
				        <td class="">0</td>
				        <td class="">1</td>
				        <td class="">2</td>
				        <td class="">3</td>
				        <td class="">4</td>
				        <td class="">5</td>
				        <td class="">6</td>
				        <td class="">7</td>
				        <td class="">8</td>
				        <td class="">9</td>
				        <td class="">10</td>
				        <td class="">11</td>
				        <td class="">12</td>
				        <td class="">13</td>
				        <td class="">14</td>
				        <td class="">15</td>
				        <td class="">16</td>
				        <td class="">17</td>
				        <td class="">18</td>
				        <td class="">19</td>
					</tr>
			  
			      <tr id="tableRowId" class="">
				     	<td style="border-top: none;"><b>ch </b>=</td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td>
				        <td class="td-css table-bordered opacity00"></td> 
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
				<span id="typeChar"></span>
					<span id="hiddenTypingChar" class="hidden">Enter a String : <input id='inputChar' class='input-char' tabindex='0' /></span><br/>
				<span id="totalEnterChar" ></span>
				<span id="enterHiddenTotal" class="hidden">The entered string is : <input id="hiddenTotalEnterChar" maxlength='20' class='input-char' tabindex='0' /></span>
			</div>
		</div>
	</div>
<div><button type="button" class="col-sm-1 col-sm-offset-5 btn btn-warning opacity00" id="restartBtn" style="margin-top: 15px;">Restart </button></div>
<script>
	
	$(document).ready(function() {
		readPrintStringUsingGetsPutsReady();
	});
	
</script>
</body>
</html>
