<%@ page language="java" contentType="text/html; charset=UTF-8" 
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Swap Demo</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script src="/secure/lang/j/js-min/sd.min.js"></script>
<style type="text/css">
body {
	-moz-tab-size: 4;
	margin-top: 20px;
}

[contenteditable=true]:empty:before {
  content: attr(placeholder);
  color: #B8B8A0;
}

.col-sm-3 {
	margin-right: 15px;
	margin-left: 15px;
	padding: 0px;
}
.opacity00 {
	opacity: 0;
	cursor: default;
	pointer-events: none;
}

.allowOnlyNumber {
	outline: none;
}

.position-relative {
	position: relative;
}

.position-absolute {
	position: absolute;
}

.bgcolor-cream {
	background-color: #ffffcc;
}

.focus {
	background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 50%;
	box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
	padding: 5px;
	z-index: 9999999 !important;
}

.errorMsg {
	color: red;
	font-weight: bold;
}

.margin-bottom20 {
	margin-bottom: 20px;
}

.margin-top20 {
	margin-top: 20px;
}

#variblesPanel {
	height: 205px;
}

#outputDiv {
	position: relative;
	z-index: 1000000;
}

.output-console-title-bar {
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	margin-top: 14px;
}

.output-console-body {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
	margin-bottom: 14px;
    padding: 10px;
    font-weight: bold;
}

.title {
	font-size: 12px;
}
</style>
</head>

<body>
		<div class="text-center margin-bottom20">
			<h4>
				<span class="label label-default ct-demo-heading">Swap Demo</span>
			</h4>
		</div>
		<div class="col-xs-6 box-border" id="swapDemoDiv">
<pre class="bgcolor-cream" id="className">public class <span id='swapDemo'>SwapDemo</span> {  
	<span id='methodName' ><span>public static void main(String[] args) {</span>
	<span id='methodBody'>	<span id='line1' class='position-absolute opacity00'>int a = <span class="allowOnlyNumber" id="aValue" contenteditable="true" placeholder=" ">12</span>;</span>
		<span id='line2' class='position-absolute opacity00'>int b = <span class="allowOnlyNumber" id="bValue" contenteditable="true" placeholder=" ">45</span>;</span>		
		<span id='lineTemp' class='opacity00'>int t = a;</span>
		<span id='wrongSolution' class='opacity00'><span id='line3'>a = b;</span>
		<span id='line4'>b = a;</span></span>
		<span id='line5' class='opacity00'>System.out.println("After swaping : a = " + a + " b = " + b);</span></span></span>
	}
}
</pre>
		</div>
		<div class="col-xs-5 box-border outputDiv">
			<div>
				<div class="panel panel-default" id="variblesPanel">
					<div class="panel-heading">
						<h3 class="panel-title">Varibles</h3>
					</div>
					<div id="valuesSpan">
					<div class="panel-body valuesPanelClass" id="valuesPanel">
						<div class="panel panel-info col-sm-3 opacity00" id="tValuePanel">
							<div class="panel-heading">
								<h4 class="panel-title text-center">t</h4>
							</div>
							<div class="panel-body text-center">
								<span class="" id="tValueInOutput" style="position: relative;">12</span>
							</div>
						</div>
						<div class="panel panel-info col-sm-3 opacity00" id="aValuePanel">
							<div class="panel-heading">
								<h4 class="panel-title text-center">a</h4>
							</div>
							<div class="panel-body text-center">
								<span class="" id="aValueInOutput" style="position: relative;">12</span><span class="" id="aValueInOutputWithBValue" style="position: relative;"></span>
							</div>
						</div>
						<div class="panel panel-info col-sm-3 opacity00" id="bValuePanel">
							<div class="panel-heading">
								<h4 class="panel-title text-center">b</h4>
							</div>
							<div class="panel-body text-center">
								<span class="" id="bValueInOutputWithAValue" style="position: relative;"></span><span class="" id="bValueInOutput" style="position: relative;">45</span>
							</div>
						</div>
					</div>
					</div>
				</div>
			</div>
			</div>

	<div class="col-xs-offset-4 col-xs-4" id="outputDiv">
		<div class="output-console-title-bar">
			<span class="title">Output</span>
		</div>
		<div class="output-console-body"><span id="output"></span>
		</div>
	</div>

	<br>
	<div class="text-center col-xs-12 margin-top20">
		<a class="btn btn-success opacity00" id='restart'><i
			class="fa fa-refresh"></i>&nbsp;Restart</a>
	</div>
	<script type="text/javascript">
	
	$(document).ready(function() {
		swapDemoReady();
	});
	
	</script>
</body>
</html>