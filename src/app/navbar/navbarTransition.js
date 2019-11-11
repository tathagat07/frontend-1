var winEle = $(window);
var nav = $('#main-nav');

winEle.scroll(function(){
  if (winEle.scrollTop() > 50) {
    nav.addClass('smallnav');
  } else {
  	nav.removeClass('smallnav');
  }
});	