import React from 'react'
import './Track.css';

function Track() {

  // TODO: renderAction function (27)
  
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>
          {/* <!-- track name will go here --> */}Track Information
        </h3>
        <p>
          {/* <!-- track artist will go here--> */} {/* <!-- track album will go here --> */}
          Artist | Album
        </p>
      </div>
      <button className="Track-action">
        {/* <!-- + or - will go here --> */}
        +
      </button>
    </div>
  )
}

export default Track