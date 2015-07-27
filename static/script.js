var slothImg = $('#rand-sloth');
var quoteArea = $('#quote');

function showSloth(evt) {

  $.get("/sloth",
    function (results) {
      slothImg.attr('src', '/static/img/' + results['imgPath']);
      quoteArea.html(results['quote']);
    }
  );

}

$("#sloth-button").on('click', showSloth);

// Test for console
// function switchSloth(obj) {
//       console.log(obj['imgPath']);
//       console.log(obj['quote']);
//       slothImg.attr('src', '/static/img/' + obj['imgPath']);
//       quoteArea.html(obj['quote']);
//     }

// test = {'imgPath': 'sloth-space.jpg', 'quote': 'please work'}
