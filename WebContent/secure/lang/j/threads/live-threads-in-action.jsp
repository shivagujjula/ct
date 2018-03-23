<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/jquery-ui.css"	rel="stylesheet">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<!-- jQuery Version 1.10.2 -->
<script src="/js/jquery-latest.js"></script>
<!-- Bootstrap Core JavaScript -->
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="../js-min/ltia.min.js"></script>

<title>live-threads-in-action.jsp</title>

<style>

#slider-range-max label {
    position: absolute;
    width: 20px;
    margin-left: -10px;
    text-align: center;
    margin-top: 15px;
}

.threadbox {
	border: 1px solid lightgray;
	border-radius: 8px;
	padding: 10px;
	margin: 30px 10px 10px 10px;
}

.opacity40 {
	opacity: 0.4 !important;
}

p {
	font-size: 90%;
}

.label-float-left {
	float: left;
}

.vertical-main-thread {
	margin-top: 40px;
	margin-bottom: 40px;
	display: inline-block;
	width: 100px;
	height: 30px;
	-webkit-transform: rotate(+90deg);
	transform: rotate(+90deg);
}

.vertical-thread {
	margin-top: 40px;
	margin-bottom: 40px;
	display: inline-block;
	width: 100px;
	height: 25px;
	-webkit-transform: rotate(+90deg);
	transform: rotate(+90deg);
}

.progress-bar-striped {
	-webkit-transform: rotate(+180deg);
	transform: rotate(+180deg);
}

.vertical-main-thread, .vertical-thread {
	box-shadow: inset 0px 4px 6px #ccc;
}

.progress-bar {
	box-shadow: inset 0px 4px 6px rgba(100, 100, 100, 0.6);
}

.pulsate {
	-webkit-animation: pulsate 1s linear infinite;
	-moz-animation: pulsate 1s linear infinite;
	-ms-animation: pulsate 1s linear infinite;
	animation: pulsate 1s linear infinite;
}

@keyframes "pulsate" {
 0% {
    color: rgba(0, 0, 0, 1);
 }
 90% {
    color: rgba(0,0,0,0.0);
 }
 100% {
    color: rgba(0,0,0,1.0);
 }

}

@-moz-keyframes pulsate {
 0% {
   color: rgba(0, 0, 0, 1);
 }
 90% {
   color: rgba(0,0,0,0.0);
 }
 100% {
   color: rgba(0,0,0,1.0);
 }

}

@-webkit-keyframes "pulsate" {
 0% {
   color: rgba(0, 0, 0, 1);
 }
 90% {
   color: rgba(0,0,0,0.0);
 }
 100% {
   color: rgba(0,0,0,1.0);
 }

}

@-ms-keyframes "pulsate" {
 0% {
   color: rgba(0, 0, 0, 1);
 }
 90% {
   color: rgba(0,0,0,0.0);
 }
 100% {
   color: rgba(0,0,0,1.0);
 }
}

#divT1 {
	margin-top: 20px;
}

#divT2 {
	margin-top: 39px;
}

#divT3 {
	margin-top: 59px;
}

#divT4 {
	margin-top: 80px;
}

</style>


<script>

	$(document).ready(function() {
		liveThreadsInActionReady();
	});
	
</script>
</head>

<body>

	<div>
		<div class='row'>
			<div>
				<div class='col-sm-3'>
					<p>
						<label>Number of Threads:</label> <input type="text"
							id="numOfThreads" name="numOfThreads" readonly
							style="border: 0; font-weight: bold;">
					</p>
					<div id="slider-range-max"></div>
				</div>

				<div class='col-sm-9' style='margin-top: 15px'>
					<button type="button" class="btn btn-primary btn-sm"
						id='startAllThreadsButton'>Start Main Thread</button>
				</div>
			</div>
		</div>
		<div class='col-sm-12'>
			<div class='row'>
				<div class='col-sm-2 threadbox'>
					<div class='text-center'>
						<div>
							<h4>
								<span class='label label-default' id='mainThreadLabel'>Main
									Thread</span>
							</h4>
						</div>
						<div style='margin-top: 13px; margin-left: 38px;'>
							<div class="progress vertical-main-thread" style="float: left;">
								<div class="progress-bar progress-bar-success"
									style="width: 0%;" id='progressBarMainThread'></div>
							</div>
							<div style="float: left; margin-left: -31px;">

								<%
									for (int i = 1; i <= 4; i++) {
								%>
								<div class='hidden' id='divT<%=i%>'>
									<span class='label label-default label-float-left'
										id='t<%=i%>Label'>T <sub><%=i%></sub></span>
								</div>
								<%
									}
								%>
							</div>
						</div>
						<div class="col-sm-12">
							<p id='mainThreadMessage'></p>
						</div>
						<div class="col-sm-12">
							<button type="button"
								class="pauseResumeBtn pause btn btn-danger btn-xs disabled opacity40"
								threadId='0' id='pauseMainThreadButton'>Pause</button>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<button type="button"
								class="pauseResumeBtn resume btn btn-success btn-xs disabled opacity40"
								threadId='0' id='resumeMainThreadButton'>Resume</button>
						</div>
					</div>
				</div>

				<%
					for (int i = 1; i <= 4; i++) {
				%>
				<div class='col-sm-2 threadbox hidden' id='threadbox<%=i%>'>
					<div class='text-center'>
						<div>
							<h4>
								<span class='label label-default' id='thread<%=i%>Label'>Thread
									T<sub><%=i%></sub>
								</span>
							</h4>
						</div>
						<div class="progress vertical-thread">
							<div class="progress-bar progress-bar-primary" style="width: 0%;"
								id='progressBarThread<%=i%>'></div>
						</div>
						<div>
							<p id='thread<%=i%>Message'></p>
						</div>
						<div>
							<button type="button"
								class="pauseResumeBtn pause btn btn-danger btn-xs disabled opacity40"
								threadId='<%=i%>' id='pauseThread<%=i%>Button'>Pause</button>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<button type="button"
								class="pauseResumeBtn resume btn btn-success btn-xs disabled opacity40"
								threadId='<%=i%>' id='resumeThread<%=i%>Button'>Resume</button>
						</div>
					</div>
				</div>

				<%
					}
				%>

			</div>

		</div>
		<div class="margin-top-20 text-center col-xs-12">
			<span class="col-xs-6 col-xs-offset-3">
		 		<span class="col-xs-12" id="button">
					<span class="btn btn-warning opacity00" id="closeBtn">Close <i class="fa fa-close"></i></span>&nbsp;&nbsp;
					<span class="btn btn-restart opacity00" id="restartBtn">Restart <i class="fa fa-refresh"></i></span>
				</span>
			</span>
		</div>
	</div>
</body>
</html>