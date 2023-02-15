
import { Tooltip } from './Tooltip';
import Code from './Code';

export const Reminder = () => {
  return (
    <div className="flex">
    <h3>Reminder</h3>
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
          However, recently it is of many opinions to NOT use it anymore, see <a href="https://github.com/facebook/create-react-app/pull/8177">here</a> where it was removed from create react app.
          <br />
          {/* @ts-ignore */}
          <Code input1={`const Component1 = (props: ComponentProps): JSX.Element => { /*...*/ } // Without FC             
const Component2: FC<ComponentProps> = (props) => { /*...*/ }          // With FC                 
const Component3 = (props: ComponentProps): => { /*...*/ }             // Today with type inference`} />
        </li> 
      </ul>
    </div>
    </Tooltip>
  </div>
  )
}