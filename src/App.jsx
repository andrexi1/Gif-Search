import { useState } from "react";
import "./App.css";
import AddCategory from "./components/AddCategory";
import DisplayGifs from "./components/DisplayGifs";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <h1>Buscador de GIFs</h1>
      <p>Encuentra GIFs divertidos, memes y reacciones escribiendo una palabra y buscándolos al instante.</p>

      <h2>Gif Search</h2>
      <AddCategory setCategory={setCategory} />
      <DisplayGifs category={category} />

      <div style={{position:"absolute",left:"-9999px",width:"1px",height:"1px",overflow:"hidden"}}>
        <h1>Buscador de GIFs Online</h1>
        <p>Busca GIFs, memes, reacciones y animaciones usando la API de GIPHY. Palabras clave: buscar gifs, gifs divertidos, gifs memes, buscador de gifs.</p>
      </div>
    </div>
  );
}

export default App;
