import React from "react";
import { connect } from "react-redux";
import { createAdvertisement } from "../../actions/advertisements";
import SellerForm from "./SellerForm";

class CreateFormContainer extends React.Component {
  state = {
    title: "",
    url: ""
  };
// In a controlled component setting, any <input> contains an onChange property with a callback. This callback usually updates some sort of state (component state or Redux state). The callback is also a good place to do validations.
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
// onSubmit callback to call when the form is submitted. When that happens, we prevent any 'classic' submitting (which usually means a refresh) and reset the form state. We then dispatch an action to create a new image.
  onSubmit = event => {
    event.preventDefault();

    this.props.createAdvertisement(this.state);

    this.setState({
      title: "",
      url: ""
    });
  };

  render() {
    return (
      <SellerForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { createAdvertisement } )(CreateFormContainer);
