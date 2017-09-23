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
<!-- <script type="text/javascript" src="/secure/lang/iot/js-min/rcj.min.js"></script> -->

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

/* #totalDiv {
	border: 1px solid grey;
	margin-top: 20px;
	border-radius: 5px;
} */

.margin-top10 {
	margin-top: 10px;
}

.margin-top-2 {
	margin-top: 2%;
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

.svg-css {
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
	font-size: 10px;
	font-weight: bold;
	font-family: monospace;
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

.display-inline {
	display: inline-block;
}

.svg-text-css {
	font-family: monospace;
	font-size: 15px;
	fill: navy;
	font-weight: bold;
}

.button-css {
	height: 25px;
	cursor: pointer;
	display: inline-block;
	position: relative;
	width: 45px;
	opacity : 0;
}

</style>
</head>

<body>
<div id ='titleDiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>Resistor</span>
</div>
<div class='col-xs-12'>
	<!-- <div class='col-xs-8 col-xs-offset-2 padding0' > -->
		<div class='margin-top-2 col-xs-8 col-xs-offset-2 opacity00' id='resistorDefination'><ul><li>A Resistor is a passive electrical component. 
			It can be made to control the flow of current, to work as voltage dividers, to dissipate power and it can shape 
			electrical waves when used in combination of other components.</li>
			<li>The SI units of Resistor is ohms(Ω). The below figure shows the Resistor symbol.</li></ul>
		</div>
		<div class='col-xs-12 margin-top-2'>
			<div class="col-xs-6">
				<div class="col-xs-12 opacity00"  id="circuitAnimationDiv">
					<div class="col-xs-9" style="height: 280px; padding: 0;" >
						<svg style="height: 100%; width: 100%;">
							<g>
								<line x1="11" y1="148" x2="44" y2="148" style="stroke:#00376f; stroke-width:2"/>
								<line style="stroke:#00376f; stroke-width:2" y2="156" x2="39" y1="156" x1="17"/>
								<line x1="11" y1="164" x2="44" y2="164" style="stroke:#00376f; stroke-width:2"/>
								<line x1="17" y1="173" x2="39" y2="173" style="stroke:#00376f; stroke-width:2"/>
								<text id="voltageValue" class="svg-text-css" x="49" y="166" fill="blue">10</text>
								<text id="currentValue" fill="blue" y="34" x="176" class="svg-text-css">1</text>
								<text id="resistorValue" fill="blue" y="145" x="381" class="svg-text-css">10</text>
							</g>	
							<g>
								<path id="path" class="path" d="M 28 148 v -104 0 M 28 45 l 327 0 M 355 44 v 67 0 
									L371 119 L347 129 L369 138 L346 149 L367 161 L345 169 L354 182 M 354 181 v 68 0 M 355 249 l -328 0 M 28 249 v -76 0"
								 	stroke="#00376f" stroke-width="2.5" fill="none"/>
							</g>
							<g id="circlesAnimation" class="opacity00">
								<%
								int i;
								double j;
								for (i = 1, j = 0.3; i <= 15; i++, j+= 0.3) {	
								%>
								<circle id="circle<%=i%>" r="8" cx="0" cy="0" fill="tomato" />
								
								<animateMotion id='animateMotion<%=i%>' xlink:href="#circle<%=i%>" dur="4.5s" begin="<%=j%>s"
									fill="freeze" repeatCount="indefinite">
									<mpath xlink:href="#path" />
								</animateMotion>
								<%
								}
								%>
					
							</g>
						</svg>
					</div>
					<div id="buttonsDiv" style="height: ; margin-top: 3%;" class="col-xs-3">
						<div style="position: relative; top: 85px;">
							<button id="upButton" class="button-css">
								<i aria-hidden="true" class="fa fa-arrow-up"></i>
		  					</button>
		  				</div>
		  				<div style="position: relative; display: ; top: 100px;">
							<button id="downButton" class="button-css">
								<i aria-hidden="true" class="fa fa-arrow-down"></i>
		  					</button>
		  				</div>
					</div>
				</div>
			</div>
			<div class="col-xs-6" id="resistorSyntax" style="margin-top: 5%;">
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
		</div>	
	<div class='col-xs-8 col-xs-offset-2' id='totalDiv'>	
		<div class='col-xs-12 margin-top20' >
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
							<div class='col-xs-3' id='firstDigitValue'><div class="form-group">
								<input type="text" class="form-control" disabled="disabled" value='3' style='text-align: center'></div>
							</div>
							<div class='col-xs-3' id='secondDigitValue'><div class="form-group">
								<input type="text" class="form-control" disabled="disabled" value='6' style='text-align: center'></div>
							</div>
							<div class='col-xs-3' id='multiplierValue'><div class="form-group">
								<input type="text" class="form-control" disabled="disabled" value='x100K&Omega;' style='text-align: center'></div>
							</div>
							<div class='col-xs-3' id='toleranceValue'><div class="form-group">
								<input type="text" class="form-control" disabled="disabled" value='&#177;5%' style='text-align: center'></div>
							</div>
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

var count = 0;
var multiplierMap = {
	"x1Ω" : ["1", "Ω"],
	"x10Ω" : ["10", "Ω"],
	"x100Ω" : ["0.1", "KΩ"],
	"x1KΩ" : ["1", "KΩ"],
	"x10KΩ" : ["10", "KΩ"],
	"x100KΩ" : ["0.1", "MΩ"],
	"x1MΩ" : ["1", "MΩ"],
	"x10MΩ" : ["10", "MΩ"],
	"x100MΩ" : ["100", "MΩ"],
	"x1GΩ" : ["1", "GΩ"],
}


function ResistorConnectionsReady() {
	$("select").click();
	$(".svg-css line").hide();
	$("text").hide();
	intro = introJs();
	$('#restartBtn').click(function() {
		location.reload();
		});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
			}
	});
	
	$("select").on("click", function() {
		$("#totalDiv").popover("destroy");
		/* $('#popover' + (count - 1)).remove(); */
		var selectedColor = $(this).find(":selected").attr("color");
		var value = $(this).find(":selected").attr("color-val");
		$(this).attr("class", "form-control digit-picker " +  selectedColor);
		$("#" + $(this).attr("strip")).attr("class", selectedColor);
		$("#" + $(this).attr("strip-val")).find("input").val(value);
		
		var mul = multiplierMap[$("input").eq(2).val()][0];
		var symbol = multiplierMap[$("input").eq(2).val()][1];
		var val1 = $("input").eq(0).val();
		var val2 = $("input").eq(1).val();
		
		$("#resistanceValue").find("input").val( ( parseFloat(parseInt(val1 + "" + val2) * mul).toFixed(2)) + symbol);
		
		$(".user-btn").removeClass("hide");
	});
	
	
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element : '#resistorDefination',
			intro : '',
			tooltipClass : 'hidden'
		}, {
			element : '#circuitAnimationDiv',
			intro : '',
		}, {
			element : '#resistorSyntax',
			intro : ''
		}, {
			element :'#totalDiv',
			intro :'',
			position:"bottom",
			tooltipClass:'hidden'
			
		}, {
			element :'#restartBtn',
			intro :'',
			position:"right" 
		}]
	});
	intro.onafterchange(function(targetElement) { 
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case 'resistorDefination':
			$("#resistorDefination").fadeTo(1000, 1);
			setTimeout(function() {
				intro.nextStep();
			}, 2000);
			break;
		case 'resistorSyntax':
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#basicResisitor").fadeTo(1000, 1);
				arrowRevealVertical("#arrow1", function() {
					$("#digitOne").fadeTo(1000, 1);
					arrowRevealVertical("#arrow2", function() {
						$("#digitTwo").fadeTo(1000, 1);
						arrowRevealVertical("#arrow3", function() {
							$("#multiplier").fadeTo(1000, 1);
							arrowRevealVertical("#arrow4", function() {
								$("#tolerance").fadeTo(1000, 1);
								var text = "The figure shows the basic resistor.";
								typing('.introjs-tooltiptext', text, function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					}); 
				});
			});
			break;
		case 'circuitAnimationDiv':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "let us consider a circuit with 10V supply and the current passing through a resistor."
				typing(".introjs-tooltiptext", text, function() {
					TweenMax.to($('#circuitAnimationDiv'), 1, {opacity: 1, onComplete: function() {
						$("#voltageValue, #currentValue, #resistorValue").css("display","inline-block");
						$("#voltageValue").append("V");
						$("#currentValue").append("A");
						$("#resistorValue").append("Ω");
						TweenMax.to($('#circlesAnimation'), 1, {opacity: 1, onComplete: function() {
							$('.introjs-tooltiptext').append('<span class="introjs-button user-btn">Next &#8594;</span>');
							$(".user-btn").click(function() {
								$(".user-btn").remove();
								var text = "The resistor can be made to control the flow of current i.e. If we increase the resistance value the "+
								"flow of current value is decresed and vice-versa.<br><span class='textAboutClickAction'></span>";
								typing(".introjs-tooltiptext", text, function() {
									$('.introjs-tooltiptext').append('<span class="introjs-button user-btn">Next &#8594;</span>');
									$(".user-btn").click(function() {
										$(".user-btn").remove();
										$("#upButton, #downButton").fadeTo("slow",1 , function() {
											$(".textAboutClickAction").append("Click on up and down arrows to increase / decrease resistance values"+
													" and observe the variations in current values.");
											typing(".textAboutClickAction", $(".textAboutClickAction").text(), function() {
												$("#upButton").on("click", function() {
													increment();
													$(".introjs-nextbutton").show();
												});
												$("#downButton").on("click", function() {
													decrement();
													$(".introjs-nextbutton").show();
												});
											});
										});
									});
								});
							});
						}});
					}});
				});
			});
			break;
		case "totalDiv" :
			$('.introjs-helperLayer').one("transitionend", function() {
				scrollTop();
				$('.introjs-nextbutton').hide();
				firstStep2();
			});
			/* var text = "Let us learn about the Resistor.";
			popover('#totalDiv', 'right', text, function() {
				$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep()">Next →</a>');
			}); */
			break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Click to restart.", function() {
					});
				});
			break;
		}
	});
	intro.start();
	/* $('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide(); */
}

function increment() {
	if (parseFloat($("#resistorValue").text()) >= 0) {
		$("#resistorValue").text((parseFloat($("#resistorValue").text()) + 0.5).toFixed(1)  + "Ω");
		var division = (parseFloat($("#voltageValue").text()) / parseFloat($("#resistorValue").text())).toFixed(2);
		$("#currentValue").text(division + "A");
		/* for(i = 1; i <= 15; i++) {
			$("#animateMotion" + i).attr("dur", "6s");
		} */
		/* if ($("#resistorValue").text().length == 1) {
			$("#symbolA").attr("x", "587");
		} */
	}
}

function decrement() {
	if (parseFloat($("#resistorValue").text()) > 0) {
		$("#resistorValue").text((parseFloat($("#resistorValue").text()) - 0.5).toFixed(1) + "Ω");
		var division = (parseFloat($("#voltageValue").text()) / parseFloat($("#resistorValue").text())).toFixed(2);
		$("#currentValue").text(division + "A");
		/* if ($("#resistorValue").text().length == 1) {
			$("#symbolA").attr("x", "587");
		} */
	}
}

function firstStep() {
	$(".user-btn").remove();
	$(".popover").remove();
	$("#resistorDefination").fadeTo(1000, 1);
	var text = "Introduction about resistor.";
	popover('#resistorDefination', 'right', text, function() {
		$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep1()">Next →</a>');
	});
}




function firstStep1() {
	$(".user-btn").remove();
	$(".popover").remove();
	$("#basicResisitor").fadeTo(1000, 1);
	arrowRevealVertical("#arrow1", function() {
		$("#digitOne").fadeTo(1000, 1);
		arrowRevealVertical("#arrow2", function() {
			$("#digitTwo").fadeTo(1000, 1);
			arrowRevealVertical("#arrow3", function() {
				$("#multiplier").fadeTo(1000, 1);
				arrowRevealVertical("#arrow4", function() {
					$("#tolerance").fadeTo(1000, 1);
					var text = "The figure shows the basic resistor.";
					popover('#basicResisitor', 'right', text, function() {
						$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep2()">Next →</a>');
					});
				});
			});
		}); 
	});
}
function firstStep2() {
	$(".user-btn").remove();
	$(".popover").remove();
	$("#colorCodingTable").fadeTo(1000, 1);
	var text = "Color coding is used for calculating the resistance value.";
	popover('#colorCodingTable', 'right', text, function() {
		$("#popover" + count+"").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep3()">Next →</a>');
	});
}
function firstStep3() {
	$(".user-btn").remove();
	$(".popover").remove();
	scrollBottom();
	$("#calculateResisitor").fadeTo(1000, 1);
	$("#digitsDiv").removeClass("opacity00");
	$("#colorPickDiv").removeClass("opacity00");
	$("#valueDiv").removeClass("opacity00");
	$("#resistanceResultDiv").removeClass("opacity00");
	var text = "Calculate the resistor value by changing the colors.";
	popover('#calculateResisitor', 'right', text, function() {
		$("#popover" + count+"").append('<a class="introjs-button user-btn hide" style="display: inline-block;" onclick="firstStep4()">Next →</a>');
	});
	$('#calculateResisitor').on('hide.bs.popover', function() {
		return false;
	})
	
}
function firstStep4() {
	$(".user-btn").remove();
	$(".popover").remove();
	intro.nextStep();
}

function popover(selector, position, text, callBackFunction) {
	count++;
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover'+count+'">' + text + '</div>',
		//container: '#totalDiv'
	}).popover("show");
	
	typing('#popover' + count, text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
		//$("#popover" + count).append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="firstStep()">Next →</a>');
 	});
}
function arrowReveal(lineId, callBackFunction) {
	var x2 = $(lineId).attr("x2");
	var y2 = $(lineId).attr("y2");
	$(lineId).attr("x2", $(lineId).attr("x1"));
	$(lineId).attr("y2", $(lineId).attr("y1"));
	$(lineId).show();
	TweenMax.to(lineId, 1, {attr:{x2 : x2, y1 : y2}, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
function arrowRevealVertical(lineId, callBackFunction) {
	 var x2 = $(lineId).attr('x2');
	 var y2 = $(lineId).attr('y2');
	 $(lineId).attr('x2', $(lineId).attr('x1'));
	 $(lineId).attr('y2', $(lineId).attr('y1'));
	 $(lineId).show();
	 TweenMax.to(lineId, 1, {
	   attr: {
	     x2: x2,
	     y2: y2
	   },
	   onComplete: function () {
	     if (typeof callBackFunction === 'function') {
	       callBackFunction();
	     }
	   }
	});
}
function typing(selector, text, callBackFunction) {
	var typingSpeed = 0.05;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function scrollTop() {
    window.scrollTo(0, 0);
}

function scrollBottom() {
    window.scrollTo(0, 1000);
}



</script>
</html>