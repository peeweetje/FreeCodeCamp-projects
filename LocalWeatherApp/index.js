$(document).ready(function() {
    
      var long;
      var lat;
    
      if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
        long = position.coords.longitude;
        lat = position.coords.latitude;
        //console.log(lat);
    
        var api = 'https://api.apixu.com/v1/current.json?key=19d9c8189a0d452688e191212171705&q='+lat+','+long;
        $.getJSON(api, function(data) {
          
        var city = data.location.name;
        var region = data.location.region
        var country = data.location.country;
        var windSpeed = data.current.wind_kph;
        var weatherType = data.current.condition.text;
        var cTemp = data.current.temp_c;
        var fTemp = data.current.temp_f;
        var icon = "https://" + data.current.condition.icon;
        //console.log(country);
        //console.log(name);
          
        $("#country").html(country);
        $("#region").html(region);
        $("#city").html(city);
        $("#condition").html(weatherType);
        $("#wind").html(windSpeed + " KPH");
        $("#fTemp").html(fTemp  +" &#8457;");
        $("#cTemp").html(cTemp  +" &#8451"); 
        $("#temp").html(cTemp  +" &#8451");
        $("#icon").attr("src",icon);
          
    
    
        $("#tempC").on("click", function()
        {
        $("#temp").html(cTemp + "  &#8451");
        });
       $("#tempF").on("click", function()
        {
        $("#temp").html(fTemp + " &#8457;");
      });
          
    
    
    
    
        /*$(".tempf").click(function() {
            $(".tempf").removeClass('active');
            $(".tempf").addClass('active');
            $("#fTemp").html(fTemp + " &#8451;");
          });*/
    
    
    
    
    
         /*$('.tempf').click(function(){
            $('#fTemp').html(fTemp +" &#8457;"); 
          }); 
          $('.tempc').click(function(){
            $('#cTemp').html(cTemp +" &#8451"); 
          });*/
          
        
         /* $("#fTemp").click(function() {
            $(".tempf").removeClass('active');
            $("#cTemp").addClass('active');
            $("#fTemp").html(cTemp + " &#8451;");
          });*/
      
    
        
       });
      });
     };
    });
    