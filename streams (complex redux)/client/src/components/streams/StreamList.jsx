import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchStreams } from '../../actions'



class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
    }

    renderList() {
        return this.props.streams.map( eachStream => {
            // Have to put the call to renderAdmin() before the other stuff because of semantic UI weirdness
            return (
                <div className="item" key={eachStream.id}>
                    {this.renderAdmin(eachStream)}
                    <i className="large middle aligned icon camera"></i>
                    <div className="content">
                        <Link to={`/streams/${eachStream.id}`} className="header">{eachStream.title}</Link>
                        <div className="description">{eachStream.description}</div>
                    </div>
                </div>
            )
        })
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }

}



const mapStateToProps = (state) => {
    // Turn the object stored in state into a loop-friendly array
    return { streams: Object.values(state.streams), currentUserId: state.authFromReducer.userId, isSignedIn: state.authFromReducer.isSignedIn }
}



export default connect(mapStateToProps, { fetchStreams })(StreamList)
