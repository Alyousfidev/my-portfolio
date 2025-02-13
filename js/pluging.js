$(document).ready(function() {
    if (localStorage.getItem("arabic") === "enabled") {
        enableArabic();
    } else {
        enableEnglish();
    }

    $(".lang").on("click", function() {
        $(".arab-engl").toggleClass("open");
        if (localStorage.getItem("arabic") === "enabled") {
            enableEnglish();
        } else {
            enableArabic();
        }
    });

    function enableArabic() {
        $(".lang-logo").text("A");
        $(".arab").addClass("open");
        $(".engl").removeClass("open");
        $(".my-Services.arab").addClass("open");
        $(".my-Services.engl").removeClass("open");
        $(".update-Time").removeClass("open");
        $(".update-Time-arab").addClass("open");

        $("body").css({
            "direction": "rtl"
        });

        $(".experiences").addClass("arab"); // إصلاح تحديد العناصر
        localStorage.setItem("arabic", "enabled");
    }

    function enableEnglish() {
        $(".engl").addClass("open");
        $(".arab").removeClass("open");
        $(".my-Services.arab").removeClass("open");
        $(".my-Services.engl").addClass("open");
        $(".lang-logo").text("E");
        $(".update-Time").addClass("open");
        $(".update-Time-arab").removeClass("open");

        $("body").css("direction", "ltr");

        localStorage.removeItem("arabic"); // إزالة المفتاح فقط
    }
});

let scrollcontainer = document.querySelector(".gallary")
let backBtn = document.querySelector(".backBtn")
let nextBtn = document.querySelector(".nextBtn")

scrollcontainer.addEventListener("wheel", function(e){
    e.preventDefault
    scrollcontainer.scrollLeft += e.deltaY
    scrollcontainer.style.scrollBehavior = "auto"
})

backBtn.addEventListener("click", function(){
    scrollcontainer.scrollLeft -= 600
    scrollcontainer.style.scrollBehavior ="smooth"
})
nextBtn.addEventListener("click", function(){
    scrollcontainer.scrollLeft += 600
    scrollcontainer.style.scrollBehavior ="smooth"
})


// time update
//  let updateTime = document.querySelector(".time-container")
 let timeContainer = document.querySelector(".time-container")

 function updateTime(){
    let now = new Date()

 let hour = now.getHours()
 let minute = now.getMinutes()
 let second = now.getSeconds()

 hour = hour < 10? "0"+ hour : hour;
  minute = minute < 10? "0"+ minute : minute;
 second = second < 10? "0"+ second : second;
 let AmPm = hour >= 12 ? "PM":"AM";
 timeContainer.innerHTML = `${hour} : ${minute} : ${second} ${AmPm}`
 }
    
setInterval(updateTime, 1000);
updateTime()

let timeContainerArab = document.querySelector(".time-container-arab")

 function updateTimeArab(){
    let now = new Date()

 let hour = now.getHours()
 let minute = now.getMinutes()
 let second = now.getSeconds()

 hour = hour < 10? "0"+ hour : hour;
  minute = minute < 10? "0"+ minute : minute;
 second = second < 10? "0"+ second : second;
 let AmPm = hour >= 12 ? "PM":"AM";
 timeContainerArab.innerHTML = `${hour} : ${minute} : ${second} ${AmPm}`
 }
    
setInterval(updateTimeArab, 1000);
updateTime()


function switchLanguage(lang) {
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.getElementById('search-box').setAttribute('placeholder', 'بحث');
        document.querySelectorAll('.engl').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.arab').forEach(el => el.style.display = 'inline');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.getElementById('search-box').setAttribute('placeholder', 'Search');
        document.querySelectorAll('.engl').forEach(el => el.style.display = 'inline');
        document.querySelectorAll('.arab').forEach(el => el.style.display = 'none');
    }
}
