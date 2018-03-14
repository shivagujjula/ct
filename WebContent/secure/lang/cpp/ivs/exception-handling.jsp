<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>exception-handling</title>
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
<script src="../js-min/eh.min.js"></script> 

<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

.margin-top-10 {
	margin-top: 10px;
}


#topDiv {
    border: 1px solid gray;
    border-radius: 8px;
    padding: 10px;
	height: 260px;
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

.creampretab1 {
	tab-size: 2;
    -moz-tab-size: 3;
    background-color: #fcf8e3;
    font-family: monospace;
    font-size: 10px;
    padding: 5px;
    line-height: 1.2;
} 
    
.box-border {
	border: 2px solid gray;
	border-radius: 8px;
	background-color: #f5f5f5;
}

#memoryDiv {
	border: 1px solid gray;
    border-radius: 6px;
	padding: 15px;
}

.padding0 {
	padding: 0;
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
	height: 130px;
	padding: 10px;
	white-space: inherit;
}

.padding5 {
	padding: 10px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.input-val {
	background-color: #000;
	border: 1px solid black;
	border-radius: 4px;
	color: #0f0;
}

.display-inline-block {
	display: inline-block;
}

.relative {
	position: relative;
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

.green {
	color: green;
}

.margin-bottom0 {
	margin-bottom: 0;
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

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 10000001 !important;
	background-color: #ff0066;
	font-weight: bold;
}
</style>
</head>
<body>
<script type="text/javascript">

$(document).ready(function() {
	exceptionHandlingReadyFun();
});

</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Exception Handling</h4>
</div>
<div class="col-xs-offset-1 col-xs-10">
<div class="col-xs-offset-1 col-xs-10 margin-top-10">
	<div id="topDiv">
		<ul>
			<li id="li1" class="opacity00">
				<b>Exceptions</b> are runtime errors or unusual conditions that a program may encounter while executing.
			</li>
			<li id="li2" class="opacity00">
				The mechanism of handling exception is known as <b>exception handling</b>.  
			</li>
			<li id="li3" class="opacity00">
				With <b>try</b> and <b>catch</b> blocks, the code for error handling becomes separate from the normal flow.
			 	&emsp; <span class='user-btn introjs-button' onclick='introjs.nextStep()'>Next &#8594;</span>
			</li>
		</ul>
		<div id="try-catch" class="col-xs-offset-4 col-xs-4 margin-top-10">
<pre id="tryCatch" class="creampretab1 hide"><span id="tryBlock"><g>try</g> {
	-----
	-----
	-----
	<span id="throw"><g>throw</g> exception;</span>
	-----
	-----
}</span>
<span id="catchBlock"><g>catch</g>(arguments) {
	-----
	-----
	-----
}</span>
</pre>
</div>
	</div>
</div>
</div>
	
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-offset-1 col-xs-5">
		<div id="code" class="hide">
<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<red>int</red> main() {
	<span id="xy" class=""><red>int</red> x = 10, y = 0;</span>
	<span id="cout1" class="">cout << <red>"Before exception, inside main()\n"</red>;</span>
	<span id="cout2" class="">cout << <red>"division value = "</red> << (<span id="x-y">x / y</span>);</span>
	<span id="try2catch" class="hide"><span id="try" class=""><g>try</g> {
		<span id="cout3" class="">cout << <red>"Division value = "</red> << (<span id="x-y1">x / y</span>) << <red>"\n"</red>;</span>
	}</span>
	<span id="catch" class=""><g>catch</g> (int y) {
    	<span id="cout4" class="">cout << <red>"Division by 0 error is occured\n"</red>;</span>
	}</span></span>
	<span id="cout5" class="">cout << <red>"After exception, inside main()\n"</red>;</span>
}
</pre>	
		</div>
	</div>
	<div class="col-xs-5">
		<div id="outputDiv" class="hide">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body">
				<div id="op1" class="opacity00">Before execution, inside main()</div>
				<div id="op2" class="opacity00"><red>Floating point exception</red></div>
				<div id="op3" class="opacity00">Before execution, inside main()</div>
				<div id="op4" class="opacity00">Division by 0 error is occured</div>
				<div id="op5" class="opacity00">After exception, inside main()</div>				
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
			</span
</div>
</div>
</body>
</html>
