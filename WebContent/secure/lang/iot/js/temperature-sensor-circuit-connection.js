function temparatureSensorCicuitReady() {
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
	
	
	/* $("#button").click(function() {
	    var img = $(".slider");

	    if (img.width() < 70)
	    {
	        img.animate({width: "80%"}, 1000);
	    }
	    else 
	    {
	        img.animate({width: img.attr("width"), height: img.attr("height")}, 1000);
	    }
	}); */
	
	
	/* $("#button").click(function()  {
		console.log("********************");
		$(".slider").width("90%");
	});  */
	
	$("img").magnify();
	
	/*$("img").magnify( {
		 //speed: 500,
		 //imageWidth: '1600',
		// imageHeight: '900',
		// src: '/secure/lang/iot/images/chapter6/step3.png'
	}); */
	
	/*$("#buttton").click(function()  {
	   $(".slider").width("90%");
	}); */
}

/* function zoomIn(){
console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
var myImg = document.getElementById("circuitConnectionsDiv")//$(".border-slide");
var currWidth = myImg.clientWidth;
if(currWidth == 1500){
    alert("Maximum zoom-in level reached.");
} else{
    myImg.style.width = (currWidth + 100) + "px";
} 
}
function zoomOut(){

var myImg = document.getElementById("circuitConnectionsDiv")//$(".border-slide");
var currWidth = myImg.clientWidth;
if(currWidth == 874){
    alert("Maximum zoom-out level reached.");
} else{
    myImg.style.width = (currWidth - 100) + "px";
}
} */



function circuitConnections() {
var circuitConnectionsArr = [{
	"img_src" : "/secure/lang/iot/images/chapter6/step1.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 1",
	"description" : "Take a bread board, an Arduino(UNO), ESP8266 module, DHT22 Sensor and Level converter as shown in above."
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step2.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 2",
	"description" : "Take a jumper and place one end to UNO board power 5v point and another end is placed on breadboard +ve point."
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step3.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 3",
	"description" : "Take a another jumper and place on end to UNO board ground point and another end is placed breadboard -ve point."
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step4.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 4",
	"description" : "Take a jumper and place one end to UNO board power 3.3v point and another end is placed on breadboard +ve point."
} , {
	"img_src" : "/secure/lang/iot/images/chapter6/step5.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 5",
	"description" : "Take a Level shifter or level converter and connect the high voltage (HV) point in level shifter to 5v supply through breadboard."
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step6.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 6",
	"description" : "connect the GND points to GND of bread board."
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step7.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 7",
	"description" : "connect the low voltage (LV) point to 3.3 v supply."
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step8.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 8",
	"description" : "connect the GND point to GND point of bread board."
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step9.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 9",
	"description" : "Connect ESP8266 module Vcc to 3.3 v through breadboard."
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step10.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 10",
	"description" : "Connect ESP8266 module Gnd to Gnd through breadboard."
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step11.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 11",
	"description" : "Connect  HV1(TX) pin  on level shifter to UNO board 11th pin on digital side respectively."
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step12.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 12",
	"description" : "Connect  HV2(RX) on level shifter to UNO board 10th pin on digital side."
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step13.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 13",
	"description" : "Connect ESP8266 RX pin to LV1(TX) pin of level shifter."
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step14.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 14",
	"description" : "Connect ESP8266 TX pin to LV2(TX) pin of level shifter."
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step15.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 15",
	"description" : "Connect DHT22 module Vcc pin to 5V of bread board."
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step16.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 16",
	"description" : "Connect DHT22 module GND pin to gnd of bread board."
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step17.png",
	"alt" : "bread-board",
	"steps_desc" : "Step 17",
	"description" : "Connect DO or out to UNO board 5th pin in digital side."
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
	"img_src" : "/secure/lang/iot/images/chapter6/step1.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 1",
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step2.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 2",
},{
	"img_src" : "/secure/lang/iot/images/chapter6/step3.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 3",
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step4.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 4",
},{
	"img_src" : "/secure/lang/iot/images/chapter6/step5.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 5",
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step6.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 6",
},{
	"img_src" : "/secure/lang/iot/images/chapter6/step7.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 7",
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step8.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 8",
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step9.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 9",
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step10.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 10",
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step11.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 11",
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step12.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 12",
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step13.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 13",
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step14.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 14",
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step15.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step15",
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step16.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 16",
}, {
	"img_src" : "/secure/lang/iot/images/chapter6/step17.png",
	"alt" : "bread-board-bottom",
	"legend" : "Step 17",
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