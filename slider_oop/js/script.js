window.onload = function () {
    var sliders = document.querySelector('.slider')
    var images = document.querySelectorAll('.gallery-1 .photos img');

    for (let i = 0; i < sliders.length; i++) {
        for (let j = 0; j < images.length; j++) {
            if (i === j) {
                sliders[i] = new Slider(images[j]);
            }
        }

        document.querySelector('.gallery-' + i + ' .buttons .prev').onclick = function(){
            sliders[i].prev();
        }

        document.querySelector('.gallery-' + i + ' .buttons .next').onclick = function(){
            sliders[i].next();
        }
    }
}

function Slider(images) {
    this.images = images;
    var i = 0;

    this.prev = function () {
        this.images[i].classList.remove('showed');
        i--;

        if (i < 0) {
            i = this.images.length - 1;
        }

        this.images[i].classList.add('showed');
    }

    this.next = function () {
        this.images[i].classList.remove('showed');
        i++;

        if (i >= this.images.length) {
            i = 0;
        }

        this.images[i].classList.add('showed');
    }
}