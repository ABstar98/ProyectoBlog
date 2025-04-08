import { useState } from "react";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pack from "./components/Pack";
import { db } from "./data/db";
import { db2 } from "./data/db2";
 
function App() {

const [data, setData] = useState(db)
const [data2, setData2] = useState(db2)
const [carrito, setCarrito] = useState([])

function agregarAlCarrito(pack){
const existeElemento =carrito.findIndex((packPhoto)=> packPhoto.id === pack.id)

if (existeElemento >= 0){
  const carritoActualizado =[... carrito]
  carritoActualizado[existeElemento].cantidad++
  setCarrito(carritoActualizado)
}
else{
  pack.cantidad= 1
  setCarrito([...carrito, pack])
}

}

function eliminardelCarrito(id){
  setCarrito (carritoAnterior =>carritoAnterior.filter(pack=>pack.id !==id))
}

function incrementarCantidad(id){
  const carritoActualizado = carrito.map(pack => {
    if(pack.id === id){
      return{
        ...pack,
        cantidad: pack.cantidad + 1
      }
    }
    return pack
  })
  setCarrito(carritoActualizado)
}

function reducirCantidad(id){
  const carritoActualizado = carrito.map(pack =>{
    if (pack.id === id){
      return{
        ...pack,
        cantidad: pack.cantidad > 1 ? pack.cantidad - 1 : 1
      }
    }
    return pack
  })
  setCarrito(carritoActualizado)
}
  return (
    <>
    <Header
    carrito={carrito}
    eliminardelCarrito={eliminardelCarrito}
    incrementarCantidad={incrementarCantidad}
    reducirCantidad={reducirCantidad}
    />
    <div className="contenedor contenido-principal">
        <main className="blog">
            <h3 className="centrar-texto">Blog</h3>
            {data.map((article)=>(
              <Article
                key={article.id}
                article={article}
              />
            )
            )}
        </main>
        <aside className="sidebar">
            <h3>Paquetes fotográficos</h3>
                <ul className="paquetes no-padding">
                  {data2.map((pack)=>(
                      <Pack
                      key={pack.id}
                      pack={pack}
                      agregarAlCarrito={agregarAlCarrito}
                      />
                  )
                  )}
                </ul>
        </aside>
    </div>
    <Footer/>
</>
  );
}
export default App;
