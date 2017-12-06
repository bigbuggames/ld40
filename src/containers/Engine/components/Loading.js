import React from 'react';
import styled, { keyframes } from 'styled-components';

import GlyphAndText from '../../Game/components/GlyphAndText'

import colors from 'globals/colors'
import animations from 'globals/animations'


const LoadingFrame = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingContent = styled.div`
  position: relative;
  font-size: 1.5em;
  margin: 0 40px;
  width: 800px;
  min-width: 500px;
  height: 480px;
`

const Title = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`

const Text = styled.div`
  color: gray;
  margin-top: 10px;
  font-family: "myrad";
  font-size: 20px;
  animation: ${(props) => (props.loaded) && `${animations.fadeOut} 1s forwards`};
`

const Intro = styled.div`
  position: absolute;
  top: 165px;
  font-size: 20px;
  font-family: "myrad";
  color: ${colors.white};
  letter-spacing: 1px;
  text-align: justify;
`

const Continue = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 220px;
  height: 50px;
  border: 2px solid ${colors.textGreen};
  border-radius: 15px;
  padding: 5px;
  font-size: 20px;
  align-self: flex-end;
  opacity: 0;
  animation: 
    ${animations.pulse} 1s ease-in-out infinite, 
    ${animations.fadeIn} 1s forwards;
`

export default class Loading extends React.Component {
  state = {
    text: 'Loading'
  }

  componentDidMount() {
    this.interval = setInterval(this.createRandomString, 250)
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
      <LoadingFrame>
        <LoadingContent>
          {
            <Title>
              <div>
                {
                  (this.props.loading === false)
                    ? <GlyphAndText text='Loading' size='40px' />
                    : <GlyphAndText text={this.state.text} size='40px' /> 
                }
                <Text loaded={!this.props.loading}>(Loading)</Text>
              </div>
            </Title>
          }
          <Intro>
            <p>Right after being awoken in the future, a worker from the <nobr>Cryo-company</nobr> ask you to go and get some food at the takeaway, cool huh?</p>
            <p>English has changed quite a bit in the last 1000 years, this software is the closest thing there is to make yourself more understandable, but you'll still have to think things through. Make use of the “notes” and write the correct form of the sentence asked.</p> 
          </Intro>
          {
            (this.props.loading === false) &&
              <Continue onClick={this.props.handleClick}>
                <GlyphAndText text='(Continue)' size='21px' />
              </Continue>
          }
        </LoadingContent>
      </LoadingFrame>
    )
  }
}
