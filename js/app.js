/*jshint esversion: 6 */

class Users extends React.Component {

  render() {
/*    var data = this.state.users;
    var userData;

    userData = data.map((item, index) => {
      let img = 'http://dev.drupal-coder.ru' + decodeURIComponent(item.user_picture);

      return (
        <div className="user-item" key={index}>
          <div>{item.uid}</div>
          <img className="img" src={img} />
        </div>
      );
    });*/

    console.log(this.state.users);

    return (
      <div>
        
      </div>
    );
  }
}


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
 
  componentDidMount() {
    this.serverRequest = axios.get(this.props.source).then(user => {      
      this.setState({
        users: user.data
      });
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }
 
  render() {

    return (
      <div className="users">
        <Users />
      </div>
    );
  }
}


ReactDOM.render(
  <App source="http://dev.drupal-coder.ru/api/users" />,
  document.getElementById('root')
);