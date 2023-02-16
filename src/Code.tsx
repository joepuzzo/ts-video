import { useEffect } from "react";
// @ts-ignore
import { useApp } from './AppProvider';

// @ts-ignore
function Code({ input1, input2 }){

  const { lineNumbers } = useApp();

  useEffect(()=>{
    // @ts-ignore
    Prism.highlightAll();
  },[input1, input2, lineNumbers])


  if(!input2){
    return (
      <div>
         <pre className="language-jsx">
          <code className="language-jsx">
            {input1}
          </code>
        </pre>
      </div>
    )
  }

  const numberClass = lineNumbers ? 'line-numbers' : '';

  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', width: '100%'}}>
      <pre className={`language-jsx ${numberClass}`} style={{flex: '1', minWidth: '600px'}}>
        <code className={`language-jsx ${numberClass}`}>
          {input1}
        </code>
      </pre>
      <pre className={`language-jsx ${numberClass}`} style={{flex: '1', minWidth: '600px'}}>
        <code className={`language-jsx ${numberClass}`}>
          {input2}
        </code>
      </pre>
    </div>

  )
}

export default Code;