import React from "react";
import { UserForm } from "../../components/UserForm";
import "./styles.css";

export default function CreateUser() {
  return (
    <div className="create-user-container">
      <div className="create-user-form-wrapper">
        <UserForm />
      </div>
    </div>
  );
}
