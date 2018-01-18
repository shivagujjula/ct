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
<script src="/secure/practice/non-type-template-arguments.js"></script>
<!-- <script src="/secure/lang/cpp/js-min/ctwp.min.js"></script> -->
<title>Non-type Tempalte Arguments</title>
<style type="text/css">
.margin-top {
	margin-top: 2px;
}
.margin-top1 {
	margin-top: 5px;
}
.margin-top2 {
	margin-top: 30px;
}
#informationDiv {
	border: 2px solid gray;
	border-radius: 4px;
}
.user-button, .user-btn {
	background-color: green;
}
g {
	color: green;
	font-weight: bold;
}
y {
	color: yellow;
	font-weight: bold;
}
.creamPreTab4 {
	tab-size: 2;
	margin: 2px;
	padding: 12px;
	-moz-tab-size: 4;
	border-radius: 8px;
	font-family: monospace; 
	background-color: #e5eecc;
	/* min-height: 200px; */
}
.violet {
	color : #ad08ad;
}
.green {
	color : green;
}
.red {
	color : #af0a0a;
}
.pink {
	color : deeppink;
}

.ob1Box, .ob2Box {
	background: darkseagreen none repeat scroll 0 0;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-family: monospace;
	text-align: center;
}
.box-border {
	border: 2px solid #dcd9d9;
	border-radius: 8px;
	height : 330px;
	padding-left : 10px;
	padding-right : 10px;
}
.box-border1 {
  border: 2px solid #1cc78f;
  border-radius: 8px;
  padding: 9px;
  height: 40px;
  width: 40px;
}
.ob1-border1 {
	border : 1px solid darkseagreen;
	padding-bottom: 10px;
	padding-left: 20px;
}
.ob2-border1 {
	border : 1px solid darkseagreen;
	padding-bottom: 10px;
	padding-left: 20px;
}
.border {
	border: 1px solid #f2f5ad;
	background : #f2f5ad;
	color: black;
}
.output-console-body {
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 12px;
	margin-bottom: 14px;
	padding: 10px;
	white-space: nowrap;
	height: 100px;
}
.output-console-title-bar {
  background-color: #8e8989;
  text-align: center;
}
.position {
	position: relative;
}
.display {
	display: inline-block;
}
.ui-effects-transfer {
    border: 2px dashed blue;
    z-index: 99999999 !important;
 }
  
.z-index1000000 {
	position:relative;
	background-color: white;
	z-index:1000000 !important;
}
.pinkcolor {
	color: #a2275e;
	background-color: #f3f3b0;
}
[contenteditable="true"] {
	outline: none;
}

[contenteditable=true]:empty:before, [contenteditable=false]:empty:before {
	content: attr(placeholder);
	color: #B8B8A0;
	font-family: monospace;
}
.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 1000000;
}
.td-css {
	border: 2px solid gray;
	width: 55px;
	height: 40px;
	margin-top: 25px;
}
.cup-bg {
	background-color: #003399;
    border: 1px solid white;
    border-radius: 4px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
    height: 38px;
    padding-bottom: 2px;
    position: absolute;
    transition: all 1.3s ease-out 0s;
    width: 57px;
    z-index: 1000004;
}

.cup {
	display: inline-block;
	left: 15px;
	position: relative;
	top: 2px;
	z-index: 1000000;
}

#cup_value {
	bottom: 52px;
	color: black;
	left: 8px;
	position: relative;
	z-index: 1000005 !important;
}

.i-position {
	bottom: 32px;
	color: white;
	font-family: monospace;
	font-size: 10px;
	position: relative;
	right: 11px;
}

</style>
</head>
<body>
<div class="col-xs-12">
 	<div class="col-xs-12 text-center">
	 	<h3>
	 		<span class="ct-demo-heading label">Non-type Template Arguments</span>
	 	</h3>
 	</div>
 	<div class="col-xs-12 margin-top">
 		<div class="col-xs-8 col-xs-offset-2" id="informationDiv">
	 			<span id="infoText"><ul><li>It is also possible to use <g>non-type arguments</g> to the templates i.e; in addition to the argument
	 			<g>T</g>.</li><li>The user can also use the arguments as built in <g>datatypes</g>.</li><li>The syntax of defining 
	 			<g>Non-type Template Arguments</g> is:<a class="introjs-button user-button" id="nextButton">Next&rarr;</a></li></ul> </span>
					<pre id="syntax" class="col-xs-4 creamPreTab4" >
<span id="syntax">template &lt;class T, int size&gt;</span>
<span>class Array {
	T a[size];
		.
		.
};	</span></pre>
 		</div>
 	</div>
 	<div class="col-xs-12 margin-top1">
 		<div class="col-xs-6">
 			<pre class="creamPreTab4" id="preBody">
<span id="declaration"><span class="violet">#include</span> <span class="green">&lt;iostream&gt;</span></span>
<span class="red">using namespace</span> std;
<span id="template">template &lt;<span class="red">class</span> T, <span class="green">int</span> size&gt;</span>
<span id="class"><span class="red">class</span> Array {
	<span id="arrSize">T arr[<span id='size'>size</span>];</span>
	<span id="public" ><span class="red">public</span>:
		<span id="voidMethod"><span class="green">void</span> readArray() {
			<span id="for" ><span id="condition1"><span class="red">for</span> (int i = <span class="pink">0</span>; i < <span id="sizeVal">size</span>; i++) {</span>
				<span id="cin">cin >> <span id="arrVal">arr[i]</span>;</span>
			}</span>
		}</span></span>
		<span id="intSum">T sum() {						<span id= "countCup" class="cup-bg opacity00"><span class="hide-sm cup"><i class="fa fa-coffee fa-inverse fa-2x"></i><h5 class="i-position"><span id='cup_i'><b>i</b></span><b>=</b>&nbsp;&nbsp;&nbsp; <h6 id="cup_value"></h6></h5></span></span>
			<span id="intTotal">T total = <span class="pink" id="zero">0</span>;</span>		
			<span id="for2"><span id="condition2"><span class="red">for</span> (int <span id="iValZero">i = <span class="pink">0</span>;</span> <span id="sizeVal_1">i < size</span>; <span id="iValIncrement">i++</span>) {</span>
				<span id="total">total = <span id="totalSum">total</span> + <span id="arrValue">arr[<span id="iDeclaration">i</span>]</span>;</span>		<span id= "countCup2" class="cup-bg "><span class="hide-sm cup"><i class="fa fa-coffee fa-inverse fa-2x"></i><h5 class="i-position"><span id='cup_i2'><b>t</b></span><b>=</b>&nbsp;&nbsp;&nbsp; <h6 id="cup_value2"></h6></h5></span></span>
			}</span>
			<span id="return"><span class="red">return</span> total;</span>
		}</span>
};</span>
<span id="main"><span class="green">int</span> main() {
	<span id="ob1">Array &lt;<span class="green">int</span>, <span class="pink" id="four">4</span>&gt; ob1;</span>
	<span id="cout">cout << "<span class="pink" id="enterText">Enter 4 integer elements of the array : </span>";</span>
	<span id="read1">ob1.readArray();</span>
	<span id="ob2">Array &lt;<span class="green">float</span>, <span class="pink" id="five">5</span>&gt; ob2;</span>
	<span id="cout1">cout << "<span class="pink" id="enterText1">Enter 5 float elements of the array : </span>";</span>
	<span id="read2">ob2.readArray();</span>
	<span id="cout2">cout << "<span class="pink" id="sumArray">Sum of integer elements of the array : </span>" << <span id="ob1Sum">ob1.sum()</span> << endl;</span>
  <span id="cout3">cout << "<span class="pink" id="sumArray1">Sum of float elements of the array : </span>" << <span id="ob2Sum">ob2.sum()</span> << endl;</span>
}</span>
			</pre>
 		</div>
 	
	 	<div class="col-xs-6">
	 		<div class="col-xs-12 box-border opacity00" id="animationBox">
	 		<div class="col-xs-12">
		 		<div class="col-xs-9 col-xs-offset-1 opacity00" id="ob1Details">
					<div id="ob1Name" class="ob1Box margin-top2">ob1</div>
		 			<div class="col-xs-12 ob1-border1" id="border">
		 				<div class="col-xs-8 col-xs-offset-1" id="ob1Memory">
		 					<table class="margin-top text-center opacity00" style='table-layout: fixed' id="table1">
		 						<tr>
		 							<%for (int i = 0; i <= 3; i++ ) { %>
											<td>arr[<%=i%>]</td>
									<%}%>
		 						</tr>
		 						<tr>
									<%for (int i =1 ; i <= 4; i++ ) { %>
										<td class ="text-center td-css" id="value<%=i%>"><span class='arrayValue position'></span></td>
									<%}%>
								</tr>
								<tr>
								<!-- <td> <span class="darkgreen"></span></td> -->
		 							<%for (int i = 1024; i <= 1030; i = i + 2 ) { %>
											<td class="pinkcolor"><%=i%></td>
										<%} %>
		 						</tr>
		 					</table>
		 				</div>
		 				<div class="col-xs-2">
							<div class="col-xs-12">
								<div id="size1" class="text-center opacity00" style=" margin-top:1px;"><b style="color: maroon; margin-left:7px;">size</b>
									<div id="borderBox1" class="text-center box-border1 margin-top opacity00" style="font-weight: bold;"><span id="box1" class=" text-center opacity00" >4</span></div>
								</div>
							</div>
						</div>
		 			</div>
		 		</div>
		 		</div>
		 		<div class="col-xs-12">
		 		<div class="col-xs-9 col-xs-offset-1 opacity00" id="ob2Details">
		 			<div class="margin-top2 ob2Box" id="ob2Name">ob2</div>
		 			<div class="col-xs-12 ob2-border1" id="border">
		 				<div class="col-xs-9 col-xs-offset-1" id="ob2Memory">
			 				<table class="margin-top text-center opacity00" style='table-layout: fixed; margin-left: -20px;' id="table3">
			 					<tr>
			 						<%for (int i = 0; i <= 4; i++)  {%>
			 								<td>arr[<%=i%>]</td>	
			 						<% } %>
			 					</tr>
			 					<tr>
		 							<%for (int i = 1; i <= 5; i++) {%>
		 								<td class="text-center value2 td-css" id="val<%=i%>"><span class="arrayValue1 position"></span></td>
		 							<%} %>
			 					</tr>
			 					<tr>
		 							<%for (int i = 1034; i <= 1050; i = i + 4 ) { %>
											<td class="pinkcolor"><%=i%></td>
									<% } %>
		 						</tr>
			 				</table>
		 				</div>
		 				<div class="col-xs-2">
							<div class="col-xs-12">
								<div id="size2" class="text-center opacity00" style=" margin-top:1px;"><b style="color: maroon; margin-left: -16px;">size</b>
									<div id="borderBox2" class="text-center box-border1 margin-top opacity00" style="font-weight: bold; margin-left: -23px;"><span id="box2" class=" text-center opacity00" >5</span></div>
								</div>
							</div>
						</div>
		 			</div>
		 			</div>
		 		</div>
	 		</div>
	 		
	 	<div class="output-console col-xs-12 margin-top1 padding00" id='outputBox'>
				<div class="output-console-title-bar ">
					<span>Output</span>
				</div>
				<div class="output-console-body " id="outputBody">
				</div>
			</div>
		</div>
	</div>
	<div class="button col-xs-12 text-center margin-top-1" id="button">
			<button class="btn btn-warning glyphicon glyphicon-refresh" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
	</div>
</div>
<script type="text/javascript">
$(document).ready(function() {
	readPrintStringUsingGetsPutsReady();
});
</script>
</body>
</html>