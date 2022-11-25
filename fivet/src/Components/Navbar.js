import React from 'react';
import {Link} from 'react-router-dom';

function Navbar ()
{
    return (
        <div>
            <header>
                <h3>Fivet</h3>
                <nav>
                    <Link to='/Dashboard'>Dashboard</Link>
                    <Link to='/Page1'>Page1</Link>
                    <Link to='/Page2'>Page2</Link>
                </nav>
            </header>
        </div>
    );
}
export default Navbar;