import React from 'react'
import { connect } from 'react-redux'

// import { fetchUser } from '../actions'



class UserHeader extends React.Component {

    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId)
    // }

    render() {
        const { author } = this.props

        if (!author) {
            return null;
        }

        return (
            <div className="header">
                {author.name}
            </div>
        )
    }

}



// ownProps is the set of props that are about to go into this component already
const mapStateToProps = (state, ownProps) => {
    return { author: state.usersFromReducer.find( eachElement => eachElement.id === ownProps.userId ) }
}



export default connect(mapStateToProps, { 
    // fetchUser: fetchUser 
})(UserHeader)
