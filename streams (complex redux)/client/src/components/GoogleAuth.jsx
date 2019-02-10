import React from 'react'
import { connect } from 'react-redux'

import { signIn, signOut } from '../actions'



class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '187987597874-81k0acehno5s1o3dimoaps572hrhcqp2.apps.googleusercontent.com',
                scope: 'email'
            }).then( () => {
                this.auth = window.gapi.auth2.getAuthInstance()   // get the instance of the auth object
                this.onAuthChange(this.auth.isSignedIn.get())   // update the signed in status
                this.auth.isSignedIn.listen(this.onAuthChange)   // add a listener for future changes
            })
        })
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }
    
    onSignInClick = () => {
        this.auth.signIn()
    }
    
    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return <button className="ui loading red google button">Loading</button>
        } else if (this.props.isSignedIn === true) {
            return <button className="ui red google button" onClick={this.onSignOutClick}><i className="google icon"></i> Sign Out</button>
        } else if (this.props.isSignedIn === false) {
            return <button className="ui red google button" onClick={this.onSignInClick}><i className="google icon"></i> Sign In With Google</button>
        }

    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }

}



const mapStateToProps = (state) => {
    return { isSignedIn: state.authFromReducer.isSignedIn }
}



export default connect(mapStateToProps, {
    signIn,
    signOut
})(GoogleAuth)
