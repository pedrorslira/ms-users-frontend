import { useState } from "react";
import { getUser } from "../../api/user";
import { toast } from "react-toastify";
import "./styles.css";

export const GetUserForm = () => {
  const [id, setId] = useState("");
  const [user, setUser] = useState(null);

  const handleGet = async () => {
    try {
      const fetchedUser = await getUser(id);
      setUser(fetchedUser);
      toast.success("User found!");
    } catch (error) {
      console.error(error);
      setUser(null);
      toast.error("User not found");
    }
  };

  return (
    <div className="get-user-form">
      <input
        type="text"
        name="id"
        placeholder="User ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={handleGet}>Get User</button>

      {user && (
        <div className="user-card">
          <h3>User Details</h3>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      )}
    </div>
  );
};
