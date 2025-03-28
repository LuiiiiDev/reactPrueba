import React, { useState } from "react";

const Listado = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [carnet, setCarnet] = useState('');

    const addEstudiante = () => {
        if (nombre.trim() === '' || edad.trim() === '' || carnet.trim() === '') return;

        setEstudiantes([...estudiantes, { id: Date.now(), nombre, edad, carnet }]);
        setNombre('');
        setEdad('');
        setCarnet('');
    };

    const deleteEstudiante = (id) => {
        setEstudiantes(estudiantes.filter(estudiante => estudiante.id !== id));
    };

    return (
        <>
            <div style={{
                backgroundColor: '#CDCDCD',
                padding: '40px',
                minHeight: '400px',
                width: '80%',
                margin: 'auto',
                borderRadius: '20px'
            }}>
                <h1>Registro de Estudiantes</h1>
                <br />
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Nombre</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Edad"
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Edad</label>
                </div>
                <div className="form-floating">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Carnet"
                        value={carnet}
                        onChange={(e) => setCarnet(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Carnet</label>
                </div>
                <br />
                <button type="button" className="btn btn-primary" onClick={addEstudiante}>Agregar</button>

                <br /><br />
                <h1>Listado:</h1>
                <ul>
                    {estudiantes.map((estudiante) => (
                        <li key={estudiante.id}>
                            {estudiante.nombre} - {estudiante.edad} años - Carnet: {estudiante.carnet}
                            <button 
                                onClick={() => deleteEstudiante(estudiante.id)}
                                style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px', cursor: 'pointer' }}>
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Listado;
