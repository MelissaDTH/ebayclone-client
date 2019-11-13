import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Home.css";


export default class Home extends Component {
  render () {
    return (
      <div className='home'>
        <h1 className='title'>Ebay clone</h1>
                <img
          className="banner"
          src="https://picsum.photos/seed/picsum/536/354" alt={'Home header'}
        />

        <main>
        <Link to="/advertisements">
            <button className="adv-page-button">
              <b>Buy a product</b>
            </button>
          </Link> {"   "}
          <Link to="/sellerform">
            <button className="ad-form-button">
              <b>Sell a product</b>
            </button>
          </Link>
          </main>
      </div>
    )
  }
}