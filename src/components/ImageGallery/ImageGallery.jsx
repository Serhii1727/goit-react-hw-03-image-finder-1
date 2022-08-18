import { Component } from 'react'
import PropTypes from 'prop-types'
import ImageGalleryItem from 'components/ImageGalleryItem'
import { ImageGalleryList, Title } from './ImageGallery.styled'
import { KEY } from '../api/api.js'
import { Loader } from '../Loader/Loader'
import Modal from 'components/Modal'
import Button from 'components/Button'

export class ImageGallery extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    }

    state = {
        arrayImage: [],
        status: 'idle',
        page: 1,
        currentImage: '',
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.name;
        const currentName = this.props.name;

        if (prevName !== currentName || prevState.page !== this.state.page) {
            this.setState({ status: 'pending' })

            fetch(`https://pixabay.com/api/?q=${this.props.name}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`)
                .then(res =>
                    res.json()
                )
                .then(({ hits }) => {

                    if (hits.length === 0) {
                        this.setState({ status: 'rejected' })
                    }
                    else {
                        this.setState({ status: "resolved", })
                        this.setState(prevState => ({
                            arrayImage: [...prevState.arrayImage, ...hits]
                        }))
                    }
                })
        }
        if (prevState.arrayImage !== this.state.arrayImage && this.state.page !== 1) {
            window.scrollTo({
                left: 0,
                top: document.body.scrollHeight,
                behavior: 'smooth',
            });
        }
    }

    clikImage = (image) => {
        this.setState({ currentImage: image, status: 'modal' })
    }

    loadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
        }))
    }

    render() {

        const { arrayImage, status, } = this.state;

        if (status === 'modal') {
            return <Modal
                largeImageURL={this.state.currentImage} />
        }
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
            return (
                <div>
                    <ImageGalleryList className="gallery">
                        {arrayImage.length >= 1 && arrayImage.map(({ id, tags, webformatURL, largeImageURL }) =>
                            <ImageGalleryItem tags={tags} webformatURL={webformatURL} key={id} onClick={this.clikImage} largeImage={largeImageURL} />)}
                    </ImageGalleryList>
                    <Button loadMore={this.loadMore} />
                </div>)
        }
    }
}

export default ImageGallery