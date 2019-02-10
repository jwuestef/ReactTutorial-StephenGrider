import { combineReducers } from 'redux'

// This reducer handles getting the songs - overkill for real Redux, but for example here
const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:25' },
        { title: 'I Want It That Way', duration: '1:45' }
    ]
}

// Handle selecting a song
const selectedSongReducer = (previouslySelectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return previouslySelectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
