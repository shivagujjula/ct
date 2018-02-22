<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="stylesheet" href="/css/bootstrap.min.css">
  		<script src="/js/jquery-latest.js"></script>
   		<script src="/js/jquery-ui-latest.js"></script>
		<link rel="stylesheet" href="/css/jquery-ui.css">
		<link rel="stylesheet" href="/css/font-awesome-animation.min.css">
		<link rel="stylesheet" href="/css/font-awesome.min.css">
  		<script src="/js/bootstrap.min.js"></script>
  		  
  		       
   		<script src="/js/intro.js"></script>
   		<link rel="stylesheet" href="/css/introjs.css">
   		<link rel="stylesheet" href="/css/introjs-ct.css">
   		<script src="/js/gs/TweenMax.min.js"></script>
   		<script src="/js/gs/TweenLite.min.js"></script>
   		<script src="/js/typewriting.min.js"></script>
   		<script src="/secure/lang/j/js-min/dia.min.js"></script>
<title>Insert title here</title>

<style type="text/css">

.introjs-tooltiptext br {
	margin: 15px;
}

.box-border {
	border-radius: 8px;
}

.margin-left {
	margin-left: 5px;
}

.margin-top {
	margin-top: 3%;
}

.methods-div-list {
    border:0px !important;
    font-family: monospace;
}

.methods-color {
	color: blue;
    font-weight: bold;
}

#animationDiv {
	height: 220px;
	border: 2px solid gray;
	width: 108%;
}

.headings {
    text-align: center;
}

.creampretab4 {
	margin: 3px;
	font-size: 11px !important;
    -moz-tab-size: 2;
    background-color: lavender !important;
   	height: 230px;
	overflow: auto;
	overflow-x: hidden;
	position: static;
	letter-spacing: -1px;
}

.go-button {
	float:right;
}

.queue-div-1 {
	height: 21px;
    border: 2px solid;
    border-style: none none solid;
    border-radius: 10px;
    border-color: gray;
}

.queue-div-2 {
	margin-top: -58px;
	height: 50px !important;
    border: 2px solid;
    border-style: solid none none;
    border-radius: 10px;
    border-color: gray;
}

.jar-div {
	margin-top: 38px;
}

.padding-col0 {
	padding: 0;
}

.titles {
	background-color: highlight;
    border-radius: 19px;
    padding: 3px 8px;
    position: relative;
    z-index: 1000000;
}

.method-code {
    border: 2px solid grey;
    padding: 0;
}

[contenteditable=true]:empty:before {
  content: attr(placeholder);
  color: #cbcbcb !important;
}

.entered-element {
	color: black;
	font-weight: normal;
	outline: none;
}

.elements {
    border: 2px solid gray;
    border-radius: 6px;
    color: black;
    padding: 3px 6px;
}

.visibility-hidden {
	opacity: 0;
}

.elements-div {
    height: 100px;
    padding: 10px 10px 0;
	white-space: nowrap;
}

div, span {
    position: relative;
}

.output-console-body {
	height: 150px !important;
}

.blinking-border-background-red {
	animation-name: blink-border-background-red ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-border-background-red { 
	50% {
		border-color: red;
		background: rgba(255, 0, 0, 0.38);
	}
}

.blinking-border-background-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-border-background-orange { 
	50% {
		border-color: orange;
		background: #FFE4B2;
	}
}

.blinking-box-null-border1 {
	animation-name: blink-border-background-null-border1;
	animation-duration: 1.2s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-border-background-null-border1 { 
	50% {
		border-color: red;
		box-shadow: 0 4px 0 0 pink;
	}
}

.blinking-box-null-border2 {
	animation-name: blink-border-background-null-border2;
	animation-duration: 1.2s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-border-background-null-border2 { 
	50% {
		border-color: red;
		box-shadow: 0 -4px 0 0 pink;
	}
}

#queueTitle {
    color: black;
    font-weight: bold;
    text-align: center;
}

.introjs-tooltip {
    min-width: 350px !important;
    padding: 5px !important;
}

.list-group-item {
	margin-bottom: 0px;
}

.list-group {
	margin: 20px 5px;
}

.java-code {
	margin-top: 35px;
	margin-bottom: 20px;
}

.output-console {
	width: 50%;
}

.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

pre > span {
	position: static;
}

#head {
    color: grey;
    float: left;
    font-weight: bold;
}

#end {
    color: grey;
    float: right;
    font-weight: bold;
}

.zIndex {
	z-index: 9999999;
}

.col-xs-4 {
    width: 35%;
}

.extra-box {
    color: navy;
}

.edit-element {
    outline: none;
}

#entryBox, #exitBox {
    background-color: gainsboro;
    border: 2px solid olivedrab;
    border-radius: 6px;
    color: navy;
    padding: 3px 6px;
    margin-left: 10px;
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

.go-button-duplicate {
	background-color: #5cb85c;
	border-color: #4cae4c;
	border-radius: 3px;
	display: inline-block;
	font-size: 12px;
	padding: 5px 10px;
}

.ct-pink-color {
	font-family: monospace;
	color: #ed138e;
}

</style>
</head>
<body>

<script type="text/javascript">

	
	$(document).ready(function() {
		dequeInActionReady();
	});
	
	
	
</script>
	<h3 class="headings" ><span class="label label-default titles">Deque in Action</span></h3>
	<div class="margin-top" id="executionDiv">
			<div class="col-xs-4 box-border methods-div method-code margin-left">
				
				<ul id="methodsGroup" class="list-group">
				  <li id = "method1" class="list-group-item  methods-div-list">aDeque.<span class="methods-color">offerFirst("<span contenteditable="false" id="offerFirstMethod" class="entered-element ct-pink-color" placeholder="element" maxlength="8" spellcheck="false"></span>");</span><button type="button" class="btn btn-success  btn-sm go-button disabled" id="offerFirstBtn">Go</button></li>
				  <li id = "method2" class="list-group-item  methods-div-list">aDeque.<span class="methods-color">offerLast("<span contenteditable="false" id="offerLastMethod" class="entered-element ct-pink-color" placeholder="element" maxlength="8" spellcheck="false"></span>");</span><button type="button" class="btn btn-success  btn-sm go-button disabled" id="offerLastBtn">Go</button></li>
				  <li id = "method3" class="method2 list-group-item  methods-div-list">aDeque.<span class="methods-color">poll();</span><button type="button" class="btn btn-success  btn-sm go-button disabled" id="pollBtn">Go</button></li>
				  <li id = "method4" class="method3 list-group-item  methods-div-list">aDeque.<span class="methods-color">peek();</span><button type="button" class="btn btn-success  btn-sm go-button disabled" id="peekBtn">Go</button></li>
				</ul>
			
				<div class="java-code" id="codeDiv">
					<pre id="javaCodePre" class="creampretab4">public class ArrayDequeDemo {
	public static void main(String[] args) {
		  <span id="objectCode">ArrayDeque aDeque = new ArrayDeque();</span>
		  <span id="randomCode"><span id="offerFirstCall1" class="visibility-hidden">boolean offerStatus = aDeque.offerFirst("<span id="offerElement0" class="edit-element ct-pink-color" contenteditable="true" maxlength="8" spellcheck="false">Apple</span>");</span>
		  <span id="offerStatusId1" class="visibility-hidden">System.out.println("offerStatus for <span id="sopElement0">Apple</span>: " + offerStatus);</span>
		  <span id="offerLastCall" class="visibility-hidden">offerStatus = aDeque.offerLast("<span id="offerElement1" class="edit-element ct-pink-color" contenteditable="true" maxlength="8" spellcheck="false">Banana</span>");</span>
		  <span id="offerStatusId2" class="visibility-hidden">System.out.println("offerStatus for <span id="sopElement1">Banana</span>: " + offerStatus);</span></span>
	}
}						
					</pre>
				</div>
				
			</div>
			
		<div class="col-xs-7">	
			<div class="box-border" id="animationDiv">
				<div id="exitDiv" class='col-xs-1 padding-col0 text-center'></div>
				<div id="jar" class = "jar-div col-xs-offset-1 col-xs-7">
					<div id="queueTitle">
						<div><div id="head">Head</div><div id="end">Tail</div>Deque</div>
             		</div>
             			
					<div id="queueDiv1" class = "queue-div-1"></div>
					<div class = "elements-div">
					</div>
					<div id="queueDiv2" class = "queue-div-2"> </div>
				</div>
				<div id="entryDiv" class='col-xs-offset-1 col-xs-2 padding-col0 text-center'></div>
			</div>
				
				<div class="output-console center" id="consoleId">
						<div id="outputDiv" class="output-console-title-bar">
								<span class="title">Output</span>
						</div>
								
<div class="output-console-body" style='color:white'>
<span id="runEditor"></span>
</div>
				</div>

		</div>
	</div>
	<div id="innerCodeDiv"></div>
	<div id="sopCodeDiv"></div>
	
</body>
</html>