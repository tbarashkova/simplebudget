import React, { useContext } from 'react';

import { AppContext } from '../../providers/context';

import { SettingsWrapper } from './styles';

const Settings = () => {
  const { state, dispatch } = useContext(AppContext);

  const onChange = (e) => {
    const { value } = e.target;
    dispatch({
      type: 'changeCurrency',
      currency: value
    })
  }

  return (
    <SettingsWrapper>
      <form>
        <label>
          <p>Currency</p>

          <select name="currency"
            onChange={onChange}
            value={state.currency}>
            <option value="CZK">Czech koruna</option>
            <option value="USD">US dolar</option>
            <option value="EUR">Euro</option>
          </select>

        </label>
      </form>
    </SettingsWrapper>
  )
}

export default Settings;