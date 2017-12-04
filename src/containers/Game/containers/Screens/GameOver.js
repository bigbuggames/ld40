import React from 'react'
import styled, { keyframes } from 'styled-components'

import GlyphAndText from '../../components/GlyphAndText'

export default class GameOver extends React.Component {
  render() {
    return <GlyphAndText text='Game Over' displayEnglish={true} />
  }
}
