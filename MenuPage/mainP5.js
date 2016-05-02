document.addEventListener('keydown', function(event) {
    if (event.keyCode == 49) {
        window.location.href = '../UploadPage/upload.html';

    }
    if (event.keyCode == 50) {
        window.location.href = '../SelectPage/select.html';

    }

}, true);

document.addEventListener('touchend', function(event){
	window.location.href = '../UploadPage/upload.html';
}, true);
