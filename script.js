// https://docs.google.com/spreadsheet/pub?key=0AkfxGvkTmg6adF9fN0pRVkNsSEpIeHljLWJuekpEVFE&output=html

// http://media-cache-ec0.pinimg.com/736x/0f/f4/d7/0ff4d7727a703388392727509cdfaba9.jpg

// initialize tabletop library

function init() {
  Tabletop.init( { key: '0AkfxGvkTmg6adF9fN0pRVkNsSEpIeHljLWJuekpEVFE',
                   callback: readData,
                   simpleSheet: true } )
}

// read data

function readData(data, tabletop) {
	console.log(data)
	cats = data;
	printData();
}

// print data on page

function printData() {
	for (var i = 0; i < cats.length; i++) {
	$(".content").append("<h1>" + cats[i].name + "<h1><img src='" + cats[i].image + "' width='400' ><p>" + cats[i].description + "</p><hr>");
	}
}

$(document).ready(function(){
	init();
})