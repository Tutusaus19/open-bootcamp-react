import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';

const ComponenteB = ({contacto}) => {

    const [connected, setConnected] = useState(false);

    const changeConnection = () => {
        setConnected(current => !current);
    }

    useEffect( () => {
        console.log(connected);
    }, [connected]);

    return (
        <div>
            <h2>
               Nombre: {contacto.first_name} 
            </h2>
            <h2>
                Apellidos: {contacto.second_name}
            </h2>
            <h4>
                Email: {contacto.email}
            </h4>
            <h4>
                Conexión: {connected ? 'El usuario está CONECTADO': 'El usuario está DESCONECTADO'}
            </h4>
            <div>
                    <button  onClick={changeConnection}> CAMBIAR ESTADO </button>
            </div>
        </div>
    )
}

ComponenteB.propTypes = {
    first_name: PropTypes.string,
    second_name: PropTypes.string,
    email: PropTypes.string,
    connected: PropTypes.bool,
}

export default ComponenteB;