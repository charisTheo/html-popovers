import { useEffect } from 'react';
import { useFloating, autoUpdate, flip } from '@floating-ui/react';
import { block } from 'million/react';

function FloatingUi({ text, id }) {
  const {refs, floatingStyles} = useFloating({
    whileElementsMounted: autoUpdate,
    placement: 'top',
    strategy: 'absolute',
    middleware: [flip()]
  });

  useEffect(() => {
    
    return () => {
    
    }
  }, [id])

  return (
    <>
      <button id={`button-${id}`} ref={refs.setReference}>
        {text}
      </button>

      <span
        ref={refs.setFloating}
        id={`tooltip-${id}`}
        className='floating-ui-tooltip'
        style={floatingStyles}
      >
        <small>{text} floating</small>
        <button className='close-button'>
          <span aria-hidden="true">❌</span>
          <span className="sr-only">Close</span>
        </button>
      </span>
    </>
  )
}

export default block(FloatingUi);