import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'

import { removeLastChar, isValidChar } from 'utils/formatting'
import { tryAnswer, setAnswer, clearAnswer } from './translatorActions'
import { getAnswer } from './translatorSelectors'
import { getCurrentLevel, getGrammar, getDictionary, isPreping } from '../Shop/shopSelectors'
import { isOverlayEnabled } from '../../../Engine/containers/Overlay/overlaySelectors'
import { playSound } from 'engine/actions'

import colors from 'globals/colors'
import Glyph from 'components/Glyph'

import tablet from 'images/tablet.png'
import soundIcon from 'images/sound.png'
import { nextLevel } from '../Shop/shopActions';

const Tablet = styled.div`
  position: relative;
  margin-left: 50px;
  z-index: -1;
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
  color: ${colors.textBlue};
  font-family: "myrad";
  font-size: 20px;
`

const TextToSpeech = styled.div`
  width: 450px;
  height: 110px;
  color: ${colors.textGreen};
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
  flex-wrap: wrap;
`

const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  font-family: "myrad";
`

const buttonFeedback = keyframes`
  0% { background-color: ${colors.textGreen} }
  50% { background-color: ${colors.red} }
  100% { background-color: ${colors.textGreen} }
`

const SoundButton = styled.div`
  background-color: ${colors.textGreen};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-right: 10px;
  padding: 10px;
  animation: ${buttonFeedback} ${(props) => props.feedback ? '300ms' : '0ms'};
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
  color: ${colors.textYellow};
  font-family: "myrad";
  font-size: 14px;
`

const Word = styled.li`
  list-style-type: none;
  margin-top: 5px;
  color:${colors.textYellow};
  font-family: "myrad";
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
    } else if (isValidChar(char) && this.props.preping === false) {
      this.props.setAnswer(this.props.answer + char.toLowerCase())

    // If is an enter we can submit the response
    } else if (charCode === 13) {
      // const soundButton = getElementById('soundButton')
      this.submitAnswer()
    }
  }

  componentDidMount() {
    document.onkeydown = this.handleKeyPress;
  }

  // We disable the user input when there's an overlay opened
  componentWillReceiveProps(nextProps) {
    if (nextProps.overlay) {
      document.onkeydown = () => {};
    } else {
      document.onkeydown = this.handleKeyPress;
    }
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
          <SoundButton id='soundButton' onClick={this.submitAnswer}>
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
  dictionary: getDictionary(state),
  overlay: isOverlayEnabled(state),
  preping: isPreping(state)
}), {
  setAnswer,
  clearAnswer,
  tryAnswer,
  playSound
})(Translator)
