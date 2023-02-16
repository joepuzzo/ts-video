// User.jsx
import React, { useState } from "react";

const TableData = ({ children, color }) => {
  return <td className="td-class" style={{ color }}>{children}</td>;
};

const addOne = (v) => {
  return v + 1;
}

function User({ firstName, lastName, dateOfBirth, thing, Button, disabled, color }) {

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
          <th>Thing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableData color={color}>TypeScript</TableData>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
          <TableData>{count}</TableData>
          <TableData>
            <Button onClick={increment} disabled={disabled} color={color} />
          </TableData> 
          <TableData>{thing}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
