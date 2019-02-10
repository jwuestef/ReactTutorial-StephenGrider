import React from 'react'
import { connect } from 'react-redux'
import flv from 'flv.js'

import { fetchStream } from '../../actions'



class StreamShow extends React.Component {

    constructor(props) {
        super(props)
        this.videoRef = React.createRef()
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
        this.buildPlayer()
    }

    componentDidUpdate() {
        this.buildPlayer()
    }

    componentWillUnmount() {
        this.player.destroy()
    }

    // If we already have a player, or if the stream prop hasn't been loaded yet... stall
    // Otherwise build the player
    buildPlayer() {
        if (this.player || !this.props.stream) {
            return
        }
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
        })
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()
        // this.player.play()   Docs have this, but we really shouldn't use it. A lot of browsers stop video from playing automatically anyways
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        const { title, description } = this.props.stream
        return (
            <div>
                <video ref={this.videoRef} style={{ width: '100%' }} controls />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }

}



const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}



export default connect(mapStateToProps, { fetchStream })(StreamShow)
