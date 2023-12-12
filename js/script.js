$(document).ready(function(){
    $("#usrform").validate({
        rules: {
          zip: {
            required: true,
           
            minlength:6,
            maxlength:6
          },
          phne:{
            required: true,
            pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",
            minlength:10,
            maxlength:10
          }
        },
        messages: {
          zip: {
            required: "Please enter your zip code.",
            pattern: "Please enter a valid canadian zip-code"
          }
        }
       
      });

      
});