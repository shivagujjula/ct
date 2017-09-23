function StreetLightCircuitReady() {
	circuitConnections();
	slideImages();
	
	/* $( "button" ).click(function() {
		$(".paragraph-text").slideToggle( "slow" );
	}); */
	
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
	
	/* $(".top-box-slide").on("click", function(e) {
		if (e.keyCode == 27) {
			alert("clicked");
		}
	}); */
	
	
	
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
		// src: '/secure/lang/iot/images/chapter10/step3.png'
	}); */
	
/* 	$("#buttton").click(function()  {
	   $(".slider").width("90%");
	}); */
}

function circuitConnections() {
	var circuitConnectionsArr = [{
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_1_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 1",
		"description" : "Take a bread board, an Arduino(UNO) board, an ESP8266 module, SoilSensor, LM393 Comparator and Level converter(shifter) as shown in above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_2_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 2",
		"description" : "Take a jumper and place one end to UNO board power 5v point and another end is placed on breadboard +ve point as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_3_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 3",
		"description" : "Take another jumper and place one end to UNO board ground point and another end is placed on breadboard -ve point as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_4_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 4",
		"description" : "Take another jumper and place one end to UNO board power 3.3v point and another end is placed on breadboard +ve point."
	} , {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_5_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 5",
		"description" : "Take another jumper and place one end ground point to another end on breadboard as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_6_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 6",
		"description" : "Connect the high voltage (HV) point in level shifter to 5v supply through breadboard."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_7_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 7",
		"description" : "Connect GND points of level shifter to GND of bread board."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_8_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 8",
		"description" : "Connect the low voltage (LV) point to 3.3 v supply of bread board."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_9_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 9",
		"description" : "Connect GND point of level shifter to GND point of bread board."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_10_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 10",
		"description" : "Connect ESP8266 module Vcc to 3.3 v through breadboard."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_11_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 11",
		"description" : "Connect ESP8266 module Gnd to Gnd through breadboard."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_12_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 12",
		"description" : "Connect  HV1(TX) pin  on level shifter to UNO board 11th pin on digital side."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_13_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 13",
		"description" : "Connect  HV2(RX) on level shifter to UNO board 10th pin on digital side."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_14_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 14",
		"description" : "Connect ESP8266 RX pin to LV1(TX) pin of level shifter."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_15_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 15",
		"description" : "Connect ESP8266 TX pin to LV2(RX) pin of level shifter."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_16_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 16",
		"description" : "Connect Resistor 10K ohms pin to 5V of bread board."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_17_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 17",
		"description" : "Connect PhotoResistor D0 to A0 of UNO board."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_18_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 18",
		"description" : "Connect relay VCC to 5V of bread board pin."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_19_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 19",
		"description" : "Connect relay GND pin to GND of bread board pin."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_20_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 20",
		"description" : "Connect relay input pin to 2nd pin of UNO Board."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_21_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 21",
		"description" : "Connect Led anode pin to 5V of Bread Board."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_22_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 22",
		"description" : "Connect Led cathode pin with resistor 220 ohms to NC(No Closed) of relay module."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_23_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 23",
		"description" : "Connect COM(COMMON) pin of relay to GND of bread board."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_24_bb.jpg",
		"alt" : "bread-board",
		"steps_desc" : "Step 24",
		"description" : "."
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
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_1_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 1",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_2_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 2",
	},{
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_3_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 3",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_4_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 4",
	},{
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_5_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 5",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_6_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 6",
	},{
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_7_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 7",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_8_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 8",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_9_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 9",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_10_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 10",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_11_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 11",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_12_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 12",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_13_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 13",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_14_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 14",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_15_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step15",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_16_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 16",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_17_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 17",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_18_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 18",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_19_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 19",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_20_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 20",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_21_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 21",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_22_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 22",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_23_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 23",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter10/NewPhotoResisitive_24_bb.jpg",
		"alt" : "bread-board-bottom",
		"legend" : "Step 24",
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