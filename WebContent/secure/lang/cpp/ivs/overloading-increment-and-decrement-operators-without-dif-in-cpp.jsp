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
	font-family: monospace;
	padding: 9px 14px;
	min-height: 92px;
}

.creamPreTab1 {
	-moz-tab-size: 3;
	tab-size: 4;
	background-color: #fffae6;
	border-radius: 8px;
 	font-size: 12px; 
	margin-top: 25px;
	padding: 10px;
	white-space: pre;
}

#introduction {
	background-color: rgb(243, 235, 235);
}

#heading {
	margin-top: 10px;
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
	min-height: 210px;
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

.panel-primary>.panel-heading {
	color: #fff;
	background-color: #337ab7;
	border-color: #337ab7;
}

.panel-heading {
	padding: 4px 4px;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.panel-primary {
	border-color: #337ab7;
}

.panel {
	margin-bottom: 0px;
	background-color: #fff;
	border-radius: 4px;
	-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
	box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}
.blinking {
	animation-name: blink;
	animation-duration: 2s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	z-index: 1000000 !important;
	position: relative;
}

@keyframes blink { 
50% {
	border-color: white;
	background: yellow;
}

}
.blinking-orange {
	animation: blink-border-background-orange 1.5s linear 3;
}

@keyframes blink-border-background-orange { 

50% {
	border-color: white;
	background: orange;
}

}
.ui-effects-transfer {
	border: 1px solid green;
	z-index: 10000005 !important;
	display: inline-block;
}

.ui-effects-transfer-custom {
	border: 1px solid green;
	border-radius: 6px;
	z-index: 1000000 !important;
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
	background-color: white; 
	z-index: 1000010 !important;
}
.position {
	display: inline-block;
	position: relative;
}
</style>
<script>
	$(document).ready(function() {
		overloadingIncrementAndDecrementOperatorsWithoutDiffReady();
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
			<span id="list" class="opacity00">Overloading of <span
				class='ct-green-color'>++</span> and <span
				class='ct-green-color'>--</span> for user-defined objects, there
				is no significant difference between <span class='ct-green-color'>pre</span> and <span
				class='ct-green-color'>post</span> operators when
				they are used as <span class='ct-green-color'>individual</span> statements.
			</span><br> <span id='nextButton' class='opacity00'><a
				class='introjs-button user-btn'>Next &#8594;</a></span>
		</div>
		<div class="col-xs-12 padding00">
			<div class="col-xs-12" id="codeDiv">
				<div class="col-xs-4 col-xs-offset-1 padding00">
					<pre class="creamPreTab1 opacity00" id="preTableDiv">
<span id="preDir"><span id="include">#include</span> &lt;<span
							id="ioStream">iostream</span>&gt;</span>
<span id="lib"><span id="using">using</span> <span id="nameSpace">namespace</span> std;</span>
<span id="class" class="opacity00">class Sample {
	<span id="init" class="opacity00">int <span id="intNum">num</span>;</span>
	<span id="public" class="opacity00">public: 
		<span id="SamplePara" class="opacity00"><span id="Sample">Sample(<span id="xInit">int x</span>)</span> {
			<span id="aValue">num = x;</span>
		}</span>
		<span id="putData" class="opacity00">void putData() {
			<span id="printA">cout << <span id="number">num</span> << endl;</span>
		}</span>					
		<span id="preInc" class="opacity00">void operator ++() { 
			<span id="aPreInc">num = num + 1;</span>
		}</span>
		<span id="preDec" class="opacity00">void operator --() { 
			<span id="aPreDecVal">num = num - 1;</span>
		}</span>
		<span id="postInc" class="opacity00" >void operator ++(int d) { 
			<span id="aPostIncVal">num = num + 1;</span>
		}</span>
		<span id="postDec" class="opacity00">void operator --(int d) { 
			<span id="aPostDecVal">num = num - 1;</span>
		}</span>
	</span>
};</span>

<span id="main" class="opacity00">main() {
	<span id="sInit" class="opacity00">Sample <span id="sObj">s(<span id="num">5</span>)</span>;</span>
	<span id="sPutData" class="opacity00">s.putData();</span>
	
	<span id="sPreInc" class="opacity00">++s;</span>
	<span id="sPutData1" class="opacity00">s.putData();</span>
	<span id="sPostInc" class="opacity00">s++;</span>
	<span id="sPutData2" class="opacity00">s.putData();</span>
	
	<span id="sPreDec" class="opacity00">--s;</span>
	<span id="sPutData3" class="opacity00">s.putData();</span>
	<span id="sPostDec" class="opacity00">s--;</span>
	<span id="sPutData4" class="opacity00">s.putData();</span>
<span id ="end">}</span></span>
</pre>
				</div>
				<div class="col-xs-4  col-xs-offset-1 panel panel-primary margin-top-5 opacity00"
					id="addressDiv">
					<div id="varBox" class="col-xs-6 col-xs-offset-3 opacity00">
						<div id="sAddress" class="text-center opacity00"
							style="margin-top: 22px; height: 140px;">
							<div class="panel panel-primary">
								<div class="panel-heading text-center">
									<b style="color: white;">s</b>
								</div>
								<div class="panel panel-body">
									<div class="aBox text-center">
										<div id="aBoxS"  class="panel panel-primary text-center opacity00">
											<div class="panel-heading text-center">
												<b style="color: white;">num</b>
											</div>
											<div id="sAnimationDiv"
												class="panel panel-body" style = "min-width: 124px; min-height: 52px;">
												<span id="sVal" class="opacity00 ct-green-color">5</span>
											</div>
										</div>
									</div>
								</div>
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
							<div><span id="sValue" class="opacity00">5</span></div>
							<div><span id="sPreIncVal" class="opacity00">6</span></div>
							<div><span id="errorText"></span></div>
							<div><span id="sPostIncVal" class="opacity00">7</span></div>
							<div><span id="sPreDecVal" class="opacity00">6</span></div>
							<span id="errorText1"></span>
							<span id="sPostDecVal" class="opacity00">5</span>
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
