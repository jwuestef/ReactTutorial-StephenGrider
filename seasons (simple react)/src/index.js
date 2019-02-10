import React from 'react'
import ReactDOM from 'react-dom'

import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'



class App extends React.Component {
  


  // THIS IS A SHORT WAY OF DEFINING CONSTRUCTOR WITH STATE
  state = { lat: null, errorMessage: '' }

  // THIS IS THE LONGER WAY
  // constructor(props) {
  //   // Always the first thing in here
  //   super(props)  // MUST call 'super'! Calls the constructor function of the base class (the React.Component class)
  //   // Good place to initialize state
  //   // This is the ONLY TIME we can set it =
  //   // From here, to UPDATE state, use setState function!
  //   this.state = { lat: null, errorMessage: '' }
  // }



  // While you can do data-loading in the constructor, convention is to use constructor for config stuff and data loading in componentDidMount
  componentDidMount() {
    // Get the user's current location
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => {
        console.log(err)
        this.setState({ errorMessage: err.message })
      }
    );
  }



  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner message="Please accept location request..." />
  }



  // React says we HAVE to define 'render'
  // the render function gets called frequently, so NEVER initialize ANY kind of work from the render function
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }


}




ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
