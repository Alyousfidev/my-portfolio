$(document).ready(function(){
  $(window).on("scroll",function(){
    var sc = $(window).scrollTop()
    if (sc > 400) {
        $(".scroll-icon").fadeIn()
    } else {
        $(".scroll-icon").fadeOut()
    }
    $(".scroll-icon").on("click",function(){
        window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
            
    })
    })
   
  })
  $(".lang-logo").on("click",function(){
    $(".arab-engl").toggleClass("open")

  })

  //Dark mode start------------------------------------
  if (localStorage.getItem("darkMode") ==="enabled") {
    enableDarkMode()
}

$(".dark-mode").on("click",function(){
    if (localStorage.getItem("darkMode") === "enabled") {
       
        disableDarkMode()
    }else{
        enableDarkMode()
    }
})

});
function enableDarkMode(){
$("body").addClass("dark-theme");
$(".moon").addClass("open");


$(".sun").addClass("close");
$(".left-content, .right-content, .cv-conatiner, .box, .info, .contact-content, .right-contact, .logo, .arabic, .english, span, after")
    .addClass("white-mode");
localStorage.setItem("darkMode", "enabled")
}

function disableDarkMode(){
$("body").removeClass("dark-theme");
$(".moon").removeClass("open");
$(".sun").removeClass("close");

$(".left-content, .right-content, .cv-conatiner, .box, .info, .contact-content, .right-contact, .logo, .arabic, .english, span, after")
    .removeClass("white-mode");
    localStorage.setItem("darkMode","disabled")

}



// dark mode end


var d= new Date()
var year= d.getFullYear()

$(".year").text(year)
$(".contact-media").on("click",function(){
    $(".cont-media").fadeIn(2000).delay(4000).fadeOut(2000)
})
$("#arabic").on("click",function(){
    $("body").addClass("arabic")
})
$("#english").on("click",function(){
    $("body").removeClass()
})


;

// $(".dark-mode").on("click",function(){
//   $("body").toggleClass("dark-theme ")
//   $(".moon").toggleClass("open")
//   $(".sun").toggleClass("close")
//   $(".left-content").toggleClass("white-mode")
//   $(".right-content").toggleClass("white-mode")
//   $(".cv-conatiner").toggleClass("white-mode")
//   $(".box").toggleClass("white-mode")
//   $("after").toggleClass("white-mode")
//   $("span").toggleClass("white-mode")
//   $(".info").toggleClass("white-mode")
//   $(".contact-content").toggleClass("white-mode")
//   $(".right-contact").toggleClass("white-mode")
//   $(".logo").toggleClass("white-mode")
//   $(".arabic").toggleClass("white-mode")
//   $(".english").toggleClass("white-mode")

// })

