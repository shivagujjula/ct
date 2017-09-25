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
<script src="/secure/lang/cpp/js/function-with-templates.js"></script>
<!-- <script src="/secure/lang/cpp/js-min/fwt.min.js"></script> -->
<title>Function With Templates</title>
<style type="text/css">
#informationDiv {
	border: 2px solid gray;
	border-radius: 5px;
}
.margin-top {
	margin-top: 20px;
}
.margin-topp {
	margin-top: 100px;
}
.margin-top1 {
	margin-top: 100px;
}
g, r, y ,p{
	font-weight: bold;
}
g {
	color: green;
}
r {
	color: red;
}
y {
	color: yellow;
}
y1 {
	color: yellow;
}
o {
	color: #ab33a0;
	font-weight: bold;
    font-size: 16px;
}
k {
	color: rgba(236, 24, 89, 0.75);
	font-weight: bold;
    font-size: 16px;
}
#class {
	border: 1px solid gray;
	background-color: black;
	color: white;
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
	background-color: #e5eecc;
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
.output-console-title-bar {
	background-color: #8e8989;
	text-align: center;
}
.display {
	display: inline-block;
}
.box-border {
	border: 2px solid #dcd9d9;
	border-radius: 8px;
	min-height : 300px;
	padding-left : 10px;
	padding-right : 10px;
}
.box-border1 {
	border: 1px solid #8fd8cc ;
	padding : 10px;
	height : 40px;
	border-top: 0px;
}
.box-border2 {
	border: 1px solid #d2d189;
	padding : 10px;
	height : 40px;
	border-top: 0px;
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
	min-height: 100px;
}
.position {
	position: relative;
}
.ui-effects-transfer {
    border: 2px dashed blue;
    z-index: 99999999 !important;
 }
  .ui-effectss-transfer {
    border: 2px dashed blue;
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
.z-index1000000 {
	position:relative;
	background-color:white;
	z-index:1000000 !important;
}
.border {
	border: 2px solid #ccefd0;
	background : #bdf3a5;
	color: black;
	border-radius: 8px;
}
.managerBox {
	background: #8ddcd0 none repeat scroll 0 0;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	font-family: monospace;
	text-align: center;
}
.managerBox1 {
	background: #d2d189 none repeat scroll 0 0;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	font-family: monospace;
	text-align: center;
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
		background: orange;
	}
}
</style>
</head>
<body>
<div class="col-xs-12">
	<div class="col-xs-12 text-center padding">
		<h3 id="title"><span class='ct-demo-heading label'>Function with Templates</span></h3>
	</div>
	<div class="col-xs-12 ">
		<div class="col-xs-10 col-xs-offset-1" id="informationDiv" style=' margin-top: 5px;'>
			<span id="infoText" class=''><ul><li><g>Templates</g> are used to avoid the duplication of the
			 code in the prohram whenever we are performing same operation with different data types.</li>
			 <li><g>Overloaded</g> function are normally used to perform similar operations on different
			  types of data but they have to the redefined for each datatype.</li>
			  <li>Therefore by reducing the <g>duplication</g> of the code the programmer writes a <g>single
			  function template</g> defination based on the argument types provided <g>explicity</g> or 
			  <g>inferred</g> from calls to the function <g>template</g>, the compiler generate
			  separate object code function to handle each data type of call approxmately.</li>
			  <li>The general format for defining a function <g>template</g> is
			  <span id="class">Template &lt;class T&gt;</span>.</li>
			  <a class="introjs-button user-button" id="nextButton">Next&rarr;</a></ul></span>
		</div>
	</div>
	<div class="col-xs-12 " style='margin-top: 10px;'>
		<div class="col-xs-5">
			<pre class="creamPreTab4 opacity00" id="preBody">
<span id="declaration"><span class="violet">#include</span> <span class="pink">&lt;iostream&gt;</span></span>
<span class="red">using namespace</span> std;
   <div id="method1" class="display"><div class="display" ><div class="green display">void</div> show (<div class="display">int</div> num1) {</div>
   <div id="cout1" class="display">cout << <div id="enterText1" class="display pink">"Integer number is : "</div> << <div id="animateVal1" class="display">num1</div> << endl;</div>
}</div>
   <div id="method2" class="display"><div class="display" ><div class="green display">void</div> show (<div class="display">float</div> num2) {</div>
   <div id="cout2" class="display">cout << <div id="enterText2" class="display pink">"Float number is : "</div> << <div id="animateVal2" class="display">num2</div> << endl;</div>
}</div>
   <div id="method3" class="display"><div class="display" ><div class="green display">void</div> show (<div class="display">char</div> ch) {</div>
   <div id="cout3" class="display">cout << <div id="enterText3" class="display pink">"Character is : "</div> << <div id="animateVal3" class="display">ch</div> << endl;</div>
}</div>
<div id="main" class="display"><span class="green">int</span> main() {
   <div id="int1" class="display"><div class="green display">int</div> <div class="display" id ="aVal1">num1 = <span class="pink">10</span></div>;</div>
   <div id="float1" class="display"><div class="green display">float</div> <div class="display" id ="bVal1">num2 = <span class="pink">10.5</span></div>;</div>
   <div id="char1" class="display"><div class="green display">char</div> <div class="display" id ="cVal1">ch = <span class="pink">'R'</span></div>;</div>
   <div id="show1" class="display">show(num1);</div>
   <div id="show2" class="display">show(num2);</div>
   <div id="show3" class="display">show(ch);</div>
   <div id="return" class="display"><div class="red display">return</div> <span class="pink">0</span>;</div>
<span id="mainClose1">}</span></div>
			</pre>
			<pre class="creamPreTab4 opacity00" id="preBody1">
<span id="declaration1"><span class="violet">#include</span> <span class="pink">&lt;iostream&gt;</span></span>
<span class="red">using namespace</span> std;
   <div class="display" id="template"><span class="red">template</span> <div class="display" id="tempVal">&lt;<span class="red">class</span> T&gt;</div></div>
   <div id="method4" class="display position"><div class="display" id="void"><div class="green display">void</div> show (<div class="display">T</div> x) {</div>
   <div id="cout4" class="display">cout << <div id="enterText4" class="display pink">"The val is : "</div> << <div id="animateVal4" class="display">x</div> << endl;</div>
}</div>
<div id="main1" class="display"><span class="green">int</span> main() {
   <div id="int2" class="display"><div class="green display" id="int">int</div> <div class="display" id ="aVal2">num1 = <span class="pink">6</span></div>;</div>
   <div id="float2" class="display"><div class="green display" id="float">float</div> <div class="display" id ="bVal2">num2 = <span class="pink">7.9</span></div>;</div>
   <div id="char2" class="display"><div class="green display" id="char">char</div> <div class="display" id ="cVal2">ch = '<span class="pink">S</span>'</div>;</div>
   <div id="show4"  type="int" param="a" class="display">show(num1);</div>
   <div id="show5" type="float" param="b" class="display">show(num2);</div>
   <div id="show6" type="char" param="c" class="display">show(ch);</div>
   <div id="return1" class="display"><div class="red display">return</div> <span class="pink">0</span>;</div>
<span id="mainClose2">}</span></div>
			</pre>
		</div>
		<div class="col-xs-6">
			<div class="col-xs-12 margin-topp box-border opacity00" id="animationBox">
				<div class="col-xs-12">
					<div class="col-xs-3 margin-top text-center opacity00" id="aValue1">
						<div id="" class="text-center managerBox " style = "color : #4a4649; font-weight:bold;">num1</div>
						<div class="padding box-border1 " id="borderBox1"><span class="text-center" id="boxValue1"><k>10</k></span></div>
					</div>
					<div class="col-xs-3 col-xs-offset-1 margin-top text-center  opacity00" id="bValue1">
						<div class="text-center managerBox" style = "color : #4a4649; font-weight:bold;">num2</div>
						<div class="padding box-border1 " id="borderBox2"><span class="text-center" id="boxValue2"><k>10.5</k></span></div>
					</div>
					<div class="col-xs-3 col-xs-offset-1 margin-top text-center opacity00" id="cValue1" >
						<div class="text-center managerBox" style = "color : #4a4649; font-weight:bold;">ch</div>
						<div class="padding box-border1 " id="borderBox3"><span class="text-center" id="boxValue3"><k>R</k></span></div>
					</div>
				</div>
				<div class="col-xs-12">
					<div class="col-xs-3  margin-top1 text-center opacity00" id="aValue2">
						<div class="text-center managerBox1" style = "color : #58a905; font-weight:bold;">num1</div>
						<div class="padding box-border2 position" id="borderBox4"><span class="text-center" id="boxValue4"><o>6</o></span></div>
					</div>
					<div class="col-xs-3 col-xs-offset-1 margin-top1 text-center opacity00" id="bValue2">
						<div class="text-center managerBox1" style = "color: #58a905; font-weight:bold;">num2</div>
						<div class="padding box-border2" id="borderBox5"><span class="text-center" id="boxValue5"><o>7.9</o></span></div>
					</div>
					<div class="col-xs-3 col-xs-offset-1 margin-top1 text-center opacity00" id="cValue2">
						<div class="text-center managerBox1" style = "color: #58a905; font-weight:bold;">ch</div>
						<div class="padding box-border2" id="borderBox6"><span class="text-center" id="boxValue6"><o>S</o></span></div>
					</div>
				</div>
			</div>
			<div class="output-console col-xs-12 margin-top padding00 opacity00" id="outputBox">
				<div class="output-console-title-bar  text-center">
					<span>output</span>
				</div>
				<div class="output-console-body" id="outputBody"></div>
			</div>
		</div>
	</div>
	<div class="button col-xs-12 text-center " id="button">
		<span class="btn btn-success glyphicon glyphicon-refresh opacity00" id='restartBtn' style='margin-top: 4px'>Restart</span>
	</div>
</div>
<script type="text/javascript">
$(document).ready(function() {
	readPrintStringUsingGetsPutsReady();
});
</script>
</body>
</html>