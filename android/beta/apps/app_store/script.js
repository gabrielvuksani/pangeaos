
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


window.onload = (function() {

    $.getJSON('https://api.myjson.com/bins/jfel8', function(data){
        console.log(data)
        // console.log(shuffle(data))
        shuffle(data.files)
        // console.log(data.files);
        // console.log(data.files[1])
        $(".icon1").css("background-image","url(https://ipas.fun/images/"+data.files[0].file+")")
        $(".icon2").css("background-image","url(https://ipas.fun/images/"+data.files[1].file+")")
        $(".icon3").css("background-image","url(https://ipas.fun/images/"+data.files[2].file+")")
        $(".icon4").css("background-image","url(https://ipas.fun/images/"+data.files[3].file+")")
        $(".icon5").css("background-image","url(https://ipas.fun/images/"+data.files[4].file+")")



    })

    var screen = $(window) 
    var iphoneheight = $('.iphone').height()
    if (screen.width() <= 400){
        $('.iphone').css({"margin-bottom": -(iphoneheight/2) })
        $('.features').css({"margin-top": (iphoneheight/2) })
    }
});

$(window).resize(function() {
    var screen = $(window) 
    var iphoneheight = $('.iphone').height()
    if (screen.width() <= 400){
        $('.iphone').css({"margin-bottom": -(iphoneheight/2) })
        $('.features').css({"margin-top": (iphoneheight/2) })
    }
});



$(window).scroll(function() {

    if ($('#buttoncheck').visible(true)) {
        $('#floating_circlebutton').css({transform: "rotate(0deg)"})
        $('#floatingdiv').css({transform: "translateY(60px)", opacity: "0"})
    } else {
        $('#floating_circlebutton').css({transform: "rotate(180deg)"})
        $('#floatingdiv').css({transform: "translateY(0px)", opacity: "1"})
    }
});



