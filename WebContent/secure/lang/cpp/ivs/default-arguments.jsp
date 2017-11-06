<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Understanding default arguments</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/secure/lang/cpp/js-min/da.min.js"></script> 



<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}

.margin-top-50 {
	margin-top: 50px;
}

.creampretab {
	tab-size: 3;
	-moz-tab-size: 3;
	background-color: #f5f5f5;
	border: 1px solid gray;
	border-radius: 6px;
	color: #333;
	font-family: monospace;
	font-size: 12px;
	padding: 7px;
}

#informationDiv {
	border: 1px solid gray;
	border-radius: 6px;
	margin-top: 20px;
}

#outputDiv {
	margin-top: 22px;
	padding: 0;
	z-index: 9999999;
	min-width: 310px;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	background-color: gray;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	font-size: 13px;
	height: 178px;
	padding: 0px;
	white-space: inherit;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.errMsg {
	color: red;
	font-weight: bold;
	font-family: monospace;
}

.input-val {
	background-color: black;
	border: 1px solid black;
	text-align: center;
	width: 25px;
}

.val-color {
	color: #0f0;
}

.display-inline-block {
	display: inline-block;
}

.user-button {
	background-color: green;
}

.relative {
	position: relative;
}

.introjs-tooltip {
	min-width: 300px;
}

.ui-effects-transfer {
    border: 2px dashed red;
    z-index: 99999999 !important;
 }
  
.ct-red-color {
	color: red;
}

.ct-green-color {
	color: green;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important; 
}
</style>
</head>
<body>
	<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading' id='demoTitle'>Default Argument Functions</h4>
	</div>
	<div class="col-xs-12 margin-top-50">
		<div class="col-xs-8 col-xs-offset-2 opacity00" id="informationDiv">
			<div class="col-xs-12">
				<div id="infoText">
					<ul>
						<li class="opacity00" id="li1"><b class="ct-green-color">Default Arguments</b> are the values
						 provided during function declaration which is is automatically assigned to the respective   
						 formal parameter by	the compiler, when arguments are not provided during function call.</li><br>				
					<li class="opacity00" id="li2">If a function is called without passing arguments, then those 
						<b class='ct-green-color'>default arguments</b> are used by the function.</li><br>
					<li class="opacity00" id="li3">Once a default value is used for an argument
						then all subsequent arguments must have default values up to the end.</li> 
					</ul><a class="introjs-button user-button opacity00"id="nextButton">Next&#8594;</a>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-50">
		<div class="col-xs-offset-2 col-xs-5 margin-top-20">
			<div id="leftDiv" class="opacity00">
				<pre class="creampretab" id="code">#include &lt;iostream&gt;
using namespace std;
<span id="funDef">int sum(int x, int y, <span
						id="default">int z = <span 
						class='display-inline-block' id='cVal' contenteditable='true'>3</span>,	int w = <span class='display-inline-block' contenteditable='true' id='dVal'>0</span></span>) {
	<span id="return">return x + y + z + w;</span>
}
</span>
<span id="main">int main() {
	 <span id="printf1">cout << <span id="callingFunSum1">sum(<span
								class='display-inline-block' contenteditable='true' id='aVal'>10</span>, <span
								class='display-inline-block' contenteditable='true' id='bVal'>15</span>)</span> << endl;</span>
	 <span id="printf2">cout << <span id="callingFunSum2">sum(<span
								class='display-inline-block' contenteditable='true' id='a1Val'>10</span>, <span
								class='display-inline-block' contenteditable='true' id='b1Val'>15</span>, <span
								class='display-inline-block' contenteditable='true' id='c1Val'>25</span>)</span> << endl;</span>
	 <span id="printf3">cout << <span id="callingFunSum3">sum(<span
								class='display-inline-block' contenteditable='true' id='a2Val'>10</span>, <span
								class='display-inline-block' contenteditable='true' id='b2Val'>15</span>, <span
								class='display-inline-block' contenteditable='true' id='c2Val'>25</span>, <span
								class='display-inline-block' contenteditable='true' id='d2Val'>30</span>)</span> << endl;</span>
<span id="end">}</span></span>
</pre>
			</div>
		</div>
		<div class="col-xs-offset-1 col-xs-3">
			<div id="outputDiv" class="opacity00">
				<div class="output-console-title-bar">
					<span class="title">Output</span>
				</div>
				<div class="output-console-body" class="col-xs-offset-3 col-xs-3" id="outputBody1">
					<span id="output1" class="opacity00" style="color: green; padding: 4px;"><b>28</b></span><br>
					 <span id="output2" class="opacity00" style="color: green; padding: 4px;"><b>50</b></span><br>
					<span id="output3" class="opacity00" style="color: green; padding: 4px;"><b>80</b></span> 
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 text-center" style="margin-top:75px;">
		<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
	</div>
</body>
<script type="text/javascript">
	$(document).ready(function() {
		defaultArguementReady123();
	});
</script>
</html>