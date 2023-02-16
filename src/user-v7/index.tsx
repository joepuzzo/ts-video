import User, { ButtonProps } from "./User";
// @ts-ignore
import Userjs from "./Userjs";
import userAsString from './User.tsx?raw';
import userjsAsString from './Userjs.jsx?raw';
import userOldAsString from './UserOld.tsx?raw';
import Code from '../Code';
// @ts-ignore
import Heading from '../Heading';
import { useState } from "react";

// @ts-ignore
const BlueButton = ({ onClick, color, disabled }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'blue', color }} disabled={disabled}>
      Add One
    </button>
  )
}

const RedButton = ({ onClick, color, disabled }: ButtonProps) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'red', color }} disabled={disabled}>
      Add One
    </button>
  )
}

// Note: in line type definition
const Sum = ({ a, b }: { a: number, b: number }) => {
  return (
    <strong>{a + b}</strong>
  )
} 

// Note: interface definition
interface MathProps {
  a: number, 
  b: number
}

const Difference = ({ a, b }: MathProps) => {
  return (
    <strong>{a - b}</strong>
  )
} 

const Product = ({ a, b }: MathProps) => {
  return (
    <strong>{a * b}</strong>
  )
} 

function Index(){

  const [newSyntax, setNewSyntax] = useState(false);

  return (
    <>
      <Userjs 
        firstName="Robot" 
        lastName="JS" 
        dateOfBirth={new Date("2022-01-01")} 
        thing={<Sum a={24} b={4} />} 
        Button={BlueButton} 
        disabled 
        color="green"/>
      <User 
        firstName="Robot" 
        lastName="JS" 
        dateOfBirth={new Date("2022-01-01")} 
        thing={<Difference a={24} b={4} />} 
        Button={RedButton} 
        disabled 
        color="green"/>  
{/* @ts-ignore */}
<Heading newSyntax={newSyntax} setNewSyntax={setNewSyntax} />
<Code 
input1={
  
`import User from "./User";

const Sum = ({ a, b }) => {
  return (
    <strong>{a + b}</strong>
  )
} 

const Difference = ({ a, b }) => {
  return (
    <strong>{a - b}</strong>
  )
} 

const Product = ({ a, b }) => {
  return (
    <strong>{a * b}</strong>
  )
} 

const BlueButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ backgroundColor: 'blue', color }} 
      disabled={disabled}>
      Add One
    </button>
  )
}

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} 
  thing={<Sum a={24} b={4} />} 
  Button={BlueButton} 
  disabled 
  color="green"/>
`} 
input2={ newSyntax ? 
`import User, { ButtonProps } from "./User";

interface MathProps {
  a: number, 
  b: number
}

const Sum = ({ a, b }: MathProps) => {
  return (
    <strong>{a + b}</strong>
  )
} 

const Difference = ({ a, b }: MathProps) => {
  return (
    <strong>{a - b}</strong>
  )
} 

// Note: this uses inline type definition
const Product = ({ a, b }: { a: number, b: number}) => {
  return (
    <strong>{a * b}</strong>
  )
} 

const RedButton = ({ onClick }: ButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      style={{ backgroundColor: 'red', color }} 
      disabled={disabled}>
      Add One
    </button>
  )
}

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")}
  thing={<Difference a={24} b={4} />} 
  Button={RedButton} 
  disabled 
  color="green"/>
` : 

`import { FC } from "react";
import User, { ButtonProps } from "./User";

interface MathProps {
  a: number, 
  b: number
}

const Sum: FC<MathProps> = ({ a, b }) => {
  return (
    <strong>{a + b}</strong>
  )
} 

const Difference: FC<MathProps> = ({ a, b }) => {
  return (
    <strong>{a - b}</strong>
  )
} 

// Note: this uses inline type definition
const Product: FC<{ a: number, b: number}> = ({ a, b }) => { 
  return (
    <strong>{a * b}</strong>
  )
} 

const RedButton: FC<ButtonProps> = ({ onClick, color, disabled  }): JSX.Element => {
  return (
    <button 
      onClick={onClick} 
      style={{ backgroundColor: 'red', color }} 
      disabled={disabled}>
      Add One
    </button>
  )
}

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")}
  thing={<Difference a={24} b={4} />} 
  Button={RedButton}
  disabled 
  color="green"/>
`
}/>
      <br />
      <Code input1={userjsAsString} input2={newSyntax ? userAsString : userOldAsString}/>
    </>
  )
}

export default Index;