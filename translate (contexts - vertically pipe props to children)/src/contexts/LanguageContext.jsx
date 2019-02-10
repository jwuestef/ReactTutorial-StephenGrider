import React from 'react'



const Context = React.createContext('english')   // default value of context - make sure it's capital C. ALL CUSTOM JSX ELEMENTS MUST START WITH CAPITAL LETTER



// Create a redux-esk store
export class LanguageStore extends React.Component {

    state = { language: 'english' }

    onLanguageChange = (language) => {
        this.setState({ language })
    }

    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        )
    }

}



export default Context
