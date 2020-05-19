import React, { Fragment, useEffect } from 'react';
import NavBarIn from '../../components/NavBarIn/NavBarIn';
import { connect } from 'react-redux';
import { fetchUserAC } from '../../redux/action-creator';

const MainPage = (props) => {

  const fetchData = async () => {
    await props.fetchUser();
  }

  useEffect(() => {
    if (!props.user) {
     fetchData();
    }
  }, [props.user])

  return (
    <Fragment>
      <NavBarIn />
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchUser: (user) => dispatch(fetchUserAC(user)),
});

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
