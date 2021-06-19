$(".display-on-hover-box-container a.display-on-hover-box-items").on("mouseenter", function () {
    $(".tab-content-hover").hide();
    $(".display-on-hover-box-container a.display-on-hover-box-items").removeClass('ctive-clod-sr');
    $(this).addClass("ctive-clod-sr");
    var selected_tab = $(this).attr("href");
    $(selected_tab).stop().fadeIn();
    return false;
});
$(".display-on-hover-box-items").on({
    mouseenter: function () {
        $(this).addClass("active");
        $('.display-on-hover-box-items').addClass("itsnot");
    },

    mouseleave: function () {
        $('.display-on-hover-box-items').removeClass("itsnot");
        $(this).removeClass("active");
    }
});

