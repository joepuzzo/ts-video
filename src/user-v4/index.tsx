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
const BlueButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'blue'}}>
      Add One
    </button>
  )
}

const RedButton = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'red'}}>
      Add One
    </button>
  )
}

function Index(){

  const [newSyntax, setNewSyntax] = useState(false);

  return (
    <>
      <Userjs firstName="Robot" lastName="JS" dateOfBirth={new Date("2022-01-01")} Button={BlueButton}/>
      <User firstName="Robot" lastName="JS" dateOfBirth={new Date("2022-01-01")} Button={RedButton}/>  
{/* @ts-ignore */}
<Heading newSyntax={newSyntax} setNewSyntax={setNewSyntax} />
<Code 
input1={
  
`import User from "./User";

const BlueButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'blue'}}>
      Add One
    </button>
  )
}

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} 
  Button={BlueButton} />
`} 
input2={ newSyntax ? 
`import User, { ButtonProps } from "./User";

const RedButton = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'red'}}>
      Add One
    </button>
  )
}

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")}
  Button={RedButton} />
` : 

`import { FC } from "react";
import User, { ButtonProps } from "./User";

const RedButton: FC<ButtonProps> = ({ onClick }): JSX.Element => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'red'}}>
      Add One
    </button>
  )
}

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")}
  Button={RedButton} />
`
}/>
      <br />
      <Code input1={userjsAsString} input2={newSyntax ? userAsString : userOldAsString}/>
    </>
  )
}

export default Index;