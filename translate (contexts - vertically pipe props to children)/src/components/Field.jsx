import React from 'react'

import LanguageContext from '../contexts/LanguageContext'



class Field extends React.Component {

    static contextType = LanguageContext   // Hook up the context... contextType is VERY SPECIAL NAME... or write Field.contextType = LanguageContext... outside of the class I think... either way, it's the same thing

    render() {
        const text = this.context.language === 'english' ? 'Name' : 'Naam'
        return (
            <div className="ui field">
                <label htmlFor="">{text}</label>
                <input type="text" />
            </div>
        )
    }
}



export default Field
