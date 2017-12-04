import React from 'react'
import { connect } from 'react-redux'
import { object, bool, func } from 'prop-types'

import { loadAssets } from './assetLoaderActions'
import { 
  isLoadingAssets,
} from './assetLoaderSelectors'

import Loading from '../../components/Loading'

class AssetLoader extends React.Component {
  static propTypes = {
    children: object,
    loading: bool,
    loadAssets: func
  }

  state = {
    continue: false
  }

  componentDidMount() {
    this.props.loadAssets()
  }

  handleLoadingDone = () => {
    this.setState({ continue: true })
  }

  render () {
    const { loading } = this.props

    if (this.state.continue === false) {
      return <Loading handleClick={this.handleLoadingDone} />
    } else {
      return this.props.children
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: isLoadingAssets(state),
  }
}

export default connect(mapStateToProps, {
  loadAssets
})(AssetLoader)
