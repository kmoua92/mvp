// Make request to server

var app = {
  server: 'http://api.probasketballapi.com/player' 
};

app.init = function() {
  app.fetch();
};

app.fetch = function() {
  $.ajax({
    url: this.server,
    type: 'POST',
    // headers: {
    //   'Content-Type': 'application/JSON'
    // },
    data: 'api_key=' + window.api_key + '&first_name=Kevin&last_name=Durant',   
    success: function(data) {
    	// data = JSON.parse(data);
    	console.log('Request succeeded: ', data);
    },
    error: function(error) {
      console.log('Request failed: ', error);
    }
  });
  // $.get(this.server).done(function (data) {
  //   console.log(data);
  // });
};


$(function(){
	app.init();
});