import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;

function UseOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
  icon: RefObject<any>
) {
  useEffect(() => {
    let handlerFunction = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node) && 
      icon.current && !icon.current.contains(e.target as Node)) {
        handler(e);
      }      
    };

    document.addEventListener("mousedown", handlerFunction);
    
    return () => {
      document.removeEventListener("mousedown", handlerFunction);
    }
  }, [ref, handler]);
}

export default UseOnClickOutside;