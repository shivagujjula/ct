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
<script src='/secure/lang/cpp/js-min/Oiaeoic.min.js'></script>
<title>Overloading Insertion(<<) and Extraction(>>) Operators in cpp</title>
</head>
<style>

#infoDiv {
	background-color: rgb(243, 235, 235);
	border : 1px solid grey;
	border-radius: 10px;
	font-size: 14px;
	padding: 9px 14px;
}
.creamPreTab1 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 13px;
	margin-top: 25px;
	padding: 6px;
	white-space: pre;
}

/* .td-css {
	border: 1px solid gray;
} */

.table>tbody>tr>td {
   padding: 6px;  
    line-height: 1.42857143;
  	vertical-align: top;    
     border: none;
    
}
/* .table1 > td  {
	 border-top: none;
} */
#introduction {
	background-color: rgb(243, 235, 235);
}
#heading {
	margin-top:10px;
}
.introjs-tooltip-min-width-custom {
	width: 350px;
}
.introjs-tooltip-width-one {
	width: 580px;
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
#consoleId {
	width : 400px;
}
.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #e5ec07;
	font-family: monospace;
	font-size: 13px;
	height: 300px; 
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
#noVal{
	position: absolute;
    color: #0f0;
    margin-top: 12px;
    margin-left: 25px;
}
#marksVal{
	position: absolute;
    color: #0f0;
    margin-top: 12px;
    margin-left: 30px;
}
.box-Heading {
	font-weight: bold; color: rgb(47, 79, 79);
}
div, span {
	position: relative;
}

.z-index9999999 {
	z-index: 9999999;
}
.margin-top-4 {
	margin-top: 4%;
}

.panel-heading, .panel-body {
	padding: 5px;
}

.panel-group {
	margin-top: 40px;
	margin-bottom: 7px;
}

.introjs-tooltip {
	min-width: 220px;
	max-width: 650px;
}
.address-box {
	height: 256px;
	border: 1px solid lightgray;
	border-radius: 4px;
}
#noBox, #marksBox {
	height: 72px;
	width: 144px;
}
.padding0 {
	padding: 0px;
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

.blinking {
	animation-name: blink;
	animation-duration: 2s;
	animation-iteration-count: 1;
 }

@keyframes blink {
	50% {
		background: orange;
	}
}

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 9999999 !important;
	display: inline-block;
	min-width: 5%; 
	min-height:4%; 
	display: inline-block; 
	position: relative;
}

@keyframes blinker {  
  100% { opacity: 0.0; }
}

@keyframes myfirst { 0% {
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
[contenteditable="true"] {
	font-weight: normal;
	outline: medium none;
}
.box-border {
	border: 1px solid gray;
	border-radius: 8px;
	padding: 10px;
}
.box-border-title {
	border: 1px solid gray;
	border-radius: 8px;
	padding: 10px;
}
.border-height-css {
	border: 1px solid;
	height: 22px;
}

.errorText {
	color: red;
	font-weight: bold;
}

.output-console-title-bar {
	background-color: rgba(165, 165, 165, 0.5);
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
.position {
	position : relative;
}
.displayBlock {
	position: relative;
	display: inline-block;
}
.method-box-text-css {
	background: lightblue none repeat scroll 0 0;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-family: monospace;
	padding: 5px;
	text-align: center;
}



</style>
<script>
	$(document).ready(function() {
		usageOfGetcharReady();
	});
</script>
<body>
<div class="main-div col-xs-12">
	<div class="row text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-2'>
			<span>Overloading insertion and extraction operators in c++</span>
		</h3>
	</div>
	<div class="col-xs-8 col-sm-offset-2 margin-top-2" id="infoDiv">
		<ul>
		 	<li id="list" class="opacity00">In C++, stream insertion operator “<<” is used for output and extraction operator “>>” is used for input.<br></li>
		
			 <li id="list1" class="opacity00"><span class="ct-Maroon-color">The following important points are remember when overloading insertion(<<) and extraction(>>) operators : </span>
			 	<ul class="expl">
			 		<li id="list11" class="opacity00">cout is an object of ostream class and cin is an object istream class.</li>
			 		<li id="list12" class="opacity00">These operators must be overloaded as a global function. A global function that needs access to private or protected class members must be declared as a friend of that class.</li>
	 			</ul>
	 			<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span>
 			</li>
		</ul>
	</div>
	<div class="col-xs-12 padding00">
		<div class="col-xs-12" id="codeDiv">
			<div class="col-xs-5 padding00">
			<pre class="creamPreTab1 opacity00" id="preTableDiv">
<span id="preDir"><span id="include">#include</span> &lt;<span id="ioStream">iostream</span>&gt;</span>
<span id="lib"><span id="using">using</span> <span id="nameSpace">namespace</span> std;</span>
<span id="class">class Student {
		<span id="char">char name[20];</span>
		<span id="init">int no, marks;</span>
		<span id="friendFunction">public: friend void operator << (ostream &, Student &);</span>
				  <span id="friendFunction1">friend void operator >> (istream &, Student &);</span>
};</span>
<span id="frndFunCout">void operator << (ostream &kits, Student &s) { {
		<span id="sN">kits << "student name : " ;</span>
		<span id="sName1">kits << s.name;</span>
		<span id="no1">kits << "no : ";</span>
		<span id="sNo1">kits << s.no;</span> 
		<span id="marks">kits << "marks : ";</span>
		<span id="sMarks1">kits << s.marks;</span>
}</span>
<span id="frndFunCin">void operator >> (istream &kits, Student &s) { {
		<span id="eSN">cout << "Enter student name : ";</span>
		<span id="sName">kits >> s.name;</span>
		<span id="eN">cout << "Enter no :  ";</span> 
		<span id="sNo">kits >> s.no; </span>
		<span id="eM">cout << "Enter marks :  ";</span> 
		<span id="sMarks">kits >> s.marks;</span>
}</span>
<span id="main">main() {
		<span id="sInit">Student s;</span>
		<span id="eSd">cout << "Enter student details : " << endl;</span>
		<span id="sEnter">cin >> s;</span>
		<span id="tSd">cout << "The student details are : " << endl;</span>
		<span id="sOut">cout << s;</span>
}</span></pre>
			</div>
			<div id="addressDiv" class="col-xs-6 address-box margin-top-2 col-xs-offset-1 opacity00">
				<div class="method-box-text-css box-border">s</div>
					<div class="col-xs-12 box-border opacity00" id="addressAnimationDiv">
						<table id="tableId" class="table opacity00" style="margin-top: -1px;">
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
								     	<td style="border: none;"><b>name </b>=</td>
								     	<% for (int i = 2; i <= 21; i++) { %>
								     		<td style="border: 1px solid;" class="td-css opacity00"></td>
								     	
								     	<% }%>
								     	
								        <!-- <td style="border: 1px solid;" class="td-css  opacity00"></td>
								        <td style="border: 1px solid;" class="td-css  opacity00"></td>
								        <td style="border: 1px solid;" class="td-css  opacity00"></td>
								        <td style="border: 1px solid;" class="td-css table-bordered"></td>
								        <td style="border: 1px solid;" class="td-css table-bordered opacity00"></td>
								        <td class="td-css table-bordered opacity00"></td>
								        <td class="td-css table-bordered opacity00"></td>
								        <td class="td-css table-bordered opacity00"></td>
								        <td class="td-css table-bordered opacity00"></td>
								        <td class="td-css table-bordered opacity00"></td>
								        <td class="td-css table-bordered opacity00"></td>
								        <td class="td-css table-bordered opacity00"></td>
								        <td class="td-css table-bordered opacity00"></td>
								        <td class="td-css table-bordered opacity00"></td>
								        <td class="td-css table-bordered opacity00"></td>
								        <td class="td-css table-bordered opacity00"></td>
								        <td class="td-css table-bordered opacity00"></td>
								        <td class="td-css table-bordered opacity00"></td>
								        <td class="td-css table-bordered opacity00"></td>
								        <td class="td-css table-bordered opacity00"></td>  -->
							      	</tr>
								</tbody>
							</table>
							<div class="col-xs-12 margin-top-25" id="addressIntDiv">
								<div class="col-xs-4 col-xs-offset-1 opacity00" id="noBox">
									<div class="col-xs-12 text-center box-Heading">
										<div id="boxHeading">no</div>
									</div>
									<div class="col-xs-12 box-border" id="noBoxAnimationDiv">	
										<div id="boxHeading"></div>
											<div style="height: 50px;">
												<span id="noVal" class=" value"></span>
										</div>
									</div>
								</div>
								<div class="col-xs-4 col-xs-offset-1 opacity00" id="marksBox">
									<div class="col-xs-12 text-center box-Heading" style="font-weight: bold; color: rgb(47, 79, 79);">
										<div id="boxHeading">marks</div>
									</div>
									<div class="col-xs-12 box-border" id="marksBoxAnimationDiv">
										<div id="boxHeading"></div>
											<div style="height: 50px;">
												<span id="marksVal" class="ct-sgreen-color value"></span>
											</div>
									</div>
								</div>
						</div>
				</div>
			</div>
			<div class="col-xs-4 col-xs-offset-1 margin-top-25">
				<div id="consoleId" class="center opacity00" style="margin-top: 3%; ">
					<div class="output-console-title-bar">
						<span class="title"><b>Console</b></span>
					</div>
					<div class="output-console-body" id="consoleBodyDiv">
						<div id="stuDet">Enter student details : </div><br>
						<div id="enterStuName" class="opacity00" >Enter student name :   <input id="enterName"  class="input-char position opacity00" spellcheck="false" /></div><br>
						<div id="enterNo" class="opacity00">Enter no :  <input id="printLineInConsole1"  maxlength="5" class="input-char2 position opacity00" spellcheck="false"></input></div><br>
						<div id="enterMarks" class="opacity00">Enter marks :  <input id="printLineInConsole2" maxlength="4" class="input-char2 opacity00" spellcheck="false"></input></div><br>
						<div id="theStuDet" class="opacity00">The student details are : </div><br>
						<div id="stuName" class="opacity00">student name : <span id="printLineInConsole3" class="opacity00" style="min-width: 15%; min-height:15%; display: inline-block; position: relative;"></span></div><br>
						<div id="stuNo" class="opacity00">no : <span id="printLineInConsole4" class="opacity00" style="min-width: 15%; min-height:15%; display: inline-block; position: relative;"></span></div><br>
						<div id="stuMarks" class="opacity00">marks : <span id="printLineInConsole5" class="opacity00" style="min-width: 15%; min-height:15%; display: inline-block; position: relative;"></span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="margin-top-20 col-xs-12 text-center">
		<span class="col-xs-6 col-xs-offset-3">
	 		<span class="col-xs-12">
	 			<span class="col-xs-8 col-xs-offset-2">
	 				<span class="col-xs-12" id="button" style=''>
						<span class="btn btn-warning opacity00" id="closeBtn">Close <i class="fa fa-close"></i></span>&nbsp;&nbsp;
						<span class="btn btn-restart opacity00" id="restartBtn">Restart <i class="fa fa-refresh"></i></span>
					</span>
				</span>
			</span>
		</span>
	</div>
</div>
</body>
</html>