import React from 'react'



class SearchBar extends React.Component {

    state = { term: '' }



    // FIX THIS IS UNDEFINED - older fashioned way that lots of legacy code uses
    // constructor() {
    //     super()
    //     this.onFormSubmit = this.onFormSubmit.bind(this)
    // }

    // onFormSubmit(e) {
    //     e.preventDefault()
    //     console.log(this) // ERROR!!!!!!!!! THIS is undefined
    // }


    // FIX #2 for THIS is undefined... is to change it to an arrow function
    onFormSubmit = (e) => {
        e.preventDefault()
        // console.log(this) // Now 'this' is okay
        this.props.onSearchSubmit(this.state.term)
    }


    // FIX #3 for THIS is undefined... is to use an arrow function in the <form> tag
    // <form action="" className="ui form" onSubmit={ (e) => this.onFormSubmit(e) }>    <---- Notice the invocation() of the function in the ARROW function!





    render() {
        return (
            <div className="ui segment">
                <form action="" className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="">Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })} 
                        />
                    </div>
                </form>
            </div>
        )
    }

}



export default SearchBar
