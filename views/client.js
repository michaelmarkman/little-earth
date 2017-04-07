$(function() {
  $('#text_value').click(function() {
    var text_value = $("#text").val();
    if(text_value=='') {
      alert("Enter Some Text In Input Field");
    } else {
      $.get( "/location/" + text_value + "&units=imperial", function( data ) {
        console.log("data retrieved is: ")
        console.log(data)
        var obj = JSON.parse(data)
        console.log(obj.weather[0].main)
          // $("city").append(locationID)
          $("#weather").text(
            //JSON.stringify(data)
            obj.weather[0].main
          );
          $("#city").text(
          //"Seattle"
            obj.name
          );
          $("#desc").text(
          //"Seattle"
            obj.weather[0].description
          );
        console.log(obj.main.temp);
          $("#temp").text(
          //"Seattle"
            obj.main.temp
          );
      });
    }
  });
  /*
  $.get( "/location/:locationID", function( data ) {
    console.log("data retrieved is: ")
    console.log(data)
    var obj = JSON.parse(data)
    console.log(obj.weather[0].main)
      // $("city").append(locationID)
      $("#weather").append(
        //JSON.stringify(data)
        obj.weather[0].main
      );
      $("#city").append(
      //"Seattle"
        obj.name
      );
  });
  */
  /*var auto_refresh = setInterval(function(){
    $.get('/get_webhooks', function(webhooks) {
      var content="";
      if(webhooks.length!==0){
        webhooks.forEach(function(webhook) {
          content+='<li>' + webhook + '</li>';
        });
        $('ul#webhooks').html(content);
        content="";
      } else {
        $('ul#webhooks').html("None received yet");
      }
    });
  }, 3000);*/
  
});