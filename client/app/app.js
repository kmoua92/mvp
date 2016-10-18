// Make request to server

var app = {
  server: 'http://127.0.0.1:3000'
};

app.init = function() {
  app.fetch();
};

app.fetch = function() {
  $.ajax({
    url: this.server,
    type: 'GET',
    headers: {
      'Content-Type': 'application/JSON'
    },
    success: function(data) {
    	// data = JSON.parse(data);
    	console.log(data);
    }
  });
};


$(function(){
	app.init();
});