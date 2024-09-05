function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changecircle(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}


// animasi
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.teks, .gambar, .tombol');
  
    const checkElements = () => {
      const triggerBottom = window.innerHeight / 5 * 7;
  
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
  
        if (elementTop < triggerBottom) {
          element.classList.add('show');
        } else {
          element.classList.remove('show');
        }
      });
    }
  
    window.addEventListener('scroll', checkElements);
    checkElements();
  })

// sticky 
var nav = document.querySelector('.navbar')
window.addEventListener("scroll", () => {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky")
  }else{
    nav.classList.remove("sticky");
  }
})

// slide

let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.cards').length;
    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// dropdown
document.querySelector('.toggle-description-btn').addEventListener('click', function() {
  const description = document.querySelector('.product-description');
  const arrow = document.querySelector('.arrow');

  if (description.classList.contains('open')) {
      description.classList.remove('open');
      arrow.style.transform = 'rotate(0deg)';
  } else {
      description.classList.add('open');
      arrow.style.transform = 'rotate(180deg)';
  }
});




