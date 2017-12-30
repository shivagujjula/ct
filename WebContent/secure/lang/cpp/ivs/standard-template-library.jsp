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
<link href="/css/animate.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/cpp/js-min/stl.min.js"></script>

<title>STL CONTAINERS</title>

<style>

.introjs-tooltip {
	min-width: 400px;
	/* background-color: pink !important; */
	
}

.buttons-div {
	margin: 20px 0 10px;
	text-align: center;
}

.heading-css {
	margin: 20px 0 10px;
}

.box-css {
	 background-color: hsl(120, 100%, 31%) !important; 
	
	background-image: linear-gradient(#F9DC00, #AE9C0E);
	background-repeat: repeat-x;
	border-color: #009e00 #009e00 hsl(120, 100%, 26.5%);
	border-radius: 6px;
	color: #fff !important;
	display: inline;
	font-size: 16px;
	padding: 10px;
	position: relative;
	text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.29);
	z-index: 9999999;
}

.padding-col0 {
	padding: 0;
}

.padding10 {
	padding: 10px;
}

.creamPreTab4 {
	-moz-tab-size: 4;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 11px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
}

.margin-top100 {
	margin-top: 125px;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line-css {
	position: relative;
	stroke: gray;
	stroke-width: 2;
}

.svg-arrow-line {
	marker-end: url("#arrowEnd");
	display: none;
}

.ct-green-color {
	color: green;
	font-weight: bold;
}

.text-div {
	border-radius: 8px;
	margin-bottom: 10px;
	background: white;
	z-index: 9999999;
	position: relative;
}
.position {
 	position: relative;
  	display:inline-block;
   	margin: 0 0px;
 }

y {
	font-weight: bold;
	color: yellow;
}
ink {
	color: 	green;
}
g {
	color:red;
}
</style>
</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'><h1 class='label ct-demo-heading'>STL CONTAINERS</h1></div>
	<div class='buttons-div'>
		<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div>
		</div>
		<div class="col-xs-12">
		<div class="col-xs-12">
			<div class="col-xs-12 padding-col0 " id='animationDiv' style="font-family : monospace;">
				<div class='padding10 text-div' id='textDiv'>The <ink>Standard Template Library (STL)</ink> is a software library for the C++ programming language.<br>
				<ink>STL Containers </ink> are the part of the STL that provide storage for other objects. Containers are high level <ink>storage devices </ink> </div>
				<div class="col-xs-12">
					<div class='col-xs-12 padding-col0 text-center'>
						<div class="col-xs-12">
							<div class='position'><div class="box-css opacity00 " id='continerbox'>Container Classes</div></div>
						</div>
						<div class="col-xs-12 margin-top100 padding-col0 ">
							<div class='padding10 position'><div class="box-css opacity00 storage-class " id='bitset'>bitset</div></div>
							<div class='padding10 position'><div class="box-css opacity00 storage-class" id='dequeBox'>deque</div></div>
							<div class='padding10 position'><div class="box-css opacity00 storage-class" id='listBox'>list</div></div>
							<div class='padding10 position'><div class="box-css  opacity00 storage-class" id='mapBox'>map</div></div>
							<div class='padding10 position'><div class="box-css  opacity00 storage-class" id='multiBox'>multimap </div></div>
							<div class='padding10 position'><div class="box-css opacity00 storage-class" id='multisetBox'>multiset </div></div>
							<div class='padding10 position'><div class="box-css  opacity00 storage-class" id='prorityBox'>priority_queue </div></div>
							<div class='padding10 position'><div class="box-css opacity00  storage-class" id='queeBox'>quee </div></div>
							<div class='padding10 position'><div class="box-css opacity00 storage-class" id='setBox'>set </div></div>
							<div class='padding10 position'><div class="box-css opacity00 storage-class" id='stackBox'>stack </div></div>
							<div class='padding10 position'><div class="box-css   opacity00 storage-class" id='vectorBox'>vector </div></div>
						</div>
						<svg class='svg-css'>
							<marker style="fill: gray;" orient="auto" markerWidth="5" markerHeight="5" refX="0" refY="2.5" id="arrowEnd">
								<path d="M0,0 L5,2.5 L0,5 Z"/>
							</marker>
							<line class="svg-line-css svg-line1" x1="50.5%" y1="16.5%" x2="50.5%" y2="15%"/>
							<line class="svg-line-css svg-line2" x1="50%" y1="48%" x2="50%" y2="48%"/>
							<line class="svg-line-css svg-line2" x1="50%" y1="48%" x2="50%" y2="48%"/>
							<line y2="68%" x2="5%" y1="48.5%" x1="5%" class="svg-line-css svg-arrow-line"/>
							<line y2="68%" x2="14%" y1="48.5%" x1="14%" class="svg-line-css svg-arrow-line"/>
							<line y2="68%" x2="21%" y1="48.5%" x1="21%" class="svg-line-css svg-arrow-line"/>
							<line y2="68%" x2="28.5%" y1="48.5%" x1="28.5%" class="svg-line-css svg-arrow-line"/>
							<line y2="68%" x2="37%" y1="48.5%" x1="37%" class="svg-line-css svg-arrow-line"/>
							<line y2="68%" x2="47.5%" y1="48.5%" x1="47.5%" class="svg-line-css svg-arrow-line"/>
							<line y2="68%" x2="61%" y1="48.5%" x1="61%" class="svg-line-css svg-arrow-line"/>
							<line y2="68%" x2="72%" y1="48.5%" x1="72%" class="svg-line-css svg-arrow-line"/>
							<line y2="68%" x2="79%" y1="48.5%" x1="79%" class="svg-line-css svg-arrow-line"/>
							<line y2="68%" x2="86%" y1="48.5%" x1="86%" class="svg-line-css svg-arrow-line"/>
							<line y2="68%" x2="95%" y1="48.5%" x1="95%" class="svg-line-css svg-arrow-line"/>
							
							
								
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
<script>
	$(document).ready(function() {
		StlContainers();
	});
</script>
</body>
</html>
