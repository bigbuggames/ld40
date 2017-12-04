import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { removeLastChar, isValidChar } from 'utils/formatting'
import { tryAnswer, setAnswer, clearAnswer } from './translatorActions'
import { getAnswer } from './translatorSelectors'
import { getCurrentLevel, getGrammar, getDictionary } from '../Shop/shopSelectors'

import Glyph from './components/Glyph'

import tablet from 'images/tablet.png'
import soundIcon from 'images/sound.png'

const Tablet = styled.div`
  position: relative;
  margin-left: 50px;
`

const ExactWords = styled.div`
  position: absolute;
  width: 450px;
  height:50px;
  top: 412px;
  left: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3F7F82;
  font-family: "myrad";
`

const TextToSpeech = styled.div`
  width: 450px;
  height: 110px;
  color: #547255;
  border-radius: 10px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 520px;
  left: 65px;
`

const Translations = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  justify-content: center;
  align-items: center;
  margin-left: 32px;
`

const GlyphOuput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  margin-bottom: 20px;  
`

const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  font-family: "myrad";
  padding-top: 10px;
`

const SoundButton = styled.div`
  background-color: #547255;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-right: 10px;
  padding: 10px;
`

const Grammar = styled.ul`
  position: absolute;
  top: 130px;
  left: 78px;
  width: 195px;
  height: 205px;
  list-style-type: circle;
  padding-left: 22px;
`

const Dictionary = styled.ul`
  position: absolute;
  top: 130px;
  left: 310px;
  width: 195px;
  height: 205px;
  padding-left: 25px;
`

const Rule = styled.li`
  list-style-type: circle;
  margin-top: 5px;
  color: #777146;
  font-family: "myrad";
  font-size: 14px;
`

const Word = styled.li`
  list-style-type: none;
  margin-top: 5px;
  color: #777146;
  font-family: "myrad";
  font-size: 12px;
`

class Translator extends React.Component {

  handleKeyPress = (evt) => {
    evt.preventDefault()
    evt = evt || window.event
    const charCode = evt.keyCode || evt.which
    const char = String.fromCharCode(charCode)

    // if it is the delete or backspace keys
    if (charCode === 8 || charCode === 46) {
      this.props.setAnswer(removeLastChar(this.props.answer))

    // If is an english alphabet letter or a space key
    } else if (isValidChar(char)) {
      this.props.setAnswer(this.props.answer + char.toLowerCase())

    // If is an enter we can submit the response
    } else if (charCode === 13) {
      this.submitAnswer()
    }
  }

  componentDidMount() {
    document.onkeydown = this.handleKeyPress;
  }

  submitAnswer = () => {
    this.props.tryAnswer(this.props.answer)
  }

  render() {
    const { answer, level } = this.props
    const textChars = answer.toLowerCase().split('')
    return (
      <Tablet>
        <img width='600px' src={tablet} />
        <Grammar>
          {this.props.grammar.map((rule, i) => {
            return <Rule key={i}>{rule}</Rule>
          })}
        </Grammar>
        <Dictionary>
          {this.props.dictionary.map((word, i) => {
            return <Word key={i}>{word}</Word>
          })}
        </Dictionary>
        <ExactWords>{level.exactWords}</ExactWords>
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
            <Input>{answer}</Input>
          </Translations>
          <SoundButton onClick={this.submitAnswer}>
            <img width='40px' src={soundIcon} />
          </SoundButton>
        </TextToSpeech>
      </Tablet>
    )
  }
}

export default connect((state) => ({
  answer: getAnswer(state),
  level: getCurrentLevel(state),
  grammar: getGrammar(state),
  dictionary: getDictionary(state)
}), {
  setAnswer,
  clearAnswer,
  tryAnswer 
})(Translator)
