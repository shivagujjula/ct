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
<script type="text/javascript" src="/secure/lang/cpp/js-min/uoget.min.js"></script>
<title>usage of get()</title>
</head>

<style>
#infoDiv {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 15px;
	padding: 9px 14px;
	min-height : 200px;
}

#introduction {
	background-color: rgb(243, 235, 235);
}

#heading {
	margin-top: 10px;
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
.ct-blue-color {
	color: blue;
	font-weight: bold;
}
.ct-code-b-green{
	color: green;
	font-weight: bold;
}
.ct-red-color {
	color: red;
	font-weight: bold;
}
.ct-code-b-teal {
	font-family: message-box;
	color: teal;
}
.ct-code-b-yellow {
	color: yellow;
	font-weight: bold;
}
.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 13px;
	min-height: 120px;
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

.input-char-2, .input-char-3 {
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
	font-size: 12px;
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

/* .panel-heading {
	padding: 2px 40px;
}

.panel-group {
	margin-top: 45px;
} */

.panel-body {
	min-height: 40px;
}

.syntax {
	background: black;
	border-radius: 4px;
	color: white;
	padding: 1px;
	font-family: monospace;
	font-size: 12px;
}

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

@keyframes blinker { 100% {
	opacity: 0.0;
}

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

.position {
	position: relative;
	margin-left: 54px;
}
</style>

<body>
	<div class="main-div col-xs-12">
		<div class="row text-center" id="heading">
			<h3 class='label ct-demo-heading margin-top-2'>
				<span>Usage of get( )</span>
			</h3>
		</div>
		<div class="col-xs-8 col-sm-offset-2 margin-top-2 infoDiv"
			id="infoDiv">
			<ul>
				<li id="list" class="opacity00">The <span
					class="ct-code-b-teal">get( )</span> is a member function of <span
					class="ct-code-b-green">istream</span> class.
				</li>
				<li id="list1" class="opacity00">The function <span
					class="ct-code-b-teal">get( )</span> reads a single character and
					store it in a character variable.
				</li>
				<li id="list2" class="opacity00">The different formats of <span
					class="ct-code-b-teal">get( )</span> is :<br> <span
					class="syntax opacity00" id="syntax">int get();</span><br> <span
					class="syntax opacity00" id="syntax1">istream& get (char&
						c);</span><br> <span class="syntax opacity00" id="syntax2">istream&
						get (char* s, streamsize n);</span><br> <span
					class="syntax opacity00" id="syntax3">istream& get (char* s,
						streamsize n, char delimeter);</span><br> <span id='nextButton'
					class='opacity00'><a class='introjs-button user-btn'>Next
							&#8594;</a></span></li>
			</ul>
		</div>
		<div class='col-xs-12 margin-top-2'>
			<div class="col-xs-offset-1 col-xs-5">
				<pre id="preTableDiv" class="creamPreTab1 opacity00">
#include &lt;<span class="ct-code-b-green">iostream</span>&gt;
<span class="ct-red-color">using</span> <span class="ct-code-b-green">namespace</span> std;
<span id="main"><span class="ct-blue-color">int</span> main()</span> {
	<span id="line2">char ch;</span>
	<span id="line3">cout << "Enter a character : "; </span>
	<span id="line4">ch = cin.get(); </span> // or cin.get(ch)
	<span id="line5">cout << "The given input character is : " << ch << endl;</span>
<span id="end">}</span>
	</pre>
			</div>
			<div class="col-xs-3">
				<div class="col-xs-12 address-box opacity00" id="addressBox">
					<div class="col-xs-offset-2 col-xs-8">
						<div class="panel-group opacity00 text-center" id="panelBox">
							<div class="panel panel-info">
								<div class="panel-heading">ch</div>
								<div class="panel-body opacity00" id="panelBody"></div>
							</div>
						</div>
						<div>
							<span id="addressId" style = "color : #31708f" class="position">2034</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-3">
				<div id="consoleId" class="center opacity00" style="margin-top: 3%;">
					<div class="output-console-title-bar">
						<span class="title"><b>Console</b></span>
					</div>
					<div class="output-console-body" id="consoleBodyDiv">
						<div id="typeChar" class="opacity00">
							Enter a character : <input id='inputChar' maxlength='1'
								class='input-char' tabindex='0' />
						</div>
						<br> <div id="printLineInConsole" class="opacity00">The given input character is :</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 margin-top-2">
			<div class="col-xs-offset-1 col-xs-4">
				<pre id="preTableDiv2" class="creamPreTable2 opacity00">
#include &lt;<span class="ct-code-b-green">iostream</span>&gt;
<span class="ct-red-color">using</span> <span class="ct-code-b-green">namespace</span> std;
<span id="main1"><span class="ct-blue-color">int</span> main()</span> {
	<span id="preline1">char ch[20];</span>
	<span id="preline11">cout << "Enter a string : ";</span>
	<span id="preline2">cin.get(ch, 20);</span>
	<span id="preline3">cout << "The output is : " << ch << endl;</span>
<span id="end1">}</span>
	</pre>
			</div>
			<div class="col-xs-7">
				<div class="col-xs-12 address-box opacity00" id="addressBox1">
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
				<div class="col-xs-12" style="margin-top: 3%">
					<div class="col-sm-7">
						<div id="consoleId2" class="center opacity00" >
							<div class="output-console-title-bar">
								<span class="title"><b>Console</b></span>
							</div>
							<div class="output-console-body" id="consoleBodyDiv">
								<div id="typeChar1" class="opacity00"> Enter a string : <input id='inputChar2' maxlength='20'
										class='input-char-2' tabindex='0' />
								</div>
								<br>
								<div id="printpreLine1" class="opacity00">The output is : </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 margin-top-2">
			<div class="col-xs-offset-1 col-xs-4">
				<pre id="preTableDiv3" class="creamPreTable2 opacity00">
#include &lt;<span class="ct-code-b-green">iostream</span>&gt;
<span class="ct-red-color">using</span> <span class="ct-code-b-green">namespace</span> std;
<span id="main2"><span class="ct-blue-color">int</span> main()</span> {
	<span id="step1">char ch[20];</span>
	<span id="step11">cout << "Enter a string : ";</span>
	<span id="step2">cin.get(ch, 20, '#');</span>
	<span id="step3">cout << "The output is : " << ch << endl;</span>
<span id="end2">}</span>
	</pre>
			</div>
			<div class="col-xs-7">
				<div class="col-xs-12 address-box opacity00" id="addressBox2">
					<table id="tableId1" class="table opacity00" style="margin-top: -1px;">
						<tbody>
							<tr class="">
								<td class=""></td>
								<td class="ct-Maroon-color">0</td>
								<td class="ct-Maroon-color">1</td>
								<td class="ct-Maroon-color">2</td>
								<td class="ct-Maroon-color">3</td>
								<td class="ct-Maroon-color">4</td>
								<td class="ct-Maroon-color">5</td>
								<td class="ct-Maroon-color">6</td>
								<td class="ct-Maroon-color">7</td>
								<td class="ct-Maroon-color">8</td>
								<td class="ct-Maroon-color">9</td>
								<td class="ct-Maroon-color">10</td>
								<td class="ct-Maroon-color">11</td>
								<td class="ct-Maroon-color">12</td>
								<td class="ct-Maroon-color">13</td>
								<td class="ct-Maroon-color">14</td>
								<td class="ct-Maroon-color">15</td>
								<td class="ct-Maroon-color">16</td>
								<td class="ct-Maroon-color">17</td>
								<td class="ct-Maroon-color">18</td>
								<td class="ct-Maroon-color">19</td>
							</tr>
							<tr id="tableRowId1" class="">
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
				<div class="col-xs-12" style="margin-top: 3%">
					<div class="col-sm-7">
						<div id="consoleId3" class="center opacity00" style="margin-top: 3%">
							<div class="output-console-title-bar">
								<span class="title"><b>Console</b></span>
							</div>
							<div class="output-console-body" id="consoleBodyDiv">
								<div id="typeChar2" class="opacity00">
									Enter a string : <input id='inputChar3' maxlength='20'
										class='input-char-3' tabindex='0' />
								</div>
								<br>
								<div id="printLine1" class="opacity00">The output is :  </div>
							</div>
						</div>
					</div>
				</div>
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
		usageOfGetReady();
	});
</script>
</html>
