import React from "react";
import { Link } from "react-router-dom";
import './AdvertisementsList.css'

export default function AdvertisementsList(props) {
  // console.log("props advertisements?", props.advertisements);
  return (
    <div className='ad-list'>
      <main>
      <h1 className='title'>Advertisements</h1>
      </main>
      <ul>
        {/* {console.table(props.advertisements)} */}
        {!props.advertisements.length
          ? "Loading..."
          : props.advertisements.map(advertisement => (
              <li className='list' key={advertisement.id}>
                <Link
                  className="link"
                  to={`/advertisements/${advertisement.id}`}
                >{advertisement.title}
                </Link>
                <img src={advertisement.url} alt={advertisement.title} />
                <br />
                € {advertisement.price}
                <br />
                <br />{" "}
              </li>
            ))}
      </ul>
    </div>
  );
}
