import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between">
                <h1 className="text-lg font-bold">Recipe Finder</h1>
                <div>
                    <Link to="/" className="px-2">Home</Link>
                    <Link to="/profile" className="px-2">Profile</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
