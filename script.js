// initialize tabletop library
function init() {
  Tabletop.init( { key: '0Aj0kEadFRmL4dHV4dVMydDAzNktVZkxXQ18wc3MxZ1E',
                   callback: readData, simpleSheet: true } )
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
	for (var i = 0; i < cats.length; i++) {
	$(".content").append("<h1>" + cats[i].name + "</h1><img src='" + cats[i].image + "'></a></img><p>" + cats[i].description + "</p><hr>")
	};
}

$(document).ready(function(){
	init();
})


// https://docs.google.com/spreadsheet/pub?key=0Aj0kEadFRmL4dHV4dVMydDAzNktVZkxXQ18wc3MxZ1E&output=html