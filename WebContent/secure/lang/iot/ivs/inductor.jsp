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
<script type="text/javascript" src="/secure/lang/iot/js-min/iaj.min.js"></script>

<title>Inductor</title>

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
	margin-top: 20px;
	border: 1px solid grey;
	border-radius: 5px;
	background: #b0e0e6 none repeat scroll 0 0;
}

.capacitorTitle {
	background: white none repeat scroll 0 0;
    color: slateblue;
    text-decoration: underline;
}

.bg-color-snow {
	background: snow;
}

.margin-top10 {
	margin-top: 10px;
}

.margin-bottom10 {
	margin-bottom: 10px;
}

.input-style {
	height: 30px;
    width: 50%;
    text-align: center;
}

.bg-color-wheat {
	background: wheat;
}

.bg-color-powderblue {
	background: powderblue;
}

.text-decoration {
	text-decoration: underline;
}

.z-index {
	position: relative;
	z-index: 9999999;
	padding: 0 2px 2px 2px;
    border-radius: 3px;
}
</style>
</head>
<body>
<div id ='titleDiv' class='totaldivclass col-xs-12 text-center'>
	<span id='title' class='label ct-demo-heading'>Inductor</span>
</div>

<div class='col-xs-12'>
	<div class='col-xs-8 col-xs-offset-2' id='totalDiv'>
		<div class='col-xs-12'><b class='capacitorTitle margin-top10' id='capacitorTitle'>Inductor :</b></div>
		<div class='col-xs-12 bg-color-snow margin-top10 opacity00' id='capacitorDefination'><ul><li>An Inductor is a passive electronic component. 
			It stores electrical energy in a magnetic field when electric current is flowing through it. 
			It consists of a wire that is wound into a coil. It is also called as a coil or a reactor.</li>
			<li>An Inductor is characterized by its inductance, which is the ratio of voltage to the rate of change of current.</li>
			<li>The SI units of an Inductor is Henry(H).</li></ul></div>
		<div class='col-xs-12 text-center margin-top10'><img id='image' class='opacity00' alt="" src="../images/inductor.png" width="30%"></div>
		
		<div class='col-xs-12 margin-top10'><b class='capacitorTitle opacity00' id='seriesConnectionTitle'>Series-Connection :</b></div>
		<div class='col-xs-12 bg-color-snow margin-top10 opacity00' id='seriesDefination'><ul><li>The total inductance of Inductors connected in series is the sum of their individual inductance values.</li></ul></div>
		<div class='col-xs-12 text-center margin-top10'><img id='seriesImage' class='opacity00' alt="" src="../images/inductor-series-general.png" width="30%"></div>
		<div class='col-xs-12 text-center margin-top10'><span id='serieslFormula' class='bg-color-snow opacity00'>L<sub>eq</sub> = L<sub>1</sub> + L<sub>2</sub> ...... + L<sub>n</sub></span></div>
		
		<div class='col-xs-12 margin-top10 bg-color-powderblue opacity00' id='exampleQuestion'><div id='example1' class='text-decoration'><b>Example</b> :</div>
			<div id='question1'>A 10 H Inductor connected in series with a 5 H Inductor and a 15 H Inductor produces.</div>
			<div class='col-xs-12 text-center'><img id='parallel' class='' alt="" src="../images/series-inductor.png"  width='60%'></div></div>
			
			<!-- <div class='col-xs-12 margin-top10 bg-color-wheat margin-bottom10 opacity00' id='calculationDiv'>
				<div class='col-xs-12'>
					<div class='col-xs-4'>1/C<sub>1</sub> = 1/<input id='parallelvalueR1' class='input-style series-input' maxlength="2" type="text" name="fname" value='10' disabled="disabled"></div>
					<div class='col-xs-4'>1/C<sub>2</sub> = 1/<input id='parallelvalueR2' class='input-style series-input' type="text" name="fname" maxlength="2"  value='5' disabled="disabled"></div>
					<div class='col-xs-4' id='parallelvalue3'>1/C<sub>3</sub> = 1/<input id='parallelvalueR3' class='input-style series-input' type="text" maxlength="2" name="fname" value='15' disabled="disabled"></div>
				</div>
				<div class='col-xs-12 text-center margin-top10' id='parallelVlaueget'>1/C<sub>eq</sub> = 1/(1/<span id='parellalValueget1'>10</span> + 
						1/<span id='parellalValueget2'>5</span> + 1/<span id='parellalValueget3'>15</span>)</div>
				<div class='col-xs-12  margin-top10 text-center' id='resistorResult'>C<sub>eq</sub> = <span id='result1'>2.727</span> F</div>
			</div> -->
		
		<div class='col-xs-12 margin-top10 text-center bg-color-wheat margin-bottom10 opacity00' id='calculationDiv1'>
			<div class='col-xs-4'>L<sub>1</sub> = <input id='valueR1' class='input-style parallel-input' maxlength="2" type="text" name="fname" value='10' disabled="disabled"></div>
			<div class='col-xs-4'>L<sub>2</sub> = <input id='valueR2' class='input-style parallel-input' type="text" name="fname" maxlength="2"  value='5' disabled="disabled"></div>
			<div class='col-xs-4' id='resistorvalue3'>L<sub>3</sub> = <input id='valueR3' class='input-style parallel-input' type="text" maxlength="2" name="fname" value='15' disabled="disabled"></div>
			<div class='col-xs-12 text-center margin-top10' id='resistorVlaueget'>L<sub>eq</sub> = <span id='resistorValueget1'>10</span> + 
				<span id='resistorValueget2'>5</span> + <span id='resistorValueget3'>15</span></div>
			<div class='col-xs-12 text-center margin-top10' id='resistorResult'>L<sub>eq</sub> = <span id='result'>30</span>H</div>
		</div>
		
		<div class='col-xs-12 margin-top10'><b class='capacitorTitle opacity00' id='capacitorParallelTitle'>Parallel-Connection :</b></div>
		<div class='col-xs-12 margin-top10 bg-color-snow opacity00' id='parallelDefination'><ul>
			<li>The total inductance of Inductors connected in parallel connection is the reciprocal of the sum of the reciprocals of the individual Inductors.</li></ul></div>
		<div class='col-xs-12 text-center margin-top10'><img id='parallelImage' class='opacity00 bg-color-powderblue' alt="" src="../images/parallel-inductor-general.png"></div>
		<div class='col-xs-12 text-center margin-top10'><span id='parallelFormula' class='bg-color-snow opacity00'>1/L<sub>eq</sub> = 1/L<sub>1</sub> + 1/L<sub>2</sub> ...... + 1/L<sub>n</sub></span></div>
		
		<div class='col-xs-12 margin-top10  bg-color-powderblue opacity00' id='exampleQuestion1'><div id='example' class='text-decoration'><b>Example</b> :</div>
			<div id='question'>A 10 H Inductor connected in parallel with a 5 H Inductor and a 15 H Inductor produces.</div>
			<div class='col-xs-12 margin-top10 text-center' id='seriesResistorImages'>
				<img  alt="" src="../images/parallel-inductor.png" width='15%'></div>
		</div>
		
		<div class='col-xs-12 margin-top10 bg-color-wheat margin-bottom10 opacity00' id='calculationDiv'>
				<div class='col-xs-12'>
					<div class='col-xs-4'>1/L<sub>1</sub> = 1/<input id='parallelvalueR1' class='input-style series-input' maxlength="2" type="text" name="fname" value='10' disabled="disabled"></div>
					<div class='col-xs-4'>1/L<sub>2</sub> = 1/<input id='parallelvalueR2' class='input-style series-input' type="text" name="fname" maxlength="2"  value='5' disabled="disabled"></div>
					<div class='col-xs-4' id='parallelvalue3'>1/L<sub>3</sub> = 1/<input id='parallelvalueR3' class='input-style series-input' type="text" maxlength="2" name="fname" value='15' disabled="disabled"></div>
				</div>
				<div class='col-xs-12 text-center margin-top10' id='parallelVlaueget'>1/L<sub>eq</sub> = 1/(1/<span id='parellalValueget1'>10</span> + 
						1/<span id='parellalValueget2'>5</span> + 1/<span id='parellalValueget3'>15</span>)</div>
				<div class='col-xs-12  margin-top10 text-center' id='resistorResult'>L<sub>eq</sub> = <span id='result1'>2.727</span>H</div>
			</div>
		
		<!-- <div class='col-xs-12 margin-top10 text-center bg-color-wheat margin-bottom10 opacity00' id='calculationDiv1'>
			<div class='col-xs-4'>C<sub>1</sub> = <input id='valueR1' class='input-style parallel-input' maxlength="2" type="text" name="fname" value='10' disabled="disabled"></div>
			<div class='col-xs-4'>C<sub>2</sub> = <input id='valueR2' class='input-style parallel-input' type="text" name="fname" maxlength="2"  value='5' disabled="disabled"></div>
			<div class='col-xs-4' id='resistorvalue3'>C<sub>3</sub> = <input id='valueR3' class='input-style parallel-input' type="text" maxlength="2" name="fname" value='15' disabled="disabled"></div>
			<div class='col-xs-12 text-center margin-top10' id='resistorVlaueget'>C<sub>eq</sub> = <span id='resistorValueget1'>10</span> + 
				<span id='resistorValueget2'>5</span> + <span id='resistorValueget3'>15</span></div>
			<div class='col-xs-12 text-center margin-top10' id='resistorResult'>C<sub>eq</sub> = <span id='result'>30</span>F</div>
		</div> -->
		
	</div>
</div>
<div class="button col-xs-12 text-center" id="button">
	<button class="btn btn-warning glyphicon glyphicon-refresh opacity00" type="button" id='restartBtn' style='margin-top:4px'>Restart</button>
</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
	InductorActionReady();
	
});


</script>
</html>