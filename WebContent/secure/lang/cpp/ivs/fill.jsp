<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<link rel="stylesheet" href="/css/jquery-ui.css">
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link href="/css/introjs.css" rel="stylesheet">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/animate.css" />
<script src="/secure/lang/cpp/js-min/fill.min.js" type="text/javascript"></script>
<title>Understanding fill()</title>
</head>
<style>
.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
 	/* margin-top: 20px;  */
	padding: 2px 0;
	text-align: center;
}
.margin-top {
	margin-top: 20px;
}
.creamPreTab4 {
	tab-size: 4;
	margin: 2px;
	padding: 12px;
	-moz-tab-size: 4;
	border-radius: 8px;
	font-family: monospace; 
	background-color: #e5eecc;
}
.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	height: 100px;
	overflow: auto;
	padding: 10px;
	white-space: inherit;
}

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs.tooltiptext > span{
	display: inline-block;
}

.introjs-tooltip {
	min-width: 280px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-prevbutton, .introjs-nextbutton, .introjs-skipbutton {
	border-radius: 3px !important;
}

.introjs-prevbutton {
	background-color: #5bc0de !important;
}

.introjs-nextbutton {
	background-color: green !important;
}

.introjs-skipbutton {
	margin-right: 15px !important;
	background-color: orange !important;
}

.ct-pink-color {
	font-family: monospace;
	color: #ed138e;
	outline: none;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.ct-code-b-blue {
	font-family: monospace;
	font-weight: bold;
	color: blue;
}

.ct-code-b-yellow {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

.ct-code-b-brown {
	font-family: monospace;
	font-weight: bold;
	color: brown;
}

.ct-code-b-green {
	font-family: monospace;
	font-weight: bold;
	color: green;
}

#typewritingId {
	height: 167px; 
}

.blink {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
	100% { opacity: 0.0; }
}

.address-box {
	border: 1px solid lightgray;
	border-radius: 4px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 9999999;
}

/* .creamPreTab4 {
	height: 167px;
} */

.padding0 {
	padding: 0px;
}

#startBtn {
	margin-top: 10px;
}

#in, .input-char {
	width: 170px;
 /* padding: 8px; */
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}

.base-address {
	font-size: 12px;
    height: 37px;
    margin-left: 39px;
    margin-top: -15px;
    padding: 2px;
    width: 40px;
}
#informationDiv {
	border: 2px solid gray;
    border-radius: 6px;
}
.greenn {
	color: #d0289d;
	font-weight: bold;
}
.array {
	color: #4ec028;
	font-weight: bold;
} 
.td-css {
	border: 2px solid gray;
	background-color: #defadc;
}
.tdata {
	border-top: medium none;
	color: purple;
	width: 86px;
}
#nextButton {
	background-color: green ;
}
.border-top-none {
	border-top: none !important; 
}
#tableRowId {
	border: 2px solid gray;
}
#tableRowId1 {
	border: 2px solid gray;
}
.color-b-green {
	color: green;
	font-weight: bold;
}
#code {
	color: green;
}
#formula  {
	width: 300px;
  	color: #a21717;
  	font-weight: bold;
  	font-size: 15px;
}
.user-btn {
	background-color: green;
}
#symbl {
	color: red;
}
.violet {
	color : #ad08ad;
}
.green {
	color : green;
}
.red {
	color : red;
}
.pink {
	color : deeppink;
} y {
	color : yellow;
	font-weight: bold;
}
.blinking-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 3s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-orange { 
	50% {
		border-color: white;
		background: #edd73e;
	}
}
</style>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Understanding fill()</span>
		</h3>
	</div>
<div class='col-xs-12' style='margin-top: 15px;'>
		<div class="col-xs-8 col-xs-offset-2 opacity00"id="informationDiv" >
			<span class="opacity00" id="infotext"><ul><li>The C++ function <span class="color-b-green">
				std::array::fill()</span> sets given value to all elements of array.</li><li>
				Following is the declaration for  <span class="color-b-green">std::array::fill() </span>function form <span class="color-b-green">std::array header.</span>
				<div id="formula" class="text-center">void fill(const value_type &val);</div>
				<a class="introjs-button user-button" id="nextButton">Next&#8594;</a></li></ul>
			</span>
		</div>
	</div>
<div class="col-xs-12 " style='margin-top: 10px;'>
		<div class="col-xs-5">
			<pre class="creamPreTab4 opacity00" id="preBody">
<span id="total"><span id="declaration"><span class="violet">#include</span> <span class="pink">&lt;iostream&gt;</span></span>
<span class="red">using namespace</span> std;
int <span id='line1'>main()</span> {
	 <span id='line2'>cout.width(<span class="pink">15</span>);</span>
	 <span id= 'line3'>cout.fill(<span class="pink">'*'</span>);</span>
	 <span id='line4'>cout  &lt;&lt;<span id="code">"<span id="data1">C</span><span id="data2">h</span><span id="data3">a</span><span id="data4">m</span><span id="data5">p</span><span id="data6">i</span><span id="data7">o</span><span id="data8">n</span><span id="data9">s</span>";</span></span>
	 <span id='line5'>cout.width(<span class="pink">10</span>);</span>
	 <span id='line6'>cout.fill(<span class="pink">'*'</span>);</span>
	 <span id='line7'>cout  &lt;&lt; </b><span id="code">"<span id="value1">S</span><span id="value2">t</span><span id="value3">r</span><span id="value4">i</span><span id="value5">n</span><span id="value6">g</span>";</span></span>
 <span id='line8'>}</span></span>
			</pre>
		</div>
		<div class="col-xs-7">
			<div class="address-box opacity00 col-xs-12" id="addressBox">
		  		<div class="col-xs-12" id="animationBox" style="margin-top: 10px;">
		  			<table id="tableId" class="table opacity00" >
						<tbody>
							<tr class="text-center">
						        <td class="array border-top-none text-center">0</td>
						        <td class="array border-top-none text-center">1</td>
						        <td class="array border-top-none text-center">2</td>
						        <td class="array border-top-none text-center">3</td>
						        <td class="array border-top-none text-center">4</td>
						        <td class="array border-top-none text-center">5</td>
						        <td class="array border-top-none text-center">6</td>
						        <td class="array border-top-none text-center">7</td>
						        <td class="array border-top-none text-center">8</td>
						        <td class="array border-top-none text-center">9</td>
						        <td class="array border-top-none text-center">10</td>
						        <td class="array border-top-none text-center">11</td>
						        <td class="array border-top-none text-center">12</td>
						        <td class="array border-top-none text-center">13</td>
						        <td class="array border-top-none text-center">14</td>
							</tr>
					     	 <tr id="tableRowId" class="">
						     	<td class="td-css table-bordered text-center"><span class="greenn star opacity00">*</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn star opacity00">*</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn star opacity00">*</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn star opacity00">*</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn star opacity00">*</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn star opacity00">*</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="c1">C</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="c2">h</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="c3">a</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="c4">m</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="c5">p</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="c6">i</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="c7">o</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="c8">n</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="c9">s</span></td>
					      	</tr>
						</tbody>
		  			</table>
		  			 <table id="tableId1" class="table opacity00" style="margin-top: 10px;">
						<tbody>
							<tr class="table  text-center">
						        <td class="array border-top-none text-center">0</td>
						        <td class="array border-top-none text-center">1</td>
						        <td class="array border-top-none text-center">2</td>
						        <td class="array border-top-none text-center">3</td>
						        <td class="array border-top-none text-center">4</td>
						        <td class="array border-top-none text-center">5</td>
						        <td class="array border-top-none text-center">6</td>
						        <td class="array border-top-none text-center">7</td>
						        <td class="array border-top-none text-center">8</td>
						        <td class="array border-top-none text-center">9</td>
							</tr>
					      <tr id="tableRowId1" class="">
						     	<td class="td-css table-bordered text-center"><span class="greenn starr opacity00">*</span></td>
						     	<td class="td-css table-bordered text-center"><span class="greenn starr opacity00">*</span></td>
						     	<td class="td-css table-bordered text-center"><span class="greenn starr opacity00">*</span></td>
						     	<td class="td-css table-bordered text-center"><span class="greenn starr opacity00">*</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="d1">S</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="d2">t</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="d3">r</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="d4">i</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="d5">n</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="d6">g</span></td>
					      	</tr>
						</tbody>
		  			</table> 
				</div>
			</div>
		</div>
	</div>
	<div class="margin-top-20 col-xs-12 text-center">
		<span class="col-xs-6 col-xs-offset-3">
	 		<span class="col-xs-12">
	 			<span class="col-xs-8 col-xs-offset-2">
	 				<span class="col-xs-12" id="button" style=''>
						<span class="btn btn-warning opacity00" id="closeBtn">Close <i class="fa fa-close"></i></span>&nbsp;&nbsp;
						<span class="btn btn-restart opacity00" id="restartBtn">Restart <i class="fa fa-refresh"></i></span>
					</span>
				</span>
			</span>
		</span>
	</div>
</div>
<script>
	$(document).ready(function() {
		readPrintStringUsingGetsPutsReady();
	});
</script>
</body>
</html>
