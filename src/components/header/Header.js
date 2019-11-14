import React, { Fragment, Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            handleSearchChange: event => {
                console.log(event.target.value);
                const filter = event.target.value;
                const filteredList = this.state.users.filter(item => {
                    // merge data together, then see if user input is anywhere inside
                    let values = Object.values(item)
                        .join('')
                        .toLowerCase();
                    return values.indexOf(filter.toLowerCase()) !== -1;
                });
                this.setState({ filteredUsers: filteredList });
            }
        };
    }
    render() {
        return (
            <Fragment>
                <div
                    className='section no-pad-bot teal lighten-5'
                    id='index-banner'
                >
                    <div className='container'>
                        <br />
                        <br />
                        <h3 className='header center blue-text'>Welcome To</h3>
                        <h1 className='header center blue-text text-darken-2'>
                            Employee Directory
                        </h1>
                        <div className='row center'>
                            <h5 className='header col s12 light blue-text text-darken-4'>
                                Type into the search box to find the user you're
                                looking for
                            </h5>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Header;
