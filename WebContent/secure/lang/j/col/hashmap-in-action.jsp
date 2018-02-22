<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>HashMap in Action</title>
<link href="/css/bootstrap.css" rel="stylesheet">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="../js-min/hmia.min.js"></script>

<style type="text/css">

.introjs-tooltiptext {
	font-size: 14px;
}
.box-border {
	border: 2px solid gray;
	border-radius: 6px;
	height: 410px;
}

.java-methods {
	border: 2px solid gray;
	border-radius: 6px;
}

#outputDiv {
	margin-top: 12px;
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
	height: 180px;
	padding: 10px;
}

#methodsBody {
	background-color: white;
}

#methodsDiv {
	margin: 0px;
}

.list-group-item > span {
	font-family: monospace;
}

[contenteditable=true]:empty:before, [contenteditable=false]:empty:before {
	content: attr(placeholder);
	color: #B8B8A0;
	font-family: monospace;
}

.border {
	border: 2px solid rgba(255, 255, 255, 0);
	border-radius: 8px;
	display: inline;
	padding: 4px 6px;
}

.arrow {
	vertical-align: middle;
}

.arrowDiv {
	display: inline-block;
}

.set-key, .set-value {
	font-family: monospace;
}

#animationJar {
	border: 1px solid gray;
	border-top: none;
	height: 245px;
	margin-top: 40px;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
}

.created-element-area {
	margin-top: 40px;
	height: 30px;
}

.methods-div-list {
	margin-bottom: 10px !important;
	display: relative;
	border: 0px !important;
}

.go-btn {
	float: right;
}

.creampretab4 {
	-moz-tab-size: 2;
	background-color: lavender !important;
	font-size: 10px;
	font-style: inherit;
	line-height: 2;
	padding: 5px;
	margin: 10px;
	max-height: 345px;
	overflow-y: auto;
	white-space: pre;
	word-spacing: -3px;
}

span, div {
	position: relative;
}

.reveal-left {
	position: relative;
	overflow: hidden;
	animation: reveal-left 0.5s ease;
	animation-fill-mode: backwards;
}

@keyframes reveal-left {
	0%   {width: 0%;}
	100% {width: 100%;}
}

.key {
	color: #E34E14;
	font-family: monospace;
}

.duplicateKeyVal {
	font-family: monospace;
	color: #ed138e;
	z-index: 99999999;
	position: relative;
}

.margin-top-20 {
	margin-top: 20px;
}

.val-box-width {
	width: 180px;
	position: relative;
	display: inline-block;
}

.zIndex {
	position: relative;
	z-index: 9999999;
}

.opacity00 {
	cursor: default;
	pointer-events: none;
}

.opacity20 {
	opacity: 0.2 !important;
}

.ui-effects-transfer {
	border: 2px solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}

.user-btn {
	background-color: green; 
}

.outline-none {
	outline: none;
}

.introjs-tooltip {
	min-width: 350px;
}

.length-error-text {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.duplicate-btn-sm-success {
	background-color: #5cb85c;
	border-color: #4cae4c;
	border-radius: 3px;
	display: inline-block;
	font-size: 12px;
	padding: 5px 10px;
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

.blinking-border-background-blue {
	animation-name: blink-border-background-blue;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blink-border-background-blue { 
	50% {
		border-color: blue;
		background: rgba(102, 175, 233, .6)
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

.ct-pink-color {
	font-family: monospace;
	color: #ed138e;
}

.ct-code-b-red {
	font-family: monospace;
	color: red;
	font-weight: bold;
}

.html-arrow {
	top: 3px;
	line-height: 0;
	font-size: 30px;
}
</style>

<script type="text/javascript">


$(document).ready(function() {
	hashMapInActionReady();
});


</script>
</head>
<body>
	<div class='text-center margin-top-20'>
		<h4>
			<span class='label ct-demo-heading'>HashMap in Action</span>
		</h4>
	</div>
	<div class='col-xs-3 margin-top-20'>
	
		<!-- <div > -->
			<div class='java-methods row' id="methodsDiv">
				<h4 class='text-center methods-heading'>
					<span class='label label-default'>Methods</span>
				</h4>
				
				<div class='col-xs-12' id='methodsBody'>
					<ul class="list-group ">
						<li class="list-group-item methods-div-list" id="putMethod"><span>put("<span
							contenteditable=true class='outline-none key' placeholder='key' maxlength='7' spellcheck=false></span>",
							"<span contenteditable=true class='outline-none value ct-pink-color' placeholder='value'
							maxlength='7' spellcheck=false></span>")</span>
							<button id='putBtn' class='btn btn-success btn-sm opacity20 disabled go-btn'
								type='button'>Go</button></li>
						<li class="list-group-item methods-div-list" id="getMethod"><span>get("<span
							contenteditable=true class='outline-none key' id='getKey' placeholder='key'
							maxlength='7' spellcheck=false></span>")</span>
							<button id='getBtn' class='btn btn-success btn-sm opacity20 disabled go-btn'
								type='button'>Go</button></li>
						<li class="list-group-item methods-div-list" id="removeMethod"><span>remove("<span
							contenteditable=true class='outline-none key' id='removeKey' placeholder='key'
							maxlength='7' spellcheck=false></span>")</span>
							<button id="removeBtn"
								class='btn btn-success btn-sm opacity20 disabled go-btn' type='button'>Go</button></li>
	
					</ul>
				</div>
			</div>
			
			<div id="outputDiv">
				<div class="output-console-title-bar">
					<span class="title">Output</span>
				</div>
				<div class="output-console-body"><span id="output"></span>
				</div>
			</div>
	</div>

	<div class='col-xs-5 margin-top-20' style="padding: 0px;">
		<div class='box-border java-code '>


			<h4 class='text-center methods-heading'>
				<span class='label label-default'>Java Code</span>
			</h4>

			<pre class='creampretab4' id='javaCode'>import java.util.*;
public class HashMapDemo {
	public static void main(String[] args) {
		<span id='mapObject'>Map aMap = new HashMap();</span>
		<span id='codeLine1' class='opacity00'>Object oldValue = aMap.put("<span
					id='putKey' class='outline-none key'>IN</span>", "<span id='putVal'
					class='outline-none ct-pink-color'>India</span>");</span>
		<span id='sopLine1' class='opacity00'>System.out.println("oldValue returned by put(<span
					class='key'>IN</span>, <span class='value ct-pink-color'>India</span>) is : " + oldValue);</span>
		<span id='codeLine2' class='opacity00'>oldValue = aMap.put("<span>BR</span>", "<span>Brazil</span>");</span>
		<span id='sopLine2' class='opacity00'>System.out.println("oldValue returned by put(<span
					class='key'>BR</span>, <span class='value ct-pink-color'>Brazil</span>) is : " + oldValue);</span><span
					id='randomCode'></span>
	}
}</pre>
		</div>
	</div>
	<div class='col-xs-4 margin-top-20'>
		<div class='box-border' id='animationDiv'>
			<h4 class="headings text-center">
				<span class="label label-default">Live Display</span>
			</h4>
			<div class='col-xs-12'>
				<div class='created-element-area col-xs-offset-4'></div>
				<div id='animationJar'></div>
			</div>
		</div>
	</div>
	<div id="innerCodeLineDiv"></div>
	<div id="innerSopLineDiv"></div>
</body>
</html>
