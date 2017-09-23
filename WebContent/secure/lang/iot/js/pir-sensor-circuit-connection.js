function PIRsensorCircuitReady() {
	circuitConnections();
	slideImages();
	
	$('.top-box-slide').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
		fade: true,
		asNavFor: '.bottom-slides',
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
		
	$(".top-box-slide").zoomify();
	
		/* $('.top-box-slide').each(function() { // the containers for all your galleries
		    $(this).magnificPopup({
		       // delegate: 'a', // the selector for gallery item
		        type: 'image',
		        gallery: {
		          enabled:true
		        }
		    });
		}); */
	
	/*$("img").magnify( {
		 //speed: 500,
		 //imageWidth: '1600',
		// imageHeight: '900',
		// src: '/secure/lang/iot/images/chapter8/step3.png'
	}); */
	
/* 	$("#buttton").click(function()  {
	   $(".slider").width("90%");
	}); */
}

function circuitConnections() {
	var circuitConnectionsArr = [{
		"img_src" : "/secure/lang/iot/images/chapter8/step1.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 1",
		"description" : "Take a bread board, an Arduino(UNO) board, an ESP8266 module, HC-SR04 ultrasonic sensor and Level converter(shifter) as shown in above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step2.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 2",
		"description" : "Place one end of jumper in 5V pin of UNO board and another end in any one of the pin in the bottom +ve row of the breadboard as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step3.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 3",
		"description" : "Place one end of jumper in GND pin of UNO board and another end in any one of the pin in the bottom -ve row of the breadboard as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step4.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 4",
		"description" : "Place one end of jumper in 3.3V pin of UNO board and another end in any one of the pin in the top +ve row of the breadboard as shown above."
	} , {
		"img_src" : "/secure/lang/iot/images/chapter8/step5.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 5",
		"description" : "Place one end of jumper in GND pin of UNO board and another end in any one of the pin in the top -ve row of the breadboard as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step6.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 6",
		"description" : "Connect the high voltage (HV) pin of level connector to any pin in 5V supply row, i.e. bottom +ve row of the breadboard."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step7.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 7",
		"description" : "Connect GND pin of level connector to bottom GND row of the breadboard."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step8.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 8",
		"description" : "Connect the low voltage (LV) pin to any pin in 3.3V supply row, i.e. top +ve row of breadboard."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step9.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 9",
		"description" : "Connect GND pin of level connector to GND pin of the breadboard."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step10.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 10",
		"description" : "Connect VCC pin of ESP8266 module to any pin of 3.3V supply row, i.e. top +ve row of the breadboard."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step11.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 11",
		"description" : "Connect GND pin of ESP8266 module to any pin of GND row, i.e. top -ve row of the breadboard."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step12.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 12",
		"description" : "Connect HV1(TX) pin of level connector to pin 11 of UNO board on digital side."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step13.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 13",
		"description" : "Connect HV2(RX) pin of level connector to pin 10 of UNO board on digital side."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step14.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 14",
		"description" : "Connect RX pin of ESP8266 to LV1(TX) pin of level connector."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step15.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 15",
		"description" : "Connect TX pin of ESP8266 to LV2(TX) pin of level connector."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step16.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 16",
		"description" : "Connect VCC pin of HC-SR04 Ultrasonic module to any pin of 5V supply row, i.e bottom +ve row of the breadboard."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step17.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 17",
		"description" : "Connect GND pin of HC-SR04 Ultrasonic module to GND pin of breadboard."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step18.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 18",
		"description" : "Connect TRIG pin of HCSRO4 to pin 6 of UNO board in digital side."
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
		"img_src" : "/secure/lang/iot/images/chapter8/step1.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 1",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step2.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 2",
	},{
		"img_src" : "/secure/lang/iot/images/chapter8/step3.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 3",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step4.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 4",
	},{
		"img_src" : "/secure/lang/iot/images/chapter8/step5.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 5",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step6.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 6",
	},{
		"img_src" : "/secure/lang/iot/images/chapter8/step7.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 7",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step8.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 8",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step9.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 9",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step10.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 10",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step11.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 11",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step12.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 12",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step13.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 13",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step14.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 14",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step15.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step15",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step16.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 16",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step17.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 17",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter8/step18.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 18",
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