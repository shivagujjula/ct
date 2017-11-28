<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="../js-min/claia.min.js"></script>

<title>Command Line Arguments in Action</title>

<style>

.box-main {
	margin: 10px;
	padding: 10px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 1000000;
}

.buttons-div {
	margin-top: 20px;
	text-align: center;
}

.box-border {
	border: 1px solid grey;
	border-radius: 8px;
	margin: 30px 10px 10px 10px;
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

.col-sm-1 {
	width: 7%;
}

table {
	margin-top: 30px;
	text-align: center;
}
td {
    padding: 10px;
    width: 25%;
}

.td-border {
	border: 2px solid;
}

ol, ul {
	margin-bottom: 0;
    margin-left: -15px;
}

.center {
	display: block;
    margin-left: auto;
    margin-right: auto;
}

.output-console {
	width: 300px;
}

.opacity00 {
	opacity: 0;
}

.position-absolute {
	position: absolute;
}

.position-relative {
	position: relative;
}

.visibility-hidden {
	visibility: hidden;
}

.ui-effects-transfer {
    border: 1px solid #003399;
    position: relative;
    z-index: 9999999;
}

.typingCursor::after {
	height: 14px !important;
	width: 0px !important;
}

.height-width {
	height: 44px;
	width: 290px;
}

.args-circle {
	border: 1px solid;
    border-radius: 50%;
    padding: 2px;
    position: relative;
    z-index: 9999999;
}

</style>

<script>
	
	<%
	if (request.getParameter("restart") != null) {
	%>
	setTimeout(function () {
		$("#startBtn").click();
	}, 500);
	<%
	}
	%> 

$(document).ready(function() {
	commandLineArgumentsInActionReady();
});

</script>

</head>
<body>

<div class='box-main'>
	<div class='text-center'>
		<h1 class='label ct-demo-heading'>Command Line Arguments in Action</h1>
	</div>
	<div class='buttons-div'>
		<button type="button" class="btn btn-success" id="startBtn">Start</button>
		<button type="button" class="btn btn-warning hidden" id="restartBtn">Restart</button>
	</div>
	<div>
		<div class='row'>
		<div class='col-sm-1'></div>
			<div class='col-sm-5 box-border'>
<pre class='creamPreTab4'>
public class <span id='className'>Example</span> {
	public static void main(<span id='argsLine'>String[] args</span>) {
		<span id='sopArgsLength'>System.out.println("args.length : " + args.length);</span>
		<span id='sopAgrsOf0'>System.out.println("args[0] : " + args[<span id='args0'>0</span>]);</span>
		<span id='sopAgrsOf1'>System.out.println("args[1] : " + args[<span id='args1'>1</span>]);</span>
		<span id='sopAgrsOf2'>System.out.println("args[2] : " + args[<span id='args2'>2</span>]);</span>
	<span id='mainMethodCloseBrace'>}</span>
}
</pre>
			</div>
			<div class='col-sm-5 box-border' id='animationBox'>
				<div>
					<span>&gt;&gt; <span id='commandLine'>java <b>Example</b></span> <span id='commandLineValues'><span id='value0'>Ganga</span> <span id='value1'>73</span> <span id='value2'>Gold</span></span></span>
				</div>
				<div>
					<table align="center">
						<tr>
							<td><span id='tdIndex0' class='opacity00 position-relative'>0</span></td>
							<td><span id='tdIndex1' class='opacity00 position-relative'>1</span></td>
							<td><span id='tdIndex2' class='opacity00 position-relative'>2</span></td>
						</tr>
						<tr>
							<td id='td0'><span id='tdValue0' class='opacity00 position-relative'>Ganga</span></td>
							<td id='td1'><span id='tdValue1' class='opacity00 position-relative'>73</span></td>
							<td id='td2'><span id='tdValue2' class='opacity00 position-relative'>Gold</span></td>
						</tr>
						<tr>
							<td><span id='tdLength0' class='opacity00'>1</span></td>
							<td><span id='tdLength1' class='opacity00'>2</span></td>
							<td><span id='tdLength2' class='opacity00'>3</span></td>
						</tr>
					</table>
				</div>
				<div class="output-console center">
					<div class="output-console-title-bar">
						<span>Output</span>
					</div>
	        		<div class="output-console-body">
<span id='outputArgsLength'></span>
<span id='outputArgsOf0'></span>
<span id='outputArgsOf1'></span>
<span id='outputArgsOf2'></span>
	        		</div>
				</div>
			</div>
		</div>
	</div>
	
</div>

</body>
</html>