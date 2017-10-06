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
<script src="/secure/lang/cpp/js-min/aoo.min.js"></script>
<title>Array of objects</title>
<style type="text/css">
#informationDiv {
	border: 2px solid gray;
	border-radius: 5px;
}
.ct-green {
	color: green;
}
#animationBox {
	font-size: 12px;
} 
#text {
	color: #b32c2c;
	font-weight: bolder;
	font-size: 15px;
}
.margin-top {
	margin-top : 20px;
}
.user-button,.user-btn{
	background-color: green;
}
.creamPreTab4 {
	tab-size: 4;
	margin: 2px;
	padding: 12px;
	-moz-tab-size: 4;
	border-radius: 8px;
	font-family: monospace;
	background-color: #e5eecc;
	font-size: 12px;
}
.error-text {
	color: red;
}
.violet {
	color : #ad08ad;
}
.green {
	color : green;
}
.red {
	color : red;
}
.pink {
	color : deeppink;
}

table {
	width : 100%;
	text-align: center;
}
.box-border {
	border: 2px solid #dcd9d9;
	border-radius: 8px;
	min-height : 400px;
	padding-left : 10px;
	padding-right : 10px;
}
.box-border1 {
	border: 2px solid #1cc78f;
	border-radius: 8px;
	padding : 10px;
	height : 40px;
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
	min-height: 100px;
}
.output-console-title-bar {
  background-color: #8e8989;
  text-align: center;
}
.position {
	position: relative;
}
.ui-effects-transfer {
    border: 2px dashed blue;
    z-index: 99999999 !important;
 }
  
.z-index1000000 {
	position:relative;
	background-color:white;
	z-index:1000000 !important;
}
.z-index10000000 {
  position: absolute;
  z-index: 10000000 !important;
}
[contenteditable="true"] {
 	display: inline;
	font-weight: normal;
	outline: medium none;
	
} 
input {
	background-color: #99ffb4;
	color : black;
}
.ct-code-b-green {
	color :#ca12b9;
	font-weight : bold;
	font-size: 14px;
}
#managerName {
 	color: oldlace;
    font-size: larger;
    margin-top: 5px;
 }
 #managerName1 {
	color: oldlace;
    font-size: larger;
 	margin-top: 20px;
 }
 #managerName2 {
	color: oldlace;
    font-size: larger;
 	margin-top: 20px;
 }
 .cupvalue {
	position: absolute;
	color: black;
	margin-top: 6px;
    margin-left: 15px;
}

y, r ,g{
	font-family: monospace;
	font-weight: bold;
}

y {
	color: yellow;
}

r {
	color: #af0a0a;
}
g {
	color : green;
}
.darkgreen {
	color: #479047;
}
.border {
	border: 2px solid #f2f5ad;
	background : #f2f5ad;
	color: black;
	border-radius: 8px;
}
.inputVal,.inputVall_1,.inputVall {
	background-color: #99ffb4;
	color: black; 
}
 .display {
	display : inline-block;
} 
.managerBox {
	background: darkseagreen none repeat scroll 0 0;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-family: monospace;
	text-align: center;
}
.manager-border1 ,.manager-border2,.manager-border {
	border : 1px solid darkseagreen;
	padding-bottom: 10px;
}
.ui-effectss-transfer {
    border: 2px solid blue;
    z-index: 99999999 !important;
    border-radius: 8px;
 }
 .circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 1000000;
}
</style>
</head>
<body>
<div class="col-xs-12">
	<div class="col-xs-12 text-center padding">
		<div class="col-xs-6 col-xs-offset-3" >
			<h3><span id="titleName" class="ct-demo-heading label">Array of Objects</span></h3>
		</div>
	</div>
	<div class="col-xs-12">
		<div class=" col-xs-6 col-xs-offset-3 " id="informationDiv" style='margin-top: 5px;'>
			<span id="infoText">The array of the objects can be created for the 
			class as <span id="text">classname-arrayname[size];</span><a class="introjs-button user-button" id="nextButton">Next&rarr;</a></span>
		</div>
	</div>
	<div class="col-xs-12 margin-top ">
		<div class="col-xs-5  padding">
			<pre class="creamPretab4 opacity00" id="preBody">
<span id="declaration"><span class="violet">#include</span> <span class="pink">&lt;iostream&gt;</span></span>
<span class="red">using namespace</span> std;
<div class ="display" id="class"><span class='red'>class</span> Employee {
  <div class ="display" id="char"><div class="green display">char</div> <div class ="display" id="createMemory">name[10]</div>;</div>
  <div class ="display" id="int"><span class="green">int</span> <div class ="display" id="age">age</div>;</div>
  <div class ="display" id="method"><span class="red display">public:</span> void getdata() {
    <div class ="display" id="cout">cout << <div class="pink display" id="enterText">"Enter employee name : "</div>;</div>
    <div class ="display" id="cin">cin >> <div class ="display" id="name">name</div>;</div>
    <div class ="display" id="cout1">cout << <div class="pink display" id="enterText1">"Enter age : "</div>;</div>
    <span id="cin1">cin >> <span id="age1">age</span>;</span>
<span id="close">}</span></div>
  <div class ="display" id="method1"><div class="green display">void</div> putdata() {
   <div class ="display" id="cout2">cout << <div id="textEnter" class="pink display">"Employee name is : "</div> << <span id='name1'>name </span><< endl;</div>
   <div class ="display" id="cout3">cout << <div id="textEnter1" class="pink display">"Employee age is : "</div> << <span id='age5'>age </span><< endl;</div>
<span id="close3">}</span></div>
};	</div>
 <div class ="display" id="main">main() {
   <div class ="display" id="manager">Employee manager[<span class="pink">3</span>];</div>
   <div class ="display" id="int1">int i;</div>
   <div class ="display" id="condition"><div class ="display" id='forLoop' >for(<div class ="display" id="iVal">i = <span class="pink position" id="num1">0</span></div>; <span id="iValComparision">i < <div class="pink display">3</div></span>; <span id="iValIncrement">i++</span>) {</div>
    <div class ="display" id="cout4">cout << <div id="enterDetails" class="pink display">"Enter the manager details : "</div> << endl;</div>
    <span id="manager1" class="position">manager[i].getdata();</span>
<div class ="display" id="close1">}</div></div>
   <div class ="display" id="cout5">cout << <span class="pink" id="enterDetails1">"The manager details are : "</span> << endl;</div>
   <div class ="display" id="condition1"><div class ="display" id='forLoop1' >for (<div class ="display" id="iValue">i = <span class="pink" id="num2">0</span>;</div><span id="iValComparision1"> i < <div class="pink display">3</div>;</span> <span id='iValIncrement1'>i++</span>) {</div>
   <span id="manager2">manager[i].putdata();</span>
<div class ="display" id="close2">}</div></div>
   <div class ="display" id="return" ><span class="red display">return</span><span class="pink display"> 0</span>;</div>
<span id='mainClose'>} </span>   
</div>	
			</pre>
		</div>
		<div class="col-xs-7">
			<div class="col-xs-12 box-border opacity00" id="animationBox">
				<div class="col-xs-12" id="manager1Details">
					<div id="managerName" class="managerBox opacity00">manager[0]</div>
					<div class="col-xs-12 manager-border opacity00" id="border">
						<div class="col-xs-10">
							<table class='text-center margin-top opacity00' style='table-layout:fixed' id="table">
								<tr>
									<%for (int i = 0; i <= 10; i++ ) { %>
										<%if (i == 0) { %>
											<td></td>
										<%} else {%>
											<td><%=i - 1%></td>
										<%} %>
									<%}%>
								</tr>
								<tr>
								<td> <span class="darkgreen"><b>name</b></span> : </td>
									<%for (int i = 0; i <= 9; i++ ) { %>
										<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table1"><span class='td-css position'></span></td>
									<%}%>
								
								</tr>
							</table>
						</div>
						<div class="col-xs-2">
							<div class="col-xs-12">
								<div id="age2" class="text-center opacity00" style=" margin-top:15px;"><b style="color: maroon; margin-top:15px;">age</b>
									<div id="borderBox1" class="text-center box-border1 opacity00" style="font-weight: bold;"><span id="box2" class=" text-center" ></span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 opacity00" id="manager2Details">
					<div id="managerName1" class="managerBox">manager[1]</div>
					<div class="col-xs-12 manager-border1 ">
						<div class="col-xs-10">
							<table class='  text-center margin-top ' style='table-layout:fixed' id="table2">
								<tr>
									<%for (int i = 0; i <= 10; i++ ) { %>
										<%if (i == 0) { %>
											<td></td>
										<%} else {%>
											<td><%=i - 1%></td>
										<%} %>
									<%}%>
								</tr>
								<tr>
									<td> <span class="darkgreen"><b>name</b></span> :</td>
										<%for (int i = 0; i <= 9; i++ ) { %>
											<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table3"><span class='td-css1 position'></span></td>
										<%}%>
								</tr>
							</table>
						</div>
						<div class="col-xs-2">
							<div class="col-xs-12">
								<div id="age3" class="text-center " style=" margin-top:15px;"><b style="color: maroon; margin-top:15px;">age</b>
									<div id="borderBox2" class="text-center box-border1 " style="font-weight: bold;"><span id="box3" class=" text-center  "></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 opacity00" id="manager3Details">
					<div id="managerName2" class="managerBox ">manager[2]</div>
					<div class="col-xs-12 manager-border2 ">
						<div class="col-xs-10">
							<table class='  text-center margin-top  ' style='table-layout:fixed' id="table4">
								<tr>
									<%for (int i = 0; i <= 10; i++ ) { %>
										<%if (i == 0) { %>
											<td></td>
										<%} else {%>
											<td><%=i - 1%></td>
										<%} %>
									<%}%>
								</tr>
								<tr>
									<td> <span class="darkgreen"><b>name</b></span> :</td>
										<%for (int i = 0; i <= 9; i++ ) { %>
											<td class ="text-center" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table5"><span class='td-css2 position'></span></td>
										<%}%>
								</tr>
							</table>
						</div>
						<div class="col-xs-2">
							<div class="col-xs-12">
								<div id="age4" class="text-center " style=" margin-top:15px;"><b style="color: maroon; margin-top:15px;">age</b>
									<div id="borderBox3" class="text-center box-border1" style="font-weight: bold;"><span id="box4" class=" text-center  "></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12">
					<div class="col-xs-6 text-center ">
						<div class="col-x-12 padding00 margin-top opacity00" id="countBox">
							<span id="countCupValue" class="cupvalue"></span>
							<i class="fa fa-coffee fa-3x count-cup"style="color: salmon;"></i><br>
							<span id="countCupVariable" class = "ct-code-b-black" style='font-weight: bold; color : green;'>i</span>
						</div>
					</div>
					<div class="col-xs-6 text-center ">
						<div class="col-x-12 padding00 margin-top opacity00" id="countBox1">
							<span id="countCupValue1" class="cupvalue"></span>
							<i class="fa fa-coffee fa-3x count-cup"style="color: salmon;"></i><br>
							<span id="countCupVariable" class = "ct-code-b-black" style='font-weight: bold; color : green;'>i</span>
						</div>
					</div>
				</div>
			</div>
			
			<div class="output-console col-xs-12 margin-top padding00 opacity00" id='outputBox'>
				<div class="output-console-title-bar ">
					<span>Output</span>
				</div>
				<div class="output-console-body " id="outputBody">
				</div>
			</div>
		</div>
	</div>
	<div><button type="button" class="col-sm-1 col-sm-offset-5 btn btn-warning opacity00" id="restartBtn" style="margin-top : 15px;">Restart</button></div>
</div>
<script type="text/javascript">
$(document).ready(function() {
	readPrintStringUsingGetsPutsReady();
});
</script>
</body>
</html>