import User from "./User";
import Userjs from "./Userjs";
import userAsString from './User.tsx?raw';
import userjsAsString from './Userjs.jsx?raw';
import Code from '../Code';

function Index(){
  return (
    <>
      <User firstName="Robot" lastName="JS" dateOfBirth={new Date("2022-01-01")} />  
      <Userjs firstName="Robot" lastName="JS" dateOfBirth={new Date("2022-01-01")} />
      <Code input1={userjsAsString} input2={userAsString}/>
    </>
  )
}

export default Index;