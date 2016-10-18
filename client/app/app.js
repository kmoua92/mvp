// Make request to server

var app = {
  server: 'http://127.0.0.1:3000'
};

app.init = function() {
  app.fetch();
};

// fetch all players
app.fetch = function() {
  $.ajax({
    url: this.server + '/players',
    type: 'GET',
    // data: 'api_key=' + window.api_key + '&opponent_id=1610612753&player_id=202331',   
    success: function(data) {
    	data = JSON.parse(data);
      // loop 
    	console.log('Request succeeded: ', data);
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