window.onload = function(){
    var imgs = new Array(
        "./main_imgs/1.png",
        "./main_imgs/2.png",
        "./main_imgs/3.png",
        "./main_imgs/4.png",
        "./main_imgs/5.png",
        "./main_imgs/6.png",
        "./main_imgs/7.png",
        "./main_imgs/8.png",
        "./main_imgs/9.png"
    );
    var index = Math.floor(Math.random() * imgs.length);

    document.getElementById("daemoon").src = imgs[index];
};