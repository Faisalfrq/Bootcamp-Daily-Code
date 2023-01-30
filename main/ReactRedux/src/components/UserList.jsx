import { Table, Spinner } from "reactstrap";
import { EditUserModal } from "./EditUserModal";
import { useQuery } from "react-query";

export const UserList = () => {
  async function getUsers() {
    const response = await fetch("http://localhost:3001/users");
    return response.json();
  }

  const { data, isLoading } = useQuery("users", getUsers);
  if (isLoading) {
    return <Spinner size="sm" />;
  }
  return (
    <div>
      <h1>React Query</h1>
      <h1>User List</h1>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            data.map((d, idx) => {
              return (
                <tr key={idx}>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.age}</td>
                  <td>
                    <EditUserModal buttonLabel="Edit" id={d.id} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
