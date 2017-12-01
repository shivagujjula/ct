<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/custom-styles.css" />

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/secure/lang/cpp/js-min/mli.min.js"></script>

<style type="text/css">

.border1px {
	border: 1px solid gray;
	border-radius: 2px;
	/* height: 530px;  */
}

.opacity00 {
	opacity: 0;
}

.zIndex {
	z-index: 9999999;
	background-color: white;
	position: relative;
}
.displayNone {
	display: none;
}

.panelBodyHeight {
	min-height: 120px;
}

.output-console-body {
	font-size: 11px;
	height: 160px; 
	padding: 5px 20px;
	white-space: normal;
}

.output-console-title-bar {
	background-color: graytext;
}

.padding00 {
	padding: 0;
}

#defination {
	height: 205px;
}

.marginTop {
	margin-top: 5px;
}

.displayInline {
	/* position: relative; */
	display: inline-block;
}

pre {
	tab-size: 2;
}

in {
	color: rgb(62, 50, 173);
}

ink {
	color: 	rgb(255, 0, 191)
}

go {
	color: rgb(134, 19, 19);
	font-weight: bold;
}

g {
	color: 	rgb(0, 204, 51);
	/* font-weight: bold; */
}

a:focus {
	outline: none;
}

y {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

e {
	/*font-family: monospace;*/
	font-weight: bold;
	color: #23527c;
}

.singleIn {
	border: 1px solid grey;
	margin: 30px;
	padding: 10px;
	background-color: lightblue;
} 

.output-console-body {
	font-size: 11px;
	height: 160px; 
	padding: 5px 20px;
	white-space: normal;
}

.vertical-align-middle {
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
}

#next {
	background-color: green !important;
    border-radius: 3px;
    color: white !important;
	border-radius: 3px !important;
	padding: 5px !important;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.svg-line {
	stroke: #f53f3f;
	stroke-width: 2;
}

/* .svg-marker-end {
	marker-end: url(".arrow");
}
 */
.lightGreen {
	background-color: lightgreen;
}

.ct-code-heading {
	background: highlight none repeat scroll 0 0;
	/* border-radius: 10px; */
	font-size: 13px;
}

.introjs-tooltip {
	min-width: 300px;
	max-width: 350px;
}

.margin-top-40 {
	margin-top: 40px;
}



</style>
</head>
<body>
	<h3 class="col-xs-12 text-center margin-top-20">
		<span class="label label-default ct-demo-heading" id="heading">Multilevel Inheritance</span>
	</h3>
<div class="col-xs-12 padding00">
	<div class="col-xs-offset-1 col-xs-10 marginTop">
		<div id="first" class="col-xs-12 boder1px oacity00">
			<div class="col-xs-12 " >
				<div id="description" class="col-xs-offset-2 col-xs-8 border1px marginTop opacity00" style="min-height:65px;">
					<div id="textDesc"></div>
				</div>
			</div>
			<div class="col-xs-12" style="margin-bottom: 4px;">
				<div class="col-xs-6">
					<div  id="inheritanceFlow" class="col-xs-12 border1px marginTop opacity00" style="height:520px;margin-top: 15px;">
						<div class="col-xs-12 text-center padding00" style="height:290px;">
							 <div id="flow3" class="col-xs-12 padding00 vertical-align-middle hide code">
								<svg class="svg-css">
									<marker id="flow3Marker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #f53f3f;">
				               			<path d="M0,0 L5,2.5 L0,5 Z"/>
				           			</marker>
									
									<line y2="42%" x2="50%" y1="32%" x1="50%" class="svg-line" style="marker-end: url(#flow3Marker);"/>
									<line y2="67%" x2="50%" y1="57%" x1="50%" class="svg-line" style="marker-end: url(#flow3Marker);"/>
								</svg>
								 <div  class=" displayInline border1px lightGreen" style="margin: 20px;">
									<div class="singleIn"><div class="displayInline">class A</div></div>
									<div class="singleIn"><div class="displayInline">class B</div></div>
									<div class="singleIn"><div class="displayInline">class C</div></div>
								</div>
							</div> 
						</div>
						<div class="col-xs-12">
							<div class="col-xs-offset-1 col-xs-11">
								<div id="outputBox" class="output-console center opacity00">
									<div class="output-console-title-bar"><span>Output</span></div>
									<div class="output-console-body"></div>
								</div>
							</div>		
						</div>	
					</div>
				</div>
			<div class="col-xs-6">
				<div id="preCode" class="col-xs-12 marginTop">
<pre id='code3' class='code opacity00'>
<span id="headerFiles3"><in>#include</in> <ink>&lt;iostream&gt;</ink>
<go>using namespace</go> std;</span>
<span id="firstClass3"><go>class</go> A {
	<span id="showMthd3"><go>public</go>: 
		<span id="display3"><g>void</g> display() {
			<span id="cout1">cout << <ink>"Base Class A<in>\n</in>"</ink>;</span>
		}</span></span>
};</span>
<span id="secondClass3"><go>class</go> B : <go>public</go> A {
	<go>public</go>: 
		<span id="show3"><g>void</g> show() {
			<span id="cout2">cout << <ink>"Base Class B<in>\n</in>"</ink>;</span>
		}</span>
};</span>
<span id="thirdClass3"><go>class</go> C : <go>public</go> B {
	<go>public</go>: 
		<span id="print3"><g>void</g> print() {
			<span id="callShow3">display();</span>
		}</span>
};</span>
<div id="mainMthd3" class="displayInline"><g>int</g> main() {
	<span id="singleObj3">C obj1;</span>
	<span id="print1">obj1.print();</span>
	<span id="print2">obj1.show();</span>
}</div>
</pre>
</div>
<div class="col-xs-12 text-center margin-top-40">
	<span id="restartBtn" class="opacity00 btn btn-warning">Restart</span>
</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">

$(document).ready(function() {
	inheritanceConceptReady();
})

</script>

</body>
</html>