import { useEffect } from 'react';
import { createPopper } from '@popperjs/core';

function Popper({ text, id }) {
  // const [popperOpen, setPopperOpen] = useState(false)

  useEffect(() => {
    const popperButton = document.getElementById(`button-${id}`);
    const popperTooltip = document.getElementById(`tooltip-${id}`);
    const popperInstance = createPopper(popperButton, popperTooltip, { placement: 'top' });

    return () => {
      popperInstance.destroy()
    }
  }, [id])

  return (
    <>
      <button id={`button-${id}`} className='popper-button'>
        {text}
      </button>

      <span id={`tooltip-${id}`} className='popper-tooltip'>
        <small>{text} popper</small>
        <button className='close-button'>
          <span aria-hidden="true">❌</span>
          <span className="sr-only">Close</span>
        </button>
      </span>
    </>
  )
}

export default Popper;