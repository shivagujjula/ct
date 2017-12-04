<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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
<script src="../js/difference-between-print-n-println.js"></script>
<title>println method</title>
</head>
<style>
#preBody {
	margin-top: 110px;
	-moz-tab-size: 2;
	background-color: #fffae6;
	tab-size: 2;
}

a:focus, a:hover {
	text-decoration: none !important;
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
	height: 125px;
	padding: 10px;
	white-space: inherit;
}

#buttonDiv {
	height: 6px;
}

.green {
	color: green;
	font-weight: 700;
}

.white {
	color: white;
	font-weight: 700;
}

.z-index {
	position: relative;
	z-index: 10000001 !important;
	border-radius: 4px;
	padding: 4px;
	background: white;
}

</style>
<body>
<script>
		
	$(document).ready(function() {
		simpleJavaProgramWithPrintlnReady();
	});
	
</script>
	<div class="row text-center" id="buttonDiv">
		<button type="button" class="btn btn-success btn-sm" id="startBtn">Start</button>
		<button type="button" class="btn btn-warning btn-sm hide"
			id="reStartBtn">Restart</button>
	</div>
	<div class="col-sm-12">
		
		<div class="col-xs-offset-1 col-sm-5">
			<pre class="creamPreTab4" id="preBody">
public class <span id="line1"><b>Example</b></span> {
	public static void <span id="line2"><b>main(String[] args)</b></span> {
		<span id="line3">System.out.<b>print</b>("Ganga");</span>
		<span id="line4">System.out.<b>print</b>("River");</span>
		<span id="line5">System.out.<b>println</b>();</span>
		<span id="line6">System.out.<b>println</b>("Yamuna");</span>
		<span id="line7">System.out.<b>println</b>("River");</span>
		<span id="line8">System.out.<b>print</b>("Godavari");</span>
		<span id="line9">System.out.<b>println</b>("River");</span>
		<span id="line10">}</span>
<span id="line7">}</span>
</pre>
		</div>

		<div class="col-xs-5">
			<div id="outputDiv" style="margin-top:110px;">
				<div class="output-console-title-bar">
					<span class="title">Output</span>
				</div>
			<div class="output-console-body" id="body">
				<span class="opacity00 green" id="printlnId11"> <b>Ganga</b></span><span class="opacity00 green" id="printlnId12"> <b>River</b></span>
				<div class="opacity00 green" id="printlnId2"> <b>Yamuna</b></div>
				<div class="opacity00 green" id="printlnId3"> <b>River</b></div>
				<span class="opacity00 green" id="printlnId41"> <b>Godavari</b></span><span class="opacity00 green" id="printlnId42"> <b>River</b></span>
			</div>
		</div>
	</div>
	
	</div>
</body>
</html>
