<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="../js-min/sia.min.js"></script>

<title>Set.jsp</title>

<style>

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip {
	min-width: 400px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.box-border {
	border: 2px solid grey;
	border-radius: 8px;
}

.box-margin {
	margin: 10px;
}

.opacity40 {
	opacity:0.4 !important;
}

.box-height {
	height: 475px;
}

.boxes-div {
	margin-top: 30px;
}

.col-xs-4 {
	width: 35%;
}

.go-button {
	float: right;
}

.list-group-item {
	border: 0;
	margin-bottom: 0;
}

.list-group {
	margin-left: 0px;
}


[contenteditable="true"]:empty::before {
	color: #cbcbcb !important;
	content: attr(placeholder);
}

[contenteditable="true"] {
	font-weight: normal;
	outline: medium none;
}

.methods {
	color: blue;
	font-family: monospace;
	font-weight: bold;
}

.creampretab2 {
	-moz-tab-size: 2;
	margin: 25px 0px;
	font-size: 10px;
	background-color: lavender;
	max-height: 390px;
	overflow: auto;
}

.animation-jar {
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	border-style: none solid solid;
	border-width: 0 1px 1px;
	height: 250px;
	margin-top: 105px;
}

.value-append-div {
	margin-top: 30px;
	height: 30px;
}

.value-append-box {
	border: 2px solid grey;
	border-radius: 6px;
	padding: 3px 6px;
}

div, span {
	position: relative;
}

.padding-col0 {
	padding: 0;
}

.output-console {
	margin: 30px 0px 0px;
}

.output-console-body {
	min-height: 100px;
	max-height: 265px;
}

.ct-code-b-green {
	font-family: monospace;
	font-weight: bold;
	color: rgb(124, 255, 2);
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.blinking-border-background-red {
	animation-name: blink-border-background-red;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-border-background-red { 
	50% {
		border-color: red;
		background: rgba(255, 0, 0, 0.38);
	}
}

.blinking-border-jar-blue {
	animation-name: blink-jar-blue;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	border-color: lightblue;
	border-width: 2px;
}

@keyframes blink-jar-blue { 
	50% {
		border-color: #66afe9;
		box-shadow: 0 10px 10px rgba(102, 175, 233, .6);
	}
}

.blinking-border-jar-red {
	animation-name: blink-jar-red;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	border-color: rgba(255, 0, 0, 0.55);
	border-width: 2px;
}

@keyframes blink-jar-red { 
	50% {
		box-shadow: 0 10px 10px rgb(255, 110, 110);
	}
}

pre > span {
	position: static;
}

.z-index10000000 {
	z-index: 10000000;
}

.ui-effects-transfer {
	border: 2px solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}

.animation-button {
	background-color: green;
}

.duplicate-btn-sm-success {
	background-color: #5cb85c;
	border-color: #4cae4c;
	border-radius: 3px;
	display: inline-block;
	font-size: 12px;
	padding: 5px 10px;
}

.ct-code-pink {
	font-family: monospace;
	color: #ed138e;
}

</style>

</head>

<body>

<div class='ct-box-main'>
	<div class='text-center'>
		<h1 class='label ct-demo-heading'>Set Demo</h1>
	</div>
	
	<div class='boxes-div'>
		
		<div class='col-xs-3 padding-col0 box-margin'>
			<div class='box-border'>
				<h3 class="text-center"><span class="label label-default">Methods</span></h3>
				<div>
					<ul class="list-group" id='methodsBox'>
						<li class="list-group-item" id='addMethod'>
							namesSet.<span class='methods'>add("<span contenteditable="true" class='input-box ct-code-pink'
								id="addByElementMethodValue" spellcheck="false" methodId="0" placeholder="element" maxlength="8"></span>")</span>;
							<button type="button" class="btn btn-success  btn-sm go-button disabled opacity40 " id="addElementBtn" methodId="0">
								Go
							</button>
						</li>
						<li class="list-group-item" id='removeMethod'>
							namesSet.<span class='methods'>remove("<span contenteditable="true" class='input-box ct-code-pink'
								id="removeByElementMethodValue" spellcheck="false" methodId="1" placeholder="element" maxlength="8"></span>")</span>;
							<button type="button" class="btn btn-success  btn-sm go-button disabled opacity40" id="removeElementBtn" methodId="1">
								Go
							</button>
						</li>
					</ul>
				</div>
			</div>
			
			<div class="output-console center" id='outputBox'>
				<div class="output-console-title-bar">
					<span>Output</span>
				</div>
	        	<div class="output-console-body" id="outputConsoleBody"><span id='outputRandom'></span>
	        	</div>
			</div>
			
		</div>
		
		<div class='col-xs-4 box-border box-height box-margin'>
				<h3 class="text-center"><span class="label label-default">Java Code</span></h3>
<pre class='creampretab2' id='javaCode'>public class SetDemo {
	public static void main(String[] args) {
		<span id='setObject'>Set namesSet = new HashSet();</span>
		<span id='randomCode'><span id='line0' class='visibility-hidden'>boolean status = namesSet.add("<span id='val0' class='ct-code-pink'>Ganga</span>");</span>
		<span id='sop0' class='visibility-hidden'>System.out.println("add status for <span id='sopVal0' class='ct-code-pink'>Ganga</span>: " + status);</span>
		<span id='line1' class='visibility-hidden'>status = namesSet.add("<span id='val1' class='ct-code-pink'>Yamuna</span>");</span>
		<span id='sop1' class='visibility-hidden'>System.out.println("add status for <span id='sopVal1' class='ct-code-pink'>Yamuna</span>: " + status);</span>
		<span id='line2' class='visibility-hidden'>status = namesSet.add("<span id='val2' class='ct-code-pink'>Godavari</span>");</span>
		<span id='sop2' class='visibility-hidden'>System.out.println("add status for <span id='sopVal2' class='ct-code-pink'>Godavari</span>: " + status);</span></span>
	}
}						
</pre>
		</div>
		
		<div class="col-xs-4 box-border box-height box-margin" id='liveDisplayBox'>
			<h3 class="text-center"><span class="label label-default">Live Display</span></h3>
			<div class='value-append-div text-center'></div>
			<div class='animation-jar' id='animationJar'></div>
		</div>
	</div>
	<div id='hiddenLineDiv'></div>
	<div id='hiddenSopDiv'></div>
</div>

<script>



$(document).ready(function() {
	setInActionReady();
});

</script>

</body>
</html>