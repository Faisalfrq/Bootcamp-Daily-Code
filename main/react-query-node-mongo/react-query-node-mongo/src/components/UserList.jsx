import ModalEdit from './EditModal'
import ModalDelete from './DeleteModal'
import { Table } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useGetUsersQuery } from "../features/users/userSlice"


const UserList = () => {
    // reduxtoolkit query
    const { data } = useGetUsersQuery()
    const navigate = useNavigate();
    const handleLink = () => {
        navigate(`addUser`)
    }

    return (
        <>
            <h1 className='text-center my-3'>Redux Toolkit Query</h1>
            <div className="container w-75 p-3 border border-2 border-dark rounded">
                <h1 className='text-center mb-3'>User List</h1>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Details</th>
                            <th>Edit Details</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td><Link to={`/user/${user._id}`} >View Details</Link></td>
                                    <td><ModalEdit userID={user._id} /></td>
                                    <td><ModalDelete userID={user._id} /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <div className='text-center'>
                    <button className='d-block mx-auto my-2 btn btn-outline-primary' onClick={handleLink}>Add New User</button>
                </div>
            </div>
        </>
    );
}

export default UserList;