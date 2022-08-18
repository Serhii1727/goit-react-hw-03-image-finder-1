import Proptypes from 'prop-types'
import { createPortal } from 'react-dom'
import { Overlay, ModalDiv } from './Modal.styled'

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ largeImageURL }) => {
    return createPortal(
        <Overlay className="overlay">
            <ModalDiv className="modal">
                <img src={largeImageURL} alt="" />
            </ModalDiv>
        </Overlay>,
        modalRoot,
    )
}

export default Modal;

Modal.propTypes = {
    largeImageURL: Proptypes.string.isRequired,
}