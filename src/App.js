import React, { Component } from 'react';
import About from './components/About/About';
import Speaker from './components/Speaker/Speaker';
class App extends Component {
  render() {
    return (
      <div class="container">
        <About />
        <Speaker />
      </div>
    );
  }
}
 
export default App;