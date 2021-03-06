$(document).ready(function() {
  //Extracting Value From Form submit
  let serachValue = '';
  $("form").on("submit", function(event) {
    event.preventDefault();
    serachValue = $(this).serializeArray()[0].value;
    serachValue = encodeURIComponent(serachValue.trim());

    //WIkiAPii
    let wikiApi = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srprop=timestamp|snippet&srsearch=' + serachValue + '&format=json&origin=*';

    $.getJSON(wikiApi, function(data) {
      let result = data.query.search;
      console.log(data);

      for (let i = 0; i < 10; i++) {

        $('.list-item').append('<li>' +
          '<div class="card w-75 card-inverse " id="' + result[i].pageid + '">' +
          '<div class="card-block text-center">' +
          '<h2 class="card-title">' + result[i].title + '</h2>' +
          '<p class="card-text lead">' + result[i].snippet + '</p>' +
          ' <a href="#" class="card-link-primary text-right" >Read more</a>' +
          '</div>' +
          '<div class="card-footer">' +
          '<small class="blockquote-footer">' + result[i].timestamp.toString() + '</small>' +

          '</div>' +
          '</div>' +
          '</li>');
      }

    });
    $(this).addClass('display');
    $('.back-link').addClass('back');  });
});
