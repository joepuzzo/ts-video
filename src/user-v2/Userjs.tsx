import React from "react";

// @ts-ignore
const TableData = ({ children }) => {
  return <td>{children}</td>;
};

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
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
