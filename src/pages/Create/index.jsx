import React from "react";
import { UserCreationForm } from "../../components/UserCreationForm";
import "./styles.css";

export default function CreateUser() {
  return (
    <div className="create-user-container">
      <div className="create-user-form-wrapper">
        <UserCreationForm />
      </div>
    </div>
  );
}
