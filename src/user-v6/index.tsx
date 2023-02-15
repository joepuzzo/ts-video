import User, { RedButton } from "./User";
// @ts-ignore
import Userjs, { BlueButton } from "./Userjs";
import userAsString from './User.tsx?raw';
import userjsAsString from './Userjs.jsx?raw';
import Code from '../Code';

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
  return (
    <>
      <Userjs 
        firstName="Robot" 
        lastName="JS" 
        dateOfBirth={new Date("2022-01-01")} 
        thing={<Sum a={24} b={4} />} 
        Button={BlueButton} 
        disabled />
      <User 
        firstName="Robot" 
        lastName="JS" 
        dateOfBirth={new Date("2022-01-01")} 
        thing={<Difference a={24} b={4} />} 
        Button={RedButton} 
        color="black"/>  
{/* @ts-ignore */}
<Code 
input1={
`
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

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")} 
  thing={<Sum a={24} b={4} />} 
  Button={BlueButton} 
  disabled />
`} 
input2={
`// Note: in line type definition
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

<User 
  firstName="Robot" 
  lastName="JS" 
  dateOfBirth={new Date("2022-01-01")}
  thing={<Difference a={24} b={4} />} 
  Button={RedButton}  
  color="black" 
  />
`}/>
      <br />
      <Code input1={userjsAsString} input2={userAsString}/>
    </>
  )
}

export default Index;