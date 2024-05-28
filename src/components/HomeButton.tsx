import { Link } from "react-router-dom";

const HomeButton = () => {
    return (
        <nav className="flex absolute items-center justify-center right-0 left-0 bottom-20 sm:bottom-10">
            <button className="flex items-center px-3 py-1 border-2 rounded text-lg text-white hover:text-red-500">
                <Link to="https://norskviking.github.io/portfolio">HOMEPAGE</Link>
            </button>
        </nav>
    )
}

export default HomeButton;