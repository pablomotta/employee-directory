import React, { Fragment } from 'react';

export default function Navbar() {
    return (
        <Fragment>
            <nav>
                <div className='nav-wrapper'>
                    <a href='/' className='brand-logo center'>
                        Employee Directory
                    </a>
                </div>
            </nav>
        </Fragment>
    );
}
