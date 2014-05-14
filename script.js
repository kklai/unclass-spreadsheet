// initialize tabletop library

// read data

// print data on page



function init() {
  Tabletop.init( { key: '0Auf85NGjrXTwdHpfSzhVeG9HX2NBaUNpNkMzZU9iWUE',
                   callback: readData,
                   simpleSheet: true } )
}

var cats;
function readData(data, tabletop) {
 console.log(data)
 cats=data;
 printData();
}


function printData() {
	for (var i=0; i<cats.length; i++) {
	$(".content").append("<h1>" + cats[i].name + "</h1> <img src= '" + cats[i].image + "'width='200' ><p>" + cats[i].description + "</p><hr>");
	}
}

$(document).ready(function(){
	init();

})
