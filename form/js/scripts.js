window.onload = function (e) {
    var links = document.querySelectorAll('a[target=_blank]')
    console.log(links)

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = confirmAway
    }

    function confirmAway () {
        if (!confirm('Мы не гарантируем что вы переходите на безопасный сайт')) {
            return false
        }

        var images = document.querySelectorAll('.gallery img')

        for (let i = 0; i < images.length; i++) {
            images[i].mousedown = stopMove
            images[i].oncontextmenu = stopMove
        }

        function stopMove (e) {
            return false
        }
    }
}