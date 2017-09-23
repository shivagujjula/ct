<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src='/secure/lang/cpp/js-min/uor.min.js'></script>
<title>usage of read()</title>
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
	color: springgreen;
}
.ct-green-color {
    color: green;
    font-weight: bold;
}
.ct-orange-color {
	color: orange;
	
}
.ct-red-color {
	color: red;
	font-weight: bold;
}
.ct-blue-color {
	color: blue;
	font-weight: bold;
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

.ct-Maroon-color {
	color: Maroon;
	font-weight: bold;
}

.ct-greenyellow-color {
	color: greenyellow;
}
.ct-code-b-yellow {
	color: yellow;
	font-weight: bold;
}
.ct-color-spring {
	color: mediumspringgreen;
}

.ct-code-b-teal {
	font-family: message-box;
	color: teal;
}
pre#desc{
	width : 680px;
	background-color: #fcfae3;
}
ul.expl {
	list-style-type: square;
}
.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 13px;
	/* margin-bottom: 14px; */
	height: 120px; 
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

.input-char {
	width: 10px; 
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}
.input-char-2,.input-char-3 {
	/* width: 30px;  */
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

.creamPreTab1 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 13px;
	margin: 5px;
	padding: 6px;
	white-space: pre;
}

.creamPreTable2 {
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
	height: 169px;
	border: 1px solid lightgray;
	border-radius: 4px;
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

/* #animationBox {
	border: 1px solid green;
	border-radius: 4%;
	height: 154px;
} */

.fa-arrow-left {
	color: green;
	position: relative;
	-webkit-animation: myfirst 1s infinite; /* Chrome, Safari, Opera */
	-webkit-animation-direction: alternate; /* Chrome, Safari, Opera */
	animation: myfirst 1s infinite;
	/* animation-direction:alternate; */
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

@keyframes blinker {  
  100% { opacity: 0.0; }
}

@keyframes myfirst { 0% {
	left: 0px;
	top: 0px;
}
100%{
	left:10px;
	top:0px;
	}
}
.errorText {
	color: red;
	font-weight: bold;
}

.output-console-title-bar {
	background-color: rgba(165, 165, 165, 0.5);
}

</style>

<body>
<div class="main-div col-xs-12">
	<div class="row text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-2'>
			<span>Usage of read( )</span>
		</h3>
	</div>
	<div class="col-xs-8 col-sm-offset-2 margin-top-2 infoDiv" id="infoDiv">
		<ul>
			<li id="list" class="opacity00">The <span class="ct-code-b-green">read( )</span> function  reads specified n characters from the standard input device and store them in the character array.</li> 
		 	<li id="list1" class="opacity00">It is a <span class="ct-code-b-green">member</span> function of the <span class="ct-code-b-green">istream</span> class and it is involved with an <span class="ct-code-b-green">istream</span> object <span class="ct-code-b-green">cin</span>.</li> 
		 	<li id="list2" class="opacity00">The format of  <span class="ct-code-b-green">read( )</span>  is:<br> 
		 		<span class="syntax opacity00" id="syntax">cin.read(char *, size);</span><br>
		 		<ul class="expl">
			 		<li id="list3" class="opacity00">where <span class='ct-code-b-green'>char *(line)</span> specifies the string variable whose contents are to be displayed, and</li>
			 		<li id="list4" class="opacity00">size specifies the number of characters to be displays.</li>
		 		</ul>
			</li>
		</ul><br>
 		 <span id="example" class="opacity00"><span id="line">Let us consider an example :</span><br>
		 		<pre id="desc" class="opacity00"><b>char ch[20];</b>
<span class="ct-Maroon-color">cin.read(ch, 10);</span> <b>// The read() reads 9 characters and places \0 at the end</b>  <span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></pre>
		</span>
	</div>
	<div class="col-xs-12 margin-top-2">
	<div class="col-xs-offset-1 col-xs-4">
	<pre id="preTableDiv" class="creamPreTable2 opacity00">
#include &lt;<span class="ct-green-color">iostream</span>&gt;
<span class="ct-red-color">using</span> <span class="ct-green-color">namespace</span> std;
<span class="ct-blue-color">int</span> main () {
	<span id="preline">char ch[20];</span>
	<span id="preline1">cout << "Enter a line of text : ";</span>
	<span id="preline2">cin.read(ch, 10);</span>
	<span id="preline3">cout << "The Output is : " << ch << endl</span>
}
	</pre>
	</div>
	<div class="col-xs-7">
<div class="address-box opacity00" id="addressBox">
 		<div class="col-xs-12" id="animationBox">
 			<table id="tableId" class="table opacity00" style="margin-top: -1px;">
			
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
			        <td class="ct-code-b-gold">10</td>
			        <td class="ct-code-b-gold">11</td>
			        <td class="ct-code-b-gold">12</td>
			        <td class="ct-code-b-gold">13</td>
			        <td class="ct-code-b-gold">14</td>
			        <td class="ct-code-b-gold">15</td>
			        <td class="ct-code-b-gold">16</td>
			        <td class="ct-code-b-gold">17</td>
			        <td class="ct-code-b-gold">18</td>
			        <td class="ct-code-b-gold">19</td>
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
		<div class="col-sm-offset-4 col-sm-4">
			<div id="consoleId" class="center opacity00" style="margin-top: 3%">
				<div class="output-console-title-bar">
					<span class="title"><b>Console</b></span>
				</div>
				<div class="output-console-body" id="consoleBodyDiv">
					<span id="typeChar"></span>
					<div id="hiddenTypingChar" >Enter a line of text : <input id='inputChar' maxlength='20' class='input-char-2' tabindex='0'/></div><br>
					<div id="printpreLine1" class="opacity00">The Output is :  </div>
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
	usageOfGetcharReady();
});
</script>
</html>