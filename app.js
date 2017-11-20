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
      for(let i=0; i<=10;i++){

         $('.list-item').append('<li class="card" id="'+result[i].pageid+'">'+
           '<div class="card-title">'+result[i].title+'</div>'+
           '<p>'+result[i].snippet+'</p>'+
           '<span>'+result[i].timestamp.toString()+'</span>'
         +'</li>'  );
      }

    });
    //$(this).addClass('display');
  });
});

/*
$.each( data,function(key,val) {


});
$('.list-item').append('<li id="'+key+1+'">'+
  '<h1>'+data[key+1]+'</h1>'+
  '<p>'+data[key+2]+'</p>'+
  '<a href="'+data[key+3]+'">Link</a>'
+'</li>'  );*/
