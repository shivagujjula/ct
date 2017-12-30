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


.cup-bg {
	background-color: #003399;
    border: 1px solid white;
    border-radius: 4px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
    height: 38px;
    left: 280px;
    padding-bottom: 2px;
    position: absolute;
    top: 330px;
    transition: all 1.3s ease-out 0s;
    width: 57px;
    z-index: 1000004;
}

.cup {
	display: inline-block;
	left: 15px;
	position: relative;
	top: 2px;
	z-index: 1000000;
}

#cup_value {
	bottom: 52px;
	color: black;
	left: 8px;
	position: relative;
	z-index: 1000005 !important;
}

.i-position {
	bottom: 32px;
	color: white;
	font-family: monospace;
	font-size: 10px;
	position: relative;
	right: 11px;
}

.cup-bg1 {
	background-color: #003399;
    border: 1px solid white;
    border-radius: 4px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
    height: 38px;
    left: 280px;
    padding-bottom: 2px;
    position: absolute;
    top: 330px;
    transition: all 1.3s ease-out 0s;
    width: 57px;
    z-index: 1000004;
}

.cup1 {
	display: inline-block;
	left: 20px;
	position: relative;
	top: 30px;
	z-index: 1000000;
}

#cup_value1 {
	bottom: 52px;
	color: black;
	left: 9px;
	position: relative;
	z-index: 1000005 !important;
}

.i-position1 {
	bottom: 32px;
	color: white;
	font-family: monospace;
	font-size: 10px;
	position: relative;
	right: 15px;
}


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
	min-height : 420px;
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
	height: 300px;
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
  z-index: 10000000 !important;
}
[contenteditable="true"] {
 	display: inline;
	font-weight: normal;
	outline: medium none;
	
} 
input {
	background-color: #efddd1;
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
	border: 1px solid #f2f5ad;
	background : #f2f5ad;
	color: black;
}
.inputVal,.inputVall_1,.inputVall {
	background-color: #efddd1;
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
    border: 2px solid deeppink;
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
 #voidGet, #voidPut {
 	color: #49c068;
 	font-weight: bold;
 	font-size: 15px;
 }
 #inputNumber, #inputNumber3, #inputNumber6,  #inputNumber9 {
 	color: #fbe847;
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
			class as <span id="text">Class-name arrayName[size];</span><a class="introjs-button user-button" id="nextButton">Next&rarr;</a></span>
		</div>
	</div>
	<div class="col-xs-12 margin-top ">
		<div class="col-xs-5  padding">
			<pre class="creamPretab4 opacity00" id="preBody">
<span id="declaration"><span class="violet">#include</span> <span class="green">&lt;iostream&gt;</span></span>
<span class="red">using</span> <span class="green">namespace</span> std;
<div class ="display opacity00" id="class"><span class='red'>class</span> Employee {
  <div class ="display" id="char"><div class="green display">char</div> <div class ="display" id="createMemory">name[10]</div>;</div>
  <div class ="display" id="int"><span class="green">int</span> <div class ="display" id="age">age</div>;</div>
 <span class="red display opacity00" id="public">public:</span> 
<div id="method" class="opacity00 display">     <div class="display" id="getVoid"><span class="green">void</span> getData()</div> {
        <div class ="display" id="cout">cout << <div class="pink display" id="enterText">"Enter employee name : "</div>;</div>
        <div class ="display" id="cin">cin >> <div class ="display" id="name">name</div>;</div>
        <div class ="display" id="cout1">cout << <div class="pink display" id="enterText1">"Enter age : "</div>;</div>
        <span id="cin1">cin >> <span id="age1">age</span>;</span>
    <span id="close">}</span></div>
    <div class ="display opacity00" id="method1"><div class="display" id="getVoid1"><div class="green display">void</div> putData()</div> {
    <div class ="display" id="cout2">cout << <div id="textEnter" class="pink display">"Employee name is : "</div> << <span id='name1'>name </span><< endl;</div>
    <div class ="display" id="cout3">cout << <div id="textEnter1" class="pink display">"Employee age is : "</div> << <span id='age5'>age </span><< endl;</div>
<span id="close3">}</span></div>
};	</div>
 <div class ="display opacity00" id="main">main() {
   <div class ="display opacity00" id="manager">Employee manager[<span class="pink">3</span>];</div>
   <div class ="display opacity00" id="int1">int i;</div>
   <div class ="display opacity00" id="condition"><div class ="display" id='forLoop' >for(<div class ="display" id="iVal">i = <span class="pink position" id="num1">0</span></div>; <span id="iValComparision">i < <div class="pink display">3</div></span>; <span id="iValIncrement">i++</span>) {</div><span id= "countCup" class="cup-bg opacity00"><span class="hide-sm cup"><i class="fa fa-coffee fa-inverse fa-2x"></i><h5 class="i-position"><span id='cup_i'><b>i</b></span><b>=</b>&nbsp;&nbsp;&nbsp; <h6 id="cup_value"></h6></h5></span></span>
   <div class ="display" id="cout4">cout << <div id="enterDetails" class="pink display">"Enter the manager-" << i <<" details"</div> << endl;</div>
   <span id="manager1" class="position">manager[i].getdata();</span>
<div class ="display" id="close1">}</div></div>
   <div class ="display opacity00" id="cout5">cout << <span class="pink" id="enterDetails1">"The managers details are : "</span> << endl;</div>
   <div class ="display opacity00" id="condition1"><div class ="display" id='forLoop1' >for (<div class ="display" id="iValue">i = <span class="pink" id="num2">0</span>;</div><span id="iValComparision1"> i < <div class="pink display">3</div></span>; <span id='iValIncrement1'>i++</span>) {</div><span id= "countCup1" class="cup-bg opacity00"><span class="hide-sm cup"><i class="fa fa-coffee fa-inverse fa-2x"></i><h5 class="i-position"><span id='cup_i1'><b>i</b></span><b>=</b>&nbsp;&nbsp;&nbsp; <h6 id="cup_value1"></h6></h5></span></span>
   <span class ="display" id="manager2">manager[i].putdata();</span>
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
										<td class ="text-center value" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table1"><span class='td-css position'></span></td>
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
											<td class ="text-center value1" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table3"><span class='td-css1 position'></span></td>
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
											<td class ="text-center value2" style='border:2px solid gray; padding: 10px; margin-top: 25px;' id="table5"><span class='td-css2 position'></span></td>
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
				<div class="col-xs-12 opacity00" id="borderLine" style="border-top: 1px solid darkseagreen; padding: 0px; margin-top: 20px;"></div>
				<div class="col-xs-12 opacity00 text-center" id= "voidGet" style="margin-top: 10px;">void getData()</div>
				<div class="col-xs-12 opacity00 text-center" id= "voidPut" style="margin-bottom: 10px;">void getCount()</div>
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