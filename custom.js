
/* pagination */

$(document).ready(function () {
  $('#pagination').on('click', 'a', function (e) {
      e.preventDefault();  // Prevent the default anchor behavior

      // Check if the clicked link is not 'prev' or 'next'
      if (!$(this).hasClass('prev') && !$(this).hasClass('next')) {
      // Remove the 'active' class from all links
      $('#pagination a').removeClass('active');

      // Add the 'active' class to the clicked link
      $(this).addClass('active');
      }

      // You can add additional logic for the prev and next buttons if needed
      if ($(this).hasClass('prev')) {
      console.log("Previous page clicked");
      } else if ($(this).hasClass('next')) {
      console.log("Next page clicked");
      }
  });
});
/*End pagination */

/* slider */

var galleries_slider = new Swiper(".galleries-slider", {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: false,
  speed: 1200,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: { 
      spaceBetween: 20,
    },
    800: { 
      spaceBetween: 25,
    },
    1200: { 
      spaceBetween: 30,
    },
  },
});


var home_banner_slider = new Swiper(".home-banner-slider", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  slidesPerView: 1,
  speed: 5000,
  autoplay: {
    delay: 5,
    disableOnInteraction: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    },
  },
});


var swiper = new Swiper(".product-thumb-slider", {
  loop: true, // Enable loop
  autoplay: {
    delay: 3000, // Change slide every 3 seconds
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/* end slider */

/* Step Form */ 
document.addEventListener("DOMContentLoaded", function () {
    let step = 1;

    function updateStep() {
        for (let i = 1; i <= 4; i++) {
            const stepEl = document.getElementById("step" + i);
            const contentEl = document.getElementById("content" + i);

            if (stepEl) {
                stepEl.classList.toggle("active", i <= step);
            }

            if (contentEl) {
                contentEl.classList.toggle("active", i === step);
            }
        }

        const line = document.getElementById("stepLine");
        if (line) {
            const percent = ((step - 1) / 3) * 100;
            line.style.width = percent + "%";
            line.style.left = "0";
        }
    }

    function nextStep() {
        if (step < 4) step++;
        updateStep();
    }

    function prevStep() {
        if (step > 1) step--;
        updateStep();
    }

    function goToStep(n) {
        step = n;
        updateStep();
    }

    const form = document.getElementById("registrationMultiForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Submitted!");
        });
    }

    updateStep();

    // You can expose these to global scope if needed
    window.nextStep = nextStep;
    window.prevStep = prevStep;
    window.goToStep = goToStep;
}); 

/* End Step Form */




/* Phone Code  */
$(function() {
  var input = $("#phone")[0];
  if (!input) return; // Exit if the phone input doesn't exist

  var iti = window.intlTelInput(input, {
    initialCountry: "in",
    preferredCountries: ["in"],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js",
  });

  function validatePhone() {
    var valid = iti.isValidNumber();
    var feedback = $(input).closest('.form-group').find('.invalid-feedback');
    input.setCustomValidity(valid ? '' : 'Invalid');
    feedback.text('Invalid phone number')[valid ? 'hide' : 'show']();
  }

  $('form').on('submit', function(e) {
    e.preventDefault();
    validatePhone();
    $(this).addClass('was-validated');
    if (this.checkValidity()) {
      console.log('Form is valid and ready to submit.');
      // this.submit();
    }
  });

  $(input).on('countrychange keyup change', validatePhone);
});


/* End Phone Code */