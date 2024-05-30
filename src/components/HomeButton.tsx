const HomeButton = () => {
    return (
        <a className="flex absolute items-center justify-center right-0 left-0 bottom-20 sm:bottom-10" href="https://norskviking.github.io/portfolio/" target="_blank">
            <button className="flex items-center px-3 py-1 border-2 rounded text-lg text-white hover:text-red-500">
                HOMEPAGE
            </button>
        </a>
    )
}

export default HomeButton;