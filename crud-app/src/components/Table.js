import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Table(props) {
    // const navigate = useNavigate();
    const handleDelete = (e) => {
        const confirm = window.confirm("Delete this information?");
        if(!confirm) {
            return;
        } else {
            axios.delete("http://localhost:3000/student/" + e)
            .then(res => {
                alert("Delete successfully!");
                window.location.reload("/");
            })
            .catch((err) => console.log(err));
        }
    }
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.class}</td>
                <td>
                    <div>
                        <Link to={`/update/${props.id}`}><button className='btn-edit'>Edit</button></Link>
                        <button className='btn-delete' onClick={(e) => handleDelete(props.id)}>Delete</button>
                    </div>
                </td>
            </tr>
        </>
    )
}
