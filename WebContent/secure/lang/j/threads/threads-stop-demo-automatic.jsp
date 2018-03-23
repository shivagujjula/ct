<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script>var $_bs = jQuery.noConflict(true);</script>
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="../js-min/tsda.min.js"></script> 
<title>Stop Threads Demo</title>

<style>

.ui-effects-transfer {
	border: 1px solid blue;
}
  
#slider-range-max label {
	position: absolute;
	width: 20px;
	margin-left: -10px;
	text-align: center;
	margin-top: 15px;
}

.button-div-css {
	margin-top: 15px;
	text-align: center;
}

.threadbox {
	border: 1px solid lightgray;
	border-radius: 8px;
	padding: 0 10px;
	margin: 30px 10px 10px 10px;
	width: auto;
}

.opacity40 {
	opacity: 0.4 !important;
}

p {
	font-size: 90%;
	margin: 0 0 5px;
}

#sliderDiv {
	margin-left: 10px;
}

.vertical-thread {
	margin-top: 40px;
	margin-bottom: 40px;
	display: inline-block;
	width: 100px;
	height: 26px;
	-webkit-transform: rotate(+90deg);
	transform: rotate(+90deg);
}

.progress-bar-striped {
	-webkit-transform: rotate(+180deg);
	transform: rotate(+180deg);
}

.vertical-thread {
	box-shadow: inset 0px 4px 6px #ccc;
}

.progress-bar {
	box-shadow: inset 0px 4px 6px rgba(100, 100, 100, 0.6);
}

.creamPreTab4 {
	font-size: 9px;
	border: 1px dashed #ccc;
	background-color: #fffae6;
	white-space: pre;
	-moz-tab-size: 2;
	padding: 6px 2px;
}

.main-method-arrow {
	color: #CE9717 !important;
	position: absolute;
}

.thread-arrow {
	color: #337ab7 !important;
	position: absolute;
}

.output-console {  
	border-radius: 8px !important;
	overflow: auto;
	margin: 30px 10px 10px 10px;
}

.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	padding: 2px 0;
	text-align: center;
}

.output-console-body {
	background-color: black;
	padding-left: 20px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 10px;
	white-space: pre;
	height: 450px;
	overflow-y: auto;
	overflow-x: hidden;
}

.btn-execute {
	border-radius: 6px;
	font-size: 9px;
	line-height: 1;
	padding: 0 5px;
	position: absolute;
}

#outputBox {
	display: none;
}

.popover-content {
	background-color: #003399;
	border-radius: 4px;
	color: white;
	font-size: 12px;
	margin: 4px;
	padding: 5px;
}

.popover {
	width: -moz-max-content;
}

.tooltip {
	font-size: 10px;
	width: -moz-max-content;
}

.tooltip-inner {
	padding: 0 8px;
}

@keyframes ellipsis {
	from {
		width: 0;
		margin-right: 0;
	}
	to {
		width: 40px;
		margin-right: -40px;
	}
}

.loading::after {
	overflow: hidden;
	display: inline-block;
	vertical-align: bottom;
	text-align: left;
	animation: ellipsis 1s infinite steps(4);
	content: "…";
}

.stopBtn {
	font-family: monospace;
}

.thread-message-div-css {
	height: 23px;
}

.temp-status-css {
	font-family: Menlo,Monaco,Consolas,"Courier New",monospace;
	font-size: 9px;
}

.position-relative {
	position: relative;
}

.thread-message-div-css > p {
	margin: 0;
}

.introjs-tooltip {
	min-width: 310px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.code-b-green {
	font-weight: bold;
	color: green;
}

.code-b-red {
	font-weight: bold;
	color: rgb(252, 66, 66);
}

</style>

</head>
<body>

	<div class='row'>
		<div>
			<div class='col-sm-3' id='sliderDiv'>
				<p>
					<label>Number of Threads:</label> <input type="text"
						id="numOfThreads" name="numOfThreads" readonly
						style="border: 0; font-weight: bold;">
				</p>
				<div id="slider-range-max"></div>
			</div>

			<div class='button-div-css'>
				<button type="button" class="btn btn-primary btn-sm"
					id='startMainMethodButton'>Start</button>
		
				<!-- <span class="btn btn-restart opacity00" id="restartBtn">Restart <i class="fa fa-refresh"></i></span> -->
				<span class="btn btn-warning opacity00 hidden" id="closeBtn">Close <i class="fa fa-close"></i></span>&nbsp;&nbsp;
				<span type="button" class="opacity00 btn btn-restart hidden"
					id='resetMainMethodButton'>Restart <i class="fa fa-refresh"></i></span>
			</div>
		</div>
	</div>
	
	<div class='col-sm-12'>
		<div class='row'>
			<div class='col-sm-2 threadbox hidden' id ='mainMethodThreadbox'>
				<p><label>Custom stop implementation in a Thread :</label></p>
<pre class="creamPreTab4">
<span id='threadStopDemo'>public class <b>ThreadStopDemo</b> {
	<span id='mainMethod'><span class='mainMethodBoundaries'>public static void main(String[] args) {</span>
<span id='numOfObjects'></span>
	<span id='mainMethodCloseBrace' class='mainMethodBoundaries' data-placement='right'>}</span></span>
}</span>

<span id='counterClassSpan'>class <b>Counter</b> implements Runnable {
	<span id='counterClassBoundaries'><span id='stopCalledLine'>private boolean stopCalled = <span class='code-b-red'>false</span>;</span>
	private int id;
	public <b>Counter(int id)</b> {
		this.id = id;
	}
	
	<span id='runMethod'>public void <b>run()</b> {
		for (int i = 1; i <= 10; i++) {
			if (stopCalled) {
				return;
			}
			System.out.println("t[" + id + "] : " + i);
		}
	}</span></span>
	
	<span id='stopExectionMethod'>public void <b>stopExecution()</b> {
		stopCalled = <span class='code-b-green'>true</span>;
		System.out.println("t[" + id + "] stop called...");
	}</span>
}</span>
</pre>
<span class='glyphicon glyphicon-arrow-right main-method-arrow hidden' id='mainMethodArrow'></span>
<button type='button' class='btn btn-success btn-execute hidden' id='executeButton'
	 data-trigger='manual' data-toggle='tooltip' title='Click to Execute' data-placement='bottom'>Execute</button>
			</div>

				<%
					for (int i = 1; i <= 2; i++) {
				%>
				<div class='col-sm-2 threadbox hidden' id='threadbox<%=i%>'>
					<div class='text-center'>
						<div>
							<h4>
								<span class='label label-default' id='thread<%=i%>Label'>Thread
									T<sub><%=i%></sub>
								</span>
							</h4>
						</div>
						<div class="progress vertical-thread">
							<div class="progress-bar progress-bar-primary" style="width: 0%;"
								id='progressBarThread<%=i%>'></div>
						</div>
						<div class="thread-message-div-css">
							<p id='thread<%=i%>Message'></p>
						</div>
						<div>
							<button type="button"
								class="stopBtn stop btn btn-warning btn-xs disabled opacity30"
								threadId='<%=i%>' id='stopThread<%=i%>Button'>stopExecution()</button>
						</div>
					</div>
					<pre class="creamPreTab4" id='counterT<%=i%>' style='margin-top: 10px'>
class <b>Counter</b> implements Runnable {
	private boolean stopCalled = <span id='stopCalledStatus<%=i%>' class='position-relative code-b-red'>false</span>;
	...
	...
	...
	
	<span id='runMethodT<%=i%>'>public void <b>run()</b> {
		<span id='for<%=i%>'>for (int i = 1; i <= 10; i++) {</span>
			<span id='ifStopCalled<%=i%>'>if (<span id='ifStopCalledElement<%=i%>'>stopCalled</span>) {</span>
				<span id='return<%=i%>'>return;</span>
			}
			<span id='sop<%=i%>'>System.out.println("t[" + id + "] : " + i);</span>
		}
	<span id='runMethodEndT<%=i%>'>}</span></span>
	
	<span id='stopMethodT<%=i%>'>public void <b>stopExecution()</b> {
		<span id='stopCalled<%=i%>'>stopCalled = <span id='stopCalledTrue<%=i%>' class='code-b-green'>true</span>;</span>
		<span id='stopCalledSop<%=i%>'>System.out.println("t[" + id + "] stop called...");</span>
	}</span>
}
</pre>
<span class='glyphicon glyphicon-arrow-right thread-arrow hidden' id='thread<%=i%>Arrow'></span>
<span class='glyphicon glyphicon-arrow-right thread-arrow hidden' id='stopThread<%=i%>Arrow'></span>
				</div>

				<%
					}
				%>
		
		<div class="col-sm-3" id="outputBox">	
			<div class="output-console">
				<div class="output-console-title-bar">
					<span>Output</span>
				</div>
		        <div class="output-console-body">
<span id="outputPre"></span>
		        </div>
	  		</div>
		</div>
	
		</div>
	</div>
	
<script>

$(document).ready(function() {
	threadsStopDemoAutomaticReady();
});

</script>

</body>
</html>