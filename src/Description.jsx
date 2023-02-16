
import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useApp, useVisited } from './AppProvider';
import { Info, Tooltip } from './Tooltip';

const V1 = () => {

  const { firstTime } = useVisited('v1');

  return (
    <Tooltip title="Info" openOnMount={firstTime}>
      <div>
        <ul style={{ paddingLeft: 0, textAlign: 'left', gap: '20px' }}>
          <li>
            Create a user component that shows firstName, lastName, and dateOfBirth. First name and last name are strings, date is a JS date object.
          </li>
          <li>
            The key difference between the two is that we needed to define <code>UserProps</code> in the Typescript code
          </li>
          <li>
            Also, take note of the switch toggle "verbose" vs "simple". This will show you two different variations of things might be typed in the wild.
            Specifically in this example, note how we have a return type of <code>ReactNode</code> in verbose but not in simple. 
            <br />
            <div style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
              <div><strong>Note: </strong>Click on the</div>
              Reminder <Info />
              icon below at any time to help remind yourself how the react types work.
            </div>
          </li>
        </ul>
      </div>
    </Tooltip>
  )
}

const V2 = () => {
  const { firstTime } = useVisited('v2');

  return (
    <Tooltip title="Info" openOnMount={firstTime}>
      <div>
        <ul style={{ paddingLeft: 0, textAlign: 'left', gap: '20px' }}>
          <li>
            We want to style every <code>td</code>(table data) item in our table.
          </li>
          <li>
            We could do this by adding <code>className="td-class"</code> to every <code>td</code> line.
          </li>
          <li>
            A better way is to, create a reusable table data component that adds a class to the <code>td</code> element.
          </li>
          <li>
            Note in the TypeScript code we needed to define <code>TableDataProps</code>
          </li>
        </ul>
      </div>
    </Tooltip>
  )
}

const V3 = () => {
  const { firstTime } = useVisited('v3');

  return (
    <Tooltip title="Info" openOnMount={firstTime}>
      <div>
        <ul style={{ paddingLeft: 0, textAlign: 'left', gap: '20px' }}>
          <li>
            We want to add a count and "Add One" button action that will increment the count column.
          </li>
          <li>
            Note how we added an <code>addOne</code> helper function outside of the component.
          </li>
          <li>
            Also toggle the "verbose" vs "simple" toggle and see how many of the things we write can use type inference.
          </li>
          <li>
            Specifically see how the <code>useState</code> code becomes identical to the pure JS code!
          </li>
        </ul>
      </div>
    </Tooltip>
  )
}

const V4 = () => {
  const { firstTime } = useVisited('v4');

  return (
    <Tooltip title="Info" openOnMount={firstTime}>
      <div>
        <ul style={{ paddingLeft: 0, textAlign: 'left', gap: '20px' }}>
          <li>
            Previously we always rendered a simple hard coded button in the action column. 
            Now, we want the ability for the developer to pass in their own <code>Button</code> component.
          </li>
        </ul>
      </div>
    </Tooltip>
  )
}

export const Description = () => {
  return (
    <Routes>
      <Route path="v1" element={ <V1 />} />
      <Route path="v2" element={ <V2 />}/>
      <Route path="v3" element={ <V3 />}/>
      <Route path="v4" element={ <V4 />}/>
      <Route path="v5" element={ <V1 />}/>
      <Route path="v6" element={ <V1 />}/>
    </Routes>       
  )
}