import { useState } from "react";
import { deleteUser } from "../../api/user";
import { toast } from "react-toastify";
import "./styles.css";

export const UserDeletionForm = () => {
    const [id, setId] = useState("");

    const handleDelete = async () => {
        try {
            await deleteUser(id);
            toast.success("User deleted successfully!");
        } catch (error) {
            console.error(error);
            toast.error(error.response.data?.message || 'Failed to delete user');
        }
    };

    return (
        <div className="delete-user-form">
            <input
                type="text"
                name="id"
                placeholder="User ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button onClick={handleDelete}>Delete User</button>
        </div>
    );
};
