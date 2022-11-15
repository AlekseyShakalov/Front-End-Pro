import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getUsers } from "../api";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  const handleShowMore = (id) => () => navigate(`/users/${id}`);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, firstName, lastName, email, phone }) => (
          <tr key={id}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
              <button type="button" onClick={handleShowMore(id)}>
                Show more
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;
