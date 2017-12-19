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
<script src='/secure/lang/cpp/js-min/uogct.min.js'></script> 

<title>usage of gcount()</title>
</head>

<style>

#infoDiv {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 15px;
	padding: 9px 14px;
}

#introduction {
	background-color: rgb(243, 235, 235);
}

#heading {
	margin-top:10px;
}

#restart {
    margin-top: 13%;
} 

.margin-top-2 {
	margin-top: 2%;
}

#line1 {
	color: maroon;
}
.ct-sgreen-color {
	color: #0f0;
	font-weight: bold;
}
.ct-green-color {
    color: green;
    font-weight: bold;
}
.ct-blue-color {
	color: blue;
	font-weight : bold;
}
.ct-red-color {
	color: red;
	font-weight: bold;
}
.ct-code-b-black {
	color: black;
	font-weight: bold;
	font-family: monospace;
}

.ct-code-b-gold {
	color: gold;
	font-weight: bold;
}
.ct-code-b-green {
	/* font-family: monospace; */
	font-weight: bold;
	color: green;
}
.ct-code-b-yellow {
	color: yellow;
	font-weight: bold;
}
.table>tbody>tr>td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    min-width: 20px;
    min-height: 20px;
    border-top:0;
}
.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #e5ec07;
	font-family: monospace;
	font-size: 13px;
	height: 175px; 
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

.input-char {
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}
div, span {
	position: relative;
}

.z-index9999999 {
	z-index: 9999999;
}
.creamPreTable {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 12px;
	margin: 5px;
	padding: 6px;
	white-space: pre;
}
.margin-top-4 {
	margin-top: 4%;
}

.panel-heading, .panel-body {
	padding: 5px;
}

.panel-group {
	margin-top: 40px;
	margin-bottom: 7px;
}

.introjs-tooltip {
	min-width: 220px;
}
.address-box {
	min-height: 256px;
	border: 1px solid lightgray;
	border-radius: 4px;
	margin-top: 6px;
}
.padding0 {
	padding: 0px;
}

.panel-heading {
	padding: 2px 40px;
}

.panel-body {
	padding: 12px 44px;
	height: 40px;
}

.panel-group {
	margin-top: 45px;
}
.syntax {
 	background: black;
	border-radius: 4px;
	color: white;
	padding: 1px;
	font-family: monospace;
	font-size : 15px;
}

.fa-arrow-left {
	color: green;
	position: relative;
	-webkit-animation: myfirst 1s infinite; /* Chrome, Safari, Opera */
	-webkit-animation-direction: alternate; /* Chrome, Safari, Opera */
	animation: myfirst 1s infinite;
}

.user-btn {
	background: green;
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

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 9999999 !important;
}
.errorText {
	color: red;
	font-weight: bold;
}

.output-console-title-bar {
	background-color: rgba(165, 165, 165, 0.5);
}
.padding00 {
	padding : 0px;
}

.cupvalue {
	position: absolute;
	color: #e60073;
	margin-top: 6px;
    margin-left: 15px;
    font-weight : bold;
}
.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}
.errorText {
	color: red;
	font-weight: bold;
}

.position {
	display: inline-block;
	position: relative;
}

</style>

<body>
<div class="main-div col-xs-12">
	<div class="row text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-2'>
			<span>Usage of gcount( )</span>
		</h3>
	</div>
	<div class="col-xs-8 col-sm-offset-2 margin-top-2 infoDiv" id="infoDiv">
		<ul>
		 	<li id="list" class="opacity00">The <span class="ct-code-b-green">gcount( )</span> is a 
		 		<span class="ct-code-b-green">member</span> function of the <span class="ct-code-b-green">
					istream</span> class, it reports the number of characters read to input stream by the last
					operation of reading.</li> 
			<li id="list1" class="opacity00">The <span class="ct-code-b-green">gcount( )</span>
				 	returns the number of characters extracted by the <b>last unformatted input operation</b>
					performed on the object.</li> 
		 	<li id="list2" class="opacity00">The <b>unformatted input operations</b> that
		 	 		modify the value returned by <b>get()</b> are: <b>get()</b>, <b>getline()</b> and <b>read()</b>.</li>
		 	<li id="list3" class="opacity00">The format of  <span class="ct-code-b-green">gcount( )</span>  is:<br> 
		 		<span class="syntax opacity00" id="syntax">streamsize gcount(); // streamsize is a signed integral type</span>
		 		<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span>
		 	</li>
		 	
		</ul>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-6">
	<pre id="preTableDiv" class="creamPreTable opacity00">
#include &lt;<span class="ct-green-color">iostream</span>&gt;
<span class="ct-red-color">using</span> <span class="ct-green-color">namespace</span> std;
<span id="main"><span class="ct-blue-color">int</span> main()</span> {
	<span id="preline">char ch[10];</span>
	<span id="preline1">int count;</span>
	<span id="preline2">cout << "Enter the text : ";</span>
	<span id="preline3">cin.read(ch, 5);</span>
	<span id="preline31">cout << "The output is :  "; </span>
	<span id="preline32">cout.write(ch, 5); </span>
	<span id="preline4">count = <b>cin.gcount();</b></span>
	<span id="preline5">cout << <span id="cout"> "The number of characters extracted = " </span> << <span id="count">count</span> << endl;</span>
	<span id="preline6">cout << "The given text is : ";</span>
	<span id="preline7">cout.write(ch, count);</span>
<span id="end">}</span>
	</pre>
		</div>
		<div class="col-xs-6">
			<div class="col-xs-12 address-box opacity00" id="addressBox">
	 			<table id="tableId" class="table opacity00">
					<tbody>
						<tr class="">
					        <td class=""></td>
					        <td class="ct-code-b-gold">0</td>
					        <td class="ct-code-b-gold">1</td>
					        <td class="ct-code-b-gold">2</td>
					        <td class="ct-code-b-gold">3</td>
					        <td class="ct-code-b-gold">4</td>
					        <td class="ct-code-b-gold">5</td>
					        <td class="ct-code-b-gold">6</td>
					        <td class="ct-code-b-gold">7</td>
					        <td class="ct-code-b-gold">8</td>
					        <td class="ct-code-b-gold">9</td>
						</tr>
				     	<tr id="tableRowId" class="">
				     		<td style="border-top: none;"><b>ch </b>=</td>
					        <td style="border: 2px solid green;" class="td-css table-bordered opacity00"></td>
					        <td style="border: 2px solid green;" class="td-css table-bordered opacity00"></td>
					        <td style="border: 2px solid green;" class="td-css table-bordered opacity00"></td>
					        <td style="border: 2px solid green;" class="td-css table-bordered opacity00"></td>
					        <td style="border: 2px solid green;" class="td-css table-bordered opacity00"></td>
					        <td style="border: 2px solid green;" class="td-css table-bordered opacity00"></td>
					        <td style="border: 2px solid green;" class="td-css table-bordered opacity00"></td>
					        <td style="border: 2px solid green;" class="td-css table-bordered opacity00"></td>
					        <td style="border: 2px solid green;" class="td-css table-bordered opacity00"></td>
					        <td style="border: 2px solid green;" class="td-css table-bordered opacity00"></td>
				      	</tr>
					</tbody>
	  			</table>
		  		<br>		
	  			<div class="col-sm-3 text-center">
					<div class="col-x-12 padding00 opacity00" id="countBox">
						<span id="countCupValue" class="cupvalue opacity00">5</span>
						<i class="fa fa-coffee fa-3x count-cup"></i><br>
						<span id="countCupVariable" class = "ct-code-b-black">count</span>
					</div>
				</div>
			</div>
		</div> 
		<div class="col-sm-offset-4 col-sm-4">
			<div id="consoleId" class="center opacity00" style="margin-top: 2%">
				<div class="output-console-title-bar">
					<span class="title"><b>Console</b></span>
				</div>
				<div class="output-console-body" id="consoleBodyDiv">
					<div id="typeChar" class="opacity00">Enter the text : <input id='inputChar' maxlength='20' class='input-char' tabindex='0'/></div><br>
					<div id="printpreLine1" class="opacity00">The output is : <span id="printpre" class="opacity00"></span></div><br>
					<div id="printpreLine2" class="opacity00"> The number of characters extracted = <span id='inputChar2'  class='input-char opacity00'></span>
					</div><br>
					<div><span id="printpreLine3" class="opacity00">The given text is :  </span> <span id='inputChar3'  class='input-char opacity00'></span></div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-3 col-sm-offset-4">
		<div class="col-sm-5 col-sm-offset-4 margin-top-4" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</div>	
</body>
<script type="text/javascript">
$(document).ready(function() {
	usageOfGcountReady();
});
</script>
</html>
