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
<script type="text/javascript" src="/secure/lang/cpp/js-min/soc.min.js"></script>
<title>sample program with cout</title>
</head>
<style>
.margin-top {
	margin-top: 20px;
}
.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 9999999;
}
.creamPreTab4 {
	tab-size: 4;
	margin: 2px;
	padding: 12px;
	-moz-tab-size: 4;
	border-radius: 8px;
	font-family: monospace; 
	/* //background-color: #e5eecc; */
	background-color: rgba(224, 211, 36, 0.07);
}
.display {
	display : inline-block;
}
.pink {
	color: deeppink;
}
.green {
	color: green;
}

.color-yellow {
	color : yellow;
}

.introjs-relativePosition {
    position: relative;
    color: black;
}
.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	padding: 2px 0;
	text-align: center;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: white;
	font-family: monospace;
	font-size: 12px;
	margin-bottom: 14px;
	height: 100px;
	overflow: auto;
	padding: 10px;
	white-space: inherit;
	font-weight: 500;
}
.opacity00 {
	opacity:0;
}
y {
	color: yellow;
	font-weight: bold;
}
.ui-effects-transfer {
    border: 2px dashed deeppink;
    z-index: 99999999 !important;
 }
  
.z-index1000000 {
	position:relative;
	background-color:white;
	z-index:1000000 !important;
}
.violet {
	color : #ad08ad;
}
.color-blue {
	color:blue;
}
.color-red {
color: red;
}
</style>
<body>
<div class='col-xs-12'>
	<div class='text-center margin-top'>
		<div class='label ct-demo-heading' id="heading">
			<span>sample program with cout</span>
		</div>
	</div>
	<div class='col-xs-12' style='margin-top : 30px'>
		<div class="col-xs-4 col-xs-offset-2">
			<pre class="creamPreTab4 opacity00"  id="preBody">
<div class="display" id="declaration">#include &lt;<span class='color-blue '>iostream</span>&gt;</div>
<span id="using" class='color-red'>using</span><span class = "green" id="namespace"> namespace</span><span id="std"> std;</span>
<span class="display" id="void">int <span id="main"><b>main()</b></span> {</span>
	<div class="display" id="printf1"><b>cout</b> << <span id="hello" class="display green">"Hello World!\n"</span>;</div>
	<div class="display" id="printf2"><b>cout</b> << <span class="display green" id="learning">"I am learning C programming\n"</span>;</div>
	<div class='display' id="printf3"><b>cout</b> << <span class="display green" id="bye">"Bye!"</span>;</div>
<span class='display' id="close">}</span>
			</pre>
		</div>
		<div class="col-xs-4">
			<div class="output-console col-xs-12 margin-top padding00 opacity00 " id='outputBox'>
				<div class="output-console-title-bar ">
					<b>Output</b>
				</div>
				<div class="output-console-body " id="outputBody">
					<span class="opacity00" id="printlnId1"> Hello World!</span><br/>
				    <span class="opacity00" id="printlnId2"> I am learning C++ programming</span><br/>
				    <span class="opacity00" id="printlnId3"> Bye!</span>
				</div>
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
</div>
<script type="text/javascript">
$(document).ready(function() {
	sampleOfCout();
});
</script>
</body>
</html>
