import React from 'react'
import {connect} from 'react-redux'
import AdvertisementDetails from './AdvertisementDetails'
import {loadAdvertisement, updateAdvertisement, deleteAdvertisement} from '../../actions/advertisements'

class AdvertisementDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadAdvertisement(Number(this.props.match.params.id))
  }

  onDelete = () => {
    this.props.deleteAdvertisement(this.props.advertisement.id)
    this.props.history.push('/advertisements')
  }

  render() {
    // console.log("this.props.advertisement", this.props.advertisement);
    
    return <AdvertisementDetails 
    advertisement={this.props.advertisement}
    onDelete={this.onDelete} />
  }
}

const mapStateToProps = state => {
  // console.log('state?', state, 'state ads?', state.advertisement)
  return {
    advertisement: state.advertisement,
    onDelete: state.onDelete
  }
}

const mapDispatchToProps = {loadAdvertisement, deleteAdvertisement}
export default connect(mapStateToProps, mapDispatchToProps)(AdvertisementDetailsContainer)