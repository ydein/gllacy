  var writeLink = document.querySelector(".login-link");
  var writePopup = document.querySelector(".modal-login");
  var writeClose = document.querySelector(".modal-close");  

  writeLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    writePopup.classList.add("modal-show");
    writeClose.classList.add("modal-show");
  });

  writeClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    writePopup.classList.remove("modal-show");
    writeClose.classList.remove("modal-show");
  });


  var cartLink = document.querySelector(".cart");
  var cartPopup = document.querySelector(".cart-goods");
  var cartClose = document.querySelector(".modal-close");  

  cartLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
    cartClose.classList.add("modal-show");
  });

  cartClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
    cartClose.classList.remove("modal-show");
  });


  var feedbackLink = document.querySelector(".feedback-button");
  var feedbackPopup = document.querySelector(".modal-feedback");
  var feedbackClose = feedbackPopup.querySelector(".popup-close");  

  feedbackLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
  });

  feedbackClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
  });


  var mapLink = document.querySelector(".contacts-map-link");
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = document.querySelector(".modal-close");  

  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    mapClose.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    mapClose.classList.remove("modal-show");
  });



//slider2
  var previous2Slider = document.querySelector(".slider1");
  var show2Slider = document.querySelector(".slider2");
  var next2Slider = document.querySelector(".slider3");

  var toggle2Slider = document.querySelector(".toggle-slider2");
  var toggle2Bg = document.querySelector(".toggle-bg");

  var previous2ToggleSlider = document.querySelector(".toggle-slider1");
  var next2ToggleSlider = document.querySelector(".toggle-slider3");
    
  toggle2Slider.addEventListener("click", function(evt) {
    evt.preventDefault();
    toggle2Bg.classList.remove("slider1-bg");
    toggle2Bg.classList.remove("slider3-bg");
    toggle2Bg.classList.add("slider2-bg");

    toggle2Slider.classList.add("active");
    previous2ToggleSlider.classList.remove("active");
    next2ToggleSlider.classList.remove("active");

    previous2Slider.classList.remove("slider-show");
    next2Slider.classList.remove("slider-show");
    show2Slider.classList.add("slider-show");
  });

//slider3
  var previous3Slider = document.querySelector(".slider2");
  var show3Slider = document.querySelector(".slider3");
  var next3Slider = document.querySelector(".slider1");

  var toggle3Slider = document.querySelector(".toggle-slider3");
  var toggle3Bg = document.querySelector(".toggle-bg");

  var previous3ToggleSlider = document.querySelector(".toggle-slider2");
  var next3ToggleSlider = document.querySelector(".toggle-slider1");
  
    
  toggle3Slider.addEventListener("click", function(evt) {
    evt.preventDefault();
    toggle3Bg.classList.remove("slider2-bg");
    toggle3Bg.classList.remove("slider1-bg");
    toggle3Bg.classList.add("slider3-bg");

    toggle3Slider.classList.add("active");
    previous3ToggleSlider.classList.remove("active");
    next3ToggleSlider.classList.remove("active");

    next3Slider.classList.remove("slider-show");
    previous3Slider.classList.remove("slider-show");
    show3Slider.classList.add("slider-show");
  });

//slider1
  var previous1Slider = document.querySelector(".slider3");
  var show1Slider = document.querySelector(".slider1");
  var next1Slider = document.querySelector(".slider2");

  var toggle1Slider = document.querySelector(".toggle-slider1");
  var toggle1Bg = document.querySelector(".toggle-bg");

  var previous1ToggleSlider = document.querySelector(".toggle-slider3");
  var next1ToggleSlider = document.querySelector(".toggle-slider2");
  
    
  toggle1Slider.addEventListener("click", function(evt) {
    evt.preventDefault();
    toggle1Bg.classList.remove("slider2-bg");
    toggle1Bg.classList.remove("slider3-bg");
    toggle1Bg.classList.add("slider1-bg");

    toggle1Slider.classList.add("active");
    previous1ToggleSlider.classList.remove("active");
    next1ToggleSlider.classList.remove("active");

    next1Slider.classList.remove("slider-show");
    previous1Slider.classList.remove("slider-show");
    show1Slider.classList.add("slider-show");
  });
