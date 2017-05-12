var largeWindow = false;

if ($('button').css('width') === "160px") {
    $('.info-box h2').each(function () {
        $(this).next('p').addBack().wrapAll('<div class="text-wrapper">')
    })
    largeWindow = true;
}

$(window).resize(checkSize);

function checkSize() {
    if ($('button').css('width') === "160px") {
        if (largeWindow == false) {
            $('.info-box h2').each(function () {
                $(this).next('p').addBack().wrapAll('<div class="text-wrapper">')
            })
        }
        largeWindow = true;
    }
    else {
        if (largeWindow == true) {
            $('.info-box h2').unwrap();
        }
        largeWindow = false;
    }
}