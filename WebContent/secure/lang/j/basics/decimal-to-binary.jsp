<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Decimal to Binary.jsp</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<script src='/js/jquery-ui-latest.js'></script>
<script src='../js-min/dtb.min.js'></script>
<link rel="stylesheet" href="/css/font-awesome.min.css">

<style>

.ct-demo-heading {
	background: highlight none repeat scroll 0.0;
	border-radius: 10px;
	font-size: 18px;
	position: relative;
	z-index: 9999999;
}

input:focus::-moz-placeholder {
	color: transparent;
}

.box-border {
	border: 1px solid grey;
	border-radius: 8px;
	margin: 6px;
	background-color: #FCFFE6;
}

.main-div {
	margin-top: 2%;
}

.index-textbox-size {
	width: 18%;
	height: 30px !important;
	border: 1px solid gold;
	display: inline !important;
	border-radius: 4px;
	padding: 6px 10px;
	text-align: center
}

 .introjs-tooltiptext br {
	margin-bottom: 15px;
}

.display-inlineblock {
	display: inline-block;
}

.opacity40 {
	opacity: 0.4;
}

.opacity00 {
	opacity: 0.0;
}

.font-size-18{
	font-size: 18px;
}

.font-size-16{
	font-size: 16px;
}

.font-size-21{
	font-size: 21px;
}

.position-relative {
	position: relative;
}

.z-index9999999 {
	z-index: 9999999;
}

.typingCursor::after {
	width: 0px !important;
}

.introjs-tooltip {
	min-width: 270px !important;
}

.introjs-tooltiptext {
	min-height: 25px !important;
	font-size: 14px;
}

.store-remainder {
	padding: 6px;
	font-family: monospace;
}

.store-remainder-border {
	border: 1px solid grey;
}

.center-block {
	display: block;
	margin-left: auto;
	margin-right: auto;
}

#infoDiv {
	height: 88px;
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	margin-left: 20.5%;
}

#inputDiv {
	margin-left: 25%;
}

#remainderValues {
	margin-left: 6%;	
	height: 35px;
}

.font-size-14 {
	font-size: 14px;
}

.margin-top-1 {
	margin-top: 1%;	
}

#resultDiv > .col-sm-3 {
	width: 26% !important;
	height: 115px !important;
	border: 1px solid lightblue;
}

#resultDiv > .col-sm-3 > table {
	margin: 7px auto 0 !important;
}

#restartBtn {
	margin-left: 36%;
}

.ct-code-b-green {
	font-family: monospace;
	font-weight: bold;
	color: green;	
}

.ct-code-b-yellow {
	color: yellow;
	font-family: monospace;
	font-weight: bold;
}

.row {
	margin-right : 0px !important;
}

.binary-value-prop {
	margin-left: 21%;
	margin-top: 2%;
}

ol, ul {
    margin-left: -17px;
    margin-top: 1.7%;
}

@media (min-width: 768px) {
  .set-height {
		height: 153px !important;
	}
}

@media (min-width: 992px) {
  .set-height {
		height: 130px !important;
	}
}
 
@media (min-width: 1200px) {
  .set-height {
		height: 102px !important;
	}
}
.background-effect {
	color: black;
	background-color: yellow;	
}

.visibility-hidden {
	visibility: hidden;
}
</style>
</head>
<body>
	
	<div class="main-div">
		<div class="row text-center">
			<h3 class='label ct-demo-heading margin-top-1'>
				<span>Convert Decimal to Binary<sub>(<span id="radix">2</span>)</sub></span>
			</h3>
		</div>
		<div class="row" id="informationDiv" >
			<div id="infoDiv" class="col-sm-7 col-sm-offset-2 font-size-14 margin-top-1 position-relative set-height" ></div>
		</div>
		<div class="row text-center">
			<div id="inputDiv" class="col-sm-6 col-sm-offset-2 margin-top-1 visibility-hidden">
				<span class='font-size-16'>Decimal Value:</span>&nbsp;&nbsp;&nbsp;<input
				class="index-textbox-size" type="text" name="decimalValue"
				id="decimalValue" placeholder="Decimal Value" Maxlength='3' disabled="false">&nbsp;&nbsp;&nbsp;
			<button type="button" class="btn btn-success disabled opacity40" id="convert">
				<i class="fa fa-arrow-right"></i> Convert to Binary </button>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-8 col-sm-offset-2" id="animationDiv">
				<div class="row col-sm-12">
						<div class="row text-center col-sm-10 font-size-16 margin-top-1" id="remainderValues">
							<div id="remainders" class="col-sm-offset-2 col-sm-4 opacity00 margin-top-1">Remainders:</div>
							<div class="col-sm-6 text-left margin-top-1" ><table><tr id="remaindersRow"></tr></table></div>
						</div>
				 </div>
				<div class="row" id="resultDiv" style="margin-left:3%"></div>
				<div class="row binary-value-prop">
						<span id="binaryValueDiv" class="col-sm-12 font-size-18" style="height: 30px"></span>
				</div>
				<div class="row" style="margin-top: 3%; margin-left: 14.5%">
					<button class="btn btn-warning hidden" type="button" id='restartBtn'>Restart</button>
				</div>
			</div>
		</div>
	</div>
	<script>
		
		 <% 
		if (request.getParameter("restart") != null) {
	%>
			typingFlag = false;
	<%
		}
	%>  
		$(document).ready(function(){
			decimalToBinaryReady();
		});
		
	</script>
</body>
</html>
