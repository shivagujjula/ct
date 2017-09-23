var tooltipMap = {
	"#simulaGroup1" :"<ul><li>The first generation computers used <b class='ct-code-b-green'><a href='https://en.wikipedia.org/wiki/Vacuum_tube' target='_blank'><u>vacuum tubes</u></a></b> for <b class='ct-code-b-green'>circuitary</b> " +
			"and <b class='ct-code-b-green'><a href='https://en.wikipedia.org/wiki/Drum_memory' target='_blank'><u>magnet drums</u></a></b> for <b class='ct-code-b-green'>memory</b>.</li>" +
			"<li>These computers used the <b class='ct-code-b-green'>lowest-level programming</b> language known as <b class='ct-code-b-green'>Machine Language(0, 1)</b>.</li><li>This language was understood only by the computers and could perform a single task at any point of time.</li>" 
		+ "<li>The input to this computers was <b class='ct-code-b-green'>punch cards</b> and <b class='ct-code-b-green'>tapes</b> and output was on <b class='ct-code-b-green'>printouts</b>.</li>" +
		" </ul>",
	"#simulaGroup2" :"<ul><li><b class='ct-code-b-green'><a href='https://en.wikipedia.org/wiki/Transistor_computer' target='_blank'><u>Transistors</u></a></b> were used in place of <b class='ct-code-b-green'>vacuum tubes</b> that were invented by <b class='ct-code-b-green'>Bell Labs</b>.</li>" +
					"<li>The use of these <b class='ct-code-b-green'>transistors</b> made the computers small, fast and efficient.</li>" + 	
	"<li><b class='ct-code-b-green'>Assembly language</b> was used by programmers, which were a set of instructions that were understood by the computer.</li>" +
			
			"<li>These computers could store the instructions in their memory that used the <b class='ct-code-b-green'>magnetic core technology</b>.</li></ul>",
				
	"#simulaGroup3" :"<ul><li><b class='ct-code-b-green'><a href='https://en.wikipedia.org/wiki/Integrated_circuit' target='_blank'><u>Integrated Circuits</u></a></b> were used in this generations.</li><li>The ICs were a combination of <b class='ct-code-b-green'>transistors</b>, <b class='ct-code-b-green'>resistors</b> and other circuits that were miniaturized and placed on silicon chips.</li>" +
			"<li>These computers used <b class='ct-code-b-green'>keyboards</b> and <b class='ct-code-b-green'>monitors</b> that were interfaced with an <b class='ct-code-b-green'>operating system</b> at once.</li>" + 
			"<li><b class='ct-code-b-green'>Operating systems</b> allowed the machines to run many applications.</li>" +
			"</ul>",
	"#simulaGroup4" :"<ul><li>A single silicon chip known as <b class='ct-code-b-green'><a href='https://en.wikipedia.org/wiki/Microprocessor' target='_blank'><u>Microprocessors</u></a></b> were used in this generation.</li><li>The <b class='ct-code-b-green'>Microprocessor</b> had thousands of <b class='ct-code-b-green'>Integrated circuits(ICs)</b> built-in.</li>" + "<li><b class='ct-code-b-green'>IBM</b> introduced first computer for home user.</li>" +
			"<li>As desktops were introduced, the network of these computers could be linked to form networks, that led to the development of <b class='ct-code-b-green'>Internet</b>.</li></ul>",
	"#simulaGroup5" :"<ul><li>These computing devices use many <b class='ct-code-b-green'>CPUs</b> for <b class='ct-code-b-green'>parallel-processing</b> and <b class='ct-code-b-green'>super conductors</b> for <b class='ct-code-b-green'>Artificial Intelligence</b>.</li>" +
			"<li><b class='ct-code-b-green'>Voice recognition</b> is a special feature now.</li>" +
			"<li><b class='ct-code-b-green'>Quantum Computation</b>  and <b class='ct-code-b-green'>nano technology</b> will be the future face of computers.</li>"+
			"<li>This generation aims to develop the computing devices that understand the natural language and are self learning.</li></ul>."
};


var generationComputer = function() {
	$("line, circle, text, rect, image").hide();
	$("#nextButton").click(function() {
		$("#nextButton").addClass("opacity00");
		generation1();
		$('#restartBtn').click(function() {
			location.reload();
		});
	});
}
function generation1() {
	animation("#simulaGroup1", "#circle1", "#img1", function() {
		nextBtnAnimation("#circle1", "generation2()");
	});
}
function generation2() {
	//$('.popover').remove();
	$('.next-btn').parents(".popover").remove();
	arrowRevealside("#line6", function() {
		animation("#simulaGroup2","#circle2","#img2",function() {
			nextBtnAnimation("#circle2",  "generation3()");
		});
	});
}
function generation3() {
//	$('.popover').remove();
	$('.next-btn').parents(".popover").remove();
	arrowRevealside("#line7", function() {
		animation("#simulaGroup3", "#circle3", "#img3", function() {
			nextBtnAnimation("#circle3", "generation4()");
		});
	});
}

function generation4() {
	//$('.popover').remove();
	$('.next-btn').parents(".popover").remove();
	arrowRevealside("#line8", function() {
		animation("#simulaGroup4", "#circle4", "#img4", function() {
			nextBtnAnimation("#circle4", "generation5()");
		});
	});
}

function generation5() {
	//$('.popover').remove();
	$('.next-btn').parents(".popover").remove();
	arrowRevealside("#line9", function() {
		animation("#simulaGroup5", "#circle5", "#img5", function() {
			nextBtnAnimation("#circle5", "restart()");
		});
	});
}
function restart() {
	//$('.popover').remove();
	$('.next-btn').parents(".popover").remove();
	$("body").scrollTo($("#title"), 500, function() {
	$("#restartBtn").css( "opacity", "1").popover({
		position : "right",
		html : true,
		trigger : "focus",
		content: "Click to restart",
	}).popover('show').next().addClass("animated bounce");
	});
}
function animation(id1, circleId, imageId, callBackFunction) {
	$(id1).find("rect").show();
	$(id1).find("text:eq(0)").show();
	$(circleId).show();
	arrowReveal($(circleId).next(), function() { 	
		 $(id1).find("text:eq(1)").show();
		 $(id1).find("text:eq(2)").show();
		 if (imageId.trim().length != "") {
			$(imageId).show().attr("class", "animated bounce").one("animationend", function() {
				 customPopover($(id1).find("rect"), "bottom", tooltipMap[id1], callBackFunction);
			});
		 } else {
			 customPopover($(id1).find("rect"), "bottom", tooltipMap[id1], callBackFunction);

		 }
  	});
}

function nextBtnAnimation(selector, nextAnimation) {
	$(selector).popover({
		trigger : "focus", 
		position : "right",
		html : true,
		container : "#totalDiv",
		content: "<a class='btn next-btn' onclick='" + nextAnimation + "'>Next &#x2192;</a>",
	}).popover("show");
	$('.next-btn').parents(".popover").css("width", "auto").addClass("animated bounce").one("animationend", function() {
		$(this).removeClass("animated bounce");
	});
	
	
}
function arrowRevealside(lineId, callBackFuntion) {
	var xVal = $(lineId).attr("x2");
	var yVal = $(lineId).attr("y2");
	$(lineId).attr('x2', $(lineId).attr("x1"));
	$(lineId).attr('y2', $(lineId).attr("y1"));
	$(lineId).show();
	TweenMax.to(lineId, 1, {
		attr : {
			x1 : xVal,
			y1 : yVal
		},
		onComplete: function () {
			if (typeof callBackFuntion === 'function') {
				callBackFuntion();
			}
	 	}
	});
}
function arrowReveal(lineId, callBackFuntion) {
	var xVal = $(lineId).attr("x1");
	var yVal = $(lineId).attr("y1");
	$(lineId).attr('x1', $(lineId).attr("x2"));
	$(lineId).attr('y1', $(lineId).attr("y2"));
	$(lineId).show();
	TweenMax.to(lineId, 1, {
		attr : {
			x1 : xVal,
			y1 : yVal
		},
		onComplete: function () {
			if (typeof callBackFuntion === 'function') {
				callBackFuntion();
			}
	 	}
	});
}

function customPopover(selector, position, text, callBackFunction) {
	$(selector).popover({
		placement : position,
		html: true,
		trigger: 'focus',
		
		container : "#totalDiv",
		content: '<div class="customPopover">' + text + '</div>'
	}).popover("show");
	typing($(".customPopover:last"), text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : 5,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	});
}