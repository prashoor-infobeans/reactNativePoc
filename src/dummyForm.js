import React, { Component } from 'react';
class DummyForm extends Component {
  constructor() {
    super();
    this.state = { user: {} };
    this.onSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    console.log(self.refs.name)
    // On submit of the form, send a POST request with the data to the server.
//    fetch('http://rohit.corporatesitepoc.com/index.php/wp-json/dummyForm/update', { 
//        method: 'POST',
//        data:JSON.stringify({
//            name: self.refs.name,
//            job: self.refs.job
//        })
//      })
//      .then(function(body) {
//        console.log(body);
//      });
    fetch('http://rohit.corporatesitepoc.com/index.php/wp-json/dummyForm/update', {
	method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
	body: JSON.stringify({
		email: document.getElementById('name').value,
		answer: document.getElementById('job').value
	})
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Name" id="name"/>
        <input type="text" placeholder="Job" id="job"/>
        <input type="submit" />
      </form>
    );
  }
}
export default DummyForm;