import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const MODES = {
    LIGHT: 'light-mode',
    DARK: 'dark-mode'
}

const MODESLABELS = {
    LIGHT: 'Light',
    DARK: 'Dark'
}

const NavBar = () => {
    const [mode, setMode] = useState(MODES.LIGHT)

    useEffect(() => {
        let active = true

        if (active) {
            if (isDarkMode(mode)) {
                document.body.className = MODES.DARK
            } else {
                document.body.className = MODES.LIGHT
            }
        }

        return () => {
            active = false
        }
    }, [mode])
    
    const isDarkMode = (mode) => mode === MODES.DARK;

    const getIcon = () => {
           if (isDarkMode(mode)) {
                return faMoon
           }
        
           return faSun
    }
    
    const getLabel = () => {
           if (isDarkMode(mode)) {
                return MODESLABELS.LIGHT
           }
        
           return MODESLABELS.DARK
    }

    const handleModes = () => setMode((val) => isDarkMode(val) ? modes.light : modes.dark)

    return (
        <nav className="nav">
            <h1 className="nav-heading">
                Random

                <span className="nav-heading--span">
                    User
                </span>
            </h1>

            <button
                type="button"
                id="toggle-button"
                className="toggle-button"
                onClick={handleModes}
                aria-label="Toggle Dark/Light Mode"
            >
                {getLabel()}

                <FontAwesomeIcon
                   icon={getIcon()}
                   className="nav-toggle-mode"
                />
            </button>
        </nav>
    );
}

export default NavBar;
