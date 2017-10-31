import React from 'react';

import './App.css';
import data from './data';
import Contact from './Contact';

class App extends React.Component {

  componentWillMount() {
    this.setState({
        Contacts: data
    });
  }  

  addContact = (e) => {
    e.preventDefault();
    let contacts = this.state.Contacts;
    if(this.refs.name.value !== "") {
      let newId = contacts[contacts.length -1].id + 1;
      let newContact = {
        id: newId,
        name: this.refs.name.value,
        email: this.refs.email.value
      }
      contacts.push(newContact);
      this.setState({ Contacts: contacts });
      this.refs.name.value = "";
      this.refs.email.value = "";
    }   
  }

  newContact = () => 
    <div className="pure-g">
      <div className="pure-u-12-24">
        <form className="pure-form" onSubmit={this.addContact}>
          <fieldset >
              <legend>New Contact</legend>

              <input type="email" ref="email" placeholder="example@example.com"/>
              <input type="text" ref="name" placeholder="name"/>

              <button type="submit" className="pure-button pure-button-primary">Add</button>
          </fieldset>
        </form>
      </div>
    </div>

  render() {
    return (
      <div id="App">
        {this.newContact()}
        <div className="pure-g">
          {this.state.Contacts.map(
            info => <Contact key={info.id} {...info}/> 
          )}
        
        </div>
      </div>      
    );
  }
}

export default App;
