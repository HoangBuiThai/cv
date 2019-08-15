$(function() {

    /*var heightContent = $("#mynav").height();
    var widthWindown = $(windown).height;
    $(".content").css("height", heightContent.toString());*/
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
    })

    $('.icon').on('click', function(event) {
        event.preventDefault();
        if ($('#mynav').hasClass("responsive")) {
            $('#mynav').removeClass("responsive");
            $(".nav-link").each(function(index) {
                $(this).css("display", "none");
            })
            console.log($(this));
        } else {
            $('#mynav').addClass("responsive");
            $(".nav-link").each(function(index) {
                $(this).css({ "display": "flex", "margin-left": "20px" });
            })
        }
    })

})