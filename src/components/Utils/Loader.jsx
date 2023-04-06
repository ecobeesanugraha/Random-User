import loadingSpinner from "../../assets/loader.gif";

const Loader = () => {
    return (
        <div className="loader">
            <img
                className="load-spinner"
                src={loadingSpinner}
                alt="Loading..."
            />
        </div>
    );
}

export default Loader;