// Random Gallery Open Window
var aquaGallery = function(){
	
	


	navWin.openWindow(randomWin);
	
};	



// Random Gallery Generate Random Image

var randomImage = function() {
			
			do { // Start Do While loop to validate duplicates
				
			var checkValue = randValue;				

            var randValue = Math.floor(Math.random() * myPhotos.length); 


        	} while (randValue == checkValue);
        	
        		
        		projectContainer.image = "/gallery/" + myPhotos[randValue];
        	

        	
		};





var tankCustom = function() {
	
		navWin.openWindow(tankWin);
	
};

aquaButton.addEventListener("click", aquaGallery);


tankButton.addEventListener("click", tankCustom);
		
randButton.addEventListener("click" , randomImage);