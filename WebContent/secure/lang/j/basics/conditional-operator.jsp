<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="../js-min/co.min.js"></script> 
<title>Insert title here</title>
<style type="text/css">

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip {
	min-width: 400px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

.buttons-div {
	margin: 20px 0 10px;
	text-align: center;
}

.heading-css {
	margin: 20px 0 10px;
}

.box-border {
	border: 1px solid grey;
	border-radius: 8px;
	margin: 30px 10px 10px;
	padding: 10px;
}

.box-css {
	padding: 10px;
}

.creamPreTab4 {
	-moz-tab-size: 6;
    background-color: #fffae6;
    border-radius: 8px;
    font-size: 11px;
    margin: 5px;
    padding: 10px;
    white-space: pre;
}

.output-console {
	margin: auto;
	width: 300px;
}

.animation-div1 {
	font-family: monospace;
	padding: 100px 0 40px;
	opacity: 0;
}

.animation-div2 {
	font-family: monospace;
	padding-bottom: 30px;
	opacity: 0;
}

.max-div {
	text-align: right;
	padding: 0px;
}

.num {
	display: inline-block;
	text-align: center;
	width: 32px;
	position: relative;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.duplicate-btn-sm-success {
	background-color: #5cb85c;
	border-color: #4cae4c;
	border-radius: 3px;
	display: inline-block;
	font-size: 12px;
	padding: 5px 10px;
}

[contenteditable="true"] {
	font-weight: normal;
	outline: medium none;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

</style>
</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'>
		<h1 class='label ct-demo-heading'>Conditional Operator</h1>
	</div>
		<!-- <button type="button" class="btn btn-success" id="startBtn">Start</button> -->
	<div class="buttons-div col-xs-12">
		<span class="col-xs-6 col-xs-offset-3">
	 		<span class="col-xs-12">
	 			<span class="col-xs-8 col-xs-offset-2">
	 				<span class="col-xs-12" id="button">
						<span class="btn btn-warning visibility-hidden" id="closeBtn">Close <i class="fa fa-close"></i></span>&nbsp;&nbsp;
						<span class="btn btn-restart visibility-hidden" id="restartBtn">Restart <i class="fa fa-refresh"></i></span>
					</span>
				</span>
			</span>
		</span>
	</div>
	<div class='col-xs-offset-1 col-xs-11'>
		<div class='col-xs-5 box-border'>
<pre class='creamPreTab4'>
public class ConditionalOperatorDemo {
	public static void main(String[] args) {
		<span id='num1Line'>int num1 = <span id='num1value' contenteditable='true', spellcheck='false', maxlength='2'>14</span>;</span>
		<span id='num2Line'>int num2 = <span id='num2value' contenteditable='true', spellcheck='false', maxlength='2'>12</span>;</span>
		<span id='maxLine'>int max = (num1 > num2) ? num1 : num2;</span>
		<span id='sopLine'>System.out.println("The max number is " + max);</span>
	}
}
</pre>
		</div>
		<div class='col-xs-5 box-border' id='animationBox'>
			<div class='col-xs-12'>
				<div class='col-xs-12 text-center animation-div1'>
					<span class='box-css border'>int max</span> = <span class='box-css border'>num1 > num2</span> ? 
					<span class='box-css border'>num1</span> : <span class='box-css border'>num2</span>;
					<svg class='svg-css'>
						<marker id="arrowEnd" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
							<path d="M0,0 L5,2.5 L0,5 Z"/>
						</marker>
							
						<text fill="#333">
							<tspan x="35%" y="29%" fill="transparent" class='svg-text'>condition</tspan>
							<tspan x="63%" y="29%" fill="transparent" class='svg-text'>true</tspan>
							<tspan x="78.5%" y="29%"fill="transparent" class='svg-text'>false</tspan>
						</text>
							
						<line class="svg-line" x1="43%" y1="58%" x2="43%" y2="53%" style="marker-end: url(&quot;#arrowEnd&quot;); display: none;
							stroke-width: 2; stroke: gray; position: relative;"/>
						<line class="svg-line" x1="66.5%" y1="58%" x2="66.5%" y2="53%" style="marker-end: url(&quot;#arrowEnd&quot;); display: none;
							stroke-width: 2; stroke: gray; position: relative;"/>
						<line class="svg-line" x1="83%" y1="58%" x2="83%" y2="53%" style="marker-end: url(&quot;#arrowEnd&quot;); display: none;
							stroke-width: 2; stroke: gray; position: relative;"/>
							
						<rect class="svg-rect" style="fill: transparent; opacity: 0; stroke: gray; stroke-width: 2px;"
							height="22%" width="23%" ry="10" rx="10" y="58%" x="32%"/>
						<rect class="svg-rect" style="fill: transparent; opacity: 0; stroke: gray; stroke-width: 2px;"
							height="22%" width="11%" ry="10" rx="10" y="58%" x="61%"/>
						<rect class="svg-rect" style="fill: transparent; opacity: 0; stroke: gray; stroke-width: 2px;"
							height="22%" width="11%" ry="10" rx="10" y="58%" x="77.5%"/>
					</svg>
				</div>
				<div class="col-xs-12 animation-div2 ">
					<div class="col-xs-4 max-div">int max =</div>
					<div class="col-xs-8 max-value-div">
						<span class="num" id='num1'>num1</span>
						<span>&gt;</span>
						<span class="num" id='num2'>num2</span>
						<span>?</span>
						<span class="num" id="n1">num1</span>
						<span>:</span>
						<span class="num" id="n2">num2</span>
					</div>
				</div>
			</div>
			<div class="output-console center" id='outputBox'>
				<div class="output-console-title-bar">
					<span>Output</span>
				</div>
				<div class="output-console-body">
<span></span>
				</div>
			</div>
		</div>
	</div>
</div>

<script>

$(document).ready(function() {
	conditionalOperatorReady();
});

</script>

</body>
</html>