import React from 'react'

export default function advertisementDetails(props) {
    return (
        <div>
            <h2>Details of the product</h2>    
            {console.log('logging props.advertisement', props.advertisement)}
                   
            {!props.advertisement ? "Loading..." : (
                <div>
                    <h1>{props.advertisement.title}</h1>
                    <i>{props.advertisement.description}</i>
                    <p>{props.advertisement.price}
                    {props.advertisement.phonenumber}</p>
                    <img src={props.advertisement.url} alt={props.advertisement.title} />
                </div>
            )}
        </div>
    )
}