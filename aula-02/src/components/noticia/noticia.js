import Image from "./image";
import Text from "./txt";

function Noticia(props) {
  return (
    <div className="row">
      <div className="col-3">
        <Image image={props.image} />
      </div>
      <div className="col-9">
        <Text titulo={props.titulo} texto={props.texto} />
      </div>
    </div>
  );
}

export default Noticia;
