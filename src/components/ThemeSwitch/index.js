import React, { useContext } from "react";

import { ThemeSwitchWrapper } from './styles';
import { AppContext } from "../../providers/context";
import { saveToStorage } from '../../utils/localStorage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'

export const ThemeSwitch = () => {
  const { state, dispatch } = useContext(AppContext);
  const themeName = state.themeName;

  const setTheme = (themeName) => {
    dispatch({
      type: 'setTheme',
      themeName
    });

    saveToStorage('themeName', themeName);
  }

  const switchTheme = () => {
    const newTheme = themeName === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <>
      <ThemeSwitchWrapper>
        {
          themeName === 'light' ?
            <FontAwesomeIcon onClick={switchTheme} icon={faToggleOn}>Light</FontAwesomeIcon> :
            <FontAwesomeIcon onClick={switchTheme} icon={faToggleOff}>Dark</FontAwesomeIcon>
        }
      </ThemeSwitchWrapper>
    </>
  )
}
