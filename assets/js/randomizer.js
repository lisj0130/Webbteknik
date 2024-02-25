$(document).ready(function() {
	var products = [
		{ imageSrc: 'assets/images/nyheter-3.jpg', description: 'original - skor' },
		{ imageSrc: 'assets/images/SMYCKEN.jpg', description: 'smycken' },
		{ imageSrc: '/assets/images/VÄSKOR.jpg', description: 'väskor' }
	];

	function changeImage() {
		var random_number = Math.floor(Math.random() * 3);
		var product = products[random_number];
		document.getElementById('change-header').style.backgroundImage = 'url(' + product.imageSrc + ')';
	}

	setInterval(changeImage, 10000);		
})


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


/*-----------------------------------------*/
$(document).ready(function() {
	var carousel = $(".carousel-con");
	var totalItems = $(".carousel-item").length;
	var currentIndex = 0;
    
	function updateCarousel() {
	    var itemsPerPage = getItemsPerPage();
	    var translateValue = -currentIndex * (100 / itemsPerPage) + "%";
	    carousel.css("transform", "translateX(" + translateValue + ")");
	}
    
	function getItemsPerPage() {
	    // Ange antalet bilder per sida baserat på skärmstorlek
	    if (window.innerWidth <= 828) {
		return 3; // För mobilen, visa 3 bilder
	    } else {
		return 4; // För datorn, visa 4 bilder
	    }
	}
    
	$(".next-btn").click(function() {
		var button = this;
		if (currentIndex < totalItems - getItemsPerPage()) {
			currentIndex += 1;
			button.style.backgroundColor = '#FFE4DA';
			setTimeout(function() {
				button.style.backgroundColor = ''; // Återställ till originalfärgen
			}, 200);
			updateCarousel();
		}
	});
    
	$(".prev-btn").click(function() {
		var button = this;
		if (currentIndex > 0) {
			currentIndex -= 1;
			button.style.backgroundColor = '#FFE4DA';
			setTimeout(function() {
				button.style.backgroundColor = ''; // Återställ till originalfärgen
			}, 200);
			updateCarousel();
		}
	});
    
	// Uppdatera carousels när fönstret ändrar storlek
	$(window).resize(function() {
	    updateCarousel();
	});
    
	// Initial uppdatering när sidan laddas
	updateCarousel();
});