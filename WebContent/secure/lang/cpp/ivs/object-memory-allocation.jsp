<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Memory Allocation</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/custom-styles.css" />

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/secure/lang/cpp/js-min/oma.min.js"></script>
<style type="text/css">
.creamPreTab4, pre {
	-moz-tab-size: 2;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 11px;
	margin: 5px;
	padding: 10px;
	font-family: monospace;
}

pre {
	tab-size: 2;
}

.padding00 {
	padding: 0px;
}

.border1px {
	border: 1px solid gray;
	border-radius: 2px;
	height: 450px;
}

.memory-box {
	border: 1px solid gray;
	height: 200px;
}

.output-console-body {
	font-size: 11px;
	/* height: 75px; */
	padding: 5px 20px;
	white-space: normal;
}

.elementBorder {
	border: 1px solid gray;
}

.marginTop {
	margin-top: 22%;
	padding : 10px;
}

.opacity00 {
	opacity: 0;
}

.zIndex {
	z-index: 10000000;
	position: relative;
	background-color: #fffae6;
}

.panel-heading {
	padding: 4px 15px;
}

.panel-body {
	padding: 13px;
}
</style>
<script type="text/javascript">

$(document).ready(function() {
	objectMemoryAllocationReady();
})

</script>
</head>
<body>
	<h3 class="col-xs-12 text-center margin-top-20">
		<span class="label label-default ct-demo-heading" id="heading">Memory Allocation</span>
	</h3>
	<div class="col-xs-12">
<pre class="col-xs-3">
<span id="headerFile"><span>#include&lt;iostream&gt;</span>
<span>using namespace std;</span></span>

<div id="classDecl"><span>class Item </span>{
		<span id="privateVariable"><span>int itemno;</span>
		<span>float price;</span></span>
		<span id="putData"><span>public: void putData(int i, float j)</span>
		<span>{</span>
			<span>itemno = i;</span>
			<span>price = j;</span>
		<span>}</span></span>
		<span id="getData"><span>public: void getData(void)</span>
		<span>{</span>
			<span>cout << "Items : " << itemno;</span>
			<span>cout <<"\n" << "Price" << price <<"\n"; </span>
		<span>}</span></span>
<span>};</span></div>

<div id="mainMthd"><span>int main() </span>{
		<span id="objDec">Item s1, s2;</span>
		<span id="putIn1">s1.putData(1001, 17.2);</span>
		<span id="putIn2">s2.putData(1002, 18.5);</span>
		<span id="getIn1">s1.getData();</span>
		<span id="getIn2">s2.getData();</span>
<span>}</span></div>         
</pre>
<div class="col-xs-8 border1px opacity00">
			<div class="col-xs-12 padding00" id="fullStack" style="margin-top: 5px;">
			<div id="objMemory" class="" style="min-height:180px;">
				<div class="col-xs-4 pading00">
					<div class="col-xs-12 padding00">
						<div class="col-xs-offset-0 col-xs-0 objMemory opacity00">
							<div id="s1" class="panel panel-primary text-center padding00">
								<div class="panel-heading"><b>s1</b>(Object)</div>
								<div class="panel-body">
									<div class="panel panel-primary col-xs-5 padding00  ">
										<div class="panel-heading">itemno</div>
										<div class="panel-body itemNoS1 opacity00">1001</div>
									</div>
									<div class="panel panel-primary col-xs-offset-2 col-xs-5 padding00  ">
										<div class="panel-heading">price</div>
										<div class="panel-body priceNoS1 opacity00">17.2</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-xs-4 paddig00">
					<div class="col-xs-12 padding00">
						<div id="s2" class="col-xs-offset-0 col-xs-0 objMemory opacity00">
							<div class="panel panel-primary text-center padding00">
								<div class="panel-heading"><b>s2</b>(Object)</div>
								<div class="panel-body">
									<div class="panel panel-primary col-xs-5 padding00  ">
										<div class="panel-heading">itemno</div>
										<div class="panel-body itemNoS2 opacity00">1002</div>
									</div>
									<div class="panel panel-primary col-xs-offset-2 col-xs-5 padding00  ">
										<div class="panel-heading">price</div>
										<div class="panel-body priceNoS2 opacity00">18.5</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-xs-4 pading00">
					<div class="col-xs-12 padding00">
						<div id = "memoPutData" class="opacity00">
							<div  class="panel panel-primary text-center padding00">
								<div class="panel-heading"><b>putData()</b></div>
								<div class="panel-body">
									<div class="panel panel-primary col-xs-5 padding00 ">
										<div class="panel-heading">itemno</div>
										<div class="panel-body">i</div>
									</div>
									<div class="panel panel-primary col-xs-offset-2 col-xs-5 padding00">
										<div class="panel-heading">price</div>
										<div class="panel-body">j</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
			</div>
			<div class="col-xs-12 padding00">
				<div class="col-xs-6">
					<div class="col-xs-offset-2 col-xs-9 padding00">
						<div id="memoGetData" class="panel panel-primary text-center padding00 opacity00">
							<div class="panel-heading"><b>getData()</b></div>
							<div class="panel-body">
								<div class="panel panel-primary col-xs-5 padding00 ">
									<div class="panel-heading">itemno</div>
									<div class="panel-body">i</div>
								</div>
								<div
									class="panel panel-primary col-xs-offset-2 col-xs-5 padding00">
									<div class="panel-heading">price</div>
									<div class="panel-body">j</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-6">
					<div id="outputBox" class="output-console center opacity00">
						<div class="output-console-title-bar">
							<span>Output</span>
						</div>
						<div class="output-console-body">
							<div id="s1OutPut" class="opacity00">
								<div><span>Items : </span><span>1001</span></div>
								<div><span>Price : </span><span>17.2</span></div>
							</div>
							<div id="s2OutPut" class="opacity00">
								<div><span>Items : </span><span>1002</span></div>
								<div><span>Price : </span><span>18.2</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center">
			<div><button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div>
		</div>
</body>
</html>