import React, { Component } from 'react';
// import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: []
    };
  }

  // $.ajax({
  //   url: "test.html",
  //   cache: false
  // })
  //   .done(function( html ) {
  //     $( "#results" ).append( html );
  //   });
  // componentDidMount() {
  //   fetch('/api/users')
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         this.setState({
  //           isLoaded: true,
  //           users: result.users
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       error => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     );
  // }

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {users.map(user => (
            <li key={user.name}>
              {user.name} {user.id}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default App;
