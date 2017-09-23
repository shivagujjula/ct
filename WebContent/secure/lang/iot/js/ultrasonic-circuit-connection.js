function ultrasonicCircuitReady() {
	circuitConnections();
	slideImages();
	$('.top-box-slide').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
		fade: true,
		asNavFor: '.bottom-slides'
	 });
	$('.bottom-slides').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.top-box-slide',
		  dots: true,
		  centerMode: true,
		  focusOnSelect: true,
	});
	
	/* $("#button").click(function()  {
		console.log("********************");
		$(".slider").width("90%");
		}); */
	
	$("img").magnify();
	
	/*$("img").magnify( {
		 //speed: 500,
		 //imageWidth: '1600',
		// imageHeight: '900',
		// src: '/secure/lang/iot/images/chapter7/step3.png'
	}); */
	
/* 	$("#buttton").click(function()  {
	   $(".slider").width("90%");
	}); */
}

function circuitConnections() {
	var circuitConnectionsArr = [{
		"img_src" : "/secure/lang/iot/images/chapter7/step1.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 1",
		"description" : "Take a bread board, an Arduino(UNO) board, an ESP8266 module, HC-SR04 ultrasonic sensor and Level converter(shifter) as shown in above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step2.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 2",
		"description" : "Take a jumper and place one end to UNO board power 5v point and another end is placed on breadboard +ve point as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step3.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 3",
		"description" : "Take another jumper and place one end to UNO board ground point and another end is placed on breadboard -ve point as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step4.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 4",
		"description" : "Take another jumper and place one end to UNO board power 3.3v point and another end is placed on breadboard +ve point."
	} , {
		"img_src" : "/secure/lang/iot/images/chapter7/step5.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 5",
		"description" : "Take another jumper and place one end to UNO board ground point and another end is placed on breadboard -ve point as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step6.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 6",
		"description" : "Connect the high voltage (HV) point in level shifter to 5v supply through breadboard."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step7.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 7",
		"description" : "Connect GND points of level shifter to GND of bread board."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step8.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 8",
		"description" : "Connect the low voltage (LV) point to 3.3 v supply of bread board."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step9.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 9",
		"description" : "Connect GND point of level shifter to GND point of bread board."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step10.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 10",
		"description" : "Connect ESP8266 module Vcc to 3.3 v through breadboard."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step11.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 11",
		"description" : "Connect ESP8266 module Gnd to Gnd through breadboard."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step12.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 12",
		"description" : "Connect  HV1(TX) pin  on level shifter to UNO board 11th pin on digital side."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step13.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 13",
		"description" : "Connect  HV2(RX) on level shifter to UNO board 10th pin on digital side."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step14.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 14",
		"description" : "Connect ESP8266 RX pin to LV1(TX) pin of level shifter."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step15.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 15",
		"description" : "Connect ESP8266 TX pin to LV2(TX) pin of level shifter."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step16.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 16",
		"description" : "Connect HC-SR04 ultrasonic module Vcc pin to 5V of bread board."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step17.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 17",
		"description" : "Connect HC-SR04 ultrasonic module GND pin to gnd of bread board."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step18.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 18",
		"description" : "Connect TRIG pin of HCSRO4 to UNO board 6th pin in digital side."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step19.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 19",
		"description" : "Connect ECHO pin of HCSRO4 to UNO board 7th pin in digital side."
	}];
	
	var appendText = "";
	$.each(circuitConnectionsArr, function() {
		appendText = appendText + "<div><img src='" + this.img_src + "' data-magnify-src='" + this.img_src + "' alt='" + this.alt 
					+ "' class='image-style border-slide magnify-image'>" 
					+ "<div class='paragraph-text'>" 
					+ "<p><b class='step-style-in-paragraph' style='padding: 1px 4px;'>" + this.steps_desc + ":</b> <span class='paragraph-text-style'>" + this.description + "</span></p></div>" 
					+ "</div>";
	});
	$("#circuitConnectionsDiv").prepend(appendText);
}

function slideImages() {
	var slideImagesArr = [{
		"img_src" : "/secure/lang/iot/images/chapter7/step1.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 1",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step2.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 2",
	},{
		"img_src" : "/secure/lang/iot/images/chapter7/step3.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 3",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step4.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 4",
	},{
		"img_src" : "/secure/lang/iot/images/chapter7/step5.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 5",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step6.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 6",
	},{
		"img_src" : "/secure/lang/iot/images/chapter7/step7.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 7",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step8.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 8",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step9.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 9",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step10.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 10",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step11.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 11",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step12.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 12",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step13.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 13",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step14.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 14",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step15.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step15",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step16.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 16",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step17.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 17",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step18.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 18",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter7/step19.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 19",
	}];
	var appendText = "";
	$.each(slideImagesArr, function() {
		appendText = appendText + "<div class='border-padding'><img src='" + this.img_src + "' alt='" + this.alt 
					+ "' class='image-style-bottom'>" 
					+ "<div class='border-text'><legend>" + this.legend + "</legend></div>" 
					+ "</div>";
	});
	$("#slideImagesDiv").prepend(appendText);
}