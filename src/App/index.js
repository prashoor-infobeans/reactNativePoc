import React, { Component } from 'react';
import Post from '../Post';
import Content from '../Content';
import Base from './base';

class App extends React.Component {
   render() {
      return (
         <Base>
            <Post/>
            <Content/>
         </Base>
      );
   }
}

export default App;