$(function() {
    var widthWindow = $(window).width();

    $('.nav-link').on('click', function(event) {
        event.preventDefault();

        $('.nav-link').each(function(index) {
            $(this).removeClass("selected-menu-item");
        })

        $(this).toggleClass("selected-menu-item");

        var id = $(this).attr('id').toString();

        $('.content-inner').each(function(index) {
            if ($(this).hasClass(id)) {
                $(this).css("display", "block");
            } else {
                $(this).css("display", "none");
            }

        })

        if (widthWindow < 480) {
            responsiveNav();
        }
    })

    $('.icon').on('click', function(event) {
        event.preventDefault();
        responsiveNav();
    })

})

function responsiveNav() {
    if ($('#mynav').hasClass("responsive")) {
        $('#mynav').removeClass("responsive");
        $(".nav-link").each(function(index) {
            $(this).css("display", "none");
        })
    } else {
        $('#mynav').addClass("responsive");
        $(".nav-link").each(function(index) {
            $(this).css({ "display": "flex", "margin-left": "20px" });
        })
    }
}