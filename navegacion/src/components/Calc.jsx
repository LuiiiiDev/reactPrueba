import React, { useState } from 'react'


const Calc = () => {


    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [resultado, setResultado] = useState(null)

    const handleSumar = () =>{
        const suma = parseFloat(num1) + parseFloat(num2)
        setResultado(suma)
    }

    const handleRestar = () => {
        const resta = parseFloat(num1) - parseFloat(num2)
        setResultado(resta)
    }

    const handleMultiplicar = () => {
        const multiplicar = parseFloat(num1) * parseFloat(num2)
        setResultado(multiplicar)
    }

    const handelDividir = () => {
        const dividir = parseFloat(num1) / parseFloat(num2)
        setResultado(dividir)
    }

    const handleLimpiar = () => {
        setResultado(null)
        setNum1('')
        setNum2('')
    }
    return (
        <div className="container" style={{ backgroundColor: 'blue', padding: '20px', borderRadius: '10px' }}>
            <div className="input-group mb-3">
                <input
                    type="number"
                    className="form-control"
                    aria-label="Text input with checkbox"
                    placeholder="Número 1"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
            </div>

            <div className="input-group">
                <input
                    type="number"
                    className="form-control"
                    aria-label="Text input with radio button"
                    placeholder="Número 2"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
            </div>
            <br />
            <button type="button" class="btn btn-light" onClick={handleSumar}>Sumar</button>
            <br /><br />
            <button type="button" class="btn btn-light" onClick={handleRestar}>Restar</button>
            <br /><br />
            <button type="button" class="btn btn-light" onClick={handleMultiplicar}>Multiplicar</button>
            <br /><br />
            <button type="button" class="btn btn-light" onClick={handelDividir}>Dividir</button>
            <br /><br />
            <button type="button" class="btn btn-light" onClick={handleLimpiar}>Limpiar</button>
            <br /><br />
            {resultado !== null && <p style={{color: 'white'}}>Resultado: {resultado} </p>}

        </div>
    )
}

export default Calc