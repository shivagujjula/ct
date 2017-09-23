<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<script src='/secure/lang/iot/js-min/aoi.min.js'></script>

<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/secure/lang/iot/css/font-awesome.css">
<title>Architecture of IoT</title>
<style type="text/css">
.margin-top-2 {
	margin-top: 2%;
}

.margin-top-1 {
	margin-top: 1%;
}

.border {
	border: 1px solid blue;
	padding: 12px;
}

.parallelogram {
	position: relative;
	height: 75px;
	/* width: 500px; */
	margin: 20px 62px;
	-webkit-transform: skew(-36deg);
	-moz-transform: skew(-36deg);
	-o-transform: skew(-36deg);
	display: inline-block;
	border: 1px solid gray;
	font-family: verdana;
	box-shadow: 0 1px 2px 0 grey;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(0, 141, 255, 0.85) 12%, rgba(0, 115, 255, 0.21) 78%);
}
.transform-text {
	display: inline-block;
	transform: skew(28deg);
	/* font-family: verdana; */
}

/* .sensor-img {
	-ms-transform: rotate(90deg);
	-webkit-transform: rotate(90deg);
	transform: rotate(90deg);
} */
.font-size30 {
	font-size: 30px;
}

.fa-wifi:before {
  content: "\f1eb";
}

.span-text {
	font-size: 19px;
	font-weight: bold;
	color: black;
}

.panel-heading {
	padding: 0px 0px 4px 0px;
	font-weight: bold;
	font-family: monospace;
	color: navy;
	font-size: 15px;
}
.padding0 {
	padding: 0;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	display: none;
	marker-end: url("#arrowEnd");
	position: relative;
	stroke: gray;
	stroke-width: 3; 
}

.popover {
	z-index: 9999999;
	width: 400px;
}

.popover-content {
    background-color: #003399;
    color: white;
    min-height: 30px;
    letter-spacing: 1px;
}

.popover-height {
	height: 20px;
}

.custom-btn {
	background-color: green;
	float: right;
	margin: 0 !important;
}

.z-index {
	z-index: 9999999;
	position: relative;
	background-color: white;
	/* padding: 4px;
	border-radius: 4px; */
}

.info-div {
	border: 1px solid green;
}
</style>

</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Architecture of IoT</span>
		</h3>
	</div>
	<div class="col-xs-6 col-xs-offset-3 margin-top-2 info-div opacity00" id="infoDiv">
		<div class="col-xs-12 text-center" style="padding: 2px 18px;" id="mainDiv">
			<div class="col-xs-10 col-xs-offset-1 border parallelogram padding0 opacity00" id="applicationLayerId">
				<div id="applicationLayerSpanTextDiv" class="opacity00">
					<span class="transform-text panel-heading" id="applicationLayerSpanText">Application Layer</span>
				</div>
				<div class="col-xs-3 opacity00" id="desktopSymbol">
					<i class="fa fa-desktop transform-text font-size30" aria-hidden="true"></i>
				</div>
				<div class="col-xs-3 opacity00" id="graphSymbol">
					<i class="fa fa-line-chart transform-text font-size30" aria-hidden="true"></i>
				</div>
				<div class="col-xs-3 opacity00" id="userSymbol">
					<i class="fa fa-users transform-text font-size30" aria-hidden="true"></i>
				</div>
				<div class="col-xs-3 opacity00" id="meterSymbol">
					<img src="../images/meter.png" width="30%" class="transform-text">
				</div>
			</div>
			
			<div class="col-xs-10 col-xs-offset-1 border parallelogram padding0 opacity00" id="dataStorageLayerId">
				<div id="dataStorageLayerSpanTextDiv" class="opacity00">
					<span class="transform-text panel-heading" id="dataStorageLayerSpanText">Data Storage & Analytics</span>
				</div>
				<div class="col-xs-4 opacity00" id="databaseSymbol">
					<i class="fa fa-database transform-text font-size30" aria-hidden="true"></i>
				</div>
				<div class="col-xs-4 opacity00" id="cloudSymbol">
					<i class="fa fa-cloud transform-text font-size30" aria-hidden="true"></i>
				</div>
				<div class="col-xs-2 col-xs-offset-1 opacity00" id="hadoopSymbol">
					<img src="../images/hadoop-symbol.png" width="60%" class="transform-text">
				</div>
			</div>
			<div class="col-xs-10 col-xs-offset-1 border parallelogram padding0 opacity00" id="connectivityLayerId">
				<div id="connectivityLayerSpanTextDiv" class="opacity00">
					<span class="transform-text panel-heading" id="connectivityLayerSpanText">Connectivity Layer</span>
				</div>
				<div class="col-xs-4 opacity00" id="wifiSymbol">
					<i class="fa fa-wifi transform-text font-size30" aria-hidden="true"></i>
				</div>
				<div class="col-xs-4 opacity00" id="zigbeeSymbol">
					<img src="../images/zigbee-symbol.png" width="35%" class="transform-text">
				</div>
				<div class="col-xs-3 opacity00" id="gsmSymbol">
					<img src="../images/RadioTower.png" width="30%" class="transform-text">
				</div>
				<div class="col-xs-1"></div>
			</div>
			
			<div class="col-xs-10 col-xs-offset-1 border parallelogram padding0 opacity00" id="communicationLayerId">
				<div id="communicationLayerSpanTextDiv" class="opacity00">
					<span class="transform-text panel-heading" id="communicationLayerSpanText">Communication Layer</span>
				</div>
				<div class="col-xs-4 opacity00" id="tcpSymbol">
					<span class="transform-text span-text">tcp/ip</span>
				</div>
				<div class="col-xs-4 opacity00" id="httpSymbol">
					<span class="transform-text span-text">http</span>
				</div>
				<div class="col-xs-4 opacity00" id="mqttSymbol">
					<span class="transform-text span-text">mqtt</span>
				</div>
			</div>
			
			<div class="col-xs-10 col-xs-offset-1 border parallelogram padding0 opacity00" id="deviceLayerId">
				<div id="deviceLayerSpanTextDiv" class="">
					<span class="transform-text panel-heading" id="deviceLayerSpanText">Device Layer</span>
				</div>
				<div class="col-xs-2 opacity00" id="arduinoSymbol">
					<img src="../images/arduino-symbol-new.png" width="50%;" class="transform-text">
				</div>
				<div class="col-xs-2 opacity00" id="raspberryPISymbol">
					<img src="../images/raspberry-pi-symbol.png" width="50%;" class="transform-text">
				</div>
				<div class="col-xs-2 opacity00" id="carSymbol">
					<i class="fa fa-car transform-text font-size30"></i>
				</div>
				<div class="col-xs-2 opacity00" id="mobileSymbol">
					<i class="fa fa-mobile transform-text font-size30"></i>
				</div>
				<div class="col-xs-2 opacity00" id="sensorSymbol">
					<img src="../images/sensor-symbol.png" width="50%;" class="transform-text">
				</div>
				<div class="col-xs-2"></div>
			</div>
			
		</div>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-2" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
	ArchitectureOfIotReady();
});

</script>
</html>