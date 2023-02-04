import axios from 'axios';
import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
// import axios from 'axios'

const GetFromDataBase = () => {
    let [data, setData] = useState([])
    const getData = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.get('http://localhost:8080/api/getdata')
            const Data = resp.data.data
            setData(Data)

        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={getData}> Get All Data </button>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>password</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((x) => {
                        return (
                            <tr>
                                <td>{x.name}</td>
                                <td>{x.email}</td>
                                <td>{x.phone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </div>
    )
}

export default GetFromDataBase
