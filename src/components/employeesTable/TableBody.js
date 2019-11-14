import React from 'react';

function TableBody({ users, formatDate, loading }) {
    return (
        <tbody>
            {loading === false ? (
                users.map(({ login, name, picture, phone, email, dob }) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th='Image' className='align-middle'>
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
                            <td
                                data-th='Name'
                                className='name-cell align-middle'
                            >
                                {name.first} {name.last}
                            </td>
                            <td data-th='Phone' className='align-middle'>
                                {phone}
                            </td>
                            <td data-th='Email' className='align-middle'>
                                <a href={'mailto:' + email} target='__blank'>
                                    {email}
                                </a>
                            </td>
                            <td data-th='DOB' className='align-middle'>
                                {formatDate(dob.date)}
                            </td>
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
