import React, { Fragment } from 'react';
import Container from './Container';
import Header from './Header';

const TheLayout = () => {
  return (
    <Fragment>
        <Header />
        <Container />
    </Fragment>
  );
};

export default TheLayout;
