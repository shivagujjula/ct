<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>C++ Language Index</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/custom-styles.css">
<link rel="stylesheet" href="/css/font-awesome.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>

<style type="text/css">
r {
	color: red;
	font-weight: bold;
}

.fa-check {
	color: #8B0000;
}
</style>

<script type="text/javascript">

	function opendialog(className, url, width, height) {
		if (width == undefined) {
			width = 600;
		} else {
			width = jQuery(window).width() * width;
		}
		if (height == undefined) {
			height = 400;
		} else {
			height = jQuery(window).height() * height;
		}
		var $dialog = $('#javaDocBrowserDiv').html(
				'<iframe id="javaDocIFrame" style="border: 0px; " src="' + url
						+ '" width="100%" height="100%"></iframe>').dialog({
			title : className,
			autoOpen : false,
			dialogClass : 'dialog_fixed ui-widget-header jqueryUIPopupDialog',
			modal : false,
			height : height,
			minWidth : width,
			minHeight : height,
			draggable : true
		});
		$dialog.dialog('open');
		$dialog.closest('.ui-dialog').css("z-index", "1043");
	}
</script>



</head>
<body>
	<div id="javaDocBrowserDiv"></div>
	<div class='container'>

		<div class='well text-center' style='margin-top: 40px;'>
			<h1>C++ Language Interactive Video's</h1>
		</div>
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-1: Introduction</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>C++ History</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('History of C++ Language', 'cpp-language-timeline.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">History of C++ Language</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td>no need of <r>(back)</r></td>
						<td></td>
					</tr>


					<tr>
						<td>2</td>
						<td>C program life cycle</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('C++ program life cycle', 'c-plus-pus-program-life-cycle.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">C++ program life cycle</span></td>
						<td>Sathish</td>
						<td></td>
						<td>no need of <r>(back)</r></td>
						<td></td>
					</tr>


					<tr>
						<td>3</td>
						<td>Identifiers</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('C++ Identifiers', 'c-plus-plus-identifiers.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">C++ Identifiers</span></td>
						<td>Sathish</td>
						<td></td>
						<td>no need of <r>(back)</r></td>
						<td></td>
					</tr>

					<tr>
						<td>4</td>
						<td>Coding conventions</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Coding Conventions in a C++ program', 'usage-of-spaces-and-tabs-in-cpp.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Coding Conventions in a C++ program</span></td>
						<td>Sathish / Sathish <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td></td>
					</tr>

					<tr>
						<td>5</td>
						<td>Directives</td>
						<td>

							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Explanation of #include', 'include.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">explanation of #include</span>
							</div>

							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Explanation of #define', 'usage-of-hash-define.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; explanation of #define
							</div>
						</td>
						<td>Shiva & Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>


					<tr>
						<td>6</td>
						<td>Sample programs</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Sample program in C++ using cout', 'sample-of-cout.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Sample program in C++ using cout</span>
						</td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>Binary-to-Decimal</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Binary to Decimal', 'binary-to-decimal-convertion.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Binary to Decimal</span></td>
						<td>Live-Demo / Shanthan <r>(back)</r></td>
						<td>Sekhar -- success</td>
						<td>Successfully Completed</td>
						<td>same as C</td>
					</tr>

					<tr>
						<td>8</td>
						<td>Binary-to-Octal</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Binary to Octal', 'binary-to-octal.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Binary to Octal conversion</span></td>
						<td>Live-Demo / Shanthan <r>(back)</r></td>
						<td>Sekhar -- success</td>
						<td>Successfully Completed</td>
						<td>same as C</td>
					</tr>

					<tr>
						<td>9</td>
						<td>Binary-to-Hexadecimal</td>
						<td>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Binary to Hexadecimal', 'binary-to-hexa.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Binary to Hexadecimal conversion</span></td>
						<td>Live-Demo</td>
						<td>Sekhar -- success</td>
						<td>Successfully Completed</td>
						<td>same as C</td>
					</tr>

					<tr>
						<td>10</td>
						<td>Decimal-to-Binary</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Decimal to Binary', 'decimal-to-binary.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Decimal to Binary</span></td>
						<td>Live-Demo</td>
						<td>Ramana -- success</td>
						<td>Successfully Completed</td>
						<td>same as C</td>
					</tr>

					<tr>
						<td>11</td>
						<td>Decimal-to-Octal</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Decimal to Octal', 'decimal-to-octal.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Decimal to Octal</span></td>
						<td>Live-Demo</td>
						<td>Ramana -- success</td>
						<td>Successfully Completed</td>
						<td>same as C</td>
					</tr>

					<tr>
						<td>12</td>
						<td>Decimal-to-Hexadecimal</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Decimal to Hexadecimal', 'decimal-to-hexadecimal.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Decimal to Hexadecimal</span></td>
						<td>Live-Demo / Shanthan <r>(back)</r></td>
						<td>Ramana -- success</td>
						<td>Successfully Completed</td>
						<td>same as C</td>
					</tr>

					<tr>
						<td>13</td>
						<td>Octal-to-Binary</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Octal to Binary', 'octal-to-binary-conversion.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Octal to Binary</span></td>
						<td>Live-Demo / Shanthan <r>(back)</r></td>
						<td>Sekhar -- success</td>
						<td>Successfully Completed</td>
						<td>same as C</td>
					</tr>

					<tr>
						<td>14</td>
						<td>Octal-to-decimal</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Octao to Decimal', 'octal-to-decimal-conversion.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp;<span style = "color : green"> Octal to Decimal</span></td>
						<td>Live-Demo / Shanthan <r>(back)</r></td>
						<td>Sekhar -- success</td>
						<td>Successfully Completed</td>
						<td>same as C</td>
					</tr>

					<tr>
						<td>15</td>
						<td>Octal-to-Hexadecimal</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Octal to Hexadecimal', 'octal-to-hexadecimal-conversion.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Octal to Hexadecimal</span></td>
						<td>Live-Demo / Shanthan <r>(back)</r></td>
						<td>Sekhar -- success</td>
						<td>Successfully Completed</td>
						<td>same as C</td>
					</tr>

					<tr>
						<td>16</td>
						<td>Hexadecimal-to-Binary</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Hexadecimal to Binary', 'hexadecimal-binary.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Hexadecimal to Binary</span></td>
						<td>Live-Demo</td>
						<td>Sekhar -- success</td>
						<td>Successfully Completed</td>
						<td>same as C</td>
					</tr>

					<tr>
						<td>17</td>
						<td>Hexadecimal-to-decimal</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Hexadecimal to Decimal', 'hexadecimal-decimal.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Hexadecimal to Decimal</span></td>
						<td>Live-Demo</td>
						<td>Sekhar -- suceess</td>
						<td>Successfully Completed</td>
						<td>same as C</td>
					</tr>

					<tr>
						<td>18</td>
						<td>Hexadecimal-to-Octal</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Hexadecimal to Octal', 'hexadecimal-octal.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Hexadecimal to Octal</span></td>
						<td>Live-Demo</td>
						<td>Sekhar -- suceess</td>
						<td>Successfully Completed</td>
						<td>same as C</td>
					</tr>

					<tr>
						<td>19</td>
						<td>get() usage</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Usage of get()', 'usage-of-get.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of get()</span></td>
						<td>Sathish / Sathish <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>24-10-17</td>
					</tr>
					
					<tr>
						<td>20</td>
						<td>put() usage</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Usage of put()', 'usage-of-put.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of put()</span></td>
						<td>Sathish / Sathish <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>24-10-17</td>
					</tr>
					
					<tr>
						<td>21</td>
						<td>getline() usage</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Usage of getline()', 'usage-of-getline.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of getline()</span></td>
						<td>Sathish / Sathish <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>24-10-17</td>
					</tr>
					
					<tr>
						<td>22</td>
						<td>read() usage</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Usage of read()', 'usage-of-read.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of read()</span></td>
						<td>Sathish / Sathish <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>24-10-17</td>
					</tr>
					
					<tr>
						<td>23</td>
						<td>write() usage</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Usage of write()', 'usage-of-write.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of write()</span></td>
						<td>Sathish / Sathish <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>24-10-17</td>
					</tr>
					
					<tr>
						<td>24</td>
						<td>gcount() usage</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Usage of gcount()', 'usage-of-gcount.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of gcount()</span></td>
						<td>Sathish / Sathish <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>24-10-17</td>
					</tr>
					
					<tr>
						<td>25</td>
						<td>fill() usage</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Usage of fill()', 'fill.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of fill()</span></td>
						<td>Rajashekar / Rajashekar <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>17-10-17</td>
					</tr>
					
					<tr>
						<td>26</td>
						<td>precision() usage</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Usage of precision()', 'precision.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of precision()</span></td>
						<td>Rajashekar / Rajashekar <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>17-10-17</td>
					</tr>
					
					<tr>
						<td>27</td>
						<td>setf() usage</td>
						<td>
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Usage of setf()', 'setf.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of setf()</span>
							</div>
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Usage of setf()', 'setf1.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of setf()</span>
							</div>
						</td>
						<td>Rajashekar / Rajashekar <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>17-10-17</td>
					</tr>
					
					<tr>
						<td>28</td>
						<td>streamflow usage</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Usage of streamflow', 'streamflow.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of streamflow</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>29</td>
						<td>width() usage</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Usage of width()', 'width.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of width()</span></td>
						<td>Rajashekar / Rajashekar <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>17-10-17</td>
					</tr>
					
					<!-- <tr>
						<td>19</td>
						<td></td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('', '', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green"></span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr> -->
					
					<tr>
						<td>30</td>
						<td>int datatype</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('int Data-type', 'int-data-type.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">int Data-type</span></td>
						<td>Shiva</td>
						<td></td>
						<td>no need of <r>(back)</r></td>
						<td></td>
					</tr>

					<tr>
						<td>31</td>
						<td>short int datatype</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('short int Data-type', 'short-int-data-type.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">short int Data-type</span></td>
						<td>Shiva</td>
						<td></td>
						<td>no need of <r>(back)</r></td>
						<td></td>
					</tr>

					<tr>
						<td>32</td>
						<td>long int datatype</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('long int Data-type', 'long-int-data-type.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">long int Data-type</span></td>
						<td>Shiva</td>
						<td></td>
						<td>no need of <r>(back)</r></td>
						<td></td>
					</tr>

					<tr>
						<td>33</td>
						<td>float datatype</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('float Data-type', 'float-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">float Data-type</span></td>
						<td>Shiva / shanthan <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>04-11-17</td>
					</tr>

					<tr>
						<td>34</td>
						<td>double datatype</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('double Data-type', 'double-data-type.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">double Data-type</span></td>
						<td>Shiva / shanthan <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>04-11-17</td>
					</tr>

					<tr>
						<td>35</td>
						<td>char datatype</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('char Data-type', 'char-data-type.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">char Data-type</span></td>
						<td>Shiva / shanthan <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>04-11-17</td>
					</tr>

					<tr>
						<td>36</td>
						<td>Different data types in C++</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Different Data-types in c++', 'datatypes-in-cpp.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Different Data-types in C++</span></td>
						<td>Shiva</td>
						<td></td>
						<td>no need of <r>(back)</r></td>
						<td></td>
					</tr>

					<tr>
						<td>37</td>
						<td>Different constants in C++</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Constants in C++', 'constants-in-cpp.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Constants in C++</span></td>
						<td>Shiva</td>
						<td></td>
						<td>no need of <r>(back)</r></td>
						<td></td>
					</tr>
                    
                    <tr>
						<td>38</td>
						<td>Reference Variables</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Reference Variables in C++', 'reference-variables.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Reference Variables in C++</span></td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>39</td>
						<td>One's complement</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of ones complement', 'ones-complement.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">explanation of	one's complement</span></td>
						<td>Shiva / shanthan <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>04-11-17</td>
					</tr>

					<tr>
						<td>40</td>
						<td>Two's complement</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of twos complement', 'twos-complement.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">explanation of two's complement</span></td>
						<td>Shiva / shanthan <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>04-11-17</td>
					</tr>
					
					<tr>
						<td>41</td>
						<td>Structure of C++</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Structure of C++', 'structure-of-cpp.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Structure of C++</span></td>
						<td>Karthik</td>
						<td></td>
						<td></td>
						<td>07-10-17</td>
					</tr>
					
					<tr>
						<td>42</td>
						<td>Generation of Computers</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('generation of Computers', 'generation-of-computers.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">generation of Computers</span></td>
						<td>Shanthan</td>
						<td></td>
						<td>no need of <r>(back)</r></td>
						<td></td>
					</tr>
					
					<tr>
						<td>43</td>
						<td>Generation of programming languages</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('generation of programming languages', 'generations-of-programming-languages.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">generation of programming languages</span></td>
						<td>Anil</td>
						<td></td>
						<td>no need of <r>(back)</r></td>
						<td></td>
					</tr>

				</tbody>
			</table>

			<div class='text-center'>
				<h3>UNIT-2: Basic Concepts of C++</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Arithmetic Operators</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Execution of Arithmetic Operators', 'arithmetic-operators.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Arithmetic Operators</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Relational Operators</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Execution of Relational Operators', 'relational-operators.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Relational Operators</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Logical Operators</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog(' Execution of Logical Operators', 'logical-operators.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green"> Execution of Logical Operators</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>Compound Assignment Operator</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Execution of Compound Assignment Operator', 'assignment-operators.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Compound Assignment Operator</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Unary Operators</td>
						<td>
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Explanation of Post Increment Operator', 'post-increment-operator.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of	Post Increment Operator</span>
							</div>

							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Explanation of Post Decrement Operator', 'post-decrement-operator.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of Post Decrement Operator</span>
							</div>

							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Explanation of Pre Increment Operator', 'pre-increment-operator.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of Pre Increment Operator</span>
							</div>

							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Explanation of Pre Decrement Operator', 'pre-decrement-operator.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of Pre Decrement Operator</span>
							</div>
						</td>
						<td>Rajashekar / Rajashekar <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>24-10-17</td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>Conditional Operators</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Conditional Operators', 'conditional-operator-cpp.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Conditional Operators</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>Bitwise Operators</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Execution of Bitwise AND Operator', 'bitwise-and-operator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Bitwise AND Operator</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>8</td>
						<td>Bitwise Operators</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Execution of Bitwise OR Operator', 'bitwise-or-operator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Bitwise OR Operator	</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>9</td>
						<td>Bitwise Operators</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Execution of Bitwise XOR Operator', 'bitwise-xor-operator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Bitwise XOR Operator</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>10</td>
						<td>Bitwise LeftShif</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Execution of Bitwise LeftShif', 'bitwise-left-shift-operator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Bitwise LeftShif</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>11</td>
						<td>Bitwise RightShift</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Execution of Bitwise RightShift', 'bitwise-right-shift-operator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Bitwise RightShift</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>12</td>
						<td>Bitwise Operators</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Execution of Bitwise One\'s complement operator', 'bitwise-not-operator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Execution of Bitwise One's complement operator</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>13</td>
						<td>new operator</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Usage of new operator', 'usage-of-new-operator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of new operator</span></td>
						<td>Sathish / Sathish <r>(back)</r></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>14</td>
						<td>delete operator</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Usage of delete operator', 'usage-of-delete-operator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage of delete operator</span></td>
						<td>Sathish / Sathish <r>(back)</r></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>15</td>
						<td>Special Operators</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Special Operators', 'special-operators.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Special Operators</span></td>
						<td>Live-Demo</td>
						<td></td>
						<td></td>
						<td>Same as C</td>
					</tr>
					
					<tr>
						<td>16</td>
						<td>Implicit Type Conversion</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Implicit Type Conversion', 'implicit-type-conversion.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Implicit Type Conversion</span></td>
						<td>Live-Demo</td>
						<td></td>
						<td></td>
						<td>Same as C</td>
					</tr>
					
					<tr>
						<td>17</td>
						<td>Explicit Type Conversion</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('', 'explicit-type-conversion.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explicit Type Conversion</span></td>
						<td>Live-Demo</td>
						<td></td>
						<td></td>
						<td>Same as C</td>
					</tr>
					
					<tr>
						<td>18</td>
						<td>Precedence and Associativity</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Operator Precedence and Associativity', 'operator-precedence-associativity.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Operator Precedence and Associativity</span></td>
						<td>Live-Demo</td>
						<td></td>
						<td></td>
						<td>Same as C</td>
					</tr>
					
					<tr>
						<td>19</td>
						<td>Precedence and Associativity</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Operator Precedence and Associativity Table', 'operator-precedence-table.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Operator Precedence and Associativity Table</span></td>
						<td>Live-Demo</td>
						<td></td>
						<td></td>
						<td>Same as C</td>
					</tr>
					
					<tr>
						<td>20</td>
						<td>if-else</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of if-else', 'if-else-in-cpp.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of if-else</span></td>
						<td>Shiva / Shanthan <r>(back)</r></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>21</td>
						<td>Programs on if-else</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Number is even or odd', 'number-checking-even-or-odd.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Number is even or odd</span>
							</div>

							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Year is Leap year or Not', 'leap-year-program.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Year is Leap year or Not</span>
							</div>

							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Difference between if-else and switch-case', 'diff-if-else-and-switch-statement-in-cpp.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Difference between if-else and switch-case</span>
							</div>
							
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Counting Problem', 'counting-demo-in-cpp.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Counting Problem</span>
							</div>

						</td>
						<td>Shiva & Sathish</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>23</td>
						<td>if-else-if</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of if-else-if', 'if-else-if-in-cpp.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of if-else-if</span></td>
						<td>Shiva / Shanthan <r>(back)</r></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>24</td>
						<td>Nested if-else-if</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Nested if-else-if', 'nested-if-else-in-cpp.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Nested if-else-if</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>25</td>
						<td>Switch case</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of switch-case', 'switch-statement-in-cpp.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of switch-case</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>26</td>
						<td>While loop</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('While loop', 'while-loop-in-cpp.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of while loop</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>27</td>
						<td>do-while</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of do-while loop', 'do-while-loop-in-cpp.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of do-while loop</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>28</td>
						<td>for loop</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of for loop', 'for-loop-in-cpp.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of for loop</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>29</td>
						<td>break statement</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of break statement', 'break-in-cpp.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of break statement</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>30</td>
						<td>Continue</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of continue statement', 'continue-in-cpp.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of continue statement</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>31</td>
						<td>goto statement</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Explanation of goto statement', 'goto.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of goto statement</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>32</td>
						<td>Programs on loop</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Program on Prime numbers', 'sample-program-on-prime-numbers.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Program on Prime numbers 
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Program on Armstrong numbers', 'armstrong-number-program.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Program on Armstrong numbers
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Program to print Floyds Triangle', 'floyds-triangle-cpp.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Program to print floyds triangle
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Program to print Pascal triangle', 'pascal-triangle-cpp.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; Program to print Pascal triangle
							</div>
						</td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>33</td>
						<td>1-D Arrays</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Accessing One-dimensional arrays', 'accessing-one-dimension-array.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Accessing One-dimensional arrays</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>34</td>
						<td>2-D Arrays</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Accessing Two-dimensional arrays', 'two-dimensional-array.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Accessing Two-dimensional arrays</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>35</td>
						<td>Arrays</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Initialization of 1-D arrays', 'initialization-of-one-dimensional-arrays.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Initialization of 1-D arrays</span></td>
						<td>Shiva / Shiva <r>(back)</r></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>36</td>
						<td>Arrays</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Initialization of 2-D arrays', 'initialization-of-two-dimensional-arrays.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Initialization of 2-D arrays</span></td>
						<td>Shiva / Shiva <r>(back)</r></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>37</td>
						<td>Program on arrays</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Program on Multiplication of two Matrices', 'matrix-multiplication.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Program on Multiplication of two Matrices</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>38</td>
						<td>Program on arrays</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Program to Interchange two rows in a matrix', 'matrix-rows-interchange.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Program to Interchange two rows in a matrix</span></td>
						<td>Sathish</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>39</td>
						<td>Program on arrays</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Program to Interchange two columns in a matrix', 'matrix-columns-interchange.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Program to Interchange two columns in a matrix</span></td>
						<td>Sathish</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>40</td>
						<td>Sorting Technique</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Bubble sort', '/secure/lang/ds/bubble-sort.jsp?lang=cpp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Bubble sort</span></td>
						<td>Sathish</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>41</td>
						<td>Sorting Technique</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Insertion sort', '/secure/lang/ds/insertion-sort.jsp?lang=cpp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Insertion sort</span></td>
						<td>Sathish</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>42</td>
						<td>Sorting Technique</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Selection sort with largest element', '/secure/lang/ds/selection-sort-largest-element.jsp?lang=cpp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Selection sort with largest element</span></td>
						<td>Sathish</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>43</td>
						<td>Sorting Technique</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Selection sort with smallest element', '/secure/lang/ds/selection-sort-smallest-element.jsp?lang=cpp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Selection sort with smallest element</span></td>
						<td>Sathish</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>44</td>
						<td>Searching Technique</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Binary search', '/secure/lang/ds/binary-search.jsp?lang=cpp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Binary search</span></td>
						<td>Sathish</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>45</td>
						<td>Searching Technique</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Linear search', '/secure/lang/ds/linear-search.jsp?lang=cpp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Linear search</span></td>
						<td>Sathish</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>46</td>
						<td>Scope</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('scope resolution operator', 'scope-resolution-operator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">scope resolution operator</span></td>
						<td>Sathish / Sathish <r>(back)</r></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>47</td>
						<td>Strings</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('string functions', 'string-functions.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">string functions</span></td>
						<td>Karthik / Karthik <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>07-10-17</td>
					</tr>
					
					<tr>
						<td>48</td>
						<td>Strings</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('String using gets() and puts()', 'read-print-string-using-gets-puts.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">String using gets() and puts()</span></td>
						<td>Karthik / Karthik <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>25-10-17</td>
					</tr>
					
					
					<tr>
						<td>49</td>
						<td>Strings</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('String length', 'length-of-a-string.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">String length</span></td>
						<td>Karthik / Karthik <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>25-10-17</td>
					</tr>
					
					<tr>
						<td>50</td>
						<td>Strings</td>
						<td><i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Copy of a string', 'copy-of-a-string.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Copy of a string</span></td>
						<td>Karthik / Karthik <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>25-10-17</td>
					</tr>
					
					<tr>
						<td>51</td>
						<td>Float data type</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('float data type', 'float-data-type.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">float data type</span></td>
						<td>Karthik</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>52</td>
						<td>Functions</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Function Definition', 'function-definition.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Function Definition</span>
							</div>

							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Function Declaration', 'function-declaration.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Function Declaration</span>
							</div>
							
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Function Call', 'function-call.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Function Call</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Formal & actual arguments', 'different-argument-variables.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Formal & actual arguments</span>
							</div>
						</td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>53</td>
						<td>Functions</td>
						<td>
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('call by address', 'call-by-address.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">call by address</span>
							</div>

							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('call by value', 'call-by-value.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">call by value</span>
							</div>
							
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('call by reference', 'call-by-reference.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">call by reference</span>
							</div>
							
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Default arguements', 'default-arguments.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Default arguments</span>
							</div>
							
						</td>
						<td>Sathish & Shanthan <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>01-11-17</td>
					</tr>
					
					<tr>
						<td>54</td>
						<td>Functions</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('function overloading', 'function-overloading-in-cpp.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">function overloading</span>
							</div>
							
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('sample program on functions', 'sample-program-on-functions.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">sample program on functions</span>
							</div>

							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Local global variables', 'local-global-variables.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Local global variables</span>
							</div>
							
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Functions with arrays', 'functions-with-arrays.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Functions with arrays</span>
							</div>
							
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Categories of functions', 'categories-of-functions.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Categories of functions</span>
							</div>
							
						</td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td>07-10-17</td>
					</tr>
					
					<tr>
						<td>55</td>
						<td>Pointers</td>
						<td>
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Introduction of pointers', 'pointers-introduction.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Introduction of pointers</span>
							</div>

							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('pointers one dimensional array', 'pointers-one-dimensional-array.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">pointers one dimensional array</span>
							</div>
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('pointers two dimensional array', 'pointers-two-dimensional-array.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">pointers two dimensional array</span>
							</div>
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Multiple indirection operator', 'multiple-indirection-operator.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Multiple indirection operator</span>
							</div>
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Declaration of pointers', 'pointers-declaration.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Declaration of pointers</span>
							</div>
						</td>
						<td>Karthik / Karthik <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>25-10-17</td>
					</tr>
					
					<tr>
						<td>56</td>
						<td>statements in c++</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('statements in c++', 'statements-in-cpp.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">statements in c++</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>57</td>
						<td>Recursion</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Factorial using recursion', '/secure/lang/ds/factorial-using-recursion.jsp?lang=cpp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Factorial using recursion</span>
							</div>

							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Fibonacci series using recursion', '/secure/lang/ds/fibonacci-series-using-recursion.jsp?lang=cpp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Fibonacci series using recursion</span>
							</div>
							
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('GCD using recursion', '/secure/lang/ds/gcd-using-recursion.jsp?lang=cpp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">GCD using recursion</span>
							</div>
							
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Tower of hanoi', '/secure/lang/ds/tower-of-hanoi.jsp?lang=cpp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Tower of hanoi</span>
							</div>
							
						</td>
						<td>Pavan</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>57</td>
						<td>Inline functions</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Inline Functions', 'inline-functions.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of inline functions</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<div class='text-center'>
				<h3>UNIT-3: Classes and Objects</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Access specifiers</td>
						<td>
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('access specifiers', 'access-specifiers.jsp', 1, 1)"><i
										class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">access specifiers</span>
							</div>
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('scope of classes and objects', 'scope-of-classes-and-objects.jsp', 1, 1)"><i
										class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">scope of classes and objects</span>
							</div>
						</td>
						<td>Shanthan / Shanthan <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>04-11-17</td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Static member functions</td>
						<td>
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
								href="javascript:opendialog('static data members', 'static-data-members.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation static data members</span>
							</div>
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
								href="javascript:opendialog('static member functions', 'static-member-functions.jsp', 1, 1)"><i
									class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation static member functions</span>
							</div>
						</td>
						<td>Rajashekar / Rajashekar <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>16-10-17</td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Array of objects</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Array of Objects', 'array-of-objects.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of array of objects</span></td>
						<td>Rajashekar</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>Nested classes</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Nested classes', 'nested-classes.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of nested classes</span></td>
						<td>Karthik / Karthik <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>25-10-17</td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Objects and memory</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Object memory allocation', 'object-memory-allocation.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of object memory allocation</span></td>
						<td>Karthik / Karthik <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>25-10-17</td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>Friend functions</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Friend functions', 'friend-function.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Friend functions</span></td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td>06-10-17</td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>Static variables</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Static variables', 'static-variables.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Static variables</span></td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td>07-10-17</td>
					</tr>
				</tbody>
			</table>
			
			<div class='text-center'>
				<h3>UNIT-4: Constructors and Destructors</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Default constructor</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Default constructor', 'default-constructor.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Default constructor</span></td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>Parameterized constructor</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Parameterized constructor', 'parameterized-constructor.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Parameterized constructor</span></td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Copy constructor</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Copy constructor', 'copy-constructor.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of copy constructor</span></td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>Destructor</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Destructor', 'destructor.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of destructor</span></td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Static data members in constructors</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Static data members in constructors', 'static-data-members-in-constructors.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Static data members in constructors</span></td>
						<td>Anil / Anil <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>18-10-17</td>
					</tr>
					
				</tbody>
			</table>
			
			<div class='text-center'>
				<h3>UNIT-5: Operator Overloading and Type Conversions</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Overloading unary operators</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Overloading binary minus as friend function', 'overloading-binary-minus-as-friend-function.jsp', 1, 1)"><i
										class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Overloading binary minus as friend function</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Overloading binary minus as member function', 'overloading-binary-minus-as-member-function.jsp', 1, 1)"><i
										class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Overloading binary minus as member function</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Overloading binary plus as friend function', 'overloading-binary-plus-as-friend-function.jsp', 1, 1)"><i
										class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Overloading binary plus as friend function</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Overloading binary plus as member function', 'overloading-binary-plus-as-member-function.jsp', 1, 1)"><i
										class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Overloading binary plus as member function</span>
							</div>
						</td>
						<td>Sathish</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>Increment and Decrement operators</td>
						<td>
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Overloading increment and decrement operators', 'overloading-increment-and-decrement-operators-in-cpp.jsp', 1, 1)"><i
										class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Overloading ++ and -- operators</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Overloading increment and decrement operators without dif', 'overloading-increment-and-decrement-operators-without-dif-in-cpp.jsp', 1, 1)"><i
										class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Overloading ++ and -- operators without dif</span>
							</div>
						</td>
						<td>Sathish / Sathish <r>(back)</r></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td>Insertion and Extraction operators</td>
						<td>
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Overloading Insertion and Extraction Operators', 'overloading-insertion-and-extraction-operators-in-cpp.jsp', 1, 1)"><i
										class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Overloading << and >> Operators</span>
							</div>
							<div>
								<i class="fa fa-check fa-1x"></i>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Cascading of Insertion and Extraction Operators', 'cascading-of-insertion-and-extraction-operators-in-cpp.jsp', 1, 1)"><i
										class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Cascading of << and >> Operators</span>
							</div>
						</td>
						<td>Sathish / Sathish <r>(back)</r></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>4</td>
						<td>Basic to User-defined</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Basic to User-defined', 'basic-to-userdefined.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of Basic to User-defined</span></td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>5</td>
						<td>User-defined to basic</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('User-defined to basic', 'userdefined-to-basic.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of User-defined to basic</span></td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>User-defined to User-defined</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('User-defined to User-defined', 'userdefined-to-userdefined.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of User-defined to User-defined</span></td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
			
			<div class='text-center'>
				<h3>UNIT-6: Inheritance</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Types of Inheritance</td>
						<td>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Single Inheritance', 'single-inheritance.jsp', 1, 1)"><i
										class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Single Inheritance</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Muliple Inheritance', 'muliple-inheritance.jsp', 1, 1)"><i
										class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Muliple Inheritance</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Multilevel Inheritance', 'multilevel-inheritance.jsp', 1, 1)"><i
										class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Multilevel Inheritance</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Hierarchical Inheritance', 'hierarchical-inheritance.jsp', 1, 1)"><i
										class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Hierarchical Inheritance</span>
							</div>
							<div>
								<a class='btn btn-xs btn-success'
									href="javascript:opendialog('Hybrid Inheritance', 'hybrid-inheritance.jsp', 1, 1)"><i
										class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Hybrid Inheritance</span>
							</div>
						</td>
						<td>Karthik</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>Virtual base inheritance</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Virtual base inheritance', 'virtual-base-inheritance.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Virtual base inheritance</span></td>
						<td>Karthik / Karthik <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>25-10-17</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Virtual destructor</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Virtual destructor', 'virtual-destructor.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Virtual destructor</span></td>
						<td>Karthik / Karthik <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>25-10-17</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Virtual destructor</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Constructor invoke virtual function', 'constructor-invoke-virtual-function.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Constructor invoke virtual function</span></td>
						<td>Karthik / Karthik <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>22-11-17</td>
					</tr>
					
				</tbody>
			</table>
			
			<div class='text-center'>
				<h3>UNIT-7: Binding, Polymorphism and Virtual Functions</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					
					<tr>
						<td>1</td>
						<td>Pure virtual functions</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Pure virtual functions', 'pure-virtual-functions.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Pure virtual functions</span></td>
						<td>Shanthan / Shanthan <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>04-11-17</td>
					</tr>
				</tbody>
			</table>
			
			<div class='text-center'>
				<h3>UNIT-8: Applications with Files</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					
					<tr>
						<td>1</td>
						<td></td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('', '', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green"></span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
			
			
			<div class='text-center'>
				<h3>UNIT-9: Generic Programming with Templates</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Function with templates</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Function with templates', 'function-with-templates.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation about function with templates</span></td>
						<td>Rajashekar / Rajashekar <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>16-10-17</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Class templates with parameters</td>
						<td>
							<i class="fa fa-check fa-1x"></i>
							<a class='btn btn-xs btn-success'
							href="javascript:opendialog('Class templates with parameters', 'class-templates-with-parameters.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Class templates with parameters</span></td>
						<td>Rajashekar / Rajashekar <r>(back)</r></td>
						<td></td>
						<td>Successfully Completed</td>
						<td>16-10-17</td>
					</tr>
				</tbody>
			</table>
			
			<div class='text-center'>
				<h3>UNIT-10: Exception Handling</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					
					<tr>
						<td>1</td>
						<td>Catch all exceptions</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Catch all exceptions', 'catch-all-exceptions.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Catch all exceptions</span></td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td>18-10-17</td>
					</tr>
					<tr>
						<td>1</td>
						<td>Exception handling</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Exception handling', 'exception-handling.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Exception handling</span></td>
						<td>Anil</td>
						<td></td>
						<td></td>
						<td>18-10-17</td>
					</tr>
				</tbody>
			</table>
			
			<div class='text-center'>
				<h3>UNIT-11: Overview of Standard Template Library</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Submit Date</th>
				</tr>
				<tbody class='table-striped'>
					
					<tr>
						<td>1</td>
						<td></td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('', '', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green"></span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

		</div>
	</div>
</body>
</html>
