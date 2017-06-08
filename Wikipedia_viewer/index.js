$(document).ready(function() {

  const result = $('.result');

  $('#searchb').click(function() {
    const input = $('#input').val(); // get input from user


    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&format=json&callback=?";

    $.ajax({
      type: 'GET',
      url: url,
      async: false,
      dataType: 'json',
      success: function(data, callback) {
      result.empty();

        for (var i = 0; i <= 9; i++) {
          result.append('<div class="result">' +
            '<a href="' + (data[3][i]) + '" target="_blank">' +
            (data[1][i]) + '</a> <p>' + (data[2][i]) +
            '</p></div>')

        }
         input = $('#input').val(' ');
      },
      error: function(error) {
        alert("Error, please try again", error);
      }

    });

  });
  // enter key is pressed
  $("#input").keypress(function(e){
      if(e.which == 13){
        $("#searchb").click();
      }



    });

});
