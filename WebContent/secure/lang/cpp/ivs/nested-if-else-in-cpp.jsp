<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/animate.css" />

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<script src="/secure/lang/cpp/js-min/nieic.min.js" type="text/javascript"></script>
<title>Nested if-else</title>
<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

.box-border {
	border-radius: 8px;
	background-color: #f5f5f5;
}

.center {
	margin-left: auto !important;
	margin-right: auto !important;
	display: block;
}

.output-console-body {
	height: 195px;
}

.output-console {
	margin: 0;
}

.creampretab4 {
	font-size: 12px;
	-moz-tab-size: 4;
	tab-size: 4;
	background-color: #fffae6;
	line-height: 1.75;
}

#outputDiv {
	margin-top: 45px;
}

.introjs-tooltip {
	min-width: 300px;
}

.blinking-white {
	animation-name: blink-border-background-white ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-white { 
	50% {
		border-color: white;
		background: white;
	}
}

.blinking-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 1s ;
	animation-iteration-count: 1s;
	animation-direction: alternate ;
	position: relative;
}

@keyframes blink-border-background-orange { 
	50% {
		border-color: orange;
		background: orange;
	}
}

.int-num {
	border-width: 0;
	background-color: black;
}

.ct-code-b-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.ui-effects-transfer {
    background-color: blue;
    z-index: 99999999 !important;
}

.flip {
	display: inline-block;
	position: relative;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px !important;
}


in {
	color: rgb(62, 50, 173);
	font-weight: bold;
}

ink {
	color: 	rgb(255, 0, 191);
}

go {
	color: rgb(134, 19, 19);
	font-weight: bold;
}

g {
	color: 	rgb(64, 130, 65);
	font-weight: bold;
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




</style>
</head>
<body>
	<div class="text-center margin-top-20">
		<h1 id="heading" class="label ct-demo-heading text-center">Nested if-else in Action</h1>
	</div>
	
	<div id="mainBox" class="col-xs-12 margin-top-20">
		<div class="col-xs-offset-2 col-xs-5">
<pre id="codeAnimation" class='creampretab4 box-border'>
<in>#include</in> <ink>&ltiostream&gt;</ink>
<span><in>using</in> <ink>namespace</ink> std;</span>
<go>int</go> main() {
	<span id="varInit"><g>int</g> a , b , c ;</span>
	<span id="mainPrintf">cout << <ink>"Enter the values of a , b , c : "</ink>;</span>
	<span id="mainScanf">cin >> a >> b >> c;</span>
	<div id="nestedIf" class="flip"><go>if</go> (<span id="ifCondtn">a > b</span>) {
	<div class="flip" id="nestedBlock1"><go>if</go> (<span id="ifCond1">a > c</span>) {
	<span id="printfInIf1">cout << a << " is the biggest number";</span>
} <go>else</go> {
	<span id="printfInIf2">cout << c << " is the biggest number";</span>
}</div>
}
<div id="elseBlock" style = "display: inline-block; position: relative;"><go>else</go> {
	<div class="flip" id="nestedBlock2"><go>if</go> (<span id="ifInElse">b > c</span>) {
	<span id="printfInElse1">cout << b << " is the biggest number";</span>
}
<go>else</go> {
	<span id="printfInElse2">cout << c << " is the biggest number";</span>
}</div>
}</div></div>
<span id="endMain">}</span></pre>
		</div>
		
		<div class="col-xs-4">
			<div id="consoleId" class="output-console padding0" style="margin-top: 50px;">
							<div class="output-console-title-bar">
									<span class="title">Output</span>
							</div>
									
<div style="color: white;" class="output-console-body">
<span id="runEditor1"></span>
<span id="runEditor2"></span>
<span id="runEditor3"></span>
<span id="runEditor4"></span>
<span id="runEditor5"></span>
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
<script type="text/javascript">
	$(document).ready(function() {
		nestedIfElseInCReady();
	});	
</script>
	
</body>
</html>
