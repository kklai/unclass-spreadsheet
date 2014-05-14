// https://docs.google.com/spreadsheet/pub?key=0AucRwrqDf13VdFVIY3V4MV9vZVFyRFVMOTdwQUVVUVE&output=html

// initialize tabletop library
function init() {
  Tabletop.init( { key: '0AucRwrqDf13VdFVIY3V4MV9vZVFyRFVMOTdwQUVVUVE',
                   callback: readData,
                   simpleSheet: true } )
}


// read data
var cats;
function readData(data, tabletop) {
	console.log(data)
	cats = data;
	printData();
}

// print data on page
function printData() {
	for (var i = 0; i< cats.length; i++) {
	$('.content').append('<h1>' + cats[i].name + "<h1><img src='" + cats[i].image + "' width='400' ><p>" + cats[i].description + "</p><hr>");
	}
}

$(document).ready(function(){
	init();


})