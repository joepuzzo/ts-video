// User.tsx
import React, { ReactNode, ComponentType, MouseEventHandler, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
  return <td className="td-class">{children}</td>;
};

const addOne = (v: number) => {
  return v + 1;
}

export interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  Button: ComponentType<ButtonProps>;
}

function User({ firstName, lastName, dateOfBirth, Button }: UserProps) {

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
          <TableData>TypeScript</TableData>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
          <TableData>{count}</TableData>
          <TableData>
            <Button onClick={increment} />
          </TableData> 
        </tr>
      </tbody>
    </table>
  );
}

export default User;
