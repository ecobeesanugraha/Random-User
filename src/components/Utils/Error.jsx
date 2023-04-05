import { PropTypes } from "prop-types"

const Errors = ({ message }) => {
    return (
        <p className="error-message">
            {message}
        </p>
    );
}

Errors.propTypes = {
    message: PropTypes.string
}

Errors.defaultProps = {
    message: "Some error ocurred at the moment. Please try again later."
}

export default Errors;