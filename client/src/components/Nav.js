import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu">
                <span class="navbar-toggler-icon">
                </span>
            </button>
            <div id="navMainMenu" class="navbar-collapse collapse">
                <div class="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link active">home</Link>
                    <Link to='/tweets' className="nav-item nav-link">tweets</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;