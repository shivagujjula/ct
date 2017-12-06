<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<script src='/secure/lang/cpp/js-min/coiaeoic.min.js'></script>
<title>Cascading of Insertion(<<) and Extraction(>>) Operators in cpp</title>
</head>
<style>

#infoDiv {
	background-color: rgb(243, 235, 235);
	border : 1px solid grey;
	border-radius: 10px;
	font-size: 14px;
	padding: 9px 14px;
	min-height: 232px;
}
.creamPreTab1 {
	-moz-tab-size: 2;
	tab-size: 2;
	background-color: #fffae6;
	border-radius: 8px;
	margin-top: 25px;
	padding: 6px;
	white-space: pre;
}
#introduction {
	background-color: rgb(243, 235, 235);
}
#heading {
	margin-top:10px;
}
/*table */
.table>tbody>tr>td {
    padding: 1px;
    line-height: 1.42857143;
    vertical-align: top;
    min-width: 20px;
    min-height: 20px;
    text-align: center;
    border-top:0;
 }

.introjs-tooltip-width-custom {
	min-width: 250px;
}

#restart {
    margin-top: 13%;
} 

.margin-top-2 {
	margin-top: 2%;
}
.margin-top-25 {
	margin-top: 25px;
}
.margin-custom {
	margin: 25px 0px 25px 0px;

}

#line1 {
	color: maroon;
}
.ct-sgreen-color {
	color: #0f0;
	font-weight: bold;
}
.ct-green-color {
    color: green;
    font-weight: bold;
}
.ct-orange-color {
	color: orange;
	
}
.ct-red-color {
	color: red;
	font-weight: bold;
}
.ct-blue-color {
	color: blue;
	font-weight: bold;
}
.ct-code-b-black {
	font-weight: bold;
	font-family: monospace;
	color: black;
}

.ct-code-b-gold {
	color: gold;
	font-weight: bold;
	border-top: none;
}
.ct-code-b-green{
	font-weight: bold;
	color: green;
}

.ct-Maroon-color {
	color: #800021;
	font-weight: bold;
	border-top : none;
}

.ct-white-color {
	color: navajowhite;
	font-weight: bold;
}
.ct-code-b-yellow {
	color: yellow;
	font-weight: bold;
}
.ct-color-spring {
	color: mediumspringgreen;
}

.ct-code-b-teal {
	font-family: message-box;
	color: teal;
}
ul.expl {
	list-style-type: square;
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
	background : white;
	color : black;
}

.input-char {
	min-width: 200px; 
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}
.input-char2 {
	min-width: 45px; 
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}
.box-Heading {
	font-weight: bold; 
	color: rgb(47, 79, 79);
}
#addressDiv, #addressDiv1 {
	min-height: 154px;
}
#addressAnimationDiv, #addressAnimationDiv1 {
	min-height: 131px;
	border-top: 0px;
}
div, span {
	position: relative;
}

.z-index9999999 {
	z-index: 9999999;
}
.panel-heading, .panel-body {
	padding: 5px;
}

.panel-group {
	margin-top: 40px;
	margin-bottom: 7px;
}

.panel-heading {
	padding: 2px 40px;
}

.panel-body {
	padding: 12px 44px;
	height: 40px;
}

.panel-group {
	margin-top: 45px;
}
.fa-arrow-left {
	color: green;
	position: relative;
	-webkit-animation: myfirst 1s infinite; /* Chrome, Safari, Opera */
	-webkit-animation-direction: alternate; /* Chrome, Safari, Opera */
	animation: myfirst 1s infinite;
}

.user-btn {
	background-color:green;
}

.blinking-white {
	animation-name: blink-border-background-white ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-white { 
	50% {
		border-color: white;
		background: white;
	}
}

.blinking-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 2s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-orange { 
	50% {
		border-color: white;
		background: orange;
	}
}

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 1000000 !important;
	position: relative;
}


.position {
	display: inline-block;
	position: relative;
}
[contenteditable="true"] {
	font-weight: normal;
	outline: medium none;
}
.box-border {
	border: 1px solid gray;
}
.errorText {
	color: red;
	font-weight: bold;
}

.output-console-title-bar {
	background-color: rgba(165, 165, 165, 0.5);
	border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
.padding00 {
	padding : 0px;
}
.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}
.bold {
	font-weight: bold;
}
.method-box-text-css {
	background: lightblue none repeat scroll 0 0;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-family: monospace;
	text-align: center;
}

</style>
<script>
	$(document).ready(function() {
		cascadingOfInsertionAndExtractionOperatorsReady();
	});
</script>
<body>
<div class="main-div col-xs-12">
	<div class="row text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-2'>
			<span>Cascading of insertion(<span class="ct-code-b-yellow"><<</span>) and extraction(<span class="ct-code-b-yellow">>></span>)
			 	operators in C++</span>
		</h3>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-8 col-sm-offset-2 margin-top-2" id="infoDiv">
			<ul>
			 	<li id="list" class="opacity00">The cascading of the input and output operators refers to the consecutive occurrence of input or output operators in a single statement.<br></li>
			 	<li id="list1" class="opacity00">In C++, insertion operator (<<) is used to display output on output stream
			 	 and extraction operator (>>) is used to extract input from input stream.<br></li>
			
				 <li id="list2" class="opacity00"><span class="ct-Maroon-color">Points to remember when overloading insertion(<<) and extraction(>>) operators : </span>
				 	<ul class="expl">
				 		<li id="list11" class="opacity00">cout is an object of ostream class and cin is an object of istream class.</li>
				 		<li id="list12" class="opacity00">The operators <span class="ct-code-b-green"><<</span> and 
				 			<span class="ct-code-b-green">>></span> are overloaded  by using only  
				 			<span class="ct-code-b-green">friend functions</span>.</li>
				 		<li id="list13" class="opacity00">For example <span class="ct-code-b-green">cout << ob1</span> is a statement
				 			when operator function call is like as <span class="ct-code-b-green">operator << (cout, ob1)</span>
				 		</li>
				 		<li id="list14" class="opacity00">For example <span class="ct-code-b-green">cin >> ob1</span> is a statement
				 			when operator function call is like as <span class="ct-code-b-green">operator >> (cin, ob1)</span>
				 		</li>
		 			</ul>
		 			<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span>
	 			</li>
			</ul>
		</div>
	</div>
	<div class="col-xs-12 padding00">
			<div class="col-xs-12" id="codeDiv">
				<div class="col-xs-5 padding00">
					<pre class="creamPreTab1 opacity00" id="preTableDiv">
<span id="preDir"><span id="include">#include</span> &lt;<span
							id="ioStream">iostream</span>&gt;</span>
<span id="lib"><span id="using">using</span> <span id="nameSpace">namespace</span> std;</span>
<span id="class">class Student {
		<span id="char">char <span id="charName">name[20]</span>;</span>
		<span id="init">int <span id="intNum">no</span>, <span id="intMarks">marks</span>;</span>
		public: <span id="friendFunction">friend ostream & operator << (ostream &, Student &);</span>
				  <span id="friendFunction1">friend istream & operator >> (istream &, Student &);</span>
};</span>
<span id="frndFunCout">ostream & operator << (ostream &output, Student &s) { 
		<span id="sN">output << "student name : " ;</span>
		<span id="sName1">output << <span id="name">s.name</span>;</span>
		<span id="nAM">output << "no and marks : ";</span>
		<span id="sNAM1">output << <span id="num">s.no</span> << <span id="mark">s.marks</span></span>
		<span id="return1">return(output);</span>
}</span>
<span id="frndFunCin">istream & operator >> (istream &input, Student &s) { 
		<span id="eSN">cout << "Enter student name : ";</span>
		<span id="sName">input >> s.name;</span>
		<span id="eNAM">cout << "Enter no and marks :  ";</span> 
		<span id="sNAM">input >> s.no >> s.marks; </span>
		<span id="return">return input;</span>
}</span>
<span id="main">main() {
		<span id="sInit">Student <span id="s1">s1</span>, <span id="s2">s2</span>;</span>
		<span id="eSd">cout << "Enter two students details : " << endl;</span>
		<span id="sEnter">cin >> s1 >> s2;</span>
		<span id="tSd">cout << "The student details are : " << endl;</span>
		<span id="sOut">cout << s1 << s2;</span>
		<span id="retNull">return 0;</span>
<span id="end">}</span></span>
					</pre>
				</div>
				<div id="memDiv"
					class="col-xs-offset-1 col-xs-6 padding00 margin-top-2">
					<div id="addressDiv" class="col-xs-12 padding00 margin-top-2 opacity00">
						<div class="text-center box-Heading">
							<div class="method-box-text-css box-border opacity00" id="obj">s1</div>
						</div>
						<div class="col-xs-12 box-border opacity00" id="addressAnimationDiv">
							<table id="tableId" class="table opacity00">
								<tbody>
									<tr class="table1">
										<td class=""></td>
										<td class="ct-Maroon-color">0</td>
										<td class="ct-Maroon-color">1</td>
										<td class="ct-Maroon-color">2</td>
										<td class="ct-Maroon-color">3</td>
										<td class="ct-Maroon-color">4</td>
										<td class="ct-Maroon-color">5</td>
										<td class="ct-Maroon-color">6</td>
										<td class="ct-Maroon-color">7</td>
										<td class="ct-Maroon-color">8</td>
										<td class="ct-Maroon-color">9</td>
										<td class="ct-Maroon-color">10</td>
										<td class="ct-Maroon-color">11</td>
										<td class="ct-Maroon-color">12</td>
										<td class="ct-Maroon-color">13</td>
										<td class="ct-Maroon-color">14</td>
										<td class="ct-Maroon-color">15</td>
										<td class="ct-Maroon-color">16</td>
										<td class="ct-Maroon-color">17</td>
										<td class="ct-Maroon-color">18</td>
										<td class="ct-Maroon-color">19</td>
									</tr>
									<tr id="tableRowId" class="">
										<td style="border-top: none;"><b>name </b>=</td>
										<% for (int i = 2; i <= 21; i++) { %>
										<td style="border: 2px solid green;" class="td-css opacity00"></td>

										<% }%>
									</tr>
								</tbody>
							</table>
							<div class="col-xs-12" id="addressIntDiv">
								<div class="col-xs-3 col-xs-offset-2 opacity00" id="noBox">
									<div class="text-center method-box-text-css box-border">
										<div id="boxHeading">no</div>
									</div>
									<div class="box-border" style = "border-top: 0px" id="noBoxAnimationDiv">
										<div style="height: 25px;" class="text-center">
											<span id="noVal" class="arrayValue ct-code-b-green value"></span>
										</div>
									</div>
								</div>
								<div class="col-xs-3 col-xs-offset-2 opacity00" id="marksBox">
									<div class="text-center method-box-text-css box-border">
										<div id="boxHeading">marks</div>
									</div>
									<div class="box-border" style = "border-top: 0px" id="marksBoxAnimationDiv">
										<div style="height: 25px;" class="text-center">
											<span id="marksVal" class="arrayValue ct-code-b-green value"></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="addressDiv1"
						class="col-xs-12 padding00 margin-top-2 opacity00">
						<div class="method-box-text-css box-border opacity00" id="obj1">s2</div>
						<div class="col-xs-12 box-border opacity00"
							id="addressAnimationDiv1">
							<table id="tableId1" class="table opacity00">
								<tbody>
									<tr class="table1">
										<td class=""></td>
										<td class="ct-Maroon-color">0</td>
										<td class="ct-Maroon-color">1</td>
										<td class="ct-Maroon-color">2</td>
										<td class="ct-Maroon-color">3</td>
										<td class="ct-Maroon-color">4</td>
										<td class="ct-Maroon-color">5</td>
										<td class="ct-Maroon-color">6</td>
										<td class="ct-Maroon-color">7</td>
										<td class="ct-Maroon-color">8</td>
										<td class="ct-Maroon-color">9</td>
										<td class="ct-Maroon-color">10</td>
										<td class="ct-Maroon-color">11</td>
										<td class="ct-Maroon-color">12</td>
										<td class="ct-Maroon-color">13</td>
										<td class="ct-Maroon-color">14</td>
										<td class="ct-Maroon-color">15</td>
										<td class="ct-Maroon-color">16</td>
										<td class="ct-Maroon-color">17</td>
										<td class="ct-Maroon-color">18</td>
										<td class="ct-Maroon-color">19</td>
									</tr>
									<tr id="tableRowId1" class="">
										<td style="border-top: none;"><b>name </b>=</td>
										<% for (int i = 2; i <= 21; i++) { %>
										<td style="border: 2px solid green;" class="td-css opacity00"></td>

										<% }%>
									</tr>
								</tbody>
							</table>
							<div class="col-xs-12" id="addressIntDiv">
								<div class="col-xs-3 col-xs-offset-2 opacity00" id="noBox1">
									<div class="text-center method-box-text-css box-border">
										<div id="boxHeading">no</div>
									</div>
									<div class="box-border" style = "border-top: 0px" id="noBoxAnimationDiv1">
										<div style="height: 25px;" class="text-center">
											<span id="noVal1" class="arrayValue1 ct-code-b-green value"></span>
										</div>
									</div>
								</div>
								<div class="col-xs-3 col-xs-offset-2 opacity00" id="marksBox1">
									<div class="text-center method-box-text-css box-border">
										<div id="boxHeading">marks</div>
									</div>
									<div class="box-border" style = "border-top: 0px" id="marksBoxAnimationDiv1">
										<div style="height: 25px;" class="text-center">
											<span id="marksVal1" class="arrayValue1 ct-code-b-green value"></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12">
					<div class="col-xs-9">
						<div id="consoleId" class="center opacity00"
							style="margin-top: 3%;">
							<div class="output-console-title-bar">
								<span class="title"><b>Console</b></span>
							</div>
							<div class="output-console-body" id="consoleBodyDiv">
								<div id="stuDet">Enter two students details :</div>
								<div id="enterStuName" class="opacity00">
									Enter student name : <input id="enterName"
										class="input-char position opacity00" spellcheck="false" />
								</div>
								<div id="enterNAM" class="opacity00">
									Enter no and marks : <span id="printLineInConsoleNAM"><div
											id="printLineInConsole1" contenteditable="false" 
											class="position input-char"></div></span>
								</div>
								<div id="enterStuName1" class="opacity00">
									Enter student name : <input id="enterName1"
										class="input-char position opacity00" spellcheck="false" />
								</div>
								<div id="enterNAM1" class="opacity00">
									Enter no and marks : <span id="printLineInConsoleNAM1"><div
											id="printLineInConsole2" contenteditable="false"
											class="position input-char"></div></span>
								</div>
								<div id="theStuDet" class="opacity00">The student details
									are :</div>
								<div id="stuName" class="opacity00">
									student name : <span id="printLineInConsole3"
										class="ct-sgreen-color"></span>
								</div>
								<div id="stuNAM" class="opacity00">
									no and marks : <span id="printLineInConsole4"
										class="opacity00 ct-sgreen-color"></span>  <span id="printLineInConsole41"
										class="ct-sgreen-color"></span>
								</div>
								<br>
								<div id="stuName1" class="opacity00">
									student name : <span id="printLineInConsole5"
										class="opacity00 ct-sgreen-color"></span>
								</div>
								<div id="stuNAM1" class="opacity00">
									no and marks : <span id="printLineInConsole6"
										class="opacity00 ct-sgreen-color"></span> <span id="printLineInConsole61"
										class="ct-sgreen-color"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
					<!--ends-->
			</div>
		</div>
	</div>	
	<div class="col-xs-3 col-sm-offset-4">
		<div class="col-sm-5 col-sm-offset-4 margin-top-4" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</div>
</body>
</html>
