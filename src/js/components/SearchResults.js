var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Result = require('./result.js');

var SearchResults = React.createClass({
	render: function(){
		if(this.props.searchText != ''){
			var results = (<h2 className="page-header">Results for {this.props.searchText}</h2>);
		}
		else{
			var results = '';
		}
		return(
			<div>
				{results}
				{
					this.props.results.map(function(ret,i){
						return <Result result={ret} key={i} />
					})
				}
			</div>
		);
	},

});

module.exports = SearchResults;