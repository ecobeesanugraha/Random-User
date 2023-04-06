import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [mode, setMode] = useState("Light Mode")
    const [dark, setDark] = useState(false)
    const [icon, setIcon] = useState(faMoon)

    useEffect(() => {
        let active = true
        if (active) {
            dark ? setIcon(faSun) : setIcon(faMoon)
            mode == "Light Mode" ? setMode("Dark Mode") : setMode("Light Mode")
            mode == "Light Mode" ? document.body.className = "light-mode" : document.body.className = "dark-mode"
        }

        return () => {
            active = false
        }
    }, [dark])

    return (
        <nav className="nav">
            <h1 className="nav-heading">Random <span className="nav-heading--span">User</span></h1>

            <button aria-label="Toggle Dark/Light Mode" type="button" onClick={() => { setDark(!dark) }} className="toggle-button" id="toggle-button">
                {mode}
                <FontAwesomeIcon icon={icon} className="nav-toggle-mode" />
            </button>
        </nav>
    );
}

export default Navbar;