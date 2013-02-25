---
---

$(window).bind("load", function() {

  var path = window.location.pathname;
  var page = path.substring(path.lastIndexOf('/') + 1);

  if (page == "index.html") {
    $('.white-fullwidth-bar').sticky({topSpacing:0, className:'unhide'});
  } else {
    $('.brand').css('opacity', 1)
  }
});
