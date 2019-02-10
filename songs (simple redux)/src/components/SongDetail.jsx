import React from 'react'
import { connect } from 'react-redux'


const SongDetail = ({songThatWasChosen}) => {
    if (!songThatWasChosen) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>Title: {songThatWasChosen.title}
            <br/>
            Duration: {songThatWasChosen.duration}</p>
        </div>
    )
}


const mapStateToProps = (state) => {
    return { songThatWasChosen: state.selectedSong }
}


export default connect(mapStateToProps)(SongDetail)
