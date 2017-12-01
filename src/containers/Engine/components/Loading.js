import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: tomato;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  text-align: center;  
`

export default class Loading extends React.PureComponent {
  render() {
    return (
      <AppContainer>
        Loading
      </AppContainer>
    )
  }
}
