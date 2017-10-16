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
<script src="/secure/lang/cpp/js-min/ctwp.min.js"></script>
<title>Class Templates with Parameters</title>
<style type="text/css">
.margin-top {
	margin-top: 2px;
}
.margin-top1 {
	margin-top: 5px;
}
#informationDiv {
	border: 2px solid gray;
	border-radius: 4px;
}
y, g, r {
	font-weight: bold;
}
g,g1{
	color: green;
}
y {
	color: yellow;
}
.green {
	color: green;
}
.ct-green {
	color: green;
	font-weight: bold;
}
.text {
	color: #d96c2d;
	font-weight: bold;
	font-size: 15px;
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
.display {
	display: inline-block;
}
.user-button {
	background-color: green;
}
.creamPreTab4 {
	tab-size: 3;
	margin: 2px;
	padding: 12px;
	-moz-tab-size: 3;
	border-radius: 8px;
	font-family: monospace; 
	background-color: #e5eecc;
}
#syntax {
	font-weight: bold;
	color: #42403f;
}
.panel-primary>.panel-heading {
	 color: #fff;
	 background-color: #845e90;
	 border: 0px;
	 font-weight: bold;
 }
 .panel-body {
 	padding: 30px;
 	margin-bottom: 20px;
	padding-top: 8px;
 }
 .panel-heading {
 	padding: 6px 11px;
 }
 .panel-body1 {
 	padding: 10px;
 } 
.margin-top3 {
	margin-top: 30px;
}
.box-border {
	border: 2px solid #e4dfdf;
	border-radius: 8px;
	min-height : 230px;
}

.box-border2 {
	border: 1px solid #836e8a;
	border-radius: 8px;
	min-height : 170px;
	margin-left: 10px;
}
.padding {
	padding:0px;
}
.panel-primary {
 	border-color: #6e66a2;
}
.output-console-body {
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	padding: 10px;
	white-space: nowrap;
	min-height: 100px;
}
.output-console-title-bar {
	background-color: #8e8989;
	text-align: center;
}
.position {
	position: relative;
}
.toolTip {
 	width: 280px;
 }
 .ui-effects-transfer {
    border: 2px dashed deeppink;
    z-index: 99999999 !important;
 }
  .ui-effects-transfer-custom {
    background-color: white;
    z-index: 99999999 !important;
    border-radius: 6px;
    border: none;
 }
 .circle-css {
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 1000000;
	background-color: white;
}
.z-index1000000 {
	position:relative;
	background-color:white;
	z-index:1000000 !important;
}
.border {
	border: 2px solid #fbffc5;
	background : #fffdca;
	color: #358d2c;
	border-radius: 3px;
	font-weight: bold;
}
.blinking-white {
	animation-name: blink-border-background-white;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-white { 
50% {
	border-color: white;
	background: yellow;
}

}
</style>
</head>
<body>
<div class='col-xs-12'>
	<div class='margin-top text-center col-xs-12'>
		<h3>
			<span class='ct-demo-heading label' id="heading">Class Templates with Parameters</span>
		</h3>
	</div>
	<div class="col-xs-12 margin-top">
		<div class="col-xs-8 col-xs-offset-2" id="informationDiv">
			<span id="infoText"><ul><li>We can use morethan 1 generic type in a class <span class='ct-green'>template</span>
			 by using <span class='ct-green'>comma operator</span> to seperate the <span class='ct-green'>tempalte</span> list.</li>
			 <li>The objects are created for class <span class='ct-green'>templates</span> with multiple parameters as<span class="text">
			 < d1, d2, d3, -------, dn >ob;</span></li><li>The type of arguments is mentioned inside angle brackets
			  <span class='ct-green'>< ></span> while creating objects.</li>
			  <div class="red" ><b>Syntax:</b></div>
	<pre id="syntax" class="col-xs-5 creamPreTab4" >
<span>template&lt;class T1, class T2, ...&gt;</span>
<span>class classname {</span>
      <span>...</span>
      <span>...</span>
<span>};</span></pre>
			  <a class="introjs-button user-button" id='nextButton'>Next&rarr;</a></ul></span>
		</div>
	</div>
	<div class="col-xs-12 margin-top1">
		<div class="col-xs-5 opacity00" id="preBody">
			<pre class="creamPreTab4">
<span id="declaration"><span class="violet">#include</span> <span class="pink">&lt;iostream&gt;</span></span>
<span class="red">using namespace</span> std;
<div id="templateDiv" class="display position "><div class="display red" id="template">template</div><div class="display" id="typeName"> <span id="lt">&lt;</span><span id="class1">class</span> <div class="display green" id="t1">T1</div>, <span id="class2">class</span> <div class="display green" id="t2">T2</div><span id="gt">&gt;</span></div></div>
<div class="display" id="class">class <div class="display green">Sample</div> {
	<div class="display" id="genericType1"><div class="display" id="t3">T1</div> <div class="display">x</div>;</div>
	<div class="display" id="genericType2"><div class="display" id="t4">T2</div> <div class="display">y</div>;</div>
	<div id="method" class="display"><div class="green display">public:</div><div class="display"> Sample(<div class="display">T1 a</div>, <div class="display">T2 b</div>) {</div>
	<div class="display position" id="xyValue"><div class="display">x = <div class="display" id="aVal">a</div></div>;
<div class="display">y = <div class="display" id="bVal">b</div></div>;</div>
}</div>
	<div class="display" id="void"><div class="display green">void</div> putdata(){
	<div class="display" id="cout1">cout << <div class='display pink' id="textVal1">"Value of x is :"</div> << <div class=" display" id="xOutput">x</div> << endl;</div>
	<div class="display" id="cout2">cout << <div class='display pink' id="textVal2">"Value of y is :"</div> << <div class=" display" id="yOutput">y</div> << endl;</div>
}</div>
};</div>
<div class="display" id="main">main() {
	<div class="display" id="ob1">Sample<div class="display" id="int">&lt;<g1 class="display" id="intVal1">int</g1>, <g1 class="display" id="intVal2">int</g1>&gt;</div><div class="display" id="obValue1"> ob1(<div class="display pink" id="ten">10</div>,<div class="display pink" id="twenty"> 20</div>)</div>;</div>
	<div class="display" id="put1">ob1.putdata();</div>
	<div class="display" id="ob2">Sample<div class="display" id="float">&lt;<g1 class="display" id="floatVal1">float</g1>, <g1 class="display" id="floatVal2">float</g1>&gt;</div><div class="display" id="obValue2"> ob2(<div class="display pink" id="floatNum1">10.25</div>,<div class="display pink" id="floatNum2"> 20.52</div>)</div>;</div>
	<div class="display" id="put2">ob2.putdata();</div>
	<div class="display" id="ob3">Sample<div class="display" id="intFloat">&lt;<g1 class="display" id="intVal3">int</g1>, <g1  class="display" id="floatVal3">float</g1>&gt;</div><div class="display" id="obValue3"> ob3(<div class="display pink" id="intFloatNum1">70</div>,<div class="display pink" id="intFloatNum2"> 70.52</div>)</div>;</div>
	<div class="display" id="put3">ob3.putdata();</div>
	<div class="display" id="ob4">Sample<div class="display" id="charFloat">&lt;<g1  class="display" id="floatVal4" >float</g1>, <g1  class="display" id="charVal1">char</g1>&gt;</div><div class="display" id="obValue4"> ob4(<div class="display pink" id="charFloatNum1">13.23</div>,<div class="display pink" id="charFloatNum2"> '<span>c</span>'</div>)</div>;</div>
	<div class="display" id="put4">ob4.putdata();</div>
<span id="mainClose">}</span></div>
			</pre>
		</div>
		<div class="col-xs-7 margin-top1" >
			<div class="col-xs-12 box-border margin-top1 opacity00" id="animationBox">
			<div class="col-xs-12 padding">
				<div class="col-xs-5 padding margin-top3 opacity00" id="ob1Box">
					<div class="box-border2 panel panel-primary  padding margin-top " id="borderBox1">
						<div class="panel-heading text-center" id="ob1Memory">ob1</div>
						<div class="col-xs-12 panel-body">
							<div id="one" class="col-xs-6  text-center  box-border1 opacity00" style='margin-top:12px;'>
								<div class="panel panel-primary padding margin-top" id="box1">
									<div class="panel-heading text-center">x</div>
									<div class="panel-body1 text-center">
										<span id="val1" class="opacity00">10</span>
									</div>
								</div>
							</div>
							<div id="two" class="col-xs-6 text-center box-border1 opacity00" style='margin-top:12px;'>
								<div class="panel panel-primary padding margin-top" id="box2">
									<div class="panel-heading text-center">y</div>
									<div class="panel-body1 text-center">
										<span id="val2" class="opacity00">20</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-5 padding margin-top3 opacity00" id="ob2Box">
					<div class="box-border2 panel panel-primary margin-top1 padding" id="borderBox2">
						<div class="panel-heading text-center" id="ob2Memory">ob2</div>
						<div class="col-xs-12 panel-body">
							<div id="three" class="col-xs-6  text-center box-border1 opacity00" style='margin-top:12px;'>
								<div class="panel panel-primary padding" id="box3">
									<div class="panel-heading text-center">x</div>
									<div class="panel-body1 text-center">
										<span id="val3" class="opacity00">10.25</span>
									</div>
								</div>
							</div>
							<div id="four" class="col-xs-6  text-center box-border1 opacity00" style='margin-top:12px;'>
								<div class="panel panel-primary padding" id="box4">
									<div class="panel-heading text-center">y</div>
									<div class="panel-body1 text-center">
										<span id="val4" class="opacity00">20.52</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div class="col-xs-12 padding">
					<div class="col-xs-5 padding opacity00" id="ob3Box">
						<div class="box-border2 panel panel-primary  padding margin-top " id="borderBox3">
							<div class="panel-heading text-center" id="ob3Memory">ob3</div>
							<div class="col-xs-12 panel-body">
								<div id="five" class="col-xs-6  text-center  box-border1 opacity00" style='padding-top:12px;'>
									<div class="panel panel-primary padding margin-top" id="box5">
										<div class="panel-heading text-center">x</div>
										<div class="panel-body1 text-center">
											<span id="val5" class="opacity00">70</span>
										</div>
									</div>
								</div>
								<div id="six" class="col-xs-6 text-center box-border1 opacity00" style='padding-top:12px;'>
									<div class="panel panel-primary padding margin-top" id="box6">
										<div class="panel-heading text-center">y</div>
										<div class="panel-body1 text-center">
											<span id="val6" class="opacity00">70.52</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-5 padding opacity00" id="ob4Box">
						<div class="box-border2 panel panel-primary margin-top1 padding" id="borderBox4">
							<div class="panel-heading text-center" id="ob4Memory">ob4</div>
							<div class="col-xs-12 panel-body">
								<div id="seven" class="col-xs-6  text-center box-border1 opacity00" style='padding-top:12px;'>
									<div class="panel panel-primary padding" id="box7">
										<div class="panel-heading text-center">x</div>
										<div class="panel-body1 text-center">
											<span id="val7" class="opacity00">13.23</span>
										</div>
									</div>
								</div>
								<div id="eight" class="col-xs-6  text-center box-border1 opacity00"  style='padding-top:12px;'>
									<div class="panel panel-primary padding" id="box8">
										<div class="panel-heading text-center">y</div>
										<div class="panel-body1 text-center">
											<span id="val8" class="opacity00">c</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="output-console col-xs-12 margin-top1 padding00 opacity00" id="outputBox">
				<div class="output-console-title-bar  text-center">
					<span>output</span>
				</div>
				<div class="output-console-body" id="outputBody"></div>
			</div>
		</div>
	</div>
	<div class="button col-xs-12 text-center margin-top-1" id="button">
			<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
	</div>
</div>
<script type="text/javascript">
$(document).ready(function() {
	readPrintStringUsingGetsPutsReady();
});
</script>
</body>
</html>