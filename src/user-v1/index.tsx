import User from "./User";
import Userjs from "./Userjs";
import userAsString from './User.tsx?raw';
import userjsAsString from './Userjs.jsx?raw';
import Code from '../Code';

function Index(){
  return (
    <>
      <Userjs firstName="Robot" lastName="JS" dateOfBirth={new Date("2022-01-01")} />
      <User firstName="Robot" lastName="JS" dateOfBirth={new Date("2022-01-01")} />  
{/* @ts-ignore */}
<Code 
input1={
`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`} 
input2={
`<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} />
`}/>
      <br />
      <Code input1={userjsAsString} input2={userAsString}/>
    </>
  )
}

export default Index;