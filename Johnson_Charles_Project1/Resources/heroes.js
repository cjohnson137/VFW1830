var hero = ["The Flash","Deadpool","Superman","Goku","Silver Surfer","Natusu","The Hulk"];
var x = -1;


var nextHero = function(){
	
	x++;
	if (x >6){
		
		x = 0;
	}
	
	txtHero.text = hero[x];
	
	
	
	
};

var prevHero = function(){
	
	x--;
	
	
	if (x < 0){
		
		x = 6;
	}
	txtHero.text = hero[x];
	
	
};


nextButton.addEventListener("click",nextHero);
prevButton.addEventListener("click",prevHero);