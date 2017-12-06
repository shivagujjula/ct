<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<script src='/secure/lang/cpp/js-min/oiadoic.min.js'></script>
<title>Overloading increment(++) and decrement(--) operators in
	cpp</title>
</head>
<style>
#infoDiv {
	background-color: rgb(243, 235, 235);
	border: 1px solid grey;
	border-radius: 10px;
	font-size: 16px;
	/*font-family: monospace;*/
	padding: 9px 14px;
    min-height: 252px;
}
.creamPreTab1 {
	-moz-tab-size: 2;
	tab-size: 1;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 12px;
	margin-top: 25px;
	padding: 6px;
	white-space: pre;
}

#introduction {
	background-color: rgb(243, 235, 235);
}

#heading {
	margin-top: 10px;
}
#restart {
	margin-top: 13%;
}
.introjs-tooltip-min-width{
	min-width: 300px;
}
.margin-top-2 {
	margin-top: 2%;
}
.margin-top-4 {
	margin-top: 4%;
}

.margin-top-13 {
	position: absolute;
	margin: 7px 0 0 -3px;
}
#classDiv, #mainDiv {
	border: 1px solid whitesmoke;
}
.ct-Maroon-color {
	color: #800021;
	font-weight: bold;
	border-top: none;
}
.ct-green-color {
	color: green;
	font-weight: bold;
}
.ct-lightblue-color {
	color: #825cc7;
	font-weight: bold;
}

.ct-code-b-yellow {
	color: yellow;
	font-weight: bold;
}
.ct-code-b-blue {
	font-weight: bold;
	color: #3d69cc;
}
.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #e5ec07;
	font-family: monospace;
	font-size: 13px;
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
}

.output-value-circle {
	background: white;
	color: black;
}

.input-char {
	width: 200px;
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}

.input-char2 {
	width: 45px;
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}

.box-Heading {
	font-weight: bold;
	color: rgb(47, 79, 79);
}

#addressDiv {
	min-height: 280px;
}

#locVarAddress {
	min-height: 156px;
}

div, span {
	position: relative;
}

.z-index9999999 {
	z-index: 9999999;
}

.fa-arrow-left {
	color: green;
	position: relative;
	-webkit-animation: myfirst 1s infinite; /* Chrome, Safari, Opera */
	-webkit-animation-direction: alternate; /* Chrome, Safari, Opera */
	animation: myfirst 1s infinite;
}

.user-btn {
	background-color: green;
}

.blinking-white {
	animation-name: blink-border-background-white ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000 !important;
	position: relative;
}

@keyframes blink-border-background-white { 
	50% {
		border-color: white;
		background: white;
	}
}
.ui-effects-transfer {
	border: 1px solid green;
	z-index: 10000000 !important;
	display: inline-block;
}

@keyframes blink { 
50% {
	border-color: white;
	background: orange;
}

}
@keyframes blinker { 
100% {
	opacity: 0.0;
}

}
@keyframes myfirst { 
0% {
	left: 0px;
	top: 0px;
}

100%{
	left:10px;
	top:0px;
}

}
.error-text {
	color: red;
	font-weight: bold;
}

.position {
	display: inline-block;
	position: relative;
}
.panel-primary>.panel-heading {
	color: #fff;
	background-color: #337ab7;
	border-color: #337ab7;
}

.panel-heading {
	padding: 2px 4px;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.panel-primary {
	border-color: #337ab7;
}

.panel {
	margin-bottom: 0px;
	background-color: #fff;
	border-radius: 4px;
	-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
	box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}

.panel-body {
	padding: 6px;
	min-height: 32px;
} 
[contenteditable="true"] {
	font-weight: normal;
	outline: medium none;
}

.box-border {
	border: 1px solid gray;
}
.output-console-title-bar {
	background-color: rgba(165, 165, 165, 0.5);
}

.padding00 {
	padding: 0px;
}
.z-index1000000 {
	/* position: relative; */
	background-color: white;
	z-index: 1000000 !important;
}
</style>
<script>
	$(document).ready(function() {
		overloadingIncrementAndDecrementOperatorsReady();
	});
</script>
<body>
	<div class="main-div col-xs-12">
		<div class="row text-center" id="heading">
			<h3 class='label ct-demo-heading margin-top-2'>
				<span>Overloading increment and decrement operators in C++</span>
			</h3>
		</div>
		<div class="col-xs-12">
			<div class="col-xs-8 col-sm-offset-2 margin-top-2" id="infoDiv">
				<ul>
					<li id="list" class="opacity00">The <span class="ct-lightblue-color">prefix increment</span> and 
						<span class="ct-lightblue-color">decrement operators </span>
					 	can be overloaded using operator function as <br>
					 	&emsp;&emsp;&emsp;&emsp;<span class="ct-Maroon-color">return_type</span> <span class="ct-green-color">operator++()</span>;<br>
					 	&emsp;&emsp;&emsp;&emsp;<span class="ct-Maroon-color">return_type</span> <span class="ct-green-color">operator--()</span>; // prefix
					</li>
	
					<li id="list1" class="opacity00">The <span class="ct-lightblue-color">postfix increment</span> and 
						<span class="ct-lightblue-color">decrement operators</span>
						can be overloaded using operator function as <br>
						&emsp;&emsp;&emsp;&emsp;<span class="ct-Maroon-color">return_type</span> <span class="ct-green-color">operator++(int)</span>;<br>
					 	&emsp;&emsp;&emsp;&emsp;<span class="ct-Maroon-color">return_type</span> <span class="ct-green-color">operator--(int)</span>; // postfix
					</li>
					<li id="list2" class="opacity00">To distinguish between two, the prefix form 
						of the operator is declared exactly the same way as the other unary operators,
						but the postfix form accepts dummy additional argument of type int.
					</li>
					<li id="list3" class="opacity00">Compiler uses the <span class="ct-green-color">int</span> 
						argument to distinguish between the <span class="ct-green-color">prefix</span> and <span class="ct-green-color">postfix</span> 
						<span class="ct-green-color">increment</span> and <span class="ct-green-color">decrement operators</span>. 
						<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span>
					</li>
				</ul>
			</div>
		</div>
		<div class="col-xs-12 padding00">
			<div class="col-xs-12" id="codeDiv">
				<div class="col-xs-6 padding00">
					<pre class="creamPreTab1 opacity00" id="preTableDiv">
						<div class="col-xs-6 padding00" id="classDiv">
	<span id="preDir"><span id="include">#include</span> &lt;<span
								id="ioStream">iostream</span>&gt;</span>
	<span id="lib"><span id="using">using</span> <span id="nameSpace">namespace</span> std;</span>
	<span id="class" class="opacity00">class Sample {
			<span id="init" class="opacity00">int <span id="intNum">num</span>;</span>
			<span id="Sample" class="opacity00">public: 
						Sample() {
		
						}</span>
						<span id="SamplePara" class="opacity00"><span id="SampleInt">Sample(int <span id="xInit">x</span>)</span> {
								<span id="aValue">num = <span id="xValue">x</span>;</span>
						}</span>
						<span id="putData" class="opacity00">void putData() {
								<span id="printA">cout << <span id="value">num</span> << endl;</span>
						}</span>					
						<span id="preInc" class="opacity00">Sample operator ++( ) { 
								<span id="preIncS1">Sample s;</span>
								<span id="aPreInc">num = num + 1;</span>
								<span id="s1PreIncVal">s.num = num;</span>
								<span id="return">return s;</span>
						}</span>
						<span id="postInc" class="opacity00">Sample operator ++(int d) {
								<span id="postIncS1">Sample s;</span>
								<span id="s1PostIncVal">s.num = num;</span>
								<span id="aPostIncVal">num = num + 1;</span>
								<span id="return1">return s;</span>
						}</span>
						<span id="preDec" class="opacity00">Sample operator --( ) { 
								<span id="preDecS1">Sample s;</span>
								<span id="aPreDecVal">num = num - 1;</span>
								<span id="s1PreDecVal">s.num = num;</span>
								<span id="return2">return s;</span>
						}</span>
						<span id="postDec" class="opacity00">Sample operator --(int d) { 
								<span id="postDecS1">Sample s;</span>
								<span id="s1PostDecVal">s.num = num;</span>
								<span id="aPostDecVal">num = num - 1;</span>
								<span id="return3">return s;</span>
						}</span>
	};</span></div>
<div class="col-xs-4 col-xs-offset-1 padding00" id="mainDiv" style="margin-top: -16px;">
	<span id="main" class="opacity00">int main() {
				<span id="s1Init" class="opacity00">Sample <span id="s1">s1(<span id="num">5</span>)</span>;</span>
				<span id="diffObj" class="opacity00">Sample <span id="s2">s2</span>, <span id="s3">s3</span>, <span id="s4">s4</span>, <span id="s5">s5</span>;</span>
				
				<span id="s2PreInc" class="opacity00">s2 = <span id="pre">++s1</span>;</span>
				<span id="s1PutData" class="opacity00">s1.putData();</span>
				<span id="s2PutData" class="opacity00">s2.putData();</span>
				
				<span id="s3PostInc" class="opacity00">s3 = <span id="post">s1++</span>;</span>
				<span id="s1PutData1" class="opacity00">s1.putData();</span>
				<span id="s3PutData" class="opacity00">s3.putData();</span>
				
				<span id="s4PreDec" class="opacity00">s4 = <span id="pre1">--s1</span>;</span>
				<span id="s1PutData2" class="opacity00">s1.putData();</span>
				<span id="s4PutData" class="opacity00">s4.putData();</span>
				
				<span id="s5PostDec" class="opacity00">s5 = <span id="post1">s1--</span>;</span>
				<span id="s1PutData3" class="opacity00">s1.putData();</span>
				<span id="s5PutData" class="opacity00">s5.putData();</span>
	<span id ="end">}</span></span></div>
					</pre>
				</div>
				<div class="col-xs-6 margin-top-2" >
					<div class="col-xs-12 opacity00 panel panel-primary" id="addressDiv">
						<div id="varBox1" class="col-xs-12  opacity00"
							style="margin-top: 10px;">
							<div class="col-xs-3 col-xs-offset-4"  >
								<!-- <div  class="opacity00" id="s1Address"> -->
									<div id="s1Address" class=" panel panel-primary opacity00">
										<div class="panel-heading text-center">
											<b style="color: whitesmoke;">s1</b>
										</div>
										<div class="panel panel-body">
											<div id="aBoxS1" class="panel panel-primary  opacity00">
												<div class="panel-heading text-center">
													<b style="color: whitesmoke;">num</b>
												</div>
												<div id="s1AnimationDiv"
													class="text-center panel-body">
													<span id="s1Val" class="opacity00 aBox ct-green-color">5</span>
												</div>
											</div>
										</div>
									</div>
								<!-- </div> -->
							</div>
						</div>
						<div id="varBox2" class="col-xs-12  margin-top-4 opacity00">
							<div  class="col-xs-3">
								<div id="s2Address" class="opacity00  panel panel-primary ">
									<div class="panel-heading text-center">
										<b style="color: whitesmoke;">s2</b>
									</div>
									<div class="panel panel-body">
										<div id="aBox" class="panel panel-primary opacity00">
											<div class="panel-heading text-center">
													<b style="color: whitesmoke;">num</b>
												</div>
											<div id="s2AnimationDiv"
												class="text-center panel-body">
												<span id="s2Val" class="opacity00 aBox  ct-green-color">6</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div  class="col-xs-3">
								<div id="s3Address" class="opacity00 panel panel-primary ">
									<div class="panel-heading text-center">
										<b style="color: whitesmoke;">s3</b>
									</div>
									<div class="panel panel-body">
										<div id="aBox1" class="panel panel-primary opacity00">
											<div class="panel-heading text-center">
												<b style="color: whitesmoke;">num</b>
											</div>
											<div id="s3AnimationDiv"
												class="text-center panel-body">
												<span id="s3Val" class="opacity00 aBox ct-green-color">6</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div  class="col-xs-3">
								<div id="s4Address" class="opacity00 panel panel-primary">
									<div class="panel-heading text-center">
										<b style="color: whitesmoke;">s4</b>
									</div>
									<div class="panel panel-body">
										<div id="aBox2" class="panel panel-primary opacity00">
											<div class="panel-heading text-center">
												<b style="color: whitesmoke;">num</b>
											</div>
											<div id="s4AnimationDiv"
												class="text-center panel-body">
												<span id="s4Val" class="opacity00 aBox ct-green-color">6</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xs-3">
								<div id="s5Address" class="opacity00 panel panel-primary">
									<div class="panel-heading text-center">
										<b style="color: whitesmoke;">s5</b>
									</div>
									<div class="panel panel-body">
										<div id="aBox3" class="panel panel-primary opacity00">
											<div class="panel-heading text-center">
												<b style="color: whitesmoke;">num</b>
											</div>
											<div id="s5AnimationDiv" class="text-center panel-body">
												<span id="s5Val" class="opacity00 aBox ct-green-color">6</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="locVarAddress" class="panel panel-primary col-xs-12 margin-top-4 opacity00">
						<div class="col-xs-12 text-center"
							style="font-weight: bold; color: rgb(47, 79, 79); padding: 5px;">
							<div id="boxHeading1" class="col-xs-4 col-xs-offset-4 opacity00">
								In operator++()
							</div>
						</div>
						<div class="col-xs-12 text-center" style="font-weight: bold; color: rgb(47, 79, 79); padding: 0px;">
							<div id="boxHeading2" class="col-xs-4 col-xs-offset-4 opacity00">
								In operator++(int)
							</div>
						</div>
						<div class="col-xs-12 text-center" style="font-weight: bold; color: rgb(47, 79, 79); padding: 0px;">
							<div id="boxHeading3" class="col-xs-4 col-xs-offset-4 opacity00">
								In operator--()
							</div>
						</div>
						<div class="col-xs-12 text-center" style="font-weight: bold; color: rgb(47, 79, 79); padding: 0px;">
							<div id="boxHeading4" class="col-xs-4 col-xs-offset-4 opacity00">
								In operator--(int)
							</div>
						</div>
						<div class="col-xs-12 text-center">
							<div id="sAddress" class="col-xs-4 col-xs-offset-4 opacity00">
								<div id="sBox" class="opacity00">
									<div class=" panel panel-primary">
										<div class="panel-heading text-center">
											<b style="color: whitesmoke;">s</b>
										</div>
										<div class="panel panel-body">
											<div id="aBoxS" class="panel panel-primary opacity00">
												<div class="panel-heading text-center">
														<b style="color: whitesmoke;">num</b>
													</div>
												<div id="sAnimationDiv" class="text-center panel-body" style="height: 32px;">
													<span id="sVal" class="opacity00 ct-green-color">5</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12">
						<div class="col-xs-6 margin-top-4">
							<div id="consoleId" class="center opacity00">
								<div class="output-console-title-bar">
									<span class="title"><b>Console</b></span>
								</div>
								<div class="output-console-body" id="consoleBodyDiv">
									<div><span id="s1Value" class="opacity00">6</span></div>
									<div><span id="s2Value" class="opacity00">6</span></div>
									<div><span id="s1Value1" class="opacity00">7</span></div>
									<div><span id="s3Value" class="opacity00">6</span></div>
									<div><span id="s1Value2" class="opacity00">6</span></div>
									<div><span id="s4Value" class="opacity00">6</span></div>
									<div><span id="s1Value3" class="opacity00">5</span></div>
									<div><span id="s5Value" class="opacity00">6</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12">
			<div class="col-xs-3 col-sm-offset-4">
				<div class="col-sm-5 col-sm-offset-4 margin-top-4" id="restartDiv">
					<a class="btn btn-warning opacity00" id="restart">
					<i class="fa fa-refresh"></i>&nbsp;Restart</a>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
