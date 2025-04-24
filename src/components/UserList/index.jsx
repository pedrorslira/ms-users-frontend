import { useEffect, useState } from 'react';
import { getUsers } from '../../api/user';
import { toast } from 'react-toastify';

export const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsers();
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
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone || '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
