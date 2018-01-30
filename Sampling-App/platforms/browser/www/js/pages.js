// Initialize app
var myApp = new Framework7();
var $$ = Dom7;
var view = myApp.addView('.view-main', {dynamicNavbar: true});

//Create modules

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
	//App started
    view.hideNavbar(false);
});

// Handle page events
myApp.onPageInit('menu', function (page) {
	view.showNavbar(false);
});

myApp.onPageInit('survey', function (page) {
	var date = new Date();
	
	survey.startdate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	survey.retrieveQuestions();
});