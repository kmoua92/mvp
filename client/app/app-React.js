// var DataTable = React.createClass({});

class SearchForms extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			player: '',
			team: ''
		};
	}

  handlePlayerChange (e) {
  	console.log('================', e.target.value)
    this.setState({player: e.target.value});
  }

  handleTeamChange (e) {
  	this.setState({team: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();

    var playerName = this.state.player.trim(); // string
    var teamName = this.state.team.trim(); // string

    if (!this.state.player && !this.state.team) {
      return;
    }

    props.onPlayerSubmit({player: this.state.player});
    props.onTeamSubmit({team: this.state.team});
    this.setState({input: '', team: ''}); // clears field after submission
  }

  render (props) {
    return (
      <form className="searchForms" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter player name"
          value={this.state.player}
          onChange={this.handlePlayerChange}
        />
        <input
          type="text"
          placeholder="Enter team name"
          value={this.state.team}
          onChange={this.handleTeamChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
};


// var PlayerSearchForm = function(props) {

// 	var getPlayer = function(event) {
// 		event.preventDefault();
// 		console.log('============', props.value)
// 	};

// 	return (
// 		<form onSubmit={getPlayer}>
// 			<input placeholder="Enter player name">{props.value}</input>
// 		</form>
// 	);
// };

// var TeamSearchForm = function(props) {

// 	var getTeam = function(event) {
// 		event.preventDefault();
// 		console.log('=============', event.target.value);
// 	};

// 	return (
// 		<form onSubmit={getTeam}>
// 			<input placeholder="Enter team name"></input>
// 		</form>
// 	);
// };






var App = function(props) {

	this.onPlayerSubmit = function(obj) {
		console.log('============DEFINED INSIDE APP COMP')
	}
	

	return (
		<SearchForms onPlayerSubmit={this.onPlayerSubmit}/>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));