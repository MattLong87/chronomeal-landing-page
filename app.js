var largeWindow = false;

if ($('.info-box').css('display') === "inline-block") {
    $('.info-box h2').each(function () {
        $(this).next('p').addBack().wrapAll('<div class="text-wrapper">')
    })
    largeWindow = true;
}

$(window).resize(checkSize);

function checkSize() {
    if ($('.info-box').css('display') === "inline-block") {
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