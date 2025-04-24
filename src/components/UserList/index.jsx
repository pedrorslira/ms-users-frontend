import { useEffect, useState } from 'react';
import { getUsers } from '../../api/user';
import { toast } from 'react-toastify';

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        console.log(data)
        setUsers(data);
      } catch (err) {
        console.error(err);
        toast.error('Error loading users');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-4">
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.id} - {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};