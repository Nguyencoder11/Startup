function clickImage(image) {
    document.getElementById('modal_img').src = image.src;
    document.getElementById('layout').style.display = "block";

    var imgName = document.getElementById('modal_img-name');
    imgName.innerHTML = image.alt;
}

var closeLayout = document.querySelector('.modal_icon-close');

closeLayout.addEventListener("click", function () {
    document.getElementById('layout').style.display = "none";
});



var clickOpen = document.querySelector('#mobile--bar');
var sideBar = document.querySelector('#mySidebar');


clickOpen.addEventListener('click', function () {
    
    if (sideBar.style.display === 'block') {
        sideBar.style.display = 'none';
    } else {
        sideBar.style.display = 'block';
    }
});

var links = document.querySelectorAll('.linkSidebar');
for (link of links) {
    link.addEventListener('click', function () {
        sideBar.style.display = "none";
    });
}