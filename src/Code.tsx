import { useEffect } from "react";

// @ts-ignore
function Code({ input1, input2 }){
  useEffect(()=>{
    // @ts-ignore
    Prism.highlightAll();
  },[])
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