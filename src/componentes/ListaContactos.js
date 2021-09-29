import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import db from '../firebase/firebaseConfig';
import Contacto from './Contacto';

const ListaContactos = () => {
    const [contactos, cambiarContactos] = useState([
        {id: 1, nombre: 'Daniel', correo: 'daniel@daniel.com' },
        {id: 2, nombre: 'Victor', correo: 'victor@victor.com' }
    ]);

    useEffect(() => {
        db.collection('usuarios').onSnapshot((snapshot) => {
            cambiarContactos(snapshot.docs.map((documento) => {
                return {...documento.data(), id: documento.id}
            }));
        });
    }, []);

    return (
        contactos.length > 0 &&
        <ContenedorContactos>
            {contactos.map((contacto) => (
                <Contacto
                    key={contacto.id}
                    id={contacto.id}
                    nombre={contacto.nombre}
                    correo={contacto.correo} />
            ))}
        </ContenedorContactos>
    );
}

const ContenedorContactos = styled.div`
    margin-top: 40px;
`;
export default ListaContactos;