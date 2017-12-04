

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
<script src="/secure/lang/cpp/js-min/inlf.min.js"></script>
<title>Inline-Functions</title>
</head>
<style>

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs.tooltiptext > span{
	display: inline-block;
}

.introjs-tooltip {
	min-width: 280px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.user-btn {
	background-color: green;
}

.margin-top {
	margin-top: 20px;
}
.output-console-title-bar {
	padding: 2px 0;
	text-align: center;
	background-color: ;
}
.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.ct-code-b-blue {
	font-family: monospace;
	font-weight: bold;
	color: blue;
}

.ct-code-b-brown {
	font-family: monospace;
	font-weight: bold;
	color: brown;
}

.ct-code-b-green {
	font-family: monospace;
	font-weight: bold;
	color: green;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	min-height: 100px;
	overflow: auto;
	padding: 10px;
	white-space: inherit;
}

.address-box {
	border: 1px solid lightgray;
	border-radius: 4px;
}
.output-console-title-bar {
  background-color: #8e8989;
  text-align: center;
}
.creamPreTab4 {
	tab-size: 4;
	margin: 2px;
	padding: 12px;
	-moz-tab-size: 4;
	border-radius: 8px;
	font-family: monospace;
	background-color: #fffae6;
}

.padding00 {
	padding: 0px;
}

#startBtn {
	margin-top: 10px;
}
y {
	color: yellow;
	font-weight: bold;
}
#in, .input-char {
	width: 170px;
 /* padding: 8px; */
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}
#inputNumber2 {
color: #0f0;
}
.base-address {
	font-size: 12px;
    height: 37px;
    margin-left: 39px;
    margin-top: -15px;
    padding: 2px;
    width: 40px;
}

#informationDiv {
	border: 2px solid gray;
    border-radius: 6px;
    margin-top: 5px;
}

.user-button {
	background-color:green;
}

.box-border {
	border: 2px solid grey;
	border-radius: 8px;
}
#box,#cs3,#cs2,#cs1,#number {
color : green;
}
.box-border1 {
	border: 2px solid #1cc78f;
	border-radius: 8px;
	padding : 10px;
	height : 40px;
}
.input-char {
	  width: 30px;
	  border-width: 0px 0 0 0;
	  background-color: #000;
	  color: #0f0;
	  text-align: center;
}

.ui-effects-transfer {
    border: 2px dashed deeppink;
   z-index:10000000 !important;
 }
 
 .z-index1000000 {
	position:relative;
	background-color:white;
	z-index:10000000 !important;
}

.position {
	position: relative;
	display: inline-block;
}

span {
	position: relative;
}
.violet {
	color : #ad08ad;
}
.green {
	color : green;
}
.red {
	color : red;
}
.pink {
	color : deeppink;
}

</style>
<body>
<div class="col-xs-12">
	<div class="col-xs-12 text-center">
		<div class="margin-padding-css text-center">
			<div class= "col-xs-12">
				<div class="col-sm-offset-3 col-sm-5">
					<h3><span class= "ct-demo-heading label " id="titleName">Inline Functions</span></h3>
				</div>
			</div>
		</div>
	</div>
	<div class= "col-xs-12">
		<div class="col-xs-8 col-xs-offset-2" id="informationDiv" >
			<div class="col-xs-12">
				<span class="" id="infoText"><ul><li>A function prefixed by the keyword inline or 
				defined within the body of the class is called inline function</li>
				<li>Once you define an inline function, using the
				 <span class="ct-code-b-green">inline</span> keyword, whenever you call that function the 
				 <span class="ct-code-b-green">compiler</span> will replace the function call with the actual code from the function.</li>
				 <li>It works very similar to the <span class="ct-code-b-green">macros</span> in C language.</li><li>An advantage of using inline functions is
				  that the code runs fast as the code will be available at the place where required.
				  <a class="introjs-button user-button" id="nextButton">Next&#8594;</a></li></ul></span>
			</div>
		</div>
	</div>
	<div class= "body-div col-xs-12">
		<div class="col-xs-6 padding00 margin-top">
			<pre class="creamPreTab4 opacity00" id= "preBody">
<span id ="line1"><span class="violet">#include</span> <span class="pink">&lt;iostream&gt;</span>
<span class="red">using namespace</span> std;</span>
<div id="line10" class="position"><span id="total"><span id="line9"><span class="green">inline</span> int cube(<span id="sVal" class="position green"><b>int</b> s</span>) {</span>
	<span id="line11"><span id="return" >return <span id="mul" class="position red" ><span id="s1" class="position">s</span> * <span class = "position" id="s2">s</span> * <span class="position" id="s3" >s</span></span>;</span>
}</span></span></div>
<div id="line2" > <span class="green">int</span> main() {
	<span id="line3"><span class="green">int</span><span id="num"> num</span>;</span>
	<span id="line4">cout << <span class="pink" id="cout">"Enter a number : "</span>;</span>
	<span id= "line5">cin >> num;</span>
	<span id= "line6" class="">cout << <span id ="line7" class="pink">"The cube of a given number : "</span> << <span id="line8" class="position">cube(<span id="number" class="position">num</span>)</span> << "\n";</span>
<span id='mainClose'>} </span></div></pre>
		</div>
		
		<div class="col-xs-6  margin-top" >
			<div class="col-xs-12 box-border opacity00"  id="animationBox">
				<div class="col-xs-2 margin-top" id="total1">
					<div id="one" class="text-center opacity00"><b style="color : maroon;">num</b>
						<div class="box-border1 text-center opacity00" id="boxParent"><span class="arrayValue text-center position" id="box"></span>
						</div>
					</div>
				</div>
			
			<div class="output-console col-xs-7 col-xs-offset-1 margin-top opacity00" id='outputBox'>
				<div class="output-console-title-bar">
					<span>Output</span>
				</div>
				<div class="output-console-body " id="body">
					<span class= "opacity00" id ="inputNumber">Enter a number : <input id='inputChar' disabled='disabled' maxlength='2' class='input-char'/></span><br>
					<span class= "  opacity00" id ="inputNumber1">The cube of a given number : </span><span id="inputNumber2"></span>
				</div>
			</div>
		</div>
	</div>
</div>
	
	<div><button type="button" class="col-sm-1 col-sm-offset-5 btn btn-warning opacity00" id="restartBtn" style="margin-top: 15px;">Restart </button></div>
</div>
<script>
	$(document).ready(function() {
		readPrintStringUsingGetsPutsReady();
	});
</script>
</body>
</html>
