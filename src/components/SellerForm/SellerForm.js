import React from "react";

export default function SellerForm(props) {
    return (
      <div className='form'>
        <form onSubmit={props.onSubmit}>
        <h3 className='title'>Start selling here</h3>
        <br />
        <br />
        <label>title: </label>
        <input type='text' value={props.title} name="title" onChange={props.onChange} />
        <br />
        <br />
        <label>description: </label>
        <input type='text' value={props.description} name="description" onChange={props.onChange} />
        <br />
        <br />
        <label>url: </label>
        <input type='text' value={props.url} name="url" onChange={props.onChange} />
        <br />
        <br />
        <label>price: </label>
        <input type='number' value={props.price} name="price" onChange={props.onChange} />
        <br />
        <br />
        <label>email: </label>
        <input type='text' value={props.email} name="email" onChange={props.onChange} />
        <br />
        <br />
        <label>phone number: </label>
        <input type='number' value={props.phonenumber} name="phonenumber" onChange={props.onChange} />
        <br />
        <br />
        <button type='submit'>add product</button>
      </form>
        </div>
    )
}