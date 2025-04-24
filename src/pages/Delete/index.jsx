import React from "react";
import { UserDeletionForm } from "../../components/UserDeletionForm";

export default function CreateUser() {
  return (
    <div className="create-user-container">
      <div className="create-user-form-wrapper">
        <UserDeletionForm />
      </div>
    </div>
  );
}
