import React from 'react';

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
    let newId = contacts[contacts.length -1].id + 1;
    let newContact = {
      id: newId,
      name: `New Contact ${newId}`,
      email: `${newId}@example.com`
    }
    contacts.push(newContact);
    this.setState({ Contacts: contacts });
  }

  render() {
    return (
      <div id="App">
        <a href="#" className="pure-button" onClick={this.addContact}>Add Contact</a>
        <div className="pure-g">
          {/* {data.map(
            info => <Contact name={info.name} email={info.email}/> 
          )} */} 
          { 
            // above and below gives the same output 
          }
          {this.state.Contacts.map(
            info => <Contact key={info.id} {...info}/> 
          )}
        
        </div>
      </div>      
    );
  }
}

export default App;
