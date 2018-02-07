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
<script src='/secure/lang/cpp/js-min/oiaeoic.min.js'></script>
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
	font-size: 12px;
	margin-top: 25px;
	padding: 6px;
	white-space: pre;
}
.table>tbody>tr>td {
   padding: 6px;  
   line-height: 1.42857143;
   vertical-align: top;    
   border: none;
    
}

#heading {
	margin-top:10px;
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
.ct-sgreen-color {
	color: #0f0;
	font-weight: bold;
}
.ct-green-color {
    color: green;
    font-weight: bold;
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
	min-height: 195px; 
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}
.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 10000000 !important;
}
.output-value-circle {
	background : white;
	color : black;
}
.input-char1 {
	min-width: 200px; 
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}
.input-char2 {
	min-width: 32px; 
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}
.input-char3 {
	min-width: 23px; 
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}
#addressAnimationDiv {
	min-height: 250px;
	border-top: 0px;
}
div, span {
	position: relative;
}

.margin-top-10 {
	margin-top: 10px;
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
	animation-duration: 1s;
	animation-iteration-count: 1;
}

@keyframes blink { 
50% {
	background: orange;
}

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

.blinking-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 2s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000 !important;
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
}
.z-index1000000 {
	background-color: white;
	z-index: 1000000 !important;
 	position: relative; 
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
	/* border-radius: 8px; */
	padding: 10px;
}
.box-border-title {
	border: 1px solid gray;
	border-radius: 8px;
	padding: 10px;
}

.error-text {
	color: red;
	font-weight: bold;
}

.output-console-title-bar {
	background-color: rgba(165, 165, 165, 0.5);
}
.padding00 {
	padding : 0px;
}

.bold {
	font-weight: bold;
}
.position {
	position : relative;
}
.displayBlock {
	display: inline-block;
}
.method-box-text-css {
	background: lightblue none repeat scroll 0 0;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-family: monospace;
	padding: 4px; 
	text-align: center;
}

</style>
<script>
	$(document).ready(function() {
		overloadingInsertionAndExtractionOperatorsReady();
	});
</script>
<body>
<div class="main-div col-xs-12">
	<div class="row text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-2'>
			<span>Overloading insertion (<span class="ct-code-b-yellow"><<</span>) and extraction (<span class="ct-code-b-yellow">>></span>) 
				operators in C++</span>
		</h3>
	</div>
	<div class="cool-xs-12">
		<div class="col-xs-8 col-sm-offset-2 margin-top-2" id="infoDiv">
			<ul>
			 	<li id="list" class="opacity00">In C++, insertion operator (<span class="ct-Maroon-color"><<</span>) is used to display output 
			 		on output stream and extraction operator (<span class="ct-Maroon-color">>></span>) is used to extract input from input stream.<br></li>
				 <li id="list1" class="opacity00"><span class="ct-Maroon-color">Points to remember when 
				 	overloading insertion(<<) and extraction(>>) operators : </span>
				 	<ul class="expl">
				 		<li id="list11" class="opacity00"><span class="ct-code-b-green">cout</span> is an object of 
				 		<span class="ct-code-b-green">ostream</span> class and <span class="ct-code-b-green">cin</span> is an 
				 			object of <span class="ct-code-b-green">istream</span> class.</li>
				 		<li id="list12" class="opacity00">The operators <span class="ct-code-b-green"><<</span> and 
				 			<span class="ct-code-b-green">>></span> are overloaded  by using only 
				 			<span class="ct-code-b-green">friend functions</span>.</li>
				 		<li id="list13" class="opacity00">For example <span class="ct-code-b-green">cout << ob1</span> 
				 			is a statement when operator function call is like as <span class="ct-code-b-green">operator << (cout, ob1)</span>
				 		</li>
				 		<li id="list14" class="opacity00">For example <span class="ct-code-b-green">cin >> ob1</span> 
				 			is a statement when operator function call is like as <span class="ct-code-b-green">operator >> (cin, ob1)</span>
				 		</li>
		 			</ul>
		 			<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span>
	 			</li>
			</ul>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-12" id="codeDiv">
			<div class="col-xs-5 padding00">
			<pre class="creamPreTab1 opacity00" id="preTableDiv">
<span id="preDir"><span id="include">#include</span> &lt;<span id="ioStream">iostream</span>&gt;</span>
<span id="lib"><span id="using">using</span> <span id="nameSpace">namespace</span> std;</span>
<span id="class" class="opacity00">class Student {
		<span id="char" class="opacity00">char name[20];</span>
		<span id="init"  class="opacity00">int <span id="no">no</span>, <span id="mark">marks</span>;</span>
		<span id="public"  class="opacity00">public: <span id="friendFunction" class="opacity00">friend void operator << (ostream &, Student &);</span>
				  <span id="friendFunction1" class="opacity00">friend void operator >> (istream &, Student &);</span></span>
};</span>
<span id="frndFunCout" class="opacity00">void operator << (ostream &output, Student &s) { 
		<span id="sN" class="opacity00">output << "student name : " ;</span>
		<span id="sName1" class="opacity00">output << <span id="name">s.name</span>;</span>
		<span id="no1" class="opacity00">output << "no : ";</span>
		<span id="sNo1" class="opacity00">output << <span id="num">s.no</span>;</span> 
		<span id="marks" class="opacity00">output << "marks : ";</span>
		<span id="sMarks1" class="opacity00">output << <span id="stdMarks">s.marks</span>;</span>
}</span>
<span id="frndFunCin" class="opacity00">void operator >> (istream &input, Student &s) { 
		<span id="eSN" class="opacity00">cout << "Enter student name : ";</span>
		<span id="sName" class="opacity00">input >> s.name;</span>
		<span id="eN" class="opacity00">cout << "Enter no :  ";</span> 
		<span id="sNo" class="opacity00">input >> s.no; </span>
		<span id="eM" class="opacity00">cout << "Enter marks :  ";</span> 
		<span id="sMarks" class="opacity00">input >> s.marks;</span>
}</span>
<span id="main" class="opacity00">int main() {
		<span id="sInit" class="opacity00">Student s;</span>
		<span id="eSd" class="opacity00">cout << "Enter student details : " << endl;</span>
		<span id="sEnter" class="opacity00">cin >> s;</span>
		<span id="tSd" class="opacity00">cout << "The student details are : " << endl;</span>
		<span id="sOut" class="opacity00">cout << s;</span>
<span id="end">}</span></span></pre>
			</div>
			<div class="col-xs-6 col-xs-offset-1 margin-top-2 padding00">
				<div class="col-xs-12 padding00 opacity00" id="addressDiv"> 
					<div class="method-box-text-css box-border opacity00" id="obj">s</div>
						<div class="col-xs-12 box-border opacity00" id="addressAnimationDiv">
							<div class="col-xs-12" id="table">
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
										     	<td style="border-top: none;"><b>name </b></td>
										     	<% for (int i = 2; i <= 21; i++) { %>
										     		<td style="border: 2px solid green;" class="td-css opacity00"></td>
										     	
										     	<% }%>
								      		</tr>
									</tbody>
								</table>
							</div>
							<div class="col-xs-12 margin-top-25" id="addressIntDiv">
								<div class="col-xs-3 col-xs-offset-2 padding00 opacity00" id="noBox">
									<div class="col-xs-12 text-center box-border method-box-text-css">
										<div id="boxHeading">no</div>
									</div>
									<div class="col-xs-12 box-border" style = "border-top: 0px" id="noBoxAnimationDiv">	
										<div id="boxHeading"></div>
											<div style="height: 50px; line-height: 50px" class="text-center">
												<span id="noVal" class="ct-green-color value"></span>
										</div>
									</div>
								</div>
								<div class="col-xs-3 col-xs-offset-2 padding00 opacity00" id="marksBox">
									<div class="col-xs-12 text-center box-border method-box-text-css">
										<div id="boxHeading">marks</div>
									</div>
									<div class="col-xs-12 box-border" style = "border-top: 0px;" id="marksBoxAnimationDiv">
										<div id="boxHeading"></div>
											<div style="height: 50px; line-height: 50px" class="text-center">
												<span id="marksVal" class="ct-green-color value"></span>
											</div>
									</div>
								</div>
							</div>
						</div>
				</div>
				<div class = "col-xs-12">
					<div class="col-xs-10 col-xs-offset-1 margin-top-25">
						<div id="consoleId" class="center opacity00">
							<div class="output-console-title-bar">
								<span class="title"><b>Console</b></span>
							</div>
							<div class="output-console-body" id="consoleBodyDiv">
								<div id="stuDet">Enter student details : </div>
								<div id="enterStuName" class="opacity00" >Enter student name :   <input id="enterName" maxlength="20" class="input-char1 position opacity00" spellcheck="false" /></div>
								<div id="enterNo" class="opacity00">Enter no :  <input id="printLineInConsole1"  maxlength="4" class="input-char2 position opacity00" spellcheck="false"></input></div>
								<div id="enterMarks" class="opacity00">Enter marks :  <input id="printLineInConsole2" maxlength="3" class="input-char3 opacity00" spellcheck="false"></input></div><br>
								<div id="theStuDet" class="opacity00">The student details are : </div>
								<div id="stuName" class="opacity00">student name : <span id="printLineInConsole3" class="opacity00 ct-sgreen-color"></span></div>
								<div id="stuNo" class="opacity00">no : <span id="printLineInConsole4" class="opacity00 ct-sgreen-color"></span></div>
								<div id="stuMarks" class="opacity00">marks : <span id="printLineInConsole5" class="opacity00 ct-sgreen-color"></span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-10 text-center " id="restartDiv">
		<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
	</div>
</div>
</body>
</html>
