const time = 300;
const overlay = $('.overlay');
const btnMenu = $('.btnMenu');
const li = $('.newWrap li');

$(document).ready(function () {
  btnMenu.click(function () {
    if (!overlay.hasClass('slide')) {
      overlay.addClass('slide', time);
      btnMenu.removeClass('fa-bars').addClass('fa-close');
      li.each(function () {
        fader(this, 1);
      })
    }
    else {
      overlay.removeClass('slide', time);
      btnMenu.addclass('fa-bars').removeClass('fa-close');
      li.each(function(){
        fader(this, 0)
      })
    }
  })
})

function fader(x, y) {
  const animationDelay = 600;
  const offset = 200;

  setTimeout(function(){
    $(x).animate({
      opacity: y
    }, animationDelay);
  }, $(x).index() * offset
  )
}

