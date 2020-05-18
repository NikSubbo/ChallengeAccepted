import React, { Fragment } from 'react';
import HomepageNavbar from '../../components/HomepageNavbar/HomepageNavbar';
import HomepageFooter from '../../components/HomepageFooter/HomepageFooter';
import HomepageVideo from '../../components/HomepageVideo/HomepageVideo';

const Homepage = () => {
  return (
    <Fragment>
      <HomepageNavbar />
      <HomepageVideo />
      <HomepageFooter />
    </Fragment>
  )
}

export default Homepage;
