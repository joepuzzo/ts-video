import React, { useEffect, useRef, useState } from "react";
import TooltipPopover from "./TooltipPopover";
import Portal from "./Portal";
import useOutsideAlerter from "../hooks/useOutsideAlerter";

export const Info = ({ifoRef, ...props}) => {
  return (
    <div className="info" ref={ifoRef} {...props} >
      <small className="infoIcon">i</small>
    </div>
  );
};

export const Tooltip = ({ children, title, openOnMount }) => {
  const [isOn, setOn] = useState(false); // toggles dropdown visibility
  const [coords, setCoords] = useState({}); // takes current button coordinates
  const triggerElem = useRef();
  const tooltipRef = useRef();
  const offsetRef = useRef(0);

  useOutsideAlerter(()=> setOn(false), tooltipRef, triggerElem);

  const updateTooltipCoords = (button) => {
    const rect = button.getBoundingClientRect();
    setCoords({
      left: rect.x + rect.width / 2 - offsetRef.current, // add half the width of the button for centering
      top: rect.y + window.scrollY - 10 // add scrollY offset, as soon as getBountingClientRect takes on screen coords
    });
  };

  useEffect(()=>{
    if(openOnMount){
      offsetRef.current = 5;
      updateTooltipCoords(triggerElem.current);
      setOn(true);
    }
  },[])

  return (
    <div className="ml-1">
      <Info
        ifoRef={triggerElem}
        onClick={(e) => {
          offsetRef.current = 0;
          updateTooltipCoords(e.target);
          setOn(!isOn);
        }}
      />
      {isOn && (
        <Portal>
          <TooltipPopover
            coords={coords}
            tooltipRef={tooltipRef}
            title={title}
            updateTooltipCoords={() =>
              updateTooltipCoords(btnRef.current.buttonNode)
            }
          >
            <div>
              {children}
            </div>
          </TooltipPopover>
        </Portal>
      )}
    </div>
  );
};