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
  border: 2px solid ${colors.textGreen};
  border-radius: 15px;
  padding: 5px;
  font-size: 20px;
  align-self: flex-end;
  animation: ${showButton} 1s linear forwards;
`

const Intro = styled.div`
  color: white;
  width: 800px;
  font-size: 20px;
  margin-top: 75px;
  margin-bottom: 70px;
  font-family: "myrad";
  letter-spacing: 1px;
  text-align: justify;
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
          <p>Right after being awoken in the future, Steve and Sam, two workers from the <nobr>Cryo-company</nobr> ask you to go and get some food at the takeaway, cool huh?</p>
          <p>English has changed quite a bit in the last 1000 years, this software is the closest thing there is to make yourself more understandable, but you'll still have to think things through. Make use of the “notes” and write the correct form of the sentence asked.</p> 
        </Intro>
        {
          (this.props.loading === false) &&
            <Continue onClick={this.props.handleClick}>
              <GlyphAndText text='(Continue)' size='21px' />
            </Continue>
        }
      </AppContainer>
    )
  }
}
