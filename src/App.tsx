import { useState } from 'react'
import { Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import './App.css'
import UserV1 from './user-v1';
import UserV2 from './user-v2';
import UserV3 from './user-v3';
import UserV4 from './user-v4';
import UserV5 from './user-v5';
import UserV6 from './user-v6';
import UserV7 from './user-v7';
// @ts-ignore
import {Description} from './Description';
// @ts-ignore
import { useApp } from './AppProvider';

function App() {
  const [count, setCount] = useState(0)
  const version = useLocation().pathname.replace('/', '');
  const { lineNumbers, setLineNumbers } = useApp();

  return (
    <div className="App">
      <nav>
        <Link to="v1">V1</Link>
        <Link to="v2">V2</Link>
        <Link to="v3">V3</Link>
        <Link to="v4">V4</Link>
        <Link to="v5">V5</Link>
        <Link to="v6">V6</Link>
        <Link to="v7">V7</Link>
        <div style={{ position: "absolute", right: "30px", display: "flex", alignItems: "center" }}>
            <strong>Show Line Numbers</strong>
            <label className="switch">
              <input type="checkbox" checked={lineNumbers} onChange={(e) => setLineNumbers(e.target.checked) } />
              <span className="slider round"></span>
            </label>
          </div>
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
          <Route path="v7" element={ <UserV7 />}/>
        </Routes>        
      </main>
    </div>
  )
}

export default App
