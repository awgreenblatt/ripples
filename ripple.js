
function getCustomFilter(time, cx, cy) {
    return "custom(url(shaders/ripples.vs) mix(url(shaders/ripples.fs) multiply source-atop), 100 100 border-box, transform perspective(2000) rotateX(20deg), maxAmplitude 40, decayTime 40, s 2, radiusScale 15, time " + time + ", center " + cx + " " + cy + ")";
}

function playRippleEffect(elem, cx, cy) {
    elem.css({
        "-webkit-filter" : getCustomFilter(2, cx, cy),
        "-webkit-transition" : "-webkit-filter 4s"
    });
    
    window.setTimeout(function () {
        elem.css("-webkit-filter", getCustomFilter(40, cx, cy));
        elem.on('webkitTransitionEnd', function () {
            elem.css({
                "-webkit-filter": "",
                "-webkit-transition": ""
            });
            elem.off('webkitTransitionEnd');
        });
    }, 0);
}

jQuery(document).click(function (event) {
    playRippleEffect(jQuery("body"), 0, 0);
});