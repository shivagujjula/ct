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
    td {
    	height: 20px;
    	width: 20px;
    	border: 1px solid;
    }
    
</style>

</head>
<body>

<div class='page'>
	<div class='subpage'>
		<div class="text-center" style="margin-top: 20px;">
			<span style="font-size: 24px;color: #d84247 !important;">SWARNANDHRA</span>
		</div>
		<div class="text-center">
			<span style="font-size: 20px;color: #d84247 !important;">COLLEGE OF ENGINEERING & TECHNOLOGY</span>
		</div>
		<div class="text-center"><span>NARASAPUR</span></div>
		<div class="text-center" style="margin-top: 20px;"><span>DEPARTMENT OF</span></div>
		<div style="margin-left: 25px; font-size: 18px; margin-top: 20px;">
			<span>Name : </span>
			<span style="margin-left: 300px;">PIN No.</span>
			<span style="display: inline-block;"><table><tr><%
			
					int i;
					for (i = 1; i <= 10; i++) {	
					%>
					<td id="tableTd<%=i%>"></td>
					
					<%
					}
					%></tr></table>
			</span>
		</div>
		<div class="text-center" style="margin-top: 80px;">
			<span style="font-size: 18px;">Certified that this is bonafide record of</span></div>
		<div class="text-center"><span style="font-size: 18px;">practical work done by</span></div>
		<div style="margin-left: 25px;margin-top: 50px;">
			<spanstyle="font-size: 18px;font-style: italic;">Mr. / Ms. ....................................................
			a student of ..................... with PIN No ...............
			in the .................... Laboratory during the year .......</span>
		</div>
		<br><br>
		<div><span>No. of Practicals Conducted </span><span>No. of practicals Attended </span></div>
		<br><br>
		<div>Signature - Faculty Incharge<span><span>Signature - Head of the Department</span></span></div>
		<br><br>
		<div><span>Submitted for the practical examination held on ...............</span></div>
		<br><br><br>
		<div><span>EXAMINER-1</span><span>EXAMINER-2</span></div>
		<div><span></span></div>
		<div><span></span></div>
	</div>
</div>

</body>
</html>