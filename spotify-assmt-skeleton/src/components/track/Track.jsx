import React from 'react'
import './Track.css';

function Track({track, isRemoval, onAdd, onRemove}) {

  //function addTrack in Track.jsx will use onAdd to pass the track to be added
  function addTrack(event){
    onAdd(track);
    return;
  }

  //fuction removeTrack in Track.js will use onRemove to pass the track to be removed
  function removeTrack(event){
    onRemove(track);
    return;
  }

  // TODO: renderAction function (27)
  function renderAction(isRemoval=true){
    // the returned display is wrapped around a react fragment
    if(isRemoval){
      // return a - sign
      return(
        <button className="Track-action" onClick={removeTrack}> - </button>
      );
    }else{
      // return a + sign
      return(
        <button className="Track-action" onClick={addTrack}> + </button>
      )
    }
  }
  
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>
          {/* <!-- track name will go here --> */}
          {track.name}
        </h3>
        <p>
          {/* <!-- track artist will go here--> */} {/* <!-- track album will go here --> */}
          {track.artist} / {track.album}
        </p>
      </div>
      {renderAction(isRemoval)}
    </div>
  )
}

export default Track