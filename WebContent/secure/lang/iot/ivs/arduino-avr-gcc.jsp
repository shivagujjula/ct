<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<script src='/secure/lang/iot/js-min/avg.min.js'></script>

<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<title>Arduino Program Life Cycle</title>

<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}

.margin-top-5 {
	margin-top: 5px;
}

.margin-top-15 {
	margin-top: 15px;
}

.margin-top-35 {
	margin-top: 35px;
}

.padding0 {
	padding: 0;
}

pre {
	background-color: black;
	color: white;
	tab-size: 3;
	margin: 0;
	height: 150px;
	border-radius: 0 0 8px 8px;
	border: 1px solid black;
	font-size: 10px;
	letter-spacing: 1px;
	font-family: monospace;
}

.binary-img {
	display: inline-block;
	min-height: 12px;
	width: 40%;
}

#step2 {
	margin-top: 137px;
}

.font-arrow {
	color: green;
}

.faa-passing {
    position: relative;
    animation-name: example;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

/* Standard syntax */
@keyframes example {
      0% {
      	left: 0px;
      	bottom: 0px;
      }
    100% {
    	left: 0px;
    	bottom: 8px;
    }
}

.faa-passing-infinite {
    position: relative;
    animation-name: exampleLeft;
    animation-duration: infinite;
    animation-iteration-count: infinite;
}

/* Standard syntax */
@keyframes exampleLeft {
      0% {
      	left: 0px;
      	bottom: 0px;
      }
    100% {
    	left: 8px;
    	bottom: 0px;
    }
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
        width: 10px;
    }
}

.pulse {
	animation: pulse 1s linear 2;
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

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	display: none;
	position: relative;
	stroke: red;
	stroke-width: 2; 
}
.svg-line-seagreen {
	display: none;
	position: relative;
	stroke: seagreen;
	stroke-width: 2;
}
.box {
	border-radius: 4px;
	padding: 1px;
	display: inline-block;
}

.step-arrow {
	background-color: #a1126c;
	height: 30px;
	line-height: 30px;
	display: table-row-group;
	border-bottom-left-radius: 8px;
	border-top-left-radius: 8px;
}

 .step-arrow::after {
	color: #a1126c;
	border-left: 15px solid;
	border-top: 15px solid transparent;
	border-bottom: 15px solid transparent;
	content: ' ';
	position: absolute;
} 

.step-arrow-text {
	color: white;
	padding-left: 5px;
	font-family: monospace;
	font-size: 12px;
}

.paddingClass {
	padding: 35px 15px;
}

.fa-arrow-down, .fa-arrow-left {
	color: green;
}

.error-text {
	border: 1px solid #a1126c;
	border-radius: 5px;
	font-size: 13px;
	padding-left: 6px;
}

.output {
	letter-spacing: 1px;
	padding-top: 11px;
}

.title-bar {
	border-radius: 6px 6px 0 0;
	color: black;
	font-size: 11px;
	font-weight: bold;
	background-color: #ccc;
	border: 1px solid gray;
}

.output-console-body {
	height: 43px;
	padding-left: 8px;
	padding-top: 5px;
	border-radius: 0 0 6px 6px;
}

.ct-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.z-index {
	position: relative;
	background-color: white;
	z-index: 9999999;
}

.popover {
	z-index: 9999999;
	width: 400px;
}

.popover-content {
    background-color: #003399;
    color: white;
    min-height: 30px;
    letter-spacing: 1px;
}

.arrow {
	top: 20px !important;
}

.custom-btn {
	background-color: green;
	float: right;
	margin: 0 !important;
}

.popover-height {
	height: 20px;
}

.text-editor {
	border: 1px solid gray;
	border-radius: 8px 8px 0 0;
	font-weight: bold;
	background-color: #ccc;
}

.compilation-style {
	color: white;
	font-family: monospace;
	background-color: black;
	padding: 2px 4px;
	border-radius: 3px;
}

.system-libraries {
	display: inline-block;
	border: 1px solid;
	border-radius: 4px;
	background: #d6c7c6;
	margin-top: 18%;
}
#systemLibrariesText {
	font-size: 13px;
	/* font-family: monospace; */
}
</style>
</head>
<body>
<div class="margin-top-15 text-center">
		<h4 class="label ct-demo-heading" id="heading">Arduino Program Life Cycle</h4>
	</div>
	<div class="col-xs-12 margin-top-20 padding0">
		<div class="col-xs-6 col-xs-offset-3 padding0">
			<div class="col-xs-12 padding0" id="insideDiv">
				<div class="col-xs-12 padding0 margin-top-5" id="outSideDiv">
					<div class="col-xs-12 padding0">
						<div class="col-xs-9 padding0" id="mainDiv">
							<div class="col-xs-12 padding0" id="firstStep">
								<div class="col-xs-5 margin-top-35" id="firstId">
									<span class="step-arrow step1 opacity00 paddingClass">
										<span class="step-arrow-text opacity00" id="step1Text">Step 1: Writing code</span>
									</span>
								</div>
								<div class="col-xs-6 padding0">
									<div class="col-xs-12 padding0 opacity00" id="sourceCode">
									 <div class="text-center text-editor" id="textEditor">Text Editor</div>
<pre><span id="preTab" class="opacity00"><b style="color: fuchsia;">void</b> setup() {
	pinMode(LED_BUILTIN, OUTPUT);
}
<b style="color: fuchsia;">void</b> loop() {
	digitalWrite(LED_BUILTIN, HIGH);
	delay(1000);
	digitalWrite(LED_BUILTIN, LOW);
	delay(1000);
}
</span></pre>
									</div>
								</div>
							</div>
							<div class="col-xs-12 padding0 hide margin-top-5" id="saveDiv">
								<div class="col-xs-5 margin-top-35">
									<span class="step-arrow step2 paddingClass opacity00">
										<span class="step-arrow-text opacity00" id="step2Text">Step 2: Saving to file</span>
									</span>
								</div>
								<div class="col-xs-6 padding0">
									<div class="col-xs-12 padding0">
										<div class="col-xs-6 col-xs-offset-3 text-center padding0" id="saveFile">
											<div id="fontArrow" class="margin-top-5 font-arrow">
												<i class="fa fa-arrow-down opacity00" id="sourceFileIcon"></i>
											</div>
											<div class="padding0 ct-blue-color">
												<span id="fileAboveText" class="opacity00">Saving to file</span>
											</div>
											<i class="fa fa-file-text-o fa-3x opacity00" id="sourceFile"></i>
											<div class="ct-blue-color">
												<span id="fileBelowText" class="opacity00">Hello.ino</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xs-1 col-xs-offset-2" style="margin-top: 85px;">
							<span id="span1"></span>
						</div>
					</div>
					<div class="col-xs-12 padding0 hide margin-top-5" id="compilationDiv">
						<div class="col-xs-8 padding0" id="compilation">
							<div class="col-xs-12 padding0">
								<div class="col-xs-5 margin-top-35">
									<span class="step-arrow step3 paddingClass opacity00">
										<span class="step-arrow-text opacity00" id="step3Text">Step 3: Compilation</span>
									</span>
								</div>
								<div class="col-xs-6 padding0">
									<div class="col-xs-12">
										<div class="col-xs-7 col-xs-offset-5 text-center padding0" id="compiler">
											<div id="compilationStep"><i class="fa fa-arrow-down opacity00" id="compilationArrow"></i></div>
											<div class="padding0 ct-blue-color">
												<span id="compilationAboveText" class="opacity00">Compiling</span>
											</div>
											<i class="fa fa-gear fa-3x opacity00" id="compilationIcon"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xs-2 padding0 error-text opacity00">
							<span id="errorText" class="box opacity00 ct-blue-color">Correct the code on errors.</span>
						</div>
						<div class="col-xs-1 col-xs-offset-1" style="margin-top: 55px;">
							<span id="span2"></span>
						</div>
					</div>
				</div>
				<div id="linkingDiv" class="col-xs-12 padding0">
					<div class="col-xs-12 margin-top-5 hide" id="objFile">
						<div class="col-xs-9 col-xs-offset-2 padding0">
							<div class="col-xs-12 padding0">
								<div class="col-xs-5 col-xs-offset-3 padding0" id="createObjFile">
									<div class="text-center">
										<i class="fa fa-arrow-down opacity00" id="binaryArrow"></i>
									</div>
									<div class="padding0 text-center ct-blue-color" id="thirdStep">
										<span id="binaryAboveText" class="opacity00">Generating</span>
									</div>
									<div class="text-center">
										<img src="../images/binary.png" class="opacity00 binary-img" id="binaryImg">
									</div>
									
									<div id="binaryBelowText" class="text-center opacity00 ct-blue-color">Hello.obj</div>
								</div>
								<div class="col-xs-3 col-xs-offset-1 opacity00 paddi" style="margin-top: 2%;" id="systemLibrariesDiv">
									<div class="system-libraries text-center padding0">
										<img src="../images/binary-icon-code-file-2.png" class="" width="32%">
										<img src="../images/binary-icon-code-file-2.png" class="" width="32%"><br>
										<img src="../images/binary-icon-code-file-2.png" class="" width="32%">
										<img src="../images/binary-icon-code-file-2.png" class="" width="32%">
									</div>
									<div class="padding0 text-center ct-blue-color" id="systemLibrariesDivText">
										<!-- <span class="opacity00">0</span> -->
										<span id="systemLibrariesText" class="">System libraries</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12 padding0 margin-top-5 hide" id="linking">
						<div class="col-xs-12 padding0">
							<div class="col-xs-5 margin-top-35">
								<span class="step-arrow step4 paddingClass opacity00">
									<span class="step-arrow-text opacity00" id="step4Text">Step 4: Linking object files</span>
								</span>
							</div>
							<div class="col-xs-7 padding0">
								<div class="col-xs-12 padding0">
									<div class="col-xs-4 padding0 text-center" id="link">
										<div id="fourthStep">
											<i class="fa fa-arrow-down faa-passing animated opacity00" id="linkArrowIcon"></i>
										</div>
										<div class="padding0 ct-blue-color" id="fourthStepLinking">
											<span id="linkAboveText" class="opacity00">Linking</span>
										</div>
										<i class="fa fa-cog fa-3x opacity00" id="linkIcon"></i>
									</div>
									<div class="col-xs-1 col-xs-offset-4 padding0 text-center" style="margin-top: 52px;" id="span3ParentDiv">
	  									<span id="span3"></span>
	  								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 padding0 hide" id="exeFileDiv">
					<div class="col-xs-5 col-xs-offset-3 text-center padding0">
						<div class="col-xs-12 padding0">
							<div class="col-xs-7 col-xs-offset-4 padding0">
								<div id="fifthStep"><i class="fa fa-arrow-down opacity00" id="exeFileArrow"></i></div>
								<div><i class="fa fa-file fa-3x margin-top-5 opacity00" id="exeFile"></i></div>
								<div class="padding0 ct-blue-color">
									<span id="exeBelowText" class="opacity00">Hello.hex</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-xs-12 padding0 margin-top-5 hide" id="outputDiv" style="margin-bottom: 5px;">
					<div class="col-xs-4 margin-top-35">
						<span class="step-arrow step5 paddingClass opacity00">
							<span class="step-arrow-text opacity00" id="step5Text">Step 5: Output</span>
						</span>
					</div>
					<div class="col-xs-4 padding0">
						<div class="col-xs-12 padding0">
							<div class="col-xs-7 col-xs-offset-3 padding0">
								<div class="text-center"><i class="fa fa-arrow-down opacity00" id="outputArrow"></i></div>
					    		<div id="output" class="padding0 opacity00 output">
					    			<img alt="" src="../images/Arduino_board_image.jpg" width="100%">
					    		</div>
				      		</div>
				      		<div class="col-xs-1 padding0" style="margin-top: 36%;">
				      			<i class="fa fa-arrow-left opacity00" id="outputLeftArrow"></i>
				      		</div>
				      	</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 margin-top-20 text-center">
			<span class="btn btn-warning opacity00" id="restart">Restart</span>
		</div>
	</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
	ArduinoAvrCccReady();
});

</script>
</html>