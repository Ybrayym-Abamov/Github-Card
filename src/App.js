import React, { Component } from 'react';
import './App.css';
import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const GITHUB_USER_INFO = "https://api.github.com/users/Ybrayym-Abamov";
class App extends Component {
  // constructor(props) {
  //   super(props); // calling Component constructor 
  //   this.state = {
  //     user: {},                           ----------------> old way
  //     active: false
  //   };
  // }

  state = {
    user: {},
    active: false
  };
  handleToggle = event => {
    if (this.state.active === true) {
      this.setState({ active: false })
    } 
    else {
    fetch(GITHUB_USER_INFO)
      .then(res => res.json())
      .then(user => {
        this.setState({ user, active: true })
      });
    console.log(this.state.user)
    }
    // need more logic
    // the DOM doesn't know what "this" is
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleToggle}>My GitHub Info</button>
        {this.state.active === true && (
        <Card>
          <Image src={this.state.user.avatar_url} wrapped ui={false} />
        <Card.Content>
      <Card.Header>{this.state.user.login.split("-").join(' ')}</Card.Header>
      <Card.Meta>
        <span className='date'>Company = {this.state.user.company}</span>
      </Card.Meta>
      <Card.Description>
        My bio:<div>{this.state.user.bio}</div>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={this.state.user.followers_url}>
        <Icon name='user'/>
        {this.state.user.followers} people are following
      </a>
    </Card.Content>
          {/* // < div >
          //   <h3>Username = {this.state.user.login}</h3>
          //   <h4>Bio = {this.state.user.bio}</h4>
          //   <h4>Followers = {this.state.user.followers}</h4>
          //   <h4>Location = {this.state.user.location}</h4>
          //   <h4>Company = {this.state.user.company}</h4>
          // </div> */}
        </Card>
        )
        }
  </React.Fragment>
    )
  }
}


export default App;


// https://gitlab.com/Ybrayym/GitHub-Card  ---------> URL
