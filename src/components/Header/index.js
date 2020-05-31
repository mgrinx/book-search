import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    function search(event) {
        event.preventDefault();
        window.location.assign('/?q=' + document.querySelector("#search").value);
    }

    return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <Link to="/" className="navbar-brand"><span role="img" aria-label="book">📘</span> Book Search</Link>
            <form className="form-inline">
                <Link to="/saved" className="btn btn-sm btn-outline-secondary my-2 my-sm-0" role="button">View saved books</Link>
                <input id="search" className="form-control mx-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button onClick={search} className="btn btn-outline-success my-2 my-sm-0" type="submit">Go</button>
            </form>
        </nav>
    );
}

export default Header;