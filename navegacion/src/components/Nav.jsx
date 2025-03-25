import React from "react";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
            <div className="container">
                <a className="navbar-brand" href="/">
                    MyApp
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/listado">
                                Listado
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/20-com">
                                20 Componentes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/todo-list">
                                To-do List
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/calculator">
                                Calc
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/card">
                                Card
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;