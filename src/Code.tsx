import { useEffect } from "react";

// @ts-ignore
function Code({ input1, input2 }){
  useEffect(()=>{
    // @ts-ignore
    Prism.highlightAll();
  },[input1, input2])


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

  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
      <pre className="language-jsx" style={{flex: '1', minWidth: '600px'}}>
        <code className="language-jsx">
          {input1}
        </code>
      </pre>
      <pre className="language-jsx" style={{flex: '1', minWidth: '600px'}}>
        <code className="language-jsx">
          {input2}
        </code>
      </pre>
    </div>

  )
}

export default Code;