// Make request to server

var app = {
  server: 'http://127.0.0.1:3000'
};

app.init = function() {
  app.fetchPlayers();
};

// fetch all players
app.fetchPlayers = function() {
  $.ajax({
    url: this.server + '/players',
    type: 'GET',
    // data: 'api_key=' + window.api_key + '&opponent_id=1610612753&player_id=202331',   
    success: function(data) {
    	data = JSON.parse(data);
      // loop through and display each name in a list
    	console.log('Request succeeded: ', data);

      data.forEach(function(player) {
        var $players = $('<ul class="players"></ul>');
        $players.text(player.name);
        $('#container').append($players);
      });
    },
    error: function(error) {
      console.log('Request failed: ', error);
    }
  });
};


$(function(){
	app.init();
});

// fetch players, build table
// fetch player stats, build table