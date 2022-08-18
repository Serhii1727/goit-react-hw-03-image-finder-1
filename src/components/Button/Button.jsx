import PropTypes from 'prop-types'
import { ButtonLoadMore } from "./Button.styled";
export const Button = ({ loadMore }) => {

    return (
        <ButtonLoadMore type="button" onClick={loadMore}>Load more</ButtonLoadMore>
    )
}

export default Button;

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
}