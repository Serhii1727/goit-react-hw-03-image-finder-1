import Proptypes from 'prop-types'
import { Overlay, ModalDiv } from './Modal.styled'

export const Modal = () => {
    return (
        <Overlay className="overlay">
            <ModalDiv className="modal">
                <img src="" alt="" />
            </ModalDiv>
        </Overlay>
    )
}

export default Modal;