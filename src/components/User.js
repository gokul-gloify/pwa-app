import React, {useState, useEffect} from "react";
import { Table } from "react-bootstrap";

const User = () => {
  const [data, setData] = useState();
  const [mode, setMode] = useState("online");
  const [userData, setUserData] = useState();

  const url = "https://jsonplaceholder.typicode.com/users";


  useEffect(() => {
    fetch(url).then((response) => {
      response.json().then((result) => {
        console.info(result);
        setData(result);
        setUserData(result);
        localStorage.setItem("Result", JSON.stringify(result));
      });
    }).catch((err) => {
      let collection = localStorage.getItem("Result");
      setData(JSON.parse(collection) ? JSON.parse(collection) : userData);
    });

    if (!navigator.onLine) {
      setMode("offline");
    }
  }, [url, userData]);

  return (
    <div className="container mt-5">
      { mode === "offline" ?
      <>

        <div class="alert alert-danger" role="alert">
        <h1>You are watching Offline Datas</h1>
      </div>
      </> : null
      }
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>userName</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          { data && data.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))

          } 
        </tbody>
      </Table>
    </div>
  );
};

export default User;
