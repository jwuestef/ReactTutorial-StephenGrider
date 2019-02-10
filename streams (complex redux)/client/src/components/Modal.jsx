import React from 'react'
import ReactDOM from 'react-dom'



// Stop Propogation of the click from the child to the parent... clicking inside the child will no longer trigger the parent click handler
const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
            <div className="ui standard modal visible active" onClick={ e => e.stopPropagation() }>
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')   
    )
}



export default Modal
