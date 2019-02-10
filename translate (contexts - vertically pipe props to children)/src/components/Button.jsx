import React from 'react'

import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'



// Other way to hook up contexts is with .Consumer
// Benefit of this is that you can reference multiple Contexts
class Button extends React.Component {

    render() {
        return (
            <ColorContext.Consumer>
            { (color) => 
                <button className={`ui button ${color}`}>
                    <LanguageContext.Consumer>
                        { (value) => value.language === 'english' ? 'Submit' : 'Voorleggen' }
                    </LanguageContext.Consumer>
                </button>
            }
            </ColorContext.Consumer>
        )
    }

}



export default Button
