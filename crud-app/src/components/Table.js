import React, { useEffect, useState } from 'react';

export default function Table(props) {

    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.class}</td>
                <td>
                    <div>
                        <button className='btn-edit'>Edit</button>
                        <button className='btn-delete'>Delete</button>
                    </div>
                </td>
            </tr>
        </>
    )
}
