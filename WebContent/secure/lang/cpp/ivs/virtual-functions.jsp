<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Virtual-functions in cpp</title>
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
<script src="/secure/lang/cpp/js-min/vfs.min.js"></script>   
<style>
.margin-top-20 {
	margin-top : 20px;
}
.ct-red-color {
	color : red;
}
.user-button, .nextBtn, .nextBtn1 {
    background-color: green !important;
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

.panel-default {
    border-color: #71315b;
}
.panel-default>.panel-heading {
    color: #0e0e0e;
    background-color: #05f13870;
    border-color: #8a8a8a;
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
	position: relative;
	marker-end: url("#arrowEnd1");
	opacity : 0;
	stroke: grey;
	stroke-width: 2; 
}
.z-index1000000 {
	position:relative;
	background-color:white;
	z-index:1000000 !important;
}
.z-index {
z-index: 99999999 !important; 
}
.ui-effects-transfer {
	border: 2px dashed blue;
    z-index: 99999999 !important;
}
.introjs-tooltip {
	min-width: 200px;
	max-width: 425px;
}
.output-console-title-bar {
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	background-color: gray;
	    width: 370px;
}
.output-console-body {
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	font-size: 13px;
	height: 210px;
	padding: 10px;
	width: 370px;
	white-space: inherit;
}
</style>
</head>
<body>
<div class="text-center margin-top-20">
	<h3 class="label ct-demo-heading" id="title">Virtual Functions</h3>
</div>
<div class="margin-top-20">
	<div class="col-xs-12">
		<div class="col-xs-8 col-xs-offset-2 margin-top-20 opacity00" id="informationDiv" style='border: 1px solid gray;'>
			<ul>
				<li id="li1" class="opacity00">The <b>virtual function</b> is a member function that is declared within base 
					  class and redefined in the derived class.</li>
				 <li id="li2" class="opacity00">The keyword <b>virtual</b> tells that the method is resolved <b>late</b>  and 
				 member function binding is done only at <b>runtime</b> according to the actual type of the object referred to the <b>pointer</b>.
			 		</li>	</ul><a class="introjs-button user-button opacity00" id='nextButton1'>Next&#8594;</a>
		</div>
	</div>
</div>
<div class="col-xs-12 margin-top-20">
	<div class="col-xs-6  margin-top-20">
		<div class="col-xs-10 col-xs-offset-1">
		<pre class="classCode opacity00" id="code">
#include &lt;iostream&gt;
using namespace std;
<span id="base" class="opacity00">class Base { 
	public:
		<span id="displayFunc"><span id="void">void</span> display() { 
			cout << "This is base class display()" << endl;
		}</span>
};</span>
<span id="derived" class="opacity00">class Derived : public Base {  
	public:
		<span id="displayFunc1">void display() {
			cout << "This is derived class display()" << endl;
		}</span>
};</span>
<span id="main" class="opacity00">int main() {
	<span id="pointObj">Base *p;</span> 
	<span id="pointObj1">Derived obj;</span>
	<span id="objaddr">p = &#38; obj;</span>
	<span id="funcCall">p -> display();</span>
}</span>
		</pre>
		</div>
	</div>
	
	<div class="col-xs-6 margin-top-20">
		<div class="col-xs-12 margin-top-20">
			<div class="col-xs-8 col-xs-offset-2 box-border opacity00" id="animationBox">
					<div class="col-xs-12 margin-top-20" id="objpointer">
						<div class="col-xs-6">
						<div class="col-xs-12 " id="pointer" style="  padding-top : 10px; margin-top : 20px;">
							<div class="panel panel-default opacity00" id="box"  style="width: 100px;height: 100px;">
  								  <div class="panel-heading text-center"><b>p</b></div>
    								<div class="panel-body text-center" style="height:70px;"><b id="xValue"></b></div>
  							</div>
  							
  							 <div>
	              	 			<b class="col-xs-8 col-xs-offset-2  opacity00" id="addr" style="color : maroon;">2027
	              	 			</b>
	              			 </div></div>
						</div>
						<div class="col-xs-6">
						<div class="col-xs-12"  id="pointer2"   style="padding-top : 10px; padding-left: 5px; margin-top : 20px;">
						<div class="panel panel-default  opacity00" id="box2" style="width: 120px;height: 110px;">
  								  <div class="panel-heading text-center"><b>obj</b></div>
  								  <div class="panel-body text-center" style="height:70px;">
  								  <div class="col-xs-12" id="borderLine" style="border-top: 1px solid rgb(147, 74, 157); margin-top: 20px; opacity: 1;"></div>
  								  <div id="func2" class=" opacity00 margin-top-20">void display()</div>
  								  </div>
  							</div>
  							<div>
	              	 			<b class="col-xs-6 col-xs-offset-3  opacity00" id="addr2" style="color : maroon;">1024
	              	 			</b>
	              			 </div>
  							</div>
						</div>
						</div>
						 <svg class='svg-css' id='svg'>
	      		<marker id="arrowEnd1" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
					<path d="M0,0 L5,2.5 L0,5 Z"/>
				</marker>
				<line class="svg-line" x1="42%" y1="50%" x2="57%" y2="50%"></line>
			</svg> 
				</div>
		</div>
		<div class="col-xs-12">
		<div class="col-xs-8 col-xs-offset-2 margin-top-20">	
		<div id="outputDiv" class="opacity00">
			<div class="output-console-title-bar">
			<span>Output</span>
			</div>
			<div id="outputBody" class="output-console-body">
			</div>
		</div>
		</div></div>
	</div>
</div>
<div class ="col-xs-12 text-center margin-top-20">
	<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
</div>

<script>
	$(document).ready(function() {
		virtualFunction();
	});
</script>
</body>
</html>
