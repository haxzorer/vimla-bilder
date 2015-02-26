$(document).ready(function () {
    var img;
    for (var i = 20; i > -1; i--) {
        if (i < 10) {
            img = $('<img/>').attr('src', 'https://vimla.se/images/milk-0' + i + '.jpg');
        } else {
            img = $('<img/>').attr('src', 'https://vimla.se/images/milk-' + i + '.jpg');
        }
        $('#one').append(img);
    };
    for (var i = 20; i > -1; i--) {
        if (i < 10) {
            img = $('<img/>').attr('src', 'https://vimla.se/images/chocolate-0' + i + '.jpg');
        } else {
            img = $('<img/>').attr('src', 'https://vimla.se/images/chocolate-' + i + '.jpg');
        }
        $('#two').append(img);
    };
});