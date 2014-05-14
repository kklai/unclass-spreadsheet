/*
<div class="box"></div>
*/
// initialize tabletop library
function init() {
  Tabletop.init( { key: '0AlpBgow5YgoIdEdGcm9kSGR1MUpfUDE5S2JSZ3VlQnc',
                   callback: readData,
                   simpleSheet: true } )
}
// https://docs.google.com/spreadsheet/pub?key=0AlpBgow5YgoIdEdGcm9kSGR1MUpfUDE5S2JSZ3VlQnc&output=html
// read data
var gamez;
function readData (data, tabletop) { 
	console.log(data); 
	gamez = data;
	printData();
}
// print data on page
function printData() {
	for (var i = 0; i<gamez.length; i++) {
		$('.content').append('<div class="box"><p class="intro">' + gamez[i].consolename + '</p><img src="'+gamez[i].img+'"></img><p>Company: '+gamez[i].company+'<br /><br />Rating: <span class="rating">'+ gamez[i].rating + '</span></p></div>')
	}
}

$(document).ready(function(){

init();

})