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
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/j/js-min/ai.min.js"></script>
<title>Insert title here</title>

<style>

.ct-comment-color {
	color: rgb(79, 135, 79);
}

div, span, b {
	position: relative;
}

.introjs-tooltip {
	min-width: 500px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-tooltiptext > br {
	margin-bottom: 15px;
}

.buttons-div {
	margin-top: 20px;
	text-align: center;
}

.col-sm-6 {
	padding-left: 10px;
    padding-right: 10px;
}

.animation-box {
	border-radius: 8px;
	color: #434d56;
	height: 300px;
	margin: 5px;
	padding: 10px;
}

.executeAnimationBtn {
	background-color:green !important;
}

.animation-text {
	font-size: 12px;
	font-family: monospace;
	padding: 5px;
}

.animation-font {
	color: #434D56;
	font-size: 12px;
	margin-top: 8px;
	text-align: right;
}

table {
	font-size: 16px;
	table-layout: fixed;
	width: 100%;
}

.td-text {
	border: medium none;
	font-size: 12px;
	text-align: center;
	width: 100px;
}

.td-border-none {
	border: none;
}

td {
	border: 1px solid;
}

.ui-effects-transfer {
    border: 1px solid #003399;
    position: relative;
    z-index: 9999999;
}

.font-family-monospace {
	font-family: monospace;
}

.font-size16 {
	font-size: 16px;
}

#marksArrDiv {
	margin: 10px;
}

</style>

</head>
<body>

<div class='ct-box-main'>
	<div class='text-center'>
		<h1 class='label ct-demo-heading'>Introduction to Array</h1>
	</div>
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
	
	<div class='row'>
		<div class='col-xs-offset-3 col-xs-6 box-border'>
			<div class='animation-box' id='animationBox'>
			</div>
		</div>
	</div>
	
</div>

<script>

$(document).ready(function() {
	arrayIntroductionReady();
});

</script>

</body>
</html>
