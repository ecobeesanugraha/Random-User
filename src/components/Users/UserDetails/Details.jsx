import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Details = ({ imgUrl, fullName, dateOfBirth, age, address, username, password, secretPassword, gender, email }) => {
    const [viewPassword, setViewPassword] = useState(false)
    const [pass, setPass] = useState(secretPassword)

    useEffect(() => {
        let active = true

        if (active) {
            document.title = fullName
        }

        return () => {
            active = false
        }
    }, [fullName])


    const showPassword = () => {
        viewPassword ? setViewPassword(false) : setViewPassword(true)
        viewPassword ? setPass(secretPassword) : setPass(password)
    }

    return (
        <div className="user-details">
            <img
                src={imgUrl}
                className="user-profile-pic"
                alt="Profile Picture"
            />

            <div className="other-details">
                <p className="user-name"><span className="details-heading">Name </span>{fullName}</p>

                <p className="user-gender"><span className="details-heading">Gender </span>{gender}</p>

                <p className="user-address"><span className="details-heading">Address </span>{address}</p>

                <br />

                <p className="user-dob"><span className="details-heading">DOB </span>{dateOfBirth}</p>

                <p className="user-age"><span className="details-heading">Age </span>{age}</p>

                <br />

                <p className="user-email"><span className="details-heading">Email </span>{email}</p>

                <p className="user-userName"><span className="details-heading">Username </span>@{username}</p>

                <div className="password-container">
                    <p className="user-password"><span className="details-heading">Password </span>{pass}</p>

                    <button type="button" id="view-password-btn" className="view-password-btn" onClick={showPassword}>
                        {viewPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                    </button>
                </div>
            </div>
        </div>
    );
}

Details.defaultProps = {
    imgUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    fullName: 'Mr Trishan Wagle',
    gender: 'Male',
    address: 'Samakhushi, Kathmandu',
    dateOfBirth: '2006-07-10',
    age: 17,
    username: 'trishan999',
    password: '12345678',
    secretPassword: '********',
    email: 'mailtotrishan@gmail.com'
}

Details.propTypes = {
    imgUrl: PropTypes.string,
    fullName: PropTypes.string,
    gender: PropTypes.string,
    address: PropTypes.string,
    dateOfBirth: PropTypes.string,
    age: PropTypes.number,
    username: PropTypes.string,
    password: PropTypes.any,
    secretPassword: PropTypes.array,
    email: PropTypes.string
}

export default Details;