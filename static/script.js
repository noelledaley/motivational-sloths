var slothImg = $('#rand-sloth');
var quoteArea = $('#quote');

console.log("Let's make sure my javascript is working.")

function showSloth(evt) {
  console.log('you clicked the button!');
  evt.preventDefault();

  $.get("/sloth", "hello server",
    function (results) {
      console.log(results['imgPath']);
      console.log(results['quote']);
      slothImg.attr('src', '/static/img/' + results['imgPath']);
      quoteArea.html(results['quote']);

    }
  );

}

$("#sloth-button").on('submit', showSloth);

// Test for console
// function switchSloth(obj) {
//       console.log(obj['imgPath']);
//       console.log(obj['quote']);
//       slothImg.attr('src', '/static/img/' + obj['imgPath']);
//       quoteArea.html(obj['quote']);
//     }

// test = {'imgPath': 'sloth-space.jpg', 'quote': 'please work'}
