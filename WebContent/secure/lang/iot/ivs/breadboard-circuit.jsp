<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<script src='/secure/lang/iot/js-min/bc.min.js'></script>

<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<title>Breadboard circuit</title>
<style type="text/css">

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-50 {
	margin-top: 50px;
}

.margin-top-100 {
	margin-top: 100px;
}

.custom-btn {
	background-color: darkgreen;
	float: right;
	margin: 0 !important;
}

.popover {
	z-index: 9999999;
	width: 200px;
}

.popover-content {
    background-color: teal;  /* teal #003399 */
    color: white;
    min-height: 30px;
    letter-spacing: 1px;
}

.popover-height {
	height: 20px;
}

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
}

img {
	opacity: 0;
}

</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Breadboard Operation</span>
		</h3>
	</div>
	<div class="col-xs-6 col-xs-offset-3 margin-top-50 main-div text-center" id="mainDiv">
		<span id="imageIdSpan">
			<img src="../images/BreadboardCircuit/breadboard0_bb.jpg" width="70%" id="breadBoardSeriesImage">
		</span>
	</div>
	<div class="col-xs-12 margin-top-100 text-center">
		<span class="btn btn-warning opacity00" id="restart">Restart</span>
	</div>
</div>
</body>

<script type="text/javascript">

$(document).ready(function() {
	BreadBoardCiruitReady();
});



</script>
</html>