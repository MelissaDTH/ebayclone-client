import React, { Fragment } from "react";
import SellerForm from "../SellerForm/SellerForm";

export default function advertisementDetails(props) {
  const {
    state,
    advertisement,
    onDelete,
    toggleEdit,
    onChange,
    onSubmit,
  } = props


  if (!props.advertisement) return <h3>Loading...</h3>;

  if (state.editMode) {
    const { title, description, price, phonenumber, url, email } = state

    return (
      <Fragment>
        <SellerForm
          title={title}
          description={description}
          url={url}
          price={price}
          phonenumber={phonenumber}
          email={email}
          onChange={onChange}
          onSubmit={onSubmit}
        />
        <button onClick={toggleEdit}>Edit</button>
      </Fragment>
    );
  }

  const { title, description, price, phonenumber, url } = advertisement

  return (
    <div>
      <h1>{title}</h1>
      <i>{description}</i>
      <p>
        € {price}
        <br />
        <br />
        Seller's phone number: +{phonenumber}
      </p>
      <img src={url} alt={title} />
      <br />
      <button onClick={onDelete}>DELETE PRODUCT</button>
      <button onClick={toggleEdit}>EDIT PRODUCT</button>
    </div>
  );
}
