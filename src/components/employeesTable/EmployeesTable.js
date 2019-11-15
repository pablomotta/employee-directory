import React, { Fragment, Component } from 'react';
import Search from '../search/Search';
import TableHead from './TableHead';
import TableBody from './TableBody';
import Loading from '../loading/Loading';
import API from '../../utils/API';
import './employerTable.css';

class EmployeesTable extends Component {
    constructor() {
        super();
        this.state = {
            users: [{}],
            order: 'descend',
            filteredUsers: [{}],
            headings: [
                { name: 'Image', width: '15%' },
                { name: 'Name', width: '15%' },
                { name: 'Phone', width: '20%' },
                { name: 'Email', width: '30%' },
                { name: 'DOB', width: '20%' }
            ],
            loading: true,
            handleSort: heading => {
                if (this.state.order === 'descend') {
                    this.setState({
                        order: 'ascend'
                    });
                } else {
                    this.setState({
                        order: 'descend'
                    });
                }

                const compareFnc = (a, b) => {
                    if (this.state.order === 'ascend') {
                        // account for missing values
                        if (a[heading] === undefined) {
                            return 1;
                        } else if (b[heading] === undefined) {
                            return -1;
                        }
                        // numerically
                        else if (heading === 'name') {
                            return a[heading].first.localeCompare(
                                b[heading].first
                            );
                        } else {
                            return a[heading] - b[heading];
                        }
                    } else {
                        // account for missing values
                        if (a[heading] === undefined) {
                            return 1;
                        } else if (b[heading] === undefined) {
                            return -1;
                        }
                        // numerically
                        else if (heading === 'name') {
                            return b[heading].first.localeCompare(
                                a[heading].first
                            );
                        } else {
                            return b[heading] - a[heading];
                        }
                    }
                };
                const sortedUsers = this.state.filteredUsers.sort(compareFnc);
                this.setState({ filteredUsers: sortedUsers });
            },
            handleSearchChange: event => {
                const filter = event.target.value;
                const filteredList = this.state.users.filter(item => {
                    // merge data together, then see if user input is anywhere inside
                    let values = Object.values(item)
                        .join('')
                        .toLowerCase();
                    return values.indexOf(filter.toLowerCase()) !== -1;
                });
                this.setState({ filteredUsers: filteredList });
            },
            formatDate: date => {
                const dateArray = date.split('-');
                const year = dateArray[0];
                const month = dateArray[1];
                const dayArray = dateArray[2].split('T');
                const day = dayArray[0];
                const formattedDate = [month, day, year].join('/');
                return formattedDate;
            }
        };
    }

    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({ loading: true });
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results,
                loading: false
            });
        });
    }

    render() {
        return (
            <Fragment>
                <Search handleSearchChange={this.state.handleSearchChange} />
                {this.state.loading ? (
                    <Loading />
                ) : (
                    <div className='container-fluid root'>
                        <table className='striped table'>
                            <TableHead
                                headings={this.state.headings}
                                handleSort={this.state.handleSort}
                            />
                            <TableBody
                                users={this.state.filteredUsers}
                                loading={this.state.loading}
                                formatDate={this.state.formatDate}
                            />
                        </table>
                    </div>
                )}
            </Fragment>
        );
    }
}
export default EmployeesTable;
