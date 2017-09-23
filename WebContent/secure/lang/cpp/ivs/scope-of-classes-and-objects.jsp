<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>scope of classes and objects</title>
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
<script type="text/javascript"
	src="/secure/lang/cpp/js-min/socao.min.js"></script>
<style>
.margin-top-20 {
	margin-top: 20px;
}

.margin-top-60 {
	margin-top: 60px;
}

#totalDiv {
	border: 1px solid gray;
	border-radius: 8px;
	min-height: 230px;
	padding: 10px;
	font-family: monospace;
}

.classCode {
	border: 1px solid gray;
	border-radius: 5px;
	min-height: 230px;
	padding-left: 50px;;
	font-family: monospace;
	width: 410px;
	-moz-tab-size: 3;
	background-color: lightyellow;
	tab-size: 3;
	font-size: 14px;
	color: #333;
}

.classCode1 {
	border: 1px solid gray;
	border-radius: 5px;
	min-height: 230px;
	padding: 20px;
	font-family: monospace;
	width: 410px;
	-moz-tab-size: 3;
	background-color: lightyellow;
	tab-size: 3;
	font-size: 14px;
	color: #333;
}

.user-button {
	background-color: green;
}
/* .infoText1 {
	border: 1px solid gray;
	border-radius: 5px;
	min-height: 220px;
	padding: 1px;
	font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
	background-color: lightYellow;
	tab-size: 3;
	font-size: 15px;
	color: #333;
	width: 800px;
} */
#informationDiv {
	border: 1px solid gray;
	border-radius: 5px;
	margin-top: 20px;
	height: 170px;
	font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	background-color: lightYellow;
	tab-size: 3;
	font-size: 15px;
}

.ct-red-color {
	color: red;
}

.ct-green-color {
	color: green;
}

.ct-yellow-color {
	color: yellow;
}

.margin-top-40 {
	margin-top: 40px;
}

.margin-top-120 {
	margin-top: 120px;
}

.margin-top-10 {
	margin-top: 10px;
}

#outputDiv {
	margin-top: 20px;
	padding: 0;
	z-index: 9999999;
	width: 370px;
}

.ui-effects-transfer {
	border: 2px dashed blue;
	z-index: 99999999 !important;
}

.output-console-title-bar {
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	background-color: gray;
	width: 370px;
}

.rect-css {
	stroke-width: 1;
	stroke: black;
}

.box-border {
	border: 1px solid grey;
	border-radius: 8px;
	height: 240px;
	width: 320px;
}

.box-border2 {
	border: 1px solid grey;
	border-radius: 8px;
	height: 115px;
	width: 130px;
}

.box-border1 {
	border: 1px solid grey;
	border-radius: 5px;
	padding: 8px;
	height: 45px;
	width: 45px;
	margin-left: 25px;
	bottom: 39px;
	margin-top: 5px;
}

.box-border3 {
	border: 1px solid grey;
	border-radius: 5px;
	margin: 8px;
	height: 40px;
	width: 40px;
}

.box-border4 {
	border: 1px solid grey;
	border-radius: 8px;
	height: 90px;
	width: 90px;
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

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}
</style>

</head>
<body>
	<div class="text-center margin-top-20">
		<h4 class="label ct-demo-heading" id="demoTitle">Scope of Classes
			and Objects</h4>
	</div>
	<div class="margin-top-20">
		<div
			class="col-xs-8 col-xs-offset-2 margin-top-20 introjs-showElement opacity00"
			id="informationDiv" style="border: 1px solid gray;">
			<div class="col-xs-12 margin-top-10">
				<ul>
					<li id="li1" class="margin-top-10 opacity00">A <b
						class="ct-green-color">class</b> which is declared outside of all
						functions in a program is called <b class="ct-green-color">global
							class</b>.
					</li>
					<a class="introjs-button user-button opacity00" id='nextButton'>Next&#8594;</a>
					<li id="li2" class="margin-top-10 opacity00">An <b
						class="ct-green-color">object</b> is said to be <b
						class="ct-green-color">global object</b>, when the object is
						declared outside of all functions.
					</li>
					<a class="introjs-button user-button opacity00" id='nextButton'>Next&#8594;</a>
					<li id="li3" class="margin-top-10 opacity00">A <b
						class="ct-green-color">class</b> which is declared within a
						function is said to be <b class="ct-green-color">local class</b>.
					</li>
					<a class="introjs-button user-button opacity00" id='nextButton'>Next&#8594;</a>
					<li id="li4" class="margin-top-10 opacity00">An <b
						class="ct-green-color">object</b> is a said to be <b
						class="ct-green-color">local object</b>, when the object is
						declared within the function declaration.
					</li>
					<a class="introjs-button user-button opacity00" id='nextButton'>Next&#8594;</a>
				</ul>
			</div>
		</div>
	</div>
	<div class="margin-top-20">
		<div class="col-xs-12">
			<div class="col-xs-4 margin-top-20">
				<pre class="classCode opacity00" id="code">#include &lt;iostream&gt;
using namespace std;
<span id="Outer"><b class='ct-green-color'>class</b> <b
						class='ct-blue-color'>Outer</b> {
	 <span>public :</span>
		 <span id="variable">int id;</span>
};</span>
<span id="object1"><b class='ct-blue-color'>Outer</b> <b
						class='ct-red-color'>out</b></span>;
<span id="func2">void display() {
	 <span id="objVal2"><b class='ct-red-color'>out</b>.id = <span
							id="value2">502</span>;</span>
  	 <span id="cout2">cout << <b class='ct-red-color'>out</b>.id << endl;</span>	 
}</span>
<span id="main">int main() {
    <span id="objVal1"><b class='ct-red-color'>out</b>.id = <span
							id="value1">501</span>;</span>
  	 <span id="cout1">cout << <b class='ct-red-color'>out</b>.id << endl;</span>
  	 <span id="func1">display();</span>
  	 <span id="cout4">cout << <b class='ct-red-color'>out</b>.id << endl;</span>	 
}</span>
</pre>
				<pre class="classCode1 hide" id="code1">#include &lt;iostream&gt;
using namespace std;
<span id="Outer"><b class='ct-green-color'>class</b> <b
						class='ct-blue-color'>Outer</b> {
		<span>public :</span>
		   <span id="variable2">int id;</span>
};</span>
<span id="main1">int main() {
	 <span id="Inner"><b class='ct-green-color'>class</b> <b
							class='ct-blue-color'>Inner</b> {
		<span>public :</span>
		   <span id="variable1">int age;</span>
	 };</span>   
    <span id="object2"><b class='ct-blue-color'>Inner</b> <b
							class='ct-red-color'>inn</b></span>;
 	 <span id="object3"><b class='ct-blue-color'>Outer</b> <b
							class='ct-red-color'>out</b></span>;
    <span id="objVal3"><b class='ct-red-color'>inn</b>.age =  <span
							id="value3">36</span>;</span>
 	 <span id="objVal4"><b class='ct-red-color'>out</b>.id =  <span
							id="value4">401</span>;</span>
 	 <span id="cout3">cout << <b class='ct-red-color'>inn</b>.age  << endl;</span>
	 <span id="cout5">cout << <b class='ct-red-color'>out</b>.id  << endl;</span>  
}</span>
</pre>
			</div>
			<div class="col-xs-4 margin-top-20">
				<div
					class="col-xs-8 col-xs-offset-2 margin-top-20 box-border opacity00"
					id="animationBox">
					<div class="col-xs-12 margin-top-20">
						<div id="s1" class="col-xs-2 col-xs-offset-5 opacity00">
							<b style="color: maroon;">out</b>
						</div>
					</div>
					<div class="col-xs-12">
						<div class="col-xs-6 col-xs-offset-3 box-border2 opacity00"
							id="borderBox">

							<div id="one" class="text-center margin-top-20 opacity00">
								<b style="color: maroon;">id</b>
								<div class="box-border1 text-center opacity00" id="boxParent">
									<span id="box" class="text-center"> </span>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div class="col-xs-8 col-xs-offset-2 hide margin-top-20 box-border"
					id="animationBox2">
					<div class="col-xs-6">
						<div id="s2"
							class="col-xs-6 col-xs-offset-3 opacity00 margin-top-20 ">
							<b style="color: maroon;">inn</b>
						</div>
						<div class="col-xs-12 margin-top-20">
							<div class="col-xs-8 box-border4 opacity00" id="borderBox1">

								<div id="three" class="text-center opacity00 ">
									<b style="color: maroon">age</b>
									<div class="box-border3 text-center opacity00" id="boxParent2">
										<span id="box2" class="text-center"></span>
									</div>
								</div>

							</div>
						</div>
					</div>
					<div class="col-xs-6">
						<div id="s3"
							class="col-xs-6 col-xs-offset-3 margin-top-20 opacity00 ">
							<b style="color: maroon; margin-left: 20px;">out</b>
						</div>
						<div class="col-xs-12 margin-top-20">
							<div class="col-xs-8  col-xs-offset-2 opacity00 box-border4"
								id="borderBox2">

								<div id="four" class="text-center opacity00">
									<b style="color: maroon">id</b>
									<div class="box-border3 text-center opacity00" id="boxParent3">
										<span id="box3" class="text-center"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-4 margin-top-20">
				<div id="outputDiv" class="opacity00">
					<div class="output-console-title-bar">
						<span class="title">Output</span>
					</div>
					<div id="outputBody" class="output-console-body"
						class="col-xs-offset-1 col-xs-5"></div>
				</div>

			</div>

		</div>
	</div>
	<div class="col-xs-12 text-center margin-top-20">
		<span class="btn btn-warning btn-sm opacity00" id="restart">Restart</span>
	</div>

</body>
<script>
	$(document).ready(function() {
		scopeClass();
	});
</script>
</html>