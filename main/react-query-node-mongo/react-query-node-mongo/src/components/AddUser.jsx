import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useAddUserMutation } from "../features/users/userSlice"

const AddUser = () => {
    const navigate = useNavigate()
    const [addUser] = useAddUserMutation()

    const handleSubmit = (event) => {
        event.preventDefault();
        const {
            name: { value: userName },
            email: { value: userEmail },
            age: { value: userAge }
        } = event.target.elements;

        addUser({
            name: userName,
            email: userEmail,
            age: userAge
        })
        navigate('/')
    }

    return (
        <>
            <div className="container w-50 mx-auto my-3">
                <h1 className="mb-3 text-center">React Query</h1>
                <div className="my-2 p-3 border border-2 border-dark rounded">
                    <Form onSubmit={handleSubmit}>
                        <h1 className="text-center">Add New User</h1>
                        <FormGroup>
                            <Label for="userName">
                                User Name
                            </Label>
                            <Input
                                id="userName"
                                name="name"
                                placeholder="User Name"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="userEmail">
                                User Email
                            </Label>
                            <Input
                                id="userEmail"
                                name="email"
                                placeholder="User Email"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="userAge">
                                User Age
                            </Label>
                            <Input
                                id="userAge"
                                name="age"
                                placeholder="User Age"
                                type="text"
                            />
                        </FormGroup>
                        <Button className='d-block mx-auto' color='primary' outline>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default AddUser;