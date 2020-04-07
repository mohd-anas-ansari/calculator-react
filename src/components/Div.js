import React from 'react';

import Inputs from './Inputs'
import Equals from "./Equals";


class Div extends React.Component {
  state = {  }
  render() { 
    return ( 
      <>
      <h1>Welcome to Divide Page</h1>
        <Inputs />
        <Equals />
      </>
     );
        
  }
}
 
export default Div;