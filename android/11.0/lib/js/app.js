// Initialize app
var myApp = new Framework7();
 
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
 
// Add views
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});