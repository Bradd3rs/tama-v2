import React, { Component } from 'react';
import styled from 'styled-components';
import Pet from './components/Pet';
import Controlls from './components/Controlls';
import Details from './components/Details';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {

    }

    this.feed = this.feed.bind(this);
    this.clean = this.clean.bind(this);
  }

  componentDidMount() {
    this.setState(() => (
      { 
        age: 1 ,
        hunger: 10
      }
    ))
  }

  feed() {
    console.log('feed');
  }

  clean() {
    console.log('clean');
  }

  render() {
    return (
      <Container>
        <Details age={this.state.age} hunger={this.state.hunger} />
        <Pet/>
        <Controlls feed={this.feed} clean={this.clean} />
      </Container>
    );
  }
}

export default App;


const Container = styled.section`
  margin: auto;
  padding: 10px;
  text-align: center;
`;