<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
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
<script src='/secure/lang/cpp/js-min/ftwma.min.js'></script>
<title>Function templates with multiple arguments</title>
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
	font-family: monospace;
	border-radius: 8px;
	font-size: 14px;
	margin-top: 25px;
	padding: 6px;
	white-space: pre;
}
pre#syntax {
    background-color: rgb(243, 235, 235);
    border: none;
    padding-left: 50px;
    font-size: 14px;
}

#introduction {
	background-color: rgb(243, 235, 235);
}
.introjs-nextbutton {
	background-color: green;
}
#heading {
	margin-top: 10px;
}

.box-border {
	border: 1px solid #337ab7;;
	border-radius: 8px;
	padding: 10px;
}

.ct-code-b-green {
	font-weight: bold;
	color: green;
}

.ct-sgreen-color {
	color: #0f0;
	font-weight: bold;
}

.ct-Maroon-color {
	color: #800021;
	font-weight: bold;
}

.ct-code-b-yellow {
	color: yellow;
	font-weight: bold;
}
div, span {
	position: relative;
}

pre > span {
	position: static;
}

.ui-effects-transfer-custom {
	background-color: white;
	border-radius: 6px;
	z-index: 9999999 !important;
}

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 10000000 !important;
	display: inline-block;
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

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #e5ec07;
	font-family: monospace;
	font-size: 13px;
	min-height: 100px;
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
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

.panel-body {
	padding: 20px;
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

.margin-top-2 {
	margin-top: 5%;
}

.margin-top-5 {
	margin-top: 5%;
}

.margin-top-20 {
	margin-top: 20%;
}

.margin-top-25 {
	margin-top: 25px;
}

.user-btn {
	background-color: green;
}

#addressDiv {
	min-height: 180px;
}

.introjs-prevbutton {
    display: inline-block;
}
.position {
	position: relative;
}
.display {
	display: inline-block;
}

.blinking-white {
	animation-name: blink-border-background-white;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-white { 
50% {
	border-color: white;
	background: yellow;
}

}
.blinking-orange {
	animation-name: blink-border-background-orange;
	animation-duration: 2s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-orange { 

50% {
	border-color: white;
	background: orange;
}

}
#restart {
	margin-top: 13%;
}
</style>
<script>
	$(document).ready(function() {
		functionTemplateWithArgumentsReady();
	});
</script>
<body>
	<div class="col-xs-12">
		<div class="row text-center" id="heading">
			<h3 class='label ct-demo-heading margin-top-5'>
				<span>Function templates with multiple arguments</span>
			</h3>
		</div>
		<div class="col-xs-8 col-sm-offset-2 margin-top-2  infoDiv"
			id="infoDiv">
			<ul>
				<li id="list1" class="opacity00">In <span
					class="ct-code-b-green">function templates</span>, a user can use
					more than one <span class="ct-code-b-green">generic data
						type</span> in the template statement by using a separator
						<span class="ct-code-b-green">comma</span>.<br>
				</li>
				<li id="list2" class="opacity00">The format is: 
<pre class="syntax opacity00" id="syntax"><span class="ct-code-b-green">template &lt;class T1, class T2, ---------, class Tn&gt;</span>
<span class="ct-Maroon-color"><br>return_type  function_name(parameters of T1, T2,--------- Tn) { 

	Statement1;
	
	Statement2;
	
	Statement3;
	
	----------
	
	---------- 
	
	Statement n;
	
}</span></pre>
<span id='nextButton' class='opacity00'><a
						class='introjs-button user-btn'>Next &#8594;</a></span>
			</ul>
		</div>
		<div class="main-div col-xs-12 padding00" id="mainDiv">
			<div class="col-xs-12" id="codeDiv">
				<div class="col-xs-4 col-xs-offset-1 padding00">
					<pre class="creamPreTab1 opacity00" id="preTableDiv">
<span id="preDir"><span id="include">#include</span> &lt;<span id="ioStream">iostream</span>&gt;</span>
<span id="lib"><span id="using">using</span> <span id="nameSpace">namespace</span> std;</span>
<span id="templateDiv"><span id="template">template</span> <span id="typeName"><span id="lt">&lt;</span><span id="class1">class</span> <span id="t1">T1</span>, <span id="class2">class</span> <span id="t2">T2</span><span id="gt">&gt;</span></span></span>
<span id="functionDiv">void <span id="show">show(<span id="T1">T1</span> <span id="x">x</span>, <span id="T2">T2</span> <span id="y">y</span>)</span> {
	<span id="cout">cout << <span id="coutX">x</span> << " " << <span id="coutY">y</span> << "\n";</span>
}</span>
<span id="main">main() {
	<span id="temp1">show(<span id="p1">10</span>,<span id="p2">20</span>);</span>
	<span id="temp2">show(<span id="p3">10.5</span>,<span id="p4">20.5</span>);</span>
	<span id="temp3">show(<span id="p5">10</span>,<span id="p6">30.5</span>);</span>
	<span id="temp4">show('<span id="p7">A</span>',<span id="p8">533</span>);</span>
<span id="end">}</span></span>
			</pre>
				</div>
				<div class="col-xs-4 col-xs-offset-1 opacity00 box-border margin-top-2"
					id="addressDiv">
					<div class="col-xs-12" style="margin: 10px 0 10px 0;">
						<div class=" panel panel-primary">
							<div class="panel-heading text-center">
								<b style="color: white;">In show()</b>
							</div>
							<div class="panel panel-body" style="height: 135px;">
								<!-- style="line-height: 18px; height: 120px;" -->
								<div class="col-xs-6">
									<div id="xBox" class="opacity00 panel panel-primary">
										<div class="panel-heading text-center">
											<b style="color: white;">x</b>
										</div>
										<div class="panel panel-body text-center" style="height: 62px;">
											<span id="XVal" class="ct-code-b-green opacity00">10</span>
										</div>
									</div>
								</div>
								<div class="col-xs-6">
									<div id="yBox" class="opacity00 panel panel-primary">
										<div class="panel-heading text-center">
											<b style="color: white;">y</b>
										</div>
										<div class="panel panel-body text-center" style="height: 62px;">
											<span id="YVal" class="ct-code-b-green opacity00">20</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-4 col-xs-offset-1">
					<div id="consoleId" class="center opacity00"
						style="margin-top: 10%;">
						<div class="output-console-title-bar">
							<span class="title"><b>Console</b></span>
						</div>
						<div class="output-console-body" id="consoleBodyDiv">
							<div id="firstLine"></div>
							<div id="secondLine"></div>
							<div id="thirdLine"></div>
							<div id="fourthLine"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	<div class="margin-top-2 col-xs-12 text-center">
	<span class="col-xs-6 col-xs-offset-3">
 		<span class="col-xs-12">
 			<span class="col-xs-8 col-xs-offset-2">
 				<span class="col-xs-12" id="button" style=''>
					<span class="btn btn-warning opacity00" id="closeBtn">Close <i class="fa fa-close"></i></span>&nbsp;&nbsp;
					<span class="btn btn-restart opacity00" id="restartBtn">Restart <i class="fa fa-refresh"></i></span>
				</span>
			</span>
		</span>
	</span>
</div>
	</div>
</body>
</html>
