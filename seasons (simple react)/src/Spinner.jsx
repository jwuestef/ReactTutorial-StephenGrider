import React from 'react'



const Spinner = (props) => {
  return (
      <div className="ui active dimmer">
        <div className="ui big text loader">{props.message}</div>
    </div>
  )
}



// If the calling location does not specify a message property... then here are the defaults
// ExportedFunction.defaultProps exactly
Spinner.defaultProps = {
    message: 'Loading...'
}



export default Spinner
