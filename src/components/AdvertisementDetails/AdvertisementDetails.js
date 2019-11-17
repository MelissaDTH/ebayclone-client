import React, { Fragment } from "react";
import SellerForm from "../SellerForm/SellerForm";

export default function advertisementDetails(props) {
  // const { toggleEdit, editMode } = props
  // if (!props.advertisement) return <h3>Loading...</h3>;

  if (props.editMode) {
    return (
      <Fragment>
        <SellerForm
          title={props.advertisement.title}
          date={props.advertisement.description}
          url={props.advertisement.url}
          onChange={props.onChange}
          onSubmit={props.onSubmit}
        />
        <button onClick={props.toggleEdit}>Edit</button>
      </Fragment>
    );
  }
  return (
    <div>
      <h1>{props.advertisement.title}</h1>
      <i>{props.advertisement.description}</i>
      <p>
        € {props.advertisement.price}
        <br />
        <br />
        Seller's phone number: +{props.advertisement.phonenumber}
      </p>
      <img src={props.advertisement.url} alt={props.advertisement.title} />
      <br />
      <button onClick={props.onDelete}>DELETE PRODUCT</button>
      <button onClick={props.toggleEdit}>EDIT PRODUCT</button>
    </div>
  );
}
