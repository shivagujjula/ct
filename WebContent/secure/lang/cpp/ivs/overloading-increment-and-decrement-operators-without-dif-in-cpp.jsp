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
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<script src='/secure/lang/cpp/js-min/oiadowdic.min.js'></script>

<title>Overloading increment(++) and decrement(--) operators
	without difference in cpp</title>
</head>
<style>
#infoDiv {
	background-color: rgb(243, 235, 235);
	border: 1px solid grey;
	border-radius: 10px;
	font-size: 14px;
	padding: 9px 14px;
}

.creamPreTab1 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 12px;
	margin-top: 25px;
	padding: 6px;
	white-space: pre;
}

#introduction {
	background-color: rgb(243, 235, 235);
}

#heading {
	margin-top: 10px;
}
/*table */
.table>tbody>tr>td {
	padding: 1px;
	line-height: 1.42857143;
	vertical-align: top;
	width: 20px;
	height: 20px;
	text-align: center;
}

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-5 {
	margin-top: 5%;
}

#restart {
	margin-top: 13%;
}

.ct-sgreen-color {
	color: #0f0;
	font-weight: bold;
}

.ct-green-color {
	color: green;
	font-weight: bold;
}

.ct-white-color {
	color: white;
	font-weight: bold;
}

.ct-code-b-green {
	font-weight: bold;
	color: green;
}

.ct-Maroon-color {
	color: #800021;
	font-weight: bold;
	border-top: none;
}

.ct-white-color {
	color: navajowhite;
	font-weight: bold;
}

.ct-code-b-yellow {
	color: yellow;
	font-weight: bold;
}

#consoleId {
	width: 472px;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #e5ec07;
	font-family: monospace;
	font-size: 13px;
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

#addressDiv {
	height: 180px;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
}

.output-value-circle {
	background: white;
	color: black;
}

.input-char {
	width: 50px;
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}

.box-Heading {
	font-weight: bold;
	color: rgb(47, 79, 79);
}

div, span {
	position: relative;
}

.z-index9999999 {
	z-index: 9999999;
}

.margin-top-4 {
	margin-top: 4%;
}

.user-btn {
	background-color: green;
}

.blinking {
	animation-name: blink;
	animation-duration: 2s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	z-index: 1000000 !important;
	position: relative;
}

@
keyframes blink { 50% {
	border-color: white;
	background: orange;
}

}
@
keyframes blinker { 100% {
	opacity: 0.0;
}

}
@
keyframes myfirst { 0% {
	left: 0px;
	top: 0px;
}

100%{
left:10px;
top:0px;
}
}
.ui-effects-transfer {
	border: 1px solid green;
	z-index: 9999999 !important;
	display: inline-block;
}
.ui-effects-transfer-custom {
	background-color: white;
	border-radius : 6px; 
	z-index: 9999999 !important;
	/* display: inline-block; */
}

.error-text {
	color: red;
	font-weight: bold;
}

.position {
	position: relative;
}

[contenteditable="true"] {
	font-weight: normal;
	outline: medium none;
}

.box-border {
	border: 1px solid gray;
}

.errorText {
	color: red;
	font-weight: bold;
}

.output-console-title-bar {
	background-color: rgba(165, 165, 165, 0.5);
}

.padding00 {
	padding: 0px;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}
.varBox2 {
	height: 38px;
	margin: 3px 15px 0 15px;
}
</style>
<script>
	$(document).ready(function() {
		usageOfGetcharReady();
	});
</script>
<body>
	<div class="main-div col-xs-12">
		<div class="row text-center" id="heading">
			<h3 class='label ct-demo-heading margin-top-2'>
				<span>overloading increment and decrement operators in c++</span>
			</h3>
		</div>
		<div class="col-xs-8 col-sm-offset-2 margin-top-2" id="infoDiv">
			<span id="list" class="opacity00">Overloading of ++ and -- for
				userdefined objects, there is no significant difference between pre
				and post operators when they are used as individual individual
				statements. </span><br> <span id='nextButton' class='opacity00'><a
				class='introjs-button user-btn'>Next &#8594;</a></span>
		</div>
		<div class="col-xs-12 padding00">
			<div class="col-xs-12" id="codeDiv">
				<div class="col-xs-5 padding00">
					<pre class="creamPreTab1 opacity00" id="preTableDiv">
<span id="preDir"><span id="include">#include</span> &lt;<span
							id="ioStream">iostream</span>&gt;</span>
<span id="lib"><span id="using">using</span> <span id="nameSpace">namespace</span> std;</span>
<span id="class">class sample {
		<span id="init">int a;</span>
		<span id="public">public:<span id="samplePara"><span
									id="sample">sample(int <span id="xInit">x</span>)</span> {
							<span id="aValue">a = x;</span>
					}</span>
					<span id="putData">void putdata() {
							<span id="printA">cout << a;</span>
    				}</span>					
					<span id="preInc">void operator ++( ) { 
							<span id="aPreInc">a = a + 1;</span>
					}</span>
					<span id="preDec">void operator --( ) { 
							<span id="aPreDecVal">a = a - 1;</span>
					}</span>
					<span id="postInc" class="opacity00">void operator ++(int d) { 
							<span id="aPostIncVal">a = a + 1;</span>
					}</span>
					<span id="postDec" class="opacity00">void operator --(int d) { 
							<span id="aPostDecVal">a = a - 1;</span>
				  	}</span></span>
};</span>
<span id="main">main() {
		<span id="sInit">sample s(<span id="num">5</span>);</span>
		<span id="sPutData">s.putdata();</span>
		
		<span id="sPreInc">++s;</span>
		<span id="sPutData1">s.putdata();</span>
		<span id="sPostInc">s++;</span>
		<span id="sPutData2">s.putdata();</span>
		
		<span id="sPreDec">--s;</span>
		<span id="sPutData3">s.putdata();</span>
		<span id="sPostDec">s--;</span>
		<span id="sPutData4">s.putdata();</span>
}</span>
					</pre>
				</div>
				<div
					class="col-xs-4  col-xs-offset-1 box-border address-box margin-top-5 opacity00"
					id="addressDiv">
					<div id="varBox" class="col-xs-12 opacity00">
						<div id="sAddress" class="col-xs-6  text-center opacity00"
							style="margin-top: 22px; height: 140px;">
							<div>
								<b style="color: maroon;">s</b>
							</div>
							<div style="height: 100px;" class="box-border">
								<div id="aBoxS" class="aBox opacity00">
									<div>
										<b style="color: maroon;">a</b>
									</div>
									<div id="sAnimationDiv" style="line-height: 50px; height: 50px;"
										class="ct-sgreen-color box-border varBox2">
										<span id="sVal"
											class="opacity00  ct-green-color"></span>
									</div>
								</div>
							</div>
						</div>
						<!-- <div id="aAddress" class="col-xs-4  text-center opacity00"
							style="margin-top: 32px; height: 94px;">
							<div>
								<b style="color: maroon;">a</b>
							</div>
							<div style="line-height: 50px; height: 50px;" class="box-border">
								<span id="aVal" class="opacity00 ct-sgreen-color"></span>
							</div>
						</div> -->
						<div id="xAddress" class="col-xs-5  text-center opacity00"
							style="margin-top: 22px">
							<div>
								<b style="color: maroon;">x</b>
							</div>
							<div style="line-height: 50px; height: 50px;" class="box-border">
								<span id="xVal" class="opacity00 ct-sgreen-color"></span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-4 col-xs-offset-1 margin-top-25">
					<div id="consoleId" class="center opacity00"
						style="margin-top: 10%;">
						<div class="output-console-title-bar">
							<span class="title"><b>Console</b></span>
						</div>
						<div class="output-console-body" id="consoleBodyDiv">
							<div id="sValue" class="opacity00">5</div>
							<div id="sPreIncVal" class="opacity00">6</div>
							<div id="errorText"></div>
							<div id="sPostIncVal" class="opacity00">7</div>
							<div id="sPreDecVal" class="opacity00">6</div>
							<div id="errorText1"></div>
							<div id="sPostDecVal" class="opacity00">5</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-3 col-sm-offset-4">
			<div class="col-sm-5 col-sm-offset-4 margin-top-4" id="restartDiv">
				<a class="btn btn-warning opacity00" id="restart"><i
					class="fa fa-refresh"></i>&nbsp;Restart</a>
			</div>
		</div>
	</div>
</body>
</html>