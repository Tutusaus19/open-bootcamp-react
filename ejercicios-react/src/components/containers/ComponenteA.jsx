import React from 'react'
import ComponenteB from '../pures/ComponenteB'
import {Contacto} from '../../models/contacto'

const ComponenteA = () => {
    const defaultContact = new Contacto('Carlos', 'Tutusaus', 'carlostutusaus98@gmail.com', false);

  return (
    <div>
      <div>
        My contact:
      </div>
      <ComponenteB contacto={defaultContact}></ComponenteB>
    </div>
  )
}

export default ComponenteA;
