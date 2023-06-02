import styles from './Pedido.module.css'


function Pedido(props){
    function handleCLick() {
        console.log('Click en Eliminar')
        props.onDelete(props.pedido.id)
    }

    return (
        <div className={styles.card}>
            <h2>{props.pedido.descripcion}</h2>
            <button onClick={handleCLick}>Eliminar</button>
        </div>
    )

}

export default Pedido