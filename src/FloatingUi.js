import { useState } from 'react';
import { useFloating, autoUpdate, flip } from '@floating-ui/react';

function FloatingUi({ text, id }) {
  const [isOpen, setIsOpen] = useState(true);
  const {refs, floatingStyles} = useFloating({
    whileElementsMounted: autoUpdate,
    placement: 'top',
    strategy: 'absolute',
    middleware: [flip()],
    open: isOpen
  });

  const togglePopover = () => setIsOpen(!isOpen)

  return (
    <>
      <button onClick={togglePopover} id={`button-${id}`} ref={refs.setReference}>
        {text}
      </button>

      <span
        ref={refs.setFloating}
        id={`tooltip-${id}`}
        className='floating-ui-tooltip'
        style={{...floatingStyles, visibility: isOpen ? 'visible' : 'hidden'}}
      >
        <small>{text} floating</small>
        <button className='close-button' onClick={togglePopover}>
          <span aria-hidden="true">❌</span>
          <span className="sr-only">Close</span>
        </button>
      </span>
    </>
  )
}

export default FloatingUi;