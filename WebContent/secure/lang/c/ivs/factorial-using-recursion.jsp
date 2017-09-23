<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/secure/lang/c/js-min/fur.min.js"></script>

<title>factorial using recursion</title>

<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}


.margin-top-40 {
	margin-top: 40px;
}
      
.padding0 {
	padding: 0;
}
      
.box-border {
	border: 1px solid gray;
	border-radius: 8px;
}
      
#informationDiv {
	letter-spacing: 0.5px;
	min-height: 155px;
	padding: 15px 0;
	z-index: 9999999;
}
      
#animationDiv {
	height: 480px;
}
      
.creampretab4 {
	-moz-tab-size: 2;
	tab-size: 2;
	background-color: lavender !important;
	font-style: inherit;
	margin-bottom: 0;
	padding: 5px;
	overflow-y: auto;
}
      
#outputDiv {
	margin-top: 20px;
	padding: 0;
	z-index: 9999999;
}
      
.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}
      
.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	height: 100px;
	padding: 10px;
}
      
.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: red;
}
      
#animationDiv .panel-body, #invisibleDiv .panel-body {
	font-family: monospace;
	font-size: 10px;
	padding: 5px;
}
      
#mainStack {
	border: 2px solid;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	border-top: none;
	height: 350px;
	overflow: auto;
}
      
#invisibleDiv {
	height: 120px;
	border: 2px solid rgba(255, 255, 255, 0);
}
      
.panel-heading	{
	padding: 3px	0;
}

.panel	{
	margin-bottom: 5px;
	position:	relative;
}

.ui-effects-transfer	{
	border:	2px	solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}

#numberVal	{
	outline: none;
}

.errMsg	{
	font-family: monospace;
	font-weight: bold;
	color: red;
}

.flip-css	{
	position: relative;
	display: inline-block;
}

.svg-css	{
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line	{
	position: relative;
	stroke:	gray;
	stroke-width: 2;	
}

#arrow1, #arrow2, #arrow3	{
	marker-end:	url('#myMarker');
}

.arrow-display-none	{
	display: none;
}

.user-btn {
	background-color: green;
}

.bg-blinking {
	animation: bg-blinking 1s infinite;
}

@keyframes bg-blinking {
	0% {
		background-color: white;
	}
	
	100% {
		background-color: lightblue;
	}
}
	
#dummySpan {
	z-index: 9999999;
	font-family: monospace;
	font-size: 10px;
}

.ct-code-b-green {
	color:	green;
	font-family: monospace;
	font-weight: bold;
}

.introjs-button	{
	margin:	0 !important;
}

.introjs-fixParent {
	position: relative	!important;
}

#stackExpDiv {
	border:	2px	solid gray;
	border-radius:	8px;
	min-height:	400px;
	margin-top:	10px;
	padding-top: 5px;
	overflow: auto;
}

#aboutStack {
	position: relative;
	z-index: 10000000;
}
</style>

<script type="text/javascript">
	
	$(document).ready(function() {
		factorialUsingRecursionReady();
	});

</script>

</head>
<body>
	<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading'>Factorial using Recursion</h4>
	</div>

	<div class='col-xs-offset-2 col-xs-8 box-border margin-top-20 bg-info'
		id='informationDiv'></div>
	<div class='col-xs-12 margin-top-40'>
		<div class='col-xs-6 '>
			<pre class='creampretab4 box-border opacity00' id='cCode'>#include &lt;stdio.h&gt;
          
	<span id='mainBlk'>void <span id='main'>main() {</span>
		int fact_value, number = 5;
		fact_value = factorial(number);
		printf("%d! = %d", number, fact_value);
	}</span>
       
	<span id='factorialFun'>int factorial(<span id='funArgument'>int number</span>) {
		if (number <= 1) {
			return 1;
		} else {
			return (number * factorial(number - 1));
		}
	}</span>
         </pre>
			<div class='text-center' style="margin-top: 20px;"><span id="aboutStack" class='btn btn-warning opacity00'>About Stack</span></div>
			<div id="stackExpDiv" class='opacity00'></div>
		</div>
		<div class='col-xs-5 col-xs-offset-1'>
			<div class='box-border opacity00' id='animationDiv'>
				<div class='col-xs-12 col-sm-offset-1 col-sm-10'>
					<div id='invisibleDiv' class='col-xs-12 padding0'></div>
					<div id='mainStack' class='col-xs-12 padding0'>
						<div class='col-xs-offset-2 col-xs-10 padding0'>
							<div class='col-xs-12 padding0'>
								<div id='stackBody' class='col-xs-10 padding0'></div>
								<svg class="svg-css" id="mySvg">
               <marker style="fill: gray;" orient="auto" markerHeight="5"
                 markerWidth="5" refY="2.5" refX="4" id="grayMarker">
                              <path class="arrow" d="M0,0 L5,2.5 L0,5 Z" />
               </marker>
               
               <marker style="fill: blue;" orient="auto" markerHeight="5"
                 markerWidth="5" refY="2.5" refX="4" id="blueMarker">
                              <path class="arrow" d="M0,0 L5,2.5 L0,5 Z" />
               </marker>
               
               <line class="svg-line" id="arrow2" y2="0%" x2="0%" y1="0%" x1="0%" style="display: none; marker-end: url('#grayMarker')"/>
              </svg>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="outputDiv" class='opacity00'>
				<div class="output-console-title-bar">
					<span class="title">Output</span>
				</div>
				<div class="output-console-body">
					<span id="output"></span>
				</div>
			</div>

		</div>
	</div>
	<div class="text-center margin-top-20 col-xs-12">
		<a class="btn btn-warning opacity00" id="restart">Restart</a>
	</div>
</body>
</html>
