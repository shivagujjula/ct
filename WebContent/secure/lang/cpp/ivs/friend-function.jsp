<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>friend-function</title>
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

<script src="../js-min/ff.min.js"></script>

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
	height: 135px;
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
	margin: 0 !important;
}

.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

.relative {
	position: relative;
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
	font-weight: bold;
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
	friendFunctionReadyFun();
});

</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Friend Function</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<div id="typingDiv1">
				<ul>
					<li id="li1" class="opacity00">A friend function can be given special grant to access <g>privat</g>e and <g>protected</g> members. A friend function can be:
						<ul>
							<li>A method of another class</li>
							<li>A global function</li>
						</ul>
					</li>
					<li id="li2" class="opacity00">
						 Friends should be used only for limited purpose. Too many functions or external classes are declared as friends
					 	of a class with protected or private data, it lessens the value of encapsulation of separate classes in object-oriented programming.
					 </li>
					<li id="li3" class="opacity00">Friendship is not mutual. If a class A is friend of B, then B doesn’t become friend of A automatically.</li>
					<li id="li4" class="opacity00">Friendship is not inherited
						&emsp; <span class='user-btn introjs-button' onclick='introjs.nextStep()'>Next &#8594;</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-5">
	
<div id="code" class="opacity00">
<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<span id="class"><g>class</g> <blue>Distance</blue> {
	<g>private</g>:
		<span id="meter"><red>int</red> meter;</span>
	<span id="defaultConst" class="hide"><g>public</g>:
		Distance() {
			meter = 0;
		}</span>
		<span id="friendFun" class="hide"><span id="friend" class=""><g>friend</g></span> <red>int</red> addFive(Distance);</span>
};</span>
<span id="addFiveFun" class="hide"><red>int</red> addFive(Distance d) {
	<span id="meterInit">d.meter = meter + 5;</span>
	return d.meter;
}</span>
<red>void</red> main() {
	<span id="constD" class="hide">Distance d;</span>
	<span id="cout" class="hide">cout << <red>"Distance: "</red> << <span id="callMethod">addFive(D);</span></span>
}
</pre>
		</div>
	</div>
	<div class="col-xs-3">
	<div id="memoryDiv" class="opacity00">
	<div class="text-center"><b>memory</b></div>
		<div id="dPanel" class="opacity00">
			<div class="panel panel-primary margin-bottom0">
    			<div class="panel-heading text-center padding0"><b id="d">d</b></div>
    			<div class="panel-body text-center" style="padding: 5px;">
    				<div class="col-xs-offset-3 col-xs-6">
						<div id="meterPanel" class="">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>meter</b></div>
			    				<div class="panel-body text-center"><span id="meterPanelVal" class="opacity00">0</span></div>
			  				</div>
			  				<!-- <div class="text-center">1024</div> -->
		  				</div>
					</div>
    			</div>
  			</div>
 		</div>
 		
 		</div>
 		

	</div>
	<div class="col-xs-4">
		<div id="outputDiv" class="opacity00">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body">
				<div id="op1" class="hide">friend-function.cpp: In function <br><b>'int addFive(Distance)'</b>:<br>"
					+ " friend-function.cpp:5:10:<br> <red><b>error</b>:</red> <b>'int Distance::meter'</b> is private int meter;</div>
				<div id="op2" class="hide">Distance: 5</div>
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
</div>
</body>
</html>
