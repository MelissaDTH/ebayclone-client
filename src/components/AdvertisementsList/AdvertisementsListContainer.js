import React from 'react'
import {loadAdvertisements} from '../../actions/advertisements'
import {connect} from 'react-redux'
import AdvertisementsList from './AdvertisementsList'

class AdvertisementsListContainer extends React.Component {
  componentDidMount() {
      // console.log('Component mounts?', this.props.loadAdvertisements());
      
    this.props.loadAdvertisements()
  }

  render() {
    return <AdvertisementsList advertisements={this.props.advertisements} />
  }
}

const mapStateToProps = state => ({
  advertisements: state.advertisements
})

export default connect(mapStateToProps, {loadAdvertisements})(AdvertisementsListContainer)