// How could you access to each element in less code lines?
// we can access with event delegation means that we are delegation the
// event to the parent element and the we are looking through e.target
(function() {
  var form = document.getElementById('myForm');

  if (form) {
    form.addEventListener('click', function(e) {
      if (e.target) {
        console.log(e.target, 'fue clickeado!');
      }
    }, false);
  }
})();
