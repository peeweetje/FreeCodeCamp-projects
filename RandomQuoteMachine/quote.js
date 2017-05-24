

  
var forismaticApi = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?"

  function getQuote() {
  
  
  $.getJSON(forismaticApi, function(data) {
    $('.quote')
      .html(data.quoteText);
    $("#tweet").attr("href","https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + data.quoteText)
    $('.author').html(data.quoteAuthor);
      

  });
}

    $(document).ready(function() {
    $.getJSON(forismaticApi, getQuote, 'jsonp');
});

  $("#quote").click(function() {
  $.getJSON(forismaticApi, getQuote, 'jsonp');
});




  

    

 