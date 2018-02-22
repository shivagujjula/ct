<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Java Language Index</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/custom-styles.css">
<link rel="stylesheet" href="/css/font-awesome.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<title>Insert title here</title>
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
			<h1>Java Interactive Video's</h1>
		</div>
		<div class='row'>
			<div class='text-center'>
				<h3>Basics</h3>
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
						<td>Array Introduction</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Array Introduction', 'array-introduction.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Array Introduction in Java</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>Arraylist Introduction</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Arraylist Introduction', 'arraylist-introduction.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Arraylist Introduction in Java</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td>Basic For Loop Syntax</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Basic For Loop Syntax', 'basic-for-loop-syntax.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Basic For Loop Syntax</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>4</td>
						<td>Break Statement</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Break', 'break.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Break Statement</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>5</td>
						<td>Command Line Arguments In Action</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Command Line Arguments', 'command-line-arguments-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Command Line Arguments</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>6</td>
						<td>Conditional Operator</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Conditional Operator', 'conditional-operator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Conditional Operator</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					 <tr>
						<td>7</td>
						<td>Continue Statement</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Continue Statement', 'continue.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Continue Statement</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>8</td>
						<td>Counting</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Counting', 'counting.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Counting in Java</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>9</td>
						<td>Decimal To Binary</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Decimal To Binary', 'decimal-to-binary.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Decimal To Binary</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>10</td>
						<td>Decimal To Hexadecimal</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Decimal To Hexadecimal', 'decimal-to-hexadecimal.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Decimal To Hexadecimal</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>11</td>
						<td>Decimal To Octal</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Decimal To Octal', 'decimal-to-octal.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Decimal To Octal</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>12</td>
						<td>Difference b/w Print and Println</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Difference b/w Print and Println', 'difference-between-print-n-println.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Difference b/w Print and Println</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>13</td>
						<td>Do While</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Do While', 'do-while.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Do While</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>14</td>
						<td>For Each Loop</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('For Each Loop', 'for-each-loop.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">For Each Loop</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>15</td>
						<td>If Else</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('If Else', 'if-else.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">If Else</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>16</td>
						<td>Program Life Cycle</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Program Life Cycle', 'program-life-cycle.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Program Life Cycle</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>17</td>
						<td>Simple Java Program With Println</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Simple Java Program With Println', 'simple-java-program-with-println.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Simple Java Program With Println</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>18</td>
						<td>Swap Demo</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Swap Demo', 'swap-demo.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Swap Demo</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>19</td>
						<td>Switch</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Switch', 'switch.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Switch Demo</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>20</td>
						<td>Try Catch Finally In Action</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Try Catch Finally In Action', 'try-catch-finally-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Try Catch Finally In Action</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>21</td>
						<td>Try Catch Finally Intro</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Try Catch Finally Intro', 'try-catch-finally-intro.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Try Catch Finally Intro</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>22</td>
						<td>Usage Of Spaces And Tabs</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Usage Of Spaces And Tabs', 'usage-of-spaces-and-tabs.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Usage Of Spaces And Tabs</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>23</td>
						<td>While Demo</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('While', 'while.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">while Demo</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
				</tbody>
			</table>
			<div class='text-center'>
				<h3>String</h3>
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
						<td>Equals Method</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Equals Methods', '../string/equal-methods.jsp?id=1', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Equals Methods</span></td>
						<td></td>
						<td></td>
						<td>yes</td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>Equals Ignore Case Method</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Equals Ignore Case Method', '../string/equal-methods.jsp?id=2', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Equals Methods</span></td>
						<td></td>
						<td></td>
						<td>yes</td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td>Ends With Method</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Ends With Method', '../string/ends-with-method.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Ends With Method</span></td>
						<td></td>
						<td></td>
						<td>yes</td>
						<td></td>
					</tr>
					<tr>
						<td>4</td>
						<td>Starts With Methods</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Starts With Methods', '../string/starts-with-methods.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Starts With Methods</span></td>
						<td></td>
						<td></td>
						<td>yes</td>
						<td></td>
					</tr>
					<tr>
						<td>5</td>
						<td>String IndexOf Methods</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('String IndexOf Methods', '../string/string-indexof-methods.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">String IndexOf Methods</span></td>
						<td></td>
						<td></td>
						<td>yes</td>
						<td></td>
					</tr>
					<tr>
						<td>6</td>
						<td>String length and charAt method</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('String length and charAt method', '/secure/lang/j/string/string-length-charat-methods.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">String length and charAt method</span></td>
						<td></td>
						<td></td>
						<td>yes</td>
						<td></td>
					</tr>
					<tr>
						<td>7</td>
						<td>String substring method</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('String substring method', '/secure/lang/j/string/string-substring-methods.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">String substring method</span></td>
						<td></td>
						<td></td>
						<td>yes</td>
						<td></td>
					</tr>
					<tr>
						<td>8</td>
						<td>String replace</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('String replace method', '/secure/lang/j/string/string-replace-methods.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">String replace method</span></td>
						<td></td>
						<td></td>
						<td>yes</td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<div class='text-center'>
				<h3>Threads</h3>
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
						<td>Live Threads In Action</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Live Threads In Action', '../threads/live-threads-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Live Threads In Action</span></td>
						<td></td>
						<td></td>
						<td>Yes</td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>Live Threads In Action with Code - Single Thread</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Live Threads In Action With Code', '../threads/live-threads-in-action-with-code.jsp?id=1', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Live Threads In Action</span></td>
						<td></td>
						<td></td>
						<td>Yes</td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td>Live Threads In Action with Code -Multiple Threads</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Live Threads In Action With Code', '../threads/live-threads-in-action-with-code.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Live Threads In Action</span></td>
						<td></td>
						<td></td>
						<td>Yes</td>
						<td></td>
					</tr>
					<!-- <tr>
						<td>2</td>
						<td>Live Threads In Action</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Live Threads In Action', '../threads/live-threads-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Live Threads In Action</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr> -->
					<tr>
						<td>4</td>
						<td>Threads Stop Demo Automatic - Multiple Threads</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Threads Stop Demo Automatic', '../threads/threads-stop-demo-automatic.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Threads Stop Demo Automatic</span></td>
						<td></td>
						<td></td>
						<td>Yes</td>
						<td></td>
					</tr>
					<tr>
						<td>5</td>
						<td>Threads Stop Demo Automatic - SingleThread</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Threads Stop Demo Automatic', '../threads/threads-stop-demo-automatic.jsp?id=1', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Threads Stop Demo Automatic</span></td>
						<td></td>
						<td></td>
						<td>Yes</td>
						<td></td>
					</tr>
					<!-- <tr>
						<td>4</td>
						<td>Threads Stop Demo</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('', '../threads/threads-stop-demo.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Threads Stop Demo</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr> -->
					<tr>
						<td>6</td>
						<td>Threads Wait Notify Demo Automatic - MultipleThread</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Threads Wait Notify Demo Automatic', '../threads/threads-wait-notify-demo-automatic.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Threads Wait Notify Demo Automatic</span></td>
						<td></td>
						<td></td>
						<td>Yes</td>
						<td></td>
					</tr>
					<td>7</td>
						<td>Threads Wait Notify Demo Automatic - SingleThread</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Threads Wait Notify Demo', '../threads/threads-wait-notify-demo-automatic.jsp?id=1', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Threads Wait Notify Demo Automatic</span></td>
						<td></td>
						<td></td>
						<td>Yes</td>
						<td></td>
					</tr>
					<!-- <tr>
						<td>6</td>
						<td>Threads Wait Notify Demo</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Threads Wait Notify Demo', '../threads/threads-wait-notify-demo.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Threads Wait Notify Demo</span></td>
						<td></td>
						<td></td>
						<td>No</td>
						<td></td>
					</tr> -->
					<tr>
						<td>8</td>
						<td>Threads Wait Notify Stop Demo Automatic</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Threads Wait Notify Stop Demo Automatic', '../threads/threads-wait-notify-stop-demo-automatic.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Threads Wait Notify Stop Demo Automatic</span></td>
						<td></td>
						<td></td>
						<td>NO</td>
						<td></td>
					</tr>
					<tr>
						<td>9</td>
						<td>Threads Wait Notify Stop Demo</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Threads Wait Notify Stop Demo', '../threads/threads-wait-notify-stop-demo.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Threads Wait Notify Stop Demo</span></td>
						<td></td>
						<td></td>
						<td>NO</td>
						<td></td>
					</tr>
				</tbody>
			</table>
			
			<div class='text-center'>
				<h3>Collections</h3>
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
						<td>Deque In Action</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Deque In Action', '../col/deque-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Deque In Action</span></td>
						<td></td>
						<td></td>
						<td>yes</td>
						<td></td>
					</tr>
					
					<tr>
						<td>2</td>
						<td>Different Maps</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Different Maps', '../col/different-maps.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Different Maps</span></td>
						<td></td>
						<td></td>
						<td>yes</td>
						<td></td>
					</tr>
					
					<tr>
						<td>3</td>
						<td>Different Sets</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Different Sets', '../col/different-sets.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Different Sets</span></td>
						<td></td>
						<td></td>
						<td>yes</td>
						<td></td>
					</tr>
					
					<tr>
						<td>4</td>
						<td>Double Linked List Demo</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Double Linked List', '../col/double-linked-list-demo.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Double Linked List Demo</span></td>
						<td></td>
						<td></td>
						<td>yes</td>
						<td></td>
					</tr>
					
					<tr>
						<td>5</td>
						<td>Hashmap In Action</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Hashmap In Action', '../col/hashmap-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Hashmap In Action</span></td>
						<td></td>
						<td></td>
						<td>yes</td>
						<td></td>
					</tr>
					
					<tr>
						<td>6</td>
						<td>Queue In Action</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Queue In Action', '../col/queue-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Queue In Action</span></td>
						<td></td>
						<td></td>
						<td>yes</td>
						<td></td>
					</tr>
					
					<tr>
						<td>7</td>
						<td>Set In Action</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Set In Action', '../col/set-in-action.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Set In Action</span></td>
						<td></td>
						<td></td>
						<td>yes</td>
						<td></td>
					</tr>
				</tbody>	
			</table>
			
			
			<div class='text-center'>
				<h3>Selenium</h3>
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
						<td>Absolute Relative Xpath</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Absolute Relative Xpath', '../../selenium/absolute-relative-xpath.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Absolute Relative Xpath</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td>Calculator</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Calculator', '../../selenium/calculator.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Calculator</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>3</td>
						<td>Dynamic Form</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Dynamic Form', '../../selenium/dynamic-form.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Dynamic Form</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>4</td>
						<td>Firebug Inspect Element</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Firebug Inspect Element', '../../selenium/firebug-inspect-element.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Firebug Inspect Element</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>5</td>
						<td>Header</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Header', '../../selenium/header.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Header</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>6</td>
						<td>Html Page Preview</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Html Page Preview', '../../selenium/html-page-preview.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Html Page Preview</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>7</td>
						<td>Login Page</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Login Page', '../../selenium/login-page.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Login Page</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>8</td>
						<td>Sample Page</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Sample Page', '../../selenium/sample-page.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Sample Page</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>9</td>
						<td>Secure Page1</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Secure Page1', '../../selenium/secure-page1.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Secure Page1</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>10</td>
						<td>Secure Page2</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Secure Page2', '../../selenium/secure-page2.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Secure Page2</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>11</td>
						<td>Selenium FrameWork</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Selenium FrameWork', '../../selenium/selenium-framework.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Selenium FrameWork</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>12</td>
						<td>Selenium Intro</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Selenium Intro', '../../selenium/selenium-intro.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Selenium Intro</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>13</td>
						<td>Selenium Timeline</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Selenium Timeline', '../../selenium/selenium-timeline.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Selenium Timeline</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>14</td>
						<td>Web Application Test Automation</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Web Application Test Automation', '../../selenium/web-application-test-automation.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Web Application Test Automation</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>15</td>
						<td>Welcome Page</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Welcome Page', '../../selenium/welcome-page.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Welcome Page</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>16</td>
						<td>Working With Selenium Framework</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Working With Selenium Framework', '../../selenium/working-with-selenium-framework.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Working With Selenium Framework</span></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>17</td>
						<td>Xpath Demo Page</td>
						<td><a class='btn btn-xs btn-success'
							href="javascript:opendialog('Xpath Demo Page', '../../selenium/xpath-demo-page.jsp', 1, 1)"><i
								class='fa fa-eye'></i>&nbsp;Live Demo</a> &emsp; <span style = "color : green">Xpath Demo Page</span></td>
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