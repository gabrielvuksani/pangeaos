// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true
});

// Export selectors engine
var $$ = Dom7;

// Add main View

	

// var myApp = new Framework7(); 

 $(document).ready(function(){
 	$('.my').hide();
 });

	$('#serachme').keyup(function() {
    if($(this).val() == ''){
    	
    	$('.my').hide();
    }else{
    	
    	$('.my').show();
    }
}); 


/*  var mySearchbar = app.searchbar('.searchbar', {
          searchList: '.list-block',
          searchIn: '.item-inner'
      });   */



// var inputbox = document.getElementById('serachme')
// {
// 	inputbox.onkeyup = function () {
// 		document.getElementById('my') = show;
// 	}
// }

var mySearchbar = $$('.searchbar')[0].f7Searchbar;
 
// Now you can use it
mySearchbar.search();
searchList: '.list-block';
searchIn: '.item-inner';

function resetSystem() {
                                   localStorage.removeItem("userHasVisited");
                                   location.reload();
                                   localStorage.removeItem("savedSkin");
                                   localStorage.removeItem("allSkins");
                                   location.reload();
         } 

$$('.popup-welcome').on('popup:open', function(e, popup) {
         console.log('welcome popup open');
         });
         
         window.addEventListener("load", checkIfNewUser());
         
         function checkIfNewUser() {
         if (localStorage.getItem("userHasVisited") === null) {
         app.popup.open(".popup-welcome");
         console.log("localStorage element 'userHasVisited' is: " + localStorage.getItem("userHasVisited"));
         localStorage.setItem("userHasVisited", true);
         }
         if (localStorage.getItem("userHasVisited") === "true") {
         console.log("localStorage element 'userHasVisited' registered as'true'. It's value is: " + localStorage.getItem("userHasVisited"));
         }
         }