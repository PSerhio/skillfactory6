let level = 0;

function init() { 
	level = 0;
	$("#my-progress-bar").width(level + '%').text(level + '%');
}

function increment_progressbar(v){
	level = level + v
	if (level > 100) 
			{level = 100};
		
	$("#my-progress-bar").width(level + '%').text(level + '%');
}	

$("#btn1").click(function() {increment_progressbar(1)});

$("#btn2").click(function() {increment_progressbar(3)});

$("#btn3").click(function() {increment_progressbar(7)});

$("#btn4").click(init);

$(document).ready(init);