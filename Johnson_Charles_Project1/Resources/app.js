Ti.UI.setBackgroundColor('#040985');

var heroWindow = Ti.UI.createWindow({
	
	backgroundColor: "#040985",
	backgroundImage: "background.jpg"
	
});

var favHeros = Ti.UI.createView({

	backgroundColor: "#000",
	top: 40,
	bottom: 100,
	left: 20,
	right: 20,
	borderRadius: 10
});

var txtHero = Ti.UI.createLabel({
	
	text: "Favorite Heroes",
	font: {fontSize: 40, fontFaimily: "Arial Black", fontWeight: "bold"},
	color: "#FFF",
	top: "45ß%"
	
});

var switchHero = function({
	
	
});

heroWindow.add(favHeros);
heroWindow.add(txtHero)
heroWindow.open();



