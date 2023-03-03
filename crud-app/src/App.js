import './App.css';
import Table from './components/Table';
import Create from './components/Create';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
function App() {
  const [time, setTime] = useState('');
  const [record, setRecord] = useState([]);
  const fetchData = async () => {
    await axios.get("http://localhost:3000/student")
      .then((response) => setRecord(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData()
    const id = Math.floor(Math.random() * 1000000);
    setTime(id);
  }, []);
  return (
    <>
      <div className="student-manage">
        <Create time={time} record={record} setRecord={setRecord} />
        <div className="listStudent">
          <h2>List Students</h2>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Class</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {record.map((item, i) => (
                  <Table key={i} id={item.id} name={item.name} age={item.age} class={item.class} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;