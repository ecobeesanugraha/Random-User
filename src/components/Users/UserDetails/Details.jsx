import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Details = (props) => {
    const { imgUrl, name, fullName, dateOfBirth, age, location, username, password, secretPassword, email, phone, cell } = props
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

            <p className="user-name-head">
                {fullName}
            </p>

            <div className="other-details">
                <div className="personal-details">
                    <p className="details-heading">Personal Details</p>

                    <p className="user-title"><span className="details-sub-heading">Title </span>{name.title}</p>

                    <p className="user-fname"><span className="details-sub-heading">First Name </span>{name.first}</p>

                    <p className="user-lname"><span className="details-sub-heading">Last Name </span>{name.last}</p>

                    <p className="user-dob"><span className="details-sub-heading">DOB </span>{dateOfBirth}</p>

                    <p className="user-age"><span className="details-sub-heading">Age </span>{age}</p>
                </div>

                <div className="address-details">
                    <p className="details-heading">Address</p>

                    <p className="user-country"><span className="details-sub-heading">Country </span>{location.country}</p>

                    <p className="user-city"><span className="details-sub-heading">City </span>{location.city}</p>

                    <p className="user-postcode"><span className="details-sub-heading">Post Code </span>{location.postcode}</p>
                </div>

                <div className="contact-details">
                    <p className="details-heading">Contact Details</p>

                    <p className="user-phone"><span className="details-sub-heading">Phone </span>{phone}</p>

                    <p className="user-cell"><span className="details-sub-heading">Cell </span>{cell}</p>
                </div>

                <div className="login-details">
                    <p className="details-heading">Login Details</p>

                    <p className="user-email"><span className="details-sub-heading">Email </span>{email}</p>

                    <p className="user-userName"><span className="details-sub-heading">Username </span>@{username}</p>

                    <div className="password-container">
                        <p className="user-password"><span className="details-sub-heading">Password </span>{pass}</p>

                        <button aria-label={viewPassword ? "Hide Password" : "Show Password"} type="button" id="view-password-btn" className="view-password-btn" onClick={showPassword}>
                            {viewPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Details.defaultProps = {
    imgUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    name: {
        title: 'Mr',
        first: 'Trishan',
        last: 'Wagle'
    },
    fullName: 'Mr Trishan Wagle',
    dateOfBirth: '2006-07-10',
    age: 17,
    location: {
        state: "Bagmati",
        country: "Nepal",
        postcode: "44640",

    },
    username: 'trishan999',
    password: 12345678,
    secretPassword: '********',
    email: 'mailtotrishan@gmail.com',
    phone: '+977-1234567890',
    cell: '01-1234567'
}

Details.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.object,
    fullName: PropTypes.string,
    dateOfBirth: PropTypes.string,
    age: PropTypes.number,
    location: PropTypes.object,
    username: PropTypes.string,
    password: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    secretPassword: PropTypes.array,
    email: PropTypes.string,
    phone: PropTypes.string,
    cell: PropTypes.string
}

export default Details;