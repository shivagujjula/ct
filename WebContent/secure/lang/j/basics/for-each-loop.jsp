<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>for-each-loop</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/j/js-min/fel.min.js"></script>

<style type="text/css">
.allowNumbers {
    outline: none;
}

body {
	-moz-tab-size: 4;
}

.box-border {
	border-radius: 8px;
}

#outputDiv {
	position: relative;
	z-index: 1000000;
}

.output-console-title-bar {
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	margin-top: 14px;
}

.output-console-body {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    height: 221px;
    margin-bottom: 14px;
    padding: 10px;
    font-weight: bold;
}

.title {
	font-size: 12px;
}

.creamePreTab4 {
	background-color: #fffae6;
	margin-top: 12px;
	white-space: pre;
}

.declareBtn, .initializeBtn, .initializeCup, .continueBtn {
	background-color: green !important;
}

.FinishBtn {
	margin-right: 15px !important;
	background-color: orange !important;
}

.position-absolute {
	position: absolute;
}

.position-relative {
	position: relative;
}

.animationDiv {
    left: 50%;
    top: 21%;
  	width: 65%;
    z-index: 10000001 !important;
}

.bgcolor-cream {
	background-color: #ffffcc;
	height: 100px !important;
	border: 1px #ffffcc;
    border-radius: 10px;
}

table {
	position: relative;
	z-index: 1000004;
}

td {
    padding: 5px !important;
    min-width: 45px !important;
    text-align: center;
}

.td-border {
	border: 2px solid gray;
}

.opacity00 {
	opacity: 0;
	pointer-events: none;
	cursor: default;
}

.cup-bg {
	background-color: #003399;
    border: 1px solid white;
    border-radius: 4px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
    height: 35px;
    position: fixed;
    transition: all 1.3s ease-out 0s;
    width: 60px;
    z-index: 10000000 !important;
}

.cup {
	display: inline-block;
    left: 23px;
    position: relative;
    z-index: 10000000 !important;
}

#cupValue {
	bottom: 56px;
	left: 11px;
	position: relative;
	z-index: 10000050 !important;
}

.num-position {
	bottom: 35px;
    color: white;
    font-family: monospace;
    font-size: 10px;
    position: relative;
    right: 22px;
}

.fa-inverse {
	font-size: 32px;
}

.ui-effects-transfer {
    border: 1px solid #003399;
    position: relative;
    z-index: 10000001 !important;
}

.z-index {
	z-index: 1000001 !important;
}

.arrow {
	position: relative;
	right: 28px;
}

.index {
	position: relative;
	opacity: 0;
}

span[contenteditable=true] {
	display: inline-block;
	border: 0;
}

[contenteditable=true]:empty:before {
  content: attr(placeholder);
  color: #B8B8A0;
}

.errorText {
	color: red;
	font-weight: bold;
}
</style>

<script type="text/javascript">
	
	$(document).ready(function() {
		forEachLoopReady();
	});
	
</script>
</head>
<body>
	<div class='col-xs-12'>
		<div class="text-center">
			<h4>
				<span class="label ct-demo-heading">for-each in Action</span>
			</h4>
		</div>
		<div class="col-xs-8 forLoopDiv">
			<div>
				<pre class="creamePreTab4">public class ForEachLoopDemo {  
	<span class="main">public static void main(String[] args) {
		<span id='array_initialize'>int[] <span id='intArr'>intArr = </span> <span id='new_array_initialization'>new int[4];</span></span>
		<span id='intArr_1'>intArr[<span>0</span>] = <span id='value1' class="allowNumbers" maxlength="2" contenteditable=false placeholder="">34</span>;</span>
		<span id='intArr_2'>intArr[<span>1</span>] = <span id='value2' class="allowNumbers" maxlength="2" contenteditable=false placeholder="">32</span>;</span><span id='testCupPosition'></span>
		<span id='intArr_3'>intArr[<span>2</span>] = <span id='value3' class="allowNumbers" maxlength="2" contenteditable=false placeholder="">74</span>;</span>
		<span id='intArr_4'>intArr[<span>3</span>] = <span id='value4' class="allowNumbers" maxlength="2" contenteditable=false placeholder="">27</span>;</span>
		<span id='forloop'><span id='syntax'>for (<span id='condition'>int val : <span>intArr</span></span>) { </span>
			<span id='body_of_loop'>System.out.println("val : " + val);</span>
		<span id='forLoopEnd'>}</span></span>
	<span id='mainEnd'>}</span></span><span class="animationDiv position-absolute"><div class="col-xs-8 bgcolor-cream text-center opacity00"><table><tr id='indexTr'><td><span class="opacity00">indexes =  </span></td><td class='index'><span>0</span><span id="innerIndex1"></span></td><td class='index'><span>1</span><span id="innerIndex2"></span></td><td class='index'><span>2</span><span id="innerIndex3"></span></td><td class='index'><span>3</span><span id="innerIndex4"></span></td></tr><tr id='arrayTr'><td><span id='td0' class='opacity00 position-relative'>intArr = </span></td><td><span id='td1' class='opacity00 position-relative'>100</span></td><td><span  id='td2' class='opacity00 position-relative'>200</span></td><td><span id='td3' class='opacity00 position-relative'>300</span></td><td><span id='td4' class='opacity00 position-relative'>400</span></td></tr><tr id='arrowTr'><td></td><td><span id='arrowTd1'></span></td><td><span id='arrowTd2'></span></td><td><span id='arrowTd3'></span></td><td><span id='arrowTd4'></span></td></tr></table><br><br><span class='arrow opacity00 fa fa-arrow-up'></span></div></span>
}
</pre>
			</div>
		</div>
		<div class="col-xs-4" id="outputDiv">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body"><span id="output"></span>
			</div>
		</div>
	</div>
	<div class="text-center col-xs-12">
		<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
	</div>
	<span class="cup-bg opacity00"><span class="hide-sm cup"><i class="fa fa-coffee fa-inverse fa-2"></i><h5 class="num-position"><span id="cup_i">val</span>= </h5><h6 id="cupValue" class='opacity00'>1</h6></span></span>
</body>
</html>
