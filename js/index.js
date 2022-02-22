function scrolldown() {
    if(document.documentElement.scrollTop > 200){
        document.getElementById("navbar").classList.add("more");
    } else {
        document.getElementById("navbar").classList.remove("more");
    }
}

window.onscroll = function() {
    scrolldown();
}

window.onload = function() {
    let website = new CountUp('websites',0,100,0,2.5);
    website.start();
    let app = new CountUp('apps',0,300,0,2.5);
    app.start();
    let user = new CountUp('users',0,1000,0,2.5);
    user.start();
    let video = new CountUp('video',0,30,0,2.5);
    video.start();
};

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();

document.getElementById("this-year").innerHTML = new Date().getFullYear();