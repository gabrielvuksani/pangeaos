  $("div.page-content").scroll(function() {    
         var scroll = $("div.page-content").scrollTop();
         if (scroll >= 44) {
         console.log('b')
         $( "div.area.title" ).text( "Library" );
               $( "div.navbar:first" ).removeClass( "no-hairline" );
              
         } else {
              console.log('a')
         $( "div.area.title" ).text( "" );
                  $( "div.navbar:first" ).addClass( "no-hairline" );
         
         }
         });

         //F7 Code
         var $$ = Dom7;
         var app = new Framework7({
         theme: 'ios',
         panel: {
          swipe: 'left',
         },
         on: {
          init: function() {
              console.log('CyrusHub Online');
         
          }
         },
         routes: [
          // Index page
          {
              path: '/',
              url: 'hub.html',
              name: 'home',
              on: {
                  pageInit: function() {
                      console.log('Initalize Index Page');
         
                      
         
                  }
              }
          }, {
              path: '/settings/',
              url: 'lite-settings.html',
              on: {
                  pageAfterIn: function() {
                      console.log('Settings');
                               function resetSystem() {
                                   localStorage.removeItem("userHasVisited");
                                   location.reload();
                                   localStorage.removeItem("savedSkin");
                                   localStorage.removeItem("allSkins");
                                   location.reload();
         } 
         
                  }
              }
          }, {
              path: '/other/',
              url: 'other2.php',
              on: {
                  pageInit: function() {
                      console.log('Other');
                      var searchbar = app.searchbar.create({
                          el: '.searchbar',
                          searchContainer: '.list',
                          searchIn: '.item-title',
                          on: {
                              search(sb, query, previousQuery) {
                                  console.log(query, previousQuery);
                              }
                          }
                      });
         
                  }
              }
          },{
              path: '/tweaked/',
              url: 'tweaked2.php',
              on: {
                  pageInit: function() {
                      console.log('Tweaked');
                      var searchbar = app.searchbar.create({
                          el: '.searchbar',
                          searchContainer: '.list',
                          searchIn: '.item-title',
                          on: {
                              search(sb, query, previousQuery) {
                                  console.log(query, previousQuery);
                              }
                          }
                      });
         
                  }
              }
          }, {
              path: '/entertainment/',
              url: 'entertainment2.php',
              on: {
                  pageInit: function() {
                      console.log('Entertainment');
                      var searchbar = app.searchbar.create({
                          el: '.searchbar',
                          searchContainer: '.list',
                          searchIn: '.item-title',
                          on: {
                              search(sb, query, previousQuery) {
                                  console.log(query, previousQuery);
                              }
                          }
                      });
         
                  }
              }
          }, {
              path: '/social/',
              url: 'social2.php',
              on: {
                  pageInit: function() {
                      console.log('Social');
                      var searchbar = app.searchbar.create({
                          el: '.searchbar',
                          searchContainer: '.list',
                          searchIn: '.item-title',
                          on: {
                              search(sb, query, previousQuery) {
                                  console.log(query, previousQuery);
                              }
                          }
                      });
         
                  }
              }
          }, {
              path: '/social-page2/',
              url: 'social-page2.php',
          },{
              path: '/tweaked-page2/',
              url: 'tweaked-page2.php',
          }, {
              path: '/other-page2/',
              url: 'other-page2.php',
          },{
              path: '/emulator-page2/',
              url: 'emulator-page2.php',
          }, {
              path: '/entertainment-page2/',
              url: 'entertainment-page2.php',
          },  {
              path: '/emulators/',
              url: 'emulators2.php',
              on: {
                  pageInit: function() {
                      console.log('Emulators');
                      var searchbar = app.searchbar.create({
                          el: '.searchbar',
                          searchContainer: '.list',
                          searchIn: '.item-title',
                          on: {
                              search(sb, query, previousQuery) {
                                  console.log(query, previousQuery);
                              }
                          }
                      });
         
                  }
              }
          },
          {
              path: '/eclipse/',
              url: 'eclipse.html',
         
              on: {
                  pageInit: function() {
                      console.log('Eclipse Initialized');
                      //Copy Repo
                      function copyRepo() {
                          console.log('Repo Copied!');
                          var txt;
                          var repoUrl = prompt("Copy and Paste the URL into Eclipse.", "https://cyrushub.app/repo.json");
                      }
         
         
                  }
              }
          },
          {
              path: '/aurora/',
              url: 'aurora.html',
          },   
             {
              path: '/themes/',
              url: 'themes.php',
          },     {
              path: '/theme-page2/',
              url: 'theme-page2.php',
          },
          {
              path: '/gameplay/',
              url: 'gameplay.html',
          },          {
              path: '/terms/',
              url: 'terms.html',
          },
         
         ],
         });
         var mainView = app.views.create('.view-main', {
         iosDynamicNavbar: false,
         });
         
         var searchbar = app.searchbar.create({
         el: '.searchbar',
         searchContainer: '.list',
         searchIn: '.item-title',
         on: {
          search(sb, query, previousQuery) {
              console.log(query, previousQuery);
          }
         }
         });
                 
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
         
          
         var swiper = new Swiper('.swiper-container', {
         spaceBetween: 10,
         slidesPerView: 'auto',
         });