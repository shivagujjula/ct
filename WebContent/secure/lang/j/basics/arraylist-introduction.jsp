<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="../js-min/ali.min.js"></script>
<title>Insert title here</title>
<style>

div, span {
	position: relative;
}

.col-sm-6 {
	padding-left: 10px;
    padding-right: 10px;
}

.introjs-tooltiptext > br {
	margin-bottom: 15px;
}

.main-text-box {
	border: 1px solid #ccc;
	background-color: #fffae6;
	border-radius: 8px;
	font-family: monospace;
}

.animation-box {
	margin: 5px;
	border-radius: 8px;
	height: 295px;
	padding: 10px;
}

.introjs-tooltip {
	min-width: 500px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.box-border {
	margin-top: 30px;
}

.buttons-div {
	margin-top: 20px;
	text-align: center;
}

.center {
	display: block;
    margin-left: auto;
    margin-right: auto;
}

.animation-font {
	margin-top: 6px;
	color: #434D56;
	font-size: 12px;
	text-align: right;
}

.animation-text {
	font-size: 12px;
	padding: 10px;
}

.box {
	margin: 2px;
	display: inline-block;
	height: 30px;
	position: relative;
	width: 30px;
	padding: 4px;
}

.box-letter {
	font-size: 16px;
	font-weight: bold;
	position: relative;
}

.box-text {
  	background-color: #6fb936;
  	border-radius: 6px;
}

.text-color {
	color: #fff;
}

.box-indices {
	border-radius: 50px;
}

.indices-color {
	color: gray;
}

.transfer-text-color {
	color: #434d56;
}

.arrow-left-custom {
	font-size: x-large;
	margin-top: 3px;
	position: absolute;
	transform: scale(3, 1);
}

.cross-custom {
	font-size: x-large;
	margin-left: 10px;
	position: relative;
	color: red;
}

.ui-effects-transfer {
    border: 1px solid #003399;
    position: relative;
    z-index: 9999999;
}

</style>

</head>
<body>

<div class='ct-box-main'>
	<div class='text-center'>
		<h1 class='label ct-demo-heading'>Difference between Array and  ArrayList</h1>
	</div>
	<div class='buttons-div'>
		<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
	</div>
	<div class='row'>
		<div class='col-xs-offset-3 col-xs-6 box-border'>
			<div class='animation-box' id='animationBox'>
				<div id='arrDiv'>
					<div class="row" id="arrIndicesRow">
						<div id="arrIndicesText" class='col-xs-2 animation-font opacity00'>Indices =</div>
						<div id="arrExcecuteIndices" class="col-xs-10 visibility-hidden">
							<span class='box box-indices text-center' id='arrIndicesBox0'>
								<span class='box-letter indices-color' id='arrIndicesLetter0'>0</span>
							</span>
							<span class='box box-indices text-center' id='arrIndicesBox1'>
								<span class='box-letter indices-color' id='arrIndicesLetter1'>1</span>
							</span>
							<span class='box box-indices text-center' id='arrIndicesBox2'>
								<span class='box-letter indices-color' id='arrIndicesLetter2'>2</span>
							</span>
							<span class='box box-indices text-center' id='arrIndicesBox3'>
								<span class='box-letter indices-color' id='arrIndicesLetter3'>3</span>
							</span>
							<span class='box box-indices text-center' id='arrIndicesBox4'>
								<span class='box-letter indices-color' id='arrIndicesLetter4'>4</span>
							</span>
							<span class='box box-indices text-center' id='arrIndicesBox5'>
								<span class='box-letter indices-color' id='arrIndicesLetter5'>5</span>
							</span>
							<span class='box box-indices text-center' id='arrIndicesBox6'>
								<span class='box-letter indices-color' id='arrIndicesLetter6'>6</span>
							</span>
							<span class='box box-indices text-center' id='arrIndicesBox7'>
								<span class='box-letter indices-color' id='arrIndicesLetter7'>7</span>
							</span>
							<span class='box box-indices text-center' id='arrIndicesBox8'>
								<span class='box-letter indices-color' id='arrIndicesLetter8'>8</span>
							</span>
							<span class='box box-indices text-center' id='arrIndicesBox9'>
								<span class='box-letter indices-color' id='arrIndicesLetter9'>9</span>
							</span>
						</div>
					</div>
					<div class="row" id="arrTextRow">
						<div id="arrText" class='col-xs-2 animation-font opacity00'><span id='arr'>arr</span> =</div>
						<div id="arrExecuteBoxes" class="col-xs-10 visibility-hidden">
							<span class='box box-text text-center' id = 'arrTextBox0'>
								<span class='box-letter text-color arr' id='arrTextLetter0'>11</span>
							</span>
							<span class='box box-text text-center' id = 'arrTextBox1'>
								<span class='box-letter text-color arr' id='arrTextLetter1'>2</span>
							</span>
							<span class='box box-text text-center' id = 'arrTextBox2'>
								<span class='box-letter text-color arr' id='arrTextLetter2'>23</span>
							</span>
							<span class='box box-text text-center' id = 'arrTextBox3'>
								<span class='box-letter text-color arr' id='arrTextLetter3'>6</span>
							</span>
							<span class='box box-text text-center' id = 'arrTextBox4'>
								<span class='box-letter text-color arr' id='arrTextLetter4'>14</span>
							</span>
							<span class='box box-text text-center' id = 'arrTextBox5'>
								<span class='box-letter text-color arr' id='arrTextLetter5'>72</span>
							</span>
							<span class='box box-text text-center' id = 'arrTextBox6'>
								<span class='box-letter text-color arr' id='arrTextLetter6'>55</span>
							</span>
							<span class='box box-text text-center' id = 'arrTextBox7'>
								<span class='box-letter text-color arr' id='arrTextLetter7'>4</span>
							</span>
							<span class='box box-text text-center' id = 'arrTextBox8'>
								<span class='box-letter text-color arr' id='arrTextLetter8'>9</span>
							</span>
							<span class='box box-text text-center' id = 'arrTextBox9'>
								<span class='box-letter text-color arr' id='arrTextLetter9'>33</span>
							</span>
							<span style="margin-left: 25px; margin-right: 25px;" id='arrowCross'>
								<span class="fa fa-long-arrow-left arrow-left-custom opacity00" id='arrowLeft'></span>
								<span class="fa fa-times cross-custom opacity00" id='cross'></span>
							</span>
							<span class='box box-text text-center opacity00' id = 'arrTextBox10'>
								<span class='box-letter text-color opacity00' id='arrTextLetter10'>99</span>
							</span>
						</div>
					</div>
					
					<div id='arrLength' class='animation-text'></div>
					<div id='number99Div' class='col-xs-offset-11 col-xs-1'>
						<span class='box-letter opacity00' id='number99'>99</span>
					</div>
				</div>
				
				<div id='tempDiv'>
					<div class="row" id="tempArrIndicesRow">
						<div id="tempArrIndicesText" class='col-xs-2 animation-font opacity00'>Indices =</div>
						<div id="tempArrExcecuteIndices" class="col-xs-10 visibility-hidden">
							<span class='box box-indices text-center' id='tempArrIndicesBox0'>
								<span class='box-letter indices-color' id='tempArrIndicesLetter0'>0</span>
							</span>
							<span class='box box-indices text-center' id='tempArrIndicesBox1'>
								<span class='box-letter indices-color' id='tempArrIndicesLetter1'>1</span>
							</span>
							<span class='box box-indices text-center' id='tempArrIndicesBox2'>
								<span class='box-letter indices-color' id='tempArrIndicesLetter2'>2</span>
							</span>
							<span class='box box-indices text-center' id='tempArrIndicesBox3'>
								<span class='box-letter indices-color' id='tempArrIndicesLetter3'>3</span>
							</span>
							<span class='box box-indices text-center' id='tempArrIndicesBox4'>
								<span class='box-letter indices-color' id='tempArrIndicesLetter4'>4</span>
							</span>
							<span class='box box-indices text-center' id='tempArrIndicesBox5'>
								<span class='box-letter indices-color' id='tempArrIndicesLetter5'>5</span>
							</span>
							<span class='box box-indices text-center' id='tempArrIndicesBox6'>
								<span class='box-letter indices-color' id='tempArrIndicesLetter6'>6</span>
							</span>
							<span class='box box-indices text-center' id='tempArrIndicesBox7'>
								<span class='box-letter indices-color' id='tempArrIndicesLetter7'>7</span>
							</span>
							<span class='box box-indices text-center' id='tempArrIndicesBox8'>
								<span class='box-letter indices-color' id='tempArrIndicesLetter8'>8</span>
							</span>
							<span class='box box-indices text-center' id='tempArrIndicesBox9'>
								<span class='box-letter indices-color' id='tempArrIndicesLetter9'>9</span>
							</span>
							<span class='box box-indices text-center' id='tempArrIndicesBox10'>
								<span class='box-letter indices-color' id='tempArrIndicesLetter10'>10</span>
							</span>
						</div>
					</div>
					<div class="row" id="tempArrTextRow">
						<div id="tempArrText" class='col-xs-2 animation-font opacity00'><span id='tempArr'>tempArr</span> =</div>
						<div id="tempArrExecuteBoxes" class="col-xs-10 visibility-hidden">
							<span class='box box-text text-center' id = 'tempArrTextBox0'>
								<span class='box-letter text-color opacity00 tempArr' id='tempArrTextLetter0'>11</span>
							</span>
							<span class='box box-text text-center' id = 'tempArrTextBox1'>
								<span class='box-letter text-color opacity00 tempArr' id='tempArrTextLetter1'>2</span>
							</span>
							<span class='box box-text text-center' id = 'tempArrTextBox2'>
								<span class='box-letter text-color opacity00 tempArr' id='tempArrTextLetter2'>23</span>
							</span>
							<span class='box box-text text-center' id = 'tempArrTextBox3'>
								<span class='box-letter text-color opacity00 tempArr' id='tempArrTextLetter3'>6</span>
							</span>
							<span class='box box-text text-center' id = 'tempArrTextBox4'>
								<span class='box-letter text-color opacity00 tempArr' id='tempArrTextLetter4'>14</span>
							</span>
							<span class='box box-text text-center' id = 'tempArrTextBox5'>
								<span class='box-letter text-color opacity00 tempArr' id='tempArrTextLetter5'>72</span>
							</span>
							<span class='box box-text text-center' id = 'tempArrTextBox6'>
								<span class='box-letter text-color opacity00 tempArr' id='tempArrTextLetter6'>55</span>
							</span>
							<span class='box box-text text-center' id = 'tempArrTextBox7'>
								<span class='box-letter text-color opacity00 tempArr' id='tempArrTextLetter7'>4</span>
							</span>
							<span class='box box-text text-center' id = 'tempArrTextBox8'>
								<span class='box-letter text-color opacity00 tempArr' id='tempArrTextLetter8'>9</span>
							</span>
							<span class='box box-text text-center' id = 'tempArrTextBox9'>
								<span class='box-letter text-color opacity00 tempArr' id='tempArrTextLetter9'>33</span>
							</span>
							<span class='box box-text text-center' id = 'tempArrTextBox10'>
								<span class='box-letter text-color opacity00' id='tempArrTextLetter10'>99</span>
							</span>
						</div>
					</div>
					
					<div id='tempArrLength' class='animation-text'></div>
				</div>
				<div id='finallyLine' class='animation-text'></div>
			</div>
		</div>
	</div>
</div>

<script>

$(document).ready(function() {
	arrayListIntroductionReady();
});

</script>

</body>
</html>
