import React, { Children, ReactNode } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
  return <td>{children}</td>;
};

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
