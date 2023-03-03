import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Update() {
    const { id } = useParams();
    const [takeData, setTakeData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3000/student/" + id)
            .then((res) => setTakeData(res.data))
            .catch((err) => console.log(err.message));
    }, [id])
    const handleClick = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3000/student/" + id, takeData)
            .then((res) => {
                alert("update successful");
                navigate("/");
            })
            .catch((err) => console.log(err));
    }
    return (
        <>
            <div className="inputStudent">
                <h2>Change information</h2>
                <div className="form-input">
                    <label htmlFor="userid">ID</label> <br />
                    <input type="text" name="userid" disabled value={takeData.id} style={{cursor: 'not-allowed'}}/>  <br />
                    <label htmlFor="username">Name</label> <br />
                    <input type="text" name="username" placeholder="Write your name" value={takeData.name} onChange={e => setTakeData({ ...takeData, name: e.target.value })}/>  <br />
                    <label htmlFor="userage">Age</label> <br />
                    <input type="text" name="userage" placeholder="Write your age" value={takeData.age} onChange={e => setTakeData({ ...takeData, age: e.target.value })}/>  <br />
                    <label htmlFor="userclass">Class</label> <br />
                    <input type="text" name="userclass" placeholder="Write your class" value={takeData.class} onChange={e => setTakeData({ ...takeData, class: e.target.value })}/>  <br />
                    <button onClick={(e) => handleClick(e)}>Finish</button>
                </div>
            </div>
        </>
    )
}