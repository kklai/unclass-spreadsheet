// initialize tabletop library
function init() {
		Tabletop.init( { key: '0AlMgrVuuAI0MdGlGbUMzWDlnLTZEWXBHTG9mVHNTUXc',
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
	for (i=0; i < cats.length; i++) {
		$(".content").append( "<div class='item'><h1>" + cats[i].name + "</h1><img src='" + cats[i].image + "' width='400'><h2>" + cats[i].type + "</h2><p>" + cats[i].description + "</p><hr></div>");
	}
}

$(document).ready(function(){
	init();
})