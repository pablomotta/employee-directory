import React from 'react';

function TableBody({ users, formatDate, loading }) {
    return (
        <tbody>
            {loading === false ? (
                users.map(({ login, name, picture, phone, email, dob }) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th='Image'>
                                <img
                                    src={picture.medium}
                                    alt={
                                        'profile image for ' +
                                        name.first +
                                        ' ' +
                                        name.last
                                    }
                                    className='img-responsive'
                                />
                            </td>
                            <td data-th='Name'>
                                {name.first} {name.last}
                            </td>
                            <td data-th='Phone'>{phone}</td>
                            <td data-th='Email'>
                                <a href={'mailto:' + email} target='__blank'>
                                    {email}
                                </a>
                            </td>
                            <td data-th='DOB'>{formatDate(dob.date)}</td>
                        </tr>
                    );
                })
            ) : (
                <></>
            )}
        </tbody>
    );
}

export default TableBody;
