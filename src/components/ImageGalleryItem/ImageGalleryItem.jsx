import PropTypes from 'prop-types'
import { Component } from 'react'
import { ImageGalleryEl, Image } from './ImageGalleryItem.styled'

export class ImageGalleryItem extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string,
        largeImage: PropTypes.string.isRequired,

    }
    state = {
        largeImage: ''
    }

    handleClickImage = () => {
        this.setState({})
        this.props.onClick(this.props.largeImage)
    }

    render() {
        return (
            < ImageGalleryEl className="gallery-item" onClick={this.handleClickImage}>
                <Image src={this.props.webformatURL} alt={this.props.tags} />
            </ImageGalleryEl >
        )
    }
}

export default ImageGalleryItem;

