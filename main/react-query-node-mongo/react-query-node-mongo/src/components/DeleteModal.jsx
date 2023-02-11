import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useDeleteUserByIdMutation } from '../features/users/userSlice';

const ModalDelete = ({ userID }) => {
    const [deleteUserById] = useDeleteUserByIdMutation(userID)
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleDelete = () => {
        toggle();
        deleteUserById(userID);
    }

    return (<>
        <Button color="danger" onClick={toggle}>
            Delete
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Delete</ModalHeader>
            <ModalBody>
                Are You Sure
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleDelete}>
                    Yes
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    No
                </Button>
            </ModalFooter>
        </Modal>
    </>);
}

export default ModalDelete;