$(document).ready(function(){
    console.log("Working");
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        //direction: 'vertical',
        //loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
      
      // Form validation using Validate.js plugin
        $("#payment").validate({
          rules: {
            cardnum: {
              required: true,
              // 
              number:true,
              minlength:10,
              maxlength:10
            },
            cvv: {
              required: true,
              // pattern: /^[0-9]{3}$/
              number:true,
              minlength:3,
              maxlength:3 
            }
          },
          messages: {
            cardnum: {
              required: "Please enter a 10-digit credit card number.",
              pattern: "Please enter a valid 10-digit credit card number."
            },
            cvv: {
              required: "Please enter a 3-digit CVV.",
              pattern: "Please enter a valid 3-digit CVV."
            }
          }
         
        });
      
});