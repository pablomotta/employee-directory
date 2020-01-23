import React from 'react';
import './search.css';

function SearchBox({ handleSearchChange }) {
    return (
        <div className='container-fluid teal lighten-5 center'>
            <div className='row center'>
                <form className='col s12'>
                    <div className='input-field col s8 offset-s2 m4 offset-m4 '>
                        <input
                            className='validate teal lighten-5 blue-text text-darken-4'
                            type='search'
                            aria-label='Search'
                            id='search'
                            onChange={e => handleSearchChange(e)}
                        />
                        <label class='' for='search'>
                            Search
                        </label>
                    </div>
                </form>
            </div>
            <br />
            <br />
        </div>
    );
}
export default SearchBox;
