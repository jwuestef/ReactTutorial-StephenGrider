import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'



class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        // reduxForms has special props named initialValues <--- sending this prop populates the form, very special name with reduxForms
        // <StreamForm onSubmit={this.onSubmit} initialValues={{ title: this.props.stream.title, description: this.props.stream.description }} />
        // <StreamForm onSubmit={this.onSubmit} initialValues={this.props.stream} />
        // can use _.pick to specify which properties we send
        return (
            <div>
                <h3>Edit Stream "<em>{this.props.stream.title}</em>"</h3>
                <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream, 'title', 'description')} />
            </div>
        )
    }

}



const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}



export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)
