import { Component } from 'react'
import PropTypes from 'prop-types'
import ImageGalleryItem from 'components/ImageGalleryItem'
import { ImageGalleryList } from './ImageGallery.styled'
import { KEY } from '../api/api.js'

export class ImageGallery extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    }

    state = {
        arrayImage: [],
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.name;
        const currentName = this.props.name;

        if (prevName !== currentName) {
            fetch(`https://pixabay.com/api/?q=${this.props.name}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(({ hits }) => this.setState({ arrayImage: hits }))
        }
    }


    render() {
        return (
            <ImageGalleryList className="gallery">
                {this.state.arrayImage.map(({ id, tags, webformatURL }) =>
                    <ImageGalleryItem tags={tags} webformatURL={webformatURL} key={id} />)}
            </ImageGalleryList>
        )
    }
}

export default ImageGallery