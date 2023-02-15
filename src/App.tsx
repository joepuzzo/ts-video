import { useState } from 'react'
import { Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import './App.css'
import UserV1 from './user-v1';
import UserV2 from './user-v2';
import UserV3 from './user-v3';
import UserV4 from './user-v4';
import UserV5 from './user-v5';
import UserV6 from './user-v6';
import {StatusMessage} from './StatusMessage';
import { Tooltip } from './Tooltip';

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
        <h1>Why Not Typescript {version}</h1>
        {/* <StatusMessage>
          Hello World
        </StatusMessage> */}
         <div className="flex">
          <h3>Remind Me</h3>
          <Tooltip title="Info">
          <div>
            <ul style={{ paddingLeft: 0, textAlign: 'left', gap: '20px' }}>
              <li>
                ReactElement - <code>{"interface ReactElement<P, T>"}</code>
                <br />
                A ReactElement is an object with <code>type: T</code>, <code>props: P</code>, and key <code>key: string | number | null</code> attributes.
              </li>
              <li>
                JSX.Element - <code>{"extends React.ReactElement<any, any>"}</code>
                <br />
                A more generic version of ReactElement where props and type are of type <code>any</code>
              </li>
              <li>
                ReactNode - <code>{"ReactNode = ReactElement | ReactFragment | boolean | null | undefined ...;"}</code>
                <br />
                A ReactNode is a ReactElement, a ReactFragment, a string, a number, an array of ReactNodes, null, undefined, or a boolean.
              </li>
              <li>
                FC - <code>{"type FC<P> = FunctionalComponent<P>"}</code>
                <br />
                A type to describe a react functional component that was originally added to "Provides an explicit return type" 
                <br/>
                However, recently it is of many opinions to NOT use it anymore see <a href="https://github.com/facebook/create-react-app/pull/8177">here</a> where it was removed from create react app.
              </li>
            </ul>
          </div>
          </Tooltip>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="v1"/>} />
          <Route path="/v1" element={<UserV1 />} />
          <Route path="/v2" element={ <UserV2 />}/>
          <Route path="/v3" element={ <UserV3 />}/>
          <Route path="/v4" element={ <UserV4 />}/>
          <Route path="/v5" element={ <UserV5 />}/>
          <Route path="/v6" element={ <UserV6 />}/>
        </Routes>        
      </main>
    </div>
  )
}

export default App
