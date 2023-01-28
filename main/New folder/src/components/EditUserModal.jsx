import { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { useQueryClient, useMutation } from 'react-query'

export const EditUserModal = (props) => {
    const [modal, setModal] = useState(false)
    const qClient = useQueryClient()
    const mutation = useMutation(async editUser => {
        const rawResponse = await fetch(`http://localhost:3001/users/${props.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editUser)
        });
    }, {
        onSuccess: () => {
            return qClient.invalidateQueries('users')
        }
    })
    const query = qClient.getQueryData('users')
    const currentUser = query.find(q => q.id === props.id)

    const toggle = () => {
        setModal(!modal)
    }
    const handleSubmission = (e) => {
        e.preventDefault()
        const { age, email, user } = e.target.elements
        const payload = {
            name: user.value,
            age: age.value,
            email: email.value
        }
        mutation.mutate(payload)
        toggle()
    }
    return (
        <div>
            <Button color="danger" onClick={toggle}>{props.buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Modal</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmission}>
                        <FormGroup>
                            <Label for="userName">Name</Label>
                            <Input
                                type="text"
                                name="user"
                                id="userName"
                                defaultValue={currentUser.name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="userEmail">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="userEmail"
                                defaultValue={currentUser.email}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="userAge">Age</Label>
                            <Input
                                type="number"
                                name="age"
                                id="userAge"
                                defaultValue={currentUser.age}
                            />

                        </FormGroup>
                        <FormGroup>
                            <ModalFooter>
                                <Button color="primary" type='submit'>Update</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

