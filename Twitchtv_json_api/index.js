$(document).ready(function() {

  let users = ["ESL_SC2", "OgamingSC2", "cretetion", "brunofin", "comster404",
    "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"
  ];

  //Loop through the array of users
  for (let i = 0; i < users.length; i++) {

    //Check if  user does exist
    $.ajax({
      type: 'GET',
      url: "https://api.twitch.tv/kraken/users/" + users[i],
      headers: {
        'Client-ID': 's3fjm4t1olucy3adfvnespw9iq6mt0'
      },
      //If user does exist, check if user is online/offline
      success: function(data) {
        //  console.log(data);
        $.ajax({
          type: 'GET',
          url: 'https://api.twitch.tv/kraken/streams/' + users[i],
          headers: {
            'client-ID': 's3fjm4t1olucy3adfvnespw9iq6mt0'
          },
          success: function(data1) {
            let name = data1._links.self.slice(37) // sliced so only username is seen not whole url
            //console.log(data1);
            //If user is offline, display user as offline.
            if (data1.stream === null) {
              $('#status').append("<div class ='row'>" + 'offline<br>' + "</div>");
              $('#user').append("<div class ='row'>" + "<div class='col-md-4'>" + '<a target="blank" href="https://www.twitch.tv/' + name + '">' + name + '</a><br>' + "</div></div>")
              $('#info').append("<div class ='row'>" + "<div class='col-md-4'>" + 'N/A<br>' + "</div></div>");
            } else {
              //If users is online, display user as online.
              $('#status').append("<div class ='row'>" +  ' user is online*<br>' + "</div>");
              $('#user').append("<div class ='row'>" + "<div class='col-md-4'>" + '<a target="blank" href="https://www.twitch.tv/' + name + '">' + name + '</a><br>' + "</div></div>")
              $('#info').append(data1.stream.game + '<br>'); //game = id = info
            }
          },
        });
      },
      //If user does not exist, display user not found.
      error: function(data) {
        /*  alert('Error!')*/
        if (data.status == 404) {
          $('#user').append(users[i] + '<br>')
          $('#status').append("<div class ='row'>" + 'Not Found!<br>');
          $('#info').append("Doesn't  exist!<br>");
        }

      }
    });
  }
});
