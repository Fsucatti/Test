import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pedido from './Components/Pedido'
import Form from './Components/Form'



const datos = [{
  id: 1,
  descripcion: 'Milanesa',
}, {
  id: 2,
  descripcion: 'Hamburguesa',
}, {
  id: 3,
  descripcion: 'Calamares',
}]

const initialState = []
let uniqueId = 0

const App = () => {
  const [pedidos, setPedidos] = useState(initialState)

  function handlePedido(pedido) {
    console.log(pedido)
    const newPedido = {
      id: uniqueId++,
      descripcion: pedido,
    }
    const pedidosActualizados = []
    for (let i = 0; i < pedidos.length; i++) {
      pedidosActualizados.push(pedidos[i])
    }
    pedidosActualizados.push(newPedido)
    setPedidos(pedidosActualizados)
}

  return (
    <>
        <h1>App</h1>
        <Form onPedido={handlePedido}/>
        <div>
            {pedidos.map((pedido) => {
              return (
                  <Pedido
                    key={pedido.id}
                    pedido= {pedido}
                    onDelete={ (id) => {
                      console.log(id)
                      console.log('Pedido Eliminado')
                    }}
                  /> 
                    )
            })}
        </div>
    </>
  )
}

export default App
