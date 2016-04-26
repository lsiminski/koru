
$.getJSON('koru.json', function(data) { 
    
  var randomCard = data.promptcards[Math.floor(Math.random()*data.promptcards.length)];
  console.log(randomCard.card);
  $("#prompt p").text(randomCard.card);
    
});
    
  var randomCard = data.actioncards[Math.floor(Math.random()*data.actioncards.length)];
  console.log(randomCard.card);
  $("#action p").text(randomCard.card);
    
});

$('#prompt').click(function() {
  document.location.reload(true);
});

$('#action').click(function() {
  document.location.reload(true);
});
