import React, { useState } from "react";

const TableData = ({ children }) => {
  return <td>{children}</td>;
};

const addOne = (v) => {
  return v + 1;
}

function User({ firstName, lastName, dateOfBirth }) {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount( prevCount => addOne(prevCount) );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Written With</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Count</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableData>JavaScript</TableData>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
          <TableData>{count}</TableData>
          <TableData>
            <button onClick={increment}>
              Add One
            </button>
          </TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
