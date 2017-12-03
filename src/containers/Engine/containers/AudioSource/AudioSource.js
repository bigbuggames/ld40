import React from 'react'
import { connect } from 'react-redux'
import { object, bool, func } from 'prop-types'

import { setupAudioSources } from './audioSourceActions'
import { isAudioEnabled } from './audioSourceSelectors'

import Loading from '../../components/Loading'

class AudioPlayer extends React.Component {
  static propTypes = {
    children: object,
    audioEnabled: bool,
    setupAudioSources: func
  }

  componentDidMount() {
    this.props.setupAudioSources()
  }

  render () {
    if (this.props.audioEnabled) {
      return this.props.children
    } else {
      return <Loading />
    }
  }
}

export default connect((state) => ({
  audioEnabled: isAudioEnabled(state)
}), {
  setupAudioSources
})(AudioPlayer)
