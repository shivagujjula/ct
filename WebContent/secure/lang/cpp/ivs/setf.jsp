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
<script src="/secure/lang/cpp/js-min/setff.min.js" type="text/javascript"></script>
<title>Understanding setf()</title>
</head>
<style>
.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	padding: 2px 0;
	text-align: center;
}
.margin-top {
	margin-top: 20px;
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

.introjs-nextbutton, #extraButton {
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
	min-height: 250px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 9999999;
}
.padding0 {
	padding: 0px;
}

#startBtn {
	margin-top: 10px;
}

#in, .input-char {
	width: 170px;
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
.green {
	color: green;
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
	color:red;
}
#formula  {
	border: 1px solid papayawhip;
	background-color: black;
	width: 300px;
	color: white;
}
#ios,#octa {
	color: green;
}
#symbl {
	color: red;
}
.user-btn {
	background-color: green;
}

#e1,#e2 {
	padding: 10px;
}

.z-index , .z-index1 {
	z-index: 9999999;
	background: white;
}
.greenn {
	color: #d0289d;
	font-weight: bold;
	padding : 10px;
}
.array {
	color: #4ec028;
	font-weight: bold;
} 
.td-css {
	border: 2px solid gray;
	background-color: #defadc;
}
.violet {
	color : #ad08ad;
}
.green {
	color : green;
}
.red {
	color : #af0a0a;
}
.pink {
	color : deeppink;
}
y {
	color: yellow;
	font-weight: bold;
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
.margin-top-1 {
	margin-top: 1%;
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
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Understanding setf()</span>
		</h3>
	</div>
	<div class='col-xs-12 margin-top-1'>
			<div class="col-xs-8 col-xs-offset-2 opacity00 "id="informationDiv" style='margin-top:10px;'>
				<div class='col-xs-12'>
					<span class="opacity00" id="infotext"><ul><li>We can use the <span class="color-b-green">setf()</span> function to configure formatting for the <span class="color-b-green">cout</span> object.</li><li>
					We pass the <span class="color-b-green">setf()</span> function arguments made up of ios_base class constants such as 
					<span class="color-b-green">ios_base::boolalpha</span> to display bool values as true or false instead of <span class="color-b-green">1 or 0</span>, and 
					<span class="color-b-green">ios_base::showpoint</span> to show a trailing decimal point.</li>
						<a class="introjs-button user-button" id="nextButton">Next&#8594;</a></ul>
					</span>
				</div>
			</div>
		</div>
		<div class="col-xs-12 " style='margin-top: 10px;'>
			<div class="col-xs-5">
				<pre class="creamPreTab4 opacity00" id="preBody">
<span id="declaration"><span class="violet">#include</span> <span class="pink">&lt;iostream&gt;</span></span>
<span class="red">using namespace</span> std;
<span class="green">int</span> <span id='line1'>main()</span> {
	<span id='line2'>cout.width(<span id="symbl">10</span>);</span>
	<span id='line3'>cout.fill(<span id="symbl">'*'</span>);</span>
	<span id="line4">cout.setf<span id="ios">(ios::left, ios::adjustfield)</span>;</span>
	<span id='line5'>cout &lt;&lt; <span id="code">"<span id="data1">Y</span><span id="data2">a</span><span id="data3">m</span><span id="data4">u</span><span id="data5">n</span><span id="data6">a</span>";</span></span>
	<span id='line6'>cout.precision(<span id="symbl">3</span>);</span>
	<span id='line7'>cout.setf<span id="ios">(ios::internal, ios::adjustfield)</span>;</span>
	<span id='line8'>cout.setf<span id="ios">(ios::scientific, ios::floatfield)</span>;</span>
	<span id='line9'>cout.width(<span id="symbl">15</span>);</span>
	<span id='line10'>cout &lt;&lt; <span id="code">"<span id="value1">-</span><span id="value2">8</span><span id="value3">9</span><span id="value4">.</span><span id="value5">1</span><span id="value6">2</span><span id="value7">3</span><span id="value8">4</span><span id="value9">5</span>";</span></span>
	<span id='line11'>cout.width(<span id="symbl">2</span>);</span>
	<span id='line12'>cout << <span id="number" class="pink"><span id="val1">1</span><span id="val2">0</span></span> << "\n"</span>;
	<span id='line13'>cout.setf<span id="ios">(ios::oct, ios::basefield)</span>;</span>
	<span id='line14'>cout << <span id="numbr" class="pink">10</span> << "\n"</span>;
<span id='line15'>}</span>
				</pre>
			</div>
			<div class="col-xs-7">
			<div class="address-box  col-xs-12 opacity00" id="addressBox">
		  		<div class="col-xs-12" id="animationBox">
		  			<table id="tableId" class="table opacity00" style="margin-top: -1px;">
						<tbody>
							<tr class="text-center">
						       <!--  <td class=""></td> -->
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
					      <tr id="tableRowId" class="">
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="c1">Y</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="c2">a</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="c3">m</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="c4">u</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="c5">n</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="c6">a</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn star opacity00">*</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn star opacity00">*</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn star opacity00">*</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn star opacity00">*</span></td>
					      	</tr>
						</tbody>
		  			</table>
		  			 <table id="tableId1" class="table opacity00" style="margin-top: -1px;">
						
						<tbody>
							<tr class="table  text-center">
						       <!--  <td class=""></td> -->
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
					      <tr id="tableRowId1" class="">
						     	<td class="td-css table-bordered text-center"><span id ="negative"class="greenn opacity00">-</span></td>
						        <td class="td-css table-bordered text-center"><span class="starr greenn opacity00">*</span></td>
						        <td class="td-css table-bordered text-center"><span class="starr greenn opacity00">*</span></td>
						        <td class="td-css table-bordered text-center"><span class="starr greenn opacity00" >*</span></td>
						        <td class="td-css table-bordered text-center"><span class="starr greenn opacity00">*</span></td>
						        <td class="td-css table-bordered text-center"><span class="starr greenn opacity00">*</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="d1">8</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="d2">.</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="d3">9</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="d4">1</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="d5">2</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="d6">e</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="d7">+</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="d8">0</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="d9">1</span></td>
					      	</tr>
						</tbody>
		  			</table> 
		  			 <table id="tableId2" class="table1 col-xs-offset-5 col-xs-1 opacity00" style="margin-top: -1px;">
						<tbody>
							<tr class="table  text-center">
						       <!--  <td class=""></td> -->
						        <td class="array border-top-none text-center">0</td>
						        <td class="array border-top-none text-center">1</td>
						        </tr>
					  
					      <tr id="tableRowId2" class="">
					       <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="e1">1</span></td>
						        <td class="td-css table-bordered text-center"><span class="greenn opacity00" id="e2">0</span></td>
						        </tr>
						</tbody>
		  			</table> 
				</div>
			</div>
			<div class="col-xs-12" style="margin-top: 20px;" id="calculation">
	  			<span id="octa" class="col-xs-offset-5 col-xs-3 text-center bg-color-tan1 z-index1 opacity00"><span id='valueOne'  style="position: relative;" class="opacity00">1</span><span class="opacity00"  style="position: relative;" id="valueTwo">2</span></span>
	  		</div>
			<div class='col-xs-12' style='margin-top: 20px; margin-bottom: 20px'>
				<div class="z-index col-xs-3 col-xs-offset-5 opacity00" id="calculationBox">
				<table class='text-center bg-color-tan' style="width: 98%; " align= 'center'>
					<tr>
						<td id="eight" class=" greenn opacity00">8</td>
						<td id="close" class="greenn opacity00">)</td>
						<td id ="tenth" class="greenn opacity00" style="position: relative;">10</td>
						<td id="open" class="greenn opacity00">(</td>
						<td id='quotient' class="greenn opacity00">1</td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td id="eight1" class="greenn opacity00">8</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td id="two" class="greenn opacity00">2</td>
						<td></td>
						<td></td>
					</tr>
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
