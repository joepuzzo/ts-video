import { useEffect, useRef } from 'react';
import { Reminder} from './Reminder';

export default function Heading({newSyntax, setNewSyntax}) {

  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if(window.pageYOffset > 470 ){
        console.log(window.pageYOffset);
        ref.current.classList.add('sticky')
      } else {
        ref.current.classList.remove('sticky')
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{display: "flex", width: "100%"}} ref={ref}>
      <h2 style={{ width: "100%"}}>JavaScript</h2>
      <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", position: "relative"}}>
        <div style={{ position: "absolute", left: "0px", display: "flex", alignItems: "center" }}>
          <Reminder />
        </div>
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