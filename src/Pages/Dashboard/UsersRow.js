import React from 'react';
import { Button } from 'react-day-picker';

const UsersRow = ({user}) => {
    const {email}=user;
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td><Button className='btn btn-secondary'>Make Admin</Button></td>
            <td><Button className='btn btn-secondary'>Delete</Button></td>
        </tr>
    );
};

export default UsersRow;