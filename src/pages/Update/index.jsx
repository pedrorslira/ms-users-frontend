import React from "react";
import { UserUpdateForm } from "../../components/UserUpdateForm";
import "./styles.css";

export default function UpdateUser() {
  return (
    <div className="create-user-container">
      <div className="create-user-form-wrapper">
        <UserUpdateForm/>
      </div>
    </div>
  );
}
