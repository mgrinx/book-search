import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Header() {
    // const [query, setQuery] = useState();

    function search(event) {
        event.preventDefault();
        window.location.assign('/?q=' + document.querySelector("#search").value);
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <a href="/" className="navbar-brand"><span role="img" aria-label="book">📘</span> Book Search</a>
            <form className="form-inline">
                <a href="/saved" className="btn btn-sm btn-outline-secondary my-2 my-sm-0">View saved books</a>
                <input id="search" className="form-control mx-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button onClick={search} className="btn btn-outline-success my-2 my-sm-0" type="submit">Go</button>
            </form>
        </nav>
    );
}

export default Header;