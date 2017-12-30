var introjs;
var typingInterval = 1;

var StlContainers = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});

	introJsFunction();
}
function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
			introjs._introItems[introjs._currentStep].tooltipClass = "";
			introjs._introItems[introjs._currentStep].isCompleted = "true";
		}
	});
}

function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#animationDiv",
			intro : "",
			tooltipClass : "hide",
			isCompleted : "false"
		},{
			element : "#bitset",
			intro : "",
			isCompleted : "false"
		},{
			element : "#dequeBox",
			intro : "",
			isCompleted : "false"
		},{
			element : "#listBox",
			intro : "",
			isCompleted : "false"
		},{
			element : "#mapBox",
			intro : "",
			isCompleted : "false"
		},{
			element : "#multiBox",
			intro : "",
			isCompleted : "false"
		},{
			element : "#multisetBox",
			intro : "",
			isCompleted : "false"
		}, {
			element :"#prorityBox",
			intro :"",
			isCompleted : "false"
		},{
			element :"#queeBox",
			intro :"",
			isCompleted :"false"
		},{
			
			element :"#setBox",
			intro :"",
			isCompleted :"false"
		},{
			element :"#stackBox",
			intro :"",
			isCompleted :"false"
		},{
			element :"#vectorBox",
			intro :"",
			isCompleted :"false"
		},{
			element :"#restartBtn",
		    intro :"Click to Restart",
		    position : "right"
		}]
	});

	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "animationDiv":
			if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
				$('#textDiv').css({height: $('#textDiv').outerHeight()});
				var typingContent = $('#textDiv').html();
				typing('#textDiv', typingContent, typingInterval, '#200', function() {
					$('#continerbox').fadeTo(1300, 1, function() {
						TweenMax.to($('.svg-line1'), 1, {attr: {y2: '48.5%'}, onComplete: function() {
							TweenMax.to($('.svg-line2').eq(0), 1, {attr: {x2: '5%'}});
							TweenMax.to($('.svg-line2').eq(1), 1, {attr: {x2: '95%'}, onComplete: function() {
								$('.svg-arrow-line').show();
								TweenMax.to($('.svg-arrow-line'), 1, {attr: {y2: '72%'}, onComplete: function() {
									$('.storage-class').fadeTo(1300, 1, function() {
										$('.introjs-tooltip').removeClass('hide');
										var typingContent = '<span class="ct-code-b-yellow">The Container-class</span> stores a collection of data.' +
										' STL contains 3 categories of containers:' +
										'<ul><li><span class="ct-code-b-yellow"> Sequence containers :</span>' +
										' maintain the ordering of inserted elements that user specify' +
										' like array.</li>' +
										'<li><span class="ct-code-b-yellow">Adapter containers:</span> are not full container classes, but ' +
										' classes that provide a specific interface relying on an object of one of the container classes (such as deque or list) to handle the elements..</li>' +
										'<li><span class="ct-code-b-yellow">Associative containers:</span> In associative containers, ' +
										'elements are inserted in a pre-defined order like sorted ascending default.</li>' +
										'</ul>';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
									});
								}});
							}});
						}});
					});
				});
				
			} else {
				$('.introjs-nextbutton').show();
			}
			break;
		case 'bitset' :
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = '<ul><li>The<span class="ct-code-b-yellow"> bitset</span> stores bits (elements with only two possible values: <span class="ct-code-b-yellow">0 or 1, true or false ,..</span>).</li>' +
										' <li>Its template specification is : <br> template <span class="ct-code-b-yellow"> <g>&lt</g>size_tN<g>&gt</g> </span> class bitset.</li></ul>'
										'</ul>';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case 'dequeBox':
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = '<ul><li>deque sequence containers with dynamic sizes that can be expanded or contracted on both ends (either its front or its back).' +
										' <li>Its template specification is : <br><span class="ct-code-b-yellow"> <g>&lt</g> class T,class Allocator = allocator<g>&lt</g>T<g>&gt &gt</g> </span> class deque.</li></ui>'
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			
			break;
		case 'listBox':
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = '<ul><li>The sequence containers that allow non-contiguous memory allocation.</li>'+
						'<li>Its template specification is :<br><y> <g>&lt</g>class T,class Allocator = allocator<g>&lt</g>T<g>&gt &gt</g></y>class list.</li></ul>'
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			
			break;
		case 'mapBox':
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = '<ul><li>The map class supports an associative container in which unique keys are mapped with values.</li>'+
						'<li>Its template specification is :<br> <y> <g>&lt</g>class Key,class T, class Comp = less<g>&lt</g>Key<g>&gt</g>, <br> <y> class Allocator = allocator<g>&lt</g>pair <g>&lt</g>const Key, T <g>&gt&gt&gt</g></y> class map</li></ul>'
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
		break;
		case 'multiBox':
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = '<ul><li>The multimap class supports an associative container in which possibly nonunique keys are mapped with values.</li>'+
						'<li>Its template specification is :<br><y> <g>&lt</g>class Key,class T, class Comp = less<g>&lt</g>Key<g>&gt</g>, <br> <y> class Allocator = allocator<g>&lt</g>pair <g>&lt</g>const Key, T <g>&gt&gt&gt</g> </y>class multimap</li></ul>'
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case 'multisetBox':
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = '<ul><li>The multiset class supports <y>a set</y> containing possibly nonunique keys.</li>'+
						'<li>Its template specification is :<br><y> <g>&lt</g>class Key, class Comp = less<g>&lt</g>Key<g>&gt</g>, class Allocator = allocator <g>&lt</g>Key<g>&gt &gt</g> class multiset </li></ul>'
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case 'prorityBox':
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = '<ul><li>prority class supports a single-ended<y> priority queue</y>.</li>'+
						'<li>Its template specification is :<br> <y> <g>&lt</g>class T, class Container = vector<g>&lt</g>T<g>&gt</g>,<br> class Comp = less  <g>&lt</g>Container::value_type<g>&gt &gt</g> class priority_queue </li></ul>'
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case 'queeBox':
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = '<ul><li>quee class supports a single-ended <y>queue</y>.</li>'+
						'<li>Its template specification is :<br> <y> <g>&lt</g>class T, class Container = deque<g>&lt</g>T<g>&gt &gt</g>class queue </li></ul>'
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case 'setBox':
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = '<ul><li>The set class supports a set containing <y>unique keys</y>.</li>'+
						'<li>Its template specification is :<br> <y> <g>&lt</g>class Key, class Comp = less<g>&lt</g>Key<g>&gt</g>, <br> class Allocator = allocator <g>&lt</g>Key<g>&gt &gt</g> class multiset </li></ul>'
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case 'stackBox':
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = '<ul><li>this type of container work with LIFO(Last In First Out)</li>'+'<li> where a new element is added at one end and (top) an element is removed from that end only.</li>'+
						'<li>Its template specification is :<br> <y> <g>&lt</g>class T, class Container = deque<g>&lt</g>T<g>&gt</g>,class stack </li></ul>'
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case 'vectorBox':
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = '<ul><li> This type of  class supports a <y>dynamic array</y>.</li>'+
						'<li>Its template specification is :<br> <y> <g>&lt</g>class T, class Allocator = allocator<g>&lt</g>T<g>&gt</g> <g>&gt</g> class vector </li></ul>'
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case "restartBtn":  
			$('.introjs-tooltip').css({'min-width' : '120px'});
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
			break;
		}
	});
	introjs.start();
}
		