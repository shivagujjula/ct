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
<script src='/secure/lang/cpp/js-min/obpaff.min.js'></script>
<title>Overloading binary plus as friend function</title>
</head>
<style>

#infoDiv {
	background-color: rgb(243, 235, 235);
	border : 1px solid grey;
	border-radius: 10px;
	font-size: 14px;
	padding: 9px 14px;
}
.creamPreTab {
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
	margin-top:10px;
}
.introjs-tooltip-min-width-custom {
	min-width: 350px;
}
.introjs-tooltip-width-custom {
	min-width: 280px;
}

#restart {
    margin-top: 13%;
} 

.margin-top-2 {
	margin-top: 2%;
}
.margin-top-25 {
	margin-top: 25px;
}
.margin-custom {
	margin: 25px 0px 25px 0px;

}
.ct-sgreen-color {
	color: #0f0;
	font-weight: bold;
}
.ct-green-color {
    color: green;
    font-weight: bold;
}
.ct-code-b-green {
	font-weight: bold;
	color: green;
}

.ct-Maroon-color {
	color: #800021;
	font-weight: bold;
	font-family:monospace;
}

.ct-white-color {
	color: navajowhite;
	font-weight: bold;
}
.ct-code-b-yellow {
	color: yellow;
	font-weight: bold;
}
ul.expl {
	list-style-type: square;
}
.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #e5ec07;
	font-family: monospace;
	font-size: 13px;
	min-height: 128px; 
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}
.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
}
.output-value-circle {
	background : white;
	color : black;
}

.input-char {
	min-width: 50px; 
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
.address-box {
	height: 256px;
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
.fa-arrow-left {
	color: green;
	position: relative;
	-webkit-animation: myfirst 1s infinite; /* Chrome, Safari, Opera */
	-webkit-animation-direction: alternate; /* Chrome, Safari, Opera */
	animation: myfirst 1s infinite;
}

.user-btn {
	background-color:green;
}

.blinking {
	animation-name: blink;
	animation-duration: 2s;
	animation-iteration-count: 1;
 }

@keyframes blink {
	50% {
		background: orange;
	}
}
.blinking-white {
	animation-name: blink-border-background-white ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-white { 
	50% {
		border-color: white;
		background: white;
	}
}

.blinking-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 2s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-orange { 
	50% {
		border-color: white;
		background: orange;
	}
}
.ui-effects-transfer {
	border: 1px solid green;
	z-index: 10000000 !important;
}
.ui-effects-transfer-custom {
	border: 2px solid green;
	border-radius : 10px;
	/* z-index: 10000000 !important; */
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
.error-text {
	color: red;
	font-weight: bold;
}

.position {
	display: inline-block;
	position: relative;
}
[contenteditable="true"] {
	font-weight: normal;
	outline: medium none;
}
.box-border {
	border: 1px solid gray;
	border-radius: 8px;
	padding: 10px;
}
.output-console-title-bar {
	background-color: rgba(165, 165, 165, 0.5);
}
.padding00 {
	padding : 0px;
}
.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}
.bold {
	font-weight: bold;
}
.position {
	position : relative;
}
.displayBlock {
	position: relative;
	display: inline-block;
}

</style>
<script>
	$(document).ready(function() {
		overloadingBinaryPlusAsFriendFunctionReady();
	});
</script>
<body>
<div class="main-div col-xs-12">
	<div class="row text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-2'>
			<span>Overloading  binary <span class='ct-code-b-yellow'>+</span> as friend function</span>
		</h3>
	</div>
	<div class="col-xs-8 col-sm-offset-2 margin-top-2  infoDiv" id="infoDiv">
		<ul>
		 	<li id="list1" class="opacity00">To overload a binary operator + as <span class="ct-code-b-green">friend function</span>,
		 	binary operator + requires <span class="ct-code-b-green">two arguments</span>.</li>
		 	<li id="list2" class="opacity00"> The format of <span class="ct-code-b-green">operator function + </span> is : <br>
				 <span class="ct-Maroon-color">friend&emsp;Class-Name&emsp;operator +(Class-Name&emsp;object1, Class-Name&emsp;object2); <!-- { <br>
			 		&emsp;&emsp;// Perform addition on different object values <br>
		 		} --></span>
		 	</li> 
		 	<li id="list3" class="opacity00">The format of <span class="ct-code-b-green">operator function</span> call is : <br>
		 		&emsp;<span class="ct-Maroon-color">object3 =  object1 + object2;</span><br>
		 		User can also write the above statement as : <br>
		 		&emsp;<span class="ct-Maroon-color">object3 = object1.operator +(object2);</span><br>
				<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span>
			</li>
		</ul>
	</div>
	<div class="col-xs-12 padding00">
		<div class="col-xs-12" id="codeDiv">
			<div class="col-xs-5 padding00">
			<pre class="creamPreTab opacity00" id="preTableDiv">
<span id="preDir"><span id="include">#include</span> &lt;<span id="ioStream">iostream</span>&gt;</span>
<span id="lib"><span id="using">using</span> <span id="nameSpace">namespace</span> std;</span>
<span id="class" class="opacity00">class Sample {
	<span id="init" class="opacity00">int <span id="real">real</span>, <span id="imag">imag</span>;</span>
	<span id="public" class="opacity00">public:</span> 
		<span id="getData" class="opacity00">void getData() {
			<span id="print">cout << "Enter the  real and imaginary parts : ";</span>
			<span id="get">cin >> real >> imag;</span>
		}</span>
	 	<span id="putData" class="opacity00">void putData() {
			<span id="print1">cout << real << "+i" << imag;</span>
		}</span>
		<span id="friendFunction" class="opacity00">friend Sample operator +(Sample s1, Sample s2);</span>
};</span>
<span id="frndFunAdd" class="opacity00">Sample operator +(Sample s1, Sample s2) {
		<span id="s3Temp">Sample s3;</span>
		<span id="s3Real">s3.real = <span id="real">s1.real</span> + <span id="s2Real">s2.real</span>;</span>
		<span id="s3Imag">s3.imag = <span id="imag">s1.imag</span> + <span id="s2Imag">s2.imag</span>;</span>
		<span id="return">return s3;</span>
}</span>
<span id="main" class="opacity00">int main() {
		<span id="sampleInit" class="opacity00">Sample <span id="s1">s1</span>, <span id="s2">s2</span>, <span id="s3">s3</span>;</span>
		<span id="objGetData" class="opacity00"><span id="s1GetData" class="opacity00">s1.getData();</span>
		<span id="s2GetData" class="opacity00">s2.getData();</span></span>
		<span id="s3Sum" class="opacity00">s3 = s1 + s2;</span>
		<span id="printSum" class="opacity00">cout << "addition of complex no's is : " ;</span>
		<span id="s3PutData" class="opacity00">s3.putData();</span>
}</span></pre>
			</div>
			<div class="col-xs-6 col-xs-offset-1  margin-top-25">
				<div class="col-xs-12 box-border opacity00" id="addressDiv">
					<div class="col-xs-12" style="margin-top: 10px;">
						<div class="col-xs-12 box-Heading text-center opacity00" style="font-weight: bold; color: rgb(47, 79, 79);">
							<div id="boxHeading1" class="col-xs-4 col-xs-offset-1 opacity00" style="margin-left: 55px;">S1</div>
							<div id="boxHeading2" class="col-xs-4 col-xs-offset-1 opacity00" style="margin-left: 100px;">S2</div>
						</div>
						<div class="col-xs-5  col-xs-offset-1 box-border opacity00" id="s1Box">
							<div class="col-xs-12 opacity00" id="s1AnimationDiv">
								<div id="s1RealBox" class="col-xs-6  text-center opacity00">
									<div><b style="color: maroon;">real</b></div>
									<div class="box-border" style="line-height: 25px; height: 50px;">
										<span id="s1RealVal" class="ct-green-color displayBlock arrayValue text-center"></span>
									</div>
									<!-- <div class='opacity00'>2323</div> -->
								</div>
								<div id="s1ImagBox" class="col-xs-6  text-center opacity00">
									<!-- <div id="localVal" class="col-xs-7 col-xs-offset-2"> -->
										<div><b style="color: maroon;">imag</b></div>
										<div style="line-height: 25px; height: 50px;" class="box-border">
											<span id="s1ImagVal" class="ct-green-color arrayValue text-center"></span>
										</div>
										<!-- <div class='opacity00'>2323</div> -->
									<!-- </div> -->
								</div>
							</div>
						</div>
						<div class="col-xs-5 box-border col-xs-offset-1 opacity00" id="s2Box">
							<div class="col-xs-12 opacity00" id="s2AnimationDiv">
								<div id="s2RealBox" class="col-xs-6  opacity00 text-center">
									<div><b style="color: maroon;">real</b></div>
									<div class="box-border" style="line-height: 25px; height: 50px;">
										<span id="s2RealVal" class="arrayValue1 ct-green-color text-center"></span>
									</div>
									<!-- <div class='opacity00'>2323</div> -->
								</div>
								<div id="s2ImagBox" class="col-xs-6  opacity00 text-center">
									<!-- <div id="localVal" class="col-xs-7 col-xs-offset-2"> -->
										<div><b style="color: maroon;">imag</b></div>
										<div style="height: 50px;" class="box-border">
											<span id="s2ImagVal" class=" arrayValue1 ct-green-color text-center"></span>
										</div>
										<!-- <div class='opacity00'>2323</div> -->
									<!-- </div> -->
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12">
						<div class="col-xs-6 margin-top-25 col-xs-offset-3  opacity00"  style="height: 130px;" id="s3Box">
							<div class="col-xs-12 text-center box-Heading opacity00" style="font-weight: bold; color: rgb(47, 79, 79);">
								<div id="boxHeading3" class="col-xs-4 col-xs-offset-4">S3</div>
							</div>
							<div class="col-xs-12 box-border " id="s3AnimationDiv">
								<div class="col-xs-12  opacity00" id="s3Div">
									<div id="s3RealBox" class="col-xs-6  text-center opacity00">
										<div><b style="color: maroon;">real</b></div>
										<div class="box-border" style="line-height: 25px; height: 50px;">
											<span id="s3RealVal" class="ct-green-color"></span>
										</div>
										<!-- <div class='opacity00'>2323</div> -->
									</div>
									<div id="s3ImagBox" class="col-xs-6  text-center opacity00">
										<!-- <div id="localVal" class="col-xs-7 col-xs-offset-2"> -->
											<div><b style="color: maroon;">imag</b></div>
											<div style="line-height: 25px; height: 50px;" class="box-border">
												<span id="s3ImagVal" class="ct-green-color"></span>
											</div>
											<!-- <div class='opacity00'>2323</div> -->
										<!-- </div> -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12">
					<div class="col-xs-9 margin-top-25">
						<div id="consoleId" class="center opacity00" style="margin-top: 3%; ">
							<div class="output-console-title-bar">
								<span class="title"><b>Console</b></span>
							</div>
							<div class="output-console-body" id="consoleBodyDiv">
								<span id="typeChar"></span>
									<div id="hiddenTypingChar" class="opacity00">Enter the  real and imaginary parts : <span id="outputPrintfLine"><div id="inputChar" contenteditable="true" maxlength="2" class="position input-char"></div></span></div>
									<div id="hiddenTypingChar1" class="opacity00" >Enter the  real and imaginary parts : <span id="outputPrintfLine1" class="opacity00"><div id="inputChar1" contenteditable="true" maxlength="2" class="opacity00 position input-char"></div></span></div>
								<div id="printLineInConsole" class="opacity00">addition of complex no's is : <span id="printpreLine2" class="opacity00"></span></div><br>
							</div>
						</div>
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
</div>
</body>
</html>
