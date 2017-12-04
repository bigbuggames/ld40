import React, { cloneElement } from 'react'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'

import { 
  isOverlayEnabled, 
  getOverlayContent, 
  disableFade,
  getAlpha
} from './overlaySelectors'

import colors from 'globals/colors'
const alpha = 0.6;

const Anchor = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const fadeIn = keyframes`
  from { filter: opacity(0) }
  to { filter: opacity(${alpha}) }
`

const fadeOut = keyframes`
  from { filter: opacity(${alpha}) }
  to { filter: opacity(0) }
`

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: opacity(${alpha});
  background-color: ${colors.background};
  animation-name: ${(props) => props.fade};
  animation-duration: ${(props) => (props.instant) ? '0ms' : '250ms'};
  animation-direction: forwards;
`

const ContentPanel = styled.div`
  position: relative;
  color: white;
  z-index: 10;
`

class Overlay extends React.Component {
  render() {
    const { enabled, content, fadeDisabled, alpha } = this.props

    const Content = this.props.content;

    if (enabled === false) { return null }

    const fadeAnimation = (enabled) ? fadeIn : fadeOut

    return (
      <Anchor>
        <Background fade={fadeAnimation} instant={fadeDisabled} />
        {
          (content) && <ContentPanel><Content /></ContentPanel>
        }
      </Anchor>
    )
  }
}

export default connect((state) => ({
  enabled: isOverlayEnabled(state),
  fadeDisabled: disableFade(state),
  content: getOverlayContent(state),
  alpha: getAlpha(state)
}), null)(Overlay)
