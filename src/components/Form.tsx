import React, { Component } from 'react'

type FormProps = {
  is: boolean
}

type FormState = {
  email: string
  name: string
  formErrors: { email: string; name: string }
  emailValid: boolean
  passwordValid: boolean
  formValid: boolean
}

export class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props)
    this.state = {
      email: '',
      name: '',
      formErrors: { email: '', name: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    }
  }

  render() {
    return (
      <form className="demoForm">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={this.state.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={this.state.name}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
        <div className="panel panel-default"></div>
      </form>
    )
  }
}
