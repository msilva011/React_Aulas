import { useRef } from "react";
import { useParams } from "react-router-dom";
import { editTarefa } from "../Functions/editTarefa";

export default function EditarPage() {
  const nome = useRef(null);
  const { id } = useParams();

  return (
    <>
      <h1>Tarefa {id}</h1>
      <span>nome</span>
      <input type="text" ref={nome} placeholder="Nome" />
      <button onClick={() => editTarefa(id, nome.current.value)}>Editar</button>
    </>
  );
}
