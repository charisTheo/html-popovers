import { block } from 'million/react';
import { useEffect, useRef } from "react";

function Popover({ text, id }) {
  const popoverRef = useRef();

  // Open all popovers by default with showPopover() - there is no browser API for default open
  useEffect(() => {
    if (popoverRef.current) {
      popoverRef.current.showPopover();
    }
  }, [popoverRef])

  return (
    <>
      <button 
        className='popover-button' 
        popovertarget={id}
        style={{ anchorName: `--anchor-${id}` }}
      >
        {text}
      </button>

      <span 
        popover="manual"
        ref={popoverRef}
        id={id}
        style={{
          anchorDefault: `--anchor-${id}`,
          anchorScroll: `anchor(--anchor-${id})`,
        }}
      >
        <small>{text} popover</small>
        <button className='close-button' popovertarget={id} popovertargetaction="hide">
          <span aria-hidden="true">❌</span>
          <span className="sr-only">Close</span>
        </button>
      </span>
    </>
  )
}

export default block(Popover);