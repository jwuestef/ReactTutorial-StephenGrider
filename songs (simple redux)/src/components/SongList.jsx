import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectSong } from '../actions'



class SongList extends Component {

    renderList() {
        return this.props.songs.map( eachSong => {
            return (
                <div className="item" key={eachSong.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={ () => this.props.selectSong(eachSong) }>Select</button>
                    </div>
                    <div className="content">{eachSong.title}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}



// Will be called anytime the store gets updated
// Similar to how in non-redux the component gets rerendered when its state gets updated
const mapStateToProps = (state) => {
    // console.log(state)
    return { songs: state.songs }   // Pull out the relevant portion of the store and pass it as props to this component
}



// Export a connected instance of this component
// export default connect(mapStateToProps, {
//     selectSong: selectSong   // Pass it a config object, this object should have a prop named selectSong that is equal to the selectSong we import from ./actions
// })(SongList)

// ES6 - since the selectSong: selectSong is the same name... can write it as just:
export default connect(mapStateToProps, { selectSong })(SongList)
