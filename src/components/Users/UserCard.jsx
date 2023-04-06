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
        const abortController = new AbortController()
        setUserData(null)
        setDisable(true)
        setLoading(true)
        document.title = "Loading..."

        const fetchUserData = async () => {
            try {
                setError("")
                const url = 'https://randomuser.me/api/'
                const response = await fetch(url, { signal: abortController.signal, })
                const result = await response.json()

                console.log(result)
                setUserData([result])
            }

            catch (err) {
                if (err.name === "AbortError") {
                    console.log(err.name)
                }

                else {
                    document.title = "Error"
                    setError(<Error message={"Sorry, we couldn't load the page you requested. Please try again later."} />)
                }
            }

            finally {
                setLoading(false)
                setDisable(false)
            }
        }
        fetchUserData()

        return () => {
            abortController.abort()
        }
    }, [refresh])

    const refreshUser = () => {
        setError("")
        setRefresh(refresh ? false : true)
    }

    return (
        <div className="user-card-container">
            <button aria-label="Refresh" type="button" disabled={disable} id="refresh-btn" className="refresh-btn" onClick={refreshUser}>
                Refresh &nbsp;
                <FontAwesomeIcon icon={faArrowsRotate} />
            </button>

            {loading && <Loader />}
            {error}

            {userData && userData.map((e) => {
                const { results, info } = e
                const { gender, name, email, location, login, dob, picture, phone, cell } = results[0]
                const { title, first, last } = name
                const { date, age } = dob
                const { username, password } = login
                const { large: imgUrl } = picture
                const fullName = `${title} ${first} ${last}`
                const secretPassword = [...password].map(() => { return "*" })

                return (
                    <div className="user-cards" key={info.seed}>
                        <Details
                            imgUrl={imgUrl}
                            name={name}
                            fullName={fullName}
                            dateOfBirth={date.slice(0, 10)}
                            age={age}
                            location={location}
                            username={username}
                            password={password}
                            secretPassword={secretPassword}
                            gender={gender}
                            email={email}
                            phone={phone}
                            cell={cell}
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default UserCard;