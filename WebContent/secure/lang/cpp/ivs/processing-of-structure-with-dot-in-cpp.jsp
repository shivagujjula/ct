<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/data-structures-css.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/cpp/js-min/poswdic.min.js"></script>
<title>Processing of Structure with Dot Operator</title>
<style>

.information-div {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-family: monospace;
	z-index: 9999999;
	border-radius: 5px;
	border: 1px solid gray; 
}

.creampretab4 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: lavender !important;
	font-size: 12px;
	font-family: monospace;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px; 
	border-bottom-right-radius: 6px;
	height: 135px;
	padding: 10px;
	white-space: normal;
}

.output {
	font-size: 14px;
	font-weight: bold;
}

.margin-top20 {
	margin-top: 20px;
}

.cursor-wait {
    cursor: wait !important;
}

.ct-code-b-green {
	color: green;
}

.ct-code-b-red {
	color: red;
	font-weight: bold;
}

.user-btn {
	background: green;
	margin: 0 !important;
}

.introjs-tooltip {
	min-width: 300px;
}

td {
	text-align: center;
}

.introjs-fixParent {
	position: relative !important;
}

.syntax-css {
	background-color: #f5f5f5;
	border: 1px solid #cdc7c7;
	border-radius: 4px;
	padding: 1px;
}
.index-box {
	border: 1px;
	padding: 1px;
	text-align: center;
	width: 25px;
	height: 25px;
	color: gray;
	font-size: 12px;
}

.small-box {
	border: 1px solid gray;
	padding: 1px;
	text-align: center;
	width: 28px;
	height: 25px;
}

tr, td {
	position: relative;
}

.panel-body1 {
 	padding: 10px;
 	min-height: 35px;
 } 
 .panel-primary {
 	border-color: #b2be83;
}
.panel-primary>.panel-heading {
	 color: #fff;
	 background-color: #a7b571;
	 border: 0px;
	 font-weight: bold;
 }
 .panel-primary>.panel-heading1 {
	 color: #fff;
	 background-color: #b2be83;
	 border: 0px;
	 font-weight: bold;
 }
 .panel-body {
 	padding: 30px;
 	/* margin-bottom: 20px; */
	padding-top: 8px;
 }
 .box-border2 {
	border: 1px solid #836e8a;
	margin: 10px;
}
.margin-top {
	margin-top: 20px;
}

.z-index {
	z-index: 9999999;
	background: white;
	position: relative;
}

.object-css {
	background: aquamarine;
	padding: 5px;
	font-size: 15px;
	font-weight: bold;
}

.ui-effects-transfer {
	border: 1px solid green;
	padding: 2px;
	z-index: 9999999 !important;
}

.input-all {
  width: 100%;
  border-width: 0px 0 0 0;
  background-color: #000;
  color: #0f0;
}

div,span {
	position: relative;
}

.blinking {
	animation-name: blinking;
	animation-duration: 0.3s;
	animation-iteration-count: 3;
 }

@keyframes blinking {
	50% {
		background: #ffae1a;
	}
}

m {
	color: maroon;
	font-weight: bold;
}

g {
	color: green;
	font-weight: bold;
}

pink {
	color: deeppink;
}

blue {
	color: blue;
}

</style>
</head>
<body>
	<script>
		/* Modification done by Durga Mahesh (17-08-17)
		Change the error color form white to red */
		$(document).ready(function() {
			processingOfStructureWithDotReady();
		});
	</script>

	<h2 class="text-center">
		<span class="label label-default ct-demo-heading" id = "heading">Processing of structure using dot(.) operator</span>
	</h2>
	<div id="informationDiv" class="col-xs-offset-2 col-xs-8 information-div" style="margin-top: 7px;">
		<div class="col-xs-12" id="text">
			<ul>
				<li id="li1" class="opacity00"><span class="ct-code-b-green">Processing of structure</span> refers to the ways of accessing
					 the members of a structure.</li>
				<li id="li2" class="opacity00"><b class="ct-blue-color">Dot(.) operator</b> is used to access a member of a
						 <span class="ct-code-b-green">structure</span>.<br>
						 &emsp; <b>Syntax</b> : <span class="ct-code-b-green syntax-css">object.member</span></li>
			</ul>
		</div>
	</div>
	<div class="col-xs-12 margin-top20">
		<div class="col-xs-6">
			<pre class="code-div creampretab4 opacity00" id="codeDiv">
<blue>#include</blue> <pink>&lt;iostream&gt;</pink>
<m>using namespace</m> std;			
<span id="declaration"><span id="structLine"><m>struct</m> employee {</span>
	<span id="variableDefinition"><span id="charData"><g>char</g> name[<pink>20</pink>];</span>
	<span id="intData"><g>int</g> age;</span>
	<span id="floatData"><g>float</g> salary;</span></span>
	<span id="readDataFunction"><g>void</g> readData() {
		<span id="readDataFunCout">cout << <pink>"Enter name, age and salary details : "</pink>;</span>
		<span id="readDataFunCin">cin >> name >> age >> salary;</span>
	}</span>
};</span>
<span id="mainDeclaration"><g>int</g> main() {
	<span id="empId">employee emp;</span>
	<span id="readDataId">emp.readData();</span>
	<span id="mainCout"><span id="coutId1">cout << <pink>"name : "</pink> << <span id="coutEmpName">emp.name</span> << endl;</span>
	<span id="coutId2">cout << <pink>"age : "</pink> << <span id="coutEmpAge">emp.age</span> << endl;</span>
	<span id="coutId3">cout << <pink>"salary : "</pink> << <span id="coutEmpSalary">emp.salary</span> << endl;</span></span>
}</span>
</pre>
		</div>
		<div class="col-xs-6">
			<div class="col-xs-12 opacity00" id="animationDiv" style="border: 1px solid gray; padding: 0;">
				<div class="text-center object-css" id="empObjectDiv"><span id="empObjectSpan">emp</span></div>
				<div class="box-border2 panel panel-primary  padding margin-top opacity00" id="borderBox">
					<div class="panel-heading text-center" id="s1"><span id="s1Span">name</span></div>
							
					<div style="padding: 8px;">
						<table class="table">
							<tr>
								<%
									for(int i = 0; i < 20; i++) {%>
										<td class="index-box" style="border-top: none;"><%=i%></td>
								<%	}
								%>
							</tr>
							<tr>
								<%
									for(int i = 0; i < 20; i++) {%>
										<td class="small-box" id="charAtTd<%=i %>" style="border-top: 1px solid gray;"></td>
								<%	}%>
							</tr>
						</table>
					</div>
				</div>
				<div class="col-xs-12 panel-body">
					<div class="col-xs-3 col-xs-offset-3 text-center box-border1" id="borderBox1" style='margin-top:12px;'>
						<div class="panel panel-primary padding margin-top opacity00" id="bodyBox1">
							<div class="panel-heading1 text-center"><span id="panelAge">age</span></div>
							<div class="panel-body1 text-center" id="boxParent">
								<span class="arrayValue text-center position" id="box1"></span>
							</div>
						</div>
					</div>
					<div class="col-xs-3  text-center box-border1" id="borderBox2" style='margin-top:12px;'>
						<div class="panel panel-primary padding margin-top opacity00" id="bodyBox2">
							<div class="panel-heading1 text-center"><span id="panelSalary">salary</span></div>
							<div class="panel-body1 text-center" id="boxParent1">
								<span class="arrayValue text-center position" id="box2"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-4 col-xs-offset-4 margin-top20 output-div opacity00" id="outputDiv" style="padding: 0">
			<div class="output-console-title-bar"><span class="title">Output</span></div>
			<div class="output-console-body"><span class="output" id="output"></span></div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top20" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</body>
</html>