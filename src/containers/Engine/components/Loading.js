import React from 'react';
import styled, { keyframes } from 'styled-components';

import GlyphAndText from '../../Game/components/GlyphAndText'

import colors from 'globals/colors'

const AppContainer = styled.div`
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column;
`

const showButton = keyframes`
  from: { opacity: 0; }
  to: { opacity: 1; }
`

const Continue = styled.div`
  border: 1px solid ${colors.textGreen};
  border-radius: 15px;
  padding: 5px;
  font-size: 20px;
  align-self: flex-end;
  margin-right: 20px;
  animation: ${showButton} 1s linear forwards;
`

const Intro = styled.div`
  color: white;
  width: 800px;
  font-size: 20px;
  margin-top: 75px;
  margin-bottom: 100px;
  font-family: "myrad";
  letter-spacing: 1px;
`

const Text = styled.div`
  color: gray;
  margin-top: 10px;
  font-family: "myrad";
  font-size: 20px;
`

export default class Loading extends React.Component {
  state = {
    text: 'Loading'
  }

  componentDidMount() {
    this.interval = setInterval(this.createRandomString, 100)
  }

  randomLetter = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    return letters.charAt(Math.floor(Math.random() * letters.length))
  }

  createRandomString = () => {
    const textArray = this.state.text.split('')
    const indexToChange = Math.floor(Math.random()*textArray.length)
    textArray[indexToChange] = this.randomLetter()
    this.setState({ text: textArray.join('') })
  }

  componentWillUnmount() {
    clearTimeout(this.interval)
  }

  render() {
    return (
      <AppContainer>
        <GlyphAndText text={this.state.text} size='40px' />
        <Text>(Loading)</Text>
        <Intro>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacus libero, luctus vel dignissim nec, accumsan et orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent et mi laoreet, ornare mi quis, consectetur risus. In id velit ut enim pharetra commodo. Proin vel lectus felis. Fusce iaculis dolor gravida pretium molestie. Nullam ac semper lectus. 
        </Intro>
        {
          (this.props.loading === false) &&
            <Continue onClick={this.props.handleClick}>
              <GlyphAndText text='(Continue)' size='20px' />
            </Continue>
        }
      </AppContainer>
    )
  }
}
