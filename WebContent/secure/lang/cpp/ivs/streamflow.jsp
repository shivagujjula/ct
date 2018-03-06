
<!DOCTYPE html>
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
<script src="/secure/lang/cpp/js-min/strfl.min.js" type="text/javascript"></script>
<title>Stream Flow</title>
<style>
.margin-top {
	margin-top: 40px;
}

.margin-top1 {
	margin-top: 80px;
}

.margin-top2 {
	margin-top: 105px;
}
#dataFlow {

margin-top :30px;
}
#streamFlow {
	margin-top: 38px;
}
#outputDevice {
	margin-top:10px;
}
.ct-demo-heading {
	background: highlight none repeat scroll 0.0;
	border-radius: 10px;
	font-size: 20px;
	position: relative;
	z-index: 9999999;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}

input {
	border: none;
	background-color: transparent;
	font-family: Bitstream Vera Serif Bold, sans-serif;
}

#informationDiv {
	border: 2px solid gray;
    border-radius: 6px;
}

#totalDiv {
	border: 2px solid gray;
	height:450px;
}

.border-grey {
	border: 2px solid green;
	border-radius: 10px;
}

table, td {
	border: 2px solid green;
	border-radius: 10px;
}

.table>tbody>tr>td {
	border-top: none;
}

.developer-div {
	align-items: center;
	display: flex;
	justify-content: center;
	font-size: 20px;
}

.developer-div {
	width: 30%;
	text-align: center;
}

.user-button {
	background: green;
}

.color-b-yellow {
	color: yellow;
	font-weight: bold;
}

.errorText {
	color: red;
	font-weight: bold;
}



.svg-css {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
}

.svg-line {
	stroke: gray;
	stroke-width: 2;
	position: relative;
	z-index: 10000000 !important;
	marker-end: url("#arrowEnd");
}

.introjs-duplicate-nextbutton {
	background: green;
}

.ui-effects-transfer {
	border: 2px solid crimson;
	z-index: 99999999 !important;
}
.color-b-green {
	color : green;
	font-weight: bold;
}
g {
	color : green;
	font-weight: bold;
}
y {
	color : yellow;
	font-weight: bold;
}
.position {
	position: relative;
	display: inline-block;
}

.introjs-fixParent {
	position: relative !important;
}
.btn-success {
    background-color: #5cb85c;
    border-color: #4cae4c;
    color: #fff;
}
#data1,#data2,#data3,#data4,#data5,#data6 {
color: crimson;
}
#data7,#data8,#data9,#data10,#data11,#data12 {
color: crimson;
}

#customPopover {
	font-size: 14px;
}
.rect-css {
	stroke: gray;
	stroke-width: 2;
}
.blinking-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 2s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-orange { 
	50% {
		border-color: white;
		background: red;
	}
}
</style>

<script type="text/javascript">
	$(document).ready(function() {
		readPrintStringUsingGetsPutsReady();
	});
</script>
</head>
<body>
	<div class="col-xs-12 padding00">
		<div class="col-xs-12 text-center margin-top">
			<span id="title" class="label ct-demo-heading">Stream Flow</span>
		</div>
	</div>
	<div class='col-xs-12'>
		<div class="col-xs-8 col-xs-offset-2 opacity00 "id="informationDiv" style='margin-top:10px;'>
			<div class='col-xs-12'>
				<span class="opacity00" id="infotext"><ul><li><g>Stream</g> is <g>linear queue</g> that connects a file to the program and maintain 
				the flow of data in <g>both direction</g>.</li><li>Here the source is any file, <g>I/O device</g>, <g>Hard disk</g>, <g>CD/DVD</g> etc.</li>
				<li>Basically stream is of two types <li><span class="color-b-green">1.Text Stream 2.Binary stream</span></li></li>
				<li><span class="color-b-green">Text Stream :</span> It is a sequence of characters arranged in line and each
				 line terminated by a new line (unix).</li>
				 <li><span class="color-b-green">Binary Stream:</span> A <span class="color-b-green">binary stream</span> is a sequence of bytes.</li> 
					<a class="introjs-button user-button" id="nextButton">Next&#8594;</a></ul>
				</span>

			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-12" id="animationDiv">
			<div class="col-xs-10 col-xs-offset-1 margin-top padding00 opacity00"
				id="totalDiv">
				<div class='col-xs-12 margin-top'>
					<div class='col-xs-2  col-xs-offset-2 border-grey text-center' id=streamFlow>
					<span id="board" >Keyboard</span>
						<!-- <span id="c1" >0</span><span id="c2">1</span><span id="c3">0</span><span
							id="c4">1</span><span id="c5">0</span><span id="c6">1</span> -->
					</div>

					<div class='col-xs-2 col-xs-offset-2'>
						<div class='col-xs-12'>
							<table class='table text-center opacity00 ' id="dataFlow">
								<tr>
									<td><span id="data1" class=" value position opacity00">0</span></td>
									<td><span id="data2" class=" value position opacity00">1</span></td>
									<td><span id="data3" class="value position opacity00">1</span></td>
									<td><span id="data4" class="value position opacity00">0</span></td>
									<td><span id="data5" class="value position opacity00">0</span></td>
									<td><span id="data6" class="value position opacity00">1</span></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<div class='col-xs-12 margin-top1'>
					<div class='col-xs-1 col-xs-offset-10 border-grey text-center opacity00' id="program">
						<span id="program1">program</span>
						<span id="abc" class="opacity00"></span>
					</div>
				</div>
				<div class="col-xs-12 margin-top2">
					<div class="col-xs-2 col-xs-offset-2 border-grey text-center opacity00" id='outputDevice'>Output Device
					</div>
					<div class="col-xs-2 col-xs-offset-2">
						<div class="col-xs-12">
							<table class="text-center table opacity00" id='dataFlow1'>
								<tr>
									<td><span id="data7" class="flow position opacity00">1</span></td>
									<td><span id="data8" class="flow position opacity00">0</span></td>
									<td><span id="data9" class="flow position opacity00">0</span></td>
									<td><span id="data10" class="flow position opacity00">1</span></td>
									<td><span id="data11" class="flow position opacity00">1</span></td>
									<td><span id="data12" class="flow position opacity00">0</span></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				

				<svg class="svg-css" id="svgId">
					<marker style="fill: gray;" orient="auto" markerHeight="5"
					markerWidth="5" refY="2.5" refX="5" id="arrow">
					<path d="M0,0 L5,2.5 L0,5 Z" /></marker>
					<text id="text1" x="24%" y="9%" style="fill: navy; ">keyboard</text>
					<text x="57.5%" y="8%" id="text2" style="fill: navy;">Flow of Data</text>
					<text id="text3" x="79%" y="19%" style="fill: navy; display: inline;">&gt;&gt;</text>
					<text id="text4" x="74%" y="8%" style="fill: navy; display: inline;">Extraction Operator</text>
					<text id="text5" x="77.8%" y="84%" style="fill: navy; display: inline;">&lt;&lt;</text>
					<text id="text6" x="73.5%" y="96%" style="fill: navy; display: inline;">Insertion Opertaor</text>
					<text id="text7" x="79%" y="24%" style="fill: navy; display: inline;">cin</text>
					<text id="text8" x="77%" y="79%" style="fill: navy; display: inline;">cout</text>
					<line id="line1" class="svg-line lines" style="marker-end: url('#arrow');" y2="20%" x2="53%" y1="20%" x1="34.1%"/>
					<line id="line2" class="svg-line lines" x1="67.4%" y1="20%" x2="85.6%" y2="20%" style="marker-end: url('#arrow');"/>
					<line id="line3" class="svg-line lines" x1="85.5%" y1="20%" x2="85.5%" y2="47%" style="marker-end: url('#arrow'); display: inline;"/>
					<!-- <line id="line4" class="svg-line lines" x1="97%" y1="55%" x2="90%" y2="55%" style="marker-end: url(&quot;#arrow&quot;); display: inline;"/> -->
					<!-- <line id="line5" class="svg-line lines" x1="90%" y1="57%" x2="97%" y2="57%" style=""/> -->
					<line id="line6" class="svg-line lines" x1="85.5%" y1="52%" x2="85.5%" y2="81%" style="marker-end: url('#arrow');"/>
					<rect id="rect1" class="rect-css opacity00 " fill="lemonchiffon" height="26" width="80" ry="5" rx="5" y="77%" x="82.5%" style="stroke: gray;"/>
					<line id="line7" class="svg-line lines" x1="85.5%" y1="81%" x2="67.3%" y2="81%" style=" marker-end: url('#arrow');"/>
					<line id="line8" class="svg-line lines" x1="53%" y1="81%" x2="34%" y2="81%" style=" marker-end: url('#arrow');"/>
					<line id="line9" class="svg-line lines" x1="26%" y1="18%" x2="26%" y2="11%" style=" marker-end: url('#arrow');"/>
					<line id="line10" class="svg-line lines" x1="60%" y1="16%" x2="60%" y2="10%" style=" marker-end: url('#arrow');"/>
					<line id="line11" class="svg-line lines" x1="79.5%" y1="17%" x2="79.5%" y2="10%" style="marker-end: url('#arrow'); display: inline;"/>
					<line id="line12" class="svg-line lines" x1="78.5%" y1="85%" x2="78.5%" y2="91%" style="marker-end: url('#arrow'); display: inline;"/>
				</svg>
			</div>
		</div>
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

</body>
</html>
