import React from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
 import List from '../List';
 

class AddEditForm extends React.Component {
  state = {
    id: '',
    name: '',
    age: '',
    email: '',
  }
  componentWillMount(){
    console.log(this.props.location.state.data.name)
  }
  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  submitFormEdit = e => {
    // e.preventDefault()
    fetch('http://localhost:5000/updateUser/',{
      method: 'post ',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        age:  this.state.age
    })
  })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      var { id,  email, age } = this.props.data
      this.setState({ id,  email, age })
    }
  }

  render() {
    return (
        <form className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Update Form</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  value={this.props.location.state.data.name}
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  value={this.props.location.state.data.email}
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Age</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="age"
                  id="age"
                  value={this.props.location.state.data.age}
                  onChange={this.onAgeChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </main>
      </form>
    );
  }
}

export default AddEditForm