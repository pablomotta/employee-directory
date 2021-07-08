import React from 'react';
import './employerTable.css';

function TableHead({ headings, handleSort }) {
    return (
        <thead>
            <tr>
                {headings.map(({ name, width }) => {
                    return (
                        <th
                            className='row-title'
                            key={name}
                            style={{ width }}
                            onClick={() => {
                                handleSort(name.toLowerCase());
                            }}
                        >
                            {name}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}

export default TableHead;
