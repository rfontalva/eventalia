import React, {useState} from 'react';
import urlUtils from '../utils/urlUtils'
import Login from '../components/Login';

const Home = () => {
  const [show, setShow] = useState(false);
  return(
    <>
      <Login show={show} setShow={setShow}/>
      <h2>Creá eventos, cobrá con mercadopago y controla entradas por QR</h2>
      <button 
        type="button" 
        className='btn-home'
        onClick={() => setShow(true)}>
          Iniciar sesion
      </button>
      <button 
        type="button" 
        className='btn-home'
        onClick={() => urlUtils.goToUrl('signup')}>
          Registrarse
      </button>
    </>
)};

export default Home;