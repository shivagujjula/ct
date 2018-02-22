<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>

<script type="text/javascript" src="/secure/lang/ds/js/quick-sort-time-complexity.js"></script>

<title>quick sort time complexity</title>

<style type="text/css">

.user-btn {
	background: green;
}

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-3 {
	margin-top: 3%;
}

.creamPreTab4 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 12px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
	overflow: initial;
}

.popover {
	z-index: 9999999 !important;
	width: 260px;
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

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.step-color-css {
	color: #eac807;
	font-size: 14px;
	font-weight: bold;
}

.blinking {
	animation-name: blink;
	animation-duration: 0.6s;
	animation-iteration-count: 3;
	z-index: 9999999 !important;
	background: white;
}

@keyframes blink {
	50% {
		background: #da5805;
	}
}

.ui-effects-transfer {
	border: 1px solid #0bf30b;
	 z-index: 9999999 !important;
}

.ct-color-green {
	color: green;
	font-weight: bold;
}

.z-index9999999 {
	z-index: 9999999;
	background: white;
}

.ct-code-teal {
	color: #54f309;
	font-weight: bold;
} 

.ct-color-boolean {
	color: #4ce8fb;
}

.ct-color-yellow {
	color: yellow;
}

.position {
	position: relative;
}

.popover-btn-css {
	text-align: right;
	padding: 0;
}

.display {
	display: inline-block;
}

span {
	position: relative;
	display: inline-block;
}

.margin-left82 {
	margin-left: 82px;
}

.color-darkgreen {
	color: darkgreen;
	opacity: 0;
}

.heading-css {
	color: blue;
	text-decoration: underline;
	opacity: 0;
}

.explanation-div {
	border: 1px solid #3a15f7;
	border-radius: 10px;
	font-family: monospace;
	border: 1px solid;
	font-size: 13px;
	background: #ecf5fa;
}

.user-back-btn {
	background: #5bc0de !important;
}

.color-green {
	color: green;
	font-weight: bold;
}

.ct-blue {
	color: blue;
}

.color-maroon {
	color: maroon;
	font-weight: bold;
}

.color-deeppink {
	color: deeppink;
}

.color-highlight {
	color: rgb(45, 255, 54);
}


td {
	border: 1px solid;
}

.index-div {
	border: 1px solid;
	margin-top: 15px;
	padding: 6px;
	border-radius: 8px;
	background: papayawhip;
	font-size: 13px;
}

.introjs-tooltip {
	min-width: 280px;
}

.non-border {
	border: none;
	color: green;
}

.border-padding {
	padding: 8px;
}

.case-css {
	text-align: center;
	font-size: 15px;
	background: coral;
	color: black;"
}

.wheat-bg {
	background: wheat;
}

</style>
</head>
<body>

</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-1">
		<h3 class='label ct-demo-heading' id="heading">
			<span>Time Complexity of Quick Sort</span>
		</h3>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-8 col-xs-offset-2 index-div" id="indexDiv">
			<ul>
				<li id="listLine1" class="opacity00">Choose any element in the array. Make it what is called the <b>pivot</b>.</li>
				<li id="listLine2" class="opacity00">Swap the pivot to the last element.</li>
				<li id="listLine3" class="opacity00">Make a two way scan of the remaining elements.</li>
				<li id="listLine4" class="opacity00">Swap elements such that all the elements less than <b>pivot</b> are to the left-end and all 
					the elements greater than <b>pivot</b> are to the right end.</li>
				<li id="listLine5" class="opacity00">Elements equal to the pivot can go to the either side.</li>
				<li id="listLine6" class="opacity00">Swap the pivot to the appropriate position.</li>
				<li id="listLine7" class="opacity00">Apply the same technique to the left sub-array and the right sub-array.</li>
				<li id="listLine8" class="opacity00">This is done in a recursive manner and the base case is when our array is of size 0 or 1. 
					Arrays of size 0 or 1 are considered to be sorted. So we do nothing in that case.</li>
			</ul>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-6 col-xs-offset-0">
			<div class="col-xs-12">
<pre class="creamPreTab4 opacity00" id="preCode1">
<span id="codeLine1">void quickSort(int arr[], int low, int high) {</span>
	<span id="codeLine2">int j;</span>
	<span id="codeLine3">if (low < high) {</span>								<span id='codeLine3timeC' class="opacity00">//	A</span>
		<span id="codeLine4">j = partition(arr, low, high);</span>		<span id='codeLine4timeC' class="opacity00">//	C(n)+B</span>
		<span id='quicksortFunId'><span id="codeLine5">quickSort(arr, low, j - 1);</span>			<span id='codeLine5timeC' class="opacity00">//	T(n/2)</span>
<span id="codeLine6">quickSort(arr, j + 1, high);</span>			<span id='codeLine6timeC' class="opacity00">//	T(n/2)</span></span>
	<span id="codeLine7">}</span>
<span id="codeLine8">}</span>
<span id="partitionId"><span id="codeLine9">int partition(int arr[], int lb, int ub) {</span>
	<span id="codeLine10">int pivot, down, up, temp;</span>
	<span id="codeLine11">pivot = arr[lb];</span>
	<span id="codeLine12">down = lb;</span>
	<span id="codeLine13">up = ub;</span>
	<span id="whileLoopId"><span id="codeLine14">while (down < up) {</span>
	<span id="codeLine15">while (arr[down] <= pivot && down < ub) {</span>
		<span id="codeLine16">down++;</span>
	<span id="codeLine17">}</span>
	<span id="codeLine18">while (arr[up] > pivot) {</span>
		<span id="codeLine19">up--;</span>
	<span id="codeLine20">}</span>
	<span id="codeLine21">if (down < up) {</span>
		<span id="codeLine22">temp = arr[up];</span>
		<span id="codeLine23">arr[up] = arr[down];</span>
		<span id="codeLine24">arr[down] = temp;</span>
	<span id="codeLine25">}</span>
<span id="codeLine26">}</span></span>
	<span id="codeLine27">arr[lb] = arr[up];</span>
	<span id="codeLine28">arr[up] = pivot;</span>
	<span id="codeLine29">return up;</span>
<span id="codeLine30">}</span></span>
</pre>
			</div>
		</div>
	
		<div class="col-xs-6 margin-top-2" id="explanationDiv">
			<div class="explanation-div opacity00" id="explanationDiv1" style="padding: 4px 12px;"> <!-- col-xs-6 col-xs-offset-3 --> 
				<div class="case-css">Best case
				</div>
				<svg class="svg-css opacity00" id="svgTag1">
					<text style="font-size: 10px;" x="240" y="94" fill="blue">&lt;= 4</text>
					<text style="font-size: 10px;" x="360" y="94" fill="blue">&gt; 4</text>
					<text fill="red" y="102" x="300" style="font-size: 10px;">Pivot</text>
					<marker id="arrowEnd" refY="2.5" refX="2" markerHeight="5" markerWidth="5" orient="auto" style="fill: gray;">
						<path d="M0,0 L5,2.5 L0,5 Z"></path>
					</marker>
					<line y2="22%" x2="46%" y1="22%" x1="35%" class="svg-line svg-line1"></line>
					<line class="svg-line svg-line1" x1="66%" y1="22%" x2="51%" y2="22%"></line>
				</svg>
				<div class="col-xs-12" style="margin-top: 5px;">
					<div class="col-xs-offset-4">
						<table id="table1" class="opacity00">
							<tr></tr>
							<tr>
								<td class='border-padding'>6</td>
								<td class='border-padding'>8</td>
								<td class='border-padding'>3</td>
								<td class='border-padding'>2</td>
								<td class='border-padding'>1</td>
								<td class='border-padding'>7</td>
								<td class='border-padding'>5</td>
								<td class='border-padding' id="tdIndex">4</td>
							</tr>
							<tr>
							<%for (int i = 0; i <= 7; i++)  {%>
								<td class='non-border text-center'><%=i %></td>
							<%} %>
							</tr>
						</table>
					</div>
				</div>
				<!-- <div class="col-xs-12"  style="margin-top: 18px;">
					
				</div> -->
				
				<div class="col-xs-12" style="margin-top: 28px;">
					<div class="col-xs-offset-4">
						<table id="table2" class="opacity00">
							<tr>
							</tr>
							<tr>
								<td class='border-padding' style="background: wheat;">1</td>
								<td class='border-padding' style="background: wheat;">2</td>
								<td class='border-padding' style="background: wheat;">3</td>
								<td class='border-padding' style="background: aqua;">4</td>
								<td class='border-padding'>8</td>
								<td class='border-padding'>5</td>
								<td class='border-padding'>7</td>
								<td class='border-padding'>6</td>
							</tr>
							<tr>
							<%for (int i = 0; i <= 7; i++)  {%>
								<td class='non-border text-center'><%=i %></td>
							<%} %>
							</tr>
						</table>
					</div>
				</div>
				
				
				<div>
					<span id="spanId" class="opacity00">Therefore the total time T(n) is given by</span>
				</div>
				<div class="col-xs-3">
				<br>
					<div id='greaterIf' class="opacity00">if n > 1</div>
					<div id='equalIf' class="opacity00">if n = 1</div>
				</div>
				
				<div class="col-xs-offset-4">
					<span class="opacity00" id="calcLine1" style="background: #bbecc3;">T(n) = T(n/2) + T(n/2) + A + C(n) + B</span>
					<br>
					<span id="divCalcLine1" class="opacity00">T(n) = 2 * T(n/2) + C(n)</span><br>
					<span id="divCalcLine2" class="opacity00">T(1) = C1</span><br>
					<span id="divCalcLine3" class="opacity00"><span class="">T(n)</span> = 
						<span id="divCalcLine3Span">2 * <span id="line3Span" class="display">T(n/2)</span> + C(n)</span></span><br>
					<span id="divCalcLine4" class="opacity00"><span class="opacity00">T(n)</span> = 4 * <span id="line4Span" class="display">T(n/4)</span> + C(n) + C(n)</span><br>
					<span id="divCalcLine5" class="opacity00">
						<span class="opacity00">T(n)</span> = <span id="line5Span1" class="display">8</span> * T(n/<span id="line5Span" class="display">8</span>) + <span id="line5SpanParent" class="display">C(n) + C(n) + C(n)</span></span><br>
					<span id="divCalcLine6" class="opacity00"><span class="opacity00">T(n)</span> = 2<sup>4</sup> * T(n/2<sup>4</sup>) + 4 * C(n)</span><br>
					<span id="divCalcLine7" class="opacity00" style="margin-left: 65px;">...</span><br>
					<span id="divCalcLine8" class="opacity00" style="margin-left: 65px;">...</span><br>
					<span id="divCalcLine9" class="opacity00"><span class="opacity00">T(n)</span> = 2<sup>k</sup> * T(n/2<sup>k</sup>) + k * C(n)</span><br>
					<span id="divCalcLine10" class="opacity00"><span class="opacity00">T(n)</span> = <span id="kPowerId1" class="display">2<sup>k</sup></span> * T(n/<span id="kPowerId" class="display">2<sup>k</sup></span>) + k * C(n)</span><br>
					<span id="divCalcLine11" class="opacity00"><span class="opacity00">T(n)</span> = n * T(<span id="nDivisionId" class="display">n/n</span>) + C(n) * k</span><br>
					<span id="divCalcLine12" class="opacity00">T(n) = n * <span id="finalIdC" class="display">T(1)</span> + C(n) * <span id="finalIdK" class="display">k</span></span><br>
					<span id="divCalcLine13" class="opacity00">T(n) = n * C1 + c *  <span id="finalIdK2" class="display">n * log<sub>2</sub>n</span></span><br>
					<span id="divCalcLine14" class="opacity00" style="color: darkblue;">
						Time Complexity in Best case : Ω(<span class="opacity00" id="resultTimeCt">n*log<sub>2</sub>n</span>)
					</span>
				</div>
			</div>
			
			<div class="explanation-div" id="explanationDiv2" style="padding: 4px 12px;"> <!-- col-xs-6 col-xs-offset-3 --> 
				<div class="case-css">Worst case
				</div>
				<svg class="svg-css opacity00" id="svgTag2">
					<text style="font-size: 10px;" x="310" y="99" fill="blue"><= 8</text>
					<marker id="arrowEnd" refY="2.5" refX="2" markerHeight="5" markerWidth="5" orient="auto" style="fill: gray;">
						<path d="M0,0 L5,2.5 L0,5 Z"/>
					</marker>
					<line y2="105" x2="231" y1="106" x1="404" class="svg-line svg-line1"></line>
					<!-- <line class="svg-line svg-line1" x1="66%" y1="18%" x2="51%" y2="18%"/> -->
				</svg>
				<div class="col-xs-12" style="margin-top: 5px;">
					<div class="col-xs-offset-4">
						<table id="table3" class="opacity00">
							<tr></tr>
							<tr>
								<td class='border-padding'>1</td>
								<td class='border-padding'>2</td>
								<td class='border-padding'>3</td>
								<td class='border-padding'>4</td>
								<td class='border-padding'>5</td>
								<td class='border-padding'>6</td>
								<td class='border-padding'>7</td>
								<td class='border-padding' id="tdIndex">8</td>
							</tr>
							<tr>
							<%for (int i = 0; i <= 7; i++)  {%>
								<td class='non-border text-center'><%=i %></td>
							<%} %>
							</tr>
						</table>
					</div>
				</div>
				<!-- <div class="col-xs-12"  style="margin-top: 18px;">
					
				</div> -->
				
				<div class="col-xs-12" style="margin-top: 28px;">
					<div class="col-xs-offset-4">
						<table id="table4" class="opacity00">
							<tr>
							</tr>
							<tr>
								<td class='border-padding wheat-bg'>1</td>
								<td class='border-padding wheat-bg'>2</td>
								<td class='border-padding wheat-bg'>3</td>
								<td class='border-padding wheat-bg'>4</td>
								<td class='border-padding wheat-bg'>5</td>
								<td class='border-padding wheat-bg'>6</td>
								<td class='border-padding wheat-bg'>7</td>
								<td class='border-padding' style="background: aqua;">8</td>
							</tr>
							<tr>
							<%for (int i = 0; i <= 7; i++)  {%>
								<td class='non-border text-center'><%=i %></td>
							<%} %>
							</tr>
						</table>
					</div>
				</div>
				
				
				<div>
					<span id="spanId2" class="opacity00">Therefore the total time T(n) is given by</span>
				</div>
				<!-- <div class="col-xs-3">
				<br>
					<div id='greaterIf' class="opacity00">if n > 1</div>
					<div id='equalIf' class="opacity00">if n = 1</div>
				</div> -->
				
				<div class="col-xs-offset-4">
					<span class="opacity00" id="calcLine2" style="background: #bbecc3;">T(n) = T(n - 1) + C * n</span>
					<br>
					<span id="worstCalcLine1" class="opacity00">T(1) = C1</span><br>
					<span id="worstCalcLine2" class="opacity00">T(n) = T(n - 1) + C * n</span><br>
					<span id="worstCalcLine3" class="opacity00"><span class="">T(n)</span> = T(n - 2) + 2cn - c</span><br>
					<span id="worstCalcLine4" class="opacity00"><span class="opacity00">T(n)</span> = T(n - 3) + 3cn - 3c</span><br>
					<span id="worstCalcLine5" class="opacity00">
						<span class="opacity00">T(n)</span> = T(n - 4) + 4cn - 6c</span><br>
					<span id="worstCalcLine6" class="opacity00">
						<span class="opacity00">T(n)</span> = T(n - k) + kcn - (k * (k - 1) * c) / 2</span><br>
					<span id="worstCalcLine7" class="opacity00">
						<span class="opacity00">T(n)</span> = T(1) + cn<sup>2</sup> - (n * (n - 1) * c) / 2</span><br>
					<span id="worstCalcLine8" class="opacity00">
						<span class="opacity00">T(n)</span> = C1 + (c*n*(n+1)) / 2</span><br>
					<span id="worstCalcLine9" class="opacity00">
						<span class="opacity00">T(n)</span> = ((c*<span id="squareN">n<sup>2</sup></span>) / 2) + ((c*n) / 2) + C1</span><br>
					<span id="worstCalcLine10" class="opacity00" style="color: darkblue;">
						Time Complexity in Worst case : O(<span class="opacity00" id="resultTimeCt2">n<sup>2</sup></span>)
					</span>
				</div>
			</div>
		</div>
	</div>
	<div class="button col-xs-12 text-center margin-top-1" id="button">
		<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restart' style='margin-top:4px'>Restart</button>
	</div>
</div>
</body>
<script>
$("#explanationDiv2").hide();
$(document).ready(function() {
	quickSortTimeComplexity();
//	$(".opacity00").removeClass("opacity00");
});

</script>
</html>