<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/introjs.css"> 
<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script src="/secure/lang/j/js-min/plc.min.js"></script>

<style type="text/css">

.introjs-tooltip {
	min-width: 150px;
}

.box-border {
	border: 1px solid grey;
	border-radius: 8px;
	margin: 3px;
	height: 350px;
}

.step1Div {
	width: 36%;
}

.step2Div {
	width: 28%;
}

.steps {
	background: #fb8835 none repeat scroll 0 0;
    border-radius: 10em;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 2px 10px;
    position: relative;
    z-index: 1000000;
}

.btn-warning {
	background: rgba(0, 0, 0, 0)
		linear-gradient(0deg, #e78b07 30%, rgb(255, 184, 86) 70%) repeat
		scroll 0 0;
}

.btn-info {
	background: rgba(0, 0, 0, 0)
		linear-gradient(0deg, #5bc0de 30%, rgb(145, 227, 252) 70%) repeat
		scroll 0 0;
}

.btn-success {
	background: rgba(0, 0, 0, 0)
		linear-gradient(0deg, #259925 30%, rgb(53, 234, 53) 70%) repeat scroll
		0 0;
}

.stepDiv {
	margin-bottom: 10px;
}

.restart {
	margin-top: 10px;
}

.header {
	margin-top: 30px;
}

.body {
	margin-top: 35px;
}

.gearIcon {
	font-size: 6em;
	margin-top: 0px;
}

#fileContent, .savingFileStep {
	height: 115px;
	border-radius: 8px;
}

#fileContent, #compileEditor, #runEditor {
	background-color: black;
	font-size: 9px;
	color: white;
	-moz-tab-size: 4;
}

.img-responsive {
	display: inline-block;
	max-height: 75px;
}

.arrow1, .arrow2, .arrow3 {
	margin-top: 50px;
	color : green;
}

.faa-passing {
    position: relative;
    animation-name: example;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}

/* Standard syntax */
@keyframes example {
      0%   { left:0px; top:0px;}
    100%  {top:0px; left:20px;}
}

.loading:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    -moz-animation: ellipsis 2s infinite;
    content: "\2026"; /* ascii code for the ellipsis character */
}
@-moz-keyframes ellipsis {
    from {
        width: 0px;
    }
    to {
        width: 12px;
    }
}

.pulse {
	animation: pulse 1s linear 3;
}

@-moz-keyframes pulse {
 0% {
   -moz-transform: scale(0.6);
   transform: scale(0.8);
 }

 100% {
   -moz-transform: scale(1);
   transform: scale(1);
   font-weight: bold;
 }

}
.compilingFileStep {
	height: 210px;
}

#compileEditor:before, #outputEditor:before, #runEditor:before {
	content: ">> "
}

span {
	font-size: 12px;
}

.compilingDiv {
	margin-top: 15px;
}


.output-console {  
	border-radius: 10px;
	overflow: hidden;
}

.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	font-size: 0.75em;
	padding: 2px 0;
	text-align: center;
}

.output-console-body {
	background-color: black;
	padding: 10px;
	color: #f0f0f0	;
	font-size: 10px;
	height: 80px;
}

.introjs-tooltip {
	padding: 5px !important;
}

.introjs-tooltiptext {
	border-top-left-radius: 3px !important;
	border-top-right-radius: 3px !important;
}

.introjs-tooltipbuttons {
	border-bottom-left-radius: 3px !important;
	border-bottom-right-radius: 3px !important;
}

.introjs-tooltiptext, .introjs-tooltipbuttons {
	background-color: #003399;
	color: white;
	padding: 2px;
}

.introjs-button {
	margin: 10px 2px 2px !important;
	padding: 3px !important;
}

.introjs-prevbutton, .introjs-nextbutton, .introjs-skipbutton {
	border-radius: 3px !important;
}

.introjs-skipbutton {
	margin-right: 15px !important;
}

.opacity00 {
	opacity: 0;
}

.no-gutter > [class*='col-'] {
	padding-right : 0;
	padding-left : 0;
}

</style>
<script type="text/javascript">

	$(document).ready(function() {
		programLifeCycleReady();
	});
</script>
</head>
<body>
	<div class="col-xs-4 box-border step1Div no-gutter">
		<div class="text-center header">
			<div class="stepDiv">
				<span class="steps">Step 1 - Writing source code</span>
			</div>
			<div>
				<a class="btn btn-warning btn-xs writeBtn"> <i
					class="glyphicon glyphicon-pencil"></i>&nbsp;Write
				</a>
			</div>
		</div>
		<div class="body row savingFileStep ">
			<div>
				<pre class="col-xs-8 " id="fileContent"></pre>
			</div>
			<div class="col-xs-1 arrow1"></div>
			<div class="col-xs-3 text-center">
				<div>
					<span id="dotJavaFileAboveText"></span>
				</div>
				<div>
					<img class="img-responsive dotJavaFile" alt=""
						src="text-file.png">
				</div>
				<div>
					<span id="dotJavaFileBelowText"></span>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-3 box-border step2Div no-gutter">
		<div class="text-center header">
			<div class="stepDiv">
				<span class="steps">Step 2 - Compiling source code</span>
			</div>
			<div>
				<a class="btn btn-info btn-xs  compileBtn disabled"> <i
					class="fa fa-cog"></i>&nbsp;Compile
				</a>
			</div>
		</div>
		<div class="body compilingFileStep ">
			<div class="output-console ">
				<div class="output-console-title-bar">
					<span class="title">Console</span>
				</div>
				<div class="output-console-body" style="height: 60px">
					<div id="compileEditor"></div>
				</div>
			</div>
			<div class="compilingDiv">
				<div class="col-xs-5 text-center">
					<div>
						<span id="compiling"></span>
					</div>
					<div>
						<h1 class="fa fa-cog   gearIcon"></h1>
					</div>
				</div>
				<div class="col-xs-2 arrow2"></div>
				<div class="col-xs-5">
					<div>
						<span id="dotClassFileAboveText"></span>
					</div>
					<div>
						<img class="dotClassFile img-responsive"
							src="binary-file.jpeg">
					</div>
					<div>
						<span id="dotClassFileBelowText"></span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-4 box-border step3Div no-gutter">
		<div class="text-center header">
			<div class="stepDiv">
				<span class="steps">Step 3 - Executing bytecode</span>
			</div>
			<div>
				<a class="btn btn-success btn-xs exeBtn disabled">
					<i class="fa fa-check"></i>&nbsp;Execute
				</a>
			</div>
		</div>
		<div class="body runningFileStep">
			<div class="row">
				<div class="col-xs-5">
					<div class="output-console">
						<div class="output-console-title-bar">
							<span class="title">Console</span>
						</div>
						<div class="output-console-body">
							<div id="runEditor"></div>
						</div>
					</div>
				</div>
				<div class="col-xs-2 arrow3"></div>
				<div class="col-xs-5">
					<div class="output-console" id="output">
						<div class="output-console-title-bar">
							<span class="title">Output</span>
						</div>
						<div class="output-console-body">
							<div id="outputEditor"> </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 text-center restartDiv no-gutter">
		<a class="btn btn-warning restart opacity00">Restart</a>
	</div>
</body>
</html>