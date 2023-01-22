import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Form,
    FormGroup,
    Label,
  } from "reactstrap";
  import { useState } from "react";
  import { useQueryClient } from "react-query";
   //import './model.css'
  
  export const Model = (props) => {
    const [modal, setModal] = useState(false);
    const queryClient = useQueryClient()
    const query=queryClient.getQueryData('users')
    const currentUser=query.find(q=> q.id === props.id)
    console.log(currentUser)
    const toggle = () => setModal(!modal);
    const handleSubmit = (e) => {
      e.preventdefautl()
      console.log("HAHAHHAHAHAHAH")
    }
    return (
      <>
        <Button color="dark" onClick={toggle}>
          Edit
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...props}>
          <ModalHeader toggle={toggle}>Edit User</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  name="name"
                  type="text"
                  id="name"
                  defaultValue={currentUser.name}
                />
                <Label for="email" className="mt-4">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={currentUser.email}
                />
                <Label for="age" className="mt-4">
                  Age
                </Label>
                <Input
                  id="age"
                  name="age"
                  type="text"
                  defaultValue={currentUser.age}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary" onClick={toggle}>
              Update
            </Button>
            <Button color="secondary" onClick={toggle}>
              Discard
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };