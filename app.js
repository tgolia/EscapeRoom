var img = new Image();

img.onload = function () {
    eightBit(document.getElementById('door'), img, 20);
};

img.src = 'http://localhost:8080/img/door.jpg';