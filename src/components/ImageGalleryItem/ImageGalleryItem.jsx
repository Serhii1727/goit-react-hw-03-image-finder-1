import PropTypes from 'prop-types'
import { ImageGalleryEl, Image } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ tags, webformatURL }) => {
    return (
        < ImageGalleryEl className="gallery-item" >
            <Image src={webformatURL} alt={tags} />
        </ImageGalleryEl >
    )
}

export default ImageGalleryItem;

