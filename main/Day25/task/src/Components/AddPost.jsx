import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useQueryClient, useMutation } from "react-query";
import { Button, Form, FormGroup, Input } from 'reactstrap';

const AddPost = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    let queryClient = useQueryClient();
    let query = queryClient.getQueryData('posts')

    let handleSubmit=(e)=>{
        e.preventDefault();
        
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
{/*                     
                    <FormGroup>
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </FormGroup> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit'>Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddPost