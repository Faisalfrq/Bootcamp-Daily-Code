import React from "react";
import { Model } from "./Model";
import { useQuery } from "react-query";
import { Spinner, Table } from "reactstrap";

const Userlist = () => {
  async function getUsers() {
    const response = await fetch("http://localhost:3001/users");
    return response.json();
  }

  const { data, isLoading } = useQuery("users", getUsers);
  if (isLoading) {
    <Spinner size="sm" />;
  }
  console.log(data);
  return (
    <>
      <h1>React Query</h1>
      <h3>User List</h3>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            data.map((e,index) => (
              <tr key={index}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.age}</td>
                <td>
                  <Model id={e.id} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default Userlist;