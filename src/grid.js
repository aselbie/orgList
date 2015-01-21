var Grid = React.createClass({

  getInitialState: function() {
    return {
      users: []
    }
  },

  componentDidMount: function() {
    $.get('https://api.github.com/orgs/' + this.props.org + '/public_members', function(data){
      this.setState({
        users: data
      })
    }.bind(this));
  },

  render: function() {
    var users = this.state.users.map(function(user) {
      return <Block src={user.avatar_url} caption={user.login} />
    });

    return (
      <ul className='large-block-grid-12 medium-block-grid-6 small-block-grid-3 xs-block-grid-1'>
        {users}
      </ul>
    )
  }
});

React.render(<Grid org="hackreactor" />, document.body);