
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useQueryClient, useMutation } from "react-query";
import { Button, Form, FormGroup, Input } from 'reactstrap';
// import { ToastContainer, toast } from 'react-toastify';

const EditPost = (prop) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let queryClient = useQueryClient();
    let query = queryClient.getQueryData('posts')

    let currentData = query.find(q => q.id === prop.id)
    console.log("CurrentData==" + currentData)
    let mutation= useMutation(
        async (editUser) => {
            const rawResponse = await fetch(`http://localhost:3004/posts/${prop.id}`, {
              method: "Put",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(editUser),
            });
        },
        {
            onSuccess: () => {
              return queryClient.invalidateQueries(["posts"]);
            },
        }
    )
        
    let handleSubmit = (e) => {
        e.preventDefault();
        setShow(false);
        let {title,author} = e.target.elements;
        let result= {
            title: title.value,
            author: author.value
        }
        console.log(result)
        mutation.mutate(result)

    }
    return (
        <div>
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
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Author</Form.Label>
                                <Form.Control as="textarea" rows={3}/>
                                
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'>Understood</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default EditPost