import React, { Component } from 'react';
import LoginForm from '../../../components/AuthForms/LoginForm/LoginForm';
// import { connect } from 'react-redux'

class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm />
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

export default Login
// export default connect(mapStateToProps, mapDispatchToProps)(Login)
