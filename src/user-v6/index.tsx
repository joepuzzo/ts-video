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

function Index(){

  const [newSyntax, setNewSyntax] = useState(false);

  return (
    <>
      <Userjs firstName="Robot" lastName="JS" dateOfBirth={new Date("2022-01-01")} thing={2} Button={BlueButton} disabled color="green"/>
      <User firstName="Robot" lastName="JS" dateOfBirth={new Date("2022-01-01")} thing="Hello" Button={RedButton} disabled color="green"/>  
{/* @ts-ignore */}
<Heading newSyntax={newSyntax} setNewSyntax={setNewSyntax} />
<Code 
input1={
  
`import User from "./User";

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
  thing={2}
  Button={BlueButton} 
  disabled 
  color="green"/>
`} 
input2={ newSyntax ? 
`import User, { ButtonProps } from "./User";

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
  thing="Hello"
  Button={RedButton} 
  disabled 
  color="green"/>
` : 

`import { FC } from "react";
import User, { ButtonProps } from "./User";

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
  thing="Hello"
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