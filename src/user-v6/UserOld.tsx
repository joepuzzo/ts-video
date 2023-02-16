// User.tsx
import React, { FC, ReactNode, ComponentType, ButtonHTMLAttributes, useState } from "react";

interface TableDataProps {
  children: ReactNode;
  color?: string;
}

const TableData: FC<TableDataProps> = ({ children, color }): JSX.Element => {
  return <td className="td-class" style={{ color }}>{children}</td>;
};

const addOne = (v: number): number => {
  return v + 1;
}

// Note: we use "type" and we use "&" so we can combine two types
export type ButtonProps = { 
  color?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>; 

interface UserProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  thing: ReactNode;
  Button: ComponentType<ButtonProps>;
  disabled?: boolean;                 // Note: ? means optional
  color?: string;                     // Note: ? means optional
}

function User({ firstName, lastName, dateOfBirth, thing, Button, disabled, color }: UserProps): ReactNode {

  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount( (prevCount: number) => addOne(prevCount) );
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
