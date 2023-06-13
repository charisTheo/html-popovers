import { useMemo, useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { createPopId, paragraphs } from './util';
import Popover from './Popover';
import Popper from './Popper';

import './Pops.css';

const MODES = {
  POPOVER: 'POPOVER',
  POPPER: 'POPPER',
}

function Content() {
  const controlsRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState(searchParams.get('mode') || MODES.POPOVER)

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.showPopover();
    }
  }, [controlsRef])

  const Paragraphs = useMemo(() => paragraphs.map((p, pi) => {
    const words = p.split(" ");
    const text = words.reduce((acc, cur, i) => {
      var output = cur;

      if (i % 5 === 0) {
        const Component = mode === MODES.POPOVER ? Popover : Popper;
        const id = createPopId(cur, pi, i)
        output = <Component key={id} text={cur} id={id} />
      }

      return <>{acc}{" "}{output}</>
    }, <></>)

    return <p key={`p-${pi}`}>{text}</p>
  }), [mode])

  const handleModeToggle = (e) => {
    searchParams.set('mode', e.target.value)
    setSearchParams(searchParams)
    setMode(e.target.value)

    // Put the controls popover as the topmost layer after the rest of the popovers have been rendered
    requestIdleCallback(() => {
      if (e.target.value === MODES.POPOVER) {
        controlsRef.current.hidePopover();
        controlsRef.current.showPopover();
      }
    })
  };

  const onPopoverBackdropsToggle = (e) => {
    searchParams.set('backdrops', e.target.checked)
    setSearchParams(searchParams)
  }

  return (
    <main>
      <div id='controls' ref={controlsRef} popover="manual">
        <label>
          Popovers
          <input
            onChange={handleModeToggle}
            type='radio'
            name='mode'
            value={MODES.POPOVER}
            checked={mode === MODES.POPOVER}
            data-checked={mode === MODES.POPOVER}
          />
        </label>
        <label>
          Poppers
          <input
            onChange={handleModeToggle}
            type='radio'
            name='mode'
            value={MODES.POPPER}
            checked={mode === MODES.POPPER}
            data-checked={mode === MODES.POPPER}
          />
        </label>

        <label>popover::backdrop
          <input
            type='checkbox'
            name='popover-backdrops'
            defaultChecked={searchParams.get('backdrops') === 'true'}
            onChange={onPopoverBackdropsToggle}
          />
        </label>
      </div>

      {Paragraphs}
    </main>
  );
}

export default Content;
