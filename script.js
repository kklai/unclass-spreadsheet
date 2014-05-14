// initialize tabletop library

// read data

// print data on page

function init() {
  Tabletop.init( { key: '0AiG-VSZ2zFJ-dHlMdUJFVlVsNTl6QXZYMFlvVEdzaVE',
                   callback: readData,
                   simpleSheet: true } )
}


//read info
var Joe;

function readData(data, tabletop) { 
	console.log(data) 
	Joe = data;
	printData();
}

function printData() {

	for (var i=0; i<6; i++) {
	$('.content').append("<h1>" + Joe[i].description + "</h1> <img src = '" + Joe[i].image + "'width='500' ><p>" + Joe[i].name + "</p><hr>");
}
}

  // function showInfo(data, tabletop) {
  //   alert("Successfully processed!")
  //   console.log(data);
  // }


$(document).ready(function(){

init();


})