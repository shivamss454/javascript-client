import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const PrivateLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <br />
      {children}
    </>
  );
};
export default PrivateLayout;
