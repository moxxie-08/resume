$(document).ready(function() {
    $(".one").click(function() {
        let sectionId = $(this).attr("id") + "-info";
        let info = $("#" + sectionId);
        
        if (info.is(":visible")) {
            info.animate({opacity: 0}, 300, function() {
                info.slideUp(300);
            });
        } else {
            info.slideDown(300, function() {
                info.animate({opacity: 1}, 300);
            });
        }
    });
});
