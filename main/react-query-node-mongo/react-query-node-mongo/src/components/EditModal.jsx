import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import { useGetUsersQuery, useUpdateUserByIdMutation } from '../features/users/userSlice';


const ModalEdit = ({ userID }) => {
    const { data } = useGetUsersQuery()
    const currentUser = data?.users.find(u => u._id === userID)
    const [updateUserById] = useUpdateUserByIdMutation()
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const handleSubmit = (event) => {
        event.preventDefault();
        const {
            name: { value: userName },
            email: { value: userEmail },
            age: { value: userAge }
        } = event.target.elements;
        updateUserById({
            id: userID,
            payload: {
                name: userName,
                email: userEmail,
                age: userAge
            }
        })
        toggle();
    }

    return (<>
        <Button color="warning" onClick={toggle}>
            Edit
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit User Details</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="userName">
                            User Name
                        </Label>
                        <Input
                            id="userName"
                            name="name"
                            placeholder="User Name"
                            type="text"
                            defaultValue={currentUser.name}
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
                            defaultValue={currentUser.email}
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
                            defaultValue={currentUser.age}
                        />
                    </FormGroup>
                    <Button className='d-block mx-auto' color='primary' outline>
                        Submit
                    </Button>
                </Form>
            </ModalBody>
            <ModalFooter>
                {/* <Button type='submit' color="primary" onClick={handleSubmit}>
                    Update
                </Button>{' '} */}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    </>);
}

export default ModalEdit;