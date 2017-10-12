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
<link href="/css/custom-styles.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript"
	charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<title>Insert title here</title>

<style>	
	
   body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      /* background-color: #FAFAFA; */
      font: 12pt "Tahoma";
      -webkit-print-color-adjust: exact !important;
      color:black;
    }
    
    * {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    
    .page {
        width: 210mm;
        min-height: 297mm;
        padding: 0mm 10mm 0mm 25mm;
        margin: 0mm auto;
        /* border: 1px #D3D3D3 solid;
        border-radius: 5px; */
        /* background: white; */
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
    .subpage {
        padding: 0px;
        font-size: 14px;
        height: 277mm;
        /* outline: 3cm #CECECE solid; */
        border: 1px solid;
    }
    
    @page {
        size: A4;
        margin: 10mm 0mm 10mm 0mm;
    }
    
    @media print {
	    
        html, body {
            width: 210mm;
            height: 297mm;
        }
        .page {
            margin: 0;
            border: initial;
            border-radius: initial;
            width: initial;
            min-height: initial;
            box-shadow: initial;
            page-break-after: always;
        }
        
    }
    
</style>

</head>
<body>

<div class='page'>
	<div class='subpage'>
		<div class='text-center' style="margin-top: 12px;font-size: 36px;">
			<span style="color: #ea2929 !important;font-weight: bold;">RAGHU ENGINEERING COLLEGE</span>
		</div>
		<div class='text-center'><span style="color: blue !important;">(Approved by AICTE,New Delhi and Affiliated to JNTU, Kakinada)</span></div>
		<div class='text-center'><span style="color: blue !important;"><b style="color: blue !important;">DAKAMARRI</b>, Visakhapatnam Dist.</span></div>
		<div class='text-center'><img src="../secure/raghu-logo.jpg" style="width: 180px;"></div>
		<div class='text-center'><span style="color: blue !important;font-size: 24px; text-decoration: underline;">CERTIFICATE</span></div>
		<div style="margin-top: 9px; margin-left: 26px;">
			<span style="font-size: 19px; font-style: italic;color: blue !important; line-height: 3;">&emsp;&emsp;This is to certify that is bonafide record of practical work done
		by <br>Mr./Ms.  ....................................................................................................
		<br>bearing Regd.No.  ...............................of B.Tech ........ year......... Semester 
		<br>in ........................................................... Laboratory of
		the department of ............................................................................................... Engineering
		<br>During the academic year ..............</span></div>
		<br><br><br>
		<div><span style="font-size: 16px;margin-left: 31px;color: blue !important;">No. of Experiments done and certified ..............</span></div>
		
		<div style="margin-top: 100px;">
			<span style="margin-left: 19px; font-size: 17px; color: red !important;">Signature of Lab-In-Charge</span>
			<span style="margin-left: 240px; font-size: 17px; color: red !important;">Signature of H.O.D</span>
		</div>
		<br><br>
		<div style="margin-top: 40px;">
			<span style="font-size: 16px;margin-left: 31px;color: blue !important; text-decoration: underline;">Signature of Examiners</span>
		</div>
		<br>
		<div><span style="font-size: 16px;margin-left: 55px;color: blue !important;">1) Internal Examiner ..................</span></div>
		<br>
		<div><span style="font-size: 16px;margin-left: 55px;color: blue !important;">2) External Examiner ..................</span></div>
	</div>
</div>
</body>
</html>