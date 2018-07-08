import React, { Component } from 'react'
import '../css/Home.css'
import RowsWidget from './RowsWidget'
import styled from "styled-components"

const Title = styled.h2`
  text-align: center;
  color: #b2bab7;
`;

const Description = styled.h4`
  color: #b2bab7;
  margin-top: -0.5em
  text-align: center;
`;

class Home extends Component {
  render() {
    return (
      <RowsWidget>
        <Title>TBD App</Title>
        <Description>App soon...</Description>
      </RowsWidget>
    );
  }
}

export default Home;
