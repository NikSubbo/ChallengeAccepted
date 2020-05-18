import React, { Component } from 'react';
import SignupForm from '../../../components/AuthForms/SignupForm/SignupForm';
// import { connect } from 'react-redux';

class Signup extends Component {
  render() {
    return (
      <div>
        <SignupForm/>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

export default Signup
// export default connect(mapStateToProps, mapDispatchToProps)(Signup)
