import React from "react";

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

function User({ firstName, lastName, dateOfBirth }: UserProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Written With</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>TypeScript</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{dateOfBirth.toDateString()}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
