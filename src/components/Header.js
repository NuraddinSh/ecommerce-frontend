import React from "react";
import { Link, NavLink } from "react-router-dom"
import "../cssPages/header.css"

export default function Header() {
    return (

        <header className="header-nav">
                <div><Link to={'/'}>E-COMMERCE</Link></div>


                <div className={'navlist'}>
                    <Link to={"/male"}>Male</Link>
                    <Link to={"/woman"}>Woman</Link>
                    <Link to={"/child"}>Child</Link>
                    <Link to={'/login'}>Sign in</Link>
                </div>
                <div>
                    <form>
                    <input  type="search" placeholder="Search" aria-label="Search" />
                        <button type="submit">Search</button>
                    </form>
                </div>


        </header>
    )

    {
        /*<header className="navbar navbar-expand-lg bg-body-tertiary">
            <div><Link to={'/'} className="navbar-brand">E-COMMERCE</Link></div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <nav className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className={"nav-item"}><Link to={"/male"} className={'nav-link'}>Male</Link></li>
                    <li className={"nav-item"}><Link to={"/woman"} className={'nav-link'}>Woman</Link></li>
                    <li className={"nav-item"}><Link to={"/child"} className={'nav-link'}>Child</Link></li>
                    <li className={"nav-item"}><Link to={'/login'} className={'nav-link'}>Sign in</Link></li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </nav>

        </header>*/}
}
