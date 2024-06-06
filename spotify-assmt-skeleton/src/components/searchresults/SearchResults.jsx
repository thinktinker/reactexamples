import React from 'react';
import TrackList from '../tracklist/Tracklist';
import "./SearchResults.css";

// Instead of using props, use unwrap operation to obtain ind. params passed in.
function SearchResults({searchResults, onAdd}) {
  
  return (
    <div className="SearchResults">
      <h2>Search Results</h2>
        <TrackList
          searchResults = {searchResults}
          isRemoval = {false}
          onAdd = {onAdd}
        />
    </div>
  )
}

export default SearchResults