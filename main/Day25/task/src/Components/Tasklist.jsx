import React from 'react'
import { useQuery } from "react-query";
import { Spinner, Table } from "reactstrap";
import AddPost from './AddPost';
import EditPost from './EditPost';

const Tasklist = () => {
    async function getTasks() {
        const response = await fetch("http://localhost:3004/posts");
        return response.json();
      }
    
      const { data, isLoading, isError } = useQuery("posts", getTasks);
    
      if (isLoading) {
        return <Spinner size="sm" />;
        }
      if (isError){
        return <h1>Something Went WRONG</h1>
      }

  console.log(data);
  return (
    <div>
        <AddPost/>
        <h1>Posts</h1>
        <Table bordered >
        <thead>
            <tr>
                <th> Title </th>
                <th> Author </th>
                <th>Delete/Edit</th>
            </tr>
        </thead>
        <tbody>
        {   
            data.map((item)=>{
                return <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>
                            <button className='btn btn-primary'>
                                Edit
                            </button>
                            <button className='btn btn-danger' > Delete</button>
                        </td>

                        </tr>
            })
        }
        </tbody>
        </Table>
    </div>
  )
}

export default Tasklist