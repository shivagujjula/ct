<html>
<head>
<title>virtual base class</title>
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
<script type="text/javascript" src="/secure/lang/cpp/js-min/vbi.min.js"></script>
<style type="text/css">

pre {
	tab-size: 2;
	font-size: 11px;
}


in {
	color: rgb(62, 50, 173);
}

ink {
	color: 	rgb(255, 0, 191)
}

go {
	color: rgb(134, 19, 19);
}

g {
	color: 	rgb(0, 204, 51);
}

r {
	color: red;
}
/* a:focus {
	outline: none;
} */

y {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

.marginTop20 {
	margin-top: 20px;
}

.displayNone {
	display: none;
}

.padding00 {
	padding: 0;
}

.border1px {
	border: 1px solid gray;
}

.introjs-tooltip {
	min-width: 280px !important;
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

.vertical-align-middle {
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
}

.lightGreen {
	background-color: lightgreen;
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

.displayInline {
	/* position: relative; */
	display: inline-block;
}

.singleIn {
	border: 1px solid grey;
	margin-top: 7%;
	margin-bottom: 7%;
	padding: 10px;
	background-color: lightblue;
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

.input-field {
	displaly: inline-block !important;
	position: relative;
	min-width: 12%;
}
</style>

<script type="text/javascript">
$(document).ready(function() {
	virtualBaseInheritanceReady();
})
</script>
</head>
<body>
<div class="col-xs-12 text-center marginTop20">
	<div class="label label-default ct-demo-heading" id="heading">Virtual Base Class</div>
</div>
<div class="col-xs-12 marginTop20">
	<div class="col-xs-offset-1 col-xs-4">
<pre class="col-xs-offset-1 col-xs-11 opacity00" id="pre">
<in>#include</in> <ink>&lt;iostream&gt;</ink>
<go>using namespace</go> std;

<span id="gpCls"><go>class</go> GrandParent {
	<go>public:</go>
			<g>int</g> age1;
};</span>

<span id="childParent"><span id="p1Cls"><go>class</go> Parent1 : <go>public <span class="displayNone">virtual</span></go> GrandParent {
 	<go>public:</go>
 			<g>int</g> age2;
};</span>

<span id="p2Cls"><go>class</go> Parent2 : <go>public <span class="displayNone">virtual</span></go> GrandParent {
	<go>public:</go>
			<g>int</g> age3;
};</span></span>

<span id="childCls"><go>class</go> Child : <go>public</go> Parent1, Parent2 {
	<go>public:</go>
		<span id="readMthd"><span><g>void</g> readAge() {
			<span id="textPrint">cout << <ink>"Enter age1, age2, age3 :"</ink>;</span>
			<span id="textRead">cin >> age1 >> age2 >> age3;</span>
		}</span></span>
	
		<span id="printMthd"><g>void</g> printAge() {
			<span id='result'><span>cout << <ink>"The values are :"</ink>;</span>
			<span>cout << age1 << age2 << age3;</span></span>
		}</span>
};</span>

<span id="mainMthd"><g>int</g> main() {
	<span id="obj" class="opacity00">Child obj;</span>
	<span id="callRead" class="opacity00">obj.readAge();</span>
	<span id="callWrite" class="opacity00">obj.printAge();</span>
}</span>
</pre>
</div>
	<div id='animate' class="col-xs-6 border1px padding00 opacity00">
		<div class="col-xs-12 padding00"> <!-- style="height: 650px;" -->
		<div class="col-xs-12 text-center padding00"  style=" margin-top: 4%;"> <!-- style="height:290px;" -->
			<div id="flow4" class="col-xs-12 padding00 vertial-align-middle opacity00 code">
				
				 <div class="displayInline border1px col-xs-offset-3 col-xs-6 lightGreen ">
				 <svg class="svg-css">
					<marker id="flow4Marker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #f53f3f;">
	              			<path d="M0,0 L5,2.5 L0,5 Z"/>
	          		</marker>
					<!-- <line y2="48%" x2="50%" y1="39%" x1="50%" class="svg-line"/>
					<line y2="48%" x2="60%" y1="48%" x1="40%" class="svg-line"/>
					<line y2="60%" x2="40%" y1="48%" x1="40%" class="svg-line" style="marker-end: url(#flow4Marker);"/>
					<line y2="60%" x2="60%" y1="48%" x1="60%" class="svg-line" style="marker-end: url(#flow4Marker);"/> -->
					
					<line class="svg-line" y2="34%" x2="50%" y1="25%" x1="50%" style=""/>
					<line class="svg-line" y2="34%" x2="77%" y1="34%" x1="23%"/>
					<line class="svg-line" y2="42%" x2="23%" y1="34%" x1="23%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line" y2="42%" x2="77%" y1="34%" x1="77%" style="marker-end: url(#flow4Marker);"/>
					<line class="svg-line" y2="67%" x2="77%" y1="67%" x1="23%"/>
					<line class="svg-line" y2="67%" x2="23%" y1="58%" x1="23%" style=""/>
					<line class="svg-line" y2="67%" x2="77%" y1="58%" x1="77%" style=""/>
					<line class="svg-line" y2="75%" x2="50%" y1="67%" x1="50%" style="marker-end: url(#flow4Marker);"/>
				</svg>
				 	<div>
						<div class="singleIn displayInline"><div>class GP</div></div>
					</div>
					<div> <!-- style="margin: 20px;" -->
						<div class="singleIn displayInline" ><div>class P1</div></div>
						<div class="singleIn displayInline" style="margin-left: 34%;"><div>class P2</div></div>
					</div>
					<div>
						<div class="singleIn displayInline"><div>class Child</div></div>
					</div>
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
</div>
<div class="col-xs-6 col-xs-offset-6">
		<button type="button" class="btn btn-warning opacity00" id="restart">Restart</button>
</div>
</body>
</html>