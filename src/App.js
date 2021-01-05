import React, { Fragment, useState } from "react";
import Carrito from "./components/Carrito";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Producto from "./components/Producto";

function App() {
  // crear listado de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa VueJS", precio: 40 },
    { id: 3, nombre: "Camisa NodeJS", precio: 30 },
    { id: 4, nombre: "Camisa Angular", precio: 20 },
  ]);

  // Obtener la fecha
  const [carrito, setCarrito] = useState([]);

  // const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Titulo Virtual" />

      <h1>Lista de Productos</h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          setCarrito={setCarrito}
        />
      ))}

      <Carrito carrito={carrito} setCarrito={setCarrito}/>

      <Footer />
    </Fragment>
  );
}

export default App;
