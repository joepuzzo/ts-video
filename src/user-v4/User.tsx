import React, { ReactNode, ComponentType, MouseEventHandler, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData = ({ children }: TableDataProps) => {
  return <td>{children}</td>;
};

const addOne = (v: number) => {
  return v + 1;
}

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  thing: ReactNode;
  Button: ComponentType<ButtonProps>;
}

export const RedButton = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'red'}}>
      Add One
    </button>
  )
}

function User({ firstName, lastName, dateOfBirth, thing, Button }: UserProps) {

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
          <TableData>TypeScript</TableData>
          <TableData>{firstName}</TableData>
          <TableData>{lastName}</TableData>
          <TableData>{dateOfBirth.toDateString()}</TableData>
          <TableData>{count}</TableData>
          <TableData>
            <Button onClick={increment} />
          </TableData> 
          <TableData>{thing}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
