$(document).ready(function () {

    // elevate zoom activation 
    $('.zoom-01').elevateZoom();

    $('.zoom-02').elevateZoom({
        zoomType: "inner",
        cursor: "crosshair"
    });

    $('.zoom-03').elevateZoom({
        zoomType: "lens",
        lensShape: "round",
        lensSize: 150,
    });

    //nice select jquery activation
    $('select').niceSelect();


})