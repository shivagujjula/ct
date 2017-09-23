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
<script src='/secure/lang/cpp/js-min/oiadoic.min.js'></script>

<title>Overloading increment(++) and decrement(--) operators in
	cpp</title>
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
	font-size: 11px;
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

#restart {
	margin-top: 13%;
}

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-5 {
	margin-top: 5%;
}

.margin-top-10 {
	margin-top: 10%;
}

.margin-top-15 {
	margin-top: 15%;
}

.margin-top-20 {
	margin-top: 20%;
}

.margin-top-13 {
	position: absolute;
	margin: 7px 0 0 -3px;
}

.margin-top-25 {
	margin-top: 25px;
}

.margin-custom {
	margin: 25px 0px 25px 0px;
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

.ct-code-b-black {
	font-weight: bold;
	font-family: monospace;
	color: black;
}

.ct-code-b-gold {
	color: gold;
	font-weight: bold;
	border-top: none;
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

.ct-color-spring {
	color: mediumspringgreen;
}

.ct-code-b-teal {
	font-family: message-box;
	color: teal;
}

ul.expl {
	list-style-type: square;
}

#consoleId {
	width: 550px;
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
	width: 200px;
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}

.input-char2 {
	width: 45px;
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}

.box-Heading {
	font-weight: bold;
	color: rgb(47, 79, 79);
}

#addressDiv {
	height: 265px;
}

#locVarAddress {
	height: 200px;
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
	background-color: green;
}

.blinking {
	animation-name: blink;
	animation-duration: 2s;
	animation-iteration-count: 2;
}

@
keyframes blink { 50% {
	background: orange;
}

}
.ui-effects-transfer {
	border: 1px solid green;
	z-index: 10000000 !important;
	display: inline-block;
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
.error-text {
	color: red;
	font-weight: bold;
}

.position {
	display: inline-block;
	position: relative;
}

.panel-heading, .panel-body {
	padding: 5px;
}

.panel-group {
	margin-top: 40px;
	margin-bottom: 7px;
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

.bold {
	font-weight: bold;
}

.method-box-text-css {
	background: lightblue none repeat scroll 0 0;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-family: monospace;
	text-align: center;
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
			<ul>
				<li id="list" class="opacity00">prefix increment <span class="ct-Maroon-color">operator++()</span> can be overload
					with either a non-member function operator that has one argument of
					class type or a reference to class type, or with a member function
					operator that has no arguments.<br>
				</li>

				<li id="list1" class="opacity00">The postfix increment operator
					++ can be overloaded for a class type by declaring a non-member
					function operator <br><span class="ct-Maroon-color">operator++()</span> with two arguments, the first having
					class type and the second having type int. Alternatively, you can
					declare a member function operator <span class="ct-Maroon-color">operator++()</span> with one argument
					having type int.</li>
				<li id="list2" class="opacity00">The compiler uses the int
					argument to distinguish between the prefix and postfix increment
					operators. <span id='nextButton' class='opacity00'><a
						class='introjs-button user-btn'>Next &#8594;</a></span>
				</li>
			</ul>
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
		<span id="sample">public:	sample() {
	
					}</span>
					<span id="samplePara"><span id="sampleInt">sample(int <span
									id="xInit">x</span>)</span> {
							<span id="aValue">a = <span id="xValue">x</span>;</span>
					}</span>
					<span id="putData">void putdata() {
							<span id="printA">cout << a << endl;</span>
    				}</span>					
					<span id="preInc">sample operator ++( ) { // prefix
							<span id="preIncS1">sample s;</span>
							<span id="aPreInc">a = a + 1;</span>
							<span id="s1PreIncVal">s.a = a;</span>
							<span id="return">return s;</span>
					}</span>
					<span id="postInc">sample operator ++(int d) { // postfix
							<span id="postIncS1">sample s;</span>
							<span id="s1PostIncVal">s.a = a;</span>
							<span id="aPostIncVal">a = a + 1;</span>
							<span id="return1">return s;</span>
					}</span>
					<span id="preDec">sample operator --( ) { // prefix
							<span id="preDecS1">sample s;</span>
							<span id="aPreDecVal">a = a - 1;</span>
							<span id="s1PreDecVal">s.a = a;</span>
							<span id="return2">return s;</span>
					}</span>
					<span id="postDec">sample operator --(int d) { // postfix
							<span id="postDecS1">sample s;</span>
							<span id="s1PostDecVal">s.a = a;</span>
							<span id="aPostDecVal">a = a - 1;</span>
							<span id="return3">return s;</span>
				  	}</span>
};</span>
<span id="main">int main() {
		<span id="s1Init">sample s1(<span id="num">5</span>);</span>
		<span id="diffObj">sample s2, s3, s4, s5;</span>
		<span id="s2PreInc">s2 = <span id="pre">++s1</span>;</span>
		<span id="s1PutData">s1.putdata();</span>
		<span id="s2PutData">s2.putdata();</span>
		<span id="s3PostInc">s3 = <span id="post">s1++</span>;</span>
		<span id="s1PutData1">s1.putdata();</span>
		<span id="s3PutData">s3.putdata();</span>
		<span id="s4PreDec">s4 = <span id="pre1">--s1</span>;</span>
		<span id="s1PutData2">s1.putdata();</span>
		<span id="s4PutData">s4.putdata();</span>
		<span id="s5PostDec">s5 = <span id="post1">s1--</span>;</span>
		<span id="s1PutData3">s1.putdata();</span>
		<span id="s5PutData">s5.putdata();</span>
}</span>
					</pre>
				</div>
				<div
					class="col-xs-5  col-xs-offset-1 box-border address-box margin-top-15 opacity00"
					id="addressDiv">
					<div id="varBox1" class="col-xs-12 opacity00"
						style="height: 110px; margin-top: 10px;">
						<div id="xAddress" class="col-xs-3  text-center opacity00"
							style="margin-top: 10px">
							<div>
								<b style="color: maroon;">x</b>
							</div>
							<div style="line-height: 80px; height: 80px;" class="box-border">
								<span id="xVal" class="opacity00 ct-sgreen-color"></span>
							</div>
						</div>
						<div id="aAddress" class="col-xs-3  text-center opacity00"
							style="margin-top: 10px; height: 130px;">
							<div>
								<b style="color: maroon;">a</b>
							</div>
							<div style="line-height: 80px; height: 80px;" class="box-border">
								<span id="aVal" class="opacity00 ct-sgreen-color"></span>
							</div>
						</div>
						<div id="s1Address" class="col-xs-3  text-center opacity00"
							style="margin-top: 10px; height: 115px;">
							<div>
								<b style="color: maroon;">s1</b>
							</div>
							<div style="height: 80px;" class="box-border">
								<div id="aBoxS1" class="aBox opacity00">
									<div>
										<b style="color: maroon;">a</b>
									</div>
									<div id="s1AnimationDiv"
										class="ct-sgreen-color varBox2 box-border">
										<span id="s1Val"
											class="opacity00 margin-top-13 ct-green-color"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="varBox2" class="col-xs-12 opacity00"
						style="height: 110px; margin-top: 10px;">
						<div id="s2Address" class="col-xs-3  text-center"
							style="margin-top: 10px; height: 115px;">
							<div>
								<b style="color: maroon;">s2</b>
							</div>
							<div style="height: 80px;" class="box-border">
								<div id="aBox" class="aBox opacity00">
									<div>
										<b style="color: maroon;">a</b>
									</div>
									<div id="s2AnimationDiv"
										class="ct-sgreen-color varBox2 box-border">
										<span id="s2Val"
											class="opacity00 margin-top-13 ct-green-color"></span>
									</div>
								</div>
							</div>
						</div>
						<div id="s3Address" class="col-xs-3  text-center"
							style="margin-top: 10px; height: 115px;">
							<div>
								<b style="color: maroon;">s3</b>
							</div>
							<div style="height: 80px;" class="box-border">
								<div id="aBox1" class="aBox opacity00">
									<div>
										<b style="color: maroon;">a</b>
									</div>
									<div id="s3AnimationDiv"
										class="ct-sgreen-color box-border varBox2">
										<span id="s3Val"
											class="opacity00 margin-top-13 ct-green-color"></span>
									</div>
								</div>
							</div>
						</div>
						<div id="s4Address" class="col-xs-3  text-center"
							style="margin-top: 10px; height: 115px;">
							<div>
								<b style="color: maroon;">s4</b>
							</div>
							<div style="height: 80px;" class="box-border">
								<div id="aBox2" class="aBox opacity00">
									<div>
										<b style="color: maroon;">a</b>
									</div>
									<div id="s4AnimationDiv"
										class="ct-sgreen-color box-border varBox2">
										<span id="s4Val"
											class="opacity00  margin-top-13 ct-green-color"></span>
									</div>
								</div>
							</div>
						</div>
						<div id="s5Address" class="col-xs-3  text-center"
							style="margin-top: 10px; height: 115px;">
							<div>
								<b style="color: maroon;">s5</b>
							</div>
							<div style="height: 80px;" class="box-border">
								<div id="aBox3" class="aBox opacity00">
									<div>
										<b style="color: maroon;">a</b>
									</div>
									<div id="s5AnimationDiv"
										class="ct-sgreen-color box-border varBox2">
										<span id="s5Val"
											class="opacity00 margin-top-13 ct-green-color"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="locVarAddress"
						class="box-border col-xs-12 margin-top-10 opacity00">
						<div class="col-xs-12 text-center"
							style="font-weight: bold; color: rgb(47, 79, 79); padding: 0px;">
							<div id="boxHeading1" class="col-xs-4 col-xs-offset-4 hide">In
								operator++()</div>
							<div id="boxHeading2" class="col-xs-4 col-xs-offset-4 hide">In
								operator++(int)</div>
							<div id="boxHeading3" class="col-xs-4 col-xs-offset-4 hide">In
								operator--()</div>
							<div id="boxHeading4" class="col-xs-4 col-xs-offset-4 hide">In
								operator--(int)</div>
						</div>
						<div id="sAddress"
							class="col-xs-6 col-xs-offset-3 box-border text-center opacity00"
							style="margin-top: 10px; height: 115px;">
							<div id="sBox" class="opacity00">
								<div>
									<b style="color: maroon;">s</b>
								</div>
								<div id="aBoxS"
									style="height: 80px; width: 126px; margin: 0 0 0 36px;"
									class="aBox box-border opacity00">
									<div>
										<b style="color: maroon;">a</b>
									</div>
									<div id="sAnimationDiv"
										class="ct-sgreen-color varBox2 box-border">
										<span id="sVal" class="opacity00 margin-top-13 ct-green-color"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-4 col-xs-offset-1 margin-top-20">
					<div id="consoleId" class="center opacity00">
						<div class="output-console-title-bar">
							<span class="title"><b>Console</b></span>
						</div>
						<div class="output-console-body" id="consoleBodyDiv">
							<div id="s1Value" class="opacity00">6</div>
							<div id="s2Value" class="opacity00">6</div>
							<div id="s1Value1" class="opacity00">7</div>
							<div id="s3Value" class="opacity00">6</div>
							<div id="s1Value2" class="opacity00">6</div>
							<div id="s4Value" class="opacity00">6</div>
							<div id="s1Value3" class="opacity00">5</div>
							<div id="s5Value" class="opacity00">6</div>
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
	</div>
</body>
</html>