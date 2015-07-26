var slothImg = $('#rand-sloth');
var slothButton = $('#sloth-button');

function showSloth(evt) {
  evt.preventDefault();

  $.get("/sloth", function(results) {
    
    slothImg.attr('src', 'results[1]')
  })

}

slothButton.on('submit', showSloth)
