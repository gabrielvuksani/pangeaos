var Cydia = new Framework7({
	modalTitle: 'Cydia'
});
 
var $$ = Dom7;

var mainView = Cydia.addView('#home', {
	dynamicNavbar: true
});
var SourcesView = Cydia.addView('#sources', {
	dynamicNavbar: true
});
var ChangesView = Cydia.addView('#changes', {
	dynamicNavbar: true
});
var InstalledView = Cydia.addView('#installed', {
	dynamicNavbar: true
});
var SearchView = Cydia.addView('#search', {
	dynamicNavbar: true
});

function CydiaAbout() {
	Cydia.alert('Copyright &copy; 2008-2015<br>SaurikIT, LLC<br><br>Jay Freeman (Saurik)<br>saurik@saurik.com<br>http://www.saurik.com', 'About Cydia Installer');
}