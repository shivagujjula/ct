<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>break</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/bic.min.js"></script>
<style type="text/css">

body {
	-moz-tab-size: 4;
	tab-size: 4;
}

.output-console-title-bar {
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	margin-top: 14px;
}

.output-console-body {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    height: 182px;
    margin-bottom: 14px;
    padding: 10px;
    font-weight: bold;
}

#outputDiv {
	position: relative;
	z-index: 1000000;
}

.display {
	display: inline-block;
}

.position-absolute {
	position: absolute;
	font-family: monospace;
}

.title {
	font-size: 12px;
}

.creamePreTab4 {
	background-color: #fffae6;
	margin-top: 12px;
	white-space: pre;
}

.opacity00 {
	opacity: 0;
	pointer-events: none;
	cursor: default;
}

.flip-area {
	position: relative;
	font-family: monospace;
}

.display-inline-block {
	display: inline-block;
}

.color-red {
	color: red;
}

.allowNumbers {
    outline: none;
}

.errorText {
	color: red;
	font-weight: bold;
}

.flip-animation-btn {
	background-color: green !important;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

.introjs-tooltiptext br {
	content: "";
	display: block;
	margin-top: 10px;
}

</style>
</head>
<body>
<div class='col-xs-12'>
	<div class="text-center">
		<h4>
			<span class="label ct-demo-heading">break in Action</span>
		</h4>
	</div>
	<div class="col-xs-offset-1 col-xs-6">
		<div>
		<pre class="creamePreTab4">#include&lt;stdio.h&gt;
void main() {
	int i;
	<div id='brkLoop' class='display'>for (<span id='initialization' class="position-relative">i = <span id="initializationValue" class="allowNumbers position-absolute" maxlength="1" contenteditable=false placeholder=" ">1</span>&nbsp;;</span> <span id='condition'>i < 10;</span> <span id='update'>i++</span>) {
    <div id='ifBlk' class='display'>if (<span id='ifCondition'>i % 5 == 0</span>) {
	<span id='breakStmt'>break;</span>
}</div>
 	<span id='sop'>printf("i : %d\n",i);</span>
}</div>
<span id='mainEnd'>}</span>
</pre>
		</div>
	</div>
	<div class="col-xs-4" id="outputDiv">
		<div class="output-console-title-bar">
			<span class="title">Output</span>
		</div>
		<div class="output-console-body"><span id="output"></span>
		</div>
	</div>
</div>
<div class="text-center col-xs-12">
	<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
</div>

<script type="text/javascript">
$(document).ready(function() {
	$('#restart').click(function() {
		location.reload();
	});
	breakInCReady();
});
</script>
</body>
</html>