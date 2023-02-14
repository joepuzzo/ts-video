import React from "react";

// @ts-ignore
function User({ firstName, lastName, dateOfBirth }) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{dateOfBirth.toDateString()}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
