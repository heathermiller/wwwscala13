---
---

$(window).bind("load", function() {
  var path = window.location.pathname;
  var page = path.substring(path.lastIndexOf('/') + 1);
  var is_root = location.pathname == "/~hmiller/scala2013/";

  if (is_root || page == "index.html") {
    $('.white-fullwidth-bar').sticky({topSpacing:0, className:'unhide'});
  } else {
    $('.brand').css('opacity', 1);
    $('body').css('background-color', '#EBEFF0');
  }
});
