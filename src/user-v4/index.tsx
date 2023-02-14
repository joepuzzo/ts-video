import User, { RedButton } from "./User";
import Userjs, { BlueButton } from "./Userjs";
import userAsString from './User.tsx?raw';
import userjsAsString from './Userjs.jsx?raw';
import Code from '../Code';

function Index(){
  return (
    <>
      <Userjs firstName="Robot" lastName="JS" dateOfBirth={new Date("2022-01-01")} thing={2} Button={BlueButton}/>
      <User firstName="Robot" lastName="JS" dateOfBirth={new Date("2022-01-01")} thing="Hello" Button={RedButton}/>  
{/* @ts-ignore */}
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
      <Code input1={userjsAsString} input2={userAsString}/>
    </>
  )
}

export default Index;