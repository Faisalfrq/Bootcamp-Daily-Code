import { Table } from "reactstrap"
import { useGetUserByIdQuery } from "../features/users/userSlice"
import { useParams, useNavigate } from "react-router-dom"

const UserDetail = () => {
    const { id } = useParams();
    const { data } = useGetUserByIdQuery(id)
    const navigate = useNavigate();
    const handleLink = () => {
        navigate('/')
    }

    return (
        <>
            <h1 className='text-center my-3'>React Query</h1>
            <div className="container w-75 p-3 border border-2 border-dark rounded">
                <h1 className='text-center mb-3'>User Detail</h1>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data?.user.name}</td>
                            <td>{data?.user.email}</td>
                            <td>{data?.user.age}</td>
                        </tr>
                    </tbody>
                </Table>
                <div className='text-center'>
                    <button className='d-block mx-auto my-2 btn btn-outline-primary' onClick={handleLink}>Back</button>
                </div>
            </div>
        </>
    );
}

export default UserDetail;