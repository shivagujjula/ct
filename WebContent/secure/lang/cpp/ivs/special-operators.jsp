<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/cpp/js-min/spos.min.js"></script>
<title>special-operators</title>

<style>

.introjs-tooltiptext br {
	content: "";
	display: block;
	margin-top: 10px;
}

.introjs-tooltip {
	min-width: 300px;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

.introjs-duplicate-nextbutton1 {
	background-color: green;
	margin: 0 5px !important;
}

.introjs-duplicate-nextbutton2 {
	background-color: green;
}

.buttons-div {
	margin: 20px 0 10px;
	text-align: center;
}

.heading-css {
	margin: 20px 0 10px;
}

.box-border {
	border: 1px solid grey;
	border-radius: 8px;
	margin: 30px 10px 10px 6%;
	padding: 10px;
}

.creamPreTab4 {
	tab-size: 3;
    background-color: #fffae6;
    border-radius: 8px;
    font-size: 11px;
    margin: 5px;
    padding: 10px;
    white-space: pre;
}

.output-console {
	padding: 0;
}

.output-console-body {
    background-color: black;
    padding-left: 20px;
    color: #cead24;
    font-family: monospace;
    font-size: 11px;
    /* white-space: pre; */
    overflow-y: auto;
    line-height: 0.8;
    min-height: 162px;
}

.heading-text-div {
	border: 1px solid grey;
	border-radius: 8px;
	padding: 5px 10px;
}

.ct-code-b-green {
	font-weight: bold;
	color: green;
}

.ct-code-text-css {
	background-color: black;
	border-radius: 12px;
	color: white;
	font-family: monospace;
	font-size: 12px;
	padding: 4px 10px;
}

.padding5  {
	padding: 5px;
}

.background-color-pink {
	background-color: pink;
}

.z-index {
	position: relative;
	z-index: 9999999;
	background-color: white;
}
</style>

</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'>
		<h1 class='label ct-demo-heading'>Special Operators</h1>
	</div>
	
	<div class="col-xs-12">
		<div class='col-xs-offset-2 col-xs-8 heading-text-div' id='headingTextBox'>
			<div class='opacity00'>
				They are two <span class='ct-code-b-green'>special</span> operators. 
				They are: <span class='ct-code-b-green'>comma</span> and <span class='ct-code-b-green'>sizeof()</span> operators.
			</div><br>
			<div class='opacity00 commaLine'>
				<span class='ct-code-b-green'>Comma</span> operator is used to link the related expressions together. 
				For example the below two statements:
			</div>
			<div class='opacity00 padding5 commaLine'><span class='ct-code-text-css'>int x = 0;</span></div>
			<div class='opacity00 padding5 commaLine'><span class='ct-code-text-css'>int y = 0;</span></div>
			<div class='opacity00 commaLine'>can be rewritten using a <span class='ct-code-b-green'>comma</span> operator as:</div>
			<div class='opacity00 padding5 commaLine'><span class='ct-code-text-css'>int x = 0, y = 0;</span></div><br>
			<div class='opacity00 sizeofLine'>
				<span class='ct-code-b-green'>sizeof()</span> operator is also called <b>compile time</b> operator and when used with an 
				operand it returns the number of bytes the operand occupies.
			</div>
			<div class='opacity00 sizeofLine'>The operand may be a variable, constant or a data type. For example in the below statement:</div>
			<div class='opacity00 padding5 sizeofLine'><span class='ct-code-text-css'>int a = sizeof(int);</span></div>
			<div class='opacity00 sizeofLine'>The value stored in the <b>a</b> is the number of bytes occupied by an <b>int</b> data type.</div>
		</div>
	</div>
	
	<div class='col-xs-12 visibility-hidden' id='demoDiv'>
		<div class='col-xs-6 box-border'>
<pre class='creamPreTab4' id='preCode'>
#include &lt;iostream&gt;
using namespace std;
void main() {
	<span id='line1'>int a, f, g, e[10];</span>
	<span id='line2'><span>float</span> <span>b</span>;</span>
	<span id='line3'><span>double</span> <span>c</span>;</span>
	<span id='line4'><span>char</span> <span>d</span>;</span>
	<span id='line5'><span>a</span> = (<span>f = 5</span>, <span>g = 4</span>, <span>f + g</span>);</span>
	<span id='line6'>cout << "Value of a = " << a << "\n";</span>
<span id='sizeOfPrintfLines'>	<span id='line7'>cout << "Size of int = "<< sizeof(a) << "bytes\n";</span>
	<span id='line8'>cout << "Size of float = " << sizeof(b) << " bytes\n";</span>
	<span id='line9'>cout << "Size of double = " << sizeof(c) << " bytes\n", );</span>
	<span id='line10'>cout << "Size of char = << sizeof(d) << " byte\n";</span>
	<span id='line11'>cout << "Size of integer type array having 10 elements = " << sizeof(e) " bytes\n";</span></span>
}
</pre>
		</div>
		<div class="output-console col-xs-4 opacity00" id='outputBox' >
			<div class="output-console-title-bar">
				<span>Output</span>
			</div>
			<div>
				<div class="output-console-body">
					<div id="firstVal" class='visibility-hidden'>Value of a = 9</div>
					<div id="secondVal" class='visibility-hidden'>Size of int = 4 bytes</div>
					<div id="thirdVal" class='visibility-hidden'>Size of float = 4 bytes</div>
					<div id="fourthVal" class='visibility-hidden'>Size of double = 8 bytes</div>
					<div id="fifthVal" class='visibility-hidden'>Size of char = 1 byte</div>
					<div id="sixthVal" class='visibility-hidden'>Size of integer type array having 10 elements = 40 bytes</div>
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
<script>
	$(document).ready(function() {
		specialOperatorsReady();
	});
</script>

</body>
</html>
