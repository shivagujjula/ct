<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Counting</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/j/js-min/counting.min.js"></script> 

<style type="text/css">
body {
	-moz-tab-size: 4;
}

.box-border {
	min-height: 390px;
	margin-left: 2.5%;
	margin-top: 2%;
	overflow: auto;
	padding: 15px;
}

#expTypingArea {
	background-color: rgba(255, 255, 255, 0.85);
	border-radius: 8px;
	min-height: 150px;
	margin-top: 10px;
	padding: 10px;
	z-index: 9999998;
}

.continueBtn {
	background-color: green !important;
	left: 15px;
}

.introjsNextBtn, .introjsNextBtn1, .introjsNextBtn2 {
	background-color: green !important;
}

.introjs-button {
	margin: 0px !important;
}
 
#expTypingArea > ul {
	margin-left: -20px;
}

.monospace-text {
	font: monospace;
}

.ct-code-b-red {
	color: #923838;
	font-weight: bold;
}

.introjs-tooltiptext {
	min-width: 250px;
}

.allowNumbers {
    outline: none;
}

#animationDivArea {
	background-color: lemonchiffon;
	border: 1px solid gray;
	border-radius: 10px;
	display: inline-flex;
	height: 210px;
	margin: 0 3px;
	padding: 7px;
	position: absolute;
	width: -moz-available;
	font-family: monospace;
	font-size: 11px;
	overflow: auto;
}

.focus {
	background: rgba(255, 255, 255, 0.850);
	z-index: 9999999;
	position: relative;
}

.introjs-fixParent {
    position: relative !important;
    z-index: 99999999 !important;
}

.opacity00 {
	opacity: 0;
	cursor: default;
	/* pointer-events: none; */
}

pre {
	font-size: 12px;
}

.display-inline-block {
    display: inline-block;
}

.ct-code-b-yellow {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

.ct-code-b-blue {
	color: blue;
}

 .position-relative {
	position: relative;
}

#outputDiv {
	margin-top: 20px;
	padding: 0px;
	z-index: 9999999;
}

#output {
	padding: 1px;
}

#restart {
	margin-top: 10px;
}

.errorMsg {
	color: red;
	font-weight: bold;
}
</style>

</head>
<body>
	<div class='text-center'>
		<h4>
			<span class="label label-default ct-demo-heading" id='demoTitle'>Counting
				Demo</span>
		</h4>
	</div>
	<div class='col-xs-offset-1 col-xs-10' id='expTypingArea'><ul></ul></div>
	<br>
	<div class='col-xs-6 box-border' id='animationDiv'>
		<div style="width: -moz-max-content; display: inline-block;"><div class='opacity00 mathsMarksDiv'><b class='ct-code-b-red'>int</b> mathsMarks = <span id="mathsMarks" class="allowNumbers" maxlength="1" contenteditable="true">70</span>;</div>
			<div class='opacity00 scienceMarksDiv'><b class='ct-code-b-red'>int</b> scienceMarks = <span id="scienceMarks" class="allowNumbers" maxlength="1" contenteditable="true">40</span>;</div>
			<div class='opacity00 socialMarksDiv'><b class='ct-code-b-red'>int</b> socialMarks = <span id="socialMarks" class="allowNumbers" maxlength="1" contenteditable="true">65</span>;</div><br/>
			<div class='opacity00 passMarkDiv'><b class='ct-code-b-red'>int</b> passMark = <span class='passMark'>50</span>;</div>
			<div class='opacity00 passCountDiv'><b class='ct-code-b-red'>int</b> passCount = 0;</div>
		</div>
		
		<div id='animationDivArea' class='opacity00' style='left: 38%; width: 60%;'>

			<div style="display: inline-block; width: 50%;">
				<div class='opacity00 mathsIf'>
					if (<span>mathsMarks >= passMark</span>)
					{ <br>&emsp;&emsp;&emsp;<span>passCount = passCount + 1</span>;<br> }
				</div><br/>
				<div class='opacity00 scienceIf'>
					if (<span>scienceMarks >= passMark</span>)
					{ <br>&emsp;&emsp;&emsp;<span>passCount = passCount + 1;</span> <br> }
				</div><br/>
				<div class='opacity00 socialIf'>
					if (<span>socialMarks >= passMark</span>)
					{ <br>&emsp;&emsp;&emsp;<span>passCount = passCount + 1;</span> <br> }
				</div><br/>
			</div>

			<div style="display: inline-block;/*  position: absolute; */ margin-left: 10%;">
				<div>
					<div class='maths-ifblk-condition-in-animation opacity00'>
						<span class='subMark display-inline-block'>subjectMark</span> <span>
							>= </span> <span class='passmark-in-animation display-inline-block'>passMark</span>
					</div>
					<div class='maths-ifblk-body-in-animation opacity00'>
						<span class=''>passCount</span> <span class=''>=</span> <span
							class='passCount-rightside display-inline-block'> <span
							class='display-inline-block'>passCount</span><span> + 1</span>
						</span>
					</div>
				</div>
				<br/><br/>
				<div>
					<div class='science-ifblk-condition-in-animation opacity00'>
						<span class='subMark display-inline-block'>subjectMark</span> <span>
							>= </span> <span class='passmark-in-animation display-inline-block'>passMark</span>
					</div>
					<div class='science-ifblk-body-in-animation opacity00'>
						<span class=''>passCount</span> <span class=''>=</span> <span
							class='passCount-rightside display-inline-block'> <span
							class='display-inline-block'>passCount</span><span> + 1</span>
						</span>
					</div>
				</div>
				<br/><br/>
				<div>
					<div class='social-ifblk-condition-in-animation opacity00'>
						<span class='subMark display-inline-block'>subjectMark</span> <span>
							>= </span> <span class='passmark-in-animation display-inline-block'>passMark</span>
					</div>
					<div class='social-ifblk-body-in-animation opacity00'>
						<span class=''>passCount</span> <span class=''>=</span> <span
							class='passCount-rightside display-inline-block'> <span
							class='display-inline-block'>passCount</span><span> + 1</span>
						</span>
					</div>
				</div>
			</div>
		</div>
		<br><br><br>
		<br><br>
		<br><br>
		<div class='count-increment-exp'>
		</div>
	</div>
	<pre class='col-xs-5 box-border opacity00' id='javaCodeDiv'>public class CountDemo {
	public static void main(String[] args) {
		int mathsMarks = <span class='javacode-maths-marks'>70</span>, scienceMarks = <span class='javacode-science-marks'>40</span>, socialMarks = <span class='javacode-social-marks'>60</span>;
		int passMark = 50, passCount = 0;
		
		if (mathsMarks >= passMark) {
			passCount = passCount + 1;
		}
		
		if (scienceMarks >= passMark) {
			passCount = passCount + 1;
		}
		
		if (socialMarks >= passMark) {
			passCount = passCount + 1;
		}
		
		System.out.println("The passCount = " + passCount);
	}
}</pre>
	
	<div class="col-xs-offset-4 col-xs-4 opacity00" id="outputDiv">
		<div class="output-console-title-bar">
			<span class="title">Output</span>
		</div>
	<div class="output-console-body"><span id="output"></span></div>
	</div>
	<br>
	<div class="margin-top-20 text-center col-xs-12">
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
		countingReady();
	});
	
	</script>
</body>
</html>
