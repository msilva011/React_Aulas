import { useRef } from "react";
import { createTarefa } from "../Functions/createTarefa";

export default function CriarPage() {
  const nome = useRef(null);

  return (
    <>
      <h1>Nova Tarefa</h1>
      <span>nome</span>
      <input type="text" ref={nome} placeholder="Nome" />
      <button onClick={() => createTarefa(nome.current.value)}>Criar</button>
    </>
  );
}
