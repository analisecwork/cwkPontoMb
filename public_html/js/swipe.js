$(function() {

    $.mobile.buttonMarkup.hoverDelay = 0;

    $("#frame_mes0").swiperight(function() {
        $.mobile.changePage("#frame_mes1", {transition: "slide", reverse: true});
    });
    $("#frame_mes1").swiperight(function() {
        $.mobile.changePage("#frame_mes2", {transition: "slide", reverse: true});
    });
    $("#frame_mes1").swipeleft(function() {
        $.mobile.changePage("#frame_mes0", {transition: "slide", reverse: false});
    });
    $("#frame_mes2").swipeleft(function() {
        $.mobile.changePage("#frame_mes1", {transition: "slide", reverse: false});
    });

});    