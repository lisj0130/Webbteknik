$(document).ready(function () {
	/*------------- DROP-DOWN MENU----------*/
	var dropDownMenu = $("#drop-down-menu");
	var li = $(".menu li");
	var nav = $(".computer-nav");
	dropDownMenu.hide();
    
	li.click(function () {
	    var currentLi = $(this);
	    dropDownMenu.stop(true, true).slideToggle("slow");
	    currentLi.toggleClass("active");
	    nav.css("border-bottom", dropDownMenu.is(":hidden") ? "" : "none");
	});


	/*------------ Hamburger-meny ------------*/
	var hamburger = $("#hamburger");
    	var hamburgerMenu = $(".hamburger-menu");
    	var closeBtn = $("#close");

	hamburger.click(function () {
		hamburgerMenu.animate({ marginLeft: "100%", borderColor: "#000"}, "slow");
	});

	closeBtn.click(function () {
		hamburgerMenu.animate({ marginLeft: "0", borderColor: ""}, "slow");
	});
    });
    

/*-------------------------------------------------------*/


//gör om dessa till this element
function changeAppearance() {
	var link = document.querySelector('#li1 h6');
	link.style.color = '#FFF';
}


function highlightInput(isFocused) {
	var input = document.getElementById('onfocus-onblur');
	if (isFocused) {
	  input.style.borderColor = '#313130';
	} else {
	  input.style.borderColor = '';
	}
}

function clearInput() {
    var input = document.getElementById('onfocus-onblur');
    input.value = ''; // Set the input value to an empty string
    
}


$(document).ready(function() {
	$("#show-message").click(function() {
		alert("Hello, JavaScript!");
	});
});


$(document).ready(function (){
	$("#move").draggable({
        containment: "#area",
        cursor: "move",
    	});
});


$(document).ready(function () {
	var canvas = document.getElementById("canva");
	var ctx = canvas.getContext("2d");
	var currentRotation = 0;

	function drawRectangle(x, y, width, height, rotation) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save(); 
		ctx.translate(x + width / 2, y + height / 2);
		ctx.rotate((rotation * Math.PI) / 180);
		ctx.fillStyle = "pink";
		ctx.fillRect(-width / 2, -height / 2, width, height);
		ctx.restore(); // Restore the saved state
	}
	
	drawRectangle(150, 150, 100, 50, currentRotation); // x, y, width, height, rotation

	$("#rotateButton").click(function () {
		currentRotation += 90;
		drawRectangle(150, 150, 100, 50, currentRotation);
	});

});
    