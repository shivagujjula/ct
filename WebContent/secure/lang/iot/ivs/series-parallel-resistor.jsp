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
<script type="text/javascript" src="/secure/lang/iot/js-min/sprj.min.js"></script>

<title>series and parallel resistor</title>

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
	border-radius: 5px;
	margin-top: 20px;
	background: powderblue none repeat scroll 0 0;
	min-height: 900px;
}

#example, #example1 {
	text-decoration: underline;
}

.input-style {
	height: 30px;
    width: 50%;
    text-align: center;
}

.margin-top10 {
	margin-top: 10px; 
} 

.user-btn {
	background: green;
}

.bg-color-wheat {
	background: wheat;
}

.bg-color-powderblue {
	background: powderblue none repeat scroll 0 0;
}

.bg-color-snow {
	background: snow none repeat scroll 0 0;
}

 #seriesText {
	min-heigth: 20px !important;
}
 
#parallelText {
	background: snow none repeat scroll 0 0;
	min-heigth: 20px !important;
}

.series-parallel-title {
	background: white none repeat scroll 0 0;
    color: slateblue;
    text-decoration: underline;
}

.margin-bottom10 {
	margin-bottom: 10px;
}

.z-index {
	position: relative;
	z-index: 9999999;
}


</style>
</head>
<body>
<div id ='titleDiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>Series-Parallel-resistor</span>
</div>

<div class='col-xs-12'>
	<div class='col-xs-8 col-xs-offset-2' id='totalDiv'>
		<div class='col-xs-12 margin-top10'><b class='series-parallel-title' id='seriesConnectionHeading'>Series Connection :</b></div>
		<div class='col-xs-12 margin-top10 bg-color-snow opacity00' id='seriesText'><ul>
			<li>The total resistance of resistors connected in series is the sum of their individual resistance values.</li></ul></div>
		<div class='col-xs-12 text-center margin-top10'><img id='image' class='opacity00 bg-color-powderblue' alt="" src="../images/series-resistor.png"></div>
		<div class='col-xs-12 text-center margin-top10'><span id='seriesFormula' class='bg-color-snow opacity00'>R<sub>eq</sub> = R<sub>1</sub> + R<sub>1</sub> ...... + R<sub>n</sub></span></div>
		
		<div class='col-xs-12 margin-top10 opacity00 bg-color-powderblue' id='exampleQuestion'><div id='example'><b>Example</b> :</div>
			<div id='question'>A 10 ohm resistor connected in parallel with a 5 ohm resistor and a 15 ohm resistor produces.</div>
			<div class='col-xs-12 margin-top10 text-center' id='seriesResistorImages'>
				<img  alt="" src="../images/series.png" width='50%'></div>
		</div>
		
		<div class='col-xs-12 margin-top10 text-center opacity00  bg-color-wheat margin-bottom10' id='calculationDiv'>
			<div class='col-xs-4'>R<sub>1</sub> = <input id='valueR1' class='input-style series-input' maxlength="2" type="text" name="fname" value='10' disabled="disabled"></div>
			<div class='col-xs-4'>R<sub>2</sub> = <input id='valueR2' class='input-style series-input' type="text" name="fname" maxlength="2"  value='5' disabled="disabled"></div>
			<div class='col-xs-4' id='resistorvalue3'>R<sub>3</sub> = <input id='valueR3' class='input-style series-input' type="text" maxlength="2" name="fname" value='15' disabled="disabled"></div>
			<div class='col-xs-12 text-center margin-top10' id='resistorVlaueget'>R<sub>eq</sub> = <span id='resistorValueget1'>10</span> + 
				<span id='resistorValueget2'>5</span> + <span id='resistorValueget3'>15</span></div>
			<div class='col-xs-12 text-center margin-top10' id='resistorResult'>R<sub>eq</sub> = <span id='result'>30</span>&Omega;</div>
		</div>
		
		<div class='col-xs-12 margin-top10'><b id='parallelConnectionHeading' class='opacity00 series-parallel-title'>Parallel Connection :</b></div>
		<div class='col-xs-12 margin-top10 opacity00' id='parallelText'><ul>
			<li>The total resistance of resistors connected in series is the sum of their individual resistance values.</li></ul></div>
		<div class='col-xs-12 text-center margin-top10'><img id='image1' class='opacity00 bg-color-powderblue' alt="" src="../images/parallel-resistor.png"></div>
		<div class='col-xs-12 text-center margin-top10'><span id='parallelFormula' class='bg-color-snow opacity00'>1/R<sub>eq</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> ...... + 1/R<sub>n</sub></span></div>
		
		<div class='col-xs-12 margin-top10 opacity00 bg-color-powderblue' id='exampleQuestion1'><div id='example1'><b>Example</b> :</div>
			<div id='question1'>A 10 ohm resistor connected in parallel with a 5 ohm resistor and a 15 ohm resistor produces.</div>
			<div class='col-xs-12 text-center'><img id='parallel' class='' alt="" src="../images/parallel.png"  width='50%'></div>
		</div>
		
		<div class='col-xs-12 margin-top10 bg-color-wheat margin-bottom10 opacity00' id='calculationDiv1'>
			<div class='col-xs-12'>
				<div class='col-xs-4'>1/R<sub>1</sub> = 1/<input id='parallelvalueR1' class='input-style parallel-input' maxlength="2" type="text" name="fname" value='10' disabled="disabled"></div>
				<div class='col-xs-4'>1/R<sub>2</sub> = 1/<input id='parallelvalueR2' class='input-style parallel-input' type="text" name="fname" maxlength="2"  value='5' disabled="disabled"></div>
				<div class='col-xs-4' id='parallelvalue3'>1/R<sub>3</sub> = 1/<input id='parallelvalueR3' class='input-style parallel-input' type="text" maxlength="2" name="fname" value='15' disabled="disabled"></div>
			</div>
			<div class='col-xs-12 text-center margin-top10' id='parallelVlaueget'>1/R<sub>eq</sub> = 1/(1/<span id='parellalValueget1'>10</span> + 
					1/<span id='parellalValueget2'>5</span> + 1/<span id='parellalValueget3'>15</span>)</div>
			<div class='col-xs-12  margin-top10 text-center' id='resistorResult'>R<sub>eq</sub> = <span id='result1'>2.727</span>&Omega;</div>
		</div>
	</div>
</div>
<div class="button col-xs-12 text-center" id="button">
	<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
	SeriesParallelResistorReady();
	
});


</script>
</html>