
document.addEventListener('keydown', function(event) {
    if (event.keyCode != 27 && 49 &&50) {
        window.location.href = '../MenuPage/menu.html';

    }

    if (event.keyCode == 49) {
        window.location.href = 'https://www.artstation.com/artist/hzxian';

    }
    if (event.keyCode == 50) {
        window.location.href = 'https://github.com/danielsht';

    }

}, true);

document.addEventListener('touchend', function(event){
	window.location.href = '../MenuPage/menu.html';
}, true);