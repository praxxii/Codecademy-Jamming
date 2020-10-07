import React from 'react';
import TrackList from '../TrackList/Tracklist';
import './SearchResults.css';

export default class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList />
            </div>
        )
    }
}
