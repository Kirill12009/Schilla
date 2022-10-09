// var x = document.getElementById("contain");

// x.addEventListener("click", myFunction);

// function myFunction() {
//     var element = document.getElementById("nav");
//     element.classList.toggle("open");

//     x.classList.toggle("change");
// }


// /* Индекс слайда по умолчанию */
// var slideIndex = 1;
// showSlides(slideIndex);

// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusSlide() {
//     showSlides(slideIndex += 1);
// }

// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusSlide() {
//     showSlides(slideIndex -= 1);
// }

// /* Устанавливает текущий слайд */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// /* Основная функция слайдера */
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("item");
//     var dots = document.getElementsByClassName("slider-dots_item");
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

let slideIndex = 1;
showSlides(slideIndex);

let prev = document.getElementById('prev');
let next = document.getElementById('next');

next.addEventListener("click", function() {
  showSlides(slideIndex += 1);
  clearInterval(timer);
  timer = setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
  }, 4000);
});

prev.addEventListener("click", function() {
  showSlides(slideIndex -= 1);
  clearInterval(timer);
  timer = setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
  }, 4000);

});

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let slides = document.getElementsByClassName("myslide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.classList.remove('myslide__active');
    //slide.style.display = "none";
  }
  slides[slideIndex - 1].classList.add('myslide__active');
  //slides[slideIndex - 1].style.display = "flex"; 
}

let timer = setInterval(function() {
  slideIndex++;
  showSlides(slideIndex);
}, 4000);