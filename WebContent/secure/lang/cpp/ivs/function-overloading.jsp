<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/font-awesome.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/secure/lang/cpp/js-min/fold.min.js"></script>

<title>Function overloading</title>
<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

#topDiv {
    border: 1px solid gray;
    border-radius: 8px;
    padding: 10px;
}

.creampretab {
	tab-size: 2;
	-moz-tab-size: 3;
	background-color: #f5f5f5;
	font-family: monospace;
	border: 1px solid #ccc;
	border-radius: 4px;
	color: #333;
	display: block;
	font-size: 12px;
	line-height: 1.42857;
	word-break: break-all;
	word-wrap: break-word;
}

.box-border {
	border: 2px solid gray;
	border-radius: 8px;
	background-color: #f5f5f5;
}

.padding0 {
	padding: 0;
}

div, span {
	position: relative;
}

#outputDiv {
	padding: 0;
	z-index: 9999999;
}

.output-console-title-bar {
	background-color: darkgray;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	font-size: 13px;
	height: 190px;
	padding: 10px;
	white-space: inherit;
}

.padding5 {
	padding: 5px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.display-inline-block {
	display: inline-block;
}

.user-btn {
	background-color: green;
	margin: 0!important;
}

.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

.yellow {
	background-color: yellow;
}

g {
	color: green;
}

y {
	color: yellow;
	font-weight: bold; 
}

blue {
	color: #0000FF;
}

red {
	color: red;
}

orange {
	color: #BC7A00;
}

</style>
</head>
<body>

<script type="text/javascript">

$(document).ready(function() {
	functionOverloadingReadyFun();
});

</script>

<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Function Overloading in c++</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<div id="typingDiv1">
				<ul style="font-family: monospace;">
					<li id="li1" class="opacity00">Two or more functions having same name but different arguments are known as overloaded functions.</li>
					<li id="li2" class="opacity00">Function overloading can be considered as an example of polymorphism feature in C++.</li>
					<li id="li3" class="opacity00">The return type may be similar but type of the arguments and number of arguments must be different in function overloading.
						&emsp; <span class='user-btn introjs-button' onclick='introjs.nextStep()'>Next &#8594;</span><br>
					</li>
				</ul>
			</div>
		</div>
	</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-offset-1 col-xs-5">
		<div id="code" class="opacity00">
<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
	<span id="method1" class="color"><red>void</red> add(int a) {
		cout << <red>"The integer value is = "</red> << <span id="aPlusB1">a</span> << <red>"\n"</red>;
	}</span>
	<span id="method2" class="color"><red>void</red> add(float a, float b) {
		cout << <red>"Sum of two float values = "</red> << <span id="aPlusB2">a + b</span> << <red>"\n"</red>;
	}</span>
	<span id="method3" class="color"><red>void</red> add(double a, double b) {
		cout << <red>"Sum of two double values = "</red> << <span id="aPlusB3">a + b</span> << <red>"\n"</red>;
	}</span>
	<span id="method4" class="color"><red>void</red> add(int a, int b, int c) {
		cout << <red>"Sum of three integer values = "</red> << <span id="aPlusB4">a + b + c</span> << <red>"\n"</red>;
	}</span>
	<span id="method5" class="color hide"><red>void</red> add(float t, float a, float b, float c) {
		cout << <red>"Sum of three float values = "</red> << a + b + c  << <red>"\n"</red>;
	}</span>
<span id="main"><red>int</red> main() {
	<span id="addFun1" class="hide"><g>add</g>(<span id="intVal1">10</span>);</span>
	<span id="addFun2" class="hide"><g>add</g>(<span id="floatVal1">12.4</span>f, <span id="floatVal2">16.7</span>f);</span>
	<span id="addFun3" class="hide"><g>add</g>(<span id="intVal111">30</span>, <span id="intVal112">60</span>, <span id="intVal113">90</span>);</span>
	<span id="addFun4" class="hide"><g>add</g>(<span id="doubleVal1">20.3</span>, <span id="doubleVal2">40.5</span>);</span>
	<span id="addFun5" class="hide"><g>add</g>(<span id="float1Val1">8.2</span>);</span>
}</span></pre>
		</div>
	</div>
	<div class="col-xs-5">
		<div id="outputDiv" class="opacity00">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body">
			</div>
		</div>
	</div>
</div>
<div class="margin-top-20 col-xs-12 text-center">
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
</body>
</html>
