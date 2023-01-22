import React, { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  ModalFooter,
  Form,
  Label,
  FormGroup,
  Input,
} from "reactstrap";

export function CreateUser() {
  const [modal, setModal] = useState(false);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (editUser) => {
      const rawResponse = await fetch(`http://localhost:3001/users/`, {
        method: "Post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editUser),
      });
    },
    {
      onSuccess: () => {
        return queryClient.invalidateQueries(["users"]);
      },
    }
  );

  const query = queryClient.getQueryData("users");
  //   const currentUser = query.add((q) => q.id == props.id);

  const toggle = () => setModal(!modal);

  const handleSubmission = (e) => {
    e.preventDefault();
    const { email, age, user } = e.target.elements;
    console.log(e.target.elements);
    const payload = {
      name: user.value,
      email: email.value,
      age: age.value,
    };
    mutation.mutate(payload);
    toggle();
  };

  return (
    <>
      <Button color="primary" onClick={toggle}>
        Add New User
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Data</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmission}>
            <FormGroup>
              <Label for="userEmail">Email</Label>
              <Input
                id="userEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="userName">Name</Label>
              <Input
                id="userName"
                name="user"
                placeholder="with a placeholder"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="userAge">Age</Label>
              <Input
                id="userAge"
                name="age"
                placeholder="with a placeholder"
                type="number"
              />
            </FormGroup>
            <FormGroup>
              <ModalFooter>
                <Button color="primary" type="submit">
                  Add
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}