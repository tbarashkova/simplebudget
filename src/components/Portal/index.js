import React, { useEffect, useMemo } from "react";
import { createPortal } from 'react-dom';

const parent = document.getElementById('modal')

const Portal = ({ children }) => {
  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    parent.appendChild(el);

    return () => {
      parent.removeChild(el);
    }
  }, [el])

  return (
    <>
      {
        createPortal(
          children,
          el
        )
      }
    </>
  )
}

export default Portal;