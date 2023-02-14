import React, { FC, ReactNode, useState } from "react";

interface TableDataProps {
  children: ReactNode;
}

const TableData: FC<TableDataProps> = ({ children }) => {
  return <td>{children}</td>;
};

const addOne = (v: number): number => {
  return v + 1;
}

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

function User({ firstName, lastName, dateOfBirth }: UserProps): ReactNode {

  // Note: Look mom ... no types ...
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount( (prevCount: number) => addOne(prevCount) );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Count</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
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
