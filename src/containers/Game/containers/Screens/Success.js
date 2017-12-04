import React from 'react'
import styled, { keyframes } from 'styled-components'

import GlyphAndText from '../../components/GlyphAndText'

export default class Success extends React.Component {
  render() {
    return (
      <GlyphAndText 
        size='40px' 
        text='YOU MADE IT!' 
        displayEnglish={true} 
      />
    )
  }
}
