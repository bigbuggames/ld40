import React from 'react'
import propTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import glyphs from 'globals/glyphs'

export default class Glyph extends React.PureComponent {
  render() {
    return <img width={this.props.size || '12px'} src={glyphs[this.props.char]} />
  }
}
