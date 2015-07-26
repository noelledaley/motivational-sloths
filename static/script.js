var slothImg = $('#rand-sloth');
var quoteArea = $('#quote');

function showSloth(evt) {
  console.log('you clicked the button!');
  evt.preventDefault();

  $.get("/sloth", "hello server",
    function (results) {
      console.log(results[0]);
      console.log(results[1]);
      slothImg.attr('src', '/static/img/' + results[0]);
      quoteArea.innerText(results[1]);

    }
  );

}

$('#sloth-button').on('submit', showSloth);
