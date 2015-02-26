$(document).ready(function () {
    var img;
    var i;
    var increment = 0;
    for (i = 20; i > -1; i--) {
        if (i < 10) {
            //img = $('<img/>').attr('src', 'https://vimla.se/images/milk-0' + i + '.jpg');
            img = $('<img/>').attr({
                'src': 'https://vimla.se/images/milk-0' + i + '.jpg',
                'hidden': true
            });
        } else {
            img = $('<img/>').attr({
                'src': 'https://vimla.se/images/milk-' + i + '.jpg',
                'hidden': true
            });
        }

        if (i === 20) {
            img.attr('hidden', false);
        }

        $('#one').append(img);
    }

    for (i = 20; i > -1; i--) {
        if (i < 10) {
            img = $('<img/>').attr({
                'src': 'https://vimla.se/images/chocolate-0' + i + '.jpg',
                'hidden': true
            });
        } else {
            img = $('<img/>').attr({
                'src': 'https://vimla.se/images/chocolate-' + i + '.jpg',
                'hidden': true
            });
        }

        if (i === 20) {
            img.attr('hidden', false);
        }

        $('#two').append(img);
    }

    var imgsOne = $('#one').find('img');
    var imgsTwo = $('#two').find('img');

    startAnimation(imgsOne);
    startAnimation(imgsTwo);

    $('#stop').on('click', function () {
        increment = 0;
    });

    $('#start').on('click', function () {
        increment = 1;
    });

    function startAnimation (imgs) {
        var currentIndex = 0;
        var prevIndex = -1;

        var globalCounter = 0;

        var rotation = 'desc';
        var interval = setInterval(function() {
            //console.log('rotation: ', rotation, ', current index: ', currentIndex, ', prev index: ', prevIndex);

            if (rotation === 'desc') {
                if (prevIndex > -1) {
                    $(imgs[prevIndex]).attr('hidden', true);
                }

                $(imgs[currentIndex]).attr('hidden', false);

                if(currentIndex === imgs.length - 1) {
                    console.log(currentIndex, ', reached end of array, start over.');
                    rotation = 'asc';
                    prevIndex = currentIndex + 1;
                } else {
                    prevIndex = currentIndex;
                    currentIndex += increment;
                }
            } else if(rotation === 'asc') {
                if (prevIndex <= imgs.length) {
                    $(imgs[prevIndex]).attr('hidden', true);
                }

                $(imgs[currentIndex]).attr('hidden', false);

                if(currentIndex === 0) {
                    console.log(currentIndex, ', reached beginning of array, start over.');
                    rotation = 'desc';
                    prevIndex = currentIndex - 1;
                } else {
                    prevIndex = currentIndex;
                    currentIndex -= increment;
                }

                
            }

            globalCounter++;
        },  50);
    }


});