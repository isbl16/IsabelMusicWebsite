function loadMe() {
    var slides = document.getElementsByClassName('slide');
    for (var i = 0; i < 6; i++) {
        var randC1 = Math.floor((Math.random() * 255) + 1);
        var randC2 = Math.floor((Math.random() * 255) + 1);
        var randC3 = Math.floor((Math.random() * 255) + 1);
        slides[i].style.backgroundColor = "#" + (randC1).toString(16) + (randC2).toString(16) + (randC3).toString(16);
        if (changeToWhite(randC1, randC2, randC3)) {
            document.getElementsByClassName('title')[i].style.color = "white";
        }
    }
}

function changeToWhite(c1, c2, c3) {
    var result = Math.sqrt(
        c1 * c1 * 0.241 +
        c2 * c2 * 0.691 +
        c3 * c3 * 0.068);
    if (result > 130) {
        return false;   
    } else {
        return true;   
    }
}




