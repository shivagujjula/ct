<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Access-specifiers</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

 <script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/secure/lang/cpp/js-min/asp.min.js"></script>    

<style>
.warning-color {
	color: red;
}
#box4 {
	top: 8px;
}
.input-char {
	width: 125px;
	background-color: #fefefe;
	color: #260681 !important;
	border: 2px #0b0ebf solid;
}

.ui-effects-transfer {
	border: 2px dashed red;
	z-index: 99999999 !important;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs.tooltiptext>span {
	display: inline-block;
}

.introjs-tooltip {
	min-width: 280px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.user-btn {
	background-color: green;
}

.margin-top-20 {
	margin-top: 20px;
}

.ct-code-b-green {
	font-family: monospace;
	font-weight: bold;
	color: green;
}

#informationDiv {
	border: 2px solid gray;
	border-radius: 5px;
	margin-top: 20px;
	height: 285px;
}

#boxParent2 {
	margin-top: 5px;
}

#boxParent {
	margin-top: 5px;
}

#boxParent3 {
	margin-top: 5px;
}

.user-button {
	background-color: green;
}

.creamPreTab4 {
	tab-size: 4;
	padding: 10px;
	-moz-tab-size: 4;
	border-radius: 8px;
	font-family: monospace;
	background-color: #fffae6;
}

.box-border1 {
	border: 1px solid grey;
	border-radius: 5px;
	height: 40px;
	width: 45px;
	margin-left: 10px;
}

.box-border3 {
	border: 1px solid grey;
	border-radius: 5px;
	height: 40px;
	width: 45px;
}

.box-border {
	border: 1px solid grey;
	border-radius: 8px;
	height: 260px;
	width: 310px;
}

.box-border2 {
	border: 1px solid grey;
	border-radius: 8px;
	height: 100px;
	margin-bottom: 20px;
}

.padding00 {
	padding: 0px;
}

#startBtn {
	margin-top: 10px;
}

span {
	position: relative;
}

.output-console-title-bar {
	padding: 2px 0;
	text-align: center;
}

#value1 {
	font-weight: 700px;
}

.output-console {
	margin-left: 400px;
}

.output-console-body {
	/* background-color: black; */
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	padding: 5px;
	white-space: nowrap;
	height: 196px;
}

#err {
	display: block;
	padding: 9px;
	margin: 0 0 10px;
	font-size: 13px;
	line-height: 1.42857143;
	color: #f4f4f4;
	font-family: monospace;
	word-break: break-all;
	word-wrap: break-word;
	background-color: ffffff;
}

.note-color {
	color: cyan;
}

.blink-in-console {
	animation: blink 1.5s linear 3;
	/* -webkit-animation: blink 1s linear infinite; */
}

@
-webkit-keyframes blink { 0% {
	background: black;
}

30
.3 % {
	background: #f28192;
}

50
.2 % {
	background: #CC0000;
}

80
.5 % {
	background: #f28192;
}

100
.0 % {
	background: pink;
}

}
#outputDiv {
	margin-top: 20px;
	padding: 0;
	z-index: 9999999;
}

.position {
	display: inline-block;
	position: relative;
}

[contenteditable="true"] {
	font-weight: normal;
	outline: medium none;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
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

#outputBody {
	width: 410px;
}

.border {
	border: 1px solid white;
	background: white;
	color: black;
}
</style>

</head>
<body>
	<div class ="text-center margin-top-20">
		<h3 class="label ct-demo-heading" id="demoTitle">Access specifiers</h3>
	</div>
	<div class="col-xs-12 text-center margin-top-20">
		<span class="btn btn-warning btn-sm hide opacity00" id="restart">Restart</span>
	</div> 
	<div class="margin-top-20" >
		<div class="col-xs-8 col-xs-offset-2 opacity00" id="informationDiv" style="border: 1px solid gray;">
			<div class="col-xs-12 margin-top-20">
				<ul>
					<li id="li" class="opacity00"><span>In C++, there are three <span class="ct-code-b-green">access specifiers</span> 
							available for accessing data members and member functions of a class. They are<br></span>
						<ul>
							<li id="ul1" class="ct-code-b-green opacity00">private</li>
							<li id="ul2" class="ct-code-b-green opacity00">public</li>
							<li id="ul3" class="ct-code-b-green opacity00">protected</li>
						</ul>
					</li>	
					<li id="li2" class="opacity00">The default (if any access specifier is not specified) access 
						specifier for data members and member functions in a class is <span class="ct-code-b-green">private</span>.</li>
						<a class="introjs-button user-button opacity00" id="nextButton1">Next&rarr;</a>
					<li id="li3" class="opacity00">The keyword <span class="ct-code-b-green">public</span> 
						access specifier is used for accessing  of member functions and data members directly 
						through object from outside of that class.</li>
					<li id="li4" class="opacity00">The keyword <span class="ct-code-b-green">private</span> hides the 
						accessing of data members and member functions from the outside world. <span class="ct-code-b-green">i.e</span>, 
						it implements one of the OOPs concept called <span class="ct-code-b-green">data hiding</span>.</li>
					<li id="li5" class="opacity00">The keyword <span class="ct-code-b-green">protected</span> 
						access specifier is used for the accessing  of member functions and 
						data members of a class in its derived child class.</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-20">
		<div class="col-xs-4 margin-top-20 ">
			<!-- <div class="col-xs-12"> -->
			<pre class="creamPreTab4 opacity00" id="preBody">
<span id="total"><span id="delaration">#include &lt;iostream&gt;</span>
using namespace std;
<span id="class" class="opacity00"><b class="ct-code-b-green">class</b> <b class="ct-blue-color">Area</b> {
	<span id="private"><span id="variable">int len;</span>
	<span id="method1">int sqr(int num) {
		return num * num;		
	}</span></span>
};</span>

<span id="main" class="opacity00">int main() {
	<span id="object1"><b class="ct-blue-color">Area</b> <b class ='warning-color'>obj1</b>;</span>
	<span id="funcCall"><b class ='warning-color'>obj1</b>.sqr(20);</span>
	return 0;
<span id="end">}</span></span>  
</span>	
</pre>

<pre class="creamPreTab4 hide" id="preBody1">
#include &lt;iostream&gt;
using namespace std;
<span id="class1" class="opacity00"><b class ='ct-code-b-green'>class</b> <b class ='ct-blue-color'>Area</b> {
  <span id="private1" class="opacity00"><b class ='warning-color'>private</b> :
	<span id="variable2">int <span  id="var1">len</span>, <span id="bred">bred</span>;</span>
    <span id="read1">void read() {
 		<span id="console1">cout << "Enter length and breadth : "</span>;
		<span id="console2">cin >> <span id="input1">len >> bred</span>;</span>
	}</span></span>
  <span id="public" class="opacity00"><b class ='warning-color'>public</b> :
	<span id="areaVar">int area</span>;
	<span id="multiply2">void rect() {
		<span><span id="read">read()</span></span>;	
		<span id="area">area = len * bred</span>;
		<span id="console3">cout << "The area of rectangle is : "</span>;
		<span id="console4">cout << <span id="console5">area</span> << endl</span>;
	}</span></span>
};</span>

<span id="main1" class="opacity00">int main() {
	<span id="obj2"><b class="ct-blue-color">Area</b> <b class ='warning-color'>obj</b>;</span>
	<span id="funcCall2"><b class ='warning-color'>obj</b>.rect();</span>
	return 0;
<span id="end1">}</span></span>	
</pre>
			<!-- </div> -->
		</div>
		<div class="col-xs-4 margin-top-20" >
			<div class="col-xs-12">
				<div class="col-xs-12  box-border opacity00" id="animationBox" >
					<div class="col-xs-12 margin-top-20">
						<div id="s1" class="col-xs-4 col-xs-offset-4 opacity00">
							<b style="color : maroon;  margin-left:20%;">obj1</b>
						</div>
	   				</div>
					<div class="col-xs-12 margin-top-20">
						<div class="col-xs-6 col-xs-offset-3 box-border2 opacity00" id="borderBox">
							<div class="col-xs-12">
								<div id="total1">
									<div id="one" class="text-center opacity00">
										<b style="color : maroon;">len</b>
										<div class="box-border1 text-center opacity00" id="boxParent">
											<span id="box" class="arrayValue position text-center">
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
		<div class="col-xs-12">
			<div class="col-xs-12 hide box-border"  id="animationBox2">
				<div class="col-xs-12 margin-top-20">
					<div id="s2" class="col-xs-4 col-xs-offset-4 opacity00">
						<b style="color : maroon;  margin-left:25%;">obj</b>
					</div>
	   			</div>
				<div class="col-xs-12">
					<div class="col-xs-8 box-border2 col-xs-offset-2 opacity00" id="borderBox1">
						<div class="col-xs-6">
							<div id="three" class="text-center opacity00"><b style="color : maroon">len</b>
								<div class="box-border3 text-center opacity00" id="boxParent2">
									<div id="box2" style="top: 8px;"class="text-center position arrayValue1"></div>
								</div>
							</div>
						</div>
						<div class="col-xs-6"> 
							<div id="four" class="text-center opacity00"><b style="color : maroon">bred</b>
								<div class="box-border3 text-center opacity00" id="boxParent3">
									<div style="top: 8px;" id="box3" class="arrayValue1 text-center position">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12">
					<div id="five" class="text-center opacity00"><b style="color : maroon">area</b>
						<div class="box-border1 text-center opacity00" style="margin-left : 102px;" id="boxParent4">
							<div id="box4" class="text-center position arrayValue2"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-4 margin-top-20">
		<div class=" opacity00" id="outputBody" >
			<div class="output-console-title-bar">
				<span>Output</span>
			</div>
			<div class="output-console-body " id="outDiv" >
			</div>
		</div>
	</div>
	</div>
	
<script>
	$(document).ready(function() {
		accessSpecifier();
	});
</script>
</body>
