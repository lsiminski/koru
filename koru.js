
$.getJSON('koru.json', function(data) { 
    
  var randomCard = data.cards[Math.floor(Math.random()*data.cards.length)];
  console.log(randomCard.card);
  $("#koru_cards p").text(randomCard.card);
    
});

$('#koru_cards').click(function() {
  document.location.reload(true);
});
