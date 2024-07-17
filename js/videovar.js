
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');
var slide4 = document.getElementById('slide4');

slide1.onended = function(){
    slide2.play();
    slide1.style.opacity=0;
    slide2.style.opacity=1;
}

slide2.onended = function(){
    slide3.play();
    slide2.style.opacity=0;
    slide3.style.opacity=1;
}
slide3.onended = function(){
    slide4.play();
    slide3.style.opacity=0;
    slide4.style.opacity=1;
}
slide4.onended = function(){
    slide1.play();
    slide4.style.opacity=0;
    slide1.style.opacity=1;
}