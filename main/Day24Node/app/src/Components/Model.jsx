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
  import { useMutation, useQueryClient } from "react-query";
  // import './Model.css'
  
  export const Model = (props) => {
    const [modal, setModal] = useState(false);
    const queryClient = useQueryClient();
    const mutation = useMutation(
      async (editUser) => {
        const rawResponse = await fetch(
          `http://localhost:3001/users/${props.id}`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editUser),
          }
        );
      },
      {
        onSuccess: () => {
          return queryClient.invalidateQueries(["users"]);
        },
      }
    );
    const query = queryClient.getQueryData("users");
    const currentUser = query.find((q) => q.id === props.id);
  
    const toggle = () => setModal(!modal);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const { age, email, name } = e.target.elements;
      const payload = {
        name: name.value,
        age: age.value,
        email: email.value,
      };
      mutation.mutate(payload);
      toggle();
    };
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
              <FormGroup>
                <ModalFooter>
                  <Button type="submit" color="primary">
                    Update
                  </Button>
                  <Button type="" color="primary">
                    Update
                  </Button>
                  <Button color="secondary" onClick={toggle}>
                    Discard
                  </Button>
                </ModalFooter>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  };