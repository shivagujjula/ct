<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/jquery-ui.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link href="/css/introjs.css" rel="stylesheet">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/animate.css" />
<script src="/secure/lang/cpp/js-min/sdm.min.js"></script>
<title>Static-Data-Members</title>
<style>
#informationDiv {
	border : 2px solid gray;
	border-radius : 5px;
	background-color : ;
}
.margin-top {
	margin-top: 20px;
}
.margin-top3 {
	margin-top: 30px;
}
.color-green {
	color: green;
	font-weight: bold;
}
.user-button {
	background-color: green;
}
.creamPreTab4 {
	tab-size: 4;
	margin: 2px;
	padding: 12px;
	-moz-tab-size: 4;
	border-radius: 8px;
	font-family: monospace;
	background-color: #fffae6;
}
.paddin0 {
	padding: 0;
}
.box-border {
	border: 2px solid #e4dfdf;
	border-radius: 8px;
	min-height : 230px;
}
.box-border1 {
	border: 1px solid #98ea8a;
	padding : 8px;
	min-height : 30px;
	border-top: 0px;
}

.box-border2 {
	border: 1px solid #836e8a;
	border-radius: 8px;
	min-height : 140px;
	margin-left: 10px;
}
.cupvalue {
	position: absolute;
	color: black;
	margin-top: 6px;
    margin-left: 15px;
}
.margin-top1 {
	margin-top: 30px;
}
.ui-effects-transfer {
    border: 2px dashed blue;
    z-index: 99999999 !important;
 }
  
.z-index1000000 {
	position:relative;
	background-color:white;
	z-index:1000000 !important;
}
.z-index10000000 {
	position: absolute;
	background-color: white;
	z-index: 1000000 !important;
}
.output-console-body {
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	padding: 10px;
	white-space: nowrap;
	min-height: 250px;
}
.position {
	display: inline-block;
	position: relative;
}

 [contenteditable="true"] {
 	display: inline;
	font-weight: normal;
	outline: medium none;
	
} 
.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 1000000;
}

.output-value-circle {
	background: cyan;
	color: black;
}
#inputChar {
	width: 15px;
}
#inputChar1 {
	width: 15px;
}
.border {
	border: 1px solid white;
	background : #acf5a9;
	color: black;
	border-radius:8px;
}
.user-btn {
	background-color: green;
}
.error-text {
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
}
.display {
	display: inline-block;
}
.managerBox {
	background: #aceaa6 none repeat scroll 0 0;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	text-align: center;
	font-family: monospace;
}
.margin-top3 {
	margin-top: 30px;
}
.padding {
	padding : 0px;
}
.panel-primary>.panel-heading {
	 color: #fff;
	 background-color: #845e90;
	 border: 0px;
	 font-weight: bold;
 }
 .panel-body {
 	padding: 30px;
 	margin-bottom: 20px;
	padding-top: 8px;
 }
 y {
 	color : yellow;
 	font-weight: bold;
 }
 .output-console-title-bar {
  background-color: #8e8989;
  text-align: center;
}
.ui-effectss-transfer {
    border: 2px solid blue;
    z-index: 99999999 !important;
    border-radius: 8px;
 }
 .circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 1000000;
}
#totalCup {
	margin-left: 25px;
	margin-top: 30px;
}
.input-char {
	color: #2dfb47;
}
</style>
</head>
<body>
<div class="col-xs-12">
	<div class="col-xs-12 text-center">
		<div class="col-xs-6 col-xs-offset-3">
			<h3><span id="titleName" class="ct-demo-heading label">Static Data Members</span></h3>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-8 col-xs-offset-2 opacity00" id="informationDiv" style='margin-top: 5px;'>
			<span class="" id="infoText"><ul><li>A data member of the class can also be specified as 
			<span class='color-green'>static</span>.</li><li>It is initialised to <span class='color-green'>zero</span> when the first 
			object of its <span class='color-green'>class</span> is created, no other initialisation is permitted.</li>
			<li>Only one copy of that member is created for the entire class and is shared by all the
			objects of that class, no matter how many objects are created.</li>
			<li>It is <span class='color-green'>visible</span> only with in the <span class='color-green'>class</span> but its life time is entire program.</li>
			<a class="introjs-button user-button" id="nextButton">Next&rarr;</a></ul></span>
		</div>
	</div>
	<div class="col-xs-12 body-div paddin0">
		<div class="col-xs-5 margin-top padding0">
			<pre class="creamPreTab4 opacity00" id="preBody">
 <div class ="display" id="total"><div class ="display" id="declaration"><div class="violet display">#include</div> <div class="pink display">&lt;iostream&gt;</div></div>
<div class="red display">using namespace</div> std;
<div class ="display" id="class"><div class="red display">class</div> Student {
  <div class ="display" id="variables"><div class="green display">int</div> <div class ="display" id="first">maths</div>, <div class ="display" id="second">physics</div>;</div>
  <div class ="display" id="count"><div id="static" class="green display">static int</div> count;</div>
  <div class ="display" id="method"><div class="red display">public</div>: <div class="green display">void</div> getdata() {
   <div class ="display" id="cout">cout << <div id="textEnter" class="pink display">"Enter two subjects marks : "</div>;</div>
   <div class ="display" id="cin">cin >>  <div class ="display" id="enterVal">maths >> physics;</div></div>
   <div class ="display" id="count1">count++;</div>
}</div>
  <div class ="display" id="method1"><div class="green display">void</div> getcount() {
   <div class ="display" id="cout1">cout << <div id="textEnter1" class="pink display">"The given two subjects marks are : "</div>;<br><div class ="display" id="element">cout << maths <<<div class="pink display"> " "</div> << physics </div><< endl;</div>
   <div class ="display" id="cout2">cout << <div id="textEnter2" class="pink display">"Students count is : "</div> << <div class="display" id="count4">count</div> << endl;</div>
}</div>
};</div>
<div class ="display" id="int"><div class="green display">int</div> Student :: count;</div>
<div class ="display" id="main">main() {
  <div class ="display" id="object">Student <div id="paraMeter1" class="green display">s1</div>, <div id="paraMeter2" class="green display">s2</div>;</div>
  <div class ="display" id="data">s1.getdata();</div>
  <div class ="display" id="data1">s2.getdata();</div>
  <div class ="display" id="count2">s1.getcount();</div>
  <div class ="display" id="count3">s2.getcount();</div>
 <div class ="display" id='mainClose'>}</div>
</div>
</div>
			</pre>
		</div>
		<div class= "col-xs-7 margin-top">
			<div class="col-xs-12 margin-top box-border opacity00" id="animationBox">
				<div class="col-xs-12">
					<div class="col-xs-5  box-border2 panel panel-primary  padding margin-top opacity00" id="borderBox">
						<div class="panel-heading text-center" id="s1">S1</div>
						<div class="col-xs-12 panel-body">
							<div class="col-xs-6 " id="total1">
								<div id="one" class="text-center opacity00 margin-top3">
									<div class ="managerBox"style="color : #565454;">maths</div>
									<div class="box-border1 text-center opacity00" id="boxParent"><span class="arrayValue text-center position" id="box"></span></div>
								</div>
							</div>
							<div class="col-xs-6" >
								<div id="two" class="text-center opacity00 margin-top3">
									<div class="managerBox" style="color: #565454;">physics</div>
									<div class="box-border1 text-center opacity00" id="boxParent1"><span class="arrayValue text-center position" id="box1"></span></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-5 box-border2 padding panel panel-primary opacity00 margin-top" id="borderBox1">
						<div class="panel-heading text-center" id="s2">S2</div>
						<div class="col-xs-12 panel-body">
							<div class="col-xs-6 " id="total2">
								<div id="three" class="text-center opacity00 margin-top3"><div class ="managerBox"style="color : #565454;">maths</div>
								<div id="boxParent2" class="text-center box-border1 opacity00"><span id="box2" class="arrayValue1 text-center position "></span></div></div>
							</div>
							<div class="col-xs-6">
								<div id="four" class="text-center opacity00 margin-top3"><div class="managerBox" style="color: #565454;">physics</div>
								<div id="boxParent3" class="text-center box-border1 opacity00"><span id="box3" class="arrayValue1 text-center position"></span></div></div>
							</div>
						</div>
					</div>
					<div class="col-xs-1 text-center " id="totalCup">
						<div class="col-x-12 padding00 opacity00" id="countBox" style=" margin-top: 40px;">
							<span id="countCupValue" class="cupvalue"></span>
							<i class="fa fa-coffee fa-3x count-cup" style="color: #86d878;"></i><br>
							<span id="countCupVariable" class = "ct-code-b-black">count</span>
						</div>
					</div>
				</div>
			</div>
			<div class="output-console col-xs-12 margin-top padding00 opacity00" id='outputBox'>
				<div class="output-console-title-bar ">
					<span>Output</span>
				</div>
				<div class="output-console-body " id="outputBody"></div>
			</div>
		</div>
	</div>
	<div><button type="button" class="col-sm-1 col-sm-offset-5 btn btn-warning opacity00" id="restartBtn" style="margin-top : 15px;">Restart</button></div>
</div>
<script>
	$(document).ready(function() {
		readPrintStringUsingGetsPutsReady();
	});
</script>
</body>
</html>