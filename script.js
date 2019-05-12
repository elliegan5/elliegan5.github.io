$( document ).ready(function() {
    $('body').removeClass('faded');

    var tilt = 0;
    var targetAngle = 20

    $('.photo').click(function() {
        if (tilt <= targetAngle) {
            tilt += 7.5;
            $('.photo').css('transform', 'rotate(' + tilt + 'deg)');
            if (tilt > targetAngle) {
                $('.photo').delay(500).queue(function(next) {
                    $(this).addClass('drop');
                    $('#main-content').delay(800).queue(function(next) {
                        $(this).css({'right': '50%', 'bottom': '50%', 'transform': 'translate(50%, 50%)', 
                                     'max-height': '70%', 'margin': '0'});
                    });
                });
            }
            console.log(tilt)
        }
    });
})

// Eye animation by J-Roel on CodePen 
$( document ).mousemove(function(event) {
    var eye = $('.eye');
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
    });
});