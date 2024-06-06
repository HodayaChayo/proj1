'use strict';

var imgs = document.querySelectorAll('.slideshow > img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0;
const interval = 3000;

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) { // reset
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(' active', '');
  }

  currentImg = (currentImg + 1) % imgs.length; // update the index number

  if (n != undefined) {
      clearInterval(timer);
      timer = setInterval(changeSlide, interval);
      currentImg = n;
  }

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';
}

var timer = setInterval(changeSlide, interval);
