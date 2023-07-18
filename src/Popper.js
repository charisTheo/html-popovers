import { useEffect, useState } from 'react';
import { createPopper } from '@popperjs/core';

function Popper({ text, id }) {
  const [popperOpen, setPopperOpen] = useState(false)

  useEffect(() => {
    const popperButton = document.getElementById(`button-${id}`);
    const popperTooltip = document.getElementById(`tooltip-${id}`);
    const popperInstance = createPopper(popperButton, popperTooltip, { placement: 'top' });
    setPopperOpen(true);

    return () => {
      popperInstance.destroy()
    }
  }, [id])

  const togglePopper = () => setPopperOpen(!popperOpen)

  return (
    <>
      <button onClick={togglePopper} id={`button-${id}`} className='popper-button'>
        {text}
      </button>

      <span style={{ visibility: popperOpen ? 'visible' : 'hidden'}} id={`tooltip-${id}`} className='popper-tooltip'>
        <small>{text} popper</small>
        <button className='close-button' onClick={togglePopper}>
          <span aria-hidden="true">❌</span>
          <span className="sr-only">Close</span>
        </button>
      </span>
    </>
  )
}

export default Popper;