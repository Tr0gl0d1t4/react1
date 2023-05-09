import React from 'react';
import Contacto from './Contacto';
import ComponenteB from './ComponenteB';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacto: {
        nombre: 'Juan',
        apellido: 'Tyson',
        email: 'jTyson@example.com',
        conectado: true,
      },
    };
  }

  render() {
    return (
      <div>
        <Contacto
          nombre={this.state.contacto.nombre}
          apellido={this.state.contacto.apellido}
          email={this.state.contacto.email}
          conectado={this.state.contacto.conectado}
        >
          <ComponenteB contacto={this.state.contacto} />
        </Contacto>
      </div>
    );
  }
}

export default App;
