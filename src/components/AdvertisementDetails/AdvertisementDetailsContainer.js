import React from 'react'
import {connect} from 'react-redux'
import AdvertisementDetails from './AdvertisementDetails'
import {loadAdvertisement, updateEvent, deleteEvent} from '../../actions/advertisements'

class AdvertisementDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadAdvertisement(Number(this.props.match.params.id))
  }

  render() {
    console.log("this.props.advertisement", this.props.advertisement);
    
    return <AdvertisementDetails advertisement={this.props.advertisement} />
  }
}

const mapStateToProps = state => {
  console.log('state?', state, 'state ads?', state.advertisement)
  return {
    advertisement: state.advertisement
  };
};
export default connect(mapStateToProps, {loadAdvertisement})(AdvertisementDetailsContainer)