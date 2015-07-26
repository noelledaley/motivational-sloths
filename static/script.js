var slothImg = $('#rand-sloth');
var quoteArea = $('#quote');

console.log("Let's make sure my javascript is working.")

function showSloth(evt) {
  debugger;
  console.log('you clicked the button!');
  evt.preventDefault();

  $.get("/sloth", "hello server",
    function(results) {
      console.log(results['imgPath']);
      console.log(results['quote']);
      slothImg.attr('src', '/static/img/' + results['imgPath']);
      quoteArea.innerText(results['quote']);

    }
  );

}

$("#sloth-button").on('submit', showSloth);
