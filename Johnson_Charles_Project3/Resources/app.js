var myFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "pics");
var myPhotos = myFolder.getDirectoryListing();

var winWidth = Ti.Platform.displayCaps.platformWidth;
var winHeight = Ti.Platform.displayCaps.platformHeight;
var rowCount = 4;
var margin = 10;
var size = 75;





// Create Gallery Section

var galleryWin = Ti.UI.createWindow({
	
	backgroundColor: "#3A00FF",
	backgroundImage: "background.png",
	layout: "horizontal"
		
});

var border = Ti.UI.createView({
	
	backgroundColor: "#000",
	color: "FFF",
	width: winWidth,
	height: 1,
	top: 20
	
});

var projectContainer = Ti.UI.createScrollView({
	
	top:0,
	width: winWidth,
	height: winWidth-border.top-border.height,
	backgroundColor: "#3A00FF",
	layout: "horizontal",
	showVerticalScrollIndicator: true
	
});




	for (var x=0; x<myPhotos.length; x++){
	
	var view = Ti.UI.createView({
		
		backgroundColor: "#FFF",
		top: 10,
		left: 10,
		width: size,
		height: size
		
	});
	
	var thumb = Ti.UI.createImageView({
		
		image: "pics/" + myPhotos[x]
	});
	view.add(thumb);
	projectContainer.add(view);
	
	
};
	
	galleryWin.add(border);
	galleryWin.add(projectContainer);

	galleryWin.open();
	