
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>IoT Index</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/custom-styles.css">
<link rel="stylesheet" href="/css/font-awesome.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>

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
			<h1>IoT Interactive Video's</h1>
		</div>
		<div class='row'>
			<div class='text-center'>
				<h3>UNIT-1</h3>
			</div>
			<table class='table table-bordered'>
				<tr>
					<th>#</th>
					<th class="col-xs-3">Topic</th>
					<th class="col-xs-4">Details</th>
					<th class="col-xs-1">Created By</th>
					<th class="col-xs-1">Reviewed By</th>
					<th class="col-xs-2">Status</th>
					<th class="col-xs-1">Assign Date</th>
				</tr>
				<tbody class='table-striped'>
					<tr>
						<td>1</td>
						<td>Architecture of IoT</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('architecture of IoT', 'architecture-of-iot.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">architecture of IoT</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>Life cycle of Arduino</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Life cycle of Arduino', 'arduino-avr-gcc.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Life cycle of Arduino</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td>hardware architecture of IoT</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('hardware architecture of IoT', 'hardware-architecture.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">hardware architecture of IoT</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>4</td>
						<td>Characteristics of IoT</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Characteristics of IoT', 'IoT-characteristics.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Characteristics of IoT</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>5</td>
						<td>Microcontroller Architecture</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('microcontroller architecture', 'microcontroller-architecture.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Microcontroller Architecture</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>Arduino uno board</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Arduino uno board', 'arduino-uno-board.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of Arduino uno board</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>Level Converter</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Level Converter', 'level-converter-circuit.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of Level Converter</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>8</td>
						<td>Soil sensor</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Soil sensor', 'soil-sensor-image-circuit.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of Soil Sensor</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>9</td>
						<td>Wifi Module</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Wifi Module', 'wifi-module-circuit.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of Wifi Module</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>10</td>
						<td>Capacitor</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Capacitor', 'capacitor.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Capacitor</span></td>
						<td>Suresh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>11</td>
						<td>Diode</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Diode', 'diode.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Diode</span></td>
						<td>Suresh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>12</td>
						<td>Inductor</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Inductor', 'inductor.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Inductor</span></td>
						<td>Suresh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>13</td>
						<td>Resistor connections</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Resistor connections', 'resistor-connections.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Resistor connections</span></td>
						<td>Suresh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>14</td>
						<td>series parallel resistor</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('series parallel resistor', 'series-parallel-resistor.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">series parallel resistor</span></td>
						<td>Suresh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>15</td>
						<td>AC voltage</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('AC voltage', 'ac-voltage.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of AC voltage</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>16</td>
						<td>DC voltage</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('DC voltage', 'dc-voltage.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of DC voltage</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>17</td>
						<td>DC Regulator</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('DC Regulator', 'dc-regulator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Operation of DC Regulator</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>18</td>
						<td>smart city program</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('smart city program', 'smart-city-program.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of smart city program</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>19</td>
						<td>smart industry program</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('smart industry program', 'smart-industry-program.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of smart industry program</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>20</td>
						<td>smart street light program</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('smart street light program', 'smart-street-light-program.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of smart street light program</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr><tr>
						<td>21</td>
						<td>temperature and humidity program</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('temperature and humidity program', 'temp-and-humidity.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of temperature and humidity program</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>22</td>
						<td>soil sensor program</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('soil sensor program', 'soil-sensor.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Explanation of soil sensor program</span></td>
						<td>Shiva</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>23</td>
						<td>temperature sensor circuit connection</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('temperature sensor circuit connection', 'temperature-sensor-circuit-connection.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">temperature sensor circuit connection</span></td>
						<td>Suresh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>24</td>
						<td>ultrasonic circuit connection</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('ultrasonic circuit connection', 'ultrasonic-circuit-connection.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">ultrasonic circuit connection</span></td>
						<td>Suresh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>25</td>
						<td>smart street light circuit connection</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('smart street light circuit connection', 'street-light-circuit-connection.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">smart street light circuit connection</span></td>
						<td>Suresh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>26</td>
						<td>soil sensor circuit connection</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('soil sensor circuit connection', 'soil-sensor-circuit-connection.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">soil sensor circuit connection</span></td>
						<td>Suresh</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>27</td>
						<td>PIR sensor circuit connection</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('PIR sensor circuit connection', 'pir-sensor-circuit-connection.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">PIR sensor circuit connection</span></td>
						<td>Suresh</td>
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