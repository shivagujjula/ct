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
	display: none;
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
				<li>Choose any element in the array. Make it what is called the <b>pivot</b>.</li>
				<li>Swap the pivot to the last element.</li>
				<li>Make a two way scan of the remaining elements.</li>
				<li>Swap elements such that all the elements less than <b>pivot</b> are to the left-end and all the elements greater than <b>pivot</b> 
					are to the right end.</li>
				<li>Elements equal to the pivot can go to the either side.</li>
				<li>Swap the pivot to the appropriate position.</li>
				<li>Apply the same technique to the left sub-array and the right sub-array.</li>
				<li>This is done in a recursive manner and the base case is when our array is of size 0 or 1. Arrays of size 0 or 1 are considered 
					to be sorted. So we do nothing in that case.</li>
			</ul>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-6 col-xs-offset-0">
			<div class="col-xs-12">
<pre class="creamPreTab4 " id="preCode2">
void quickSort(int arr[], int low, int high) {
	int j;
	if (low < high) {
		j = partition(arr, low, high);
		quickSort(arr, low, j - 1);
		quickSort(arr, j + 1, high);
	}
}
int partition(int arr[], int lb, int ub) {
	int pivot, down, up, temp;
	pivot = arr[lb];
	down = lb;
	up = ub;
	while (down < up) {
		while (arr[down] << pivot && down <= ub) {
			down++;
		}
		while (arr[up] > pivot) {
			up--;
		}
		if (down < up) {
			temp = arr[up];
			arr[up] = arr[down];
			arr[down] = temp;
		}
	}
	arr[lb] = arr[up];
	arr[up] = pivot;
	return up;
}
</pre>
			</div>
		</div>
	
		<div class="col-xs-5 margin-top-2">
			<div class="explanation-div opacity00" id="explanationDiv" style="padding: 4px 12px;"> <!-- col-xs-6 col-xs-offset-3 --> 
				<div class="col-xs-offset-">
					<span>Therefore the total time T(n) is given by</span>
				</div>
				<div class="col-xs-offset-4">
					<span class="opacity00" id="calcLine1" style="background: #bbecc3;">T(n) = T(n/2) + T(n/2) + c(n)</span>
					<br>
					<span id="divCalcLine1" class="opacity00">T(n) = 2 * T(n/2) + c(n)</span><br>
					<!-- <span id="divCalcLine2" class="opacity00">T(n) = T(n/2) + <span id="cValue" class="display">c</span></span><br> -->
					<span id="divCalcLine3" class="opacity00"><span class="opacity00">T(n)</span> = 
						<span id="divCalcLine3Span">2 * <span id="line3Span" class="display">T(n/2)</span> + c(n)</span></span><br>
					<span id="divCalcLine4" class="opacity00"><span class="opacity00">T(n)</span> = 4 * <span id="line4Span" class="display">T(n/4)</span> + c(n) + c(n)</span><br>
					<span id="divCalcLine5" class="opacity00">
						<span class="opacity00">T(n)</span> = <span id="line5Span1" class="display">8</span> * T(n/<span id="line5Span" class="display">8</span>) + <span id="line5SpanParent" class="display">c(n) + c(n) + c(n)</span></span><br>
					<span id="divCalcLine6" class="opacity00"><span class="opacity00">T(n)</span> = 2<sup>4</sup> * T(n/2<sup>4</sup>) + 4 * c(n)</span><br>
					<span id="divCalcLine7" class="opacity00" style="margin-left: 65px;">...</span><br>
					<span id="divCalcLine8" class="opacity00" style="margin-left: 65px;">...</span><br>
					<span id="divCalcLine9" class="opacity00"><span class="opacity00">T(n)</span> = 2<sup>k</sup> * T(n/2<sup>k</sup>) + k * c(n)</span><br>
					<span id="divCalcLine10" class="opacity00"><span class="opacity00">T(n)</span> = <span id="kPowerId1" class="display">2<sup>k</sup></span> * T(n/<span id="kPowerId" class="display">2<sup>k</sup></span>) + k * c(n)</span><br>
					<span id="divCalcLine11" class="opacity00"><span class="opacity00">T(n)</span> = n * T(<span id="nDivisionId" class="display">n/n</span>) + c(n) * k</span><br>
					<span id="divCalcLine12" class="opacity00">T(n) = n * <span id="finalIdC" class="display">T(1)</span> + c(n) * <span id="finalIdK" class="display">k</span></span><br>
					<span id="divCalcLine13" class="opacity00">T(n) = n + c *  <span id="finalIdK2" class="display">n * log<sub>2</sub>n</span></span><br>
					<span id="divCalcLine14" class="opacity00" style="color: darkblue;">
						Time Complexity : O(<span class="opacity00" id="resultTimeCt">n*log<sub>2</sub>n</span>)
					</span>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-5">
<pre class="creamPreTab4 opacity00" id="preCode1" style="font-size: 12px;">
<span id="line1">void mergeSort(<span class="color-green">int</span> arr[], <span class="color-green">int</span> low, <span class="color-green">int</span> mid, <span class="color-green">int</span> high) {</span>
	<span id="lineMid"><span class="color-green">int</span> mid = (low + high) / <span class="color-deeppink">2</span>;</span>
	<span id="line2"><span class="color-green">int</span> i = low, h = low, j = mid + <span class="color-deeppink">1</span>, k, temp[];</span>
	<span id="line3"><span class="color-maroon">while</span> (h <= mid && j <= high) {</span>
		<span id="line4"><span class="color-maroon">if</span> (arr[h] <= arr[j]) {</span>
			<span id="line5">temp[i] = arr[h];</span>
			<span id="line6">h++;</span>
		<span id="line7">} else {</span>
			<span id="line8">temp[i] = arr[j];</span>
			<span id="line9">j++;</span>
		<span id="line10">}</span>
		<span id="line11">i++;</span>
	<span id="line12">}</span>
	<span id="line13"><span class="color-maroon">if</span> (h > mid) {</span>
		<span id="line14"><span class="color-maroon">for</span> (k = j; k <= high; k++) {</span>
			<span id="line15">temp[i] = arr[k];</span>
			<span id="line16">i++;</span>
		<span id="line17">}</span>
	<span id="line18">} <span class="color-maroon">else</span> {</span>
		<span id="line19"><span class="color-maroon">for</span> (k = h; k <= mid; k++) {</span>
			<span id="line20">temp[i] = arr[k];</span>
			<span id="line21">i++;</span>
		<span id="line22">}</span>
	<span id="line23">}</span>
<span id="line24">}</span>
</pre>		
		</div>
	<div class="button col-xs-12 text-center margin-top-1" id="button">
		<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restart' style='margin-top:4px'>Restart</button>
	</div>
</div>
</body>
<script>
$(document).ready(function() {
	mergeSortTimeComplexity();
//	$(".opacity00").removeClass("opacity00");
});

</script>
</html>