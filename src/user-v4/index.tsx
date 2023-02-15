import User, { RedButton } from "./User";
// @ts-ignore
import Userjs, { BlueButton } from "./Userjs";
import userAsString from './User.tsx?raw';
import userjsAsString from './Userjs.jsx?raw';
import userOldAsString from './UserOld.tsx?raw';
import Code from '../Code';
// @ts-ignore
import Heading from '../Heading';
import { useState } from "react";

function Index(){

  const [newSyntax, setNewSyntax] = useState(false);

  return (
    <>
      <Userjs firstName="Robot" lastName="JS" dateOfBirth={new Date("2022-01-01")} thing={2} Button={BlueButton}/>
      <User firstName="Robot" lastName="JS" dateOfBirth={new Date("2022-01-01")} thing="Hello" Button={RedButton}/>  
{/* @ts-ignore */}
<Heading newSyntax={newSyntax} setNewSyntax={setNewSyntax} />
<Code 
input1={
`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} 
  thing={2}
  Button={BlueButton} />
`} 
input2={
`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")}
  thing="Hello"
  Button={RedButton} />
`}/>
      <br />
      <Code input1={userjsAsString} input2={newSyntax ? userAsString : userOldAsString}/>
    </>
  )
}

export default Index;