import React, { useState } from 'react';

import { Button } from './styles';
import Modal from '../Modal';
import Form from '../Form'

export const ChangeBalance = ({ onChange }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>+</Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Form onChange={onChange} onCloseFormModal={() => setOpenModal(false)} />
      </Modal>
    </>
  )
}