import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { FormWrapper, Value, DateInput, Button, Comment } from './styles'

const Form = (props) => {

  const [form, setForm] = useState({
    value: '',
    date: new Date().toISOString().substring(0, 10),
    comment: ''
  })

  const onSubmit = (e) => {
    e.preventDefault();

    props.onChange(form);
    //Clearing form fields
    setForm({
      ...form,
      value: '',
      comment: ''
    })

    props.onCloseFormModal();
  }

  const onChange = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  }

  return (

    <FormWrapper onSubmit={onSubmit}>

      <Value name="value"
        type="number"
        placeholder="Amount..."
        value={form.value}
        onChange={onChange} />

      <DateInput type="date"
        name="date"
        value={form.date}
        onChange={onChange} />

      <Comment name="comment"
        maxLength='200'
        placeholder="Comment..."
        value={form.comment}
        onChange={onChange} />

      <Button>Save</Button>

    </ FormWrapper>
  )
}

Form.propTypes = {
  onChange: PropTypes.func,
}

export default Form;