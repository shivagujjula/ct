<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>constructor</title>
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

<script src="../js-min/const.min.js"></script>

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
	font-size: 11px;
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
	height: 130px;
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
</style>
</head>
<body>
<script type="text/javascript">

$(document).ready(function() {
	constructorReadyFun();
});


</script>
<div class='text-center margin-top-20'>
	<h4 class='label ct-demo-heading' id='demoTitle'>Constructors</h4>
</div>
<div class="col-xs-offset-1 col-xs-10 margin-top-20">
		<div id="topDiv">
			<div id="typingDiv1">
				<ul>
					<li id="li1" class="opacity00">A class <b><a href="https://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)" target="_blank">constructor</a></b> is a special member function of a class that is executed whenever we create new objects of that class.</li>
					<li id="li2" class="opacity00">A constructor will have exact same name as the class and it does not have any return type, not even void.</li>
					<li id="li3" class="opacity00">Constructor are of  Default , Parameterized and Copy Constructors. 
						&emsp; <span class='user-btn introjs-button' onclick='introjs.nextStep()'>Next &#8594;</span><br>
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
<g>class</g> <blue>Sample</blue> {
	<red>int</red> a, b;
	<span id="defaultConst" class="hide"><g>public</g>:
	Sample() { 
		a = 5;			// <b>Default Constructor</b>
		b = 10;
	}</span>
	<span id="parameterConst" class="hide">Sample(int x, int y) {
		<span id="xAndY">a = x;			// <b>Parameterized Constructor</b>
		b = y;</span>
	}</span>
	<span id="copyConst" class="hide">Sample(Sample &s2) {
		<span id="s1AB">a = s2.a;			// <b>Copy Constructor</b>
		b = s2.b;</span>
	}</span>
	<span id="displayMethod" class="hide"><red>void</red> display() {
		cout &lt;&lt; <red>"Given values : "</red> << a << " " << b << "\n"; 
	}</span>
};	
<red>void</red> main() {
	<span id="callDefaultConst" class="hide">Sample s1;</span>
	<span id="callMethod1" class="hide">s1.display();</span>
	<span id="callParameterConst" class="hide">Sample s2(<spa id="s1Val1">10</spa>, <span id="s1Val2">20</span>);</span>
	<span id="callMethod2" class="hide">s2.display();</span>
	<span id="callCopyConst" class="hide">Sample s3 = s2;</span>
	<span id="callMethod3" class="hide">s3.display();</span>
}
</pre>
		</div>
	</div>
	<div class="col-xs-3">
	<div id="memoryDiv" class="opacity00">
	<div class="text-center"><b>memory</b></div>
		<div id="s1Panel" class="opacity00">
			<div class="panel panel-primary margin-bottom0">
    			<div class="panel-heading text-center padding0"><b id="s">s1</b></div>
    			<div class="panel-body text-center" style="padding: 5px;">
    				<div class="col-xs-6 margin-top-10">
						<div id="a1Panel" class="opacity00">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>a</b></div>
			    				<div class="panel-body text-center"><span id="a1PanelVal" class="">5</span></div>
			  				</div>
			  				<!-- <div class="text-center">1024</div> -->
		  				</div>
					</div>
					<div class="col-xs-6 margin-top-10">
						<div id="b1Panel" class="opacity00">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>b</b></div>
			    				<div class="panel-body text-center"><span id="b2PanelVal" class="">10</span></div>
			  				</div>
			  				<!-- <div class="text-center">1026</div> -->
		  				</div>
					</div>
    			</div>
  			</div>
 		</div>
 		
 		<div id="s2Panel" class="opacity00 margin-top-20">
			<div class="panel panel-primary margin-bottom0">
    			<div class="panel-heading text-center padding0"><b id="s2">s2</b></div>
    			<div class="panel-body text-center" style="padding: 5px;">
    				<div class="col-xs-6 margin-top-10">
						<div id="a2Panel" class="opacity00">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>a</b></div>
			    				<div class="panel-body text-center"><span id="a2PanelVal" class="">10</span></div>
			  				</div>
		  				</div>
					</div>
					<div class="col-xs-6 margin-top-10">
						<div id="b2Panel" class="opacity00">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>b</b></div>
			    				<div class="panel-body text-center"><span id="b2PanelVal">20</span></div>
			  				</div>
		  				</div>
					</div>
    			</div>
  			</div>
 		</div>
 		
 		<div id="s3Panel" class="opacity00 margin-top-20">
			<div class="panel panel-primary margin-bottom0">
    			<div class="panel-heading text-center padding0"><b id="s3">s3</b></div>
    			<div class="panel-body text-center" style="padding: 5px;">
    				<div class="col-xs-6 margin-top-10">
						<div id="a3Panel" class="">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>a</b></div>
			    				<div class="panel-body text-center"><span id="a3PanelVal" class="">10</span></div>
			  				</div>
		  				</div>
					</div>
					<div class="col-xs-6 margin-top-10">
						<div id="b3Panel" class="">
							<div class="panel panel-primary margin-bottom0">
			    				<div class="panel-heading text-center padding0"><b>b</b></div>
			    				<div class="panel-body text-center"><span id="b3PanelVal">20</span></div>
			  				</div>
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
				<div class="opacity00" id='op1'>Given values: 5 10</div>
				<div class="opacity00" id='op2'>Given values: 10 20</div>
				<div class="opacity00" id='op3'>Given values: 10 20</div>
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
