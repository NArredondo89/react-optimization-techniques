import React from 'react';

const DemoOutput = (props) => {
  console.log('Demo Output');
  return <p>{props.show ? 'this is new' : ''}</p>;
};

export default DemoOutput;
