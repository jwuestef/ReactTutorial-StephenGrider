import React from 'react'



class ImageCard extends React.Component {

    constructor(props) {
        super(props)
        this.imageRef = React.createRef()
        this.state = { spans: 0 }
    }


    // When this gets called, the image hasn't actually finished downloading... so the height is 0! Wait for it to finish loading...
    componentDidMount() {
        // console.log(this.imageRef)
        this.imageRef.current.addEventListener('load', this.setSpans)
    }


    // Set the number of rows for this image to span
    setSpans = () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)
        this.setState({ spans: spans })
    }


    render() {
        const {description, urls} = this.props.image
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }} >
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}



export default ImageCard