import React from 'react'
import { connect } from 'react-redux'
import { object, bool, func } from 'prop-types'

import { loadAssets } from './assetLoaderActions'
import { isLoadingAssets } from './assetLoaderSelectors'

import Loading from '../../components/Loading'

class AssetLoader extends React.Component {
  static propTypes = {
    children: object,
    loading: bool,
    loadAssets: func
  }

  componentDidMount() {
    this.props.loadAssets()
  }

  render () {
    if (this.props.loading) {
      return <Loading />
    } else {
      return this.props.children
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: isLoadingAssets(state)
  }
}

export default connect(mapStateToProps, {
  loadAssets
})(AssetLoader)
