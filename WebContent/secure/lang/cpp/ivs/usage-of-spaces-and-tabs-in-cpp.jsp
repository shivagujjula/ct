<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/custom-styles.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/cpp/js-min/uosatic.min.js" type="text/javascript"></script>
<title>c++ coding conventions</title>

<style>

.introjs-tooltiptext br {
	content: "";
	display: block;
	margin-top: 10px;
}

.introjs-tooltip {
	min-width: 300px;
	-webkit-transition: opacity 0.3s ease-out !important;
	-moz-transition: opacity 0.3s ease-out !important;
	-ms-transition: opacity 0.3s ease-out !important;
	-o-transition: opacity 0.3s ease-out !important;
	transition: opacity 0.3s ease-out !important;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

.introjs-overlay {
	opacity: 0.5 !important;
	-webkit-transition: all 0.5s ease-out !important;
	-moz-transition: all 0.5s ease-out !important;
	-ms-transition: all 0.5s ease-out !important;
	-o-transition: all 0.5s ease-out !important;
	transition: all 0.5s ease-out !important;
}

.introjs-helperLayer {
	-webkit-transition: all 0.5s ease-out !important;
	-moz-transition: all 0.5s ease-out !important;
	-ms-transition: all 0.5s ease-out !important;
	-o-transition: all 0.5s ease-out !important;
	transition: all 0.5s ease-out !important;
}

.introjs-tooltipReferenceLayer {
	-webkit-transition: all 0.5s ease-out !important;
	-moz-transition: all 0.5s ease-out !important;
	-ms-transition: all 0.5s ease-out !important;
	-o-transition: all 0.5s ease-out !important;
	transition: all 0.5s ease-out !important;
}

.buttons-div {
	margin: 20px 0 10px;
	text-align: center;
}

.heading-css {
	margin: 20px 0 10px;
}

.space-css {
	border:1px solid orange;
	border-radius:8px;
}

.tab-css {
	border:1px solid pink;
	border-radius:8px;
	display: inline-block;
}

.enter-css {
	background-color: #002240;
	color: rgba(255, 255, 0, 0.75) !important;
	border-radius:6px;
	padding: 0px 7px;
}

</style>

</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'>
		<h1 class='label ct-demo-heading'>Coding and Naming Conventions in C++</h1>
	</div>
	<div class="margin-top-20 col-xs-12 text-center">
			<span class="col-xs-6 col-xs-offset-3">
		 		<span class="col-xs-12">
		 			<span class="col-xs-8 col-xs-offset-2">
		 				<span class="col-xs-12" id="button">
							<span class="btn btn-warning opacity00" id="closeBtn">Close <i class="fa fa-close"></i></span>&nbsp;&nbsp;
							<span class="btn btn-restart opacity00" id="restartBtn">Restart <i class="fa fa-refresh"></i></span>
						</span>
					</span>
				</span>
			</span>
		</div>
	</div>
	<div class="col-xs-12">
		<div class='col-xs-offset-3 col-xs-6'>
<pre class="creamPreTab4" id='preCode'>
<span id='code'><span id='include'>#include</span><span id='iostream'>&lt;iostream&gt;</span><span class='enter-css' id='enterButton'>¬</span>
<span id='using'>using</span><span id="spaceId" class='space-css'> </span><span id='namespace'>namespace</span><span class='space-css' id="spaceId1"> </span><span id='std'>std</span><span id='semicolon'>;</span><span class='enter-css' id='enterButton1'>¬</span>
<span id='int'>int</span><span id="spaceId2" class='space-css'> </span><span id='main'>main()</span><span class='space-css'> </span><span id='openBrace1'>{</span><span class='enter-css' id='enterButton2'>¬</span>
<span class='tab-css' id='tabLine1'>→	</span><span id='int1'>int</span><span class='space-css'> </span><span id='i'>i</span><span id='semicolon1'>;</span><span class='enter-css' id='enterButton3'>¬</span>
<span class='tab-css'>→	</span><span id='for'>for</span><span class='space-css'> </span>(i<span class='space-css'> </span><span id='equalTo'>=</span><span class='space-css'> </span>0;<span class='space-css'> </span>i<span class='space-css'> </span><span id='lessThan'>&lt;</span><span class='space-css'> </span>5;<span class='space-css'> </span>i++)<span class='space-css'> </span><span id='openBrace2'>{</span><span class='enter-css' id='enterButton4'>¬</span>
<span class='tab-css'>→	</span><span class='tab-css'>→	</span><span id="out"><span id="cout">cout</span><span class='space-css'> </span><span id="insert"><<</span><span class='space-css'> </span>"i<span class='space-css'> </span><span id='equalTo1'>=</span><span class='space-css'> </span>"<span id="insert1"><<</span><span class='space-css'> </span>i<span class='space-css'> </span>"\n"</span><span class='enter-css' id='enterButton5'>¬</span>
<span class='tab-css'>→	</span><span id='closeBrace1'>}</span><span class='enter-css' id='enterButton6'>¬</span>
<span id='closeBrace2'>}</span><span class='enter-css' id='enterButton7'>¬</span></span>

<span class='space-css'> </span> orange borders mark spaces
<span class='tab-css'>→	</span> pink borders mark tabs
</pre>
		</div>
	</div>
</div>

<script>

$(document).ready(function() {
	usageOfSpacesAndTabsInCReady();
});

</script>
</body>
</html>
