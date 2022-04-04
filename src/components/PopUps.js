import React from 'react';
import PropTypes from 'prop-types';
import urlUtils from '../utils/urlUtils';
import userUtils from '../utils/userUtils';
import UserContext from '../context/UserContext';

const DeleteAccount = ({ user, hideBlurBox }) => {
  const [password, setPassword] = React.useState('');
  const [hasFailed, setHasFailed] = React.useState(false);
  const { setKey } = React.useContext(UserContext);
  const removeUser = async () => {
    try {
      const res = await fetch(`/api/user?username=${user}&password=${password}`, { method: 'DELETE' });
      if (res.status === 401) {
        setHasFailed(true);
      }
      hideBlurBox();
      userUtils.logOut(setKey);
      urlUtils.goHome();
    } catch (err) {
      throw new Error(err);
    }
  };

  const changeHandler = (e) => {
    setPassword(e.target.value);
    setHasFailed(false);
  };

  return (
    <div className="inputs-box centered-box">
      <h3>Se eliminará la cuenta</h3>
      <label htmlFor="password">
        Confirma tu contraseña
        <input
          type="password"
          id="password"
          name="password"
          onChange={changeHandler}
          value={password}
        />
      </label>
      {hasFailed && <p className="error-text">Contraseña incorrecta</p>}
      <button type="button" onClick={removeUser}>Aceptar</button>
      <button
        type="button"
        onClick={hideBlurBox}
        className="warning-btn"
      >
        Cancelar
      </button>
    </div>
  );
};

DeleteAccount.propTypes = {
  user: PropTypes.string.isRequired,
  hideBlurBox: PropTypes.func.isRequired,
};

export { DeleteAccount };
