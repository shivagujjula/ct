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
<script src='/secure/lang/iot/js-min/iotc.min.js'></script>

<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<title>IoT characteristics</title>

<style type="text/css">

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
}

.margin-top-20 {
	margin-top: 20px;
}

.margin-top-50 {
	margin-top: 50px;
}

.margin-top-1 {
	margin-top: 1%;
}

.circle {
	border-radius: 50%;
	border: 1px solid;
	background: white;
	width: 110px;
	height: 110px;
	display: inline-block;
	position: absolute;
}

.circle-text {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translateX(-50%) translateY(-50%);
	text-align: center;
}

.main-div {
	height: 550px;
	width: 660px;
}

.top-view-circle {
	left: 50%;
    top: 11%;
    transform: translateX(-50%);
	background: orangered;
}

.top-right-view-circle {
	left: 64.5%;
    top: 31%;
	background: #19ab49;
}

.bottom-right-view-circle {
	left: 56%;
    top: 79%;
    transform: translateY(-79%);
    background: #7112a7;
}

.bottom-left-view-circle {
	left: 39%;
    top: 71%;
    transform: translateX(-71%) translateY(-39%);
    background: #068e98;
}

.top-left-view-circle {
	left: 18.5%;
	top: 28%;
	transform: translateY(18.5%);
	background: darkorange;
}

.center-view-circle {
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	background: darkslateblue;
}

.circle-text-style {
	color: white;
	font-family: monospace;
}

.top-view-arrow {
	color: orangered;
	left: 48%;
	position: absolute;
	top: 33%;
}

.top-right-view-arrow {
	color: #19ab49;
	left: 60%;
	position: absolute;
	top: 43%;
	transform: rotate(66deg);
}

.bottom-right-view-arrow {
	color: #7112a7;
	left: 55%;
	position: absolute;
	top: 59%;
	transform: rotate(138deg);
}

.bottom-left-view-arrow {
	color: #068e98;
	left: 41%;
	position: absolute;
	top: 59%;
	transform: rotate(220deg);
}

.top-left-view-arrow {
	color: darkorange;
	left: 37%;
	position: absolute;
	top: 43%;
	transform: rotate(286deg);
}

/* .faa-passing {
    /* position: relative; */
  /*  animation-name: example;
    animation-duration: 1s;
    animation-iteration-count: 2;
} */

/* Standard syntax */
@keyframes example {
      0% {
      	left: 48%;
      	top: 33%;
      }
    100% {
    	left: 48%;
    	top: 32%;
    }
}
.faa-passing-bottom-left {
	animation:bottom-left 1s 2;
}
@keyframes bottom-left {
      0% {
      	left: 41%;
      	top: 59%;
      }
    100% {
    	left: 41%;
    	top: 58%;
    }
}

.faa-passing-top-right {
	animation:top-right 1s 2;
}
@keyframes top-right {
      0% {
      	left: 60%;
      	top: 43%;
      }
    100% {
    	left: 59%;
    	top: 43%;
    }
}

.faa-passing-bottom-right {
	animation:bottom-right 1s 2;
}
@keyframes bottom-right {
      0% {
      	left: 55%;
      	top: 59%;
      }
    100% {
    	left: 55%;
    	top: 58%;
    }
}

.faa-passing-top {
	animation:top 1s 2;
}
@keyframes top {
      0% {
      	left: 48%;
      	top: 33%;
      }
    100% {
    	left: 48%;
    	top: 32%;
    }
}

.faa-passing-top-left {
	animation:top-left 1s 2;
}
@keyframes top-left {
      0% {
      	left: 37%;
      	top: 43%;
      }
    100% {
    	left: 36%;
    	top: 43%;
    }
}
    
</style>

</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>IoT characteristics</span>
		</h3>
	</div>
	<div class="col-xs-6 col-xs-offset-3 margin-top-50 main-div" id="mainDiv">
		<div class="circle top-view-circle opacity00" id="topViewCircleDiv">
			<div class="circle-text circle-text-style">Less Bandwidth</div>
		</div>
		<div class="circle top-right-view-circle opacity00" id="topRightViewCircleDiv">
			<div class="circle-text circle-text-style">Less power</div>
		</div>
		<div class="circle bottom-right-view-circle opacity00" id="bottomRightViewCircleDiv">
			<div class="circle-text circle-text-style">Less Data</div>
		</div>
		<div class="circle bottom-left-view-circle opacity00" id="bottomleftViewCircleDiv">
			<div class="circle-text circle-text-style">Less complex</div>
		</div>
		<div class="circle top-left-view-circle opacity00" id="topLeftViewCircleDiv">
			<div class="circle-text circle-text-style">Less vulnerable</div>
		</div>
		<div class="circle center-view-circle opacity00" id="centerViewCircleDiv">
			<div class="circle-text" style="color: white; font-weight: bold;font-size: 35px;">IoT</div>
		</div>
		<i class="fa fa-arrow-up fa-2x top-view-arrow opacity00" aria-hidden="true"></i>
		<i class="fa fa-arrow-up fa-2x top-right-view-arrow opacity00" aria-hidden="true"></i>
		<i class="fa fa-arrow-up fa-2x bottom-right-view-arrow opacity00" aria-hidden="true"></i>
		<i class="fa fa-arrow-up fa-2x bottom-left-view-arrow opacity00" aria-hidden="true"></i>
		<i class="fa fa-arrow-up fa-2x top-left-view-arrow opacity00" aria-hidden="true"></i>
		<!-- <div style="margin-top: 9%; margin-left: 2%;">
			<img src="../images/iot-unique-characteristics.png" width="98%">
		</div> -->
	</div>
	<div class="col-xs-12 margin-top-20 text-center">
		<span class="btn btn-warning opacity00" id="restart">Restart</span>
	</div>
</div>
</body>

<script type="text/javascript">
$(document).ready(function() {
	IotCcharacteristicsReady();
});



</script>
</html>