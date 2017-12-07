import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

import Glyph from 'components/Glyph'

/*
const Translations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const GlyphOuput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
`
*/

const Translations = styled.div`

`

const GlyphOuput = styled.div`
  display: flex;
  align-items: center;
`

const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  font-family: "myrad";
  padding-top: 25px;
  color: white;
`

export default class GlyphAndText extends React.PureComponent {
  static propTypes = {
    text: propTypes.string,
    displayEnglish: propTypes.bool
  }
  render() {
    const { text, displayEnglish } = this.props
    const formattedText = text.toLowerCase()
    return (
      <Translations>
        <GlyphOuput>
        {
           formattedText.split('').map((char, i) => {
            if (char === ' ') { char = 'space' }
            return <Glyph key={i} char={char} size={this.props.size} />
          })
        }
        </GlyphOuput>
        {
          (displayEnglish) && <Input>{text}</Input>
        }
      </Translations>
    )
  }
}
