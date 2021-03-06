<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<title>review</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/secure/lang/cpp/js-min/aoda.min.js" type="text/javascript"></script>
<style type="text/css">

.zIndex {
	position: relative;
	z-index: 9999999;
	background: white;
}

.input-all {
  width: 50%;
  border-width: 0px 0 0 0;
  background-color: #000;
  color: #0f0;
}

.background-color {
    background-color: #BCBCBC;
}

#mainDiv {
	margin-top: 20px;
}

pre {
	tab-size: 4;
	-moz-tab-size: 4;
}

#tableDiv {
	height:80px;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	height: 258px;
	overflow:unset;
	padding: 10px;
	white-space: nowrap;
}

.margin-top20 {
	margin-top: 20px;
}

#typingDiv {
	min-height: 40px;
	font-family: monospace;
}

.back-color {
	background-color: #D6C2E7;
}

.green-color {
	color: green;
}

.input-char {
    background-color: #000;
    border-width: 0;
    color: #0f0;
    width: 50px;
}

.padding0 {
	padding: 0;
}
 
.input-char:empty::before {
	content: attr(placeholder);
	color: gray;
}

.outline-none {
	outline:none;
}

.error-msg {
	color: red;
	font-weight: bold;
}

.border-height-css, .td-value-css {
	border: 1px solid;
	height: 22px;
}
 .red {
 	border:1px solid red;
 }
 
 .red-text {
 	color: red;
 }
 
 .green-text {
 	color: green;
 }
 
 .blue-text {
 	color: blue;
 }
 
 .green {
 	border:1px solid green;
 }
 
 
 .blue {
 	border:1px solid blue;
 }
 
div, span {
	position: relative;
}

/* pre > span {
	position: static;
} */

.table-css {
	text-align: center;
	width: 100%;
}

.user-btn {
	background-color: green;
}

.output-value-circle {
	background: white;
	color: black;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
	background-color: white;
	color: black; 
}

.text-bold {
	font-weight: bold;
}

.ct-code-b-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.blinking-orange {
	animation-name: blink-background-orange ;
	animation-duration: 1s;
	animation-iteration-count: 1s;
	animation-direction: alternate;
}

@keyframes blink-background-orange {
	50% {
		background-color: orange;
	}
}



</style>
</head>
<body>
<script type="text/javascript">




$(document).ready(function() {
	oneDimesionalArrayReady();
});


</script>
<div class="ct-box-main padding0">
		<div class='text-center'>
			<h1 class='label ct-demo-heading' id="heading">One Dimensional Array</h1>
		</div>

		<div id="typingDiv"
			class='margin-top20 col-xs-offset-3 col-xs-7 col-xs-offset-2'>
				<ul><li>Array is used to store a collection similar type of data in continues memory location (Address).</li>
				<li>General format of one dimension array is as follows 
				<div id="textAnimate" class="text-bold" style="display:inline-block"> 
				<span id="part1">data_type</span> 
				<span id="part2">array_name</span>
				<span id="part3">[<span class="green-color">size</span>]</span>;</div></li></ul>
		</div>
		<div id='mainDiv' class='col-xs-12 padding0'>
			<div class='col-xs-6 '>
				<pre class="creampretab4 opacity00" id='codeDiv'>
#include <span>&lt;iostream&gt;</span>
using namespace std;
int main() {
	<span id='variableDeclaraiton'><span id='array'>int arr[9]</span>, i, n;</span>
	<span id='getRowColumn'>cout << "Enter how many values you want to read : ";</span>
	<span id='scanf'>cin >> n;</span>
	<span id='getInputValues'>for (i = 0; i &lt; n; i++ ) {
		<span id='matrixValues'>cout << "Enter the value of arr[" << i << "] : "</span>
		cin >> arr[i];
	} </span>
	<span id='codePrintf'>cout << "The array elements are : \n";</span>
	<span id='printForLoop'>for( i = 0; i &lt; n; i++ ) {
		cout << arr[i] << " ";
	}</span>
}</pre>
			
			</div>
			<div class='col-xs-6'>
				<div id='animationDiv' class='opacity00'>
					<div id="consoleId1" class="center">
						<div class="output-console-title-bar">
							<span class="title"><b>Console</b></span>
						</div>
						<div class="output-console-body" id="consoleBodyDiv1">
						<span id="animationDivText" class='opacity00'>Enter how many values you want to read :&emsp;<div spellcheck="false" class="opacity00 empty matrix input-char outline-none" 
							id="rowValue" placeholder="rows" maxlength="0" contenteditable="true" style='display: inline-block; font-family: monospace; font-weight: bold;'></div></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
<div class="col-xs-12">
	<div id='tableDiv'>

		<div class='col-xs-12' id='arrayBox'>
			<table class='table-css'>
				<tbody>
					<tr>
					</tr>
					<tr>
					</tr>
					<tr>
					</tr>
				</tbody>
			</table>
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
