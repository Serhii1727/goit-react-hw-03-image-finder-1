import { Component } from 'react'
import PropTypes from 'prop-types'
import ImageGalleryItem from 'components/ImageGalleryItem'
import { ImageGalleryList, Title } from './ImageGallery.styled'
import { KEY } from '../api/api.js'
import { Loader } from '../Loader/Loader'

export class ImageGallery extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    }

    state = {
        arrayImage: [],
        status: 'idle'
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.name;
        const currentName = this.props.name;

        if (prevName !== currentName) {
            this.setState({ status: 'pending' })

            setTimeout(() => {
                fetch(`https://pixabay.com/api/?q=${this.props.name}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                    .then(res =>
                        res.json()
                    )
                    .then(({ hits }) => {

                        if (hits.length === 0) {
                            this.setState({ status: 'rejected' })
                        }
                        else { this.setState({ arrayImage: hits, status: "resolved" }) }
                    })
            }, 5000)
        }
    }


    render() {

        const { arrayImage, status } = this.state;

        if (status === 'idle') {
            return <Title>Введите запрос в поисковую строку</Title>
        }

        if (status === 'pending') {
            return <Loader />
        }

        if (status === 'rejected') {
            return <h2>{`Картинок по запросу ${this.props.name} к сожалению нет`}</h2>
        }

        if (status === 'resolved') {
            return <ImageGalleryList className="gallery">
                {arrayImage.length >= 1 && arrayImage.map(({ id, tags, webformatURL }) =>
                    <ImageGalleryItem tags={tags} webformatURL={webformatURL} key={id} />)}
            </ImageGalleryList>
        }



    }
}


export default ImageGallery