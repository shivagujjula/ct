<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
<title>Insert title here</title>
<style type="text/css">
.margin-top-5 {
	margin-top: 5px;
}
td {
	width: 20px;
	height: 20px;
	border: 1px solid;
}

.tdInput {
	width: 20px;
	border: none;
}

</style>
</head>
<body>
<div class="col-xs-12">
	<div class="col-xs-6 col-xs-offset-3 text-center margin-top-5">
		<input id="inputId" type="number" min="2" max="9"/>
		<button type="button" class="btn btn-success" id="submitBtn" onclick="actionFunction()">Submit</button>
	</div>
</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
	actionFunction();
});

function actionFunction() {
	$("#tableDiv").empty();
	var inputValue = $("#inputId").val();
	$('body').append("<div class='col-xs-6 col-xs-offset-3 text-center' id='mainDiv'><table id='tableDiv'></table></div>");
	for(var i = 1; i <= inputValue; i++) {
		$("#tableDiv").append('<tr id="trId' + i + '"></tr>');
		for(var j = 1; j <= inputValue; j++) {
			$('#trId' + i).append('<td id="tdId'+ j +'"><input id="tdInputId'+ j +'" class="tdInput text-center"></td>');
		}
	}
	$("#tdInputId1").keydown(function(e) {
		if ($("#tdInputId1").val().length <= 1) {
			return true;
		} else {
			e.preventDefault();
		}
	});
}

</script>
</html>