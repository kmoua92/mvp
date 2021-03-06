// Make request to server

var app = {
  server: 'http://127.0.0.1:3000'
};

app.init = function() {

  $('.player').on('click', app.playerClick);
  $('#playerQuery').on('submit', app.playerSearch);
  $('#teamQuery').on('submit', app.teamSearch);
  $('#filterByQuery').on('submit', app.filterSearch);

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

      $('#container').text('Active Players');

      data.forEach(function(player) {
        var $players = $('<ul class="players"></ul>');
        $players.append($('<li class="player">'+ player.name + '</li>'));
        $('#container').append($players);
      });
    },
    error: function(error) {
      console.log('Request failed: ', error);
      throw error;
    }
  });
};

app.playerClick = function(event) {
  console.log('===========================')
  console.log(event);

  $.ajax({
    url: this.server + '/stats',
    type: 'GET',
    success: function(data) {
      console.log('PLAYER CLICK GET SUCCESS');  
    },
    error: function(error) {
      console.log('Request failed: ', error);
      throw error;
    }

  });
};

app.playerSearch = function(event) {
  event.preventDefault();
  var playerName = $('#searchPlayer').val().toLowerCase().split(' ');
  $('#searchPlayer').val('');
  
  $.ajax({
    url: app.server + '/stats/?player=' + playerName.join('-'),
    type: 'GET',
    // data: JSON.stringify(playerName),
    success: function(data) {
      data = JSON.parse(data);

      $('#container').html('');

      var $table = $('<table></table>');

      var $colHeadings = $('<tr></tr>');

      $table.prepend($colHeadings);

      // generate column headers (stat categories)
      for (var cat in data[0]) {
        var $cat = $('<td class="columnHeadings"></td>');
        $cat.text(cat);
        $colHeadings.append($cat);
      }

      // generate a row for each game
      data.forEach(function(game) {
      var $game = $('<tr class="game"></tr>');
        // generate state for each category
        for (var stat in game) {
          var $stat = $('<td class="playerStat"></td>');
          $stat.text(game[stat]);
          $game.append($stat);
        }
      // append each game to the table
      $table.append($game);
      });

      $('#container').append($table);
      console.log('SUCCESSFUL QUERY');
      console.log(data);
    },
    error: function(error) {
      console.log('FAILED QUERY');
      throw error;
    }
  });
};

app.teamSearch = function (event) {
  event.preventDefault();
  var teamName = $('#searchTeam').val();
  $('#searchTeam').val('');
  
  $.ajax({
    url: app.server + '/stats/team',
    type: 'POST',
    data: JSON.stringify(teamName),
    success: function(data) {
      data = JSON.parse(data);

      $('#container').html('');

      var $table = $('<table></table>');

      var $colHeadings = $('<tr></tr>');

      $table.prepend($colHeadings);

      // generate column headers (stat categories)
      for (var cat in data[0]) {
        var $cat = $('<td class="columnHeadings"></td>');
        $cat.text(cat);
        $colHeadings.append($cat);
      }

      // generate a row for each game
      data.forEach(function(game) {
      var $game = $('<tr class="game"></tr>');
        // generate state for each category
        for (var stat in game) {
          var $stat = $('<td class="playerStat"></td>');
          $stat.text(game[stat]);
          $game.append($stat);
        }
      // append each game to the table
      $table.append($game);
      });

      $('#container').append($table);
      console.log('SUCCESSFUL QUERY');
      console.log(data);
    },
    error: function(error) {
      console.log('FAILED QUERY');
      throw error;
    }
  });
};

app.filterSearch = function(event) {
  // only show tr that have a td that matches the search
  event.preventDefault();
  var filterTerm = $('#filterSearch').val();

  $('#filterSearch').val('');

  var filteredDOM = $('#playerStat').filter(function(index) {
    return $(this).text() === filterTerm;
  });

  console.log(filteredDOM);
};


$(function() {
  app.init();
});


// module.exports = app;
// fetch players, build table
// fetch player stats, build table