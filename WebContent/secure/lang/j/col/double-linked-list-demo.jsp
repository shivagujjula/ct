<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<link rel="stylesheet" href="/css/jquery-ui.css">
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>

<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<script src="../js-min/dlld.min.js"></script>
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link href="/css/introjs.css" rel="stylesheet">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<title>Test-Demo</title>
<style>

.box-border {
	border:1px solid grey;
	border-radius:8px;
	margin:6px;
}

.index-textbox-size {
	width:55px !important;
	height:30px !important;
	border:0px solid gold !important;
	display:inline !important;
	color:#CC66FF !important;
	border-radius:4px;
	text-align:center;
}

.duplicate-btn-sm-success {
	background-color: #5cb85c;
	border-color: #4cae4c;
	border-radius: 3px;
	display: inline-block;
	font-size: 12px;
	padding: 5px 10px;
}

.margin-padding-css {
	margin-top: 6px;
	padding: 0 10px;
}

h3 {
	margin-top: 10px;
}

.label {
	font-family: serif;
}

.zero-border,.methods-div-list {
	border:0px !important;
}

.methods-div {
	height: 245px;
}

.methods-div-list {
	color: blue;
	font-weight: 600;
	padding: 12px 0 !important;
}

.go-button {
	float:right;
}

#javacodeDivWidth {
	padding: 3px 8px 0 !important;
	height:420px;
	overflow-y:auto;
}

#animationDiv {
	height:420px;
}

.opacity40 {
	opacity:0.4 !important;
}

.element-box {
	border: 1px solid blue;
	height: 43px;
	padding: 10px;
	width: 53px;
	display:inline;
	margin:-2px;
}

[contenteditable=true]:empty:before {
	content: attr(placeholder);
	color:#cbcbcb !important;
}

.creampretab4 {
	margin: 25px 0px 0px 0px;
	font-size:10px;
	-moz-tab-size: 2;
	white-space:pre;
	line-height: 1.9;
	font-style: inherit;
	max-height: 325px;
	overflow-y:auto;
	background-color:lavender !important;
}

.box-css {
	border: 1px solid gray; 
	height: 40px;
	width: 45px; 
	border-radius: 6px; 
	border-width: 1px 4px; 
	display: inline-block;
	padding-top: 10px;
	text-align: center;
	vertical-align: middle;
}

.index-box {
	color: blue;
	text-align: center;
}

.arrow-css-gray {
	color: gray;
}

.arrow-css-green {
	color: green;
}

.arrow-css-red {
	color: red !important;
}

.arrow-css-blue {
	color: blue;
}

.reveal-left {
	position: relative;
	overflow: hidden;
	-moz-animation: reveal-left 1s ease;
	-moz-animation-fill-mode: backwards;
}

@-moz-keyframes reveal-left {
	0%   {width: 0%;}
	100% {width: 100%;}
}

.reveal-right {
	position: relative;
	overflow: hidden;
	float:right;
	-moz-animation: reveal-right 1s ease;
	-moz-animation-fill-mode: forwards;
}

@-moz-keyframes reveal-right {
	0%   {width: 0%;}
	100% {width: 100%;}
}
.reveal-right-remove {
	position: relative;
	overflow: hidden;
	-moz-animation: reveal-right-remove 1s ease;
	-moz-animation-fill-mode: backwards;
	color:red
}

@-moz-keyframes reveal-right-remove {
	0%   {width: 100%;}
	100% {width: 0%;}
}

.blink-text {
	animation: blink 1s step-end 4s;
}

@keyframes blink {
	0% {background-color: red}
	50% {background-color: gray}
}

.list-group-item {
	background-color: transparent;
}

div, span {
	position: relative;
}

pre > span {
	position: static;
}

.col-xs-2 {
    width: 20%;
}

.col-xs-3 {
    width: 34%;
}

.col-xs-5 {
    width: 44%;
}

.padding-col0 {
	padding: 0;
}

.ul-css {
	margin-top: 15px;
    margin-left: 0;
    padding: 0 12px;
}

.index-css {
	float: left;
	padding: 5px;
	text-align: center;
	width: 45px;
}

.z-index10000000 {
	z-index: 10000000;
}

.animation-array-box-css {
	margin-top: 10px;
	/* padding: 50px 0; */
	white-space: nowrap;
	border:0px !important;
	height: 160px;
	overflow: auto;
}

.introjs-tooltiptext {
	font-size: 14px;
}

.output-console-body {
	border-radius: 0 0 6px 6px;
	height: 120px;
}

.output-console {
	margin: 10px -2px;
}

.ct-pink-color {
	font-family: monospace;
	color: #ed138e;
	outline: none;
}

.ct-orange-color {
	font-family: monospace;
	color: #e34e14;
	outline: none;
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

.arrow-css-left {
	margin-left: -24px;
    margin-top: 6px;
    vertical-align: top;
}

.arrow-css-right {
	vertical-align: middle;
	margin-top: -14px;
}

.box-arrow {
	display: inline-block;
	color: gray;
}

.linkedList-circle {
	border: 2px solid green;
	border-radius: 50%;
	padding: 0px 5px;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count:1;
	animation-direction: alternate;
}

@keyframes blink {
	50% {
		background: #FF0066;
	}
}

.box-div {
	margin-top: 40px;
}

.background-green {
	background-color: green;
}

.invisible-div-css {
	height: 30px;
}

.inner-invisible-span {
	border: 1px solid blue;
    border-radius: 8px;
    padding: 4px 6px;
    top: 6px;
}

.arrow-div {
	width: 24px;
	display: inline-block;
}

</style>
</head>
<body>
	<div class="col-xs-12">
		<div class="margin-padding-css text-center" >
				<div class="col-sm-1 emptyDiv"></div>
   					<div class="col-sm-offset-3 col-sm-3">
   						<h3><span class="ct-demo-heading label label-default">LinkedList In Action</span></h3>
					</div>
			</div>
	</div>
		<div class="margin-padding-css col-xs-12" id="executionDiv">
			<div class='col-xs-2 padding-col0'>
				<div class="box-border methods-div" id="methodsDiv">
					<h3 class="text-center"><span class="label label-default">Methods</span></h3>
							<ul class="list-group ul-css">
					  			<li id="totalAddId" class="list-group-item  methods-div-list">add("<span contenteditable="true" id="addMethod" class="inputbox ct-pink-color" methodId="0" placeholder="element" maxlength="3"></span>");
					  				<button type="button" class="btn btn-success  btn-sm go-button disabled opacity40 " id="add_e" methodId="0">Go</button>
					  			</li>
					  			<li id="totalAddIndexId" class="list-group-item enable-btn  methods-div-list">add(<span contenteditable="true" id="addIndex" class="inputbox input ct-orange-color" methodId="1" placeholder="index" maxlength="2"></span>,"
					  				<span contenteditable="true" id="addElement"  methodId="1" placeholder="element" class="inputbox ct-pink-color" maxlength="3"></span>");
					  					<button type="button" class="btn btn-success  btn-sm go-button disabled opacity40" id="addIndexElementBtn" methodId="1">Go</button>
					  			</li>
					  			<li id="totalRemoveIndexId" class="list-group-item enable-btn methods-div-list">remove(<span contenteditable="true" id="removeByIndexMethod" class="inputbox input ct-orange-color" placeholder="index" methodId="2" maxlength="2"></span>);
					  				<button type="button" class="btn btn-success  btn-sm go-button disabled opacity40" id="removeIndexBtn" methodId="2">Go</button>
					  			</li>
					  			<li id="totalRemoveElementId" class="list-group-item methods-div-list">remove("<span contenteditable="true" id="removeByElementMethod" class="inputbox input ct-pink-color" placeholder="element" methodId="3" maxlength="3"></span>");
					  				<button type="button" class="btn btn-success  btn-sm go-button disabled opacity40" id="removeElementBtn" methodId="3">Go</button>
					  			</li>
							</ul>
				</div>
			</div>
				<div class="col-xs-3 box-border" id="javacodeDivWidth">
					<h3 class="text-center"><span class="label label-default ">Java Code</span></h3>
						<div class="java-code">
					<pre class="creampretab4" id="javaCode"><span>public class LinkedListDemo {</span>
	<span>public static void main(String[] args) {</span>
		<span id="objectCode">LinkedList aList = new LinkedList();</span><span id="randomCode"></span>
	}
}
</pre>
				</div>
			</div>
	<div class="col-xs-5 box-border" id="animationDiv">
		<div class="row">
			<h3 class="text-center"><span class="label label-default">Live Display</span></h3>
		</div>
			<div id="animationArrayBox">
				<div id="invisibleDiv" class="invisible-div-css"></div>
					<div id="animationArray" class="animation-array-box-css box-border">
						<div id="boxDiv" class="box-div"></div>
					</div>
			</div>
			<div class="output-console center" id='outputDiv'>
				<div class="output-console-title-bar">
					<span>Output</span>
				</div>
	        	<div class="output-console-body" id="outputConsoleBody"><span id='outputRandom'></span></div>
			</div>
		</div>
	</div>
	<div id='hiddenInsertElementLine'></div>
	<div id='hiddenSopCodeLine'></div>
		
<script>

var intro = introJs();
function startIntro() {
	intro.setOptions({
	//	exitOnEsc: false,
		exitOnOverlayClick: false,
		showStepNumbers : false,
		keyboardNavigation : false, 
		steps : [
				{
					element : '#objectCode',
					intro : "",
					position : "bottom"
				},
				{
					element : '#totalAddId',
					intro : "",
					position : "bottom"
				},
			]
	});
	intro.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}
	
$(document).ready(function() {
	doubleLinkedListDemoReady();
	});	//document ready function end..	 
	 
		</script>
	</body>
</html>
