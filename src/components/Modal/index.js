import React, { useRef } from "react";

import { Backdrop, Content } from './styles'
import Portal from "../Portal"

const Modal = ({ open, onClose, children }) => {
  const backdrop = useRef(null);
  if (!open) {
    return null;
  };

  const onClick = (e) => {
    if (backdrop.current === e.target) {
      onClose();
    }
  }

  return (
    <Portal>
      <Backdrop ref={backdrop} onClick={onClick}>
        <Content>
          {children}
        </Content>
      </Backdrop>
    </Portal>
  )
}

export default Modal;