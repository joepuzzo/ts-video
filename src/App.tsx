import { useState } from 'react'
import { Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import './App.css'
import UserV1 from './user-v1';
import UserV2 from './user-v2';
import UserV3 from './user-v3';
import UserV4 from './user-v4';
import UserV5 from './user-v5';
import UserV6 from './user-v6';
// @ts-ignore
import {Description} from './Description';

function App() {
  const [count, setCount] = useState(0)
  const version = useLocation().pathname.replace('/', '');

  return (
    <div className="App">
      <nav>
        <Link to="v1">V1</Link>
        <Link to="v2">V2</Link>
        <Link to="v3">V3</Link>
        <Link to="v4">V4</Link>
        <Link to="v5">V5</Link>
        <Link to="v6">V6</Link>
      </nav>
      <main>
        <div className="flex">
          <h1>Why Not Typescript {version}</h1>
          <Description />
        </div>
        {/* <StatusMessage>
          Hello World
        </StatusMessage> */}
        <Routes>
          <Route path="/" element={<Navigate to="v1"/>} />
          <Route path="v1" element={<UserV1 />} />
          <Route path="v2" element={ <UserV2 />}/>
          <Route path="v3" element={ <UserV3 />}/>
          <Route path="v4" element={ <UserV4 />}/>
          <Route path="v5" element={ <UserV5 />}/>
          <Route path="v6" element={ <UserV6 />}/>
        </Routes>        
      </main>
    </div>
  )
}

export default App
