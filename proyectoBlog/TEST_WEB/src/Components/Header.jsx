function Header({carrito, eliminardelCarrito,incrementarCantidad,reducirCantidad}) {
   const totalCuenta =() => carrito.reduce((total,pack)=> total+(pack.cantidad*pack.price),0)
  return (
    <>
    <section className="hero">
    <header className="contenido-hero">
        <div className="header-left">
            <h1 className="titulo">My PhotoBlog</h1>
        </div>
        <div className="header-right">
            <nav className="navegacion-principal">
                <a href="eventos.html">Eventos</a>
                <a href="paquetes.html">Paquetes</a>
                <a href="trabajos.html">Trabajos</a>
                <div className="carrito">
                        <img src="carrito.png" alt="imagen carrito" />
                        <div id="carrito">
                            {carrito.length === 0 ? (
                            <p className="centrar-texto">No hay contenido en tu carrito</p>
                            ) : (
                                <>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="fuenteLigera centrar-texto ">Imagen</th>
                                        <th className="fuenteLigera centrar-texto ">Nombre</th>
                                        <th className="fuenteLigera centrar-texto ">Precio</th>
                                        <th className="fuenteLigera centrar-texto ">Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carrito.map(photoPack => (
                                        <tr key={photoPack.id}>
                                            <td>
                                                <img src="pkg01.png" alt="Paquete fotografico" />
                                            </td>
                                            <td>{photoPack.title}</td>
                                            <td className="negrita">${photoPack.price}</td>
                                            <td className="centrar-texto">
                                                <button type="button" className="restarBoton" onClick={()=>reducirCantidad(photoPack.id)}>-</button>
                                                {photoPack.cantidad}
                                                <button type="button" className="sumarBoton" onClick={()=>incrementarCantidad(photoPack.id)}>+</button>
                                            </td>
                                            <td>
                                                <button type="button" className="eliminarBoton" onClick={()=>eliminardelCarrito(photoPack.id)}>X</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="centrar-texto">Total pagar: <span className='Negrita'>${totalCuenta()}</span></p>
                            <button className="boton__pequeno boton--secundario">Vaciar Carrito</button>
                            </>
                            )}
                           
                        </div>
                    </div>              
            </nav>
        </div>
    </header>
    <div className="subtitulo">
        <h2>Blog de Fotografía</h2>
        <p>Información relevante del mundo de la fotografía digital</p>
    </div>
</section>
</>
  );
}

export default Header;
