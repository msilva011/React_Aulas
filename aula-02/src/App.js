import React from "react";
import Noticia from "./components/noticia/noticia";

function App() {
  const [noticias, setNoticias] = React.useState([]);

  function carregar() {
    setNoticias([
      {
        imagem: "https://picsum.photos/200/300?grayscale",
        titulo: "Titulo 1",
        texto:
          "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        imagem: "https://picsum.photos/200/300?grayscale",
        titulo: "Titulo 2",
        texto:
          "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ]);
  }
  return noticias.length >= 2 ? (
    <div className="container">
      <button onClick={carregar}> Carregar Noticias</button>
      <Noticia
        image={noticias[0].imagem}
        titulo={noticias[0].titulo}
        texto={noticias[0].texto}
      />
      <Noticia
        image={noticias[1].imagem}
        titulo={noticias[1].titulo}
        texto={noticias[1].texto}
      />
    </div>
  ) : (
    <div className="container">
      <button onClick={carregar}> Carregar Noticias</button>
      <div>Sem Noticias</div>
    </div>
  );
}

export default App;
