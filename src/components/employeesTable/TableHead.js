import React from 'react';

function TableHead({ headings, handleSort }) {
    return (
        <thead>
            <tr>
                {headings.map(({ name, width }) => {
                    return (
                        <th
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
