var borderNum = 2;

setInterval( function() {
    var borderClass = 'border' + borderNum;
    $("#about").removeClass().addClass(borderClass);

    if (borderNum <= 3) {
        borderNum++;
    } else {
        borderNum = 1;
    }
}, 600);
