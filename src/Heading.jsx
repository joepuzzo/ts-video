export default function Heading({newSyntax, setNewSyntax}) {
  return (
    <div style={{display: "flex", width: "100%"}}>
      <h2 style={{ width: "100%"}}>JavaScript</h2>
      <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", position: "relative"}}>
          <h2>TypeScript</h2>
          <div style={{ position: "absolute", right: "0px", display: "flex", alignItems: "center" }}>
            <strong>Verbose</strong>
            <label className="switch">
              <input type="checkbox" checked={newSyntax} onChange={(e) => setNewSyntax(e.target.checked) } />
              <span className="slider round"></span>
            </label>
            <strong>Simple</strong>
          </div>
      </div>
    </div>
  )
}