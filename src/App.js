import React from 'react';
import './App.css';

import Message from './components/Message';
import EditableUser from './components/EditableUser';

const BASE_URL = 'https://api.github.com/users';
class App extends React.Component {
  state = {
    users: [],              
    isLoading: true,        //Flag for loading
    isFailedToLoad: false,  //Flag for Error
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(users => {
        //Taking from our response the properies that we want
        const processedUsers = users.map(user => ({
          id: user.id,
          avatar: user.avatar_url,
          login: user.login,
          url: user.html_url
        }))

        //And putting it in our state
        this.setState({
          users: processedUsers,
          isLoading: false       //Loading is no longer needed 
        });
      })
      .catch((e) => {
        this.setState({
          isLoading: false,
          isFailedToLoad: true   
        })
      })
  }

  //Save all users, instead of the chosen one which will be identified by it's ID
  onUserDelete = id => {
    this.setState({ users: this.state.users.filter(user => user.id !== id)});
  }

  //Here we recieving the updated user through form 
  handleFormSubmit = updatedUser => {
    const { users } = this.state;

    //Copying all users into new array
    //And when we find the user that was changed
    //We inserting the updated one into array
    const updatedUsers = users.map(user => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
    
    //And updating the state with new ones
    this.setState({users: updatedUsers});
  }

  render() {
    const { users, isLoading, isFailedToLoad } = this.state;

    //If data is not ready yet display content for loading
    if (isLoading) return <Message text='Loading...' />

    //If data was failed to be loaded display content for error
    if (isFailedToLoad) return <Message text='Error' />

    return (
      <div className="App">
        <h1>GITHUB FOLKS</h1>
        <div className="UsersContainer">
          {
            users.map(user => (
              <EditableUser 
                key={user.id} 
                user={user} 
                handleFormSubmit={this.handleFormSubmit}
                onUserDelete={this.onUserDelete}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
