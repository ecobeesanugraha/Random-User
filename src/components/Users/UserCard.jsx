import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Utils/Loader"
import Error from "../Utils/Error"
import Details from "./UserDetails/Details"

const UserCard = () => {
    const [userData, setUserData] = useState(null)
    const [disable, setDisable] = useState(false)
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        let active = true
        setUserData(null)
        setDisable(true)
        setLoading(true)

        const fetchUserData = async () => {
            try {
                setError("")
                const url = 'https://randomuser.me/api/'
                const response = await fetch(url)
                const result = await response.json()

                if (active) {
                    console.log(result)
                    setUserData([result])
                }
            }
            catch (err) {
                setError(<Error message={"Sorry, we couldn't load the page you requested. Please try again later."} />)
            }
            finally {
                setLoading(false)
                setDisable(false)
            }
        }
        fetchUserData()

        return () => {
            active = false
        }
    }, [refresh])

    const refreshUser = () => {
        setError("")
        setRefresh(refresh ? false : true)
    }

    return (
        <div className="user-card-container">
            <button type="button" disabled={disable} id="refresh-btn" className="refresh-btn" onClick={refreshUser}>
                Refresh &nbsp;
                <FontAwesomeIcon icon={faArrowsRotate} />
            </button>

            {loading && <Loader />}
            {error}

            {userData && userData.map((e) => {
                const { results, info } = e
                const { gender, name, email, location, login, dob, picture } = results[0]
                const { title, first, last } = name
                const { date, age } = dob
                const { country, city } = location
                const { username, password } = login
                const { large: imgUrl } = picture
                const fullName = `${title} ${first} ${last}`
                const address = `${country}, ${city}`
                const secretPassword = [...password].map(() => { return "*" })

                return (
                    <div className="user-cards" key={info.seed}>
                        <Details
                            imgUrl={imgUrl}
                            fullName={fullName}
                            dateOfBirth={date.slice(0, 10)}
                            age={age}
                            address={address}
                            username={username}
                            password={password}
                            secretPassword={secretPassword}
                            gender={gender}
                            email={email}
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default UserCard;