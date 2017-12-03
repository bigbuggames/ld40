import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'

import { removeLastChar, isValidChar } from 'utils/formatting'
import { tryAnswer } from './translatorActions'

import Glyph from './components/Glyph'

const TextToSpeech = styled.div`
  width: 800px;
  height: auto;
  color: white;
  border: 2px solid white;
  border-radius: 10px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Translations = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`

const GlyphOuput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: auto;
`

const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
`

const Button = styled.div`
  color: white;
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 10px;
  margin: 20px;
  z-index: 99;
`

class Translator extends React.Component {

  state = {
    text: ''
  }

  handleKeyPress = (evt) => {
    evt = evt || window.event
    const charCode = evt.keyCode || evt.which
    const char = String.fromCharCode(charCode)

    // if it is the delete or backspace keys
    if (charCode === 8 || charCode === 46) {
      this.setState({ text: removeLastChar(this.state.text) })

    // If is an english alphabet letter or a space key
    } else if (isValidChar(char)) {
      this.setState({ text: this.state.text + char })

    // If is an enter we can submit the response
    } else if (charCode === 13) {
      this.submitAnswer(this.state.text)
    }

  }

  componentDidMount() {
    document.onkeydown = this.handleKeyPress;
  }

  submitAnswer = () => {
    this.props.tryAnswer()
  }

  render() {
    const { text } = this.state
    const textChars = text.toLowerCase().split('')
    return (
      <div>
        <TextToSpeech>
          <Translations>
            <GlyphOuput>
              {
                textChars.map((char, i) => {
                  if (char === ' ') { char = 'space' }
                  return <Glyph key={i} char={char} />
                })
              }
            </GlyphOuput>
            <Input>{this.state.text}</Input>
          </Translations>
          <Button onClick={this.submitAnswer}>SPEAK</Button>
        </TextToSpeech>
      </div>
    )
  }
}

export default connect(null, { tryAnswer })(Translator)
