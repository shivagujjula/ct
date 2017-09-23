<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>

<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<title>Insert title here</title>
<style type="text/css">
.margin-top-1 {
	margin-top: 1%;
}

.path {
	stroke-dasharray: 1000;
	stroke-dashoffset: 1000;
	animation: dash 5s linear alternate 1;
}

@keyframes dash {
	from {
		stroke-dashoffset: 1000;
	}
	to {
		stroke-dashoffset: 0;
	}
}
</style>
</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>AC Voltage</span>
		</h3>
	</div>
	<div class="col-xs-6 col-xs-offset-3" style="margin-top: 5%;" id="mainDiv">
		<svg height="500" width="1000">
			<line x1="24" y1="248" x2="651" y2="246" style="stroke-width: 2; stroke: red;"/>
			<text x="-28" y="-20" fill="green" transform="rotate(-92 97,71)">Amplitude</text>
			<line x1="23" y1="19" x2="23" y2="489" style="stroke-width: 2; stroke: red;"/>		
			<path id="path" class="path" d="M 26 248 q 83 -173 155 0 q 83 173 155 0 q 83 -173 155 0 q 83 173 155 0" stroke="blue" stroke-width="3" fill="none"/>
			<text x="67" y="388" fill="green">Wavelength</text>
			<!-- <path d="M 181 247 q 83 173 155 0" stroke="blue" stroke-width="5" fill="none"/>
			<path d="M 336 247 q 83 -173 155 0" stroke="blue" stroke-width="5" fill="none"/>
			<path d="M 491 246 q 83 173 155 0" stroke="blue" stroke-width="5" fill="none"/> -->
		</svg>
	</div>
</div>

</body>

<script type="text/javascript">
$(document).ready(function () {
	introGuide();
})

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function() {
		location.reload();
	});
	
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element : "#mainDiv",
			intro : "",
			tooltipClass : 'hide'
		}, {
			element : "#restart",
			intro : '',
			position : 'right'
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'mainDiv':
			$(".path").one("animationend", function() {
				$(".path").css({"stroke-dasharray": "0"});
			});
			break;
		}
	});
	introjs.start();
}
		
</script>
</html>