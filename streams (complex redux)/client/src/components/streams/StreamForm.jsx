import React from 'react'
import { Field, reduxForm } from 'redux-form'   // Field is capitalized because it is a component we will use in JSX, the reduxForm is a function



class StreamForm extends React.Component {

    renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input type="text" {...formProps.input} autoComplete="off" />
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    // ReduxForms has a prop called handleSubmit... which takes care of preventDefault
    // LIES! We are now passing an onSubmit function to the component when we call it!
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    // Add a className of error to the form so that error messages will show up!
    render() {
        return (
            <div>
                <form action="" className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Enter Title" />
                    <Field name="description" component={this.renderInput} label="Enter Description" />
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        )
    }

}



const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = 'Title is required'
    }
    if (!formValues.description) {
        errors.description = 'Description is required'
    }
    return errors
}



export default  reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm)
