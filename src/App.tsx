import { useState } from 'react'
import { Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import './App.css'
import UserV1 from './user-v1';
import UserV2 from './user-v2';
import UserV3 from './user-v3';

function App() {
  const [count, setCount] = useState(0)
  const version = useLocation().pathname.replace('/', '');

  return (
    <div className="App">
      <Link to="v1">V1</Link>
      <Link to="v2">V2</Link>
      <Link to="v3">V3</Link>
      <main>
        <h1>Why Not Typescript {version}</h1>
        <Routes>
          <Route path="/" element={<Navigate to="v1"/>} />
          <Route path="/v1" element={<UserV1 />} />
          <Route path="/v2" element={ <UserV2 />}/>
          <Route path="/v3" element={ <UserV3 />}/>
        </Routes>        
      </main>
    </div>
  )
}

export default App
