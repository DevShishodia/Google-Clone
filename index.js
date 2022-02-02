$(document).ready(function() {
    const gsearch = function() {
      let url = 'http://www.google.com/search?q=' + document.getElementById('searchme').value;
      window.open(url, 'google');
    };
    const glucky = function() {
      let url = 'http://www.google.com/search?q=' + document.getElementById('searchme').value + '&btnI';
      window.open(url, 'google');
    };
  
    $(".left").click(gsearch);
    $(".right").click(glucky);
  
    $("#searchme").keypress(function(e) {
      if (e.which == 13) {
        gsearch();
      }
    });
  });