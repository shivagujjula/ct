function SoilSensorCircuitReady() {
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
		// src: '/secure/lang/iot/images/chapter9/step3.png'
	}); */
	
/* 	$("#buttton").click(function()  {
	   $(".slider").width("90%");
	}); */
	
}

function circuitConnections() {
	var circuitConnectionsArr = [{
		"img_src" : "/secure/lang/iot/images/chapter9/step1.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 1",
		"description" : "Take a bread board, an Arduino(UNO) board, an ESP8266 module, SoilSensor, LM393 Comparator and Level converter(shifter) as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step2.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 2",
		"description" : "Place one end of jumper to 5V pin on UNO board and another end is placed in one of the pin on bottom +ve row of breadboard as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step3.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 3",
		"description" : "Place one end of jumper to GND pin on UNO board and another end is placed in one of the pin on bottom -ve row of breadboard as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step4.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 4",
		"description" : "Place one end of jumper to 3.3V pin on UNO board and another end is placed in one of the pin on top +ve row of breadboard as shown above."
	} , {
		"img_src" : "/secure/lang/iot/images/chapter9/step5.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 5",
		"description" : "Place one end of jumper to GND pin on UNO board and another end is placed in one of the pin on top -ve row of breadboard as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step6.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 6",
		"description" : "Connect the High Voltage (HV) point in level convertor to 5V supply through the breadboard as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step7.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 7",
		"description" : "Connect GND point of level convertor to GND of the breadboard as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step8.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 8",
		"description" : "Connect the Low Voltage (LV) point to 3.3V supply of the breadboard as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step9.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 9",
		"description" : "Connect GND point of level convertor to GND point of the breadboard as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step10.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 10",
		"description" : "Connect VCC pin of ESP8266 module to 3.3V row of the breadboard as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step11.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 11",
		"description" : "Connect GND pin of ESP8266 module to GND row of the breadboard as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step12.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 12",
		"description" : "Connect  HV1(TX) pin  of level convertor to UNO board's 11th pin on digital side."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step13.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 13",
		"description" : "Connect  HV2(RX) of level convertor to UNO board's 10th pin on digital side."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step14.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 14",
		"description" : "Connect RX pin of ESP8266 to LV1(TX) pin of level convertor."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step15.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 15",
		"description" : "Connect TX pin of ESP8266 to LV2(RX) pin of level convertor."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step16.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 16",
		"description" : "Connect pin 8 of LM393 Comparator module to 5V of breadboard as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step17.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 17",
		"description" : "Connect pin 4 of LM393 Comparator module to GND of breadboard as shown above."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step18.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 18",
		"description" : "Connect VCC pin of SoilSensor to pin 2 of LM393 Comparator."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step19.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 19",
		"description" : "Connect SIG pin of SoilSensor to pin 3 of LM393 Comparator."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step20.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 20",
		"description" : "Connect pin 7 of LM393 Comparator module to pin 9 in digital side of UNO Board."
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step21.png",
		"alt" : "bread-board",
		"steps_desc" : "Step 21",
		"description" : "Connect pin 7 of LM393 Comparator module to pin A0 in analog side of UNO Board."
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
		"img_src" : "/secure/lang/iot/images/chapter9/step1.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 1",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step2.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 2",
	},{
		"img_src" : "/secure/lang/iot/images/chapter9/step3.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 3",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step4.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 4",
	},{
		"img_src" : "/secure/lang/iot/images/chapter9/step5.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 5",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step6.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 6",
	},{
		"img_src" : "/secure/lang/iot/images/chapter9/step7.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 7",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step8.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 8",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step9.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 9",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step10.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 10",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step11.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 11",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step12.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 12",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step13.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 13",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step14.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 14",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step15.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step15",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step16.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 16",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step17.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 17",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step18.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 18",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step19.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 19",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step20.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 20",
	}, {
		"img_src" : "/secure/lang/iot/images/chapter9/step21.png",
		"alt" : "bread-board-bottom",
		"legend" : "Step 21",
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