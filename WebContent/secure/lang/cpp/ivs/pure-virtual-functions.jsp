<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>pure virtual functions</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/cpp/js-min/pvf.min.js"></script> 
<style>
.z-index {
z-index: 99999999 !important; 
} 
.margin-top-20 {
	margin-top: 20px;
}
pre {
	white-space: pre-wrap;
}
.display-inline-block {
	display: inline-block;
}
.ui-effects-transfer {
    border: 2px dashed red;
    z-index: 99999999 !important;
 }
  
#informationDiv {
	background-color: lightyellow;
	height: 105px;
	line-height: 1.42857143;
	font-size: 15px;
	font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.classCode {
	border: 1px solid gray;
    border-radius: 5px;
    min-height: 230px;
    padding: 15px 0px 0px 15px;
    font-family: monospace;
  	min-width: 365px;
    -moz-tab-size: 3;
    background-color: lightyellow;
    tab-size: 3;
    font-size: 13px;
    color: #333;
}
.box-border {
       width: 382px;
    height: 220px;
    border: 1px solid rebeccapurple;
    border-radius: 4px;
}
.ct-green-color {
	color : green;
}
.ct-red-color {
	color : red;
}
.ct-yellow-color {
	color : yellow;
}
.user-button {
	background-color: green;
}
.output-console-title-bar {
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	background-color: gray;
	   width: 377px; 
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 9999999;
	
}

.svg-line {
	marker-end: url("#arrowEnd1");
	opacity : 0;
	
	position: relative;
	stroke: grey;
	stroke-width: 2; 
}
.blinking {
	animation-name: blink;
	animation-duration: 0.8s;
	animation-iteration-count: 3;
}

@keyframes blink {
	50% {
		background: #da5805;
	}
}

.box-border1 {
	border: 1px solid grey;
    border-radius: 8px;
    height:60px;
    width: 60px;"
}
.box-border2 {
	border: 1px solid grey;
    border-radius: 8px;
    height:133px;
    width: 142px;
}
.box-border3 { 
	border: 1px solid gray;
    height: 50px;
    width: 120px;
    margin-top: 10px;
    border-radius: 6px;
    background-color: rgb(225, 243, 244);
}
.box-border4 { 
	border: 1px solid gray;
    height: 50px;
    width: 110px;
    margin-top: 20px;
    border-radius: 6px;
}

.ui-effects-transfer {
	border: 2px dashed blue;
    z-index: 99999999 !important;
  }
  
.output-console-body {
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	font-size: 13px;
	height: 210px;
	padding: 10px;
	width: 377px; 
	white-space: inherit;
}
.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important; 
}

</style>

</head>
<body>
<div class="text-center margin-top-20">
	<h3 class="label ct-demo-heading" id="title">Pure Virtual Functions</h3>
</div>
<div class="margin-top-20">
	<div class="col-xs-12">
		<div class="col-xs-8 col-xs-offset-2 margin-top-20 opacity00" id="informationDiv" style='border: 1px solid gray;'>
			<ul>
				<li id="li1" class="opacity00">A <b>pure virtual function</b> is a virtual function specified with
					  an empty definition with in the base class and that has its implementation
					  in the derived class.</li><!-- <a class="introjs-button user-button opacity00" id='nextButton'>Next&#8594;</a> -->
			<li id="li2"class="opacity00">The format of a <b>pure virtual function</b> 
				 	is : <b  class="ct-red-color">virtual</b> <b style="color: #40409c;">return_type</b> <b>function_name()</b> = <b>0</b>;</li>
			 		<a class="introjs-button user-button opacity00" id='nextButton1'>Next&#8594;</a>
			</ul>
		</div>
	</div>
</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-6  margin-top-20">
		<div class="col-xs-8 col-xs-offset-2">
		<pre class="classCode opacity00" id="code">
#include &lt;iostream&gt;
using namespace std;
<span class="opacity00" id="base">class Company {
  <span id="baseClass" class="opacity00">public :	
	  <span id="virtual"><b class="ct-red-color">virtual</b> void displayName() = 0;</span>
	  <span id="virtual2"><b class="ct-red-color">virtual</b> void displayLocation() = 0;</span></span> 
};</span>

<span id="derived" class="opacity00">class Employee : public Company {
   public :
     <span id = "funcdef">void displayName() {
	     <span id="cout1">cout << "CodeTantra" << endl;</span>	
	  }</span>
	  <span id="funcdef2">void displayLocation() {
	 	  <span id="cout2">cout << "Hyderabad" << endl;</span>	
	  }</span>
};</span>

<span id="main" class="opacity00">int main() {
	<span id="obj1">Company comp;</span>
	<span id="obj2">Company *obj;</span>
	<span id="emp">Employee emp;</span>
	<span id="objaddr">obj = &amp;emp;</span>
	<span id="display3"><span id="display">obj -&gt; displayName();</span>
	<span id="display2">obj -&gt; displayLocation();</span></span>
<span id="end">}</span></span>
		</pre>
	</div>
</div>
<div class="col-xs-6  margin-top-20">
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-12">
		<div class="col-xs-8 col-xs-offset-2 box-border opacity00" id="animationBox">
			<div class="col-xs-12 margin-top-20" id="objpointer">
	        	<div class="col-xs-6" id="pointer" style="  padding-top : 10px; margin-top : 20px;">
	        		<div id="s1" class="col-xs-6 col-xs-offset-3 opacity00"><b style="color : maroon; padding-left: 4px;">obj</b>
					</div>
	            	<div class="col-xs-6 col-xs-offset-3  opacity00 box-border1" id="box">
	           		 	<div class="ct-blue-color" style="margin-top : 18px;" ><b id="xValue"></b>
	           		 	</div>
	            	</div>
	              	 <div>
	              	 	<b class="col-xs-6 col-xs-offset-3 opacity00" id="addr" style="color : maroon;">1024
	              	 	</b>
	              	 </div>
	             </div>
	             <div class="col-xs-6" id="pointer2">
		             <div id="s2" class="col-xs-4 col-xs-offset-4 opacity00"><b style="color : maroon;">emp</b>
					</div>
		          	<div class="col-xs-6 box-border2 opacity00" style="padding-left: 10px; padding-right: 10px;"" id="box2">
		          	   	<div class="box-border3 text-center opacity00" id="box3" style="padding-top: 13px;">
		          	   		<b>displayName()</b>
		          	   	</div>
						<div class="box-border3 text-center opacity00" id="box4" style="padding-top: 13px;">
							<b>displayLocation()</b>
						</div>
		          	 </div>
		          	 <div><b class="col-xs-4 col-xs-offset-4 opacity00" id="addr2" style="color : maroon; margin-left : 45px;">2045
		          	 </b></div>
		          </div> 
	          </div>

	       
	        <svg class='svg-css' id='svg'>
	      		<marker id="arrowEnd1" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
					<path d="M0,0 L5,2.5 L0,5 Z"/>
				</marker>
				<line  class="svg-line" x1="35.7%" y1="46%" x2="53.5%" y2="46%"/>
			</svg> 
		</div>
	</div>
</div>
	<div class="col-xs-12 margin-top-20">
	<div class="col-xs-8 col-xs-offset-2">		
		<div id="outputDiv" class="opacity00">
			<div class="output-console-title-bar">
			<span>Output</span>
			</div>
			<div id="outputBody" class="output-console-body">
			</div>
			</div>
		</div>
	</div>
</div>
</div>	
<div class ="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>
<script>
	$(document).ready(function() {
		pureVirtualFunction();
	});
</script>
</body>
</html>
