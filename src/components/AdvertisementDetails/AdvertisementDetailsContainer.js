import React from "react";
import { connect } from "react-redux";
import AdvertisementDetails from "./AdvertisementDetails";
import {
  loadAdvertisement,
  updateAdvertisement,
  deleteAdvertisement
} from "../../actions/advertisements";

class AdvertisementDetailsContainer extends React.Component {
  state = {
    editMode: false,
    title: "",
    description: "",
    url: "",
    price: "",
    phonenumber: "",
    email: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const { title, description, url, price, email, phonenumber } = this.state;
    this.props.updateAdvertisement(this.props.advertisement.id, {
      title,
      description,
      url,
      price,
      email,
      phonenumber
    });

    this.setState({
      title: "",
      description: "",
      url: "",
      price: "",
      phonenumber: "",
      email: ""
    });

    this.toggleEdit();
  };

  componentDidMount() {
    // console.log("state?", this.state);
    this.props.loadAdvertisement(Number(this.props.match.params.id));
  }

  onDelete = () => {
    this.props.deleteAdvertisement(this.props.advertisement.id);
    this.props.history.push("/advertisements");
  };

  toggleEdit = () => {
    const {
      title,
      description,
      url,
      price,
      email,
      phonenumber
    } = this.props.advertisement;
    // console.log("edit mode ", this.state.editMode);
    this.setState({
      editMode: !this.state.editMode,
      title,
      description,
      url,
      price,
      email,
      phonenumber
    });
  };

  render() {
    // console.log("this.props.advertisement", this.props.advertisement);
    // const advertisement = this.state.editMode
    //   ? {
    //       title: this.state.title,
    //       description: this.state.description,
    //       url: this.state.url
    //     }
    //   : this.props.advertisement;

    return (
      <AdvertisementDetails
        state={this.state}
        advertisement={this.props.advertisement}
        onDelete={this.onDelete}
        toggleEdit={this.toggleEdit}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  // console.log('state?', state, 'state ads?', state.advertisement)
  return {
    advertisement: state.advertisement
    // onDelete: state.onDelete
  };
};

const mapDispatchToProps = {
  loadAdvertisement,
  updateAdvertisement,
  deleteAdvertisement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvertisementDetailsContainer);
