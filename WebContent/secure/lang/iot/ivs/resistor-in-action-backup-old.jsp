<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/font-awesome-animation.min.css">
<link rel="stylesheet" href="/css/animate.css"/>

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src='/js/intro.js'></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/secure/lang/iot/js-min/riabo.min.js"></script>

<title>resistor connection</title>
<style type="text/css">

#titleDiv {
	margin-top: 20px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0.0;
	border-radius: 10px;
	font-size: 20px  !important;
	position: relative;
	z-index: 9999999;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
}

#totalDiv {
	border: 1px solid grey;
	margin-top: 20px;
	border-radius: 5px;
}

.margin-top10 {
	margin-top: 10px;
}

.margin-bottom10 {
	margin-bottom: 10px;
}

.panel {
	border-radius: 20px; 
	background: #e5d8c2;
}

.bg-color-grey {
	background: grey;
}

.svg-css	{
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
}

.svg-line	{
	position: relative;
	stroke:	green;
	stroke-width: 2;	
}

.padding0 {
	padding: 0;
}

#colorCodingTable {
	text-align: center;
	font-size: 12px;
}

th {
	text-align: center;
}

hr {
	border-color: grey;
	margin-top: 18px;
	border-width: 3px 0 0;
}

.black-row {
	background: black !important;
	color: white !important;
}

.brown-row {
	background: brown !important;
	color: white !important;
}

.red-row {
	background: red !important;
	color: white !important;
}

.orange-row {
	background: orange !important;
	color: black !important;
}

.yellow-row {
	background: yellow !important;
}

.green-row {
	background: green !important;
	color: white !important;
}

.blue-row {
	background: blue !important;
	color: white !important;
}

.violet-row {
	background: violet !important;
}

.grey-row {
	background: grey !important;
	color: white !important;
}

.gold-row {
	background: gold !important;
}

.white-row {
	background: white;	
}

.none-row {
	background: #e5d8c2;	
}

.silver-row {
	background: silver !important;
}

.bg-color-gold {
	background: gold !important;
}

.bg-color-green {
	background: green !important;
}

.bg-color-orange {
	background: orange !important;
}

.bg-color-blue {
	background: blue !important;
}

.table-layout {
	table-layout: fixed;
}

.margin-top20 {
	margin-top: 20px;
}

.user-btn {
	background-color: green;
}

.color-gold {
	color: gold;
}

.color-blue {
	color: blue;
}

.color-orange {
	color: Orange;
}

.color-green {
	color: green;
}

.color-red {
	color: red;
}

.font-weight-bold {
	font-weight: bold;
}

a:hover {
    color: inherit;
}

.popover {
	z-index: 100000000;
	min-height: 20px;
	min-width: 150px
}

#calculateResisitor {
	border: 1px solid blue;
	border-radius: 5px;
}

#resistorDefination {
	border: 1px solid grey;
	border-radius: 5px;
	background: wheat;
}
</style>
</head>

<body>
<div id ='titleDiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>Resistor</span>
</div>
<div class='col-xs-12'>
<div class='col-xs-8 col-xs-offset-2 padding0' id='totalDiv'>
<div class='margin-top10 col-xs-12 opacity00' id='resistorDefination'><ul><li>A Resistor is a passive electrical component. 
		It can be made to control the flow of current, to work as voltage dividers, to dissipate power and it can shape 
		electrical waves when used in combination of other components.</li>
		<li>The SI units of Resistor is ohms(Ω). The below figure shows the Resistor symbol.</li></ul></div>
<div class='col-xs-12 margin-top10'>
	<svg class="svg-css">
		<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #970f0f;"> <path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/></marker>
			<line id="arrow1" class="svg-line" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" y2="83%" x2="30%" y1="43%" x1="44%"/>
			<line x1="47%" y1="42%" x2="43%" y2="84%" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" class="svg-line" id="arrow2"/>
			<line id="arrow3" class="svg-line" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" y2="80%" x2="55%" y1="43%" x1="51%"/>
			<line id="arrow4" class="svg-line" style="marker-end: url(&quot;#myMarker&quot;); display: inline;" y2="80%" x2="68%" y1="42%" x1="56%"/>
	</svg> 
	<div class='col-xs-12 padding0'>
		<div class='col-xs-10 col-xs-offset-1 margin-top10 opacity00' id='basicResisitor'>
		<div class='col-xs-offset-2 col-xs-2 padding0'><hr></div>
			<div class="panel panel-default col-xs-4">
			 <table class="table table-bordered table-layout">
			      <tr>
			        <td class='opacity00'>1</td>
			        <td></td>
			        <td class='bg-color-grey'></td>
			        <td></td>
			        <td class='bg-color-grey'></td>
			        <td></td>
			        <td class='bg-color-grey'></td>
			        <td></td>
			        <td></td>
			        <td class='bg-color-grey'></td>
			        <td></td>
			        <td class='opacity00'>1</td>
			      </tr>
	    	</table>
			</div>
			<div class='col-xs-2 padding0'><hr></div>
		</div>
	</div>
	<div class='col-xs-12 margin-top20'>
		<div class='col-xs-2 col-xs-offset-2 text-center opacity00' id='digitOne'>1st digit</div>
		<div class='col-xs-2 text-center opacity00' id='digitTwo'>2nd digit</div>
		<div class='col-xs-2 opacity00' id='multiplier'>Multiplier</div>
		<div class='col-xs-2 opacity00' id='tolerance'>Tolerance(%)</div>
	</div>
</div>	
	<div class='col-xs-12 margin-top20'>
		<div class='col-xs-8 col-xs-offset-2 margin-top10 margin-bottom10' id='colorCodingDiv'>
			 <table id='colorCodingTable' class="table-bordered table opacity00">
			 	<tr>
			 		<th>Color</th>
			 		<th>1st and 2nd digits</th>
			 		<th>Multiplier</th>
			 		<th>Tolerance(%)</th>
			 	</tr>
			 	<tr class='black-row '>
			 		<td>Black</td>
			 		<td>0</td>
			 		<td>1&Omega;</td>
			 		<td></td>
			 	</tr>
			 	<tr class='brown-row'>
			 		<td>Brown</td>
			 		<td>1</td>
			 		<td>10&Omega;</td>
			 		<td>&#177;1%</td>
			 	</tr>
			 	<tr class='red-row'>
			 		<td>Red</td>
			 		<td>2</td>
			 		<td>100&Omega;</td>
			 		<td>&#177;2%</td>
			 	</tr>
			 	<tr class='orange-row'>
			 		<td>Orange</td>
			 		<td>3</td>
			 		<td>1K&Omega;</td>
			 		<td></td>
			 	</tr>
			 	<tr class='yellow-row'>
			 		<td>Yellow</td>
			 		<td>4</td>
			 		<td>10K&Omega;</td>
			 		<td></td>
			 	</tr>
			 	<tr class='green-row'>
			 		<td>Green</td>
			 		<td>5</td>
			 		<td>100K&Omega;</td>
			 		<td></td>
			 	</tr>
			 	<tr class='blue-row'>
			 		<td>Blue</td>
			 		<td>6</td>
			 		<td>1M&Omega;</td>
			 		<td></td>
			 	</tr>
			 	<tr class='violet-row'>
			 		<td>Violet</td>
			 		<td>7</td>
			 		<td>10M&Omega;</td>
			 		<td></td>
			 	</tr>
			 	<tr class='grey-row'>
			 		<td>Grey</td>
			 		<td>8</td>
			 		<td></td>
			 		<td></td>
			 	</tr>
			 	<tr class='white-row'>
			 		<td>White</td>
			 		<td>9</td>
			 		<td>1G&Omega;</td>
			 		<td></td>
			 	</tr>
			 	<tr class='gold-row'>
			 		<td>Gold</td>
			 		<td></td>
			 		<td>&#247;10</td>
			 		<td>&#177;5%</td>
			 	</tr>
			 	<tr class='silver-row'>
			 		<td>Silver</td>
			 		<td></td>
			 		<td>&#247;100</td>
			 		<td>&#177;10%</td>
			 	</tr>
			 	<tr>
			 		<td>None</td>
			 		<td></td>
			 		<td></td>
			 		<td>&#177;20%</td>
			 	</tr>
			 </table>
		</div>
	</div>
	<div class='col-xs-12 padding0'>
		<div class='col-xs-10 col-xs-offset-1 margin-top10 opacity00' id='calculateResisitor'>
		<div class='col-xs-offset-2 col-xs-2 padding0 margin-top10'><hr></div>
			<div class="panel panel-default col-xs-4 margin-top10">
			 <table class="table table-bordered table-layout">
			      <tr>
			        <td class='opacity00'>1</td>
			        <td></td>
			        <td id='firstDigitColor' class='bg-color-orange'></td>
			        <td></td>
			        <td id='secondDigitColor' class='bg-color-blue'></td>
			        <td></td>
			        <td id='multiplierColor' class='bg-color-green'></td>
			        <td></td>
			        <td></td>
			        <td id='toleranceColor' class='bg-color-gold'></td>
			        <td></td>
			        <td class='opacity00'>1</td>
			      </tr>
	    	</table>
			</div>
			<div class='col-xs-2 padding0 margin-top10'><hr></div>
	
	<div class='col-xs-12 margin-top10 opacity00' id='digitsDiv'>
			<div class='col-xs-3 text-center font-weight-bold'>1st Digit</div>
			<div class='col-xs-3 text-center font-weight-bold'>2nd Digit</div>
			<div class='col-xs-3 text-center font-weight-bold'>Multiplier</div>
			<div class='col-xs-3 text-center font-weight-bold'>Tolerance</div>
		
<div class='col-xs-12 margin-top10 text-center opacity00' id='colorPickDiv'>
		<div class="col-xs-3">
			<select class='form-control digit-picker orange-row' strip='firstDigitColor' strip-val='firstDigitValue'>
				<option class='black-row' value="Black" color='black-row' color-val='0'>Black</option>
				<option class='brown-row' value="Brown" color='brown-row' color-val='1'>Brown</option>
				<option class='red-row' value="Red" color='red-row' color-val='2'>Red</option>
				<option class='orange-row' value="Orange" color='orange-row' color-val='3' selected="selected">Orange</option>
				<option class='yellow-row' value="Yellow" color='yellow-row' color-val='4'>Yellow</option>
				<option class='green-row' value="Green" color='green-row' color-val='5'>Green</option>
				<option class='blue-row' value="Blue" color='blue-row' color-val='6'>Blue</option>
				<option class='violet-row' value="Violet" color='violet-row' color-val='7'>Violet</option>
				<option class='white-row' value="White" color='white-row' color-val='8'>White</option>
			</select>
	 	</div>
		<div class="col-xs-3">
			 <select class='form-control digit-picker blue-row' strip='secondDigitColor' strip-val='secondDigitValue'>
				<option class='black-row' value="Black" color='black-row' color-val='0'>Black</option>
				<option class='brown-row' value="Brown" color='brown-row' color-val='1'>Brown</option>
				<option class='red-row' value="Red" color='red-row' color-val='2'>Red</option>
				<option class='orange-row' value="Orange" color='orange-row' color-val='3'>Orange</option>
				<option class='yellow-row' value="Yellow" color='yellow-row' color-val='4'>Yellow</option>
				<option class='green-row' value="Green" color='green-row' color-val='5'>Green</option>
				<option class='blue-row' value="Blue" color='blue-row' selected="selected" color-val='6'>Blue</option>
				<option class='violet-row' value="Violet" color='violet-row' color-val='7'>Violet</option>
				<option class='white-row' value="White" color='white-row' color-val='8'>White</option>
			</select>
		</div>
	   <div class="dropdown col-xs-3">
			<select class='form-control digit-picker green-row' strip='multiplierColor' strip-val='multiplierValue'>
				<option class='black-row' value="Black" color='black-row' color-val='x1&Omega;'>x1&Omega; Black</option>
				<option class='brown-row' value="Brown" color='brown-row' color-val='x10&Omega;'>x10&Omega; Brown</option>
				<option class='red-row' value="Red" color='red-row' color-val='x100&Omega;'>x100&Omega; Red</option>
				<option class='orange-row' value="Orange" color='orange-row' color-val='x1K&Omega;'>x1K&Omega; Orange</option>
				<option class='yellow-row' value="Yellow" color='yellow-row' color-val='x10K&Omega;'>x10K&Omega; Yellow</option>
				<option class='green-row' value="Green" color='green-row' color-val='x100K&Omega;' selected="selected">x100K&Omega; Green</option>
				<option class='blue-row' value="Blue" color='blue-row' color-val='x1M&Omega;'>x1M&Omega; Blue</option>
				<option class='violet-row' value="violet" color='violet-row' color-val='x10M&Omega;'>x10M&Omega; violet</option>
				<option class='white-row' value="White" color='white-row' color-val='x1G&Omega;'>x1G&Omega; White</option>
			</select>
	  </div>
	   <div class="col-xs-3">
		   	<select class='form-control digit-picker gold-row' strip='toleranceColor' strip-val='toleranceValue'>
				<option class='brown-row' value="Brown" color='brown-row' color-val='&#177;1%'>&#177;1% Brown</option>
				<option class='red-row' value="Red" color='red-row' color-val='&#177;2%'>&#177;2% Red</option>
				<option class='gold-row' value="Gold" color='gold-row' color-val='&#177;5%' selected="selected">&#177;5% Gold</option>
				<option class='silver-row' value="Silver" color='silver-row' color-val='&#177;10%'>&#177;10% Silver</option>
				<option class='none-row' value="None" color='none-row' color-val='&#177;20%'>&#177;20% None</option>
			</select>
	  </div>
</div>		
	<div class='col-xs-12 margin-top10 opacity00 opacity00' id='valueDiv'>
			<div class='col-xs-3' id='firstDigitValue'><div class="form-group"><input type="text" class="form-control" disabled="disabled" value='3' style='text-align: center'></div></div>
			<div class='col-xs-3' id='secondDigitValue'><div class="form-group"><input type="text" class="form-control" disabled="disabled" value='6' style='text-align: center'></div></div>
			<div class='col-xs-3' id='multiplierValue'><div class="form-group"><input type="text" class="form-control" disabled="disabled" value='x100K&Omega;' style='text-align: center'></div></div>
			<div class='col-xs-3' id='toleranceValue'><div class="form-group"><input type="text" class="form-control" disabled="disabled" value='&#177;5%' style='text-align: center'></div></div>
	</div>
	<div class='col-xs-12 margin-top10 opacity00' id='resistanceResultDiv'>
			<div class='col-xs-12' id='resistanceValue'><div class='col-xs-4 text-center col-xs-offset-2 font-weight-bold'>Resistance Value :</div><div class="form-group col-xs-4"><input disabled="disabled" type="text" class="form-control" id="usr"></div></div>
	</div>
	</div>
</div>
</div>
</div>
</div>
<div class="button col-xs-12 text-center" id="button">
	<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
</div>
</body>
<script>
$(document).ready(function() {
	ResistorConnectionsReady();
});


</script>
</html>