$(document).ready(function () {
    // $(window).scroll(function() {
    //     if ($(window).scrollTop() > 300) {
    //         $('.buttonToTop').addClass('show');
    //     } else {
    //         $('.buttonToTop').removeClass('show');
    //     }
    // });
    
    $('.buttonToTop').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    $('.up-button').click(function() {
	  
        $(".menu").slideToggle();
        $("body").toggleClass('menu-open');
      
    });

    $(".menu-nav").click(function(e) {
        e.preventDefault();
        var thisType = $(this).data("type");
        $('html, body').animate({
            scrollTop: $(`#${thisType}`).offset().top
        }, 2000);
    });
});


// // Countdown Timer
(function() {

    var deadline = '2023/05/09 5:00 GMT';

    function pad(num, size) {
        var s = "0" + num;
        return s.substr(s.length - size);
    }

    // fixes "Date.parse(date)" on safari
    function parseDate(date) {
        const parsed = Date.parse(date);
        if (!isNaN(parsed))
            return parsed
        return Date.parse(date.replace(/-/g, '/').replace(/[a-z]+/gi, ' '));
    }

    function getTimeRemaining(endtime) {
        let total = parseDate(endtime) - Date.parse(new Date())
        let seconds = Math.floor((total / 1000) % 60)
        let minutes = Math.floor((total / 1000 / 60) % 60)
        let hours = Math.floor((total / (1000 * 60 * 60)) % 24)
        let days = Math.floor(total / (1000 * 60 * 60 * 24))

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function clock(id, endtime) {
        let days = document.getElementById(id + '-days')
        let hours = document.getElementById(id + '-hours')
        let minutes = document.getElementById(id + '-minutes')
        let seconds = document.getElementById(id + '-seconds')

        var timeinterval = setInterval(function() {
            var time = getTimeRemaining(endtime);

            if (time.total <= 0) {
                clearInterval(timeinterval);
            } else {
                days.innerHTML = pad(time.days, 2);
                hours.innerHTML = pad(time.hours, 2);
                minutes.innerHTML = pad(time.minutes, 2);
                seconds.innerHTML = pad(time.seconds, 2);
            }
        }, 1000);
    }

    clock('js-timer', deadline);
}
)();

// $(".read-more-btn").click(function() {
//     let thisParent = $(this).attr("data-type");

//     if($(`.${thisParent} .read-more`).hasClass("hide")) {
//         $(`.${thisParent} .read-more`).fadeIn("fast");
//         $(`.${thisParent} .read-more`).toggleClass("hide");
//         $(this).html("Read Less");
//     } else {
//         $(`.${thisParent} .read-more`).fadeOut("fast");
//         $(`.${thisParent} .read-more`).toggleClass("hide");
//         $(this).html("Read More");
//     }
// })