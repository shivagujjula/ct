<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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
<script src="../js-min/soj.min.js"></script> 

<title>structure-of-java-final</title>
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
    background-color: white;
}

.leftPre {
	tab-size: 2;
	-moz-tab-size: 3;
	background-color: #f5f5f5;
	font-family: monospace;
	border: 1px solid #ccc;
	border-radius: 4px;
	color: #333;
	font-size: 13px;
	text-align: center;
	padding: 5px;
}

.rightPre {
	tab-size: 2;
	-moz-tab-size: 3;
	background-color: #f5f5f5;
	font-family: monospace;
	border: 1px solid #ccc;
	border-radius: 4px;
	color: #333;
	font-size: 12px;
	padding: 9px;
}

.rightPre1 {
	tab-size: 2;
	-moz-tab-size: 3;
	background-color: #f5f5f5;
	font-family: monospace;
	border: 1px solid #ccc;
	border-radius: 4px;
	color: #333;
	font-size: 10px;
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

#totalDiv {
	border: 1px solid darkgray;
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
	height: 125px;
	padding: 10px;
	white-space: inherit;
}

.padding5 {
	padding: 5px;
}

.relative {
	position: relative;
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

.margin-bottom0 {
	margin-bottom: 0;
}

g {
	color: #008000;
}

y {
	color: yellow;
	font-weight: bold;
}

blue {
	color: #0000FF;
}

red {
	color: #B00040;
}

orange {
	color: #BC7A00;
}

lite-green {
	color: #7D9029;
}

lite-blue {
	color: #408080;
}	

hr {
	margin-top: 20px;
    border-top: 1px solid darkgrey;
    width: 50%;
    opacity: 0.5;
}

.border {
	border: 1px solid darkgray;
	border-radius: 6px;
}
</style>
</head>
<body>
<script type="text/javascript">

	$(document).ready(function() {
		structureOfJavaReadyFun();
	});

</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Structure of Java</h4>
</div>
<div class="col-xs-offset-3 col-xs-6 margin-top-20" id="totalDiv">
	<div class="col-xs-12 margin-top-10 border opacity00" id="box1">
		<div class="col-xs-offset-3 col-xs-6 margin-top-10">
			<pre class="leftPre opacity00" id="licSection">License Statement</pre>
		</div>
	</div>
	<div class="col-xs-12 opacity00" id="hr1">
		<hr>
	</div>
	<div class="col-xs-12 border opacity00" id="box2">
		<div class="col-xs-6 margin-top-10">
			<pre class="leftPre opacity00" id="packageStmnt">Package Statement</pre>
		</div>
		<div class="col-xs-6 margin-top-10">
			<pre class="rightPre opacity00" id="packageExplain"><g>package</g> <blue>com.codetantra</blue>;</pre>
		</div>
	</div>
	<div class="col-xs-12 opacity00" id="hr2">
		<hr>
	</div>
	<div class="col-xs-12 border opacity00" id="box3">
		<div class="col-xs-6 margin-top-10">
			<pre class="leftPre opacity00" id="importStmnt">Import Statement</pre>
		</div>
		<div class="col-xs-6 margin-top-10">
			<pre class="rightPre opacity00" id="importExplain"><span id="import1"><g>import</g> <blue>java.io.*</blue>;</span>
<span id="import2"><g>import</g> <blue>java.util.Date</blue>;</span></pre>
		</div>
	</div>
	<div class="col-xs-12 opacity00" id="hr3">
		<hr>
	</div>
	<div class="col-xs-12 margin-top-10 border opacity00" id="box4">
		<div class="col-xs-6 margin-top-10">
			<pre class="leftPre opacity00" id="docSection">Documentation</pre>
		</div>
		<div class="col-xs-6 margin-top-10">
			<pre class="rightPre opacity00" id="docExplain"><span id="singleComment"><lite-blue>//Program Name : Hello.java</lite-blue></span>
<span id="multipleComments"><lite-blue>/* It display 'Hello World'
on the console
Author : CodeTantra */</lite-blue></span>
			</pre>
		</div>
	</div>
	<div class="col-xs-12 opacity00" id="hr4">
		<hr>
	</div>
	
	<div class="col-xs-12 border opacity00" id="box5">
		<div class="col-xs-6 margin-top-10">
			<pre class="leftPre opacity00" id="interfaceStmnt">Class or Interface Definition</pre>
		</div>
		<div class="col-xs-6 margin-top-10">
			<pre class="rightPre1 opacity00" id="interfaceExplain"><span id="interface"><g>interface</g> <blue>stack</blue> {
	<red>void</red> push(<red>int</red> item);
	<red>int</red> pop();
}</span>
<span id="public">public</span> <span id="class">class</span> HelloWorld {
	public <span id="static">static</span> <span id="void">void</span> <span id="main">main</span>(String[] args) {
		Sytem.out.println("Hello World!");
	}	
}</pre>
		</div>
	</div>
</div>
<div class="margin-top-20 text-center col-xs-12">
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
</body>
</html>
