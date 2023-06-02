import { useState } from "react"
import style from './Form.module.css'

/**
 * 
 * @param {*} onPedido funcion que recibe el pedido 
 * @returns 
 */

function Form(props) {
    const [plato, setPlato] = useState("")
    const [bebida, setBebida] = useState("")
    const [error, setError] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        if (!plato) {
            console.error('El campo esta vacio.')
            setError('El campo esta vacio.')
            return
        }
        setError()
        console.log('Formulario enviado')
        props.onPedido(plato)
    }

    function handleChange(e) {
        console.log(e.target.value)
        setPlato(e.target.value)
    }


    return (
        <>
        <h2 >Elegi tu pedido</h2>
        <form className={style.form} onSubmit={handleSubmit}>
            <label htmlFor="plato">Plato: </label>
            <input 
            type="text" 
            id="plato" 
            value={plato} 
            onChange={handleChange}
            />
            {error && <p>{error}</p>}
            <button type="submit">Agregar</button>
        </form>
        <form className={style.form} onSubmit={handleSubmit}>
            <label htmlFor="bebida">Bebida: </label>
            <input 
            type="text" 
            id="bebida" 
            value={bebida} 
            onChange={handleChange}
            />
            {error && <p>{error}</p>}
            <button type="submit">Agregar</button>
        </form>
        </>
    )
}

export default Form