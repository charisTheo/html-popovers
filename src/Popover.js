import { useEffect, useRef } from "react";

function Popover({ text, id }) {
  const ref = useRef();

  // Open all popovers by default with showPopover() - there is no browser API for default open
  useEffect(() => {
    if (ref.current) {
      ref.current.showPopover();
    }
  }, [ref])

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
        ref={ref}
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

export default Popover;