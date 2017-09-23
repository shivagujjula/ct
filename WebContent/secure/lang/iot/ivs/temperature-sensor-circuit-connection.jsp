<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Temperature sensor circuit connection</title>
  	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="/secure/lang/iot/css/slick.css">
	<link rel="stylesheet" type="text/css" href="/secure/lang/iot/css/slick-theme.css">
	<link rel="stylesheet" type="text/css" href="/secure/lang/iot/css/magnify.css">
	<link type="text/css" media="all" rel="stylesheet" href="/secure/lang/iot/css/zoomify.css"/>
	
	<script src="/js/jquery-latest.js"></script>
	<script src="/secure/lang/iot/css/js/slick.js" type="text/javascript" charset="utf-8"></script>
	<script src="/js/bootstrap.min.js"></script>
	<script src="/secure/lang/iot/css/js/jquery.magnify.js"></script>
	<script type="text/javascript"  src="/secure/lang/iot/css/js/zoomify.js"></script>
	<script src="/secure/lang/iot/js-min/tscc.min.js"></script>
<style type="text/css">

.border-slide {
	border: 3px solid #d3d3d3;
	text-align: center;
}

.slider {
   /*  width: 65%; */
   /*  margin: 100px auto; */
}

.slick-slide {
	margin: 0px 20px;
}

.slick-slide img {
	width: 100%;
}

.slick-prev:before,
.slick-next:before {
    color: white;
    font-size: 50px;
} 

.padding0 {
	padding: 0;
}

.width {
	/* width: 87%; */
}

.slick-slide {
	/* width: 1051px; */
	margin: 0 0px;
}

.border-padding {
	padding: 5px;
	background-color: #969090;
	border: 1px solid #ffffff;
	opacity: 0.4;
}

body {
	background: #a6a184;
}

.slider {
    margin: 15px auto;
    width: 68%;
}

.border-text {
	text-align: center;
	color: white;
	font-family: effra;
	background: #008080 none repeat;
	font-weight: bold;
}

.slick-center  {
	opacity: 1;
} 

.image-style {
	/* height:55%; */ 
	/*height:488px;*/
}

.image-style-bottom {
	/* width:100%; */
	height:100px;
}

.paragraph-text {
	text-align: center;
	background: #fefad7;
	border: 3px solid #d3d3d3;
}

.slick-prev {
    left: -57px;
}

.step-style-in-paragraph {
	background: teal;
	color: white;
	border-radius: 4px;
}

.paragraph-text-style {
	font-family: message-box;
    font-size: 14px;
}

.slick-prev, .slick-next {
	height: 50px;
	width: 50px;
}

.slick-next {
    right: -57px;
}

legend {
	text-align: center;
}

button {
    padding: 3px 6px;
}

button img {
    vertical-align: middle;
}

</style>
</head>
<script type="text/javascript">

$(document).on('ready', function() {
	temparatureSensorCicuitReady();
});


</script>

<body>
	<!-- <button id='button'>Click me</button> -->
	<!-- <button type="button" onclick="zoomIn()">Zoom In<img src="../images/zoom-in.png"> </button>
         <button type="button" onclick="zoomOut()">Zoom Out<img src="../images/zoom-out.png"> </button> -->
   <!--  <img src="/secure/lang/iot/images/chapter6/step17.png" id="sky" alt="Cloudy Sky"> -->

<section id="features" class="blue">
<div>
	<div class="top-box-slide slider width" id='circuitConnectionsDiv'></div>
	<div class="bottom-slides slider " id='slideImagesDiv'></div>
</div>
</section>

</body>
</html>