const text = ['MERN stack developer','Web designer','Writer', 'Solopreneur'];
const speed = 50;

let i = 0;
let index = 0;

const typeWriter = () => {
  if (i < text[index].length) {
    document.querySelector('.typewriter').innerHTML += text[index].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      i = 0;
      document.querySelector('.typewriter').innerHTML = '';
      if (index === text.length - 1) {
        index = 0;
      } else {
        index++;
      }
      typeWriter();
    }, 1000);
  }
};

typeWriter();

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$(document).ready(function() {
  // Get the width of the viewport
  var viewportWidth = $(window).width();

  // If the viewport is less than 576 pixels
  if (viewportWidth < 576) {
    // Set the width of the div to 100%
    $('.my-class').addClass('col-12');
  }
});
