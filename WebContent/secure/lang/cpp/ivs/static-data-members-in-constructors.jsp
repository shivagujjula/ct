<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>static-data-members-in-constructors</title>
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

<script src="../js-min/sdmic.min.js"></script>

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
	height: 60px;
}

pre {
	background-color: #fcf8e3;
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
	height: 138px;
	padding: 10px;
	white-space: inherit;
}

.padding5 {
	padding: 5px;
}

.margin-bottom0 {
	margin-bottom: 0px;
}

.padding0 {
	padding: 0px;
}

[contenteditable=true] {
	outline: none;
	font-family: monospace;
}

.display-inline-block {
	display: inline-block;
}

.relative {
	position: relative;
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

.panel-body {
	padding: 0px;
}

#circle1 {
	border: 1px solid gray;
	border-radius: 50%;
}

.line {
	marker-end: url(#arrow);
	stroke: gray;
	stroke-width: 2;
}
</style>
</head>
<body>
<script type="text/javascript">

$(document).ready(function() {
	staticDataMembersInConstructorsReadyFun();
});

</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Static Data Members in Constructors</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<div id="typingDiv1">
				<ul>
					<li id="li1" class="opacity00">A variable which is declared with the static keyword is called as <a href="https://en.wikipedia.org/wiki/Static_variable" target="_blank">static data member</a>.</li>
				</ul>
				<div class="col-xs-12">
				<span id="nextBtn" class='user-btn introjs-button opacity00' onclick='introjs.nextStep()'>Next &#8594;</span>
			</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 text-center margin-top-20">
		<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
	</div>
	<div class="col-xs-12 margin-top-20">
		<div class="col-xs-4">
			<div id="code" class="opacity00">
				<pre class="creampretab"><orange>#include</orange> <span style="color: #408080;">&lt;iostream&gt;</span>
<g>using namespace</g> std;
<span id="class"><g>class</g> <blue>Sample</blue> {
	<span id="static"><g>static</g> <red>int</red> count;</span>
	<g>public</g>:
	<span id="defaultConst" class="hide">Sample() {
		<span id="count1">count++;</span>
		<span id="cout1">cout &lt;&lt; <red>"Object created : "</red> << count << <red>"\n"</red>;</span> 
	}</span>
	<span id="destructor" class="hide">~Sample() {
		<span id="cout2">cout &lt;&lt; <red>"Object deleted : "</red> << count << <red>"\n"</red>;</span> 
		<span id="count2" class="">count--;</span>
	}</span>
};</span>
<span id="explitCall" class="hide">int Sample :: count = 0;</span>
<red>int</red> main() {
	<span id="object1" class="hide">Sample s1;</span>
	<span id="object2" class="hide">Sample s2;</span>
	<span id="object3" class="hide">Sample s3;</span>
<span id="end">}</span>
</pre>
			</div>
		</div>
		<div class="col-xs-4">
			<div id="memoryDiv" class="col-xs-12 opacity00">
				<div class="col-xs-offset-4 col-xs-4">
					<div id="countPanel" class="opacity00">
						<div class="panel panel-primary margin-bottom0">
			    			<div class="panel-heading text-center padding0"><b id="count">count</b></div>
			    			<div class="panel-body text-center" style="padding: 5px;">
			    				<div class="panel-body text-center"><span id="countPanelVal" class="">0</span></div>
			    			</div>
			  			</div>
			 		</div>
				</div>
			<div class="col-xs-12" style="height: 75px;">
				<svg class="svg-css" height="75" width="100%">
					<marker style="fill: gray;" orient="auto" markerHeight="5" markerWidth="5" refY="2.5" refX="4" id="arrow">
		            	<path class="arrow" d="M0,0 L5,2.5 L0,5 Z"/>
		           	</marker>
					<line id="arrow1" class="line" x1="20%" y1="100%" x2="42%" y2="4%"/>
					<line id="arrow2" class="line" x1="50%" y1="100%" x2="50%" y2="4%"/>
					<line id="arrow3" class="line" x1="83%" y1="100%" x2="59%" y2="4%"/>
				</svg>
			</div>
			<div class="col-xs-12">
				<div class="col-xs-4">
					<div id="s1Panel" class="opacity00">
						<div class="panel panel-primary margin-bottom0">
			    			<div class="panel-heading text-center padding0"><b id="count">s1</b></div>
			    			<div class="panel-body text-center" style="padding: 15px;">
			    				<!-- <div class="panel-body text-center"><span id="countPanelVal" class="">0</span></div> -->
			    			</div>
			  			</div>
			 		</div>
				</div>
				<div class="col-xs-4">
					<div id="s2Panel" class="opacity00">
						<div class="panel panel-primary margin-bottom0">
			    			<div class="panel-heading text-center padding0"><b id="count">s2</b></div>
			    			<div class="panel-body text-center" style="padding: 15px;">
			    				<!-- <div class="panel-body text-center"><span id="countPanelVal" class="">0</span></div> -->
			    			</div>
			  			</div>
			 		</div>
				</div>
				<div class="col-xs-4">
					<div id="s3Panel" class="opacity00">
						<div class="panel panel-primary margin-bottom0">
			    			<div class="panel-heading text-center padding0"><b id="count">s3</b></div>
			    			<div class="panel-body text-center" style="padding: 15px;">
			    				<!-- <div class="panel-body text-center"><span id="countPanelVal" class="">0</span></div> -->
			    			</div>
			  			</div>
			 		</div>
				</div>
			</div>
		</div>
		</div>
		<div id="outputDiv" class="col-xs-4 opacity00">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body" id="body"></div>
		</div>
	</div>
	<!-- <div class="col-xs-12 text-center margin-top-20">
		<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
	</div> -->
</body>
</html>