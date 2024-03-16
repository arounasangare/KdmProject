document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.background-image');
    var index = 0;
  
    setInterval(function() {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 5000); // Change l'image toutes les 5 secondes
  });
  