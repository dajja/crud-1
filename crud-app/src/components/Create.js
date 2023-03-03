import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Create(props) {
    let { time, setRecord } = props;
    const [inputData, setInputData] = useState({ id: time, name: '', age: '', class: '' });
    const handleClick = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/student", inputData)
            .then((response) => {
                if (response.status !== 201) {
                    return;
                } else {
                    setRecord((record) => [...record, response.data]);
                }
            })
            .catch((error) => console.log(error));
    }
    useEffect(() => {

    }, [inputData])
    return (
        <>
            {/* {console.log(inputData)} */}
            <div className="inputStudent">
                <h2>Add new students</h2>
                <div className="form-input">
                    <label htmlFor="username">Name</label> <br />
                    <input type="text" name="username" placeholder="Write your name" onChange={e => setInputData({ ...inputData, name: e.target.value })} />  <br />
                    <label htmlFor="userage">Age</label> <br />
                    <input type="text" name="userage" placeholder="Write your age" onChange={e => setInputData({ ...inputData, age: e.target.value })} />  <br />
                    <label htmlFor="userclass">Class</label> <br />
                    <input type="text" name="userclass" placeholder="Write your class" onChange={e => setInputData({ ...inputData, class: e.target.value })} />  <br />
                    <button onClick={(e) => handleClick(e)}>Send</button>
                </div>
            </div>
        </>
    )
}