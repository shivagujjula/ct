<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
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
<script type="text/javascript" src="/secure/lang/cpp/js-min/nesc.min.js"></script>
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

.padding00 {
	padding: 0px;
}

.border1px {
	border: 1px solid gray;
	border-radius: 2px;
	height: 530px; 
}

.marginTop10 {
	margin-top: 10px;
}

.opacity00 {
	opacity: 0;
}

.zIndex {
	z-index: 9999999;
	background-color: white;
	position: relative;
}
.displayNone {
	display: none;
}

.panelBodyHeight {
	min-height: 120px;
}

.output-console-body {
	font-size: 11px;
	height: 160px; 
	padding: 5px 20px;
	white-space: normal;
}

.output-console-title-bar {
	background-color: graytext;
}

.error {
	color: red;
}

.opacity55 {
	opacity: 0.55;
}


r {
	color: red;
}

p {
	color: fuchsia;
}

g {
	color:green;
}

.margin-top-20 {
	margin-top: 20px;
}
.introjs-fixParent {
	position: relative !important;
}
</style>
<script type="text/javascript">

$(document).ready(function() {
	nestedClassesReadyFunction();
})

</script>

</head>
<body>
	<h3 class="col-xs-12 text-center ">
		<span class="label label-default ct-demo-heading" id="heading">Nested Class</span>
	</h3>
<div class="col-xs-12 margin-top-20">
<div class="col-xs-5">
<div class="col-xs-12">
<pre id="preCode" class="col-xs-12 opacity00">
<div id="headers" class="opacity00"><span>#include&lt;iostream&gt;</span>
<span>using namespace std;</span>
<div id="outerClass"><span>class Outer {</span>
	<span id="iValue" class="opcity00 outerProperty">int i;</span>
 <div id="innerClass" class="opcity00"><span>public class Inner </span>{
     <span>int s;</span>
     
    <span id="disp2"><span> public void display2() </span>{
       <span>cout << "CodeTantra Inner Class" << "\n";</span>
       <span>cout << s << "\n";</span>
       <span id="error1"><span id="errOut" class="opacity00">cout << "i = " << i << "\n";</span> <r><b class="opacity00">//Error !! i is private to outer</b></r></span>
     }</span>
  };</div>
    <span id="voidSecond" class="oacity00 outerProperty"><span>public void display1() {</span>
            <span id="objInner2">Inner obj;</span>
            <span id="objDisp2">obj.display2();</span>
    }</span>
<span>};</span></div>

<div id="mainMthd"><span>int main() </span>{
  <span id="outerId" class="opcity00"><span id="outerObj">Outer ot;</span>
  <span id="error2"><span id="errInner" class="opacity00">Inner in;</span>
  <span id="errDisp2" class="opacity00">in.display2();</span></span>
  <span id="otDisp1" class="opacity00">ot.display1();</span></span>
    
  <span id="twoObj" class="opacity00"><span>Outer :: Inner in;</span>
  <span>in.display2();</span></span>
<span>}</span></div></div>
</pre>
</div>
</div>
<div id="memoryBox" class="col-xs-6 border1px opacity00">
	<div class="col-xs-12 padding00 marginTop10">
		<div id="parentPanel" class="panel panel-primary col-xs-offset-1 col-xs-10 padding00  visibility-hidden ">
			<div class="panel-heading text-center">Class Outer</div>
			<div class="panel-body panelBodyHeight">
				<div class="col-xs-12">
					<div class="col-xs-offset-1 col-xs-4">
						<div id="varI" class="panel panel-primary padding00 displayNone">
							<div class="panel-heading text-center"><b>i</b></div>
							<div class="panel-body text-center">1</div>
						</div>
					</div>
					<div class="col-xs-6">
						<div id="childPanelOfOuter" class="panel panel-primary padding00 displayNone" style="height:160px;">
							<div class="panel-heading text-center">Class Inner</div>
							<div class="panel-body text-center">
								<div id="childPanel" class="panel col-xs-offset-2 col-xs-8 panel-primary padding00 displayNone">
									<div class="panel-heading text-center"><b>s</b></div>
									<div class="panel-body text-center">0</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-12">
			<div id="outputBox" class="output-console center opacity00">
				<div class="output-console-title-bar"><span>Output</span></div>
				<div class="output-console-body"></div>
			</div>
		</div>		
	</div>
</div>
</div>
		<div class="col-xs-12 text-center margin-top-20">
			<div><button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div>
		</div>
</body>
</html>